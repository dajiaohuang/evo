import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-hemimastigophora-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-hemimastigophora-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('ITIS Hemimastigophora exact-root boundary sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))

  it('records the empty exact-root boundary without a proxy taxon', () => {
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope.packageRootUsageIds).toEqual(['C', 'Z'])
    expect(descriptor.scope.colRootUsageId).toBeNull()
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(0)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.rootBoundaryAudit.colExactRootCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.itisExactNameCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.selectedColRoot).toBeNull()
    expect(descriptor.rootBoundaryAudit.selectedItisRoot).toBeNull()
    expect(descriptor.partitionOverlapAudit.colUsageIdOverlapCount).toBe(0)
    expect(descriptor.partitionOverlapAudit.itisCurrentTsnOverlapCount).toBe(0)
    expect(descriptor.counts).toEqual({ total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
  })

  it('keeps Pages summary-only and native-full explicit', () => {
    expect(descriptor.deliveryProfiles['web-light'].files).toEqual([])
    const upstream = descriptor.upstreamOnly.files[0]
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual([upstream.path])
    const bytes = readFileSync(join(root, upstream.path))
    expect(bytes.length).toBe(upstream.bytes)
    expect(sha256(bytes)).toBe(upstream.sha256)
    expect(gunzipSync(bytes)).toHaveLength(0)
    expect(Buffer.from(deterministicGzip(Buffer.alloc(0), { level: 9 }))).toEqual(bytes)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual([])
    expect(ledger.output.upstreamOnly).toEqual(upstream)
  })
})
