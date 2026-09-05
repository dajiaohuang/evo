import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { strToU8 } from 'fflate'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { evaluatePackageReview } from './check-review-freshness.mjs'
import { deterministicGzip, deterministicZip } from './archive-determinism.mjs'
import { partitionSanbiDescriptions } from './sanbi-description-shards.mjs'

const args = process.argv.slice(2)
const outputIndex = args.indexOf('--out')
const requestedOutput = outputIndex >= 0 ? args[outputIndex + 1] : 'dist/data'
if (!requestedOutput) throw new Error('--out requires a path')
const paleotopographyIndex = args.indexOf('--paleotopography')
const deliveryProfileIndex = args.indexOf('--profile')
const editionIndex = args.indexOf('--edition')
const edition = editionIndex >= 0 ? args[editionIndex + 1] : 'full-web'
if (edition !== 'full-web' && edition !== 'pages-preview') {
  throw new Error('--edition must be full-web or pages-preview')
}
const pagesPreview = edition === 'pages-preview'
const deliveryProfile = deliveryProfileIndex >= 0
  ? args[deliveryProfileIndex + 1]
  : (paleotopographyIndex >= 0 && args[paleotopographyIndex + 1] === 'native-full' ? 'native-full' : 'web-light')
if (deliveryProfile !== 'web-light' && deliveryProfile !== 'native-full') {
  throw new Error('--profile must be web-light or native-full')
}
const paleotopographyDelivery = paleotopographyIndex >= 0
  ? args[paleotopographyIndex + 1]
  : (deliveryProfile === 'native-full' ? 'native-full' : 'web-preview')
if (paleotopographyDelivery !== 'web-preview' && paleotopographyDelivery !== 'native-full') {
  throw new Error('--paleotopography must be web-preview or native-full')
}
if ((deliveryProfile === 'native-full') !== (paleotopographyDelivery === 'native-full')) {
  throw new Error('--profile and --paleotopography must select the same delivery class')
}
const includeDownloadArchives = deliveryProfile === 'native-full'
const outputRoot = resolve(rootDir, requestedOutput)
const allowedRoots = [resolve(rootDir, 'dist/data'), resolve(rootDir, 'public/data')]
if (!allowedRoots.some((allowed) => outputRoot === allowed || outputRoot.startsWith(`${allowed}${sep}`))) {
  throw new Error(`Refusing to write runtime data outside dist/data or public/data: ${outputRoot}`)
}

const sourceManifest = readJson('data/manifest.json')
if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(sourceManifest.datasetVersion)) {
  throw new Error(`datasetVersion is not safe for a release path: ${sourceManifest.datasetVersion}`)
}
const startedAt = Date.now()
mkdirSync(outputRoot, { recursive: true })
const releaseHistoryPath = join(outputRoot, 'releases.json')
let previousReleaseHistory = { releases: [] }
try { previousReleaseHistory = JSON.parse(readFileSync(releaseHistoryPath, 'utf8')) } catch { /* first build */ }
const currentReleaseRoot = resolve(outputRoot, 'releases', sourceManifest.datasetVersion)
if (!currentReleaseRoot.startsWith(`${outputRoot}${sep}`)) throw new Error(`Unsafe current release path: ${currentReleaseRoot}`)
rmSync(currentReleaseRoot, { recursive: true, force: true })
const releasePrefix = `releases/${sourceManifest.datasetVersion}`
const registry = readJson('data/registry/package-registry.json')
const entities = readJson('data/registry/entities/entities.json')
const ontology = readJson('data/navigation/atlas-ontology.json')
const timeScale = readJson('data/time-scale.json')
const profiles = readJson('data/registry/taxon-profiles.json')
const claims = readJson('data/evidence/claims.json')
const references = readJson('data/references.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const places = readJson('data/places.json')
const media = readJson('data/media.json')
const previewDefinition = readJson('data/pages-preview.json')
const previewPackageIds = new Set(previewDefinition.packageIds)
if (pagesPreview) {
  const packageIds = new Set(previewDefinition.packageIds)
  const taxonIds = new Set(previewDefinition.taxonIds)
  const storyIds = new Set(previewDefinition.storyIds)
  const eventIds = new Set(previewDefinition.eventIds)
  registry.packages = registry.packages.filter((entry) => packageIds.has(entry.id))
  entities.splice(0, entities.length, ...entities.filter((entity) => taxonIds.has(entity.id)))
  profiles.splice(0, profiles.length, ...profiles.filter((profile) => taxonIds.has(profile.id) || (profile.treeNodeId && taxonIds.has(profile.treeNodeId))))
  events.splice(0, events.length, ...events.filter((event) => eventIds.has(event.id)))
  stories.splice(0, stories.length, ...stories.filter((story) => storyIds.has(story.id)))
  places.splice(0, places.length)
  media.splice(0, media.length, ...media.filter((asset) => taxonIds.has(asset.taxonId)))
}
const publishedStories = stories.filter((story) => story.evidenceStatus === 'available-with-limitations')
const calibrations = readJson('data/packages/mammalia/perissodactyla/phylogeny/calibrations.json')
const periodMetadata = readJson('data/period-map-metadata.json')
const paleogeographyProvenance = readJson('data/paleogeography/provenance.json')
const paleotopographySource = readJson('data/paleotopography/scotese-wright-2018-v2/manifest.json')
const caoObservationManifest = readJson('data/paleogeography/observations/manifest.json')
const occurrenceSource = readJson('data/sources/pbdb-occurrence-bundle.json')
const treeEvidence = readJson('data/tree/evidence.json')
const canonicalRanges = readJson('data/ranges/range-evidence.json')
const linkageCoverage = readJson('data/indexes/entity-linkage-coverage.json')
const catalogueProvenance = readJson('data/catalogue-of-life/releases/2026-08-20/provenance.json')
const catalogueSourceManifest = readJson('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')
const catalogueSpeciesOwnership = readJson('data/registry/package-species-coverage.json')
const catalogueResourcePacksSourceManifest = readJson('data/catalogue-of-life/releases/2026-08-20/resource-packs/manifest.json')
const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
const packageById = new Map(registry.packages.map((entry) => [entry.id, entry]))
const entityById = new Map(entities.map((entry) => [entry.id, entry]))
const packageForPbdbTaxon = new Map(entities.flatMap((entry) => entry.externalIds.pbdb ? [[entry.externalIds.pbdb, entry.packageId]] : []))
const files = new Map()
const richPackageNomenclatureSources = {
  echinoderms: [{
    kind: 'worms',
    id: 'worms-aphiaid-crosswalk',
    provider: 'WoRMS',
    sourcePath: 'data/packages/invertebrata/echinoderms/nomenclature/worms-aphiaid-sidecar.json.gz',
    runtimeName: 'worms-aphiaid-sidecar.json.gz',
    expectedCounts: { total: 11891, accepted: 11843, acceptedNameRedirect: 2, ambiguous: 37, unmatched: 0, withheld: 9 },
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/echinoderms/nomenclature/itis-echinodermata-sidecar.json',
    expectedId: 'itis-echinodermata-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'molluscs-brachiopods': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/molluscs-brachiopods/nomenclature/worms-mollusca-sidecar.json',
    expectedId: 'worms-mollusca-archive-crosswalk',
    expectedProvider: 'World Register of Marine Species via ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/molluscs-brachiopods/nomenclature/itis-mollusca-brachiopoda-tsn-sidecar.json',
    expectedId: 'itis-mollusca-brachiopoda-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'sponges-cnidarians': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/sponges-cnidarians/nomenclature/worms-porifera-sidecar.json',
    expectedId: 'worms-porifera-archive-crosswalk',
    expectedProvider: 'World Register of Marine Species via ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/sponges-cnidarians/nomenclature/worms-cnidaria-sidecar.json',
    expectedId: 'worms-cnidaria-archive-crosswalk',
    expectedProvider: 'World Register of Marine Species via ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/sponges-cnidarians/nomenclature/worms-hydrozoa-sidecar.json',
    expectedId: 'worms-hydrozoa-archive-crosswalk',
    expectedProvider: 'World Hydrozoa Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/invertebrata/sponges-cnidarians/nomenclature/itis-porifera-cnidaria-sidecar.json',
    expectedId: 'itis-porifera-cnidaria-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'crustaceans-insects': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/systema-dipterorum-sidecar.json',
    expectedId: 'systema-dipterorum-archive-crosswalk',
    expectedProvider: 'Systema Dipterorum via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/chilobase-sidecar.json',
    expectedId: 'chilobase-archive-crosswalk',
    expectedProvider: 'ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/osf-orthoptera-sidecar.json',
    expectedId: 'osf-orthoptera-archive-crosswalk',
    expectedProvider: 'Orthoptera Species File via ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/worms-crustacea-sidecar.json',
    expectedId: 'worms-crustacea-archive-crosswalk',
    expectedProvider: 'World Register of Marine Species via ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-crustacea-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/itis-insecta-sidecar.json',
    expectedId: 'itis-insecta-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/itis-myriapoda-sidecar.json',
    expectedId: 'itis-myriapoda-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/crustaceans-insects/nomenclature/itis-collembola-protura-sidecar.json',
    expectedId: 'itis-collembola-protura-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'trilobites-chelicerates': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/trilobites-chelicerates/nomenclature/wsc-spiders-sidecar.json',
    expectedId: 'wsc-spiders-archive-crosswalk',
    expectedProvider: 'World Spider Catalog via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/scorpion-files-sidecar.json',
    expectedId: 'scorpion-files-archive-crosswalk',
    expectedProvider: 'ChecklistBank',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/arthropoda/trilobites-chelicerates/nomenclature/itis-chelicerata-sidecar.json',
    expectedId: 'itis-chelicerata-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'turtles-lepidosaurs': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/reptilia/turtles-lepidosaurs/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-reptilia-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/reptilia/turtles-lepidosaurs/nomenclature/reptiledb-turtles-lepidosaurs-extension.json',
    expectedId: 'reptiledb-turtles-lepidosaurs-extension',
    expectedProvider: 'The Reptile Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'jsonl',
    colIdField: 'colId',
    totalCountField: 'total',
  }],
  angiospermae: [{ kind: 'wfo', descriptorPath: 'data/packages/plantae/angiospermae/nomenclature/manifest.json' }],
  gymnosperms: [{ kind: 'wfo', descriptorPath: 'data/packages/plantae/gymnosperms/nomenclature/manifest.json' }],
  'early-land-plants': [{ kind: 'wfo', descriptorPath: 'data/packages/plantae/early-land-plants/nomenclature/manifest.json' }],
  'crocodylomorphs-birds': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/archosauria/crocodylomorphs-birds/nomenclature/ioc-aves-sidecar.json',
    expectedId: 'ioc-aves-archive-crosswalk',
    expectedProvider: 'IOC World Bird List via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/archosauria/crocodylomorphs-birds/nomenclature/avilist-extension.json',
    expectedId: 'avilist-v2025b-avibase-concepts',
    expectedProvider: 'AviList Core Team',
    expectedLicense: 'CC-BY-4.0',
    rowEncoding: 'json',
    colIdField: 'colId',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/archosauria/crocodylomorphs-birds/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-crocodylia-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/archosauria/crocodylomorphs-birds/nomenclature/reptiledb-crocodylia-extension.json',
    expectedId: 'reptiledb-crocodylia-extension',
    expectedProvider: 'The Reptile Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'jsonl',
    colIdField: 'colId',
    totalCountField: 'total',
  }],
  amphibia: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/vertebrata/amphibia/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-2026-08-26-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  perissodactyla: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/perissodactyla/nomenclature/mdd-mammalia-perissodactyla-sidecar.json',
    expectedId: 'mdd-mammalia-perissodactyla-archive-crosswalk',
    expectedProvider: 'The Mammal Diversity Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/perissodactyla/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-perissodactyla-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  actinopterygii: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/vertebrata/actinopterygii/nomenclature/itis-actinopterygii-sidecar.json',
    expectedId: 'itis-actinopterygii-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  cetartiodactyla: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/cetartiodactyla/nomenclature/mdd-mammalia-cetartiodactyla-sidecar.json',
    expectedId: 'mdd-mammalia-cetartiodactyla-archive-crosswalk',
    expectedProvider: 'The Mammal Diversity Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/cetartiodactyla/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-cetartiodactyla-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  chondrichthyes: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/vertebrata/chondrichthyes/nomenclature/itis-chondrichthyes-sidecar.json',
    expectedId: 'itis-chondrichthyes-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  primates: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/primates/nomenclature/mdd-mammalia-primates-sidecar.json',
    expectedId: 'mdd-mammalia-primates-archive-crosswalk',
    expectedProvider: 'The Mammal Diversity Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/primates/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-primates-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  carnivora: [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/carnivora/nomenclature/mdd-mammalia-carnivora-sidecar.json',
    expectedId: 'mdd-mammalia-carnivora-archive-crosswalk',
    expectedProvider: 'The Mammal Diversity Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/carnivora/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-carnivora-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'other-mammals': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/other-mammals/nomenclature/mdd-mammalia-other-mammals-sidecar.json',
    expectedId: 'mdd-mammalia-other-mammals-archive-crosswalk',
    expectedProvider: 'The Mammal Diversity Database via ChecklistBank',
    expectedLicense: 'cc by',
    rowEncoding: 'json', colIdField: 'colId', totalCountField: 'total',
  }, {
    kind: 'range-sharded',
    descriptorPath: 'data/packages/mammalia/other-mammals/nomenclature/itis-tsn-sidecar.json',
    expectedId: 'itis-other-mammals-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'early-fishes': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/vertebrata/early-fishes/nomenclature/itis-agnatha-myxini-sidecar.json',
    expectedId: 'itis-agnatha-myxini-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
  'tetrapod-transition': [{
    kind: 'range-sharded',
    descriptorPath: 'data/packages/vertebrata/tetrapod-transition/nomenclature/itis-sarcopterygii-sidecar.json',
    expectedId: 'itis-sarcopterygii-tsn-crosswalk',
    expectedProvider: 'Integrated Taxonomic Information System',
    expectedLicense: 'CC0-1.0',
    rowEncoding: 'jsonl',
    colIdField: 'colUsageId',
  }],
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function jsonBytes(value, pretty = false) {
  return Buffer.from(`${JSON.stringify(value, null, pretty ? 2 : 0)}\n`, 'utf8')
}

function write(relativePath, bytes) {
  const normalized = `${releasePrefix}/${relativePath.replaceAll('\\', '/').replace(/^\/+/, '')}`
  const absolutePath = join(outputRoot, normalized)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, bytes)
  const record = { url: normalized, bytes: bytes.byteLength, sha256: sha256(bytes) }
  files.set(normalized, record)
  return record
}

function writeJson(relativePath, value) {
  // Runtime JSON is content-addressed machine data. Compact encoding preserves
  // every value while keeping a reliable GitHub Pages margin for all 109 Web
  // PaleoDEM previews; human-readable canonical sources remain pretty-printed.
  return write(relativePath, jsonBytes(value))
}

function writeBootstrapJson(relativePath, value, pretty = false) {
  const normalized = relativePath.replaceAll('\\', '/').replace(/^\/+/, '')
  const bytes = jsonBytes(value, pretty)
  const absolutePath = join(outputRoot, normalized)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, bytes)
  return { url: normalized, bytes: bytes.byteLength, sha256: sha256(bytes) }
}

function writeGzipJson(relativePath, value) {
  const source = jsonBytes(value)
  const compressed = deterministicGzip(source, { level: 9 })
  return { ...write(relativePath, compressed), sourceBytes: source.byteLength, sourceSha256: sha256(source), encoding: 'gzip', mediaType: 'application/json' }
}

function buildRichPackageNomenclatureCollections(packageId) {
  const definitions = richPackageNomenclatureSources[packageId]
  if (!definitions) return []
  return definitions.flatMap((definition) => buildRichPackageNomenclatureCollection(packageId, definition))
}

function buildRichPackageNomenclatureCollection(packageId, definition) {
  if (definition.kind === 'range-sharded') {
    const descriptorBytes = readFileSync(join(rootDir, definition.descriptorPath))
    const canonicalDescriptor = JSON.parse(descriptorBytes.toString('utf8'))
    const isItis = definition.rowEncoding === 'jsonl'
      && definition.expectedProvider === 'Integrated Taxonomic Information System'
    const descriptor = isItis ? {
      schemaVersion: canonicalDescriptor.schemaVersion,
      id: definition.expectedId,
      recordType: canonicalDescriptor.sidecarType,
      provider: definition.expectedProvider,
      packageId: canonicalDescriptor.packageId,
      source: { ...canonicalDescriptor.sources.itis, col: canonicalDescriptor.sources.col },
      matching: canonicalDescriptor.exactMatching,
      counts: canonicalDescriptor.counts,
      files: canonicalDescriptor.colUsageIdLocator.files.map((file) => ({
        ...file,
        minColId: file.firstColUsageId,
        maxColId: file.lastColUsageId,
        mediaType: 'application/x-ndjson',
      })),
      upstreamOnlyFiles: canonicalDescriptor.upstreamOnly.files.map((file) => ({
        ...file,
        mediaType: 'application/x-ndjson',
      })),
      evidenceBoundary: canonicalDescriptor.evidenceBoundary,
      limitations: [canonicalDescriptor.evidenceBoundary.en, canonicalDescriptor.exactMatching.prohibited],
    } : canonicalDescriptor
    const descriptorLicense = isItis ? canonicalDescriptor.sources?.itis?.license : descriptor.source?.license
    if (descriptor.schemaVersion !== 1 || descriptor.id !== definition.expectedId
      || descriptor.provider !== definition.expectedProvider || descriptor.packageId !== packageId
      || descriptorLicense !== definition.expectedLicense) {
      throw new Error(`${packageId}: canonical range-sharded collection descriptor is invalid`)
    }
    const packageRoot = dirname(dirname(join(rootDir, definition.descriptorPath)))
    const compareColIds = definition.totalCountField
      ? (left, right) => left < right ? -1 : left > right ? 1 : 0
      : (left, right) => left.localeCompare(right)
    let previousMaxColId = null
    const validateCanonicalFile = (file, rangeKind) => {
      const sourcePath = file.path.startsWith('data/')
        ? resolve(rootDir, ...file.path.split('/'))
        : resolve(packageRoot, ...file.path.split('/'))
      if (!sourcePath.startsWith(`${packageRoot}${sep}`)) throw new Error(`${packageId}: unsafe nomenclature path ${file.path}`)
      const sourceBytes = readFileSync(sourcePath)
      const decoded = gunzipSync(sourceBytes)
      if (sourceBytes.byteLength !== file.bytes || sha256(sourceBytes) !== file.sha256
        || decoded.byteLength !== file.sourceBytes || sha256(decoded) !== file.sourceSha256) {
        throw new Error(`${packageId}: nomenclature shard changed without rebuilding its descriptor: ${file.path}`)
      }
      const rows = definition.rowEncoding === 'jsonl'
        ? decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
        : JSON.parse(decoded.toString('utf8'))
      if (!Array.isArray(rows) || rows.length !== file.records) throw new Error(`${packageId}: invalid row count in ${file.path}`)
      if (rangeKind === 'col') {
        const colIdField = definition.colIdField
        if (rows[0]?.[colIdField] !== file.minColId || rows.at(-1)?.[colIdField] !== file.maxColId
          || rows.some((row, index) => index > 0 && compareColIds(rows[index - 1][colIdField], row[colIdField]) >= 0)
          || (previousMaxColId !== null && compareColIds(previousMaxColId, file.minColId) >= 0)) {
          throw new Error(`${packageId}: COL shard ranges are absent, overlapping or inconsistent: ${file.path}`)
        }
        previousMaxColId = file.maxColId
      }
      return sourceBytes
    }
    const canonicalFiles = descriptor.files.map((file) => ({ file, bytes: validateCanonicalFile(file, 'col') }))
    const canonicalUpstreamOnlyFiles = (descriptor.upstreamOnlyFiles ?? []).map((file) => ({ file, bytes: validateCanonicalFile(file, 'upstream') }))
    const expectedPackageRecords = descriptor.counts[definition.totalCountField ?? (isItis ? 'total' : 'packageAcceptedSpecies')]
    const expectedUpstreamOnlyRecords = isItis ? descriptor.counts.itisUpstreamOnly : descriptor.counts.upstreamOnly
    if (canonicalFiles.reduce((sum, entry) => sum + entry.file.records, 0) !== expectedPackageRecords
      || canonicalUpstreamOnlyFiles.reduce((sum, entry) => sum + entry.file.records, 0) !== expectedUpstreamOnlyRecords) {
      throw new Error(`${packageId}: range-sharded record totals do not match the descriptor`)
    }
    const publishFiles = (entries) => deliveryProfile === 'native-full'
      ? entries.map(({ file, bytes }) => ({ ...file, ...write(`packages/${packageId}/nomenclature/${basename(file.path)}`, bytes) }))
      : []
    const files = publishFiles(canonicalFiles)
    const upstreamOnlyFiles = publishFiles(canonicalUpstreamOnlyFiles)
    return [{
      ...descriptor,
      ...(!isItis ? { counts: { redirect: 0, withheld: 0, ...descriptor.counts } } : {}),
      descriptorSha256: sha256(descriptorBytes),
      canonicalFileInventory: [
        ...descriptor.files.map((file) => ({ ...file, role: 'col-partition' })),
        ...(descriptor.upstreamOnlyFiles ?? []).map((file) => ({ ...file, role: 'upstream-only' })),
      ],
      files,
      upstreamOnlyFiles,
      delivery: {
        profile: deliveryProfile,
        completeRows: deliveryProfile === 'native-full',
        publishedFileCount: files.length + upstreamOnlyFiles.length,
        canonicalFileCount: canonicalFiles.length + canonicalUpstreamOnlyFiles.length,
      },
    }]
  }
  if (definition.kind === 'wfo') {
    const descriptorBytes = readFileSync(join(rootDir, definition.descriptorPath))
    const descriptor = JSON.parse(descriptorBytes.toString('utf8'))
    const categorizedTotal = ['accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld']
      .reduce((sum, key) => sum + (descriptor.counts?.[key] ?? 0), 0)
    if (descriptor.schemaVersion !== 1 || descriptor.id !== 'wfo-plant-list-crosswalk'
      || descriptor.packageId !== packageId || categorizedTotal !== descriptor.counts.total) {
      throw new Error(`${packageId}: canonical WFO collection descriptor is invalid`)
    }
    const ledgerBytes = readFileSync(join(rootDir, descriptor.source.sourceLedgerPath))
    if (sha256(ledgerBytes) !== descriptor.source.sourceLedgerSha256) {
      throw new Error(`${packageId}: WFO source ledger does not match its collection descriptor`)
    }
    let previousMaxColId = null
    const files = descriptor.files.map((file) => {
      const sourceBytes = readFileSync(join(rootDir, ...file.path.split('/')))
      if (sourceBytes.byteLength !== file.bytes || sha256(sourceBytes) !== file.sha256) {
        throw new Error(`${packageId}: WFO shard changed without rebuilding its collection descriptor: ${file.path}`)
      }
      const rows = gunzipSync(sourceBytes).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
      if (rows.length !== file.records || rows[0]?.colId !== file.minColId || rows.at(-1)?.colId !== file.maxColId
        || rows.some((row, index) => index > 0 && rows[index - 1].colId.localeCompare(row.colId) >= 0)
        || (previousMaxColId !== null && previousMaxColId.localeCompare(file.minColId) >= 0)) {
        throw new Error(`${packageId}: WFO shard ranges are absent, overlapping or inconsistent: ${file.path}`)
      }
      previousMaxColId = file.maxColId
      const published = write(`packages/${packageId}/nomenclature/${basename(file.path)}`, sourceBytes)
      if (published.bytes > 8 * 1024 * 1024) throw new Error(`${published.url} exceeds the 8 MiB shard hard limit`)
      return { ...file, ...published }
    })
    if (files.reduce((sum, file) => sum + file.records, 0) !== descriptor.counts.total) {
      throw new Error(`${packageId}: WFO shards do not match the collection descriptor`)
    }
    return [{ ...descriptor, descriptorSha256: sha256(descriptorBytes), files }]
  }
  const compressed = readFileSync(join(rootDir, definition.sourcePath))
  const source = gunzipSync(compressed)
  const sidecar = JSON.parse(source.toString('utf8'))
  const countsMatch = Object.entries(definition.expectedCounts).every(([key, value]) => sidecar.counts?.[key] === value)
  const recordCountsMatch = Object.entries(definition.expectedCounts)
    .filter(([key]) => key !== 'total')
    .every(([key, value]) => sidecar.records?.[key]?.length === value)
  const categorizedTotal = ['accepted', 'acceptedNameRedirect', 'ambiguous', 'unmatched', 'withheld']
    .reduce((sum, key) => sum + (sidecar.counts?.[key] ?? 0), 0)
  if (sidecar.schemaVersion !== 1 || sidecar.packageId !== packageId || !countsMatch || !recordCountsMatch
    || categorizedTotal !== sidecar.counts.total) {
    throw new Error(`${packageId}: canonical WoRMS sidecar identity or status counts are invalid`)
  }
  const sourceLedger = readFileSync(join(rootDir, sidecar.sources.worms.sourceLedgerPath))
  if (sha256(sourceLedger) !== sidecar.sources.worms.sourceLedgerSha256) {
    throw new Error(`${packageId}: canonical WoRMS source ledger does not match the sidecar`)
  }
  const canonicalFile = {
    bytes: compressed.byteLength,
    sha256: sha256(compressed),
    sourceBytes: source.byteLength,
    sourceSha256: sha256(source),
    encoding: 'gzip',
    mediaType: 'application/json',
  }
  if (canonicalFile.bytes > 8 * 1024 * 1024) throw new Error(`${packageId}/${definition.id} exceeds the 8 MiB shard hard limit`)
  const published = deliveryProfile === 'native-full'
    ? { ...canonicalFile, ...write(`packages/${packageId}/nomenclature/${definition.runtimeName}`, compressed) }
    : null
  return [{
    id: definition.id,
    recordType: 'external-name-identifier-crosswalk',
    provider: definition.provider,
    snapshotBoundary: 'date-pinned-continuously-updated-service',
    source: {
      catalogueRelease: sidecar.sources.col.releaseAlias,
      catalogueReleaseDate: sidecar.sources.col.releaseDate,
      wormsDatasetId: sidecar.sources.worms.datasetId,
      retrievedAt: sidecar.sources.worms.retrievedAt,
      license: sidecar.sources.worms.license,
      citationDoi: sidecar.sources.worms.citationDoi,
      sourceLedgerPath: sidecar.sources.worms.sourceLedgerPath,
      sourceLedgerSha256: sidecar.sources.worms.sourceLedgerSha256,
    },
    matching: 'exact scientific name or explicit WoRMS accepted-name redirect; no fuzzy matching',
    counts: sidecar.counts,
    fields: ['colUsageId', 'colScientificName', 'colAuthorship', 'colSourceDatasetId', 'exactMatchName', 'requestBatch', 'aphiaRecord', 'matchedNames', 'acceptedName', 'reason'],
    ...(published ? { file: published } : {}),
    canonicalFileInventory: [canonicalFile],
    delivery: {
      profile: deliveryProfile,
      completeRows: deliveryProfile === 'native-full',
      publishedFileCount: published ? 1 : 0,
      canonicalFileCount: 1,
    },
    evidenceBoundary: sidecar.evidenceBoundary,
  }]
}

function filesBelow(directory) {
  if (!statSafe(directory)?.isDirectory()) return []
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

function statSafe(path) {
  try { return statSync(path) } catch { return null }
}

function canonicalPackageBytes(packageEntry) {
  const directory = join(rootDir, packageEntry.canonicalPath)
  return filesBelow(directory).reduce((sum, path) => sum + statSync(path).size, 0)
}

function chunkRecords(records, targetSourceBytes = 6 * 1024 * 1024) {
  const chunks = []
  let current = []
  let currentBytes = 2
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (current.length && currentBytes + bytes > targetSourceBytes) {
      chunks.push(current)
      current = []
      currentBytes = 2
    }
    current.push(record)
    currentBytes += bytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

function ownerForClaim(claim) {
  const [kind, subjectId] = claim.subjectId.split(':')
  if (kind === 'taxon') return entityById.get(subjectId)?.packageId ?? 'atlas-core'
  const explicit = {
    'tokummia-mandibulate-anatomy': 'crustaceans-insects',
    'waptia-mandibulate-series': 'crustaceans-insects',
    'yicaris-developmental-series': 'crustaceans-insects',
    'ostracod-phylotranscriptome-topology': 'crustaceans-insects',
    'pancrustacea-remipede-phylogenomics': 'crustaceans-insects',
    'pancrustacea-taxon-sampling-sensitivity': 'crustaceans-insects',
    'rhyniella-springtail-material': 'crustaceans-insects',
    'rhyniognatha-contested-affinity': 'crustaceans-insects',
    'arthropod-terrestrialization-clock': 'crustaceans-insects',
    'paskov-carboniferous-wing': 'crustaceans-insects',
    'parhyale-wing-homology-knockout': 'crustaceans-insects',
    'insect-1kite-topology-clock': 'crustaceans-insects',
    'pennsylvanian-eumetabola-sample': 'crustaceans-insects',
    'strudiella-reassessment': 'crustaceans-insects',
    'cretophasmomima-crypsis': 'crustaceans-insects',
    'early-trilobite-phylogenetic-clock': 'trilobites-chelicerates',
    'tatelt-trilobite-3d-anatomy': 'trilobites-chelicerates',
    'trilobite-upper-limb-gill': 'trilobites-chelicerates',
    'bohemolichas-gut-contents': 'trilobites-chelicerates',
    'burgess-agnostid-topology': 'trilobites-chelicerates',
    'urokodia-chelicera-book-gill': 'trilobites-chelicerates',
    'megachelicerax-chelicerae': 'trilobites-chelicerates',
    'mollisonia-neuroanatomy-mosaic': 'trilobites-chelicerates',
    'jaekelopterus-giant-chelicera': 'trilobites-chelicerates',
    'xiphosura-total-group-topology': 'trilobites-chelicerates',
    'parioscorpio-terrestrialization': 'trilobites-chelicerates',
    'arachnid-monophyly-conflict': 'trilobites-chelicerates',
    'plants-on-land': 'early-land-plants',
    'dapingian-cryptospores': 'early-land-plants',
    'ordovician-sporangia': 'early-land-plants',
    'asteroxylon-rooting-system': 'early-land-plants',
    'metzgeriothallus-record': 'early-land-plants',
    'extant-gymnosperm-backbone': 'gymnosperms',
    'living-cycad-radiation-model': 'gymnosperms',
    'cycadaceae-palaeogene-crown-model': 'gymnosperms',
    'cycad-latitudinal-contraction': 'gymnosperms',
    'tiaojishan-ginkgoxylon': 'gymnosperms',
    'conifer-hemisphere-node-pattern': 'gymnosperms',
    'angiosperm-expansion': 'angiospermae',
    'c4-grassland-expansion': 'angiospermae',
    'crown-angiosperm-calibration-sensitivity': 'angiospermae',
    'barremian-montsechia': 'angiospermae',
    'crato-cratolirion': 'angiospermae',
    'yixian-leefructus': 'angiospermae',
    'great-plains-c4-phytolith-transition': 'angiospermae',
    'early-silurian-qianodus-tooth-whorls': 'chondrichthyes',
    'rongxi-fanjingshania-dermoskeleton': 'chondrichthyes',
    'chongqing-xiushanosteus-complete-body': 'early-fishes',
    'chongqing-shenacanthus-body-plan': 'chondrichthyes',
    'givetian-gladbachus-mosaic-anatomy': 'chondrichthyes',
    'famennian-priscomyzon-oral-disc': 'early-fishes',
    'mazon-creek-myxinikela-stem-hagfish': 'early-fishes',
    'cheirolepis-eifelian-endoskeleton': 'actinopterygii',
    'fukangichthys-crown-actinopterygian-recalibration': 'actinopterygii',
    'holostei-genomic-support': 'actinopterygii',
    'teleost-3r-model-age': 'actinopterygii',
    'anisian-stem-teleosteomorph-record': 'actinopterygii',
    'neopterygian-caudal-fin-mosaic': 'actinopterygii',
    'eloposteoglossocephala-genome-structure': 'actinopterygii',
    'kungurian-gerobatrachus-stem-batrachian': 'amphibia',
    'early-triassic-triadobatrachus-ct': 'amphibia',
    'norian-funcusvermis-stem-caecilian': 'amphibia',
    'oxfordian-beiyanerpeton-salamandroid': 'amphibia',
    'oligocene-ymboirana-crown-caecilian': 'amphibia',
    'xenopus-tropicalis-draft-genome': 'amphibia',
    'xenopus-thyroid-receptor-metamorphosis': 'amphibia',
    'extant-amphibian-7238-species-timetree': 'amphibia',
    'echinerpeton-neural-spine-specimen': 'mammal-origins',
    'raranimus-basal-therapsid-snout': 'mammal-origins',
    'haramiyavia-ct-crown-boundary': 'mammal-origins',
    'riograndia-brasilodon-jaw-joint-homoplasy': 'mammal-origins',
    'jurassic-mammaliaform-jaw-ear-load-shift': 'mammal-origins',
    'liaoconodon-ossified-meckel-link': 'mammal-origins',
    'meckel-cartilage-clast-experiment': 'mammal-origins',
    'cartorhynchus-holotype-body-plan': 'marine-reptiles-pterosaurs',
    'chaohusaurus-maternal-specimen': 'marine-reptiles-pterosaurs',
    'stenopterygius-soft-tissues': 'marine-reptiles-pterosaurs',
    'rhaeticosaurus-holotype-histology': 'marine-reptiles-pterosaurs',
    'polycotylus-gravid-specimen': 'marine-reptiles-pterosaurs',
    'plesiosaur-four-flipper-model': 'marine-reptiles-pterosaurs',
    'tupandactylus-feather-melanosomes': 'marine-reptiles-pterosaurs',
    'hamipterus-egg-assemblage': 'marine-reptiles-pterosaurs',
    'giant-pterosaur-launch-model': 'marine-reptiles-pterosaurs',
    'effigia-convergent-body-plan': 'crocodylomorphs-birds',
    'carnufex-holotype-predator': 'crocodylomorphs-birds',
    'junggarsuchus-skull-consolidation': 'crocodylomorphs-birds',
    'crocodylian-tip-dated-topology': 'crocodylomorphs-birds',
    'archaeopteryx-thermopolis-skeleton': 'crocodylomorphs-birds',
    'anchiornis-plumage-melanosomes': 'crocodylomorphs-birds',
    'microraptor-four-winged-holotype': 'crocodylomorphs-birds',
    'microraptor-wind-tunnel-model': 'crocodylomorphs-birds',
    'asteriornis-holotype-crown-placement': 'crocodylomorphs-birds',
    'vegavis-skull-crown-test': 'crocodylomorphs-birds',
    'neoavian-genome-topology': 'crocodylomorphs-birds',
    'neornithes-fossil-calibrated-time-tree': 'crocodylomorphs-birds',
    'steropodon-holotype-monotreme': 'other-mammals',
    'platypus-genome-mosaic': 'other-mammals',
    'eomaia-holotype-topology': 'other-mammals',
    'juramaia-conditional-provenance': 'other-mammals',
    'ambolestes-therian-boundary': 'other-mammals',
    'placental-phenomic-kpg-model': 'other-mammals',
    'placental-molecular-four-clades': 'other-mammals',
    'eritherium-holotype-proboscidean': 'other-mammals',
    'thalassocnus-bone-density-series': 'other-mammals',
    'mimolagus-holotype-glires': 'other-mammals',
    'onychonycteris-flight-echolocation': 'other-mammals',
    'bat-seven-gene-topology': 'other-mammals',
    'indohyus-aquatic-raoellid-evidence': 'cetartiodactyla',
    'pakicetus-composite-terrestrial-skeleton': 'cetartiodactyla',
    'ambulocetus-holotype-locomotion': 'cetartiodactyla',
    'peregocetus-holotype-amphibious-dispersal': 'cetartiodactyla',
    'basilosaurus-hind-limb-specimens': 'cetartiodactyla',
    'aegicetus-holotype-tail-propulsion': 'cetartiodactyla',
    'whale-hippo-retroposon-topology': 'cetartiodactyla',
    'extant-cetacean-supermatrix-tree': 'cetartiodactyla',
    'eunotosaurus-rib-histology-shell-model': 'turtles-lepidosaurs',
    'pappochelys-gastralia-shell-mosaic': 'turtles-lepidosaurs',
    'odontochelys-plastron-dorsal-shell-mosaic': 'turtles-lepidosaurs',
    'caribemys-crown-turtle-calibration': 'turtles-lepidosaurs',
    'taytalura-stem-lepidosaur-skull': 'turtles-lepidosaurs',
    'megachirella-ct-stem-squamate': 'turtles-lepidosaurs',
    'bellairsia-synchrotron-stem-squamate': 'turtles-lepidosaurs',
    'cryptovaranoides-competing-topologies': 'turtles-lepidosaurs',
    'tetrapods-on-land': 'tetrapod-transition',
    'zachelmie-digit-trackways': 'tetrapod-transition',
    'tiktaalik-body-plan-mosaic': 'tetrapod-transition',
    'tiktaalik-pectoral-fin': 'tetrapod-transition',
    'elpistostege-digit-bearing-fin': 'tetrapod-transition',
    'acanthostega-eight-digit-limb': 'tetrapod-transition',
    'ichthyostega-joint-mobility': 'tetrapod-transition',
    'dinosaur-radiation': 'dinosauria',
    'buriolestes-holotype-feeding-boundary': 'dinosauria',
    'eocursor-holotype-ornithischian-test': 'dinosauria',
    'mussaurus-ontogenetic-stance-model': 'dinosauria',
    'ledumahadi-body-mass-quadrupedality-model': 'dinosauria',
    'scelidosaurus-r1111-dermal-skeleton': 'dinosauria',
    'yinlong-v14530-ceratopsian-mosaic': 'dinosauria',
    'edmontosaurus-ndgs2000-skin-taphonomy': 'dinosauria',
    'yutyrannus-feathered-tyrannosauroid': 'dinosauria',
    'oviraptorid-igm100979-nest-association': 'dinosauria',
    'tyrannosaurid-histology-growth-curves': 'dinosauria',
    'tyrannosaurus-osteophagy-biomechanics': 'dinosauria',
    'perissodactyl-radiation': 'perissodactyla',
    'eocene-oligocene-transition': 'perissodactyla',
    'primate-crown-clock-model': 'primates',
    'purgatorius-garbani-tarsals': 'primates',
    'altiatlasius-dental-placement-boundary': 'primates',
    'teilhardina-petm-dispersal-sample': 'primates',
    'notharctus-grooming-claw-foot': 'primates',
    'darwinius-holotype-anatomy': 'primates',
    'eosimias-isolated-tarsal-anthropoid-test': 'primates',
    'saadanius-holotype-stem-catarrhine': 'primates',
    'morotopithecus-moroto-postcranial-model': 'primates',
    'dmanisi-skull-five-variation': 'primates',
    'vindija-3319-neanderthal-genome': 'primates',
    'ust-ishim-genome-admixture-model': 'primates',
  }
  return explicit[subjectId] ?? 'atlas-core'
}

function ownerForStory(story) {
  for (const step of story.steps) {
    for (const entityId of step.taxonIds ?? []) {
      const packageId = entityById.get(entityId)?.packageId
      if (packageId && packageId !== 'atlas-core') return packageId
    }
  }
  return 'atlas-core'
}

function coreSearchEntries() {
  const entityEntries = entities.map((entity) => ({
    id: entity.id,
    kind: entity.entityKind,
    title: entity.names.scientific,
    titleEn: entity.names.en,
    titleZh: entity.names.zh,
    packageId: entity.packageId,
    route: `#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`,
    terms: [entity.names.scientific, entity.names.en, entity.names.zh, entity.rank, ...entity.synonyms, ...Object.values(entity.externalIds)],
  }))
  const eventEntries = events.map((event) => ({ id: event.id, kind: 'event', title: event.title, titleZh: event.titleZh, route: `#/events?id=${event.id}`, terms: [event.title, event.titleZh, ...event.clades, ...event.regions] }))
  const storyEntries = publishedStories.map((story) => ({ id: story.id, kind: 'story', title: story.title, titleZh: story.titleZh, route: `#/stories?id=${story.id}`, terms: [story.title, story.titleZh, story.dek] }))
  const placeEntries = places.map((place) => ({ id: place.code, kind: 'place', title: place.name, titleZh: place.nameZh, route: `#/lab?country=${place.code}`, terms: [place.code, place.name, place.nameZh] }))
  const intervalEntries = timeScale.units.map((unit) => ({ id: unit.oid, kind: 'interval', title: unit.nam, titleZh: unit.namZh, route: `#/explore?age=${((unit.eag + unit.lag) / 2).toFixed(3)}&view=diversity`, terms: [unit.nam, unit.namZh, unit.itp, unit.abr] }))
  return [...entityEntries, ...eventEntries, ...storyEntries, ...placeEntries, ...intervalEntries]
}

const core = {}
core.entities = writeGzipJson('core/entity-index.json.gz', entities)
core.packages = writeGzipJson('core/package-registry.json.gz', registry)
core.navigation = writeGzipJson('core/navigation-tree.json.gz', ontology)
core.geologicalTime = writeGzipJson('core/geological-time.json.gz', timeScale)
core.search = writeGzipJson('core/search-index.json.gz', coreSearchEntries())
core.references = writeGzipJson('core/references.json.gz', references)
core.linkageCoverage = writeGzipJson('core/entity-linkage-coverage.json.gz', linkageCoverage)
core.localeZh = writeGzipJson('core/locale-zh.json.gz', {
  entities: Object.fromEntries(entities.map((entity) => [entity.id, entity.names.zh])),
  packages: Object.fromEntries(registry.packages.map((entry) => [entry.id, entry.titleZh])),
})

const occurrencesByPackagePeriod = new Map()
let occurrenceTotal = 0
let unresolvedPackageAssignmentCount = 0
for (const period of timeScale.units.filter((unit) => unit.itp === 'period')) {
  const records = readJson(`data/fossils/${period.nam.toLowerCase()}.json`)
  for (const record of records) {
    const packageId = record.packageId ?? packageForPbdbTaxon.get(record.tid) ?? 'atlas-core'
    if (pagesPreview && !previewPackageIds.has(packageId)) continue
    occurrenceTotal += 1
    if (record.packageAssignmentStatus === 'unresolved' || (!record.packageId && !packageForPbdbTaxon.has(record.tid))) unresolvedPackageAssignmentCount += 1
    const key = `${packageId}:${period.nam}`
    if (!occurrencesByPackagePeriod.has(key)) occurrencesByPackagePeriod.set(key, [])
    occurrencesByPackagePeriod.get(key).push(record)
  }
}

const occurrenceManifest = {
  schemaVersion: 5,
  version: sourceManifest.datasetVersion,
  source: occurrenceSource,
  totalRecords: occurrenceTotal,
  assignmentMethod: 'exact registry PBDB ID, then explicit PBDB higher-classification rules; unmatched records remain in atlas-core unresolved shards',
  unresolvedPackageAssignmentCount,
  periods: {},
  packages: {},
}

for (const [key, records] of [...occurrencesByPackagePeriod].sort(([left], [right]) => left.localeCompare(right))) {
  const separator = key.indexOf(':')
  const packageId = key.slice(0, separator)
  const period = key.slice(separator + 1)
  const chunks = chunkRecords(records)
  const shardRecords = chunks.map((chunk, index) => {
    const name = `${period.toLowerCase()}-${String(index).padStart(3, '0')}.json.gz`
    const file = writeGzipJson(`occurrences/${packageId}/${name}`, chunk)
    if (file.bytes > 8 * 1024 * 1024) throw new Error(`${file.url} exceeds the 8 MiB shard hard limit`)
    return { ...file, records: chunk.length, period, packageId }
  })
  occurrenceManifest.packages[packageId] ??= []
  occurrenceManifest.packages[packageId].push(...shardRecords)
  occurrenceManifest.periods[period] ??= []
  occurrenceManifest.periods[period].push(...shardRecords)
}

const packageRuntimeManifests = []
for (const packageEntry of registry.packages) {
  const packageId = packageEntry.id
  const catalogueCoverageEntry = catalogueSpeciesOwnership.entries.find((entry) => entry.id === packageId && entry.kind === 'static-package')
  if (!catalogueCoverageEntry) throw new Error(`Catalogue ownership is missing static package ${packageId}`)
  const packageReview = evaluatePackageReview(packageId)
  const packageQueryLedger = readJson(`${packageEntry.canonicalPath}/query-ledger.json`)
  const targetedOccurrenceSnapshot = packageQueryLedger.occurrenceSnapshot ? readJson(packageQueryLedger.occurrenceSnapshot) : null
  const packagePhylogenyStatus = readJson(`${packageEntry.canonicalPath}/phylogeny/status.json`)
  const packageResearchExamples = readJson(`${packageEntry.canonicalPath}/research-examples.json`)
  const packageEntities = entities.filter((entity) => entity.packageId === packageId)
  const packageProfiles = profiles.filter((profile) => entityById.get(profile.treeNodeId)?.packageId === packageId)
  const packageClaims = claims.filter((claim) => ownerForClaim(claim) === packageId)
  const packageEvents = events.filter((event) => packageClaims.some((claim) => claim.subjectId === `event:${event.id}`))
  const packageStories = publishedStories.filter((story) => ownerForStory(story) === packageId)
  const packageMedia = media.filter((asset) => entityById.get(asset.taxonId)?.packageId === packageId)
  const assetFilesById = new Map(packageMedia.filter((asset) => asset.asset).map((asset) => {
    const source = readFileSync(join(rootDir, asset.asset.path))
    if (source.byteLength !== asset.asset.bytes || sha256(source) !== asset.asset.sha256) {
      throw new Error(`Media asset ${asset.id} does not match its canonical byte length or SHA-256`)
    }
    const file = {
      ...write(`packages/${packageId}/media/${basename(asset.asset.path)}`, source),
      mediaType: asset.asset.mediaType,
    }
    return [asset.id, file]
  }))
  const packageAssetFiles = [...assetFilesById.values()]
  const packageNomenclatureCollections = buildRichPackageNomenclatureCollections(packageId)
  const packageNomenclatureFiles = packageNomenclatureCollections.flatMap((collection) => [
    ...(collection.files ?? (collection.file ? [collection.file] : [])),
    ...(collection.upstreamOnlyFiles ?? []),
  ])
  const runtimePackageMedia = packageMedia.map((asset) => asset.asset
    ? { ...asset, asset: { ...asset.asset, ...assetFilesById.get(asset.id) } }
    : asset)
  const packageReferenceIds = new Set([
    ...packageEntities.flatMap((entity) => entity.referenceIds),
    ...packageProfiles.flatMap((profile) => profile.referenceIds),
    ...packageClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)),
    ...packageStories.flatMap((story) => story.steps.flatMap((step) => step.claimLinks.flatMap((link) => claimsById.get(link.claimId)?.referenceLinks.map((referenceLink) => referenceLink.referenceId) ?? []))),
  ])
  const payloadFiles = {}
  payloadFiles.identity = writeGzipJson(`packages/${packageId}/identity.json.gz`, packageEntities)
  if (packageProfiles.length) payloadFiles.profiles = writeGzipJson(`packages/${packageId}/profiles.json.gz`, packageProfiles)
  if (packageClaims.length) payloadFiles.claims = writeGzipJson(`packages/${packageId}/claims.json.gz`, packageClaims)
  if (packageEvents.length) payloadFiles.events = writeGzipJson(`packages/${packageId}/events.json.gz`, packageEvents)
  if (packageStories.length) payloadFiles.stories = writeGzipJson(`packages/${packageId}/stories.json.gz`, packageStories)
  if (runtimePackageMedia.length) payloadFiles.media = writeGzipJson(`packages/${packageId}/media.json.gz`, runtimePackageMedia)
  payloadFiles.researchExamples = writeGzipJson(`packages/${packageId}/research-examples.json.gz`, packageResearchExamples)
  const packageReferences = references.filter((reference) => packageReferenceIds.has(reference.id))
  payloadFiles.ranges = writeGzipJson(`packages/${packageId}/ranges.json.gz`, canonicalRanges.filter((range) => packageEntities.some((entity) => entity.id === range.entityId)))
  payloadFiles.localeZh = writeGzipJson(`packages/${packageId}/locale-zh.json.gz`, {
    language: 'zh',
    version: sourceManifest.datasetVersion,
    strings: Object.fromEntries([
      ...packageEntities.map((entity) => [`entity.${entity.id}.name`, entity.names.zh]),
      ...packageProfiles.map((profile) => [`profile.${profile.id}.name`, profile.commonNameZh]),
    ]),
  })
  payloadFiles.queryLedger = writeGzipJson(`packages/${packageId}/query-ledger.json.gz`, packageQueryLedger)
  if (packagePhylogenyStatus.status === 'available') {
    payloadFiles.phylogeny = writeGzipJson(`packages/${packageId}/phylogeny.json.gz`, readJson(`${packageEntry.canonicalPath}/${packagePhylogenyStatus.topologyPath}`))
  }
  payloadFiles.search = writeGzipJson(`package-search-index/${packageId}.json.gz`, [
    ...packageEntities.map((entity) => ({ id: entity.id, kind: entity.entityKind, title: entity.names.scientific, titleEn: entity.names.en, titleZh: entity.names.zh, route: `#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`, terms: [entity.names.scientific, entity.names.en, entity.names.zh, ...entity.synonyms, entity.definition.en, entity.definition.zh] })),
    ...packageProfiles.map((profile) => ({ id: profile.id, kind: 'profile', packageId, title: profile.scientificName, titleEn: profile.commonName, titleZh: profile.commonNameZh, route: `#/taxa?id=${encodeURIComponent(profile.id)}`, terms: [profile.overview, profile.evidenceSummary, ...profile.traits] })),
    ...packageClaims.map((claim) => ({ id: claim.id, kind: 'claim', title: claim.statement, route: '#/data', terms: [claim.statement, claim.confidenceRationale, claim.claimType] })),
    ...packageReferences.map((reference) => ({ id: reference.id, kind: 'reference', title: reference.title, route: '#/data', terms: [reference.title, reference.authors, reference.doi, reference.url].filter(Boolean) })),
  ])
  if (packageId === 'perissodactyla') {
    payloadFiles.calibrations = writeGzipJson(`packages/${packageId}/calibrations.json.gz`, calibrations)
  }
  if (targetedOccurrenceSnapshot) {
    payloadFiles.occurrenceSnapshot = writeGzipJson(`packages/${packageId}/occurrence-snapshot-v1.json.gz`, targetedOccurrenceSnapshot)
  }
  const occurrenceShards = occurrenceManifest.packages[packageId] ?? []
  const knowledgeBytes = [...Object.values(payloadFiles), ...packageAssetFiles, ...packageNomenclatureFiles].reduce((sum, file) => sum + file.bytes, 0)
  const occurrenceBytes = occurrenceShards.reduce((sum, file) => sum + file.bytes, 0)
  const manifest = {
    schemaVersion: 5,
    packageId,
    version: sourceManifest.datasetVersion,
    title: packageEntry.title,
    titleZh: packageEntry.titleZh,
    platformMaturity: packageEntry.platformMaturity,
    scientificMaturity: packageEntry.scientificMaturity,
    automatedReviewStatus: packageEntry.automatedReviewStatus,
    reviewStatus: packageReview.reviewStatus,
    effectiveReviewStatus: packageReview.effectiveReviewStatus,
    reviewFreshness: packageReview.freshness,
    reviewedBy: packageReview.reviewedBy,
    reviewedAt: packageReview.reviewedAt,
    reviewedCommit: packageReview.reviewedCommit,
    reviewedContentDigest: packageReview.reviewedContentDigest,
    currentContentDigest: packageReview.currentContentDigest,
    chatgptAssisted: packageReview.chatgptAssisted,
    reviewScope: packageReview.scope,
    reviewOpenIssues: packageReview.openIssues,
    entityCount: packageEntities.length,
    profileCount: packageProfiles.length,
    claimCount: packageClaims.length,
    researchExampleCount: packageResearchExamples.examples.length,
    researchClaimLinkCount: packageResearchExamples.examples.reduce((sum, example) => sum + example.claimIds.length, 0),
    occurrenceCount: occurrenceShards.reduce((sum, file) => sum + file.records, 0),
    queryCoverage: {
      completeness: packageQueryLedger.completeness,
      upstreamReportedTotal: packageQueryLedger.upstreamReportedTotal,
      rowsFetched: packageQueryLedger.rowsFetched,
      rowsAccepted: packageQueryLedger.rowsAccepted,
      rowsRejected: packageQueryLedger.rowsRejected,
      rowsOutsidePackage: packageQueryLedger.rowsOutsidePackage,
      pagesFetched: packageQueryLedger.pagesFetched,
    },
    catalogueCoverage: {
      releaseAlias: catalogueSpeciesOwnership.source.releaseAlias,
      strictPredicate: catalogueSpeciesOwnership.source.strictPredicate,
      acceptedSpeciesCount: catalogueCoverageEntry.acceptedSpeciesCount,
      browseRootIds: catalogueCoverageEntry.browseRootIds,
      ownershipManifestSha256: sha256(jsonBytes(catalogueSpeciesOwnership)),
      ownershipRuntimePath: `${releasePrefix}/catalogue/ownership.json.gz`,
      evidenceBoundary: 'Complete release-scoped nomenclatural ownership does not imply a curated Evo Atlas dossier.',
    },
    metrics: {
      canonicalRawBytes: canonicalPackageBytes(packageEntry),
      runtimeKnowledgeCompressedBytes: knowledgeBytes,
      numberOfShards: occurrenceShards.length,
      largestShardBytes: Math.max(0, ...occurrenceShards.map((file) => file.bytes), ...packageAssetFiles.map((file) => file.bytes), ...packageNomenclatureFiles.map((file) => file.bytes)),
      initialLoadImpactBytes: 0,
      packageLoadTime: 'client-measured',
      offlineCacheSizeBytes: knowledgeBytes + occurrenceBytes,
    },
    files: payloadFiles,
    assets: packageAssetFiles,
    ...(packageNomenclatureCollections.length ? { nomenclatureCollections: packageNomenclatureCollections } : {}),
    occurrences: occurrenceShards,
  }
  const manifestFile = writeJson(`packages/${packageId}/manifest.json`, manifest, true)
  packageRuntimeManifests.push({ ...manifest, manifest: manifestFile })

  if (includeDownloadArchives) {
    const zipEntries = {
      'manifest.json': strToU8(`${JSON.stringify(manifest, null, 2)}\n`),
    }
    for (const file of [...Object.values(payloadFiles), ...packageAssetFiles, ...packageNomenclatureFiles, ...occurrenceShards]) {
      zipEntries[file.url] = new Uint8Array(readFileSync(join(outputRoot, file.url)))
    }
    const archive = deterministicZip(zipEntries, { level: 0 })
    write(`downloads/${packageId}-${sourceManifest.datasetVersion}.zip`, archive)
  }
}

const occurrenceManifestFile = writeJson('occurrences/manifest.json', occurrenceManifest, true)
const paleogeographyByPeriod = new Map(paleogeographyProvenance.snapshots.map((snapshot) => [snapshot.period, snapshot]))
const paleogeographyLayerIds = ['coastlines', 'platePolygons', 'plateBoundaries', 'continentalPolygons', 'continentOceanBoundaries', 'staticPolygons']
const hasPaleogeographySeries = paleogeographyProvenance.schemaVersion >= 3
const publishedMapFramePaths = new Set()

const caoObservationDefinitions = {
  'paleomagnetic-poles': {
    title: 'Palaeomagnetic poles and sample sites',
    titleZh: '古地磁极与平均采样点',
    role: 'observation',
    sourceFile: 'Paleomagnetic_poles.gpml',
  },
  geochemistry: {
    title: 'Global geochemistry observations',
    titleZh: '全球地球化学观测',
    role: 'observation',
    sourceFile: 'point_data/global_geochemistry_SIA-I_and-magnesian-type.gpmlz',
  },
  'metamorphic-gradient-orogen': {
    title: 'Orogenic metamorphic-gradient constraints',
    titleZh: '造山型变质梯度约束',
    role: 'constraint',
    sourceFile: 'point_data/global_metamorphic_gradient_375_775_Orogen.gpml',
  },
  'metamorphic-gradient-rift': {
    title: 'Rift metamorphic-gradient constraints',
    titleZh: '裂谷型变质梯度约束',
    role: 'constraint',
    sourceFile: 'point_data/global_metamorphic_gradient_larger_than_775_rift.gpml',
  },
  'metamorphic-gradient-subduction-zone': {
    title: 'Subduction-zone metamorphic-gradient constraints',
    titleZh: '俯冲带型变质梯度约束',
    role: 'constraint',
    sourceFile: 'point_data/global_metamorphic_gradient_smaller_than_375_SZ.gpml',
  },
}

if (caoObservationManifest.counts?.total !== 44175 || caoObservationManifest.counts?.intersectsSupportedRange !== 41323) {
  throw new Error('CAO2024 observation manifest does not contain the complete pinned point inventory')
}
const caoObservationShards = caoObservationManifest.shards.map((shard) => {
  if (!caoObservationDefinitions[shard.datasetId]) throw new Error(`Unknown CAO2024 observation dataset: ${shard.datasetId}`)
  const sourcePath = resolve(rootDir, 'data/paleogeography/observations', shard.path)
  const canonicalRoot = resolve(rootDir, 'data/paleogeography/observations')
  if (!sourcePath.startsWith(`${canonicalRoot}${sep}`)) throw new Error(`Unsafe CAO2024 observation shard path: ${shard.path}`)
  const bytes = readFileSync(sourcePath)
  if (bytes.byteLength !== shard.bytes || sha256(bytes) !== shard.sha256) {
    throw new Error(`CAO2024 observation shard changed without rebuilding its manifest: ${shard.path}`)
  }
  const published = write(`maps/observations/${shard.path}`, bytes)
  const source = gunzipSync(bytes)
  const payload = JSON.parse(source.toString('utf8'))
  if (payload.datasetId !== shard.datasetId || payload.bucket !== shard.bucket || payload.records?.length !== shard.records) {
    throw new Error(`CAO2024 observation shard identity or record count is invalid: ${shard.path}`)
  }
  return { ...shard, ...published, sourceBytes: source.byteLength, sourceSha256: sha256(source) }
})
const caoObservationDatasets = Object.fromEntries(Object.entries(caoObservationDefinitions).map(([id, definition]) => {
  const counts = caoObservationManifest.datasets[id]
  const datasetShards = caoObservationShards.filter((shard) => shard.datasetId === id)
  if (!counts || datasetShards.reduce((sum, shard) => sum + shard.records, 0) !== counts.total) {
    throw new Error(`${id}: CAO2024 observation shards do not match canonical counts`)
  }
  return [id, {
    id,
    ...definition,
    records: counts.total,
    reconstructableRecords: counts.reconstructed,
    rawOnlyRecords: counts.rawOnlyModelRange + counts.rawOnlyMissingPlateCircuit,
    files: datasetShards.map(({ url, bytes, sha256: digest, sourceBytes, sourceSha256, records, bucket }) => ({ url, bytes, sha256: digest, sourceBytes, sourceSha256, records, bucket })),
  }]
}))

function publishCanonicalMapFrame(layerId, frame) {
  if (!Number.isFinite(frame.ageMa)) throw new Error(`${layerId}: map frame has an invalid ageMa`)
  if (!Number.isInteger(frame.geometryFeatures) || frame.geometryFeatures < 0) throw new Error(`${layerId} ${frame.ageMa} Ma: map frame has an invalid geometryFeatures count`)
  if (!frame.geometryFile?.endsWith('.json.gz')) throw new Error(`${layerId} ${frame.ageMa} Ma: canonical frame must be a .json.gz file`)
  if (!Number.isInteger(frame.geometryBytes) || frame.geometryBytes < 1 || !/^[a-f0-9]{64}$/.test(frame.geometrySha256 ?? '')) {
    throw new Error(`${layerId} ${frame.ageMa} Ma: canonical frame is missing its byte count or SHA-256`)
  }
  const sourcePath = resolve(rootDir, frame.geometryFile)
  const canonicalRoot = resolve(rootDir, 'data/paleogeography')
  if (!sourcePath.startsWith(`${canonicalRoot}${sep}`)) throw new Error(`${layerId} ${frame.ageMa} Ma: canonical frame is outside data/paleogeography`)
  const bytes = readFileSync(sourcePath)
  const actualSha256 = sha256(bytes)
  if (bytes.byteLength !== frame.geometryBytes || actualSha256 !== frame.geometrySha256) {
    throw new Error(`${layerId} ${frame.ageMa} Ma: canonical frame bytes or SHA-256 do not match provenance (${frame.geometryFile})`)
  }
  const publishedPath = `maps/${layerId}/${basename(frame.geometryFile)}`
  if (publishedMapFramePaths.has(publishedPath)) throw new Error(`${layerId}: canonical map frame filename is not unique (${publishedPath})`)
  publishedMapFramePaths.add(publishedPath)
  const published = write(publishedPath, bytes)
  if (published.bytes !== frame.geometryBytes || published.sha256 !== frame.geometrySha256) {
    throw new Error(`${layerId} ${frame.ageMa} Ma: published frame changed while copying`)
  }
  const source = gunzipSync(bytes)
  return {
    ageMa: frame.ageMa,
    url: published.url,
    bytes: published.bytes,
    sha256: published.sha256,
    sourceBytes: source.byteLength,
    sourceSha256: sha256(source),
    featureCount: frame.geometryFeatures,
    encoding: 'gzip',
    mediaType: 'application/json',
  }
}

let mapLayers = null
if (hasPaleogeographySeries) {
  const series = paleogeographyProvenance.series
  if (!series?.layers) throw new Error('Paleogeography provenance schema 3 requires series.layers')
  if (!Number.isFinite(series.ageRangeMa?.youngest) || !Number.isFinite(series.ageRangeMa?.oldest) || series.ageRangeMa.youngest >= series.ageRangeMa.oldest) {
    throw new Error('Paleogeography provenance schema 3 requires a valid series.ageRangeMa')
  }
  if (series.selectionPolicy?.method !== 'nearest' || series.selectionPolicy?.tieBreak !== 'younger' || series.selectionPolicy?.outsideRange !== 'unavailable') {
    throw new Error('Paleogeography provenance schema 3 requires the nearest/younger/unavailable selection policy')
  }
  mapLayers = Object.fromEntries(paleogeographyLayerIds.map((layerId) => {
    const sourceLayer = series.layers[layerId]
    if (!sourceLayer?.role || !Array.isArray(sourceLayer.cadenceBands) || !sourceLayer.frames?.length) {
      throw new Error(`${layerId}: schema 3 paleogeography series is incomplete`)
    }
    const frames = sourceLayer.frames.map((frame) => publishCanonicalMapFrame(layerId, frame))
    for (let index = 1; index < frames.length; index += 1) {
      if (frames[index - 1].ageMa >= frames[index].ageMa) throw new Error(`${layerId}: map frame ages must be unique and sorted from youngest to oldest`)
    }
    if (frames[0].ageMa !== series.ageRangeMa.youngest || frames.at(-1).ageMa !== series.ageRangeMa.oldest) {
      throw new Error(`${layerId}: map frames do not cover the complete supported age range`)
    }
    return [layerId, { role: sourceLayer.role, cadenceBands: sourceLayer.cadenceBands, frames }]
  }))
}

const mapSnapshots = periodMetadata.map((period) => {
  const provenance = paleogeographyByPeriod.get(period.name)
  if (period.mapLayerStatus === 'available' && !provenance) throw new Error(`${period.name}: available map is missing provenance`)
  let layers = null
  if (provenance && mapLayers) {
    layers = Object.fromEntries(paleogeographyLayerIds.map((layerId) => {
      const frame = mapLayers[layerId].frames.find((candidate) => candidate.ageMa === provenance.reconstructionAgeMa)
      if (!frame) throw new Error(`${period.name}: ${layerId} series does not retain the period midpoint ${provenance.reconstructionAgeMa} Ma`)
      return [layerId, frame]
    }))
  } else if (provenance) {
    layers = Object.fromEntries(Object.entries(provenance.layers).map(([layerId, layer]) => [
      layerId,
      writeGzipJson(`maps/${period.name.toLowerCase()}-${layerId}.json.gz`, readJson(layer.geometryFile)),
    ]))
  }
  return {
    period: period.name,
    status: period.mapLayerStatus,
    description: period.description,
    descriptionZh: period.descriptionZh,
    reconstructionAgeMa: provenance?.reconstructionAgeMa ?? null,
    model: provenance?.model ?? null,
    layers,
  }
})

function publishPaleotopographySeries() {
  const { frames, grid, selection, visualization, totals } = paleotopographySource
  if (paleotopographySource.source.license !== 'CC-BY-4.0'
    || paleotopographySource.source.doi !== '10.5281/zenodo.5460860'
    || paleotopographySource.schemaVersion !== 2
    || paleotopographySource.archive.netcdfMemberCount !== 109
    || paleotopographySource.archive.sha256 !== 'ab360184d8260a815ef5ed6b8b4e0abdbf99ef5ee8aa87dfd070af323ceb42da') {
    throw new Error('Complete PaleoDEM source, license or archive boundary changed without review')
  }
  if (grid.width !== 3601 || grid.height !== 1801 || grid.cellCount !== grid.width * grid.height
    || grid.decodedBytesPerFrame !== grid.cellCount * 2
    || grid.encoding !== 'gzip-signed-int16-little-endian-row-major'
    || selection.method !== 'nearest-nominal-age' || selection.tieBreak !== 'younger'
    || selection.temporalInterpolation !== 'none'
    || visualization.renderer !== 'client-worker-canvas-grid-layer'
    || visualization.preGeneratedTiles !== 0) {
    throw new Error('PaleoDEM grid, selection or client-rendering boundary changed without review')
  }
  const canonicalRoot = resolve(rootDir, 'data/paleotopography')
  const expectedAges = Array.from({ length: 109 }, (_, index) => index * 5)
  if (!Array.isArray(frames) || frames.length !== expectedAges.length
    || frames.some((frame, index) => frame.archiveNominalAgeMa !== expectedAges[index])) {
    throw new Error('PaleoDEM manifest must retain exactly one ordered frame at every 5 Ma age from 0 through 540 Ma')
  }
  const nativeFull = paleotopographyDelivery === 'native-full'
  const runtimeFrames = frames.map((frame) => {
    if (frame.width !== grid.width || frame.height !== grid.height || frame.cellCount !== grid.cellCount
      || frame.grid.encoding !== grid.encoding || frame.grid.decodedBytes !== grid.decodedBytesPerFrame
      || frame.displayAgeRangeMa.youngest > frame.archiveNominalAgeMa
      || frame.displayAgeRangeMa.oldest < frame.archiveNominalAgeMa) {
      throw new Error(`PaleoDEM ${frame.archiveNominalAgeMa} Ma frame dimensions or selection window changed without review`)
    }
    if (frame.webPreviewGrid.width !== grid.webPreview.width
      || frame.webPreviewGrid.height !== grid.webPreview.height
      || frame.webPreviewGrid.decodedBytes !== grid.webPreview.decodedBytesPerFrame
      || frame.webPreviewGrid.sourceGridSha256 !== frame.grid.decodedSha256
      || frame.webPreviewGrid.derivation !== 'exact-decimation-every-third-source-row-and-column') {
      throw new Error(`PaleoDEM ${frame.archiveNominalAgeMa} Ma Web preview does not trace exactly to the full grid`)
    }
    const selectedGrid = nativeFull ? frame.grid : frame.webPreviewGrid
    const canonicalPath = resolve(rootDir, selectedGrid.path)
    if (!canonicalPath.startsWith(`${canonicalRoot}${sep}`)) throw new Error('PaleoDEM canonical grid is outside data/paleotopography')
    const canonicalBytes = readFileSync(canonicalPath)
    if (canonicalBytes.byteLength !== selectedGrid.bytes || sha256(canonicalBytes) !== selectedGrid.sha256) {
      throw new Error(`PaleoDEM ${frame.archiveNominalAgeMa} Ma ${paleotopographyDelivery} grid bytes differ from the pinned source ledger`)
    }
    const decoded = gunzipSync(canonicalBytes)
    if (decoded.byteLength !== selectedGrid.decodedBytes || sha256(decoded) !== selectedGrid.decodedSha256) {
      throw new Error(`PaleoDEM ${frame.archiveNominalAgeMa} Ma ${paleotopographyDelivery} decoded grid differs from the pinned source ledger`)
    }
    const runtimeGrid = write(`maps/paleotopography/${paleotopographySource.id}/grids/ma-${String(frame.archiveNominalAgeMa).padStart(4, '0')}.${nativeFull ? 'full-01deg' : 'preview-03deg'}.i16.gz`, canonicalBytes)
    const { grid: fullGrid, webPreviewGrid, ...metadata } = frame
    return {
      ...metadata,
      sourceFullGrid: {
        bytes: fullGrid.bytes,
        sha256: fullGrid.sha256,
        decodedBytes: fullGrid.decodedBytes,
        decodedSha256: fullGrid.decodedSha256,
        width: frame.width,
        height: frame.height,
        cellCount: frame.cellCount,
        resolutionDegrees: 0.1,
      },
      grid: {
        ...runtimeGrid,
        sourceBytes: selectedGrid.decodedBytes,
        sourceSha256: selectedGrid.decodedSha256,
        width: nativeFull ? frame.width : webPreviewGrid.width,
        height: nativeFull ? frame.height : webPreviewGrid.height,
        cellCount: nativeFull ? frame.cellCount : webPreviewGrid.cellCount,
        resolutionDegrees: nativeFull ? 0.1 : webPreviewGrid.resolutionDegrees,
        derivation: nativeFull ? 'lossless-full-source-grid' : webPreviewGrid.derivation,
        gridEncoding: selectedGrid.encoding,
        mediaType: 'application/octet-stream',
      },
    }
  })
  const expectedRuntimeBytes = nativeFull ? totals.independentGridGzipBytes : totals.webPreviewGridGzipBytes
  if (runtimeFrames.reduce((sum, frame) => sum + frame.grid.bytes, 0) !== expectedRuntimeBytes) {
    throw new Error(`PaleoDEM ${paleotopographyDelivery} runtime bytes do not match the complete-series total`)
  }
  return {
    id: paleotopographySource.id,
    source: paleotopographySource.source,
    archive: paleotopographySource.archive,
    grid,
    selection,
    delivery: {
      profile: paleotopographyDelivery,
      resolutionDegrees: nativeFull ? 0.1 : grid.webPreview.resolutionDegrees,
      gridBytes: expectedRuntimeBytes,
      fullResolutionAvailableInNativeApps: true,
    },
    visualization: {
      ...visualization,
      maximumNativeZoom: nativeFull ? 4 : 2,
      maximumZoomGroundSampling: nativeFull
        ? 'approximately 0.088 degrees per display pixel at the equator'
        : 'approximately 0.352 degrees per display pixel at the equator; source preview samples are spaced 0.3 degrees',
    },
    totals,
    scientificLimitations: paleotopographySource.scientificLimitations,
    frames: runtimeFrames,
  }
}

const paleotopography = publishPaleotopographySeries()
const mapsManifestFile = writeJson('maps/manifest.json', {
  schemaVersion: hasPaleogeographySeries ? 8 : 5,
  version: sourceManifest.datasetVersion,
  source: {
    title: paleogeographyProvenance.dataset.title,
    version: paleogeographyProvenance.dataset.version,
    doi: paleogeographyProvenance.dataset.doi,
    url: paleogeographyProvenance.dataset.url,
    license: paleogeographyProvenance.dataset.license,
    attribution: paleogeographyProvenance.attribution,
    retrievedAt: paleogeographyProvenance.retrievedAt,
  },
  scientificLimitations: paleogeographyProvenance.scientificLimitations,
  ...(hasPaleogeographySeries ? {
    ageRangeMa: paleogeographyProvenance.series.ageRangeMa,
    selectionPolicy: paleogeographyProvenance.series.selectionPolicy,
    layers: mapLayers,
    observations: {
      ageFilter: 'inclusive-source-range',
      coordinatePolicy: 'reconstructed-at-record-age-no-raw-fallback',
      totalRecords: caoObservationManifest.counts.total,
      reconstructedRecords: caoObservationManifest.counts.reconstructed,
      rawOnlyRecords: caoObservationManifest.counts.rawOnlyModelRange + caoObservationManifest.counts.rawOnlyMissingPlateCircuit,
      datasets: caoObservationDatasets,
      sourceArchive: caoObservationManifest.sourceArchive,
      scientificBoundary: caoObservationManifest.scientificBoundary,
    },
    paleotopography,
  } : {}),
  snapshots: mapSnapshots,
}, true)

let catalogueRuntimeManifest
let catalogueManifestFile
if (pagesPreview) {
  catalogueRuntimeManifest = {
    schemaVersion: 1,
    edition: 'github-pages-preview',
    releaseAlias: 'PAGES-PREVIEW',
    releaseDate: sourceManifest.generatedAt,
    relationshipToAtlas: 'The nomenclatural registry is intentionally omitted from the GitHub Pages preview edition.',
    provenance: { edition: 'github-pages-preview', source: 'omitted-by-preview-scope' },
    sourceChecklists: { files: [] },
    counts: { acceptedSpecies: 0, resolvingNameUsages: {} },
    search: { files: [], routes: {}, totalCompressedBytes: 0 },
    acceptedTargets: { records: 0, uniqueRefRecords: 0, files: [], routes: {}, totalCompressedBytes: 0 },
    hierarchy: {
      counts: { nodes: 0, higherTaxonNodes: 0, acceptedSpeciesNodes: 0, acceptedSpeciesEdges: 0, directChildEdges: 0 },
      nodes: { files: [], routes: {} },
      children: { files: [], routes: {} },
    },
    ownership: { schemaVersion: 1, projectionType: 'omitted-by-preview-scope', packageCount: 0, acceptedSpecies: 0, assignedSpecies: 0, unmatchedSpecies: 0, bytes: 0 },
    resourcePacks: { schemaVersion: 1, packageType: 'omitted-by-preview-scope', packageCount: 0, acceptedSpeciesCount: 0, manifests: {} },
  }
  catalogueManifestFile = writeJson('catalogue/manifest.json', catalogueRuntimeManifest, true)
} else {
const catalogueSourceRoot = join(rootDir, 'data/catalogue-of-life/releases/2026-08-20/registry')
function copyCatalogueFile(sourceFile) {
  const written = write(`catalogue/${sourceFile.path}`, readFileSync(join(catalogueSourceRoot, ...sourceFile.path.split('/'))))
  if (written.sha256 !== sourceFile.sha256 || written.bytes !== sourceFile.bytes) throw new Error(`Catalogue source shard changed without rebuilding its manifest: ${sourceFile.path}`)
  return { ...sourceFile, url: written.url }
}
const catalogueSearchFiles = catalogueSourceManifest.search.files.map(copyCatalogueFile)
const catalogueTargetFiles = catalogueSourceManifest.acceptedTargets.files.map(copyCatalogueFile)
const catalogueHierarchyNodeFiles = catalogueSourceManifest.hierarchy.nodes.files.map(copyCatalogueFile)
const catalogueHierarchyChildFiles = catalogueSourceManifest.hierarchy.children.files.map(copyCatalogueFile)
const catalogueFileByPath = new Map([
  ...catalogueSearchFiles,
  ...catalogueTargetFiles,
  ...catalogueHierarchyNodeFiles,
  ...catalogueHierarchyChildFiles,
].map((file) => [file.path, file]))
function runtimeCatalogueRoutes(routes) {
  return Object.fromEntries(Object.entries(routes).map(([prefix, paths]) => [
    prefix,
    paths.map((path) => catalogueFileByPath.get(path)?.url ?? (() => { throw new Error(`Catalogue route references missing shard: ${path}`) })()),
  ]))
}
const catalogueSourcesFile = write('catalogue/sources.json', readFileSync(join(catalogueSourceRoot, catalogueSourceManifest.sourceChecklists.path)))
if (catalogueSourcesFile.sha256 !== catalogueSourceManifest.sourceChecklists.sha256) throw new Error('Catalogue source-checklist ledger changed without rebuilding its manifest')
if (catalogueSpeciesOwnership.source.releaseAlias !== catalogueSourceManifest.releaseAlias
  || catalogueSpeciesOwnership.source.acceptedSpecies !== catalogueSourceManifest.counts.acceptedSpecies
  || catalogueSpeciesOwnership.proof.assignedSpecies !== catalogueSourceManifest.counts.acceptedSpecies
  || catalogueSpeciesOwnership.proof.unmatchedSpecies !== 0) {
  throw new Error('Catalogue package ownership does not cover the pinned accepted-species baseline')
}
const catalogueOwnershipFile = writeGzipJson('catalogue/ownership.json.gz', catalogueSpeciesOwnership)
const catalogueOwnershipDescriptor = {
  ...catalogueOwnershipFile,
  schemaVersion: catalogueSpeciesOwnership.schemaVersion,
  projectionType: catalogueSpeciesOwnership.projectionType,
  packageCount: catalogueSpeciesOwnership.entries.length,
  staticPackageCount: catalogueSpeciesOwnership.entries.filter((entry) => entry.kind === 'static-package').length,
  nomenclaturalResourcePackCount: catalogueSpeciesOwnership.entries.filter((entry) => entry.kind === 'nomenclatural-resource-pack').length,
  catalogueOnlyPackageCount: catalogueSpeciesOwnership.entries.filter((entry) => entry.kind === 'catalogue-only').length,
  acceptedSpecies: catalogueSpeciesOwnership.source.acceptedSpecies,
  assignedSpecies: catalogueSpeciesOwnership.proof.assignedSpecies,
  unmatchedSpecies: catalogueSpeciesOwnership.proof.unmatchedSpecies,
}
const catalogueResourcePacksSourceRoot = join(rootDir, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
if (catalogueResourcePacksSourceManifest.source.releaseAlias !== catalogueSourceManifest.releaseAlias
  || catalogueResourcePacksSourceManifest.source.sharedSourcesSha256 !== catalogueSourceManifest.sourceChecklists.sha256
  || catalogueResourcePacksSourceManifest.packageCount !== 7) {
  throw new Error('Catalogue nomenclatural resource packs do not match the pinned registry release')
}
const catalogueResourcePackManifests = {}
let catalogueResourcePackAcceptedSpecies = 0
for (const sourcePackDescriptor of catalogueResourcePacksSourceManifest.packs) {
  const sourceManifestPath = join(catalogueResourcePacksSourceRoot, ...sourcePackDescriptor.manifestPath.split('/'))
  const sourceManifestBytes = readFileSync(sourceManifestPath)
  if (sourceManifestBytes.byteLength !== sourcePackDescriptor.manifestBytes || sha256(sourceManifestBytes) !== sourcePackDescriptor.manifestSha256) {
    throw new Error(`${sourcePackDescriptor.packageId}: catalogue resource-pack manifest changed without rebuilding its collection manifest`)
  }
  const sourcePack = JSON.parse(sourceManifestBytes.toString('utf8'))
  const ownershipEntry = catalogueSpeciesOwnership.entries.find((entry) => entry.id === sourcePack.packageId && entry.kind === 'nomenclatural-resource-pack')
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== sourcePack.acceptedSpeciesCount
    || sourcePack.acceptedSpeciesCount !== sourcePackDescriptor.acceptedSpeciesCount
    || sourcePack.source.sharedSourcesSha256 !== catalogueSourceManifest.sourceChecklists.sha256) {
    throw new Error(`${sourcePack.packageId}: catalogue resource pack does not match ownership or shared sources`)
  }
  const runtimeFiles = sourcePack.files.map((sourceFile) => {
    const sourcePath = join(catalogueResourcePacksSourceRoot, ...sourceFile.path.split('/'))
    const written = write(`catalogue/resource-packs/${sourceFile.path}`, readFileSync(sourcePath))
    if (written.sha256 !== sourceFile.sha256 || written.bytes !== sourceFile.bytes) {
      throw new Error(`${sourcePack.packageId}: catalogue resource-pack shard changed without rebuilding its manifest: ${sourceFile.path}`)
    }
    return { ...sourceFile, url: written.url }
  })
  if (runtimeFiles.reduce((sum, file) => sum + file.records, 0) !== sourcePack.acceptedSpeciesCount) {
    throw new Error(`${sourcePack.packageId}: catalogue resource-pack shard counts do not match its manifest`)
  }
  const runtimeExtensions = (sourcePack.extensions ?? []).map((extension) => {
    const sourceExtensionFiles = [...extension.files, ...(extension.upstreamOnlyFiles ?? [])]
    const canonicalExtensionFiles = sourceExtensionFiles.map((sourceFile) => {
      const sourcePath = join(catalogueResourcePacksSourceRoot, ...sourceFile.path.split('/'))
      const sourceBytes = readFileSync(sourcePath)
      if (sha256(sourceBytes) !== sourceFile.sha256 || sourceBytes.byteLength !== sourceFile.bytes) {
        throw new Error(`${sourcePack.packageId}/${extension.id}: extension shard changed without rebuilding its manifest: ${sourceFile.path}`)
      }
      return { sourceFile, sourceBytes }
    })
    const expectedExtensionRecords = extension.counts.resolved ?? extension.counts.officialSpecies ?? extension.counts.records ?? extension.counts.accepted
    if (!Number.isInteger(expectedExtensionRecords)
      || canonicalExtensionFiles.reduce((sum, entry) => sum + entry.sourceFile.records, 0) !== expectedExtensionRecords) {
      throw new Error(`${sourcePack.packageId}/${extension.id}: extension shard counts do not match its manifest`)
    }
    const profileContract = extension.deliveryProfiles?.[deliveryProfile]
    if (extension.deliveryProfiles && (!profileContract
      || profileContract.records !== (deliveryProfile === 'native-full' ? expectedExtensionRecords : 0)
      || profileContract.files.length !== (deliveryProfile === 'native-full' ? canonicalExtensionFiles.length : 0))) {
      throw new Error(`${sourcePack.packageId}/${extension.id}: delivery profile does not match the canonical extension inventory`)
    }
    const publishRows = !extension.deliveryProfiles || deliveryProfile === 'native-full'
    const publish = (sourceFiles) => publishRows ? sourceFiles.map(({ sourceFile, sourceBytes }) => ({
      ...sourceFile,
      ...write(`catalogue/resource-packs/${sourceFile.path}`, sourceBytes),
    })) : []
    const extensionFiles = publish(canonicalExtensionFiles.slice(0, extension.files.length))
    const upstreamOnlyFiles = publish(canonicalExtensionFiles.slice(extension.files.length))
    return {
      ...extension,
      canonicalFileInventory: extension.canonicalFileInventory ?? canonicalExtensionFiles.map(({ sourceFile }) => sourceFile),
      files: extensionFiles,
      upstreamOnlyFiles,
      delivery: {
        profile: deliveryProfile,
        completeRows: publishRows,
        publishedFileCount: extensionFiles.length + upstreamOnlyFiles.length,
        canonicalFileCount: canonicalExtensionFiles.length,
      },
    }
  })
  const runtimeExtensionFileCount = runtimeExtensions.reduce((sum, extension) => sum + extension.files.length + (extension.upstreamOnlyFiles?.length ?? 0), 0)
  const canonicalExtensionFileCount = runtimeExtensions.reduce((sum, extension) => sum + extension.delivery.canonicalFileCount, 0)
  if (runtimeExtensions.length !== (sourcePackDescriptor.extensionCount ?? 0)
    || canonicalExtensionFileCount !== (sourcePackDescriptor.extensionFileCount ?? 0)) {
    throw new Error(`${sourcePack.packageId}: resource-pack extensions do not match the collection manifest`)
  }
  const runtimePackManifest = {
    ...sourcePack,
    version: sourceManifest.datasetVersion,
    files: runtimeFiles,
    ...(runtimeExtensions.length ? { extensions: runtimeExtensions } : {}),
    ...(includeDownloadArchives ? { download: `${releasePrefix}/downloads/${sourcePack.packageId}-${sourceManifest.datasetVersion}.zip` } : {}),
  }
  const runtimeManifestFile = writeJson(`catalogue/resource-packs/${sourcePack.packageId}/manifest.json`, runtimePackManifest, true)
  catalogueResourcePackManifests[sourcePack.packageId] = {
    ...runtimeManifestFile,
    acceptedSpeciesCount: sourcePack.acceptedSpeciesCount,
    fileCount: runtimeFiles.length,
    ...(runtimeExtensions.length ? {
      extensionCount: runtimeExtensions.length,
      extensionFileCount: runtimeExtensionFileCount,
      canonicalExtensionFileCount,
    } : {}),
  }
  catalogueResourcePackAcceptedSpecies += sourcePack.acceptedSpeciesCount

  if (includeDownloadArchives) {
    const zipEntries = { 'manifest.json': strToU8(`${JSON.stringify(runtimePackManifest, null, 2)}\n`) }
    for (const file of runtimeFiles) {
      zipEntries[basename(file.url)] = new Uint8Array(readFileSync(join(outputRoot, file.url)))
    }
    for (const file of runtimeExtensions.flatMap((extension) => [...extension.files, ...(extension.upstreamOnlyFiles ?? [])])) {
      zipEntries[basename(file.url)] = new Uint8Array(readFileSync(join(outputRoot, file.url)))
    }
    write(`downloads/${sourcePack.packageId}-${sourceManifest.datasetVersion}.zip`, deterministicZip(zipEntries, { level: 0 }))
  }
}
if (catalogueResourcePackAcceptedSpecies !== catalogueResourcePacksSourceManifest.acceptedSpeciesCount
  || catalogueResourcePackAcceptedSpecies !== catalogueSpeciesOwnership.entries
    .filter((entry) => entry.kind === 'nomenclatural-resource-pack')
    .reduce((sum, entry) => sum + entry.acceptedSpeciesCount, 0)) {
  throw new Error('Catalogue nomenclatural resource-pack total does not match ownership')
}
const sanbiSource = readJson('data/sources/sanbi-descriptions-import-ledger.json')
const sanbiBytes = readFileSync(join(rootDir, sanbiSource.output))
if (sanbiBytes.length !== sanbiSource.outputBytes || sha256(sanbiBytes) !== sanbiSource.outputSha256) throw new Error('SANBI source bytes differ from the import ledger')
const sanbiRecords = gunzipSync(sanbiBytes).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
const sanbiRoutes = {}
const sanbiFiles = partitionSanbiDescriptions(sanbiRecords).map(([prefix, records]) => {
  const path = `catalogue/descriptions/sanbi-${prefix}.json.gz`
  const file = { ...writeGzipJson(path, records), prefix, path, records: records.length }
  sanbiRoutes[prefix] = [file.url]
  return file
})
const plaziSource = readJson('data/sources/plazi-descriptions-import-ledger.json')
const plaziBytes = readFileSync(join(rootDir, plaziSource.output))
if (plaziBytes.length !== plaziSource.outputBytes || sha256(plaziBytes) !== plaziSource.outputSha256) throw new Error('Plazi source bytes differ from the import ledger')
const plaziRecords = gunzipSync(plaziBytes).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
const plaziRoutes = {}
const plaziFiles = partitionSanbiDescriptions(plaziRecords).map(([prefix, records]) => {
  const path = `catalogue/descriptions/plazi-${prefix}.json.gz`
  const file = { ...writeGzipJson(path, records), prefix, path, records: records.length }
  plaziRoutes[prefix] = [file.url]
  return file
})
catalogueRuntimeManifest = {
  ...catalogueSourceManifest,
  plaziDescriptions: { source: plaziSource, routes: plaziRoutes, files: plaziFiles },
  sanbiDescriptions: { source: sanbiSource, routes: sanbiRoutes, files: sanbiFiles },
  provenance: catalogueProvenance,
  sourceChecklists: { ...catalogueSourceManifest.sourceChecklists, url: catalogueSourcesFile.url },
  ownership: catalogueOwnershipDescriptor,
  resourcePacks: {
    schemaVersion: catalogueResourcePacksSourceManifest.schemaVersion,
    packageType: 'static-nomenclatural-resource-pack',
    packageCount: catalogueResourcePacksSourceManifest.packageCount,
    acceptedSpeciesCount: catalogueResourcePackAcceptedSpecies,
    manifests: catalogueResourcePackManifests,
    sharedSources: { ...catalogueSourceManifest.sourceChecklists, url: catalogueSourcesFile.url },
    ...(includeDownloadArchives ? { downloadTemplate: `${releasePrefix}/downloads/{packageId}-${sourceManifest.datasetVersion}.zip` } : {}),
  },
  search: {
    ...catalogueSourceManifest.search,
    routes: runtimeCatalogueRoutes(catalogueSourceManifest.search.routes),
    files: catalogueSearchFiles,
  },
  acceptedTargets: {
    ...catalogueSourceManifest.acceptedTargets,
    routes: runtimeCatalogueRoutes(catalogueSourceManifest.acceptedTargets.routes),
    files: catalogueTargetFiles,
  },
  hierarchy: {
    ...catalogueSourceManifest.hierarchy,
    nodes: {
      ...catalogueSourceManifest.hierarchy.nodes,
      routes: runtimeCatalogueRoutes(catalogueSourceManifest.hierarchy.nodes.routes),
      files: catalogueHierarchyNodeFiles,
    },
    children: {
      ...catalogueSourceManifest.hierarchy.children,
      routes: runtimeCatalogueRoutes(catalogueSourceManifest.hierarchy.children.routes),
      files: catalogueHierarchyChildFiles,
    },
  },
}
catalogueManifestFile = writeJson('catalogue/manifest.json', catalogueRuntimeManifest, true)
}

const coreCompressedBytes = Object.values(core).reduce((sum, file) => sum + file.bytes, 0)
const current = {
  schemaVersion: 5,
  datasetVersion: sourceManifest.datasetVersion,
  appVersion: sourceManifest.appVersion,
  publication: 'GitHub Pages static data platform',
  edition: pagesPreview ? 'github-pages-preview' : 'full-web',
  ...(pagesPreview ? {
    previewScope: {
      packageIds: [...previewPackageIds],
      taxonIds: previewDefinition.taxonIds,
      storyIds: previewDefinition.storyIds,
      eventIds: previewDefinition.eventIds,
      catalogue: 'omitted',
      paleotopography: 'web-preview-0.3-degree-source-grids',
    },
  } : {}),
  deliveryProfile,
  scopeStatement: sourceManifest.scopeStatement,
  includedMajorGroups: sourceManifest.includedMajorGroups,
  excludedMajorGroups: sourceManifest.excludedMajorGroups,
  wholeLifeCoverageClaim: sourceManifest.wholeLifeCoverageClaim,
  releaseBase: `${releasePrefix}/`,
  core,
  packages: {
    count: packageRuntimeManifests.length,
    registry: core.packages,
    manifestTemplate: `${releasePrefix}/packages/{packageId}/manifest.json`,
    manifests: Object.fromEntries(packageRuntimeManifests.map((manifest) => [manifest.packageId, manifest.manifest])),
  },
  occurrences: {
    manifest: occurrenceManifestFile,
    totalRecords: occurrenceTotal,
    unresolvedPackageAssignmentCount,
  },
  maps: {
    manifest: mapsManifestFile,
    availableSnapshots: mapSnapshots.filter((snapshot) => snapshot.status === 'available').length,
    frameCount: mapLayers ? Object.values(mapLayers).reduce((sum, layer) => sum + layer.frames.length, 0) : null,
    geometryFrameCount: mapLayers ? Object.values(mapLayers).reduce((sum, layer) => sum + layer.frames.length, 0) : null,
    observationDatasetCount: Object.keys(caoObservationDatasets).length,
    observationRecordCount: caoObservationManifest.counts.total,
    paleotopographyFrameCount: paleotopography.frames.length,
    paleotopographyGridCount: paleotopography.frames.length,
    paleotopographyGridBytes: paleotopography.delivery.gridBytes,
    paleotopographyDeliveryProfile: paleotopography.delivery.profile,
    paleotopographyTileCount: 0,
  },
  catalogue: {
    manifest: catalogueManifestFile,
    releaseAlias: catalogueRuntimeManifest.releaseAlias,
    releaseDate: catalogueRuntimeManifest.releaseDate,
    acceptedSpecies: catalogueRuntimeManifest.counts.acceptedSpecies,
    resolvingNameUsages: Object.values(catalogueRuntimeManifest.counts.resolvingNameUsages).reduce((sum, count) => sum + count, 0),
    acceptedTargetRecords: catalogueRuntimeManifest.acceptedTargets.records,
    hierarchyNodes: catalogueRuntimeManifest.hierarchy.counts.nodes,
    higherTaxonNodes: catalogueRuntimeManifest.hierarchy.counts.higherTaxonNodes,
    hierarchyChildEdges: catalogueRuntimeManifest.hierarchy.counts.directChildEdges,
    ownershipPackages: catalogueRuntimeManifest.ownership.packageCount,
    assignedAcceptedSpecies: catalogueRuntimeManifest.ownership.assignedSpecies,
    unmatchedAcceptedSpecies: catalogueRuntimeManifest.ownership.unmatchedSpecies,
    nomenclaturalResourcePacks: catalogueRuntimeManifest.resourcePacks.packageCount,
    nomenclaturalResourcePackSpecies: catalogueRuntimeManifest.resourcePacks.acceptedSpeciesCount,
    relationshipToAtlas: catalogueRuntimeManifest.relationshipToAtlas,
  },
  downloads: includeDownloadArchives
    ? { available: true, template: `${releasePrefix}/downloads/{packageId}-${sourceManifest.datasetVersion}.zip` }
    : { available: false },
  budgets: {
    coreCompressedBytes,
    coreLimitBytes: 5 * 1024 * 1024,
    shardLimitBytes: 8 * 1024 * 1024,
    catalogueCompressedBytes: catalogueRuntimeManifest.search.totalCompressedBytes
      + catalogueRuntimeManifest.acceptedTargets.totalCompressedBytes
      + catalogueRuntimeManifest.hierarchy.nodes.totalCompressedBytes
      + catalogueRuntimeManifest.hierarchy.children.totalCompressedBytes
      + catalogueRuntimeManifest.ownership.bytes
      + (catalogueRuntimeManifest.sanbiDescriptions?.files.reduce((sum, file) => sum + file.bytes, 0) ?? 0)
      + (catalogueRuntimeManifest.plaziDescriptions?.files.reduce((sum, file) => sum + file.bytes, 0) ?? 0),
    pagesLimitBytes: 650 * 1024 * 1024,
  },
  evidenceBoundary: {
    entityRegistry: `${entities.length}/${entities.length}`,
    chineseNamesPresent: `${entities.filter((entity) => entity.names.zh).length}/${entities.length}`,
    packageOwnership: `${entities.filter((entity) => entity.packageId).length}/${entities.length}`,
    acceptedSpeciesPackageOwnership: `${catalogueRuntimeManifest.ownership.assignedSpecies}/${catalogueRuntimeManifest.ownership.acceptedSpecies}`,
    scientificMaturitySummary: registry.packages
      .reduce((summary, entry) => {
        summary[entry.scientificMaturity] = (summary[entry.scientificMaturity] ?? 0) + 1
        return summary
      }, {}),
    maintainerReview: 'reviewed and reviewed-with-caveats identify a maintainer decision against an exact content digest; stale is computed and never stored manually.',
    externalExpertReview: 'No package currently claims external domain-expert peer review.',
    wholeLifeCoverageClaim: false,
  },
}
writeBootstrapJson('current.json', current, true)

const releaseFiles = [...files.values()].map((file) => ({ url: file.url, bytes: file.bytes, sha256: file.sha256 })).sort((left, right) => left.url.localeCompare(right.url))
const releaseFilesIndex = writeJson('release-files.json', {
  schemaVersion: 1,
  datasetVersion: sourceManifest.datasetVersion,
  files: releaseFiles,
}, true)
const retentionByteLimit = Math.max(previousReleaseHistory.retentionByteLimit ?? 0, 650 * 1024 * 1024)
const currentReleaseBytes = releaseFiles.reduce((sum, file) => sum + file.bytes, 0) + releaseFilesIndex.bytes
const currentRelease = {
  datasetVersion: sourceManifest.datasetVersion,
  releaseBase: `${releasePrefix}/`,
  filesIndex: releaseFilesIndex.url,
  generatedAt: sourceManifest.generatedAt,
  bytes: currentReleaseBytes,
}
const retainedReleases = [currentRelease]
const retainedBytes = currentReleaseBytes
writeBootstrapJson('releases.json', { schemaVersion: 1, retentionLimit: 1, retentionByteLimit, retainedBytes, releases: retainedReleases }, true)
const retainedVersions = new Set(retainedReleases.map((entry) => entry.datasetVersion))
const releasesDirectory = join(outputRoot, 'releases')
for (const name of readdirSync(releasesDirectory)) {
  if (retainedVersions.has(name)) continue
  const staleReleaseRoot = resolve(releasesDirectory, name)
  if (!staleReleaseRoot.startsWith(`${releasesDirectory}${sep}`)) throw new Error(`Unsafe stale release path: ${staleReleaseRoot}`)
  rmSync(staleReleaseRoot, { recursive: true, force: true })
}

const duplicateGroups = new Map()
for (const file of files.values()) {
  if (!duplicateGroups.has(file.sha256)) duplicateGroups.set(file.sha256, [])
  duplicateGroups.get(file.sha256).push(file.url)
}
const duplicatedPayloads = [...duplicateGroups.values()].filter((group) => group.length > 1)
if (duplicatedPayloads.length) {
  throw new Error(`Runtime contains duplicate byte-identical files: ${JSON.stringify(duplicatedPayloads.slice(0, 5))}`)
}

const elapsedMs = Date.now() - startedAt
console.log(`Built ${relative(rootDir, outputRoot).replaceAll('\\', '/')} with ${files.size} files, ${occurrenceTotal.toLocaleString()} occurrences and ${packageRuntimeManifests.length} packages in ${(elapsedMs / 1000).toFixed(2)}s.`)
