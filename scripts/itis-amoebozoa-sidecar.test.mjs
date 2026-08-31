import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName } from './itis-amoebozoa-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-amoebozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-amoebozoa-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

function readShard(file) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

describe('ITIS Amoebozoa boundary sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))

  it('covers the exact COL26.8 Amoebozoa root once', () => {
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope.packageRootUsageIds).toEqual(['C', 'Z'])
    expect(descriptor.scope.colRootUsageId).toBe('622B2')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(1337)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(60181)
    const rows = descriptor.colUsageIdLocator.files.flatMap(readShard)
    expect(rows).toHaveLength(1337)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(1337)
    expect(rows[0].colUsageId).toBe('3574B')
    expect(rows.at(-1).colUsageId).toBe('ZFKF')
    expect(rows.every((row) => row.status === 'unmatched')).toBe(true)
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
  })

  it('does not substitute a nearby ITIS root', () => {
    expect(descriptor.rootBoundaryAudit.itisExactNameCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.selectedItisRoot).toBeNull()
    expect(descriptor.sources.itis.rootTsn).toBeNull()
    expect(descriptor.counts).toMatchObject({ total: 1337, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 1337, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
    expect(descriptor.exactMatching.prohibited).toContain('taxon-substituted')
    const upstream = descriptor.upstreamOnly.files.flatMap(readShard)
    expect(upstream).toHaveLength(0)
  })

  it('keeps Pages summary-only and native-full byte-addressed', () => {
    const nativeFiles = [...descriptor.colUsageIdLocator.files, ...descriptor.upstreamOnly.files]
    expect(descriptor.deliveryProfiles['web-light'].files).toEqual([])
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual(nativeFiles.map((file) => file.path))
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(descriptor.colUsageIdLocator.files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
  })
})

