import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-dinoflagellata-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-dinoflagellata-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-dinoflagellata-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readShard = (file, deterministic = false) => {
  const bytes = readFileSync(join(root, file.path)); expect(bytes.length).toBe(file.bytes); expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes); expect(source.length).toBe(file.sourceBytes); expect(sha256(source)).toBe(file.sourceSha256)
  if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

describe('ITIS Dinophyceae (Dinoflagellata) exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap((file) => readShard(file, true))
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, true))

  it('covers all strict COL26.8 Dinophyceae species exactly once', () => {
    expect(descriptor.scope.colRootUsageId).toBe('622D3')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(259)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(61259)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(259)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(259)
    expect(rows[0].colUsageId).toBe('3HRNL')
    expect(rows.at(-1).colUsageId).toBe('CN83B')
  })

  it('records exact evidence without forcing unmatched names', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('9874')
    expect(descriptor.sources.itis.license).toBe('CC0-1.0')
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted')).toHaveLength(60)
    expect(rows.filter((row) => row.status === 'synonym-current-name-redirect')).toHaveLength(2)
    expect(rows.filter((row) => row.status === 'ambiguous')).toHaveLength(0)
    expect(rows.filter((row) => row.status === 'unmatched')).toHaveLength(197)
    expect(rows.filter((row) => row.currentName).every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName || row.status === 'synonym-current-name-redirect')).toBe(true)
  })

  it('keeps the complete upstream-only partition explicit and verifies mobile bytes', () => {
    expect(upstream).toHaveLength(851)
    expect(descriptor.counts).toMatchObject({ total: 259, accepted: 60, synonymCurrentNameRedirect: 2, ambiguous: 0, unmatched: 197, itisCurrentSpecies: 912, itisSpeciesSynonymLinks: 149, itisUpstreamOnly: 851 })
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
