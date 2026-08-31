import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { buildPaleotopographyPyramid, elevationColor, encodeRgbaPng } from './paleotopography-tile-lib.mjs'

describe('paleotopography tile generation', () => {
  it('uses distinct bathymetry, shoreline and topography colours', () => {
    expect(elevationColor(-4000)).not.toEqual(elevationColor(-200))
    expect(elevationColor(-1)).not.toEqual(elevationColor(1))
    expect(elevationColor(2000)).not.toEqual(elevationColor(0))
  })

  it('encodes deterministic RGBA PNG bytes', () => {
    const rgba = Buffer.from([5, 20, 48, 255, 72, 116, 70, 255])
    const first = encodeRgbaPng(2, 1, rgba)
    const second = encodeRgbaPng(2, 1, rgba)
    expect(first).toEqual(second)
    expect(first.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  })

  it('builds every tile in a bounded pyramid deterministically', () => {
    const directory = mkdtempSync(join(tmpdir(), 'evo-paleotopography-'))
    try {
      const source = join(directory, 'grid.i16.gz')
      const raw = Buffer.alloc(5 * 3 * 2)
      for (let index = 0; index < 15; index += 1) raw.writeInt16LE(index * 400 - 2800, index * 2)
      writeFileSync(source, gzipSync(raw, { level: 9, mtime: 0 }))
      const hashes = []
      const tiles = buildPaleotopographyPyramid({
        sourcePath: source,
        width: 5,
        height: 3,
        minZoom: 0,
        maxZoom: 1,
        writeTile: (path, bytes) => {
          const output = join(directory, path.replaceAll('/', '-'))
          writeFileSync(output, bytes)
          const sha256 = createHash('sha256').update(readFileSync(output)).digest('hex')
          hashes.push(sha256)
          return { url: path, bytes: bytes.byteLength, sha256 }
        },
      })
      expect(tiles).toHaveLength(5)
      expect(new Set(tiles.map((tile) => tile.url))).toHaveProperty('size', 5)
      expect(hashes).toEqual(tiles.map((tile) => tile.sha256))
    } finally {
      rmSync(directory, { recursive: true, force: true })
    }
  })
})
