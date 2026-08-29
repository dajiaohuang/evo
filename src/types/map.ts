import type { FossilOccurrence } from './paleontology'

type Position = [number, number]
type PolygonCoordinates = Position[][]
type MultiPolygonCoordinates = Position[][][]
type LineCoordinates = Position[]
type MultiLineCoordinates = Position[][]

export type PaleogeographyLayerId =
  | 'coastlines'
  | 'platePolygons'
  | 'plateBoundaries'
  | 'continentalPolygons'
  | 'continentOceanBoundaries'
  | 'staticPolygons'

export interface PaleogeographyFeature {
  type: 'Feature'
  properties: {
    id: string
    period?: string
    reconstructionAgeMa?: number
    model?: string
    layer: PaleogeographyLayerId
    type?: string
    name?: string
    pid?: number
    polarity?: 'Left' | 'Right'
  }
  geometry: {
    type: 'Polygon' | 'MultiPolygon' | 'LineString' | 'MultiLineString'
    coordinates: PolygonCoordinates | MultiPolygonCoordinates | LineCoordinates | MultiLineCoordinates
  }
}

export interface PaleogeographyFeatureCollection {
  type: 'FeatureCollection'
  features: PaleogeographyFeature[]
}

export type PaleogeographyLayers = Partial<Record<PaleogeographyLayerId, PaleogeographyFeatureCollection>>

export type ContinentFeatureCollection = PaleogeographyFeatureCollection

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
