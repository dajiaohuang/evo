import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { descendantTaxonScope, normalizeTaxonName, occurrenceMatchMethod } from './taxon-linkage.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const resolutions = new Map(readJson('data/sources/pbdb-taxon-resolution.json').resolutions.map((entry) => [entry.entityId, entry]))
const entities = readJson('data/registry/entities/entities.json')
const entityById = new Map(entities.map((entry) => [entry.id, entry]))
const timeScale = readJson('data/time-scale.json')
const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
const recordsByPeriod = new Map(periodNames.map((period) => [period, readJson(`data/fossils/${period.toLowerCase()}.json`)]))
const allRecords = [...recordsByPeriod.values()].flat()

const nodes = {}
const globalMatchedByMethod = {
  exactExternalId: new Set(),
  acceptedName: new Set(),
  higherClassification: new Set(),
}
const matchedByPackage = new Map()
const nameOwners = new Map()

for (const node of flattenTree(ontology)) {
  const normalizedName = normalizeTaxonName(node.name)
  if (!nameOwners.has(normalizedName)) nameOwners.set(normalizedName, [])
  nameOwners.get(normalizedName).push(node.id)
  const scope = descendantTaxonScope(node)
  const periods = []
  const matchMethods = { exactExternalId: 0, acceptedName: 0, higherClassification: 0 }
  let matchedTotal = 0
  const packageId = entityById.get(node.id)?.packageId ?? 'atlas-core'
  if (!matchedByPackage.has(packageId)) matchedByPackage.set(packageId, new Set())
  for (const [period, records] of recordsByPeriod) {
    let periodMatches = 0
    for (const record of records) {
      const method = occurrenceMatchMethod(record, scope)
      if (!method) continue
      matchMethods[method] += 1
      matchedTotal += 1
      periodMatches += 1
      if ((record.packageId ?? 'atlas-core') === packageId) matchedByPackage.get(packageId).add(record.oid)
      if (![...Object.values(globalMatchedByMethod)].some((set) => set.has(record.oid))) globalMatchedByMethod[method].add(record.oid)
    }
    if (periodMatches) periods.push(period)
  }
  const resolution = resolutions.get(node.id)
  const queryStatus = ['navigation-group', 'informal-group'].includes(node.entityKind)
    ? 'navigation-only'
    : node.entityKind === 'historical-grade'
      ? 'historical-grade'
      : resolution?.resolutionStatus === 'resolved'
        ? matchedTotal ? 'resolved-and-observed' : 'resolved-zero-in-bounded-sample'
        : 'external-id-unresolved'
  nodes[node.id] = {
    entityId: node.id,
    entityKind: node.entityKind,
    externalTaxonId: node.taxonId || null,
    scientificNameNormalized: normalizeTaxonName(node.name),
    externalResolutionStatus: resolution?.externalResolutionStatus ?? 'not-applicable',
    queryStatus,
    descendantEntityIds: entityById.get(node.id)?.compositionScope.descendantEntityIds ?? [],
    descendantTaxonIds: [...scope.ids],
    descendantScientificNames: [...scope.names],
    matchMethods,
    periods,
    matchedTotal,
  }
}

const sourceTotal = allRecords.length
const linkedOccurrenceTotal = Object.values(globalMatchedByMethod).reduce((sum, set) => sum + set.size, 0)
const packageCoverage = Object.fromEntries([...new Set(entities.map((entity) => entity.packageId))].sort().map((packageId) => {
  const packageSourceTotal = allRecords.filter((record) => (record.packageId ?? 'atlas-core') === packageId).length
  const linkedTotal = matchedByPackage.get(packageId)?.size ?? 0
  return [packageId, {
    sourceTotal: packageSourceTotal,
    linkedTotal,
    linkedRate: packageSourceTotal ? Number((linkedTotal / packageSourceTotal).toFixed(6)) : 1,
  }]
}))
const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const profileTotals = Object.fromEntries(profiles.map((profile) => [profile.id, nodes[profile.treeNodeId]?.matchedTotal ?? 0]))
const ambiguousNameCollisions = [...nameOwners.entries()]
  .filter(([, entityIds]) => entityIds.length > 1)
  .map(([normalizedName, entityIds]) => ({ normalizedName, entityIds }))

const coverage = {
  schemaVersion: 2,
  generatedFrom: [
    'data/navigation/atlas-ontology.json',
    'data/registry/entities/entities.json',
    'data/sources/pbdb-taxon-resolution.json',
    'data/fossils/*.json',
  ],
  scope: 'Bundled bounded occurrence sample only; this is entity-linkage coverage, not biological coverage or sampling completeness.',
  sourceTotal,
  linkedOccurrenceTotal,
  linkedOccurrenceRate: Number((linkedOccurrenceTotal / sourceTotal).toFixed(6)),
  unmatchedOccurrenceTotal: sourceTotal - linkedOccurrenceTotal,
  linkageMethods: Object.fromEntries(Object.entries(globalMatchedByMethod).map(([method, ids]) => [method, ids.size])),
  indexedEntityCount: Object.keys(nodes).length,
  resolutionSummary: {
    resolved: [...resolutions.values()].filter((entry) => entry.resolutionStatus === 'resolved').length,
    unresolved: [...resolutions.values()].filter((entry) => entry.resolutionStatus !== 'resolved').length,
    needsConceptReview: [...resolutions.values()].filter((entry) => entry.conceptReviewStatus === 'needs-concept-review').length,
  },
  packageCoverage,
  profileTotals,
  zeroMatchProfiles: Object.entries(profileTotals).filter(([, count]) => count === 0).map(([id]) => id),
  ambiguousNameCollisions,
}

const output = {
  schemaVersion: 3,
  generatedFrom: 'Canonical entity IDs, the pinned PBDB resolution ledger and bundled occurrence chunks',
  sourceTotal,
  samplingMethod: 'bounded non-random PBDB API prefix sample; disjoint matching precedence is exact external ID, accepted name, then stored PBDB higher classification',
  nodes,
}

function writeJson(relativePath, value) {
  const path = join(rootDir, relativePath)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`)
}

writeJson('data/indexes/entity-occurrence-index.json', output)
writeJson('data/indexes/entity-linkage-coverage.json', coverage)
if (process.argv.includes('--write-baseline')) writeJson('data/indexes/entity-linkage-baseline.json', {
  schemaVersion: 1,
  frozenAt: new Date().toISOString().slice(0, 10),
  sourceTotal,
  minimumLinkedOccurrenceRate: Number(Math.max(0, coverage.linkedOccurrenceRate - 0.005).toFixed(6)),
  minimumLinkageMethods: Object.fromEntries(Object.entries(coverage.linkageMethods).map(([method, count]) => [method, Math.floor(count * 0.98)])),
  packageMinimumRates: Object.fromEntries(Object.entries(packageCoverage).map(([packageId, value]) => [packageId, Number(Math.max(0, value.linkedRate - 0.01).toFixed(6))])),
  unresolvedEntityIds: [...resolutions.values()].filter((entry) => entry.resolutionStatus !== 'resolved').map((entry) => entry.entityId).sort(),
  ambiguousNameCollisions,
})

console.log(`Built entity occurrence index for ${Object.keys(nodes).length} stable entity IDs.`)
console.log(`Linked ${linkedOccurrenceTotal.toLocaleString()} of ${sourceTotal.toLocaleString()} bundled occurrences; ${coverage.zeroMatchProfiles.length} flagship profiles have zero matches.`)
