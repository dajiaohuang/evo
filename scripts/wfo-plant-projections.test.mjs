import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const readJson = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

function readShards(files, base = '') {
  return files.flatMap((file) => {
    const bytes = readFileSync(join(root, base, ...file.path.split('/')))
    expect(bytes.byteLength).toBe(file.bytes)
    expect(sha256(bytes)).toBe(file.sha256)
    const source = gunzipSync(bytes)
    expect(source.byteLength).toBe(file.sourceBytes)
    expect(sha256(source)).toBe(file.sourceSha256)
    return source.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  })
}

describe('WFO Plant List runtime projections', () => {
  it('preserves all five COL outcomes in the three rich packages', () => {
    const expected = {
      angiospermae: [352619, 292924, 7705, 154, 51803, 33],
      gymnosperms: [1599, 1145, 3, 1, 449, 1],
      'early-land-plants': [33770, 22719, 146, 18, 10883, 4],
    }
    for (const [packageId, counts] of Object.entries(expected)) {
      const descriptor = readJson(`data/packages/plantae/${packageId}/nomenclature/manifest.json`)
      expect([descriptor.counts.total, descriptor.counts.accepted, descriptor.counts.redirect, descriptor.counts.ambiguous, descriptor.counts.unmatched, descriptor.counts.withheld]).toEqual(counts)
      const records = readShards(descriptor.files)
      expect(records).toHaveLength(counts[0])
      expect(new Set(records.map((record) => record.colId)).size).toBe(counts[0])
      expect(records.every((record) => record.packageId === packageId)).toBe(true)
      for (const [index, file] of descriptor.files.entries()) {
        expect(file.minColId.localeCompare(file.maxColId)).toBeLessThanOrEqual(0)
        if (index > 0) expect(descriptor.files[index - 1].maxColId.localeCompare(file.minColId)).toBeLessThan(0)
      }
    }
  }, 30_000)

  it('keeps all WFO-only accepted species in a separate null-COL partition', () => {
    const manifest = readJson('data/catalogue-of-life/releases/2026-08-20/resource-packs/other-plants/manifest.json')
    const extension = manifest.extensions.find((candidate) => candidate.id === 'wfo-plant-list-crosswalk')
    expect(extension.counts).toMatchObject({ packageColRecords: 698, upstreamOnly: 60751, records: 61449, wfoAcceptedSpecies: 382438 })
    expect(extension.partitions.map(({ id, colOwnership, records }) => ({ id, colOwnership, records }))).toEqual([
      { id: 'other-plants-col', colOwnership: 'other-plants', records: 698 },
      { id: 'wfo-upstream-only', colOwnership: null, records: 60751 },
    ])
    const records = readShards(extension.files, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
    expect(records.filter((record) => record.status === 'upstream-only')).toHaveLength(60751)
    expect(records.filter((record) => record.status === 'upstream-only').every((record) => !('colId' in record) && !('packageId' in record))).toBe(true)
  }, 30_000)
})
