import { afterEach, describe, expect, it, vi } from 'vitest'
import type { CatalogueHierarchyChildRecord, CatalogueHierarchyNodeRecord, CatalogueSourceChecklist } from './types'

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

function textResponseFor(value: string) {
  const bytes = new TextEncoder().encode(value)
  return {
    ok: true,
    status: 200,
    arrayBuffer: async () => Uint8Array.from(bytes).buffer,
  }
}

async function sha256Text(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function installCatalogueFixture({
  nodes = [],
  children = [],
  sources = [],
}: {
  nodes?: CatalogueHierarchyNodeRecord[]
  children?: CatalogueHierarchyChildRecord[]
  sources?: CatalogueSourceChecklist[]
}) {
  Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
  const { catalogueRoutePrefix } = await import('./staticDataClient')
  const payloads = new Map<string, ReturnType<typeof responseFor> | ReturnType<typeof textResponseFor>>()

  async function hierarchyLayer<T extends { id: string }>(
    layer: 'nodes' | 'children',
    records: T[],
    routeId: (record: T) => string,
  ) {
    const groups = new Map<string, T[]>()
    for (const record of records) {
      const prefix = await catalogueRoutePrefix(routeId(record))
      groups.set(prefix, [...(groups.get(prefix) ?? []), record])
    }
    const routes: Record<string, string[]> = {}
    const files = []
    for (const [prefix, groupedRecords] of groups) {
      const url = `releases/dataset-col/catalogue/hierarchy/${layer}-${prefix}.jsonl`
      const body = `${groupedRecords.map((record) => JSON.stringify(record)).join('\n')}\n`
      const file = {
        prefix,
        path: `hierarchy/${layer}-${prefix}.jsonl`,
        url,
        records: groupedRecords.length,
        bytes: new TextEncoder().encode(body).byteLength,
        sha256: await sha256Text(body),
        mediaType: 'application/x-ndjson' as const,
      }
      routes[prefix] = [url]
      files.push(file)
      payloads.set(url, textResponseFor(body))
    }
    return { routes, files, totalCompressedBytes: 0, totalSourceBytes: 0, largestShardBytes: 0 }
  }

  const nodeLayer = await hierarchyLayer('nodes', nodes, (record) => record.id)
  const childLayer = await hierarchyLayer('children', children, (record) => (record as CatalogueHierarchyChildRecord).parentId)
  const sourcesUrl = 'releases/dataset-col/catalogue/sources.json'
  const sourceFile = {
    count: sources.length,
    url: sourcesUrl,
    bytes: new TextEncoder().encode(JSON.stringify(sources)).byteLength,
    sha256: await sha256(sources),
    mediaType: 'application/json' as const,
  }
  payloads.set(sourcesUrl, responseFor(sources))
  const acceptedSpecies = nodes.filter((node) => node.rank === 'species' && node.status === 'accepted').length
  const catalogueManifest = {
    releaseAlias: 'TEST-COL',
    counts: { acceptedSpecies },
    sourceChecklists: sourceFile,
    hierarchy: { nodes: nodeLayer, children: childLayer },
  }
  const manifestFile = { url: 'releases/dataset-col/catalogue/manifest.json' }
  payloads.set(manifestFile.url, responseFor(catalogueManifest))
  const current = {
    datasetVersion: 'dataset-col',
    releaseBase: 'releases/dataset-col/',
    catalogue: { manifest: manifestFile, releaseAlias: 'TEST-COL', acceptedSpecies },
  }
  const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input)
    if (url.endsWith('/data/current.json')) return responseFor(current)
    const match = [...payloads].find(([path]) => url.endsWith(path))
    if (!match) return { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    return match[1]
  })
  vi.stubGlobal('fetch', fetchMock)
  return { fetchMock, sourcesUrl }
}

afterEach(async () => {
  const { clearRuntimeMemoryCache } = await import('./staticDataClient')
  clearRuntimeMemoryCache()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
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

  it('loads and caches the pinned source-checklist ledger through the verified runtime file path', async () => {
    const sources: CatalogueSourceChecklist[] = [{
      datasetId: '1005',
      title: 'Catalogue of Craneflies of the World',
      shortName: 'CCW',
      version: 'Apr 2025',
      publicationDate: '2025-04-10',
      doi: '10.48580/d37p',
      citation: 'Example source citation',
      licenseLabel: 'Public Domain (CC0 1.0)',
      licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/legalcode',
      informationUrl: 'https://ccw.naturalis.nl/',
    }]
    const { fetchMock, sourcesUrl } = await installCatalogueFixture({ sources })
    const { loadCatalogueSourceChecklists } = await import('./staticDataClient')

    await expect(loadCatalogueSourceChecklists()).resolves.toEqual(sources)
    await expect(loadCatalogueSourceChecklists()).resolves.toEqual(sources)
    expect(fetchMock.mock.calls.filter(([input]) => String(input).endsWith(sourcesUrl))).toHaveLength(1)
  })

  it('loads only the requested direct children from a shared parent-hash shard and caches it', async () => {
    const { catalogueRoutePrefix, loadCatalogueChildren } = await import('./staticDataClient')
    const parentId = 'parent-a'
    const prefix = await catalogueRoutePrefix(parentId)
    let collidingParentId = 'parent-b-0'
    for (let index = 1; await catalogueRoutePrefix(collidingParentId) !== prefix; index += 1) collidingParentId = `parent-b-${index}`
    const child = (parent: string, id: string): CatalogueHierarchyChildRecord => ({
      parentId: parent,
      id,
      scientificName: id,
      authorship: null,
      rank: 'species',
      status: 'accepted',
      sourceDatasetId: '1005',
      childCount: 0,
    })
    const { fetchMock } = await installCatalogueFixture({
      children: [child(parentId, 'child-1'), child(collidingParentId, 'other-child'), child(parentId, 'child-2')],
    })

    await expect(loadCatalogueChildren(parentId)).resolves.toMatchObject([{ id: 'child-1' }, { id: 'child-2' }])
    await loadCatalogueChildren(parentId)
    expect(fetchMock.mock.calls.filter(([input]) => String(input).includes(`children-${prefix}.jsonl`))).toHaveLength(1)
  })

  it('loads a complete Catalogue lineage in root-to-node order', async () => {
    const node = (id: string, parentId: string | null, rank: string): CatalogueHierarchyNodeRecord => ({
      id,
      parentId,
      scientificName: id,
      authorship: null,
      rank,
      status: 'accepted',
      sourceDatasetId: '1005',
      childCount: parentId === null ? 1 : 0,
    })
    await installCatalogueFixture({ nodes: [node('leaf', 'middle', 'species'), node('root', null, 'domain'), node('middle', 'root', 'genus')] })
    const { loadCatalogueLineage } = await import('./staticDataClient')

    await expect(loadCatalogueLineage('leaf')).resolves.toMatchObject([
      { id: 'root' },
      { id: 'middle' },
      { id: 'leaf' },
    ])
  })

  it('reports missing parents, cycles, and depth exhaustion distinctly', async () => {
    const node = (id: string, parentId: string | null): CatalogueHierarchyNodeRecord => ({
      id,
      parentId,
      scientificName: id,
      authorship: null,
      rank: 'genus',
      status: 'accepted',
      sourceDatasetId: null,
      childCount: 1,
    })
    const { loadCatalogueLineage, clearRuntimeMemoryCache } = await import('./staticDataClient')

    await installCatalogueFixture({ nodes: [node('orphan', 'missing-parent')] })
    await expect(loadCatalogueLineage('orphan')).rejects.toThrow('parent missing-parent referenced by orphan is missing')

    clearRuntimeMemoryCache()
    await installCatalogueFixture({ nodes: [node('cycle-a', 'cycle-b'), node('cycle-b', 'cycle-a')] })
    await expect(loadCatalogueLineage('cycle-a')).rejects.toThrow('cycle detected at cycle-a')

    clearRuntimeMemoryCache()
    await installCatalogueFixture({ nodes: [node('depth-leaf', 'depth-middle'), node('depth-middle', 'depth-root'), node('depth-root', null)] })
    await expect(loadCatalogueLineage('depth-leaf', 2)).rejects.toThrow('exceeds maximum depth 2')
    await expect(loadCatalogueLineage('depth-leaf', 0)).rejects.toThrow('maxDepth must be a positive integer')
  })
})
