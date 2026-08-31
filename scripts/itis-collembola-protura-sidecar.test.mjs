import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(import.meta.dirname, '..')
const directory = join(root, 'data/packages/arthropoda/crustaceans-insects/nomenclature')
const descriptorBytes = readFileSync(join(directory, 'itis-collembola-protura-sidecar.json'))
const descriptor = JSON.parse(descriptorBytes)
const ledger = JSON.parse(readFileSync(join(root, 'data/sources/itis-collembola-protura-sidecar-import-ledger.json'), 'utf8'))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0

function readShard(file, deterministic = false) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))
}

function locate(files, id) {
  let low = 0; let high = files.length - 1
  while (low <= high) {
    const middle = Math.floor((low + high) / 2); const file = files[middle]
    if (compare(id, file.firstColUsageId) < 0) high = middle - 1
    else if (compare(id, file.lastColUsageId) > 0) low = middle + 1
    else return file
  }
  return null
}

describe('ITIS Collembola and Protura exact sidecar', () => {
  const files = descriptor.colUsageIdLocator.files
  const rowsByFile = files.map((file, index) => readShard(file, index === 0 || index === files.length - 1))
  const rows = rowsByFile.flat()
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, true))

  it('covers the exact disjoint COL roots once with non-overlapping native ranges', () => {
    expect(descriptor.packageId).toBe('crustaceans-insects')
    expect(descriptor.scope.colRoots).toEqual([{ id: 'KZS5W', scientificName: 'Collembola' }, { id: '8NKDZ', scientificName: 'Protura' }])
    expect(descriptor.scope.speciesByColRoot).toEqual({ KZS5W: 8910, '8NKDZ': 758 })
    expect(descriptor.counts.total).toBe(9668)
    expect(rows).toHaveLength(9668)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(rows.length)
    expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    for (const [index, file] of files.entries()) {
      const shard = rowsByFile[index]
      expect(shard).toHaveLength(file.records)
      expect(shard[0].colUsageId).toBe(file.firstColUsageId)
      expect(shard.at(-1).colUsageId).toBe(file.lastColUsageId)
      expect(shard.every((row, rowIndex) => !rowIndex || compare(shard[rowIndex - 1].colUsageId, row.colUsageId) < 0)).toBe(true)
      if (index) expect(compare(files[index - 1].lastColUsageId, file.firstColUsageId)).toBe(-1)
    }
  })

  it('retains exact ITIS evidence only and a separate null-COL partition', () => {
    expect(descriptor.sources.itis.roots).toEqual([{ tsn: '914185', scientificName: 'Collembola' }, { tsn: '914187', scientificName: 'Protura' }])
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(rows.filter((row) => row.status === 'synonym-current-name-redirect').every((row) => row.matchedSynonyms.length > 0)).toBe(true)
    expect(rows.filter((row) => row.status === 'ambiguous').every((row) => row.candidates.length > 1)).toBe(true)
    expect(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row))).toBe(true)
    expect(rows.every((row) => locate(files, row.colUsageId))).toBe(true)
    const evidenced = new Set(rows.filter((row) => row.currentName).map((row) => row.currentName.tsn))
    for (const row of rows.filter((row) => row.status === 'ambiguous')) for (const candidate of row.candidates) evidenced.add(candidate.currentName.tsn)
    expect(upstream).toHaveLength(411)
    expect(upstream.every((row) => row.colUsageId === null && !evidenced.has(row.currentName.tsn))).toBe(true)
    expect(upstream.length + evidenced.size).toBe(descriptor.counts.itisCurrentSpecies)
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
  })
})
