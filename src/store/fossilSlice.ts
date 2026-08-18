import type { FossilOccurrence, LoadStatus, TaxonOccurrenceQueryResult, TaxonQueryScope } from '../types'
import type { AppState } from './index'
import { getFossilsByInterval, getFossilsByTaxon } from '../services/localFossils'

export interface FossilSlice {
  occurrencesByInterval: Record<string, FossilOccurrence[]>
  occurrencesByTaxon: Record<string, FossilOccurrence[]>
  taxonOccurrenceQueries: Record<string, TaxonOccurrenceQueryResult>
  taxonOccurrenceStatus: Record<string, LoadStatus>
  taxonOccurrenceErrors: Record<string, string | null>
  selectedOccurrence: FossilOccurrence | null
  loadOccurrencesForInterval: (intervalName: string) => Promise<void>
  loadOccurrencesForTaxon: (taxonId: string, scope?: TaxonQueryScope) => Promise<void>
  selectFossilOccurrence: (occ: FossilOccurrence | null) => void
}

export const createFossilSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): FossilSlice => ({
  occurrencesByInterval: {},
  occurrencesByTaxon: {},
  taxonOccurrenceQueries: {},
  taxonOccurrenceStatus: {},
  taxonOccurrenceErrors: {},
  selectedOccurrence: null,

  loadOccurrencesForInterval: async (intervalName: string) => {
    if (Object.hasOwn(get().occurrencesByInterval, intervalName)) return
    const records = await getFossilsByInterval(intervalName)
    set({
      occurrencesByInterval: {
        ...get().occurrencesByInterval,
        [intervalName]: records,
      },
    })
  },

  loadOccurrencesForTaxon: async (taxonId: string, scope: TaxonQueryScope = 'descendants') => {
    const cacheKey = `${scope}:${taxonId}`
    if (Object.hasOwn(get().taxonOccurrenceQueries, cacheKey)) return
    set({
      taxonOccurrenceStatus: { ...get().taxonOccurrenceStatus, [cacheKey]: 'loading' },
      taxonOccurrenceErrors: { ...get().taxonOccurrenceErrors, [cacheKey]: null },
    })
    try {
      const result = await getFossilsByTaxon(taxonId, scope)
      set({
        occurrencesByTaxon: { ...get().occurrencesByTaxon, [taxonId]: result.records },
        taxonOccurrenceQueries: { ...get().taxonOccurrenceQueries, [cacheKey]: result },
        taxonOccurrenceStatus: {
          ...get().taxonOccurrenceStatus,
          [cacheKey]: result.records.length ? 'ready' : 'empty',
        },
      })
    } catch (caught) {
      set({
        taxonOccurrenceStatus: { ...get().taxonOccurrenceStatus, [cacheKey]: 'error' },
        taxonOccurrenceErrors: {
          ...get().taxonOccurrenceErrors,
          [cacheKey]: caught instanceof Error ? caught.message : 'Taxon query failed',
        },
      })
    }
  },

  selectFossilOccurrence: (occ) => set({ selectedOccurrence: occ }),
})
