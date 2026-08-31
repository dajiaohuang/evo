import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const nomenclatureRoot = join(root, 'data', 'packages', 'vertebrata', 'tetrapod-transition', 'nomenclature')
const descriptorPath = join(nomenclatureRoot, 'itis-sarcopterygii-sidecar.json')
const ledgerPath = join(root, 'data', 'sources', 'itis-sarcopterygii-sidecar-import-ledger.json')
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

describe('ITIS Sarcopterygii exact sidecar shard', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes.toString('utf8'))
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap(readJsonlGzip)

  it('pins the eight strict COL26.8 Sarcopterygii species in one bounded range', () => {
    expect(descriptor.packageId).toBe('tetrapod-transition')
    expect(descriptor.sources.col.rootUsageId).toBe('8VSMX')
    expect(descriptor.sources.itis.rootTsn).toBe('161048')
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(files).toHaveLength(1)
    expect(rows).toHaveLength(8)
    expect(new Set(rows.map((record) => record.colUsageId)).size).toBe(8)
    expect(files[0].sourceBytes).toBeLessThanOrEqual(descriptor.colUsageIdLocator.sourceShardLimitBytes)
    expect(rows[0].colUsageId).toBe(files[0].firstColUsageId)
    expect(rows.at(-1).colUsageId).toBe(files[0].lastColUsageId)
    expect(rows.every((record, index) => index === 0 || codeUnitCompare(rows[index - 1].colUsageId, record.colUsageId) < 0)).toBe(true)
  })

  it('preserves eight direct exact current-name matches with the pinned TSNs', () => {
    expect(descriptor.counts).toMatchObject({ total: 8, accepted: 8, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 8, itisSpeciesSynonymLinks: 12, itisUpstreamOnly: 0 })
    expect(rows.every((record) => record.status === 'accepted')).toBe(true)
    expect(rows.every((record) => record.exactMatchName === colExactMatchName({ scientificName: record.colScientificName, authorship: record.colAuthorship }))).toBe(true)
    expect(rows.every((record) => normalizeScientificName(record.currentName.scientificName) === record.exactMatchName)).toBe(true)
    expect(Object.fromEntries(rows.map((record) => [record.colUsageId, record.currentName.tsn]))).toEqual({
      '4N6QX': '649771', '4N6QZ': '161045', '4N6R6': '649769', '4N6R8': '161047',
      '6P2SC': '649768', '6P34C': '649770', '6PBWM': '161042', '6S8FM': '161037',
    })
  })

  it('does not declare or emit an empty ITIS-only shard', () => {
    expect(descriptor.upstreamOnly).toEqual({
      colOwnership: null,
      stableAddressing: 'Every valid ITIS Sarcopterygii species has exact COL evidence in this pinned scope; no ITIS-only shard is emitted.',
      files: [],
    })
    expect(ledger.output.upstreamOnly).toEqual([])
    expect(readdirSync(nomenclatureRoot).filter((name) => name.includes('upstream-only'))).toEqual([])
    expect(existsSync(join(nomenclatureRoot, 'itis-sarcopterygii-upstream-only-000.jsonl.gz'))).toBe(false)
  })

  it('locks descriptor and ledger bytes to the generated delivery inventory', () => {
    expect(ledger.output.descriptor.bytes).toBe(descriptorBytes.length)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.scopeAudit).toMatchObject({ colRootUsageId: '8VSMX', colStrictAcceptedSpecies: 8, itisCurrentSpecies: 8, itisSpeciesSynonymLinks: 12, itisUpstreamOnly: 0 })
    expect(ledger.scopeAudit.itisRoot).toEqual({ tsn: '161048', scientificName: 'Sarcopterygii', rank: 'Superclass', usage: 'valid' })
    expect(ledger.scopeAudit.maximumUpdateDates).toEqual({ taxonomicUnits: '2026-08-26', synonymLinks: '2026-08-26' })
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
    expect(ledger.deliveryContract.runtimeChange).toContain('no formal runtime')
  })
})
