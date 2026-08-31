import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(
  root,
  'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-chaetognatha-sidecar.json',
)
const ledgerPath = join(root, 'data/sources/itis-chaetognatha-sidecar-import-ledger.json')
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
const cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0
function read(file, check = false) { const bytes = readFileSync(join(root, file.path)); expect(bytes.length).toBe(file.bytes); expect(hash(bytes)).toBe(file.sha256); const raw = gunzipSync(bytes); expect(raw.length).toBe(file.sourceBytes); expect(hash(raw)).toBe(file.sourceSha256); if (check) expect(Buffer.from(deterministicGzip(raw, { level: 9 }))).toEqual(bytes); return raw.toString().trimEnd().split('\n').map(JSON.parse) }
function locate(files, id) { let low = 0, high = files.length - 1; while (low <= high) { const middle = Math.floor((low + high) / 2), file = files[middle]; if (cmp(id, file.firstColUsageId) < 0) high = middle - 1; else if (cmp(id, file.lastColUsageId) > 0) low = middle + 1; else return file } return null }
describe('ITIS Chaetognatha exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath), descriptor = JSON.parse(descriptorBytes), ledger = JSON.parse(readFileSync(ledgerPath, 'utf8')), files = descriptor.colUsageIdLocator.files, byFile = files.map((file, i) => read(file, i === 0 || i === files.length - 1)), rows = byFile.flat(), upstream = descriptor.upstreamOnly.files.flatMap((file) => read(file, true))
  it('covers the complete COL26.8 Chaetognatha partition in deterministic range shards', () => { expect(descriptor.packageId).toBe('other-animals'); expect(descriptor.scope.colRootUsageId).toBe('36'); expect(descriptor.scope.colRootScientificName).toBe('Chaetognatha'); expect(rows).toHaveLength(descriptor.scope.colStrictAcceptedSpecies); expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(99161); expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(99161 - rows.length); expect(new Set(rows.map((r) => r.colUsageId)).size).toBe(rows.length); expect(files.every((f) => f.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true); for (const [i, file] of files.entries()) { expect(byFile[i]).toHaveLength(file.records); expect(byFile[i][0].colUsageId).toBe(file.firstColUsageId); expect(byFile[i].at(-1).colUsageId).toBe(file.lastColUsageId); if (i) expect(cmp(files[i - 1].lastColUsageId, file.firstColUsageId)).toBe(-1) } })
  it('uses only strict official ITIS evidence', () => { expect(descriptor.sources.itis.rootTsn).toBe('158650'); expect(descriptor.exactMatching.prohibited).toContain('No fuzzy'); expect(rows.every((r) => r.exactMatchName === colExactMatchName({ scientificName: r.colScientificName, authorship: r.colAuthorship }))).toBe(true); expect(rows.filter((r) => r.status === 'accepted').every((r) => normalizeScientificName(r.currentName.scientificName) === r.exactMatchName)).toBe(true); expect(rows.filter((r) => r.status === 'synonym-current-name-redirect').every((r) => r.matchedSynonyms.length > 0)).toBe(true); expect(rows.filter((r) => r.status === 'ambiguous').every((r) => r.candidates.length > 1)).toBe(true); expect(rows.filter((r) => r.status === 'unmatched').every((r) => !('currentName' in r))).toBe(true); for (const row of rows) expect(locate(files, row.colUsageId)).not.toBeNull() })
  it('keeps ITIS-only species and mobile delivery evidence separate', () => { const evidenced = new Set(rows.flatMap((r) => [r.currentName?.tsn, ...(r.candidates ?? []).map((c) => c.currentName.tsn)]).filter(Boolean)); expect(upstream.every((r) => r.colUsageId === null && r.currentName.usage === 'valid' && !evidenced.has(r.currentName.tsn))).toBe(true); expect(upstream.length + evidenced.size).toBe(descriptor.counts.itisCurrentSpecies); expect(ledger.output.descriptor.sha256).toBe(hash(descriptorBytes)); expect(ledger.output.colUsageIdShards).toEqual(files); expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard') })
})
