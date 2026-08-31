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
// The sparse authority worktree deliberately reads the pinned, read-only COL projection
// from an existing full checkout; generated output remains exclusively in this worktree.
const fullProjectionRoot = 'D:/repo/repostew/evo-itis-phoronida-authority'
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const registryRoot = join(fullProjectionRoot, 'data/catalogue-of-life/releases/2026-08-20/registry')
const ownershipPath = join(fullProjectionRoot, 'data/registry/package-species-coverage.json')
const outputRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(outputRoot, 'itis-xenacoelomorpha-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-xenacoelomorpha-sidecar-import-ledger.json')
const COL_ROOT_USAGE_ID = '7NF2K'
const ITIS_ROOT_TSN = 914162
const PACKAGE_ID = 'other-animals'
const SHARD_LIMIT = 2 * 1024 * 1024

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

const sha = (bytes) => createHash('sha256').update(bytes).digest('hex')
const json = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`)
const jsonl = (rows) => Buffer.from(`${rows.map((row) => JSON.stringify(row)).join('\n')}\n`)
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
async function fileHash(path) { const hash = createHash('sha256'); for await (const chunk of createReadStream(path)) hash.update(chunk); return hash.digest('hex') }
async function lines(path, visit) { const input = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity }); for await (const line of input) if (line) visit(JSON.parse(line)) }

async function colSpecies(manifest) {
  const parents = new Map()
  const files = manifest.hierarchy.nodes.files.map((file) => join(registryRoot, ...file.path.split('/'))).sort(compare)
  for (const file of files) await lines(file, (row) => { if (row.rank !== 'species') parents.set(row.id, row.parentId) })
  const rows = []
  for (const file of files) await lines(file, (row) => {
    if (row.rank !== 'species' || row.status !== 'accepted') return
    let ancestor = row.parentId
    while (ancestor) {
      if (ancestor === COL_ROOT_USAGE_ID) { rows.push(row); return }
      ancestor = parents.get(ancestor)
      if (ancestor === undefined) throw new Error(`Broken COL parent chain for ${row.id}`)
    }
  })
  return rows.sort((a, b) => compare(a.id, b.id))
}
function named(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) }
}
function descriptor(path, rows, compressed, source) { return { path: repoPath(path), records: rows.length, firstColUsageId: rows[0]?.colUsageId ?? null, lastColUsageId: rows.at(-1)?.colUsageId ?? null, bytes: compressed.length, sha256: sha(compressed), sourceBytes: source.length, sourceSha256: sha(source) } }
function chunks(rows) {
  const all = []; let current = []; let used = 0
  for (const row of rows) { const bytes = Buffer.byteLength(JSON.stringify(row)) + 1; if (bytes > SHARD_LIMIT) throw new Error(`Record ${row.colUsageId} exceeds shard limit`); if (current.length && used + bytes > SHARD_LIMIT) { all.push(current); current = []; used = 0 }; current.push(row); used += bytes }
  return current.length ? [...all, current] : all
}
function readItis(sqlitePath) {
  const db = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRow = db.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(ITIS_ROOT_TSN)
    if (!rootRow || rootRow.completename !== 'Xenacoelomorpha' || rootRow.rank_name !== 'Phylum' || rootRow.name_usage !== 'valid') throw new Error('Pinned ITIS Xenacoelomorpha root identity changed')
    const maxima = db.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRow, maxima, current: db.prepare(currentQuery).all(ITIS_ROOT_TSN), synonyms: db.prepare(synonymQuery).all(ITIS_ROOT_TSN) }
  } finally { db.close() }
}

const argument = process.argv.indexOf('--itis-sqlite')
if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-xenacoelomorpha-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
const sqlitePath = resolve(process.argv[argument + 1])
const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes); const sqliteSha = await fileHash(sqlitePath)
if (sqliteSha !== source.archive.databaseSha256) throw new Error('ITIS SQLite SHA-256 mismatch')
const registryPath = join(registryRoot, 'manifest.json'); const registryBytes = readFileSync(registryPath); const ownershipBytes = readFileSync(ownershipPath); const ownership = JSON.parse(ownershipBytes)
if (sha(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
const species = await colSpecies(JSON.parse(registryBytes)); const packageCount = ownership.packageCounts[PACKAGE_ID]
if (!Number.isInteger(packageCount) || species.length > packageCount) throw new Error('COL package scope is inconsistent')
const itis = readItis(sqlitePath)
if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS update-date mismatch')
const index = createItisMammalNameIndex(itis.current, itis.synonyms); const totals = { accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0 }; const evidenced = new Set()
const crosswalk = species.map((record) => { const match = matchColSpecies(record, index); totals[match.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : match.status] += 1; const row = { status: match.status, ...match.record }; if (row.currentName) evidenced.add(row.currentName.tsn); for (const candidate of row.candidates ?? []) evidenced.add(candidate.currentName.tsn); return row }).sort((a, b) => compare(a.colUsageId, b.colUsageId))
const upstream = itis.current.filter((row) => !evidenced.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: named(row), basis: 'No strict COL26.8 Xenacoelomorpha accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' })).sort((a, b) => Number(a.currentName.tsn) - Number(b.currentName.tsn))
mkdirSync(outputRoot, { recursive: true }); for (const entry of readdirSync(outputRoot)) if (/^itis-xenacoelomorpha-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(entry)) rmSync(join(outputRoot, entry))
const shardFiles = chunks(crosswalk).map((rows, number) => { const path = join(outputRoot, `itis-xenacoelomorpha-sidecar-${String(number).padStart(4, '0')}.jsonl.gz`); const raw = jsonl(rows); const gzip = Buffer.from(deterministicGzip(raw, { level: 9 })); writeFileSync(path, gzip); return descriptor(path, rows, gzip, raw) })
const upstreamPath = join(outputRoot, 'itis-xenacoelomorpha-upstream-only-0000.jsonl.gz'); const upstreamRaw = jsonl(upstream); const upstreamGzip = Buffer.from(deterministicGzip(upstreamRaw, { level: 9 })); writeFileSync(upstreamPath, upstreamGzip); const upstreamFile = { ...descriptor(upstreamPath, upstream, upstreamGzip, upstreamRaw), colOwnership: null, firstTsn: upstream[0]?.currentName.tsn ?? null, lastTsn: upstream.at(-1)?.currentName.tsn ?? null }
const exactMatching = { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name resolves to exactly one valid ITIS Xenacoelomorpha species and directly equals that current ITIS name.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Xenacoelomorpha species.', ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Xenacoelomorpha species TSN.', unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Xenacoelomorpha species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' }
const scope = { colRootUsageId: COL_ROOT_USAGE_ID, colRootScientificName: 'Xenacoelomorpha', colStrictAcceptedSpecies: species.length, packageStrictAcceptedSpecies: packageCount, packageOutOfScopeStrictAcceptedSpecies: packageCount - species.length, boundary: 'other-animals is the deterministic Animalia remainder after every more-specific static-package route. This sidecar covers only strict accepted COL26.8 species descending from the exact Xenacoelomorpha root 7NF2K (including Acoela and Xenoturbellida); every other other-animals-owned species is explicitly non-applicable.' }
const counts = { total: crosswalk.length, ...totals, itisCurrentSpecies: itis.current.length, itisSpeciesSynonymLinks: itis.synonyms.length, itisUpstreamOnly: upstream.length }
const descriptorValue = { schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID, scope, sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', registryManifestSha256: sha(registryBytes), ownershipPath: 'data/registry/package-species-coverage.json', ownershipSha256: sha(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } }, exactMatching, evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for Xenacoelomorpha, not a global checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.', zh: '此 CC0 ITIS 侧车是 Xenacoelomorpha 的冻结严格命名交叉映射；它不是全球名录、最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。' }, counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_LIMIT, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shardFiles }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstreamFile] } }
const descriptorBytes = json(descriptorValue); writeFileSync(descriptorPath, descriptorBytes)
const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-xenacoelomorpha-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha, colRegistryManifestPath: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', colRegistryManifestSha256: sha(registryBytes), colOwnershipPath: 'data/registry/package-species-coverage.json', colOwnershipSha256: sha(ownershipBytes) }, scopeAudit: { ...scope, itisRoot: { tsn: String(itis.rootRow.tsn), scientificName: itis.rootRow.completename, rank: itis.rootRow.rank_name, usage: itis.rootRow.name_usage }, itisCurrentSpecies: itis.current.length, itisSpeciesSynonymLinks: itis.synonyms.length, maximumUpdateDates: itis.maxima }, matchingContract: exactMatching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha(descriptorBytes) }, colUsageIdShards: shardFiles, upstreamOnly: upstreamFile }, deliveryContract: { pagesLight: 'Pages needs only this descriptor and may omit every row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: 'scripts/build-itis-xenacoelomorpha-sidecar.mjs', scriptSha256: await fileHash(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
writeFileSync(ledgerPath, json(ledger)); console.log(JSON.stringify({ totals: counts, scope, output: ledger.output }, null, 2))
