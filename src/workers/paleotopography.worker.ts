import { gunzipSync } from 'fflate'

interface InitializeMessage {
  type: 'initialize'
  url: string
  sha256: string
  decodedSha256: string
  decodedBytes: number
  width: number
  height: number
}

interface RenderMessage {
  type: 'render'
  id: number
  z: number
  x: number
  y: number
  tileSize: number
}

type RequestMessage = InitializeMessage | RenderMessage

const palette = [
  [-6000, [5, 20, 48]],
  [-4000, [13, 47, 83]],
  [-2000, [24, 82, 120]],
  [-200, [58, 132, 158]],
  [0, [112, 176, 174]],
  [1, [72, 116, 70]],
  [300, [103, 138, 77]],
  [1000, [157, 143, 91]],
  [2000, [143, 104, 72]],
  [3600, [232, 226, 209]],
] as const

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

function color(elevation: number): readonly number[] {
  if (elevation <= palette[0][0]) return palette[0][1]
  for (let index = 1; index < palette.length; index += 1) {
    const [upperValue, upperColor] = palette[index]
    const [lowerValue, lowerColor] = palette[index - 1]
    if (elevation > upperValue) continue
    const ratio = (elevation - lowerValue) / (upperValue - lowerValue)
    return upperColor.map((channel, channelIndex) => Math.round(lowerColor[channelIndex] + ratio * (channel - lowerColor[channelIndex])))
  }
  return palette.at(-1)![1]
}

function sample(values: Int16Array, width: number, height: number, latitude: number, longitude: number): number {
  const row = Math.max(0, Math.min(height - 1, (90 - latitude) * (height - 1) / 180))
  const column = Math.max(0, Math.min(width - 1, (longitude + 180) * (width - 1) / 360))
  const row0 = Math.floor(row)
  const column0 = Math.floor(column)
  const row1 = Math.min(height - 1, row0 + 1)
  const column1 = Math.min(width - 1, column0 + 1)
  const rowRatio = row - row0
  const columnRatio = column - column0
  const top = values[row0 * width + column0] * (1 - columnRatio) + values[row0 * width + column1] * columnRatio
  const bottom = values[row1 * width + column0] * (1 - columnRatio) + values[row1 * width + column1] * columnRatio
  return top * (1 - rowRatio) + bottom * rowRatio
}

async function render(message: RenderMessage): Promise<Uint8ClampedArray> {
  if (!gridPromise) throw new Error('PaleoDEM worker has not been initialized')
  const { values, width, height } = await gridPromise
  const rgba = new Uint8ClampedArray(message.tileSize * message.tileSize * 4)
  const worldPixels = message.tileSize * 2 ** message.z
  for (let pixelY = 0; pixelY < message.tileSize; pixelY += 1) {
    const normalizedY = (message.y * message.tileSize + pixelY + 0.5) / worldPixels
    const latitude = Math.atan(Math.sinh(Math.PI * (1 - 2 * normalizedY))) * 180 / Math.PI
    for (let pixelX = 0; pixelX < message.tileSize; pixelX += 1) {
      const normalizedX = (message.x * message.tileSize + pixelX + 0.5) / worldPixels
      const longitude = normalizedX * 360 - 180
      const rgb = color(sample(values, width, height, latitude, longitude))
      const offset = (pixelY * message.tileSize + pixelX) * 4
      rgba[offset] = rgb[0]
      rgba[offset + 1] = rgb[1]
      rgba[offset + 2] = rgb[2]
      rgba[offset + 3] = 255
    }
  }
  return rgba
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
    const rgba = await render(message)
    self.postMessage({ type: 'tile', id: message.id, rgba: rgba.buffer }, { transfer: [rgba.buffer] })
  } catch (error) {
    self.postMessage({ type: 'tile-error', id: message.id, error: error instanceof Error ? error.message : String(error) })
  }
}
