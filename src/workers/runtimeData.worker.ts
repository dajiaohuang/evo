/// <reference lib="webworker" />

import { gunzipSync, strFromU8 } from 'fflate'

interface RuntimeWorkerRequest {
  id: number
  url: string
  sha256?: string
  sourceSha256?: string
}

async function digestHex(bytes: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('')
}

self.onmessage = async (event: MessageEvent<RuntimeWorkerRequest>) => {
  const { id, url, sha256, sourceSha256 } = event.data
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Static data request failed (${response.status}) for ${url}`)
    const bytes = await response.arrayBuffer()
    const byteView = new Uint8Array(bytes)
    const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
    const expectedChecksum = isGzip ? sha256 : sourceSha256
    if (expectedChecksum && await digestHex(bytes) !== expectedChecksum) throw new Error(`Checksum mismatch for ${url}`)
    const jsonBytes = isGzip ? gunzipSync(byteView) : byteView
    const data = JSON.parse(strFromU8(jsonBytes)) as unknown
    self.postMessage({ id, data })
  } catch (error) {
    self.postMessage({ id, error: error instanceof Error ? error.message : String(error) })
  }
}

export {}
