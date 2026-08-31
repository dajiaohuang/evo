import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const releaseRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20')
const defaultRegistryRoot = join(releaseRoot, 'registry')
const outputRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const descriptorPath = join(outputRoot, 'itis-hemimastigophora-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-hemimastigophora-sidecar-import-ledger.json')
const defaultSourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const defaultOwnershipPath = join(root, 'data/registry/package-species-coverage.json')
const targetName = 'Hemimastigophora'
const packageId = 'protists-chromists'
const packageRoots = ['C', 'Z']

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
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

function parseArgs(argv) {
  const options = { registryRoot: defaultRegistryRoot, ownershipPath: defaultOwnershipPath, sourcePath: defaultSourcePath }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.sourcePath = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-hemimastigophora-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  return options
}

async function auditCol(registryRoot) {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exactRootCandidates = []
  for (const file of manifest.hierarchy.nodes.files) {
    await eachGzipJsonLine(join(registryRoot, ...file.path.split('/')), (record) => {
      if (String(record.scientificName).normalize('NFC').trim().toLowerCase() === targetName.toLowerCase()) exactRootCandidates.push(record)
    })
  }
  if (exactRootCandidates.length) throw new Error(`Pinned COL root audit changed: found exact ${targetName} node(s); reassess this zero-row boundary before regenerating`)
  return { manifestPath, manifestBytes, exactRootCandidates }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const exactNameCandidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`).all(targetName)
    const acceptedExactRoots = exactNameCandidates.filter((row) => row.name_usage === 'accepted')
    if (acceptedExactRoots.length) throw new Error(`ITIS now has an accepted exact ${targetName} root; reassess this zero-row boundary before regenerating: ${JSON.stringify(acceptedExactRoots)}`)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { exactNameCandidates, acceptedExactRoots, maxima }
  } finally { database.close() }
}

function auditExistingPartitions() {
  return readdirSync(outputRoot).filter((name) => /^itis-.+-sidecar\.json$/u.test(name) && name !== 'itis-hemimastigophora-sidecar.json').sort().map((name) => {
    const path = join(outputRoot, name)
    const descriptor = JSON.parse(readFileSync(path, 'utf8'))
    return {
      descriptorPath: repoPath(path), label: descriptor.scope?.requestedLabel ?? descriptor.scope?.colRootScientificName ?? name,
      colRootUsageId: descriptor.scope?.colRootUsageId ?? null, itisRootTsn: descriptor.scope?.itisRootTsn ?? descriptor.sources?.itis?.rootTsn ?? null,
      rows: descriptor.counts?.total ?? 0,
    }
  })
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-hemimastigophora-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.sourcePath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditCol(options.registryRoot)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === packageId)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== ownership.packageCounts[packageId] || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(packageRoots)) throw new Error('Pinned COL package ownership does not match the Protists and Chromists contract')
  const itis = loadItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  const existingPartitions = auditExistingPartitions()
  const emptySource = Buffer.alloc(0)
  const emptyBytes = Buffer.from(deterministicGzip(emptySource, { level: 9 }))
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-hemimastigophora-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const upstreamPath = join(outputRoot, 'itis-hemimastigophora-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, emptyBytes)
  const upstreamFile = { path: repoPath(upstreamPath), records: 0, firstColUsageId: null, lastColUsageId: null, bytes: emptyBytes.length, sha256: sha256(emptyBytes), sourceBytes: 0, sourceSha256: sha256(emptySource), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const scope = {
    packageRootUsageIds: packageRoots, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: null, colRootScientificName: targetName,
    colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: ownership.packageCounts[packageId], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[packageId],
    colRootAudit: `No exact COL26.8 usage node named ${targetName} exists in the complete pinned hierarchy; no strict COL partition is claimed.`,
    boundary: `This boundary audit contains no ${targetName} rows: COL26.8 has no exact ${targetName} node, and ITIS 2026-08-26 has no exact-name record. No broader, narrower or neighboring taxon is promoted into an authority partition.`,
  }
  const rootBoundaryAudit = {
    colExactRootCandidates: col.exactRootCandidates, itisExactNameCandidates: itis.exactNameCandidates, itisAcceptedExactRootCandidates: itis.acceptedExactRoots,
    selectedColRoot: null, selectedItisRoot: null,
    decision: `No exact accepted ${targetName} root exists in either pinned authority. No COL or ITIS range is asserted; the empty native shard is retained as an explicit boundary result until a future release supplies an exact accepted root.`,
  }
  const partitionOverlapAudit = { auditedSidecars: existingPartitions, hemimastigophoraColUsageIds: [], hemimastigophoraItisCurrentTsns: [], colUsageIdOverlapCount: 0, itisCurrentTsnOverlapCount: 0, decision: 'The exact-root contract produces no COL usage IDs and no accepted ITIS current-species TSNs. The empty sets are disjoint from every observed existing or in-flight Protists and Chromists ITIS sidecar; no related taxon is used as a proxy.' }
  const exactMatching = { normalization: source.importLedger.normalization, statuses: Object.fromEntries(['accepted', 'synonym-current-name-redirect', 'ambiguous', 'unmatched'].map((status) => [status, `Unavailable: no exact accepted ${targetName} root exists in the pinned authorities.`])), prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, package-wide, near-lineage or taxon-substituted matching is used.' }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-root-boundary-audit', packageId, scope, rootBoundaryAudit, partitionOverlapAudit, sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), ownershipPath: repoPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, rootScientificName: targetName, rootStatus: 'no-exact-root', sourceLedgerPath: repoPath(options.sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching, evidenceBoundary: { en: `This CC0 ITIS boundary audit is a frozen exact-root check for ${targetName} in the declared COL26.8 Protists and Chromists package. It is not a global checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.`, zh: `此 CC0 ITIS 边界审计仅冻结声明的 COL26.8 原生生物与色界生物包中 ${targetName} 的精确根检查；它不是全球名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。` }, counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: `No COL row-level files exist because COL26.8 does not materialize an exact ${targetName} root.`, files: [] }, upstreamOnly: { colOwnership: null, stableAddressing: `No exact accepted ITIS ${targetName} root exists in this release, so the upstream-only partition is an explicit empty immutable JSONL gzip shard.`, files: [upstreamFile] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [upstreamFile.path], records: 0, totalCompressedBytes: upstreamFile.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-hemimastigophora-root-boundary-audit', generatedFrom: { sourcePath: repoPath(options.sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colOwnershipPath: repoPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, partitionOverlapAudit, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, maximumUpdateDates: itis.maxima }, matchingContract: exactMatching, totals: counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: upstreamFile }, deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit the empty row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories include the descriptor and listed explicit empty shard; no accepted-current authoritative rows are omitted.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact COL and ITIS root audits, explicit empty partitions, existing-sidecar overlap inventory and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, partitionOverlapAudit, output: ledger.output }, null, 2))
}

await main()
