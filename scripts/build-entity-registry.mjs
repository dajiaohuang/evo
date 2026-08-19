import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join, resolve } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { DATASET_PACKAGE_VERSION, DATASET_RELEASE_DATE, PACKAGE_SCHEMA_VERSION, packageDefinitions } from './package-definitions.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const profileSources = readJson('data/packages/mammalia/perissodactyla/profiles.source.json')
const perissodactylPhylogeny = structuredClone(readJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.source.json'))
const treeEvidence = readJson('data/tree/evidence.json')
const media = readJson('data/media.json')
const claims = readJson('data/evidence/claims.json')
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

function synchronizePhylogenyRanges(node) {
  const range = (rangesByEntityId.get(node.id) ?? []).find((entry) => entry.rangeKind === 'global-composite')
  if (range) {
    node.firstAppearance = range.olderMa
    node.lastAppearance = range.youngerMa
  }
  for (const child of node.children ?? []) synchronizePhylogenyRanges(child)
}
synchronizePhylogenyRanges(perissodactylPhylogeny.root)
const profileIds = new Set(profiles.map((profile) => profile.treeNodeId))
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
        ? 'curator-draft'
        : 'generated-scaffold',
    automatedReviewStatus: 'passed',
    scientificReviewStatus: 'not-reviewed',
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
    topologyHypothesis: node.id === 'perissodactyla' || descendantIds(node, []).includes('perissodactyla') ? 'available' : 'unmapped',
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
    review: {
      status: 'automated-audit-passed',
      reviewedBy: 'Evo Atlas schema and linkage audit',
      reviewedAt: DATASET_RELEASE_DATE,
      scope: ['schema', 'external-identifier-resolution', 'identifier-linkage', 'bilingual-field-presence'],
      scientificPeerReview: false,
      decision: 'automated-audit-only',
      reviewedDatasetVersion: DATASET_PACKAGE_VERSION,
      reviewers: [{
        name: 'Evo Atlas automated validation',
        identityType: 'automated-system',
        orcid: null,
        expertise: ['data engineering', 'schema validation'],
        reviewScope: ['schema', 'identifier linkage', 'bilingual field presence'],
        conflictOfInterest: 'Automated system; no human scientific expertise is claimed.',
        decision: 'automated-audit-only',
      }],
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
  const absolutePath = join(outputRoot, relativePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
  generatedFiles.push(relativePath.replaceAll('\\', '/'))
}

writeJson('data/registry/entities/entities.json', entities)
writeJson('data/registry/package-registry.json', registry)
writeJson('data/packages/mammalia/perissodactyla/profiles.json', profiles)
writeJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json', perissodactylPhylogeny)

for (const definition of packageDefinitions) {
  const packageEntities = entities.filter((entity) => entity.packageId === definition.id)
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
    rootEntityIds: definition.rootEntityIds,
    entityIds: packageEntities.map((entity) => entity.id),
    canonicalSources: {
      entityDefinitions: 'data/navigation/atlas-ontology.json',
      ranges: 'data/ranges/range-evidence.json',
      externalResolutions: 'data/sources/pbdb-taxon-resolution.json',
      references: 'data/references.json',
      occurrences: 'data/fossils/*.json',
      ...(definition.id === 'perissodactyla' ? {
        profilesSource: 'data/packages/mammalia/perissodactyla/profiles.source.json',
        phylogenySource: 'data/packages/mammalia/perissodactyla/phylogeny/hypothesis.source.json',
        calibrations: 'data/packages/mammalia/perissodactyla/phylogeny/calibrations.json',
      } : {}),
    },
    ...packageMaturity(definition),
    limitations: ['Package dossiers expose the current curated evidence boundary; unavailable fields are explicit and are not inferred.'],
  })
  writeJson(`data/packages/${definition.path}/provenance.json`, {
    packageId: definition.id,
    version: DATASET_PACKAGE_VERSION,
    canonicalInputs: ['data/navigation/atlas-ontology.json', 'data/ranges/range-evidence.json', 'data/sources/pbdb-taxon-resolution.json', 'data/tree/evidence.json', 'data/references.json', ...(definition.id === 'perissodactyla' ? ['data/packages/mammalia/perissodactyla/profiles.source.json', 'data/packages/mammalia/perissodactyla/phylogeny/hypothesis.source.json'] : [])],
    occurrenceSnapshot: 'data/sources/pbdb-occurrence-bundle.json',
    generatedProjection: true,
    notes: ['Package registry, taxonomy, range, review and locale files are generated projections. Canonical entity concepts, ranges, evidence and external-resolution decisions live in the listed canonical inputs.'],
  })
  writeJson(`data/packages/${definition.path}/review.json`, {
    subjectId: `package:${definition.id}`,
    status: 'automated-audit-passed',
    reviewedBy: 'Evo Atlas schema and linkage audit',
    reviewedAt: DATASET_RELEASE_DATE,
    scope: ['schema', 'identifier-linkage', 'bilingual-field-presence'],
    scientificPeerReview: false,
    decision: 'automated-audit-only',
    decisionNotes: 'Automated checks passed. Human scientific review, claim decisions and conflict review remain pending.',
    reviewedDatasetVersion: DATASET_PACKAGE_VERSION,
    reviewers: [{
      name: 'Evo Atlas automated validation', identityType: 'automated-system', orcid: null,
      expertise: ['data engineering', 'schema validation'],
      reviewScope: ['schema', 'identifier linkage', 'bilingual field presence'],
      conflictOfInterest: 'Automated system; no human scientific expertise is claimed.',
      decision: 'automated-audit-only',
    }],
    version: DATASET_PACKAGE_VERSION,
  })
  writeJson(`data/packages/${definition.path}/query-ledger.json`, queryLedger)
  const packageClaims = claims.filter((claim) => ownerForClaim(claim) === definition.id)
  const packageProfiles = profiles.filter((profile) => packageEntities.some((entity) => entity.id === profile.treeNodeId))
  writeJson(`data/packages/${definition.path}/entities.json`, {
    registry: 'data/registry/entities/entities.json',
    entityIds: packageEntities.map((entity) => entity.id),
  })
  writeJson(`data/packages/${definition.path}/taxonomy.json`, {
    ontology: 'data/navigation/atlas-ontology.json',
    rootEntityIds: definition.rootEntityIds,
    relationships: packageEntities.map((entity) => ({ id: entity.id, parentId: entity.parentId, relationshipKind: entity.parentRelationshipKind })),
  })
  writeJson(`data/packages/${definition.path}/ranges.json`, canonicalRanges.filter((range) => packageEntities.some((entity) => entity.id === range.entityId)))
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
    'data/packages/mammalia/perissodactyla/profiles.source.json',
    'data/packages/mammalia/perissodactyla/phylogeny/hypothesis.source.json',
    'data/references.json',
  ],
  generatedFiles: [...generatedFiles].sort(),
})

if (!quiet) console.log(`Built registry for ${entities.length} entities across ${packageDefinitions.length} packages.`)
