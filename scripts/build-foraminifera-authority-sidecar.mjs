import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  CATALOGUE_RELEASE,
  CATALOGUE_RELEASE_DATE,
  CHECKLISTBANK_DATASET_KEY,
  EXPECTED_ACCEPTED_SPECIES,
  SOURCE_DATASET_KEY,
  SOURCE_DATASET_VERSION,
  SOURCE_DATASET_VERSION_DOI,
  canonicalJsonBytes,
  compareStableIds,
  locateColIdRangeFile,
  sha256,
} from './foraminifera-authority-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_PACKAGE_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'protists-chromists')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'foraminifera-wfd-col26.8-crosswalk.json.gz')
const DEFAULT_DESCRIPTOR = join(DEFAULT_PACKAGE_ROOT, 'foraminifera-wfd-extension.json')
const SHARD_SOURCE_BYTE_LIMIT = 6 * 1024 * 1024
const RUNTIME_FIELDS = [
  'colId', 'sourceDatasetId', 'colScientificName', 'colAuthorship', 'sourceId', 'sourceAphiaId', 'sourceUrl',
  'scientificName', 'authorship', 'rank', 'status', 'acceptedSourceId', 'acceptedScientificName', 'acceptedSourceUrl',
  'mappingBasis', 'sourceResponseSha256',
]

function parseArgs(argv) {
  const options = { packageRoot: DEFAULT_PACKAGE_ROOT, crosswalk: DEFAULT_CROSSWALK, descriptor: DEFAULT_DESCRIPTOR }
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
    'Usage: node scripts/build-foraminifera-authority-sidecar.mjs [options]',
    '',
    'Builds deterministic complete native-full Foraminifera source-record shards from',
    'the committed COL26.8/WFD crosswalk. The Web profile may expose only descriptor',
    'summary metadata; native-full contains every shard unchanged.',
  ].join('\n')
}

function readSpecies(packageRoot) {
  const records = []
  for (const name of readdirSync(packageRoot).filter((value) => /^species-\d{3}\.jsonl\.gz$/.test(value)).sort()) {
    records.push(...gunzipSync(readFileSync(join(packageRoot, name))).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line)))
  }
  const selected = records.filter((record) => record.rank === 'species' && record.status === 'accepted' && String(record.sourceDatasetId) === String(SOURCE_DATASET_KEY))
    .sort((left, right) => compareStableIds(left.id, right.id))
  if (selected.length !== EXPECTED_ACCEPTED_SPECIES || new Set(selected.map((record) => record.id)).size !== EXPECTED_ACCEPTED_SPECIES) throw new Error(`Expected ${EXPECTED_ACCEPTED_SPECIES} COL WFD species, found ${selected.length}`)
  return selected
}

function loadCrosswalk(path, species) {
  const compressed = readFileSync(path)
  const sourceBytes = gunzipSync(compressed)
  const snapshot = JSON.parse(sourceBytes.toString('utf8'))
  if (snapshot.schemaVersion !== 1 || snapshot.crosswalkType !== 'release-pinned-foraminifera-authority-identifier-crosswalk'
    || snapshot.source.catalogueRelease !== CATALOGUE_RELEASE || snapshot.source.catalogueReleaseDate !== CATALOGUE_RELEASE_DATE
    || snapshot.source.checklistBankDatasetKey !== CHECKLISTBANK_DATASET_KEY || snapshot.source.sourceDatasetKey !== SOURCE_DATASET_KEY
    || snapshot.source.sourceDatasetVersion !== SOURCE_DATASET_VERSION || snapshot.source.sourceDatasetVersionDoi !== SOURCE_DATASET_VERSION_DOI
    || snapshot.source.sourceDatasetLicense !== 'CC-BY-4.0' || snapshot.colInput.rootUsageId !== 'C'
    || snapshot.records.length !== EXPECTED_ACCEPTED_SPECIES || snapshot.counts.accepted !== EXPECTED_ACCEPTED_SPECIES) throw new Error('Foraminifera crosswalk does not match the pinned COL26.8 source contract')
  const speciesById = new Map(species.map((record) => [String(record.id), record]))
  const seen = new Set()
  const sourceIds = new Set()
  for (const record of snapshot.records) {
    const col = speciesById.get(record.colId)
    if (!col || seen.has(record.colId) || sourceIds.has(record.sourceId)
      || col.scientificName !== record.colScientificName || String(col.authorship ?? '') !== String(record.colAuthorship ?? '')
      || record.sourceDatasetId !== String(SOURCE_DATASET_KEY) || record.mappingBasis !== 'checklistbank-source-record'
      || record.status !== 'accepted' || !record.sourceId || !/^\d+$/.test(record.sourceAphiaId ?? '')
      || record.sourceUrl !== `https://www.marinespecies.org/foraminifera/aphia.php?p=taxdetails&id=${record.sourceAphiaId}`
      || !/^[a-f0-9]{64}$/.test(record.sourceResponseSha256 ?? '')) throw new Error(`Invalid or duplicate Foraminifera authority record ${record.colId ?? 'missing'}`)
    seen.add(record.colId)
    sourceIds.add(record.sourceId)
  }
  if (seen.size !== species.length) throw new Error('Foraminifera crosswalk does not cover every COL species exactly once')
  return { compressed, sourceBytes, snapshot }
}

function chunkByBytes(records) {
  const chunks = []
  let current = []
  let bytes = 0
  for (const record of records) {
    const recordBytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (current.length && bytes + recordBytes > SHARD_SOURCE_BYTE_LIMIT) {
      chunks.push(current)
      current = []
      bytes = 0
    }
    current.push(record)
    bytes += recordBytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

export function buildForaminiferaAuthoritySidecar({ packageRoot = DEFAULT_PACKAGE_ROOT, crosswalkPath = DEFAULT_CROSSWALK, descriptorPath = DEFAULT_DESCRIPTOR }) {
  const species = readSpecies(packageRoot)
  const crosswalk = loadCrosswalk(crosswalkPath, species)
  const byColId = new Map(crosswalk.snapshot.records.map((record) => [record.colId, record]))
  const records = species.map((speciesRecord) => {
    const crosswalkRecord = byColId.get(String(speciesRecord.id))
    return Object.fromEntries(RUNTIME_FIELDS.map((field) => [field, crosswalkRecord[field]]))
  }).sort((left, right) => compareStableIds(left.colId, right.colId))
  for (const name of readdirSync(packageRoot).filter((value) => /^foraminifera-wfd-\d{3}\.jsonl\.gz$/.test(value))) rmSync(join(packageRoot, name))
  const files = chunkByBytes(records).map((chunk, index) => {
    const name = `foraminifera-wfd-${String(index).padStart(3, '0')}.jsonl.gz`
    const source = Buffer.from(`${chunk.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
    const compressed = Buffer.from(deterministicGzip(source, { level: 9 }))
    writeFileSync(join(packageRoot, name), compressed)
    return { path: `protists-chromists/${name}`, records: chunk.length, bytes: compressed.byteLength, sourceBytes: source.byteLength, sha256: sha256(compressed), sourceSha256: sha256(source), encoding: 'gzip', mediaType: 'application/x-ndjson', minColId: chunk[0].colId, maxColId: chunk.at(-1).colId }
  })
  const source = crosswalk.snapshot.source
  const descriptor = {
    id: 'foraminifera-wfd-identifiers',
    recordType: 'external-name-identifier-crosswalk',
    provider: 'World Foraminifera Database (WoRMS) through ChecklistBank',
    source: {
      catalogueRelease: source.catalogueRelease,
      catalogueReleaseDate: source.catalogueReleaseDate,
      checklistBankDatasetKey: source.checklistBankDatasetKey,
      sourceDatasetKey: source.sourceDatasetKey,
      sourceDatasetTitle: source.sourceDatasetTitle,
      sourceDatasetVersion: source.sourceDatasetVersion,
      sourceDatasetVersionDoi: source.sourceDatasetVersionDoi,
      sourceDatasetDoi: source.sourceDatasetDoi,
      license: source.sourceDatasetLicense,
      licenseUrl: source.sourceDatasetLicenseUrl,
      informationUrl: source.informationUrl,
      retrievedAt: source.retrievedAt,
      canonicalCrosswalkPath: 'data/sources/foraminifera-wfd-col26.8-crosswalk.json.gz',
      canonicalCrosswalkBytes: crosswalk.compressed.byteLength,
      canonicalCrosswalkSha256: sha256(crosswalk.compressed),
      canonicalCrosswalkSourceBytes: crosswalk.sourceBytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalk.sourceBytes),
      sourcePageCount: source.nameusagePages.length,
      sourceRecordCount: source.nameusageTotal,
      directSourceRequestCount: crosswalk.snapshot.integrity.directSourceRequestCount,
      directSourceRequestLedgerSha256: crosswalk.snapshot.integrity.directSourceRequestLedgerSha256,
      rightsBoundary: 'This is a minimal derived identifier/status projection for the pinned COL release. It does not redistribute raw WFD responses or assert a complete upstream-only inventory.',
    },
    eligibility: 'Every strict accepted COL26.8 species whose sourceDatasetId is World Foraminifera Database 1157 and whose lineage descends from browse root C (Chromista).',
    counts: { eligible: records.length, resolved: records.length, acceptedSpecies: records.length, accepted: records.length, redirects: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: null },
    files,
    totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0),
    totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0),
    deliveryProfiles: {
      'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'GitHub Pages carries the descriptor and hashes but no Foraminifera authority payload shards.' },
      'native-full': { payload: 'complete', files: files.map((file) => file.path), records: records.length, totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0), totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0), releaseFilesSha256: sha256(canonicalJsonBytes(files)) },
    },
    limitations: [
      'This is a COL26.8 release-scoped authority identifier projection, not a frozen complete WFD archive or a claim that every Foraminifera taxon is represented in COL.',
      'ChecklistBank exposes a complete date-pinned WFD nameusage page set, but no immutable downloadable archive was available; upstream-only is therefore not asserted.',
      'No distributions, traits, ecology, media, bibliography, fossil evidence, phylogeny or dossier content is copied.',
    ],
    integration: {
      clientParityRequirement: 'Native Android and iOS must copy every native-full file byte-for-byte; Web uses the web-light summary profile.',
      lookup: { strategy: 'lexicographic-colId-range-v1', ordering: 'Unicode code-unit ascending without locale folding or normalization.', requestPolicy: 'Select the sole inclusive minColId/maxColId shard for a query and load at most that one shard.' },
    },
  }
  writeFileSync(descriptorPath, canonicalJsonBytes(descriptor))
  const packageManifestPath = join(packageRoot, 'manifest.json')
  const collectionManifestPath = join(dirname(packageRoot), 'manifest.json')
  if (existsSync(packageManifestPath) && existsSync(collectionManifestPath)) {
    const packageManifest = JSON.parse(readFileSync(packageManifestPath, 'utf8'))
    packageManifest.extensions = [...(packageManifest.extensions ?? []).filter((candidate) => candidate.id !== descriptor.id), descriptor]
    writeFileSync(packageManifestPath, canonicalJsonBytes(packageManifest))
    const collection = JSON.parse(readFileSync(collectionManifestPath, 'utf8'))
    const summary = collection.packs.find((pack) => pack.packageId === 'protists-chromists')
    if (!summary) throw new Error('Protists/Chromists collection manifest entry is missing')
    const packageManifestBytes = readFileSync(packageManifestPath)
    Object.assign(summary, {
      manifestBytes: packageManifestBytes.byteLength,
      manifestSha256: sha256(packageManifestBytes),
      extensionCount: packageManifest.extensions.length,
      extensionFileCount: packageManifest.extensions.reduce((sum, extension) => sum + extension.files.length, 0),
      extensionCompressedBytes: packageManifest.extensions.reduce((sum, extension) => sum + extension.totalCompressedBytes, 0),
      extensionSourceBytes: packageManifest.extensions.reduce((sum, extension) => sum + extension.totalSourceBytes, 0),
    })
    collection.authoritativeSupplements = { ...(collection.authoritativeSupplements ?? {}), foraminiferaWfdIdentifiers: { catalogueRelease: CATALOGUE_RELEASE, acceptedSpecies: descriptor.counts.accepted, sourceDatasetKey: SOURCE_DATASET_KEY, resourcePack: 'protists-chromists', lookupStrategy: descriptor.integration.lookup.strategy, webProfile: 'web-light', nativeProfile: 'native-full' } }
    writeFileSync(collectionManifestPath, canonicalJsonBytes(collection))
  }
  return descriptor
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) {
  const argv = process.argv.slice(2)
  if (argv.includes('--help')) console.log(usage())
  else {
    const options = parseArgs(argv)
    console.log(JSON.stringify(buildForaminiferaAuthoritySidecar(options), null, 2))
  }
}
