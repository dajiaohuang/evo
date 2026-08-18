import type { FossilOccurrence, ClusterMarker, IndividualMarker } from '../types'
import { getSpatialPosition, type CoordinateMode } from './spatial'

interface ClusterConfig {
  gridSize: number
  maxZoom: number
  coordinateMode?: CoordinateMode
  centerLongitude?: number
}

const MAX_MERCATOR_LATITUDE = 85.05112878

function wrapLongitudeNear(longitude: number, center: number): number {
  const delta = ((longitude - center + 540) % 360) - 180
  return center + delta
}

function projectToWorldPixels(longitude: number, latitude: number, zoom: number, centerLongitude: number): [number, number] {
  const worldSize = 256 * 2 ** zoom
  const wrappedLongitude = wrapLongitudeNear(longitude, centerLongitude)
  const clampedLatitude = Math.max(-MAX_MERCATOR_LATITUDE, Math.min(MAX_MERCATOR_LATITUDE, latitude))
  const sinLatitude = Math.sin(clampedLatitude * Math.PI / 180)
  const x = (wrappedLongitude + 180) / 360 * worldSize
  const y = (0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI)) * worldSize
  return [x, y]
}

function circularMeanLongitude(longitudes: number[]): number {
  const sin = longitudes.reduce((sum, longitude) => sum + Math.sin(longitude * Math.PI / 180), 0)
  const cos = longitudes.reduce((sum, longitude) => sum + Math.cos(longitude * Math.PI / 180), 0)
  const mean = Math.atan2(sin, cos) * 180 / Math.PI
  return mean === -180 ? 180 : mean
}

function coordinatesFor(occurrence: FossilOccurrence, mode: CoordinateMode): [number, number] | null {
  const position = getSpatialPosition(occurrence, mode)
  return position.mode === mode ? [position.lng, position.lat] : null
}

export function computeClusters(
  occurrences: FossilOccurrence[],
  zoom: number,
  config: ClusterConfig = { gridSize: 40, maxZoom: 5 }
): (ClusterMarker | IndividualMarker)[] {
  const coordinateMode = config.coordinateMode ?? 'paleo'
  const centerLongitude = config.centerLongitude ?? 0
  const eligible = occurrences.filter((occurrence) => coordinatesFor(occurrence, coordinateMode))
  if (zoom >= config.maxZoom || eligible.length <= 20) {
    return eligible.map((o) => ({
      type: 'individual' as const,
      occurrence: o,
    }))
  }

  const grid = new Map<string, FossilOccurrence[]>()
  for (const occ of eligible) {
    const coordinates = coordinatesFor(occ, coordinateMode)
    if (!coordinates) continue
    const [lng, lat] = coordinates
    const [pixelX, pixelY] = projectToWorldPixels(lng, lat, zoom, centerLongitude)
    const cellX = Math.floor(pixelX / config.gridSize)
    const cellY = Math.floor(pixelY / config.gridSize)
    const key = `${cellX},${cellY}`
    if (!grid.has(key)) grid.set(key, [])
    grid.get(key)!.push(occ)
  }

  const results: (ClusterMarker | IndividualMarker)[] = []
  for (const occs of grid.values()) {
    if (occs.length === 1) {
      results.push({ type: 'individual', occurrence: occs[0] })
    } else {
      const coordinates = occs.flatMap((occurrence) => {
        const point = coordinatesFor(occurrence, coordinateMode)
        return point ? [point] : []
      })
      const lngs = coordinates.map(([lng]) => lng)
      const lats = coordinates.map(([, lat]) => lat)
      const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length
      const avgLng = circularMeanLongitude(lngs)
      results.push({
        type: 'cluster',
        lat: avgLat,
        lng: avgLng,
        count: occs.length,
        occurrences: occs,
      })
    }
  }

  return results
}
