import { loadCurrentManifest, loadPackageManifest, loadPackageRegistry, runtimeDataUrl } from './staticDataClient'

const OFFLINE_CACHE = 'evo-explicit-offline-packages-v1'

async function cacheUrls(urls: string[], onProgress?: (completed: number, total: number) => void): Promise<void> {
  if (!('caches' in window)) throw new Error('Offline package storage is unavailable in this browser')
  const cache = await caches.open(OFFLINE_CACHE)
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
  const manifestPath = current.packages.manifestTemplate.replace('{packageId}', encodeURIComponent(packageId))
  const urls = [
    runtimeDataUrl(manifestPath),
    ...Object.values(manifest.files).map((file) => runtimeDataUrl(file.url)),
    ...manifest.occurrences.map((file) => runtimeDataUrl(file.url)),
  ]
  await cacheUrls(urls, onProgress)
}

export async function saveAllPackagesOffline(onProgress?: (completed: number, total: number) => void): Promise<void> {
  const registry = await loadPackageRegistry()
  const manifests = await Promise.all(registry.packages.map((entry) => loadPackageManifest(entry.id)))
  const current = await loadCurrentManifest()
  const urls = manifests.flatMap((manifest) => [
    runtimeDataUrl(current.packages.manifestTemplate.replace('{packageId}', encodeURIComponent(manifest.packageId))),
    ...Object.values(manifest.files).map((file) => runtimeDataUrl(file.url)),
    ...manifest.occurrences.map((file) => runtimeDataUrl(file.url)),
  ])
  await cacheUrls([...new Set(urls)], onProgress)
}

export async function clearOfflinePackages(): Promise<void> {
  if ('caches' in window) await caches.delete(OFFLINE_CACHE)
}
