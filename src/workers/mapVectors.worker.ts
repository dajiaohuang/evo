import { createMapProjection, type MapProjectionId, type MapViewport } from '../utils/mapProjection'
import { paintMapGeometry, type VectorHit } from '../utils/mapVectorRendering'
import type { MapViewState } from '../types'
import type { MapShape } from '../components/map/mapScene'

let shapes: MapShape[] = []
let hits: VectorHit[] = []
let frameId = -1
const canvas = new OffscreenCanvas(1, 1)
const context = canvas.getContext('2d')!
self.onmessage = (event: MessageEvent<{
  type: 'render' | 'hit'; id: number; frameId?: number; x?: number; y?: number;
  shapes?: MapShape[]; camera: MapViewState; projectionId: MapProjectionId;
  size: MapViewport; ratio: number; preview: boolean;
}>) => {
  const request = event.data
  try {
    if (request.type === 'hit') {
      let index: number | null = null
      if (request.frameId === frameId) {
        context.save(); context.resetTransform()
        for (let i = hits.length - 1; i >= 0; i--) {
          const hit = hits[i], shape = shapes[hit.index]
          context.lineWidth = Math.max(shape.width, 6)
          if (context.isPointInStroke(hit.path, request.x!, request.y!) || (shape.fill && context.isPointInPath(hit.path, request.x!, request.y!))) { index = hit.index; break }
        }
        context.restore()
      }
      self.postMessage({ type: 'hit', id: request.id, index })
      return
    }
    if (request.shapes) shapes = request.shapes
    const started = performance.now()
    const projection = createMapProjection(request.projectionId, request.camera, request.size)
    const result = paintMapGeometry(context, shapes, projection, request.size, request.ratio,
      request.preview ? Math.ceil(request.camera.zoom) : null)
    hits = result.hits
    frameId = request.id
    const bitmap = canvas.transferToImageBitmap()
    self.postMessage({ type: 'frame', id: request.id, bitmap, renderMs: performance.now() - started,
      gridMs: result.gridMs, shapeMs: result.shapeMs, geometryMs: result.geometryMs, drawingMs: result.drawingMs }, { transfer: [bitmap] })
  } catch (error) {
    self.postMessage({ type: 'error', id: request.id, message: String(error) })
  }
}
