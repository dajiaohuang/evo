import type { FossilOccurrence } from '../types'

export type CoordinateMode = 'paleo' | 'modern'

export type SpatialPosition =
  | {
      mode: 'paleo'
      lng: number
      lat: number
      reconstructionAgeMa: number
      modelId: string
    }
  | {
      mode: 'modern'
      lng: number
      lat: number
      coordinatePrecision?: string
    }
  | { mode: 'missing'; requestedMode: CoordinateMode; reason: string }

function finiteNumber(value: unknown): number | null {
  if (value === '' || value === null || value === undefined) return null
  const parsed = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function validLongitude(value: number): boolean {
  return value >= -180 && value <= 180
}

function validLatitude(value: number): boolean {
  return value >= -90 && value <= 90
}

export function getSpatialPosition(
  occurrence: FossilOccurrence,
  mode: CoordinateMode,
): SpatialPosition {
  if (mode === 'paleo') {
    const lng = finiteNumber(occurrence.paleolng)
    const lat = finiteNumber(occurrence.paleolat)
    if (lng === null || lat === null) {
      return { mode: 'missing', requestedMode: mode, reason: 'paired paleocoordinates are unavailable' }
    }
    if (!validLongitude(lng) || !validLatitude(lat)) {
      return { mode: 'missing', requestedMode: mode, reason: 'paleocoordinates are outside geographic bounds' }
    }
    return {
      mode,
      lng,
      lat,
      reconstructionAgeMa: (occurrence.eag + occurrence.lag) / 2,
      modelId: occurrence.paleoModelId ?? 'pbdb:unspecified-model',
    }
  }

  const lng = finiteNumber(occurrence.lng)
  const lat = finiteNumber(occurrence.lat)
  if (lng === null || lat === null) {
    return { mode: 'missing', requestedMode: mode, reason: 'paired modern coordinates are unavailable' }
  }
  if (!validLongitude(lng) || !validLatitude(lat)) {
    return { mode: 'missing', requestedMode: mode, reason: 'modern coordinates are outside geographic bounds' }
  }
  return { mode, lng, lat, coordinatePrecision: occurrence.coordinatePrecision }
}

export function hasSpatialPosition(occurrence: FossilOccurrence, mode: CoordinateMode): boolean {
  return getSpatialPosition(occurrence, mode).mode === mode
}
