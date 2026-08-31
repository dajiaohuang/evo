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
const releaseRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20')
const registryRoot = join(releaseRoot, 'registry')
const packRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const descriptorPath = join(packRoot, 'itis-apicomplexa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-apicomplexa-sidecar-import-ledger.json')
const ITIS_ROOT_TSN = 553099
const ITIS_BROADER_ROOT_TSN = 630577
const COL_ROOT_USAGE_ID = '87FBN'
const PACKAGE_ID = 'protists-chromists'
const LIMIT = 512 * 1024
const currentQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid' ORDER BY u.tsn`
const synonymQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
), accepted_species(tsn) AS (
  SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
) SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compare = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
async function sha256File(path) { const hash = createHash('sha256'); for await (const part of createReadStream(path)) hash.update(part); return hash.digest('hex') }
async function readGzipJsonLines(path, visitor) { const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity }); for await (const line of lines) if (line) visitor(JSON.parse(line)) }

async function readHierarchy(manifest) {
  const records = new Map()
  for (const file of manifest.hierarchy.nodes.files) await readGzipJsonLines(join(registryRoot, ...file.path.split('/')), (record) => records.set(record.id, record))
  return records
}
function descendantsOf(records, rootId) {
  const children = new Map()
  for (const record of records.values()) { const list = children.get(record.parentId) ?? []; list.push(record); children.set(record.parentId, list) }
  const result = []; const queue = [rootId]
  while (queue.length) for (const record of children.get(queue.shift()) ?? []) { if (record.rank === 'species' && record.status === 'accepted') result.push(record); else queue.push(record.id) }
  return result.sort((a, b) => compare(a.id, b.id))
}
async function readPack(manifest) {
  const rows = []
  for (const file of manifest.files) await readGzipJsonLines(join(releaseRoot, 'resource-packs', ...file.path.split('/')), (record) => rows.push(record))
  if (rows.length !== manifest.acceptedSpeciesCount || new Set(rows.map((row) => row.id)).size !== rows.length) throw new Error('Protists and Chromists package rows changed')
  return rows
}
function readItis(path) {
  const database = new DatabaseSync(path, { readOnly: true })
  try {
    const rootRecord = database.prepare('SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1').get(ITIS_ROOT_TSN)
    const broaderRoot = database.prepare('SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1').get(ITIS_BROADER_ROOT_TSN)
    if (!rootRecord || rootRecord.completename !== 'Apicomplexa' || rootRecord.rank_name !== 'Phylum' || rootRecord.name_usage !== 'valid') throw new Error('Expected the valid ITIS Apicomplexa phylum root')
    if (!broaderRoot || broaderRoot.completename !== 'Protozoa' || broaderRoot.rank_name !== 'Kingdom' || broaderRoot.name_usage !== 'valid') throw new Error('Expected the valid ITIS Protozoa kingdom boundary')
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRecord, broaderRoot, maxima, currentRows: database.prepare(currentQuery).all(ITIS_ROOT_TSN), broaderRows: database.prepare(currentQuery).all(ITIS_BROADER_ROOT_TSN), synonymRows: database.prepare(synonymQuery).all(ITIS_ROOT_TSN) }
  } finally { database.close() }
}
function split(records) { const chunks = []; let chunk = []; let size = 0; for (const record of records) { const rowSize = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1; if (rowSize > LIMIT) throw new Error(`Row ${record.colUsageId} exceeds shard limit`); if (chunk.length && size + rowSize > LIMIT) { chunks.push(chunk); chunk = []; size = 0 }; chunk.push(record); size += rowSize }; if (chunk.length) chunks.push(chunk); return chunks }
function output(path, rows, compressed, source) { return { path: repoPath(path), records: rows.length, firstColUsageId: rows[0]?.colUsageId ?? null, lastColUsageId: rows.at(-1)?.colUsageId ?? null, bytes: compressed.length, sha256: sha256(compressed), sourceBytes: source.length, sourceSha256: sha256(source) } }
function sourceCounts(rows) { return Object.fromEntries(Object.entries(rows.reduce((result, row) => { const key = row.sourceDatasetId ?? 'null'; result[key] = (result[key] ?? 0) + 1; return result }, {})).sort(([left], [right]) => Number(left) - Number(right))) }
function currentRecord(row) { const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null; return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) } }

async function main() {
  const option = process.argv.indexOf('--itis-sqlite'); if (option < 0 || !process.argv[option + 1]) throw new Error('Usage: node scripts/build-itis-apicomplexa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[option + 1]); const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes); const sqliteSha = await sha256File(sqlitePath)
  if (sqliteSha !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha}`)
  const registryPath = join(registryRoot, 'manifest.json'); const packPath = join(packRoot, 'manifest.json'); const registryBytes = readFileSync(registryPath); const packBytes = readFileSync(packPath); const ownershipBytes = readFileSync(ownershipPath)
  const hierarchy = await readHierarchy(JSON.parse(registryBytes)); const colRoot = hierarchy.get(COL_ROOT_USAGE_ID)
  if (!colRoot || colRoot.scientificName !== 'Cryptosporidium Tyzzer, 1907' || colRoot.rank !== 'genus' || colRoot.parentId !== '57') throw new Error('Expected the exact COL Cryptosporidium genus under Miozoa')
  const colSpecies = descendantsOf(hierarchy, COL_ROOT_USAGE_ID); const pack = JSON.parse(packBytes); const packSpecies = await readPack(pack); const packIds = new Set(packSpecies.map((row) => row.id))
  if (pack.packageId !== PACKAGE_ID || pack.acceptedSpeciesCount !== JSON.parse(ownershipBytes).packageCounts[PACKAGE_ID] || colSpecies.some((row) => !packIds.has(row.id))) throw new Error('COL Apicomplexa/Cryptosporidium package boundary changed')
  const { rootRecord, broaderRoot, maxima, currentRows, broaderRows, synonymRows } = readItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS maximum update date mismatch')
  const index = createItisMammalNameIndex(currentRows, synonymRows); const crosswalk = colSpecies.map((row) => { const matched = matchColSpecies(row, index); return { status: matched.status, ...matched.record } }).sort((a, b) => compare(a.colUsageId, b.colUsageId))
  if (new Set(crosswalk.map((row) => row.colUsageId)).size !== colSpecies.length) throw new Error('COL scope is not uniquely addressable')
  const represented = new Set(crosswalk.flatMap((row) => row.currentName ? [row.currentName.tsn] : (row.candidates ?? []).map((candidate) => candidate.currentName.tsn)))
  const upstream = currentRows.filter((row) => !represented.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentRecord(row), basis: 'No strict COL26.8 Cryptosporidium accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' }))
  mkdirSync(packRoot, { recursive: true }); for (const name of readdirSync(packRoot)) if (/^itis-apicomplexa-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
  const files = split(crosswalk).map((rows, index) => { const path = join(packRoot, `itis-apicomplexa-sidecar-${String(index).padStart(4, '0')}.jsonl.gz`); const source = jsonlBytes(rows); const compressed = Buffer.from(deterministicGzip(source, { level: 9 })); writeFileSync(path, compressed); return output(path, rows, compressed, source) })
  const upstreamPath = join(packRoot, 'itis-apicomplexa-upstream-only-0000.jsonl.gz'); const upstreamSource = jsonlBytes(upstream); const upstreamCompressed = Buffer.from(deterministicGzip(upstreamSource, { level: 9 })); writeFileSync(upstreamPath, upstreamCompressed); const upstreamFile = { ...output(upstreamPath, upstream, upstreamCompressed, upstreamSource), colOwnership: null, firstTsn: upstream[0]?.currentName.tsn ?? null, lastTsn: upstream.at(-1)?.currentName.tsn ?? null }
  const counts = { total: crosswalk.length, accepted: crosswalk.filter((row) => row.status === 'accepted').length, synonymCurrentNameRedirect: crosswalk.filter((row) => row.status === 'synonym-current-name-redirect').length, ambiguous: crosswalk.filter((row) => row.status === 'ambiguous').length, unmatched: crosswalk.filter((row) => row.status === 'unmatched').length, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstream.length }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID,
    scope: { colRootUsageId: COL_ROOT_USAGE_ID, colRootScientificName: colRoot.scientificName, colRootRank: colRoot.rank, colStrictAcceptedSpecies: colSpecies.length, packageStrictAcceptedSpecies: pack.acceptedSpeciesCount, packageOutOfScopeStrictAcceptedSpecies: pack.acceptedSpeciesCount - colSpecies.length, boundary: 'COL26.8 does not expose an Apicomplexa parent node in this package. Its complete represented Apicomplexa lineage is the exact Cryptosporidium genus 87FBN under Miozoa 57; no sibling Miozoa or Protozoa species are included.' },
    mixedResourcePack: { packageId: PACKAGE_ID, manifestPath: repoPath(packPath), manifestSha256: sha256(packBytes), acceptedSpeciesCount: packSpecies.length, inScopeSpecies: colSpecies.length, outOfScopeSpecies: packSpecies.length - colSpecies.length, packageSourceDatasetCounts: sourceCounts(packSpecies), apicomplexaSourceDatasetCounts: sourceCounts(colSpecies), outOfScopeBoundary: 'All remaining Protists and Chromists accepted species are outside the exact COL Cryptosporidium lineage and receive no ITIS Apicomplexa match in this sidecar.' },
    rootBoundaryAudit: { selectedItisRoot: { tsn: String(rootRecord.tsn), scientificName: rootRecord.completename, rank: rootRecord.rank_name, usage: rootRecord.name_usage }, broaderItisRoot: { tsn: String(broaderRoot.tsn), scientificName: broaderRoot.completename, rank: broaderRoot.rank_name, usage: broaderRoot.name_usage }, selectedCurrentSpecies: currentRows.length, broaderCurrentSpecies: broaderRows.length, colRepresentation: { rootUsageId: COL_ROOT_USAGE_ID, scientificName: colRoot.scientificName, rank: colRoot.rank, parentUsageId: colRoot.parentId, parentScientificName: 'Miozoa' }, decision: 'Use the valid ITIS Apicomplexa phylum TSN 553099. COL26.8 represents the entire matching scope as the exact Cryptosporidium genus under Miozoa, not as an Apicomplexa node; expanding to Miozoa would include Dinophyceae and create a false cross-root coverage claim.' },
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name resolves to exactly one valid ITIS Apicomplexa species and directly equals that current ITIS name.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Apicomplexa species.', ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Apicomplexa species TSN.', unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Apicomplexa species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' },
    evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the exactly represented Cryptosporidium portion of Apicomplexa inside Protists and Chromists. It is not a global apicomplexan checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.', zh: '此 CC0 ITIS 侧车是原生生物与色界资源包中可精确表示的 Apicomplexa（Cryptosporidium）部分的冻结严格命名交叉映射；它不是全球顶复门名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。' },
    counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: LIMIT, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstreamFile] } }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-apicomplexa-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha, colRegistryManifestPath: repoPath(registryPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes), resourcePackManifestPath: repoPath(packPath), resourcePackManifestSha256: sha256(packBytes) }, scopeAudit: { ...descriptor.scope, mixedResourcePack: descriptor.mixedResourcePack, rootBoundaryAudit: descriptor.rootBoundaryAudit, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima }, matchingContract: descriptor.exactMatching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: files, upstreamOnly: upstreamFile }, deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: repoPath(fileURLToPath(import.meta.url)), scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, exact roots, exact SQL, representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ totals: counts, scope: descriptor.scope, output: ledger.output }, null, 2))
}
await main()
