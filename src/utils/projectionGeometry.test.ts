import { expect, it } from 'vitest'
import { geoArea, geoContains, geoEqualEarth, geoPath } from 'd3'
import { sphericalMapCollection } from './projectionGeometry'
import type { PaleogeographyFeatureCollection } from '../types'

it('normalizes mixed polygon winding and holes without changing source geometry', () => {
  const outer: [number, number][] = [[10, 10], [20, 10], [20, 20], [10, 20], [10, 10]]
  const hole: [number, number][] = [[13, 13], [17, 13], [17, 17], [13, 17], [13, 13]]
  const source: PaleogeographyFeatureCollection = {
    type: 'FeatureCollection', features: [{ type: 'Feature', properties: { id: 'test', layer: 'coastlines' }, geometry: { type: 'MultiPolygon', coordinates: [[outer, hole], [[...outer].reverse(), [...hole].reverse()]] } }],
  }
  const before = JSON.stringify(source)
  const result = sphericalMapCollection(source)
  expect(geoArea(result)).toBeLessThan(.1)
  expect(geoContains(result, [11, 11])).toBe(true)
  expect(geoContains(result, [15, 15])).toBe(false)
  expect(geoContains(result, [-60, 0])).toBe(false)
  expect(JSON.stringify(source)).toBe(before)
  expect(sphericalMapCollection(source)).toBe(result)
})

it('keeps an Antarctic pole-and-seam fragment from filling the projected ocean', () => {
  // CAO2024 0 Ma coastline fragment 2165, whose two pole vertices coincide.
  const source: PaleogeographyFeatureCollection = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { id: 'antarctic-seam', layer: 'coastlines' }, geometry: { type: 'Polygon', coordinates: [[[180, -86.6854], [160.2022, -85.3882], [156.855, -83.8368], [157.409, -80.6021], [157.1506, -76.6695], [145.133, -72.8509], [142.3637, -76.4021], [129.8937, -80.1063], [124.1686, -81.7956], [31.9608, -89.6188], [0, -88.4896], [0, -90], [180, -90], [180, -86.6854]]] } }] }
  const before = JSON.stringify(source)
  const display = sphericalMapCollection(source)
  const bounds = geoPath(geoEqualEarth().scale(100).translate([0, 0])).bounds(display)
  expect(bounds[0][1]).toBeGreaterThan(120)
  expect(bounds[1][0] - bounds[0][0]).toBeLessThan(170)
  expect(JSON.stringify(source)).toBe(before)
})
