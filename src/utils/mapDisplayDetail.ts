import type { GeoPermissibleObjects } from 'd3'
import type { GeoJsonObject, FeatureCollection, Feature, Geometry, Position } from 'geojson'

const cache = new WeakMap<GeoPermissibleObjects, Map<number, GeoPermissibleObjects>>()

// Douglas–Peucker in geographic degrees, conservatively weighted at the equator.
// Keep seam vertices: simplifying across an antimeridian split changes topology.
function line(points: Position[], tolerance: number): Position[] {
  if (points.length <= 4) return points
  const keep = new Uint8Array(points.length)
  keep[0] = keep[points.length - 1] = 1
  const stack = [[0, points.length - 1]]
  while (stack.length) {
    const [first, last] = stack.pop()!
    const a = points[first]; const b = points[last]
    const dx = b[0] - a[0]; const dy = b[1] - a[1]
    const length = dx * dx + dy * dy
    let greatest = tolerance * tolerance; let selected = -1
    for (let i = first + 1; i < last; i++) {
      const p = points[i]
      const t = length ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / length)) : 0
      const distance = (p[0] - a[0] - t * dx) ** 2 + (p[1] - a[1] - t * dy) ** 2
      if (Math.abs(p[0]) >= 179.999 || distance > greatest) { greatest = distance; selected = i }
    }
    if (selected >= 0) { keep[selected] = 1; stack.push([first, selected], [selected, last]) }
  }
  const result = points.filter((_, i) => keep[i])
  const closed = points[0][0] === points.at(-1)![0] && points[0][1] === points.at(-1)![1]
  return result.length < (closed ? 4 : 2) ? points : result
}

function geometry(source: Geometry, tolerance: number): Geometry {
  function polygon(rings: Position[][]): Position[][] {
    if (!rings.length) return rings
    let west = Infinity; let east = -Infinity; let south = Infinity; let north = -Infinity
    for (const [lon, lat] of rings[0]) { west = Math.min(west, lon); east = Math.max(east, lon); south = Math.min(south, lat); north = Math.max(north, lat) }
    // Subpixel islands reappear at rest or on zoom; never remove individual holes.
    if (east - west < tolerance && north - south < tolerance) return []
    return rings.map((ring) => line(ring, tolerance))
  }
  switch (source.type) {
    case 'LineString': return { ...source, coordinates: line(source.coordinates, tolerance) }
    case 'MultiLineString': return { ...source, coordinates: source.coordinates.map((ring) => line(ring, tolerance)) }
    case 'Polygon': return { ...source, coordinates: polygon(source.coordinates) }
    case 'MultiPolygon': return { ...source, coordinates: source.coordinates.map(polygon).filter((rings) => rings.length) }
    case 'GeometryCollection': return { ...source, geometries: source.geometries.map((item) => geometry(item, tolerance)) }
    default: return source
  }
}

/** Cached display geometry only; full source detail returns when interaction ends. */
export function mapDisplayDetail(source: GeoPermissibleObjects, zoom: number): GeoPermissibleObjects {
  const level = Math.ceil(zoom)
  const entries = cache.get(source) ?? new Map<number, GeoPermissibleObjects>()
  const existing = entries.get(level)
  if (existing) return existing
  const tolerance = 360 / (256 * 2 ** level)
  function simplify(item: GeoJsonObject): GeoPermissibleObjects {
    if (item.type === 'FeatureCollection') {
      const collection = item as FeatureCollection
      return { ...collection, features: collection.features.map((feature) => ({ ...feature, geometry: feature.geometry && geometry(feature.geometry, tolerance) })) }
    }
    if (item.type === 'Feature') {
      const feature = item as Feature
      return { ...feature, geometry: feature.geometry && geometry(feature.geometry, tolerance) }
    }
    return geometry(item as Geometry, tolerance)
  }
  const result = source.type === 'Sphere' ? source : simplify(source as GeoJsonObject)
  entries.set(level, result)
  cache.set(source, entries)
  return result
}
