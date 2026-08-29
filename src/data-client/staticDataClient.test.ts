import { afterEach, describe, expect, it, vi } from 'vitest'

function responseFor(value: unknown) {
  const bytes = new TextEncoder().encode(JSON.stringify(value))
  return {
    ok: true,
    status: 200,
    json: async () => value,
    arrayBuffer: async () => Uint8Array.from(bytes).buffer,
  }
}

async function sha256(value: unknown): Promise<string> {
  const bytes = new TextEncoder().encode(JSON.stringify(value))
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('static runtime release coherence', () => {
  it('routes Catalogue usage IDs with the same deterministic SHA-256 prefix as the generator', async () => {
    const { catalogueRoutePrefix } = await import('./staticDataClient')
    await expect(catalogueRoutePrefix('4CGXP')).resolves.toBe('24')
    await expect(catalogueRoutePrefix('6MB3T')).resolves.toBe('64')
  })

  it('uses the current release manifest, evicts a checksum mismatch, and refetches once', async () => {
    const packageManifest = {
      schemaVersion: 5,
      packageId: 'demo',
      version: 'dataset-b',
      title: 'Demo',
      titleZh: '演示',
      platformMaturity: 'published',
      scientificMaturity: 'generated-scaffold',
      automatedReviewStatus: 'passed',
      reviewStatus: 'not-reviewed',
      queryCoverage: {
        completeness: 'bounded',
        upstreamReportedTotal: null,
        rowsFetched: 0,
        rowsAccepted: 0,
        rowsRejected: 0,
        rowsOutsidePackage: 0,
        pagesFetched: 0,
      },
      entityCount: 0,
      profileCount: 0,
      claimCount: 0,
      occurrenceCount: 0,
      metrics: {
        canonicalRawBytes: 0,
        runtimeKnowledgeCompressedBytes: 0,
        numberOfShards: 0,
        largestShardBytes: 0,
        initialLoadImpactBytes: 0,
        packageLoadTime: 'client-measured',
        offlineCacheSizeBytes: 0,
      },
      files: {},
      occurrences: [],
    }
    const manifestFile = {
      url: 'releases/dataset-b/packages/demo/manifest.json',
      sha256: await sha256(packageManifest),
    }
    const current = {
      schemaVersion: 5,
      datasetVersion: 'dataset-b',
      appVersion: '0.12.0',
      publication: 'test',
      releaseBase: 'releases/dataset-b/',
      core: {},
      packages: { count: 1, registry: manifestFile, manifestTemplate: 'releases/dataset-b/packages/{packageId}/manifest.json', manifests: { demo: manifestFile } },
      occurrences: { manifest: manifestFile, totalRecords: 0, unresolvedPackageAssignmentCount: 0 },
      maps: { manifest: manifestFile, availableSnapshots: 0 },
      downloads: { template: 'releases/dataset-b/downloads/{packageId}-dataset-b.zip' },
      budgets: { coreCompressedBytes: 0, coreLimitBytes: 0, shardLimitBytes: 0, pagesLimitBytes: 0 },
      evidenceBoundary: {},
    }
    const cacheEntryDelete = vi.fn(async () => true)
    const cacheStorageDelete = vi.fn(async () => true)
    Object.defineProperty(globalThis, 'caches', {
      configurable: true,
      value: {
        keys: vi.fn(async () => ['evo-runtime-data-dataset-a', 'unrelated-cache']),
        open: vi.fn(async () => ({ delete: cacheEntryDelete })),
        delete: cacheStorageDelete,
      },
    })
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const fetchMock = vi.fn(async (input: RequestInfo | URL, _init?: RequestInit) => {
      void _init
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(manifestFile.url) && fetchMock.mock.calls.filter(([candidate]) => String(candidate).endsWith(manifestFile.url)).length === 1) {
        return responseFor({ ...packageManifest, version: 'dataset-a' })
      }
      return responseFor(packageManifest)
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadPackageManifest } = await import('./staticDataClient')
    const manifest = await loadPackageManifest('demo')

    expect(manifest.version).toBe('dataset-b')
    expect(fetchMock.mock.calls.filter(([input]) => String(input).endsWith(manifestFile.url))).toHaveLength(2)
    expect(fetchMock.mock.calls.at(-1)?.[1]).toEqual({ cache: 'reload' })
    expect(cacheEntryDelete).toHaveBeenCalledWith(expect.stringContaining(manifestFile.url))

    const { clearOfflinePackages } = await import('./offlinePackages')
    await clearOfflinePackages()
    expect(cacheStorageDelete).toHaveBeenCalledWith('evo-runtime-data-dataset-a')
    expect(cacheStorageDelete).not.toHaveBeenCalledWith('unrelated-cache')
  })
})
