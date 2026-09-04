import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { replaceOwnedExtensions, summarizeExtensions } from './manifest-extension-utils.mjs'

const defaultRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const digest = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`)
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => {
  const bytes = jsonBytes(value)
  writeFileSync(path, bytes)
  return { bytes: bytes.length, sha256: digest(bytes) }
}

export function integrateWormsRadiozoa({ rootDir = defaultRoot } = {}) {
  const releaseRoot = join(rootDir, 'data/catalogue-of-life/releases/2026-08-20')
  const packRoot = join(releaseRoot, 'resource-packs/protists-chromists')
  const descriptorPath = join(packRoot, 'worms-radiozoa-sidecar.json')
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const payload = (file, role) => ({
    ...file,
    path: `protists-chromists/${file.path.split('/').at(-1)}`,
    encoding: 'gzip', mediaType: 'application/json', role,
    ...(role === 'upstream-only' ? { colOwnership: null } : {}),
  })
  const files = descriptor.files.map((file) => payload(file, 'col-partition'))
  const upstreamOnlyFiles = (descriptor.upstreamOnlyFiles ?? []).map((file) => payload(file, 'upstream-only'))
  const inventory = [...files, ...upstreamOnlyFiles]
  const records = descriptor.counts.total + descriptor.counts.upstreamOnly
  const totalCompressedBytes = inventory.reduce((sum, file) => sum + file.bytes, 0)
  const totalSourceBytes = inventory.reduce((sum, file) => sum + file.sourceBytes, 0)
  const extension = {
    ...descriptor,
    descriptorSha256: digest(descriptorBytes),
    source: {
      ...descriptor.source,
      canonicalDescriptorPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/worms-radiozoa-sidecar.json',
      canonicalDescriptorBytes: descriptorBytes.length,
      canonicalDescriptorSha256: digest(descriptorBytes),
    },
    counts: { ...descriptor.counts, records }, files, upstreamOnlyFiles,
    totalCompressedBytes, totalSourceBytes,
    deliveryProfiles: {
      'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0 },
      'native-full': { payload: 'complete', files: inventory.map((file) => file.path), records, totalCompressedBytes, totalSourceBytes },
    },
  }
  const packManifestPath = join(packRoot, 'manifest.json')
  const packManifest = readJson(packManifestPath)
  const extensions = replaceOwnedExtensions(packManifest.extensions ?? [], [extension], (candidate) => candidate.id === extension.id)
  packManifest.extensions = extensions
  const packRecord = writeJson(packManifestPath, packManifest)
  const collectionPath = join(releaseRoot, 'resource-packs/manifest.json')
  const collection = readJson(collectionPath)
  const pack = collection.packs.find((candidate) => candidate.packageId === 'protists-chromists')
  if (!pack) throw new Error('protists-chromists resource pack is missing from collection manifest')
  pack.manifestBytes = packRecord.bytes
  pack.manifestSha256 = packRecord.sha256
  Object.assign(pack, summarizeExtensions(extensions))
  writeJson(collectionPath, collection)
  return { id: extension.id, records, fileCount: inventory.length, extensionCount: extensions.length }
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const result = integrateWormsRadiozoa()
  console.log(`Integrated WoRMS Radiozoa: ${result.records} records, ${result.fileCount} files; preserved ${result.extensionCount - 1} other authorities.`)
}
