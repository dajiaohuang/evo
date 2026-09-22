/// <reference lib="webworker" />

import { gunzipSync, strFromU8 } from 'fflate'
import { createRuntimeRowIndex, type RuntimeRowQuery } from '../data-client/runtimeQueries'

interface RuntimeWorkerRequest {
  id: number
  url: string
  sha256?: string
  sourceSha256?: string
  mediaType?: 'application/json' | 'application/x-ndjson'
  query?: RuntimeRowQuery
  cancel?: boolean
  clearIndexes?: boolean
}

const indexes = new Map<string, { query: ReturnType<typeof createRuntimeRowIndex>; weight: number }>()
const active = new Map<number, AbortController>()
// An input-size budget, not a claim about measured JS heap use.
const INDEX_SOURCE_BUDGET = 24 * 1024 * 1024

async function digestHex(bytes: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('')
}

async function evictUrlFromCaches(url: string): Promise<void> {
  if (typeof caches === 'undefined') return
  const cacheNames = await caches.keys()
  await Promise.all(cacheNames.map(async (cacheName) => {
    const cache = await caches.open(cacheName)
    await cache.delete(url)
  }))
}

async function fetchVerifiedBytes(url: string, sha256: string | undefined, sourceSha256: string | undefined, signal: AbortSignal, retry = true): Promise<ArrayBuffer> {
  signal.throwIfAborted()
  const cached = retry && typeof caches !== 'undefined' && typeof caches.match === 'function' ? await caches.match(url) : undefined
  signal.throwIfAborted()
  const response = cached ?? await fetch(url, { signal, ...(retry ? {} : { cache: 'reload' }) })
  if (!response.ok) throw new Error(`Static data request failed (${response.status}) for ${url}`)
  const bytes = await response.arrayBuffer()
  signal.throwIfAborted()
  const byteView = new Uint8Array(bytes)
  const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
  const expectedChecksum = isGzip ? sha256 : sourceSha256 ?? sha256
  if (expectedChecksum && await digestHex(bytes) !== expectedChecksum) {
    if (retry) {
      await evictUrlFromCaches(url)
      return fetchVerifiedBytes(url, sha256, sourceSha256, signal, false)
    }
    throw new Error(`Checksum mismatch for ${url} after network refetch`)
  }
  return bytes
}

self.onmessage = async (event: MessageEvent<RuntimeWorkerRequest>) => {
  if (event.data.clearIndexes) {
    for (const controller of active.values()) controller.abort()
    active.clear()
    indexes.clear()
    return
  }
  const { id, url, sha256, sourceSha256, mediaType, query, cancel } = event.data
  if (cancel) { active.get(id)?.abort(); active.delete(id); return }
  const controller = new AbortController()
  active.set(id, controller)
  const key = `${url}#${sha256 ?? ''}#${sourceSha256 ?? ''}#${mediaType ?? ''}`
  try {
    const cached = query ? indexes.get(key) : undefined
    if (cached && query) {
      indexes.delete(key); indexes.set(key, cached)
      self.postMessage({ id, data: cached.query(query) })
      return
    }
    const bytes = await fetchVerifiedBytes(url, sha256, sourceSha256, controller.signal)
    if (!active.has(id)) return
    const byteView = new Uint8Array(bytes)
    const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
    const jsonBytes = isGzip ? gunzipSync(byteView) : byteView
    if (isGzip && sourceSha256 && await digestHex(Uint8Array.from(jsonBytes).buffer) !== sourceSha256) {
      throw new Error(`Decompressed checksum mismatch for ${url}`)
    }
    const text = strFromU8(jsonBytes)
    const data = mediaType === 'application/x-ndjson'
      ? text.split('\n').filter(Boolean).map((line) => JSON.parse(line) as unknown)
      : JSON.parse(text) as unknown
    if (!active.has(id)) return
    if (query) {
      if (!Array.isArray(data)) throw new Error('Runtime row query requires an array')
      const index = { query: createRuntimeRowIndex(data), weight: jsonBytes.byteLength }
      indexes.set(key, index)
      let total = [...indexes.values()].reduce((sum, entry) => sum + entry.weight, 0)
      while (total > INDEX_SOURCE_BUDGET || indexes.size > 24) {
        const oldest = indexes.keys().next().value
        if (oldest === undefined) break
        total -= indexes.get(oldest)!.weight
        indexes.delete(oldest)
      }
      self.postMessage({ id, data: index.query(query) })
    } else self.postMessage({ id, data })
  } catch (error) {
    if (!controller.signal.aborted) self.postMessage({ id, error: error instanceof Error ? error.message : String(error) })
  } finally {
    active.delete(id)
  }
}

export {}
