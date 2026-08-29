import type { FossilOccurrence } from './paleontology'

type Position = [number, number]
type PolygonCoordinates = Position[][]
type MultiPolygonCoordinates = Position[][][]

export interface ContinentFeature {
  type: 'Feature'
  properties: {
    id: string
    period: string
    reconstructionAgeMa: number
    model: string
  }
  geometry: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: PolygonCoordinates | MultiPolygonCoordinates
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
