import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName } from './itis-cercozoa-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-cercozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-cercozoa-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readShard = (file) => {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

describe('ITIS Cercozoa exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap(readShard)
  const upstream = descriptor.upstreamOnly.files.flatMap(readShard)

  it('covers the exact COL26.8 Cercozoa partition once', () => {
    expect(descriptor.scope.packageId).toBeUndefined()
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope.colRootUsageId).toBe('35')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(52)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(61466)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(52)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(52)
    expect(rows[0].colUsageId).toBe('3ZNLP')
    expect(rows.at(-1).colUsageId).toBe('7C4VG')
  })

  it('keeps the empty ITIS root partition and every name unmatched', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('969919')
    expect(descriptor.sources.itis.license).toBe('CC0-1.0')
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.status === 'unmatched')).toBe(true)
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(upstream).toHaveLength(0)
  })

  it('binds the generated ledger to the byte-addressed outputs', () => {
    expect(descriptor.counts).toMatchObject({ total: 52, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 52, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
