import { afterEach, expect, it, vi } from 'vitest'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })
async function harness() {
  const scope = { onmessage: null as ((event: { data: Record<string, unknown> }) => Promise<void>) | null, postMessage: vi.fn() }
  vi.stubGlobal('self', scope)
  vi.stubGlobal('caches', undefined)
  await import('./runtimeData.worker')
  return { send: (data: Record<string, unknown>) => scope.onmessage!({ data }), posted: scope.postMessage }
}

it('reads verified data even when Cache Storage is unavailable', async () => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response('[{"id":"record"}]')))
  const { send, posted } = await harness()
  await send({ id: 1, url: '/data/test.json' })
  expect(posted).toHaveBeenCalledWith({ id: 1, data: [{ id: 'record' }] })
})

it.each([true, false])('aborts the actual network transfer when cleared or cancelled: %s', async clear => {
  let cancelled = false
  vi.stubGlobal('fetch', vi.fn((_url, init: RequestInit) => new Promise((_resolve, reject) => {
    init.signal!.addEventListener('abort', () => { cancelled = true; reject(init.signal!.reason) }, { once: true })
  })))
  const { send, posted } = await harness()
  const loading = send({ id: 1, url: '/data/test.json' })
  await send(clear ? { clearIndexes: true } : { id: 1, cancel: true })
  await loading
  expect(cancelled).toBe(true)
  expect(posted).not.toHaveBeenCalled()
})
