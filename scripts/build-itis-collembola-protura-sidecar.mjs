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
const nomenclatureRoot = join(root, 'data/packages/arthropoda/crustaceans-insects/nomenclature')
const descriptorPath = join(nomenclatureRoot, 'itis-collembola-protura-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-collembola-protura-sidecar-import-ledger.json')

const PACKAGE_ID = 'crustaceans-insects'
const COL_ROOTS = [
  { id: 'KZS5W', scientificName: 'Collembola' },
  { id: '8NKDZ', scientificName: 'Protura' },
]
const ITIS_ROOTS = [
  { tsn: 914185, scientificName: 'Collembola', rank: 'Class' },
  { tsn: 914187, scientificName: 'Protura', rank: 'Class' },
]
const EXISTING_COLLECTION_COL_ROOTS = ['H6', 'KZX8B', 'L2G4H']
const SHARD_SOURCE_LIMIT_BYTES = 2 * 1024 * 1024

const currentSpeciesQuery = `WITH RECURSIVE roots(tsn) AS (VALUES (?1), (?2)), descendants(tsn) AS (
  SELECT tsn FROM roots UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid' ORDER BY u.tsn`
const synonymQuery = `WITH RECURSIVE roots(tsn) AS (VALUES (?1), (?2)), descendants(tsn) AS (
  SELECT tsn FROM roots UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
), accepted(tsn) AS (
  SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN accepted a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (rows) => Buffer.from(`${rows.map((row) => JSON.stringify(row)).join('\n')}\n`, 'utf8')
const compareCodeUnits = (a, b) => a < b ? -1 : a > b ? 1 : 0
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')

async function hashFile(path) { const hash = createHash('sha256'); for await (const part of createReadStream(path)) hash.update(part); return hash.digest('hex') }
async function eachGzipJsonLine(path, visit) { const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity }); for await (const line of lines) if (line) visit(JSON.parse(line)) }
function fileDescriptor(path, rows, bytes, sourceBytes) { return { path: repoPath(path), records: rows.length, firstColUsageId: rows[0]?.colUsageId ?? null, lastColUsageId: rows.at(-1)?.colUsageId ?? null, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes) } }
function currentName(row) { const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null; return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) } }
function chunks(rows) { const result = []; let current = []; let used = 0; for (const row of rows) { const size = Buffer.byteLength(JSON.stringify(row), 'utf8') + 1; if (size > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${row.colUsageId} exceeds source shard limit`); if (current.length && used + size > SHARD_SOURCE_LIMIT_BYTES) { result.push(current); current = []; used = 0 }; current.push(row); used += size }; if (current.length) result.push(current); return result }

async function loadColSpecies(manifest) {
  const files = manifest.hierarchy.nodes.files.map((file) => join(registryRoot, ...file.path.split('/'))).sort((a, b) => a.localeCompare(b))
  const parents = new Map()
  for (const path of files) await eachGzipJsonLine(path, (row) => { if (row.rank !== 'species') parents.set(row.id, row.parentId) })
  const isDescendant = (id, ancestor) => {
    let current = id
    while (current) {
      if (current === ancestor) return true
      current = parents.get(current)
      if (current === undefined) throw new Error(`COL hierarchy is broken for ${id}`)
    }
    return false
  }
  for (const scope of COL_ROOTS) for (const existing of EXISTING_COLLECTION_COL_ROOTS) {
    if (isDescendant(scope.id, existing) || isDescendant(existing, scope.id)) throw new Error(`COL root ${scope.id} overlaps existing ITIS collection root ${existing}`)
  }
  const rows = []
  for (const path of files) await eachGzipJsonLine(path, (row) => {
    if (row.rank !== 'species' || row.status !== 'accepted') return
    let parentId = row.parentId
    while (parentId) {
      const scope = COL_ROOTS.find((candidate) => candidate.id === parentId)
      if (scope) { rows.push({ ...row, scopeRootUsageId: scope.id, scopeRootScientificName: scope.scientificName }); return }
      parentId = parents.get(parentId)
      if (parentId === undefined) throw new Error(`COL hierarchy is broken for ${row.id}`)
    }
  })
  return rows.sort((a, b) => compareCodeUnits(a.id, b.id))
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const roots = ITIS_ROOTS.map((expected) => database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(expected.tsn))
    for (const [index, record] of roots.entries()) { const expected = ITIS_ROOTS[index]; if (!record || record.completename !== expected.scientificName || record.rank_name !== expected.rank || record.name_usage !== 'valid') throw new Error(`Pinned ITIS ${expected.scientificName} root identity changed`) }
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { roots, maxima, currentRows: database.prepare(currentSpeciesQuery).all(...ITIS_ROOTS.map((root) => root.tsn)), synonymRows: database.prepare(synonymQuery).all(...ITIS_ROOTS.map((root) => root.tsn)) }
  } finally { database.close() }
}

async function main() {
  const index = process.argv.indexOf('--itis-sqlite'); if (index < 0 || !process.argv[index + 1]) throw new Error('Usage: node scripts/build-itis-collembola-protura-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[index + 1]); const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await hashFile(sqlitePath); if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const registryManifestPath = join(registryRoot, 'manifest.json'); const registryBytes = readFileSync(registryManifestPath); if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest checksum mismatch')
  const ownershipBytes = readFileSync(ownershipPath); const ownership = JSON.parse(ownershipBytes); const colRows = await loadColSpecies(JSON.parse(registryBytes))
  if (!colRows.length || colRows.length > ownership.packageCounts[PACKAGE_ID] || new Set(colRows.map((row) => row.scopeRootUsageId)).size !== COL_ROOTS.length) throw new Error('COL Collembola/Protura scope audit is inconsistent')
  const { roots, maxima, currentRows, synonymRows } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS update-date mismatch')
  const nameIndex = createItisMammalNameIndex(currentRows, synonymRows); const evidencedTsns = new Set(); const crosswalk = []
  for (const colRow of colRows) { const match = matchColSpecies(colRow, nameIndex); const row = { status: match.status, ...match.record, scopeRootUsageId: colRow.scopeRootUsageId, scopeRootScientificName: colRow.scopeRootScientificName }; crosswalk.push(row); if (row.currentName) evidencedTsns.add(row.currentName.tsn); for (const candidate of row.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn) }
  crosswalk.sort((a, b) => compareCodeUnits(a.colUsageId, b.colUsageId)); if (new Set(crosswalk.map((row) => row.colUsageId)).size !== crosswalk.length) throw new Error('COL scope has duplicate IDs')
  const upstreamOnly = currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No strict COL26.8 Collembola or Protura accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' })).sort((a, b) => Number(a.currentName.tsn) - Number(b.currentName.tsn))
  mkdirSync(nomenclatureRoot, { recursive: true }); for (const name of readdirSync(nomenclatureRoot)) if (/^itis-collembola-protura-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(nomenclatureRoot, name))
  const files = chunks(crosswalk).map((rows, number) => { const path = join(nomenclatureRoot, `itis-collembola-protura-sidecar-${String(number).padStart(4, '0')}.jsonl.gz`); const raw = jsonlBytes(rows); const bytes = Buffer.from(deterministicGzip(raw, { level: 9 })); writeFileSync(path, bytes); return fileDescriptor(path, rows, bytes, raw) })
  const upstreamPath = join(nomenclatureRoot, 'itis-collembola-protura-upstream-only-0000.jsonl.gz'); const upstreamRaw = jsonlBytes(upstreamOnly); const upstreamBytes = Buffer.from(deterministicGzip(upstreamRaw, { level: 9 })); writeFileSync(upstreamPath, upstreamBytes); const upstreamFile = { ...fileDescriptor(upstreamPath, upstreamOnly, upstreamBytes, upstreamRaw), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const byRoot = Object.fromEntries(COL_ROOTS.map((scope) => [scope.id, crosswalk.filter((row) => row.scopeRootUsageId === scope.id).length])); const counts = { total: crosswalk.length, accepted: crosswalk.filter((row) => row.status === 'accepted').length, synonymCurrentNameRedirect: crosswalk.filter((row) => row.status === 'synonym-current-name-redirect').length, ambiguous: crosswalk.filter((row) => row.status === 'ambiguous').length, unmatched: crosswalk.filter((row) => row.status === 'unmatched').length, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const scope = { colRoots: COL_ROOTS, colStrictAcceptedSpecies: crosswalk.length, speciesByColRoot: byRoot, packageStrictAcceptedSpecies: ownership.packageCounts[PACKAGE_ID], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[PACKAGE_ID] - crosswalk.length, boundary: 'This mixed package already has separate ITIS collections for Crustacea, Insecta and Myriapoda. This collection covers only exact COL26.8 Collembola and Protura roots, which are disjoint from those declared collection roots; every other package-owned species is nonapplicable.' }
  const exactMatching = { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name resolves to exactly one valid ITIS Collembola or Protura species and directly equals that current ITIS name.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Collembola or Protura species.', ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Collembola or Protura species TSN.', unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Collembola or Protura species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID, scope, sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, roots: roots.map((record) => ({ tsn: String(record.tsn), scientificName: record.completename })), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } }, exactMatching, evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for Collembola and Protura. It is not a checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.', zh: '此 CC0 ITIS 侧车是弹尾纲与原尾纲的冻结严格命名交叉映射；它不是名录、最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。' }, counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive COL usage ID ranges; one detail query loads at most one immutable JSONL gzip shard.', files }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is separately stored.', files: [upstreamFile] } }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-collembola-protura-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes) }, scopeAudit: { ...scope, itisRoots: roots.map((record) => ({ tsn: String(record.tsn), scientificName: record.completename, rank: record.rank_name, usage: record.name_usage })), itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima }, matchingContract: exactMatching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: files, upstreamOnly: upstreamFile }, deliveryContract: { pagesLight: 'Pages may publish only this descriptor and the canonical row-file hashes; row shards are omitted.', androidIosFull: 'Android and iOS native-full inventories must include every listed row shard byte-for-byte.', runtimeChange: 'Data-only import; no version or release-manifest change.' }, generatedBy: { scriptPath: 'scripts/build-itis-collembola-protura-sidecar.mjs', scriptSha256: await hashFile(fileURLToPath(import.meta.url)), deterministic: 'Pinned checksums, fixed disjoint roots, exact SQL, representation-only normalization, Unicode code-unit ordering and deterministic gzip; no wall-clock data or fuzzy matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ counts, scope, output: ledger.output }, null, 2))
}

await main()
