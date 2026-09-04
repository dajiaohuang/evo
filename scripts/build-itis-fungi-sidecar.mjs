import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName, sortCrosswalkRecords } from './itis-mammal-sidecar-lib.mjs'
import { replaceOwnedExtensions } from './manifest-extension-utils.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packsRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const packRoot = join(packsRoot, 'fungi')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ledgerPath = join(root, 'data/sources/itis-fungi-sidecar-import-ledger.json')
const TSN = 555705
const LIMIT = 512 * 1024
const ID = 'itis-fungi-tsn-crosswalk'
const USAGE = 'accepted'

const currentQuery = `WITH RECURSIVE d(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN d ON u.parent_tsn = d.tsn WHERE u.name_usage = ?2
) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = ?2 ORDER BY u.tsn`
const synonymQuery = `WITH RECURSIVE d(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN d ON u.parent_tsn = d.tsn WHERE u.name_usage = ?2
), a(tsn) AS (
  SELECT u.tsn FROM d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = ?2
) SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const json = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonl = (rows) => Buffer.from(`${rows.map((row) => JSON.stringify(row)).join('\n')}\n`, 'utf8')
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const output = (path, rows, bytes) => ({ path: path.slice(packsRoot.length + 1).replaceAll('\\', '/'), records: rows.length, bytes: bytes.length, sourceBytes: jsonl(rows).length, sha256: sha256(bytes), sourceSha256: sha256(jsonl(rows)), encoding: 'gzip', mediaType: 'application/x-ndjson' })
const chunks = (rows) => {
  const result = []; let current = []; let size = 0
  for (const row of rows) { const rowBytes = Buffer.byteLength(`${JSON.stringify(row)}\n`); if (current.length && size + rowBytes > LIMIT) { result.push(current); current = []; size = 0 } current.push(row); size += rowBytes }
  if (current.length) result.push(current)
  return result
}
const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
const currentRecord = (row) => ({ tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) })
const synonymRecord = (row) => ({ tsn: String(row.synonym_tsn), scientificName: String(row.synonym_name), usage: String(row.synonym_usage), unacceptabilityReason: clean(row.unaccept_reason), updateDate: clean(row.synonym_update_date) })

function species(manifest) {
  const rows = manifest.files.flatMap((file) => gunzipSync(readFileSync(join(packsRoot, file.path))).toString('utf8').trim().split('\n').map(JSON.parse))
  if (rows.length !== 157044 || rows.some((row) => row.rank !== 'species' || row.status !== 'accepted')) throw new Error('Expected exactly 157,044 accepted COL26.8 Fungi species')
  return rows
}
function readItis(sqlitePath) {
  const db = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRow = db.prepare(`SELECT u.tsn,l.completename,r.rank_name,u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn=u.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE u.tsn=?1`).get(TSN)
    if (!rootRow || rootRow.completename !== 'Fungi' || rootRow.rank_name !== 'Kingdom' || rootRow.name_usage !== USAGE) throw new Error('Pinned ITIS Fungi TSN 555705 root identity changed')
    const current = db.prepare(currentQuery).all(TSN, USAGE)
    const synonyms = db.prepare(synonymQuery).all(TSN, USAGE)
    const maxima = db.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRow, current, synonyms, maxima }
  } finally { db.close() }
}
function indexNames(current, synonyms) {
  const currentByTsn = new Map(); const names = new Map()
  const entry = (name, tsn) => { const key = normalizeScientificName(name); if (!names.has(key)) names.set(key, new Map()); const targets = names.get(key); if (!targets.has(tsn)) targets.set(tsn, { current: currentByTsn.get(tsn), direct: [], synonyms: [] }); return targets.get(tsn) }
  for (const row of current) { const record = currentRecord(row); if (record.usage !== USAGE || currentByTsn.has(record.tsn)) throw new Error(`Unexpected ITIS Fungi current species: ${record.tsn}/${record.usage}`); currentByTsn.set(record.tsn, record) }
  for (const record of currentByTsn.values()) entry(record.scientificName, record.tsn).direct.push(record)
  for (const row of synonyms) { const record = synonymRecord(row); const target = String(row.tsn_accepted); if (!currentByTsn.has(target)) throw new Error(`ITIS synonym target absent from Fungi current query: ${target}`); entry(record.scientificName, target).synonyms.push(record) }
  return names
}
function match(row, index) {
  const exactMatchName = colExactMatchName(row); const candidates = [...(index.get(exactMatchName)?.values() ?? [])].sort((a, b) => Number(a.current.tsn) - Number(b.current.tsn)); const base = { colUsageId: String(row.id), colScientificName: String(row.scientificName), colAuthorship: clean(row.authorship), exactMatchName }
  if (!candidates.length) return { status: 'unmatched', record: base }
  if (candidates.length > 1) return { status: 'ambiguous', record: { ...base, candidates: candidates.map((candidate) => ({ currentName: candidate.current, evidence: [...candidate.direct.map((name) => ({ type: 'accepted-name', name })), ...candidate.synonyms.map((name) => ({ type: 'synonym', name }))] })) } }
  const [candidate] = candidates
  return candidate.direct.length ? { status: 'accepted', record: { ...base, currentName: candidate.current } } : { status: 'synonym-current-name-redirect', record: { ...base, matchedSynonyms: candidate.synonyms, currentName: candidate.current } }
}
function writeShards(prefix, rows, ordering) { return chunks(rows).map((part, index) => { const path = join(packRoot, `${prefix}-${String(index).padStart(4, '0')}.jsonl.gz`); const source = jsonl(part); const bytes = Buffer.from(deterministicGzip(source, { level: 9 })); writeFileSync(path, bytes); return { ...output(path, part, bytes), ...ordering(part) } }) }
function parseArgs(argv) { const index = argv.indexOf('--itis-sqlite'); if (index < 0 || !argv[index + 1]) throw new Error('Usage: node scripts/build-itis-fungi-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return resolve(argv[index + 1]) }

const sqlitePath = parseArgs(process.argv.slice(2)); const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes)
if (sha256(readFileSync(sqlitePath)) !== source.archive.databaseSha256) throw new Error('ITIS SQLite SHA-256 mismatch')
const packManifestPath = join(packRoot, 'manifest.json'); const packManifest = JSON.parse(readFileSync(packManifestPath, 'utf8')); const scoped = species(packManifest); const { rootRow, current, synonyms, maxima } = readItis(sqlitePath)
if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS update-date mismatch')
const index = indexNames(current, synonyms); const groups = { accepted: [], synonymCurrentNameRedirect: [], ambiguous: [], unmatched: [] }; const evidenced = new Set()
for (const row of scoped) { const result = match(row, index); groups[result.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : result.status].push(result.record); if (result.record.currentName) evidenced.add(result.record.currentName.tsn); for (const candidate of result.record.candidates ?? []) evidenced.add(candidate.currentName.tsn) }
for (const key of Object.keys(groups)) groups[key] = sortCrosswalkRecords(groups[key])
const crosswalk = Object.entries(groups).flatMap(([status, rows]) => rows.map((row) => ({ status, ...row }))).sort((a, b) => a.colUsageId.localeCompare(b.colUsageId))
const upstream = current.filter((row) => !evidenced.has(String(row.tsn))).map((row) => ({ tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: row.credibility_rtng ?? null, completenessRating: row.completeness_rtng ?? null, currencyRating: row.currency_rating ?? null, updateDate: row.update_date ?? null })).sort((a, b) => Number(a.tsn) - Number(b.tsn))
if (crosswalk.length !== 157044 || groups.accepted.length !== 928 || groups.synonymCurrentNameRedirect.length !== 45 || groups.ambiguous.length !== 1 || groups.unmatched.length !== 156070 || current.length !== 2714 || synonyms.length !== 267 || upstream.length !== 1761) throw new Error(`Pinned Fungi totals changed: ${JSON.stringify({ groups: Object.fromEntries(Object.entries(groups).map(([key, value]) => [key, value.length])), current: current.length, synonyms: synonyms.length, upstream: upstream.length })}`)
for (const name of readdirSync(packRoot)) if (/^itis-fungi-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
const crosswalkFiles = writeShards('itis-fungi-sidecar', crosswalk, (rows) => ({ minColUsageId: rows[0].colUsageId, maxColUsageId: rows.at(-1).colUsageId }))
const upstreamFiles = writeShards('itis-fungi-upstream-only', upstream, (rows) => ({ minTsn: rows[0].tsn, maxTsn: rows.at(-1).tsn }))
const files = [...crosswalkFiles, ...upstreamFiles]; const counts = { acceptedSpecies: 157044, eligible: 157044, nonApplicable: 0, records: files.reduce((sum, file) => sum + file.records, 0), accepted: groups.accepted.length, redirects: groups.synonymCurrentNameRedirect.length, ambiguous: groups.ambiguous.length, unmatched: groups.unmatched.length, upstreamOnly: upstream.length, withheld: 0 }
const extension = { id: ID, recordType: 'release-pinned-exact-nomenclatural-crosswalk', provider: 'Integrated Taxonomic Information System', source: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(TSN), license: source.license.spdx, licenseUrl: source.license.url, citationDoi: source.citation.doi, sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), sourceLedgerBytes: sourceBytes.length }, scope: 'Exactly the 157,044 accepted COL26.8 Fungi species under the exact Fungi kingdom root. This independent CC0 ITIS authority collection does not replace, alter or imply Index Fungorum linkage.', scopeZh: '仅限精确 Fungi 界根下的 157,044 个 COL26.8 接受真菌种。此独立 CC0 ITIS 权威集合不替代、不改变也不推断 Index Fungorum 链接。', exactMatching: { normalization: source.importLedger.normalization, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, genus-substitution or higher-rank matching is used.' }, evidenceBoundary: { en: 'This CC0 ITIS collection is independently delivered beside the Index Fungorum identifier collection. It never substitutes for Index Fungorum source linkage or claims an ITIS record is an Index Fungorum record.', zh: '此 CC0 ITIS 集合与 Index Fungorum 标识符集合独立并列交付；绝不替代 Index Fungorum 来源链接，也不声称 ITIS 记录属于 Index Fungorum。' }, counts, fields: ['status', 'colUsageId', 'colScientificName', 'colAuthorship', 'exactMatchName', 'currentName', 'matchedSynonyms', 'candidates'], colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: LIMIT, files: crosswalkFiles }, upstreamOnly: { colOwnership: null, key: 'tsn', ordering: 'numeric TSN ascending', files: upstreamFiles }, files, totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0), totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0), deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: counts.records, files: files.map((file) => file.path) } }, limitations: ['This frozen exact-name crosswalk is not a final classification authority, species-concept equivalence assertion, biological dossier, ecology, genome, strain, fossil, media, translation, or expert-review record.', 'Ambiguous and unmatched COL names are retained without forced resolution.', 'Index Fungorum retains its own source-dataset eligibility, identifier and rights boundary.'] }
const next = { ...packManifest, extensions: replaceOwnedExtensions(packManifest.extensions ?? [], [extension], (item) => item.id === ID) }; const packBytes = json(next); writeFileSync(packManifestPath, packBytes)
const collectionPath = join(packsRoot, 'manifest.json'); const collection = JSON.parse(readFileSync(collectionPath, 'utf8')); const descriptor = collection.packs.find((item) => item.packageId === 'fungi'); Object.assign(descriptor, { manifestBytes: packBytes.length, manifestSha256: sha256(packBytes), extensionCount: next.extensions.length, extensionFileCount: next.extensions.reduce((sum, item) => sum + item.files.length + (item.upstreamOnlyFiles?.length ?? 0), 0), extensionCompressedBytes: next.extensions.reduce((sum, item) => sum + item.totalCompressedBytes + (item.upstreamOnlyFiles ?? []).reduce((bytes, file) => bytes + file.bytes, 0), 0), extensionSourceBytes: next.extensions.reduce((sum, item) => sum + item.totalSourceBytes + (item.upstreamOnlyFiles ?? []).reduce((bytes, file) => bytes + file.sourceBytes, 0), 0) }); writeFileSync(collectionPath, json(collection))
const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-fungi-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseSha256: sha256(readFileSync(sqlitePath)), resourcePackManifestPath: repoPath(packManifestPath), resourcePackManifestSha256: sha256(packBytes) }, scopeAudit: { colAcceptedSpecies: scoped.length, itisRoot: { tsn: String(rootRow.tsn), scientificName: rootRow.completename, rank: rootRow.rank_name, usage: rootRow.name_usage }, itisCurrentSpecies: current.length, itisSpeciesSynonymLinks: synonyms.length, itisUpstreamOnly: upstream.length, maximumUpdateDates: maxima }, totals: counts, output: { colUsageIdShards: crosswalkFiles, upstreamOnly: upstreamFiles }, deliveryContract: { pagesLight: 'Pages publishes only the extension summary and canonical hashes; all row-level JSONL gzip shards are omitted.', androidIosFull: 'Android and iOS include every checksum-addressed crosswalk and ITIS-only shard.' }, generatedBy: { scriptPath: repoPath(fileURLToPath(import.meta.url)), deterministic: 'Pinned checksums, exact root, exact SQL, representation-only normalization, stable ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }; writeFileSync(ledgerPath, json(ledger))
console.log(JSON.stringify({ id: ID, counts, files: { crosswalk: crosswalkFiles.length, upstream: upstreamFiles.length }, sha256: sha256(packBytes) }, null, 2))
