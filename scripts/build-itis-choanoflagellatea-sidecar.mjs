import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip, gzipSync } from 'node:zlib'
import { colExactMatchName } from './itis-choanoflagellatea-sidecar-lib.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const releaseRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20')
const registryRoot = join(releaseRoot, 'registry')
const canonicalPackRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const canonicalPackManifestPath = join(canonicalPackRoot, 'manifest.json')
const descriptorPath = join(canonicalPackRoot, 'itis-choanoflagellatea-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-choanoflagellatea-sidecar-import-ledger.json')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const ITIS_NAME = 'Choanoflagellatea'
const COL_NAME = 'Choanoflagellatea'
const COL_PACKAGE_ID = 'protists-chromists'
const COL_PACKAGE_ROOTS = ['C', 'Z']
const EXPECTED_PACKAGE_SPECIES = 61518
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const repoPath = (value) => value.slice(root.length + 1).replaceAll('\\', '/')
const deterministicGzip = (bytes) => { const compressed = gzipSync(bytes, { level: 9, mtime: 0 }); compressed[9] = 255; return compressed }

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

function parseArgs(argv) {
  const options = { registryRoot, packRoot: canonicalPackRoot, outputRoot: canonicalPackRoot, ownershipPath, itisSourceLedgerPath: sourcePath }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--pack-root') options.packRoot = resolve(argv[++index])
    else if (value === '--output-root') options.outputRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.itisSourceLedgerPath = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-choanoflagellatea-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  return options
}

async function auditColScope(options) {
  const manifestPath = join(options.registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const files = manifest.hierarchy.nodes.files.map((file) => join(options.registryRoot, ...file.path.split('/'))).sort((left, right) => left.localeCompare(right))
  const nodes = []
  for (const path of files) await eachGzipJsonLine(path, (record) => nodes.push(record))
  const candidates = nodes.filter((record) => record.rank !== 'species' && colExactMatchName(record) === COL_NAME)
  if (candidates.length) throw new Error(`Pinned COL registry now contains an exact ${COL_NAME} root; reassess the zero-scope contract: ${JSON.stringify(candidates)}`)
  const packManifestPath = join(options.packRoot, 'manifest.json')
  const packManifestBytes = readFileSync(packManifestPath)
  const pack = JSON.parse(packManifestBytes)
  if (pack.packageId !== COL_PACKAGE_ID || JSON.stringify(pack.browseRootIds) !== JSON.stringify(COL_PACKAGE_ROOTS) || pack.acceptedSpeciesCount !== EXPECTED_PACKAGE_SPECIES) throw new Error('Pinned COL package is not the expected Protists and Chromists owner')
  return { manifestPath, manifestBytes, packManifestPath, packManifestBytes, pack, candidates }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const exactNameCandidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`).all(ITIS_NAME)
    const nearbyNameCandidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`).all('Choanoflagellida')
    if (exactNameCandidates.length) throw new Error(`Pinned ITIS export now contains an exact ${ITIS_NAME} name; reassess the root contract before regenerating: ${JSON.stringify(exactNameCandidates)}`)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { exactNameCandidates, nearbyNameCandidates, maxima }
  } finally { database.close() }
}

function emptyShardDescriptor(path, bytes, sourceBytes) {
  return { path: repoPath(path), records: 0, firstColUsageId: null, lastColUsageId: null, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes) }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-choanoflagellatea-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.itisSourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditColScope(options)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === COL_PACKAGE_ID)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== EXPECTED_PACKAGE_SPECIES || ownership.packageCounts?.[COL_PACKAGE_ID] !== EXPECTED_PACKAGE_SPECIES || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(COL_PACKAGE_ROOTS)) throw new Error('Pinned COL package ownership does not match the Protists and Chromists contract')
  const itis = loadItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  const outputRoot = options.outputRoot
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-choanoflagellatea-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const sourcePayload = jsonlBytes([])
  const bytes = Buffer.from(deterministicGzip(sourcePayload, { level: 9 }))
  const sidecarPath = join(outputRoot, 'itis-choanoflagellatea-sidecar-0000.jsonl.gz'); writeFileSync(sidecarPath, bytes)
  const sidecar = emptyShardDescriptor(sidecarPath, bytes, sourcePayload)
  const upstreamPath = join(outputRoot, 'itis-choanoflagellatea-upstream-only-0000.jsonl.gz'); writeFileSync(upstreamPath, bytes)
  const upstream = { ...emptyShardDescriptor(upstreamPath, bytes, sourcePayload), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const scope = { packageRootUsageIds: COL_PACKAGE_ROOTS, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: null, colRootScientificName: COL_NAME, colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: EXPECTED_PACKAGE_SPECIES, packageOutOfScopeStrictAcceptedSpecies: EXPECTED_PACKAGE_SPECIES, boundary: `No exact COL26.8 ${COL_NAME} root exists in the pinned registry; no species are inferred from a nearby kingdom, phylum or order. The declared Protists and Chromists owner remains the package boundary.` }
  const rootBoundaryAudit = { colExactNameCandidates: col.candidates, itisExactNameCandidates: itis.exactNameCandidates, itisNearbyNameCandidates: itis.nearbyNameCandidates, selectedColRoot: null, selectedItisRoot: null, decision: `No exact COL26.8 ${COL_NAME} root and no exact ITIS ${ITIS_NAME} root exist in the pinned snapshots. ITIS Choanoflagellida is recorded only as a nearby non-substitute; no crosswalk rows or ITIS-only rows are asserted.` }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: COL_PACKAGE_ID, scope,
    rootBoundaryAudit,
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), packageManifestPath: repoPath(canonicalPackManifestPath), packageManifestSha256: sha256(col.packManifestBytes), ownershipPath: repoPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, rootScientificName: ITIS_NAME, rootStatus: 'absent', sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: `Unavailable: the pinned COL registry has no exact ${COL_NAME} root.`, 'synonym-current-name-redirect': `Unavailable: the pinned COL registry has no exact ${COL_NAME} root.`, ambiguous: `Unavailable: the pinned COL registry has no exact ${COL_NAME} root.`, unmatched: `No ${COL_NAME} scope exists to match; no nearby taxon is substituted.` }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, kingdom-wide, package-wide or taxon-substituted matching is used.' },
    evidenceBoundary: { en: `This CC0 ITIS sidecar records a zero-row exact-root audit for the named Choanoflagellatea scope. Neither pinned COL26.8 nor ITIS contains an exact ${COL_NAME} root; the nearby ITIS Choanoflagellida order is not substituted. It is not a global choanoflagellate checklist, classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.`, zh: '此 CC0 ITIS 侧车记录所声明领鞭毛虫范围的零行精确根审计。固定的 COL26.8 与 ITIS 均不存在精确 Choanoflagellatea 根节点；附近的 ITIS Choanoflagellida 目不作为替代。它不是全球领鞭毛虫名录、分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。' },
    counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'The explicit empty shard is immutable and contains no COL usage IDs.', files: [sidecar] },
    upstreamOnly: { colOwnership: null, stableAddressing: 'The explicit empty shard is immutable because no exact COL or ITIS root is available; no ITIS-only species are inferred.', files: [upstream] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [sidecar.path, upstream.path], records: 0, totalCompressedBytes: sidecar.bytes + upstream.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-choanoflagellatea-zero-root-audit', generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colPackageManifestPath: repoPath(canonicalPackManifestPath), colPackageManifestSha256: sha256(col.packManifestBytes), colOwnershipPath: repoPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) }, scopeAudit: { ...scope, rootBoundaryAudit, maximumUpdateDates: itis.maxima }, matchingContract: descriptor.exactMatching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [sidecar], upstreamOnly: upstream }, deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit both empty row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and both listed empty checksum-addressed shards.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact missing-root audits, fixed package ownership, representation-only normalization and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger)); console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
