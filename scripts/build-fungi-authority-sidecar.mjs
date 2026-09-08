import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliDecompressSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { replaceOwnedExtensions, summarizeExtensions } from './manifest-extension-utils.mjs'
import {
  CATALOGUE_RELEASE,
  CATALOGUE_RELEASE_DATE,
  CHECKLISTBANK_DATASET_KEY,
  EXPECTED_ACCEPTED_SPECIES,
  SOURCE_DATASETS,
  compareStableIds,
  readFungiSpecies,
  sha256,
} from './fungi-authority-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_PACKAGE_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'fungi')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'fungi-species-fungorum-crosswalk-col26.8.json.br')
const DEFAULT_DESCRIPTOR = join(DEFAULT_PACKAGE_ROOT, 'index-fungorum-extension.json')
const SOURCE_BYTE_LIMIT = 6 * 1024 * 1024
const RUNTIME_FIELDS = [
  'colId', 'sourceDatasetId', 'indexFungorumId', 'indexFungorumUrl', 'mappingBasis', 'status',
]

function parseArgs(argv) {
  const options = {
    packageRoot: DEFAULT_PACKAGE_ROOT,
    crosswalk: DEFAULT_CROSSWALK,
    descriptor: DEFAULT_DESCRIPTOR,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--package-root') options.packageRoot = resolve(argv[++index])
    else if (value === '--crosswalk') options.crosswalk = resolve(argv[++index])
    else if (value === '--descriptor') options.descriptor = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-fungi-authority-sidecar.mjs [options]',
    '',
    'Builds deterministic package-local Index Fungorum identifier shards from the committed canonical crosswalk.',
    'When resource-pack manifests are present, the generated descriptor is attached to the Fungi pack and collection manifest.',
  ].join('\n')
}

function loadCrosswalk(path, species) {
  const bytes = readFileSync(path)
  const sourceBytes = brotliDecompressSync(bytes)
  const snapshot = JSON.parse(sourceBytes.toString('utf8'))
  const counts = snapshot.counts ?? {}
  const source = snapshot.source ?? {}
  if (snapshot.schemaVersion !== 1
    || snapshot.crosswalkType !== 'release-pinned-fungal-authority-identifier-crosswalk'
    || source.catalogueRelease !== CATALOGUE_RELEASE
    || source.catalogueReleaseDate !== CATALOGUE_RELEASE_DATE
    || source.checklistBankDatasetKey !== CHECKLISTBANK_DATASET_KEY
    || source.retrievedAt !== '2026-08-31'
    || !Array.isArray(source.sourceDatasets) || source.sourceDatasets.length !== SOURCE_DATASETS.size
    || source.sourceDatasets.some((dataset) => !SOURCE_DATASETS.has(String(dataset.datasetId)) || dataset.license !== 'CC-BY-4.0')
    || counts.acceptedSpecies !== EXPECTED_ACCEPTED_SPECIES
    || counts.eligible !== EXPECTED_ACCEPTED_SPECIES
    || counts.accepted !== EXPECTED_ACCEPTED_SPECIES
    || counts.redirect !== 0 || counts.ambiguous !== 0 || counts.unmatched !== 0 || counts.withheld !== 0
    || counts.upstreamOnly !== 201
    || snapshot.integrity?.algorithm !== 'sha256'
    || snapshot.integrity?.directSourceRequestCount !== 60
    || !Array.isArray(snapshot.records) || snapshot.records.length !== EXPECTED_ACCEPTED_SPECIES
    || !Array.isArray(snapshot.upstreamOnlyRecords) || snapshot.upstreamOnlyRecords.length !== counts.upstreamOnly) {
    throw new Error('Fungi authority crosswalk does not match the pinned COL26.8 source contract')
  }
  if (snapshot.sourceComposition?.['2073'] !== 155841 || snapshot.sourceComposition?.['1148'] !== 1203) {
    throw new Error('Fungi source-dataset composition differs from the pinned COL26.8 pack')
  }

  const speciesById = new Map(species.map((record) => [record.id, record]))
  const membership = new Set()
  const authorityIds = new Set()
  let directSourceRecords = 0
  for (const record of snapshot.records) {
    const speciesRecord = speciesById.get(record.colId)
    if (!speciesRecord || membership.has(record.colId) || authorityIds.has(record.indexFungorumId)
      || speciesRecord.scientificName !== record.scientificName
      || String(speciesRecord.sourceDatasetId) !== String(record.sourceDatasetId)
      || record.status !== 'accepted'
      || !/^\d+$/.test(record.indexFungorumId ?? '')
      || record.indexFungorumUrl !== `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${record.indexFungorumId}`
      || !['exact-source-dataset-and-verbatim-label', 'checklistbank-source-record'].includes(record.mappingBasis)) {
      throw new Error(`Invalid or duplicate Fungi authority record: ${record.colId ?? 'missing COL ID'}`)
    }
    if (record.mappingBasis === 'checklistbank-source-record') {
      if (!/^[a-f0-9]{64}$/.test(record.sourceResponseSha256 ?? '')) {
        throw new Error(`Direct source record lacks its response digest: ${record.colId}`)
      }
      directSourceRecords += 1
    } else if ('sourceResponseSha256' in record) {
      throw new Error(`Strict label record unexpectedly contains a direct-response digest: ${record.colId}`)
    }
    membership.add(record.colId)
    authorityIds.add(record.indexFungorumId)
  }
  if (membership.size !== species.length || directSourceRecords !== snapshot.integrity.directSourceRequestCount) {
    throw new Error('Fungi authority crosswalk does not partition every package species exactly once')
  }
  const recordLedgerBytes = Buffer.from(`${snapshot.records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
  if (sha256(recordLedgerBytes) !== snapshot.integrity.recordLedgerSha256) {
    throw new Error('Fungi authority record-ledger SHA-256 does not match the canonical records')
  }
  return { bytes, sourceBytes, snapshot }
}

function chunkBySourceBytes(records) {
  const chunks = []
  let current = []
  let currentBytes = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (current.length && currentBytes + bytes > SOURCE_BYTE_LIMIT) {
      chunks.push(current)
      current = []
      currentBytes = 0
    }
    current.push(record)
    currentBytes += bytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

export function buildFungiAuthoritySidecar({ packageRoot, crosswalkPath, descriptorPath, resourcePacksRoot = dirname(packageRoot) }) {
  const { records: species } = readFungiSpecies(packageRoot)
  const crosswalk = loadCrosswalk(crosswalkPath, species)
  const crosswalkByColId = new Map(crosswalk.snapshot.records.map((record) => [record.colId, record]))
  const runtimeRecords = species.map((speciesRecord) => {
    const record = crosswalkByColId.get(speciesRecord.id)
    return Object.fromEntries(RUNTIME_FIELDS.map((field) => [field, record[field]]))
  }).sort((left, right) => compareStableIds(left.colId, right.colId))

  for (const name of readdirSync(packageRoot).filter((value) => /^index-fungorum-\d{3}\.jsonl\.gz$/.test(value))) {
    rmSync(join(packageRoot, name))
  }
  const files = chunkBySourceBytes(runtimeRecords).map((records, index) => {
    const name = `index-fungorum-${String(index).padStart(3, '0')}.jsonl.gz`
    const sourceBytes = Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
    const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    writeFileSync(join(packageRoot, name), compressed)
    return {
      path: `fungi/${name}`,
      records: records.length,
      bytes: compressed.byteLength,
      sourceBytes: sourceBytes.byteLength,
      sha256: sha256(compressed),
      sourceSha256: sha256(sourceBytes),
      encoding: 'gzip',
      mediaType: 'application/x-ndjson',
      minColId: records[0].colId,
      maxColId: records.at(-1).colId,
    }
  })
  const source = crosswalk.snapshot.source
  const descriptor = {
    id: 'index-fungorum-identifiers',
    recordType: 'external-name-identifier-crosswalk',
    provider: 'Species Fungorum / Index Fungorum',
    source: {
      catalogueRelease: source.catalogueRelease,
      catalogueReleaseDate: source.catalogueReleaseDate,
      checklistBankDatasetKey: source.checklistBankDatasetKey,
      sourceDatasets: source.sourceDatasets.map((dataset) => ({
        datasetId: dataset.datasetId,
        title: dataset.title,
        version: dataset.version,
        issued: dataset.issued,
        doi: dataset.doi,
        versionDoi: dataset.versionDoi,
        license: dataset.license,
        licenseUrl: dataset.licenseUrl,
        citation: dataset.citation,
      })),
      retrievedAt: source.retrievedAt,
      indexFungorumUrlTemplate: source.indexFungorumUrlTemplate,
      canonicalCrosswalkPath: 'data/sources/fungi-species-fungorum-crosswalk-col26.8.json.br',
      canonicalCrosswalkBytes: crosswalk.bytes.byteLength,
      canonicalCrosswalkSha256: sha256(crosswalk.bytes),
      canonicalCrosswalkSourceBytes: crosswalk.sourceBytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalk.sourceBytes),
      requestIntegrity: crosswalk.snapshot.integrity,
      rightsBoundary: source.rightsBoundary,
    },
    eligibility: 'Every strict accepted COL26.8 Fungi species whose sourceDatasetId is Species Fungorum Plus 2073 or Microsporidia 1148.',
    counts: crosswalk.snapshot.counts,
    sourceComposition: crosswalk.snapshot.sourceComposition,
    fields: RUNTIME_FIELDS,
    files,
    totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0),
    totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0),
    limitations: [
      'This is a release-scoped identifier crosswalk, not a claim that fungal taxonomy or described fungal diversity is complete.',
      'No live Index Fungorum page content, bibliography, host, substrate, locality, description, media, fossil, ecology, phylogeny, dossier, or expert review is copied.',
      'Upstream-only records remain in the canonical audit snapshot and are not injected into the COL26.8 accepted-species pack.',
    ],
    integration: {
      targetManifestPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/fungi/manifest.json',
      clientParityRequirement: 'All files are copied unchanged into Web runtime, offline ZIP, Android assets, and iOS assets.',
      lookup: {
        strategy: 'lexicographic-colId-range-v1',
        ordering: 'Unicode code-unit ascending with no locale folding or normalization.',
        requestPolicy: 'Select the sole file whose inclusive minColId/maxColId range contains the requested COL ID; load and parse only that payload shard.',
        forbiddenBehavior: 'A single-species detail query must not download or parse the complete authority sidecar or more than one payload shard.',
      },
    },
  }
  writeFileSync(descriptorPath, `${JSON.stringify(descriptor, null, 2)}\n`, 'utf8')
  const packageManifestPath = join(packageRoot, 'manifest.json')
  const collectionManifestPath = join(resourcePacksRoot, 'manifest.json')
  if (existsSync(packageManifestPath) && existsSync(collectionManifestPath)) {
    const packageManifest = JSON.parse(readFileSync(packageManifestPath, 'utf8'))
    packageManifest.extensions = replaceOwnedExtensions(packageManifest.extensions ?? [], [descriptor], (candidate) => candidate.id === descriptor.id)
    writeFileSync(packageManifestPath, `${JSON.stringify(packageManifest, null, 2)}\n`, 'utf8')

    const collection = JSON.parse(readFileSync(collectionManifestPath, 'utf8'))
    const packageSummary = collection.packs.find((pack) => pack.packageId === 'fungi')
    if (!packageSummary) throw new Error('Fungi resource-pack collection descriptor is missing')
    const manifestBytes = readFileSync(packageManifestPath)
    Object.assign(packageSummary, {
      manifestBytes: manifestBytes.byteLength,
      manifestSha256: sha256(manifestBytes),
      ...summarizeExtensions(packageManifest.extensions),
    })
    collection.authoritativeSupplements = {
      ...(collection.authoritativeSupplements ?? {}),
      indexFungorumIdentifiers: {
        catalogueRelease: source.catalogueRelease,
        acceptedSpecies: descriptor.counts.accepted,
        upstreamOnlyAuditRecords: descriptor.counts.upstreamOnly,
        upstreamOnlyColOwnership: null,
        sourceComposition: descriptor.sourceComposition,
        resourcePack: 'fungi',
        lookupStrategy: descriptor.integration.lookup.strategy,
      },
    }
    writeFileSync(collectionManifestPath, `${JSON.stringify(collection, null, 2)}\n`, 'utf8')
  }
  return descriptor
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  const descriptor = buildFungiAuthoritySidecar({
    packageRoot: options.packageRoot,
    crosswalkPath: options.crosswalk,
    descriptorPath: options.descriptor,
  })
  console.log(JSON.stringify({
    counts: descriptor.counts,
    files: descriptor.files,
    totalCompressedBytes: descriptor.totalCompressedBytes,
    totalSourceBytes: descriptor.totalSourceBytes,
  }, null, 2))
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
