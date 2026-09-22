import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const root = {
  id: 'CRLT8', parentId: null, scientificName: 'Archaea', authorship: null,
  rank: 'domain', status: 'accepted', sourceDatasetId: '1001', childCount: 1,
}

const capability = {
  schemaVersion: 1, apiVersion: 'v1', protocolVersion: 'v1', datasetVersion: 'dataset-current', appVersion: 'test',
  profiles: { full: { available: true, offline: true, scope: 'complete current data release' } }, features: ['catalogue-hierarchy'],
  treeIndex: {
    representation: 'packed-adjacency', releaseAlias: 'COL26.8', nodeCount: 2_429_092, rootCount: 1,
    paging: 'offset-cursor', children: 'direct-children', windowed: true,
    recordEndpoint: '/v1/catalogue/taxa/{id}', childrenEndpoint: '/v1/catalogue/taxa/{id}/children',
    pageSize: { default: 100, max: 500 },
    recordFields: ['id', 'parentId', 'scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId', 'childCount'],
  },
  treeRoots: [root],
}

function response(value: unknown) {
  return { ok: true, status: 200, json: async () => value }
}

describe('backend packed-adjacency client', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.stubEnv('VITE_EVO_API_BASE_URL', 'http://backend.test')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('loads the current tree contract and keeps children paginated', async () => {
    const child = { ...root, id: 'child', parentId: root.id, scientificName: 'Child', rank: 'species', childCount: 0 }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/v1/capabilities')) return response(capability)
      if (url.includes('/children')) return response({ ...capability, parentId: root.id, queryStatus: 'catalogue-direct-children', records: [child], total: 2, limit: 1, nextCursor: 'next' })
      throw new Error(`unexpected request ${url}`)
    })
    vi.stubGlobal('fetch', fetchMock)
    const { loadBackendCatalogueChildren, loadBackendCatalogueRoots } = await import('./backendClient')

    await expect(loadBackendCatalogueRoots()).resolves.toMatchObject({ capabilities: { datasetVersion: 'dataset-current' }, roots: [root] })
    await expect(loadBackendCatalogueChildren(root.id, { limit: 1 })).resolves.toMatchObject({ records: [child], nextCursor: 'next' })
    await loadBackendCatalogueChildren(root.id, { limit: 1 })
    expect(fetchMock.mock.calls.filter(([input]) => String(input).includes('/children'))).toHaveLength(1)
  })

  it('rejects a response from a mixed dataset instead of falling back to static data', async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/v1/capabilities')) return response(capability)
      return response({ ...capability, datasetVersion: 'dataset-old', entityId: root.id, record: root, releaseAlias: 'COL26.8' })
    })
    vi.stubGlobal('fetch', fetchMock)
    const { loadBackendCatalogueTaxon } = await import('./backendClient')

    await expect(loadBackendCatalogueTaxon(root.id)).rejects.toThrow('mixed dataset versions')
  })

  it('retries capabilities after a transient failure', async () => {
    const fetchMock = vi.fn().mockRejectedValueOnce(new Error('offline')).mockResolvedValue(response(capability))
    vi.stubGlobal('fetch', fetchMock)
    const { loadBackendCapabilities } = await import('./backendClient')
    await expect(loadBackendCapabilities()).rejects.toThrow('offline')
    await expect(loadBackendCapabilities()).resolves.toMatchObject({ datasetVersion: 'dataset-current' })
  })

  it('keeps a shared request alive for another subscriber when the first cancels', async () => {
    let finish!: (value: ReturnType<typeof response>) => void
    const fetchMock = vi.fn((input: RequestInfo | URL, init?: RequestInit) => {
      if (String(input).endsWith('/v1/capabilities')) return Promise.resolve(response(capability))
      return new Promise<ReturnType<typeof response>>((resolve, reject) => {
        finish = resolve
        init?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true })
      })
    })
    vi.stubGlobal('fetch', fetchMock)
    const { loadBackendCatalogueTaxon } = await import('./backendClient')
    const first = new AbortController()
    const second = new AbortController()
    const cancelled = loadBackendCatalogueTaxon(root.id, first.signal)
    const surviving = loadBackendCatalogueTaxon(root.id, second.signal)
    first.abort()
    await expect(cancelled).rejects.toMatchObject({ name: 'AbortError' })
    finish(response({ ...capability, entityId: root.id, record: root }))
    await expect(surviving).resolves.toEqual(root)
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('does not refill a cleared cache with a late response from the previous release', async () => {
    let finish!: (value: ReturnType<typeof response>) => void
    const fetchMock = vi.fn((input: RequestInfo | URL) => {
      if (String(input).endsWith('/v1/capabilities')) return Promise.resolve(response(capability))
      return new Promise<ReturnType<typeof response>>(resolve => { finish = resolve })
    })
    vi.stubGlobal('fetch', fetchMock)
    const { clearBackendMemoryCache, loadBackendCatalogueTaxon } = await import('./backendClient')
    const old = loadBackendCatalogueTaxon(root.id)
    clearBackendMemoryCache()
    finish(response({ ...capability, entityId: root.id, record: root }))
    await expect(old).rejects.toMatchObject({ name: 'AbortError' })
    fetchMock.mockResolvedValue(response({ ...capability, entityId: root.id, record: { ...root, scientificName: 'Current' } }))
    await expect(loadBackendCatalogueTaxon(root.id)).resolves.toMatchObject({ scientificName: 'Current' })
  })

  it('does not serve a cached value to a caller whose signal is already aborted', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => response({ ...capability, entityId: root.id, record: root })))
    const { loadBackendCatalogueTaxon } = await import('./backendClient')
    await loadBackendCatalogueTaxon(root.id)
    const controller = new AbortController()
    controller.abort()
    await expect(loadBackendCatalogueTaxon(root.id, controller.signal)).rejects.toMatchObject({ name: 'AbortError' })
  })
})
