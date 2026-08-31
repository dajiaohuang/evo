import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-ciliophora-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-ciliophora-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readShard = (file, deterministic = false) => {
  const bytes = readFileSync(join(root, file.path)); expect(bytes.length).toBe(file.bytes); expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes); expect(source.length).toBe(file.sourceBytes); expect(sha256(source)).toBe(file.sourceSha256)
  if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

describe('ITIS Ciliophora exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap((file) => readShard(file, true))
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, true))

  it('covers all strict COL26.8 Ciliophora species exactly once', () => {
    expect(descriptor.scope.colRootUsageId).toBe('3H')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(8507)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(53011)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(8507)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(8507)
    expect(rows[0].colUsageId).toBe('3245V')
    expect(rows.at(-1).colUsageId).toBe('ZYHS')
  })

  it('records exact evidence without forcing unmatched names', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('46211')
    expect(descriptor.sources.itis.license).toBe('CC0-1.0')
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted')).toHaveLength(246)
    expect(rows.filter((row) => row.status === 'synonym-current-name-redirect')).toHaveLength(6)
    expect(rows.filter((row) => row.status === 'ambiguous')).toHaveLength(0)
    expect(rows.filter((row) => row.status === 'unmatched')).toHaveLength(8255)
    expect(rows.filter((row) => row.currentName).every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName || row.status === 'synonym-current-name-redirect')).toBe(true)
  })

  it('keeps the complete upstream-only partition explicit and verifies mobile bytes', () => {
    expect(upstream).toHaveLength(158)
    expect(descriptor.counts).toMatchObject({ total: 8507, accepted: 246, synonymCurrentNameRedirect: 6, ambiguous: 0, unmatched: 8255, itisCurrentSpecies: 410, itisSpeciesSynonymLinks: 16, itisUpstreamOnly: 158 })
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
