import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-rhodophyta-sidecar.json')))

test('Rhodophyta sidecar preserves the auditable ITIS-only boundary', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.scope.colStrictAcceptedSpecies, 0)
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.scope.colRootScientificName, 'Rhodophyta')
  assert.equal(descriptor.scope.colRootAudit.toLowerCase().includes('no exact col26.8 usage node'), true)
  assert.equal(descriptor.sources.itis.rootTsn, '660046')
  assert.equal(descriptor.sources.itis.rootNameUsage, 'accepted')
  assert.equal(descriptor.counts.total, 0)
  assert.equal(descriptor.counts.itisCurrentSpecies, descriptor.counts.itisUpstreamOnly)
  assert.equal(descriptor.colUsageIdLocator.files.length, 0)
})

test('Rhodophyta native shard is complete and deliberately lacks COL identifiers', () => {
  const [file] = descriptor.upstreamOnly.files
  const rows = gunzipSync(readFileSync(resolve(root, file.path))).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
  assert.equal(rows.length, descriptor.counts.itisUpstreamOnly)
  assert.equal(rows.length, 1616)
  assert.equal(file.records, rows.length)
  assert.ok(rows.every((row) => row.colUsageId === null && row.currentName.usage === 'accepted'))
  assert.equal(new Set(rows.map((row) => row.currentName.tsn)).size, rows.length)
  assert.ok(rows.every((row) => row.currentName.scientificName.length > 0))
  assert.ok(rows.every((row, index) => index === 0 || Number(rows[index - 1].currentName.tsn) < Number(row.currentName.tsn)))
  assert.equal(rows[0].currentName.tsn, file.firstTsn)
  assert.equal(rows.at(-1).currentName.tsn, file.lastTsn)
})
