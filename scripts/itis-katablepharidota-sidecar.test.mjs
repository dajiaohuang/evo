import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-katablepharidota-sidecar.json')))
const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-katablepharidota-sidecar-import-ledger.json')))

test('Katablepharidota records exact-root absence without substituting exact-name candidates', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.sources.itis.rootTsn, null)
  assert.equal(descriptor.sources.itis.rootStatus, 'absent')
  assert.deepEqual(descriptor.rootBoundaryAudit.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisExactNameCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.colNearRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisNearRootCandidates, [])
  assert.equal(descriptor.rootBoundaryAudit.selectedColRoot, null)
  assert.equal(descriptor.rootBoundaryAudit.selectedItisRoot, null)
  assert.deepEqual(descriptor.rootBoundaryAudit.overlapAudit.overlappingColUsageIds, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.overlapAudit.overlappingItisTsns, [])
})

test('Katablepharidota has no inferred rows and native-full retains an explicit empty shard', () => {
  assert.deepEqual(descriptor.counts, {
    total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0,
    itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0,
  })
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.equal(descriptor.deliveryProfiles['web-light'].records, 0)
  assert.equal(descriptor.deliveryProfiles['native-full'].records, 0)
  const [file] = descriptor.upstreamOnly.files
  assert.equal(gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8'), '')
  assert.equal(file.records, 0)
  assert.equal(file.firstTsn, null)
  assert.equal(file.lastTsn, null)
  assert.equal(ledger.output.upstreamOnly.sha256, file.sha256)
})
