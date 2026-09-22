import { createHash } from 'node:crypto'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { loadCurrentManifest, loadCurrentReleaseFiles } from './staticDataClient'
import { getCompleteAtlasOfflinePlan, saveCompleteAtlasOffline } from './offlinePackages'

vi.mock('./staticDataClient', () => ({
  loadCurrentManifest: vi.fn(), loadCurrentReleaseFiles: vi.fn(), runtimeDataUrl: (url: string) => `https://evo.test/data/${url}`,
  clearRuntimeMemoryCache: vi.fn(), loadCatalogueManifest: vi.fn(), loadCatalogueResourcePackManifest: vi.fn(), loadPackageManifest: vi.fn(), loadPackageRegistry: vi.fn(),
}))
const payload = JSON.stringify({ evidence: 'verified' })
const file = { url: 'releases/test/one.json', bytes: payload.length, sha256: createHash('sha256').update(payload).digest('hex') }
const current = { datasetVersion: 'test', releaseBase: 'releases/test/' }
const inventory = { schemaVersion: 1, datasetVersion: 'test', files: [file] }
let stored: Map<string, Response>
let fetchMock: ReturnType<typeof vi.fn>
const dataUrl = (path: string) => `https://evo.test/data/${path}`
const json = (value: unknown) => new Response(JSON.stringify(value))

beforeEach(() => {
  vi.mocked(loadCurrentManifest).mockResolvedValue(current as Awaited<ReturnType<typeof loadCurrentManifest>>)
  vi.mocked(loadCurrentReleaseFiles).mockResolvedValue(inventory)
  stored = new Map()
  const cache = { match: async (url: string) => stored.get(url)?.clone(), put: async (url: string, response: Response) => { stored.set(url, response.clone()) }, delete: async (url: string) => stored.delete(url) }
  vi.stubGlobal('caches', { open: async () => cache })
  fetchMock = vi.fn(async (url: string) => {
    if (url.endsWith('current.json')) return json(current)
    if (url.endsWith('releases.json')) return json({ releases: [current] })
    if (url.endsWith('release-files.json')) return json(inventory)
    return new Response(payload)
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => { vi.unstubAllGlobals(); vi.clearAllMocks() })

it('repairs a corrupted cache entry before counting it as saved', async () => {
  stored.set(dataUrl(file.url), new Response('corrupted'))
  const progress = vi.fn()
  await saveCompleteAtlasOffline(progress)
  expect(await stored.get(dataUrl(file.url))!.text()).toBe(payload)
  expect(progress).toHaveBeenCalledTimes(1)
  expect([...stored.keys()].at(-1)).toBe(dataUrl('current.json'))
})

it('rejects corrupt network bytes without advertising completion or publishing startup pointers', async () => {
  fetchMock.mockImplementation(async (url: string) => url.endsWith(file.url) ? new Response('corrupted') : url.endsWith('releases.json') ? json({ releases: [current] }) : json(current))
  const progress = vi.fn()
  await expect(saveCompleteAtlasOffline(progress)).rejects.toThrow('checksum or size mismatch')
  expect(progress).not.toHaveBeenCalled()
  expect(stored.size).toBe(0)
})

it('revalidates a good cached file without fetching its payload again', async () => {
  stored.set(dataUrl(file.url), new Response(payload))
  await saveCompleteAtlasOffline()
  expect(fetchMock.mock.calls.some(([url]) => url === dataUrl(file.url))).toBe(false)
})

it('updates the stable startup cache only after the new release content is present', async () => {
  const old = new Response(JSON.stringify({ datasetVersion: 'old' }))
  const pointers = new Map([[dataUrl('current.json'), old]])
  const cacheFor = (map: Map<string, Response>) => ({ match: async (url: string) => map.get(url)?.clone(), delete: async (url: string) => map.delete(url), put: async (url: string, response: Response) => {
    if (url.endsWith('current.json')) expect(stored.has(dataUrl(file.url))).toBe(true)
    map.set(url, response.clone())
  } })
  vi.stubGlobal('caches', { open: async (name: string) => cacheFor(name === 'evo-bootstrap-v2' ? pointers : stored) })
  await saveCompleteAtlasOffline()
  expect(await pointers.get(dataUrl('current.json'))!.json()).toEqual(current)
  expect(stored.has(dataUrl('current.json'))).toBe(false)
})

it.each([
  [{ ...file, url: 'releases/other/one.json' }], [file, file], [{ ...file, bytes: -1 }], [{ ...file, url: 'releases/test/../other.json' }],
].map(files => ({ files })))('rejects invalid release inventory before network transfer: %j', async ({ files }) => {
  vi.mocked(loadCurrentReleaseFiles).mockResolvedValue({ ...inventory, files })
  await expect(getCompleteAtlasOfflinePlan()).rejects.toThrow('invalid or duplicate')
  expect(fetchMock).not.toHaveBeenCalled()
})

it('does not mix a newly published bootstrap with the selected offline release', async () => {
  fetchMock.mockResolvedValue(json({ ...current, datasetVersion: 'new' }))
  await expect(saveCompleteAtlasOffline()).rejects.toThrow('bootstrap changed')
  expect(stored.size).toBe(0)
})

it('cancels and joins sibling transfers before returning a failure', async () => {
  const second = { ...file, url: 'releases/test/two.json' }
  vi.mocked(loadCurrentReleaseFiles).mockResolvedValue({ ...inventory, files: [file, second] })
  let siblingCancelled = false
  const initial = fetchMock.getMockImplementation()! as (url: string) => Promise<Response>
  fetchMock.mockImplementation((url: string, init?: RequestInit) => {
    if (url.endsWith(second.url)) return new Promise((_resolve, reject) => {
      init!.signal!.addEventListener('abort', () => { siblingCancelled = true; reject(init!.signal!.reason) }, { once: true })
    })
    if (url.endsWith(file.url)) return Promise.resolve(new Response('bad'))
    return initial(url)
  })
  await expect(saveCompleteAtlasOffline()).rejects.toThrow('checksum or size mismatch')
  expect(siblingCancelled).toBe(true)
  expect(stored.size).toBe(0)
})
