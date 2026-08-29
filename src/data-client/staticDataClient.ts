import { gunzipSync, strFromU8 } from 'fflate'
import type {
  CurrentRuntimeManifest,
  CatalogueHierarchyChildRecord,
  CatalogueHierarchyNodeRecord,
  CatalogueRecord,
  CatalogueRuntimeFile,
  CatalogueRuntimeManifest,
  CatalogueSourceChecklist,
  OccurrenceRuntimeManifest,
  RuntimeEntity,
  RuntimeEntityLinkageCoverage,
  RuntimeFile,
  RuntimeMapManifest,
  RuntimeMapSnapshot,
  RuntimePackageManifest,
  RuntimePackageRegistry,
  RuntimeSearchEntry,
} from './types'

const dataRoot = `${import.meta.env.BASE_URL}data/`.replace(/\/+/g, '/')
const jsonCache = new Map<string, unknown>()
const inFlight = new Map<string, Promise<unknown>>()
const loadedPackageSearch = new Map<string, RuntimeSearchEntry[]>()
let worker: Worker | null = null
let requestId = 0
const workerRequests = new Map<number, { resolve: (data: unknown) => void; reject: (error: Error) => void }>()

function cacheKey(file: RuntimeFile): string {
  return `${file.url}#${file.sha256 ?? 'unverified'}`
}

function dataUrl(relativeUrl: string): string {
  if (/^https?:\/\//.test(relativeUrl)) return relativeUrl
  return `${dataRoot}${relativeUrl.replace(/^\/+/, '')}`
}

async function digestHex(bytes: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('')
}

async function evictUrlFromCaches(url: string): Promise<void> {
  if (!('caches' in globalThis)) return
  const cacheNames = await caches.keys()
  await Promise.all(cacheNames.map(async (cacheName) => {
    const cache = await caches.open(cacheName)
    await cache.delete(url)
  }))
}

async function fetchVerifiedBytes(file: RuntimeFile, retry = true): Promise<ArrayBuffer> {
  const url = dataUrl(file.url)
  const response = await fetch(url, retry ? undefined : { cache: 'reload' })
  if (!response.ok) throw new Error(`Static data request failed (${response.status}) for ${file.url}`)
  const bytes = await response.arrayBuffer()
  const byteView = new Uint8Array(bytes)
  const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
  const expectedChecksum = isGzip ? file.sha256 : file.sourceSha256 ?? file.sha256
  if (expectedChecksum && await digestHex(bytes) !== expectedChecksum) {
    if (retry) {
      await evictUrlFromCaches(url)
      return fetchVerifiedBytes(file, false)
    }
    throw new Error(`Checksum mismatch for ${file.url} after network refetch`)
  }
  return bytes
}

async function loadWithoutWorker<T>(file: RuntimeFile): Promise<T> {
  const bytes = await fetchVerifiedBytes(file)
  const byteView = new Uint8Array(bytes)
  const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
  const text = strFromU8(isGzip ? gunzipSync(byteView) : byteView)
  return (file.mediaType === 'application/x-ndjson'
    ? text.split('\n').filter(Boolean).map((line) => JSON.parse(line) as unknown)
    : JSON.parse(text)) as T
}

function runtimeWorker(): Worker | null {
  if (typeof Worker === 'undefined') return null
  if (worker) return worker
  worker = new Worker(new URL('../workers/runtimeData.worker.ts', import.meta.url), { type: 'module' })
  worker.onmessage = (event: MessageEvent<{ id: number; data?: unknown; error?: string }>) => {
    const request = workerRequests.get(event.data.id)
    if (!request) return
    workerRequests.delete(event.data.id)
    if (event.data.error) request.reject(new Error(event.data.error))
    else request.resolve(event.data.data)
  }
  worker.onerror = (event) => {
    const error = new Error(event.message || 'Runtime data worker failed')
    for (const request of workerRequests.values()) request.reject(error)
    workerRequests.clear()
    worker?.terminate()
    worker = null
  }
  return worker
}

async function loadWithWorker<T>(file: RuntimeFile): Promise<T> {
  const activeWorker = runtimeWorker()
  if (!activeWorker) return loadWithoutWorker<T>(file)
  const id = ++requestId
  return new Promise<T>((resolve, reject) => {
    workerRequests.set(id, { resolve: (data) => resolve(data as T), reject })
    activeWorker.postMessage({ id, url: dataUrl(file.url), sha256: file.sha256, sourceSha256: file.sourceSha256, mediaType: file.mediaType })
  })
}

export async function loadRuntimeFile<T>(file: RuntimeFile): Promise<T> {
  const key = cacheKey(file)
  const cached = jsonCache.get(key)
  if (cached !== undefined) return cached as T
  const pending = inFlight.get(key)
  if (pending) return pending as Promise<T>
  const request = loadWithWorker<T>(file).then((data) => {
    jsonCache.set(key, data)
    inFlight.delete(key)
    return data
  }, (error) => {
    inFlight.delete(key)
    throw error
  })
  inFlight.set(key, request)
  return request
}

async function loadBootstrapManifest(): Promise<CurrentRuntimeManifest> {
  const key = 'current.json#bootstrap'
  const cached = jsonCache.get(key)
  if (cached !== undefined) return cached as CurrentRuntimeManifest
  const response = await fetch(dataUrl('current.json'), { cache: 'no-store' })
  if (!response.ok) throw new Error(`Static data request failed (${response.status}) for current.json`)
  const data = await response.json() as CurrentRuntimeManifest
  const expectedReleaseBase = `releases/${data.datasetVersion}/`
  if (data.releaseBase !== expectedReleaseBase) {
    throw new Error(`Runtime bootstrap release mismatch: expected ${expectedReleaseBase}, received ${data.releaseBase}`)
  }
  jsonCache.set(key, data)
  return data
}

export function loadCurrentManifest(): Promise<CurrentRuntimeManifest> {
  return loadBootstrapManifest()
}

export async function loadPackageRegistry(): Promise<RuntimePackageRegistry> {
  const current = await loadCurrentManifest()
  return loadRuntimeFile<RuntimePackageRegistry>(current.packages.registry)
}

export async function loadEntityIndex(): Promise<RuntimeEntity[]> {
  const current = await loadCurrentManifest()
  return loadRuntimeFile<RuntimeEntity[]>(current.core.entities)
}

export async function loadEntityLinkageCoverage(): Promise<RuntimeEntityLinkageCoverage> {
  const current = await loadCurrentManifest()
  const file = current.core.linkageCoverage
  if (!file) throw new Error('Current release does not publish entity linkage coverage')
  return loadRuntimeFile<RuntimeEntityLinkageCoverage>(file)
}

export async function loadPackageManifest(packageId: string): Promise<RuntimePackageManifest> {
  const current = await loadCurrentManifest()
  const file = current.packages.manifests[packageId]
  if (!file) throw new Error(`Unknown runtime package: ${packageId}`)
  const manifest = await loadRuntimeFile<RuntimePackageManifest>(file)
  if (manifest.packageId !== packageId || manifest.version !== current.datasetVersion) {
    throw new Error(`Runtime package ${packageId} does not belong to dataset ${current.datasetVersion}`)
  }
  return manifest
}

export async function loadPackageForEntity(entityId: string): Promise<RuntimePackageManifest | null> {
  const registry = await loadPackageRegistry()
  const packageId = registry.entityToPackage[entityId]
  if (!packageId) return null
  const manifest = await loadPackageManifest(packageId)
  const searchFile = manifest.files.search
  if (searchFile && !loadedPackageSearch.has(packageId)) {
    const entries = await loadRuntimeFile<RuntimeSearchEntry[]>(searchFile)
    loadedPackageSearch.set(packageId, entries)
  }
  return manifest
}

export async function loadOccurrenceManifest(): Promise<OccurrenceRuntimeManifest> {
  const current = await loadCurrentManifest()
  const manifest = await loadRuntimeFile<OccurrenceRuntimeManifest>(current.occurrences.manifest)
  if (manifest.version !== current.datasetVersion) {
    throw new Error(`Occurrence manifest does not belong to dataset ${current.datasetVersion}`)
  }
  return manifest
}

export async function loadMapManifest(): Promise<RuntimeMapManifest> {
  const current = await loadCurrentManifest()
  const manifest = await loadRuntimeFile<RuntimeMapManifest>(current.maps.manifest)
  if (manifest.version !== current.datasetVersion) {
    throw new Error(`Map manifest does not belong to dataset ${current.datasetVersion}`)
  }
  return manifest
}

export async function loadCatalogueManifest(): Promise<CatalogueRuntimeManifest> {
  const current = await loadCurrentManifest()
  const manifest = await loadRuntimeFile<CatalogueRuntimeManifest>(current.catalogue.manifest)
  if (manifest.releaseAlias !== current.catalogue.releaseAlias || manifest.counts.acceptedSpecies !== current.catalogue.acceptedSpecies) {
    throw new Error('Catalogue of Life manifest does not match the current runtime release')
  }
  return manifest
}

export async function loadCatalogueSourceChecklists(): Promise<CatalogueSourceChecklist[]> {
  const manifest = await loadCatalogueManifest()
  return loadRuntimeFile<CatalogueSourceChecklist[]>(manifest.sourceChecklists)
}

export function normalizeCatalogueQuery(value: string): string {
  return value
    .normalize('NFKD')
    .replaceAll(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US')
    .replaceAll(/[^a-z0-9]+/g, ' ')
    .trim()
}

export async function catalogueRoutePrefix(id: string): Promise<string> {
  const bytes = new TextEncoder().encode(id)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest).slice(0, 1), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function loadCatalogueRoute<T>(
  routes: Record<string, string[]>,
  files: CatalogueRuntimeFile[],
  id: string,
): Promise<T[]> {
  const prefix = await catalogueRoutePrefix(id)
  const filesByUrl = new Map(files.map((file) => [file.url, file]))
  const routedFiles = (routes[prefix] ?? [])
    .map((url) => filesByUrl.get(url))
    .filter((file): file is NonNullable<typeof file> => Boolean(file))
  if (!routedFiles.length) return []
  return (await Promise.all(routedFiles.map((file) => loadRuntimeFile<T[]>(file)))).flat()
}

async function loadCatalogueHierarchyNodeFromManifest(
  manifest: CatalogueRuntimeManifest,
  id: string,
): Promise<CatalogueHierarchyNodeRecord | null> {
  const records = await loadCatalogueRoute<CatalogueHierarchyNodeRecord>(manifest.hierarchy.nodes.routes, manifest.hierarchy.nodes.files, id)
  return records.find((record) => record.id === id) ?? null
}

export async function loadCatalogueHierarchyNode(id: string): Promise<CatalogueHierarchyNodeRecord | null> {
  const manifest = await loadCatalogueManifest()
  return loadCatalogueHierarchyNodeFromManifest(manifest, id)
}

export async function loadCatalogueChildren(parentId: string): Promise<CatalogueHierarchyChildRecord[]> {
  const manifest = await loadCatalogueManifest()
  const records = await loadCatalogueRoute<CatalogueHierarchyChildRecord>(manifest.hierarchy.children.routes, manifest.hierarchy.children.files, parentId)
  return records.filter((record) => record.parentId === parentId)
}

export async function loadCatalogueLineage(id: string, maxDepth = 64): Promise<CatalogueHierarchyNodeRecord[]> {
  if (!Number.isInteger(maxDepth) || maxDepth < 1) {
    throw new Error(`Catalogue hierarchy maxDepth must be a positive integer; received ${maxDepth}`)
  }
  const manifest = await loadCatalogueManifest()
  const lineage: CatalogueHierarchyNodeRecord[] = []
  const visited = new Set<string>()
  let currentId: string | null = id

  while (currentId !== null) {
    if (visited.has(currentId)) {
      throw new Error(`Catalogue hierarchy cycle detected at ${currentId} while loading lineage for ${id}`)
    }
    if (lineage.length >= maxDepth) {
      throw new Error(`Catalogue hierarchy lineage for ${id} exceeds maximum depth ${maxDepth} before reaching a root`)
    }
    visited.add(currentId)
    const node = await loadCatalogueHierarchyNodeFromManifest(manifest, currentId)
    if (!node) {
      const childId = lineage.at(-1)?.id
      throw new Error(childId
        ? `Catalogue hierarchy parent ${currentId} referenced by ${childId} is missing while loading lineage for ${id}`
        : `Catalogue hierarchy node ${id} is missing from the pinned release`)
    }
    lineage.push(node)
    currentId = node.parentId
  }

  return lineage.reverse()
}

export async function searchCatalogue(query: string, limit = 12): Promise<{
  manifest: CatalogueRuntimeManifest
  records: CatalogueRecord[]
  totalMatches: number
  resolutionTargets: Record<string, import('./types').CatalogueTargetRecord>
}> {
  const manifest = await loadCatalogueManifest()
  const normalized = normalizeCatalogueQuery(query)
  const compact = normalized.replaceAll(' ', '')
  if (compact.length < manifest.search.minimumQueryLength) return { manifest, records: [], totalMatches: 0, resolutionTargets: {} }
  const basePrefix = compact.slice(0, 2).padEnd(2, '_')
  const routedUrls = manifest.search.routes[basePrefix] ?? []
  const filesByUrl = new Map(manifest.search.files.map((file) => [file.url, file]))
  const routedFiles = routedUrls
    .map((url) => filesByUrl.get(url))
    .filter((file): file is NonNullable<typeof file> => Boolean(file))
    .filter((file) => compact.startsWith(file.prefix) || file.prefix.startsWith(compact))
  const shards = await Promise.all(routedFiles.map((file) => loadRuntimeFile<CatalogueRecord[]>(file)))
  const statusOrder: Record<CatalogueRecord['status'], number> = { accepted: 0, synonym: 1, 'ambiguous-synonym': 2, misapplied: 3 }
  const matches = shards.flat()
    .filter((record) => record.normalizedName.startsWith(normalized))
    .sort((left, right) => statusOrder[left.status] - statusOrder[right.status]
      || left.normalizedName.length - right.normalizedName.length
      || left.scientificName.localeCompare(right.scientificName))
  const records = matches.slice(0, limit)
  const targetIds = [...new Set(records.flatMap((record) => record.status === 'accepted' || !record.acceptedId ? [] : [record.acceptedId]))]
  const targetRoutes = await Promise.all(targetIds.map(async (id) => [id, await catalogueRoutePrefix(id)] as const))
  const targetFilesByUrl = new Map(manifest.acceptedTargets.files.map((file) => [file.url, file]))
  const routeFiles = [...new Set(targetRoutes.flatMap(([, prefix]) => manifest.acceptedTargets.routes[prefix] ?? []))]
    .map((url) => targetFilesByUrl.get(url))
    .filter((file): file is NonNullable<typeof file> => Boolean(file))
  const targetShards = await Promise.all(routeFiles.map((file) => loadRuntimeFile<import('./types').CatalogueTargetRecord[]>(file)))
  const wantedTargets = new Set(targetIds)
  const resolutionTargets = Object.fromEntries(targetShards.flat()
    .filter((record) => wantedTargets.has(record.id))
    .map((record) => [record.id, record]))
  if (Object.keys(resolutionTargets).length !== targetIds.length) throw new Error('Catalogue resolving-name target is missing from the pinned release')
  return { manifest, records, totalMatches: matches.length, resolutionTargets }
}

export async function loadPaleogeography(period: string): Promise<{
  manifest: RuntimeMapManifest
  snapshot: RuntimeMapSnapshot
  layers: import('../types').PaleogeographyLayers
} | null> {
  const manifest = await loadMapManifest()
  const snapshot = manifest.snapshots.find((entry) => entry.period === period)
  if (!snapshot || snapshot.status !== 'available' || !snapshot.layers) return null
  const [coastlines, platePolygons, plateBoundaries] = await Promise.all([
    loadRuntimeFile<import('../types').PaleogeographyFeatureCollection>(snapshot.layers.coastlines),
    loadRuntimeFile<import('../types').PaleogeographyFeatureCollection>(snapshot.layers.platePolygons),
    loadRuntimeFile<import('../types').PaleogeographyFeatureCollection>(snapshot.layers.plateBoundaries),
  ])
  return { manifest, snapshot, layers: { coastlines, platePolygons, plateBoundaries } }
}

function matchesSearch(entry: RuntimeSearchEntry, normalized: string): boolean {
  return [entry.title, entry.titleEn, entry.titleZh, ...entry.terms]
    .filter((value): value is string | number => value !== null && value !== undefined)
    .some((value) => String(value).toLocaleLowerCase().includes(normalized))
}

export async function searchStaticData(query: string, limit = 16): Promise<RuntimeSearchEntry[]> {
  const normalized = query.trim().toLocaleLowerCase()
  if (!normalized) return []
  const current = await loadCurrentManifest()
  const core = await loadRuntimeFile<RuntimeSearchEntry[]>(current.core.search)
  const entries = [...core, ...loadedPackageSearch.values()].flat()
  const seen = new Set<string>()
  return entries.filter((entry) => {
    const key = `${entry.kind}:${entry.id}`
    if (seen.has(key) || !matchesSearch(entry, normalized)) return false
    seen.add(key)
    return true
  }).slice(0, limit)
}

export function runtimeDataUrl(relativeUrl: string): string {
  return dataUrl(relativeUrl)
}

export function clearRuntimeMemoryCache(): void {
  jsonCache.clear()
  inFlight.clear()
  loadedPackageSearch.clear()
}
