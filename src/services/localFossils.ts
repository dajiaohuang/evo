import type { FossilOccurrence } from '../types'
import type { TaxonOccurrenceQueryResult, TaxonQueryScope } from '../types'
import entityOccurrenceIndexData from '../../data/indexes/entity-occurrence-index.json'
import { loadOccurrenceManifest, loadPackageManifest, loadRuntimeFile } from '../data-client/staticDataClient'

export const FOSSIL_PERIODS = Object.freeze([
  'Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian',
  'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary',
])

const fossilStore: Record<string, FossilOccurrence[]> = {}
const loadingPeriods = new Map<string, Promise<FossilOccurrence[]>>()
interface CompleteProfileSnapshot {
  queryResults: Array<{ profileId: string; entityId: string; rowsFetched: number; paginationComplete: boolean; zeroInterpretation: 'complete-query-observed' | 'complete-query-zero' }>
  records: Array<FossilOccurrence & { matchedProfileIds: string[] }>
}
let completeProfileSnapshotPromise: Promise<CompleteProfileSnapshot> | null = null

async function loadCompleteProfileSnapshot(): Promise<CompleteProfileSnapshot> {
  if (!completeProfileSnapshotPromise) completeProfileSnapshotPromise = loadPackageManifest('perissodactyla').then((manifest) => {
    const file = manifest.files.occurrenceSnapshot
    if (!file) throw new Error('Perissodactyla package manifest is missing its complete occurrence snapshot')
    return loadRuntimeFile<CompleteProfileSnapshot>(file)
  })
  return completeProfileSnapshotPromise
}
interface EntityOccurrenceIndexEntry {
  entityId: string
  externalTaxonId: string | null
  scientificNameNormalized: string
  descendantTaxonIds: string[]
  descendantScientificNames: string[]
  queryStatus: 'complete-query-observed' | 'complete-query-zero' | 'concept-review-required' | 'resolved-and-observed' | 'resolved-zero-in-bounded-sample' | 'external-id-unresolved' | 'navigation-only' | 'historical-grade' | 'outside-snapshot-scope'
  matchMethods: { exactExternalId: number; acceptedName: number; higherClassification: number }
  completeSnapshotAvailable: boolean
  completeSnapshotRows: number | null
  periods: string[]
  matchedTotal: number
}

interface EntityOccurrenceIndex {
  sourceTotal: number
  samplingMethod: string
  nodes: Record<string, EntityOccurrenceIndexEntry>
}

const entityOccurrenceIndex = entityOccurrenceIndexData as EntityOccurrenceIndex

export async function getFossilsByInterval(period: string): Promise<FossilOccurrence[]> {
  if (fossilStore[period]) return fossilStore[period]
  if (loadingPeriods.has(period)) return loadingPeriods.get(period)!
  if (!FOSSIL_PERIODS.includes(period)) return []

  const promise = loadOccurrenceManifest().then(async (manifest) => {
    const shards = manifest.periods[period] ?? []
    const records = (await Promise.all(shards.map((file) => loadRuntimeFile<FossilOccurrence[]>(file)))).flat()
    fossilStore[period] = records
    loadingPeriods.delete(period)
    return records
  }, (error) => {
    loadingPeriods.delete(period)
    throw error
  })
  loadingPeriods.set(period, promise)
  return promise
}

export async function getFossilsByEntity(
  entityId: string,
  scope: TaxonQueryScope = 'descendants',
): Promise<TaxonOccurrenceQueryResult> {
  const indexed = entityOccurrenceIndex.nodes[entityId]
  if (indexed?.completeSnapshotAvailable) {
    const completeSnapshot = await loadCompleteProfileSnapshot()
    const completeQuery = completeSnapshot.queryResults.find((entry) => entry.entityId === entityId)
    if (!completeQuery) throw new Error(`Complete occurrence snapshot metadata is missing ${entityId}`)
    const represented = completeSnapshot.records.filter((record) => record.matchedProfileIds.includes(completeQuery.profileId))
    const records = scope === 'exact'
      ? represented.filter((record) => record.tid === indexed.externalTaxonId || (record.tna ?? '').trim().toLocaleLowerCase() === indexed.scientificNameNormalized)
      : represented
    return {
      entityId, scope, effectiveScope: scope, indexStatus: 'hit', fallbackApplied: false,
      queryStatus: completeQuery.zeroInterpretation, matchMethods: indexed?.matchMethods ?? { exactExternalId: 0, acceptedName: 0, higherClassification: 0 },
      sourceTotal: completeSnapshot.records.length, matchedTotal: records.length, rowsLoaded: records.length, truncated: !completeQuery.paginationComplete,
      samplingMethod: 'complete paginated PBDB base-id snapshot', loadedPeriods: [...FOSSIL_PERIODS], records,
    }
  }
  const fallbackApplied = !indexed
  const effectiveScope: TaxonQueryScope = fallbackApplied ? 'exact' : scope
  const taxonIds = effectiveScope === 'descendants' && indexed
    ? new Set(indexed.descendantTaxonIds)
    : new Set(indexed?.externalTaxonId ? [indexed.externalTaxonId] : [])
  const scientificNames = effectiveScope === 'descendants' && indexed
    ? new Set(indexed.descendantScientificNames)
    : new Set(indexed ? [indexed.scientificNameNormalized] : [])
  const periods = indexed?.periods.length ? indexed.periods : [...FOSSIL_PERIODS]
  const chunks = await Promise.all(periods.map(getFossilsByInterval))
  const records = chunks.flat().filter((occurrence) => {
    if (occurrence.tid && taxonIds.has(occurrence.tid)) return true
    if (occurrence.tna && scientificNames.has(occurrence.tna.trim().toLocaleLowerCase())) return true
    if (effectiveScope === 'exact') return false
    return Object.values(occurrence.classification ?? {}).some((name) => scientificNames.has(name.trim().toLocaleLowerCase()))
  })
  return {
    entityId,
    scope,
    effectiveScope,
    indexStatus: indexed ? 'hit' : 'miss',
    fallbackApplied,
    queryStatus: indexed?.queryStatus ?? 'outside-snapshot-scope',
    matchMethods: indexed?.matchMethods ?? { exactExternalId: 0, acceptedName: 0, higherClassification: 0 },
    sourceTotal: entityOccurrenceIndex.sourceTotal,
    matchedTotal: records.length,
    rowsLoaded: records.length,
    truncated: false,
    samplingMethod: entityOccurrenceIndex.samplingMethod,
    loadedPeriods: periods,
    records,
  }
}

export async function getAllFossils(): Promise<FossilOccurrence[]> {
  const chunks = await Promise.all(FOSSIL_PERIODS.map(getFossilsByInterval))
  return chunks.flat()
}

export function getLoadedFossilTotal(period: string): number {
  return fossilStore[period]?.length ?? 0
}
