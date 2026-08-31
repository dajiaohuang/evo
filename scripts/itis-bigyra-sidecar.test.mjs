import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName } from './itis-bigyra-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-bigyra-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-bigyra-sidecar-import-ledger.json')
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

describe('ITIS Bigyra exact-root empty-partition sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))

  it('covers the exact COL26.8 Bigyra root once', () => {
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope.packageRootUsageIds).toEqual(['C', 'Z'])
    expect(descriptor.scope.colRootUsageId).toBe('622CB')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(53)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(61465)
    const rows = descriptor.colUsageIdLocator.files.flatMap(readShard)
    expect(rows).toHaveLength(53)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(53)
    expect(rows[0].colUsageId).toBe('36MJR')
    expect(rows.at(-1).colUsageId).toBe('MPV3')
    expect(rows.every((row) => row.status === 'unmatched')).toBe(true)
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
  })

  it('does not expand the exact ITIS root into a substituted species scope', () => {
    expect(descriptor.rootBoundaryAudit.selectedItisRoot).toEqual({ tsn: '969916', scientificName: 'Bigyra', rank: 'Division', usage: 'accepted' })
    expect(descriptor.rootBoundaryAudit.itisExactNameCandidates).toHaveLength(1)
    expect(descriptor.rootBoundaryAudit.selectedCurrentSpecies).toBe(0)
    expect(descriptor.rootBoundaryAudit.selectedSpeciesSynonymLinks).toBe(0)
    expect(descriptor.sources.itis.rootTsn).toBe('969916')
    expect(descriptor.counts).toMatchObject({ total: 53, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 53, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
    expect(descriptor.exactMatching.prohibited).toContain('taxon-substituted')
    expect(descriptor.upstreamOnly.files.flatMap(readShard)).toHaveLength(0)
  })

  it('keeps Pages summary-only and native-full byte-addressed', () => {
    const nativeFiles = [...descriptor.colUsageIdLocator.files, ...descriptor.upstreamOnly.files]
    expect(descriptor.deliveryProfiles['web-light'].files).toEqual([])
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual(nativeFiles.map((file) => file.path))
    expect(descriptor.deliveryProfiles['native-full'].records).toBe(53)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(descriptor.colUsageIdLocator.files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
  })
})
