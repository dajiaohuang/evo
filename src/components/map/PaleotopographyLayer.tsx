import { useEffect } from 'react'
import { GridLayer, type Coords, type DoneCallback } from 'leaflet'
import { useMap } from 'react-leaflet'
import { runtimeDataUrl } from '../../data-client/staticDataClient'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'
import { MAX_MAP_ZOOM } from '../../constants'

interface Props {
  collection: RuntimePaleotopographyCollection
  frame: RuntimePaleotopographyFrame
  onStatus?: (status: 'loading' | 'ready' | 'error', error?: string) => void
}

interface PendingTile {
  canvas: HTMLCanvasElement
  done: DoneCallback
}

export function PaleotopographyLayer({ collection, frame, onStatus }: Props) {
  const map = useMap()

  useEffect(() => {
    const tileSize = collection.visualization.tileSize
    const pending = new Map<number, PendingTile>()
    let requestId = 0
    let disposed = false
    const worker = new Worker(new URL('../../workers/paleotopography.worker.ts', import.meta.url), { type: 'module' })
    class CanvasGridLayer extends GridLayer {
      override createTile(coords: Coords, done: DoneCallback) {
        const canvas = document.createElement('canvas')
        canvas.width = tileSize
        canvas.height = tileSize
        canvas.setAttribute('role', 'presentation')
        const id = ++requestId
        pending.set(id, { canvas, done })
        worker.postMessage({ type: 'render', id, z: coords.z, x: coords.x, y: coords.y, tileSize })
        return canvas
      }
    }
    const layer = new CanvasGridLayer({
      tileSize,
      minZoom: 0,
      maxNativeZoom: collection.visualization.maximumNativeZoom,
      maxZoom: MAX_MAP_ZOOM,
      noWrap: true,
      opacity: 0.78,
      updateWhenIdle: true,
      keepBuffer: 1,
    })

    worker.onmessage = (event: MessageEvent<{ type: string; id?: number; rgba?: ArrayBuffer; error?: string }>) => {
      if (disposed) return
      if (event.data.type === 'ready') {
        onStatus?.('ready')
        return
      }
      if (event.data.type === 'error') {
        onStatus?.('error', event.data.error)
        for (const tile of pending.values()) tile.done(new Error(event.data.error ?? 'PaleoDEM worker failed'), tile.canvas)
        pending.clear()
        return
      }
      if (event.data.id === undefined) return
      const tile = pending.get(event.data.id)
      if (!tile) return
      pending.delete(event.data.id)
      if (event.data.type === 'tile-error' || !event.data.rgba) {
        tile.done(new Error(event.data.error ?? 'PaleoDEM tile render failed'), tile.canvas)
        return
      }
      const context = tile.canvas.getContext('2d')
      if (!context) {
        tile.done(new Error('Canvas 2D context is unavailable'), tile.canvas)
        return
      }
      context.putImageData(new ImageData(new Uint8ClampedArray(event.data.rgba), tileSize, tileSize), 0, 0)
      tile.done(undefined, tile.canvas)
    }
    worker.onerror = (event) => {
      if (!disposed) onStatus?.('error', event.message || 'PaleoDEM worker failed')
    }

    onStatus?.('loading')
    worker.postMessage({
      type: 'initialize',
      url: runtimeDataUrl(frame.grid.url),
      sha256: frame.grid.sha256,
      decodedSha256: frame.grid.sourceSha256,
      decodedBytes: frame.grid.sourceBytes,
      width: frame.grid.width,
      height: frame.grid.height,
    })
    layer.addTo(map)

    return () => {
      disposed = true
      layer.removeFrom(map)
      worker.terminate()
      pending.clear()
    }
  }, [collection, frame, map, onStatus])

  return null
}
