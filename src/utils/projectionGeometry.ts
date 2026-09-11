import { geoArea } from 'd3'
import type { FeatureCollection, Geometry, Position } from 'geojson'
import type { PaleogeographyFeatureCollection } from '../types'

const cache = new WeakMap<PaleogeographyFeatureCollection, FeatureCollection>()

function orientRing(ring: Position[], hole: boolean): Position[] {
  // Coincident pole vertices on exactly opposite meridians are ambiguous to
  // D3's spherical clipper (epsilon = 1e-6 radians). Offset only exact seam/pole
  // coordinates in this display copy by 0.0001 degrees, below display resolution.
  const displayRing = ring.map((point) => Math.abs(point[0]) === 180 || Math.abs(point[1]) === 90
    ? [Math.max(-179.9999, Math.min(179.9999, point[0])), Math.max(-89.9999, Math.min(89.9999, point[1])), ...point.slice(2)]
    : point)
  // The bundled planar polygons have mixed winding. D3 interprets the opposite
  // winding as the spherical complement, which can fill an entire ocean.
  // Each antimeridian-split source part denotes the smaller spherical region.
  const isSmall = geoArea({ type: 'Polygon', coordinates: [displayRing] }) <= 2 * Math.PI
  return isSmall === !hole ? displayRing : [...displayRing].reverse()
}

function orient(geometry: Geometry): Geometry {
  if (geometry.type === 'Polygon') return { ...geometry, coordinates: geometry.coordinates.map((ring, index) => orientRing(ring, index > 0)) }
  if (geometry.type === 'MultiPolygon') return { ...geometry, coordinates: geometry.coordinates.map((polygon) => polygon.map((ring, index) => orientRing(ring, index > 0))) }
  return geometry
}

/** Display-only ring orientation. No source coordinates, records or bytes change. */
export function sphericalMapCollection(source: PaleogeographyFeatureCollection): FeatureCollection {
  const existing = cache.get(source)
  if (existing) return existing
  const result: FeatureCollection = {
    type: 'FeatureCollection',
    features: source.features.map((feature) => ({ ...feature, geometry: orient(feature.geometry as Geometry) })),
  }
  cache.set(source, result)
  return result
}
