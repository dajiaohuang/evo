import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { DATASET_PACKAGE_VERSION, PACKAGE_SCHEMA_VERSION, packageDefinitions } from './package-definitions.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const treeEvidence = readJson('data/tree/evidence.json')
const media = readJson('data/media.json')
const claims = readJson('data/evidence/claims.json')
const claimRationalesZh = readJson('data/evidence/claim-rationales.zh.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const publishedStories = stories.filter((story) => story.evidenceStatus === 'available-with-limitations')
const taxonResolution = readJson('data/sources/pbdb-taxon-resolution.json')
const taxonResolutionByEntityId = new Map(taxonResolution.resolutions.map((entry) => [entry.entityId, entry]))
const profileIds = new Set(profiles.map((profile) => profile.treeNodeId))
const mediaIds = new Set(media.map((asset) => asset.taxonId))
const informalGroups = new Set(['invertebrata', 'agnatha', 'ostracodermi', 'acanthodii', 'pelycosauria', 'bryophyta', 'pteridophyta', 'articulata'])

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

function descendantIds(node, output = []) {
  for (const child of node.children ?? []) {
    output.push(child.id)
    descendantIds(child, output)
  }
  return output
}

function entityType(node) {
  if (informalGroups.has(node.id)) return 'informal-group-dossier'
  if (!node.taxonId || ['life', 'vertebrata', 'gnathostomata', 'osteichthyes', 'tetrapoda', 'amniota', 'sauropsida', 'archosauria', 'placentalia'].includes(node.id)) return 'navigation-dossier'
  return 'taxon-profile'
}

function ownerForClaim(claim) {
  const [kind, subjectId] = claim.subjectId.split(':')
  if (kind === 'taxon') return packageForEntity(subjectId)
  const explicit = {
    'plants-on-land': 'early-land-plants',
    'angiosperm-expansion': 'angiospermae',
    'c4-grassland-expansion': 'angiospermae',
    'tetrapods-on-land': 'tetrapod-transition',
    'dinosaur-radiation': 'dinosauria',
    'perissodactyl-radiation': 'perissodactyla',
    'eocene-oligocene-transition': 'perissodactyla',
    'early-homo-dispersal': 'primates',
    'homo-sapiens-admixture': 'primates',
  }
  return explicit[subjectId] ?? 'atlas-core'
}

function packageMaturity(definition) {
  return {
    platformMaturity: 'published',
    scientificMaturity: definition.id === 'atlas-core'
      ? 'core'
      : definition.id === 'perissodactyla'
        ? 'curated-draft'
        : 'generated-scaffold',
    automatedReviewStatus: 'passed',
    scientificReviewStatus: 'not-reviewed',
  }
}

const entities = flattenTree(ontology).map((node) => {
  const evidence = { ...treeEvidence.default, ...treeEvidence.nodes[node.id] }
  const resolution = taxonResolutionByEntityId.get(node.id)
  const parentId = parents.get(node.id)
  const availability = {
    narrativeProfile: profileIds.has(node.id) ? 'available' : 'unavailable',
    ecology: profileIds.has(node.id) ? 'available' : entityType(node) === 'taxon-profile' ? 'unknown' : 'not-applicable',
    media: mediaIds.has(node.id) ? 'available' : 'unavailable',
    topologyHypothesis: node.id === 'perissodactyla' || descendantIds(node, []).includes('perissodactyla') ? 'available' : 'unmapped',
  }
  return {
    id: node.id,
    entityType: entityType(node),
    packageId: packageForEntity(node.id),
    parentId,
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
      olderMa: node.firstAppearance,
      youngerMa: node.lastAppearance,
      status: 'available',
      basis: evidence.rangeBasis,
    },
    externalIds: node.taxonId ? { pbdb: node.taxonId } : {},
    referenceIds: [...new Set([...evidence.references, ...(node.taxonId ? ['pbdb-taxa-2026-07-19'] : [])])],
    evidenceStatus: evidence.support,
    limitations: [
      evidence.conflicts,
      ...(resolution?.resolutionStatus === 'unresolved'
        ? [`PBDB external identifier withheld: ${resolution.resolutionReason}.`]
        : []),
    ],
    dataAvailability: availability,
    review: {
      status: 'automated-audit-passed',
      reviewedBy: 'Evo Atlas schema and linkage audit',
      reviewedAt: '2026-08-19',
      scope: ['schema', 'external-identifier-resolution', 'identifier-linkage', 'bilingual-field-presence'],
      scientificPeerReview: false,
    },
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
  const absolutePath = join(rootDir, relativePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

writeJson('data/registry/entities/entities.json', entities)
writeJson('data/registry/package-registry.json', registry)

for (const definition of packageDefinitions) {
  const packageEntities = entities.filter((entity) => entity.packageId === definition.id)
  writeJson(`data/packages/${definition.path}/package.json`, {
    schemaVersion: PACKAGE_SCHEMA_VERSION,
    id: definition.id,
    version: DATASET_PACKAGE_VERSION,
    title: definition.title,
    titleZh: definition.titleZh,
    rootEntityIds: definition.rootEntityIds,
    entityIds: packageEntities.map((entity) => entity.id),
    canonicalSources: {
      entities: 'data/registry/entities/entities.json',
      taxonomy: 'data/navigation/atlas-ontology.json',
      references: 'data/references.json',
      occurrences: 'data/fossils/*.json',
      ...(definition.id === 'perissodactyla' ? {
        profiles: 'data/packages/mammalia/perissodactyla/profiles.json',
        phylogeny: 'data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json',
        calibrations: 'data/packages/mammalia/perissodactyla/phylogeny/calibrations.json',
      } : {}),
    },
    ...packageMaturity(definition),
    limitations: ['Package dossiers expose the current curated evidence boundary; unavailable fields are explicit and are not inferred.'],
  })
  writeJson(`data/packages/${definition.path}/provenance.json`, {
    packageId: definition.id,
    version: DATASET_PACKAGE_VERSION,
    canonicalInputs: ['data/navigation/atlas-ontology.json', 'data/sources/pbdb-taxon-resolution.json', 'data/tree/evidence.json', 'data/references.json'],
    occurrenceSnapshot: 'data/sources/pbdb-occurrence-bundle.json',
    generatedProjection: false,
    notes: ['The package owns its registry entities. Runtime gzip files are generated projections and are not canonical sources.'],
  })
  writeJson(`data/packages/${definition.path}/review.json`, {
    subjectId: `package:${definition.id}`,
    status: 'automated-audit-passed',
    reviewedBy: 'Evo Atlas schema and linkage audit',
    reviewedAt: '2026-08-19',
    scope: ['schema', 'identifier-linkage', 'bilingual-field-presence'],
    scientificPeerReview: false,
    version: DATASET_PACKAGE_VERSION,
  })
  const packageClaims = claims.filter((claim) => ownerForClaim(claim) === definition.id)
  const packageProfiles = profiles.filter((profile) => packageEntities.some((entity) => entity.id === profile.treeNodeId))
  writeJson(`data/packages/${definition.path}/entities.json`, {
    registry: 'data/registry/entities/entities.json',
    entityIds: packageEntities.map((entity) => entity.id),
  })
  writeJson(`data/packages/${definition.path}/taxonomy.json`, {
    ontology: 'data/navigation/atlas-ontology.json',
    rootEntityIds: definition.rootEntityIds,
    relationships: packageEntities.map((entity) => ({ id: entity.id, parentId: entity.parentId })),
  })
  writeJson(`data/packages/${definition.path}/ranges.json`, packageEntities.map((entity) => ({
    id: `range:${entity.id}`,
    entityId: entity.id,
    ...entity.temporalRange,
    confidence: entity.evidenceStatus === 'strong' ? 'high' : entity.evidenceStatus === 'contested' ? 'contested' : 'medium',
    referenceIds: entity.referenceIds,
  })))
  writeJson(`data/packages/${definition.path}/evidence/claim-ids.json`, packageClaims.map((claim) => claim.id))
  writeJson(`data/packages/${definition.path}/events.json`, packageClaims.filter((claim) => claim.subjectId.startsWith('event:')).map((claim) => claim.subjectId.slice(6)))
  writeJson(`data/packages/${definition.path}/stories.json`, publishedStories.filter((story) => story.steps.some((step) => (step.taxonIds ?? []).some((id) => packageForEntity(id) === definition.id))).map((story) => story.id))
  writeJson(`data/packages/${definition.path}/media.json`, media.filter((asset) => packageForEntity(asset.taxonId) === definition.id).map((asset) => asset.id))
  writeJson(`data/packages/${definition.path}/locales/zh.json`, {
    language: 'zh',
    version: DATASET_PACKAGE_VERSION,
    strings: Object.fromEntries([
      ...packageEntities.map((entity) => [`entity.${entity.id}.name`, entity.names.zh]),
      ...packageProfiles.map((profile) => [`profile.${profile.id}.name`, profile.commonNameZh]),
      ...packageClaims.filter((claim) => claimRationalesZh[claim.id]).map((claim) => [`claim.${claim.id}.confidenceRationale`, claimRationalesZh[claim.id]]),
    ]),
  })
  if (definition.id === 'perissodactyla') {
    writeJson(`data/packages/${definition.path}/evidence/field-claim-links.json`, packageProfiles.map((profile) => ({
      profileId: profile.id,
      fields: {
        overview: `claim:taxon:${profile.id}`,
        evidenceSummary: `claim:taxon:${profile.id}`,
        confidence: `claim:taxon:${profile.id}`,
      },
    })))
  }
}

console.log(`Built registry for ${entities.length} entities across ${packageDefinitions.length} packages.`)
