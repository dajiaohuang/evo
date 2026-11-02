import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { useMapVectorWorker, type VectorSnapshot } from './useMapVectorWorker'

class FakeWorker {
  static instances: FakeWorker[] = []
  constructor() { FakeWorker.instances.push(this) }
  postMessage = vi.fn()
  terminate = vi.fn()
  onmessage: ((event: { data: unknown }) => void) | null = null
  onerror: (() => void) | null = null
  frame(id: number) {
    const bitmap = { close: vi.fn() }
    this.onmessage?.({ data: { type: 'frame', id, bitmap, renderMs: 1, gridMs: 0, shapeMs: 1, geometryMs: 1, drawingMs: 0 } })
    return bitmap
  }
}
const snapshot = (): VectorSnapshot => ({ camera: { center: [0, 0], zoom: 2 }, projectionId: 'equal-earth',
  size: { width: 100, height: 100 }, ratio: 1, preview: true, shapes: [], observations: [], nodePoints: [], inputTime: 0 })
beforeEach(() => {
  FakeWorker.instances = []
  vi.stubGlobal('Worker', FakeWorker)
  vi.stubGlobal('OffscreenCanvas', class {})
})
afterEach(() => vi.unstubAllGlobals())

it('keeps one render in flight and sends only the newest pending camera', () => {
  const paint = vi.fn()
  const { result, unmount } = renderHook(() => useMapVectorWorker(true, paint))
  const worker = FakeWorker.instances[0]
  const first = snapshot()
  act(() => result.current.render(first))
  for (let zoom = 3; zoom <= 6; zoom++) act(() => result.current.render({ ...first, camera: { ...first.camera, zoom } }))
  expect(worker.postMessage).toHaveBeenCalledTimes(1)
  act(() => { worker.frame(1) })
  expect(worker.postMessage).toHaveBeenCalledTimes(2)
  expect(worker.postMessage.mock.calls[1][0]).toMatchObject({ camera: { zoom: 6 }, shapes: undefined })
  expect(paint).toHaveBeenCalledTimes(1)
  unmount()
  expect(worker.terminate).toHaveBeenCalledTimes(1)
})

it('closes an obsolete geographic scene without painting it', () => {
  const paint = vi.fn()
  const { result, unmount } = renderHook(() => useMapVectorWorker(true, paint))
  const worker = FakeWorker.instances[0]
  const first = snapshot()
  act(() => result.current.render(first))
  act(() => result.current.render({ ...first, shapes: [] }))
  let bitmap!: ReturnType<FakeWorker['frame']>
  act(() => { bitmap = worker.frame(1) })
  expect(bitmap.close).toHaveBeenCalledOnce()
  expect(paint).not.toHaveBeenCalled()
  expect(worker.postMessage).toHaveBeenCalledTimes(2)
  unmount()
})

it('falls back after a worker error and resolves pending hit requests on cleanup', async () => {
  const { result, unmount } = renderHook(() => useMapVectorWorker(true, vi.fn()))
  const worker = FakeWorker.instances[0]
  const hit = result.current.hit(10, 20)
  act(() => worker.onerror?.())
  expect(result.current.active).toBe(false)
  await expect(hit).resolves.toBeNull()
  unmount()
})
