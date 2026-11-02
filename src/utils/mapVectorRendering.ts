import { geoGraticule10, geoPath, type GeoProjection } from 'd3'
import type { MapShape } from '../components/map/mapScene'
import type { MapViewport } from './mapProjection'
import { mapDisplayDetail } from './mapDisplayDetail'

const graticule = geoGraticule10()
const projectionPath = () => Object.assign(new Path2D(), { beginPath() {} })
export interface VectorHit { path: Path2D; index: number }

/** Identical geographic projection in the worker and the Canvas fallback. */
export function paintMapGeometry(context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  shapes: MapShape[], projection: GeoProjection, size: MapViewport, ratio: number,
  previewZoom: number | null, transparentOcean = false) {
  const started = performance.now()
  const canvas = context.canvas
  const width = Math.round(size.width * ratio), height = Math.round(size.height * ratio)
  if (canvas.width !== width) canvas.width = width
  if (canvas.height !== height) canvas.height = height
  context.setTransform(ratio, 0, 0, ratio, 0, 0)
  context.clearRect(0, 0, size.width, size.height)
  const path = geoPath(projection)
  const outline = projectionPath()
  path.context(outline)({ type: 'Sphere' })
  if (!transparentOcean) { context.fillStyle = '#0b293b'; context.fill(outline) }
  context.strokeStyle = '#48636d'; context.lineWidth = 1; context.stroke(outline)
  const grid = projectionPath()
  path.context(grid)(graticule)
  context.strokeStyle = '#35505a'; context.globalAlpha = .45; context.lineWidth = .5; context.stroke(grid)
  const gridMs = performance.now() - started
  const hits: VectorHit[] = []
  let geometryMs = 0, drawingMs = 0
  for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index]
    const geometry = previewZoom === null ? shape.geometry : mapDisplayDetail(shape.geometry, previewZoom + (shape.fill ? 1 : 0))
    const outline = projectionPath()
    const begin = performance.now()
    path.context(outline)(geometry)
    const draw = performance.now()
    geometryMs += draw - begin
    if (shape.fill) {
      context.fillStyle = shape.fill; context.globalAlpha = shape.fillOpacity ?? 1; context.fill(outline)
    }
    if (shape.width > 0) {
      context.strokeStyle = shape.stroke; context.lineWidth = shape.width; context.globalAlpha = shape.opacity ?? 1
      context.setLineDash(shape.dash ?? []); context.stroke(outline)
    }
    if (shape.label) hits.push({ path: outline, index })
    drawingMs += performance.now() - draw
  }
  context.setLineDash([]); context.globalAlpha = 1
  return { hits, gridMs, geometryMs, drawingMs, shapeMs: performance.now() - started - gridMs }
}
