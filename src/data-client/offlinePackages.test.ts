import { afterEach, describe, expect, it, vi } from 'vitest'

function jsonResponse(value: unknown): Response {
  return new Response(JSON.stringify(value), { status: 200, headers: { 'content-type': 'application/json' } })
}

describe('complete Atlas offline storage', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.resetModules()
  })

  it('stores every interactive release file and the bootstrap pointers but skips duplicate ZIP exports', async () => {
    const datasetVersion = 'dataset-mobile'
    const releaseBase = `releases/${datasetVersion}/`
    const files = [
      { url: `${releaseBase}core/entities.json.gz`, bytes: 10, sha256: 'a'.repeat(64) },
      { url: `${releaseBase}maps/coastlines-100.json.gz`, bytes: 20, sha256: 'b'.repeat(64) },
      { url: `${releaseBase}maps/observations/geochemistry/part-0.json.gz`, bytes: 12, sha256: 'd'.repeat(64) },
      { url: `${releaseBase}downloads/demo-${datasetVersion}.zip`, bytes: 40, sha256: 'c'.repeat(64) },
    ]
    const current = {
      schemaVersion: 5,
      datasetVersion,
      appVersion: '0.19.0',
      publication: 'test',
      scopeStatement: 'test',
      includedMajorGroups: [],
      excludedMajorGroups: [],
      wholeLifeCoverageClaim: false,
      releaseBase,
      core: {},
      packages: { count: 0, registry: files[0], manifestTemplate: '', manifests: {} },
      occurrences: { manifest: files[0], totalRecords: 0, unresolvedPackageAssignmentCount: 0 },
      maps: { manifest: files[0], availableSnapshots: 0 },
      catalogue: {},
      downloads: { template: '' },
      budgets: {},
      evidenceBoundary: {},
    }
    const releases = {
      schemaVersion: 1,
      retentionLimit: 3,
      retentionByteLimit: 1000,
      retainedBytes: 82,
      releases: [{ datasetVersion, releaseBase, filesIndex: `${releaseBase}release-files.json`, generatedAt: '2026-08-30', bytes: 82 }],
    }
    const responses = new Map<string, unknown>([
      ['current.json', current],
      ['releases.json', releases],
      [`${releaseBase}release-files.json`, { schemaVersion: 1, datasetVersion, files }],
      [files[0].url, { entities: [] }],
      [files[1].url, { type: 'FeatureCollection', features: [] }],
      [files[2].url, { datasetId: 'geochemistry', records: [] }],
      [files[3].url, 'duplicate export'],
    ])
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      const entry = [...responses.entries()].find(([suffix]) => url.endsWith(suffix))
      if (!entry) return new Response(null, { status: 404 })
      return jsonResponse(entry[1])
    })
    const stored = new Map<string, Response>()
    const cache = {
      match: vi.fn(async (url: string) => stored.get(url)?.clone()),
      put: vi.fn(async (url: string, response: Response) => { stored.set(url, response.clone()) }),
      delete: vi.fn(async (url: string) => stored.delete(url)),
    }
    const cacheStorage = {
      open: vi.fn(async () => cache),
      match: vi.fn(async (url: string) => stored.get(url)?.clone()),
      keys: vi.fn(async () => [`evo-explicit-offline-packages-${datasetVersion}`]),
      delete: vi.fn(async () => true),
    }
    vi.stubGlobal('fetch', fetchMock)
    vi.stubGlobal('caches', cacheStorage)
    vi.stubGlobal('Worker', undefined)

    const { getCompleteAtlasOfflinePlan, saveCompleteAtlasOffline } = await import('./offlinePackages')
    await expect(getCompleteAtlasOfflinePlan()).resolves.toEqual({ datasetVersion, fileCount: 3, totalBytes: 42 })
    const progress = vi.fn()
    await expect(saveCompleteAtlasOffline(progress)).resolves.toEqual({ datasetVersion, fileCount: 3, totalBytes: 42 })

    expect(progress).toHaveBeenLastCalledWith({ datasetVersion, fileCount: 3, totalBytes: 42, completedFiles: 3, completedBytes: 42 })
    expect([...stored.keys()].some((url) => url.endsWith('current.json'))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith('releases.json'))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith('release-files.json'))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(files[0].url))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(files[1].url))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(files[2].url))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(files[3].url))).toBe(false)
  })

  it('includes research examples, bundled media and nomenclature collections in package offline storage', async () => {
    const datasetVersion = 'dataset-research'
    const releaseBase = `releases/${datasetVersion}/`
    const registryFile = { url: `${releaseBase}packages/registry.json` }
    const packageIds = ['alpha', 'beta']
    const manifestFiles = Object.fromEntries(packageIds.map((packageId) => [packageId, { url: `${releaseBase}packages/${packageId}/manifest.json` }]))
    const manifests = Object.fromEntries(packageIds.map((packageId) => [packageId, {
      packageId,
      version: datasetVersion,
      files: {
        identity: { url: `${releaseBase}packages/${packageId}/identity.json` },
        researchExamples: { url: `${releaseBase}packages/${packageId}/research-examples.json` },
      },
      assets: [{ url: `${releaseBase}packages/${packageId}/media/reconstruction.webp` }],
      nomenclatureCollections: packageId === 'alpha' ? [{
        id: 'worms-aphiaid-crosswalk',
        file: { url: `${releaseBase}packages/${packageId}/nomenclature/worms-aphiaid-sidecar.json.gz` },
      }] : [],
      occurrences: [],
    }]))
    const current = {
      datasetVersion,
      releaseBase,
      packages: { registry: registryFile, manifests: manifestFiles },
    }
    const registry = { packages: packageIds.map((id) => ({ id })), entityToPackage: {} }
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/current.json')) return jsonResponse(current)
      if (url.endsWith(registryFile.url)) return jsonResponse(registry)
      for (const packageId of packageIds) {
        if (url.endsWith(manifestFiles[packageId].url)) return jsonResponse(manifests[packageId])
      }
      return jsonResponse({})
    })
    const stored = new Map<string, Response>()
    const cache = {
      match: vi.fn(async (url: string) => stored.get(url)?.clone()),
      put: vi.fn(async (url: string, response: Response) => { stored.set(url, response.clone()) }),
      delete: vi.fn(async (url: string) => stored.delete(url)),
    }
    vi.stubGlobal('fetch', fetchMock)
    vi.stubGlobal('caches', {
      open: vi.fn(async () => cache),
      match: vi.fn(async (url: string) => stored.get(url)?.clone()),
      keys: vi.fn(async () => []),
      delete: vi.fn(async () => true),
    })
    vi.stubGlobal('Worker', undefined)

    const { saveAllPackagesOffline, savePackageOffline } = await import('./offlinePackages')
    await savePackageOffline('alpha')
    expect([...stored.keys()].some((url) => url.endsWith(manifests.alpha.files.researchExamples.url))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(manifests.alpha.assets[0].url))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(manifests.alpha.nomenclatureCollections[0].file.url))).toBe(true)
    expect([...stored.keys()].some((url) => url.endsWith(manifests.beta.files.researchExamples.url))).toBe(false)
    expect([...stored.keys()].some((url) => url.endsWith(manifests.beta.assets[0].url))).toBe(false)

    stored.clear()
    await saveAllPackagesOffline()
    for (const packageId of packageIds) {
      expect([...stored.keys()].some((url) => url.endsWith(manifests[packageId].files.researchExamples.url))).toBe(true)
      expect([...stored.keys()].some((url) => url.endsWith(manifests[packageId].assets[0].url))).toBe(true)
    }
    expect([...stored.keys()].some((url) => url.endsWith(manifests.alpha.nomenclatureCollections[0].file.url))).toBe(true)
  })

  it('stores nomenclatural extension shards with the selected catalogue resource pack', async () => {
    const datasetVersion = 'dataset-lpsn'
    const releaseBase = `releases/${datasetVersion}/`
    const catalogueFile = { url: `${releaseBase}catalogue/manifest.json` }
    const sourcesFile = { url: `${releaseBase}catalogue/sources.json` }
    const packFile = { url: `${releaseBase}catalogue/resource-packs/archaea/manifest.json`, acceptedSpeciesCount: 2, fileCount: 1 }
    const speciesFile = { url: `${releaseBase}catalogue/resource-packs/archaea/species-000.jsonl.gz`, records: 2 }
    const lpsnFile = { url: `${releaseBase}catalogue/resource-packs/archaea/lpsn-000.jsonl.gz`, records: 2 }
    const sourceOnlyFile = { url: `${releaseBase}catalogue/resource-packs/archaea/lpsn-upstream-only-000.jsonl.gz`, records: 1 }
    const current = {
      datasetVersion,
      releaseBase,
      catalogue: { manifest: catalogueFile, releaseAlias: 'TEST-COL', acceptedSpecies: 2 },
    }
    const catalogue = {
      releaseAlias: 'TEST-COL',
      counts: { acceptedSpecies: 2 },
      resourcePacks: { manifests: { archaea: packFile }, sharedSources: sourcesFile },
    }
    const pack = {
      packageId: 'archaea', packageType: 'static-nomenclatural-resource-pack', version: datasetVersion,
      source: { releaseAlias: 'TEST-COL' }, acceptedSpeciesCount: 2, files: [speciesFile],
      extensions: [{ id: 'worms-annelida-archive-crosswalk', files: [lpsnFile], upstreamOnlyFiles: [sourceOnlyFile] }],
    }
    const responses = new Map<string, unknown>([
      ['current.json', current], [catalogueFile.url, catalogue], [packFile.url, pack],
      [sourcesFile.url, []], [speciesFile.url, []], [lpsnFile.url, []], [sourceOnlyFile.url, []],
    ])
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input)
      const entry = [...responses.entries()].find(([suffix]) => url.endsWith(suffix))
      return entry ? jsonResponse(entry[1]) : new Response(null, { status: 404 })
    })
    const stored = new Map<string, Response>()
    const cache = {
      match: vi.fn(async (url: string) => stored.get(url)?.clone()),
      put: vi.fn(async (url: string, response: Response) => { stored.set(url, response.clone()) }),
      delete: vi.fn(async (url: string) => stored.delete(url)),
    }
    vi.stubGlobal('fetch', fetchMock)
    vi.stubGlobal('caches', {
      open: vi.fn(async () => cache), match: vi.fn(async (url: string) => stored.get(url)?.clone()),
      keys: vi.fn(async () => []), delete: vi.fn(async () => true),
    })
    vi.stubGlobal('Worker', undefined)

    const { saveCatalogueResourcePackOffline } = await import('./offlinePackages')
    await saveCatalogueResourcePackOffline('archaea')
    for (const file of [catalogueFile, sourcesFile, packFile, speciesFile, lpsnFile, sourceOnlyFile]) {
      expect([...stored.keys()].some((url) => url.endsWith(file.url))).toBe(true)
    }

    stored.clear()
    pack.extensions[0].files = []
    pack.extensions[0].upstreamOnlyFiles = []
    await saveCatalogueResourcePackOffline('archaea')
    expect([...stored.keys()].some((url) => url.endsWith(lpsnFile.url))).toBe(false)
    expect([...stored.keys()].some((url) => url.endsWith(sourceOnlyFile.url))).toBe(false)
  })
})
