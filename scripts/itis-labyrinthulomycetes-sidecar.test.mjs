import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync, gzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packRoot, 'itis-labyrinthulomycetes-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-labyrinthulomycetes-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const deterministicGzip = (bytes) => {
  const compressed = gzipSync(bytes, { level: 9, mtime: 0 })
  compressed[9] = 255
  return compressed
}

function verifyEmpty(file) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.toString('utf8')).toBe('\n')
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
}

describe('ITIS Labyrinthulomycetes zero-root overlap audit', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))

  it('does not substitute the absent exact roots', () => {
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope).toMatchObject({ colRootUsageId: null, colRootScientificName: 'Labyrinthulomycetes', colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: 61518 })
    expect(descriptor.rootBoundaryAudit.colExactNameCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.itisExactNameCandidates).toEqual([])
    expect(descriptor.rootBoundaryAudit.colNearbyNameCandidates).toEqual([{ id: 'DJ', scientificName: 'Labyrinthulea', rank: 'class', status: 'accepted', parentId: '622CB' }])
    expect(descriptor.rootBoundaryAudit.itisNearbyNameCandidates).toEqual([{ tsn: 46076, scientific_name: 'Labyrinthulea', rank_name: 'Class', name_usage: 'valid', parent_tsn: 46067 }])
    expect(descriptor.rootBoundaryAudit.itisNearbyParent).toEqual({ tsn: 46067, scientific_name: 'Mycetozoa', rank_name: 'Subphylum', name_usage: 'valid' })
    expect(descriptor.rootBoundaryAudit.existingPartitionOverlap.bigyra.colRoot).toEqual({ id: '622CB', scientificName: 'Bigyra', rank: 'phylum', status: 'accepted', parentId: 'C' })
    expect(descriptor.counts).toEqual({ total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 })
  })

  it('keeps Pages summary-only and native-full byte-addressed', () => {
    const files = [...descriptor.colUsageIdLocator.files, ...descriptor.upstreamOnly.files]
    expect(descriptor.deliveryProfiles['web-light']).toEqual({ payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 })
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual(files.map((file) => file.path))
    files.forEach(verifyEmpty)
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
    expect(ledger.output.colUsageIdShards).toEqual(descriptor.colUsageIdLocator.files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
  })
})
