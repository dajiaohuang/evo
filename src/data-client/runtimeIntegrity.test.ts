import { afterEach, expect, it, vi } from 'vitest'
import { gzipSync, strToU8 } from 'fflate'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })

it('coalesces the cold DataPage bootstrap consumers and parses current once', async () => {
  vi.stubGlobal('Worker', undefined)
  const current = { datasetVersion: 'fixture', releaseBase: 'releases/fixture/', packages: { registry: { url: 'registry.json' } }, core: { linkageCoverage: { url: 'coverage.json' } } }
  const json = vi.fn(async () => current)
  const fetchMock = vi.fn(async (url: string) => String(url).endsWith('current.json')
    ? { ok: true, json } : new Response('{}'))
  vi.stubGlobal('fetch', fetchMock)
  const { loadCurrentManifest, loadPackageRegistry, loadEntityLinkageCoverage } = await import('./staticDataClient')
  await Promise.all([loadCurrentManifest(), loadPackageRegistry(), loadEntityLinkageCoverage()])
  expect(fetchMock.mock.calls.filter(([url]) => String(url).endsWith('current.json'))).toHaveLength(1)
  expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining('current.json'), { cache: 'no-store' })
  expect(json).toHaveBeenCalledOnce()
})

it('keeps a new bootstrap pending after clear when the old request rejects', async () => {
  const finishes: ((response: Response) => void)[] = []
  const fetchMock = vi.fn(() => new Promise<Response>(resolve => { finishes.push(resolve) }))
  vi.stubGlobal('fetch', fetchMock)
  const { clearRuntimeMemoryCache, loadCurrentManifest } = await import('./staticDataClient')
  const old = loadCurrentManifest()
  clearRuntimeMemoryCache()
  const fresh = loadCurrentManifest()
  finishes[0](new Response('{"datasetVersion":"old","releaseBase":"releases/old/"}'))
  await expect(old).rejects.toMatchObject({ name: 'AbortError' })
  const concurrent = loadCurrentManifest()
  expect(fetchMock).toHaveBeenCalledTimes(2)
  finishes[1](new Response('{"datasetVersion":"new","releaseBase":"releases/new/"}'))
  await expect(Promise.all([fresh, concurrent])).resolves.toHaveLength(2)
})

it('retries bootstrap parsing and release validation failures without caching them', async () => {
  const fetchMock = vi.fn()
    .mockResolvedValueOnce(new Response('invalid json'))
    .mockResolvedValueOnce(new Response('{"datasetVersion":"new","releaseBase":"wrong/"}'))
    .mockResolvedValueOnce(new Response('{"datasetVersion":"new","releaseBase":"releases/new/"}'))
  vi.stubGlobal('fetch', fetchMock)
  const { loadCurrentManifest } = await import('./staticDataClient')
  await expect(loadCurrentManifest()).rejects.toThrow()
  await expect(loadCurrentManifest()).rejects.toThrow('release mismatch')
  await expect(loadCurrentManifest()).resolves.toMatchObject({ datasetVersion: 'new' })
  expect(fetchMock).toHaveBeenCalledTimes(3)
})

it('coalesces release inventory bootstrap JSON through the public loader', async () => {
  const payloads: Record<string, unknown> = {
    'current.json': { datasetVersion: 'fixture', releaseBase: 'releases/fixture/' },
    'releases.json': { releases: [{ datasetVersion: 'fixture', releaseBase: 'releases/fixture/', filesIndex: 'files.json' }] },
    'files.json': { datasetVersion: 'fixture', files: [] },
  }
  const parses = new Map<string, ReturnType<typeof vi.fn>>()
  const fetchMock = vi.fn(async (url: string) => {
    const name = String(url).split('/').at(-1)!
    const json = vi.fn(async () => payloads[name])
    parses.set(name, json)
    return { ok: true, json }
  })
  vi.stubGlobal('fetch', fetchMock)
  const { loadCurrentReleaseFiles } = await import('./staticDataClient')
  await Promise.all([loadCurrentReleaseFiles(), loadCurrentReleaseFiles()])
  expect(fetchMock).toHaveBeenCalledTimes(3)
  for (const parse of parses.values()) expect(parse).toHaveBeenCalledOnce()
})

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

it('prefers the explicitly saved bootstrap over an older retained package cache when offline', async () => {
  const current = { datasetVersion: 'new', releaseBase: 'releases/new/' }
  const old = { datasetVersion: 'old', releaseBase: 'releases/old/' }
  const match = vi.fn(async () => new Response(JSON.stringify(current)))
  vi.stubGlobal('caches', { open: vi.fn(async () => ({ match })), match: vi.fn(async () => new Response(JSON.stringify(old))) })
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
  const { loadCurrentManifest } = await import('./staticDataClient')
  await expect(loadCurrentManifest()).resolves.toMatchObject(current)
  expect(caches.open).toHaveBeenCalledWith('evo-bootstrap-v2')
})
