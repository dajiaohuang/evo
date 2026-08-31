import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-cryptophyta-sidecar.json')))

test('Cryptophyta records the exact-root absence and does not substitute near roots', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.sources.itis.rootTsn, null)
  assert.equal(descriptor.sources.itis.rootStatus, 'absent')
  assert.deepEqual(descriptor.rootBoundaryAudit.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisExactNameCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisNearRootCandidates.map((row) => row.tsn), [10597, 10598])
  assert.equal(descriptor.rootBoundaryAudit.selectedItisRoot, null)
})

test('Cryptophyta has no inferred COL/ITIS rows and native-full is checksum-addressed', () => {
  assert.deepEqual(descriptor.counts, {
    total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0,
    itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0,
  })
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.equal(descriptor.deliveryProfiles['web-light'].records, 0)
  assert.equal(descriptor.deliveryProfiles['native-full'].records, 0)
  const [file] = descriptor.upstreamOnly.files
  const rows = gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8')
  assert.equal(rows, '')
  assert.equal(file.records, 0)
  assert.equal(file.firstTsn, null)
  assert.equal(file.lastTsn, null)
})
