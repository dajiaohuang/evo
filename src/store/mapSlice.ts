import type { MapViewState } from '../types'
import type { AppState } from './index'
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../constants'
import type { CoordinateMode } from '../utils/spatial'

export type FossilMarkerMode = 'clusters' | 'points' | 'density'

export interface MapSlice {
  viewState: MapViewState
  highlightedTaxonId: string | null
  selectedOccurrenceId: string | null
  markerMode: FossilMarkerMode
  coordinateMode: CoordinateMode
  showContinents: boolean
  reconstructionModelId: string
  setViewState: (state: Partial<MapViewState>) => void
  highlightTaxon: (taxonId: string | null) => void
  selectOccurrence: (occId: string | null) => void
  setMarkerMode: (mode: FossilMarkerMode) => void
  setCoordinateMode: (mode: CoordinateMode) => void
  setShowContinents: (visible: boolean) => void
  setReconstructionModelId: (modelId: string) => void
}

export const createMapSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): MapSlice => ({
  viewState: { center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM },
  highlightedTaxonId: null,
  selectedOccurrenceId: null,
  markerMode: 'clusters',
  coordinateMode: 'paleo',
  showContinents: true,
  reconstructionModelId: 'pbdb:unspecified-model',

  setViewState: (partial) => {
    const current = get().viewState
    set({ viewState: { ...current, ...partial } })
  },
  highlightTaxon: (taxonId) => set({ highlightedTaxonId: taxonId }),
  selectOccurrence: (occId) => set({ selectedOccurrenceId: occId }),
  setMarkerMode: (markerMode) => set({ markerMode }),
  setCoordinateMode: (coordinateMode) => set({ coordinateMode }),
  setShowContinents: (showContinents) => set({ showContinents }),
  setReconstructionModelId: (reconstructionModelId) => set({ reconstructionModelId }),
})
