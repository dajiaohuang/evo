import Ajv2020 from 'ajv/dist/2020.js'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const unique = (items) => new Set(items).size === items.length

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
  const references = new Set(readJson('data/references.json').map((reference) => reference.id))
  const resolutions = new Map(readJson('data/sources/pbdb-taxon-resolution.json').resolutions.map((entry) => [entry.entityId, entry]))
  const validateEntity = schemaValidator('data/schemas/entity.schema.json')
  const ids = entities.map((entity) => entity.id)
  const idSet = new Set(ids)
  const packageIds = new Set(registry.packages.map((entry) => entry.id))
  if (entities.length !== 179) failures.push(`entity registry has ${entities.length} entries; expected 179`)
  if (registry.entityCount !== entities.length) failures.push('package registry entityCount is stale')
  if (registry.packageCount !== 24 || registry.packages.length !== 24) failures.push('package registry must contain 24 packages')
  if (!unique(ids)) failures.push('entity registry IDs must be unique')
  if (!unique([...packageIds])) failures.push('package IDs must be unique')
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
    if (entity.temporalRange.olderMa < entity.temporalRange.youngerMa) failures.push(`entity ${entity.id}: temporal range is reversed`)
  }
  for (const packageEntry of registry.packages) {
    const count = entities.filter((entity) => entity.packageId === packageEntry.id).length
    if (packageEntry.entityCount !== count) failures.push(`package ${packageEntry.id}: entityCount is stale`)
    const expectedMaturity = packageEntry.id === 'atlas-core' ? 'core' : 'gold-v2'
    if (packageEntry.maturity !== expectedMaturity) failures.push(`package ${packageEntry.id}: maturity must be ${expectedMaturity}`)
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
  const validateCalibration = schemaValidator('data/schemas/calibration.schema.json')
  for (const entry of registry.packages) {
    const path = `${entry.canonicalPath}/package.json`
    if (!existsSync(join(rootDir, path))) {
      failures.push(`package ${entry.id}: missing ${path}`)
      continue
    }
    const packageData = readJson(path)
    failures.push(...schemaFailure(validatePackage, packageData, `package ${entry.id}`))
    if (packageData.id !== entry.id) failures.push(`package ${entry.id}: package.json ID mismatch`)
    if (packageData.maturity !== entry.maturity) failures.push(`package ${entry.id}: maturity does not match the package registry`)
    const expectedIds = entities.filter((entity) => entity.packageId === entry.id).map((entity) => entity.id)
    if (JSON.stringify(packageData.entityIds) !== JSON.stringify(expectedIds)) failures.push(`package ${entry.id}: entityIds are stale`)
    for (const source of Object.values(packageData.canonicalSources)) {
      const checkPath = source.includes('*') ? dirname(source) : source
      if (!existsSync(join(rootDir, checkPath))) failures.push(`package ${entry.id}: missing canonical source ${source}`)
    }
    for (const companion of ['provenance.json', 'review.json']) {
      if (!existsSync(join(rootDir, entry.canonicalPath, companion))) failures.push(`package ${entry.id}: missing ${companion}`)
    }
    const ranges = readJson(`${entry.canonicalPath}/ranges.json`)
    for (const range of ranges) failures.push(...schemaFailure(validateRange, range, `package ${entry.id} range ${range.id}`))
    failures.push(...schemaFailure(validateTranslation, readJson(`${entry.canonicalPath}/locales/zh.json`), `package ${entry.id} Chinese locale`))
    if (entry.id === 'perissodactyla') {
      failures.push(...schemaFailure(validatePhylogeny, readJson(`${entry.canonicalPath}/phylogeny/hypothesis.json`), 'Perissodactyla phylogeny'))
      const calibrations = readJson(`${entry.canonicalPath}/phylogeny/calibrations.json`)
      for (const calibration of calibrations.estimates) failures.push(...schemaFailure(validateCalibration, calibration, `calibration ${calibration.id}`))
      const links = readJson(`${entry.canonicalPath}/evidence/field-claim-links.json`)
      const claimIds = new Set(readJson('data/evidence/claims.json').map((claim) => claim.id))
      for (const link of links) for (const claimId of Object.values(link.fields)) if (!claimIds.has(claimId)) failures.push(`profile ${link.profileId}: unknown field claim ${claimId}`)
    }
  }
  return failures
}

function claimsFailures() {
  const failures = []
  const claims = readJson('data/evidence/claims.json')
  const references = new Set(readJson('data/references.json').map((reference) => reference.id))
  const rationalesZh = readJson('data/evidence/claim-rationales.zh.json')
  const validateClaim = schemaValidator('data/schemas/claim.schema.json')
  if (!unique(claims.map((claim) => claim.id))) failures.push('claim IDs must be unique')
  for (const claim of claims) {
    failures.push(...schemaFailure(validateClaim, claim, `claim ${claim.id}`))
    if (!rationalesZh[claim.id] || rationalesZh[claim.id].length < 20) failures.push(`claim ${claim.id}: missing Chinese confidence rationale`)
    for (const link of claim.referenceLinks) if (!references.has(link.referenceId)) failures.push(`claim ${claim.id}: unknown reference ${link.referenceId}`)
  }
  if (Object.keys(rationalesZh).length !== claims.length) failures.push('Chinese claim rationale count must match claim count')
  return failures
}

function translationFailures() {
  const failures = []
  const entities = readJson('data/registry/entities/entities.json')
  const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
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
  for (const metadata of mapMetadata) {
    if (metadata.mapLayerStatus === 'available') failures.push(`${metadata.name}: map geometry cannot be available without a checked-in provenance record`)
  }
  if (!source.endpoint?.startsWith('https://') || !source.fetchedAt || !source.queryTemplate) failures.push('occurrence snapshot provenance is incomplete')
  if (!references.has('pbdb-api-2016')) failures.push('PBDB source reference is missing')
  return failures
}

function reviewFailures() {
  const failures = []
  const registry = readJson('data/registry/package-registry.json')
  const entities = readJson('data/registry/entities/entities.json')
  const validateReview = schemaValidator('data/schemas/review.schema.json')
  for (const entry of registry.packages) {
    const review = readJson(`${entry.canonicalPath}/review.json`)
    failures.push(...schemaFailure(validateReview, review, `package review ${entry.id}`))
    if (review.subjectId !== `package:${entry.id}`) failures.push(`package ${entry.id}: review subject mismatch`)
  }
  for (const entity of entities) {
    if (entity.review.scientificPeerReview && entity.review.status !== 'expert-reviewed') failures.push(`entity ${entity.id}: scientific peer review requires expert-reviewed status`)
    if (entity.review.status === 'automated-audit-passed' && entity.review.scientificPeerReview) failures.push(`entity ${entity.id}: automated review must not claim scientific peer review`)
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
  const excluded = new Set(['.git', 'node_modules', 'dist', 'test-results', 'playwright-report'])
  function filesBelow(path, relativePath = '') {
    if (!statSync(path).isDirectory()) return [path]
    return readdirSync(path).flatMap((name) => {
      const nextRelative = relativePath ? `${relativePath}/${name}` : name
      if (excluded.has(name) || nextRelative === 'public/data') return []
      return filesBelow(join(path, name), nextRelative)
    })
  }
  return filesBelow(rootDir).reduce((sum, path) => sum + readFileSync(path).byteLength, 0)
}
