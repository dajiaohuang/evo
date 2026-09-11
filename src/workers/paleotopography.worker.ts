import { gunzipSync } from 'fflate'
import { renderProjectedGrid, type ProjectedGridRequest } from '../utils/paleotopographyRendering'

interface InitializeMessage {
  type: 'initialize'
  url: string
  sha256: string
  decodedSha256: string
  decodedBytes: number
  width: number
  height: number
}

type RequestMessage = InitializeMessage | ProjectedGridRequest

let gridPromise: Promise<{ values: Int16Array; width: number; height: number }> | null = null

async function sha256(bytes: ArrayBuffer | Uint8Array): Promise<string> {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)
  const digest = await crypto.subtle.digest('SHA-256', view as Uint8Array<ArrayBuffer>)
  return Array.from(new Uint8Array(digest), (value) => value.toString(16).padStart(2, '0')).join('')
}

async function initialize(message: InitializeMessage) {
  const response = await fetch(message.url)
  if (!response.ok) throw new Error(`PaleoDEM grid request failed (${response.status})`)
  const wireBytes = new Uint8Array(await response.arrayBuffer())
  const isGzip = wireBytes[0] === 0x1f && wireBytes[1] === 0x8b
  const expectedWireSha256 = isGzip ? message.sha256 : message.decodedSha256
  if (await sha256(wireBytes) !== expectedWireSha256) throw new Error('PaleoDEM grid checksum mismatch')
  // Some static hosts advertise .gz files with Content-Encoding: gzip, so
  // fetch() exposes the decoded body. Other hosts expose the stored gzip
  // bytes. Both transports must resolve to the same verified integer grid.
  const decoded = isGzip ? gunzipSync(wireBytes) : wireBytes
  if (decoded.byteLength !== message.decodedBytes || await sha256(decoded) !== message.decodedSha256) {
    throw new Error('PaleoDEM decoded grid checksum mismatch')
  }
  if (decoded.byteLength !== message.width * message.height * 2) throw new Error('PaleoDEM decoded grid dimensions mismatch')
  const source = new DataView(decoded.buffer, decoded.byteOffset, decoded.byteLength)
  const values = new Int16Array(message.width * message.height)
  for (let index = 0; index < values.length; index += 1) values[index] = source.getInt16(index * 2, true)
  return { values, width: message.width, height: message.height }
}

self.onmessage = async (event: MessageEvent<RequestMessage>) => {
  const message = event.data
  if (message.type === 'initialize') {
    gridPromise = initialize(message)
    try {
      await gridPromise
      self.postMessage({ type: 'ready' })
    } catch (error) {
      self.postMessage({ type: 'error', error: error instanceof Error ? error.message : String(error) })
    }
    return
  }
  try {
    if (!gridPromise) throw new Error('PaleoDEM worker has not been initialized')
    const grid = await gridPromise
    const rgba = renderProjectedGrid(grid, message)
    self.postMessage({ type: 'frame', id: message.id, width: message.width, height: message.height, rgba: rgba.buffer }, { transfer: [rgba.buffer] })
  } catch (error) {
    self.postMessage({ type: 'render-error', id: message.id, error: error instanceof Error ? error.message : String(error) })
  }
}
