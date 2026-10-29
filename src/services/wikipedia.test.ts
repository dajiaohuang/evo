import { afterEach, expect, it, vi } from 'vitest'
import { webcrypto } from 'node:crypto'
import { gzipSync } from 'fflate'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })

it('loads links once without requesting article bodies or Wikipedia', async () => {
  const fetcher = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ entries: {
    Pan: { status: 'matched', url: 'https://en.wikipedia.org/wiki/Pan_(genus)' },
    missing: { status: 'missing' },
  } }) })
  vi.stubGlobal('fetch', fetcher)
  const service = await import('./wikipedia')
  const first = await service.loadWikipediaMapping()
  expect(first.entries.Pan.url).toContain('wikipedia.org/wiki/')
  expect(first.entries.missing.status).toBe('missing')
  expect(first.entries.unknown).toBeUndefined()
  await service.loadWikipediaMapping()
  expect(fetcher).toHaveBeenCalledTimes(1)
  expect(fetcher.mock.calls[0][0]).toMatch(/\/wikipedia\/mapping.json$/)
  expect(service).not.toHaveProperty('wikipediaSummary')
})

it('verifies the compressed catalogue shard before returning a stable-ID link', async () => {
  vi.stubGlobal('crypto', webcrypto)
  const id = 'COL123'
  const prefix = new Uint8Array(await webcrypto.subtle.digest('SHA-256', new TextEncoder().encode(id)))[0].toString(16).padStart(2, '0')
  const raw = new TextEncoder().encode(JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', entries: { [id]: {
    status: 'matched', url: 'https://en.wikipedia.org/wiki/Human',
  } } }))
  const packed = gzipSync(raw)
  const hex = async (bytes: Uint8Array) => Array.from(new Uint8Array(await webcrypto.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('')
  const packedHash = await hex(packed)
  const descriptor = { path: `id-${prefix}-${packedHash.slice(0, 16)}.json.gz`, sha256: packedHash, bytes: packed.length, sourceSha256: await hex(raw), sourceBytes: raw.length }
  const fetcher = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ schemaVersion: 1, releaseAlias: 'COL26.8', shards: { [prefix]: descriptor } }) })
    .mockResolvedValueOnce({ ok: true, arrayBuffer: async () => packed.buffer.slice(packed.byteOffset, packed.byteOffset + packed.byteLength) })
  vi.stubGlobal('fetch', fetcher)
  const { loadCatalogueWikipedia } = await import('./wikipedia')
  expect(await loadCatalogueWikipedia(id)).toMatchObject({ status: 'matched', url: 'https://en.wikipedia.org/wiki/Human' })
  expect(fetcher).toHaveBeenCalledTimes(2)
})
