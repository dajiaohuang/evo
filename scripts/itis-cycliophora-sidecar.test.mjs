import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-cycliophora-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-cycliophora-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readShard = (file, deterministic = false) => {
  const bytes = readFileSync(join(root, file.path)); expect(bytes.length).toBe(file.bytes); expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes); expect(source.length).toBe(file.sourceBytes); expect(sha256(source)).toBe(file.sourceSha256)
  if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

describe('ITIS Cycliophora exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap((file) => readShard(file, true))
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, true))

  it('covers both strict COL26.8 Cycliophora species exactly once', () => {
    expect(descriptor.scope.colRootUsageId).toBe('622CL')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(2)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(99159)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(2)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(2)
    expect(rows.map((row) => row.colUsageId)).toEqual(['7B6TP', '7B75M'])
  })

  it('records only exact accepted-name evidence', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('563958')
    expect(descriptor.sources.itis.license).toBe('CC0-1.0')
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.status === 'accepted')).toBe(true)
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(rows.map((row) => row.currentName.tsn)).toEqual(['563986', '722224'])
  })

  it('keeps the empty upstream-only partition explicit and verifies mobile bytes', () => {
    expect(upstream).toHaveLength(0)
    expect(descriptor.counts).toMatchObject({ total: 2, accepted: 2, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 2, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
