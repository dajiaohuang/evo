import Ajv2020 from 'ajv/dist/2020.js'
import { collectDataSummary, flattenTree, readJson } from './data-lib.mjs'

const failures = []
const check = (condition, message) => { if (!condition) failures.push(message) }
const unique = (items) => new Set(items).size === items.length
const sameValues = (left, right) => JSON.stringify(left) === JSON.stringify(right)

const periodMetadata = readJson('data/period-map-metadata.json')
const timeScale = readJson('data/time-scale.json')
const references = readJson('data/references.json')
const places = readJson('data/places.json')
const media = readJson('data/media.json')
const calibrations = readJson('data/phylogenies/perissodactyla-calibrations.json')
const phylogenyPackage = readJson('data/phylogenies/perissodactyla-hypothesis.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const profiles = readJson('data/taxa/profiles.json')
const ontology = readJson('data/navigation/atlas-ontology.json')
const treeEvidence = readJson('data/tree/evidence.json')
const claims = readJson('data/evidence/claims.json')
const editorialDecisions = readJson('data/evidence/editorial-decisions.json')
const taxonIndex = readJson('data/indexes/taxon-period-index.json')
const sourceMetadata = readJson('data/sources/pbdb-occurrence-bundle.json')
const manifest = readJson('data/manifest.json')
const packageMetadata = readJson('package.json')

const ajv = new Ajv2020({ allErrors: true, strict: true })
const validators = {
  occurrence: ajv.compile(readJson('data/schemas/occurrence.schema.json')),
  reference: ajv.compile(readJson('data/schemas/reference.schema.json')),
  claim: ajv.compile(readJson('data/schemas/claim.schema.json')),
  profile: ajv.compile(readJson('data/schemas/profile.schema.json')),
  event: ajv.compile(readJson('data/schemas/event.schema.json')),
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
for (const claim of claims) validateSchema('claim', claim, `claim ${claim.id ?? '<missing>'}`)

const periodUnits = timeScale.units.filter((unit) => unit.itp === 'period')
check(periodUnits.length > 0, 'time-scale.json must contain periods')
check(timeScale.earthAgeMa === 4567, 'time scale must span 4,567 Ma')
check(timeScale.version === 'ICS-2026-06', 'time scale version must be explicit')
check(unique(timeScale.units.map((unit) => unit.oid)), 'time-scale unit IDs must be unique')
check(unique(periodMetadata.map((period) => period.name)), 'period map metadata names must be unique')
check(sameValues([...periodUnits.map((unit) => unit.nam)].sort(), [...periodMetadata.map((period) => period.name)].sort()), 'time scale and period map metadata names must match')
for (const metadata of periodMetadata) {
  check(!['eag', 'lag', 'color', 'era', 'eon'].some((key) => Object.hasOwn(metadata, key)), `${metadata.name}: map metadata must not duplicate time-scale facts`)
  check(['available', 'withheld-pending-provenance'].includes(metadata.mapLayerStatus), `${metadata.name}: invalid mapLayerStatus`)
}

check(manifest.appVersion === packageMetadata.version, 'manifest appVersion must match package.json version')
check(manifest.datasetVersion !== manifest.appVersion, 'datasetVersion and appVersion must remain separate identifiers')
check(manifest.commitSha === 'unreleased' || /^[0-9a-f]{40}$/.test(manifest.commitSha), 'manifest commitSha must be a full Git SHA or unreleased')
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

const referenceIdsArray = references.map((reference) => reference.id)
const eventIdsArray = events.map((event) => event.id)
const profileIdsArray = profiles.map((profile) => profile.id)
const referenceIds = new Set(referenceIdsArray)
const eventIds = new Set(eventIdsArray)
const profileIds = new Set(profileIdsArray)
const navigationIdsForStories = new Set(flattenTree(ontology).map((node) => node.id))
const referencesById = new Map(references.map((reference) => [reference.id, reference]))
check(unique(referenceIdsArray), 'reference IDs must be unique')
check(unique(eventIdsArray), 'event IDs must be unique')
check(unique(profileIdsArray), 'taxon profile IDs must be unique')
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
for (const profile of profiles) validateReferences(`taxon ${profile.id}`, profile.referenceIds)
for (const event of events) {
  validateReferences(`event ${event.id}`, event.referenceIds)
  check(event.startAge >= event.endAge, `event ${event.id}: startAge must be older than endAge`)
}
for (const story of stories) {
  check(unique(story.steps.map((step) => step.id)), `story ${story.id}: step IDs must be unique`)
  for (const step of story.steps) {
    validateReferences(`story ${story.id}/${step.id}`, step.referenceIds)
    if (step.eventId) check(eventIds.has(step.eventId), `story ${story.id}/${step.id}: unknown event ${step.eventId}`)
    check(step.age <= step.timeRange[0] && step.age >= step.timeRange[1], `story ${story.id}/${step.id}: age must fall inside timeRange`)
    for (const taxonId of step.taxonIds ?? []) check(profileIds.has(taxonId) || navigationIdsForStories.has(taxonId), `story ${story.id}/${step.id}: unknown taxon ${taxonId}`)
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
    for (const child of node.children ?? []) visit(child)
    active.delete(node.id)
  }
  visit(root)
  return { nodes, ids, idSet: new Set(ids) }
}

const ontologyTree = inspectTree(ontology, 'navigation ontology')
const phylogenyTree = inspectTree(phylogenyPackage.root, 'Perissodactyla hypothesis')
check(phylogenyPackage.id === calibrations.topologyHypothesisId, 'calibration package must name the loaded topology hypothesis')
check(phylogenyPackage.scopeNodeId === phylogenyPackage.root.id, 'phylogeny scopeNodeId must match its root')
check(treeEvidence.navigationModel?.toLowerCase().includes('navigation ontology'), 'tree evidence must describe a navigation ontology, not assert a topology model')
for (const profile of profiles) {
  if (profile.treeNodeId) check(ontologyTree.idSet.has(profile.treeNodeId), `taxon ${profile.id}: unknown navigation node ${profile.treeNodeId}`)
  check(profile.firstAppearance >= profile.lastAppearance, `taxon ${profile.id}: invalid temporal range`)
}
for (const id of Object.keys(treeEvidence.nodes)) check(ontologyTree.idSet.has(id), `tree evidence: unknown navigation node ${id}`)
validateReferences('tree evidence default', treeEvidence.default.references)
for (const [id, evidence] of Object.entries(treeEvidence.nodes)) validateReferences(`tree evidence ${id}`, evidence.references)

for (const asset of media) {
  check(profileIds.has(asset.taxonId), `media ${asset.id}: unknown taxon ${asset.taxonId}`)
  check(/^https:\/\//.test(asset.sourceUrl), `media ${asset.id}: source URL must use HTTPS`)
}

for (const claim of claims) {
  check(claim.claimKind === 'scientific', `claim ${claim.id}: editorial decisions belong in editorial-decisions.json`)
  const [kind, subjectId] = claim.subjectId.split(':')
  check(kind === 'event' ? eventIds.has(subjectId) : kind === 'taxon' && profileIds.has(subjectId), `claim ${claim.id}: unknown subject ${claim.subjectId}`)
  for (const link of claim.referenceLinks) validateReferences(`claim ${claim.id}`, [link.referenceId])
  if (kind === 'event') check(claim.referenceLinks.some((link) => referencesById.get(link.referenceId)?.type === 'paper'), `claim ${claim.id}: event claims require a domain paper`)
}
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
for (const period of periodUnits) {
  const metadata = periodMetadata.find((record) => record.name === period.nam)
  if (!metadata) continue
  const fossils = readJson(`data/fossils/${period.nam.toLowerCase()}.json`)
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
  }
}
check(unique(allOccurrenceIds), 'occurrence IDs must be globally unique across period files')
check(recordsWithReferences === fossilCount, 'every bundled occurrence must retain its PBDB reference identifier')
check(recordsWithCoordinatePrecision === fossilCount, 'every bundled occurrence must retain coordinate precision metadata')
for (const place of places) check(countryCounts.get(place.code) === place.occurrences, `place ${place.code}: occurrence count is stale`)

function descendantTaxonIds(node, output = new Set()) {
  if (node.taxonId) output.add(node.taxonId)
  for (const child of node.children ?? []) descendantTaxonIds(child, output)
  return output
}
const ontologyTaxonIds = ontologyTree.nodes.filter((node) => node.taxonId).map((node) => node.taxonId)
check(unique(ontologyTaxonIds), 'navigation ontology PBDB taxon IDs must be unique so descendant queries are unambiguous')
check(taxonIndex.sourceTotal === fossilCount, 'taxon index sourceTotal must match bundled occurrences')
for (const node of ontologyTree.nodes.filter((candidate) => candidate.taxonId)) {
  const entry = taxonIndex.nodes[node.taxonId]
  check(Boolean(entry), `taxon index: missing ${node.taxonId}`)
  if (!entry) continue
  const descendants = [...descendantTaxonIds(node)]
  const descendantSet = new Set(descendants)
  const expectedPeriods = []
  let expectedTotal = 0
  for (const period of periodUnits) {
    const count = (fossilsByPeriod.get(period.nam) ?? []).filter((record) => descendantSet.has(record.tid)).length
    if (count) expectedPeriods.push(period.nam)
    expectedTotal += count
  }
  check(sameValues(entry.descendantTaxonIds, descendants), `taxon index ${node.taxonId}: descendant closure is stale`)
  check(sameValues(entry.periods, expectedPeriods), `taxon index ${node.taxonId}: period list is stale`)
  check(entry.matchedTotal === expectedTotal, `taxon index ${node.taxonId}: matchedTotal is stale`)
}

check(sourceMetadata.samplingMethod === 'bounded non-random API-prefix sample', 'PBDB bundle must use an accurate sampling label')
check(sourceMetadata.randomized === false && sourceMetadata.selectionProbabilityKnown === false && sourceMetadata.sourceTotalsRetained === false, 'PBDB bundle must disclose randomization, selection probability and source-total limitations')
check(sourceMetadata.order === 'id' && sourceMetadata.queryTemplate.includes('order=id'), 'PBDB bundle must record deterministic API ordering')
check(sourceMetadata.limitations.some((note) => /not (?:a )?random or representative sample/i.test(note)), 'PBDB bundle must explicitly state that the prefix is not representative')

const palaeotherium = profiles.find((profile) => profile.id === 'palaeotherium')
check(Boolean(palaeotherium) && palaeotherium.lastAppearance >= 33 && palaeotherium.lastAppearance <= 34.2, 'Palaeotherium curated LAD must remain near the Eocene–Oligocene transition')
check(!profileIds.has('hipparion') && profileIds.has('hipparionini'), 'the broad horse profile must use Hipparionini rather than Hipparion sensu lato')

const summary = collectDataSummary()
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
