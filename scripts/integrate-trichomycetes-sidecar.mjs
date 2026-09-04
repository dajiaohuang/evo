import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { replaceOwnedExtensions, summarizeExtensions } from './manifest-extension-utils.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourcePath = 'data/catalogue-of-life/releases/2026-08-20/resource-packs'
const packId = 'protists-chromists'
const descriptorPath = `${resourcePath}/${packId}/trichomycetes-sidecar.json`
const ledgerPath = 'data/sources/trichomycetes-archive-import-ledger.json'
const packPath = join(root, resourcePath, packId, 'manifest.json')
const collectionPath = join(root, resourcePath, 'manifest.json')
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => {
  const bytes = Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
  writeFileSync(path, bytes)
  return { bytes: bytes.length, sha256: hash(bytes) }
}

const descriptorBytes = readFileSync(join(root, descriptorPath))
const descriptor = JSON.parse(descriptorBytes)
if (descriptor.id !== 'trichomycetes-archive-crosswalk' || descriptor.packageId !== packId) {
  throw new Error('Expected the source1033 Trichomycetes descriptor for Protists and Chromists')
}
const extension = {
  ...descriptor,
  source: {
    ...descriptor.source,
    canonicalDescriptorPath: descriptorPath,
    canonicalDescriptorBytes: descriptorBytes.length,
    canonicalDescriptorSha256: hash(descriptorBytes),
    sourceLedgerPath: ledgerPath,
    sourceLedgerSha256: hash(readFileSync(join(root, ledgerPath))),
  },
  descriptorSha256: hash(descriptorBytes),
  canonicalFileInventory: [...descriptor.files, ...descriptor.upstreamOnlyFiles],
  integration: {
    clientParityRequirement: 'Both full Apps retain every declared file byte-for-byte; Pages publishes the source summary only.',
    lookup: {
      strategy: 'lexicographic-colId-range-v1',
      ordering: 'Unicode code-unit ascending',
      requestPolicy: 'Read the sole inclusive COL-ID range, then require an exact colId record; a range is not evidence of species membership.',
    },
  },
}
const pack = readJson(packPath)
pack.extensions = replaceOwnedExtensions(pack.extensions ?? [], [extension], (entry) => entry.id === extension.id)
const packBytes = writeJson(packPath, pack)
const collection = readJson(collectionPath)
const entry = collection.packs.find((candidate) => candidate.packageId === packId)
if (!entry) throw new Error('Missing Protists and Chromists collection entry')
entry.manifestBytes = packBytes.bytes
entry.manifestSha256 = packBytes.sha256
Object.assign(entry, summarizeExtensions(pack.extensions))
writeJson(collectionPath, collection)
console.log(`Integrated Trichomycetes source1033: ${descriptor.counts.total} COL outcomes; other extensions preserved.`)
