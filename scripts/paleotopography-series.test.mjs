import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { rootDir } from './data-lib.mjs'

const manifest = JSON.parse(readFileSync(resolve(rootDir, 'data/paleotopography/scotese-wright-2018-v2/manifest.json'), 'utf8'))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('complete Scotese–Wright PaleoDEM series', () => {
  it('pins every independent five-million-year frame and its exact decoded metre grid', () => {
    expect(manifest.schemaVersion).toBe(2)
    expect(manifest.source.doi).toBe('10.5281/zenodo.5460860')
    expect(manifest.source.license).toBe('CC-BY-4.0')
    expect(manifest.archive).toMatchObject({
      bytes: 207273848,
      officialMd5: '89eb50d8645707ab221b023078535bda',
      sha256: 'ab360184d8260a815ef5ed6b8b4e0abdbf99ef5ee8aa87dfd070af323ceb42da',
      netcdfMemberCount: 109,
      redistributed: false,
    })
    expect(manifest.frames.map((frame) => frame.archiveNominalAgeMa)).toEqual(Array.from({ length: 109 }, (_, index) => index * 5))
    expect(manifest.selection).toMatchObject({
      method: 'nearest-nominal-age',
      tieBreak: 'younger',
      outsideRange: 'unavailable',
      temporalInterpolation: 'none',
    })
    expect(manifest.grid.transformation).toContain('No spatial or temporal interpolation')
    expect(manifest.grid.webPreview).toMatchObject({
      stride: 3,
      resolutionDegrees: 0.3,
      width: 1201,
      height: 601,
      cellCount: 721801,
    })
    expect(manifest.grid.webPreview.derivation).toContain('no smoothing')
    expect(manifest.visualization).toMatchObject({ renderer: 'client-worker-canvas-grid-layer', preGeneratedTiles: 0 })

    let compressedBytes = 0
    let decodedBytes = 0
    let previewCompressedBytes = 0
    let previewDecodedBytes = 0
    for (const frame of manifest.frames) {
      expect(frame.memberPath).toMatch(new RegExp(`_${frame.archiveNominalAgeMa}Ma\\.nc$`))
      expect(frame.memberBytes).toBeGreaterThan(0)
      expect(frame.memberCompressedBytes).toBeGreaterThan(0)
      expect(frame.memberSha256).toMatch(/^[a-f0-9]{64}$/)
      expect(frame.internalDescription).toMatch(/^PALEOMAP:/)
      expect(frame.width).toBe(3601)
      expect(frame.height).toBe(1801)
      expect(frame.cellCount).toBe(6485401)
      const compressed = readFileSync(resolve(rootDir, frame.grid.path))
      const decoded = gunzipSync(compressed)
      expect(compressed.byteLength).toBe(frame.grid.bytes)
      expect(sha256(compressed)).toBe(frame.grid.sha256)
      expect(decoded.byteLength).toBe(frame.grid.decodedBytes)
      expect(sha256(decoded)).toBe(frame.grid.decodedSha256)
      const previewCompressed = readFileSync(resolve(rootDir, frame.webPreviewGrid.path))
      const previewDecoded = gunzipSync(previewCompressed)
      expect(frame.webPreviewGrid).toMatchObject({
        derivation: 'exact-decimation-every-third-source-row-and-column',
        sourceGridSha256: frame.grid.decodedSha256,
        stride: 3,
        resolutionDegrees: 0.3,
        width: 1201,
        height: 601,
        cellCount: 721801,
      })
      expect(previewCompressed.byteLength).toBe(frame.webPreviewGrid.bytes)
      expect(sha256(previewCompressed)).toBe(frame.webPreviewGrid.sha256)
      expect(previewDecoded.byteLength).toBe(frame.webPreviewGrid.decodedBytes)
      expect(sha256(previewDecoded)).toBe(frame.webPreviewGrid.decodedSha256)
      const exactDecimation = Buffer.alloc(previewDecoded.byteLength)
      for (let row = 0; row < 601; row += 1) {
        for (let column = 0; column < 1201; column += 1) {
          exactDecimation.writeInt16LE(decoded.readInt16LE(((row * 3) * 3601 + column * 3) * 2), (row * 1201 + column) * 2)
        }
      }
      expect(previewDecoded.equals(exactDecimation)).toBe(true)
      compressedBytes += compressed.byteLength
      decodedBytes += decoded.byteLength
      previewCompressedBytes += previewCompressed.byteLength
      previewDecodedBytes += previewDecoded.byteLength
    }
    expect(compressedBytes).toBe(168418483)
    expect(decodedBytes).toBe(1413817418)
    expect(previewCompressedBytes).toBe(24847071)
    expect(previewDecodedBytes).toBe(109 * 1201 * 601 * 2)
    expect(manifest.totals).toMatchObject({
      frames: 109,
      independentGridGzipBytes: compressedBytes,
      webPreviewGridGzipBytes: previewCompressedBytes,
      decodedGridBytes: decodedBytes,
      webPreviewDecodedGridBytes: previewDecodedBytes,
    })
  }, 30_000)
})
