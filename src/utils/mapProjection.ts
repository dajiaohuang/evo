import { geoEqualEarth, geoMercator, type GeoProjection } from 'd3'
import type { MapViewState } from '../types'

export type MapProjectionId = 'mercator' | 'equal-earth'
export interface MapViewport { width: number; height: number }
export const MERCATOR_LATITUDE_LIMIT = 85.0511287798066

export function wrapLongitude(longitude: number): number {
  return ((longitude + 180) % 360 + 360) % 360 - 180
}

export function normalizeMapView(view: MapViewState, kind: MapProjectionId): MapViewState {
  const limit = kind === 'mercator' ? MERCATOR_LATITUDE_LIMIT : 90
  return {
    center: [Math.max(-limit, Math.min(limit, view.center[0])), wrapLongitude(view.center[1])],
    zoom: Math.max(1, Math.min(6, view.zoom)),
  }
}

/** One forward/inverse transform for vectors, markers, picking and raster pixels. */
export function createMapProjection(kind: MapProjectionId, camera: MapViewState, viewport: MapViewport): GeoProjection {
  const { center: [latitude, longitude], zoom } = normalizeMapView(camera, kind)
  const worldWidth = 256 * 2 ** zoom
  const projection = kind === 'equal-earth' ? geoEqualEarth() : geoMercator()
  // Equal Earth's rotated sphere changes the projection centre in both axes.
  // Mercator stays north-up; its centre latitude sets the vertical viewport.
  projection.rotate(kind === 'equal-earth' ? [-longitude, -latitude, 0] : [-longitude, 0, 0])
    .center(kind === 'equal-earth' ? [0, 0] : [0, latitude])
    .scale(kind === 'equal-earth' ? worldWidth / 5.413259967393 : worldWidth / (2 * Math.PI))
    .translate([viewport.width / 2, viewport.height / 2])
    .precision(0.7)
  if (kind === 'mercator') {
    const north = projection([longitude, MERCATOR_LATITUDE_LIMIT])!
    const south = projection([longitude, -MERCATOR_LATITUDE_LIMIT])!
    projection.clipExtent([
      [Math.max(0, viewport.width / 2 - worldWidth / 2), Math.max(0, north[1])],
      [Math.min(viewport.width, viewport.width / 2 + worldWidth / 2), Math.min(viewport.height, south[1])],
    ])
  } else projection.clipExtent([[0, 0], [viewport.width, viewport.height]])
  return projection
}

/** D3's direct point call does not clip; use its stream for the same clipping as paths. */
export function projectVisiblePoint(projection: GeoProjection, point: [number, number]): [number, number] | null {
  return visiblePointProjector(projection)(point)
}

/** Reuse D3's clipping stream across every point in a camera frame. */
export function visiblePointProjector(projection: GeoProjection): (point: [number, number]) => [number, number] | null {
  let result: [number, number] | null = null
  const stream = projection.stream({
    point: (x, y) => { result = [x, y] },
    lineStart() {}, lineEnd() {}, polygonStart() {}, polygonEnd() {}, sphere() {},
  })
  return (point) => {
    result = null
    stream.point(point[0], point[1])
    return result
  }
}

/** Reject the empty corners of Equal Earth and positions beyond the Mercator cap. */
export function invertMapPoint(projection: GeoProjection, kind: MapProjectionId, pixel: [number, number]): [number, number] | null {
  const point = projection.invert?.(pixel)
  if (!point || !point.every(Number.isFinite) || Math.abs(point[1]) > 90 + 1e-6) return null
  if (kind === 'mercator' && Math.abs(point[1]) > MERCATOR_LATITUDE_LIMIT + 1e-6) return null
  const roundTrip = projection(point)
  if (!roundTrip || Math.hypot(roundTrip[0] - pixel[0], roundTrip[1] - pixel[1]) > 0.01) return null
  return point
}

export function panMapView(camera: MapViewState, kind: MapProjectionId, viewport: MapViewport, dx: number, dy: number): MapViewState {
  const projection = createMapProjection(kind, camera, viewport)
  // Subdivide long pointer jumps so inverse projection stays inside the map.
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy) / 24))
  let next = camera
  for (let step = 0; step < steps; step += 1) {
    const current = step === 0 ? projection : createMapProjection(kind, next, viewport)
    const centre = current.invert?.([viewport.width / 2 - dx / steps, viewport.height / 2 - dy / steps])
    if (centre?.every(Number.isFinite)) next = normalizeMapView({ ...next, center: [centre[1], centre[0]] }, kind)
  }
  return next
}
