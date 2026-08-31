import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(packRoot, 'itis-orthonectida-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-orthonectida-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compareIds = (left, right) => left < right ? -1 : left > right ? 1 : 0

function readShard(file, deterministic = true) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))
}

describe('ITIS Orthonectida exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rows = files.flatMap((file) => readShard(file))
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file))

  it('pins the COL and ITIS roots and exact outcome totals', () => {
    expect(descriptor.scope.colRootUsageId).toBe('CVJLH')
    expect(descriptor.scope.colRootScientificName).toBe('Orthonectida')
    expect(descriptor.sources.itis.rootTsn).toBe('57409')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(24)
    expect(descriptor.counts).toMatchObject({ total: 24, accepted: 22, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 2, itisCurrentSpecies: 25, itisSpeciesSynonymLinks: 7, itisUpstreamOnly: 3 })
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
  })

  it('addresses every COL species once with strict evidence only', () => {
    expect(rows).toHaveLength(24)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(24)
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.every((row, index) => index === 0 || compareIds(rows[index - 1].colUsageId, row.colUsageId) < 0)).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted')).toHaveLength(22)
    expect(rows.filter((row) => row.status === 'unmatched').map((row) => row.exactMatchName)).toEqual(['Intoshia major', 'Rhopalura gigas'])
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
  })

  it('keeps the three ITIS-only species separate and records byte-exact delivery', () => {
    expect(upstream).toHaveLength(3)
    expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'valid')).toBe(true)
    const evidenced = new Set(rows.filter((row) => row.currentName).map((row) => row.currentName.tsn))
    expect(upstream.every((row) => !evidenced.has(row.currentName.tsn))).toBe(true)
    expect(upstream.length + evidenced.size).toBe(descriptor.counts.itisCurrentSpecies)
    expect(ledger.output.descriptor.bytes).toBe(descriptorBytes.length)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
