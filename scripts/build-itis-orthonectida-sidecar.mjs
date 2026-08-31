import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { createItisMammalNameIndex, matchColSpecies } from './itis-mammal-sidecar-lib.mjs'
import { deterministicGzip } from './archive-determinism.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(packRoot, 'itis-orthonectida-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-orthonectida-sidecar-import-ledger.json')
const ITIS_ROOT_TSN = 57409
const COL_ROOT_USAGE_ID = 'CVJLH'
const PACKAGE_ID = 'other-animals'
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compareId = (left, right) => left.localeCompare(right)
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const argValue = (name) => { const i = process.argv.indexOf(name); return i < 0 ? null : process.argv[i + 1] }

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function loadColSpecies(manifest, registryPath) {
  const files = manifest.hierarchy.nodes.files.map((file) => join(registryPath, ...file.path.split('/'))).sort()
  const records = new Map()
  const species = []
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    records.set(record.id, record)
    if (record.rank === 'species' && record.status === 'accepted') species.push(record)
  })
  return species.filter((record) => {
    let parent = record.parentId
    while (parent) {
      if (parent === COL_ROOT_USAGE_ID) return true
      parent = records.get(parent)?.parentId
    }
    return false
  }).sort((left, right) => compareId(left.id, right.id))
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) }
}

function chunks(records) {
  const result = []; let chunk = []; let used = 0
  for (const record of records) {
    const size = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (chunk.length && used + size > SHARD_SOURCE_LIMIT_BYTES) { result.push(chunk); chunk = []; used = 0 }
    chunk.push(record); used += size
  }
  if (chunk.length) result.push(chunk)
  return result
}

function loadItis(sqlitePath) {
  const db = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const root = db.prepare('SELECT u.tsn,l.completename,r.rank_name,u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn=u.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE u.tsn=?1').get(ITIS_ROOT_TSN)
    if (!root || root.completename !== 'Orthonectida' || root.rank_name !== 'Phylum' || root.name_usage !== 'valid') throw new Error('Pinned ITIS root is not valid Orthonectida')
    const currentQuery = `WITH RECURSIVE descendants(tsn) AS (SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn=d.tsn WHERE u.name_usage='valid') SELECT u.tsn,l.completename AS scientific_name,u.name_usage,u.credibility_rtng,u.completeness_rtng,u.currency_rating,u.update_date FROM descendants d JOIN taxonomic_units u ON u.tsn=d.tsn JOIN longnames l ON l.tsn=u.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE lower(trim(r.rank_name))='species' AND u.name_usage='valid' ORDER BY u.tsn`
    const synonymQuery = `WITH RECURSIVE descendants(tsn) AS (SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn=d.tsn WHERE u.name_usage='valid'), accepted_species(tsn) AS (SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn=d.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE lower(trim(r.rank_name))='species' AND u.name_usage='valid') SELECT s.tsn AS synonym_tsn,sl.completename AS synonym_name,su.name_usage AS synonym_usage,su.unaccept_reason,su.update_date AS synonym_update_date,s.tsn_accepted FROM synonym_links s JOIN accepted_species a ON a.tsn=s.tsn_accepted JOIN taxonomic_units su ON su.tsn=s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id=su.kingdom_id AND sr.rank_id=su.rank_id JOIN longnames sl ON sl.tsn=su.tsn WHERE lower(trim(sr.rank_name))='species' ORDER BY s.tsn,s.tsn_accepted`
    const maxima = db.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits,(SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { root, currentRows: db.prepare(currentQuery).all(ITIS_ROOT_TSN), synonymRows: db.prepare(synonymQuery).all(ITIS_ROOT_TSN), maxima }
  } finally { db.close() }
}

function fileDescriptor(path, records, source) {
  const bytes = Buffer.from(deterministicGzip(source, { level: 9 }))
  writeFileSync(path, bytes)
  return { path: repoPath(path), records: records.length, firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: source.length, sourceSha256: sha256(source) }
}

async function main() {
  const sqlitePath = resolve(argValue('--itis-sqlite') ?? '')
  if (!argValue('--itis-sqlite')) throw new Error('Usage: node scripts/build-itis-orthonectida-sidecar.mjs --itis-sqlite <verified ITIS.sqlite> [--registry-root <path>]')
  const registryPath = resolve(argValue('--registry-root') ?? registryRoot)
  const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes)
  if (await sha256File(sqlitePath) !== source.archive.databaseSha256) throw new Error('ITIS SQLite SHA-256 mismatch')
  const registryManifestPath = join(registryPath, 'manifest.json'); const registryBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(ownershipPath); const ownership = JSON.parse(ownershipBytes)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const colSpecies = await loadColSpecies(JSON.parse(registryBytes), registryPath)
  const packageCount = ownership.packageCounts[PACKAGE_ID]
  if (colSpecies.length > packageCount) throw new Error('Orthonectida scope exceeds Other Animals ownership')
  const { root: itisRoot, currentRows, synonymRows, maxima } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS update dates do not match pinned source ledger')
  const index = createItisMammalNameIndex(currentRows, synonymRows)
  const crosswalk = colSpecies.map((record) => { const matched = matchColSpecies(record, index); return { status: matched.status, ...matched.record } }).sort((left, right) => compareId(left.colUsageId, right.colUsageId))
  const evidencedTsns = new Set(crosswalk.flatMap((record) => [record.currentName?.tsn, ...(record.candidates ?? []).map((candidate) => candidate.currentName.tsn)].filter(Boolean)))
  const upstreamOnly = currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No strict COL26.8 Orthonectida accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' }))
  mkdirSync(packRoot, { recursive: true })
  const shards = chunks(crosswalk).map((records, n) => fileDescriptor(join(packRoot, `itis-orthonectida-sidecar-${String(n).padStart(4, '0')}.jsonl.gz`), records, jsonlBytes(records)))
  const upstream = fileDescriptor(join(packRoot, 'itis-orthonectida-upstream-only-0000.jsonl.gz'), upstreamOnly, jsonlBytes(upstreamOnly))
  const count = (status) => crosswalk.filter((record) => record.status === status).length
  const counts = { total: crosswalk.length, accepted: count('accepted'), synonymCurrentNameRedirect: count('synonym-current-name-redirect'), ambiguous: count('ambiguous'), unmatched: count('unmatched'), itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID, scope: { packageRootUsageId: 'N', packageRootScientificName: 'Animalia', colRootUsageId: COL_ROOT_USAGE_ID, colRootScientificName: 'Orthonectida', colStrictAcceptedSpecies: colSpecies.length, packageStrictAcceptedSpecies: packageCount, packageOutOfScopeStrictAcceptedSpecies: packageCount - colSpecies.length, boundary: 'This sidecar covers only strict accepted COL26.8 species descending from exact Orthonectida root CVJLH.' }, sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } }, exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name directly equals one valid ITIS Orthonectida species.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence resolving to one valid ITIS Orthonectida species.', ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS species TSN.', unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Orthonectida species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' }, evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the declared Orthonectida partition; it is not a global checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.', zh: '此 CC0 ITIS 侧车是已声明 Orthonectida 分区的冻结严格命名交叉映射；它不是全球名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。' }, counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shards }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstream] } }
  const descriptorRecord = { bytes: jsonBytes(descriptor).length, sha256: sha256(jsonBytes(descriptor)) }
  writeFileSync(descriptorPath, jsonBytes(descriptor))
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-orthonectida-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: await sha256File(sqlitePath), colRegistryManifestPath: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes) }, scopeAudit: { ...descriptor.scope, itisRoot: { tsn: String(itisRoot.tsn), scientificName: itisRoot.completename, rank: itisRoot.rank_name, usage: itisRoot.name_usage }, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima }, matchingContract: descriptor.exactMatching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), ...descriptorRecord }, colUsageIdShards: shards, upstreamOnly: upstream }, deliveryContract: { pagesLight: 'Pages needs only this descriptor and may omit row-level JSONL gzip shards.', androidIosFull: 'Android and iOS inventories must include the descriptor and every listed row-level shard byte-for-byte.', runtimeChange: 'This import changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: 'scripts/build-itis-orthonectida-sidecar.mjs', scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, fixed roots, exact SQL, representation-only normalization and deterministic gzip.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ totals: counts, itisRoot, output: ledger.output }, null, 2))
}
await main()
