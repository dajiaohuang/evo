import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisAcceptedNameIndex, matchColSpecies } from './itis-oomycota-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const releaseRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20')
const registryRoot = join(releaseRoot, 'registry')
const packRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const descriptorPath = join(packRoot, 'itis-oomycota-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-oomycota-sidecar-import-ledger.json')
const PACKAGE_ID = 'protists-chromists'
const COL_OOMYCOTA_ROOT = { id: '5K', scientificName: 'Oomycota', rank: 'phylum', status: 'accepted' }
const ROOTS = [
  { col: { id: '3SH', scientificName: 'Peronosporales', rank: 'order', status: 'accepted', parentId: 'G3' }, itis: { tsn: 13911, scientificName: 'Peronosporales', rank: 'Order', usage: 'accepted' } },
  { col: { id: '3ZZ', scientificName: 'Saprolegniales', rank: 'order', status: 'accepted', parentId: 'G3' }, itis: { tsn: 13837, scientificName: 'Saprolegniales', rank: 'Order', usage: 'accepted' } },
]
const LIMIT = 512 * 1024
const currentQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted' ORDER BY u.tsn`
const synonymQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
), accepted_species(tsn) AS (
  SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted'
) SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types r ON r.kingdom_id = su.kingdom_id AND r.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(r.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}${records.length ? '\n' : ''}`, 'utf8')
const compare = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const part of createReadStream(path)) hash.update(part)
  return hash.digest('hex')
}

async function readGzipJsonLines(path, visitor) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visitor(JSON.parse(line))
}

async function readColScope(registryManifest) {
  const parents = new Map()
  const roots = new Map()
  const selected = []
  const selectedIds = new Set(ROOTS.map((entry) => entry.col.id))
  for (const file of [...registryManifest.hierarchy.nodes.files].sort((left, right) => compare(left.path, right.path))) {
    await readGzipJsonLines(join(registryRoot, ...file.path.split('/')), (record) => {
      if (record.rank !== 'species') parents.set(record.id, record.parentId)
      if (record.id === COL_OOMYCOTA_ROOT.id || selectedIds.has(record.id)) roots.set(record.id, record)
      if (record.rank === 'species' && record.status === 'accepted') selected.push(record)
    })
  }
  const oomyRoot = roots.get(COL_OOMYCOTA_ROOT.id)
  if (!oomyRoot || !Object.entries(COL_OOMYCOTA_ROOT).every(([key, value]) => oomyRoot[key] === value)) throw new Error(`Pinned COL Oomycota root changed: ${JSON.stringify(oomyRoot)}`)
  for (const { col } of ROOTS) {
    const record = roots.get(col.id)
    if (!record || !Object.entries(col).every(([key, value]) => record[key] === value)) throw new Error(`Pinned COL shared order root changed: ${JSON.stringify(record)}`)
    for (let parent = record.parentId; parent; parent = parents.get(parent)) {
      if (parent === COL_OOMYCOTA_ROOT.id) break
      if (!parents.has(parent)) throw new Error(`COL shared order ${record.id} is no longer below Oomycota ${COL_OOMYCOTA_ROOT.id}`)
    }
  }
  const inScope = []
  let requestedCount = 0
  const sharedOrderCounts = new Map(ROOTS.map(({ col }) => [col.id, 0]))
  for (const row of selected) {
    let isRequested = false
    let sharedOrderId = null
    for (let parent = row.parentId; parent; parent = parents.get(parent)) {
      if (parent === COL_OOMYCOTA_ROOT.id) isRequested = true
      if (selectedIds.has(parent)) sharedOrderId = parent
      if (!parents.has(parent)) break
    }
    if (isRequested) requestedCount += 1
    if (sharedOrderId) {
      inScope.push(row)
      sharedOrderCounts.set(sharedOrderId, sharedOrderCounts.get(sharedOrderId) + 1)
    }
  }
  const ids = new Set(inScope.map((row) => row.id))
  if (ids.size !== inScope.length) throw new Error('Selected COL Oomycota order roots overlap')
  return { rows: inScope.sort((left, right) => compare(left.id, right.id)), roots: ROOTS.map(({ col }) => roots.get(col.id)), oomyRoot, requestedCount, sharedOrderCounts }
}

async function readPack(manifest) {
  const rows = []
  for (const file of manifest.files) await readGzipJsonLines(join(releaseRoot, 'resource-packs', ...file.path.split('/')), (row) => rows.push(row))
  if (rows.length !== manifest.acceptedSpeciesCount || new Set(rows.map((row) => row.id)).size !== rows.length) throw new Error('Protists and Chromists package rows changed')
  return rows
}

function readItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootQuery = database.prepare('SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1')
    const parentQuery = database.prepare('SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1')
    const roots = ROOTS.map(({ itis }) => {
      const record = rootQuery.get(itis.tsn)
      if (!record || record.scientific_name !== itis.scientificName || record.rank_name !== itis.rank || record.name_usage !== itis.usage) throw new Error(`Pinned ITIS shared order root changed: ${JSON.stringify(record)}`)
      const parent = parentQuery.get(record.parent_tsn)
      return { record, parent }
    })
    const currentByTsn = new Map()
    const synonymByPair = new Map()
    for (const { itis } of ROOTS) {
      for (const row of database.prepare(currentQuery).all(itis.tsn)) {
        if (currentByTsn.has(String(row.tsn))) throw new Error(`ITIS selected order roots overlap at species TSN ${row.tsn}`)
        currentByTsn.set(String(row.tsn), row)
      }
      for (const row of database.prepare(synonymQuery).all(itis.tsn)) {
        const key = `${row.synonym_tsn}/${row.tsn_accepted}`
        if (synonymByPair.has(key)) throw new Error(`ITIS selected order roots overlap at synonym relationship ${key}`)
        synonymByPair.set(key, row)
      }
    }
    return {
      roots,
      currentRows: [...currentByTsn.values()].sort((left, right) => Number(left.tsn) - Number(right.tsn)),
      synonymRows: [...synonymByPair.values()].sort((left, right) => Number(left.synonym_tsn) - Number(right.synonym_tsn) || Number(left.tsn_accepted) - Number(right.tsn_accepted)),
      maxima: database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get(),
      exactOomycotaRoots: database.prepare('SELECT u.tsn FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(l.completename) = lower(?1) AND lower(trim(r.rank_name)) = lower(?2) AND u.name_usage = ?3').all('Oomycota', 'phylum', 'accepted'),
    }
  } finally {
    database.close()
  }
}

function split(records) {
  const chunks = []
  let chunk = []
  let size = 0
  for (const record of records) {
    const rowSize = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (rowSize > LIMIT) throw new Error(`Row ${record.colUsageId} exceeds shard limit`)
    if (chunk.length && size + rowSize > LIMIT) { chunks.push(chunk); chunk = []; size = 0 }
    chunk.push(record)
    size += rowSize
  }
  if (chunk.length) chunks.push(chunk)
  return chunks
}

function output(path, rows, compressed, source) {
  return {
    path: repoPath(path), records: rows.length,
    firstColUsageId: rows[0]?.colUsageId ?? null, lastColUsageId: rows.at(-1)?.colUsageId ?? null,
    bytes: compressed.length, sha256: sha256(compressed), sourceBytes: source.length, sourceSha256: sha256(source),
  }
}

async function main() {
  const option = process.argv.indexOf('--itis-sqlite')
  if (option < 0 || !process.argv[option + 1]) throw new Error('Usage: node scripts/build-itis-oomycota-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[option + 1])
  const sourceBytes = readFileSync(sourcePath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha = await sha256File(sqlitePath)
  if (sqliteSha !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha}`)
  const registryPath = join(registryRoot, 'manifest.json')
  const packPath = join(packRoot, 'manifest.json')
  const registryBytes = readFileSync(registryPath)
  const packBytes = readFileSync(packPath)
  const ownershipBytes = readFileSync(ownershipPath)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry checksum mismatch')
  const registryManifest = JSON.parse(registryBytes)
  const pack = JSON.parse(packBytes)
  const colScope = await readColScope(registryManifest)
  const packRows = await readPack(pack)
  const packIds = new Set(packRows.map((row) => row.id))
  if (pack.packageId !== PACKAGE_ID || pack.acceptedSpeciesCount !== JSON.parse(ownershipBytes).packageCounts[PACKAGE_ID] || colScope.rows.some((row) => !packIds.has(row.id))) throw new Error('COL Oomycota shared-order scope conflicts with Protists and Chromists package ownership')
  const itis = readItis(sqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS maximum update date mismatch')
  if (itis.exactOomycotaRoots.length !== 0) throw new Error('ITIS now exposes an exact accepted Oomycota phylum root; revise the deliberately narrowed scope')
  const index = createItisAcceptedNameIndex(itis.currentRows, itis.synonymRows)
  const crosswalk = colScope.rows.map((row) => {
    const matched = matchColSpecies(row, index)
    return { status: matched.status, ...matched.record }
  }).sort((left, right) => compare(left.colUsageId, right.colUsageId))
  const represented = new Set(crosswalk.flatMap((row) => row.currentName ? [row.currentName.tsn] : (row.candidates ?? []).map((candidate) => candidate.currentName.tsn)))
  const upstream = itis.currentRows.filter((row) => !represented.has(String(row.tsn))).map((row) => ({
    colUsageId: null,
    currentName: {
      tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage),
      credibilityRating: row.credibility_rtng === null ? null : String(row.credibility_rtng).trim() || null,
      completenessRating: row.completeness_rtng === null ? null : String(row.completeness_rtng).trim() || null,
      currencyRating: row.currency_rating === null ? null : String(row.currency_rating).trim() || null,
      updateDate: row.update_date === null ? null : String(row.update_date).trim() || null,
    },
    basis: 'No strict COL26.8 accepted species below the two exact shared order roots resolves to this current ITIS TSN by current name or official species-synonym evidence.',
  }))
  mkdirSync(packRoot, { recursive: true })
  for (const name of readdirSync(packRoot)) if (/^itis-oomycota-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
  const files = split(crosswalk).map((rows, index) => {
    const path = join(packRoot, `itis-oomycota-sidecar-${String(index).padStart(4, '0')}.jsonl.gz`)
    const sourceRows = jsonlBytes(rows)
    const compressed = Buffer.from(deterministicGzip(sourceRows, { level: 9 }))
    writeFileSync(path, compressed)
    return output(path, rows, compressed, sourceRows)
  })
  const upstreamPath = join(packRoot, 'itis-oomycota-upstream-only-0000.jsonl.gz')
  const upstreamSource = jsonlBytes(upstream)
  const upstreamCompressed = Buffer.from(deterministicGzip(upstreamSource, { level: 9 }))
  writeFileSync(upstreamPath, upstreamCompressed)
  const upstreamFile = { ...output(upstreamPath, upstream, upstreamCompressed, upstreamSource), colOwnership: null, firstTsn: upstream[0]?.currentName.tsn ?? null, lastTsn: upstream.at(-1)?.currentName.tsn ?? null }
  const counts = {
    total: crosswalk.length,
    accepted: crosswalk.filter((row) => row.status === 'accepted').length,
    synonymCurrentNameRedirect: crosswalk.filter((row) => row.status === 'synonym-current-name-redirect').length,
    ambiguous: crosswalk.filter((row) => row.status === 'ambiguous').length,
    unmatched: crosswalk.filter((row) => row.status === 'unmatched').length,
    itisCurrentSpecies: itis.currentRows.length,
    itisSpeciesSynonymLinks: itis.synonymRows.length,
    itisUpstreamOnly: upstream.length,
  }
  const scope = {
    requestedColRoot: { usageId: COL_OOMYCOTA_ROOT.id, scientificName: COL_OOMYCOTA_ROOT.scientificName, rank: COL_OOMYCOTA_ROOT.rank, strictAcceptedSpecies: colScope.requestedCount },
    selectedSharedOrderRoots: colScope.roots.map((record, index) => ({ col: { usageId: record.id, scientificName: record.scientificName, rank: record.rank, parentUsageId: record.parentId }, itis: { tsn: String(itis.roots[index].record.tsn), scientificName: itis.roots[index].record.scientific_name, rank: itis.roots[index].record.rank_name, usage: itis.roots[index].record.name_usage }, colStrictAcceptedSpecies: colScope.sharedOrderCounts.get(record.id) })),
    colStrictAcceptedSpecies: colScope.rows.length,
    packageStrictAcceptedSpecies: pack.acceptedSpeciesCount,
    packageOutOfScopeStrictAcceptedSpecies: pack.acceptedSpeciesCount - colScope.rows.length,
    boundary: 'ITIS 2026-08-26 has no exact accepted Oomycota phylum root. Its broader ancestors for the two shared orders follow an historical Fungi/Myxomycota/Phycomycota path, so they are not treated as an Oomycota root. This sidecar therefore covers only strict COL26.8 accepted species below the two exact shared accepted order roots Peronosporales and Saprolegniales; every other COL Oomycota and every remaining Protists and Chromists species is explicitly out of scope.',
  }
  const exactMatching = {
    normalization: source.importLedger.normalization,
    statuses: {
      accepted: 'The normalized COL name resolves to exactly one accepted ITIS species within the selected shared-order union and directly equals that current ITIS name.',
      'synonym-current-name-redirect': 'The normalized COL name equals official ITIS non-current species-name evidence that resolves to exactly one accepted ITIS species within the selected shared-order union.',
      ambiguous: 'The normalized exact evidence resolves to more than one accepted ITIS species TSN within the selected shared-order union.',
      unmatched: 'No normalized exact accepted-name or official ITIS species-synonym evidence resolves to an accepted ITIS species within the selected shared-order union.',
    },
    prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, taxon-substituted, or broader-lineage matching is used.',
  }
  const rootBoundaryAudit = {
    colOomycotaRoot: { usageId: colScope.oomyRoot.id, scientificName: colScope.oomyRoot.scientificName, rank: colScope.oomyRoot.rank, status: colScope.oomyRoot.status },
    itisExactOomycotaAcceptedPhylumRoots: itis.exactOomycotaRoots.map((row) => String(row.tsn)),
    selectedSharedOrderRoots: itis.roots.map(({ record, parent }, index) => ({
      col: { usageId: colScope.roots[index].id, scientificName: colScope.roots[index].scientificName, rank: colScope.roots[index].rank, parentUsageId: colScope.roots[index].parentId },
      itis: { tsn: String(record.tsn), scientificName: record.scientific_name, rank: record.rank_name, usage: record.name_usage, immediateParent: parent ? { tsn: String(parent.tsn), scientificName: parent.scientific_name, rank: parent.rank_name, usage: parent.name_usage } : null },
    })),
    decision: 'Do not infer an ITIS Oomycota root from a broader historical lineage. Use only the two exact shared accepted order names/ranks, and keep the remaining COL Oomycota species out of scope.',
  }
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
    packageId: PACKAGE_ID,
    scope,
    rootBoundaryAudit,
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching,
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk only for the two shared order roots of the COL26.8 Oomycota partition. It does not assert that ITIS supplies an Oomycota root, or that its historical broader lineage is a usable Oomycota classification. It is not a global oomycete checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.',
      zh: '此 CC0 ITIS 侧车仅是 COL26.8 Oomycota 分区中两个双方精确共有目根的冻结严格命名交叉映射。它不声称 ITIS 提供 Oomycota 根，也不把 ITIS 的历史性更宽谱系当作可用的 Oomycota 分类。它不是全球卵菌名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: LIMIT, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete selected-order ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstreamFile] },
    deliveryProfiles: { web: 'web-light: descriptor, scope, counts, source and immutable file hashes only; no row-level shard is eligible for Pages.', android: 'native-full: descriptor and every non-empty listed COL-ID and upstream-only row shard.', ios: 'native-full: descriptor and every non-empty listed COL-ID and upstream-only row shard.' },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-oomycota-shared-order-nomenclatural-sidecar',
    generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha, colRegistryManifestPath: repoPath(registryPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes), resourcePackManifestPath: repoPath(packPath), resourcePackManifestSha256: sha256(packBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, maximumUpdateDates: itis.maxima },
    matchingContract: exactMatching,
    totals: counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: files, upstreamOnly: upstreamFile },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every non-empty listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(fileURLToPath(import.meta.url)), scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, exact roots, exact SQL, representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields, wider-root inference or fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, output: ledger.output }, null, 2))
}

await main()
