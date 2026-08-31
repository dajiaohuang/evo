import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourceRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const packRoot = join(resourceRoot, 'protists-chromists')
const packManifestPath = join(packRoot, 'manifest.json')
const collectionManifestPath = join(resourceRoot, 'manifest.json')
const canonicalPrefix = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/'
const obsoletePrefix = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/'

const taxa = [
  { slug: 'ciliophora', label: 'Ciliophora' },
  { slug: 'apicomplexa', label: 'Apicomplexa' },
  { slug: 'dinoflagellata', label: 'Dinoflagellata' },
  { slug: 'euglenozoa', label: 'Euglenozoa boundary / Euglenophycota inventory' },
  { slug: 'cercozoa', label: 'Cercozoa' },
  { slug: 'haptophyta', label: 'Haptophyta' },
  { slug: 'ochrophyta', label: 'Ochrophyta' },
  { slug: 'amoebozoa', label: 'Amoebozoa' },
  { slug: 'rhodophyta', label: 'Rhodophyta' },
  { slug: 'oomycota', label: 'Oomycota shared-order boundary' },
  { slug: 'cryptophyta', label: 'Cryptophyta boundary' },
  { slug: 'choanoflagellatea', label: 'Choanoflagellatea boundary' },
  { slug: 'bigyra', label: 'Bigyra' },
  { slug: 'perkinsozoa', label: 'Perkinsozoa authority boundary' },
  { slug: 'labyrinthulomycetes', label: 'Labyrinthulomycetes authority boundary' },
  { slug: 'opalozoa', label: 'Opalozoa authority boundary' },
]

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => {
  const bytes = Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
  writeFileSync(path, bytes)
  return { bytes: bytes.length, sha256: sha256(bytes) }
}

const replaceLegacyPaths = (value) => {
  if (Array.isArray(value)) return value.forEach(replaceLegacyPaths)
  if (!value || typeof value !== 'object') return
  for (const [key, item] of Object.entries(value)) {
    if (typeof item === 'string') value[key] = item.replaceAll(obsoletePrefix, canonicalPrefix)
    else replaceLegacyPaths(item)
  }
}

const toRuntimeFile = (file) => ({
  path: `protists-chromists/${file.path.split('/').at(-1)}`,
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

const packManifest = readJson(packManifestPath)
const nonItisExtensions = (packManifest.extensions ?? []).filter((extension) => !extension.id.startsWith('itis-'))

const extensions = taxa.map(({ slug, label }) => {
  const descriptorPath = join(packRoot, `itis-${slug}-sidecar.json`)
  const descriptor = readJson(descriptorPath)
  replaceLegacyPaths(descriptor)
  descriptor.packageId = 'protists-chromists'

  if (slug === 'ciliophora') {
    descriptor.scope.packageRootUsageIds = ['C', 'Z']
    descriptor.scope.packageRootScientificNames = ['Chromista', 'Protozoa']
    delete descriptor.scope.packageRootUsageId
    delete descriptor.scope.packageRootScientificName
    descriptor.scope.packageStrictAcceptedSpecies = 61_518
    descriptor.scope.packageOutOfScopeStrictAcceptedSpecies = 61_518 - descriptor.counts.total
    descriptor.scope.nonApplicableRemainder = 'All other strict accepted COL26.8 species assigned to Protists and Chromists remain outside this Ciliophora sidecar.'
    descriptor.evidenceBoundary.zh = '此 CC0 ITIS 侧车是已声明 Ciliophora 分区的冻结严格命名交叉映射；它不是全球纤毛虫名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。'
  }
  if (slug === 'dinoflagellata') {
    descriptor.evidenceBoundary.zh = '此 CC0 ITIS 侧车是已声明 Dinophyceae（Dinoflagellata）分区的冻结严格命名交叉映射；它不是全球甲藻名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。'
  }

  const descriptorRecord = writeJson(descriptorPath, descriptor)
  const ledgerPath = join(root, `data/sources/itis-${slug}-sidecar-import-ledger.json`)
  const ledger = readJson(ledgerPath)
  replaceLegacyPaths(ledger)
  if (ledger.output?.descriptor) {
    ledger.output.descriptor.path = `${canonicalPrefix}itis-${slug}-sidecar.json`
    ledger.output.descriptor.bytes = descriptorRecord.bytes
    ledger.output.descriptor.sha256 = descriptorRecord.sha256
  }
  if (ledger.generatedBy?.scriptPath) {
    ledger.generatedBy.scriptSha256 = sha256(readFileSync(join(root, ledger.generatedBy.scriptPath)))
  }
  writeJson(ledgerPath, ledger)

  const files = [
    ...(descriptor.colUsageIdLocator?.files ?? []),
    ...(descriptor.upstreamOnly?.files ?? []),
  ].filter((file) => file.records > 0).map(toRuntimeFile)
  const records = descriptor.counts.total + descriptor.counts.itisUpstreamOnly
  const totalCompressedBytes = files.reduce((sum, file) => sum + file.bytes, 0)
  const totalSourceBytes = files.reduce((sum, file) => sum + file.sourceBytes, 0)
  const prohibited = descriptor.exactMatching?.prohibited ?? 'No inferred or fuzzy match is permitted.'

  return {
    id: `itis-${slug}-tsn-crosswalk`,
    recordType: descriptor.sidecarType,
    provider: 'Integrated Taxonomic Information System',
    source: {
      datasetId: descriptor.sources.itis.datasetId,
      exportDate: descriptor.sources.itis.exportDate,
      rootTsn: descriptor.sources.itis.rootTsn ?? null,
      license: descriptor.sources.itis.license,
      citationDoi: descriptor.sources.itis.citationDoi,
      canonicalDescriptorPath: `${canonicalPrefix}itis-${slug}-sidecar.json`,
      canonicalDescriptorBytes: descriptorRecord.bytes,
      canonicalDescriptorSha256: descriptorRecord.sha256,
    },
    scope: descriptor.scope,
    rootBoundaryAudit: descriptor.rootBoundaryAudit ?? null,
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
      nonApplicable: descriptor.scope.packageOutOfScopeStrictAcceptedSpecies ?? 61_518 - descriptor.counts.total,
    },
    files,
    totalCompressedBytes,
    totalSourceBytes,
    deliveryProfiles: {
      'web-light': {
        payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0,
        statement: `GitHub Pages publishes the complete ${label} authority boundary and canonical hashes without row shards.`,
      },
      'native-full': {
        payload: 'complete', files: files.map((file) => file.path), records, totalCompressedBytes, totalSourceBytes,
      },
    },
    limitations: [descriptor.evidenceBoundary.en, prohibited],
    integration: {
      clientParityRequirement: 'Android and iOS must copy every non-empty native-full file byte-for-byte; Web uses the web-light summary profile.',
      lookup: {
        strategy: 'lexicographic-colId-range-v1',
        ordering: descriptor.colUsageIdLocator?.ordering ?? 'Unicode code-unit ascending',
        requestPolicy: 'Select the sole inclusive COL-ID range and read at most one COL partition; upstream-only files are never selected by COL ID.',
      },
    },
  }
})

packManifest.extensions = [...nonItisExtensions, ...extensions]
const packManifestRecord = writeJson(packManifestPath, packManifest)

const collectionManifest = readJson(collectionManifestPath)
const pack = collectionManifest.packs.find((candidate) => candidate.packageId === 'protists-chromists')
if (!pack) throw new Error('Missing protists-chromists resource-pack descriptor')
const allExtensions = packManifest.extensions
pack.manifestBytes = packManifestRecord.bytes
pack.manifestSha256 = packManifestRecord.sha256
pack.extensionCount = allExtensions.length
pack.extensionFileCount = allExtensions.reduce((sum, extension) => sum + extension.files.length, 0)
pack.extensionCompressedBytes = allExtensions.reduce((sum, extension) => sum + extension.totalCompressedBytes, 0)
pack.extensionSourceBytes = allExtensions.reduce((sum, extension) => sum + extension.totalSourceBytes, 0)
writeJson(collectionManifestPath, collectionManifest)

const itisFiles = extensions.reduce((sum, extension) => sum + extension.files.length, 0)
const itisRecords = extensions.reduce((sum, extension) => sum + extension.counts.records, 0)
console.log(`Integrated ${extensions.length} ITIS protist/chromist scopes with ${itisFiles} non-empty files and ${itisRecords} native records.`)
