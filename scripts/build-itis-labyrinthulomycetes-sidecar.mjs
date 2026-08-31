import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip, gzipSync } from 'node:zlib'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const releaseRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20')
const canonicalPackRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const canonicalRegistryRoot = join(releaseRoot, 'registry')
const canonicalSourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const canonicalOwnershipPath = join(root, 'data/registry/package-species-coverage.json')
const canonicalOutputRoot = canonicalPackRoot
const descriptorName = 'itis-labyrinthulomycetes-sidecar.json'
const ledgerPath = join(root, 'data/sources/itis-labyrinthulomycetes-sidecar-import-ledger.json')
const PACKAGE_ID = 'protists-chromists'
const PACKAGE_ROOTS = ['C', 'Z']
const PACKAGE_SPECIES = 61518
const REQUESTED_NAME = 'Labyrinthulomycetes'
const NEARBY_NAME = 'Labyrinthulea'
const BIGYRA_COL_ROOT = { id: '622CB', scientificName: 'Bigyra', rank: 'phylum', status: 'accepted' }

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')
const deterministicGzip = (bytes) => {
  const compressed = gzipSync(bytes, { level: 9, mtime: 0 })
  compressed[9] = 255
  return compressed
}

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
  const options = {
    registryRoot: canonicalRegistryRoot,
    packRoot: canonicalPackRoot,
    outputRoot: canonicalOutputRoot,
    ownershipPath: canonicalOwnershipPath,
    sourcePath: canonicalSourcePath,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--pack-root') options.packRoot = resolve(argv[++index])
    else if (value === '--output-root') options.outputRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.sourcePath = resolve(argv[++index])
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-labyrinthulomycetes-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  return options
}

function candidate(record) {
  return {
    id: String(record.id),
    scientificName: String(record.scientificName),
    rank: String(record.rank),
    status: String(record.status),
    parentId: record.parentId === null || record.parentId === undefined ? null : String(record.parentId),
  }
}

async function auditCol(options) {
  const manifestPath = join(options.registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const nodes = new Map()
  for (const file of manifest.hierarchy.nodes.files) {
    await eachGzipJsonLine(join(options.registryRoot, ...file.path.split('/')), (record) => nodes.set(record.id, record))
  }
  const exact = [...nodes.values()].filter((record) => record.rank !== 'species' && record.scientificName === REQUESTED_NAME)
  const nearby = [...nodes.values()].filter((record) => record.rank !== 'species' && record.scientificName === NEARBY_NAME)
  const bigyra = nodes.get(BIGYRA_COL_ROOT.id)
  if (!bigyra || Object.entries(BIGYRA_COL_ROOT).some(([key, value]) => bigyra[key] !== value)) throw new Error('Pinned COL Bigyra root changed')
  if (exact.length) throw new Error(`Pinned COL registry now has an exact ${REQUESTED_NAME} root; reassess this zero-row contract`)
  if (nearby.length !== 1 || nearby[0].id !== 'DJ' || nearby[0].rank !== 'class' || nearby[0].status !== 'accepted' || nearby[0].parentId !== BIGYRA_COL_ROOT.id) {
    throw new Error(`Pinned COL nearby Labyrinthulea boundary changed: ${JSON.stringify(nearby.map(candidate))}`)
  }
  const packManifestPath = join(options.packRoot, 'manifest.json')
  const packManifestBytes = readFileSync(packManifestPath)
  const pack = JSON.parse(packManifestBytes)
  if (pack.packageId !== PACKAGE_ID || pack.acceptedSpeciesCount !== PACKAGE_SPECIES || JSON.stringify(pack.browseRootIds) !== JSON.stringify(PACKAGE_ROOTS)) throw new Error('Pinned COL package ownership changed')
  return { manifestPath, manifestBytes, packManifestPath, packManifestBytes, exact, nearby, bigyra }
}

function auditItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const query = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`)
    const exact = query.all(REQUESTED_NAME)
    const nearby = query.all(NEARBY_NAME)
    if (exact.length) throw new Error(`Pinned ITIS export now has an exact ${REQUESTED_NAME} root; reassess this zero-row contract`)
    if (nearby.length !== 1 || nearby[0].tsn !== 46076 || nearby[0].rank_name !== 'Class' || nearby[0].name_usage !== 'valid' || nearby[0].parent_tsn !== 46067) {
      throw new Error(`Pinned ITIS nearby Labyrinthulea boundary changed: ${JSON.stringify(nearby)}`)
    }
    const parent = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(46067)
    if (!parent || parent.scientific_name !== 'Mycetozoa' || parent.rank_name !== 'Subphylum' || parent.name_usage !== 'valid') throw new Error('Pinned ITIS Labyrinthulea parent boundary changed')
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { exact, nearby, parent, maxima }
  } finally { database.close() }
}

function emptyFile(path, bytes, sourceBytes) {
  return { path: repoPath(path), records: 0, firstColUsageId: null, lastColUsageId: null, bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes) }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const sourceBytes = readFileSync(options.sourcePath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditCol(options)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === PACKAGE_ID)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== PACKAGE_SPECIES || ownership.packageCounts?.[PACKAGE_ID] !== PACKAGE_SPECIES || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(PACKAGE_ROOTS)) throw new Error('COL package ownership ledger changed')
  const itis = auditItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error('ITIS update-date mismatch')
  mkdirSync(options.outputRoot, { recursive: true })
  for (const name of readdirSync(options.outputRoot)) if (/^itis-labyrinthulomycetes-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(options.outputRoot, name))
  const sourcePayload = Buffer.from('\n', 'utf8')
  const bytes = Buffer.from(deterministicGzip(sourcePayload, { level: 9 }))
  const sidecarPath = join(options.outputRoot, 'itis-labyrinthulomycetes-sidecar-0000.jsonl.gz')
  const upstreamPath = join(options.outputRoot, 'itis-labyrinthulomycetes-upstream-only-0000.jsonl.gz')
  writeFileSync(sidecarPath, bytes)
  writeFileSync(upstreamPath, bytes)
  const sidecar = emptyFile(sidecarPath, bytes, sourcePayload)
  const upstream = { ...emptyFile(upstreamPath, bytes, sourcePayload), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const rootBoundaryAudit = {
    colExactNameCandidates: col.exact.map(candidate),
    colNearbyNameCandidates: col.nearby.map(candidate),
    itisExactNameCandidates: itis.exact,
    itisNearbyNameCandidates: itis.nearby,
    itisNearbyParent: itis.parent,
    existingPartitionOverlap: {
      bigyra: { colRoot: candidate(col.bigyra), relation: 'The only nearby COL Labyrinthulea class DJ is directly below Bigyra 622CB, so substituting it would duplicate the existing Bigyra sidecar scope.' },
      ochrophyta: 'No requested or nearby COL candidate is below Ochrophyta root 5H.',
      oomycota: 'No requested or nearby COL candidate is below Oomycota root 5K; the existing narrowed Oomycota sidecar remains disjoint.',
    },
    selectedColRoot: null,
    selectedItisRoot: null,
    decision: `Neither pinned snapshot contains an exact ${REQUESTED_NAME} root. The similarly named Labyrinthulea candidates are not substituted: COL DJ is already entirely within Bigyra, while ITIS TSN 46076 sits below Mycetozoa. No row-level crosswalk or ITIS-only partition is asserted.`,
  }
  const scope = { packageRootUsageIds: PACKAGE_ROOTS, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: null, colRootScientificName: REQUESTED_NAME, colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: PACKAGE_SPECIES, packageOutOfScopeStrictAcceptedSpecies: PACKAGE_SPECIES, boundary: `No exact COL26.8 ${REQUESTED_NAME} root exists. Nearby Labyrinthulea is deliberately excluded because it is a Bigyra-descendant scope already covered by the Bigyra authority sidecar; no nearby ITIS lineage is substituted.` }
  const exactMatching = { normalization: source.importLedger.normalization, statuses: { accepted: `Unavailable: no exact COL26.8 ${REQUESTED_NAME} root exists.`, 'synonym-current-name-redirect': `Unavailable: no exact COL26.8 ${REQUESTED_NAME} root exists.`, ambiguous: `Unavailable: no exact COL26.8 ${REQUESTED_NAME} root exists.`, unmatched: `No ${REQUESTED_NAME} scope exists to match; nearby taxa are not substituted.` }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, package-wide, overlapping-partition or taxon-substituted matching is used.' }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID, scope, rootBoundaryAudit,
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), packageManifestPath: repoPath(col.packManifestPath), packageManifestSha256: sha256(col.packManifestBytes), ownershipPath: repoPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, rootScientificName: REQUESTED_NAME, rootStatus: 'absent', sourceLedgerPath: repoPath(options.sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    exactMatching,
    evidenceBoundary: { en: `This CC0 ITIS sidecar records a zero-row exact-root audit for ${REQUESTED_NAME}. It does not substitute the conflicting nearby Labyrinthulea classifications or duplicate the existing Bigyra partition. It is not a global checklist, classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.`, zh: `此 CC0 ITIS 侧车记录 ${REQUESTED_NAME} 的零行精确根审计。它不替代彼此冲突的邻近 Labyrinthulea 分类，也不重复现有 Bigyra 分区；它不是全球名录、分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。` },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: 524288, stableAddressing: 'The explicit empty shard is immutable and contains no COL usage IDs.', files: [sidecar] },
    upstreamOnly: { colOwnership: null, stableAddressing: 'The explicit empty shard is immutable because no exact ITIS root is available; no ITIS-only species are inferred.', files: [upstream] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [sidecar.path, upstream.path], records: 0, totalCompressedBytes: sidecar.bytes + upstream.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(join(options.outputRoot, descriptorName), descriptorBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-labyrinthulomycetes-zero-root-overlap-audit',
    generatedFrom: { sourcePath: repoPath(options.sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colPackageManifestPath: repoPath(col.packManifestPath), colPackageManifestSha256: sha256(col.packManifestBytes), colOwnershipPath: repoPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, maximumUpdateDates: itis.maxima }, matchingContract: exactMatching, totals: counts,
    output: { descriptor: { path: repoPath(join(options.outputRoot, descriptorName)), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [sidecar], upstreamOnly: upstream },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit both empty row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and both listed empty checksum-addressed shards.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact missing-root and existing-partition-overlap audits, representation-only normalization and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
