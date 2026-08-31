import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-picozoa-sidecar.json')))
const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-picozoa-sidecar-import-ledger.json')))

test('Picozoa remains an exact-root absence with no taxonomic proxy', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.scope.itisRootTsn, null)
  assert.deepEqual(descriptor.scope.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisContainsNameCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.overlapWithExistingPartitions.every((row) => row.overlappingColUsageIds.length === 0 && row.overlappingItisTsns.length === 0), true)
})

test('Picozoa native-full is an explicit deterministic empty shard', () => {
  assert.deepEqual(descriptor.counts, {
    total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0,
    itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0,
  })
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.equal(descriptor.deliveryProfiles['web-light'].records, 0)
  assert.equal(descriptor.deliveryProfiles['native-full'].records, 0)
  const [file] = descriptor.upstreamOnly.files
  const bytes = readFileSync(resolve(root, file.path))
  assert.equal(gunzipSync(bytes).toString('utf8'), '')
  assert.equal(file.records, 0)
  assert.equal(file.firstTsn, null)
  assert.equal(file.lastTsn, null)
  assert.equal(ledger.output.upstreamOnly.sha256, file.sha256)
})
