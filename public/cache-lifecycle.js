/* global self, caches, fetch */

const EVO_VERSIONED_CACHE_PREFIXES = [
  'evo-runtime-data-',
  'evo-explicit-offline-packages-',
]

async function currentDatasetVersion() {
  try {
    const url = new URL('/evo/data/current.json', self.location.origin)
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) return null
    const manifest = await response.json()
    return typeof manifest.datasetVersion === 'string' ? manifest.datasetVersion : null
  } catch {
    return null
  }
}

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const datasetVersion = await currentDatasetVersion()
    if (!datasetVersion) return
    const names = await caches.keys()
    await Promise.all(names.filter((name) => EVO_VERSIONED_CACHE_PREFIXES.some((prefix) => (
      name.startsWith(prefix) && name !== `${prefix}${datasetVersion}`
    ))).map((name) => caches.delete(name)))
  })())
})
