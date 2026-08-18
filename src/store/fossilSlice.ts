import type { FossilOccurrence } from '../types'
import type { AppState } from './index'
import { getFossilsByInterval, getFossilsByTaxon } from '../services/localFossils'

export interface FossilSlice {
  occurrencesByInterval: Record<string, FossilOccurrence[]>
  occurrencesByTaxon: Record<string, FossilOccurrence[]>
  selectedOccurrence: FossilOccurrence | null
  loadOccurrencesForInterval: (intervalName: string) => Promise<void>
  loadOccurrencesForTaxon: (taxonId: string) => Promise<void>
  selectFossilOccurrence: (occ: FossilOccurrence | null) => void
}

export const createFossilSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): FossilSlice => ({
  occurrencesByInterval: {},
  occurrencesByTaxon: {},
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

  loadOccurrencesForTaxon: async (taxonId: string) => {
    if (Object.hasOwn(get().occurrencesByTaxon, taxonId)) return
    const records = await getFossilsByTaxon(taxonId)
    set({
      occurrencesByTaxon: {
        ...get().occurrencesByTaxon,
        [taxonId]: records,
      },
    })
  },

  selectFossilOccurrence: (occ) => set({ selectedOccurrence: occ }),
})
