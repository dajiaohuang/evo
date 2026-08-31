import { createHash } from 'node:crypto'
import { cpSync, mkdtempSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { afterAll, describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { buildBacteriaLpsnSidecar } from './build-bacteria-lpsn-sidecar.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourcePacksRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const crosswalkPath = join(repositoryRoot, 'data', 'sources', 'bacteria-lpsn-crosswalk-col26.8.json.gz')
const crosswalkBytes = readFileSync(crosswalkPath)
const crosswalkSourceBytes = gunzipSync(crosswalkBytes)
const crosswalk = JSON.parse(crosswalkSourceBytes.toString('utf8'))
const temporaryRoots = []
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

function ndjson(path) {
  return gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

afterAll(() => {
  for (const root of temporaryRoots) rmSync(root, { recursive: true, force: true })
})

describe('COL26.8 Bacteria LPSN identifier sidecar', () => {
  it('partitions every accepted species by pinned source eligibility without name guessing', () => {
    expect(crosswalk).toMatchObject({
      schemaVersion: 1,
      crosswalkType: 'release-pinned-external-name-identifier-crosswalk',
      source: {
        provider: 'LPSN',
        catalogueRelease: 'COL26.8',
        catalogueReleaseDate: '2026-08-20',
        checklistBankDatasetKey: 316115,
        sourceDatasetKey: 2015,
        sourceDatasetVersion: '2026-07-26',
        retrievedAt: '2026-08-31',
        license: 'CC-BY-SA-4.0',
      },
      counts: {
        acceptedSpecies: 26397,
        eligible: 21570,
        resolved: 21570,
        withheld: 4827,
        withheldIneligible: 4827,
        withheldEligible: 0,
      },
      integrity: {
        algorithm: 'sha256',
        requestCount: 21570,
        requestLedgerSha256: '6e21dfd5bc013c2c3edb1a8235bb2cc386d19a469efc7e083fda3efe6952c873',
      },
    })
    expect(crosswalkBytes.byteLength).toBe(1094500)
    expect(sha256(crosswalkBytes)).toBe('68998c8ff4e4a3ef563411ae381398d06a471b242b51e40321cad20f0bb4db9a')
    expect(crosswalkSourceBytes.byteLength).toBe(6886097)
    expect(sha256(crosswalkSourceBytes)).toBe('d3e390dbeb154a8af9f813b188e71dff62146f152336f9c8d1d105754b05f8b9')
    expect(Buffer.from(deterministicGzip(crosswalkSourceBytes, { level: 9 }))).toEqual(crosswalkBytes)
    expect(crosswalk.records).toHaveLength(crosswalk.counts.resolved)
    expect(crosswalk.withheldRecords).toHaveLength(crosswalk.counts.withheld)
    expect(crosswalk.counts.resolved + crosswalk.counts.withheld).toBe(26397)
    expect(crosswalk.counts.withheld).toBe(crosswalk.counts.withheldIneligible + crosswalk.counts.withheldEligible)

    const membership = new Set()
    const responseHashes = new Map()
    for (const record of crosswalk.records) {
      expect(membership.has(record.colId)).toBe(false)
      expect(record.lpsnId).toMatch(/^\d+$/)
      expect(record.lpsnUrl).toBe(`https://lpsn.dsmz.de/taxon/${record.lpsnId}`)
      expect(record.mappingBasis).toBe('checklistbank-source-record')
      expect(record.status).toBe('resolved')
      expect(record.sourceResponseSha256).toMatch(/^[a-f0-9]{64}$/)
      membership.add(record.colId)
      responseHashes.set(record.colId, record.sourceResponseSha256)
    }
    for (const record of crosswalk.withheldRecords) {
      expect(membership.has(record.colId)).toBe(false)
      expect(['source-dataset-not-lpsn', 'missing-source-dataset-id', 'source-record-not-lpsn']).toContain(record.reason)
      membership.add(record.colId)
      if (record.reason === 'source-record-not-lpsn') {
        expect(record.sourceResponseSha256).toMatch(/^[a-f0-9]{64}$/)
        responseHashes.set(record.colId, record.sourceResponseSha256)
      }
    }
    expect(membership.size).toBe(26397)
    expect(new Set(crosswalk.records.map((record) => record.lpsnId)).size).toBe(21570)

    const species = ndjson(join(resourcePacksRoot, 'bacteria', 'species-000.jsonl.gz'))
    const eligible = species.filter((record) => String(record.sourceDatasetId) === '2015')
    const requestLedgerBytes = Buffer.from(`${eligible.map((record) => JSON.stringify({
      colId: record.id,
      requestUrl: crosswalk.source.endpointTemplate.replace('{colId}', encodeURIComponent(record.id)),
      sourceResponseSha256: responseHashes.get(record.id),
    })).join('\n')}\n`, 'utf8')
    expect(sha256(requestLedgerBytes)).toBe(crosswalk.integrity.requestLedgerSha256)
  })

  it('publishes resolved identifiers deterministically while leaving species and other packs unchanged', () => {
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-bacteria-lpsn-'))
    temporaryRoots.push(temporaryRoot)
    const outputRoot = join(temporaryRoot, 'resource-packs')
    mkdirSync(outputRoot, { recursive: true })
    cpSync(join(resourcePacksRoot, 'manifest.json'), join(outputRoot, 'manifest.json'))
    cpSync(join(resourcePacksRoot, 'bacteria'), join(outputRoot, 'bacteria'), { recursive: true })
    const collectionBefore = JSON.parse(readFileSync(join(outputRoot, 'manifest.json'), 'utf8'))
    const speciesBefore = readFileSync(join(outputRoot, 'bacteria', 'species-000.jsonl.gz'))
    expect(speciesBefore.byteLength).toBe(590043)
    expect(sha256(speciesBefore)).toBe('45635a3a885ed8027b69c7e16463e132bab449252aa706b9511cb245e0dc2845')

    const first = buildBacteriaLpsnSidecar({ resourcePacksRoot: outputRoot, crosswalkPath })
    const firstFiles = {
      sidecar: readFileSync(join(outputRoot, 'bacteria', 'lpsn-000.jsonl.gz')),
      manifest: readFileSync(join(outputRoot, 'bacteria', 'manifest.json')),
      collection: readFileSync(join(outputRoot, 'manifest.json')),
    }
    const second = buildBacteriaLpsnSidecar({ resourcePacksRoot: outputRoot, crosswalkPath })
    expect(readFileSync(join(outputRoot, 'bacteria', 'lpsn-000.jsonl.gz'))).toEqual(firstFiles.sidecar)
    expect(readFileSync(join(outputRoot, 'bacteria', 'manifest.json'))).toEqual(firstFiles.manifest)
    expect(readFileSync(join(outputRoot, 'manifest.json'))).toEqual(firstFiles.collection)
    expect(readFileSync(join(outputRoot, 'bacteria', 'species-000.jsonl.gz'))).toEqual(speciesBefore)

    const collectionAfter = JSON.parse(firstFiles.collection.toString('utf8'))
    expect(collectionAfter.packs.filter((pack) => pack.packageId !== 'bacteria'))
      .toEqual(collectionBefore.packs.filter((pack) => pack.packageId !== 'bacteria'))
    const descriptor = collectionAfter.packs.find((pack) => pack.packageId === 'bacteria')
    expect(descriptor).toMatchObject({
      acceptedSpeciesCount: 26397,
      extensionCount: 1,
      extensionFileCount: 1,
      extensionCompressedBytes: first.extension.totalCompressedBytes,
      extensionSourceBytes: first.extension.totalSourceBytes,
    })
    expect(first.extension).toEqual(second.extension)
    expect(first.extension.counts).toEqual({
      acceptedSpecies: 26397,
      eligible: 21570,
      resolved: crosswalk.counts.resolved,
      withheld: crosswalk.counts.withheld,
    })
    expect(first.extension.source).toMatchObject({
      canonicalCrosswalkSha256: sha256(crosswalkBytes),
      canonicalCrosswalkBytes: crosswalkBytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalkSourceBytes),
      canonicalCrosswalkSourceBytes: crosswalkSourceBytes.byteLength,
      requestIntegrity: crosswalk.integrity,
      license: 'CC-BY-SA-4.0',
    })
    expect(first.extension.files[0]).toMatchObject({
      records: 21570,
      bytes: 214929,
      sourceBytes: 3151511,
      sha256: '3591c41843b1a2664044162a21bf120d9e71c5173da4b459ae2373423178ab45',
      sourceSha256: 'ed0319ba05646e2ae193ecfd066bdebbbaa6f2124efcfc1dac973bf0eb231019',
    })

    const runtimeRecords = ndjson(join(outputRoot, 'bacteria', 'lpsn-000.jsonl.gz'))
    const species = ndjson(join(outputRoot, 'bacteria', 'species-000.jsonl.gz'))
    const resolvedIds = new Set(crosswalk.records.map((record) => record.colId))
    expect(runtimeRecords).toHaveLength(crosswalk.counts.resolved)
    expect(runtimeRecords.map((record) => record.colId)).toEqual(species.filter((record) => resolvedIds.has(record.id)).map((record) => record.id))
    expect(runtimeRecords.every((record) => record.status === 'resolved')).toBe(true)
  })
})
