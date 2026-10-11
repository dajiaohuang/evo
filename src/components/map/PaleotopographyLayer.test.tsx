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

it('keeps terrain visible and aligned during drag while a worker frame is pending', () => {
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
  const props = { collection, frame, viewport: { width: 800, height: 500 }, interacting: false }
  const { container, rerender } = render(<PaleotopographyLayer {...props} projectionId="mercator" camera={{ center: [0, 0], zoom: 2 }} />)
  const canvas = container.querySelector('canvas')!
  const grid = { values: new Int16Array([0, 300, 1000, 2000]), width: 2, height: 2 }
  act(() => { message!({ data: { type: 'ready', grid } }) })
  const initial = postMessage.mock.calls.at(-1)![0]
  act(() => { message!({ data: { type: 'frame', id: initial.id, width: 1, height: 1, rgba: new ArrayBuffer(4) } }) })
  expect(canvas).not.toHaveAttribute('hidden')
  rerender(<PaleotopographyLayer {...props} projectionId="mercator" camera={{ center: [1, 0], zoom: 2 }} />)
  const first = postMessage.mock.calls.at(-1)![0]
  rerender(<PaleotopographyLayer {...props} interacting projectionId="equal-earth" camera={{ center: [20, 170], zoom: 2 }} />)
  expect(canvas).not.toHaveAttribute('hidden')
  expect(canvas).toHaveAttribute('data-center', '20,170')
  rerender(<PaleotopographyLayer {...props} interacting projectionId="equal-earth" camera={{ center: [30, -170], zoom: 2 }} />)
  expect(canvas).not.toHaveAttribute('hidden')
  expect(canvas).toHaveAttribute('data-center', '30,-170')
  expect(canvas).toHaveAttribute('data-projection', 'equal-earth')
  expect(canvas.width).toBeLessThanOrEqual(192)
  expect(canvas.height).toBeLessThanOrEqual(128)
  const previews = putImageData.mock.calls.length
  expect(previews).toBeGreaterThanOrEqual(3)
  expect(postMessage.mock.calls.filter(([value]) => value.type === 'initialize')).toHaveLength(1)
  expect(postMessage.mock.calls.filter(([value]) => value.type === 'render')).toHaveLength(2)
  act(() => { message!({ data: { type: 'frame', id: first.id, width: 1, height: 1, rgba: new ArrayBuffer(4) } }) })
  expect(putImageData).toHaveBeenCalledTimes(previews)
  expect(canvas).not.toHaveAttribute('hidden')
  expect(canvas).toHaveAttribute('data-center', '30,-170')
  rerender(<PaleotopographyLayer {...props} projectionId="equal-earth" camera={{ center: [30, -170], zoom: 2 }} />)
  const latest = postMessage.mock.calls.at(-1)![0]
  expect(latest.camera.center).toEqual([30, -170])
  expect(latest.projectionId).toBe('equal-earth')
  expect(latest.width).toBe(800)
  expect(latest.height).toBe(500)
  const beforeRefinement = putImageData.mock.calls.length
  act(() => { message!({ data: { type: 'frame', id: latest.id, width: latest.width, height: latest.height, rgba: new ArrayBuffer(latest.width * latest.height * 4) } }) })
  expect(putImageData).toHaveBeenCalledTimes(beforeRefinement + 1)
  expect(canvas).not.toHaveAttribute('hidden')
  expect(canvas).toHaveAttribute('data-center', '30,-170')
  expect(canvas.width).toBe(800)
  expect(canvas.height).toBe(500)
  const previousWorkerMessage = message!
  const nextFrame = { grid: { url: 'next-age.gz' } } as RuntimePaleotopographyFrame
  rerender(<PaleotopographyLayer {...props} frame={nextFrame} projectionId="equal-earth" camera={{ center: [30, -170], zoom: 2 }} />)
  expect(canvas).toHaveAttribute('hidden')
  act(() => { previousWorkerMessage({ data: { type: 'ready', grid } }) })
  expect(canvas).toHaveAttribute('hidden')
  expect(terminate).toHaveBeenCalledOnce()
  expect(postMessage.mock.calls.filter(([value]) => value.type === 'initialize')).toHaveLength(2)
  act(() => { message!({ data: { type: 'ready', grid } }) })
  expect(canvas).not.toHaveAttribute('hidden')
  expect(canvas).toHaveAttribute('data-center', '30,-170')
})
