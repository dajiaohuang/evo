import { createHash } from 'node:crypto'
import { mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { replaceOwnedExtensions, summarizeExtensions } from './manifest-extension-utils.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'wfo-plant-crosswalk-col26.8.json.gz')
const DEFAULT_RESOURCE_PACKS_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const RICH_PACKAGES = ['angiospermae', 'gymnosperms', 'early-land-plants']
const SOURCE_LIMIT = 6 * 1024 * 1024
const STATUS_KEYS = ['accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld']

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function chunkRecords(records) {
  const chunks = []
  let chunk = []
  let bytes = 0
  for (const record of records) {
    const size = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (chunk.length && bytes + size > SOURCE_LIMIT) {
      chunks.push(chunk)
      chunk = []
      bytes = 0
    }
    chunk.push(record)
    bytes += size
  }
  if (chunk.length) chunks.push(chunk)
  return chunks
}

function writeShards(root, prefix, records, pathPrefix, rangeField) {
  mkdirSync(root, { recursive: true })
  const sorted = [...records].sort((left, right) => left[rangeField].localeCompare(right[rangeField]))
  return chunkRecords(sorted).map((chunk, index) => {
    const name = `${prefix}-${String(index).padStart(3, '0')}.jsonl.gz`
    const source = Buffer.from(`${chunk.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
    const compressed = Buffer.from(deterministicGzip(source, { level: 9 }))
    writeFileSync(join(root, name), compressed)
    const rangePrefix = rangeField === 'colId' ? 'ColId' : 'WfoId'
    return {
      path: `${pathPrefix}/${name}`,
      records: chunk.length,
      bytes: compressed.byteLength,
      sourceBytes: source.byteLength,
      sha256: sha256(compressed),
      sourceSha256: sha256(source),
      encoding: 'gzip',
      mediaType: 'application/x-ndjson',
      [`min${rangePrefix}`]: chunk[0][rangeField],
      [`max${rangePrefix}`]: chunk.at(-1)[rangeField],
    }
  })
}

function countStatuses(records) {
  return Object.fromEntries(STATUS_KEYS.map((status) => [status, records.filter((record) => record.status === status).length]))
}

function sourceDescriptor(snapshot, canonicalBytes, canonicalSource) {
  return {
    catalogueRelease: snapshot.sources.col.releaseAlias,
    catalogueReleaseDate: snapshot.sources.col.releaseDate,
    checklistBankDatasetKey: snapshot.sources.col.checklistBankDatasetKey,
    wfoVersion: snapshot.sources.wfo.version,
    wfoIssued: snapshot.sources.wfo.issued,
    versionDoi: snapshot.sources.wfo.versionDoi,
    conceptDoi: snapshot.sources.wfo.conceptDoi,
    license: snapshot.sources.wfo.license,
    canonicalCrosswalkPath: 'data/sources/wfo-plant-crosswalk-col26.8.json.gz',
    canonicalCrosswalkSha256: sha256(canonicalBytes),
    canonicalCrosswalkBytes: canonicalBytes.byteLength,
    canonicalCrosswalkSourceSha256: sha256(canonicalSource),
    canonicalCrosswalkSourceBytes: canonicalSource.byteLength,
    sourceLedgerPath: snapshot.sources.wfo.sourceLedgerPath,
    sourceLedgerSha256: snapshot.sources.wfo.sourceLedgerSha256,
    archiveSha256: snapshot.sources.wfo.archiveSha256,
    wfoAcceptedSpecies: snapshot.counts.wfoAcceptedSpecies,
    upstreamOnly: snapshot.counts.upstreamOnly,
  }
}

export function buildWfoPlantProjections({ crosswalkPath = DEFAULT_CROSSWALK, resourcePacksRoot = DEFAULT_RESOURCE_PACKS_ROOT, packageRoot = join(REPOSITORY_ROOT, 'data', 'packages', 'plantae') } = {}) {
  const canonicalBytes = readFileSync(crosswalkPath)
  const canonicalSource = gunzipSync(canonicalBytes)
  const snapshot = JSON.parse(canonicalSource.toString('utf8'))
  if (snapshot.schemaVersion !== 1 || snapshot.sidecarType !== 'release-pinned-exact-plant-nomenclatural-crosswalk'
    || snapshot.colRecords.length !== snapshot.counts.colAcceptedPlantSpecies
    || snapshot.upstreamOnlyRecords.length !== snapshot.counts.upstreamOnly) {
    throw new Error('WFO canonical crosswalk identity or record counts are invalid')
  }
  const statusCounts = countStatuses(snapshot.colRecords)
  if (STATUS_KEYS.some((key) => statusCounts[key] !== snapshot.counts[key])) throw new Error('WFO canonical status counts are invalid')
  const ledgerBytes = readFileSync(join(REPOSITORY_ROOT, snapshot.sources.wfo.sourceLedgerPath))
  if (sha256(ledgerBytes) !== snapshot.sources.wfo.sourceLedgerSha256) throw new Error('WFO source ledger does not match the canonical crosswalk')

  const source = sourceDescriptor(snapshot, canonicalBytes, canonicalSource)
  for (const packageId of RICH_PACKAGES) {
    const records = snapshot.colRecords.filter((record) => record.packageId === packageId)
    const expected = snapshot.packageCounts[packageId]
    const counts = { total: records.length, ...countStatuses(records) }
    if (STATUS_KEYS.some((key) => counts[key] !== expected[key]) || counts.total !== expected.total) throw new Error(`${packageId}: WFO projection counts are invalid`)
    const root = join(packageRoot, packageId, 'nomenclature')
    mkdirSync(root, { recursive: true })
    for (const name of readdirSync(root)) {
      if (/^wfo-\d{3}\.jsonl\.gz$/u.test(name)) unlinkSync(join(root, name))
    }
    const files = writeShards(root, 'wfo', records, `data/packages/plantae/${packageId}/nomenclature`, 'colId')
    const descriptor = {
      schemaVersion: 1,
      id: 'wfo-plant-list-crosswalk',
      recordType: 'release-pinned-exact-plant-name-crosswalk',
      provider: 'World Flora Online Plant List',
      packageId,
      source,
      matching: snapshot.matchingContract,
      counts,
      fields: [...new Set(records.flatMap((record) => Object.keys(record)))].sort(),
      files,
      totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0),
      totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0),
      evidenceBoundary: 'Exact release-pinned nomenclatural linkage only; no fuzzy matching, concept equivalence, phylogeny, ecology, fossil, media, translation, dossier or expert-review claim.',
    }
    writeFileSync(join(root, 'manifest.json'), `${JSON.stringify(descriptor, null, 2)}\n`, 'utf8')
  }

  const otherRecords = snapshot.colRecords.filter((record) => record.packageId === 'other-plants')
  const otherRoot = join(resourcePacksRoot, 'other-plants')
  mkdirSync(otherRoot, { recursive: true })
  for (const name of readdirSync(otherRoot)) {
    if (/^wfo-(?:col|upstream-only)-\d{3}\.jsonl\.gz$/u.test(name)) unlinkSync(join(otherRoot, name))
  }
  const colFiles = writeShards(otherRoot, 'wfo-col', otherRecords, 'other-plants', 'colId')
  const upstreamFiles = writeShards(otherRoot, 'wfo-upstream-only', snapshot.upstreamOnlyRecords, 'other-plants', 'wfoId')
  const otherManifestPath = join(otherRoot, 'manifest.json')
  const otherManifest = JSON.parse(readFileSync(otherManifestPath, 'utf8'))
  const extension = {
    id: 'wfo-plant-list-crosswalk',
    recordType: 'release-pinned-exact-plant-name-crosswalk',
    provider: 'World Flora Online Plant List',
    source,
    eligibility: 'The COL partition contains only the 698 accepted COL26.8 species owned by other-plants; WFO upstream-only records have null COL ownership and remain a separate non-COL partition.',
    matching: snapshot.matchingContract,
    counts: {
      colAcceptedPlantSpecies: snapshot.counts.colAcceptedPlantSpecies,
      packageColRecords: otherRecords.length,
      ...countStatuses(otherRecords),
      wfoAcceptedSpecies: snapshot.counts.wfoAcceptedSpecies,
      upstreamOnly: snapshot.upstreamOnlyRecords.length,
      records: otherRecords.length + snapshot.upstreamOnlyRecords.length,
    },
    fields: [...new Set([...otherRecords, ...snapshot.upstreamOnlyRecords].flatMap((record) => Object.keys(record)))].sort(),
    partitions: [
      { id: 'other-plants-col', colOwnership: 'other-plants', records: otherRecords.length, files: colFiles },
      { id: 'wfo-upstream-only', colOwnership: null, records: snapshot.upstreamOnlyRecords.length, files: upstreamFiles },
    ],
    files: [...colFiles, ...upstreamFiles],
    totalCompressedBytes: [...colFiles, ...upstreamFiles].reduce((sum, file) => sum + file.bytes, 0),
    totalSourceBytes: [...colFiles, ...upstreamFiles].reduce((sum, file) => sum + file.sourceBytes, 0),
    limitations: snapshot.limitations,
  }
  otherManifest.extensions = replaceOwnedExtensions(otherManifest.extensions ?? [], [extension], (candidate) => candidate.id === extension.id)
  writeFileSync(otherManifestPath, `${JSON.stringify(otherManifest, null, 2)}\n`, 'utf8')

  const collectionPath = join(resourcePacksRoot, 'manifest.json')
  const collection = JSON.parse(readFileSync(collectionPath, 'utf8'))
  const descriptor = collection.packs.find((pack) => pack.packageId === 'other-plants')
  const manifestBytes = readFileSync(otherManifestPath)
  Object.assign(descriptor, {
    manifestBytes: manifestBytes.byteLength,
    manifestSha256: sha256(manifestBytes),
    ...summarizeExtensions(otherManifest.extensions),
  })
  collection.authoritativeSupplements = {
    ...(collection.authoritativeSupplements ?? {}),
    wfoPlantList: {
      version: snapshot.sources.wfo.version,
      versionDoi: snapshot.sources.wfo.versionDoi,
      acceptedSpecies: snapshot.counts.wfoAcceptedSpecies,
      colPlantRecords: snapshot.counts.colAcceptedPlantSpecies,
      upstreamOnly: snapshot.counts.upstreamOnly,
      upstreamOnlyColOwnership: null,
      affectedRichPackages: RICH_PACKAGES,
      residualResourcePack: 'other-plants',
    },
  }
  writeFileSync(collectionPath, `${JSON.stringify(collection, null, 2)}\n`, 'utf8')
  return { counts: snapshot.counts, packageCounts: snapshot.packageCounts, source, richPackages: RICH_PACKAGES, residualPackage: 'other-plants' }
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(SCRIPT_PATH)) {
  console.log(JSON.stringify(buildWfoPlantProjections(), null, 2))
}
