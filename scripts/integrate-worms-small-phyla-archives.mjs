import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { replaceOwnedExtensions, summarizeExtensions } from './manifest-extension-utils.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourcePath = 'data/catalogue-of-life/releases/2026-08-20/resource-packs'
const packId = 'other-animals'
const sources = [
  ['worms-bryozoa-archive-crosswalk', 'worms-bryozoa-sidecar.json', 'worms-bryozoa-1081-import-ledger.json'],
  ['worms-monogenea-archive-crosswalk', 'worms-monogenea-sidecar.json', 'worms-monogenea-archive-2026-09-01-import-ledger.json'],
  ['worms-trematoda-archive-crosswalk', 'worms-trematoda-sidecar.json', 'worms-trematoda-archive-1128-import-ledger.json'],
  ['worms-ascidiacea-archive-crosswalk', 'worms-ascidiacea-sidecar.json', 'worms-ascidiacea-1186-import-ledger.json'],
  ['worms-turbellaria-archive-crosswalk', 'worms-turbellaria-sidecar.json', 'worms-turbellaria-archive-1193-import-ledger.json'],
  ['rotifera-298081-archive-crosswalk', 'worms-rotifera-sidecar.json', 'rotifera-298081-import-ledger.json'],
  ['worms-cestoda-archive-crosswalk', 'worms-cestoda-sidecar.json', 'worms-cestoda-archive-1127-import-ledger.json'],
  ['worms-nemertea-archive-crosswalk', 'worms-nemertea-sidecar.json', 'worms-nemertea-archive-1085-import-ledger.json'],
  ['worms-gastrotricha-archive-crosswalk', 'worms-gastrotricha-sidecar.json', 'worms-gastrotricha-archive-1122-import-ledger.json'],
  ['worms-kinorhyncha-archive-crosswalk', 'worms-kinorhyncha-sidecar.json', 'worms-kinorhyncha-archive-1153-import-ledger.json'],
  ['worms-nematomorpha-archive-crosswalk', 'worms-nematomorpha-sidecar.json', 'worms-nematomorpha-archive-1119-import-ledger.json'],
  ['worms-ctenophora-archive-crosswalk', 'worms-ctenophora-sidecar.json', 'worms-ctenophora-archive-1180-import-ledger.json'],
  ['worms-chaetognatha-archive-crosswalk', 'worms-chaetognatha-sidecar.json', 'worms-chaetognatha-archive-1132-import-ledger.json'],
  ['worms-rhombozoa-archive-crosswalk', 'worms-rhombozoa-sidecar.json', 'worms-rhombozoa-archive-1150-import-ledger.json'],
  ['worms-loricifera-archive-crosswalk', 'worms-loricifera-sidecar.json', 'worms-loricifera-archive-1182-import-ledger.json'],
  ['worms-gnathostomulida-archive-crosswalk', 'worms-gnathostomulida-sidecar.json', 'worms-gnathostomulida-archive-1125-import-ledger.json'],
  ['worms-priapulida-archive-crosswalk', 'worms-priapulida-sidecar.json', 'worms-priapulida-archive-1124-import-ledger.json'],
  ['worms-thaliacea-archive-crosswalk', 'worms-thaliacea-sidecar.json', 'worms-thaliacea-archive-1185-import-ledger.json'],
  ['worms-appendicularia-archive-crosswalk', 'worms-appendicularia-sidecar.json', 'worms-appendicularia-1178-import-ledger.json'],
  ['worms-oligochaeta-archive-crosswalk', 'worms-oligochaeta-sidecar.json', 'worms-oligochaeta-archive-1099-import-ledger.json'],
  ['worms-polychaeta-archive-crosswalk', 'worms-polychaeta-sidecar.json', 'worms-polychaeta-archive-1090-import-ledger.json'],
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
  const files = descriptor.files.map((file) => ({ ...file, encoding: 'gzip', mediaType: 'application/json', role: 'col-partition' }))
  const upstreamOnlyFiles = descriptor.upstreamOnlyFiles.map((file) => ({ ...file, encoding: 'gzip', mediaType: 'application/json', role: 'upstream-only' }))
  const inventory = [...files, ...upstreamOnlyFiles]
  const records = inventory.reduce((sum, file) => sum + file.records, 0)
  const totalCompressedBytes = inventory.reduce((sum, file) => sum + file.bytes, 0)
  const totalSourceBytes = inventory.reduce((sum, file) => sum + file.sourceBytes, 0)
  return {
    ...descriptor,
    recordType: 'release-pinned-authority-archive-crosswalk',
    counts: { ...descriptor.counts, records },
    files,
    upstreamOnlyFiles,
    totalCompressedBytes,
    totalSourceBytes,
    source: {
      ...descriptor.source,
      canonicalDescriptorPath: descriptorPath,
      canonicalDescriptorBytes: descriptorBytes.length,
      canonicalDescriptorSha256: hash(descriptorBytes),
      sourceLedgerPath: ledgerPath,
      sourceLedgerSha256: hash(readFileSync(join(root, ledgerPath))),
    },
    descriptorSha256: hash(descriptorBytes),
    canonicalFileInventory: inventory,
    deliveryProfiles: {
      'web-light': { records: 0, files: [], totalCompressedBytes: 0, totalSourceBytes: 0 },
      'native-full': { records, files: inventory.map((file) => file.path), totalCompressedBytes, totalSourceBytes },
    },
    integration: {
      clientParityRequirement: 'Full-data builds retain every declared row file; Pages publishes summaries only. Client and backend infrastructure evolves independently.',
      lookup: {
        strategy: 'lexicographic-colId-range-v1',
        ordering: 'Unicode code-unit ascending',
        requestPolicy: 'Read one inclusive COL-ID range and require an exact colId; range membership is not a scientific identity match.',
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
if (!entry) throw new Error('Missing Other Animals collection entry')
entry.manifestBytes = written.bytes
entry.manifestSha256 = written.sha256
Object.assign(entry, summarizeExtensions(pack.extensions))
writeJson(collectionPath, collection)
console.log(`Integrated ${extensions.length} original-source archives; existing extensions and strict COL baseline retained.`)
