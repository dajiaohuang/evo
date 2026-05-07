import type { FossilOccurrence, ClusterMarker, IndividualMarker } from '../types'

interface ClusterConfig {
  gridSize: number
  maxZoom: number
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

  for (const occ of occurrences) {
    const lng = occ.paleolng ?? parseFloat(occ.lng)
    const lat = occ.paleolat ?? parseFloat(occ.lat)
    if (isNaN(lng) || isNaN(lat)) continue
    const cellX = Math.floor(lng / cellSize)
    const cellY = Math.floor(lat / cellSize)
    const key = `${cellX},${cellY}`
    if (!grid.has(key)) grid.set(key, [])
    grid.get(key)!.push(occ)
  }

  const results: (ClusterMarker | IndividualMarker)[] = []
  for (const [_key, occs] of grid) {
    if (occs.length === 1) {
      results.push({ type: 'individual', occurrence: occs[0] })
    } else {
      const lats = occs.map((o) => o.paleolat ?? parseFloat(o.lat)).filter((v) => !isNaN(v))
      const lngs = occs.map((o) => o.paleolng ?? parseFloat(o.lng)).filter((v) => !isNaN(v))
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
