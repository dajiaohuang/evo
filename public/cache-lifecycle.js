/* global self, caches, fetch */

const EVO_VERSIONED_CACHE_PREFIXES = [
  'evo-runtime-data-',
  'evo-explicit-offline-packages-',
]

// Migrate clients that still run a prompt-only shell: their old JavaScript
// cannot automatically activate an update, and the prompt may be hidden.
const SHELL_UPDATE_CACHE = 'evo-shell-update-v1'
const SHELL_UPDATE_KEY = new URL('/evo/.shell-update', self.location.origin).href
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    if (self.registration.active) {
      const cache = await caches.open(SHELL_UPDATE_CACHE)
      await cache.put(SHELL_UPDATE_KEY, new Response('reload-existing-shell'))
    }
    await self.skipWaiting()
  })())
})

async function currentDatasetVersion() {
  try {
    const url = new URL('/evo/data/current.json', self.location.origin)
    const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(5000) })
    if (!response.ok) return null
    const manifest = await response.json()
    return typeof manifest.datasetVersion === 'string' ? manifest.datasetVersion : null
  } catch {
    return null
  }
}

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const updateCache = await caches.open(SHELL_UPDATE_CACHE)
    const reload = Boolean(await updateCache.match(SHELL_UPDATE_KEY))
    await updateCache.delete(SHELL_UPDATE_KEY)
    await self.clients.claim()
    const datasetVersion = await currentDatasetVersion()
    if (datasetVersion) {
      const names = await caches.keys()
      await Promise.all(names.filter((name) => EVO_VERSIONED_CACHE_PREFIXES.some((prefix) => (
      name.startsWith(prefix) && name !== `${prefix}${datasetVersion}`
      ))).map((name) => caches.delete(name)))
    }
    if (reload) {
      const windows = await self.clients.matchAll({ type: 'window' })
      await Promise.all(windows.filter(client => client.url.startsWith(self.registration.scope))
        .map(client => client.navigate(client.url).catch(() => undefined)))
    }
  })())
})
