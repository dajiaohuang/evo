import { act, render } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { PaleotopographyLayer } from './PaleotopographyLayer'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ runtimeDataUrl: (url: string) => `./data/${url}` }))

afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks() })

it('resolves the native PaleoDEM grid against the page before worker dispatch', () => {
  vi.spyOn(document, 'baseURI', 'get').mockReturnValue('capacitor://localhost/')
  const postMessage = vi.fn()
  const terminate = vi.fn()
  vi.stubGlobal('Worker', class { postMessage = postMessage; terminate = terminate })
  const { unmount } = render(<PaleotopographyLayer
    projectionId="mercator" camera={{ center: [0, 0], zoom: 2 }} viewport={{ width: 800, height: 500 }} interacting={false}
    collection={{ visualization: { tileSize: 256, maximumNativeZoom: 4 } } as RuntimePaleotopographyCollection}
    frame={{ grid: { url: 'releases/test/grid.bin.gz', width: 3600, height: 1800 } } as RuntimePaleotopographyFrame}
  />)
  expect(postMessage).toHaveBeenCalledWith(expect.objectContaining({ type: 'initialize', url: 'capacitor://localhost/data/releases/test/grid.bin.gz' }))
  unmount()
  expect(terminate).toHaveBeenCalledOnce()
})

it('coalesces view changes without reloading the grid and rejects stale raster frames', () => {
  const postMessage = vi.fn()
  const terminate = vi.fn()
  let message: ((event: { data: unknown }) => void) | null = null
  vi.stubGlobal('Worker', class {
    postMessage = postMessage
    terminate = terminate
    set onmessage(handler: (event: { data: unknown }) => void) { message = handler }
  })
  vi.stubGlobal('ImageData', class {})
  const putImageData = vi.fn()
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ putImageData } as unknown as CanvasRenderingContext2D)
  const collection = {} as RuntimePaleotopographyCollection
  const frame = { grid: { url: 'grid.gz' } } as RuntimePaleotopographyFrame
  const props = { collection, frame, viewport: { width: 800, height: 500 }, interacting: true }
  const { container, rerender } = render(<PaleotopographyLayer {...props} projectionId="mercator" camera={{ center: [0, 0], zoom: 2 }} />)
  act(() => { message!({ data: { type: 'ready' } }) })
  const first = postMessage.mock.calls.at(-1)![0]
  rerender(<PaleotopographyLayer {...props} projectionId="equal-earth" camera={{ center: [20, 170], zoom: 2 }} />)
  rerender(<PaleotopographyLayer {...props} projectionId="equal-earth" camera={{ center: [30, -170], zoom: 2 }} />)
  expect(postMessage.mock.calls.filter(([value]) => value.type === 'initialize')).toHaveLength(1)
  expect(postMessage.mock.calls.filter(([value]) => value.type === 'render')).toHaveLength(1)
  act(() => { message!({ data: { type: 'frame', id: first.id, width: 1, height: 1, rgba: new ArrayBuffer(4) } }) })
  expect(putImageData).not.toHaveBeenCalled()
  expect(container.querySelector('canvas')).toHaveAttribute('hidden')
  const latest = postMessage.mock.calls.at(-1)![0]
  expect(latest.camera.center).toEqual([30, -170])
  expect(latest.projectionId).toBe('equal-earth')
  act(() => { message!({ data: { type: 'frame', id: latest.id, width: 1, height: 1, rgba: new ArrayBuffer(4) } }) })
  expect(putImageData).toHaveBeenCalledOnce()
  expect(container.querySelector('canvas')).not.toHaveAttribute('hidden')
  expect(container.querySelector('canvas')).toHaveAttribute('data-center', '30,-170')
})
