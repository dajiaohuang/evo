import type { GeoProjection } from 'd3'
import type { MapPoint } from '../components/map/mapScene'
import type { FossilMarkerMode } from '../store/mapSlice'
import { visiblePointProjector } from './mapProjection'
export interface ScreenPoint extends MapPoint { x: number; y: number }

export function paintMapPoints(context: CanvasRenderingContext2D, projection: GeoProjection,
  fossils: MapPoint[], observations: MapPoint[], nodePoints: MapPoint[], markerMode: FossilMarkerMode,
  label: (count: number) => string): ScreenPoint[] {
  const projectPoint = visiblePointProjector(projection)
  const project = (points: MapPoint[]): ScreenPoint[] => points.flatMap(point => {
    const pixel = projectPoint(point.position)
    return pixel ? [{ ...point, x: pixel[0], y: pixel[1] }] : []
  })
  const rawFossils = project(fossils)
  let displayedFossils = rawFossils
  if (markerMode !== 'points' && rawFossils.length > 20) {
    const gridSize = markerMode === 'density' ? 70 : 40
    const buckets = new Map<string, ScreenPoint[]>()
    for (const point of rawFossils) {
      if (point.radius === 7) continue
      const key = `${Math.floor(point.x / gridSize)},${Math.floor(point.y / gridSize)}`
      const bucket = buckets.get(key)
      if (bucket) bucket.push(point); else buckets.set(key, [point])
    }
    displayedFossils = [...buckets.values()].map(points => points.length === 1 ? points[0] : {
      position: points[0].position,
      x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
      y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
      radius: Math.min(markerMode === 'density' ? 28 : 20, 6 + Math.log2(points.length + 1) * 3),
      color: markerMode === 'density' ? '#f58a65' : '#ffd700', opacity: markerMode === 'density' ? .24 : .4,
      label: label(points.length),
    }).concat(rawFossils.filter(point => point.radius === 7))
  }
  const points = [...project(observations), ...displayedFossils, ...project(nodePoints)]
  for (const point of points) {
    context.beginPath(); context.arc(point.x, point.y, point.radius, 0, 2 * Math.PI)
    context.fillStyle = point.color; context.globalAlpha = point.opacity; context.fill()
    context.strokeStyle = point.color; context.globalAlpha = .9; context.lineWidth = point.radius === 7 ? 2 : .7; context.stroke()
    if (point.nodeMap && point.nodeMap.count > 1) {
      context.globalAlpha = 1; context.fillStyle = '#172628'; context.font = 'bold 11px system-ui'
      context.textAlign = 'center'; context.textBaseline = 'middle'
      context.fillText(String(point.nodeMap.count), point.x, point.y)
    }
  }
  context.globalAlpha = 1
  return points
}
