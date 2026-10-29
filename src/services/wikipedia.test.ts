import { afterEach, expect, it, vi } from 'vitest'
import { webcrypto } from 'node:crypto'
import { gzipSync } from 'fflate'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })
it('reads stored Chinese text from the site without requesting Wikipedia', async () => {
  const fetcher = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ entries: { Pan: { status: 'matched', title: 'Pan (genus)', zhTitle: '黑猩猩属' } } }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ schemaVersion: 1, snapshots: { 'zh:黑猩猩属': {
      status: 'available', locale: 'zh', title: '黑猩猩属', extract: '本地保存的摘要', url: 'https://zh.wikipedia.org/wiki/黑猩猩属', revisionId: 123,
    } } }) })
  vi.stubGlobal('fetch', fetcher)
  const { wikipediaSummary } = await import('./wikipedia')
  const result = await wikipediaSummary('Pan', 'zh', new AbortController().signal)
  expect(result).toMatchObject({ status: 'ready', extract: '本地保存的摘要', revisionId: 123 })
  expect(fetcher.mock.calls.every(([url]) => !String(url).startsWith('https://'))).toBe(true)
})
it('distinguishes missing names from names not yet assessed', async () => {
  const fetcher = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ entries: { missing: { status: 'missing' } } }) })
  vi.stubGlobal('fetch', fetcher)
  const { wikipediaSummary } = await import('./wikipedia')
  expect(await wikipediaSummary('missing', 'en', new AbortController().signal)).toEqual({ status: 'missing' })
  expect(await wikipediaSummary('unknown', 'en', new AbortController().signal)).toEqual({ status: 'not-assessed' })
  expect(fetcher).toHaveBeenCalledTimes(1)
})
it('rejects a foreign article URL from local data', async () => {
  vi.stubGlobal('fetch', vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ entries: { x: { status: 'matched', title: 'x' } } }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ schemaVersion: 1, snapshots: { 'en:x': { status: 'available', locale: 'en', title: 'x', extract: 'x', url: 'https://example.com/wiki/x' } } }) }))
  const { wikipediaSummary } = await import('./wikipedia')
  await expect(wikipediaSummary('x', 'en', new AbortController().signal)).rejects.toThrow('Invalid Wikipedia URL')
})
it('verifies catalogue shard bytes and selects the saved abstract by stable ID', async () => {
  vi.stubGlobal('crypto', webcrypto)
  const id = 'COL123'
  const prefix = new Uint8Array(await webcrypto.subtle.digest('SHA-256', new TextEncoder().encode(id)))[0].toString(16).padStart(2, '0')
  const raw = new TextEncoder().encode(JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', entries: { [id]: {
    status: 'matched', abstracts: [{ status: 'available', locale: 'en', title: 'Human', extract: 'Saved text', url: 'https://en.wikipedia.org/wiki/Human' }],
  } } }))
  const packed = gzipSync(raw)
  const hex = async (bytes: Uint8Array) => Array.from(new Uint8Array(await webcrypto.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('')
  const descriptor = { path: `id-${prefix}.json.gz`, sha256: await hex(packed), bytes: packed.length, sourceSha256: await hex(raw), sourceBytes: raw.length }
  vi.stubGlobal('fetch', vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ schemaVersion: 1, releaseAlias: 'COL26.8', shards: { [prefix]: descriptor } }) })
    .mockResolvedValueOnce({ ok: true, arrayBuffer: async () => packed.buffer.slice(packed.byteOffset, packed.byteOffset + packed.byteLength) }))
  const { wikipediaSummary } = await import('./wikipedia')
  expect(await wikipediaSummary('Homo sapiens', 'en', new AbortController().signal, id)).toMatchObject({ status: 'ready', extract: 'Saved text' })
})
