import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const expected = [
  {
    packageId: 'actinopterygii', fileStem: 'itis-actinopterygii', roots: ['8VR36'], itis: ['161061', 'Actinopterygii', 'Superclass'],
    counts: { total: 35928, accepted: 24266, synonymCurrentNameRedirect: 356, ambiguous: 14, unmatched: 11292, itisCurrentSpecies: 28231, itisUpstreamOnly: 3732 }, files: 23, upstreamFiles: 1,
  },
  {
    packageId: 'chondrichthyes', fileStem: 'itis-chondrichthyes', roots: ['8X6G5'], itis: ['159785', 'Chondrichthyes', 'Class'],
    counts: { total: 1359, accepted: 769, synonymCurrentNameRedirect: 18, ambiguous: 1, unmatched: 571, itisCurrentSpecies: 963, itisUpstreamOnly: 183 }, files: 1, upstreamFiles: 1,
  },
  {
    packageId: 'early-fishes', fileStem: 'itis-agnatha-myxini', roots: ['KTXJW', '6225G'], itis: ['914178', 'Agnatha', 'Infraphylum'],
    counts: { total: 141, accepted: 92, synonymCurrentNameRedirect: 3, ambiguous: 0, unmatched: 46, itisCurrentSpecies: 112, itisUpstreamOnly: 17 }, files: 1, upstreamFiles: 1,
  },
]

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compareCodeUnits = (left, right) => left < right ? -1 : left > right ? 1 : 0
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const readJsonlGzip = (path) => gunzipSync(readFileSync(path)).toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)

describe('ITIS fish exact sidecars', () => {
  for (const definition of expected) it(`${definition.packageId} pins its COL union and ITIS root`, () => {
    const base = join(ROOT, 'data', 'packages', 'vertebrata', definition.packageId, 'nomenclature')
    const descriptorPath = join(base, `${definition.fileStem}-sidecar.json`)
    const ledgerPath = join(ROOT, 'data', 'sources', `${definition.fileStem}-sidecar-import-ledger.json`)
    const descriptorBytes = readFileSync(descriptorPath)
    const descriptor = JSON.parse(descriptorBytes)
    const ledger = readJson(ledgerPath)
    expect(descriptor.packageId).toBe(definition.packageId)
    expect(descriptor.scope.colRootUsageIds).toEqual(definition.roots)
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(definition.counts.total)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(definition.counts.total)
    expect(descriptor.sources.itis).toMatchObject({ rootTsn: definition.itis[0], scientificName: definition.itis[1], rank: definition.itis[2], license: 'CC0-1.0' })
    expect(descriptor.counts).toMatchObject(definition.counts)
    expect(descriptor.colUsageIdLocator.files).toHaveLength(definition.files)
    expect(descriptor.upstreamOnly.files).toHaveLength(definition.upstreamFiles)
    expect(ledger.generatedFrom.itisDatabaseSha256).toBe('ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719')
    expect(ledger.scopeAudit.itisRoot).toMatchObject({ tsn: definition.itis[0], scientificName: definition.itis[1], rank: definition.itis[2], usage: 'valid' })
    expect(ledger.outputs.descriptor.sha256).toBe(sha256(descriptorBytes))
  })

  for (const definition of expected) it(`${definition.packageId} rows are exact, range-addressable and complete`, () => {
    const base = join(ROOT, 'data', 'packages', 'vertebrata', definition.packageId, 'nomenclature')
    const descriptor = readJson(join(base, `${definition.fileStem}-sidecar.json`))
    const rows = []
    for (const file of descriptor.colUsageIdLocator.files) {
      const path = join(ROOT, ...file.path.split('/'))
      const bytes = readFileSync(path)
      const records = readJsonlGzip(path)
      expect(bytes.length).toBe(file.bytes)
      expect(sha256(bytes)).toBe(file.sha256)
      expect(records).toHaveLength(file.records)
      expect(records[0].colUsageId).toBe(file.firstColUsageId)
      expect(records.at(-1).colUsageId).toBe(file.lastColUsageId)
      expect(records.every((record) => ['accepted', 'synonym-current-name-redirect', 'ambiguous', 'unmatched'].includes(record.status))).toBe(true)
      for (let index = 1; index < records.length; index += 1) expect(compareCodeUnits(records[index - 1].colUsageId, records[index].colUsageId)).toBeLessThan(0)
      rows.push(...records)
    }
    expect(rows).toHaveLength(definition.counts.total)
    expect(new Set(rows.map((record) => record.colUsageId)).size).toBe(definition.counts.total)
    expect(Object.fromEntries(['accepted', 'synonym-current-name-redirect', 'ambiguous', 'unmatched'].map((status) => [status, rows.filter((record) => record.status === status).length]))).toEqual({
      accepted: definition.counts.accepted,
      'synonym-current-name-redirect': definition.counts.synonymCurrentNameRedirect,
      ambiguous: definition.counts.ambiguous,
      unmatched: definition.counts.unmatched,
    })
    const upstream = descriptor.upstreamOnly.files.flatMap((file) => readJsonlGzip(join(ROOT, ...file.path.split('/'))))
    expect(upstream).toHaveLength(definition.counts.itisUpstreamOnly)
    expect(upstream.every((record) => record.colUsageId === null && record.currentName?.tsn)).toBe(true)
  })

  it('keeps nested Myxini in the early-fishes union rather than double-counting it', () => {
    const descriptor = readJson(join(ROOT, 'data', 'packages', 'vertebrata', 'early-fishes', 'nomenclature', 'itis-agnatha-myxini-sidecar.json'))
    expect(descriptor.scope.rootUnion).toMatch(/selected once/u)
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(141)
    expect(descriptor.sources.itis.rootTsn).toBe('914178')
  })
})
