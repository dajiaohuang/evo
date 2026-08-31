import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisNameIndex, matchColSpecies } from './itis-cercozoa-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(packRoot, 'itis-cercozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-cercozoa-sidecar-import-ledger.json')
const ITIS_ROOT_TSN = 969919
const COL_ROOT_USAGE_ID = '35'
const PACKAGE_ID = 'protists-chromists'
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const currentSpeciesQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng,
  u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted' ORDER BY u.tsn`

const synonymQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
), accepted_species(tsn) AS (
  SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr
  ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

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
  const species = []
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    if (record.rank !== 'species' || record.status !== 'accepted') return
    let ancestor = record.parentId
    while (ancestor) {
      if (ancestor === COL_ROOT_USAGE_ID) { species.push(record); return }
      const parent = parents.get(ancestor)
      if (parent === undefined) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestor}`)
      ancestor = parent
    }
  })
  return species.sort((a, b) => compareCodeUnits(a.id, b.id))
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) }
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

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRecord = database.prepare('SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1').get(ITIS_ROOT_TSN)
    if (!rootRecord || rootRecord.completename !== 'Cercozoa' || rootRecord.rank_name !== 'Division' || rootRecord.name_usage !== 'accepted') throw new Error('Pinned ITIS root is not the expected accepted Cercozoa division')
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRecord, maxima, currentRows: database.prepare(currentSpeciesQuery).all(ITIS_ROOT_TSN), synonymRows: database.prepare(synonymQuery).all(ITIS_ROOT_TSN) }
  } finally { database.close() }
}

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-cercozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1])
  const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes); const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const registryManifestPath = join(registryRoot, 'manifest.json'); const registryBytes = readFileSync(registryManifestPath); const ownershipBytes = readFileSync(ownershipPath)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const ownership = JSON.parse(ownershipBytes); const colSpecies = await loadColSpecies(JSON.parse(registryBytes)); const packageCount = ownership.packageCounts[PACKAGE_ID]
  if (!Number.isInteger(packageCount) || colSpecies.length > packageCount) throw new Error('Cercozoa COL scope exceeds Protists and Chromists ownership')
  const { rootRecord, maxima, currentRows, synonymRows } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
  const index = createItisNameIndex(currentRows, synonymRows); const crosswalk = []; const evidencedTsns = new Set()
  for (const colRecord of colSpecies) { const matched = matchColSpecies(colRecord, index); const record = { status: matched.status, ...matched.record }; crosswalk.push(record); if (record.currentName) evidencedTsns.add(record.currentName.tsn); for (const candidate of record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn) }
  crosswalk.sort((a, b) => compareCodeUnits(a.colUsageId, b.colUsageId))
  if (new Set(crosswalk.map((record) => record.colUsageId)).size !== colSpecies.length) throw new Error('COL Cercozoa records are not uniquely addressable')
  const upstreamOnly = currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No strict COL26.8 Cercozoa accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' })).sort((a, b) => Number(a.currentName.tsn) - Number(b.currentName.tsn))
  mkdirSync(packRoot, { recursive: true }); for (const name of readdirSync(packRoot)) if (/^itis-cercozoa-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
  const shards = chunks(crosswalk).map((records, indexNumber) => { const path = join(packRoot, `itis-cercozoa-sidecar-${String(indexNumber).padStart(4, '0')}.jsonl.gz`); const sourcePayload = jsonlBytes(records); const bytes = Buffer.from(deterministicGzip(sourcePayload, { level: 9 })); writeFileSync(path, bytes); return shardDescriptor(path, records, bytes, sourcePayload) })
  const upstreamSource = jsonlBytes(upstreamOnly); const upstreamBytes = Buffer.from(deterministicGzip(upstreamSource, { level: 9 })); const upstreamPath = join(packRoot, 'itis-cercozoa-upstream-only-0000.jsonl.gz'); writeFileSync(upstreamPath, upstreamBytes)
  const upstreamDescriptor = { ...shardDescriptor(upstreamPath, upstreamOnly, upstreamBytes, upstreamSource), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const counts = { total: crosswalk.length, accepted: crosswalk.filter((r) => r.status === 'accepted').length, synonymCurrentNameRedirect: crosswalk.filter((r) => r.status === 'synonym-current-name-redirect').length, ambiguous: crosswalk.filter((r) => r.status === 'ambiguous').length, unmatched: crosswalk.filter((r) => r.status === 'unmatched').length, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID,
    scope: { packageRootUsageId: 'C', packageRootScientificName: 'Chromista', colRootUsageId: COL_ROOT_USAGE_ID, colRootScientificName: 'Cercozoa', colStrictAcceptedSpecies: colSpecies.length, packageStrictAcceptedSpecies: packageCount, packageOutOfScopeStrictAcceptedSpecies: packageCount - colSpecies.length, nonApplicableRemainder: 'All other strict accepted COL26.8 species assigned to Protists and Chromists remain outside this Cercozoa sidecar.', boundary: 'This sidecar covers only strict accepted COL26.8 species descending from exact Cercozoa root 35. ITIS TSN 969919 is the exact accepted Cercozoa division, but its 2026-08-26 hierarchy has no accepted species descendants; broader ITIS lineages such as Fungi are intentionally excluded.' },
    rootBoundaryAudit: { selectedItisRoot: { tsn: String(rootRecord.tsn), scientificName: rootRecord.completename, rank: rootRecord.rank_name, usage: rootRecord.name_usage }, selectedCurrentSpecies: currentRows.length, selectedSpeciesSynonymLinks: synonymRows.length, decision: 'Use only the exact ITIS Cercozoa division TSN 969919. Do not substitute the older ITIS Fungi/Myxomycota hierarchy, which would create false cross-root coverage and duplicate unrelated taxa.' },
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name resolves to exactly one accepted ITIS Cercozoa species and directly equals that current ITIS name.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one accepted ITIS Cercozoa species.', ambiguous: 'The normalized exact evidence resolves to more than one accepted ITIS Cercozoa species TSN.', unmatched: 'No normalized exact accepted-name or official ITIS species-synonym evidence resolves to an accepted ITIS Cercozoa species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' },
    evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the declared COL26.8 Cercozoa partition. It is not a global cercozoan checklist, a classification authority, a species-concept equivalence assertion, a biological dossier or a scientific-review record.', zh: '此 CC0 ITIS 侧车是已声明 COL26.8 Cercozoa 分区的冻结严格命名交叉映射；它不是全球 Cercozoa 名录、分类权威、物种概念等同性声明、生物档案或科学审查记录。' },
    counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shards }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstreamDescriptor] } }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-cercozoa-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes) }, scopeAudit: { ...descriptor.scope, rootBoundaryAudit: descriptor.rootBoundaryAudit, itisRoot: { tsn: String(rootRecord.tsn), scientificName: rootRecord.completename, rank: rootRecord.rank_name, usage: rootRecord.name_usage }, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima }, matchingContract: descriptor.exactMatching, totals: descriptor.counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: shards, upstreamOnly: upstreamDescriptor }, deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: 'scripts/build-itis-cercozoa-sidecar.mjs', scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ totals: descriptor.counts, scope: descriptor.scope, output: ledger.output }, null, 2))
}

await main()
