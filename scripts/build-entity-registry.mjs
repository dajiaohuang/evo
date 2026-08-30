import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join, resolve } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { DATASET_PACKAGE_VERSION, PACKAGE_SCHEMA_VERSION, packageDefinitions } from './package-definitions.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const profileSourceEntries = packageDefinitions.flatMap((definition) => {
  const relativePath = `data/packages/${definition.path}/profiles.source.json`
  return existsSync(join(rootDir, relativePath))
    ? [{ definition, relativePath, profiles: readJson(relativePath) }]
    : []
})
const profileSourceByPackageId = new Map(profileSourceEntries.map((entry) => [entry.definition.id, entry]))
const profileSources = profileSourceEntries.flatMap((entry) => entry.profiles)
const phylogenySourceEntries = packageDefinitions.flatMap((definition) => {
  const directory = `data/packages/${definition.path}/phylogeny`
  const collectionPath = `${directory}/hypotheses.source.json`
  const singlePath = `${directory}/hypothesis.source.json`
  if (existsSync(join(rootDir, collectionPath))) {
    const source = readJson(collectionPath)
    if (!Array.isArray(source.hypotheses) || source.hypotheses.length === 0) {
      throw new Error(`${collectionPath} must contain at least one hypothesis`)
    }
    return [{ definition, relativePath: collectionPath, outputPath: `${directory}/hypotheses.json`, source, hypotheses: source.hypotheses }]
  }
  if (existsSync(join(rootDir, singlePath))) {
    const hypothesis = readJson(singlePath)
    return [{ definition, relativePath: singlePath, outputPath: `${directory}/hypothesis.json`, source: hypothesis, hypotheses: [hypothesis] }]
  }
  return []
})
const phylogenySourceByPackageId = new Map(phylogenySourceEntries.map((entry) => [entry.definition.id, entry]))
const treeEvidence = readJson('data/tree/evidence.json')
const media = readJson('data/media.json')
const claims = readJson('data/evidence/claims.json')
const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
const references = readJson('data/references.json')
const claimRationalesZh = readJson('data/evidence/claim-rationales.zh.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const publishedStories = stories.filter((story) => story.evidenceStatus === 'available-with-limitations')
const taxonResolution = readJson('data/sources/pbdb-taxon-resolution.json')
const occurrenceSource = readJson('data/sources/pbdb-occurrence-bundle.json')
const perissodactylaOccurrenceSnapshot = readJson('data/sources/perissodactyla-occurrence-snapshot-v2.json')
const timeScale = readJson('data/time-scale.json')
const taxonResolutionByEntityId = new Map(taxonResolution.resolutions.map((entry) => [entry.entityId, entry]))
const canonicalRanges = readJson('data/ranges/range-evidence.json')
const rangesByEntityId = new Map()
for (const range of canonicalRanges) {
  if (!rangesByEntityId.has(range.entityId)) rangesByEntityId.set(range.entityId, [])
  rangesByEntityId.get(range.entityId).push(range)
}
const profiles = profileSources.map((source) => {
  const profile = structuredClone(source)
  const ranges = rangesByEntityId.get(profile.treeNodeId) ?? []
  const globalRange = ranges.find((range) => range.rangeKind === 'global-composite')
  if (!globalRange) throw new Error(`Profile ${profile.id} has no canonical global range`)
  profile.firstAppearance = globalRange.olderMa
  profile.lastAppearance = globalRange.youngerMa
  profile.rangeEvidenceLevel = globalRange.evidenceLevel
  profile.rangeReviewStatus = globalRange.reviewStatus
  profile.rangeProvisional = globalRange.evidenceLevel !== 'expert-reviewed'
  profile.regionalRanges = (source.regionalRanges ?? []).map((regional) => {
    const canonical = ranges.find((range) => range.id === regional.canonicalRangeId)
    if (!canonical) throw new Error(`Profile ${profile.id}/${regional.label} has no canonical regional range`)
    return {
      label: regional.label,
      region: canonical.geographicScope,
      rangeKind: canonical.rangeKind,
      olderMa: canonical.olderMa,
      youngerMa: canonical.youngerMa,
      basis: canonical.evidenceBasis,
      confidence: canonical.confidence,
      evidenceLevel: canonical.evidenceLevel,
      provisional: canonical.evidenceLevel !== 'expert-reviewed',
      referenceIds: canonical.referenceLocators.map((locator) => locator.referenceId),
    }
  })
  if (!profile.regionalRanges.length) delete profile.regionalRanges
  return profile
})
const duplicateProfileIds = profiles.filter((profile, index) => profiles.findIndex((candidate) => candidate.id === profile.id) !== index).map((profile) => profile.id)
const duplicateProfileNodes = profiles.filter((profile, index) => profiles.findIndex((candidate) => candidate.treeNodeId === profile.treeNodeId) !== index).map((profile) => profile.treeNodeId)
if (duplicateProfileIds.length) throw new Error(`Duplicate profile IDs: ${[...new Set(duplicateProfileIds)].join(', ')}`)
if (duplicateProfileNodes.length) throw new Error(`Multiple profiles target the same tree node: ${[...new Set(duplicateProfileNodes)].join(', ')}`)
for (const profile of profiles) if (profile.id !== profile.treeNodeId) throw new Error(`Profile ${profile.id} must use its treeNodeId as its stable ID`)

function synchronizePhylogenyRanges(node) {
  const range = (rangesByEntityId.get(node.id) ?? []).find((entry) => entry.rangeKind === 'global-composite')
  if (range) {
    node.firstAppearance = range.olderMa
    node.lastAppearance = range.youngerMa
  }
  for (const child of node.children ?? []) synchronizePhylogenyRanges(child)
}
for (const entry of phylogenySourceEntries) {
  entry.source = structuredClone(entry.source)
  entry.hypotheses = entry.source.hypotheses ?? [entry.source]
  for (const hypothesis of entry.hypotheses) synchronizePhylogenyRanges(hypothesis.root)
}
const profileIds = new Set(profiles.map((profile) => profile.treeNodeId))
const topologyNodeIds = new Set(phylogenySourceEntries.flatMap((entry) => entry.hypotheses.flatMap((hypothesis) => flattenTree(hypothesis.root).map((node) => node.id))))
const mediaIds = new Set(media.map((asset) => asset.taxonId))
const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
const occurrenceCountsByPackage = new Map()
let bundledOccurrenceCount = 0
const boundedResponseChecksums = []
for (const periodName of periodNames) {
  const relativePath = `data/fossils/${periodName.toLowerCase()}.json`
  const records = readJson(relativePath)
  bundledOccurrenceCount += records.length
  boundedResponseChecksums.push(createHash('sha256').update(readFileSync(join(rootDir, relativePath))).digest('hex'))
  for (const record of records) {
    const packageId = record.packageId ?? 'atlas-core'
    occurrenceCountsByPackage.set(packageId, (occurrenceCountsByPackage.get(packageId) ?? 0) + 1)
  }
}
const args = process.argv.slice(2)
const outIndex = args.indexOf('--out')
const requestedOutput = outIndex >= 0 ? args[outIndex + 1] : rootDir
if (!requestedOutput) throw new Error('--out requires a path')
const outputRoot = isAbsolute(requestedOutput) ? requestedOutput : resolve(rootDir, requestedOutput)
const quiet = args.includes('--quiet')
const generatedFiles = []

const parents = new Map()
const depths = new Map()
function indexTree(node, parentId = null, depth = 0) {
  parents.set(node.id, parentId)
  depths.set(node.id, depth)
  for (const child of node.children ?? []) indexTree(child, node.id, depth + 1)
}
indexTree(ontology)

const rootOwners = new Map()
for (const definition of packageDefinitions) {
  for (const rootEntityId of definition.rootEntityIds) rootOwners.set(rootEntityId, definition.id)
}

function packageForEntity(entityId) {
  let cursor = entityId
  while (cursor) {
    const owner = rootOwners.get(cursor)
    if (owner) return owner
    cursor = parents.get(cursor)
  }
  return 'atlas-core'
}

for (const entry of profileSourceEntries) {
  for (const profile of entry.profiles) {
    const owner = packageForEntity(profile.treeNodeId)
    if (owner !== entry.definition.id) {
      throw new Error(`Profile ${profile.id} belongs to ${owner}, not source package ${entry.definition.id}`)
    }
  }
}

function descendantIds(node, output = []) {
  for (const child of node.children ?? []) {
    output.push(child.id)
    descendantIds(child, output)
  }
  return output
}

function ownerForClaim(claim) {
  const [kind, subjectId] = claim.subjectId.split(':')
  if (kind === 'taxon') return packageForEntity(subjectId)
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
    'dormaalocyon-dental-tarsal-sample': 'carnivora',
    'miacoidea-character-matrix-topology': 'carnivora',
    'lycophocyon-holotype-basal-caniform': 'carnivora',
    'carnivora-six-gene-living-topology': 'carnivora',
    'texas-basal-amphicyonid-reappraisal': 'carnivora',
    'magericyon-feeding-fea': 'carnivora',
    'kretzoiarctos-dental-panda-topology': 'carnivora',
    'panthera-blytheae-holotype-total-evidence': 'carnivora',
    'hesperocyon-bony-labyrinth-model': 'carnivora',
    'puijila-holotype-locomotor-mosaic': 'carnivora',
    'enaliarctos-skeleton-swimming-model': 'carnivora',
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
    'kimberella-white-sea-morphology': 'molluscs-brachiopods',
    'odontogriphus-radula-sample': 'molluscs-brachiopods',
    'orthrozanclus-halwaxiid-mosaic': 'molluscs-brachiopods',
    'pojetaia-shell-microstructure': 'molluscs-brachiopods',
    'nectocaris-soft-body-cephalopod-test': 'molluscs-brachiopods',
    'aculifera-phylogenomic-topology': 'molluscs-brachiopods',
    'all-class-mollusc-phylogenomics': 'molluscs-brachiopods',
    'gastropod-nodal-chirality': 'molluscs-brachiopods',
    'octopus-genome-innovation': 'molluscs-brachiopods',
    'micrina-bivalved-reconstruction': 'molluscs-brachiopods',
    'kutorgina-soft-tissue-anatomy': 'molluscs-brachiopods',
    'lingula-genome-biomineralization': 'molluscs-brachiopods',
    'yuganotheca-tubular-lophophorate': 'molluscs-brachiopods',
    'cryogenian-sponge-biomarker-debate': 'sponges-cnidarians',
    'eocyathispongia-single-specimen': 'sponges-cnidarians',
    'helicolocellus-organic-skeleton': 'sponges-cnidarians',
    'soltanieh-basal-cambrian-spicules': 'sponges-cnidarians',
    'amphimedon-draft-genome': 'sponges-cnidarians',
    'animal-root-competing-models': 'sponges-cnidarians',
    'auroralumina-charnwood-polyps': 'sponges-cnidarians',
    'haootia-muscle-interpretation': 'sponges-cnidarians',
    'xianguangia-body-plan-test': 'sponges-cnidarians',
    'burgessomedusa-swimming-medusa': 'sponges-cnidarians',
    'cnidarian-phylogenomic-sample': 'sponges-cnidarians',
    'myxozoan-genome-reduction': 'sponges-cnidarians',
    'scleractinian-paleozoic-clock': 'sponges-cnidarians',
    'triassic-coral-photosymbiosis': 'sponges-cnidarians',
  }
  return explicit[subjectId] ?? 'atlas-core'
}

const maintainerReviewScope = [
  'taxonomy',
  'fossil-ranges',
  'morphology',
  'ecology',
  'biogeography',
  'references',
  'bilingual-consistency',
]

function defaultPackageReview(definition) {
  return {
    schemaVersion: 1,
    subjectId: `package:${definition.id}`,
    status: 'not-reviewed',
    reviewedBy: null,
    reviewedAt: null,
    reviewedCommit: null,
    contentDigest: null,
    chatgptAssisted: false,
    scope: maintainerReviewScope,
    openIssues: [
      'No maintainer review packet has been completed.',
      'No external domain-expert review has been performed.',
    ],
  }
}

const packageReviewsNeedingMigration = new Set()
const packageReviewById = new Map(packageDefinitions.map((definition) => {
  const relativePath = `data/packages/${definition.path}/review.json`
  if (!existsSync(join(rootDir, relativePath))) {
    packageReviewsNeedingMigration.add(definition.id)
    return [definition.id, defaultPackageReview(definition)]
  }
  const current = readJson(relativePath)
  if (current.schemaVersion !== 1 || !['not-reviewed', 'in-review', 'reviewed-with-caveats', 'reviewed'].includes(current.status)) {
    packageReviewsNeedingMigration.add(definition.id)
    return [definition.id, defaultPackageReview(definition)]
  }
  return [definition.id, current]
}))

function packageMaturity(definition) {
  return {
    platformMaturity: 'published',
    scientificMaturity: definition.scientificMaturity ?? 'generated-scaffold',
    automatedReviewStatus: 'passed',
    reviewStatus: packageReviewById.get(definition.id).status,
  }
}

const entities = flattenTree(ontology).map((node) => {
  const evidence = { ...treeEvidence.default, ...treeEvidence.nodes[node.id] }
  const resolution = taxonResolutionByEntityId.get(node.id)
  const parentId = parents.get(node.id)
  const ranges = rangesByEntityId.get(node.id) ?? []
  const globalRange = ranges.find((range) => range.rangeKind === 'global-composite')
  if (!globalRange) throw new Error(`Entity ${node.id} has no canonical global range`)
  const availability = {
    narrativeProfile: profileIds.has(node.id) ? 'available' : 'unavailable',
    ecology: profileIds.has(node.id) ? 'available' : ['taxon', 'historical-grade'].includes(node.entityKind) ? 'unknown' : 'not-applicable',
    media: mediaIds.has(node.id) ? 'available' : 'unavailable',
    topologyHypothesis: topologyNodeIds.has(node.id) ? 'available' : 'unmapped',
  }
  return {
    id: node.id,
    entityKind: node.entityKind,
    contentLevel: node.contentLevel,
    externalResolutionStatus: resolution?.externalResolutionStatus ?? 'not-applicable',
    packageId: packageForEntity(node.id),
    parentId,
    parentRelationshipKind: node.parentRelationshipKind ?? (parentId ? 'taxonomic-parent' : null),
    names: {
      scientific: node.name,
      en: node.commonName || node.name,
      zh: node.commonNameZh,
    },
    synonyms: [],
    rank: node.rank || 'not-applicable',
    definition: {
      en: `${node.name} is represented as a ${node.rank || 'navigation'} entity in the Evo Atlas curated navigation ontology.`,
      zh: `${node.commonNameZh}（${node.name}）在 Evo Atlas 经整理的导航本体中作为${node.rank ? `${node.rank}层级的` : ''}实体呈现。`,
    },
    compositionScope: {
      includesSelf: true,
      descendantEntityIds: descendantIds(node, []),
    },
    temporalRange: {
      olderMa: globalRange.olderMa,
      youngerMa: globalRange.youngerMa,
      status: globalRange.status,
      basis: globalRange.evidenceBasis,
      evidenceLevel: globalRange.evidenceLevel,
      provisional: globalRange.evidenceLevel !== 'expert-reviewed',
    },
    externalIds: node.taxonId ? { pbdb: node.taxonId } : {},
    referenceIds: [...new Set([...ranges.flatMap((range) => range.referenceLocators.map((locator) => locator.referenceId)), ...evidence.references, ...(node.taxonId ? ['pbdb-taxa-2026-07-19'] : [])])],
    evidenceStatus: evidence.support,
    limitations: [
      evidence.conflicts,
      ...(resolution?.resolutionStatus === 'unresolved'
        ? [`PBDB external identifier withheld: ${resolution.resolutionReason}.`]
        : []),
      ...(resolution?.conceptReviewStatus === 'needs-concept-review'
        ? [`PBDB mapping requires concept review because the pinned lineage is incompatible with the local expected parent ${resolution.localExpectedParentConcept}.`]
        : []),
    ],
    dataAvailability: availability,
    version: DATASET_PACKAGE_VERSION,
  }
})

const entityIdsByPackage = new Map(packageDefinitions.map((definition) => [definition.id, []]))
for (const entity of entities) entityIdsByPackage.get(entity.packageId).push(entity.id)

const registry = {
  schemaVersion: PACKAGE_SCHEMA_VERSION,
  version: DATASET_PACKAGE_VERSION,
  schemaStatus: 'candidate',
  packageCount: packageDefinitions.length,
  entityCount: entities.length,
  packages: packageDefinitions.map((definition) => ({
    id: definition.id,
    canonicalPath: `data/packages/${definition.path}`,
    runtimePath: `data/packages/${definition.id}`,
    title: definition.title,
    titleZh: definition.titleZh,
    wave: definition.wave,
    rootEntityIds: definition.rootEntityIds,
    entityCount: entityIdsByPackage.get(definition.id).length,
    ...packageMaturity(definition),
  })),
  entityToPackage: Object.fromEntries(entities.map((entity) => [entity.id, entity.packageId])),
}

function writeJson(relativePath, value) {
  const absolutePath = join(outputRoot, relativePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
  generatedFiles.push(relativePath.replaceAll('\\', '/'))
}

function writeCanonicalJson(relativePath, value) {
  const absolutePath = join(outputRoot, relativePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

writeJson('data/registry/entities/entities.json', entities)
writeJson('data/registry/package-registry.json', registry)
writeJson('data/registry/taxon-profiles.json', profiles)
for (const entry of profileSourceEntries) {
  const packageEntityIds = new Set(entities.filter((entity) => entity.packageId === entry.definition.id).map((entity) => entity.id))
  writeJson(`data/packages/${entry.definition.path}/profiles.json`, profiles.filter((profile) => packageEntityIds.has(profile.treeNodeId)))
}
for (const entry of phylogenySourceEntries) writeJson(entry.outputPath, entry.source)

for (const definition of packageDefinitions) {
  const packageEntities = entities.filter((entity) => entity.packageId === definition.id)
  const packageEntityIds = new Set(packageEntities.map((entity) => entity.id))
  const packageClaims = claims.filter((claim) => ownerForClaim(claim) === definition.id)
  const packageProfiles = profiles.filter((profile) => packageEntityIds.has(profile.treeNodeId))
  const profileSourceEntry = profileSourceByPackageId.get(definition.id)
  const phylogenySourceEntry = phylogenySourceByPackageId.get(definition.id)
  const packageRanges = canonicalRanges.filter((range) => packageEntityIds.has(range.entityId))
  const packageStoryIds = publishedStories
    .filter((story) => story.steps.some((step) => (step.taxonIds ?? []).some((id) => packageForEntity(id) === definition.id)))
    .map((story) => story.id)
  const packageMediaIds = media.filter((asset) => packageForEntity(asset.taxonId) === definition.id).map((asset) => asset.id)
  const packageReferenceIds = new Set([
    ...packageEntities.flatMap((entity) => entity.referenceIds),
    ...packageProfiles.flatMap((profile) => profile.referenceIds ?? []),
    ...packageClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)),
    ...packageRanges.flatMap((range) => range.referenceLocators.map((locator) => locator.referenceId)),
    ...publishedStories
      .filter((story) => packageStoryIds.includes(story.id))
      .flatMap((story) => story.steps.flatMap((step) => step.claimLinks.flatMap((link) => claimsById.get(link.claimId)?.referenceLinks.map((referenceLink) => referenceLink.referenceId) ?? []))),
  ])
  const packageReferences = references.filter((reference) => packageReferenceIds.has(reference.id))
  const acceptedRows = occurrenceCountsByPackage.get(definition.id) ?? 0
  const perissodactylaRootQuery = perissodactylaOccurrenceSnapshot.queryResults.find((query) => query.entityId === 'perissodactyla')
  const queryLedger = definition.id === 'perissodactyla'
    ? {
        schemaVersion: 1,
        packageId: definition.id,
        provider: 'Paleobiology Database',
        endpoint: perissodactylaOccurrenceSnapshot.source.endpoint,
        endpointVersion: perissodactylaOccurrenceSnapshot.source.apiVersion,
        queryParameters: perissodactylaRootQuery.queryParameters,
        requestedAt: perissodactylaOccurrenceSnapshot.source.fetchedAt,
        upstreamReportedTotal: perissodactylaRootQuery.upstreamTotal,
        pagesFetched: Math.ceil(perissodactylaRootQuery.rowsFetched / perissodactylaRootQuery.queryParameters.pageSize),
        rowsFetched: perissodactylaRootQuery.rowsFetched,
        rowsAccepted: perissodactylaOccurrenceSnapshot.uniqueRecordCount,
        rowsRejected: 0,
        rowsOutsidePackage: 0,
        responseChecksums: [perissodactylaOccurrenceSnapshot.recordsSha256],
        completeness: 'complete',
        selectionMethod: 'Complete pagination of a pinned PBDB accepted base_id, with overlapping profile queries retained as an auditable concept ledger.',
        limitations: [
          'Complete describes the pinned PBDB query response at the recorded retrieval time, not the completeness of the fossil record.',
          'Profile subqueries may overlap the root query and are not summed to estimate abundance.',
          'Palaeotherium remains excluded from profile-level interpretation pending taxon-concept review, while root-query rows remain preserved.',
        ],
        subqueries: perissodactylaOccurrenceSnapshot.queryResults.map((query) => ({
          entityId: query.entityId,
          queryParameters: query.queryParameters,
          upstreamReportedTotal: query.upstreamTotal,
          rowsFetched: query.rowsFetched,
          pagesFetched: Math.ceil(query.rowsFetched / query.queryParameters.pageSize),
          completeness: query.paginationComplete ? 'complete' : 'bounded',
          conceptReviewStatus: query.conceptReviewStatus,
          queryEligible: query.queryEligible,
          responseChecksum: query.occurrenceIdSha256,
        })),
      }
    : {
        schemaVersion: 1,
        packageId: definition.id,
        provider: 'Paleobiology Database',
        endpoint: occurrenceSource.endpoint,
        endpointVersion: '1.2',
        queryParameters: {
          template: occurrenceSource.queryTemplate,
          order: occurrenceSource.order,
          stratification: occurrenceSource.stratification,
          periodLimits: occurrenceSource.periodLimits,
        },
        requestedAt: occurrenceSource.fetchedAt,
        upstreamReportedTotal: null,
        pagesFetched: periodNames.length,
        rowsFetched: bundledOccurrenceCount,
        rowsAccepted: acceptedRows,
        rowsRejected: 0,
        rowsOutsidePackage: bundledOccurrenceCount - acceptedRows,
        responseChecksums: boundedResponseChecksums,
        completeness: 'bounded',
        selectionMethod: `${occurrenceSource.samplingMethod}; rows are assigned to packages after retrieval using version-controlled taxon rules.`,
        limitations: [
          ...occurrenceSource.limitations,
          'Checksums cover normalized canonical period files; raw provider response bodies were not retained for this legacy bounded snapshot.',
          'Rows outside this package are reported separately and are not rejected scientific observations.',
        ],
      }
  writeJson(`data/packages/${definition.path}/package.json`, {
    schemaVersion: PACKAGE_SCHEMA_VERSION,
    id: definition.id,
    version: DATASET_PACKAGE_VERSION,
    title: definition.title,
    titleZh: definition.titleZh,
    conceptScope: definition.conceptScope ?? {
      en: `Evidence and navigation concepts rooted at ${definition.rootEntityIds.join(', ')}; membership follows the committed entity registry and does not imply exhaustive taxonomic coverage.`,
      zh: `以 ${definition.rootEntityIds.join('、')} 为根的证据与导航概念；成员范围以已提交的实体注册表为准，不表示穷尽性的分类覆盖。`,
    },
    rootEntityIds: definition.rootEntityIds,
    entityIds: packageEntities.map((entity) => entity.id),
    canonicalSources: {
      entityDefinitions: 'data/navigation/atlas-ontology.json',
      ranges: 'data/ranges/range-evidence.json',
      externalResolutions: 'data/sources/pbdb-taxon-resolution.json',
      references: 'data/references.json',
      occurrences: 'data/fossils/*.json',
      ...(profileSourceEntry ? { profilesSource: profileSourceEntry.relativePath } : {}),
      ...(phylogenySourceEntry ? {
        phylogenySource: phylogenySourceEntry.relativePath,
      } : {}),
      ...(definition.id === 'perissodactyla' ? {
        calibrations: 'data/packages/mammalia/perissodactyla/phylogeny/calibrations.json',
      } : {}),
    },
    ...packageMaturity(definition),
    limitations: [
      'Package dossiers expose the current curated evidence boundary; unavailable fields are explicit and are not inferred.',
      ...(definition.limitations ?? []),
    ],
  })
  writeJson(`data/packages/${definition.path}/provenance.json`, {
    packageId: definition.id,
    version: DATASET_PACKAGE_VERSION,
    canonicalInputs: ['data/navigation/atlas-ontology.json', 'data/ranges/range-evidence.json', 'data/sources/pbdb-taxon-resolution.json', 'data/tree/evidence.json', 'data/references.json', ...(profileSourceEntry ? [profileSourceEntry.relativePath] : []), ...(phylogenySourceEntry ? [phylogenySourceEntry.relativePath] : [])],
    occurrenceSnapshot: 'data/sources/pbdb-occurrence-bundle.json',
    generatedProjection: true,
    notes: ['Package registry, taxonomy, range and locale files are generated projections. review.json is maintained separately as the single package review record. Canonical entity concepts, ranges, evidence and external-resolution decisions live in the listed canonical inputs.'],
  })
  if (packageReviewsNeedingMigration.has(definition.id)) {
    writeCanonicalJson(`data/packages/${definition.path}/review.json`, packageReviewById.get(definition.id))
  }
  writeJson(`data/packages/${definition.path}/query-ledger.json`, queryLedger)
  writeJson(`data/packages/${definition.path}/entities.json`, {
    registry: 'data/registry/entities/entities.json',
    entityIds: packageEntities.map((entity) => entity.id),
  })
  writeJson(`data/packages/${definition.path}/taxonomy.json`, {
    ontology: 'data/navigation/atlas-ontology.json',
    rootEntityIds: definition.rootEntityIds,
    relationships: packageEntities.map((entity) => ({ id: entity.id, parentId: entity.parentId, relationshipKind: entity.parentRelationshipKind })),
  })
  writeJson(`data/packages/${definition.path}/ranges.json`, packageRanges)
  writeJson(`data/packages/${definition.path}/evidence/claim-ids.json`, packageClaims.map((claim) => claim.id))
  writeJson(`data/packages/${definition.path}/events.json`, packageClaims.filter((claim) => claim.subjectId.startsWith('event:')).map((claim) => claim.subjectId.slice(6)))
  writeJson(`data/packages/${definition.path}/stories.json`, packageStoryIds)
  writeJson(`data/packages/${definition.path}/media.json`, packageMediaIds)
  writeJson(`data/packages/${definition.path}/references.json`, packageReferences)
  writeJson(`data/packages/${definition.path}/research-examples.json`, {
    schemaVersion: 1,
    packageId: definition.id,
    examples: definition.id === 'perissodactyla'
      ? [{
          id: 'perissodactyla-lineage-comparison',
          type: 'comparison',
          title: { en: 'Aquatic browsing and giant terrestrial browsing comparison', zh: '水栖取食与巨型陆栖取食比较' },
          description: {
            en: 'A reproducible entry point for comparing two richly described lineages without treating the interface as a phylogenetic result.',
            zh: '用于比较两个具有丰富档案的谱系的可复现入口；界面本身不构成系统发育结论。',
          },
          route: '#/compare?left=metamynodon&right=paraceratherium',
          entityIds: ['metamynodon', 'paraceratherium'],
          claimIds: packageClaims.filter((claim) => ['taxon:metamynodon', 'taxon:paraceratherium'].includes(claim.subjectId)).map((claim) => claim.id),
          evidenceStatus: 'available-with-limitations',
          limitations: ['Comparison fields inherit each claim, range and occurrence source boundary; visible differences are not tests of evolutionary causation.'],
        }]
      : [{
          id: `${definition.id}-tree-preset`,
          type: 'explorer-preset',
          title: { en: `${definition.title} tree context`, zh: `${definition.titleZh}树状背景` },
          description: {
            en: 'A stable Explorer entry point for inspecting the package registry context and currently available occurrence evidence.',
            zh: '用于检查该内容包注册表背景和当前可用出现证据的稳定探索器入口。',
          },
          route: `#/explore?taxon=${encodeURIComponent(definition.rootEntityIds[0])}&view=tree`,
          entityIds: [definition.rootEntityIds[0]],
          claimIds: [],
          evidenceStatus: 'scaffold',
          limitations: ['This preset is a navigation and data-inspection example, not a reviewed scientific conclusion.'],
        }],
  })
  writeJson(`data/packages/${definition.path}/phylogeny/status.json`, phylogenySourceEntry
    ? {
        schemaVersion: 1,
        packageId: definition.id,
        status: 'available',
        topologyPath: phylogenySourceEntry.outputPath.slice(`data/packages/${definition.path}/`.length),
        scopeEntityIds: definition.rootEntityIds,
        statement: {
          en: `${phylogenySourceEntry.hypotheses.length === 1 ? 'A scoped, topology-only hypothesis is' : `${phylogenySourceEntry.hypotheses.length} scoped, topology-only hypotheses are`} published for this package; branch lengths do not represent time.`,
          zh: `本内容包发布了${phylogenySourceEntry.hypotheses.length === 1 ? '一棵' : `${phylogenySourceEntry.hypotheses.length} 棵`}范围明确、仅表示拓扑的假说树；分支长度不表示时间。`,
        },
        limitations: phylogenySourceEntry.source.limitations ?? ['Treat each hypothesis as an explicit representation and inspect its source records separately.'],
      }
    : {
        schemaVersion: 1,
        packageId: definition.id,
        status: 'unmapped',
        topologyPath: null,
        scopeEntityIds: definition.rootEntityIds,
        statement: {
          en: 'No package-specific phylogenetic hypothesis has been curated. The global atlas tree is navigation context only.',
          zh: '尚未整理本内容包专属的系统发育假说；全局图谱树仅作为导航背景。',
        },
        limitations: ['Do not interpret navigation-parent edges or branch lengths as a reviewed phylogenetic hypothesis.'],
      })
  writeJson(`data/packages/${definition.path}/locales/zh.json`, {
    language: 'zh',
    version: DATASET_PACKAGE_VERSION,
    strings: Object.fromEntries([
      ...packageEntities.map((entity) => [`entity.${entity.id}.name`, entity.names.zh]),
      ...packageProfiles.map((profile) => [`profile.${profile.id}.name`, profile.commonNameZh]),
      ...packageClaims.filter((claim) => claimRationalesZh[claim.id]).map((claim) => [`claim.${claim.id}.confidenceRationale`, claimRationalesZh[claim.id]]),
    ]),
  })
  if (packageProfiles.length) {
    const claimBySubjectAndType = new Map(packageClaims.map((claim) => [`${claim.subjectId}|${claim.claimType}`, claim]))
    const claimTypeForField = (field) => field === 'firstAppearance' || field === 'lastAppearance' || field.startsWith('regionalRanges')
      ? 'fossil-range'
      : field === 'geography'
        ? 'biogeography'
        : field.startsWith('ecology.')
          ? 'ecology'
          : field.startsWith('traits')
            ? 'morphology'
            : 'taxonomy'
    const fieldLink = (claim) => {
      return {
        claimId: claim.id,
        claimType: claim.claimType,
        relation: 'supports',
        sourceLocators: claim.referenceLinks
          .filter((link) => link.relation === 'supports')
          .map((link) => ({ referenceId: link.referenceId, locator: link.pages ?? link.figure ?? link.quoteLocator ?? 'Source scope; precise locator pending curator review.' })),
        confidence: claim.confidence,
        reviewStatus: 'automated-audit-passed',
      }
    }
    writeJson(`data/packages/${definition.path}/evidence/field-claim-links.json`, packageProfiles.map((profile) => ({
      profileId: profile.id,
      fields: (() => {
        const fieldNames = [
          'firstAppearance', 'lastAppearance', 'geography', 'overview', 'evidenceSummary', 'confidence',
          ...Object.keys(profile.ecology).map((key) => `ecology.${key}`),
          ...profile.traits.map((_, index) => `traits[${index}]`),
          ...(profile.regionalRanges ?? []).map((_, index) => `regionalRanges[${index}]`),
        ]
        return Object.fromEntries(fieldNames.map((field) => {
          const claimType = claimTypeForField(field)
          const claim = claimBySubjectAndType.get(`taxon:${profile.id}|${claimType}`)
          if (!claim) throw new Error(`Profile ${profile.id}/${field} is missing a ${claimType} claim`)
          return [field, {
            ...fieldLink(claim),
            contentOrigin: field === 'firstAppearance' || field === 'lastAppearance' || field.startsWith('regionalRanges')
              ? 'source-derived-fact'
              : 'editorial-synthesis',
          }]
        }))
      })(),
    })))
  }
}

writeJson('data/registry/generated-files.json', {
  schemaVersion: 1,
  generator: 'scripts/build-entity-registry.mjs',
  canonicalInputs: [
    'data/navigation/atlas-ontology.json', 'data/ranges/range-evidence.json',
    'data/sources/pbdb-taxon-resolution.json', 'data/tree/evidence.json',
    'data/evidence/claims.json', 'data/evidence/claim-rationales.zh.json',
    ...profileSourceEntries.map((entry) => entry.relativePath),
    ...phylogenySourceEntries.map((entry) => entry.relativePath),
    'data/references.json',
  ],
  generatedFiles: [...generatedFiles].sort(),
})

if (!quiet) console.log(`Built registry for ${entities.length} entities across ${packageDefinitions.length} packages.`)
