import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const LEDGER_PATH = join(ROOT, 'data/sources/itis-reptilia-authority-import-ledger.json')
const CANONICAL_PATH = join(ROOT, 'data/sources/itis-reptilia-authority-crosswalk-col26.8.json.gz')
const PACKAGE_ROOTS = {
  'turtles-lepidosaurs': 'data/packages/reptilia/turtles-lepidosaurs/nomenclature',
  'crocodylomorphs-birds': 'data/packages/archosauria/crocodylomorphs-birds/nomenclature',
}

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const json = (bytes) => JSON.parse(bytes.toString('utf8'))
const lines = (bytes) => bytes.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
const codeUnitCompare = (left, right) => left < right ? -1 : left > right ? 1 : 0

const ledgerBytes = readFileSync(LEDGER_PATH)
const ledger = json(ledgerBytes)
const canonicalBytes = readFileSync(CANONICAL_PATH)
const canonical = json(gunzipSync(canonicalBytes))

describe('ITIS Reptilia authority import contract', () => {
  it('pins the mixed-package boundary and source provenance', () => {
    expect(ledger.importType).toBe('COL26.8-to-ITIS-exact-reptilia-nomenclatural-sidecars')
    expect(ledger.scopeAudit.colStrictAcceptedSpecies).toBe(12649)
    expect(ledger.scopeAudit.packageCounts['turtles-lepidosaurs'].total).toBe(12622)
    expect(ledger.scopeAudit.packageCounts['crocodylomorphs-birds'].total).toBe(27)
    expect(ledger.scopeAudit.avesExcluded).toBe(11044)
    expect(ledger.scopeAudit.itisRoot).toMatchObject({ tsn: '173747', scientificName: 'Reptilia', rank: 'Class', usage: 'valid' })
    expect(ledger.scopeAudit.crocodyliaRootTsn).toBe('551734')
    expect(ledger.totals).toMatchObject({ total: 12649, accepted: 9831, synonymCurrentNameRedirect: 71, ambiguous: 3, unmatched: 2744, itisCurrentSpecies: 10550, itisSpeciesSynonymLinks: 4243, itisUpstreamOnly: 655 })
    expect(ledger.generatedFrom.itisDatabaseSha256).toBe('ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719')
    expect(canonical.sources.itis.license).toBe('CC0-1.0')
    expect(canonical.sources.col.releaseAlias).toBe('COL26.8')
  })

  it('pins a deterministic canonical gzip and a complete disjoint COL partition', () => {
    expect(canonicalBytes.length).toBe(ledger.canonical.bytes)
    expect(sha256(canonicalBytes)).toBe(ledger.canonical.sha256)
    expect(canonical.records).toHaveLength(12649)
    expect(canonical.records.map((record) => record.colUsageId)).toEqual([...canonical.records].map((record) => record.colUsageId).sort(codeUnitCompare))
    expect(new Set(canonical.records.map((record) => record.colUsageId)).size).toBe(12649)
    expect(canonical.records.every((record) => ['turtles-lepidosaurs', 'crocodylomorphs-birds'].includes(record.packageId))).toBe(true)
    expect(canonical.records.filter((record) => record.packageId === 'turtles-lepidosaurs')).toHaveLength(12622)
    expect(canonical.records.filter((record) => record.packageId === 'crocodylomorphs-birds')).toHaveLength(27)
    expect(canonical.records.filter((record) => record.scope.includes('Aves'))).toHaveLength(27)
    expect(canonical.records.filter((record) => record.status === 'unmatched')).toHaveLength(2744)
    expect(sha256(Buffer.from(`${canonical.records.map((record) => JSON.stringify(record)).join('\n')}\n`))).toBe(canonical.integrity.recordLedgerSha256)
  })

  for (const [packageId, relativeRoot] of Object.entries(PACKAGE_ROOTS)) {
    it(`${packageId} exposes only non-overlapping range shards and an independent upstream-only shard`, () => {
      const result = ledger.outputs[packageId]
      const descriptorPath = join(ROOT, relativeRoot, 'itis-tsn-sidecar.json')
      const descriptorBytes = readFileSync(descriptorPath)
      const descriptor = json(descriptorBytes)
      expect(sha256(descriptorBytes)).toBe(result.descriptor.sha256)
      expect(descriptor.packageId).toBe(packageId)
      expect(descriptor.counts).toEqual(result.counts)
      expect(descriptor.colUsageIdLocator.files).toHaveLength(result.colUsageIdShards.length)
      const records = descriptor.colUsageIdLocator.files.flatMap((file) => {
        const bytes = readFileSync(join(ROOT, file.path))
        expect(bytes.length).toBe(file.bytes)
        expect(sha256(bytes)).toBe(file.sha256)
        const payload = lines(gunzipSync(bytes))
        expect(payload).toHaveLength(file.records)
        expect(payload[0].colUsageId).toBe(file.firstColUsageId)
        expect(payload.at(-1).colUsageId).toBe(file.lastColUsageId)
        expect(payload.map((record) => record.colUsageId)).toEqual([...payload].map((record) => record.colUsageId).sort(codeUnitCompare))
        return payload
      })
      expect(records).toHaveLength(descriptor.counts.total)
      expect(new Set(records.map((record) => record.colUsageId)).size).toBe(records.length)
      for (let index = 1; index < descriptor.colUsageIdLocator.files.length; index += 1) {
        const previous = descriptor.colUsageIdLocator.files[index - 1]
        const current = descriptor.colUsageIdLocator.files[index]
        expect(codeUnitCompare(previous.lastColUsageId, current.firstColUsageId)).toBe(-1)
      }
      const upstream = descriptor.upstreamOnly.files[0]
      const upstreamBytes = readFileSync(join(ROOT, upstream.path))
      expect(sha256(upstreamBytes)).toBe(upstream.sha256)
      expect(lines(gunzipSync(upstreamBytes))).toHaveLength(upstream.records)
      expect(descriptor.integration.androidIosFull).toContain('byte-for-byte')
      expect(descriptor.integration.pagesLight).toContain('omit')
    })
  }
})
