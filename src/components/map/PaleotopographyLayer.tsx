import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { runtimeDataUrl } from '../../data-client/staticDataClient'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'
import type { MapViewState } from '../../types'
import type { MapProjectionId, MapViewport } from '../../utils/mapProjection'
import { renderProjectedGrid, type PaleotopographyGrid, type ProjectedGridRequest } from '../../utils/paleotopographyRendering'

interface Props {
  collection: RuntimePaleotopographyCollection
  frame: RuntimePaleotopographyFrame
  projectionId: MapProjectionId
  camera: MapViewState
  viewport: MapViewport
  interacting: boolean
  onStatus?: (status: 'loading' | 'ready' | 'error', error?: string) => void
}

interface Engine {
  worker: Worker
  ready: boolean
  busy: boolean
  lastSent: number
  latest: ProjectedGridRequest | null
  send: () => void
}

function paintRaster(canvas: HTMLCanvasElement, request: ProjectedGridRequest, rgba: Uint8ClampedArray, quality: 'preview' | 'full'): boolean {
  const context = canvas.getContext('2d')
  if (!context) return false
  canvas.width = request.width; canvas.height = request.height
  context.putImageData(new ImageData(rgba as Uint8ClampedArray<ArrayBuffer>, request.width, request.height), 0, 0)
  canvas.dataset.projection = request.projectionId
  canvas.dataset.center = request.camera.center.join(',')
  canvas.dataset.renderId = String(request.id)
  canvas.dataset.renderQuality = quality
  canvas.hidden = false
  return true
}

/** Preview the verified grid with the current camera; refine in its worker at rest. */
export function PaleotopographyLayer({ collection, frame, projectionId, camera, viewport, interacting, onStatus }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<Engine | null>(null)
  const sequence = useRef(0)
  const [loadedGrid, setLoadedGrid] = useState<{ frame: RuntimePaleotopographyFrame; grid: PaleotopographyGrid } | null>(null)

  useEffect(() => {
    let disposed = false
    const worker = new Worker(new URL('../../workers/paleotopography.worker.ts', import.meta.url), { type: 'module' })
    const engine: Engine = { worker, ready: false, busy: false, latest: null, lastSent: -1, send: () => {
      if (!engine.ready || engine.busy || !engine.latest || engine.latest.id === engine.lastSent) return
      engine.busy = true
      engine.lastSent = engine.latest.id
      worker.postMessage(engine.latest)
    } }
    engineRef.current = engine
    worker.onmessage = (event: MessageEvent<{ type: string; id?: number; width?: number; height?: number; rgba?: ArrayBuffer; error?: string; grid?: PaleotopographyGrid }>) => {
      if (disposed) return
      const message = event.data
      if (message.type === 'ready' && message.grid) {
        engine.ready = true
        setLoadedGrid({ frame, grid: message.grid })
        onStatus?.('ready')
        return
      }
      if (message.type === 'error' || message.type === 'render-error') {
        engine.ready = false
        onStatus?.('error', message.error ?? 'PaleoDEM render failed')
        return
      }
      engine.busy = false
      const canvas = canvasRef.current
      const latest = engine.latest
      // A completed old camera must never cover the current vectors.
      if (canvas && latest && message.id === latest.id && message.rgba && message.width && message.height) {
        if (!paintRaster(canvas, { ...latest, width: message.width, height: message.height }, new Uint8ClampedArray(message.rgba), 'full')) {
          onStatus?.('error', 'Canvas 2D context is unavailable')
          return
        }
      }
      engine.send()
    }
    worker.onerror = (event) => { if (!disposed) onStatus?.('error', event.message || 'PaleoDEM worker failed') }
    onStatus?.('loading')
    worker.postMessage({
      type: 'initialize', url: new URL(runtimeDataUrl(frame.grid.url), document.baseURI).href,
      sha256: frame.grid.sha256, decodedSha256: frame.grid.sourceSha256,
      decodedBytes: frame.grid.sourceBytes, width: frame.grid.width, height: frame.grid.height,
    })
    return () => { disposed = true; worker.terminate(); if (engineRef.current === engine) engineRef.current = null }
  }, [collection, frame, onStatus])

  useLayoutEffect(() => {
    if (engineRef.current) engineRef.current.latest = null
    const canvas = canvasRef.current
    if (!canvas) return
    if (loadedGrid?.frame !== frame || viewport.width < 2 || viewport.height < 2) {
      canvas.hidden = true
      return
    }
    const ratio = Math.min(1, 192 / viewport.width, 128 / viewport.height)
    const request: ProjectedGridRequest = {
      type: 'render', id: ++sequence.current, projectionId, camera, viewport,
      width: Math.max(1, Math.round(viewport.width * ratio)), height: Math.max(1, Math.round(viewport.height * ratio)),
    }
    // Paint before the browser presents the updated vectors. Do not hide the
    // terrain or wait for an asynchronous frame that continuous input can stale.
    if (!paintRaster(canvas, request, renderProjectedGrid(loadedGrid.grid, request), 'preview')) {
      onStatus?.('error', 'Canvas 2D context is unavailable')
    }
  }, [camera, viewport, projectionId, frame, loadedGrid, onStatus])

  useEffect(() => {
    const engine = engineRef.current
    if (!engine) return
    if (interacting || loadedGrid?.frame !== frame || viewport.width < 2 || viewport.height < 2) {
      engine.latest = null
      return
    }
    // Refine only at rest; camera changes coalesce while a full frame is busy.
    const ratio = Math.min(1, 1000 / viewport.width, 800 / viewport.height)
    engine.latest = {
      type: 'render', id: ++sequence.current, projectionId, camera, viewport,
      width: Math.max(1, Math.round(viewport.width * ratio)), height: Math.max(1, Math.round(viewport.height * ratio)),
    }
    engine.send()
  }, [camera, viewport, projectionId, interacting, collection, frame, loadedGrid, onStatus])

  return <canvas ref={canvasRef} className="projected-map__terrain" aria-hidden="true" hidden />
}
