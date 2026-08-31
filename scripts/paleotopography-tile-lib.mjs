import { readFileSync } from 'node:fs'
import { deflateSync, gunzipSync } from 'node:zlib'

const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
const TILE_SIZE = 256

const PALETTE = Object.freeze([
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
])

function crc32(bytes) {
  let value = 0xffffffff
  for (const byte of bytes) {
    value ^= byte
    for (let bit = 0; bit < 8; bit += 1) value = (value >>> 1) ^ ((value & 1) ? 0xedb88320 : 0)
  }
  return (value ^ 0xffffffff) >>> 0
}

function pngChunk(type, data) {
  const name = Buffer.from(type, 'ascii')
  const output = Buffer.alloc(12 + data.byteLength)
  output.writeUInt32BE(data.byteLength, 0)
  name.copy(output, 4)
  data.copy(output, 8)
  output.writeUInt32BE(crc32(Buffer.concat([name, data])), 8 + data.byteLength)
  return output
}

export function encodeRgbaPng(width, height, rgba) {
  if (rgba.byteLength !== width * height * 4) throw new Error('RGBA byte length does not match PNG dimensions')
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 8
  header[9] = 6
  const scanlines = Buffer.alloc(height * (1 + width * 4))
  for (let row = 0; row < height; row += 1) {
    const offset = row * (1 + width * 4)
    scanlines[offset] = 0
    rgba.copy(scanlines, offset + 1, row * width * 4, (row + 1) * width * 4)
  }
  return Buffer.concat([
    PNG_SIGNATURE,
    pngChunk('IHDR', header),
    pngChunk('IDAT', deflateSync(scanlines, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ])
}

export function elevationColor(elevationMetres) {
  if (elevationMetres <= PALETTE[0][0]) return PALETTE[0][1]
  for (let index = 1; index < PALETTE.length; index += 1) {
    const [upperValue, upperColor] = PALETTE[index]
    const [lowerValue, lowerColor] = PALETTE[index - 1]
    if (elevationMetres > upperValue) continue
    const ratio = (elevationMetres - lowerValue) / (upperValue - lowerValue)
    return upperColor.map((channel, channelIndex) => Math.round(lowerColor[channelIndex] + ratio * (channel - lowerColor[channelIndex])))
  }
  return PALETTE.at(-1)[1]
}

export function readPackedPaleodem(path, { width, height }) {
  const decoded = gunzipSync(readFileSync(path))
  if (decoded.byteLength !== width * height * 2) {
    throw new Error(`Packed PaleoDEM has ${decoded.byteLength} decoded bytes; expected ${width * height * 2}`)
  }
  const view = new DataView(decoded.buffer, decoded.byteOffset, decoded.byteLength)
  const values = new Int16Array(width * height)
  for (let index = 0; index < values.length; index += 1) values[index] = view.getInt16(index * 2, true)
  return values
}

function sampleGrid(values, width, height, latitude, longitude) {
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

function renderTile(values, width, height, zoom, tileX, tileY) {
  const rgba = Buffer.alloc(TILE_SIZE * TILE_SIZE * 4)
  const worldPixels = TILE_SIZE * 2 ** zoom
  for (let pixelY = 0; pixelY < TILE_SIZE; pixelY += 1) {
    const normalizedY = (tileY * TILE_SIZE + pixelY + 0.5) / worldPixels
    const latitude = Math.atan(Math.sinh(Math.PI * (1 - 2 * normalizedY))) * 180 / Math.PI
    for (let pixelX = 0; pixelX < TILE_SIZE; pixelX += 1) {
      const normalizedX = (tileX * TILE_SIZE + pixelX + 0.5) / worldPixels
      const longitude = normalizedX * 360 - 180
      const color = elevationColor(sampleGrid(values, width, height, latitude, longitude))
      const offset = (pixelY * TILE_SIZE + pixelX) * 4
      rgba[offset] = color[0]
      rgba[offset + 1] = color[1]
      rgba[offset + 2] = color[2]
      rgba[offset + 3] = 255
    }
  }
  return encodeRgbaPng(TILE_SIZE, TILE_SIZE, rgba)
}

export function buildPaleotopographyPyramid({ sourcePath, width, height, minZoom = 0, maxZoom = 4, writeTile }) {
  const values = readPackedPaleodem(sourcePath, { width, height })
  const tiles = []
  for (let zoom = minZoom; zoom <= maxZoom; zoom += 1) {
    const dimension = 2 ** zoom
    for (let tileX = 0; tileX < dimension; tileX += 1) {
      for (let tileY = 0; tileY < dimension; tileY += 1) {
        const path = `${zoom}/${tileX}/${tileY}.png`
        tiles.push({ z: zoom, x: tileX, y: tileY, ...writeTile(path, renderTile(values, width, height, zoom, tileX, tileY)) })
      }
    }
  }
  return tiles
}

export const PALEOTOPOGRAPHY_TILE_SIZE = TILE_SIZE
export const PALEOTOPOGRAPHY_PALETTE = PALETTE
