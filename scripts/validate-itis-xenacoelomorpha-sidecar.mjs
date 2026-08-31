import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dataRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0
const descriptorBytes = readFileSync(join(dataRoot, 'itis-xenacoelomorpha-sidecar.json'))
const descriptor = JSON.parse(descriptorBytes)
const ledger = JSON.parse(readFileSync(join(root, 'data/sources/itis-xenacoelomorpha-sidecar-import-ledger.json')))

function readShard(file) {
  const bytes = readFileSync(join(root, file.path))
  assert.equal(bytes.length, file.bytes); assert.equal(sha(bytes), file.sha256)
  const source = gunzipSync(bytes); assert.equal(source.length, file.sourceBytes); assert.equal(sha(source), file.sourceSha256)
  const text = source.toString('utf8').trim(); return text ? text.split('\n').map(JSON.parse) : []
}

assert.equal(descriptor.packageId, 'other-animals')
assert.equal(descriptor.scope.colRootUsageId, '7NF2K')
assert.equal(descriptor.sources.itis.rootTsn, '914162')
assert.equal(descriptor.scope.colStrictAcceptedSpecies, 441)
assert.deepEqual(descriptor.counts, { total: 441, accepted: 370, synonymCurrentNameRedirect: 6, ambiguous: 1, unmatched: 64, itisCurrentSpecies: 435, itisSpeciesSynonymLinks: 232, itisUpstreamOnly: 58 })
const rows = descriptor.colUsageIdLocator.files.flatMap(readShard)
const upstream = descriptor.upstreamOnly.files.flatMap(readShard)
assert.equal(rows.length, descriptor.counts.total); assert.equal(new Set(rows.map((row) => row.colUsageId)).size, rows.length)
assert(rows.every((row, index) => !index || compare(rows[index - 1].colUsageId, row.colUsageId) < 0))
assert(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship })))
assert(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName))
assert(rows.filter((row) => row.status === 'synonym-current-name-redirect').every((row) => row.matchedSynonyms.length && row.matchedSynonyms.every((name) => normalizeScientificName(name.scientificName) === row.exactMatchName)))
assert(rows.filter((row) => row.status === 'ambiguous').every((row) => row.candidates.length > 1))
assert(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row)))
const evidenced = new Set(rows.flatMap((row) => row.currentName ? [row.currentName.tsn] : (row.candidates ?? []).map((candidate) => candidate.currentName.tsn)))
assert(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid' && !evidenced.has(row.currentName.tsn)))
assert.equal(upstream.length + evidenced.size, descriptor.counts.itisCurrentSpecies)
assert.equal(ledger.output.descriptor.sha256, sha(descriptorBytes)); assert.deepEqual(ledger.output.colUsageIdShards, descriptor.colUsageIdLocator.files)
assert.equal(ledger.generatedBy.scriptSha256, sha(readFileSync(join(root, ledger.generatedBy.scriptPath))))
console.log(`validated Xenacoelomorpha: ${rows.length} COL rows + ${upstream.length} ITIS-only rows`)
