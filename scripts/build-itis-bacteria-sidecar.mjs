import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies, sortCrosswalkRecords } from './itis-mammal-sidecar-lib.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const packsRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const packageRoot = join(packsRoot, 'bacteria')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ledgerPath = join(root, 'data/sources/itis-bacteria-sidecar-import-ledger.json')
const TSN = 50
const LIMIT = 512 * 1024
const ID = 'itis-bacteria-tsn-crosswalk'

const currentQuery = `WITH RECURSIVE d(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid' ORDER BY u.tsn`
const synonymQuery = `WITH RECURSIVE d(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
), a(tsn) AS (
  SELECT u.tsn FROM d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
) SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const json = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonl = (rows) => Buffer.from(`${rows.map((row) => JSON.stringify(row)).join('\n')}\n`, 'utf8')
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const output = (path, rows, bytes) => ({ path: path.slice(packsRoot.length + 1).replaceAll('\\', '/'), records: rows.length, bytes: bytes.length, sourceBytes: jsonl(rows).length, sha256: sha256(bytes), sourceSha256: sha256(jsonl(rows)), encoding: 'gzip', mediaType: 'application/x-ndjson' })
function chunks(rows) {
  const result = []; let current = []; let size = 0
  for (const row of rows) { const rowBytes = Buffer.byteLength(`${JSON.stringify(row)}\n`); if (current.length && size + rowBytes > LIMIT) { result.push(current); current = []; size = 0 } current.push(row); size += rowBytes }
  if (current.length) result.push(current)
  return result
}
function species(manifest) {
  const all = manifest.files.flatMap((file) => gunzipSync(readFileSync(join(packsRoot, file.path))).toString('utf8').trim().split('\n').map(JSON.parse))
  const scoped = all.filter((row) => String(row.sourceDatasetId) !== '2015')
  if (all.length !== 26397 || scoped.length !== 4827 || scoped.some((row) => row.rank !== 'species' || row.status !== 'accepted')) throw new Error('Expected exactly 4,827 non-LPSN accepted COL26.8 Bacteria species')
  return scoped
}
function readItis(sqlitePath) {
  const db = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRow = db.prepare(`SELECT u.tsn,l.completename,r.rank_name,u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn=u.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE u.tsn=?1`).get(TSN)
    if (!rootRow || rootRow.completename !== 'Bacteria' || rootRow.rank_name !== 'Kingdom' || rootRow.name_usage !== 'valid') throw new Error('Pinned ITIS Bacteria TSN 50 root identity changed')
    const current = db.prepare(currentQuery).all(TSN)
    const synonyms = db.prepare(synonymQuery).all(TSN)
    const maxima = db.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRow, current, synonyms, maxima }
  } finally { db.close() }
}
function writeShards(prefix, rows, ordering) {
  return chunks(rows).map((part, index) => {
    const path = join(packageRoot, `${prefix}-${String(index).padStart(4, '0')}.jsonl.gz`)
    const source = jsonl(part); const bytes = Buffer.from(deterministicGzip(source, { level: 9 })); writeFileSync(path, bytes)
    return { ...output(path, part, bytes), ...ordering(part) }
  })
}
function parseArgs(argv) { const index = argv.indexOf('--itis-sqlite'); if (index < 0 || !argv[index + 1]) throw new Error('Usage: node scripts/build-itis-bacteria-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return resolve(argv[index + 1]) }

const sqlitePath = parseArgs(process.argv.slice(2))
const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes)
if (sha256(readFileSync(sqlitePath)) !== source.archive.databaseSha256) throw new Error('ITIS SQLite SHA-256 mismatch')
const packManifestPath = join(packageRoot, 'manifest.json'); const packManifest = JSON.parse(readFileSync(packManifestPath, 'utf8'))
const scoped = species(packManifest); const { rootRow, current, synonyms, maxima } = readItis(sqlitePath)
if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS update-date mismatch')
const index = createItisMammalNameIndex(current, synonyms)
const groups = { accepted: [], synonymCurrentNameRedirect: [], ambiguous: [], unmatched: [] }; const evidenced = new Set()
for (const row of scoped) { const result = matchColSpecies(row, index); const key = result.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : result.status; groups[key].push(result.record); if (result.record.currentName) evidenced.add(result.record.currentName.tsn); for (const candidate of result.record.candidates ?? []) evidenced.add(candidate.currentName.tsn) }
for (const key of Object.keys(groups)) groups[key] = sortCrosswalkRecords(groups[key])
const crosswalk = Object.entries(groups).flatMap(([status, rows]) => rows.map((row) => ({ status, ...row }))).sort((a, b) => a.colUsageId.localeCompare(b.colUsageId))
const upstream = current.filter((row) => !evidenced.has(String(row.tsn))).map((row) => ({ tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: row.credibility_rtng ?? null, completenessRating: row.completeness_rtng ?? null, currencyRating: row.currency_rating ?? null, updateDate: row.update_date ?? null })).sort((a, b) => Number(a.tsn) - Number(b.tsn))
if (crosswalk.length !== 4827 || groups.accepted.length !== 4824 || groups.synonymCurrentNameRedirect.length || groups.ambiguous.length !== 2 || groups.unmatched.length !== 1 || current.length !== 14174 || upstream.length !== 9348) throw new Error(`Pinned Bacteria totals changed: ${JSON.stringify({ groups: Object.fromEntries(Object.entries(groups).map(([key, value]) => [key, value.length])), current: current.length, upstream: upstream.length })}`)
for (const name of readdirSync(packageRoot)) if (/^itis-bacteria-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packageRoot, name))
const crosswalkFiles = writeShards('itis-bacteria-sidecar', crosswalk, (rows) => ({ minColUsageId: rows[0].colUsageId, maxColUsageId: rows.at(-1).colUsageId }))
const upstreamFiles = writeShards('itis-bacteria-upstream-only', upstream, (rows) => ({ minTsn: rows[0].tsn, maxTsn: rows.at(-1).tsn }))
const files = [...crosswalkFiles, ...upstreamFiles]
const counts = { acceptedSpecies: 26397, eligible: 4827, nonApplicable: 21570, records: files.reduce((sum, file) => sum + file.records, 0), accepted: groups.accepted.length, redirects: groups.synonymCurrentNameRedirect.length, ambiguous: groups.ambiguous.length, unmatched: groups.unmatched.length, upstreamOnly: upstream.length, withheld: 0 }
const extension = { id: ID, recordType: 'release-pinned-exact-nomenclatural-crosswalk', provider: 'Integrated Taxonomic Information System', source: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(TSN), license: source.license.spdx, licenseUrl: source.license.url, citationDoi: source.citation.doi, sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), sourceLedgerBytes: sourceBytes.length }, scope: 'Exactly the 4,827 accepted COL26.8 Bacteria species whose sourceDatasetId is not 2015; this is a separate ITIS authority collection and does not alter, infer, or represent LPSN coverage.', scopeZh: '仅限 sourceDatasetId 不为 2015 的 4,827 个 COL26.8 接受细菌种；这是独立 ITIS 权威集合，不改变、不推断也不代表 LPSN 覆盖。', exactMatching: { normalization: source.importLedger.normalization, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, genus-substitution or higher-rank matching is used.' }, evidenceBoundary: { en: 'This CC0 ITIS collection is independently delivered beside the LPSN identifier collection. It never substitutes for LPSN source linkage or claims that non-LPSN COL records occur in LPSN.', zh: '此 CC0 ITIS 集合与 LPSN 标识符集合并列独立交付；绝不替代 LPSN 来源链接，也不声称非 LPSN COL 记录存在于 LPSN 中。' }, counts, fields: ['status', 'colUsageId', 'colScientificName', 'colAuthorship', 'exactMatchName', 'currentName', 'matchedSynonyms', 'candidates'], colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: LIMIT, files: crosswalkFiles }, upstreamOnly: { colOwnership: null, key: 'tsn', ordering: 'numeric TSN ascending', files: upstreamFiles }, files, totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0), totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0), deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: counts.records, files: files.map((file) => file.path) } }, limitations: ['This frozen exact-name crosswalk is not a final classification authority, species-concept equivalence assertion, biological dossier, ecology, genome, strain, fossil, media, translation, or expert-review record.', 'Ambiguous and unmatched COL names are retained without forced resolution.', 'LPSN retains its own source-dataset eligibility and licensing boundary.'] }
const next = { ...packManifest, extensions: [...(packManifest.extensions ?? []).filter((item) => item.id !== ID), extension] }; const packBytes = json(next); writeFileSync(packManifestPath, packBytes)
const collectionPath = join(packsRoot, 'manifest.json'); const collection = JSON.parse(readFileSync(collectionPath, 'utf8')); const descriptor = collection.packs.find((item) => item.packageId === 'bacteria'); Object.assign(descriptor, { manifestBytes: packBytes.length, manifestSha256: sha256(packBytes), extensionCount: next.extensions.length, extensionFileCount: next.extensions.reduce((sum, item) => sum + item.files.length, 0), extensionCompressedBytes: next.extensions.reduce((sum, item) => sum + item.totalCompressedBytes, 0), extensionSourceBytes: next.extensions.reduce((sum, item) => sum + item.totalSourceBytes, 0) }); writeFileSync(collectionPath, json(collection))
const ledger = { schemaVersion: 1, importType: 'COL26.8-non-LPSN-to-ITIS-exact-bacteria-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseSha256: sha256(readFileSync(sqlitePath)), resourcePackManifestPath: repoPath(packManifestPath), resourcePackManifestSha256: sha256(packBytes) }, scopeAudit: { colAcceptedSpecies: 26397, colNonLpsnSpecies: scoped.length, lpsnExcludedBySourceDatasetId: 21570, itisRoot: { tsn: String(rootRow.tsn), scientificName: rootRow.completename, rank: rootRow.rank_name, usage: rootRow.name_usage }, itisCurrentSpecies: current.length, itisSpeciesSynonymLinks: synonyms.length, itisUpstreamOnly: upstream.length, maximumUpdateDates: maxima }, totals: counts, output: { colUsageIdShards: crosswalkFiles, upstreamOnly: upstreamFiles }, deliveryContract: { pagesLight: 'Pages needs only this extension summary and hashes; all row-level JSONL gzip shards are omitted.', androidIosFull: 'Android and iOS include every checksum-addressed crosswalk and ITIS-only shard.' }, generatedBy: { scriptPath: repoPath(scriptPath), deterministic: 'Pinned checksums, fixed roots, exact SQL, representation-only normalization, stable ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }; writeFileSync(ledgerPath, json(ledger))
console.log(JSON.stringify({ id: ID, counts, files: { crosswalk: crosswalkFiles.length, upstream: upstreamFiles.length }, sha256: sha256(packBytes) }, null, 2))
