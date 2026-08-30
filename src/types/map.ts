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

export const CAO_OBSERVATION_DATASET_IDS = [
  'paleomagnetic-poles',
  'geochemistry',
  'metamorphic-gradient-orogen',
  'metamorphic-gradient-rift',
  'metamorphic-gradient-subduction-zone',
] as const

export type CaoObservationDatasetId = typeof CAO_OBSERVATION_DATASET_IDS[number]
export type CaoObservationRole = 'observation' | 'constraint'
export type CaoObservationPosition = [longitude: number, latitude: number]
export type CaoObservationSourceAttribute = [key: string, valueType: string, sourceLexeme: string]

export interface CaoObservationPositions {
  samplePosition?: CaoObservationPosition
  polePosition?: CaoObservationPosition
  averageSampleSitePosition?: CaoObservationPosition
}

export interface CaoObservationAge {
  rawFromMa: number
  rawToMa: number
  rawFromLexeme: string
  rawToLexeme: string
  averageMa: number | null
  averageLexeme: string | null
  modelIntersectionMa: [number, number] | null
  reconstructionAgeMa: number | null
  reconstructionAgeMethod: 'model-intersection-midpoint' | null
}

export interface CaoObservationRecord {
  sourceFeatureId: string
  sourceRevisionId: string
  sourceFeatureType: string
  observationKind: CaoObservationDatasetId
  name: string | null
  plateId: number | null
  age: CaoObservationAge
  sourcePositions: CaoObservationPositions
  reconstructedPositions: CaoObservationPositions | null
  reconstructionStatus: 'reconstructed' | 'raw-only-model-range' | 'raw-only-missing-plate-circuit'
  poleA95: number | null
  poleA95Lexeme: string | null
  sampleId: string | null
  referenceId: string | null
  sourceFlags: string[]
  sourceAttributes: CaoObservationSourceAttribute[]
}

export interface CaoObservationCollection {
  schemaVersion: 1
  model: 'CAO2024'
  modelVersion: string
  datasetId: CaoObservationDatasetId
  bucket: string
  records: CaoObservationRecord[]
}

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
