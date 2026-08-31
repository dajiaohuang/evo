import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-dicyemida-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-dicyemida-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
function readShard(file) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))
}
function locate(files, id) {
  let low = 0; let high = files.length - 1
  while (low <= high) {
    const middle = Math.floor((low + high) / 2); const file = files[middle]
    if (compareCodeUnits(id, file.firstColUsageId) < 0) high = middle - 1
    else if (compareCodeUnits(id, file.lastColUsageId) > 0) low = middle + 1
    else return file
  }
  return null
}

describe('ITIS Dicyemida exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap((file) => readShard(file))
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file))

  it('covers the complete strict COL26.8 Dicyemida partition exactly once', () => {
    expect(descriptor.packageId).toBe('other-animals')
    expect(descriptor.scope.colRootUsageId).toBe('3Z')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(122)
    expect(rows).toHaveLength(122)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(rows.length)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    expect(rows.every((row) => locate(files, row.colUsageId))).toBe(true)
  })

  it('uses the Dicyemida order and records the Rhombozoa boundary audit', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('57410')
    expect(descriptor.rootBoundaryAudit.selectedRoot.rank).toBe('Order')
    expect(descriptor.rootBoundaryAudit.broaderRoot).toMatchObject({ tsn: '563954', scientificName: 'Rhombozoa', rank: 'Phylum' })
    expect(descriptor.rootBoundaryAudit.selectedCurrentSpecies).toBe(92)
    expect(descriptor.rootBoundaryAudit.broaderCurrentSpecies).toBe(95)
    expect(descriptor.rootBoundaryAudit.broaderOnlySpecies.map((row) => row.tsn)).toEqual(['696174', '696201', '696203'])
    expect(descriptor.rootBoundaryAudit.selectedRootWitness).toEqual({ tsn: '696187', scientificName: 'Kantharella antarctica' })
    expect(descriptor.rootBoundaryAudit.broaderRootOnlyExamples.map((row) => row.scientificName)).toEqual(['Microcyema vespa', 'Conocyema deca', 'Conocyema polymorpha'])
  })

  it('retains only exact evidence and byte-exact upstream rows', () => {
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row))).toBe(true)
    expect(upstream).toHaveLength(6)
    expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid')).toBe(true)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
