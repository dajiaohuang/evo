import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  EXPECTED_AVES_SPECIES,
  EXPECTED_AVILIST_SPECIES,
  EXPECTED_CROCODYLIA_SPECIES,
  EXPECTED_PACKAGE_SPECIES,
  compareStableIds,
  sha256,
} from './avilist-birds-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-v2025b-crosswalk-col26.8.json.gz')
const DEFAULT_PACKAGE_NOMENCLATURE_ROOT = join(REPOSITORY_ROOT, 'data', 'packages', 'archosauria', 'crocodylomorphs-birds', 'nomenclature')
const DEFAULT_DESCRIPTOR = join(DEFAULT_PACKAGE_NOMENCLATURE_ROOT, 'avilist-extension.json')
const SOURCE_BYTE_LIMIT = 2 * 1024 * 1024

function parseArgs(argv) {
  const options = {
    crosswalk: DEFAULT_CROSSWALK,
    nomenclatureRoot: DEFAULT_PACKAGE_NOMENCLATURE_ROOT,
    descriptor: DEFAULT_DESCRIPTOR,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--crosswalk') options.crosswalk = resolve(argv[++index])
    else if (value === '--nomenclature-root') options.nomenclatureRoot = resolve(argv[++index])
    else if (value === '--descriptor') options.descriptor = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-avilist-birds-projections.mjs [options]',
    '',
    'Builds deterministic, package-local AviList colId-range and upstream-only shards',
    'from the committed canonical crosswalk. It does not modify runtime manifests.',
  ].join('\n')
}

function loadCrosswalk(path) {
  const bytes = readFileSync(path)
  const sourceBytes = gunzipSync(bytes)
  const snapshot = JSON.parse(sourceBytes.toString('utf8'))
  const counts = snapshot.counts ?? {}
  if (snapshot.schemaVersion !== 1
    || snapshot.sidecarType !== 'release-pinned-exact-avilist-avibase-concept-crosswalk'
    || snapshot.sources?.col?.releaseAlias !== 'COL26.8'
    || snapshot.sources?.avilist?.version !== 'v2025b'
    || snapshot.sources?.avilist?.versionDoi !== '10.2173/avilist.v2025b'
    || snapshot.sources?.avilist?.license !== 'CC-BY-4.0'
    || counts.packageAcceptedSpecies !== EXPECTED_PACKAGE_SPECIES
    || counts.colAcceptedAves !== EXPECTED_AVES_SPECIES
    || counts.colAcceptedCrocodylia !== EXPECTED_CROCODYLIA_SPECIES
    || counts.avilistAcceptedSpecies !== EXPECTED_AVILIST_SPECIES
    || counts.accepted !== 10444
    || counts.officialCurrentNameRedirect !== 78
    || counts.ambiguous !== 1
    || counts.unmatched !== 521
    || counts.nonApplicable !== EXPECTED_CROCODYLIA_SPECIES
    || counts.uniqueMatchedAviListSpecies !== 10522
    || counts.manyToOneColLinks !== 0
    || counts.upstreamOnly !== 609
    || !Array.isArray(snapshot.colRecords) || snapshot.colRecords.length !== EXPECTED_AVES_SPECIES
    || !Array.isArray(snapshot.nonApplicableRecords) || snapshot.nonApplicableRecords.length !== EXPECTED_CROCODYLIA_SPECIES
    || !Array.isArray(snapshot.upstreamOnlyRecords) || snapshot.upstreamOnlyRecords.length !== counts.upstreamOnly) {
    throw new Error('AviList canonical crosswalk does not match the pinned v2025b/COL26.8 contract')
  }
  const packageRecords = [...snapshot.colRecords, ...snapshot.nonApplicableRecords]
    .sort((left, right) => compareStableIds(left.colId, right.colId))
  if (new Set(packageRecords.map((record) => record.colId)).size !== EXPECTED_PACKAGE_SPECIES) {
    throw new Error('AviList canonical records do not partition the package by unique COL ID')
  }
  const recordLedgerBytes = Buffer.from(`${packageRecords.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
  if (sha256(recordLedgerBytes) !== snapshot.integrity?.packageRecordLedgerSha256) {
    throw new Error('AviList canonical package-record ledger digest is stale')
  }
  return { bytes, sourceBytes, snapshot, packageRecords }
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

function projectPackageRecord(record) {
  const base = {
    colId: record.colId,
    colSourceDatasetId: record.colSourceDatasetId,
    colScientificName: record.colScientificName,
    status: record.status,
  }
  if (record.status === 'accepted' || record.status === 'official-current-name-redirect') {
    return {
      ...base,
      mappingBasis: record.mappingBasis,
      avibaseId: record.avibaseId,
      officialScientificName: record.officialScientificName,
      officialAuthority: record.officialAuthority,
      officialEnglishName: record.officialEnglishName,
      officialOrder: record.officialOrder,
      officialFamily: record.officialFamily,
      officialProtonym: record.officialProtonym,
      sourceRow: record.sourceRow,
    }
  }
  if (record.status === 'ambiguous') {
    return {
      ...base,
      mappingBasis: record.mappingBasis,
      colPublicationYear: record.colPublicationYear,
      candidates: record.candidates,
    }
  }
  if (record.status === 'non-applicable') {
    return { ...base, scope: record.scope, reason: record.reason }
  }
  return { ...base, mappingBasis: record.mappingBasis }
}

function writeShards({ records, root, prefix, pathPrefix, withColRanges }) {
  return chunkBySourceBytes(records).map((chunk, index) => {
    const name = `${prefix}-${String(index).padStart(3, '0')}.json.gz`
    const sourceBytes = Buffer.from(`${JSON.stringify(chunk)}\n`, 'utf8')
    const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    writeFileSync(join(root, name), compressed)
    const file = {
      path: `${pathPrefix}/${name}`,
      records: chunk.length,
      bytes: compressed.byteLength,
      sourceBytes: sourceBytes.byteLength,
      sha256: sha256(compressed),
      sourceSha256: sha256(sourceBytes),
      encoding: 'gzip',
      mediaType: 'application/json',
    }
    if (withColRanges) {
      file.minColId = chunk[0].colId
      file.maxColId = chunk.at(-1).colId
    } else {
      file.minAvibaseId = chunk[0].avibaseId
      file.maxAvibaseId = chunk.at(-1).avibaseId
    }
    return file
  })
}

export function buildAviListBirdProjections({ crosswalkPath, nomenclatureRoot, descriptorPath }) {
  const crosswalk = loadCrosswalk(crosswalkPath)
  mkdirSync(nomenclatureRoot, { recursive: true })
  for (const name of readdirSync(nomenclatureRoot).filter((value) => /^avilist-(?:col|upstream-only)-\d{3}\.json(?:l)?\.gz$/u.test(value))) {
    rmSync(join(nomenclatureRoot, name))
  }
  const packageRecords = crosswalk.packageRecords.map(projectPackageRecord)
  const upstreamOnlyRecords = [...crosswalk.snapshot.upstreamOnlyRecords]
    .sort((left, right) => compareStableIds(left.avibaseId, right.avibaseId))
  const pathPrefix = 'nomenclature'
  const files = writeShards({
    records: packageRecords,
    root: nomenclatureRoot,
    prefix: 'avilist-col',
    pathPrefix,
    withColRanges: true,
  })
  const upstreamOnlyFiles = writeShards({
    records: upstreamOnlyRecords,
    root: nomenclatureRoot,
    prefix: 'avilist-upstream-only',
    pathPrefix,
    withColRanges: false,
  })
  const descriptor = {
    schemaVersion: 1,
    id: 'avilist-v2025b-avibase-concepts',
    recordType: 'release-pinned-exact-avian-authority-crosswalk',
    packageId: 'crocodylomorphs-birds',
    provider: 'AviList Core Team',
    source: {
      version: crosswalk.snapshot.sources.avilist.version,
      published: crosswalk.snapshot.sources.avilist.published,
      versionDoi: crosswalk.snapshot.sources.avilist.versionDoi,
      license: crosswalk.snapshot.sources.avilist.license,
      canonicalCrosswalkPath: 'data/sources/avilist-v2025b-crosswalk-col26.8.json.gz',
      canonicalCrosswalkBytes: crosswalk.bytes.byteLength,
      canonicalCrosswalkSha256: sha256(crosswalk.bytes),
      canonicalCrosswalkSourceBytes: crosswalk.sourceBytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalk.sourceBytes),
    },
    scope: {
      eligible: 'All 11,044 strict accepted COL26.8 species descending from Aves root V2.',
      nonApplicable: 'All 27 strict accepted COL26.8 species descending from Crocodylia root 329 remain package-local non-applicable records and are excluded from AviList match/unmatched counts.',
    },
    counts: crosswalk.snapshot.counts,
    colSourceComposition: crosswalk.snapshot.colSourceComposition,
    packageRecordSchema: {
      commonFields: ['colId', 'colSourceDatasetId', 'colScientificName', 'status'],
      matchedFields: ['mappingBasis', 'avibaseId', 'officialScientificName', 'officialAuthority', 'officialEnglishName', 'officialOrder', 'officialFamily', 'officialProtonym', 'sourceRow'],
      statusValues: ['accepted', 'official-current-name-redirect', 'ambiguous', 'unmatched', 'non-applicable'],
    },
    files,
    upstreamOnlyFiles,
    totalCompressedBytes: [...files, ...upstreamOnlyFiles].reduce((sum, file) => sum + file.bytes, 0),
    totalSourceBytes: [...files, ...upstreamOnlyFiles].reduce((sum, file) => sum + file.sourceBytes, 0),
    lookup: {
      strategy: 'lexicographic-colId-range-v1',
      ordering: 'Unicode code-unit ascending with no locale folding or normalization.',
      requestPolicy: 'Select the sole package file whose inclusive minColId/maxColId range contains the requested COL ID; load and parse only that payload shard.',
      forbiddenBehavior: 'A single-species detail query must not download or parse the complete AviList sidecar, any upstream-only shard or more than one package payload shard.',
    },
    futureIntegration: {
      runtimeManifest: 'Register this descriptor and every checksummed file in the crocodylomorphs-birds rich-package collection without altering the COL species inventory.',
      webAndBrowserOffline: 'The Web client and package/full-atlas offline plans must consume the same descriptor and gzip bytes.',
      packageZip: 'The normal package ZIP must include the descriptor, package colId shards and upstream-only shards unchanged.',
      androidAndIos: 'The complete native release inventory must stage those identical bytes for both Android and iOS; no reduced native subset is permitted.',
      releaseBoundary: 'This data-only change does not edit runtime manifests, release inventories, mobile projects or dataset/app versions.',
    },
    generatedBy: {
      scriptPath: 'scripts/build-avilist-birds-projections.mjs',
      scriptSha256: sha256(readFileSync(SCRIPT_PATH)),
      deterministic: 'Stable Unicode code-unit ordering, compact JSON arrays and archive-determinism gzip with fixed metadata.',
    },
    limitations: crosswalk.snapshot.limitations,
  }
  mkdirSync(dirname(descriptorPath), { recursive: true })
  writeFileSync(descriptorPath, `${JSON.stringify(descriptor, null, 2)}\n`, 'utf8')
  return descriptor
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  const descriptor = buildAviListBirdProjections({
    crosswalkPath: options.crosswalk,
    nomenclatureRoot: options.nomenclatureRoot,
    descriptorPath: options.descriptor,
  })
  console.log(JSON.stringify({
    counts: descriptor.counts,
    files: descriptor.files,
    upstreamOnlyFiles: descriptor.upstreamOnlyFiles,
    totalCompressedBytes: descriptor.totalCompressedBytes,
    totalSourceBytes: descriptor.totalSourceBytes,
  }, null, 2))
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
