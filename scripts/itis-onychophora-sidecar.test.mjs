import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-onychophora-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-onychophora-sidecar-import-ledger.json')
const hash = (value) => createHash('sha256').update(value).digest('hex')
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0
function readShard(file, deterministic = false) { const compressed = readFileSync(join(root, file.path)); expect(compressed.length).toBe(file.bytes); expect(hash(compressed)).toBe(file.sha256); const source = gunzipSync(compressed); expect(source.length).toBe(file.sourceBytes); expect(hash(source)).toBe(file.sourceSha256); if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(compressed); const text = source.toString('utf8').trimEnd(); return text ? text.split('\n').map((line) => JSON.parse(line)) : [] }
function locate(files, id) { let low = 0; let high = files.length - 1; while (low <= high) { const middle = Math.floor((low + high) / 2); const file = files[middle]; if (compare(id, file.firstColUsageId) < 0) high = middle - 1; else if (compare(id, file.lastColUsageId) > 0) low = middle + 1; else return file } return null }

describe('ITIS Onychophora exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath); const descriptor = JSON.parse(descriptorBytes); const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files; const rowsByFile = files.map((file, index) => readShard(file, index === 0 || index === files.length - 1)); const rows = rowsByFile.flat(); const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, true))
  it('covers every strict COL26.8 Onychophora species in deterministic non-overlapping ranges', () => {
    expect(descriptor.packageId).toBe('other-animals'); expect(descriptor.scope.colRootUsageId).toBe('BV844'); expect(descriptor.scope.colStrictAcceptedSpecies).toBe(235); expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(98926); expect(rows).toHaveLength(235); expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(rows.length); expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    for (const [index, file] of files.entries()) { const shard = rowsByFile[index]; expect(shard).toHaveLength(file.records); expect(shard[0].colUsageId).toBe(file.firstColUsageId); expect(shard.at(-1).colUsageId).toBe(file.lastColUsageId); if (index) expect(compare(files[index - 1].lastColUsageId, file.firstColUsageId)).toBe(-1) }
  })
  it('retains only exact official ITIS current-name and synonym evidence', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('1217461'); expect(descriptor.exactMatching.prohibited).toContain('No fuzzy'); expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true); expect(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true); expect(rows.filter((row) => row.status === 'synonym-current-name-redirect').every((row) => row.matchedSynonyms.length > 0 && row.matchedSynonyms.every((synonym) => normalizeScientificName(synonym.scientificName) === row.exactMatchName))).toBe(true); expect(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row))).toBe(true); expect(rows.every((row) => locate(files, row.colUsageId))).toBe(true)
  })
  it('keeps ITIS-only species separate and verifies byte-exact native delivery provenance', () => {
    expect(upstream).toHaveLength(0); expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid')).toBe(true); const evidenced = new Set(rows.filter((row) => row.currentName).map((row) => row.currentName.tsn)); expect(upstream.every((row) => !evidenced.has(row.currentName.tsn))).toBe(true); expect(upstream.length + evidenced.size).toBe(descriptor.counts.itisCurrentSpecies); expect(ledger.output.descriptor.sha256).toBe(hash(descriptorBytes)); expect(ledger.output.colUsageIdShards).toEqual(files); expect(ledger.deliveryContract.pagesLight).toContain('omit all row-level'); expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
