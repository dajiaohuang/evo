import type { FossilOccurrence } from './paleontology'

export interface ContinentFeature {
  type: 'Feature'
  properties: {
    name: string
    period: string
  }
  geometry: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: number[][][]
  }
}

export interface ContinentFeatureCollection {
  type: 'FeatureCollection'
  features: ContinentFeature[]
}

export interface MapViewState {
  center: [number, number]
  zoom: number
}

export interface FossilMarkerStyle {
  radius: number
  fillColor: string
  fillOpacity: number
  strokeColor: string
  strokeWeight: number
}

export interface ClusterMarker {
  type: 'cluster'
  lat: number
  lng: number
  count: number
  occurrences: FossilOccurrence[]
}

export interface IndividualMarker {
  type: 'individual'
  occurrence: FossilOccurrence
}
