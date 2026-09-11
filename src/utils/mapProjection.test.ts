import { describe, expect, it } from 'vitest'
import { geoPath } from 'd3'
import { createMapProjection, invertMapPoint, panMapView, projectVisiblePoint, wrapLongitude } from './mapProjection'

const viewport = { width: 1000, height: 600 }
describe('live map projection', () => {
  it.each(['mercator', 'equal-earth'] as const)('%s centres and inverts geographic coordinates', (kind) => {
    const projection = createMapProjection(kind, { center: [35, 160], zoom: 2 }, viewport)
    expect(projection([160, 35])![0]).toBeCloseTo(500, 6)
    expect(projection([160, 35])![1]).toBeCloseTo(300, 6)
    const pixel = projection([170, 20])!
    const inverse = invertMapPoint(projection, kind, pixel)!
    expect(inverse[0]).toBeCloseTo(170, 6)
    expect(inverse[1]).toBeCloseTo(20, 6)
  })

  it('preserves relative area away from the seam under a rotated Equal Earth view', () => {
    const projection = createMapProjection('equal-earth', { center: [20, 30], zoom: 2 }, viewport)
    const areaScale = (longitude: number, latitude: number) => {
      const h = .0001
      const p = projection([longitude, latitude])!
      const x = projection([longitude + h, latitude])!
      const y = projection([longitude, latitude + h])!
      return Math.abs((x[0] - p[0]) * (y[1] - p[1]) - (x[1] - p[1]) * (y[0] - p[0])) / Math.cos(latitude * Math.PI / 180)
    }
    expect(areaScale(50, 60) / areaScale(0, 0)).toBeCloseTo(1, 4)
    expect(areaScale(-40, -50) / areaScale(0, 0)).toBeCloseTo(1, 4)
  })

  it('reprojects shapes while panning instead of translating a rendered image', () => {
    const first = { center: [0, 0] as [number, number], zoom: 2 }
    const next = panMapView(first, 'equal-earth', viewport, 180, 80)
    expect(next.center[0]).toBeGreaterThan(0)
    expect(next.center[1]).toBeLessThan(0)
    const distance = (view: typeof first) => {
      const p = createMapProjection('equal-earth', view, viewport)
      const a = p([40, 10])!; const b = p([80, 55])!
      return Math.hypot(a[0] - b[0], a[1] - b[1])
    }
    expect(Math.abs(distance(next) - distance(first))).toBeGreaterThan(1)
    expect(wrapLongitude(190)).toBe(-170)
    expect(wrapLongitude(-550)).toBe(170)
  })

  it('clips Mercator polar rows and Equal Earth empty corners consistently', () => {
    const mercator = createMapProjection('mercator', { center: [0, 0], zoom: 1 }, viewport)
    expect(projectVisiblePoint(mercator, [0, 89])).toBeNull()
    expect(invertMapPoint(mercator, 'mercator', mercator([0, 89])!)).toBeNull()
    const equal = createMapProjection('equal-earth', { center: [0, 0], zoom: 1 }, viewport)
    expect(projectVisiblePoint(equal, [0, 90])).not.toBeNull()
    expect(invertMapPoint(equal, 'equal-earth', [0, 0])).toBeNull()
  })

  it('reclips antimeridian lines around the selected centre', () => {
    const line = { type: 'LineString' as const, coordinates: [[179, 0], [-179, 0]] }
    const path = (longitude: number) => geoPath(createMapProjection('equal-earth', { center: [0, longitude], zoom: 1 }, viewport))(line)!
    expect(path(0).match(/M/g)).toHaveLength(2)
    expect(path(180).match(/M/g)).toHaveLength(1)
  })
})
