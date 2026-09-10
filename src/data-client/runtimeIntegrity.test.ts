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
