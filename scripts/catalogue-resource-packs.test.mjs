import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const releaseRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const resourcePacksRoot = join(releaseRoot, 'resource-packs')
const collection = JSON.parse(readFileSync(join(resourcePacksRoot, 'manifest.json'), 'utf8'))
const lpsnCrosswalkPath = join(repositoryRoot, 'data', 'sources', 'archaea-lpsn-crosswalk-col26.8.json')
const lpsnCrosswalkBytes = readFileSync(lpsnCrosswalkPath)
const lpsnCrosswalk = JSON.parse(lpsnCrosswalkBytes.toString('utf8'))
const sources = JSON.parse(readFileSync(join(releaseRoot, 'registry', 'sources.json'), 'utf8'))
const sourceIds = new Set(sources.map((source) => String(source.datasetId)))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('COL26.8 static nomenclatural resource packs', () => {
  it('materializes the seven non-empty residual owners without changing official fields', () => {
    expect(collection.packageCount).toBe(7)
    expect(collection.acceptedSpeciesCount).toBe(363160)
    expect(collection.packs.map((pack) => pack.packageId).sort()).toEqual([
      'archaea', 'bacteria', 'fungi', 'other-animals', 'other-plants', 'protists-chromists', 'viruses',
    ])

    let total = 0
    for (const descriptor of collection.packs) {
      const manifestBytes = readFileSync(join(resourcePacksRoot, descriptor.manifestPath))
      expect(manifestBytes.byteLength).toBe(descriptor.manifestBytes)
      expect(sha256(manifestBytes)).toBe(descriptor.manifestSha256)
      const manifest = JSON.parse(manifestBytes.toString('utf8'))
      expect(manifest.packageType).toBe('static-nomenclatural-resource-pack')
      expect(manifest.fields).toEqual(['id', 'parentId', 'scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'])
      let packageRecords = 0
      for (const file of manifest.files) {
        const compressed = readFileSync(join(resourcePacksRoot, file.path))
        const source = gunzipSync(compressed)
        expect(compressed.byteLength).toBe(file.bytes)
        expect(source.byteLength).toBe(file.sourceBytes)
        expect(sha256(compressed)).toBe(file.sha256)
        expect(sha256(source)).toBe(file.sourceSha256)
        expect(Buffer.compare(Buffer.from(deterministicGzip(source, { level: 9 })), compressed)).toBe(0)
        const records = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
        expect(records).toHaveLength(file.records)
        for (const record of records) {
          expect(Object.keys(record)).toEqual(manifest.fields)
          expect(record.rank).toBe('species')
          expect(record.status).toBe('accepted')
          expect(record.id).toBeTruthy()
          expect(record.parentId).toBeTruthy()
          expect(record.scientificName).toBeTruthy()
          if (record.sourceDatasetId !== null) expect(sourceIds.has(String(record.sourceDatasetId))).toBe(true)
        }
        packageRecords += records.length
      }
      expect(packageRecords).toBe(manifest.acceptedSpeciesCount)
      expect(packageRecords).toBe(descriptor.acceptedSpeciesCount)
      total += packageRecords
    }
    expect(total).toBe(363160)
  }, 120000)

  it('publishes one deterministic, release-pinned LPSN identifier for every Archaea species', () => {
    const descriptor = collection.packs.find((pack) => pack.packageId === 'archaea')
    expect(descriptor).toMatchObject({
      acceptedSpeciesCount: 790,
      fileCount: 1,
      extensionCount: 1,
      extensionFileCount: 1,
      extensionCompressedBytes: 8116,
      extensionSourceBytes: 115491,
    })

    const manifest = JSON.parse(readFileSync(join(resourcePacksRoot, descriptor.manifestPath), 'utf8'))
    expect(manifest.acceptedSpeciesCount).toBe(790)
    expect(manifest.files).toHaveLength(1)
    expect(manifest.files[0]).toMatchObject({
      path: 'archaea/species-000.jsonl.gz',
      records: 790,
      bytes: 17365,
      sha256: '0e6d527a5bad958d618969ba6dbe8c23106e0116b2ac2415ceff701264a9ef95',
    })
    expect(manifest.extensions).toHaveLength(1)
    const extension = manifest.extensions[0]
    expect(extension).toMatchObject({
      id: 'lpsn-identifiers',
      recordType: 'external-name-identifier-crosswalk',
      provider: 'LPSN',
      eligibility: 'sourceDatasetId=2015 for every accepted species in this pack',
      counts: { eligible: 790, resolved: 790, withheld: 0 },
      fields: ['colId', 'lpsnId', 'lpsnUrl', 'mappingBasis', 'status'],
      totalCompressedBytes: 8116,
      totalSourceBytes: 115491,
    })
    expect(extension.source).toMatchObject({
      catalogueRelease: 'COL26.8',
      catalogueReleaseDate: '2026-08-20',
      checklistBankDatasetKey: 316115,
      sourceDatasetKey: 2015,
      sourceDatasetVersion: '2026-07-26',
      retrievedAt: '2026-08-31',
      license: 'CC-BY-SA-4.0',
      canonicalCrosswalkSha256: sha256(lpsnCrosswalkBytes),
      requestIntegrity: {
        algorithm: 'sha256',
        requestCount: 790,
        requestLedgerSha256: lpsnCrosswalk.integrity.requestLedgerSha256,
      },
    })

    expect(lpsnCrosswalk.counts).toEqual({ eligible: 790, resolved: 790, withheld: 0 })
    expect(lpsnCrosswalk.records).toHaveLength(790)
    const requestLedgerBytes = Buffer.from(`${lpsnCrosswalk.records.map((record) => JSON.stringify({
      colId: record.colId,
      requestUrl: lpsnCrosswalk.source.endpointTemplate.replace('{colId}', encodeURIComponent(record.colId)),
      sourceResponseSha256: record.sourceResponseSha256,
    })).join('\n')}\n`, 'utf8')
    expect(sha256(requestLedgerBytes)).toBe('28c037e4414652643de7d0980db277fe9a72ea545c2f63595370d4169cdb5a3e')

    const species = gunzipSync(readFileSync(join(resourcePacksRoot, manifest.files[0].path))).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
    const file = extension.files[0]
    const compressed = readFileSync(join(resourcePacksRoot, file.path))
    const source = gunzipSync(compressed)
    const records = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
    expect(compressed.byteLength).toBe(file.bytes)
    expect(source.byteLength).toBe(file.sourceBytes)
    expect(sha256(compressed)).toBe(file.sha256)
    expect(sha256(source)).toBe(file.sourceSha256)
    expect(Buffer.compare(Buffer.from(deterministicGzip(source, { level: 9 })), compressed)).toBe(0)
    expect(records).toHaveLength(790)
    expect(records.map((record) => record.colId)).toEqual(species.map((record) => record.id))
    expect(new Set(records.map((record) => record.lpsnId)).size).toBe(790)
    for (const record of records) {
      expect(Object.keys(record)).toEqual(extension.fields)
      expect(record.lpsnId).toMatch(/^\d+$/)
      expect(record.lpsnUrl).toBe(`https://lpsn.dsmz.de/taxon/${record.lpsnId}`)
      expect(record.mappingBasis).toBe('checklistbank-source-record')
      expect(record.status).toBe('resolved')
    }

    for (const other of collection.packs.filter((pack) => !['archaea', 'bacteria', 'fungi', 'viruses', 'other-animals', 'other-plants', 'protists-chromists'].includes(pack.packageId))) {
      const otherManifest = JSON.parse(readFileSync(join(resourcePacksRoot, other.manifestPath), 'utf8'))
      expect(otherManifest.extensions).toBeUndefined()
    }
  })
})
