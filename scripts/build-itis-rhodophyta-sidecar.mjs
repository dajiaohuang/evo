import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = resolve(dirname(scriptPath), '..')
const releaseRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const outputRoot = join(releaseRoot, 'resource-packs', 'protists-chromists')
const descriptorPath = join(outputRoot, 'itis-rhodophyta-sidecar.json')
const outputLedgerPath = join(repositoryRoot, 'data', 'sources', 'itis-rhodophyta-sidecar-import-ledger.json')
const rootTsn = 660046
const packageId = 'protists-chromists'
const colPackageRoots = ['C', 'Z']

function parseArgs(argv) {
  const options = {
    registryRoot: join(releaseRoot, 'registry'),
    ownershipPath: join(repositoryRoot, 'data', 'registry', 'package-species-coverage.json'),
    itisSourceLedgerPath: join(repositoryRoot, 'data', 'sources', 'itis-2026-08-26.json'),
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.itisSourceLedgerPath = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-rhodophyta-sidecar.mjs --itis-sqlite <verified ITIS.sqlite> [--registry-root <path>] [--ownership <path>] [--itis-source-ledger <path>]')
  return options
}

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}${records.length ? '\n' : ''}`, 'utf8')
const repositoryPath = (path) => path.startsWith(`${repositoryRoot}\\`) || path.startsWith(`${repositoryRoot}/`)
  ? path.slice(repositoryRoot.length + 1).replaceAll('\\', '/')
  : path.replaceAll('\\', '/')
async function sha256File(path) { const hash = createHash('sha256'); for await (const chunk of createReadStream(path)) hash.update(chunk); return hash.digest('hex') }

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function auditColScope(registryRoot) {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exactRhodophytaNodes = []
  for (const file of manifest.hierarchy.nodes.files) {
    await eachGzipJsonLine(join(registryRoot, ...file.path.split('/')), (record) => {
      if (record.scientificName === 'Rhodophyta') exactRhodophytaNodes.push(record)
    })
  }
  if (exactRhodophytaNodes.length !== 0) throw new Error(`The explicit zero-COL-root boundary must be revisited: found ${exactRhodophytaNodes.length} Rhodophyta node(s) in COL26.8`)
  return { manifestPath, manifestBytes, exactRhodophytaNodes }
}

function clean(value) { return value === null || value === undefined ? null : String(value).trim() || null }
function currentName(row) {
  return {
    tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage),
    credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng),
    currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date),
  }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const root = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(rootTsn)
    if (!root || root.scientific_name !== 'Rhodophyta' || root.rank_name !== 'Division' || root.name_usage !== 'accepted') {
      throw new Error(`Pinned ITIS root is not the expected accepted Rhodophyta division: ${JSON.stringify(root)}`)
    }
    const currentRows = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
    ) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
      FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted' ORDER BY u.tsn`).all(rootTsn)
    const synonymRows = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
    ), accepted_species(tsn) AS (
      SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted'
    ) SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage, su.unaccept_reason,
      su.update_date AS synonym_update_date, s.tsn_accepted
      FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted
      JOIN taxonomic_units su ON su.tsn = s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
      JOIN longnames sl ON sl.tsn = su.tsn WHERE lower(trim(sr.rank_name)) = 'species' ORDER BY s.tsn, s.tsn_accepted`).all(rootTsn)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { root, currentRows, synonymRows, maxima }
  } finally { database.close() }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-rhodophyta-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.itisSourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const { manifestPath, manifestBytes, exactRhodophytaNodes } = await auditColScope(options.registryRoot)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === packageId)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== ownership.packageCounts[packageId]
    || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(colPackageRoots)) throw new Error('Pinned COL package ownership does not match the Protists and Chromists contract')
  const { root, currentRows, synonymRows, maxima } = loadItis(options.itisSqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
  const upstreamOnly = currentRows.map((row) => ({
    colUsageId: null, currentName: currentName(row),
    basis: 'COL26.8 has no exact Rhodophyta usage node, so no strict COL Rhodophyta partition or exact crosswalk is claimed for this release.',
  }))
  const upstreamSource = jsonlBytes(upstreamOnly)
  const upstreamBytes = Buffer.from(deterministicGzip(upstreamSource, { level: 9 }))
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-rhodophyta-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const upstreamPath = join(outputRoot, 'itis-rhodophyta-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamBytes)
  const upstreamDescriptor = {
    path: repositoryPath(upstreamPath), records: upstreamOnly.length, firstColUsageId: null, lastColUsageId: null,
    bytes: upstreamBytes.length, sha256: sha256(upstreamBytes), sourceBytes: upstreamSource.length, sourceSha256: sha256(upstreamSource),
    colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null,
  }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const scope = {
    packageRootUsageIds: colPackageRoots, packageRootScientificNames: ['Chromista', 'Protozoa'],
    colRootUsageId: null, colRootScientificName: 'Rhodophyta', colStrictAcceptedSpecies: 0,
    packageStrictAcceptedSpecies: ownership.packageCounts[packageId], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[packageId],
    colRootAudit: 'No exact COL26.8 usage node named Rhodophyta exists in the complete pinned hierarchy. Therefore this release cannot derive a strict COL Rhodophyta partition or infer one from name overlap.',
    boundary: 'This ITIS-only sidecar retains every current species below the accepted ITIS Rhodophyta division. It deliberately contains no COL match rows until a pinned COL release materializes an exact auditable Rhodophyta root.',
  }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-itis-only-nomenclatural-inventory', packageId, scope,
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repositoryPath(manifestPath), registryManifestSha256: sha256(manifestBytes), ownershipPath: repositoryPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(rootTsn), rootNameUsage: root.name_usage, sourceLedgerPath: 'data/sources/itis-2026-08-26.json', sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: { accepted: 'Unavailable: COL26.8 has no exact Rhodophyta root from which to derive a strict accepted-species partition.', 'synonym-current-name-redirect': 'Unavailable: no COL Rhodophyta partition exists in this release.', ambiguous: 'Unavailable: no COL Rhodophyta partition exists in this release.', unmatched: 'Unavailable: no COL Rhodophyta partition exists in this release.' },
      prohibited: 'No inferred COL scope, fuzzy match, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 ITIS inventory is a frozen, ITIS-only nomenclatural partition. It is not a global rhodophyte checklist, a final classification authority, a phylogeny, a species-concept equivalence assertion, a biological dossier or a scientific-review record.',
      zh: '此 CC0 ITIS 清单是冻结的、仅限 ITIS 的命名分区；它不是全球红藻名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: 'No COL row-level files exist because COL26.8 does not materialize an exact Rhodophyta root.', files: [] },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete current ITIS Rhodophyta species partition is one immutable JSONL gzip shard.', files: [upstreamDescriptor] },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  mkdirSync(dirname(outputLedgerPath), { recursive: true })
  const ledger = {
    schemaVersion: 1, importType: 'ITIS-2026-08-26-Rhodophyta-itis-only-inventory',
    generatedFrom: { sourcePath: 'data/sources/itis-2026-08-26.json', sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repositoryPath(manifestPath), colRegistryManifestSha256: sha256(manifestBytes), colOwnershipPath: repositoryPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, exactRhodophytaNodes, itisRoot: { tsn: String(root.tsn), scientificName: root.scientific_name, rank: root.rank_name, usage: root.name_usage }, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima },
    matchingContract: descriptor.exactMatching, totals: counts,
    output: { descriptor: { path: repositoryPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: upstreamDescriptor },
    deliveryContract: { pagesLight: 'Pages needs only this descriptor and may omit the ITIS-only row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and the listed ITIS-only shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: 'scripts/build-itis-rhodophyta-sidecar.mjs', scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact accepted-status SQL, explicit zero-COL-root audit, ascending TSN order and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(outputLedgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, output: ledger.output }, null, 2))
}

await main()
