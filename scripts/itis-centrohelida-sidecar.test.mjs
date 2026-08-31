import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'node:test'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-centrohelida-sidecar.json')))
const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-centrohelida-sidecar-import-ledger.json')))

test('Centrohelida retains the exact legacy ITIS root without treating it as accepted-current', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.sources.itis.rootTsn, null)
  assert.equal(descriptor.sources.itis.rootStatus, 'no-accepted-exact-root')
  assert.deepEqual(descriptor.rootBoundaryAudit.colExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisAcceptedExactRootCandidates, [])
  assert.deepEqual(descriptor.rootBoundaryAudit.itisLegacyExactNameRoot, { tsn: 46126, scientific_name: 'Centrohelida', rank_name: 'Order', name_usage: 'valid', parent_tsn: 46114 })
  assert.equal(descriptor.rootBoundaryAudit.itisLegacyAcceptedSpecies.length, 0)
  assert.deepEqual(descriptor.rootBoundaryAudit.itisLegacyValidSpecies.map((row) => row.tsn), [46129, 46130, 46132, 203857, 203858])
})

test('Centrohelida has no inferred rows and audits every observed protist/chromist sidecar', () => {
  assert.deepEqual(descriptor.counts, {
    total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0,
    itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0,
  })
  assert.deepEqual(descriptor.colUsageIdLocator.files, [])
  assert.deepEqual(descriptor.partitionOverlapAudit.centrohelidaColUsageIds, [])
  assert.deepEqual(descriptor.partitionOverlapAudit.centrohelidaItisCurrentTsns, [])
  assert.equal(descriptor.partitionOverlapAudit.colUsageIdOverlapCount, 0)
  assert.equal(descriptor.partitionOverlapAudit.itisCurrentTsnOverlapCount, 0)
  const labels = descriptor.partitionOverlapAudit.auditedSidecars.map((row) => row.label)
  assert.ok(labels.includes('Ciliophora'))
  assert.ok(labels.includes('Radiolaria'))
  assert.ok(labels.includes('Perkinsozoa'))
  const [file] = descriptor.upstreamOnly.files
  assert.equal(gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8'), '')
  assert.equal(file.records, 0)
  assert.equal(ledger.output.upstreamOnly.sha256, file.sha256)
})
