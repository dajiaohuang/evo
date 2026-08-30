import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import { gunzipSync, gzipSync } from 'node:zlib'
import { strToU8, zipSync } from 'fflate'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { evaluatePackageReview } from './check-review-freshness.mjs'

const args = process.argv.slice(2)
const outputIndex = args.indexOf('--out')
const requestedOutput = outputIndex >= 0 ? args[outputIndex + 1] : 'dist/data'
if (!requestedOutput) throw new Error('--out requires a path')
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
const publishedStories = stories.filter((story) => story.evidenceStatus === 'available-with-limitations')
const places = readJson('data/places.json')
const media = readJson('data/media.json')
const calibrations = readJson('data/packages/mammalia/perissodactyla/phylogeny/calibrations.json')
const perissodactylPhylogeny = readJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json')
const periodMetadata = readJson('data/period-map-metadata.json')
const paleogeographyProvenance = readJson('data/paleogeography/provenance.json')
const occurrenceSource = readJson('data/sources/pbdb-occurrence-bundle.json')
const treeEvidence = readJson('data/tree/evidence.json')
const canonicalRanges = readJson('data/ranges/range-evidence.json')
const linkageCoverage = readJson('data/indexes/entity-linkage-coverage.json')
const catalogueProvenance = readJson('data/catalogue-of-life/releases/2026-08-20/provenance.json')
const catalogueSourceManifest = readJson('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')
const catalogueSpeciesOwnership = readJson('data/registry/package-species-coverage.json')
const perissodactylaOccurrenceSnapshot = readJson('data/sources/perissodactyla-occurrence-snapshot-v2.json')
const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
const packageById = new Map(registry.packages.map((entry) => [entry.id, entry]))
const entityById = new Map(entities.map((entry) => [entry.id, entry]))
const packageForPbdbTaxon = new Map(entities.flatMap((entry) => entry.externalIds.pbdb ? [[entry.externalIds.pbdb, entry.packageId]] : []))
const files = new Map()

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

function writeJson(relativePath, value, pretty = false) {
  return write(relativePath, jsonBytes(value, pretty))
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
  const compressed = gzipSync(source, { level: 9, mtime: 0 })
  return { ...write(relativePath, compressed), sourceBytes: source.byteLength, sourceSha256: sha256(source), encoding: 'gzip', mediaType: 'application/json' }
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
  occurrenceTotal += records.length
  for (const record of records) {
    const packageId = record.packageId ?? packageForPbdbTaxon.get(record.tid) ?? 'atlas-core'
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
  const packageEntities = entities.filter((entity) => entity.packageId === packageId)
  const packageProfiles = profiles.filter((profile) => entityById.get(profile.treeNodeId)?.packageId === packageId)
  const packageClaims = claims.filter((claim) => ownerForClaim(claim) === packageId)
  const packageEvents = events.filter((event) => packageClaims.some((claim) => claim.subjectId === `event:${event.id}`))
  const packageStories = publishedStories.filter((story) => ownerForStory(story) === packageId)
  const packageMedia = media.filter((asset) => entityById.get(asset.taxonId)?.packageId === packageId)
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
  if (packageMedia.length) payloadFiles.media = writeGzipJson(`packages/${packageId}/media.json.gz`, packageMedia)
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
  payloadFiles.search = writeGzipJson(`package-search-index/${packageId}.json.gz`, [
    ...packageEntities.map((entity) => ({ id: entity.id, kind: entity.entityKind, title: entity.names.scientific, titleEn: entity.names.en, titleZh: entity.names.zh, route: `#/explore?taxon=${encodeURIComponent(entity.id)}&view=tree`, terms: [entity.names.scientific, entity.names.en, entity.names.zh, ...entity.synonyms, entity.definition.en, entity.definition.zh] })),
    ...packageProfiles.map((profile) => ({ id: profile.id, kind: 'profile', packageId, title: profile.scientificName, titleEn: profile.commonName, titleZh: profile.commonNameZh, route: `#/taxa?id=${encodeURIComponent(profile.id)}`, terms: [profile.overview, profile.evidenceSummary, ...profile.traits] })),
    ...packageClaims.map((claim) => ({ id: claim.id, kind: 'claim', title: claim.statement, route: '#/data', terms: [claim.statement, claim.confidenceRationale, claim.claimType] })),
    ...packageReferences.map((reference) => ({ id: reference.id, kind: 'reference', title: reference.title, route: '#/data', terms: [reference.title, reference.authors, reference.doi, reference.url].filter(Boolean) })),
  ])
  if (packageId === 'perissodactyla') {
    payloadFiles.phylogeny = writeGzipJson(`packages/${packageId}/phylogeny.json.gz`, perissodactylPhylogeny)
    payloadFiles.calibrations = writeGzipJson(`packages/${packageId}/calibrations.json.gz`, calibrations)
    payloadFiles.occurrenceSnapshot = writeGzipJson(`packages/${packageId}/occurrence-snapshot-v2.json.gz`, perissodactylaOccurrenceSnapshot)
  }
  const occurrenceShards = occurrenceManifest.packages[packageId] ?? []
  const knowledgeBytes = Object.values(payloadFiles).reduce((sum, file) => sum + file.bytes, 0)
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
      largestShardBytes: Math.max(0, ...occurrenceShards.map((file) => file.bytes)),
      initialLoadImpactBytes: 0,
      packageLoadTime: 'client-measured',
      offlineCacheSizeBytes: knowledgeBytes + occurrenceBytes,
    },
    files: payloadFiles,
    occurrences: occurrenceShards,
  }
  const manifestFile = writeJson(`packages/${packageId}/manifest.json`, manifest, true)
  packageRuntimeManifests.push({ ...manifest, manifest: manifestFile })

  const zipEntries = {
    'manifest.json': strToU8(`${JSON.stringify(manifest, null, 2)}\n`),
  }
  for (const file of [...Object.values(payloadFiles), ...occurrenceShards]) {
    zipEntries[file.url] = new Uint8Array(readFileSync(join(outputRoot, file.url)))
  }
  const archive = zipSync(zipEntries, { level: 0 })
  write(`downloads/${packageId}-${sourceManifest.datasetVersion}.zip`, archive)
}

const occurrenceManifestFile = writeJson('occurrences/manifest.json', occurrenceManifest, true)
const paleogeographyByPeriod = new Map(paleogeographyProvenance.snapshots.map((snapshot) => [snapshot.period, snapshot]))
const paleogeographyLayerIds = ['coastlines', 'platePolygons', 'plateBoundaries', 'continentalPolygons', 'continentOceanBoundaries', 'staticPolygons']
const hasPaleogeographySeries = paleogeographyProvenance.schemaVersion >= 3
const publishedMapFramePaths = new Set()

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
const mapsManifestFile = writeJson('maps/manifest.json', {
  schemaVersion: hasPaleogeographySeries ? 6 : 5,
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
  } : {}),
  snapshots: mapSnapshots,
}, true)

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
  catalogueOnlyPackageCount: catalogueSpeciesOwnership.entries.filter((entry) => entry.kind === 'catalogue-only').length,
  acceptedSpecies: catalogueSpeciesOwnership.source.acceptedSpecies,
  assignedSpecies: catalogueSpeciesOwnership.proof.assignedSpecies,
  unmatchedSpecies: catalogueSpeciesOwnership.proof.unmatchedSpecies,
}
const catalogueRuntimeManifest = {
  ...catalogueSourceManifest,
  provenance: catalogueProvenance,
  sourceChecklists: { ...catalogueSourceManifest.sourceChecklists, url: catalogueSourcesFile.url },
  ownership: catalogueOwnershipDescriptor,
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
const catalogueManifestFile = writeJson('catalogue/manifest.json', catalogueRuntimeManifest, true)

const coreCompressedBytes = Object.values(core).reduce((sum, file) => sum + file.bytes, 0)
const current = {
  schemaVersion: 5,
  datasetVersion: sourceManifest.datasetVersion,
  appVersion: sourceManifest.appVersion,
  publication: 'GitHub Pages static data platform',
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
    relationshipToAtlas: catalogueRuntimeManifest.relationshipToAtlas,
  },
  downloads: { template: `${releasePrefix}/downloads/{packageId}-${sourceManifest.datasetVersion}.zip` },
  budgets: {
    coreCompressedBytes,
    coreLimitBytes: 5 * 1024 * 1024,
    shardLimitBytes: 8 * 1024 * 1024,
    catalogueCompressedBytes: catalogueRuntimeManifest.search.totalCompressedBytes
      + catalogueRuntimeManifest.acceptedTargets.totalCompressedBytes
      + catalogueRuntimeManifest.hierarchy.nodes.totalCompressedBytes
      + catalogueRuntimeManifest.hierarchy.children.totalCompressedBytes
      + catalogueRuntimeManifest.ownership.bytes,
    pagesLimitBytes: 650 * 1024 * 1024,
  },
  evidenceBoundary: {
    entityRegistry: `${entities.length}/${entities.length}`,
    chineseNamesPresent: `${entities.filter((entity) => entity.names.zh).length}/${entities.length}`,
    packageOwnership: `${entities.filter((entity) => entity.packageId).length}/${entities.length}`,
    acceptedSpeciesPackageOwnership: `${catalogueRuntimeManifest.ownership.assignedSpecies}/${catalogueRuntimeManifest.ownership.acceptedSpecies}`,
    scientificMaturitySummary: registry.packages
      .filter((entry) => entry.id !== 'atlas-core')
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
let retainedBytes = currentReleaseBytes
for (const entry of (previousReleaseHistory.releases ?? []).filter((candidate) => candidate.datasetVersion !== sourceManifest.datasetVersion)) {
  if (retainedReleases.length >= 3) break
  let releaseBytes = entry.bytes
  if (!Number.isFinite(releaseBytes)) {
    try {
      const index = JSON.parse(readFileSync(join(outputRoot, entry.filesIndex), 'utf8'))
      releaseBytes = (index.files ?? []).reduce((sum, file) => sum + (file.bytes ?? 0), 0) + statSync(join(outputRoot, entry.filesIndex)).size
    } catch { continue }
  }
  if (retainedBytes + releaseBytes > retentionByteLimit) continue
  retainedReleases.push({ ...entry, bytes: releaseBytes })
  retainedBytes += releaseBytes
}
writeBootstrapJson('releases.json', { schemaVersion: 1, retentionLimit: 3, retentionByteLimit, retainedBytes, releases: retainedReleases }, true)
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
