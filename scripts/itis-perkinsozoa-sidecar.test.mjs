import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const descriptor = JSON.parse(readFileSync(resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-perkinsozoa-sidecar.json')))
const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-perkinsozoa-sidecar-import-ledger.json')))

test('Perkinsozoa keeps the exact-root audit empty', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.deepEqual(descriptor.scope.colExactRootCandidates, [])
  assert.equal(descriptor.scope.itisRootTsn, null)
  assert.deepEqual(descriptor.scope.itisExactRootCandidates, [])
  assert.deepEqual(descriptor.scope.itisPrefixRootCandidates, [])
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.deepEqual(descriptor.upstreamOnly.files, [])
  assert.deepEqual(descriptor.counts, {
    total: 0,
    accepted: 0,
    synonymCurrentNameRedirect: 0,
    ambiguous: 0,
    unmatched: 0,
    itisCurrentSpecies: 0,
    itisSpeciesSynonymLinks: 0,
    itisUpstreamOnly: 0,
  })
})

test('Perkinsozoa does not overlap existing Dinoflagellata or Apicomplexa partitions', () => {
  const partitions = descriptor.rootBoundaryAudit.existingPartitions
  assert.deepEqual(partitions.map((partition) => [partition.label, partition.colRootUsageId, partition.itisRootTsn, partition.sidecarRecords]), [
    ['Dinoflagellata', '622D3', '9874', 259],
    ['Apicomplexa', '87FBN', '553099', 21],
  ])
  assert.deepEqual(descriptor.rootBoundaryAudit.overlapWithExistingPartitions, [
    { label: 'Dinoflagellata', overlappingColUsageIds: [] },
    { label: 'Apicomplexa', overlappingColUsageIds: [] },
  ])
})

test('Pages is summary-only and native-full is complete even with zero rows', () => {
  assert.equal(descriptor.deliveryProfiles['web-light'].payload, 'summary-only')
  assert.deepEqual(descriptor.deliveryProfiles['web-light'].files, [])
  assert.equal(descriptor.deliveryProfiles['native-full'].payload, 'complete')
  assert.deepEqual(descriptor.deliveryProfiles['native-full'].files, [])
  assert.equal(ledger.totals.total, 0)
  assert.match(ledger.deliveryContract.pagesLight, /summary-only/u)
  assert.match(ledger.deliveryContract.androidIosFull, /complete empty partition/u)
})
