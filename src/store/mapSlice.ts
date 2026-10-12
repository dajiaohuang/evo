import type { MapViewState } from '../types'
import type { AppState } from './index'
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../constants'
import type { CoordinateMode } from '../utils/spatial'
import { normalizeMapView, type MapProjectionId } from '../utils/mapProjection'

export type FossilMarkerMode = 'clusters' | 'points' | 'density'
export type MapContentMode = 'featured' | 'all'

export interface MapSlice {
  viewState: MapViewState
  mapProjection: MapProjectionId
  setMapProjection: (projection: MapProjectionId) => void
  highlightedTaxonId: string | null
  highlightedOccurrenceIds: string[]
  selectedOccurrenceId: string | null
  markerMode: FossilMarkerMode
  mapContentMode: MapContentMode
  coordinateMode: CoordinateMode
  showContinents: boolean
  setViewState: (state: Partial<MapViewState>) => void
  highlightTaxon: (taxonId: string | null) => void
  selectOccurrence: (occId: string | null) => void
  setMarkerMode: (mode: FossilMarkerMode) => void
  setMapContentMode: (mode: MapContentMode) => void
  setCoordinateMode: (mode: CoordinateMode) => void
  setShowContinents: (visible: boolean) => void
}

export const createMapSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): MapSlice => ({
  viewState: { center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM },
  mapProjection: 'mercator',
  setMapProjection: (mapProjection) => set({ mapProjection, viewState: normalizeMapView(get().viewState, mapProjection) }),
  highlightedTaxonId: null,
  highlightedOccurrenceIds: [],
  selectedOccurrenceId: null,
  markerMode: 'clusters',
  mapContentMode: 'featured',
  coordinateMode: 'paleo',
  showContinents: true,

  setViewState: (partial) => {
    const current = get().viewState
    set({ viewState: { ...current, ...partial } })
  },
  highlightTaxon: (taxonId) => set({
    highlightedTaxonId: taxonId,
    highlightedOccurrenceIds: [],
  }),
  selectOccurrence: (occId) => set({ selectedOccurrenceId: occId }),
  setMarkerMode: (markerMode) => set({ markerMode }),
  setMapContentMode: (mapContentMode) => set({ mapContentMode }),
  setCoordinateMode: (coordinateMode) => set({ coordinateMode }),
  setShowContinents: (showContinents) => set({ showContinents }),
})
