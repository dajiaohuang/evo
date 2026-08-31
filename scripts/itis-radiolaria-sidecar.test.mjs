import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'node:test'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-radiolaria-sidecar.json')))

test('Radiolaria records the exact-root absence without replacing it with Rhizaria', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.sources.itis.rootTsn, null)
  assert.equal(descriptor.sources.itis.rootStatus, 'no-accepted-exact-root')
  assert.deepEqual(descriptor.rootBoundaryAudit.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisAcceptedExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisLegacyExactNameRoot, { tsn: 46088, scientific_name: 'Radiolaria', rank_name: 'Order', name_usage: 'valid', parent_tsn: 46078 })
  assert.deepEqual(descriptor.rootBoundaryAudit.itisNearbyModernCandidates.map((row) => row.tsn), [969913])
  assert.equal(descriptor.rootBoundaryAudit.selectedItisRoot, null)
  assert.equal(descriptor.partitionOverlapAudit.colUsageIdOverlapCount, 0)
  assert.equal(descriptor.partitionOverlapAudit.itisCurrentTsnOverlapCount, 0)
  assert.ok(descriptor.partitionOverlapAudit.auditedSidecars.includes('itis-cercozoa'))
  assert.ok(descriptor.partitionOverlapAudit.auditedSidecars.includes('foraminifera-wfd-identifiers'))
})

test('Radiolaria has no inferred rows and native-full remains checksum-addressed', () => {
  assert.deepEqual(descriptor.counts, {
    total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0,
    itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0,
  })
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.deepEqual(descriptor.partitionOverlapAudit.radiolariaColUsageIds, [])
  assert.deepEqual(descriptor.partitionOverlapAudit.radiolariaItisCurrentTsns, [])
  assert.equal(descriptor.deliveryProfiles['web-light'].records, 0)
  assert.equal(descriptor.deliveryProfiles['native-full'].records, 0)
  const [file] = descriptor.upstreamOnly.files
  const rows = gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8')
  assert.equal(rows, '')
  assert.equal(file.records, 0)
  assert.equal(file.firstTsn, null)
  assert.equal(file.lastTsn, null)
})
