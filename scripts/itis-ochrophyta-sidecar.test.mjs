import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { test } from 'vitest'
import assert from 'node:assert/strict'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName } from './itis-ochrophyta-sidecar-lib.mjs'

const root = resolve(import.meta.dirname, '..')
const descriptor = JSON.parse(readFileSync(resolve(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-ochrophyta-sidecar.json')))
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex')
function rows(file) { const bytes = readFileSync(resolve(root, file.path)); assert.equal(sha(bytes), file.sha256); const source = gunzipSync(bytes); assert.equal(sha(source), file.sourceSha256); assert.deepEqual(Buffer.from(deterministicGzip(source, { level: 9 })), bytes); return source.toString('utf8').trim().split('\n').filter(Boolean).map(JSON.parse) }

test('Ochrophyta sidecar covers the exact COL and ITIS roots', () => {
  assert.equal(descriptor.packageId, 'protists-chromists')
  assert.equal(descriptor.scope.colRootUsageId, '5H')
  assert.equal(descriptor.scope.colStrictAcceptedSpecies, 1101)
  assert.equal(descriptor.sources.itis.rootTsn, '969917')
  assert.equal(descriptor.counts.total, 1101)
  assert.deepEqual(descriptor.counts, { total: 1101, accepted: 1101, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 3399, itisSpeciesSynonymLinks: 795, itisUpstreamOnly: 2298 })
})

test('Ochrophyta row shards are deterministic and native-complete', () => {
  const matched = descriptor.colUsageIdLocator.files.flatMap(rows)
  const upstream = descriptor.upstreamOnly.files.flatMap(rows)
  assert.equal(matched.length, 1101); assert.equal(new Set(matched.map((row) => row.colUsageId)).size, 1101)
  assert.ok(matched.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship })))
  assert.equal(upstream.length, 2298); assert.ok(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'accepted'))
  for (const [colUsageId, tsn] of [['45WNC', '573654'], ['45WWJ', '1020771'], ['45WXV', '1020785'], ['6RTKD', '1020965']]) {
    const row = matched.find((candidate) => candidate.colUsageId === colUsageId)
    assert.equal(row.status, 'accepted'); assert.equal(row.currentName.tsn, tsn); assert.equal(row.colSourceLink.evidence, 'COL name.link'); assert.equal(row.candidateEvidence.length, 2)
  }
})
