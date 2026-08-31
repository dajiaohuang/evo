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
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const descriptorPath = join(packRoot, 'itis-micrognathozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-micrognathozoa-sidecar-import-ledger.json')
const COL_ROOT_USAGE_ID = '54'
const ITIS_ROOT_TSN = 808373
const scopeName = 'Micrognathozoa'

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const bytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonl = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compare = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const fileHash = async (path) => { const hash = createHash('sha256'); for await (const chunk of createReadStream(path)) hash.update(chunk); return hash.digest('hex') }
const output = (path, records, packed, source) => ({ path: repoPath(path), records: records.length, firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null, bytes: packed.length, sha256: sha256(packed), sourceBytes: source.length, sourceSha256: sha256(source) })

async function eachLine(path, visitor) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visitor(JSON.parse(line))
}

async function colSpecies(manifest) {
  const parents = new Map(); const rows = []
  for (const file of manifest.hierarchy.nodes.files) await eachLine(join(registryRoot, ...file.path.split('/')), (row) => { rows.push(row); if (row.rank !== 'species') parents.set(row.id, row.parentId) })
  return rows.filter((row) => {
    if (row.rank !== 'species' || row.status !== 'accepted') return false
    for (let parent = row.parentId; parent; parent = parents.get(parent)) if (parent === COL_ROOT_USAGE_ID) return true
    return false
  }).sort((left, right) => compare(left.id, right.id))
}

function itis(sqlitePath) {
  const db = new DatabaseSync(sqlitePath, { readOnly: true })
  const descendants = `WITH RECURSIVE d(tsn) AS (SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid')`
  const current = `${descendants} SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date FROM d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN longnames l ON l.tsn = u.tsn WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid' ORDER BY u.tsn`
  const synonyms = `${descendants}, accepted_species(tsn) AS (SELECT u.tsn FROM d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid') SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id JOIN longnames sl ON sl.tsn = su.tsn WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`
  try {
    const rootRecord = db.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(ITIS_ROOT_TSN)
    if (!rootRecord || rootRecord.completename !== scopeName || rootRecord.rank_name !== 'Phylum' || rootRecord.name_usage !== 'valid') throw new Error('Pinned ITIS Micrognathozoa root identity changed')
    const maxima = db.prepare("SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks").get()
    return { rootRecord, maxima, current: db.prepare(current).all(ITIS_ROOT_TSN), synonyms: db.prepare(synonyms).all(ITIS_ROOT_TSN) }
  } finally { db.close() }
}

async function main() {
  const index = process.argv.indexOf('--itis-sqlite'); if (index < 0 || !process.argv[index + 1]) throw new Error('Usage: node scripts/build-itis-micrognathozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[index + 1]); const sourceBytes = readFileSync(sourcePath); const source = JSON.parse(sourceBytes)
  if (await fileHash(sqlitePath) !== source.archive.databaseSha256) throw new Error('ITIS SQLite SHA-256 mismatch')
  const registryBytes = readFileSync(join(registryRoot, 'manifest.json')); const ownershipBytes = readFileSync(ownershipPath); const packManifestBytes = readFileSync(join(packRoot, 'manifest.json'))
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const species = await colSpecies(JSON.parse(registryBytes)); const ownership = JSON.parse(ownershipBytes); const pack = JSON.parse(packManifestBytes)
  if (pack.packageId !== 'other-animals' || pack.acceptedSpeciesCount !== ownership.packageCounts['other-animals']) throw new Error('Other Animals package ownership mismatch')
  const { rootRecord, maxima, current, synonyms } = itis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS maximum update dates changed')
  const nameIndex = createItisMammalNameIndex(current, synonyms); const records = species.map((row) => ({ status: matchColSpecies(row, nameIndex).status, ...matchColSpecies(row, nameIndex).record })).sort((left, right) => compare(left.colUsageId, right.colUsageId))
  const evidenceTsns = new Set(records.flatMap((record) => [record.currentName?.tsn, ...(record.candidates ?? []).map((candidate) => candidate.currentName.tsn)]).filter(Boolean))
  const currentName = (row) => ({ tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: row.credibility_rtng ?? null, completenessRating: row.completeness_rtng ?? null, currencyRating: row.currency_rating ?? null, updateDate: row.update_date ?? null })
  const upstream = current.filter((row) => !evidenceTsns.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No strict COL26.8 Micrognathozoa accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.' }))
  mkdirSync(packRoot, { recursive: true }); for (const name of readdirSync(packRoot)) if (/^itis-micrognathozoa-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
  const write = (filename, rows) => { const raw = jsonl(rows); const packed = Buffer.from(deterministicGzip(raw, { level: 9 })); const path = join(packRoot, filename); writeFileSync(path, packed); return { raw, packed, path, descriptor: output(path, rows, packed, raw) } }
  const primary = write('itis-micrognathozoa-sidecar-0000.jsonl.gz', records); const only = write('itis-micrognathozoa-upstream-only-0000.jsonl.gz', upstream)
  const counts = { total: records.length, accepted: records.filter((record) => record.status === 'accepted').length, synonymCurrentNameRedirect: records.filter((record) => record.status === 'synonym-current-name-redirect').length, ambiguous: records.filter((record) => record.status === 'ambiguous').length, unmatched: records.filter((record) => record.status === 'unmatched').length, itisCurrentSpecies: current.length, itisSpeciesSynonymLinks: synonyms.length, itisUpstreamOnly: upstream.length }
  const matching = { normalization: source.importLedger.normalization, statuses: { accepted: 'The normalized COL name resolves to exactly one valid ITIS Micrognathozoa species and directly equals that current ITIS name.', 'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Micrognathozoa species.', ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Micrognathozoa species TSN.', unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Micrognathozoa species.' }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: 'other-animals', scope: { colRootUsageId: COL_ROOT_USAGE_ID, colRootScientificName: scopeName, colStrictAcceptedSpecies: species.length, packageStrictAcceptedSpecies: pack.acceptedSpeciesCount, packageOutOfScopeStrictAcceptedSpecies: pack.acceptedSpeciesCount - species.length, boundary: 'other-animals is the deterministic Animalia remainder after more-specific static-package routes. This sidecar covers only strict accepted COL26.8 species descending from exact Micrognathozoa root 54; every other other-animals-owned species is explicitly outside this sidecar.' }, sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(join(registryRoot, 'manifest.json')), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } }, exactMatching: matching, evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the declared Micrognathozoa partition inside the mixed Other Animals resource pack. It is not a global micrognathozoan checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.', zh: '此 CC0 ITIS 侧车是混合“其他动物”资源包中所声明微颚动物分区的冻结严格命名交叉映射；它不是全球微颚动物名录、最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。' }, counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: 2 * 1024 * 1024, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: [primary.descriptor] }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [{ ...only.descriptor, colOwnership: null, firstTsn: upstream[0]?.currentName.tsn ?? null, lastTsn: upstream.at(-1)?.currentName.tsn ?? null }] } }
  const descriptorBytes = bytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-micrognathozoa-nomenclatural-sidecar', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: await fileHash(sqlitePath), colRegistryManifestPath: repoPath(join(registryRoot, 'manifest.json')), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes), resourcePackManifestPath: repoPath(join(packRoot, 'manifest.json')), resourcePackManifestSha256: sha256(packManifestBytes) }, scopeAudit: { ...descriptor.scope, itisRoot: { tsn: String(rootRecord.tsn), scientificName: rootRecord.completename, rank: rootRecord.rank_name, usage: rootRecord.name_usage }, itisCurrentSpecies: current.length, itisSpeciesSynonymLinks: synonyms.length, maximumUpdateDates: maxima }, matchingContract: matching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [primary.descriptor], upstreamOnly: descriptor.upstreamOnly.files[0] }, deliveryContract: { pagesLight: 'Pages needs only this descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: 'scripts/build-itis-micrognathozoa-sidecar.mjs', scriptSha256: await fileHash(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
  writeFileSync(ledgerPath, bytes(ledger)); console.log(JSON.stringify({ totals: counts, output: ledger.output }, null, 2))
}

await main()
