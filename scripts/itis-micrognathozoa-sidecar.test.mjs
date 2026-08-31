import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-micrognathozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-micrognathozoa-sidecar-import-ledger.json')
const sha256 = (value) => createHash('sha256').update(value).digest('hex')

function rows(file) {
  const packed = readFileSync(join(root, file.path))
  expect(packed.length).toBe(file.bytes)
  expect(sha256(packed)).toBe(file.sha256)
  const source = gunzipSync(packed)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(packed)
  return source.toString('utf8').trimEnd() ? source.toString('utf8').trimEnd().split('\n').map(JSON.parse) : []
}

describe('ITIS Micrognathozoa exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const primary = rows(descriptor.colUsageIdLocator.files[0])
  const upstream = rows(descriptor.upstreamOnly.files[0])

  it('covers the exact one-species COL26.8 scope through its sole immutable range shard', () => {
    expect(descriptor.packageId).toBe('other-animals')
    expect(descriptor.scope).toMatchObject({ colRootUsageId: '54', colStrictAcceptedSpecies: 1, packageStrictAcceptedSpecies: 99161, packageOutOfScopeStrictAcceptedSpecies: 99160 })
    expect(descriptor.colUsageIdLocator.files).toHaveLength(1)
    expect(primary).toHaveLength(1)
    expect(primary[0].colUsageId).toBe('6QDGQ')
    expect(primary[0].status).toBe('accepted')
  })

  it('preserves only exact current ITIS evidence and a complete empty upstream partition', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('808373')
    expect(descriptor.counts).toMatchObject({ total: 1, accepted: 1, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 1, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
    expect(primary[0].exactMatchName).toBe(colExactMatchName({ scientificName: primary[0].colScientificName, authorship: primary[0].colAuthorship }))
    expect(normalizeScientificName(primary[0].currentName.scientificName)).toBe(primary[0].exactMatchName)
    expect(upstream).toEqual([])
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
  })

  it('pins the descriptor and delivery inventory in the import ledger', () => {
    expect(ledger.output.descriptor).toEqual({ path: descriptorPath.slice(root.length + 1).replaceAll('\\', '/'), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) })
    expect(ledger.output.colUsageIdShards).toEqual(descriptor.colUsageIdLocator.files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard')
  })
})
