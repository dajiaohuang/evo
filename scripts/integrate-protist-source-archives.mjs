import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { replaceOwnedExtensions, summarizeExtensions } from './manifest-extension-utils.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourcePath = 'data/catalogue-of-life/releases/2026-08-20/resource-packs'
const packId = 'protists-chromists'
const sources = [
  ['cilcat-1113-archive-crosswalk', 'cilcat-sidecar.json', 'cilcat-1113-archive-import-ledger.json'],
  ['eumycetozoa-archive-crosswalk', 'eumycetozoa-sidecar.json', 'eumycetozoa-archive-import-ledger.json'],
  ['gymnodinium-archive-crosswalk', 'gymnodinium-sidecar.json', 'gymnodinium-archive-import-ledger.json'],
]
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'))
const writeJson = (path, value) => {
  const bytes = Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
  writeFileSync(join(root, path), bytes)
  return { bytes: bytes.length, sha256: hash(bytes) }
}

const extensions = sources.map(([id, filename, ledgerFilename]) => {
  const descriptorPath = `${resourcePath}/${packId}/${filename}`
  const ledgerPath = `data/sources/${ledgerFilename}`
  const descriptorBytes = readFileSync(join(root, descriptorPath))
  const descriptor = JSON.parse(descriptorBytes)
  if (descriptor.id !== id || descriptor.packageId !== packId) throw new Error(`Unexpected source descriptor: ${descriptorPath}`)
  return {
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
      clientParityRequirement: 'Full-data inventories retain all declared files byte-for-byte; the light profile publishes summaries only. App and backend upgrades are independently scheduled.',
      lookup: {
        strategy: 'lexicographic-colId-range-v1',
        ordering: 'Unicode code-unit ascending',
        requestPolicy: 'Read the inclusive COL-ID range and require an exact colId; range membership is not a scientific identity match.',
      },
    },
  }
})
const ownedIds = new Set(sources.map(([id]) => id))
const packPath = `${resourcePath}/${packId}/manifest.json`
const pack = readJson(packPath)
pack.extensions = replaceOwnedExtensions(pack.extensions ?? [], extensions, (entry) => ownedIds.has(entry.id))
const written = writeJson(packPath, pack)
const collectionPath = `${resourcePath}/manifest.json`
const collection = readJson(collectionPath)
const entry = collection.packs.find((candidate) => candidate.packageId === packId)
if (!entry) throw new Error('Missing Protists and Chromists collection entry')
entry.manifestBytes = written.bytes
entry.manifestSha256 = written.sha256
Object.assign(entry, summarizeExtensions(pack.extensions))
writeJson(collectionPath, collection)
console.log(`Integrated ${extensions.length} original-source archives; older extensions and strict COL rows preserved.`)
