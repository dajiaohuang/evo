import type { FossilOccurrence } from '../types'
import type { TaxonOccurrenceQueryResult, TaxonQueryScope } from '../types'
import taxonPeriodIndexData from '../../data/indexes/taxon-period-index.json'
import { loadOccurrenceManifest, loadRuntimeFile } from '../data-client/staticDataClient'

export const FOSSIL_PERIODS = Object.freeze([
  'Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian',
  'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary',
])

const fossilStore: Record<string, FossilOccurrence[]> = {}
const loadingPeriods = new Map<string, Promise<FossilOccurrence[]>>()
interface TaxonPeriodIndexEntry {
  descendantTaxonIds: string[]
  descendantScientificNames: string[]
  periods: string[]
  matchedTotal: number
}

interface TaxonPeriodIndex {
  sourceTotal: number
  samplingMethod: string
  nodes: Record<string, TaxonPeriodIndexEntry>
}

const taxonPeriodIndex = taxonPeriodIndexData as TaxonPeriodIndex

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

export async function getFossilsByTaxon(
  taxonId: string,
  scope: TaxonQueryScope = 'descendants',
): Promise<TaxonOccurrenceQueryResult> {
  const indexed = taxonPeriodIndex.nodes[taxonId]
  const fallbackApplied = scope === 'descendants' && !indexed
  const effectiveScope: TaxonQueryScope = fallbackApplied ? 'exact' : scope
  const taxonIds = effectiveScope === 'descendants' && indexed
    ? new Set(indexed.descendantTaxonIds)
    : new Set([taxonId])
  const scientificNames = effectiveScope === 'descendants' && indexed
    ? new Set(indexed.descendantScientificNames)
    : new Set<string>()
  const periods = indexed?.periods.length ? indexed.periods : [...FOSSIL_PERIODS]
  const chunks = await Promise.all(periods.map(getFossilsByInterval))
  const records = chunks.flat().filter((occurrence) => {
    if (occurrence.tid && taxonIds.has(occurrence.tid)) return true
    return Object.values(occurrence.classification ?? {}).some((name) => scientificNames.has(name.trim().toLocaleLowerCase()))
  })
  return {
    taxonId,
    scope,
    effectiveScope,
    indexStatus: indexed ? 'hit' : 'miss',
    fallbackApplied,
    sourceTotal: taxonPeriodIndex.sourceTotal,
    matchedTotal: records.length,
    rowsLoaded: records.length,
    truncated: false,
    samplingMethod: taxonPeriodIndex.samplingMethod,
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
