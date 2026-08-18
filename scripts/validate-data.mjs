import { collectDataSummary, flattenTree, readJson } from './data-lib.mjs'

const failures = []
const check = (condition, message) => { if (!condition) failures.push(message) }
const unique = (items) => new Set(items).size === items.length

const periods = readJson('data/periods.json')
const timeScale = readJson('data/time-scale.json')
const references = readJson('data/references.json')
const places = readJson('data/places.json')
const media = readJson('data/media.json')
const perissodactylCalibrations = readJson('data/phylogenies/perissodactyla-calibrations.json')
const events = readJson('data/events.json')
const stories = readJson('data/stories.json')
const profiles = readJson('data/taxa/profiles.json')
const tree = readJson('data/tree/life-cladogram.json')
const treeEvidence = readJson('data/tree/evidence.json')
const manifest = readJson('data/manifest.json')

check(Array.isArray(periods) && periods.length > 0, 'periods.json must contain periods')
check(unique(periods.map((period) => period.name)), 'period names must be unique')
for (let index = 0; index < periods.length; index += 1) {
  const period = periods[index]
  check(period.eag > period.lag, `${period.name}: older bound must exceed younger bound`)
  if (index < periods.length - 1) {
    check(Math.abs(period.eag - periods[index + 1].lag) < 0.001, `${period.name}: boundary must meet ${periods[index + 1].name}`)
  }
}

check(timeScale.earthAgeMa === 4567, 'time scale must span 4,567 Ma')
check(timeScale.version === 'ICS-2026-06', 'time scale version must be explicit')
check(unique(timeScale.units.map((unit) => unit.oid)), 'time-scale unit IDs must be unique')
const scalePeriodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam).sort()
check(JSON.stringify(scalePeriodNames) === JSON.stringify(periods.map((period) => period.name).sort()), 'period table and time-scale period names must match')

const referenceIds = new Set(references.map((reference) => reference.id))
const eventIds = new Set(events.map((event) => event.id))
check(unique([...referenceIds]), 'reference IDs must be unique')
check(unique([...eventIds]), 'event IDs must be unique')
check(unique(profiles.map((profile) => profile.id)), 'taxon profile IDs must be unique')
check(unique(places.map((place) => place.code)), 'place codes must be unique')
check(unique(media.map((asset) => asset.id)), 'media IDs must be unique')
check(unique(stories.map((story) => story.id)), 'story IDs must be unique')

const validateReferences = (owner, ids) => {
  for (const id of ids ?? []) check(referenceIds.has(id), `${owner}: unknown reference ${id}`)
}
for (const profile of profiles) validateReferences(`taxon ${profile.id}`, profile.referenceIds)
for (const event of events) validateReferences(`event ${event.id}`, event.referenceIds)
for (const story of stories) {
  check(unique(story.steps.map((step) => step.id)), `story ${story.id}: step IDs must be unique`)
  for (const step of story.steps) {
    validateReferences(`story ${story.id}/${step.id}`, step.referenceIds)
    if (step.eventId) check(eventIds.has(step.eventId), `story ${story.id}/${step.id}: unknown event ${step.eventId}`)
    check(step.age <= step.timeRange[0] && step.age >= step.timeRange[1], `story ${story.id}/${step.id}: age must fall inside timeRange`)
  }
}

const treeNodes = flattenTree(tree)
const treeIds = treeNodes.map((node) => node.id)
check(unique(treeIds), 'tree node IDs must be unique')
for (const profile of profiles) {
  if (profile.treeNodeId) check(treeIds.includes(profile.treeNodeId), `taxon ${profile.id}: unknown tree node ${profile.treeNodeId}`)
}
const profileIds = new Set(profiles.map((profile) => profile.id))
for (const asset of media) {
  check(profileIds.has(asset.taxonId), `media ${asset.id}: unknown taxon ${asset.taxonId}`)
  check(/^https:\/\//.test(asset.sourceUrl), `media ${asset.id}: source URL must use HTTPS`)
}
for (const node of treeNodes) {
  check(node.firstAppearance >= node.lastAppearance, `tree ${node.id}: invalid temporal range`)
  check(node.lastAppearance >= 0, `tree ${node.id}: negative last appearance`)
}
for (const id of Object.keys(treeEvidence.nodes)) check(treeIds.includes(id), `tree evidence: unknown node ${id}`)
validateReferences('tree evidence default', treeEvidence.default.references)
for (const [id, evidence] of Object.entries(treeEvidence.nodes)) validateReferences(`tree evidence ${id}`, evidence.references)
for (const estimate of perissodactylCalibrations.estimates) {
  validateReferences(`divergence estimate ${estimate.id}`, [estimate.referenceId])
  if (estimate.youngerMa != null) check(estimate.youngerMa <= estimate.medianMa, `divergence estimate ${estimate.id}: younger bound exceeds median`)
  if (estimate.olderMa != null) check(estimate.olderMa >= estimate.medianMa, `divergence estimate ${estimate.id}: older bound is younger than median`)
}

let fossilCount = 0
const countryCounts = new Map()
for (const period of periods) {
  const slug = period.name.toLowerCase()
  const fossils = readJson(`data/fossils/${slug}.json`)
  const geography = readJson(`data/paleogeography/${period.geoJsonFile}`)
  fossilCount += fossils.length
  check(geography.type === 'FeatureCollection' && Array.isArray(geography.features), `${period.name}: invalid paleogeography FeatureCollection`)
  for (const occurrence of fossils) {
    if (occurrence.cc2) countryCounts.set(occurrence.cc2, (countryCounts.get(occurrence.cc2) ?? 0) + 1)
    check(Boolean(occurrence.oid && (occurrence.tna || occurrence.idn) && occurrence.cid), `${period.name}: occurrence missing ID, all taxon names or collection`)
    check(Number.isFinite(occurrence.eag) && Number.isFinite(occurrence.lag) && occurrence.eag >= occurrence.lag, `${period.name}/${occurrence.oid}: invalid age range`)
    check(Number.isFinite(Number(occurrence.lng)) && Number.isFinite(Number(occurrence.lat)), `${period.name}/${occurrence.oid}: invalid modern coordinates`)
  }
}
for (const place of places) check(countryCounts.get(place.code) === place.occurrences, `place ${place.code}: occurrence count is stale`)

const summary = collectDataSummary()
check(summary.records.fossilOccurrences === fossilCount, 'summary fossil count must match loaded records')
for (const [key, value] of Object.entries(summary.records)) {
  check(manifest.records[key] === value, `manifest records.${key} is ${manifest.records[key]} but should be ${value}`)
}
for (const [path, checksum] of Object.entries(summary.checksums)) {
  check(manifest.checksums?.[path] === checksum, `manifest checksum is stale for ${path}`)
}

if (failures.length) {
  console.error(`Data validation failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Data validation passed: ${fossilCount.toLocaleString()} occurrences, ${treeNodes.length} tree nodes, ${stories.length} stories, ${events.length} events.`)
}
