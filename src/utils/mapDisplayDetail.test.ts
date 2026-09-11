import { describe, expect, it } from 'vitest'
import type { Feature, Polygon } from 'geojson'
import { mapDisplayDetail } from './mapDisplayDetail'

describe('interaction display detail', () => {
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
