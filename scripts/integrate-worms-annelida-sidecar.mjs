import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourceRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const packageId = 'other-animals'
const packRoot = join(resourceRoot, packageId)
const descriptorPath = join(packRoot, 'worms-annelida-sidecar.json')
const descriptorBytes = readFileSync(descriptorPath)
const descriptor = JSON.parse(descriptorBytes)
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex')
const writeJson = (path, value) => {
  const bytes = Buffer.from(`${JSON.stringify(value, null, 2)}\n`)
  writeFileSync(path, bytes)
  return { bytes: bytes.length, sha256: digest(bytes) }
}
const payload = (file, role) => ({
  ...file,
  path: `${packageId}/${file.path.split('/').at(-1)}`,
  encoding: 'gzip',
  mediaType: 'application/json',
  role,
  ...(role === 'upstream-only' ? { colOwnership: null } : {}),
})
const files = descriptor.files.map((file) => payload(file, 'col-partition'))
const upstreamOnlyFiles = descriptor.upstreamOnlyFiles.map((file) => payload(file, 'upstream-only'))
const inventory = [...files, ...upstreamOnlyFiles]
const records = descriptor.counts.total + descriptor.counts.upstreamOnly
const totalCompressedBytes = inventory.reduce((sum, file) => sum + file.bytes, 0)
const totalSourceBytes = inventory.reduce((sum, file) => sum + file.sourceBytes, 0)
const extension = {
  ...descriptor,
  descriptorSha256: digest(descriptorBytes),
  source: {
    ...descriptor.source,
    canonicalDescriptorPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-annelida-sidecar.json',
    canonicalDescriptorBytes: descriptorBytes.length,
    canonicalDescriptorSha256: digest(descriptorBytes),
  },
  counts: { ...descriptor.counts, records },
  files,
  upstreamOnlyFiles,
  totalCompressedBytes,
  totalSourceBytes,
  deliveryProfiles: {
    'web-light': {
      payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0,
      statement: 'Pages publishes the WoRMS Annelida summary and complete canonical file inventory without row shards.',
    },
    'native-full': {
      payload: 'complete', files: inventory.map((file) => file.path), records, totalCompressedBytes, totalSourceBytes,
    },
  },
  integration: {
    clientParityRequirement: 'Android and iOS copy every native-full file byte-for-byte; Pages uses the summary-only profile.',
    lookup: {
      strategy: 'lexicographic-colId-range-v1', ordering: 'Unicode code-unit ascending',
      requestPolicy: 'Select one inclusive COL-ID range. Source-only files are browsed separately and never selected by COL ID.',
    },
  },
}
const packManifestPath = join(packRoot, 'manifest.json')
const packManifest = JSON.parse(readFileSync(packManifestPath, 'utf8'))
// Preserve all unrelated authorities, including their separate source-only partitions.
const extensions = [...(packManifest.extensions ?? [])]
const index = extensions.findIndex((candidate) => candidate.id === extension.id)
if (index < 0) extensions.push(extension)
else extensions[index] = extension
packManifest.extensions = extensions
const packRecord = writeJson(packManifestPath, packManifest)
const collectionPath = join(resourceRoot, 'manifest.json')
const collection = JSON.parse(readFileSync(collectionPath, 'utf8'))
const pack = collection.packs.find((candidate) => candidate.packageId === packageId)
pack.manifestBytes = packRecord.bytes
pack.manifestSha256 = packRecord.sha256
pack.extensionCount = extensions.length
pack.extensionFileCount = extensions.reduce((sum, item) => sum + item.files.length + (item.upstreamOnlyFiles?.length ?? 0), 0)
writeJson(collectionPath, collection)
console.log(`Integrated WoRMS Annelida: ${records} records, ${inventory.length} files; preserved ${extensions.length - 1} other authorities.`)
