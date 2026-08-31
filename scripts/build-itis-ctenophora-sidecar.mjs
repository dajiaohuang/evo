import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const resourcePackRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const resourcePackManifestPath = join(resourcePackRoot, 'manifest.json')
const nomenclatureRoot = resourcePackRoot
const descriptorPath = join(nomenclatureRoot, 'itis-ctenophora-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-ctenophora-sidecar-import-ledger.json')
const PACKAGE_ID = 'other-animals'
const ITIS_ROOT = { tsn: 53856, scientificName: 'Ctenophora' }
const COL_ROOT = { id: 'B8V3L', scientificName: 'Ctenophora' }
const EXPECTED_COL_SPECIES = 197
const EXPECTED_PACKAGE_SPECIES = 99161
const SHARD_SOURCE_LIMIT_BYTES = 2 * 1024 * 1024

const currentSpeciesQuery = `WITH RECURSIVE descendants(tsn) AS (
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

const synonymQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted_species(tsn) AS (
  SELECT u.tsn FROM descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted_species a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')

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
  const files = manifest.hierarchy.nodes.files.map((file) => join(registryRoot, ...file.path.split('/'))).sort((a, b) => a.localeCompare(b))
  const parents = new Map()
  for (const path of files) await eachGzipJsonLine(path, (record) => { if (record.rank !== 'species') parents.set(record.id, record.parentId) })
  const records = []
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    if (record.rank !== 'species' || record.status !== 'accepted') return
    const seen = new Set()
    let ancestor = record.parentId
    while (ancestor) {
      if (seen.has(ancestor)) throw new Error(`COL hierarchy cycle at ${ancestor}`)
      seen.add(ancestor)
      if (ancestor === COL_ROOT.id) {
        records.push({ ...record, scopeRootUsageId: COL_ROOT.id, scopeRootScientificName: COL_ROOT.scientificName })
        return
      }
      if (!parents.has(ancestor)) throw new Error(`COL hierarchy broken for ${record.id} at ${ancestor}`)
      ancestor = parents.get(ancestor)
    }
  })
  return records.sort((a, b) => compareCodeUnits(a.id, b.id))
}

async function loadResourcePackSpecies(manifest) {
  const records = []
  for (const file of manifest.files) await eachGzipJsonLine(join(resourcePackRoot, ...file.path.split('/').slice(1)), (record) => records.push(record))
  if (records.length !== manifest.acceptedSpeciesCount) throw new Error(`Other Animals resource pack count changed: ${records.length}`)
  if (new Set(records.map((record) => record.id)).size !== records.length) throw new Error('Other Animals resource pack contains duplicate COL IDs')
  return records
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) }
}

function outputDescriptor(path, records, bytes, sourceBytes) {
  return { path: repoPath(path), records: records.length, firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes) }
}

function chunkBySourceBytes(records) {
  const chunks = []; let chunk = []; let used = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (bytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId} exceeds the source shard limit`)
    if (chunk.length && used + bytes > SHARD_SOURCE_LIMIT_BYTES) { chunks.push(chunk); chunk = []; used = 0 }
    chunk.push(record); used += bytes
  }
  if (chunk.length) chunks.push(chunk)
  return chunks
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRecord = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE u.tsn = ?1`).get(ITIS_ROOT.tsn)
    if (!rootRecord || rootRecord.completename !== ITIS_ROOT.scientificName || rootRecord.rank_name !== 'Phylum' || rootRecord.name_usage !== 'valid') throw new Error('Pinned ITIS Ctenophora root identity changed')
    const currentRows = database.prepare(currentSpeciesQuery).all(ITIS_ROOT.tsn)
    const synonymRows = database.prepare(synonymQuery).all(ITIS_ROOT.tsn)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRecord, currentRows, synonymRows, maxima }
  } finally { database.close() }
}

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-ctenophora-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1])
  const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const registryManifestPath = join(registryRoot, 'manifest.json'); const registryBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(ownershipPath); const resourcePackBytes = readFileSync(resourcePackManifestPath)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const ownership = JSON.parse(ownershipBytes); const resourcePack = JSON.parse(resourcePackBytes)
  if (ownership.packageCounts[PACKAGE_ID] !== EXPECTED_PACKAGE_SPECIES || resourcePack.packageId !== PACKAGE_ID || resourcePack.acceptedSpeciesCount !== EXPECTED_PACKAGE_SPECIES) throw new Error('Other Animals package boundary changed')
  const colSpecies = await loadColSpecies(JSON.parse(registryBytes)); const packSpecies = await loadResourcePackSpecies(resourcePack)
  if (colSpecies.length !== EXPECTED_COL_SPECIES) throw new Error(`COL Ctenophora species count changed: ${colSpecies.length}`)
  const packIds = new Set(packSpecies.map((record) => record.id))
  if (colSpecies.some((record) => !packIds.has(record.id))) throw new Error('Ctenophora species are not all present in Other Animals resource pack')
  const itis = loadItis(sqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update dates changed: ${JSON.stringify(itis.maxima)}`)
  const index = createItisMammalNameIndex(itis.currentRows, itis.synonymRows); const crosswalk = []; const evidencedTsns = new Set()
  for (const colRecord of colSpecies) {
    const result = matchColSpecies(colRecord, index)
    const record = { status: result.status, ...result.record, scopeRootUsageId: COL_ROOT.id, scopeRootScientificName: COL_ROOT.scientificName }
    crosswalk.push(record)
    if (record.currentName) evidencedTsns.add(record.currentName.tsn)
    for (const candidate of record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  crosswalk.sort((a, b) => compareCodeUnits(a.colUsageId, b.colUsageId))
  if (new Set(crosswalk.map((record) => record.colUsageId)).size !== colSpecies.length) throw new Error('COL Ctenophora records are not uniquely addressable')
  const upstreamOnly = itis.currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No strict COL26.8 Ctenophora accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' })).sort((a, b) => Number(a.currentName.tsn) - Number(b.currentName.tsn))
  mkdirSync(nomenclatureRoot, { recursive: true })
  for (const name of readdirSync(nomenclatureRoot)) if (/^itis-ctenophora-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(nomenclatureRoot, name))
  const shards = chunkBySourceBytes(crosswalk).map((records, indexNumber) => {
    const filename = `itis-ctenophora-sidecar-${String(indexNumber).padStart(4, '0')}.jsonl.gz`; const sourcePayload = jsonlBytes(records); const compressed = Buffer.from(deterministicGzip(sourcePayload, { level: 9 })); const path = join(nomenclatureRoot, filename); writeFileSync(path, compressed); return outputDescriptor(path, records, compressed, sourcePayload)
  })
  const upstreamSource = jsonlBytes(upstreamOnly); const upstreamCompressed = Buffer.from(deterministicGzip(upstreamSource, { level: 9 })); const upstreamPath = join(nomenclatureRoot, 'itis-ctenophora-upstream-only-0000.jsonl.gz'); writeFileSync(upstreamPath, upstreamCompressed)
  const upstreamDescriptor = { ...outputDescriptor(upstreamPath, upstreamOnly, upstreamCompressed, upstreamSource), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const count = (status) => crosswalk.filter((record) => record.status === status).length
  const counts = { total: crosswalk.length, accepted: count('accepted'), synonymCurrentNameRedirect: count('synonym-current-name-redirect'), ambiguous: count('ambiguous'), unmatched: count('unmatched'), itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const datasetCounts = (records) => Object.fromEntries(Object.entries(records.reduce((map, record) => { const key = record.sourceDatasetId ?? 'null'; map[key] = (map[key] ?? 0) + 1; return map }, {})).sort(([a], [b]) => Number(a) - Number(b)))
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID,
    scope: { colRoots: [COL_ROOT], colStrictAcceptedSpecies: colSpecies.length, speciesByColRoot: { [COL_ROOT.id]: colSpecies.length }, packageStrictAcceptedSpecies: packSpecies.length, packageOutOfScopeStrictAcceptedSpecies: packSpecies.length - colSpecies.length, boundary: 'Other Animals is the deterministic Animalia remainder after more-specific static-package routes. This sidecar covers only strict accepted COL26.8 species descending from the exact Ctenophora root; every other Other Animals-owned species is explicitly nonapplicable.' },
    mixedResourcePack: { packageId: PACKAGE_ID, manifestPath: repoPath(resourcePackManifestPath), manifestSha256: sha256(resourcePackBytes), acceptedSpeciesCount: packSpecies.length, inScopeSpecies: colSpecies.length, outOfScopeSpecies: packSpecies.length - colSpecies.length, nonApplicableSpecies: packSpecies.length - colSpecies.length, packageSourceDatasetCounts: datasetCounts(packSpecies), scopeSourceDatasetCounts: datasetCounts(colSpecies), outOfScopeBoundary: `The remaining ${packSpecies.length - colSpecies.length} accepted species in Other Animals are outside Ctenophora and receive no match in this sidecar.` },
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, roots: [{ tsn: String(ITIS_ROOT.tsn), scientificName: ITIS_ROOT.scientificName }], sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name resolves to exactly one valid ITIS Ctenophora species and directly equals that current ITIS name.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Ctenophora species.', ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Ctenophora species TSN.', unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Ctenophora species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' },
    evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the declared Ctenophora partition inside the mixed Other Animals resource pack. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or scientific-review record.', zh: '此 CC0 ITIS 侧车仅为混合“其他动物”资源包中明确声明的栉水母动物分区提供冻结的严格命名交叉映射；它不是最终分类权威、系统发育树、物种概念等同性声明、生物档案、化石记录或科学审查记录。' },
    counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shards },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in one immutable JSONL gzip shard.', files: [upstreamDescriptor] },
  }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-ctenophora-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes), resourcePackManifestPath: repoPath(resourcePackManifestPath), resourcePackManifestSha256: sha256(resourcePackBytes) }, scopeAudit: { ...descriptor.scope, mixedResourcePack: descriptor.mixedResourcePack, itisRoot: { tsn: String(itis.rootRecord.tsn), scientificName: itis.rootRecord.completename, rank: itis.rootRecord.rank_name, usage: itis.rootRecord.name_usage }, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, maximumUpdateDates: itis.maxima }, queries: { currentSpecies: currentSpeciesQuery, speciesSynonyms: synonymQuery }, matchingContract: descriptor.exactMatching, totals: descriptor.counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: shards, upstreamOnly: upstreamDescriptor }, deliveryContract: { pagesLight: 'Pages may include only the descriptor and canonical file hashes; row-level JSONL gzip shards are omitted.', androidIosFull: 'Android and iOS complete-data inventories must include this descriptor and every listed row-level shard byte-for-byte.', runtimeChange: 'Data-only import; no runtime, version or release manifest changes.' }, generatedBy: { scriptPath: repoPath(fileURLToPath(import.meta.url)), scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, fixed COL and ITIS roots, exact SQL, exact representation-only normalization, Unicode code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ counts, scope: descriptor.scope, mixedResourcePack: descriptor.mixedResourcePack, output: ledger.output }, null, 2))
}

await main()
