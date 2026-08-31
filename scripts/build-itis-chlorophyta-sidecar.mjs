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
const registryRoot = join(releaseRoot, 'registry')
const packRoot = join(releaseRoot, 'resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-chlorophyta-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-chlorophyta-sidecar-import-ledger.json')
const sourceLedgerPath = join(root, 'data/sources/itis-2026-08-26.json')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const wfoLedgerPath = join(root, 'data/sources/wfo-plant-sidecar-import-ledger.json')
const rootTsn = 5414
const packageId = 'protists-chromists'
const packageRoots = ['C', 'Z']

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}${records.length ? '\n' : ''}`, 'utf8')
const repoPath = (path) => path.startsWith(`${root}/`) || path.startsWith(`${root}\\`) ? path.slice(root.length + 1).replaceAll('\\', '/') : path.replaceAll('\\', '/')
async function sha256File(path) { const hash = createHash('sha256'); for await (const chunk of createReadStream(path)) hash.update(chunk); return hash.digest('hex') }

function parseArgs(argv) {
  const options = { itisSqlitePath: null }
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (argv[index] === '--help') options.help = true
    else throw new Error(`Unknown argument: ${argv[index]}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-chlorophyta-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  return options
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function auditExactColRoot() {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exactNodes = []
  for (const file of manifest.hierarchy.nodes.files) {
    await eachGzipJsonLine(join(registryRoot, ...file.path.split('/')), (record) => {
      if (record.scientificName === 'Chlorophyta') exactNodes.push(record)
    })
  }
  if (exactNodes.length) throw new Error(`COL26.8 now contains ${exactNodes.length} exact Chlorophyta node(s); reassess this ITIS-only boundary before publishing.`)
  return { manifestPath, manifestBytes, exactNodes }
}

function clean(value) { return value === null || value === undefined ? null : String(value).trim() || null }
function currentName(row) {
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRecord = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(rootTsn)
    if (!rootRecord || rootRecord.scientific_name !== 'Chlorophyta' || rootRecord.rank_name !== 'Division' || rootRecord.name_usage !== 'accepted') throw new Error(`Pinned ITIS root is not accepted Chlorophyta division TSN ${rootTsn}: ${JSON.stringify(rootRecord)}`)
    const species = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
    ) SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
      FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted' ORDER BY u.tsn`).all(rootTsn)
    const synonyms = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'accepted'
    ), accepted_species(tsn) AS (
      SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'accepted'
    ) SELECT count(*) AS count FROM synonym_links s JOIN accepted_species a ON a.tsn = s.tsn_accepted
      JOIN taxonomic_units u ON u.tsn = s.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE lower(trim(r.rank_name)) = 'species'`).get()
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    const comparisonRoots = [
      ['Apicomplexa', 553099], ['Bigyra', 969916], ['Cercozoa', 969919], ['Ciliophora', 46211], ['Dinophyceae', 9874], ['Euglenophycota', 9601], ['Haptophyta', 2134], ['Ochrophyta', 969917], ['Oomycota/Peronosporales', 13911], ['Oomycota/Saprolegniales', 13837], ['Radiolaria (legacy exact-name)', 46088], ['Rhodophyta', 660046],
    ]
    const node = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank, u.name_usage AS usage FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`)
    const overlap = database.prepare(`WITH RECURSIVE left_tree(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN left_tree d ON u.parent_tsn = d.tsn WHERE u.name_usage IN ('accepted', 'valid')
    ), right_tree(tsn) AS (
      SELECT ?2 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN right_tree d ON u.parent_tsn = d.tsn WHERE u.name_usage IN ('accepted', 'valid')
    ) SELECT count(*) AS count FROM left_tree JOIN right_tree USING(tsn)`)
    const partitionOverlapAudit = comparisonRoots.map(([scope, tsn]) => ({ scope, root: node.get(tsn), overlappingItisTsns: overlap.get(rootTsn, tsn).count }))
    if (partitionOverlapAudit.some((entry) => entry.overlappingItisTsns !== 0)) throw new Error(`Chlorophyta overlaps an existing/in-flight protist scope: ${JSON.stringify(partitionOverlapAudit)}`)
    return { rootRecord, species, synonymLinks: synonyms.count, maxima, partitionOverlapAudit }
  } finally { database.close() }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) return
  const sourceBytes = readFileSync(sourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const { manifestPath, manifestBytes, exactNodes } = await auditExactColRoot()
  const ownershipBytes = readFileSync(ownershipPath); const ownership = JSON.parse(ownershipBytes)
  const owner = ownership.entries.find((entry) => entry.id === packageId)
  if (!owner || JSON.stringify(owner.browseRootIds) !== JSON.stringify(packageRoots) || owner.acceptedSpeciesCount !== ownership.packageCounts[packageId]) throw new Error('Protists and Chromists package ownership no longer matches the pinned C/Z contract')
  const wfoBytes = readFileSync(wfoLedgerPath); const wfoLedger = JSON.parse(wfoBytes)
  if (!wfoLedger.packageCounts?.['other-plants'] || wfoLedger.packageCounts['other-plants'].total !== 698) throw new Error('Pinned WFO plant crosswalk boundary changed; reassess Chlorophyta package placement')
  const itis = loadItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  const rows = itis.species.map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'COL26.8 has no exact Chlorophyta node, so this accepted ITIS Chlorophyta division species record has no asserted COL match.' }))
  const sourceRows = jsonlBytes(rows); const gzip = Buffer.from(deterministicGzip(sourceRows, { level: 9 }))
  mkdirSync(packRoot, { recursive: true })
  for (const name of readdirSync(packRoot)) if (/^itis-chlorophyta-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(packRoot, name))
  const upstreamPath = join(packRoot, 'itis-chlorophyta-upstream-only-0000.jsonl.gz'); writeFileSync(upstreamPath, gzip)
  const upstream = { path: repoPath(upstreamPath), records: rows.length, firstColUsageId: null, lastColUsageId: null, bytes: gzip.length, sha256: sha256(gzip), sourceBytes: sourceRows.length, sourceSha256: sha256(sourceRows), colOwnership: null, firstTsn: rows[0]?.currentName.tsn ?? null, lastTsn: rows.at(-1)?.currentName.tsn ?? null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: rows.length, itisSpeciesSynonymLinks: itis.synonymLinks, itisUpstreamOnly: rows.length }
  const scope = { packageRootUsageIds: packageRoots, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: null, colRootScientificName: 'Chlorophyta', colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: ownership.packageCounts[packageId], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[packageId], colRootAudit: 'No exact COL26.8 usage node named Chlorophyta exists in the complete pinned hierarchy. No plant-descendant, Viridiplantae, WFO, or individual-name substitute is used.', itisRoot: { tsn: String(itis.rootRecord.tsn), scientificName: itis.rootRecord.scientific_name, rank: itis.rootRecord.rank_name, usage: itis.rootRecord.name_usage, parentTsn: String(itis.rootRecord.parent_tsn) }, boundary: 'This ITIS-only sidecar retains every current accepted species below the exact ITIS Chlorophyta division TSN 5414. ITIS infrakingdom Chlorophyta TSN 846493 is a distinct broader record and is not substituted. The WFO plant crosswalk remains untouched because it is a separate COL plant-wide crosswalk, not a Chlorophyta root.', partitionOverlapAudit: { auditedScopes: itis.partitionOverlapAudit, overlappingColUsageIds: [], overlappingItisTsns: [] } }
  const descriptor = { schemaVersion: 1, sidecarType: 'release-pinned-itis-only-nomenclatural-inventory', packageId, scope, sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(manifestPath), registryManifestSha256: sha256(manifestBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(rootTsn), rootNameUsage: itis.rootRecord.name_usage, sourceLedgerPath: repoPath(sourceLedgerPath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi }, wfoBoundary: { sourceLedgerPath: repoPath(wfoLedgerPath), sourceLedgerSha256: sha256(wfoBytes), statement: 'WFO Plant List 2026-06 is not queried, copied or rematched by this ITIS-only Chlorophyta sidecar.' } }, exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: 'Unavailable: COL26.8 has no exact Chlorophyta root from which to derive a strict accepted-species partition.', 'synonym-current-name-redirect': 'Unavailable: no exact COL Chlorophyta partition exists.', ambiguous: 'Unavailable: no exact COL Chlorophyta partition exists.', unmatched: 'Unavailable: no exact COL Chlorophyta partition exists.' }, prohibited: 'No inferred COL scope, WFO replay, fuzzy match, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' }, evidenceBoundary: { en: 'This CC0 ITIS inventory is a frozen, ITIS-only nomenclatural partition. It is not a global green-algae checklist, a final classification authority, a phylogeny, a species-concept equivalence assertion, a biological dossier or a scientific-review record.', zh: '此 CC0 ITIS 清单是冻结的、仅限 ITIS 的命名分区；它不是全球绿藻名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。' }, counts, colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: 'No COL row-level files exist because COL26.8 does not materialize an exact Chlorophyta root.', files: [] }, upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete current ITIS Chlorophyta division species partition is one immutable JSONL gzip shard.', files: [upstream] } }
  const descriptorBytes = jsonBytes(descriptor); writeFileSync(descriptorPath, descriptorBytes)
  const ledger = { schemaVersion: 1, importType: 'ITIS-2026-08-26-Chlorophyta-itis-only-inventory', generatedFrom: { sourcePath: repoPath(sourceLedgerPath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(manifestPath), colRegistryManifestSha256: sha256(manifestBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes), wfoPlantLedgerPath: repoPath(wfoLedgerPath), wfoPlantLedgerSha256: sha256(wfoBytes) }, scopeAudit: { ...scope, exactColNodes: exactNodes, itisCurrentSpecies: rows.length, itisSpeciesSynonymLinks: itis.synonymLinks, maximumUpdateDates: itis.maxima }, matchingContract: descriptor.exactMatching, totals: counts, output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: upstream }, deliveryContract: { pagesLight: 'Pages needs only this descriptor and may omit the ITIS-only row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and the listed ITIS-only shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' }, generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact root TSN, exact accepted-status SQL, complete COL exact-name audit, explicit WFO non-replay boundary, overlap audit, ascending TSN order and deterministic gzip; no wall-clock fields or fuzzy matching.' } }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, output: ledger.output }, null, 2))
}

await main()
