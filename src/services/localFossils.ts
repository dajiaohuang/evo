import type { FossilOccurrence } from '../types'
import type { TaxonOccurrenceQueryResult, TaxonQueryScope } from '../types'
import entityOccurrenceIndexData from '../../data/indexes/entity-occurrence-index.json'
import { loadOccurrenceManifest, loadRuntimeFile } from '../data-client/staticDataClient'

export const FOSSIL_PERIODS = Object.freeze([
  'Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian',
  'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary',
])

const fossilStore: Record<string, FossilOccurrence[]> = {}
const loadingPeriods = new Map<string, Promise<FossilOccurrence[]>>()
interface EntityOccurrenceIndexEntry {
  entityId: string
  externalTaxonId: string | null
  scientificNameNormalized: string
  descendantTaxonIds: string[]
  descendantScientificNames: string[]
  queryStatus: 'resolved-and-observed' | 'resolved-zero-in-bounded-sample' | 'external-id-unresolved' | 'navigation-only' | 'historical-grade' | 'outside-snapshot-scope'
  matchMethods: { exactExternalId: number; acceptedName: number; higherClassification: number }
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
