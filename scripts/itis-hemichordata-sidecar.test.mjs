import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourceRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(resourceRoot, 'itis-hemichordata-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-hemichordata-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compare = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

function readShard(file) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))
}

describe('ITIS Hemichordata exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap(readShard)
  const upstream = descriptor.upstreamOnly.files.flatMap(readShard)

  it('covers the package-owned COL26.8 Hemichordata partition once', () => {
    expect(descriptor.packageId).toBe('other-animals')
    expect(descriptor.scope.colRootUsageId).toBe('4R')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(132)
    expect(descriptor.scope.colRootStrictAcceptedSpecies).toBe(139)
    expect(descriptor.scope.colRootExcludedFromPackage).toBe(7)
    expect(rows).toHaveLength(132)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(132)
    expect(rows.every((row, index) => index === 0 || compare(rows[index - 1].colUsageId, row.colUsageId) < 0)).toBe(true)
  })

  it('uses exact ITIS evidence and retains all ITIS-only species', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('158616')
    expect(descriptor.counts).toMatchObject({ total: 132, accepted: 132, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 139, itisSpeciesSynonymLinks: 41, itisUpstreamOnly: 7 })
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.every((row) => row.status === 'accepted' && normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(upstream).toHaveLength(7)
    expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid')).toBe(true)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
