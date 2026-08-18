import type { FossilOccurrence } from '../types'
import type { TaxonOccurrenceQueryResult, TaxonQueryScope } from '../types'
import taxonPeriodIndexData from '../../data/indexes/taxon-period-index.json'

const asFossils = (arr: unknown): FossilOccurrence[] => arr as FossilOccurrence[]

type FossilModule = { default: unknown }

const fossilLoaders: Record<string, () => Promise<FossilModule>> = {
  Cambrian: () => import('../../data/fossils/cambrian.json'),
  Ordovician: () => import('../../data/fossils/ordovician.json'),
  Silurian: () => import('../../data/fossils/silurian.json'),
  Devonian: () => import('../../data/fossils/devonian.json'),
  Carboniferous: () => import('../../data/fossils/carboniferous.json'),
  Permian: () => import('../../data/fossils/permian.json'),
  Triassic: () => import('../../data/fossils/triassic.json'),
  Jurassic: () => import('../../data/fossils/jurassic.json'),
  Cretaceous: () => import('../../data/fossils/cretaceous.json'),
  Paleogene: () => import('../../data/fossils/paleogene.json'),
  Neogene: () => import('../../data/fossils/neogene.json'),
  Quaternary: () => import('../../data/fossils/quaternary.json'),
}

export const FOSSIL_PERIODS = Object.freeze(Object.keys(fossilLoaders))

const fossilStore: Record<string, FossilOccurrence[]> = {}
const loadingPeriods = new Map<string, Promise<FossilOccurrence[]>>()
interface TaxonPeriodIndexEntry {
  descendantTaxonIds: string[]
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
  const loader = fossilLoaders[period]
  if (!loader) return []

  const promise = loader().then((module) => {
    const records = asFossils(module.default)
    fossilStore[period] = records
    loadingPeriods.delete(period)
    return records
  })
  loadingPeriods.set(period, promise)
  return promise
}

export async function getFossilsByTaxon(
  taxonId: string,
  scope: TaxonQueryScope = 'descendants',
): Promise<TaxonOccurrenceQueryResult> {
  const indexed = taxonPeriodIndex.nodes[taxonId]
  const taxonIds = scope === 'descendants' && indexed
    ? new Set(indexed.descendantTaxonIds)
    : new Set([taxonId])
  const periods = indexed?.periods.length ? indexed.periods : [...FOSSIL_PERIODS]
  const chunks = await Promise.all(periods.map(getFossilsByInterval))
  const records = chunks.flat().filter((occurrence) => Boolean(occurrence.tid && taxonIds.has(occurrence.tid)))
  return {
    taxonId,
    scope,
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
