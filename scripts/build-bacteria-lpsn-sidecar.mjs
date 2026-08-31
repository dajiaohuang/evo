import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_RESOURCE_PACKS_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'bacteria-lpsn-crosswalk-col26.8.json.gz')
const EXPECTED_ACCEPTED_SPECIES = 26397
const EXPECTED_ELIGIBLE = 21570
const EXPECTED_INELIGIBLE = 4827
const SOURCE_DATASET_KEY = 2015
const RUNTIME_FIELDS = ['colId', 'lpsnId', 'lpsnUrl', 'mappingBasis', 'status']

function parseArgs(argv) {
  const options = { resourcePacksRoot: DEFAULT_RESOURCE_PACKS_ROOT, crosswalk: DEFAULT_CROSSWALK }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--resource-packs-root') options.resourcePacksRoot = resolve(argv[++index])
    else if (value === '--crosswalk') options.crosswalk = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-bacteria-lpsn-sidecar.mjs [options]',
    '',
    'Builds the Bacteria LPSN sidecar from a committed canonical crosswalk.',
    'It updates only bacteria/lpsn-000.jsonl.gz, bacteria/manifest.json, and the Bacteria descriptor in resource-packs/manifest.json.',
  ].join('\n')
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function ndjsonBytes(records) {
  return Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
}

function loadSpecies(resourcePacksRoot, manifest) {
  const species = []
  for (const file of manifest.files) {
    const compressed = readFileSync(join(resourcePacksRoot, file.path))
    const source = gunzipSync(compressed)
    if (compressed.byteLength !== file.bytes || source.byteLength !== file.sourceBytes
      || sha256(compressed) !== file.sha256 || sha256(source) !== file.sourceSha256) {
      throw new Error(`Bacteria species shard differs from its manifest: ${file.path}`)
    }
    species.push(...source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line)))
  }
  if (species.length !== EXPECTED_ACCEPTED_SPECIES
    || species.length !== manifest.acceptedSpeciesCount
    || species.some((record) => record.rank !== 'species' || record.status !== 'accepted')) {
    throw new Error(`Expected ${EXPECTED_ACCEPTED_SPECIES} strict accepted COL26.8 Bacteria species`)
  }
  const eligible = species.filter((record) => String(record.sourceDatasetId) === String(SOURCE_DATASET_KEY))
  const ineligible = species.filter((record) => String(record.sourceDatasetId) !== String(SOURCE_DATASET_KEY))
  if (eligible.length !== EXPECTED_ELIGIBLE || ineligible.length !== EXPECTED_INELIGIBLE) {
    throw new Error(`Expected ${EXPECTED_ELIGIBLE} LPSN-eligible and ${EXPECTED_INELIGIBLE} ineligible Bacteria species`)
  }
  return species
}

function loadCrosswalk(path, species) {
  const bytes = readFileSync(path)
  const sourceBytes = gunzipSync(bytes)
  const snapshot = JSON.parse(sourceBytes.toString('utf8'))
  const source = snapshot.source ?? {}
  const counts = snapshot.counts ?? {}
  if (snapshot.schemaVersion !== 1
    || snapshot.crosswalkType !== 'release-pinned-external-name-identifier-crosswalk'
    || source.provider !== 'LPSN'
    || source.catalogueRelease !== 'COL26.8'
    || source.catalogueReleaseDate !== '2026-08-20'
    || source.checklistBankDatasetKey !== 316115
    || source.sourceDatasetKey !== SOURCE_DATASET_KEY
    || source.sourceDatasetVersion !== '2026-07-26'
    || source.retrievedAt !== '2026-08-31'
    || source.license !== 'CC-BY-SA-4.0'
    || counts.acceptedSpecies !== EXPECTED_ACCEPTED_SPECIES
    || counts.eligible !== EXPECTED_ELIGIBLE
    || counts.withheldIneligible !== EXPECTED_INELIGIBLE
    || counts.resolved + counts.withheld !== EXPECTED_ACCEPTED_SPECIES
    || counts.withheld !== counts.withheldIneligible + counts.withheldEligible
    || snapshot.integrity?.algorithm !== 'sha256'
    || snapshot.integrity?.requestCount !== EXPECTED_ELIGIBLE
    || !Array.isArray(snapshot.records)
    || !Array.isArray(snapshot.withheldRecords)
    || snapshot.records.length !== counts.resolved
    || snapshot.withheldRecords.length !== counts.withheld) {
    throw new Error('Bacteria LPSN crosswalk does not match the pinned COL26.8/LPSN 2026-07-26 snapshot contract')
  }

  const speciesById = new Map(species.map((record) => [record.id, record]))
  const membership = new Set()
  const responseHashByColId = new Map()
  for (const record of snapshot.records) {
    const speciesRecord = speciesById.get(record.colId)
    if (!speciesRecord || membership.has(record.colId)
      || String(speciesRecord.sourceDatasetId) !== String(SOURCE_DATASET_KEY)
      || !/^\d+$/.test(record.lpsnId ?? '')
      || record.lpsnUrl !== source.lpsnUrlTemplate.replace('{lpsnId}', record.lpsnId)
      || record.mappingBasis !== 'checklistbank-source-record'
      || record.status !== 'resolved'
      || !/^[a-f0-9]{64}$/.test(record.sourceResponseSha256 ?? '')) {
      throw new Error(`Invalid or duplicate resolved Bacteria LPSN record: ${record.colId ?? 'missing COL ID'}`)
    }
    membership.add(record.colId)
    responseHashByColId.set(record.colId, record.sourceResponseSha256)
  }
  for (const record of snapshot.withheldRecords) {
    const speciesRecord = speciesById.get(record.colId)
    if (!speciesRecord || membership.has(record.colId)
      || !['source-dataset-not-lpsn', 'missing-source-dataset-id', 'source-record-not-lpsn'].includes(record.reason)) {
      throw new Error(`Invalid or duplicate withheld Bacteria LPSN record: ${record.colId ?? 'missing COL ID'}`)
    }
    const eligible = String(speciesRecord.sourceDatasetId) === String(SOURCE_DATASET_KEY)
    if (eligible !== (record.reason === 'source-record-not-lpsn')
      || (eligible && !/^[a-f0-9]{64}$/.test(record.sourceResponseSha256 ?? ''))) {
      throw new Error(`Withheld Bacteria record has inconsistent eligibility: ${record.colId}`)
    }
    membership.add(record.colId)
    if (eligible) responseHashByColId.set(record.colId, record.sourceResponseSha256)
  }
  if (membership.size !== species.length) throw new Error('Bacteria LPSN crosswalk does not partition every species exactly once')

  const eligibleSpecies = species.filter((record) => String(record.sourceDatasetId) === String(SOURCE_DATASET_KEY))
  const requestLedgerBytes = Buffer.from(`${eligibleSpecies.map((record) => JSON.stringify({
    colId: record.id,
    requestUrl: source.endpointTemplate.replace('{colId}', encodeURIComponent(record.id)),
    sourceResponseSha256: responseHashByColId.get(record.id),
  })).join('\n')}\n`, 'utf8')
  if (sha256(requestLedgerBytes) !== snapshot.integrity.requestLedgerSha256) {
    throw new Error('Bacteria LPSN request-ledger SHA-256 does not match the canonical records')
  }
  return { bytes, sourceBytes, snapshot }
}

function buildExtension(crosswalk, species, resourcePacksRoot) {
  const resolvedByColId = new Map(crosswalk.snapshot.records.map((record) => [record.colId, record]))
  const runtimeRecords = species
    .filter((record) => resolvedByColId.has(record.id))
    .map((speciesRecord) => {
      const record = resolvedByColId.get(speciesRecord.id)
      return Object.fromEntries(RUNTIME_FIELDS.map((field) => [field, record[field]]))
    })
  const sourceBytes = ndjsonBytes(runtimeRecords)
  const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
  const sidecarPath = 'bacteria/lpsn-000.jsonl.gz'
  writeFileSync(join(resourcePacksRoot, sidecarPath), compressed)
  const file = {
    path: sidecarPath,
    records: runtimeRecords.length,
    bytes: compressed.byteLength,
    sourceBytes: sourceBytes.byteLength,
    sha256: sha256(compressed),
    sourceSha256: sha256(sourceBytes),
    encoding: 'gzip',
    mediaType: 'application/x-ndjson',
  }
  const pinned = crosswalk.snapshot.source
  return {
    id: 'lpsn-identifiers',
    recordType: 'external-name-identifier-crosswalk',
    provider: 'LPSN',
    source: {
      catalogueRelease: pinned.catalogueRelease,
      catalogueReleaseDate: pinned.catalogueReleaseDate,
      checklistBankDatasetKey: pinned.checklistBankDatasetKey,
      sourceDatasetKey: pinned.sourceDatasetKey,
      sourceDatasetVersion: pinned.sourceDatasetVersion,
      retrievedAt: pinned.retrievedAt,
      endpointTemplate: pinned.endpointTemplate,
      lpsnUrlTemplate: pinned.lpsnUrlTemplate,
      informationUrl: pinned.informationUrl,
      license: pinned.license,
      licenseUrl: pinned.licenseUrl,
      citation: pinned.citation,
      canonicalCrosswalkPath: 'data/sources/bacteria-lpsn-crosswalk-col26.8.json.gz',
      canonicalCrosswalkSha256: sha256(crosswalk.bytes),
      canonicalCrosswalkBytes: crosswalk.bytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalk.sourceBytes),
      canonicalCrosswalkSourceBytes: crosswalk.sourceBytes.byteLength,
      requestIntegrity: crosswalk.snapshot.integrity,
    },
    eligibility: `sourceDatasetId=2015 for ${EXPECTED_ELIGIBLE.toLocaleString('en-US')} of ${EXPECTED_ACCEPTED_SPECIES.toLocaleString('en-US')} accepted species; other source datasets remain withheld`,
    counts: {
      acceptedSpecies: EXPECTED_ACCEPTED_SPECIES,
      eligible: EXPECTED_ELIGIBLE,
      resolved: crosswalk.snapshot.counts.resolved,
      withheld: crosswalk.snapshot.counts.withheld,
    },
    withheldByReason: {
      sourceDatasetNotLpsn: crosswalk.snapshot.withheldRecords.filter((record) => record.reason === 'source-dataset-not-lpsn').length,
      missingSourceDatasetId: crosswalk.snapshot.withheldRecords.filter((record) => record.reason === 'missing-source-dataset-id').length,
      sourceRecordNotLpsn: crosswalk.snapshot.withheldRecords.filter((record) => record.reason === 'source-record-not-lpsn').length,
    },
    fields: RUNTIME_FIELDS,
    files: [file],
    totalCompressedBytes: file.bytes,
    totalSourceBytes: file.sourceBytes,
    limitations: [
      'Only accepted species whose pinned COL26.8 sourceDatasetId is 2015 are eligible; ITIS and missing-source records are not name-matched to LPSN.',
      'Source linkage is not an ecology, genome, strain, fossil, media, phylogeny, dossier, or expert-review claim.',
      'The LPSN URL identifies a release-pinned nomenclatural source record; later taxonomic opinions may change.',
    ],
  }
}

export function buildBacteriaLpsnSidecar({ resourcePacksRoot, crosswalkPath }) {
  const bacteriaManifestPath = join(resourcePacksRoot, 'bacteria', 'manifest.json')
  const collectionManifestPath = join(resourcePacksRoot, 'manifest.json')
  const bacteriaManifest = readJson(bacteriaManifestPath)
  const collection = readJson(collectionManifestPath)
  if (bacteriaManifest.packageId !== 'bacteria' || bacteriaManifest.packageType !== 'static-nomenclatural-resource-pack') {
    throw new Error('Selected resource-pack root does not contain the pinned Bacteria package')
  }
  const species = loadSpecies(resourcePacksRoot, bacteriaManifest)
  const crosswalk = loadCrosswalk(crosswalkPath, species)
  const extension = buildExtension(crosswalk, species, resourcePacksRoot)
  const nextBacteriaManifest = { ...bacteriaManifest, extensions: [extension] }
  const bacteriaManifestBytes = Buffer.from(`${JSON.stringify(nextBacteriaManifest, null, 2)}\n`, 'utf8')
  writeFileSync(bacteriaManifestPath, bacteriaManifestBytes)

  const descriptorIndex = collection.packs.findIndex((pack) => pack.packageId === 'bacteria')
  if (descriptorIndex < 0) throw new Error('Collection manifest does not contain the Bacteria package')
  const descriptor = collection.packs[descriptorIndex]
  collection.packs[descriptorIndex] = {
    ...descriptor,
    manifestBytes: bacteriaManifestBytes.byteLength,
    manifestSha256: sha256(bacteriaManifestBytes),
    extensionCount: 1,
    extensionFileCount: 1,
    extensionCompressedBytes: extension.totalCompressedBytes,
    extensionSourceBytes: extension.totalSourceBytes,
  }
  writeFileSync(collectionManifestPath, `${JSON.stringify(collection, null, 2)}\n`, 'utf8')
  return { extension, bacteriaManifestBytes }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  const result = buildBacteriaLpsnSidecar({ resourcePacksRoot: options.resourcePacksRoot, crosswalkPath: options.crosswalk })
  console.log(`Built ${result.extension.counts.resolved} resolved Bacteria LPSN identifiers; ${result.extension.counts.withheld} records remain withheld`)
  console.log(`Sidecar SHA-256: ${result.extension.files[0].sha256}`)
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
