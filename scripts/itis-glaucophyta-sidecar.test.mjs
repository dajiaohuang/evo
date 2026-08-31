import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'node:test'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-glaucophyta-sidecar.json')))

test('Glaucophyta uses the exact accepted ITIS division and no inferred COL root', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.scope.colStrictAcceptedSpecies, 0)
  assert.equal(descriptor.sources.itis.rootTsn, '846495')
  assert.equal(descriptor.sources.itis.rootNameUsage, 'accepted')
  assert.deepEqual(descriptor.rootBoundaryAudit.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.colNearRootCandidates, [])
  assert.equal(descriptor.rootBoundaryAudit.selectedColRoot, null)
  assert.equal(descriptor.rootBoundaryAudit.selectedItisRoot.tsn, '846495')
})

test('Glaucophyta native shard contains all four accepted species in TSN order', () => {
  assert.deepEqual(descriptor.counts, {
    total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0,
    itisCurrentSpecies: 4, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 4,
  })
  const [file] = descriptor.upstreamOnly.files
  const rows = gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
  assert.deepEqual(rows.map((row) => row.currentName.tsn), ['822', '6005', '6006', '6007'])
  assert.equal(rows.length, descriptor.counts.itisUpstreamOnly)
  assert.ok(rows.every((row) => row.colUsageId === null && row.currentName.usage === 'accepted'))
  assert.equal(file.firstTsn, '822')
  assert.equal(file.lastTsn, '6007')
  assert.equal(descriptor.deliveryProfiles['web-light'].records, 0)
  assert.equal(descriptor.deliveryProfiles['native-full'].records, 4)
})
