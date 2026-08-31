import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { packageDefinitions } from './package-definitions.mjs'
import { descendantTaxonScope, normalizeTaxonName, occurrenceMatchMethod } from './taxon-linkage.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const resolutions = new Map(readJson('data/sources/pbdb-taxon-resolution.json').resolutions.map((entry) => [entry.entityId, entry]))
const entities = readJson('data/registry/entities/entities.json')
const targetedSnapshots = packageDefinitions.map((definition) => readJson(`data/sources/pbdb-targeted-${definition.id}-occurrences-v1.json.gz`))
const completeQueryByEntityId = new Map(targetedSnapshots.flatMap((snapshot) => snapshot.packageQueryLedger.subqueries.map((entry) => [entry.entityId, entry])))
const entityById = new Map(entities.map((entry) => [entry.id, entry]))
const timeScale = readJson('data/time-scale.json')
const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
const recordsByPeriod = new Map(periodNames.map((period) => [period, readJson(`data/fossils/${period.toLowerCase()}.json`)]))
const allRecords = [...recordsByPeriod.values()].flat()
const ontologyNodes = flattenTree(ontology)
const mappingCanDriveQuery = (entityId) => {
  const resolution = resolutions.get(entityId)
  return resolution?.resolutionStatus === 'resolved' && (resolution.conceptReviewStatus !== 'needs-concept-review' || resolution.humanCuratorDecision === 'accept-external-mapping')
}
const canonicalTaxonIds = new Set(ontologyNodes.filter((node) => mappingCanDriveQuery(node.id)).map((node) => node.taxonId).filter(Boolean))
const canonicalNames = new Set(ontologyNodes.filter((node) => mappingCanDriveQuery(node.id)).map((node) => normalizeTaxonName(node.name)))

function strongestGlobalMatch(record) {
  if (record.tid && canonicalTaxonIds.has(record.tid)) return 'exactExternalId'
  if (record.tna && canonicalNames.has(normalizeTaxonName(record.tna))) return 'acceptedName'
  const scope = { ids: canonicalTaxonIds, names: canonicalNames }
  return occurrenceMatchMethod(record, scope) === 'higherClassification' ? 'higherClassification' : null
}

const nodes = {}
const globalMatchedByMethod = {
  exactExternalId: new Set(),
  acceptedName: new Set(),
  higherClassification: new Set(),
}
const matchedByPackage = new Map()
const nameOwners = new Map()

for (const node of ontologyNodes) {
  const normalizedName = normalizeTaxonName(node.name)
  if (!nameOwners.has(normalizedName)) nameOwners.set(normalizedName, [])
  nameOwners.get(normalizedName).push(node.id)
  const scope = descendantTaxonScope(node)
  for (const candidate of flattenTree(node)) {
    if (mappingCanDriveQuery(candidate.id)) continue
    if (candidate.taxonId) scope.ids.delete(candidate.taxonId)
    scope.names.delete(normalizeTaxonName(candidate.name))
  }
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
    }
    if (periodMatches) periods.push(period)
  }
  const resolution = resolutions.get(node.id)
  const completeQuery = completeQueryByEntityId.get(node.id)
  const queryStatus = completeQuery?.queryEligible && mappingCanDriveQuery(node.id)
    ? (completeQuery.rowsFetched ? 'complete-query-observed' : 'complete-query-zero')
    : ['navigation-group', 'informal-group'].includes(node.entityKind)
    ? 'navigation-only'
    : node.entityKind === 'historical-grade'
      ? 'historical-grade'
        : resolution?.conceptReviewStatus === 'needs-concept-review' && resolution?.humanCuratorDecision !== 'accept-external-mapping'
          ? 'concept-review-required'
          : resolution?.resolutionStatus === 'resolved'
        ? matchedTotal ? 'resolved-and-observed' : 'resolved-zero-in-bounded-sample'
        : 'external-id-unresolved'
  nodes[node.id] = {
    entityId: node.id,
    packageId,
    entityKind: node.entityKind,
    externalTaxonId: mappingCanDriveQuery(node.id) ? node.taxonId || null : null,
    scientificNameNormalized: normalizeTaxonName(node.name),
    externalResolutionStatus: resolution?.externalResolutionStatus ?? 'not-applicable',
    queryStatus,
    descendantEntityIds: entityById.get(node.id)?.compositionScope.descendantEntityIds ?? [],
    descendantTaxonIds: [...scope.ids],
    descendantScientificNames: [...scope.names],
    matchMethods,
    completeSnapshotAvailable: Boolean(completeQuery?.queryEligible && mappingCanDriveQuery(node.id)),
    completeSnapshotRows: completeQuery?.queryEligible ? completeQuery.rowsFetched ?? 0 : null,
    periods,
    matchedTotal,
  }
}

for (const record of allRecords) {
  const method = strongestGlobalMatch(record)
  if (method) globalMatchedByMethod[method].add(record.oid)
}

const sourceTotal = allRecords.length
const linkedOccurrenceTotal = Object.values(globalMatchedByMethod).reduce((sum, set) => sum + set.size, 0)
const packageCoverage = Object.fromEntries([...new Set(entities.map((entity) => entity.packageId))].sort().map((packageId) => {
  const packageSourceTotal = allRecords.filter((record) => (record.packageId ?? 'atlas-core') === packageId).length
  const linkedTotal = matchedByPackage.get(packageId)?.size ?? 0
  return [packageId, {
    sourceTotal: packageSourceTotal,
    linkedTotal,
    linkedRate: packageSourceTotal ? Number((linkedTotal / packageSourceTotal).toFixed(6)) : null,
    coverageStatus: packageSourceTotal ? 'sampled' : 'no-sampled-rows',
  }]
}))
const profiles = readJson('data/registry/taxon-profiles.json')
const profileTotals = Object.fromEntries(profiles.map((profile) => {
  const completeQuery = completeQueryByEntityId.get(profile.treeNodeId)
  return [profile.id, completeQuery ? (completeQuery.queryEligible ? completeQuery.rowsFetched ?? 0 : 0) : nodes[profile.treeNodeId]?.matchedTotal ?? 0]
}))
const profileQueryStatus = Object.fromEntries(profiles.map((profile) => {
  if (!mappingCanDriveQuery(profile.treeNodeId)) return [profile.id, 'concept-review-required']
  const completeQuery = completeQueryByEntityId.get(profile.treeNodeId)
  if (completeQuery?.queryEligible) return [profile.id, completeQuery.rowsFetched ? 'complete-query-observed' : 'complete-query-zero']
  return [profile.id, nodes[profile.treeNodeId]?.queryStatus ?? 'outside-snapshot-scope']
}))
const ambiguousNameCollisions = [...nameOwners.entries()]
  .filter(([, entityIds]) => entityIds.length > 1)
  .map(([normalizedName, entityIds]) => ({ normalizedName, entityIds }))

const coverage = {
  schemaVersion: 3,
  generatedFrom: [
    'data/navigation/atlas-ontology.json',
    'data/registry/entities/entities.json',
    'data/sources/pbdb-taxon-resolution.json',
    'data/sources/pbdb-targeted-*-occurrences-v1.json.gz',
    'data/fossils/*.json',
  ],
  scope: 'Bundled bounded occurrence sample only; this is entity-linkage coverage, not biological coverage or sampling completeness.',
  sourceTotal,
  linkedOccurrenceTotal,
  linkedOccurrenceRate: Number((linkedOccurrenceTotal / sourceTotal).toFixed(6)),
  broadLinkTotal: linkedOccurrenceTotal,
  broadLinkRate: Number((linkedOccurrenceTotal / sourceTotal).toFixed(6)),
  directLinkTotal: globalMatchedByMethod.exactExternalId.size + globalMatchedByMethod.acceptedName.size,
  directLinkRate: Number(((globalMatchedByMethod.exactExternalId.size + globalMatchedByMethod.acceptedName.size) / sourceTotal).toFixed(6)),
  precisionStatement: 'Direct links are exact external-ID or accepted-name matches. Broad links additionally include higher-classification placement and must not be interpreted as precise entity assignments.',
  unmatchedOccurrenceTotal: sourceTotal - linkedOccurrenceTotal,
  linkageMethods: Object.fromEntries(Object.entries(globalMatchedByMethod).map(([method, ids]) => [method, ids.size])),
  indexedEntityCount: Object.keys(nodes).length,
  resolutionSummary: {
    resolved: [...resolutions.values()].filter((entry) => entry.resolutionStatus === 'resolved').length,
    unresolved: [...resolutions.values()].filter((entry) => entry.resolutionStatus !== 'resolved').length,
    needsConceptReview: [...resolutions.values()].filter((entry) => entry.conceptReviewStatus === 'needs-concept-review').length,
    conceptResolved: [...resolutions.values()].filter((entry) => ['compatible', 'not-required-navigation-edge'].includes(entry.conceptReviewStatus) || entry.humanCuratorDecision === 'accept-external-mapping').length,
    humanCuratorDecisions: [...resolutions.values()].filter((entry) => entry.humanCuratorDecision).length,
  },
  packageCoverage,
  profileTotals,
  profileQueryStatus,
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
  schemaVersion: 2,
  frozenAt: new Date().toISOString().slice(0, 10),
  sourceTotal,
  minimumLinkedOccurrenceRate: Number(Math.max(0, coverage.linkedOccurrenceRate - 0.005).toFixed(6)),
  minimumLinkageMethods: Object.fromEntries(Object.entries(coverage.linkageMethods).map(([method, count]) => [method, Math.floor(count * 0.98)])),
  packageMinimumRates: Object.fromEntries(Object.entries(packageCoverage).filter(([, value]) => value.coverageStatus === 'sampled').map(([packageId, value]) => [packageId, Number(Math.max(0, value.linkedRate - 0.01).toFixed(6))])),
  noSamplePackageIds: Object.entries(packageCoverage).filter(([, value]) => value.coverageStatus === 'no-sampled-rows').map(([packageId]) => packageId),
  unresolvedEntityIds: [...resolutions.values()].filter((entry) => entry.resolutionStatus !== 'resolved').map((entry) => entry.entityId).sort(),
  ambiguousNameCollisions,
})

console.log(`Built entity occurrence index for ${Object.keys(nodes).length} stable entity IDs.`)
console.log(`Linked ${linkedOccurrenceTotal.toLocaleString()} of ${sourceTotal.toLocaleString()} bundled occurrences; ${coverage.zeroMatchProfiles.length} flagship profiles have zero matches.`)
