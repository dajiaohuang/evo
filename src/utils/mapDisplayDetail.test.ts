import { describe, expect, it } from 'vitest'
import type { Feature, Polygon } from 'geojson'
import { mapDisplayDetail } from './mapDisplayDetail'
import { geoContains } from 'd3'
import { sphericalMapCollection } from './projectionGeometry'
import type { PaleogeographyFeatureCollection } from '../types'
import { geoArea } from 'd3'

describe('interaction display detail', () => {
  it('preserves the spherical interior of a narrow island at every drag detail level', () => {
    // CAO2024 0 Ma coastline fragment 919: simplification at zoom 2 used to
    // reverse its spherical interior and paint almost the entire globe.
    const ring = [[-75.0621,23.145],[-74.8538,22.9991],[-74.8392,22.8612],[-74.9267,22.9996],[-74.9271,23],[-75.2304,23.1742],[-75.0579,23.1025],[-75.1571,23.2325],[-75.1482,23.3612],[-75.3467,23.6771],[-75.2054,23.5317],[-75.0621,23.145]]
    for (const coordinates of [ring, [...ring].reverse()]) {
      const source: Polygon = { type: 'Polygon', coordinates: [coordinates] }
      for (const zoom of [1, 2, 3, 4, 5, 6]) {
        expect(geoArea(mapDisplayDetail(source, zoom)) <= 2 * Math.PI).toBe(geoArea(source) <= 2 * Math.PI)
      }
    }
  })
  it('keeps polar coastline fragments from becoming an ocean-sized fill during dragging', () => {
    const source: PaleogeographyFeatureCollection = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { id: 'antarctic-seam', layer: 'coastlines' }, geometry: { type: 'Polygon', coordinates: [[[180, -86.6854], [160.2022, -85.3882], [156.855, -83.8368], [157.409, -80.6021], [157.1506, -76.6695], [145.133, -72.8509], [142.3637, -76.4021], [129.8937, -80.1063], [124.1686, -81.7956], [31.9608, -89.6188], [0, -88.4896], [0, -90], [180, -90], [180, -86.6854]]] } }] }
    const display = sphericalMapCollection(source)
    for (const zoom of [1, 2, 3, 4, 5, 6]) {
      expect(geoContains(mapDisplayDetail(display, zoom), [-60, 0])).toBe(false)
    }
  })
  it('caches by zoom, keeps holes and seam vertices, and leaves source coordinates intact', () => {
    const source: Feature<Polygon> = { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [
      [[170, 0], [175, .001], [180, 0], [180, 10], [170, 10], [170, 0]],
      [[172, 2], [172, 4], [174, 4], [174, 2], [172, 2]],
    ] } }
    const original = JSON.stringify(source)
    const result = mapDisplayDetail(source, 2) as Feature<Polygon>
    expect(result.geometry.coordinates).toHaveLength(2)
    expect(result.geometry.coordinates[0]).toContainEqual([180, 0])
    expect(result.geometry.coordinates[0]).toContainEqual([180, 10])
    expect(result.geometry.coordinates[0]).not.toContainEqual([175, .001])
    expect(JSON.stringify(source)).toBe(original)
    expect(mapDisplayDetail(source, 2)).toBe(result)
    expect(mapDisplayDetail(source, 6)).not.toBe(result)
  })
})
