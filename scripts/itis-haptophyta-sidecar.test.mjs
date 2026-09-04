import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const packRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptor = JSON.parse(readFileSync(resolve(packRoot, 'itis-haptophyta-sidecar.json')))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

test('Haptophyta provenance resolves the pinned repository inputs and generated descriptor', () => {
  const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/itis-haptophyta-sidecar-import-ledger.json')))
  const source = descriptor.sources.col
  assert.equal(source.registryManifestPath, 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')
  assert.equal(source.ownershipPath, 'data/registry/package-species-coverage.json')
  assert.equal(ledger.generatedFrom.colRegistryManifestPath, source.registryManifestPath)
  assert.equal(ledger.generatedFrom.colOwnershipPath, source.ownershipPath)
  assert.equal(ledger.generatedFrom.colRegistryManifestSha256, source.registryManifestSha256)
  assert.equal(ledger.generatedFrom.colOwnershipSha256, source.ownershipSha256)
  assert.equal(sha256(readFileSync(resolve(root, source.registryManifestPath))), source.registryManifestSha256)
  assert.equal(sha256(readFileSync(resolve(root, source.ownershipPath))), source.ownershipSha256)
  const bytes = readFileSync(resolve(root, ledger.output.descriptor.path))
  assert.equal(bytes.length, ledger.output.descriptor.bytes)
  assert.equal(sha256(bytes), ledger.output.descriptor.sha256)
})

test('Haptophyta sidecar preserves the auditable ITIS-only boundary', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.equal(descriptor.scope.colRootUsageId, null)
  assert.equal(descriptor.scope.colStrictAcceptedSpecies, 0)
  assert.deepEqual(descriptor.scope.packageRootUsageIds, ['C', 'Z'])
  assert.equal(descriptor.sources.itis.rootTsn, '2134')
  assert.equal(descriptor.sources.itis.rootNameUsage, 'accepted')
  assert.equal(descriptor.counts.total, 0)
  assert.equal(descriptor.counts.itisCurrentSpecies, descriptor.counts.itisUpstreamOnly)
  assert.equal(descriptor.colUsageIdLocator.files.length, 0)
})

test('Haptophyta native shard is complete and deliberately lacks COL identifiers', () => {
  const [file] = descriptor.upstreamOnly.files
  const bytes = readFileSync(resolve(root, file.path))
  assert.equal(bytes.length, file.bytes)
  assert.equal(sha256(bytes), file.sha256)
  const rows = gunzipSync(bytes).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
  assert.equal(rows.length, descriptor.counts.itisUpstreamOnly)
  assert.equal(file.records, rows.length)
  assert.ok(rows.every((row) => row.colUsageId === null && row.currentName.usage === 'accepted'))
  assert.equal(rows[0].currentName.tsn, file.firstTsn)
  assert.equal(rows.at(-1).currentName.tsn, file.lastTsn)
})
