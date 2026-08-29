import { gunzipSync, strFromU8 } from 'fflate'
import type {
  CurrentRuntimeManifest,
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
  return JSON.parse(strFromU8(isGzip ? gunzipSync(byteView) : byteView)) as T
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
    activeWorker.postMessage({ id, url: dataUrl(file.url), sha256: file.sha256, sourceSha256: file.sourceSha256 })
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

export async function loadPaleogeography(period: string): Promise<{
  manifest: RuntimeMapManifest
  snapshot: RuntimeMapSnapshot
  geometry: import('../types').ContinentFeatureCollection
} | null> {
  const manifest = await loadMapManifest()
  const snapshot = manifest.snapshots.find((entry) => entry.period === period)
  if (!snapshot || snapshot.status !== 'available' || !snapshot.geometry) return null
  const geometry = await loadRuntimeFile<import('../types').ContinentFeatureCollection>(snapshot.geometry)
  return { manifest, snapshot, geometry }
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
