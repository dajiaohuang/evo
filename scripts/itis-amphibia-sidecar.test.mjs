import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const nomenclatureRoot = join(root, 'data', 'packages', 'vertebrata', 'amphibia', 'nomenclature')
const descriptorPath = join(nomenclatureRoot, 'itis-tsn-sidecar.json')
const ledgerPath = join(root, 'data', 'sources', 'itis-amphibia-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const codeUnitCompare = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

function readJsonlGzip(file) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))
}

describe('ITIS Amphibia exact sidecar shards', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes.toString('utf8'))
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap(readJsonlGzip)
  const upstream = descriptor.upstreamOnly.files.flatMap(readJsonlGzip)

  it('pins every strict COL26.8 Amphibia species exactly once in non-overlapping code-unit ranges', () => {
    expect(descriptor.packageId).toBe('amphibia')
    expect(descriptor.sources.col.rootUsageId).toBe('PH')
    expect(descriptor.counts.total).toBe(8923)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(8923)
    expect(new Set(rows.map((record) => record.colUsageId)).size).toBe(8923)
    expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    for (const [index, file] of files.entries()) {
      const shardRows = readJsonlGzip(file)
      expect(shardRows).toHaveLength(file.records)
      expect(shardRows[0].colUsageId).toBe(file.firstColUsageId)
      expect(shardRows.at(-1).colUsageId).toBe(file.lastColUsageId)
      expect(shardRows.every((record, rowIndex) => rowIndex === 0 || codeUnitCompare(shardRows[rowIndex - 1].colUsageId, record.colUsageId) < 0)).toBe(true)
      if (index) expect(codeUnitCompare(files[index - 1].lastColUsageId, file.firstColUsageId)).toBe(-1)
    }
  })

  it('loads exactly one bounded shard for each COL ID detail request', () => {
    const loaded = new Map()
    function loadDetail(colUsageId) {
      const candidates = files.filter((file) => (
        codeUnitCompare(file.firstColUsageId, colUsageId) <= 0
        && codeUnitCompare(colUsageId, file.lastColUsageId) <= 0
      ))
      expect(candidates).toHaveLength(1)
      const [file] = candidates
      if (!loaded.has(file.path)) loaded.set(file.path, readJsonlGzip(file))
      const matches = loaded.get(file.path).filter((record) => record.colUsageId === colUsageId)
      expect(matches).toHaveLength(1)
      return matches[0]
    }
    for (const record of rows) expect(loadDetail(record.colUsageId)).toEqual(record)
    expect(loaded.size).toBe(files.length)
  })

  it('preserves only exact evidence and explicit non-matches', () => {
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((record) => record.exactMatchName === colExactMatchName({ scientificName: record.colScientificName, authorship: record.colAuthorship }))).toBe(true)
    expect(rows.filter((record) => record.status === 'accepted').every((record) => normalizeScientificName(record.currentName.scientificName) === record.exactMatchName)).toBe(true)
    expect(rows.filter((record) => record.status === 'synonymCurrentNameRedirect').every((record) => record.matchedSynonyms.length > 0 && record.matchedSynonyms.every((synonym) => normalizeScientificName(synonym.scientificName) === record.exactMatchName))).toBe(true)
    expect(rows.filter((record) => record.status === 'ambiguous').every((record) => record.candidates.length > 1)).toBe(true)
    expect(rows.filter((record) => record.status === 'unmatched').every((record) => !('currentName' in record))).toBe(true)
  })

  it('keeps ITIS-only current species in a separate null-COL shard', () => {
    expect(descriptor.upstreamOnly.colOwnership).toBeNull()
    expect(upstream).toHaveLength(8)
    expect(upstream.every((record) => record.colUsageId === null && record.currentName.usage === 'valid')).toBe(true)
    const evidencedTsns = new Set(rows.filter((record) => record.currentName).map((record) => record.currentName.tsn))
    for (const record of rows.filter((record) => record.status === 'ambiguous')) for (const candidate of record.candidates) evidencedTsns.add(candidate.currentName.tsn)
    expect(upstream.every((record) => !evidencedTsns.has(record.currentName.tsn))).toBe(true)
    expect(upstream.length + evidencedTsns.size).toBe(descriptor.counts.itisCurrentSpecies)
  })

  it('checks descriptor, shard inventory and delivery boundary bytes', () => {
    expect(ledger.output.descriptor.bytes).toBe(descriptorBytes.length)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.scopeAudit.colStrictAcceptedSpecies).toBe(8923)
    expect(ledger.scopeAudit.itisRoot.tsn).toBe('173420')
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
    expect(ledger.deliveryContract.runtimeChange).toContain('no formal runtime')
  })
})
