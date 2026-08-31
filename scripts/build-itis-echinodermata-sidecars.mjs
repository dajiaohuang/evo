import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies } from './itis-mammal-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const ROOT = resolve(dirname(SCRIPT_PATH), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/itis-2026-08-26.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const OWNERSHIP_PATH = join(ROOT, 'data/registry/package-species-coverage.json')
const PACKAGE_ROOT = join(ROOT, 'data/packages/invertebrata/echinoderms')
const NOMENCLATURE_ROOT = join(PACKAGE_ROOT, 'nomenclature')
const DESCRIPTOR_PATH = join(NOMENCLATURE_ROOT, 'itis-echinodermata-sidecar.json')
const LEDGER_PATH = join(ROOT, 'data/sources/itis-echinodermata-sidecar-import-ledger.json')
const PACKAGE_ID = 'echinoderms'
const SHARD_SOURCE_LIMIT_BYTES = 2 * 1024 * 1024
const COL_ROOTS = [
  { usageId: 'CHN', scientificName: 'Echinodermata', itisTsn: 156857 },
]

const CURRENT_SPECIES_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng,
  u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d
JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
ORDER BY u.tsn`

const SPECIES_SYNONYM_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted(tsn) AS (
  SELECT u.tsn FROM descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(ROOT.length + 1).replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadColSpecies(manifest) {
  const files = manifest.hierarchy.nodes.files
    .map((file) => join(REGISTRY_ROOT, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
  const parents = new Map()
  const species = []
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    if (record.rank === 'species') {
      if (record.status === 'accepted') species.push(record)
    } else {
      parents.set(record.id, record.parentId)
    }
  })
  const lineage = (record) => {
    const ids = []
    const seen = new Set()
    let id = record.parentId
    while (id) {
      if (seen.has(id)) throw new Error(`COL hierarchy cycle at ${id}`)
      seen.add(id)
      ids.push(id)
      if (!parents.has(id)) throw new Error(`COL hierarchy broken at ${id}`)
      id = parents.get(id)
    }
    return ids
  }
  const byRoot = new Map(COL_ROOTS.map((root) => [root.usageId, []]))
  for (const record of species) {
    const matchingRoots = COL_ROOTS.filter((root) => lineage(record).includes(root.usageId))
    if (matchingRoots.length > 1) throw new Error(`COL root overlap for ${record.id}: ${matchingRoots.map((root) => root.usageId).join(',')}`)
    if (matchingRoots.length === 1) byRoot.get(matchingRoots[0].usageId).push({ ...record, colRootUsageId: matchingRoots[0].usageId, colRootScientificName: matchingRoots[0].scientificName })
  }
  const records = [...byRoot.values()].flat().sort((left, right) => compareCodeUnits(left.id, right.id))
  return { records, byRoot }
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return {
    tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage),
    credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng),
    currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date),
  }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const roots = COL_ROOTS.map((root) => {
      const record = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage, u.parent_tsn
        FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
        JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
        WHERE u.tsn = ?1`).get(root.itisTsn)
      if (!record || record.completename !== root.scientificName || record.rank_name !== 'Phylum' || record.name_usage !== 'valid') {
        throw new Error(`Pinned ITIS ${root.scientificName} root identity changed`)
      }
      return { ...root, record }
    })
    const currentByTsn = new Map()
    const synonymByKey = new Map()
    for (const root of COL_ROOTS) {
      for (const row of database.prepare(CURRENT_SPECIES_QUERY).all(root.itisTsn)) {
        const key = String(row.tsn)
        if (currentByTsn.has(key)) throw new Error(`ITIS root overlap for current species TSN ${key}`)
        currentByTsn.set(key, row)
      }
      for (const row of database.prepare(SPECIES_SYNONYM_QUERY).all(root.itisTsn)) {
        const key = `${row.synonym_tsn}:${row.tsn_accepted}`
        if (!synonymByKey.has(key)) synonymByKey.set(key, row)
      }
    }
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { roots, currentRows: [...currentByTsn.values()].sort((left, right) => Number(left.tsn) - Number(right.tsn)), synonymRows: [...synonymByKey.values()].sort((left, right) => Number(left.synonym_tsn) - Number(right.synonym_tsn) || Number(left.tsn_accepted) - Number(right.tsn_accepted)), maxima }
  } finally {
    database.close()
  }
}

function countStatuses(records) {
  return {
    total: records.length,
    accepted: records.filter((record) => record.status === 'accepted').length,
    synonymCurrentNameRedirect: records.filter((record) => record.status === 'synonym-current-name-redirect').length,
    ambiguous: records.filter((record) => record.status === 'ambiguous').length,
    unmatched: records.filter((record) => record.status === 'unmatched').length,
  }
}

function chunkBySourceBytes(records) {
  const chunks = []
  let chunk = []
  let used = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (bytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId} exceeds the source shard limit`)
    if (chunk.length && used + bytes > SHARD_SOURCE_LIMIT_BYTES) {
      chunks.push(chunk)
      chunk = []
      used = 0
    }
    chunk.push(record)
    used += bytes
  }
  if (chunk.length) chunks.push(chunk)
  return chunks
}

function descriptorFor(path, records, compressed, source) {
  return {
    path: repoPath(path), records: records.length,
    firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null,
    bytes: compressed.length, sha256: sha256(compressed), sourceBytes: source.length, sourceSha256: sha256(source),
  }
}

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-echinodermata-sidecars.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1])
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes)
  const registryManifestPath = join(REGISTRY_ROOT, 'manifest.json')
  const registryBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const ownership = JSON.parse(ownershipBytes)
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  if (!Number.isInteger(ownership.packageCounts[PACKAGE_ID]) || ownership.packageCounts[PACKAGE_ID] <= 0) throw new Error(`Unexpected COL package boundary: ${ownership.packageCounts[PACKAGE_ID]}`)
  const { records: colSpecies, byRoot } = await loadColSpecies(JSON.parse(registryBytes))
  if (colSpecies.length !== ownership.packageCounts[PACKAGE_ID]) throw new Error(`COL root/package mismatch: ${colSpecies.length}/${ownership.packageCounts[PACKAGE_ID]}`)
  if ([...byRoot.values()].some((records) => records.length === 0)) throw new Error('A declared COL root has no accepted species')
  const itis = loadItis(sqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update dates changed: ${JSON.stringify(itis.maxima)}`)
  const index = createItisMammalNameIndex(itis.currentRows, itis.synonymRows)
  const matches = []
  for (const colRecord of colSpecies) {
    const result = matchColSpecies(colRecord, index)
    matches.push({ packageId: PACKAGE_ID, ...result.record, status: result.status, colRootUsageId: colRecord.colRootUsageId, colRootScientificName: colRecord.colRootScientificName })
  }
  matches.sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  if (new Set(matches.map((record) => record.colUsageId)).size !== colSpecies.length) throw new Error('COL records are not uniquely addressable')
  const evidencedTsns = new Set()
  for (const record of matches) {
    if (record.currentName) evidencedTsns.add(record.currentName.tsn)
    for (const candidate of record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  const upstreamOnly = itis.currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({
    colUsageId: null, currentName: currentName(row),
    basis: 'No strict COL26.8 accepted species or official ITIS species-synonym evidence resolves to this current ITIS Echinodermata species; it remains ITIS-only upstream data.',
  }))
  mkdirSync(NOMENCLATURE_ROOT, { recursive: true })
  for (const name of readdirSync(NOMENCLATURE_ROOT)) if (/^itis-(?:echinodermata-sidecar|echinodermata-upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(NOMENCLATURE_ROOT, name))
  const shards = chunkBySourceBytes(matches).map((chunk, index) => {
    const source = jsonlBytes(chunk)
    const compressed = Buffer.from(deterministicGzip(source, { level: 9 }))
    const path = join(NOMENCLATURE_ROOT, `itis-echinodermata-sidecar-${String(index).padStart(4, '0')}.jsonl.gz`)
    writeFileSync(path, compressed)
    return descriptorFor(path, chunk, compressed, source)
  })
  const upstreamSource = jsonlBytes(upstreamOnly)
  const upstreamCompressed = Buffer.from(deterministicGzip(upstreamSource, { level: 9 }))
  const upstreamPath = join(NOMENCLATURE_ROOT, 'itis-echinodermata-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamCompressed)
  const upstreamDescriptor = { ...descriptorFor(upstreamPath, upstreamOnly, upstreamCompressed, upstreamSource), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const countsByRoot = Object.fromEntries(COL_ROOTS.map((root) => [root.scientificName, countStatuses(matches.filter((record) => record.colRootUsageId === root.usageId))]))
  const counts = { ...countStatuses(matches), byRoot: countsByRoot, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
    packageId: PACKAGE_ID,
    scope: {
      colRootUsageIds: COL_ROOTS.map((root) => root.usageId),
      colRootScientificNames: COL_ROOTS.map((root) => root.scientificName),
      colStrictAcceptedSpecies: colSpecies.length,
      colStrictAcceptedSpeciesByRoot: Object.fromEntries([...byRoot.entries()].map(([id, records]) => [COL_ROOTS.find((root) => root.usageId === id).scientificName, records.length])),
      packageStrictAcceptedSpecies: ownership.packageCounts[PACKAGE_ID],
      packageOutOfScopeStrictAcceptedSpecies: 0,
      nonApplicableBoundary: 'This sidecar applies only to the exact COL26.8 Echinodermata CHN usage root. All COL26.8 species outside this root, including other Animalia and non-species records, are non-applicable and are not emitted.',
    },
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(OWNERSHIP_PATH), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsns: Object.fromEntries(COL_ROOTS.map((root) => [root.scientificName, String(root.itisTsn)])), sourceLedgerPath: repoPath(SOURCE_PATH), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: {
        accepted: 'The normalized COL name resolves to exactly one valid ITIS Echinodermata species and directly equals that current ITIS name.',
        'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Echinodermata species.',
        ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Echinodermata species TSN.',
        unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Echinodermata species.',
      },
      prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the declared Echinodermata partition only. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or expert-review record.',
      zh: '此 CC0 ITIS 侧车仅为明确声明的棘皮动物 Echinodermata 分区提供冻结的严格命名交叉映射。它不是最终分类权威、系统发育、物种概念等同性声明、生物档案、化石记录或专家审阅记录。',
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shards },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in one immutable JSONL gzip shard.', files: [upstreamDescriptor] },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(DESCRIPTOR_PATH, descriptorBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-echinodermata-nomenclatural-sidecar',
    generatedFrom: { sourcePath: repoPath(SOURCE_PATH), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(OWNERSHIP_PATH), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { roots: itis.roots.map((root) => ({ usageId: root.usageId, scientificName: root.scientificName, itisTsn: String(root.itisTsn), itisScientificName: root.record.completename, itisRank: root.record.rank_name, itisUsage: root.record.name_usage })), colStrictAcceptedSpecies: colSpecies.length, colStrictAcceptedSpeciesByRoot: descriptor.scope.colStrictAcceptedSpeciesByRoot, packageStrictAcceptedSpecies: ownership.packageCounts[PACKAGE_ID], packageOutOfScopeStrictAcceptedSpecies: 0, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, maximumUpdateDates: itis.maxima },
    queries: { currentSpecies: CURRENT_SPECIES_QUERY, speciesSynonyms: SPECIES_SYNONYM_QUERY },
    matchingContract: descriptor.exactMatching,
    totals: counts,
    outputs: { descriptor: { path: repoPath(DESCRIPTOR_PATH), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: shards, upstreamOnly: upstreamDescriptor },
    deliveryContract: { pagesLight: 'Pages may include only the descriptor and canonical file hashes; row-level JSONL gzip shards are omitted.', androidIosFull: 'Android and iOS complete-data inventories must include this descriptor and every listed row-level shard byte-for-byte.', runtimeChange: 'Data-only import; no runtime, version or release manifest changes.' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: await sha256File(SCRIPT_PATH), deterministic: 'Pinned input checksums, fixed COL and ITIS roots, exact SQL, exact representation-only normalization, Unicode code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(LEDGER_PATH, jsonBytes(ledger))
  console.log(JSON.stringify({ counts, scope: descriptor.scope, outputs: ledger.outputs }, null, 2))
}

await main()
