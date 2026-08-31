import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourceRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const packRoot = join(resourceRoot, 'other-animals')
const packManifestPath = join(packRoot, 'manifest.json')
const collectionManifestPath = join(resourceRoot, 'manifest.json')

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => {
  const bytes = Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
  writeFileSync(path, bytes)
  return { bytes: bytes.length, sha256: sha256(bytes) }
}

const taxa = [
  { slug: 'platyhelminthes', label: 'Platyhelminthes' },
  { slug: 'rotifera', label: 'Rotifera' },
  { slug: 'bryozoa', label: 'Bryozoa' },
  { slug: 'nemertea', label: 'Nemertea' },
  { slug: 'tunicata-cephalochordata', label: 'Tunicata and Cephalochordata' },
  { slug: 'acanthocephala', label: 'Acanthocephala' },
]

const bryozoaPath = join(packRoot, 'itis-bryozoa-sidecar.json')
const bryozoa = readJson(bryozoaPath)
const oldBryozoaPrefix = 'data/packages/other-animals/nomenclature/'
const canonicalBryozoaPrefix = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/'
for (const file of [...bryozoa.colUsageIdLocator.files, ...bryozoa.upstreamOnly.files]) {
  file.path = file.path.replace(oldBryozoaPrefix, canonicalBryozoaPrefix)
}
bryozoa.evidenceBoundary.zh = '此 CC0 ITIS 侧车是混合“其他动物”资源包中所声明苔藓动物分区的冻结严格命名交叉映射；它不是全球苔藓动物名录、最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。'
const bryozoaDescriptor = writeJson(bryozoaPath, bryozoa)

const bryozoaLedgerPath = join(root, 'data/sources/itis-bryozoa-sidecar-import-ledger.json')
const bryozoaLedger = readJson(bryozoaLedgerPath)
const replacePaths = (value) => {
  if (Array.isArray(value)) return value.forEach(replacePaths)
  if (!value || typeof value !== 'object') return
  for (const [key, item] of Object.entries(value)) {
    if (typeof item === 'string') value[key] = item.replaceAll(oldBryozoaPrefix, canonicalBryozoaPrefix)
    else replacePaths(item)
  }
}
replacePaths(bryozoaLedger)
bryozoaLedger.output.descriptor = {
  path: `${canonicalBryozoaPrefix}itis-bryozoa-sidecar.json`,
  ...bryozoaDescriptor,
}
bryozoaLedger.generatedBy.scriptSha256 = sha256(readFileSync(join(root, 'scripts/build-itis-bryozoa-sidecar.mjs')))
writeJson(bryozoaLedgerPath, bryozoaLedger)

for (const slug of ['nemertea', 'tunicata-cephalochordata']) {
  const descriptorPath = join(packRoot, `itis-${slug}-sidecar.json`)
  const descriptor = readJson(descriptorPath)
  replacePaths(descriptor)
  writeJson(descriptorPath, descriptor)
}

const toRuntimeFile = (file) => ({
  path: `other-animals/${file.path.split('/').at(-1)}`,
  records: file.records,
  bytes: file.bytes,
  sourceBytes: file.sourceBytes,
  sha256: file.sha256,
  sourceSha256: file.sourceSha256,
  encoding: 'gzip',
  mediaType: 'application/x-ndjson',
  ...(file.firstColUsageId ? { minColId: file.firstColUsageId, maxColId: file.lastColUsageId, role: 'col-partition' } : { colOwnership: null, role: 'upstream-only' }),
})

const extensions = taxa.map(({ slug, label }) => {
  const descriptorPath = join(packRoot, `itis-${slug}-sidecar.json`)
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledgerPath = join(root, `data/sources/itis-${slug}-sidecar-import-ledger.json`)
  const ledger = readJson(ledgerPath)
  replacePaths(ledger)
  ledger.output.descriptor.path = `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-${slug}-sidecar.json`
  ledger.output.descriptor.bytes = descriptorBytes.length
  ledger.output.descriptor.sha256 = sha256(descriptorBytes)
  ledger.generatedBy.scriptSha256 = sha256(readFileSync(join(root, `scripts/build-itis-${slug}-sidecar.mjs`)))
  writeJson(ledgerPath, ledger)
  const files = [...descriptor.colUsageIdLocator.files, ...descriptor.upstreamOnly.files].map(toRuntimeFile)
  const records = descriptor.counts.total + descriptor.counts.itisUpstreamOnly
  const totalCompressedBytes = files.reduce((sum, file) => sum + file.bytes, 0)
  const totalSourceBytes = files.reduce((sum, file) => sum + file.sourceBytes, 0)
  return {
    id: `itis-${slug}-tsn-crosswalk`,
    recordType: 'release-pinned-exact-nomenclatural-crosswalk',
    provider: 'Integrated Taxonomic Information System',
    source: {
      datasetId: descriptor.sources.itis.datasetId,
      exportDate: descriptor.sources.itis.exportDate,
      rootTsn: descriptor.sources.itis.rootTsn,
      license: descriptor.sources.itis.license,
      citationDoi: descriptor.sources.itis.citationDoi,
      canonicalDescriptorPath: `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-${slug}-sidecar.json`,
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
        payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0,
        statement: `GitHub Pages publishes the complete ${label} ITIS summary and canonical hashes without row shards.`,
      },
      'native-full': {
        payload: 'complete', files: files.map((file) => file.path), records, totalCompressedBytes, totalSourceBytes,
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
})

const packManifest = readJson(packManifestPath)
packManifest.extensions = extensions
const packManifestRecord = writeJson(packManifestPath, packManifest)

const collectionManifest = readJson(collectionManifestPath)
const pack = collectionManifest.packs.find((candidate) => candidate.packageId === 'other-animals')
if (!pack) throw new Error('Missing other-animals resource-pack descriptor')
pack.manifestBytes = packManifestRecord.bytes
pack.manifestSha256 = packManifestRecord.sha256
pack.extensionCount = extensions.length
pack.extensionFileCount = extensions.reduce((sum, extension) => sum + extension.files.length, 0)
writeJson(collectionManifestPath, collectionManifest)

console.log(`Integrated ${extensions.length} ITIS other-animals authority scopes with ${pack.extensionFileCount} canonical files.`)
