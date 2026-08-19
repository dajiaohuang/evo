import { clearRuntimeMemoryCache, loadCurrentManifest, loadPackageManifest, loadPackageRegistry, runtimeDataUrl } from './staticDataClient'

const OFFLINE_CACHE_PREFIX = 'evo-explicit-offline-packages-'
const RUNTIME_CACHE_PREFIX = 'evo-runtime-data-'

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
    ...manifest.occurrences.map((file) => runtimeDataUrl(file.url)),
  ])
  await cacheUrls(`${OFFLINE_CACHE_PREFIX}${current.datasetVersion}`, [...new Set(urls)], onProgress)
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
