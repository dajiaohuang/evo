import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'

// Perkinsozoa is intentionally an auditable empty partition for COL26.8 and
// ITIS 2026-08-26. Do not widen this script to a neighboring taxon by name.
const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = resolve(dirname(scriptPath), '..')
const releaseRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const defaultPackRoot = join(releaseRoot, 'resource-packs', 'protists-chromists')
const defaultDescriptorPath = join(defaultPackRoot, 'itis-perkinsozoa-sidecar.json')
const defaultLedgerPath = join(repositoryRoot, 'data', 'sources', 'itis-perkinsozoa-sidecar-import-ledger.json')

const requestedRootName = 'Perkinsozoa'
const packageId = 'protists-chromists'
const packageRootIds = ['C', 'Z']
const dinoflagellataRootId = '622D3'
const apicomplexaRepresentedRootId = '87FBN'

function parseArgs(argv) {
  const options = {
    registryRoot: join(releaseRoot, 'registry'),
    packManifest: join(defaultPackRoot, 'manifest.json'),
    ownershipPath: join(repositoryRoot, 'data', 'registry', 'package-species-coverage.json'),
    itisSourceLedgerPath: join(repositoryRoot, 'data', 'sources', 'itis-2026-08-26.json'),
    descriptorPath: defaultDescriptorPath,
    ledgerPath: defaultLedgerPath,
    dinoflagellataDescriptor: join(defaultPackRoot, 'itis-dinoflagellata-sidecar.json'),
    apicomplexaDescriptor: join(defaultPackRoot, 'itis-apicomplexa-sidecar.json'),
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--pack-manifest') options.packManifest = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.itisSourceLedgerPath = resolve(argv[++index])
    else if (value === '--descriptor') options.descriptorPath = resolve(argv[++index])
    else if (value === '--ledger') options.ledgerPath = resolve(argv[++index])
    else if (value === '--dinoflagellata-descriptor') options.dinoflagellataDescriptor = resolve(argv[++index])
    else if (value === '--apicomplexa-descriptor') options.apicomplexaDescriptor = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) {
    throw new Error('Usage: node scripts/build-itis-perkinsozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite> [options]')
  }
  return options
}

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

function canonicalPath(path) {
  return path.replaceAll('\\', '/')
}

function repositoryPath(path) {
  const normalized = canonicalPath(path)
  const marker = '/data/'
  const index = normalized.indexOf(marker)
  return index >= 0 ? normalized.slice(index + 1) : normalized
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function loadItisRootAudit(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const exact = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(l.completename) = ?1 ORDER BY u.tsn`).all(requestedRootName.toLowerCase())
    const prefix = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(l.completename) GLOB ?1 ORDER BY u.tsn`).all('perkinso*')
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { exact, prefix, maxima }
  } finally {
    database.close()
  }
}

async function auditCol(options) {
  const manifestPath = join(options.registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const { gunzipSync } = await import('node:zlib')
  const exact = []
  for (const file of manifest.hierarchy.nodes.files) {
    const bytes = readFileSync(join(options.registryRoot, ...file.path.split('/')))
    for (const line of gunzipSync(bytes).toString('utf8').trim().split('\n')) {
      if (!line) continue
      const record = JSON.parse(line)
      if (record.scientificName === requestedRootName) exact.push(record)
    }
  }
  const packBytes = readFileSync(options.packManifest)
  const pack = JSON.parse(packBytes)
  if (pack.packageId !== packageId || JSON.stringify(pack.browseRootIds) !== JSON.stringify(packageRootIds)) {
    throw new Error('Pinned COL resource pack is not the exact Chromista/Protozoa package')
  }
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  if (ownership.packageCounts[packageId] !== pack.acceptedSpeciesCount) throw new Error('COL package ownership count differs from its manifest')
  if (exact.length) throw new Error(`COL26.8 now materializes ${requestedRootName}: ${JSON.stringify(exact)}`)
  return { manifestPath, manifestBytes, packManifestPath: options.packManifest, packBytes, packageStrictAcceptedSpecies: pack.acceptedSpeciesCount, exactRootCandidates: exact, ownershipPath: options.ownershipPath, ownershipBytes }
}

function readExistingPartition(path, label, expectedColRootId, expectedItisRootTsn) {
  const descriptor = readJson(path)
  const scope = descriptor.scope ?? {}
  const colRootId = scope.colRootUsageId ?? null
  if (colRootId !== expectedColRootId) throw new Error(`${label} sidecar root changed`)
  if (descriptor.sources?.itis?.rootTsn !== expectedItisRootTsn) throw new Error(`${label} ITIS root changed`)
  return {
    label,
    descriptorPath: repositoryPath(path),
    colRootUsageId: colRootId,
    colRootScientificName: scope.colRootScientificName ?? null,
    itisRootTsn: descriptor.sources.itis.rootTsn,
    colStrictAcceptedSpecies: scope.colStrictAcceptedSpecies,
    sidecarRecords: descriptor.counts?.total ?? null,
    overlappingColUsageIds: [],
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log('Usage: node scripts/build-itis-perkinsozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite> [options]')
    return
  }
  const sourceBytes = readFileSync(options.itisSourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditCol(options)
  const itis = loadItisRootAudit(options.itisSqlitePath)
  if (itis.exact.length || itis.prefix.length) throw new Error(`ITIS now materializes a Perkinsozoa root candidate: ${JSON.stringify({ exact: itis.exact, prefix: itis.prefix })}`)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  const existingPartitions = [
    readExistingPartition(options.dinoflagellataDescriptor, 'Dinoflagellata', dinoflagellataRootId, '9874'),
    readExistingPartition(options.apicomplexaDescriptor, 'Apicomplexa', apicomplexaRepresentedRootId, '553099'),
  ]
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-empty-nomenclatural-partition',
    packageId,
    scope: {
      requestedLabel: requestedRootName,
      packageRootUsageIds: packageRootIds,
      packageRootScientificNames: ['Chromista', 'Protozoa'],
      packageStrictAcceptedSpecies: col.packageStrictAcceptedSpecies,
      colRootUsageId: null,
      colRootScientificName: requestedRootName,
      colExactRootCandidates: col.exactRootCandidates,
      colStrictAcceptedSpecies: 0,
      itisRootTsn: null,
      itisRootScientificName: requestedRootName,
      itisExactRootCandidates: itis.exact,
      itisPrefixRootCandidates: itis.prefix,
      boundary: 'Neither COL26.8 nor ITIS 2026-08-26 materializes an exact Perkinsozoa root. No adjacent Dinoflagellata, Apicomplexa, Perkinsus, or package-wide name overlap is used as a proxy; this partition therefore has zero crosswalk rows and zero ITIS-only rows.',
    },
    rootBoundaryAudit: {
      colRegistryManifestPath: repositoryPath(col.manifestPath),
      colRegistryManifestSha256: sha256(col.manifestBytes),
      exactColRootCandidates: col.exactRootCandidates,
      exactItisRootCandidates: itis.exact,
      prefixItisRootCandidates: itis.prefix,
      existingPartitions,
      overlapWithExistingPartitions: existingPartitions.map((partition) => ({ label: partition.label, overlappingColUsageIds: [] })),
      decision: 'No exact root exists in either pinned source. The existing Dinoflagellata and represented Apicomplexa partitions remain disjoint named partitions and are not expanded or duplicated here.',
    },
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', packageManifestPath: repositoryPath(col.packManifestPath), packageManifestSha256: sha256(col.packBytes), registryManifestPath: repositoryPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), ownershipPath: repositoryPath(col.ownershipPath), ownershipSha256: sha256(col.ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, requestedRootName, sourceLedgerPath: repositoryPath(options.itisSourceLedgerPath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: { accepted: 'Unavailable: no exact COL26.8 Perkinsozoa root defines an eligible partition.', 'synonym-current-name-redirect': 'Unavailable: no exact COL26.8 Perkinsozoa root defines an eligible partition.', ambiguous: 'Unavailable: no exact COL26.8 Perkinsozoa root defines an eligible partition.', unmatched: 'Unavailable: no exact COL26.8 Perkinsozoa root defines an eligible partition.' },
      prohibited: 'No inferred root, fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, taxon-substituted, adjacent-root or package-wide matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 sidecar is an explicitly empty, release-pinned nomenclatural boundary audit. It is not a Perkinsozoa checklist, an inferred taxonomic placement, a final classification authority, a phylogeny, a species-concept equivalence assertion, a biological dossier or a scientific-review record.',
      zh: '此 CC0 侧车是明确为空的、固定版本的命名边界审计；它不是 Perkinsozoa 名录、推断的分类位置、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts: { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 },
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: 'No COL row-level files exist because neither pinned source materializes an exact Perkinsozoa root.', files: [] },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No exact ITIS Perkinsozoa root exists, so no ITIS-only rows are emitted.', files: [] },
    deliveryProfiles: {
      'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'GitHub Pages carries this descriptor and its hashes only; no row-level payload exists.' },
      'native-full': { payload: 'complete', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'Android and iOS carry the complete empty partition; there are no non-empty rows to omit.' },
    },
  }
  const descriptorBytes = jsonBytes(descriptor)
  mkdirSync(dirname(options.descriptorPath), { recursive: true })
  writeFileSync(options.descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'ITIS-2026-08-26-COL26.8-Perkinsozoa-empty-boundary-audit',
    generatedFrom: { sourcePath: repositoryPath(options.itisSourceLedgerPath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repositoryPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colPackageManifestPath: repositoryPath(col.packManifestPath), colPackageManifestSha256: sha256(col.packBytes), colOwnershipPath: repositoryPath(col.ownershipPath), colOwnershipSha256: sha256(col.ownershipBytes), existingPartitionDescriptors: existingPartitions.map((partition) => ({ label: partition.label, path: partition.descriptorPath })) },
    scopeAudit: descriptor.scope,
    rootBoundaryAudit: descriptor.rootBoundaryAudit,
    matchingContract: descriptor.exactMatching,
    totals: descriptor.counts,
    output: { descriptor: { path: repositoryPath(options.descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: [] },
    deliveryContract: { pagesLight: 'Pages publishes summary-only descriptor metadata and no row-level payload.', androidIosFull: 'Android and iOS native-full inventories include the complete empty partition; no non-empty row is omitted.', runtimeChange: 'This import deliberately changes no formal runtime, release manifest or central integration.' },
    generatedBy: { scriptPath: 'scripts/build-itis-perkinsozoa-sidecar.mjs', scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact-name root audits, explicit overlap audit and fixed zero-row output; no wall-clock fields, inferred roots or name matching.' },
  }
  mkdirSync(dirname(options.ledgerPath), { recursive: true })
  writeFileSync(options.ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: descriptor.counts, scope: descriptor.scope, rootBoundaryAudit: descriptor.rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
