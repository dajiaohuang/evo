import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'node:test'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-chlorophyta-sidecar.json')))
const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-chlorophyta-sidecar-import-ledger.json')))

test('Chlorophyta retains the exact-root, ITIS-only and non-WFO boundary', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.scope.colStrictAcceptedSpecies, 0)
  assert.equal(descriptor.scope.itisRoot.tsn, '5414')
  assert.equal(descriptor.scope.itisRoot.scientificName, 'Chlorophyta')
  assert.equal(descriptor.scope.itisRoot.rank, 'Division')
  assert.equal(descriptor.scope.itisRoot.usage, 'accepted')
  assert.equal(descriptor.scope.itisRoot.parentTsn, '846493')
  assert.equal(descriptor.counts.total, 0)
  assert.equal(descriptor.counts.itisCurrentSpecies, 1416)
  assert.equal(descriptor.counts.itisUpstreamOnly, 1416)
  assert.equal(descriptor.colUsageIdLocator.files.length, 0)
  assert.match(descriptor.sources.wfoBoundary.statement, /not queried, copied or rematched/u)
  assert.deepEqual(ledger.scopeAudit.exactColNodes, [])
  assert.ok(descriptor.scope.partitionOverlapAudit.auditedScopes.every((entry) => entry.overlappingItisTsns === 0))
  assert.deepEqual(descriptor.scope.partitionOverlapAudit.overlappingColUsageIds, [])
  assert.deepEqual(descriptor.scope.partitionOverlapAudit.overlappingItisTsns, [])
})

test('Chlorophyta native shard is complete, TSN-addressed and has no COL identifier', () => {
  const [file] = descriptor.upstreamOnly.files
  const rows = gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
  assert.equal(rows.length, 1416)
  assert.equal(rows.length, file.records)
  assert.ok(rows.every((row) => row.colUsageId === null && row.currentName.usage === 'accepted'))
  assert.deepEqual([...rows].map((row) => Number(row.currentName.tsn)).sort((a, b) => a - b), rows.map((row) => Number(row.currentName.tsn)))
  assert.equal(rows[0].currentName.tsn, file.firstTsn)
  assert.equal(rows.at(-1).currentName.tsn, file.lastTsn)
})
