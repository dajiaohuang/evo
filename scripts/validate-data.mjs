import Ajv2020 from 'ajv/dist/2020.js'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { collectDataSummary, flattenTree, readJson, rootDir } from './data-lib.mjs'
import { validatePlatform } from './platform-validation-lib.mjs'
import { assignOccurrencePackage } from './occurrence-package-map.mjs'
import { descendantTaxonScope, normalizeTaxonName, occurrenceMatchMethod } from './taxon-linkage.mjs'

const failures = []
failures.push(...validatePlatform('all'))
const check = (condition, message) => { if (!condition) failures.push(message) }
const unique = (items) => new Set(items).size === items.length
const sameValues = (left, right) => JSON.stringify(left) === JSON.stringify(right)

function webpInfo(bytes) {
  if (bytes.subarray(0, 4).toString('ascii') !== 'RIFF' || bytes.subarray(8, 12).toString('ascii') !== 'WEBP') return null
  const chunks = []
  let width = null
  let height = null
  for (let offset = 12; offset + 8 <= bytes.length;) {
    const type = bytes.subarray(offset, offset + 4).toString('ascii')
    const length = bytes.readUInt32LE(offset + 4)
    chunks.push(type)
    if (type === 'VP8X' && length >= 10) {
      width = bytes.readUIntLE(offset + 12, 3) + 1
      height = bytes.readUIntLE(offset + 15, 3) + 1
    }
    offset += 8 + length + (length % 2)
  }
  return { width, height, chunks }
}

const periodMetadata = readJson('data/period-map-metadata.json')
const timeScale = readJson('data/time-scale.json')
const references = readJson('data/references.json')
const places = readJson('data/places.json')
const media = readJson('data/media.json')
const calibrations = readJson('data/packages/mammalia/perissodactyla/phylogeny/calibrations.json')
const phylogenyPackage = readJson('data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const profiles = readJson('data/registry/taxon-profiles.json')
const perissodactylProfiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const ontology = readJson('data/navigation/atlas-ontology.json')
const treeEvidence = readJson('data/tree/evidence.json')
const claims = readJson('data/evidence/claims.json')
const claimRationalesZh = readJson('data/evidence/claim-rationales.zh.json')
const editorialDecisions = readJson('data/evidence/editorial-decisions.json')
const entityIndex = readJson('data/indexes/entity-occurrence-index.json')
const entityLinkageCoverage = readJson('data/indexes/entity-linkage-coverage.json')
const entityLinkageBaseline = readJson('data/indexes/entity-linkage-baseline.json')
const canonicalRanges = readJson('data/ranges/range-evidence.json')
const taxonResolution = readJson('data/sources/pbdb-taxon-resolution.json')
const sourceMetadata = readJson('data/sources/pbdb-occurrence-bundle.json')
const perissodactylaSnapshot = readJson('data/sources/pbdb-targeted-perissodactyla-occurrences-v1.json')
const manifest = readJson('data/manifest.json')
const packageMetadata = readJson('package.json')
const packageIds = new Set(readJson('data/registry/package-registry.json').packages.map((entry) => entry.id))
const registryEntities = readJson('data/registry/entities/entities.json')
const registryEntityIds = new Set(registryEntities.map((entity) => entity.id))
const exactPackageByTaxonId = new Map(registryEntities.flatMap((entity) => entity.externalIds.pbdb ? [[entity.externalIds.pbdb, entity.packageId]] : []))

const ajv = new Ajv2020({ allErrors: true, strict: true })
const validators = {
  occurrence: ajv.compile(readJson('data/schemas/occurrence.schema.json')),
  reference: ajv.compile(readJson('data/schemas/reference.schema.json')),
  claim: ajv.compile(readJson('data/schemas/claim.schema.json')),
  profile: ajv.compile(readJson('data/schemas/profile.schema.json')),
  event: ajv.compile(readJson('data/schemas/event.schema.json')),
  story: ajv.compile(readJson('data/schemas/story.schema.json')),
  media: ajv.compile(readJson('data/schemas/media.schema.json')),
}

function validateSchema(kind, record, label) {
  const validate = validators[kind]
  if (!validate(record)) {
    const detail = validate.errors?.slice(0, 3).map((error) => `${error.instancePath || '/'} ${error.message}`).join('; ')
    failures.push(`${label}: schema violation: ${detail}`)
  }
}

for (const reference of references) validateSchema('reference', reference, `reference ${reference.id ?? '<missing>'}`)
for (const profile of profiles) validateSchema('profile', profile, `profile ${profile.id ?? '<missing>'}`)
for (const event of events) validateSchema('event', event, `event ${event.id ?? '<missing>'}`)
for (const story of stories) validateSchema('story', story, `story ${story.id ?? '<missing>'}`)
for (const asset of media) validateSchema('media', asset, `media ${asset.id ?? '<missing>'}`)
for (const claim of claims) validateSchema('claim', claim, `claim ${claim.id ?? '<missing>'}`)

const periodUnits = timeScale.units.filter((unit) => unit.itp === 'period')
check(periodUnits.length > 0, 'time-scale.json must contain periods')
check(timeScale.earthAgeMa === 4567, 'time scale must span 4,567 Ma')
check(timeScale.version === 'ICS-2026-06', 'time scale version must be explicit')
check(timeScale.schemaVersion === 2 && timeScale.officialVersion === '2026/06', 'time scale must identify the official ICS 2026/06 structure')
check(timeScale.source?.referenceId === 'ics-2026-06' && /ChronostratChart2026-06\.pdf$/.test(timeScale.source?.url ?? ''), 'time scale must retain the official ICS source locator')
check(/i-c-stratigraphy\/chart\/main\/chart\.ttl$/.test(timeScale.source?.machineReadableUrl ?? ''), 'time scale must retain the official machine-readable ICS source')
check(timeScale.source?.license === 'https://creativecommons.org/licenses/by/4.0/', 'time scale must retain the ICS CC BY 4.0 license')
check(unique(timeScale.boundaries.map((boundary) => boundary.id)), 'time-scale boundary IDs must be unique')
const boundariesByValue = new Map(timeScale.boundaries.map((boundary) => [boundary.valueMa, boundary]))
for (const boundary of timeScale.boundaries) {
  check(boundary.officialVersion === '2026/06', `time boundary ${boundary.id}: officialVersion must be 2026/06`)
  check(typeof boundary.approximate === 'boolean' && typeof boundary.definitionType === 'string' && boundary.sourceLocator, `time boundary ${boundary.id}: definition metadata is incomplete`)
}
for (const [valueMa, uncertaintyMa] of [[4031, 3], [486.85, 1.5], [443.1, 0.9], [419.62, 1.36]]) {
  const boundary = boundariesByValue.get(valueMa)
  check(boundary?.uncertaintyMa === uncertaintyMa && boundary.approximate === false, `official ICS 2026/06 boundary ${valueMa} ± ${uncertaintyMa} Ma is missing`)
}
check(unique(timeScale.units.map((unit) => unit.oid)), 'time-scale unit IDs must be unique')
check(timeScale.units.filter((unit) => unit.itp === 'epoch').length >= 38, 'time scale must include the ICS epoch/series layer')
check(timeScale.units.filter((unit) => unit.itp === 'age').length >= 101, 'time scale must include the ICS age/stage layer')
check(sameValues([...new Set(timeScale.units.map((unit) => unit.itp))].sort(), ['age', 'eon', 'epoch', 'era', 'period']), 'time scale must expose eon, era, period, epoch and age ranks')
check(unique(periodMetadata.map((period) => period.name)), 'period map metadata names must be unique')
check(sameValues([...periodUnits.map((unit) => unit.nam)].sort(), [...periodMetadata.map((period) => period.name)].sort()), 'time scale and period map metadata names must match')
for (const metadata of periodMetadata) {
  check(!['eag', 'lag', 'color', 'era', 'eon'].some((key) => Object.hasOwn(metadata, key)), `${metadata.name}: map metadata must not duplicate time-scale facts`)
  check(['available', 'withheld-pending-provenance'].includes(metadata.mapLayerStatus), `${metadata.name}: invalid mapLayerStatus`)
  check(typeof metadata.descriptionZh === 'string' && metadata.descriptionZh.length > 0, `${metadata.name}: Chinese description is required`)
}
for (const unit of timeScale.units) {
  check(typeof unit.namZh === 'string' && unit.namZh.length > 0, `${unit.oid}: Chinese name is required`)
  if (['eon', 'era', 'period'].includes(unit.itp)) {
    check(boundariesByValue.has(unit.eag) && boundariesByValue.has(unit.lag), `${unit.oid}: eag and lag must project versioned boundary records`)
  } else {
    check(/^gtsd:[A-Za-z0-9]+$/.test(unit.sourceId ?? ''), `${unit.oid}: official ICS concept ID is required`)
    check(/^gtsd:[A-Za-z0-9]+$/.test(unit.sourceParentId ?? ''), `${unit.oid}: official ICS parent concept ID is required`)
    check(typeof unit.eagApproximate === 'boolean' && typeof unit.lagApproximate === 'boolean', `${unit.oid}: boundary approximation flags are required`)
    check(typeof unit.ratifiedGssp === 'boolean', `${unit.oid}: GSSP ratification flag is required`)
    check([unit.eagUncertaintyMa, unit.lagUncertaintyMa].every((value) => value === null || (typeof value === 'number' && value >= 0)), `${unit.oid}: boundary uncertainty must be null or non-negative`)
    check(!/\s/.test(unit.namZh), `${unit.oid}: Chinese interval name must not contain stray whitespace`)
  }
}

check(manifest.appVersion === packageMetadata.version, 'manifest appVersion must match package.json version')
check(manifest.datasetVersion !== manifest.appVersion, 'datasetVersion and appVersion must remain separate identifiers')
check(manifest.schemaVersion === 5, 'manifest schemaVersion must be 5')
check(!Object.hasOwn(manifest, 'commitSha'), 'dataset manifest must not contain deployment-specific commit metadata')
for (let index = 0; index < periodUnits.length; index += 1) {
  const period = periodUnits[index]
  check(period.eag > period.lag, `${period.nam}: older bound must exceed younger bound`)
  if (index < periodUnits.length - 1) check(Math.abs(period.lag - periodUnits[index + 1].eag) < 0.001, `${period.nam}: boundary must meet ${periodUnits[index + 1].nam}`)
}

const timeUnitIds = new Set(timeScale.units.map((unit) => unit.oid))
const timeUnitById = new Map(timeScale.units.map((unit) => [unit.oid, unit]))
for (const unit of timeScale.units) {
  if (!unit.pid) continue
  check(timeUnitIds.has(unit.pid), `time unit ${unit.oid}: unknown parent ${unit.pid}`)
  const parent = timeUnitById.get(unit.pid)
  if (parent) check(unit.eag <= parent.eag && unit.lag >= parent.lag, `time unit ${unit.oid}: range falls outside parent ${unit.pid}`)
  const visited = new Set([unit.oid])
  let cursor = parent
  while (cursor) {
    check(!visited.has(cursor.oid), `time unit ${unit.oid}: parent cycle through ${cursor.oid}`)
    if (visited.has(cursor.oid)) break
    visited.add(cursor.oid)
    cursor = cursor.pid ? timeUnitById.get(cursor.pid) : undefined
  }
}

const detailedSiblingGroups = Map.groupBy(timeScale.units.filter((unit) => ['epoch', 'age'].includes(unit.itp)), (unit) => `${unit.itp}:${unit.pid}`)
for (const [groupId, siblings] of detailedSiblingGroups) {
  const ordered = siblings.toSorted((left, right) => right.eag - left.eag)
  const parent = timeUnitById.get(ordered[0].pid)
  if (!parent) continue
  check(Math.abs(ordered[0].eag - parent.eag) < 0.001, `${groupId}: oldest child must begin at the parent boundary`)
  check(Math.abs(ordered.at(-1).lag - parent.lag) < 0.001, `${groupId}: youngest child must end at the parent boundary`)
  for (let index = 0; index < ordered.length - 1; index += 1) {
    check(Math.abs(ordered[index].lag - ordered[index + 1].eag) < 0.001, `${groupId}: ${ordered[index].oid} must meet ${ordered[index + 1].oid}`)
  }
}

const referenceIdsArray = references.map((reference) => reference.id)
const eventIdsArray = events.map((event) => event.id)
const profileIdsArray = profiles.map((profile) => profile.id)
const referenceIds = new Set(referenceIdsArray)
const eventIds = new Set(eventIdsArray)
const profileIds = new Set(profileIdsArray)
const navigationIdsForStories = new Set(flattenTree(ontology).map((node) => node.id))
const referencesById = new Map(references.map((reference) => [reference.id, reference]))
const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
check(unique(referenceIdsArray), 'reference IDs must be unique')
check(unique(eventIdsArray), 'event IDs must be unique')
check(unique(profileIdsArray), 'taxon profile IDs must be unique')
check(unique(profiles.map((profile) => profile.treeNodeId)), 'taxon profile treeNodeIds must be unique')
for (const profile of profiles) check(profile.id === profile.treeNodeId, `taxon ${profile.id}: profile ID must equal treeNodeId`)
check(unique(places.map((place) => place.code)), 'place codes must be unique')
check(unique(media.map((asset) => asset.id)), 'media IDs must be unique')
check(unique(stories.map((story) => story.id)), 'story IDs must be unique')
check(unique(claims.map((claim) => claim.id)), 'claim IDs must be unique')
check(unique(editorialDecisions.map((decision) => decision.id)), 'editorial decision IDs must be unique')
for (const reference of references) {
  if (reference.type === 'paper') {
    check(Number.isInteger(reference.publishedYear), `paper ${reference.id}: publishedYear is required`)
    check(Boolean(reference.doi), `paper ${reference.id}: DOI is required`)
  } else {
    check(Boolean(reference.publishedYear || reference.accessedAt || reference.version), `reference ${reference.id}: publication, access or version date is required`)
  }
}

const validateReferences = (owner, ids) => {
  for (const id of ids ?? []) check(referenceIds.has(id), `${owner}: unknown reference ${id}`)
}
for (const profile of profiles) {
  validateReferences(`taxon ${profile.id}`, profile.referenceIds)
  for (const range of profile.regionalRanges ?? []) {
    check(range.olderMa >= range.youngerMa, `taxon ${profile.id}/${range.label}: olderMa must be older than youngerMa`)
    validateReferences(`taxon ${profile.id}/${range.label}`, range.referenceIds)
  }
}
for (const event of events) {
  check(event.startAge >= event.endAge, `event ${event.id}: startAge must be older than endAge`)
}
for (const story of stories) {
  check(unique(story.steps.map((step) => step.id)), `story ${story.id}: step IDs must be unique`)
  if (story.evidenceStatus === 'available-with-limitations') check(story.steps.every((step) => step.claimLinks.length > 0), `story ${story.id}: every available step requires a claim link`)
  if (story.evidenceStatus === 'blocked-pending-step-evidence') {
    check(story.steps.some((step) => step.claimLinks.length === 0), `story ${story.id}: blocked status requires an explicit step-level evidence gap`)
    check(story.featured === false, `story ${story.id}: blocked stories must not be featured`)
  }
  for (const step of story.steps) {
    if (step.eventId) check(eventIds.has(step.eventId), `story ${story.id}/${step.id}: unknown event ${step.eventId}`)
    check(step.age <= step.timeRange[0] && step.age >= step.timeRange[1], `story ${story.id}/${step.id}: age must fall inside timeRange`)
    for (const taxonId of step.taxonIds ?? []) check(profileIds.has(taxonId) || navigationIdsForStories.has(taxonId), `story ${story.id}/${step.id}: unknown taxon ${taxonId}`)
    for (const link of step.claimLinks) check(claimsById.has(link.claimId), `story ${story.id}/${step.id}: unknown claim ${link.claimId}`)
  }
}

function inspectTree(root, label) {
  const nodes = flattenTree(root)
  const ids = nodes.map((node) => node.id)
  check(unique(ids), `${label} node IDs must be unique`)
  const active = new Set()
  const seen = new Set()
  const visit = (node) => {
    check(!active.has(node.id), `${label}: cycle detected at ${node.id}`)
    check(!seen.has(node.id), `${label}: ${node.id} has more than one parent`)
    active.add(node.id)
    seen.add(node.id)
    check(node.firstAppearance >= node.lastAppearance, `${label} ${node.id}: invalid temporal range`)
    check(node.lastAppearance >= 0, `${label} ${node.id}: negative last appearance`)
    for (const child of node.children ?? []) {
      check(child.firstAppearance <= node.firstAppearance, `${label} ${child.id}: first appearance falls outside parent ${node.id}`)
      check(child.lastAppearance >= node.lastAppearance, `${label} ${child.id}: last appearance falls outside parent ${node.id}`)
      visit(child)
    }
    active.delete(node.id)
  }
  visit(root)
  return { nodes, ids, idSet: new Set(ids) }
}

function findParentId(root, childId, parentId = null) {
  if (root.id === childId) return parentId
  for (const child of root.children ?? []) {
    const found = findParentId(child, childId, root.id)
    if (found !== null) return found
  }
  return null
}

const ontologyTree = inspectTree(ontology, 'navigation ontology')
const phylogenyTree = inspectTree(phylogenyPackage.root, 'Perissodactyla hypothesis')
for (const node of ontologyTree.nodes) {
  const parent = ontologyTree.nodes.find((candidate) => (candidate.children ?? []).some((child) => child.id === node.id))
  const parentRelationshipKind = node.parentRelationshipKind ?? (parent ? 'taxonomic-parent' : null)
  check(typeof node.commonNameZh === 'string' && node.commonNameZh.length > 0, `navigation node ${node.id}: Chinese common name is required`)
  check(['taxon', 'navigation-group', 'historical-grade', 'informal-group', 'hypothesis-node'].includes(node.entityKind), `navigation node ${node.id}: explicit entityKind is required`)
  check(['registry-only', 'dossier', 'full-profile'].includes(node.contentLevel), `navigation node ${node.id}: explicit contentLevel is required`)
  check(parentRelationshipKind === null || ['taxonomic-parent', 'navigation-parent', 'display-grouping', 'historical-grade-membership', 'cross-package-reference'].includes(parentRelationshipKind), `navigation node ${node.id}: relationship kind is invalid`)
}
check(taxonResolution.source?.doi === '10.5281/zenodo.21620933' && taxonResolution.source?.archiveMd5 === 'fca5fde5e8d5922d06fe332a42b955f9', 'PBDB taxon reconciliation must identify the pinned 2026-07-19 full snapshot')
check(taxonResolution.summary?.ontologyNodes === ontologyTree.nodes.length, 'PBDB taxon reconciliation node count is stale')
const resolutionsByEntityId = new Map(taxonResolution.resolutions.map((entry) => [entry.entityId, entry]))
check(unique(taxonResolution.resolutions.map((entry) => entry.entityId)), 'PBDB taxon reconciliation entity IDs must be unique')
for (const node of ontologyTree.nodes) {
  const resolution = resolutionsByEntityId.get(node.id)
  check(Boolean(resolution), `navigation node ${node.id}: missing PBDB resolution record`)
  if (!resolution) continue
  check(resolution.resolvedName === resolution.acceptedName && resolution.resolvedRank === resolution.acceptedRank, `navigation node ${node.id}: PBDB resolved fields are stale`)
  const parent = ontologyTree.nodes.find((candidate) => (candidate.children ?? []).some((child) => child.id === node.id))
  const parentRelationshipKind = node.parentRelationshipKind ?? (parent ? 'taxonomic-parent' : null)
  check(resolution.localExpectedParentConcept === (parent?.name ?? null), `navigation node ${node.id}: expected parent concept is stale`)
  check(resolution.parentRelationshipKind === parentRelationshipKind, `navigation node ${node.id}: relationship kind is stale in PBDB ledger`)
  check(Array.isArray(resolution.resolvedAncestorChain), `navigation node ${node.id}: PBDB ancestor chain must be recorded`)
  check(['compatible-immediate-parent', 'compatible-classification', 'compatible-ancestor-chain', 'not-applicable-non-taxonomic-edge', 'incompatible', 'indeterminate'].includes(resolution.lineageCompatibility), `navigation node ${node.id}: lineage compatibility is missing`)
  if (resolution.parentRelationshipKind !== 'taxonomic-parent' && resolution.resolutionStatus === 'resolved') check(resolution.lineageCompatibility === 'not-applicable-non-taxonomic-edge' || resolution.conceptReviewStatus === 'not-required-navigation-edge', `navigation node ${node.id}: non-taxonomic edges must not create lineage mismatch`)
  if (resolution.lineageCompatibility === 'incompatible' && resolution.parentRelationshipKind === 'taxonomic-parent') {
    const expectedRecommendation = resolution.resolutionStatus === 'resolved' ? 'needs-concept-review' : 'withhold-external-mapping'
    check(resolution.conceptReviewStatus === 'needs-concept-review' && resolution.automatedRecommendation === expectedRecommendation, `navigation node ${node.id}: incompatible lineage must trigger the correct automated recommendation`)
  }
  check(!resolution.humanCuratorDecision || (resolution.curatorRationale && resolution.curatorReviewedAt && resolution.curatorReviewer), `navigation node ${node.id}: human curator decisions require reviewer, date and rationale`)
  if (resolution.resolutionStatus === 'resolved') {
    check(node.taxonId === resolution.pbdbId, `navigation node ${node.id}: PBDB ID differs from the pinned resolution`)
    check(resolution.acceptedName === node.name, `navigation node ${node.id}: PBDB accepted name does not match`)
  } else {
    check(!node.taxonId, `navigation node ${node.id}: unresolved PBDB concept must not publish an external ID`)
  }
}
check(phylogenyPackage.id === calibrations.topologyHypothesisId, 'calibration package must name the loaded topology hypothesis')
check(phylogenyPackage.scopeNodeId === phylogenyPackage.root.id, 'phylogeny scopeNodeId must match its root')
check(treeEvidence.navigationModel?.toLowerCase().includes('navigation ontology'), 'tree evidence must describe a navigation ontology, not assert a topology model')
for (const profile of profiles) {
  if (profile.treeNodeId) check(ontologyTree.idSet.has(profile.treeNodeId), `taxon ${profile.id}: unknown navigation node ${profile.treeNodeId}`)
  const resolution = resolutionsByEntityId.get(profile.treeNodeId)
  check(resolution?.resolutionStatus === 'resolved' && profile.pbdbTaxonId === resolution.pbdbId, `taxon ${profile.id}: profile PBDB ID must match a verified ontology resolution`)
  check(profile.firstAppearance >= profile.lastAppearance, `taxon ${profile.id}: invalid temporal range`)
  const globalRange = canonicalRanges.find((range) => range.entityId === profile.treeNodeId && range.rangeKind === 'global-composite')
  check(globalRange?.olderMa === profile.firstAppearance && globalRange?.youngerMa === profile.lastAppearance, `taxon ${profile.id}: profile range must project the canonical global range`)
  for (const regional of profile.regionalRanges ?? []) {
    check(canonicalRanges.some((range) => range.entityId === profile.treeNodeId && range.rangeKind === regional.rangeKind && range.geographicScope === regional.region && range.olderMa === regional.olderMa && range.youngerMa === regional.youngerMa), `taxon ${profile.id}/${regional.label}: regional range is missing from canonical range evidence`)
  }
}
check(!existsSync(join(rootDir, 'data/tree/vertebrate-cladogram.json')), 'the unowned vertebrate-cladogram dataset must remain removed or be formally registered')
for (const id of Object.keys(treeEvidence.nodes)) check(ontologyTree.idSet.has(id), `tree evidence: unknown navigation node ${id}`)
validateReferences('tree evidence default', treeEvidence.default.references)
for (const [id, evidence] of Object.entries(treeEvidence.nodes)) validateReferences(`tree evidence ${id}`, evidence.references)

const mediaProvenance = new Map()
for (const asset of media) {
  check(profileIds.has(asset.taxonId), `media ${asset.id}: unknown taxon ${asset.taxonId}`)
  check(/^https:\/\//.test(asset.sourceUrl), `media ${asset.id}: source URL must use HTTPS`)
  check(asset.rightsStatus !== 'external-link-only' || asset.license === 'No reusable-content license verified', `media ${asset.id}: external-only media must not imply a reusable license`)
  check(asset.reviewedAt <= '2026-08-31', `media ${asset.id}: rights review date is in the future`)
  if (asset.contentOrigin !== 'ai-assisted-interpretive-reconstruction') continue
  for (const referenceId of asset.evidenceReferenceIds ?? []) check(referencesById.has(referenceId), `media ${asset.id}: unknown evidence reference ${referenceId}`)
  check(existsSync(join(rootDir, asset.provenancePath ?? '')), `media ${asset.id}: generation provenance is missing`)
  check(existsSync(join(rootDir, asset.asset?.path ?? '')), `media ${asset.id}: bundled WebP is missing`)
  if (!asset.asset || !existsSync(join(rootDir, asset.asset.path))) continue
  const bytes = readFileSync(join(rootDir, asset.asset.path))
  const digest = createHash('sha256').update(bytes).digest('hex')
  const info = webpInfo(bytes)
  check(bytes.byteLength === asset.asset.bytes, `media ${asset.id}: asset byte count is stale`)
  check(digest === asset.asset.sha256, `media ${asset.id}: asset SHA-256 is stale`)
  check(bytes.byteLength <= 384 * 1024, `media ${asset.id}: asset exceeds the 384 KiB hard limit`)
  check(info?.width === 1280 && info?.height === 800, `media ${asset.id}: asset must be 1280x800 WebP`)
  check(info?.chunks.includes('ICCP'), `media ${asset.id}: asset must carry an sRGB ICC profile`)
  check(!info?.chunks.some((chunk) => chunk === 'EXIF' || chunk === 'XMP '), `media ${asset.id}: asset must not carry EXIF or XMP metadata`)
  if (!mediaProvenance.has(asset.provenancePath)) mediaProvenance.set(asset.provenancePath, readJson(asset.provenancePath))
  const provenance = mediaProvenance.get(asset.provenancePath)
  const provenanceAsset = provenance.assets?.find((entry) => entry.id === asset.id)
  check(provenance.inputImages?.length === 0, `media ${asset.id}: reconstruction provenance must not use external image inputs`)
  check(provenanceAsset?.outputSha256 === digest && provenanceAsset?.outputBytes === bytes.byteLength, `media ${asset.id}: output provenance does not match the bundled asset`)
}

for (const claim of claims) {
  check(claim.claimKind === 'scientific', `claim ${claim.id}: editorial decisions belong in editorial-decisions.json`)
  check(claim.confidenceRationale !== 'Confidence reflects the cited source and the stated scope; locator precision is retained where available.', `claim ${claim.id}: confidence rationale must be claim-specific`)
  const [kind, subjectId] = claim.subjectId.split(':')
  check(kind === 'event' ? eventIds.has(subjectId) : kind === 'taxon' && registryEntityIds.has(subjectId), `claim ${claim.id}: unknown subject ${claim.subjectId}`)
  for (const link of claim.referenceLinks) validateReferences(`claim ${claim.id}`, [link.referenceId])
  check(claim.referenceLinks.some((link) => link.relation === 'supports'), `claim ${claim.id}: scientific claim requires at least one supports relation`)
  if (kind === 'event') check(claim.referenceLinks.some((link) => referencesById.get(link.referenceId)?.type === 'paper'), `claim ${claim.id}: event claims require a domain paper`)
  if (claim.confidence === 'high') check(claim.referenceLinks.some((link) => referencesById.get(link.referenceId)?.type === 'paper'), `claim ${claim.id}: high confidence requires peer-reviewed support`)
}
for (const event of events) {
  for (const claimId of event.claimIds) {
    const claim = claimsById.get(claimId)
    check(Boolean(claim), `event ${event.id}: unknown claim ${claimId}`)
    check(claim?.subjectId === `event:${event.id}`, `event ${event.id}: claim ${claimId} has the wrong subject`)
  }
  for (const [kind, items] of [['evidence', event.evidenceItems], ['uncertainty', event.uncertaintyItems]]) for (const item of items) {
    for (const claimId of item.claimIds) {
      const claim = claimsById.get(claimId)
      check(claim?.subjectId === `event:${event.id}`, `event ${event.id}/${kind} item: claim ${claimId} is missing or has the wrong subject`)
    }
    for (const referenceLink of item.referenceLinks) validateReferences(`event ${event.id}/${kind} item`, [referenceLink.referenceId])
  }
}
check(unique(claims.map((claim) => claim.confidenceRationale)), 'claim confidence rationales must not be reused across claims')
check(sameValues(Object.keys(claimRationalesZh).sort(), claims.map((claim) => claim.id).sort()), 'Chinese claim rationale IDs must exactly match evidence claim IDs')
for (const [id, rationale] of Object.entries(claimRationalesZh)) check(typeof rationale === 'string' && rationale.length >= 20, `${id}: Chinese confidence rationale is required`)
for (const decision of editorialDecisions) {
  const [kind, subjectId] = decision.subjectId.split(':')
  check(kind === 'event' ? eventIds.has(subjectId) : kind === 'taxon' && profileIds.has(subjectId), `editorial decision ${decision.id}: unknown subject ${decision.subjectId}`)
  check(typeof decision.rationale === 'string' && decision.rationale.length >= 20, `editorial decision ${decision.id}: rationale is required`)
  check(/^\d{4}-\d{2}-\d{2}$/.test(decision.decidedAt), `editorial decision ${decision.id}: decidedAt must be an ISO date`)
}
for (const eventId of eventIds) check(claims.some((claim) => claim.subjectId === `event:${eventId}`), `event ${eventId}: missing claim-level evidence`)
for (const profileId of profileIds) check(claims.some((claim) => claim.subjectId === `taxon:${profileId}`), `taxon ${profileId}: missing claim-level evidence`)

for (const estimate of calibrations.estimates) {
  validateReferences(`divergence estimate ${estimate.id}`, [estimate.referenceId])
  check(estimate.cladePackageId === calibrations.cladePackageId, `divergence estimate ${estimate.id}: clade package mismatch`)
  check(estimate.topologyHypothesisId === phylogenyPackage.id, `divergence estimate ${estimate.id}: topology hypothesis mismatch`)
  check(['mapped', 'unmapped'].includes(estimate.mappingStatus), `divergence estimate ${estimate.id}: mappingStatus is required`)
  if (estimate.mappingStatus === 'mapped') {
    check(typeof estimate.nodeId === 'string' && phylogenyTree.idSet.has(estimate.nodeId), `divergence estimate ${estimate.id}: mapped estimate requires an exact hypothesis node`)
    check(estimate.displayOnTree === true, `divergence estimate ${estimate.id}: mapped estimate must be displayed on the tree`)
  } else {
    check(estimate.nodeId === null, `divergence estimate ${estimate.id}: unmapped estimate must not name an approximate node`)
    check(estimate.displayOnTree === false, `divergence estimate ${estimate.id}: unmapped estimate must not display on the tree`)
  }
  check(Boolean(estimate.compatibilityGroup), `divergence estimate ${estimate.id}: compatibilityGroup is required`)
  check(Object.values(estimate.locator ?? {}).some(Boolean), `divergence estimate ${estimate.id}: publication locator is required`)
  if (estimate.youngerMa != null) check(estimate.youngerMa <= estimate.medianMa, `divergence estimate ${estimate.id}: younger bound exceeds median`)
  if (estimate.olderMa != null) check(estimate.olderMa >= estimate.medianMa, `divergence estimate ${estimate.id}: older bound is younger than median`)
}

const fossilsByPeriod = new Map()
const allOccurrenceIds = []
const countryCounts = new Map()
let fossilCount = 0
let recordsWithReferences = 0
let recordsWithCoordinatePrecision = 0
let mappedPackageRecords = 0
let unresolvedPackageRecords = 0
for (const period of periodUnits) {
  const metadata = periodMetadata.find((record) => record.name === period.nam)
  if (!metadata) continue
  const fossils = readJson(`data/fossils/${period.nam.toLowerCase()}.json`)
  check(sourceMetadata.periodLimits?.[period.nam] === fossils.length, `${period.nam}: PBDB source period limit is stale`)
  fossilsByPeriod.set(period.nam, fossils)
  fossilCount += fossils.length
  for (const occurrence of fossils) {
    validateSchema('occurrence', occurrence, `${period.nam}/${occurrence.oid ?? '<missing>'}`)
    allOccurrenceIds.push(occurrence.oid)
    if (occurrence.cc2) countryCounts.set(occurrence.cc2, (countryCounts.get(occurrence.cc2) ?? 0) + 1)
    if (occurrence.referenceId) recordsWithReferences += 1
    if (occurrence.coordinatePrecision) recordsWithCoordinatePrecision += 1
    check(occurrence.eag >= occurrence.lag, `${period.nam}/${occurrence.oid}: invalid age range`)
    check(occurrence.eag >= period.lag && occurrence.lag <= period.eag, `${period.nam}/${occurrence.oid}: age range does not intersect its period file`)
    const hasPaleoLng = Number.isFinite(occurrence.paleolng)
    const hasPaleoLat = Number.isFinite(occurrence.paleolat)
    check(hasPaleoLng === hasPaleoLat, `${period.nam}/${occurrence.oid}: paleocoordinates must be a complete pair`)
    if (hasPaleoLng && hasPaleoLat) check(Boolean(occurrence.paleoModelId), `${period.nam}/${occurrence.oid}: reconstructed coordinates require a model label`)
    check(packageIds.has(occurrence.packageId), `${period.nam}/${occurrence.oid}: occurrence package is missing or unknown`)
    check(Boolean(occurrence.packageAssignmentStatus && occurrence.packageAssignmentBasis), `${period.nam}/${occurrence.oid}: occurrence package assignment provenance is incomplete`)
    const expectedAssignment = assignOccurrencePackage(occurrence, exactPackageByTaxonId)
    check(occurrence.packageId === expectedAssignment.packageId && occurrence.packageAssignmentStatus === expectedAssignment.packageAssignmentStatus && occurrence.packageAssignmentBasis === expectedAssignment.packageAssignmentBasis, `${period.nam}/${occurrence.oid}: occurrence package assignment is stale`)
    if (occurrence.packageAssignmentStatus === 'mapped') mappedPackageRecords += 1
    if (occurrence.packageAssignmentStatus === 'unresolved') {
      unresolvedPackageRecords += 1
      check(occurrence.packageId === 'atlas-core', `${period.nam}/${occurrence.oid}: unresolved occurrence must remain in atlas-core`)
    }
  }
}
check(unique(allOccurrenceIds), 'occurrence IDs must be globally unique across period files')
check(recordsWithReferences === fossilCount, 'every bundled occurrence must retain its PBDB reference identifier')
check(recordsWithCoordinatePrecision === fossilCount, 'every bundled occurrence must retain coordinate precision metadata')
for (const place of places) check(countryCounts.get(place.code) === place.occurrences, `place ${place.code}: occurrence count is stale`)

const ontologyTaxonIds = ontologyTree.nodes.filter((node) => node.taxonId).map((node) => node.taxonId)
check(unique(ontologyTaxonIds), 'navigation ontology PBDB taxon IDs must be unique so descendant queries are unambiguous')
check(entityIndex.sourceTotal === fossilCount, 'entity index sourceTotal must match bundled occurrences')
const recomputedLinkedIds = new Set()
const recomputedMethodIds = { exactExternalId: new Set(), acceptedName: new Set(), higherClassification: new Set() }
const entityPackageById = new Map(registryEntities.map((entity) => [entity.id, entity.packageId]))
const recomputedPackageLinkedIds = new Map([...packageIds].map((packageId) => [packageId, new Set()]))
const mappingCanDriveQuery = (entityId) => {
  const resolution = resolutionsByEntityId.get(entityId)
  return resolution?.resolutionStatus === 'resolved' && (resolution.conceptReviewStatus !== 'needs-concept-review' || resolution.humanCuratorDecision === 'accept-external-mapping')
}
const canonicalTaxonIds = new Set(ontologyTree.nodes.filter((node) => mappingCanDriveQuery(node.id)).map((node) => node.taxonId).filter(Boolean))
const canonicalNames = new Set(ontologyTree.nodes.filter((node) => mappingCanDriveQuery(node.id)).map((node) => normalizeTaxonName(node.name)))
for (const node of ontologyTree.nodes) {
  const entry = entityIndex.nodes[node.id]
  check(Boolean(entry), `entity index: missing ${node.id}`)
  if (!entry) continue
  const scope = descendantTaxonScope(node)
  for (const candidate of flattenTree(node)) {
    if (mappingCanDriveQuery(candidate.id)) continue
    if (candidate.taxonId) scope.ids.delete(candidate.taxonId)
    scope.names.delete(normalizeTaxonName(candidate.name))
  }
  const descendants = [...scope.ids]
  const descendantNames = [...scope.names]
  const expectedPeriods = []
  let expectedTotal = 0
  const expectedMethods = { exactExternalId: 0, acceptedName: 0, higherClassification: 0 }
  for (const period of periodUnits) {
    const matched = (fossilsByPeriod.get(period.nam) ?? []).flatMap((record) => {
      const method = occurrenceMatchMethod(record, scope)
      return method ? [{ record, method }] : []
    })
    const count = matched.length
    if (count) expectedPeriods.push(period.nam)
    expectedTotal += count
    for (const { record, method } of matched) {
      expectedMethods[method] += 1
      const packageId = entityPackageById.get(node.id) ?? 'atlas-core'
      if ((record.packageId ?? 'atlas-core') === packageId) recomputedPackageLinkedIds.get(packageId)?.add(record.oid)
    }
  }
  check(entry.entityId === node.id, `entity index ${node.id}: stable entity ID is stale`)
  check(sameValues(entry.descendantTaxonIds, descendants), `entity index ${node.id}: descendant taxon closure is stale`)
  check(sameValues(entry.descendantScientificNames, descendantNames), `entity index ${node.id}: scientific-name closure is stale`)
  check(sameValues(entry.periods, expectedPeriods), `entity index ${node.id}: period list is stale`)
  check(entry.matchedTotal === expectedTotal, `entity index ${node.id}: matchedTotal is stale`)
  check(JSON.stringify(entry.matchMethods) === JSON.stringify(expectedMethods), `entity index ${node.id}: match methods are stale`)
}
for (const records of fossilsByPeriod.values()) for (const record of records) {
  let method = null
  if (record.tid && canonicalTaxonIds.has(record.tid)) method = 'exactExternalId'
  else if (record.tna && canonicalNames.has(normalizeTaxonName(record.tna))) method = 'acceptedName'
  else if (occurrenceMatchMethod(record, { ids: canonicalTaxonIds, names: canonicalNames }) === 'higherClassification') method = 'higherClassification'
  if (method) {
    recomputedLinkedIds.add(record.oid)
    recomputedMethodIds[method].add(record.oid)
  }
}
check(entityLinkageCoverage.sourceTotal === fossilCount, 'entity linkage coverage sourceTotal is stale')
check(entityLinkageCoverage.linkedOccurrenceTotal + entityLinkageCoverage.unmatchedOccurrenceTotal === fossilCount, 'entity linkage coverage totals do not reconcile')
check(entityLinkageCoverage.linkedOccurrenceTotal === recomputedLinkedIds.size, 'entity linkage union must be independently recomputed from occurrence rows')
for (const [method, ids] of Object.entries(recomputedMethodIds)) check(entityLinkageCoverage.linkageMethods?.[method] === ids.size, `entity linkage ${method} count is stale`)
const recomputedDirectTotal = recomputedMethodIds.exactExternalId.size + recomputedMethodIds.acceptedName.size
check(entityLinkageCoverage.directLinkTotal === recomputedDirectTotal, 'entity linkage direct total is stale')
check(entityLinkageCoverage.broadLinkTotal === recomputedLinkedIds.size, 'entity linkage broad total is stale')
check(entityLinkageCoverage.directLinkRate === Number((recomputedDirectTotal / fossilCount).toFixed(6)), 'entity linkage direct rate is stale')
check(entityLinkageCoverage.broadLinkRate === Number((recomputedLinkedIds.size / fossilCount).toFixed(6)), 'entity linkage broad rate is stale')
check(entityLinkageCoverage.linkedOccurrenceRate >= entityLinkageBaseline.minimumLinkedOccurrenceRate, `entity linkage rate ${entityLinkageCoverage.linkedOccurrenceRate} regressed below frozen baseline gate ${entityLinkageBaseline.minimumLinkedOccurrenceRate}`)
for (const [method, minimum] of Object.entries(entityLinkageBaseline.minimumLinkageMethods)) check(entityLinkageCoverage.linkageMethods?.[method] >= minimum, `entity linkage ${method} regressed below frozen baseline ${minimum}`)
for (const [packageId, minimumRate] of Object.entries(entityLinkageBaseline.packageMinimumRates)) check(entityLinkageCoverage.packageCoverage?.[packageId]?.linkedRate >= minimumRate, `entity linkage package ${packageId} regressed below ${minimumRate}`)
for (const packageId of packageIds) {
  const sourceTotal = [...fossilsByPeriod.values()].flat().filter((record) => (record.packageId ?? 'atlas-core') === packageId).length
  const linkedTotal = recomputedPackageLinkedIds.get(packageId)?.size ?? 0
  const expectedRate = sourceTotal ? Number((linkedTotal / sourceTotal).toFixed(6)) : null
  const expectedStatus = sourceTotal ? 'sampled' : 'no-sampled-rows'
  const actual = entityLinkageCoverage.packageCoverage?.[packageId]
  check(actual?.sourceTotal === sourceTotal && actual?.linkedTotal === linkedTotal && actual?.linkedRate === expectedRate && actual?.coverageStatus === expectedStatus, `entity linkage package ${packageId} coverage must be independently recomputed`)
}
check(sameValues([...(entityLinkageBaseline.noSamplePackageIds ?? [])].sort(), [...packageIds].filter((packageId) => entityLinkageCoverage.packageCoverage?.[packageId]?.coverageStatus === 'no-sampled-rows').sort()), 'zero-sample package baseline is stale')
for (const packageId of entityLinkageBaseline.noSamplePackageIds ?? []) {
  const packageCoverage = entityLinkageCoverage.packageCoverage?.[packageId]
  check(packageCoverage?.sourceTotal === 0 && packageCoverage?.linkedRate === null && packageCoverage?.coverageStatus === 'no-sampled-rows', `entity linkage package ${packageId} must disclose no sampled rows instead of 100% coverage`)
}
check(sameValues(entityLinkageCoverage.ambiguousNameCollisions, entityLinkageBaseline.ambiguousNameCollisions), 'new entity-name collision requires an explicit baseline review')
const unresolvedEntityIds = taxonResolution.resolutions.filter((entry) => entry.resolutionStatus !== 'resolved').map((entry) => entry.entityId).sort()
check(sameValues(unresolvedEntityIds, entityLinkageBaseline.unresolvedEntityIds), 'new unresolved entities require an explicit external-resolution baseline review')
const snapshotQueriesByEntityId = new Map(perissodactylaSnapshot.queryResults.map((entry) => [entry.entityId, entry]))
const snapshotLedgerQueriesByEntityId = new Map(perissodactylaSnapshot.packageQueryLedger.subqueries.map((entry) => [entry.entityId, entry]))
check(unique(perissodactylaSnapshot.records.map((record) => record.oid)), 'Perissodactyla snapshot occurrence IDs must be unique')
check(perissodactylaSnapshot.retainedRecordCount === perissodactylaSnapshot.records.length, 'Perissodactyla snapshot retained record count is stale')
check(perissodactylaSnapshot.recordsSha256 === createHash('sha256').update(JSON.stringify(perissodactylaSnapshot.records)).digest('hex'), 'Perissodactyla snapshot checksum is stale')
for (const profile of perissodactylProfiles) {
  const query = snapshotQueriesByEntityId.get(profile.treeNodeId)
  const ledgerQuery = snapshotLedgerQueriesByEntityId.get(profile.treeNodeId)
  check(Boolean(ledgerQuery), `Perissodactyla snapshot is missing query metadata for ${profile.id}`)
  if (!ledgerQuery) continue
  const resolution = resolutionsByEntityId.get(profile.treeNodeId)
  const queryEligible = resolution?.resolutionStatus === 'resolved' && (resolution.conceptReviewStatus !== 'needs-concept-review' || resolution.humanCuratorDecision === 'accept-external-mapping')
  check(ledgerQuery.queryEligible === queryEligible && ledgerQuery.conceptReviewStatus === resolution?.conceptReviewStatus, `Perissodactyla snapshot ${profile.id} concept-review gate is stale`)
  check(queryEligible ? Boolean(query?.paginationComplete) : !query, `Perissodactyla snapshot ${profile.id} complete-query availability is stale`)
  if (query) {
    check(query.upstreamReportedTotal === query.occurrenceIds.length && ledgerQuery.rowsFetched === query.occurrenceIds.length, `Perissodactyla snapshot ${profile.id} row count is stale`)
    check(query.occurrenceIdSha256 === createHash('sha256').update(query.occurrenceIds.join('\n')).digest('hex'), `Perissodactyla snapshot ${profile.id} occurrence checksum is stale`)
  }
  check(entityIndex.nodes[profile.treeNodeId]?.completeSnapshotAvailable === queryEligible && entityIndex.nodes[profile.treeNodeId]?.completeSnapshotRows === (query?.upstreamReportedTotal ?? null), `entity index complete snapshot status for ${profile.id} is stale`)
  check(entityLinkageCoverage.profileTotals?.[profile.id] === (query?.upstreamReportedTotal ?? 0), `entity linkage coverage for ${profile.id} is stale`)
}

check(sourceMetadata.samplingMethod === 'bounded non-random API-prefix sample', 'PBDB bundle must use an accurate sampling label')
check(sourceMetadata.randomized === false && sourceMetadata.selectionProbabilityKnown === false && sourceMetadata.sourceTotalsRetained === false, 'PBDB bundle must disclose randomization, selection probability and source-total limitations')
check(sourceMetadata.order === 'id' && sourceMetadata.queryTemplate.includes('order=id'), 'PBDB bundle must record deterministic API ordering')
check(sourceMetadata.limitations.some((note) => /not (?:a )?random or representative sample/i.test(note)), 'PBDB bundle must explicitly state that the prefix is not representative')
check(sourceMetadata.packageAssignment?.mappedRecords === mappedPackageRecords, 'PBDB package-assignment mapped count is stale')
check(sourceMetadata.packageAssignment?.unresolvedRecords === unresolvedPackageRecords, 'PBDB package-assignment unresolved count is stale')
check(sourceMetadata.packageAssignment?.rules === 'scripts/occurrence-package-map.mjs', 'PBDB package-assignment rules path is missing')

const palaeotherium = perissodactylProfiles.find((profile) => profile.id === 'palaeotherium')
check(Boolean(palaeotherium) && palaeotherium.rangeEvidenceLevel === 'withheld-no-range-evidence' && palaeotherium.firstAppearance === 0 && palaeotherium.lastAppearance === 0, 'Palaeotherium must not project a western European regional LAD as a global genus range')
check(!profileIds.has('hipparion') && profileIds.has('hipparionini'), 'the broad horse profile must use Hipparionini rather than Hipparion sensu lato')
const hipparionini = perissodactylProfiles.find((profile) => profile.id === 'hipparionini')
const hipparionNorthAmerica = hipparionini?.regionalRanges?.find((range) => range.region === 'North America')
check(hipparionNorthAmerica?.youngerMa === 2 && hipparionNorthAmerica?.confidence === 'contested', 'Hipparionini North American terminal range must remain near 2 Ma and review-pending')
check(findParentId(ontology, 'meganeura') === 'meganisoptera', 'Meganeura must be nested in Meganisoptera, not Odonata')
check(findParentId(ontology, 'tetrapoda') === 'tetrapodomorpha', 'Tetrapoda must be nested within the Tetrapodomorpha total group')
check(findParentId(ontology, 'graptolithina') === 'pterobranchia', 'Graptolithina must be nested within Pterobranchia')
check(findParentId(ontology, 'marchantiophyta') === 'plantae' && findParentId(ontology, 'anthocerotophyta') === 'plantae', 'liverwort and hornwort entities must be explicit beside Bryophyta sensu stricto')
check(findParentId(ontology, 'myriapoda') === 'arthropoda' && findParentId(ontology, 'chilopoda') === 'myriapoda' && findParentId(ontology, 'diplopoda') === 'myriapoda', 'Myriapoda, Chilopoda and Diplopoda must be explicit in the arthropod package')
check(claimsById.get('claim:event:quaternary-megafauna-extinction')?.statement.includes('tracks human expansion more strongly than climate'), 'Quaternary megafauna claim must reflect the cited source position')

const summary = collectDataSummary()
check(manifest.wholeLifeCoverageClaim === false && manifest.scopeStatement && manifest.includedMajorGroups?.length && manifest.excludedMajorGroups?.includes('Bacteria'), 'manifest must explicitly disclose the non-whole-life coverage scope')
check(summary.records.fossilOccurrences === fossilCount, 'summary fossil count must match loaded records')
for (const [key, value] of Object.entries(summary.records)) check(manifest.records[key] === value, `manifest records.${key} is ${manifest.records[key]} but should be ${value}`)
for (const [path, checksum] of Object.entries(summary.checksums)) check(manifest.checksums?.[path] === checksum, `manifest checksum is stale for ${path}`)
for (const path of Object.keys(manifest.checksums ?? {})) check(Object.hasOwn(summary.checksums, path), `manifest contains obsolete checksum ${path}`)

if (failures.length) {
  console.error(`Data validation failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 150)) console.error(`- ${failure}`)
  if (failures.length > 150) console.error(`- …and ${failures.length - 150} more`)
  process.exitCode = 1
} else {
  console.log(`Data validation passed: ${fossilCount.toLocaleString()} occurrences, ${ontologyTree.nodes.length} navigation nodes, ${claims.length} evidence claims, ${events.length} events.`)
}
