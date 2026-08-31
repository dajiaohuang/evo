import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync, gzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-choanoflagellatea-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-choanoflagellatea-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const deterministicGzip = (bytes) => { const compressed = gzipSync(bytes, { level: 9, mtime: 0 }); compressed[9] = 255; return compressed }

function readShard(file) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

describe('ITIS Choanoflagellatea zero-root sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))

  it('records missing exact roots without inventing a COL partition', () => {
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope.packageRootUsageIds).toEqual(['C', 'Z'])
    expect(descriptor.scope.colRootScientificName).toBe('Choanoflagellatea')
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(0)
    expect(descriptor.scope.packageStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.rootBoundaryAudit.colExactNameCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.itisExactNameCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.selectedColRoot).toBeNull()
    expect(descriptor.rootBoundaryAudit.selectedItisRoot).toBeNull()
    expect(descriptor.rootBoundaryAudit.itisNearbyNameCandidates).toEqual(expect.arrayContaining([expect.objectContaining({ tsn: 43811, scientific_name: 'Choanoflagellida', rank_name: 'Order' })]))
    expect(descriptor.counts).toEqual({ total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
    expect(descriptor.colUsageIdLocator.files.flatMap(readShard)).toEqual([])
    expect(descriptor.upstreamOnly.files.flatMap(readShard)).toEqual([])
  })

  it('keeps Pages summary-only and native-full complete', () => {
    const nativeFiles = [...descriptor.colUsageIdLocator.files, ...descriptor.upstreamOnly.files]
    expect(descriptor.deliveryProfiles['web-light'].files).toEqual([])
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual(nativeFiles.map((file) => file.path))
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(descriptor.colUsageIdLocator.files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
  })
})
