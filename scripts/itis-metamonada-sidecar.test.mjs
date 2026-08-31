import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-metamonada-sidecar.json')))
const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-metamonada-sidecar-import-ledger.json')))

test('Metamonada keeps exact-root absence and never substitutes neighboring ITIS taxa', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.scope.itisRootTsn, null)
  assert.deepEqual(descriptor.scope.colExactRootCandidates, [])
  assert.deepEqual(descriptor.scope.itisExactRootCandidates, [])
  assert.deepEqual(descriptor.scope.itisContainsNameCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisNearbyNameCandidates.map((row) => row.tsn), [14271, 14272, 43781, 43782, 43783, 43810, 43835, 43837])
  assert.equal(descriptor.rootBoundaryAudit.overlapWithExistingPartitions.every((row) => row.overlappingColUsageIds.length === 0 && row.overlappingItisTsns.length === 0), true)
})

test('Metamonada is complete as an empty native-full partition and Pages summary-only', () => {
  assert.deepEqual(descriptor.counts, { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.deepEqual(descriptor.upstreamOnly.files, [])
  assert.deepEqual(descriptor.deliveryProfiles['web-light'], { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'GitHub Pages carries this descriptor and its hashes only; no row-level payload exists.' })
  assert.deepEqual(descriptor.deliveryProfiles['native-full'], { payload: 'complete', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'Android and iOS carry the complete empty partition; there are no non-empty rows to omit.' })
  assert.equal(ledger.totals.total, 0)
  assert.equal(ledger.deliveryContract.pagesLight.includes('summary-only'), true)
  assert.equal(ledger.deliveryContract.androidIosFull.includes('complete empty partition'), true)
})
