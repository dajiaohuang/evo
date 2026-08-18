import type { FossilOccurrence, ClusterMarker, IndividualMarker } from '../types'

interface ClusterConfig {
  gridSize: number
  maxZoom: number
  coordinateMode?: 'paleo' | 'modern'
}

function coordinatesFor(occurrence: FossilOccurrence, mode: 'paleo' | 'modern'): [number, number] | null {
  const lng = mode === 'paleo'
    ? occurrence.paleolng ?? Number(occurrence.lng)
    : Number(occurrence.lng)
  const lat = mode === 'paleo'
    ? occurrence.paleolat ?? Number(occurrence.lat)
    : Number(occurrence.lat)
  return Number.isFinite(lng) && Number.isFinite(lat) ? [lng, lat] : null
}

export function computeClusters(
  occurrences: FossilOccurrence[],
  zoom: number,
  config: ClusterConfig = { gridSize: 40, maxZoom: 5 }
): (ClusterMarker | IndividualMarker)[] {
  if (zoom >= config.maxZoom || occurrences.length <= 20) {
    return occurrences.map((o) => ({
      type: 'individual' as const,
      occurrence: o,
    }))
  }

  const cellSize = config.gridSize / Math.pow(2, zoom - 1)
  const grid = new Map<string, FossilOccurrence[]>()
  const coordinateMode = config.coordinateMode ?? 'paleo'

  for (const occ of occurrences) {
    const coordinates = coordinatesFor(occ, coordinateMode)
    if (!coordinates) continue
    const [lng, lat] = coordinates
    const cellX = Math.floor(lng / cellSize)
    const cellY = Math.floor(lat / cellSize)
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
      const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length
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
