import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName } from './itis-bigyra-sidecar-lib.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const releaseRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20')
const registryRoot = join(releaseRoot, 'registry')
const packRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-bigyra-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-bigyra-sidecar-import-ledger.json')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const ITIS_ROOT_TSN = 969916
const ITIS_NAME = 'Bigyra'
const COL_ROOT_USAGE_ID = '622CB'
const COL_PACKAGE_ID = 'protists-chromists'
const COL_PACKAGE_ROOTS = ['C', 'Z']
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(records.length ? `${records.map((record) => JSON.stringify(record)).join('\n')}\n` : '', 'utf8')
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

function parseArgs(argv) {
  const options = { registryRoot, packRoot, outputRoot: packRoot, ownershipPath, itisSourceLedgerPath: sourcePath }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--pack-root') options.packRoot = resolve(argv[++index])
    else if (value === '--output-root') options.outputRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.itisSourceLedgerPath = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-bigyra-sidecar.mjs --itis-sqlite <verified ITIS.sqlite> [--pack-root <resource-pack>] [--output-root <resource-pack>]')
  return options
}

async function auditColScope(options) {
  const manifestPath = join(options.registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const files = manifest.hierarchy.nodes.files.map((file) => join(options.registryRoot, ...file.path.split('/'))).sort((left, right) => left.localeCompare(right))
  const nodes = new Map()
  for (const path of files) await eachGzipJsonLine(path, (record) => nodes.set(record.id, record))
  const rootRecord = nodes.get(COL_ROOT_USAGE_ID)
  if (!rootRecord || rootRecord.scientificName !== ITIS_NAME || rootRecord.rank !== 'phylum' || rootRecord.status !== 'accepted') {
    throw new Error('Pinned COL Bigyra root no longer has the expected accepted phylum identity')
  }
  const species = []
  for (const record of nodes.values()) {
    if (record.rank !== 'species' || record.status !== 'accepted') continue
    const visited = new Set()
    for (let ancestor = record.parentId; ancestor; ancestor = nodes.get(ancestor)?.parentId) {
      if (visited.has(ancestor)) throw new Error(`COL hierarchy cycle while resolving ${record.id}`)
      visited.add(ancestor)
      if (ancestor === COL_ROOT_USAGE_ID) { species.push(record); break }
      if (!nodes.has(ancestor)) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestor}`)
    }
  }
  species.sort((left, right) => compareCodeUnits(left.id, right.id))
  const packManifestPath = join(options.packRoot, 'manifest.json')
  const packManifestBytes = readFileSync(packManifestPath)
  const pack = JSON.parse(packManifestBytes)
  if (pack.packageId !== COL_PACKAGE_ID || JSON.stringify(pack.browseRootIds) !== JSON.stringify(COL_PACKAGE_ROOTS)) throw new Error('Pinned COL package is not the Protists and Chromists resource pack')
  const packIds = new Set()
  for (const file of pack.files) await eachGzipJsonLine(join(options.packRoot, file.path.split('/').at(-1)), (record) => {
    if (record.rank !== 'species' || record.status !== 'accepted') throw new Error(`Protists and Chromists pack contains a non-strict species row: ${record.id}`)
    packIds.add(record.id)
  })
  if (species.some((record) => !packIds.has(record.id))) throw new Error('Bigyra species are not all present in the pinned Protists and Chromists package')
  return { manifestPath, manifestBytes, packManifestPath, packManifestBytes, pack, rootRecord, species }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRecord = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE u.tsn = ?1`).get(ITIS_ROOT_TSN)
    if (!rootRecord || rootRecord.scientific_name !== ITIS_NAME || rootRecord.rank_name !== 'Division' || rootRecord.name_usage !== 'accepted') {
      throw new Error('Pinned ITIS Bigyra root TSN no longer has the expected accepted division identity')
    }
    const exactNameCandidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`).all(ITIS_NAME)
    if (exactNameCandidates.length !== 1 || exactNameCandidates[0].tsn !== ITIS_ROOT_TSN) throw new Error(`Pinned ITIS Bigyra exact-name audit changed: ${JSON.stringify(exactNameCandidates)}`)
    const currentSpecies = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
    ) SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted' ORDER BY u.tsn`).all(ITIS_ROOT_TSN)
    const speciesSynonyms = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
    ), accepted_species(tsn) AS (
      SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted'
    ) SELECT s.tsn FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted
      JOIN taxonomic_units u ON u.tsn = s.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(r.rank_name)) = 'species' ORDER BY s.tsn`).all(ITIS_ROOT_TSN)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    if (currentSpecies.length || speciesSynonyms.length) throw new Error('Pinned ITIS Bigyra root no longer has an empty accepted-species partition; rerun with an exact crosswalk implementation')
    return { rootRecord, exactNameCandidates, currentSpecies, speciesSynonyms, maxima }
  } finally { database.close() }
}

function shardDescriptor(path, records, bytes, sourceBytes) {
  return { path: repoPath(path), records: records.length, firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes) }
}

function chunks(records) {
  const result = []; let chunk = []; let used = 0
  for (const record of records) {
    const size = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (size > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId} exceeds source shard limit`)
    if (chunk.length && used + size > SHARD_SOURCE_LIMIT_BYTES) { result.push(chunk); chunk = []; used = 0 }
    chunk.push(record); used += size
  }
  if (chunk.length) result.push(chunk)
  return result
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-bigyra-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.itisSourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditColScope(options)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === COL_PACKAGE_ID)
  const packageCount = ownership.packageCounts?.[COL_PACKAGE_ID]
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== packageCount || packageCount !== col.pack.acceptedSpeciesCount || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(COL_PACKAGE_ROOTS)) throw new Error('Pinned COL package ownership does not match the Protists and Chromists contract')
  const itis = loadItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  const crosswalk = col.species.map((record) => ({ status: 'unmatched', colUsageId: String(record.id), colScientificName: String(record.scientificName), colAuthorship: record.authorship ?? null, exactMatchName: colExactMatchName(record) }))
  const outputRoot = options.outputRoot
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-bigyra-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const files = chunks(crosswalk).map((records, index) => {
    const sourcePayload = jsonlBytes(records); const bytes = Buffer.from(deterministicGzip(sourcePayload, { level: 9 }))
    const path = join(outputRoot, `itis-bigyra-sidecar-${String(index).padStart(4, '0')}.jsonl.gz`)
    writeFileSync(path, bytes); return shardDescriptor(path, records, bytes, sourcePayload)
  })
  const upstreamRecords = []
  const upstreamSource = jsonlBytes(upstreamRecords); const upstreamBytes = Buffer.from(deterministicGzip(upstreamSource, { level: 9 }))
  const upstreamPath = join(outputRoot, 'itis-bigyra-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamBytes)
  const upstreamFile = { ...shardDescriptor(upstreamPath, upstreamRecords, upstreamBytes, upstreamSource), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: crosswalk.length, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: crosswalk.length, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const scope = {
    packageRootUsageIds: COL_PACKAGE_ROOTS, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: COL_ROOT_USAGE_ID,
    colRootScientificName: ITIS_NAME, colStrictAcceptedSpecies: col.species.length, packageStrictAcceptedSpecies: packageCount,
    packageOutOfScopeStrictAcceptedSpecies: packageCount - col.species.length,
    boundary: 'This sidecar covers only strict accepted COL26.8 species descending from exact Bigyra root 622CB. Every other Protists and Chromists species is explicitly out of scope.',
  }
  const rootBoundaryAudit = {
    colRoot: { id: COL_ROOT_USAGE_ID, scientificName: col.rootRecord.scientificName, rank: col.rootRecord.rank, status: col.rootRecord.status },
    selectedItisRoot: { tsn: String(itis.rootRecord.tsn), scientificName: itis.rootRecord.scientific_name, rank: itis.rootRecord.rank_name, usage: itis.rootRecord.name_usage },
    itisExactNameCandidates: itis.exactNameCandidates,
    selectedCurrentSpecies: itis.currentSpecies.length,
    selectedSpeciesSynonymLinks: itis.speciesSynonyms.length,
    decision: 'Use only exact accepted ITIS Bigyra division TSN 969916 and exact accepted COL Bigyra phylum usage 622CB. The selected ITIS root has no accepted species, so no narrower or broader taxon is substituted and every COL row remains unmatched.',
  }
  const exactMatching = {
    normalization: source.importLedger.normalization,
    statuses: {
      accepted: 'Unavailable: the selected exact ITIS Bigyra root has no accepted species from which to derive a current-species partition.',
      'synonym-current-name-redirect': 'Unavailable: the selected exact ITIS Bigyra root has no accepted species and therefore no species-synonym partition.',
      ambiguous: 'Unavailable: the selected exact ITIS Bigyra root has no accepted species from which to derive candidate ambiguity.',
      unmatched: 'The exact COL Bigyra name has no candidate in the empty selected ITIS Bigyra accepted-species index.',
    },
    prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, package-wide or taxon-substituted matching is used.',
  }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: COL_PACKAGE_ID, scope, rootBoundaryAudit,
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), packageManifestPath: repoPath(col.packManifestPath), packageManifestSha256: sha256(col.packManifestBytes), ownershipPath: repoPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), rootNameUsage: itis.rootRecord.name_usage, rootStatus: 'accepted-with-empty-species-partition', sourceLedgerPath: repoPath(options.itisSourceLedgerPath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching,
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar is a frozen exact-name audit for the declared COL26.8 Bigyra partition. The selected exact ITIS Bigyra root has no accepted species, so all COL rows remain explicitly unmatched and no ITIS-only rows are asserted. It is not a global bigyran checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.',
      zh: '此 CC0 ITIS 侧车是 COL26.8 Bigyra 分区的冻结精确名称审计。所选精确 ITIS Bigyra 根节点没有已接受物种，因此所有 COL 行均明确保留为 unmatched，不声明 ITIS-only 行；它不是全球 Bigyra 名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files },
    upstreamOnly: { colOwnership: null, stableAddressing: 'The exact ITIS Bigyra root has no accepted species, so the upstream-only partition is an explicit empty immutable JSONL gzip shard.', files: [upstreamFile] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [...files, upstreamFile].map((file) => file.path), records: crosswalk.length, totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0) + upstreamFile.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(join(outputRoot, 'itis-bigyra-sidecar.json'), descriptorBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-bigyra-empty-species-partition-sidecar',
    generatedFrom: { sourcePath: repoPath(options.itisSourceLedgerPath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colPackageManifestPath: repoPath(col.packManifestPath), colPackageManifestSha256: sha256(col.packManifestBytes), colOwnershipPath: repoPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, itisRoot: rootBoundaryAudit.selectedItisRoot, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, maximumUpdateDates: itis.maxima }, matchingContract: exactMatching, totals: counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: files, upstreamOnly: upstreamFile },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact COL and ITIS root audits, explicit empty ITIS species partition, representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
