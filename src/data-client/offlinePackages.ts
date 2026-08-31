import { clearRuntimeMemoryCache, loadCatalogueManifest, loadCatalogueResourcePackManifest, loadCurrentManifest, loadCurrentReleaseFiles, loadPackageManifest, loadPackageRegistry, runtimeDataUrl } from './staticDataClient'
import type { RuntimeReleaseFile } from './types'

const OFFLINE_CACHE_PREFIX = 'evo-explicit-offline-packages-'
const RUNTIME_CACHE_PREFIX = 'evo-runtime-data-'

export interface CompleteAtlasOfflinePlan {
  datasetVersion: string
  fileCount: number
  totalBytes: number
}

export interface OfflineDownloadProgress extends CompleteAtlasOfflinePlan {
  completedFiles: number
  completedBytes: number
}

async function cacheUrls(cacheName: string, urls: string[], onProgress?: (completed: number, total: number) => void): Promise<void> {
  if (!('caches' in window)) throw new Error('Offline package storage is unavailable in this browser')
  const cache = await caches.open(cacheName)
  let completed = 0
  for (const url of urls) {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Unable to save ${url} (${response.status})`)
    await cache.put(url, response)
    completed += 1
    onProgress?.(completed, urls.length)
  }
}

export async function savePackageOffline(packageId: string, onProgress?: (completed: number, total: number) => void): Promise<void> {
  const current = await loadCurrentManifest()
  const manifest = await loadPackageManifest(packageId)
  const manifestFile = current.packages.manifests[packageId]
  if (!manifestFile) throw new Error(`Unknown runtime package: ${packageId}`)
  const urls = [
    runtimeDataUrl(manifestFile.url),
    ...Object.values(manifest.files).map((file) => runtimeDataUrl(file.url)),
    ...(manifest.assets ?? []).map((file) => runtimeDataUrl(file.url)),
    ...manifest.occurrences.map((file) => runtimeDataUrl(file.url)),
  ]
  await cacheUrls(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, urls, onProgress)
}

export async function saveAllPackagesOffline(onProgress?: (completed: number, total: number) => void): Promise<void> {
  const registry = await loadPackageRegistry()
  const manifests = await Promise.all(registry.packages.map((entry) => loadPackageManifest(entry.id)))
  const current = await loadCurrentManifest()
  const urls = manifests.flatMap((manifest) => [
    runtimeDataUrl(current.packages.manifests[manifest.packageId].url),
    ...Object.values(manifest.files).map((file) => runtimeDataUrl(file.url)),
    ...(manifest.assets ?? []).map((file) => runtimeDataUrl(file.url)),
    ...manifest.occurrences.map((file) => runtimeDataUrl(file.url)),
  ])
  await cacheUrls(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, [...new Set(urls)], onProgress)
}

export async function saveCatalogueResourcePackOffline(packageId: string, onProgress?: (completed: number, total: number) => void): Promise<void> {
  const current = await loadCurrentManifest()
  const catalogue = await loadCatalogueManifest()
  const manifest = await loadCatalogueResourcePackManifest(packageId)
  const manifestFile = catalogue.resourcePacks.manifests[packageId]
  const urls = [
    runtimeDataUrl(current.catalogue.manifest.url),
    runtimeDataUrl(catalogue.resourcePacks.sharedSources.url),
    runtimeDataUrl(manifestFile.url),
    ...manifest.files.map((file) => runtimeDataUrl(file.url)),
    ...(manifest.extensions ?? []).flatMap((extension) => extension.files.map((file) => runtimeDataUrl(file.url))),
  ]
  await cacheUrls(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, urls, onProgress)
}

async function completeAtlasFiles(): Promise<{ plan: CompleteAtlasOfflinePlan; files: RuntimeReleaseFile[] }> {
  const current = await loadCurrentManifest()
  const inventory = await loadCurrentReleaseFiles()
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
  for (const relativeUrl of ['current.json', 'releases.json', `releases/${plan.datasetVersion}/release-files.json`]) {
    const url = runtimeDataUrl(relativeUrl)
    if (await cache.match(url)) continue
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Unable to save ${url} (${response.status})`)
    await cache.put(url, response)
  }
  let completedFiles = 0
  let completedBytes = 0
  let nextFileIndex = 0

  const saveNext = async (): Promise<void> => {
    while (nextFileIndex < files.length) {
      const file = files[nextFileIndex++]
      const url = runtimeDataUrl(file.url)
      const cached = await cache.match(url)
      if (!cached) {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Unable to save ${url} (${response.status})`)
        await cache.put(url, response)
      }
      completedFiles += 1
      completedBytes += file.bytes
      onProgress?.({ ...plan, completedFiles, completedBytes })
    }
  }
  await Promise.all(Array.from({ length: Math.min(4, files.length) }, () => saveNext()))
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
