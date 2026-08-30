import Ajv2020 from 'ajv/dist/2020.js'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { countTreeNodes, readJson, rootDir } from './data-lib.mjs'
import { completedReviewStatuses, evaluatePackageReview } from './check-review-freshness.mjs'

const unique = (items) => new Set(items).size === items.length
const scientificMaturityOrder = ['generated-scaffold', 'structured', 'source-linked', 'curated-draft', 'published']
const scientificMaturityAtLeast = (value, minimum) => scientificMaturityOrder.indexOf(value) >= scientificMaturityOrder.indexOf(minimum)
const scientificSourceRoles = new Set(['primary-study', 'systematic-review'])
const claimFitness = { taxonomy: 'taxonomy', topology: 'topology', 'divergence-time': 'geochronology', 'fossil-range': 'range', biogeography: 'biogeography', morphology: 'morphology', ecology: 'ecology', 'event-mechanism': 'event-mechanism' }

function schemaValidator(schemaPath) {
  const ajv = new Ajv2020({ allErrors: true, strict: true })
  return ajv.compile(readJson(schemaPath))
}

function schemaFailure(validate, value, label) {
  if (validate(value)) return []
  const detail = validate.errors?.slice(0, 4).map((error) => `${error.instancePath || '/'} ${error.message}`).join('; ')
  return [`${label}: schema violation: ${detail}`]
}

function registryFailures() {
  const failures = []
  const entities = readJson('data/registry/entities/entities.json')
  const registry = readJson('data/registry/package-registry.json')
  const packageInventoryBaseline = readJson('data/registry/package-inventory-baseline.json')
  const references = new Set(readJson('data/references.json').map((reference) => reference.id))
  const ontology = readJson('data/navigation/atlas-ontology.json')
  const generatedFileLedger = readJson('data/registry/generated-files.json')
  const resolutions = new Map(readJson('data/sources/pbdb-taxon-resolution.json').resolutions.map((entry) => [entry.entityId, entry]))
  const validateEntity = schemaValidator('data/schemas/entity.schema.json')
  const ids = entities.map((entity) => entity.id)
  const idSet = new Set(ids)
  const packageIds = new Set(registry.packages.map((entry) => entry.id))
  if (entities.length !== countTreeNodes(ontology)) failures.push(`entity registry has ${entities.length} entries; navigation ontology has ${countTreeNodes(ontology)}`)
  if (registry.entityCount !== entities.length) failures.push('package registry entityCount is stale')
  const registryPackageIds = [...packageIds].sort()
  const approvedPackageIds = [...packageInventoryBaseline.packageIds].sort()
  if (registry.packageCount !== registry.packages.length) failures.push('package registry packageCount is stale')
  if (JSON.stringify(registryPackageIds) !== JSON.stringify(approvedPackageIds)) failures.push('package inventory changed without updating the reviewed package-inventory baseline')
  if (!unique(ids)) failures.push('entity registry IDs must be unique')
  if (!unique([...packageIds])) failures.push('package IDs must be unique')
  const generatedCanonicalOverlap = generatedFileLedger.canonicalInputs.filter((path) => generatedFileLedger.generatedFiles.includes(path))
  if (generatedCanonicalOverlap.length) failures.push(`generated files cannot also be canonical inputs: ${generatedCanonicalOverlap.join(', ')}`)
  if (registry.schemaVersion !== 5 || registry.schemaStatus !== 'candidate') failures.push('package registry must use candidate schema v5')
  for (const entity of entities) {
    failures.push(...schemaFailure(validateEntity, entity, `entity ${entity.id}`))
    if (entity.parentId && !idSet.has(entity.parentId)) failures.push(`entity ${entity.id}: unknown parent ${entity.parentId}`)
    if (!packageIds.has(entity.packageId)) failures.push(`entity ${entity.id}: unknown package ${entity.packageId}`)
    if (registry.entityToPackage[entity.id] !== entity.packageId) failures.push(`entity ${entity.id}: entityToPackage is stale`)
    for (const descendantId of entity.compositionScope.descendantEntityIds) if (!idSet.has(descendantId)) failures.push(`entity ${entity.id}: unknown descendant ${descendantId}`)
    for (const referenceId of entity.referenceIds) if (!references.has(referenceId)) failures.push(`entity ${entity.id}: unknown reference ${referenceId}`)
    const resolution = resolutions.get(entity.id)
    if (!resolution) failures.push(`entity ${entity.id}: missing PBDB resolution`)
    else if (resolution.resolutionStatus === 'resolved' && entity.externalIds.pbdb !== resolution.pbdbId) failures.push(`entity ${entity.id}: PBDB ID differs from the pinned resolution`)
    else if (resolution.resolutionStatus === 'unresolved' && entity.externalIds.pbdb) failures.push(`entity ${entity.id}: unresolved PBDB concept publishes an external ID`)
    if (entity.entityKind === 'taxon' && resolution?.resolutionStatus !== 'resolved' && entity.contentLevel === 'dossier' && entity.dataAvailability.ecology === 'not-applicable') failures.push(`entity ${entity.id}: unresolved taxon must not make ecology not-applicable`)
    if (entity.contentLevel === 'full-profile' && entity.dataAvailability.narrativeProfile !== 'available') failures.push(`entity ${entity.id}: full-profile content level requires a narrative profile`)
    if (entity.temporalRange.olderMa < entity.temporalRange.youngerMa) failures.push(`entity ${entity.id}: temporal range is reversed`)
  }
  for (const packageEntry of registry.packages) {
    const count = entities.filter((entity) => entity.packageId === packageEntry.id).length
    if (packageEntry.entityCount !== count) failures.push(`package ${packageEntry.id}: entityCount is stale`)
    if (packageEntry.platformMaturity !== 'published') failures.push(`package ${packageEntry.id}: generated release packages must be platform-published`)
    if (packageEntry.automatedReviewStatus !== 'passed') failures.push(`package ${packageEntry.id}: automated validation must pass before publication`)
    if (!scientificMaturityOrder.includes(packageEntry.scientificMaturity)) failures.push(`package ${packageEntry.id}: invalid scientificMaturity`)
    if (packageEntry.id === 'atlas-core' && packageEntry.scientificMaturity !== 'structured') failures.push('package atlas-core: scientificMaturity must be structured')
    if (packageEntry.scientificMaturity === 'published' && !completedReviewStatuses.has(packageEntry.reviewStatus)) failures.push(`package ${packageEntry.id}: published maturity requires a completed maintainer review`)
  }
  return failures
}

function packageFailures() {
  const failures = []
  const registry = readJson('data/registry/package-registry.json')
  const entities = readJson('data/registry/entities/entities.json')
  const validatePackage = schemaValidator('data/schemas/package.schema.json')
  const validateRange = schemaValidator('data/schemas/range-evidence.schema.json')
  const validateTranslation = schemaValidator('data/schemas/translation.schema.json')
  const validatePhylogeny = schemaValidator('data/schemas/phylogeny.schema.json')
  const validatePhylogenyStatus = schemaValidator('data/schemas/phylogeny-status.schema.json')
  const validateResearchExamples = schemaValidator('data/schemas/research-examples.schema.json')
  const validateReference = schemaValidator('data/schemas/reference.schema.json')
  const validateCalibration = schemaValidator('data/schemas/calibration.schema.json')
  const validateQueryLedger = schemaValidator('data/schemas/query-ledger.schema.json')
  const referencesById = new Map(readJson('data/references.json').map((reference) => [reference.id, reference]))
  const canonicalRanges = readJson('data/ranges/range-evidence.json')
  const canonicalRangeIds = new Set(canonicalRanges.map((range) => range.id))
  for (const entry of registry.packages) {
    const path = `${entry.canonicalPath}/package.json`
    if (!existsSync(join(rootDir, path))) {
      failures.push(`package ${entry.id}: missing ${path}`)
      continue
    }
    const packageData = readJson(path)
    failures.push(...schemaFailure(validatePackage, packageData, `package ${entry.id}`))
    if (packageData.id !== entry.id) failures.push(`package ${entry.id}: package.json ID mismatch`)
    for (const field of ['platformMaturity', 'scientificMaturity', 'automatedReviewStatus', 'reviewStatus']) {
      if (packageData[field] !== entry[field]) failures.push(`package ${entry.id}: ${field} does not match the package registry`)
    }
    const expectedIds = entities.filter((entity) => entity.packageId === entry.id).map((entity) => entity.id)
    if (JSON.stringify(packageData.entityIds) !== JSON.stringify(expectedIds)) failures.push(`package ${entry.id}: entityIds are stale`)
    for (const source of Object.values(packageData.canonicalSources)) {
      const checkPath = source.includes('*') ? dirname(source) : source
      if (!existsSync(join(rootDir, checkPath))) failures.push(`package ${entry.id}: missing canonical source ${source}`)
    }
    for (const companion of ['provenance.json', 'review.json', 'query-ledger.json', 'references.json', 'research-examples.json', 'phylogeny/status.json']) {
      if (!existsSync(join(rootDir, entry.canonicalPath, companion))) failures.push(`package ${entry.id}: missing ${companion}`)
    }
    const phylogenyStatus = readJson(`${entry.canonicalPath}/phylogeny/status.json`)
    failures.push(...schemaFailure(validatePhylogenyStatus, phylogenyStatus, `package ${entry.id} phylogeny status`))
    if (phylogenyStatus.packageId !== entry.id) failures.push(`package ${entry.id}: phylogeny status packageId mismatch`)
    if (phylogenyStatus.status === 'available' && !existsSync(join(rootDir, entry.canonicalPath, phylogenyStatus.topologyPath))) failures.push(`package ${entry.id}: published topology path does not exist`)
    for (const entityId of phylogenyStatus.scopeEntityIds) if (!expectedIds.includes(entityId)) failures.push(`package ${entry.id}: phylogeny scope references out-of-package entity ${entityId}`)
    const researchExamples = readJson(`${entry.canonicalPath}/research-examples.json`)
    failures.push(...schemaFailure(validateResearchExamples, researchExamples, `package ${entry.id} research examples`))
    if (researchExamples.packageId !== entry.id) failures.push(`package ${entry.id}: research examples packageId mismatch`)
    const allClaimIds = new Set(readJson('data/evidence/claims.json').map((claim) => claim.id))
    for (const example of researchExamples.examples) {
      for (const entityId of example.entityIds) if (!expectedIds.includes(entityId)) failures.push(`package ${entry.id} research example ${example.id}: out-of-package entity ${entityId}`)
      for (const claimId of example.claimIds) if (!allClaimIds.has(claimId)) failures.push(`package ${entry.id} research example ${example.id}: unknown claim ${claimId}`)
      if (example.evidenceStatus === 'available-with-limitations' && !example.claimIds.length) failures.push(`package ${entry.id} research example ${example.id}: published example requires claim links`)
    }
    const packageClaimIds = readJson(`${entry.canonicalPath}/evidence/claim-ids.json`)
    const packageReferences = readJson(`${entry.canonicalPath}/references.json`)
    for (const reference of packageReferences) failures.push(...schemaFailure(validateReference, reference, `package ${entry.id} reference ${reference.id}`))
    const packageReferenceIds = new Set(packageReferences.map((reference) => reference.id))
    const requiredReferenceIds = new Set([
      ...entities.filter((entity) => expectedIds.includes(entity.id)).flatMap((entity) => entity.referenceIds),
      ...readJson(`${entry.canonicalPath}/ranges.json`).flatMap((range) => range.referenceLocators.map((locator) => locator.referenceId)),
      ...readJson('data/evidence/claims.json').filter((claim) => packageClaimIds.includes(claim.id)).flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)),
    ])
    for (const referenceId of requiredReferenceIds) if (!packageReferenceIds.has(referenceId)) failures.push(`package ${entry.id}: reference subset omits ${referenceId}`)
    for (const referenceId of packageReferenceIds) if (!referencesById.has(referenceId)) failures.push(`package ${entry.id}: reference subset contains unknown ${referenceId}`)
    const queryLedger = readJson(`${entry.canonicalPath}/query-ledger.json`)
    failures.push(...schemaFailure(validateQueryLedger, queryLedger, `package ${entry.id} query ledger`))
    if (queryLedger.packageId !== entry.id) failures.push(`package ${entry.id}: query ledger packageId mismatch`)
    if (queryLedger.rowsAccepted + queryLedger.rowsOutsidePackage > queryLedger.rowsFetched) failures.push(`package ${entry.id}: query ledger row accounting exceeds rowsFetched`)
    if (queryLedger.completeness === 'complete' && queryLedger.upstreamReportedTotal !== queryLedger.rowsFetched) failures.push(`package ${entry.id}: complete query ledger must retain and match the upstream total`)
    if (entry.id === 'perissodactyla' && queryLedger.completeness !== 'complete') failures.push('package perissodactyla: flagship query ledger must preserve complete pagination')
    if (entry.id !== 'perissodactyla' && queryLedger.completeness === 'complete') failures.push(`package ${entry.id}: legacy bounded sample must not claim complete coverage`)
    if (packageClaimIds.length === 0 && entry.id !== 'atlas-core' && scientificMaturityAtLeast(packageData.scientificMaturity, 'source-linked')) failures.push(`package ${entry.id}: packages without claims cannot reach source-linked maturity`)
    const ranges = readJson(`${entry.canonicalPath}/ranges.json`)
    for (const range of ranges) {
      failures.push(...schemaFailure(validateRange, range, `package ${entry.id} range ${range.id}`))
      if (!canonicalRangeIds.has(range.id)) failures.push(`package ${entry.id} range ${range.id}: not present in canonical range evidence`)
      for (const locator of range.referenceLocators ?? []) if (!referencesById.has(locator.referenceId)) failures.push(`package ${entry.id} range ${range.id}: unknown reference ${locator.referenceId}`)
      if (range.evidenceLevel === 'legacy-display' && range.confidence === 'high') failures.push(`package ${entry.id} range ${range.id}: legacy display ranges cannot have high confidence`)
      if (range.evidenceLevel === 'literature-synthesized') {
        const hasCuratedRangeSource = range.referenceLocators.some((locator) => {
          const reference = referencesById.get(locator.referenceId)
          return scientificSourceRoles.has(reference?.sourceRole) && reference?.fitnessFor.includes('range') && reference?.metadataAssignment === 'curator-reviewed' && locator.locator
        })
        if (!hasCuratedRangeSource || !range.claimIds.length) failures.push(`package ${entry.id} range ${range.id}: literature synthesis requires a curator-reviewed range-fit primary/review source, locator and supports claim`)
      }
      if (range.evidenceLevel === 'expert-reviewed' && range.reviewStatus !== 'expert-reviewed') failures.push(`package ${entry.id} range ${range.id}: expert-reviewed evidence level requires expert review status`)
    }
    if (packageData.scientificMaturity === 'published') {
      for (const range of ranges) {
        if (!range.referenceLocators.some((locator) => scientificSourceRoles.has(referencesById.get(locator.referenceId)?.sourceRole) && referencesById.get(locator.referenceId)?.fitnessFor.includes('range') && referencesById.get(locator.referenceId)?.metadataAssignment === 'curator-reviewed')) failures.push(`package ${entry.id} range ${range.id}: published maturity requires curator-reviewed metadata for a range-fit primary study or systematic review`)
        if (!range.claimIds.length) failures.push(`package ${entry.id} range ${range.id}: published maturity requires claim linkage`)
      }
      const claims = readJson('data/evidence/claims.json').filter((claim) => packageClaimIds.includes(claim.id))
      for (const claim of claims) {
        if (!claim.referenceLinks.some((link) => link.relation === 'supports' && scientificSourceRoles.has(referencesById.get(link.referenceId)?.sourceRole) && referencesById.get(link.referenceId)?.fitnessFor.includes(claimFitness[claim.claimType]) && referencesById.get(link.referenceId)?.metadataAssignment === 'curator-reviewed' && (link.pages || link.figure || link.quoteLocator) && !/pending/i.test(link.pages ?? link.figure ?? link.quoteLocator ?? ''))) failures.push(`package ${entry.id} claim ${claim.id}: published maturity requires curator-reviewed fit primary/review metadata and a concrete locator`)
      }
      const effectiveReview = evaluatePackageReview(entry.id)
      if (!completedReviewStatuses.has(effectiveReview.effectiveReviewStatus)) failures.push(`package ${entry.id}: published maturity requires a current maintainer review`)
    }
    failures.push(...schemaFailure(validateTranslation, readJson(`${entry.canonicalPath}/locales/zh.json`), `package ${entry.id} Chinese locale`))
    const profilesPath = `${entry.canonicalPath}/profiles.json`
    const fieldLinksPath = `${entry.canonicalPath}/evidence/field-claim-links.json`
    if (existsSync(join(rootDir, profilesPath))) {
      if (!existsSync(join(rootDir, fieldLinksPath))) failures.push(`package ${entry.id}: profiles require field claim links`)
      else {
        const links = readJson(fieldLinksPath)
        const claimsById = new Map(readJson('data/evidence/claims.json').map((claim) => [claim.id, claim]))
        const profiles = readJson(profilesPath)
        for (const profile of profiles) {
          if (!links.some((link) => link.profileId === profile.id)) failures.push(`profile ${profile.id}: missing field claim link record`)
        }
        for (const link of links) {
          const profile = profiles.find((candidate) => candidate.id === link.profileId)
          const expectedFields = profile ? [
            'firstAppearance', 'lastAppearance', 'geography', 'overview', 'evidenceSummary', 'confidence',
            ...Object.keys(profile.ecology).map((key) => `ecology.${key}`),
            ...profile.traits.map((_, index) => `traits[${index}]`),
            ...(profile.regionalRanges ?? []).map((_, index) => `regionalRanges[${index}]`),
          ] : []
          for (const field of expectedFields) if (!link.fields[field]) failures.push(`profile ${link.profileId}: visible field ${field} has no claim link`)
          for (const [field, fieldLink] of Object.entries(link.fields)) {
            const claim = claimsById.get(fieldLink.claimId)
            if (!claim) failures.push(`profile ${link.profileId}/${field}: unknown field claim ${fieldLink.claimId}`)
            if (!fieldLink.sourceLocators?.length) failures.push(`profile ${link.profileId}/${field}: field claim has no source locator`)
            if (!['source-derived-fact', 'editorial-synthesis', 'automated-text', 'unavailable'].includes(fieldLink.contentOrigin)) failures.push(`profile ${link.profileId}/${field}: content origin is missing or invalid`)
            const expectedClaimType = field === 'firstAppearance' || field === 'lastAppearance' || field.startsWith('regionalRanges')
              ? 'fossil-range' : field === 'geography' ? 'biogeography' : field.startsWith('ecology.') ? 'ecology' : field.startsWith('traits') ? 'morphology' : 'taxonomy'
            if (fieldLink.relation !== 'supports' || fieldLink.claimType !== expectedClaimType || claim?.claimType !== expectedClaimType || claim?.subjectId !== `taxon:${link.profileId}`) failures.push(`profile ${link.profileId}/${field}: field requires a matching supports ${expectedClaimType} claim`)
          }
        }
      }
    } else if (existsSync(join(rootDir, fieldLinksPath))) failures.push(`package ${entry.id}: field claim links require profiles`)
    if (entry.id === 'perissodactyla') {
      failures.push(...schemaFailure(validatePhylogeny, readJson(`${entry.canonicalPath}/phylogeny/hypothesis.json`), 'Perissodactyla phylogeny'))
      const calibrations = readJson(`${entry.canonicalPath}/phylogeny/calibrations.json`)
      for (const calibration of calibrations.estimates) failures.push(...schemaFailure(validateCalibration, calibration, `calibration ${calibration.id}`))
      const flagshipStory = readJson('data/stories.json').find((story) => story.id === 'rise-and-fall-perissodactyls')
      const claimsByIdForStory = new Map(readJson('data/evidence/claims.json').map((claim) => [claim.id, claim]))
      if (!flagshipStory || flagshipStory.evidenceStatus !== 'available-with-limitations') failures.push('Perissodactyla flagship story must be published with explicit limitations')
      else for (const step of flagshipStory.steps) {
        if (!step.claimLinks.length) failures.push(`Perissodactyla flagship story step ${step.id}: missing claim link`)
        for (const link of step.claimLinks) {
          const claim = claimsByIdForStory.get(link.claimId)
          if (!claim?.referenceLinks.some((referenceLink) => referenceLink.relation === 'supports')) failures.push(`Perissodactyla flagship story step ${step.id}: claim ${link.claimId} has no supporting reference`)
        }
      }
    }
  }
  return failures
}

function claimsFailures() {
  const failures = []
  const claims = readJson('data/evidence/claims.json')
  const datasetVersion = readJson('data/registry/package-registry.json').version
  const references = new Set(readJson('data/references.json').map((reference) => reference.id))
  const rationalesZh = readJson('data/evidence/claim-rationales.zh.json')
  const validateClaim = schemaValidator('data/schemas/claim.schema.json')
  if (!unique(claims.map((claim) => claim.id))) failures.push('claim IDs must be unique')
  for (const claim of claims) {
    failures.push(...schemaFailure(validateClaim, claim, `claim ${claim.id}`))
    if (!rationalesZh[claim.id] || rationalesZh[claim.id].length < 20) failures.push(`claim ${claim.id}: missing Chinese confidence rationale`)
    for (const link of claim.referenceLinks) if (!references.has(link.referenceId)) failures.push(`claim ${claim.id}: unknown reference ${link.referenceId}`)
    if (claim.claimKind === 'scientific' && !claim.referenceLinks.some((link) => link.relation === 'supports')) failures.push(`claim ${claim.id}: scientific claims require at least one supports relation`)
    if (claim.reviewedBy === 'Evo Atlas automated evidence decomposition' && !claim.reviewedAgainstReferenceVersion.endsWith(`at ${datasetVersion}`)) failures.push(`claim ${claim.id}: automated decomposition is stale for ${datasetVersion}`)
    if (claim.referenceLinks.some((link) => link.relation === 'contradicts') && claim.confidence !== 'contested' && !/contradict|conflict|contested/i.test(claim.confidenceRationale)) failures.push(`claim ${claim.id}: contradictory evidence requires contested confidence or an explicit rationale`)
  }
  if (Object.keys(rationalesZh).length !== claims.length) failures.push('Chinese claim rationale count must match claim count')
  return failures
}

function translationFailures() {
  const failures = []
  const entities = readJson('data/registry/entities/entities.json')
  const profiles = readJson('data/registry/taxon-profiles.json')
  const events = readJson('data/events.json')
  const stories = readJson('data/stories.json')
  const timeScale = readJson('data/time-scale.json')
  for (const entity of entities) if (!entity.names.zh || !entity.definition.zh) failures.push(`entity ${entity.id}: incomplete Chinese registry fields`)
  for (const profile of profiles) if (!profile.commonNameZh) failures.push(`profile ${profile.id}: missing Chinese name`)
  for (const event of events) if (!event.titleZh) failures.push(`event ${event.id}: missing Chinese title`)
  for (const story of stories) if (!story.titleZh) failures.push(`story ${story.id}: missing Chinese title`)
  for (const unit of timeScale.units) if (!unit.namZh) failures.push(`time unit ${unit.oid}: missing Chinese name`)
  return failures
}

function provenanceFailures() {
  const failures = []
  const registry = readJson('data/registry/package-registry.json')
  const references = new Set(readJson('data/references.json').map((reference) => reference.id))
  const media = readJson('data/media.json')
  const mapMetadata = readJson('data/period-map-metadata.json')
  const mapProvenance = readJson('data/paleogeography/provenance.json')
  const source = readJson('data/sources/pbdb-occurrence-bundle.json')
  for (const entry of registry.packages) {
    const provenance = readJson(`${entry.canonicalPath}/provenance.json`)
    if (provenance.packageId !== entry.id) failures.push(`package ${entry.id}: provenance packageId mismatch`)
    for (const input of provenance.canonicalInputs) if (!existsSync(join(rootDir, input))) failures.push(`package ${entry.id}: missing provenance input ${input}`)
  }
  for (const asset of media) {
    if (!asset.sourceUrl?.startsWith('https://')) failures.push(`media ${asset.id}: HTTPS source URL required`)
    if (!asset.licenseNote) failures.push(`media ${asset.id}: license note required`)
  }
  const mapSnapshots = new Map(mapProvenance.snapshots.map((snapshot) => [snapshot.period, snapshot]))
  if (mapProvenance.dataset?.license !== 'CC-BY-4.0' || !mapProvenance.dataset?.doi || !mapProvenance.processing?.scriptCommit) failures.push('paleogeography source, license or processing provenance is incomplete')
  if (!existsSync(join(rootDir, mapProvenance.processing?.script ?? ''))) failures.push('paleogeography processing script is missing')
  for (const metadata of mapMetadata) {
    const snapshot = mapSnapshots.get(metadata.name)
    const requiredLayers = ['coastlines', 'platePolygons', 'plateBoundaries', 'continentalPolygons', 'continentOceanBoundaries', 'staticPolygons']
    const layersComplete = requiredLayers.every((layerId) => {
      const layer = snapshot?.layers?.[layerId]
      return layer && existsSync(join(rootDir, layer.geometryFile ?? '')) && layer.geometrySha256 && layer.sourceSha256
    })
    if (metadata.mapLayerStatus === 'available' && (!snapshot || !layersComplete)) {
      failures.push(`${metadata.name}: available map geometry is missing checked-in source, processing or checksum provenance`)
    }
  }
  if (!source.endpoint?.startsWith('https://') || !source.fetchedAt || !source.queryTemplate) failures.push('occurrence snapshot provenance is incomplete')
  if (!references.has('pbdb-api-2016')) failures.push('PBDB source reference is missing')
  return failures
}

function reviewFailures() {
  const failures = []
  const registry = readJson('data/registry/package-registry.json')
  const validateReview = schemaValidator('data/schemas/package-review.schema.json')
  for (const entry of registry.packages) {
    const review = readJson(`${entry.canonicalPath}/review.json`)
    failures.push(...schemaFailure(validateReview, review, `package review ${entry.id}`))
    if (review.subjectId !== `package:${entry.id}`) failures.push(`package ${entry.id}: review subject mismatch`)
    if (entry.reviewStatus !== review.status) failures.push(`package ${entry.id}: reviewStatus does not match review.json`)
    const effective = evaluatePackageReview(entry.id)
    if (completedReviewStatuses.has(review.status) && effective.freshness !== 'current') failures.push(`package ${entry.id}: completed maintainer review is stale for the current content digest`)
  }
  return failures
}

const validators = {
  registry: registryFailures,
  packages: packageFailures,
  claims: claimsFailures,
  translations: translationFailures,
  provenance: provenanceFailures,
  review: reviewFailures,
}

export function validatePlatform(scope = 'all') {
  const selected = scope === 'all' ? Object.keys(validators) : [scope]
  return selected.flatMap((name) => {
    if (!validators[name]) return [`unknown platform validation scope ${name}`]
    return validators[name]()
  })
}

export function sourceRepositoryBytes() {
  const excluded = new Set(['.git', 'node_modules', 'dist', 'dist-mobile', 'test-results', 'playwright-report'])
  const generatedNativePaths = new Set([
    'android/.gradle',
    'android/app/build',
    'android/app/src/main/assets/public',
    'ios/App/App/public',
    'ios/DerivedData',
  ])
  function filesBelow(path, relativePath = '') {
    if (!statSync(path).isDirectory()) return [path]
    return readdirSync(path).flatMap((name) => {
      const nextRelative = relativePath ? `${relativePath}/${name}` : name
      if (excluded.has(name) || nextRelative === 'public/data' || generatedNativePaths.has(nextRelative)) return []
      return filesBelow(join(path, name), nextRelative)
    })
  }
  return filesBelow(rootDir).reduce((sum, path) => sum + readFileSync(path).byteLength, 0)
}
