import { afterEach, expect, it, vi } from 'vitest'
import { gzipSync, strToU8 } from 'fflate'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })

it('checks the decompressed digest in the fallback as well as the compressed transport', async () => {
  const bytes = gzipSync(strToU8('{"value":1}'))
  const digest = await crypto.subtle.digest('SHA-256', Uint8Array.from(bytes).buffer)
  const sha256 = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
  vi.stubGlobal('Worker', undefined)
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, arrayBuffer: async () => Uint8Array.from(bytes).buffer })))
  const { loadRuntimeFile } = await import('./staticDataClient')
  await expect(loadRuntimeFile({ url: 'integrity.json.gz', sha256, sourceSha256: '0'.repeat(64) }))
    .rejects.toThrow('Decompressed checksum mismatch')
})

it('does not reuse a cached payload to bypass a different expected decompressed digest', async () => {
  const bytes = gzipSync(strToU8('{"value":1}'))
  const digest = await crypto.subtle.digest('SHA-256', Uint8Array.from(bytes).buffer)
  const sha256 = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('')
  vi.stubGlobal('Worker', undefined)
  vi.stubGlobal('fetch', vi.fn(async () => new Response(Uint8Array.from(bytes))))
  const { loadRuntimeFile } = await import('./staticDataClient')
  await expect(loadRuntimeFile({ url: 'cache.json.gz', sha256 })).resolves.toEqual({ value: 1 })
  await expect(loadRuntimeFile({ url: 'cache.json.gz', sha256, sourceSha256: '0'.repeat(64) })).rejects.toThrow('Decompressed checksum mismatch')
})

it('prevents a late fallback response from repopulating a cleared cache', async () => {
  let finish!: (response: Response) => void
  const fetchMock = vi.fn(() => new Promise<Response>(resolve => { finish = resolve }))
  vi.stubGlobal('Worker', undefined)
  vi.stubGlobal('fetch', fetchMock)
  const { clearRuntimeMemoryCache, loadRuntimeFile } = await import('./staticDataClient')
  const old = loadRuntimeFile({ url: 'current-record.json' })
  await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledOnce())
  clearRuntimeMemoryCache()
  finish(new Response('{"value":"old"}'))
  await expect(old).rejects.toMatchObject({ name: 'AbortError' })
  fetchMock.mockResolvedValue(new Response('{"value":"new"}'))
  await expect(loadRuntimeFile({ url: 'current-record.json' })).resolves.toEqual({ value: 'new' })
})
