import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_RESOURCE_PACKS_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'ictv-virus-crosswalk-col26.8-msl41.v1.json.gz')
const EXPECTED_COL_SPECIES = 17552
const EXPECTED_ICTV_SPECIES = 17554
const EXPECTED_VMR_ISOLATES = 19285
const SOURCE_DATASET_KEY = 1014
const RUNTIME_FIELDS = [
  'colId', 'scientificName', 'mappingStatus', 'mappingBasis', 'ictvTaxonId', 'ictvTaxonUrl',
  'taxonomy', 'genome', 'lastChange', 'mslOfLastChange', 'proposalForLastChange', 'isolates',
]

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
    'Usage: node scripts/build-virus-ictv-sidecar.mjs [options]',
    '',
    'Builds the Viruses ICTV MSL/VMR sidecar from the committed canonical crosswalk.',
    'It preserves the original COL26.8 species shard and updates only the extension payload and manifests.',
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
      throw new Error(`Viruses species shard differs from its manifest: ${file.path}`)
    }
    species.push(...source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line)))
  }
  if (species.length !== EXPECTED_COL_SPECIES
    || species.length !== manifest.acceptedSpeciesCount
    || species.some((record) => record.rank !== 'species'
      || record.status !== 'accepted'
      || String(record.sourceDatasetId) !== String(SOURCE_DATASET_KEY))) {
    throw new Error(`Expected ${EXPECTED_COL_SPECIES} strict accepted COL26.8 ICTV-sector virus species`)
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
    || snapshot.crosswalkType !== 'release-pinned-official-virus-taxonomy-and-exemplar-metadata'
    || source.provider !== 'International Committee on Taxonomy of Viruses (ICTV)'
    || source.catalogueRelease !== 'COL26.8'
    || source.catalogueReleaseDate !== '2026-08-20'
    || source.checklistBankDatasetKey !== 316115
    || source.sourceDatasetKey !== SOURCE_DATASET_KEY
    || source.retrievedAt !== '2026-08-31'
    || source.license !== 'CC-BY-4.0'
    || !Array.isArray(source.files) || source.files.length !== 2
    || counts.acceptedSpecies !== EXPECTED_COL_SPECIES
    || counts.eligible !== EXPECTED_COL_SPECIES
    || counts.accepted !== EXPECTED_COL_SPECIES
    || counts.redirect !== 0 || counts.ambiguous !== 0 || counts.unmatched !== 0 || counts.withheld !== 0
    || counts.officialSpecies !== EXPECTED_ICTV_SPECIES || counts.upstreamOnly !== 2
    || counts.vmrIsolates !== EXPECTED_VMR_ISOLATES
    || counts.exemplarIsolates !== EXPECTED_ICTV_SPECIES || counts.additionalIsolates !== 1731
    || snapshot.integrity?.algorithm !== 'sha256'
    || !Array.isArray(snapshot.records) || snapshot.records.length !== EXPECTED_ICTV_SPECIES
    || !Array.isArray(snapshot.upstreamOnlySpecies) || snapshot.upstreamOnlySpecies.length !== 2) {
    throw new Error('Virus ICTV crosswalk does not match the pinned COL26.8/MSL41.v1/VMR 2026-07-29 contract')
  }

  const speciesById = new Map(species.map((record) => [record.id, record]))
  const matchedColIds = new Set()
  const ictvIds = new Set()
  let isolateCount = 0
  let exemplarCount = 0
  let additionalCount = 0
  let upstreamOnly = 0
  for (const record of snapshot.records) {
    if (ictvIds.has(record.ictvTaxonId)
      || !/^ICTV\d+$/.test(record.ictvTaxonId ?? '')
      || record.ictvTaxonUrl !== `https://ictv.global/id/${record.ictvTaxonId}`
      || !Array.isArray(record.isolates) || !record.isolates.length) {
      throw new Error(`Invalid or duplicate ICTV record: ${record.ictvTaxonId ?? 'missing ICTV ID'}`)
    }
    ictvIds.add(record.ictvTaxonId)
    if (record.mappingStatus === 'accepted') {
      const speciesRecord = speciesById.get(record.colId)
      if (!speciesRecord || matchedColIds.has(record.colId)
        || speciesRecord.scientificName !== record.scientificName
        || record.mappingBasis !== 'exact-unique-current-species-name-and-ictv-id') {
        throw new Error(`Invalid or duplicate exact COL/ICTV mapping: ${record.colId ?? 'missing COL ID'}`)
      }
      matchedColIds.add(record.colId)
    } else if (record.mappingStatus === 'upstream-only') {
      if (record.colId !== null || record.mappingBasis !== 'no-col26.8-accepted-species-record'
        || !snapshot.upstreamOnlySpecies.includes(record.scientificName)) {
        throw new Error(`Invalid ICTV-only species record: ${record.scientificName ?? 'missing species'}`)
      }
      upstreamOnly += 1
    } else {
      throw new Error(`Unknown virus mapping status: ${record.mappingStatus}`)
    }
    const exemplarIsolates = record.isolates.filter((isolate) => isolate.role === 'exemplar')
    if (exemplarIsolates.length !== 1) throw new Error(`${record.ictvTaxonId} does not have exactly one exemplar isolate`)
    for (const isolate of record.isolates) {
      if (!/^VMR\d+$/.test(isolate.isolateId ?? '')
        || isolate.isolateUrl !== `https://ictv.global/id/${isolate.isolateId}`
        || !['exemplar', 'additional'].includes(isolate.role)) {
        throw new Error(`${record.ictvTaxonId} has an invalid VMR isolate`)
      }
      isolateCount += 1
      if (isolate.role === 'exemplar') exemplarCount += 1
      else additionalCount += 1
    }
  }
  if (matchedColIds.size !== species.length || upstreamOnly !== counts.upstreamOnly
    || isolateCount !== counts.vmrIsolates || exemplarCount !== counts.exemplarIsolates || additionalCount !== counts.additionalIsolates) {
    throw new Error('Virus ICTV crosswalk does not partition every COL/ICTV species and VMR isolate exactly once')
  }

  const ledgerBytes = Buffer.from(`${source.files.map((file) => JSON.stringify(file)).join('\n')}\n`, 'utf8')
  if (ledgerBytes.byteLength !== snapshot.integrity.officialFileLedgerBytes
    || sha256(ledgerBytes) !== snapshot.integrity.officialFileLedgerSha256) {
    throw new Error('Virus ICTV official-file ledger SHA-256 does not match the pinned source records')
  }
  return { bytes, sourceBytes, snapshot }
}

function buildExtension(crosswalk, resourcePacksRoot) {
  const runtimeRecords = crosswalk.snapshot.records.map((record) => Object.fromEntries(RUNTIME_FIELDS.map((field) => [field, record[field]])))
  const sourceBytes = ndjsonBytes(runtimeRecords)
  const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
  const sidecarPath = 'viruses/ictv-000.jsonl.gz'
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
    id: 'ictv-virus-metadata',
    recordType: 'official-taxonomy-and-virus-metadata-crosswalk',
    provider: 'ICTV',
    source: {
      catalogueRelease: pinned.catalogueRelease,
      catalogueReleaseDate: pinned.catalogueReleaseDate,
      checklistBankDatasetKey: pinned.checklistBankDatasetKey,
      sourceDatasetKey: pinned.sourceDatasetKey,
      retrievedAt: pinned.retrievedAt,
      informationUrl: pinned.informationUrl,
      citationUrl: pinned.citationUrl,
      license: pinned.license,
      licenseUrl: pinned.licenseUrl,
      citation: pinned.citation,
      files: pinned.files,
      canonicalCrosswalkPath: 'data/sources/ictv-virus-crosswalk-col26.8-msl41.v1.json.gz',
      canonicalCrosswalkSha256: sha256(crosswalk.bytes),
      canonicalCrosswalkBytes: crosswalk.bytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalk.sourceBytes),
      canonicalCrosswalkSourceBytes: crosswalk.sourceBytes.byteLength,
      fileIntegrity: crosswalk.snapshot.integrity,
    },
    eligibility: `sourceDatasetId=1014 for all ${EXPECTED_COL_SPECIES.toLocaleString('en-US')} accepted species in the COL26.8 Viruses pack`,
    matching: crosswalk.snapshot.matching,
    counts: crosswalk.snapshot.counts,
    upstreamOnlySpecies: crosswalk.snapshot.upstreamOnlySpecies,
    fields: RUNTIME_FIELDS,
    files: [file],
    totalCompressedBytes: file.bytes,
    totalSourceBytes: file.sourceBytes,
    limitations: [
      'The COL26.8 Viruses pack has 17,552 accepted species; current ICTV MSL41.v1 has 17,554. The two ICTV-only records are retained explicitly and are not assigned invented COL IDs.',
      'Mappings require an exact, unique, case-sensitive current species name plus a unique ICTV ID shared by the pinned MSL and VMR; no normalization, fuzzy matching, synonym inference, or historical redirect is used.',
      'VMR rows identify official exemplar and additional isolates. They do not assert that accessions were independently revalidated by Evo Atlas or that virus species are biological organisms in the cellular-life sense.',
    ],
  }
}

export function buildVirusIctvSidecar({ resourcePacksRoot, crosswalkPath }) {
  const virusManifestPath = join(resourcePacksRoot, 'viruses', 'manifest.json')
  const collectionManifestPath = join(resourcePacksRoot, 'manifest.json')
  const virusManifest = readJson(virusManifestPath)
  const collection = readJson(collectionManifestPath)
  if (virusManifest.packageId !== 'viruses' || virusManifest.packageType !== 'static-nomenclatural-resource-pack') {
    throw new Error('Selected resource-pack root does not contain the pinned Viruses package')
  }
  const species = loadSpecies(resourcePacksRoot, virusManifest)
  const crosswalk = loadCrosswalk(crosswalkPath, species)
  const extension = buildExtension(crosswalk, resourcePacksRoot)
  const nextVirusManifest = { ...virusManifest, extensions: [extension] }
  const virusManifestBytes = Buffer.from(`${JSON.stringify(nextVirusManifest, null, 2)}\n`, 'utf8')
  writeFileSync(virusManifestPath, virusManifestBytes)

  const descriptorIndex = collection.packs.findIndex((pack) => pack.packageId === 'viruses')
  if (descriptorIndex < 0) throw new Error('Collection manifest does not contain the Viruses package')
  const descriptor = collection.packs[descriptorIndex]
  collection.packs[descriptorIndex] = {
    ...descriptor,
    manifestBytes: virusManifestBytes.byteLength,
    manifestSha256: sha256(virusManifestBytes),
    extensionCount: 1,
    extensionFileCount: 1,
    extensionCompressedBytes: extension.totalCompressedBytes,
    extensionSourceBytes: extension.totalSourceBytes,
  }
  writeFileSync(collectionManifestPath, `${JSON.stringify(collection, null, 2)}\n`, 'utf8')
  return { extension, virusManifestBytes }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  const result = buildVirusIctvSidecar({ resourcePacksRoot: options.resourcePacksRoot, crosswalkPath: options.crosswalk })
  console.log(`Built ${result.extension.counts.officialSpecies} current ICTV species with ${result.extension.counts.vmrIsolates} VMR isolate rows`)
  console.log(`COL mapping: accepted=${result.extension.counts.accepted}, redirect=0, ambiguous=0, unmatched=0, withheld=0; ICTV-only=${result.extension.counts.upstreamOnly}`)
  console.log(`Sidecar SHA-256: ${result.extension.files[0].sha256}`)
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
