import type { FossilOccurrence } from '../types'
import type { AppState } from './index'
import { getFossilsByInterval, getFossilsByTaxon } from '../services/localFossils'

export interface FossilSlice {
  occurrencesByInterval: Record<string, FossilOccurrence[]>
  occurrencesByTaxon: Record<string, FossilOccurrence[]>
  selectedOccurrence: FossilOccurrence | null
  loadOccurrencesForInterval: (intervalName: string) => void
  loadOccurrencesForTaxon: (taxonId: string) => void
  selectFossilOccurrence: (occ: FossilOccurrence | null) => void
}

export const createFossilSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): FossilSlice => ({
  occurrencesByInterval: {
    Cambrian: getFossilsByInterval('Cambrian'),
    Ordovician: getFossilsByInterval('Ordovician'),
    Silurian: getFossilsByInterval('Silurian'),
    Devonian: getFossilsByInterval('Devonian'),
    Carboniferous: getFossilsByInterval('Carboniferous'),
    Permian: getFossilsByInterval('Permian'),
    Triassic: getFossilsByInterval('Triassic'),
    Jurassic: getFossilsByInterval('Jurassic'),
    Cretaceous: getFossilsByInterval('Cretaceous'),
    Paleogene: getFossilsByInterval('Paleogene'),
    Neogene: getFossilsByInterval('Neogene'),
    Quaternary: getFossilsByInterval('Quaternary'),
  },
  occurrencesByTaxon: {},
  selectedOccurrence: null,

  loadOccurrencesForInterval: (_intervalName: string) => {
    // All data pre-loaded at init; no-op
  },

  loadOccurrencesForTaxon: (taxonId: string) => {
    if (get().occurrencesByTaxon[taxonId]) return
    const records = getFossilsByTaxon(taxonId)
    set({
      occurrencesByTaxon: {
        ...get().occurrencesByTaxon,
        [taxonId]: records,
      },
    })
  },

  selectFossilOccurrence: (occ) => set({ selectedOccurrence: occ }),
})
