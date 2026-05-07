import type { MapViewState } from '../types'
import type { AppState } from './index'
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../constants'

export interface MapSlice {
  viewState: MapViewState
  highlightedTaxonId: string | null
  selectedOccurrenceId: string | null
  setViewState: (state: Partial<MapViewState>) => void
  highlightTaxon: (taxonId: string | null) => void
  selectOccurrence: (occId: string | null) => void
}

export const createMapSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): MapSlice => ({
  viewState: { center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM },
  highlightedTaxonId: null,
  selectedOccurrenceId: null,

  setViewState: (partial) => {
    const current = get().viewState
    set({ viewState: { ...current, ...partial } })
  },
  highlightTaxon: (taxonId) => set({ highlightedTaxonId: taxonId }),
  selectOccurrence: (occId) => set({ selectedOccurrenceId: occId }),
})
