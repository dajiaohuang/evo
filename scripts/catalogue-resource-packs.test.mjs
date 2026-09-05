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

  it('publishes every Other Animals ITIS summary and native-full file inventory', () => {
    const descriptor = collection.packs.find((pack) => pack.packageId === 'other-animals')
    expect(descriptor).toMatchObject({ acceptedSpeciesCount: 99161, fileCount: 4, extensionCount: 52, extensionFileCount: 248 })
    const manifest = JSON.parse(readFileSync(join(resourcePacksRoot, descriptor.manifestPath), 'utf8'))
    const extension = manifest.extensions.find((candidate) => candidate.id === 'itis-phoronida-tsn-crosswalk')
    expect(extension).toMatchObject({
      provider: 'Integrated Taxonomic Information System',
      counts: { eligible: 19, records: 19, accepted: 11, redirects: 8, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99142 },
      deliveryProfiles: {
        'web-light': { payload: 'summary-only', files: [], records: 0 },
        'native-full': { payload: 'complete', files: ['other-animals/itis-phoronida-sidecar-0000.jsonl.gz'], records: 19 },
      },
    })
    expect(extension.files).toHaveLength(1)
    expect(extension.files[0]).toMatchObject({ path: 'other-animals/itis-phoronida-sidecar-0000.jsonl.gz', records: 19, minColId: '4GRZF', maxColId: '65364', role: 'col-partition' })

    expect(manifest.extensions.find((candidate) => candidate.id === 'itis-nematoda-tsn-crosswalk')).toMatchObject({
      counts: { eligible: 19604, records: 20849, accepted: 1899, redirects: 36, ambiguous: 1, unmatched: 17668, upstreamOnly: 1245, nonApplicable: 79557 },
      deliveryProfiles: {
        'web-light': { payload: 'summary-only', files: [], records: 0 },
        'native-full': { payload: 'complete', records: 20849 },
      },
    })
    expect(manifest.extensions.find((candidate) => candidate.id === 'itis-annelida-tsn-crosswalk')).toMatchObject({
      counts: { eligible: 18982, records: 24074, accepted: 4301, redirects: 122, ambiguous: 1, unmatched: 14558, upstreamOnly: 5092, nonApplicable: 80179 },
      deliveryProfiles: {
        'web-light': { payload: 'summary-only', files: [], records: 0 },
        'native-full': { payload: 'complete', records: 24074 },
      },
    })
    const worms = manifest.extensions.find((candidate) => candidate.id === 'worms-annelida-archive-crosswalk')
    expect(worms).toMatchObject({
      counts: { total: 18982, records: 20072, accepted: 18791, redirect: 29, ambiguous: 0, unmatched: 160, withheld: 2, upstreamOnly: 1090 },
      scope: { colRootUsageId: 'NN', wormsRootId: '882', excludedPackageRemainder: 80179 },
      deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0 }, 'native-full': { payload: 'complete', records: 20072 } },
    })
    expect(worms.files).toHaveLength(8)
    expect(worms.upstreamOnlyFiles).toHaveLength(1)
    for (const file of [...worms.files, ...worms.upstreamOnlyFiles]) {
      const bytes = readFileSync(join(resourcePacksRoot, file.path))
      expect(sha256(bytes)).toBe(file.sha256)
      expect(JSON.parse(gunzipSync(bytes))).toHaveLength(file.records)
    }
    const nemys = manifest.extensions.find((candidate) => candidate.id === 'worms-nematoda2302-archive-crosswalk')
    expect(nemys).toMatchObject({
      counts: { total: 19604, accepted: 19554, ambiguous: 1, unmatched: 49, upstreamOnly: 1256, records: 20860 },
      source: { license: 'cc by', embeddedMetadata: { doi: '10.14284/366', license: 'CC-BY' } },
      deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: 20860 } },
    })
    expect(nemys.files).toHaveLength(22)
    expect(nemys.upstreamOnlyFiles).toHaveLength(1)
    for (const file of [...nemys.files, ...nemys.upstreamOnlyFiles]) {
      const bytes = readFileSync(join(resourcePacksRoot, file.path))
      expect(sha256(bytes)).toBe(file.sha256)
      expect(JSON.parse(gunzipSync(bytes))).toHaveLength(file.records)
    }
    const nematoda = manifest.extensions.find((candidate) => candidate.id === 'worms-nematoda-archive-crosswalk')
    expect(nematoda).toMatchObject({
      provider: 'World Register of Marine Species via ChecklistBank',
      counts: { total: 19604, records: 21708, accepted: 19525, redirect: 1, ambiguous: 4, unmatched: 72, withheld: 2, upstreamOnly: 2104 },
      deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0 }, 'native-full': { payload: 'complete', records: 21708 } },
    })
    expect(nematoda.files).toHaveLength(8)
    expect(nematoda.upstreamOnlyFiles).toHaveLength(1)
    for (const file of [...nematoda.files, ...nematoda.upstreamOnlyFiles]) {
      const bytes = readFileSync(join(resourcePacksRoot, file.path))
      expect(sha256(bytes)).toBe(file.sha256)
      expect(JSON.parse(gunzipSync(bytes))).toHaveLength(file.records)
    }
    for (const [id, expected] of Object.entries({
      'worms-oligochaeta-archive-crosswalk': { total: 4403, accepted: 4350, unmatched: 53, upstreamOnly: 214, files: 6, upstreamFiles: 1, license: 'CC-BY-4.0' },
      'worms-polychaeta-archive-crosswalk': { total: 14430, accepted: 14305, unmatched: 125, upstreamOnly: 179, files: 18, upstreamFiles: 1, license: 'cc by' },
      'worms-chaetognatha-archive-crosswalk': { total: 132, accepted: 132, unmatched: 0, upstreamOnly: 0, files: 1, upstreamFiles: 0, license: 'cc by' },
      'worms-rhombozoa-archive-crosswalk': { total: 122, accepted: 122, unmatched: 0, upstreamOnly: 0, files: 1, upstreamFiles: 0, license: 'cc by' },
      'worms-loricifera-archive-crosswalk': { total: 46, accepted: 46, unmatched: 0, upstreamOnly: 1, files: 1, upstreamFiles: 1, license: 'cc by' },
      'worms-gnathostomulida-archive-crosswalk': { total: 100, accepted: 100, unmatched: 0, upstreamOnly: 0, files: 1, upstreamFiles: 0, license: 'cc by' },
      'worms-priapulida-archive-crosswalk': { total: 23, accepted: 23, unmatched: 0, upstreamOnly: 0, files: 1, upstreamFiles: 0, license: 'cc by' },
    })) {
      const archive = manifest.extensions.find((candidate) => candidate.id === id)
      expect(archive).toMatchObject({
        provider: 'World Register of Marine Species via ChecklistBank',
        source: { license: expected.license },
        counts: { total: expected.total, accepted: expected.accepted, unmatched: expected.unmatched, upstreamOnly: expected.upstreamOnly },
        deliveryProfiles: {
          'web-light': { records: 0, files: [] },
          'native-full': { records: expected.total + expected.upstreamOnly },
        },
      })
      expect(archive.files).toHaveLength(expected.files)
      expect(archive.upstreamOnlyFiles).toHaveLength(expected.upstreamFiles)
      for (const file of [...archive.files, ...archive.upstreamOnlyFiles]) {
        const bytes = readFileSync(join(resourcePacksRoot, file.path))
        expect(sha256(bytes)).toBe(file.sha256)
        expect(JSON.parse(gunzipSync(bytes))).toHaveLength(file.records)
      }
    }
  })
})
