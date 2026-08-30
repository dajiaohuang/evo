import { afterEach, describe, expect, it, vi } from 'vitest'
import type { CatalogueHierarchyChildRecord, CatalogueHierarchyNodeRecord, CatalogueRecord, CatalogueSourceChecklist, CatalogueSpeciesOwnership, CatalogueTargetRecord, RuntimeMapManifest, RuntimeMapSnapshot } from './types'

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
  searchRecords = [],
  targets = [],
}: {
  nodes?: CatalogueHierarchyNodeRecord[]
  children?: CatalogueHierarchyChildRecord[]
  sources?: CatalogueSourceChecklist[]
  searchRecords?: CatalogueRecord[]
  targets?: CatalogueTargetRecord[]
}) {
  Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
  const { catalogueRoutePrefix } = await import('./staticDataClient')
  const payloads = new Map<string, ReturnType<typeof responseFor> | ReturnType<typeof textResponseFor>>()

  async function hierarchyLayer<T extends { id: string }>(
    layer: 'nodes' | 'children' | 'targets',
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
  const targetLayer = await hierarchyLayer('targets', targets, (record) => record.id)
  const searchGroups = new Map<string, CatalogueRecord[]>()
  for (const record of searchRecords) {
    const prefix = record.normalizedName.replaceAll(' ', '').slice(0, 2).padEnd(2, '_')
    searchGroups.set(prefix, [...(searchGroups.get(prefix) ?? []), record])
  }
  const searchRoutes: Record<string, string[]> = {}
  const searchFiles = []
  for (const [prefix, records] of searchGroups) {
    const url = `releases/dataset-col/catalogue/search/${prefix}.json`
    const file = {
      prefix,
      path: `search/${prefix}.json`,
      url,
      records: records.length,
      bytes: new TextEncoder().encode(JSON.stringify(records)).byteLength,
      sha256: await sha256(records),
      mediaType: 'application/json' as const,
    }
    searchRoutes[prefix] = [url]
    searchFiles.push(file)
    payloads.set(url, responseFor(records))
  }
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
    search: { minimumQueryLength: 3, routes: searchRoutes, files: searchFiles },
    acceptedTargets: targetLayer,
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
  it('selects the nearest layer frame with younger ties and rejects ages outside CAO2024', async () => {
    const manifest = {
      schemaVersion: 6,
      version: 'dense-test',
      source: { title: 'CAO2024', version: 'v2.4', doi: 'test', url: 'test', license: 'CC-BY-4.0', attribution: 'test', retrievedAt: '2026-08-29' },
      scientificLimitations: [],
      ageRangeMa: { youngest: 0, oldest: 1800 },
      selectionPolicy: { method: 'nearest', tieBreak: 'younger', outsideRange: 'unavailable' },
      layers: {
        coastlines: { role: 'modelled-coastline', cadenceBands: [], frames: [0, 5, 10].map((ageMa) => ({ ageMa, featureCount: 1, url: `ma-${ageMa}.json.gz` })) },
      },
      snapshots: [],
    } as unknown as RuntimeMapManifest
    const { resolvePaleogeographyFrame } = await import('./staticDataClient')

    expect(resolvePaleogeographyFrame(manifest, 2.5, 'coastlines')?.selectedAgeMa).toBe(0)
    expect(resolvePaleogeographyFrame(manifest, 7.6, 'coastlines')?.selectedAgeMa).toBe(10)
    expect(resolvePaleogeographyFrame(manifest, 1800.1, 'coastlines')).toBeNull()
    expect(resolvePaleogeographyFrame(manifest, -0.1, 'coastlines')).toBeNull()
  })

  it('loads a requested paleogeography layer independently and caches it', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const collection = { type: 'FeatureCollection' as const, features: [] }
    const file = { url: 'releases/maps/continental.json', sha256: await sha256(collection) }
    const snapshot: RuntimeMapSnapshot = {
      period: 'Cretaceous',
      status: 'available',
      description: 'fixture',
      descriptionZh: 'fixture',
      reconstructionAgeMa: 100,
      model: 'CAO2024',
      layers: { continentalPolygons: file },
    }
    const fetchMock = vi.fn(async () => responseFor(collection))
    vi.stubGlobal('fetch', fetchMock)
    const { loadPaleogeographyLayer } = await import('./staticDataClient')

    await expect(loadPaleogeographyLayer(snapshot, 'continentalPolygons')).resolves.toEqual(collection)
    await expect(loadPaleogeographyLayer(snapshot, 'continentalPolygons')).resolves.toEqual(collection)
    expect(fetchMock).toHaveBeenCalledTimes(1)
    await expect(loadPaleogeographyLayer(snapshot, 'continentOceanBoundaries')).rejects.toThrow('is not published')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('loads all observation shards in parallel, merges them, validates counts, and caches them', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const observation = (sourceFeatureId: string) => ({
      sourceFeatureId,
      sourceRevisionId: `${sourceFeatureId}-revision`,
      sourceFeatureType: 'UnclassifiedFeature',
      observationKind: 'geochemistry',
      name: null,
      plateId: 101,
      age: {
        rawFromMa: 20,
        rawToMa: 10,
        rawFromLexeme: '20',
        rawToLexeme: '10',
        averageMa: 15,
        averageLexeme: '15',
        modelIntersectionMa: [10, 20],
        reconstructionAgeMa: 15,
        reconstructionAgeMethod: 'model-intersection-midpoint',
      },
      sourcePositions: { samplePosition: [120, 30] },
      reconstructedPositions: { samplePosition: [118, 29] },
      reconstructionStatus: 'reconstructed',
      poleA95: null,
      poleA95Lexeme: null,
      sampleId: null,
      referenceId: null,
      sourceFlags: [],
      sourceAttributes: [['FROMAGE', 'double', '20']],
    })
    const shards = [
      { schemaVersion: 1, model: 'CAO2024', modelVersion: 'v2.4', datasetId: 'geochemistry', bucket: '0', records: [observation('feature-1')] },
      { schemaVersion: 1, model: 'CAO2024', modelVersion: 'v2.4', datasetId: 'geochemistry', bucket: '1', records: [observation('feature-2')] },
    ]
    const shardFiles = await Promise.all(shards.map(async (shard, index) => ({
      url: `releases/dataset-observations/maps/observations/geochemistry-${index}.json`,
      sha256: await sha256(shard),
      records: 1,
    })))
    const mapManifest = {
      schemaVersion: 7,
      version: 'dataset-observations',
      source: { title: 'CAO2024', version: 'v2.4', doi: 'test', url: 'test', license: 'CC-BY-4.0', attribution: 'test', retrievedAt: '2026-08-31' },
      scientificLimitations: [],
      observations: {
        ageFilter: 'inclusive source interval',
        coordinatePolicy: 'reconstructed only; no source-coordinate fallback',
        datasets: {
          geochemistry: {
            id: 'geochemistry',
            title: 'Geochemistry samples',
            titleZh: '地球化学样本',
            role: 'observation',
            sourceFile: 'point_data/geochemistry.gpmlz',
            records: 2,
            reconstructableRecords: 2,
            rawOnlyRecords: 0,
            files: shardFiles,
          },
        },
      },
      snapshots: [],
    } as unknown as RuntimeMapManifest
    const manifestFile = {
      url: 'releases/dataset-observations/maps/manifest.json',
      sha256: await sha256(mapManifest),
    }
    const current = {
      datasetVersion: 'dataset-observations',
      releaseBase: 'releases/dataset-observations/',
      maps: { manifest: manifestFile, availableSnapshots: 0 },
    }
    const payloads = new Map<string, ReturnType<typeof responseFor>>([
      [manifestFile.url, responseFor(mapManifest)],
      ...shardFiles.map((file, index) => [file.url, responseFor(shards[index])] as const),
    ])
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      const match = [...payloads].find(([path]) => url.endsWith(path))
      return match?.[1] ?? { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)
    const { loadCaoObservationDataset } = await import('./staticDataClient')

    const first = await loadCaoObservationDataset('geochemistry')
    const second = await loadCaoObservationDataset('geochemistry')
    expect(first.collection.bucket).toBe('merged')
    expect(first.collection.records.map((record) => record.sourceFeatureId)).toEqual(['feature-1', 'feature-2'])
    expect(second.collection.records).toHaveLength(2)
    for (const file of shardFiles) {
      expect(fetchMock.mock.calls.filter(([input]) => String(input).endsWith(file.url))).toHaveLength(1)
    }
  })

  it('routes Catalogue usage IDs with the same deterministic SHA-256 prefix as the generator', async () => {
    const { catalogueRoutePrefix } = await import('./staticDataClient')
    await expect(catalogueRoutePrefix('4CGXP')).resolves.toBe('24')
    await expect(catalogueRoutePrefix('6MB3T')).resolves.toBe('64')
  })

  it('falls back to an exact resolution target without adding it to the accepted-species hierarchy', async () => {
    const target: CatalogueTargetRecord = {
      id: '9CF4V',
      scientificName: 'Otoglyphis pubescens subsp. pubescens',
      authorship: null,
      rank: 'subspecies',
      status: 'accepted',
      parentId: '4B7DY',
      sourceDatasetId: '1141',
      classification: ['Plantae', 'Tracheophyta', 'Magnoliopsida', 'Asterales', null, 'Asteraceae', 'Asteroideae', 'Anthemideae', 'Glebionidinae', 'Otoglyphis'],
    }
    const provisionalTarget: CatalogueTargetRecord = {
      ...target,
      id: 'provisional-species',
      scientificName: 'Example provisionalis',
      rank: 'species',
      status: 'provisionally accepted',
      sourceDatasetId: 'source-provisional',
    }
    await installCatalogueFixture({ targets: [target, provisionalTarget] })
    const { loadCatalogueHierarchyNode, loadCatalogueLineage } = await import('./staticDataClient')

    await expect(loadCatalogueHierarchyNode(target.id)).resolves.toEqual({ ...target, projection: 'resolution-target' })
    await expect(loadCatalogueHierarchyNode(provisionalTarget.id)).resolves.toEqual({ ...provisionalTarget, projection: 'resolution-target' })
    await expect(loadCatalogueLineage(target.id)).rejects.toThrow(`node ${target.id} is missing from the pinned release`)
  })

  it('returns every exact-name usage when a homonym cluster exceeds the default result limit', async () => {
    const searchRecords: CatalogueRecord[] = Array.from({ length: 17 }, (_, index) => ({
      normalizedName: 'same species',
      id: `usage-${String(index).padStart(2, '0')}`,
      scientificName: 'Same species',
      authorship: `Author ${index}`,
      rank: 'species',
      status: 'accepted',
      acceptedId: null,
      parentId: `parent-${index}`,
      sourceDatasetId: `source-${index}`,
      classification: ['Biota', null, null, null, null, null, null],
    }))
    searchRecords.push({ ...searchRecords[0], id: 'usage-prefix', normalizedName: 'same species extended', scientificName: 'Same species extended' })
    await installCatalogueFixture({ searchRecords })
    const { searchCatalogue } = await import('./staticDataClient')

    const result = await searchCatalogue('Same species')
    expect(result.records).toHaveLength(17)
    expect(result.records.every((record) => record.normalizedName === 'same species')).toBe(true)
    expect(result.totalMatches).toBe(18)
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

  it('resolves exact release-scoped ancestors to one resource package by explicit priority', async () => {
    const ownership = {
      entries: [
        { id: 'broad', kind: 'catalogue-only', title: 'Broad', titleZh: '广义', acceptedSpeciesCount: 10, browseRootIds: ['root'] },
        { id: 'specific', kind: 'static-package', title: 'Specific', titleZh: '具体', acceptedSpeciesCount: 4, browseRootIds: ['order'] },
      ],
      routes: [
        { priority: 2, packageId: 'broad', kind: 'catalogue-only', ancestorIds: ['root'], browseRoots: [], matchedSpecies: 10 },
        { priority: 1, packageId: 'specific', kind: 'static-package', ancestorIds: ['order'], browseRoots: [], matchedSpecies: 4 },
      ],
    } as unknown as CatalogueSpeciesOwnership
    const { resolveCatalogueSpeciesOwner } = await import('./staticDataClient')

    expect(resolveCatalogueSpeciesOwner([{ id: 'root' }, { id: 'order' }, { id: 'species' }], ownership)?.entry.id).toBe('specific')
    expect(resolveCatalogueSpeciesOwner([{ id: 'root' }, { id: 'species' }], ownership)?.entry.id).toBe('broad')
    expect(resolveCatalogueSpeciesOwner([{ id: 'unknown' }], ownership)).toBeNull()
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
