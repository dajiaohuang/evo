import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const nomenclatureRoot = join(root, 'data/packages/invertebrata/molluscs-brachiopods/nomenclature')
const descriptorBytes = readFileSync(join(nomenclatureRoot, 'itis-mollusca-brachiopoda-tsn-sidecar.json'))
const descriptor = JSON.parse(descriptorBytes.toString('utf8'))
const ledger = JSON.parse(readFileSync(join(root, 'data/sources/itis-mollusca-brachiopoda-sidecar-import-ledger.json'), 'utf8'))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compare = (left, right) => left < right ? -1 : left > right ? 1 : 0
const EXPECTED = {
  package: 159801,
  roots: { M2L: 154718, B8V3K: 5076, KZ: 7 },
  applicable: 159794,
  statuses: { accepted: 7212, synonymCurrentNameRedirect: 256, ambiguous: 16, unmatched: 152310 },
  itis: { currentSpecies: 11645, synonymLinks: 7801, upstreamOnly: 4289 },
  shardCount: 59,
}

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

describe('ITIS Mollusca and Brachiopoda exact sidecar', () => {
  const files = descriptor.colUsageIdLocator.files
  const shardRows = new Map(files.map((file) => [file.path, readJsonlGzip(file)]))
  const rows = files.flatMap((file) => shardRows.get(file.path))
  const upstream = descriptor.upstreamOnly.files.flatMap(readJsonlGzip)

  it('enumerates all package roots and marks Graptolithina non-applicable', () => {
    expect(descriptor.packageId).toBe('molluscs-brachiopods')
    expect(descriptor.scope.roots.map(({ col }) => col.id)).toEqual(['M2L', 'B8V3K', 'KZ'])
    expect(descriptor.scope.roots.filter(({ col }) => col.role === 'applicable').map(({ col }) => col.id)).toEqual(['M2L', 'B8V3K'])
    expect(descriptor.scope.nonApplicable).toHaveLength(1)
    expect(descriptor.scope.nonApplicable[0].id).toBe('KZ')
    expect(descriptor.scope.nonApplicable[0].reason).toContain('outside the requested')
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(descriptor.scope.roots.reduce((sum, { col }) => sum + col.strictAcceptedSpecies, 0))
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(EXPECTED.package)
    expect(Object.fromEntries(descriptor.scope.roots.map(({ col }) => [col.id, col.strictAcceptedSpecies]))).toEqual(EXPECTED.roots)
    expect(descriptor.scope.applicableColStrictAcceptedSpecies).toBe(EXPECTED.applicable)
  })

  it('has one deterministic, non-overlapping shard result for every applicable COL species', () => {
    expect(rows).toHaveLength(descriptor.counts.total)
    expect(descriptor.counts).toMatchObject({ total: EXPECTED.applicable, ...EXPECTED.statuses, itisApplicableCurrentSpecies: EXPECTED.itis.currentSpecies, itisApplicableSpeciesSynonymLinks: EXPECTED.itis.synonymLinks, itisUpstreamOnly: EXPECTED.itis.upstreamOnly })
    expect(files).toHaveLength(EXPECTED.shardCount)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(rows.length)
    expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    for (const [index, file] of files.entries()) {
      const records = shardRows.get(file.path)
      expect(records).toHaveLength(file.records)
      expect(records[0].colUsageId).toBe(file.firstColUsageId)
      expect(records.at(-1).colUsageId).toBe(file.lastColUsageId)
      expect(records.every((row, rowIndex) => rowIndex === 0 || compare(records[rowIndex - 1].colUsageId, row.colUsageId) < 0)).toBe(true)
      if (index) expect(compare(files[index - 1].lastColUsageId, file.firstColUsageId)).toBe(-1)
    }
  })

  it('uses exact evidence only and keeps ITIS-only applicable species separate', () => {
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(rows.filter((row) => row.status === 'synonymCurrentNameRedirect').every((row) => row.matchedSynonyms.length > 0 && row.matchedSynonyms.every((synonym) => normalizeScientificName(synonym.scientificName) === row.exactMatchName))).toBe(true)
    expect(rows.filter((row) => row.status === 'ambiguous').every((row) => row.candidates.length > 1)).toBe(true)
    expect(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row))).toBe(true)
    const evidenced = new Set(rows.filter((row) => row.currentName).map((row) => row.currentName.tsn))
    for (const row of rows.filter((row) => row.status === 'ambiguous')) for (const candidate of row.candidates) evidenced.add(candidate.currentName.tsn)
    expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid' && !evidenced.has(row.currentName.tsn))).toBe(true)
    expect(upstream.length + evidenced.size).toBe(descriptor.counts.itisApplicableCurrentSpecies)
  })

  it('pins descriptor and delivery inventory bytes without a runtime change', () => {
    expect(ledger.output.descriptor).toEqual({ path: 'data/packages/invertebrata/molluscs-brachiopods/nomenclature/itis-mollusca-brachiopoda-tsn-sidecar.json', bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) })
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
    expect(ledger.deliveryContract.runtimeChange).toContain('no formal runtime')
  })
})
