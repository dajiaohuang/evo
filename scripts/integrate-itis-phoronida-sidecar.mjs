import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourceRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const packRoot = join(resourceRoot, 'other-animals')
const packManifestPath = join(packRoot, 'manifest.json')
const collectionManifestPath = join(resourceRoot, 'manifest.json')
const descriptorPath = join(packRoot, 'itis-phoronida-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-phoronida-sidecar-import-ledger.json')

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => {
  const bytes = Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
  writeFileSync(path, bytes)
  return { bytes: bytes.length, sha256: sha256(bytes) }
}

const descriptorBytes = readFileSync(descriptorPath)
const descriptor = JSON.parse(descriptorBytes)
const ledger = readJson(ledgerPath)
ledger.output.descriptor = {
  path: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-phoronida-sidecar.json',
  bytes: descriptorBytes.length,
  sha256: sha256(descriptorBytes),
}
ledger.generatedBy.scriptSha256 = sha256(readFileSync(join(root, 'scripts/build-itis-phoronida-sidecar.mjs')))
writeJson(ledgerPath, ledger)

const toRuntimeFile = (file) => ({
  path: `other-animals/${file.path.split('/').at(-1)}`,
  records: file.records,
  bytes: file.bytes,
  sourceBytes: file.sourceBytes,
  sha256: file.sha256,
  sourceSha256: file.sourceSha256,
  encoding: 'gzip',
  mediaType: 'application/x-ndjson',
  ...(file.firstColUsageId
    ? { minColId: file.firstColUsageId, maxColId: file.lastColUsageId, role: 'col-partition' }
    : { colOwnership: null, role: 'upstream-only' }),
})

const files = [...descriptor.colUsageIdLocator.files, ...descriptor.upstreamOnly.files].map(toRuntimeFile)
const records = descriptor.counts.total + descriptor.counts.itisUpstreamOnly
const totalCompressedBytes = files.reduce((sum, file) => sum + file.bytes, 0)
const totalSourceBytes = files.reduce((sum, file) => sum + file.sourceBytes, 0)
const extension = {
  id: 'itis-phoronida-tsn-crosswalk',
  recordType: 'release-pinned-exact-nomenclatural-crosswalk',
  provider: 'Integrated Taxonomic Information System',
  source: {
    datasetId: descriptor.sources.itis.datasetId,
    exportDate: descriptor.sources.itis.exportDate,
    rootTsn: descriptor.sources.itis.rootTsn,
    license: descriptor.sources.itis.license,
    citationDoi: descriptor.sources.itis.citationDoi,
    canonicalDescriptorPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-phoronida-sidecar.json',
    canonicalDescriptorBytes: descriptorBytes.length,
    canonicalDescriptorSha256: sha256(descriptorBytes),
  },
  scope: descriptor.scope,
  matching: descriptor.exactMatching,
  evidenceBoundary: descriptor.evidenceBoundary,
  counts: {
    eligible: descriptor.counts.total,
    records,
    accepted: descriptor.counts.accepted,
    redirects: descriptor.counts.synonymCurrentNameRedirect,
    ambiguous: descriptor.counts.ambiguous,
    unmatched: descriptor.counts.unmatched,
    withheld: 0,
    upstreamOnly: descriptor.counts.itisUpstreamOnly,
    nonApplicable: descriptor.scope.packageOutOfScopeStrictAcceptedSpecies,
  },
  files,
  totalCompressedBytes,
  totalSourceBytes,
  deliveryProfiles: {
    'web-light': {
      payload: 'summary-only',
      files: [],
      records: 0,
      totalCompressedBytes: 0,
      totalSourceBytes: 0,
      statement: 'GitHub Pages publishes the complete Phoronida ITIS summary and canonical hashes without row shards.',
    },
    'native-full': {
      payload: 'complete',
      files: files.map((file) => file.path),
      records,
      totalCompressedBytes,
      totalSourceBytes,
    },
  },
  limitations: [descriptor.evidenceBoundary.en, descriptor.exactMatching.prohibited],
  integration: {
    clientParityRequirement: 'Android and iOS must copy every native-full file byte-for-byte; Web uses the web-light summary profile.',
    lookup: {
      strategy: 'lexicographic-colId-range-v1',
      ordering: descriptor.colUsageIdLocator.ordering,
      requestPolicy: 'Select the sole inclusive COL-ID range and read at most one COL partition; upstream-only files are never selected by COL ID.',
    },
  },
}

const packManifest = readJson(packManifestPath)
packManifest.extensions = [...(packManifest.extensions ?? []).filter((candidate) => candidate.id !== extension.id), extension]
const packManifestRecord = writeJson(packManifestPath, packManifest)
const collectionManifest = readJson(collectionManifestPath)
const pack = collectionManifest.packs.find((candidate) => candidate.packageId === 'other-animals')
if (!pack) throw new Error('Missing other-animals resource-pack descriptor')
pack.manifestBytes = packManifestRecord.bytes
pack.manifestSha256 = packManifestRecord.sha256
pack.extensionCount = packManifest.extensions.length
pack.extensionFileCount = packManifest.extensions.reduce((sum, candidate) => sum + candidate.files.length, 0)
writeJson(collectionManifestPath, collectionManifest)
console.log(`Integrated Phoronida ITIS authority sidecar with ${files.length} canonical files.`)
