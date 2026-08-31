import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const nomenclatureRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(nomenclatureRoot, 'itis-gastrotricha-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-gastrotricha-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

function readShard(file, { checkDeterminism = false } = {}) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  if (checkDeterminism) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))
}

function locate(files, colUsageId) {
  let low = 0
  let high = files.length - 1
  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    const candidate = files[middle]
    if (compareCodeUnits(colUsageId, candidate.firstColUsageId) < 0) high = middle - 1
    else if (compareCodeUnits(colUsageId, candidate.lastColUsageId) > 0) low = middle + 1
    else return candidate
  }
  return null
}

describe('ITIS Gastrotricha exact sidecar shards', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rowsByFile = files.map((file, index) => readShard(file, {
    checkDeterminism: index === 0 || index === Math.floor(files.length / 2) || index === files.length - 1,
  }))
  const rows = rowsByFile.flat()
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, { checkDeterminism: true }))

  it('limits the mixed package to the exact Gastrotricha root and preserves every in-scope COL species once', () => {
    expect(descriptor.packageId).toBe('other-animals')
    expect(descriptor.scope.colRootUsageId).toBe('B8V3M')
    expect(descriptor.scope.packageRootUsageId).toBe('N')
    expect(descriptor.scope.packageRootScientificName).toBe('Animalia')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBeGreaterThan(0)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBeGreaterThan(descriptor.scope.colStrictAcceptedSpecies)
    expect(descriptor.scope.packageOutOfScopeStrictAcceptedSpecies).toBe(descriptor.scope.packageStrictAcceptedSpecies - descriptor.scope.colStrictAcceptedSpecies)
    expect(descriptor.scope.nonApplicableRemainder).toContain('complete remainder')
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(descriptor.counts.total)
    expect(descriptor.counts).toMatchObject({
      total: 903,
      accepted: 574,
      synonymCurrentNameRedirect: 8,
      ambiguous: 1,
      unmatched: 320,
      itisCurrentSpecies: 675,
      itisSpeciesSynonymLinks: 150,
      itisUpstreamOnly: 94,
    })
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(rows.length)
    expect(rows.length).toBe(descriptor.scope.colStrictAcceptedSpecies)
    expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    for (const [index, file] of files.entries()) {
      const shardRows = rowsByFile[index]
      expect(shardRows).toHaveLength(file.records)
      expect(shardRows[0].colUsageId).toBe(file.firstColUsageId)
      expect(shardRows.at(-1).colUsageId).toBe(file.lastColUsageId)
      expect(shardRows.every((row, rowIndex) => rowIndex === 0 || compareCodeUnits(shardRows[rowIndex - 1].colUsageId, row.colUsageId) < 0)).toBe(true)
      if (index) expect(compareCodeUnits(files[index - 1].lastColUsageId, file.firstColUsageId)).toBe(-1)
    }
  })

  it('uses exact official ITIS evidence only and resolves each detail through one shard', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('57597')
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(rows.filter((row) => row.status === 'synonym-current-name-redirect').every((row) => row.matchedSynonyms.length > 0 && row.matchedSynonyms.every((synonym) => normalizeScientificName(synonym.scientificName) === row.exactMatchName))).toBe(true)
    expect(rows.filter((row) => row.status === 'ambiguous').every((row) => row.candidates.length > 1)).toBe(true)
    expect(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row))).toBe(true)
    for (const row of rows) expect(locate(files, row.colUsageId)).not.toBeNull()
  }, 20_000)

  it('keeps ITIS-only current species in a separate null-COL shard and preserves the stated delivery boundary', () => {
    expect(descriptor.upstreamOnly.colOwnership).toBeNull()
    expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid')).toBe(true)
    const evidencedTsns = new Set(rows.filter((row) => row.currentName).map((row) => row.currentName.tsn))
    for (const row of rows.filter((row) => row.status === 'ambiguous')) for (const candidate of row.candidates) evidencedTsns.add(candidate.currentName.tsn)
    expect(upstream.every((row) => !evidencedTsns.has(row.currentName.tsn))).toBe(true)
    expect(upstream.length + evidencedTsns.size).toBe(descriptor.counts.itisCurrentSpecies)
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
    expect(ledger.deliveryContract.runtimeChange).toContain('no formal runtime')
  })
})
