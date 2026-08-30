import { createHash } from 'node:crypto'
import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'
import {
  TARGETED_PACKAGE_RECORD_LIMIT,
  TARGETED_PBDB_PAGE_SIZE,
  checksumOccurrenceIds,
  normalizePbdbOccurrence,
  numericOccurrenceId,
  queryEligibility,
  sha256,
} from './targeted-pbdb-lib.mjs'

const TARGET_PACKAGE_IDS = [
  'early-land-plants',
  'gymnosperms',
  'angiospermae',
  'sponges-cnidarians',
  'molluscs-brachiopods',
  'trilobites-chelicerates',
  'crustaceans-insects',
  'echinoderms',
  'early-fishes',
  'chondrichthyes',
  'actinopterygii',
  'tetrapod-transition',
  'amphibia',
  'turtles-lepidosaurs',
  'marine-reptiles-pterosaurs',
  'atlas-core',
  'dinosauria',
  'crocodylomorphs-birds',
  'mammal-origins',
  'perissodactyla',
  'primates',
  'carnivora',
  'cetartiodactyla',
  'other-mammals',
]
const endpoint = 'https://paleobiodb.org/data1.2/occs/list.json'
const maximumCompleteSubqueryRows = 100000
const args = process.argv.slice(2)
const requestedPackages = args.flatMap((value, index) => value === '--package' ? [args[index + 1]] : []).filter(Boolean)
const packageIds = requestedPackages.length ? requestedPackages : TARGET_PACKAGE_IDS
const replace = args.includes('--replace')
const recordLimitIndex = args.indexOf('--record-limit')
const recordLimit = Number(recordLimitIndex >= 0 ? args[recordLimitIndex + 1] : TARGETED_PACKAGE_RECORD_LIMIT)
if (!Number.isInteger(recordLimit) || recordLimit < 1 || recordLimit > 10000) throw new Error('--record-limit must be an integer from 1 to 10000')
for (const packageId of packageIds) if (!TARGET_PACKAGE_IDS.includes(packageId)) throw new Error(`Unknown targeted package ${packageId}`)

const registry = readJson('data/registry/package-registry.json')
const resolutionLedger = readJson('data/sources/pbdb-taxon-resolution.json')
const resolutions = new Map(resolutionLedger.resolutions.map((entry) => [entry.entityId, entry]))
const packageById = new Map(registry.packages.map((entry) => [entry.id, entry]))

function snapshotPath(packageId) {
  return `data/sources/pbdb-targeted-${packageId}-occurrences-v1.json`
}

async function fetchPage(url, entityId) {
  let lastError
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { 'user-agent': 'EvoAtlasDataPipeline/2026.08 (targeted complete taxon occurrence audit)' } })
      if (!response.ok) throw new Error(`PBDB returned ${response.status} ${response.statusText}`)
      return { raw: await response.text(), retrievedAt: response.headers.get('date') }
    } catch (error) {
      lastError = error
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 1000))
    }
  }
  throw new Error(`${entityId}: ${lastError?.message ?? 'PBDB request failed'}`)
}

class BoundedOccurrenceRecords {
  constructor(limit) {
    this.limit = limit
    this.records = new Map()
    this.heap = []
  }

  add(record, entityId) {
    const existing = this.records.get(record.oid)
    if (existing) {
      if (!existing.matchedEntityIds.includes(entityId)) existing.matchedEntityIds.push(entityId)
      return
    }
    const item = { key: numericOccurrenceId(record.oid), oid: record.oid }
    const candidate = { ...record, matchedEntityIds: [entityId] }
    if (this.heap.length < this.limit) {
      this.records.set(record.oid, candidate)
      this.heap.push(item)
      this.bubbleUp(this.heap.length - 1)
      return
    }
    if (item.key >= this.heap[0].key) return
    this.records.delete(this.heap[0].oid)
    this.records.set(record.oid, candidate)
    this.heap[0] = item
    this.bubbleDown(0)
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (this.heap[parent].key >= this.heap[index].key) break
      ;[this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
      index = parent
    }
  }

  bubbleDown(index) {
    while (true) {
      const left = index * 2 + 1
      const right = left + 1
      let largest = index
      if (left < this.heap.length && this.heap[left].key > this.heap[largest].key) largest = left
      if (right < this.heap.length && this.heap[right].key > this.heap[largest].key) largest = right
      if (largest === index) return
      ;[this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
      index = largest
    }
  }

  values() {
    return this.records.values()
  }
}

async function fetchSubquery(packageId, entityId, boundedRecords) {
  const resolution = resolutions.get(entityId)
  const conceptEligibility = queryEligibility(resolution)
  const eligibility = conceptEligibility.eligible && (resolution.occurrenceCount ?? 0) > maximumCompleteSubqueryRows
    ? { eligible: false, reason: `scoped-query-boundary-over-${maximumCompleteSubqueryRows}-snapshot-rows` }
    : conceptEligibility
  if (!eligibility.eligible) {
    return {
      ledger: {
        entityId,
        taxonConcept: resolution?.localName ?? entityId,
        acceptedBaseName: resolution?.acceptedName ?? null,
        externalTaxonId: resolution?.pbdbId ?? null,
        queryParameters: null,
        retrievedAt: null,
        resolutionSnapshotOccurrenceCount: resolution?.occurrenceCount ?? null,
        upstreamReportedTotal: null,
        rowsFetched: null,
        pagesFetched: null,
        completeness: 'withheld',
        conceptReviewStatus: resolution?.conceptReviewStatus ?? 'unresolved',
        queryEligible: false,
        eligibilityBasis: eligibility.reason,
        rawPageSha256: [],
        rawResponseSha256: null,
        normalizedRowsSha256: null,
        occurrenceIdSha256: null,
      },
      snapshot: null,
    }
  }

  const baseId = resolution.pbdbId.replace(/^txn:/, '')
  const rawHash = createHash('sha256')
  const normalizedHash = createHash('sha256')
  const occurrenceIds = []
  const rawPageSha256 = []
  let offset = 0
  let pagesFetched = 0
  let retrievedAt = null
  while (true) {
    const parameters = new URLSearchParams({
      base_id: baseId,
      limit: String(TARGETED_PBDB_PAGE_SIZE),
      offset: String(offset),
      show: 'full,class',
      order: 'id',
    })
    parameters.append('datainfo', '')
    const { raw, retrievedAt: responseDate } = await fetchPage(`${endpoint}?${parameters}`, entityId)
    retrievedAt ??= responseDate ? new Date(responseDate).toISOString() : new Date().toISOString()
    pagesFetched += 1
    rawHash.update(raw)
    rawPageSha256.push(sha256(raw))
    const payload = JSON.parse(raw)
    if (payload.warnings?.length) throw new Error(`${entityId}: PBDB warning: ${payload.warnings.join('; ')}`)
    const page = payload.records ?? []
    for (const providerRecord of page) {
      const record = normalizePbdbOccurrence(providerRecord, packageId)
      normalizedHash.update(`${JSON.stringify(record)}\n`)
      occurrenceIds.push(record.oid)
      boundedRecords.add(record, entityId)
    }
    offset += page.length
    if (page.length < TARGETED_PBDB_PAGE_SIZE) break
  }
  const normalizedRowsSha256 = normalizedHash.digest('hex')
  const occurrenceIdSha256 = checksumOccurrenceIds(occurrenceIds)
  const rawResponseSha256 = rawHash.digest('hex')
  const queryParameters = { base_id: baseId, base_name: resolution.acceptedName, show: 'full,class', order: 'id', pageSize: TARGETED_PBDB_PAGE_SIZE }
  console.log(`${packageId}/${entityId}: ${occurrenceIds.length.toLocaleString()} rows in ${pagesFetched} page(s)`)
  return {
    ledger: {
      entityId,
      taxonConcept: resolution.localName,
      acceptedBaseName: resolution.acceptedName,
      externalTaxonId: resolution.pbdbId,
      queryParameters,
      retrievedAt,
      resolutionSnapshotOccurrenceCount: resolution.occurrenceCount,
      upstreamReportedTotal: occurrenceIds.length,
      rowsFetched: occurrenceIds.length,
      pagesFetched,
      completeness: 'complete',
      conceptReviewStatus: resolution.conceptReviewStatus,
      queryEligible: true,
      eligibilityBasis: eligibility.reason,
      rawPageSha256,
      rawResponseSha256,
      normalizedRowsSha256,
      occurrenceIdSha256,
    },
    snapshot: {
      entityId,
      taxonConcept: resolution.localName,
      acceptedBaseName: resolution.acceptedName,
      externalTaxonId: resolution.pbdbId,
      retrievedAt,
      upstreamReportedTotal: occurrenceIds.length,
      pagesFetched,
      paginationComplete: true,
      rawResponseSha256,
      normalizedRowsSha256,
      occurrenceIdSha256,
      occurrenceIds,
    },
  }
}

for (const packageId of packageIds) {
  const packageEntry = packageById.get(packageId)
  if (!packageEntry) throw new Error(`Package registry is missing ${packageId}`)
  const packageDirectory = join(rootDir, packageEntry.canonicalPath)
  if (!existsSync(packageDirectory) || !readdirSync(packageDirectory).includes('entities.json')) throw new Error(`Package directory is incomplete: ${packageDirectory}`)
  const entityIds = readJson(`${packageEntry.canonicalPath}/entities.json`).entityIds
  const outputRelativePath = snapshotPath(packageId)
  const outputPath = join(rootDir, outputRelativePath)
  if (existsSync(outputPath) && !replace) throw new Error(`Refusing to overwrite ${outputPath}; pass --replace after reviewing upstream changes.`)
  const boundedRecords = new BoundedOccurrenceRecords(recordLimit)
  const results = []
  for (const entityId of entityIds) results.push(await fetchSubquery(packageId, entityId, boundedRecords))
  const eligible = results.filter((result) => result.ledger.queryEligible)
  const withheld = results.filter((result) => !result.ledger.queryEligible)
  const records = [...boundedRecords.values()].sort((left, right) => numericOccurrenceId(left.oid) - numericOccurrenceId(right.oid))
  const queryResults = results.flatMap((result) => result.snapshot ? [result.snapshot] : [])
  const allOccurrenceIds = [...new Set(queryResults.flatMap((entry) => entry.occurrenceIds))].sort((left, right) => numericOccurrenceId(left) - numericOccurrenceId(right))
  const fetchedRows = eligible.reduce((sum, result) => sum + result.ledger.rowsFetched, 0)
  const pagesFetched = eligible.reduce((sum, result) => sum + result.ledger.pagesFetched, 0)
  const retrievedAt = eligible.map((result) => result.ledger.retrievedAt).filter(Boolean).sort().at(-1) ?? new Date().toISOString()
  const snapshot = {
    schemaVersion: 1,
    snapshotId: `pbdb-targeted-${packageId}-occurrences-v1`,
    packageId,
    source: {
      endpoint,
      apiVersion: '1.2',
      retrievedAt,
      sourceReferenceId: 'pbdb-api-2016',
      license: 'CC0-1.0',
    },
    method: 'Every resolution-ledger-eligible entity query is fully paginated by pinned accepted PBDB base_id. All result occurrence IDs and full-result checksums are retained; normalized occurrence detail is a deterministic lowest-ID package-level subset.',
    normalizerVersion: 'targeted-pbdb-v1',
    recordSelection: {
      method: 'deterministic-lowest-occurrence-id',
      limit: recordLimit,
      completeness: allOccurrenceIds.length <= recordLimit ? 'complete' : 'bounded',
    },
    queryResults,
    withheldQueries: withheld.map((result) => ({
      entityId: result.ledger.entityId,
      taxonConcept: result.ledger.taxonConcept,
      conceptReviewStatus: result.ledger.conceptReviewStatus,
      eligibilityBasis: result.ledger.eligibilityBasis,
    })),
    summedSubqueryRows: fetchedRows,
    uniqueOccurrenceCount: allOccurrenceIds.length,
    retainedRecordCount: records.length,
    allOccurrenceIdSha256: checksumOccurrenceIds(allOccurrenceIds),
    recordsSha256: sha256(JSON.stringify(records)),
    records,
  }
  const ledger = {
    schemaVersion: 2,
    packageId,
    provider: 'Paleobiology Database',
    endpoint,
    endpointVersion: '1.2',
    occurrenceSnapshot: outputRelativePath,
    queryParameters: {
      template: 'base_id={accepted PBDB taxon number}&limit=5000&offset={offset}&show=full,class&order=id&datainfo',
      pageSize: TARGETED_PBDB_PAGE_SIZE,
      acceptedBaseNamesRecorded: true,
    },
    requestedAt: retrievedAt,
    upstreamReportedTotal: eligible.length ? fetchedRows : null,
    pagesFetched,
    rowsFetched: fetchedRows,
    rowsAccepted: records.length,
    rowsRejected: 0,
    rowsOutsidePackage: 0,
    uniqueRowsObserved: allOccurrenceIds.length,
    uniqueRowsRetained: records.length,
    withheldSubqueryCount: withheld.length,
    responseChecksums: eligible.map((result) => result.ledger.rawResponseSha256),
    completeness: 'bounded',
    selectionMethod: 'Complete pagination for every eligible resolution-ledger taxon concept; package occurrence detail is a deterministic bounded projection while all result identities and checksums remain in the source snapshot.',
    limitations: [
      'Complete applies to each recorded PBDB subquery at retrieval time, not to the fossil record or biological sampling.',
      'Subqueries overlap; summed rows and page counts must not be interpreted as unique occurrence or diversity totals.',
      'Historical grades, unresolved names and needs-concept-review mappings are explicitly withheld rather than represented by fabricated identifiers or zero results.',
      `Accepted broad roots with more than ${maximumCompleteSubqueryRows.toLocaleString('en-US')} rows in the pinned resolution snapshot are withheld from this targeted release in favor of complete scoped subqueries.`,
      'The package occurrence-detail projection is bounded by occurrence identifier and is neither random nor representative; complete result identities remain recorded per subquery.',
      'PBDB does not return an independent total in this JSON response; upstreamReportedTotal records the row count observed after terminal-page pagination.',
    ],
    subqueries: results.map((result) => result.ledger),
  }
  snapshot.packageQueryLedger = ledger
  writeFileSync(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
  writeFileSync(join(packageDirectory, 'query-ledger.json'), `${JSON.stringify(ledger, null, 2)}\n`, 'utf8')
  console.log(`${packageId}: ${eligible.length} complete subqueries, ${withheld.length} withheld, ${allOccurrenceIds.length.toLocaleString()} unique IDs, ${records.length.toLocaleString()} retained records`)
}
