import { useEffect, useLayoutEffect, useRef } from 'react'
import { runtimeDataUrl } from '../../data-client/staticDataClient'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'
import type { MapViewState } from '../../types'
import type { MapProjectionId, MapViewport } from '../../utils/mapProjection'
import type { ProjectedGridRequest } from '../../utils/paleotopographyRendering'

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

/** Keep one verified grid in its worker; only camera snapshots cross on drag. */
export function PaleotopographyLayer({ collection, frame, projectionId, camera, viewport, interacting, onStatus }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<Engine | null>(null)
  const sequence = useRef(0)

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
    worker.onmessage = (event: MessageEvent<{ type: string; id?: number; width?: number; height?: number; rgba?: ArrayBuffer; error?: string }>) => {
      if (disposed) return
      const message = event.data
      if (message.type === 'ready') { engine.ready = true; engine.send(); return }
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
        canvas.width = message.width; canvas.height = message.height
        const context = canvas.getContext('2d')
        if (!context) { onStatus?.('error', 'Canvas 2D context is unavailable'); return }
        context.putImageData(new ImageData(new Uint8ClampedArray(message.rgba), message.width, message.height), 0, 0)
        canvas.dataset.projection = latest.projectionId
        canvas.dataset.center = latest.camera.center.join(',')
        canvas.dataset.renderId = String(message.id)
        canvas.hidden = false
        onStatus?.('ready')
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
    if (canvasRef.current) canvasRef.current.hidden = true
    if (engineRef.current) engineRef.current.latest = null
  }, [camera, viewport, projectionId, frame])

  useEffect(() => {
    const engine = engineRef.current
    if (!engine || viewport.width < 2 || viewport.height < 2) return
    // A coarse, freshly reprojected drag preview is replaced by the full viewport
    // on release. This changes display sampling, never the verified source grid.
    const ratio = Math.min(1, (interacting ? 192 : 1000) / viewport.width, (interacting ? 128 : 800) / viewport.height)
    engine.latest = {
      type: 'render', id: ++sequence.current, projectionId, camera, viewport,
      width: Math.max(1, Math.round(viewport.width * ratio)), height: Math.max(1, Math.round(viewport.height * ratio)),
    }
    engine.send()
  }, [camera, viewport, projectionId, interacting, collection, frame, onStatus])

  return <canvas ref={canvasRef} className="projected-map__terrain" aria-hidden="true" hidden />
}
