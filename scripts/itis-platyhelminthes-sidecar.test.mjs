import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'other-animals')
const descriptorPath = join(packRoot, 'itis-platyhelminthes-sidecar.json')
const ledgerPath = join(root, 'data', 'sources', 'itis-platyhelminthes-sidecar-import-ledger.json')
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

describe('ITIS Platyhelminthes exact sidecar shards', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap(readJsonlGzip)
  const upstream = descriptor.upstreamOnly.files.flatMap(readJsonlGzip)

  it('pins the complete strict COL26.8 Platyhelminthes partition', () => {
    expect(descriptor.packageId).toBe('other-animals')
    expect(descriptor.scope.colRootUsageId).toBe('7NF2H')
    expect(descriptor.scope.colRootScientificName).toBe('Platyhelminthes Minot, 1876')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(27007)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(99161)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(72154)
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(27007)
    expect(new Set(rows.map((record) => record.colUsageId)).size).toBe(27007)
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

  it('selects exactly one immutable shard for each COL detail ID', () => {
    const loaded = new Map(files.map((file) => [file.path, new Set(readJsonlGzip(file).map((item) => item.colUsageId))]))
    const failures = []
    for (const record of rows) {
      const candidates = files.filter((file) => codeUnitCompare(file.firstColUsageId, record.colUsageId) <= 0 && codeUnitCompare(record.colUsageId, file.lastColUsageId) <= 0)
      if (candidates.length !== 1 || !loaded.get(candidates[0]?.path)?.has(record.colUsageId)) failures.push(record.colUsageId)
    }
    expect(loaded.size).toBe(files.length)
    expect(failures).toEqual([])
  }, 15_000)

  it('retains exact evidence and explicit unmatched boundaries', () => {
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((record) => record.exactMatchName === colExactMatchName({ scientificName: record.colScientificName, authorship: record.colAuthorship }))).toBe(true)
    expect(rows.filter((record) => record.status === 'accepted').every((record) => normalizeScientificName(record.currentName.scientificName) === record.exactMatchName)).toBe(true)
    expect(rows.filter((record) => record.status === 'synonym-current-name-redirect').every((record) => record.matchedSynonyms.length > 0 && record.matchedSynonyms.every((synonym) => normalizeScientificName(synonym.scientificName) === record.exactMatchName))).toBe(true)
    expect(rows.filter((record) => record.status === 'ambiguous').every((record) => record.candidates.length > 1)).toBe(true)
    expect(rows.filter((record) => record.status === 'unmatched').every((record) => !('currentName' in record))).toBe(true)
    expect(upstream).toHaveLength(1245)
    expect(upstream.every((record) => record.colUsageId === null && record.currentName.usage === 'valid')).toBe(true)
  })

  it('checks descriptor, ledger and delivery-boundary hashes', () => {
    expect(descriptor.counts).toMatchObject({ total: 27007, accepted: 7393, synonymCurrentNameRedirect: 239, ambiguous: 23, unmatched: 19352, itisCurrentSpecies: 8732, itisSpeciesSynonymLinks: 3566, itisUpstreamOnly: 1245 })
    expect(ledger.output.descriptor.bytes).toBe(descriptorBytes.length)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.scopeAudit.itisRoot).toEqual({ tsn: '53963', scientificName: 'Platyhelminthes', rank: 'Phylum', usage: 'valid' })
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
    expect(ledger.deliveryContract.runtimeChange).toContain('no formal runtime')
  })
})
