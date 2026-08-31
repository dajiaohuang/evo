import { afterEach, describe, expect, it, vi } from 'vitest'
import type { CatalogueHierarchyChildRecord, CatalogueHierarchyNodeRecord, CatalogueLpsnIdentifierRecord, CatalogueNomenclaturalRecord, CatalogueRecord, CatalogueResourcePackManifest, CatalogueSourceChecklist, CatalogueSpeciesOwnership, CatalogueTargetRecord, RuntimeMapManifest, RuntimeMapSnapshot, RuntimePaleotopographyCollection } from './types'

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

  it('loads checksummed package research examples and verifies the manifest counts', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const researchExamples = {
      schemaVersion: 1 as const,
      packageId: 'demo',
      examples: [{
        id: 'demo-tree-preset',
        type: 'explorer-preset' as const,
        title: { en: 'Demo evidence', zh: '演示证据' },
        description: { en: 'A bounded entry point.', zh: '一个边界明确的入口。' },
        route: '#/explore?taxon=demo&view=tree',
        entityIds: ['demo'],
        claimIds: ['claim:demo'],
        evidenceStatus: 'available-with-limitations' as const,
        limitations: ['This is not a phylogeny or complete history.'],
      }],
    }
    const researchFile = { url: 'releases/dataset-research/packages/demo/research-examples.json', sha256: await sha256(researchExamples) }
    const packageManifest = {
      packageId: 'demo',
      version: 'dataset-research',
      researchExampleCount: 1,
      researchClaimLinkCount: 1,
      files: { researchExamples: researchFile },
    }
    const manifestFile = { url: 'releases/dataset-research/packages/demo/manifest.json', sha256: await sha256(packageManifest) }
    const current = {
      datasetVersion: 'dataset-research',
      releaseBase: 'releases/dataset-research/',
      packages: { manifests: { demo: manifestFile } },
    }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(manifestFile.url)) return responseFor(packageManifest)
      if (url.endsWith(researchFile.url)) return responseFor(researchExamples)
      return { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadPackageResearchExamples } = await import('./staticDataClient')
    await expect(loadPackageResearchExamples('demo')).resolves.toEqual(researchExamples)
    await expect(loadPackageResearchExamples('demo')).resolves.toEqual(researchExamples)
    expect(fetchMock.mock.calls.filter(([input]) => String(input).endsWith(researchFile.url))).toHaveLength(1)
  })

  it('loads a checksummed rich-package nomenclature collection and verifies status counts', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const sidecar = {
      schemaVersion: 1 as const,
      sidecarType: 'date-pinned-exact-nomenclatural-crosswalk' as const,
      packageId: 'echinoderms',
      counts: { total: 3, accepted: 1, acceptedNameRedirect: 1, ambiguous: 1, unmatched: 0, withheld: 0 },
      records: { accepted: [{}], acceptedNameRedirect: [{}], ambiguous: [{}], unmatched: [], withheld: [] },
    }
    const collectionFile = { url: 'releases/dataset-worms/packages/echinoderms/nomenclature/worms.json', sha256: await sha256(sidecar) }
    const collection = {
      id: 'worms-aphiaid-crosswalk', provider: 'WoRMS', recordType: 'external-name-identifier-crosswalk',
      counts: sidecar.counts, file: collectionFile,
    }
    const packageManifest = {
      packageId: 'echinoderms', version: 'dataset-worms', files: {}, occurrences: [], nomenclatureCollections: [collection],
    }
    const manifestFile = { url: 'releases/dataset-worms/packages/echinoderms/manifest.json', sha256: await sha256(packageManifest) }
    const current = {
      datasetVersion: 'dataset-worms', releaseBase: 'releases/dataset-worms/', packages: { manifests: { echinoderms: manifestFile } },
    }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(manifestFile.url)) return responseFor(packageManifest)
      if (url.endsWith(collectionFile.url)) return responseFor(sidecar)
      return { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadPackageNomenclatureCollection } = await import('./staticDataClient')
    await expect(loadPackageNomenclatureCollection('echinoderms', 'worms-aphiaid-crosswalk'))
      .resolves.toEqual({ collection, sidecar })
    expect(fetchMock.mock.calls.filter(([input]) => String(input).endsWith(collectionFile.url))).toHaveLength(1)
  })

  it('uses WFO COL ID ranges to fetch exactly one rich-package payload shard', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const records = [
      { colId: 'A001', packageId: 'angiospermae', status: 'accepted', wfoId: 'wfo-1' },
      { colId: 'M001', packageId: 'angiospermae', status: 'unmatched' },
      { colId: 'Z001', packageId: 'angiospermae', status: 'withheld', reason: 'fixture' },
    ] as const
    const shardFiles = await Promise.all(records.map(async (record, index) => {
      const body = `${JSON.stringify(record)}\n`
      const digest = await sha256Text(body)
      return {
        body,
        file: {
          path: `data/packages/plantae/angiospermae/nomenclature/wfo-${index}.jsonl.gz`,
          url: `releases/dataset-wfo/packages/angiospermae/nomenclature/wfo-${index}.jsonl`,
          records: 1,
          bytes: new TextEncoder().encode(body).byteLength,
          sourceBytes: new TextEncoder().encode(body).byteLength,
          sha256: digest,
          sourceSha256: digest,
          mediaType: 'application/x-ndjson' as const,
          minColId: record.colId,
          maxColId: record.colId,
        },
      }
    }))
    const collection = {
      schemaVersion: 1,
      id: 'wfo-plant-list-crosswalk',
      recordType: 'release-pinned-exact-plant-name-crosswalk',
      provider: 'World Flora Online Plant List',
      packageId: 'angiospermae',
      source: { wfoAcceptedSpecies: 382438, upstreamOnly: 60751 },
      counts: { total: 3, accepted: 1, redirect: 0, ambiguous: 0, unmatched: 1, withheld: 1 },
      files: shardFiles.map(({ file }) => file),
    }
    const packageManifest = { packageId: 'angiospermae', version: 'dataset-wfo', files: {}, occurrences: [], nomenclatureCollections: [collection] }
    const manifestFile = { url: 'releases/dataset-wfo/packages/angiospermae/manifest.json', sha256: await sha256(packageManifest) }
    const current = { datasetVersion: 'dataset-wfo', releaseBase: 'releases/dataset-wfo/', packages: { manifests: { angiospermae: manifestFile } } }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(manifestFile.url)) return responseFor(packageManifest)
      const shard = shardFiles.find(({ file }) => url.endsWith(file.url))
      return shard ? textResponseFor(shard.body) : { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadPackageWfoPlantRecord } = await import('./staticDataClient')
    await expect(loadPackageWfoPlantRecord('angiospermae', 'M001')).resolves.toMatchObject({ record: records[1] })
    expect(fetchMock.mock.calls.filter(([input]) => String(input).includes('/nomenclature/wfo-'))).toHaveLength(1)
    expect(fetchMock.mock.calls.some(([input]) => String(input).endsWith(shardFiles[0].file.url))).toBe(false)
    expect(fetchMock.mock.calls.some(([input]) => String(input).endsWith(shardFiles[2].file.url))).toBe(false)
  })

  it('loads one AviList range shard in native-full and refuses unavailable Web row data', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const rows = [
      { colId: 'A001', colSourceDatasetId: '2144', colScientificName: 'Avis alpha', status: 'accepted' },
      { colId: 'M001', colSourceDatasetId: '2144', colScientificName: 'Avis media', status: 'unmatched' },
      { colId: 'Z001', colSourceDatasetId: '1008', colScientificName: 'Crocodylus zeta', status: 'non-applicable' },
    ] as const
    const shardFiles = await Promise.all(rows.map(async (row, index) => {
      const body = JSON.stringify([row])
      const digest = await sha256Text(body)
      return {
        body,
        file: {
          path: `nomenclature/avilist-col-${index}.json.gz`,
          url: `releases/dataset-avilist/packages/crocodylomorphs-birds/nomenclature/avilist-col-${index}.json`,
          records: 1,
          bytes: new TextEncoder().encode(body).byteLength,
          sourceBytes: new TextEncoder().encode(body).byteLength,
          sha256: digest,
          sourceSha256: digest,
          mediaType: 'application/json' as const,
          minColId: row.colId,
          maxColId: row.colId,
        },
      }
    }))
    const collection = {
      schemaVersion: 1,
      id: 'avilist-v2025b-avibase-concepts',
      recordType: 'release-pinned-exact-avian-authority-crosswalk',
      provider: 'AviList Core Team',
      packageId: 'crocodylomorphs-birds',
      source: {}, scope: {}, limitations: [], totalCompressedBytes: 0, totalSourceBytes: 0, descriptorSha256: 'fixture',
      counts: { packageAcceptedSpecies: 3, colAcceptedAves: 2, colAcceptedCrocodylia: 1, avilistAcceptedSpecies: 2, accepted: 1, officialCurrentNameRedirect: 0, ambiguous: 0, unmatched: 1, nonApplicable: 1, uniqueMatchedAviListSpecies: 1, manyToOneColLinks: 0, upstreamOnly: 0 },
      files: shardFiles.map(({ file }) => file), upstreamOnlyFiles: [],
      delivery: { profile: 'native-full', completeRows: true, publishedFileCount: 3, canonicalFileCount: 3 },
    }
    const packageManifest = { packageId: 'crocodylomorphs-birds', version: 'dataset-avilist', files: {}, occurrences: [], nomenclatureCollections: [collection] }
    const manifestFile = { url: 'releases/dataset-avilist/packages/crocodylomorphs-birds/manifest.json', sha256: await sha256(packageManifest) }
    const current = { datasetVersion: 'dataset-avilist', releaseBase: 'releases/dataset-avilist/', packages: { manifests: { 'crocodylomorphs-birds': manifestFile } } }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(manifestFile.url)) return responseFor(packageManifest)
      const shard = shardFiles.find(({ file }) => url.endsWith(file.url))
      return shard ? textResponseFor(shard.body) : { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadPackageAviListBirdRecord } = await import('./staticDataClient')
    await expect(loadPackageAviListBirdRecord('M001')).resolves.toMatchObject({ record: rows[1] })
    expect(fetchMock.mock.calls.filter(([input]) => String(input).includes('/nomenclature/avilist-col-'))).toHaveLength(1)

    vi.resetModules()
    const webCollection = { ...collection, files: [], delivery: { profile: 'web-light', completeRows: false, publishedFileCount: 0, canonicalFileCount: 3 } }
    const webManifest = { ...packageManifest, nomenclatureCollections: [webCollection] }
    const webManifestFile = { ...manifestFile, sha256: await sha256(webManifest) }
    vi.stubGlobal('fetch', vi.fn(async (input: RequestInfo | URL) => String(input).endsWith('/data/current.json')
      ? responseFor({ ...current, packages: { manifests: { 'crocodylomorphs-birds': webManifestFile } } })
      : responseFor(webManifest)))
    const webClient = await import('./staticDataClient')
    await expect(webClient.loadPackageAviListBirdRecord('M001')).rejects.toThrow('full Android/iOS data profile')
  })

  it('loads one ITIS JSONL range shard in native-full and keeps Web summary-only', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const rows = [
      { status: 'accepted', colUsageId: 'A001', colScientificName: 'Amphibia alpha', currentName: { tsn: '1', scientificName: 'Amphibia alpha', usage: 'valid' } },
      { status: 'ambiguous', colUsageId: 'M001', colScientificName: 'Amphibia media', candidates: [{ tsn: '2', scientificName: 'Amphibia media' }] },
      { status: 'accepted', colUsageId: 'Z001', colScientificName: 'Amphibia zeta', currentName: { tsn: '3', scientificName: 'Amphibia zeta', usage: 'valid' } },
    ] as const
    const shardFiles = await Promise.all(rows.map(async (row, index) => {
      const body = `${JSON.stringify(row)}\n`
      const digest = await sha256Text(body)
      return {
        body,
        file: {
          path: `data/packages/vertebrata/amphibia/nomenclature/itis-tsn-sidecar-${index}.jsonl.gz`,
          url: `releases/dataset-itis/packages/amphibia/nomenclature/itis-tsn-sidecar-${index}.jsonl`,
          records: 1,
          bytes: new TextEncoder().encode(body).byteLength,
          sourceBytes: new TextEncoder().encode(body).byteLength,
          sha256: digest,
          sourceSha256: digest,
          mediaType: 'application/x-ndjson' as const,
          minColId: row.colUsageId,
          maxColId: row.colUsageId,
        },
      }
    }))
    const collection = {
      schemaVersion: 1,
      id: 'itis-2026-08-26-tsn-crosswalk',
      recordType: 'release-pinned-exact-nomenclatural-crosswalk',
      provider: 'Integrated Taxonomic Information System',
      packageId: 'amphibia',
      source: {}, matching: {}, evidenceBoundary: { en: 'fixture', zh: 'fixture' }, limitations: [], descriptorSha256: 'fixture',
      counts: { total: 3, accepted: 2, synonymCurrentNameRedirect: 0, ambiguous: 1, unmatched: 0, itisCurrentSpecies: 3, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 },
      files: shardFiles.map(({ file }) => file), upstreamOnlyFiles: [], canonicalFileInventory: [],
      delivery: { profile: 'native-full', completeRows: true, publishedFileCount: 3, canonicalFileCount: 3 },
    }
    const packageManifest = { packageId: 'amphibia', version: 'dataset-itis', files: {}, occurrences: [], nomenclatureCollections: [collection] }
    const manifestFile = { url: 'releases/dataset-itis/packages/amphibia/manifest.json', sha256: await sha256(packageManifest) }
    const current = { datasetVersion: 'dataset-itis', releaseBase: 'releases/dataset-itis/', packages: { manifests: { amphibia: manifestFile } } }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(manifestFile.url)) return responseFor(packageManifest)
      const shard = shardFiles.find(({ file }) => url.endsWith(file.url))
      return shard ? textResponseFor(shard.body) : { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadPackageItisRecord } = await import('./staticDataClient')
    await expect(loadPackageItisRecord('amphibia', 'M001')).resolves.toMatchObject({ record: rows[1] })
    expect(fetchMock.mock.calls.filter(([input]) => String(input).includes('/nomenclature/itis-tsn-sidecar-'))).toHaveLength(1)

    vi.resetModules()
    const webCollection = { ...collection, files: [], delivery: { profile: 'web-light', completeRows: false, publishedFileCount: 0, canonicalFileCount: 3 } }
    const webManifest = { ...packageManifest, nomenclatureCollections: [webCollection] }
    const webManifestFile = { ...manifestFile, sha256: await sha256(webManifest) }
    vi.stubGlobal('fetch', vi.fn(async (input: RequestInfo | URL) => String(input).endsWith('/data/current.json')
      ? responseFor({ ...current, packages: { manifests: { amphibia: webManifestFile } } })
      : responseFor(webManifest)))
    const webClient = await import('./staticDataClient')
    await expect(webClient.loadPackageItisRecord('amphibia', 'M001')).rejects.toThrow('full Android/iOS data profile')
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

  it('loads a nomenclatural resource pack and its LPSN extension from separate checksum-verified NDJSON shards', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const records: CatalogueNomenclaturalRecord[] = [
      { id: 'species-1', parentId: 'genus-1', scientificName: 'Exemplum unum', authorship: 'Author', rank: 'species', status: 'accepted', sourceDatasetId: 'source-1' },
      { id: 'species-2', parentId: 'genus-1', scientificName: 'Exemplum duo', authorship: null, rank: 'species', status: 'accepted', sourceDatasetId: null },
    ]
    const body = `${records.map((record) => JSON.stringify(record)).join('\n')}\n`
    const bodySha256 = await sha256Text(body)
    const shard = { path: 'catalogue/resource-packs/archaea/species-001.jsonl.gz', url: 'releases/dataset-pack/catalogue/resource-packs/archaea/species-001.jsonl', records: 2, bytes: new TextEncoder().encode(body).byteLength, sourceBytes: new TextEncoder().encode(body).byteLength, sha256: bodySha256, sourceSha256: bodySha256, mediaType: 'application/x-ndjson' as const }
    const lpsnRecords: CatalogueLpsnIdentifierRecord[] = [
      { colId: 'species-1', lpsnId: '101', lpsnUrl: 'https://lpsn.dsmz.de/taxon/101', mappingBasis: 'checklistbank-source-record', status: 'resolved' },
      { colId: 'species-2', lpsnId: '102', lpsnUrl: 'https://lpsn.dsmz.de/taxon/102', mappingBasis: 'checklistbank-source-record', status: 'resolved' },
    ]
    const lpsnBody = `${lpsnRecords.map((record) => JSON.stringify(record)).join('\n')}\n`
    const lpsnSha256 = await sha256Text(lpsnBody)
    const lpsnFile = { path: 'archaea/lpsn-000.jsonl.gz', url: 'releases/dataset-pack/catalogue/resource-packs/archaea/lpsn-000.jsonl', records: 2, bytes: new TextEncoder().encode(lpsnBody).byteLength, sourceBytes: new TextEncoder().encode(lpsnBody).byteLength, sha256: lpsnSha256, sourceSha256: lpsnSha256, mediaType: 'application/x-ndjson' as const }
    const packManifest: CatalogueResourcePackManifest = {
      schemaVersion: 1,
      packageType: 'static-nomenclatural-resource-pack',
      packageId: 'archaea',
      version: 'dataset-pack',
      title: 'Demo',
      titleZh: '演示',
      source: { releaseAlias: 'TEST-COL', releaseDate: '2026-08-20', checklistBankDatasetKey: 1, strictPredicate: 'accepted species', sharedSourcesPath: 'sources.json.gz', sharedSourcesCount: 1, sharedSourcesSha256: 'source-ledger-sha' },
      scope: 'Fixture',
      scopeZh: '测试',
      disclaimer: 'Names only',
      disclaimerZh: '仅名称',
      browseRootIds: ['root-1'],
      acceptedSpeciesCount: 2,
      missingSourceDatasetId: 1,
      fields: ['id', 'parentId', 'scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'],
      files: [shard],
      extensions: [{
        id: 'lpsn-identifiers',
        recordType: 'external-name-identifier-crosswalk',
        provider: 'LPSN',
        source: {
          catalogueRelease: 'TEST-COL', catalogueReleaseDate: '2026-08-20', checklistBankDatasetKey: 1,
          sourceDatasetKey: 2015, sourceDatasetVersion: '2026-07-26', retrievedAt: '2026-08-31',
          endpointTemplate: 'https://example.test/{colId}', lpsnUrlTemplate: 'https://lpsn.dsmz.de/taxon/{lpsnId}',
          informationUrl: 'https://lpsn.dsmz.de/', license: 'CC-BY-SA-4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
          citation: 'Fixture citation', canonicalCrosswalkPath: 'data/sources/fixture.json', canonicalCrosswalkSha256: 'a'.repeat(64),
          requestIntegrity: { algorithm: 'sha256', responseHashBasis: 'Fixture bytes', requestCount: 2, requestLedgerSha256: 'b'.repeat(64) },
        },
        eligibility: 'sourceDatasetId=2015', counts: { eligible: 2, resolved: 2, withheld: 0 },
        fields: ['colId', 'lpsnId', 'lpsnUrl', 'mappingBasis', 'status'], files: [lpsnFile],
        totalCompressedBytes: lpsnFile.bytes, totalSourceBytes: lpsnFile.sourceBytes,
        limitations: ['Identifiers only.'],
      }],
      totalCompressedBytes: shard.bytes,
      totalSourceBytes: 0,
      evidenceBoundary: 'Nomenclature only',
      download: 'downloads/catalogue-demo-dataset-pack.zip',
    }
    const packManifestFile = { url: 'releases/dataset-pack/catalogue/resource-packs/archaea/manifest.json', acceptedSpeciesCount: 2, fileCount: 1, extensionCount: 1, extensionFileCount: 1, sha256: await sha256(packManifest) }
    const catalogueManifest = { releaseAlias: 'TEST-COL', counts: { acceptedSpecies: 2 }, resourcePacks: { manifests: { archaea: packManifestFile } } }
    const catalogueFile = { url: 'releases/dataset-pack/catalogue/manifest.json', sha256: await sha256(catalogueManifest) }
    const current = { datasetVersion: 'dataset-pack', releaseBase: 'releases/dataset-pack/', catalogue: { manifest: catalogueFile, releaseAlias: 'TEST-COL', acceptedSpecies: 2 } }
    const payloads = new Map<string, ReturnType<typeof responseFor> | ReturnType<typeof textResponseFor>>([
      [catalogueFile.url, responseFor(catalogueManifest)],
      [packManifestFile.url, responseFor(packManifest)],
      [shard.url, textResponseFor(body)],
      [lpsnFile.url, textResponseFor(lpsnBody)],
    ])
    vi.stubGlobal('fetch', vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      return [...payloads].find(([path]) => url.endsWith(path))?.[1] ?? { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    }))
    const { loadCatalogueLpsnIdentifier, loadCatalogueLpsnIdentifiers, loadCatalogueResourcePack } = await import('./staticDataClient')

    await expect(loadCatalogueResourcePack('archaea')).resolves.toEqual({ manifest: packManifest, records })
    await expect(loadCatalogueLpsnIdentifiers()).resolves.toEqual({ extension: packManifest.extensions?.[0], records: lpsnRecords })
    await expect(loadCatalogueLpsnIdentifier('species-2')).resolves.toEqual(lpsnRecords[1])
    await expect(loadCatalogueLpsnIdentifier('missing')).resolves.toBeNull()
  })

  it('loads exactly one COL-ID range shard for a Fungi authority detail lookup', async () => {
    Object.defineProperty(globalThis, 'Worker', { configurable: true, value: undefined })
    const records = [
      { colId: 'M001', sourceDatasetId: '2073', indexFungorumId: '12345', indexFungorumUrl: 'https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=12345', mappingBasis: 'exact-source-dataset-and-verbatim-label', status: 'accepted' },
    ] as const
    const bodies = ['', `${JSON.stringify(records[0])}\n`, '']
    const ranges = [['A001', 'L999'], ['M001', 'M001'], ['M002', 'Z999']] as const
    const publishedCounts = [78521, 1, 78522]
    const files = await Promise.all(ranges.map(async ([minColId, maxColId], index) => ({
      path: `fungi/index-fungorum-00${index}.jsonl.gz`,
      url: `releases/dataset-fungi/catalogue/resource-packs/fungi/index-fungorum-00${index}.jsonl`,
      records: publishedCounts[index],
      bytes: new TextEncoder().encode(bodies[index]).byteLength,
      sourceBytes: new TextEncoder().encode(bodies[index]).byteLength,
      sha256: await sha256Text(bodies[index]),
      sourceSha256: await sha256Text(bodies[index]),
      mediaType: 'application/x-ndjson' as const,
      minColId,
      maxColId,
    })))
    const extension = {
      id: 'index-fungorum-identifiers', recordType: 'external-name-identifier-crosswalk', provider: 'Species Fungorum / Index Fungorum',
      source: { sourceDatasets: [] },
      counts: { acceptedSpecies: 157044, eligible: 157044, accepted: 157044, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: 201 },
      sourceComposition: { '2073': 155841, '1148': 1203 },
      files,
      integration: { lookup: { strategy: 'lexicographic-colId-range-v1' } },
    }
    const packManifest = {
      schemaVersion: 1, packageType: 'static-nomenclatural-resource-pack', packageId: 'fungi', version: 'dataset-fungi',
      source: { releaseAlias: 'COL26.8' }, acceptedSpeciesCount: 157044, extensions: [extension],
    }
    const packFile = { url: 'releases/dataset-fungi/catalogue/resource-packs/fungi/manifest.json', acceptedSpeciesCount: 157044, sha256: await sha256(packManifest) }
    const catalogueManifest = { releaseAlias: 'COL26.8', counts: { acceptedSpecies: 2183133 }, resourcePacks: { manifests: { fungi: packFile } } }
    const catalogueFile = { url: 'releases/dataset-fungi/catalogue/manifest.json', sha256: await sha256(catalogueManifest) }
    const current = { datasetVersion: 'dataset-fungi', releaseBase: 'releases/dataset-fungi/', catalogue: { manifest: catalogueFile, releaseAlias: 'COL26.8', acceptedSpecies: 2183133 } }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return responseFor(current)
      if (url.endsWith(catalogueFile.url)) return responseFor(catalogueManifest)
      if (url.endsWith(packFile.url)) return responseFor(packManifest)
      const index = files.findIndex((file) => url.endsWith(file.url))
      return index >= 0 ? textResponseFor(bodies[index]) : { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }
    })
    vi.stubGlobal('fetch', fetchMock)

    const { loadCatalogueIndexFungorumIdentifier } = await import('./staticDataClient')
    await expect(loadCatalogueIndexFungorumIdentifier('M001')).resolves.toMatchObject({ record: records[0] })
    expect(fetchMock.mock.calls.filter(([input]) => String(input).includes('index-fungorum-'))).toHaveLength(1)
    expect(fetchMock.mock.calls.some(([input]) => String(input).endsWith(files[0].url))).toBe(false)
    expect(fetchMock.mock.calls.some(([input]) => String(input).endsWith(files[2].url))).toBe(false)
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

  it('selects exactly one nearest nominal PaleoDEM frame without extrapolation', async () => {
    const collection = {
      selection: { ageRangeMa: { youngest: 0, oldest: 540 } },
      frames: [0, 5, 10, 540].map((archiveNominalAgeMa) => ({ archiveNominalAgeMa })),
    } as unknown as RuntimePaleotopographyCollection
    const { resolvePaleotopographyFrame } = await import('./staticDataClient')

    expect(resolvePaleotopographyFrame(collection, 0)?.archiveNominalAgeMa).toBe(0)
    expect(resolvePaleotopographyFrame(collection, 2.5)?.archiveNominalAgeMa).toBe(0)
    expect(resolvePaleotopographyFrame(collection, 2.5001)?.archiveNominalAgeMa).toBe(5)
    expect(resolvePaleotopographyFrame(collection, 538)?.archiveNominalAgeMa).toBe(540)
    expect(resolvePaleotopographyFrame(collection, -0.01)).toBeNull()
    expect(resolvePaleotopographyFrame(collection, 540.01)).toBeNull()
  })
})
