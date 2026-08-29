/// <reference lib="webworker" />

import { gunzipSync, strFromU8 } from 'fflate'

interface RuntimeWorkerRequest {
  id: number
  url: string
  sha256?: string
  sourceSha256?: string
  mediaType?: 'application/json' | 'application/x-ndjson'
}

async function digestHex(bytes: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('')
}

async function evictUrlFromCaches(url: string): Promise<void> {
  const cacheNames = await caches.keys()
  await Promise.all(cacheNames.map(async (cacheName) => {
    const cache = await caches.open(cacheName)
    await cache.delete(url)
  }))
}

async function fetchVerifiedBytes(url: string, sha256?: string, sourceSha256?: string, retry = true): Promise<ArrayBuffer> {
  const response = await fetch(url, retry ? undefined : { cache: 'reload' })
  if (!response.ok) throw new Error(`Static data request failed (${response.status}) for ${url}`)
  const bytes = await response.arrayBuffer()
  const byteView = new Uint8Array(bytes)
  const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
  const expectedChecksum = isGzip ? sha256 : sourceSha256 ?? sha256
  if (expectedChecksum && await digestHex(bytes) !== expectedChecksum) {
    if (retry) {
      await evictUrlFromCaches(url)
      return fetchVerifiedBytes(url, sha256, sourceSha256, false)
    }
    throw new Error(`Checksum mismatch for ${url} after network refetch`)
  }
  return bytes
}

self.onmessage = async (event: MessageEvent<RuntimeWorkerRequest>) => {
  const { id, url, sha256, sourceSha256, mediaType } = event.data
  try {
    const bytes = await fetchVerifiedBytes(url, sha256, sourceSha256)
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
    self.postMessage({ id, data })
  } catch (error) {
    self.postMessage({ id, error: error instanceof Error ? error.message : String(error) })
  }
}

export {}
