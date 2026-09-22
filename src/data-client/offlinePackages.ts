import { clearRuntimeMemoryCache, loadCatalogueManifest, loadCatalogueResourcePackManifest, loadCurrentManifest, loadCurrentReleaseFiles, loadPackageManifest, loadPackageRegistry, runtimeDataUrl } from './staticDataClient'
import type { RuntimeFile, RuntimeReleaseFile } from './types'

const OFFLINE_CACHE_PREFIX = 'evo-explicit-offline-packages-'
const RUNTIME_CACHE_PREFIX = 'evo-runtime-data-'

function nomenclatureFiles(collection: import('./types').RuntimePackageNomenclatureCollection) {
  return [
    ...('files' in collection ? collection.files : (collection.file ? [collection.file] : [])),
    ...('upstreamOnlyFiles' in collection ? collection.upstreamOnlyFiles : []),
  ]
}

export interface CompleteAtlasOfflinePlan {
  datasetVersion: string
  fileCount: number
  totalBytes: number
}

export interface OfflineDownloadProgress extends CompleteAtlasOfflinePlan {
  completedFiles: number
  completedBytes: number
}

async function verifyOfflineResponse(response: Response, file: RuntimeFile): Promise<void> {
  if (!response.ok) throw new Error(`Unable to save ${file.url} (${response.status})`)
  if (!file.sha256) return
  const bytes = await response.clone().arrayBuffer()
  const view = new Uint8Array(bytes)
  const gzip = view[0] === 0x1f && view[1] === 0x8b
  const expected = gzip ? file.sha256 : file.sourceSha256 ?? file.sha256
  const expectedBytes = gzip ? file.bytes : file.sourceBytes ?? file.bytes
  const digest = [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))].map(value => value.toString(16).padStart(2, '0')).join('')
  if (digest !== expected || (expectedBytes !== undefined && expectedBytes !== bytes.byteLength)) throw new Error(`Offline checksum or size mismatch for ${file.url}`)
}

async function cacheFile(cache: Cache, file: RuntimeFile, signal?: AbortSignal): Promise<void> {
  const url = runtimeDataUrl(file.url)
  const stored = await cache.match(url)
  if (stored) {
    try { await verifyOfflineResponse(stored, file); return } catch { await cache.delete(url) }
  }
  const response = await fetch(url, { signal, cache: 'reload' })
  await verifyOfflineResponse(response, file)
  signal?.throwIfAborted()
  await cache.put(url, response)
}

async function cacheFiles(cacheName: string, files: RuntimeFile[], onProgress?: (completed: number, total: number) => void): Promise<void> {
  if (!('caches' in window)) throw new Error('Offline package storage is unavailable in this browser')
  const cache = await caches.open(cacheName)
  let completed = 0
  const unique = [...new Map(files.map(file => [file.url, file])).values()]
  for (const file of unique) {
    await cacheFile(cache, file)
    completed += 1
    onProgress?.(completed, unique.length)
  }
}

export async function savePackageOffline(packageId: string, onProgress?: (completed: number, total: number) => void): Promise<void> {
  const current = await loadCurrentManifest()
  const manifest = await loadPackageManifest(packageId)
  const manifestFile = current.packages.manifests[packageId]
  if (!manifestFile) throw new Error(`Unknown runtime package: ${packageId}`)
  const files = [
    manifestFile,
    ...Object.values(manifest.files),
    ...(manifest.assets ?? []),
    ...(manifest.nomenclatureCollections ?? []).flatMap(nomenclatureFiles),
    ...manifest.occurrences,
  ]
  await cacheFiles(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, files, onProgress)
}

export async function saveAllPackagesOffline(onProgress?: (completed: number, total: number) => void): Promise<void> {
  const registry = await loadPackageRegistry()
  const manifests = await Promise.all(registry.packages.map((entry) => loadPackageManifest(entry.id)))
  const current = await loadCurrentManifest()
  const files = manifests.flatMap((manifest) => [
    current.packages.manifests[manifest.packageId],
    ...Object.values(manifest.files),
    ...(manifest.assets ?? []),
    ...(manifest.nomenclatureCollections ?? []).flatMap(nomenclatureFiles),
    ...manifest.occurrences,
  ])
  await cacheFiles(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, files, onProgress)
}

export async function saveCatalogueResourcePackOffline(packageId: string, onProgress?: (completed: number, total: number) => void): Promise<void> {
  const current = await loadCurrentManifest()
  const catalogue = await loadCatalogueManifest()
  const manifest = await loadCatalogueResourcePackManifest(packageId)
  const manifestFile = catalogue.resourcePacks.manifests[packageId]
  const files = [
    current.catalogue.manifest,
    catalogue.resourcePacks.sharedSources,
    manifestFile,
    ...manifest.files,
    ...(manifest.extensions ?? []).flatMap((extension) => [
      ...extension.files,
      ...('upstreamOnlyFiles' in extension ? extension.upstreamOnlyFiles : []),
    ]),
  ]
  await cacheFiles(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, files, onProgress)
}

async function completeAtlasFiles(): Promise<{ plan: CompleteAtlasOfflinePlan; files: RuntimeReleaseFile[] }> {
  const current = await loadCurrentManifest()
  const inventory = await loadCurrentReleaseFiles()
  const seen = new Set<string>()
  if (inventory.datasetVersion !== current.datasetVersion || !Array.isArray(inventory.files)) throw new Error('Offline inventory mixes dataset versions')
  for (const file of inventory.files) {
    if (!file || typeof file.url !== 'string' || !file.url.startsWith(current.releaseBase) || /[\\?#%]/.test(file.url)
      || file.url.split('/').some(part => !part || part === '.' || part === '..') || seen.has(file.url)
      || !Number.isSafeInteger(file.bytes) || file.bytes < 0 || !/^[a-f0-9]{64}$/.test(file.sha256)) throw new Error('Offline inventory contains an invalid or duplicate release file')
    seen.add(file.url)
  }
  const files = inventory.files.filter((file) => !file.url.includes('/downloads/'))
  return {
    plan: {
      datasetVersion: current.datasetVersion,
      fileCount: files.length,
      totalBytes: files.reduce((sum, file) => sum + file.bytes, 0),
    },
    files,
  }
}

export async function getCompleteAtlasOfflinePlan(): Promise<CompleteAtlasOfflinePlan> {
  return (await completeAtlasFiles()).plan
}

export async function saveCompleteAtlasOffline(
  onProgress?: (progress: OfflineDownloadProgress) => void,
): Promise<CompleteAtlasOfflinePlan> {
  if (!('caches' in window)) throw new Error('Offline package storage is unavailable in this browser')
  await navigator.storage?.persist?.().catch(() => false)
  const { plan, files } = await completeAtlasFiles()
  const cache = await caches.open(`${OFFLINE_CACHE_PREFIX}${plan.datasetVersion}`)
  const bootstrap = new Map<string, Response>()
  for (const relativeUrl of ['current.json', 'releases.json', `releases/${plan.datasetVersion}/release-files.json`]) {
    const url = runtimeDataUrl(relativeUrl)
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) throw new Error(`Unable to save ${url} (${response.status})`)
    const value = await response.clone().json() as { datasetVersion?: string; releaseBase?: string; releases?: Array<{ datasetVersion: string }> }
    if (relativeUrl === 'releases.json'
      ? !value.releases?.some(release => release.datasetVersion === plan.datasetVersion)
      : value.datasetVersion !== plan.datasetVersion) throw new Error('Offline bootstrap changed during download; retry with the current release')
    bootstrap.set(url, response)
  }
  let completedFiles = 0
  let completedBytes = 0
  let nextFileIndex = 0
  const controller = new AbortController()

  const saveNext = async (): Promise<void> => {
    while (!controller.signal.aborted && nextFileIndex < files.length) {
      const file = files[nextFileIndex++]
      await cacheFile(cache, file, controller.signal)
      controller.signal.throwIfAborted()
      completedFiles += 1
      completedBytes += file.bytes
      onProgress?.({ ...plan, completedFiles, completedBytes })
    }
  }
  // Wait for siblings to stop before reporting failure; no background writes or
  // progress may continue after a rejected download.
  const results = await Promise.allSettled(Array.from({ length: Math.min(4, files.length) }, () => saveNext().catch(error => {
    controller.abort(error)
    throw error
  })))
  const failed = results.find(result => result.status === 'rejected')
  if (failed?.status === 'rejected') throw failed.reason
  // Publish startup pointers only after the advertised content was verified.
  for (const [url, response] of [...bootstrap.entries()].reverse()) await cache.put(url, response)
  return plan
}

export async function clearOfflinePackages(): Promise<void> {
  if ('caches' in window) {
    const names = await caches.keys()
    await Promise.all(names
      .filter((name) => name.startsWith(OFFLINE_CACHE_PREFIX) || name.startsWith(RUNTIME_CACHE_PREFIX))
      .map((name) => caches.delete(name)))
  }
  clearRuntimeMemoryCache()
}
