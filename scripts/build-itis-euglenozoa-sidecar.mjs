import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-euglenozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-euglenozoa-sidecar-import-ledger.json')
const ITIS_ROOT_TSN = 9601
const ITIS_ROOT_NAME = 'Euglenophycota'
const COL_PACKAGE_ID = 'protists-chromists'
const COL_UNAVAILABLE_ROOTS = new Set(['euglenozoa', 'euglenophycota'])
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const currentSpeciesQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid' ORDER BY u.tsn`
const synonymQuery = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
), accepted_species(tsn) AS (
  SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
) SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
async function sha256File(path) { const hash = createHash('sha256'); for await (const chunk of createReadStream(path)) hash.update(chunk); return hash.digest('hex') }
async function eachGzipJsonLine(path, visit) { const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity }); for await (const line of lines) if (line) visit(JSON.parse(line)) }

async function auditColScope() {
  const packManifestPath = join(packRoot, 'manifest.json')
  const packBytes = readFileSync(packManifestPath)
  const pack = JSON.parse(packBytes)
  if (pack.packageId !== COL_PACKAGE_ID || JSON.stringify(pack.browseRootIds) !== JSON.stringify(['C', 'Z'])) throw new Error('Pinned COL package is not the Chromista/Protozoa resource pack')
  let species = 0
  const duplicatedIds = new Set(); const seenIds = new Set()
  for (const file of pack.files) await eachGzipJsonLine(join(packRoot, file.path.split('/').at(-1)), (row) => {
    if (row.rank !== 'species' || row.status !== 'accepted') throw new Error(`Protists/Chromists pack contains a non-strict species row: ${row.id}`)
    species += 1; if (seenIds.has(row.id)) duplicatedIds.add(row.id); seenIds.add(row.id)
  })
  if (species !== pack.acceptedSpeciesCount || duplicatedIds.size) throw new Error('Protists/Chromists strict accepted-species package audit failed')
  const hierarchy = JSON.parse(readFileSync(join(registryRoot, 'manifest.json')))
  const unavailableRoots = []
  for (const file of hierarchy.hierarchy.nodes.files) await eachGzipJsonLine(join(registryRoot, ...file.path.split('/')), (row) => {
    const name = String(row.scientificName ?? '').normalize('NFC').trim().toLowerCase()
    if (COL_UNAVAILABLE_ROOTS.has(name.split(/\s/u, 1)[0])) unavailableRoots.push({ id: row.id, scientificName: row.scientificName, rank: row.rank, status: row.status, parentId: row.parentId ?? null })
  })
  if (unavailableRoots.length) throw new Error(`COL26.8 now exposes an audited Euglenozoa/Euglenophycota root; select a declared COL root before regenerating: ${JSON.stringify(unavailableRoots)}`)
  return { packManifestPath, packBytes, packageStrictAcceptedSpecies: species, colCandidateRoots: unavailableRoots }
}

function currentName(row) { return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) } }
function shardDescriptor(path, records, bytes, sourceBytes) { return { path: repoPath(path), records: records.length, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes), encoding: 'gzip', mediaType: 'application/x-ndjson', firstTsn: records[0]?.currentName.tsn ?? null, lastTsn: records.at(-1)?.currentName.tsn ?? null } }

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRecord = database.prepare('SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1').get(ITIS_ROOT_TSN)
    if (!rootRecord || rootRecord.completename !== ITIS_ROOT_NAME || rootRecord.rank_name !== 'Phylum' || rootRecord.name_usage !== 'valid') throw new Error('Pinned ITIS root is not the expected valid Euglenophycota phylum')
    const euglenozoa = database.prepare("SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(l.completename) LIKE 'euglenozoa%'").all()
    if (euglenozoa.length) throw new Error('ITIS now has an Euglenozoa entry; select and validate an explicit root before regenerating')
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRecord, euglenozoa, maxima, currentRows: database.prepare(currentSpeciesQuery).all(ITIS_ROOT_TSN), synonymRows: database.prepare(synonymQuery).all(ITIS_ROOT_TSN) }
  } finally { database.close() }
}

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-euglenozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1]); const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes); const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditColScope(); const { rootRecord, euglenozoa, maxima, currentRows, synonymRows } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
  const upstreamOnly = currentRows.map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No exact COL26.8 Euglenozoa or Euglenophycota root is present in the declared Protists/Chromists package, so no COL species can be assigned to this ITIS-only bounded partition.' }))
  mkdirSync(packRoot, { recursive: true }); for (const name of readdirSync(packRoot)) if (/^itis-euglenozoa-upstream-only-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
  const upstreamPath = join(packRoot, 'itis-euglenozoa-upstream-only-0000.jsonl.gz'); const upstreamSource = jsonlBytes(upstreamOnly); const upstreamBytes = Buffer.from(deterministicGzip(upstreamSource, { level: 9 })); writeFileSync(upstreamPath, upstreamBytes)
  const upstreamDescriptor = shardDescriptor(upstreamPath, upstreamOnly, upstreamBytes, upstreamSource)
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-itis-only-nomenclatural-partition', packageId: COL_PACKAGE_ID,
    scope: { requestedLabel: 'Euglenozoa', colPackageId: COL_PACKAGE_ID, colPackageRoots: ['C', 'Z'], colPackageStrictAcceptedSpecies: col.packageStrictAcceptedSpecies, colCandidateRoots: col.colCandidateRoots, colStrictAcceptedSpecies: 0, itisRootTsn: String(ITIS_ROOT_TSN), itisRootScientificName: ITIS_ROOT_NAME, itisRootRank: 'Phylum', boundary: 'COL26.8 has no exact Euglenozoa or Euglenophycota hierarchy root and ITIS has no Euglenozoa entry. The only reproducible ITIS scope is valid Euglenophycota TSN 9601; this is an ITIS-only partition, not a crosswalk for all Euglenozoa or a proxy for every Protists/Chromists species.' },
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', packageManifestPath: repoPath(col.packManifestPath), packageManifestSha256: sha256(col.packBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: 'Unavailable: no exact COL root defines an eligible crosswalk.', 'synonym-current-name-redirect': 'Unavailable: no exact COL root defines an eligible crosswalk.', ambiguous: 'Unavailable: no exact COL root defines an eligible crosswalk.', unmatched: 'Unavailable: no exact COL root defines an eligible crosswalk.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, taxon-substituted or package-wide name matching is used.' },
    evidenceBoundary: { en: 'This CC0 ITIS-only partition is a frozen identifier/status record for the explicitly bounded Euglenophycota export. It is not a global Euglenozoa checklist, a COL crosswalk, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.', zh: '此 CC0 ITIS-only 分区是对明确限定的 Euglenophycota 导出的冻结标识/状态记录；它不是全球 Euglenozoa 名录、COL 交叉映射、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。' },
    counts, colUsageIdLocator: { key: 'colUsageId', files: [], stableAddressing: 'No COL row shards exist because no exact COL root defines an eligible scope.' }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. Every current ITIS Euglenophycota species is in one immutable JSONL gzip shard.', files: [upstreamDescriptor] }, deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'GitHub Pages carries the descriptor and hashes but no ITIS Euglenophycota row shard.' }, 'native-full': { payload: 'complete', files: [upstreamDescriptor.path], records: upstreamOnly.length, totalCompressedBytes: upstreamDescriptor.bytes, totalSourceBytes: upstreamDescriptor.sourceBytes, statement: 'Android and iOS include the complete ITIS-only partition byte-for-byte.' } } }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'ITIS-2026-08-26-euglenozoa-request-boundary-audit', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colPackageManifestPath: repoPath(col.packManifestPath), colPackageManifestSha256: sha256(col.packBytes) }, scopeAudit: { ...descriptor.scope, itisRoot: { tsn: String(rootRecord.tsn), scientificName: rootRecord.completename, rank: rootRecord.rank_name, usage: rootRecord.name_usage }, exactItisEuglenozoaEntries: euglenozoa, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima }, matchingContract: descriptor.exactMatching, totals: descriptor.counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, upstreamOnly: upstreamDescriptor }, deliveryContract: { pagesLight: 'Pages needs only this descriptor and may omit the row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and the listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: 'scripts/build-itis-euglenozoa-sidecar.mjs', scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, root-audit guards, fixed SQL, stable TSN ordering and deterministic gzip; no wall-clock fields or name matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ totals: descriptor.counts, scope: descriptor.scope, output: ledger.output }, null, 2))
}
await main()
