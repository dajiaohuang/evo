import { useEffect, useEffectEvent, useRef, useState } from 'react'
import type { MapShape, MapPoint } from '../components/map/mapScene'
import type { MapViewState } from '../types'
import type { MapProjectionId, MapViewport } from '../utils/mapProjection'

export interface VectorSnapshot {
  camera: MapViewState; projectionId: MapProjectionId; size: MapViewport; ratio: number; preview: boolean;
  shapes: MapShape[]; observations: MapPoint[]; nodePoints: MapPoint[]; inputTime: number;
}
export interface VectorFrame {
  type: 'frame'; id: number; bitmap: ImageBitmap; renderMs: number; gridMs: number; shapeMs: number; geometryMs: number; drawingMs: number;
}
interface Engine {
  worker: Worker; latest: VectorSnapshot | null; sent: VectorSnapshot | null; scene: MapShape[] | null;
  id: number; busy: boolean; displayed: number; pump: () => void;
}

/** One in-flight render and one replaceable latest request, never a camera backlog. */
export function useMapVectorWorker(enabled: boolean, onFrame: (frame: VectorFrame, snapshot: VectorSnapshot) => void) {
  const [failed, setFailed] = useState(false)
  const supported = typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined'
  const active = enabled && supported && !failed
  const engine = useRef<Engine | null>(null)
  const latest = useRef<VectorSnapshot | null>(null)
  const hitId = useRef(0)
  const pendingHits = useRef(new Map<number, (index: number | null) => void>())
  const present = useEffectEvent(onFrame)
  useEffect(() => {
    if (!active) return
    let disposed = false
    let worker: Worker
    try { worker = new Worker(new URL('../workers/mapVectors.worker.ts', import.meta.url), { type: 'module' }) }
    catch { queueMicrotask(() => setFailed(true)); return }
    const state: Engine = { worker, latest: latest.current, sent: null, scene: null, id: 0, busy: false, displayed: -1, pump: () => {
      const request = state.latest
      if (state.busy || !request || state.sent === request) return
      state.busy = true; state.sent = request
      const changed = state.scene !== request.shapes
      state.scene = request.shapes
      // Point evidence stays on the main thread; only geographic display shapes cross once per scene.
      worker.postMessage({ type: 'render', id: ++state.id, camera: request.camera, size: request.size,
        projectionId: request.projectionId, ratio: request.ratio, preview: request.preview,
        shapes: changed ? request.shapes.map(shape => ({ ...shape, point: undefined })) : undefined })
    } }
    engine.current = state
    const fail = () => { if (!disposed) { setFailed(true); worker.terminate() } }
    worker.onerror = fail
    worker.onmessage = (event: MessageEvent<VectorFrame | { type: 'hit'; id: number; index: number | null } | { type: 'error' }>) => {
      const message = event.data
      if (message.type === 'hit') {
        pendingHits.current.get(message.id)?.(message.index)
        pendingHits.current.delete(message.id)
        return
      }
      if (message.type === 'error') { fail(); return }
      if (disposed) { message.bitmap.close(); return }
      const snapshot = state.sent!, target = state.latest
      state.busy = false
      // A stale coastline generation must never be combined with new evidence points.
      if (target && snapshot.shapes === target.shapes && snapshot.size === target.size && snapshot.projectionId === target.projectionId) {
        present(message, snapshot); state.displayed = message.id
      } else message.bitmap.close()
      state.pump()
    }
    state.pump()
    const hits = pendingHits.current
    return () => {
      disposed = true; worker.terminate(); engine.current = null
      for (const resolve of hits.values()) resolve(null)
      hits.clear()
    }
  }, [active])
  return {
    active,
    render(snapshot: VectorSnapshot) {
      latest.current = snapshot
      if (engine.current) { engine.current.latest = snapshot; engine.current.pump() }
    },
    hit(x: number, y: number): Promise<number | null> {
      const state = engine.current
      if (!state) return Promise.resolve(null)
      // Replace hover requests instead of letting them queue behind expensive geometry.
      for (const resolve of pendingHits.current.values()) resolve(null)
      pendingHits.current.clear()
      return new Promise(resolve => {
        const id = ++hitId.current
        pendingHits.current.set(id, resolve)
        state.worker.postMessage({ type: 'hit', id, frameId: state.displayed, x, y })
      })
    },
  }
}
