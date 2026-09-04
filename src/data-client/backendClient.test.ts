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
})
