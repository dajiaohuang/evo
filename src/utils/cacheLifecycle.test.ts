import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { expect, it, vi } from 'vitest'

it('finishes activation before navigation completes and bypasses the legacy home cache', async () => {
  const handlers: Record<string, (event: { waitUntil: (promise: Promise<void>) => void }) => void> = {}
  const values = new Map<string, unknown>()
  const cache = { put: async (key: string, value: unknown) => { values.set(key, value) }, match: async (key: string) => values.get(key), delete: async (key: string) => values.delete(key) }
  const navigate = vi.fn(() => new Promise(() => {}))
  const claim = vi.fn(async () => undefined)
  const clients = [
    { url: 'https://example.test/evo/?lang=zh#/home?age=65', navigate },
    { url: 'https://example.test/evo/methods/', navigate: vi.fn() },
  ]
  runInNewContext(readFileSync('public/cache-lifecycle.js', 'utf8'), {
    self: {
      location: { origin: 'https://example.test' },
      registration: { active: {}, scope: 'https://example.test/evo/' },
      addEventListener: (name: string, listener: typeof handlers[string]) => { handlers[name] = listener },
      skipWaiting: async () => undefined,
      clients: { claim, matchAll: async () => clients },
    },
    caches: { open: async () => cache, keys: async () => [], delete: vi.fn() },
    URL, AbortSignal, Response: class {},
    fetch: async () => ({ ok: true, json: async () => ({ datasetVersion: 'current' }) }),
  })
  let pending = Promise.resolve()
  const event = { waitUntil: (promise: Promise<void>) => { pending = promise } }
  handlers.install(event)
  await pending
  handlers.activate(event)
  // A navigation fetch can wait for activation. Awaiting it in activate deadlocks.
  await Promise.race([pending, new Promise((_, reject) => setTimeout(() => reject(new Error('activation waited for navigation')), 100))])
  expect(claim).toHaveBeenCalledOnce()
  expect(navigate).toHaveBeenCalledWith('https://example.test/evo/index.html?lang=zh&__evo_ui=map-fullscreen-v2#/home?age=65')
  expect(clients[1].navigate).not.toHaveBeenCalled()
  expect(values.size).toBe(0)
})
