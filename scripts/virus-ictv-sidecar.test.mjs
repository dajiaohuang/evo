import { createHash } from 'node:crypto'
import { cpSync, mkdtempSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { afterAll, describe, expect, it } from 'vitest'
import { buildVirusIctvSidecar } from './build-virus-ictv-sidecar.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourcePacksRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const crosswalkPath = join(repositoryRoot, 'data', 'sources', 'ictv-virus-crosswalk-col26.8-msl41.v1.json.gz')
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

describe('COL26.8 Viruses ICTV MSL41.v1 and VMR sidecar', () => {
  it('partitions every COL and current ICTV species using exact evidence without name guessing', () => {
    expect(crosswalk).toMatchObject({
      schemaVersion: 1,
      crosswalkType: 'release-pinned-official-virus-taxonomy-and-exemplar-metadata',
      source: {
        provider: 'International Committee on Taxonomy of Viruses (ICTV)',
        catalogueRelease: 'COL26.8',
        catalogueReleaseDate: '2026-08-20',
        checklistBankDatasetKey: 316115,
        sourceDatasetKey: 1014,
        retrievedAt: '2026-08-31',
        license: 'CC-BY-4.0',
      },
      counts: {
        acceptedSpecies: 17552,
        eligible: 17552,
        accepted: 17552,
        redirect: 0,
        ambiguous: 0,
        unmatched: 0,
        withheld: 0,
        officialSpecies: 17554,
        upstreamOnly: 2,
        vmrIsolates: 19285,
        exemplarIsolates: 17554,
        additionalIsolates: 1731,
      },
      integrity: {
        algorithm: 'sha256',
        officialFileLedgerSha256: 'd3f4b496e75e4150538a8284b2e957b80f91eb67c284b6da776b7a582a15f66a',
      },
    })
    expect(crosswalk.upstreamOnlySpecies).toEqual(['Boscovirus hypoboscidae', 'Simiispumavirus macfas'])
    expect(crosswalkBytes.byteLength).toBe(1353125)
    expect(sha256(crosswalkBytes)).toBe('398c64156bae1f5b9ad3f64545e1e776122f009a14e4c76ac5d0dec449f5a74a')
    expect(crosswalkSourceBytes.byteLength).toBe(19263768)
    expect(sha256(crosswalkSourceBytes)).toBe('281286a1900496315686f62b5aba5c043846d8b547080dca9e88eb1b83d5e504')
    expect([...crosswalkBytes.subarray(4, 8)]).toEqual([0, 0, 0, 0])
    expect(crosswalkBytes[9]).toBe(255)
    expect(crosswalk.records).toHaveLength(17554)

    const species = ndjson(join(resourcePacksRoot, 'viruses', 'species-000.jsonl.gz'))
    const speciesById = new Map(species.map((record) => [record.id, record]))
    const colIds = new Set()
    const ictvIds = new Set()
    const isolateIds = new Set()
    let exemplarCount = 0
    let additionalCount = 0
    for (const record of crosswalk.records) {
      if (!/^ICTV\d+$/.test(record.ictvTaxonId)
        || record.ictvTaxonUrl !== `https://ictv.global/id/${record.ictvTaxonId}`
        || ictvIds.has(record.ictvTaxonId)) throw new Error(`Invalid or duplicate ICTV taxon ${record.ictvTaxonId}`)
      ictvIds.add(record.ictvTaxonId)
      if (record.mappingStatus === 'accepted') {
        if (record.mappingBasis !== 'exact-unique-current-species-name-and-ictv-id'
          || speciesById.get(record.colId)?.scientificName !== record.scientificName
          || colIds.has(record.colId)) throw new Error(`Invalid or duplicate exact mapping ${record.colId}`)
        colIds.add(record.colId)
      } else {
        if (record.colId !== null || record.mappingStatus !== 'upstream-only'
          || record.mappingBasis !== 'no-col26.8-accepted-species-record'
          || !crosswalk.upstreamOnlySpecies.includes(record.scientificName)) throw new Error(`Invalid ICTV-only record ${record.scientificName}`)
      }
      if (record.isolates.filter((isolate) => isolate.role === 'exemplar').length !== 1) throw new Error(`${record.ictvTaxonId} does not have one exemplar`)
      for (const isolate of record.isolates) {
        if (!/^VMR\d+$/.test(isolate.isolateId)
          || isolate.isolateUrl !== `https://ictv.global/id/${isolate.isolateId}`
          || isolateIds.has(isolate.isolateId)) throw new Error(`Invalid or duplicate VMR isolate ${isolate.isolateId}`)
        isolateIds.add(isolate.isolateId)
        if (isolate.role === 'exemplar') exemplarCount += 1
        else additionalCount += 1
      }
    }
    expect(colIds.size).toBe(17552)
    expect(ictvIds.size).toBe(17554)
    expect(isolateIds.size).toBe(19285)
    expect(exemplarCount).toBe(17554)
    expect(additionalCount).toBe(1731)
    expect(crosswalk.records.filter((record) => typeof record.proposalForLastChange === 'string')).toHaveLength(17553)
    expect(crosswalk.records.filter((record) => record.proposalForLastChange === null).map((record) => record.scientificName)).toEqual(['Aquaneticvirus ApT65'])

    const ledgerBytes = Buffer.from(`${crosswalk.source.files.map((file) => JSON.stringify(file)).join('\n')}\n`, 'utf8')
    expect(ledgerBytes.byteLength).toBe(crosswalk.integrity.officialFileLedgerBytes)
    expect(sha256(ledgerBytes)).toBe(crosswalk.integrity.officialFileLedgerSha256)
    expect(crosswalk.source.files).toEqual(expect.arrayContaining([
      expect.objectContaining({ fileName: 'ICTV_Master_Species_List_2025_MSL41.v1.xlsx', bytes: 1803176, sha256: '9d262d7864f1f619445a897ae568718ed15b1309c8f0c157a12fd7fb9fd07801', zenodoMd5: 'b86b2ea2a0fc310dfad3ea00ee707474', doi: '10.5281/zenodo.19154110' }),
      expect.objectContaining({ fileName: 'VMR_MSL41.v1.20260729.xlsx', bytes: 3879426, sha256: 'b79b5d82a1b3b8e9dd5e19afe8fe1a8f441267474918a7cefa8ae4913adf45bb', zenodoMd5: '0cbe5dade3aeb494ca79d97854ee8580', doi: '10.5281/zenodo.21694279' }),
    ]))
  }, 30_000)

  it('publishes all official species deterministically while preserving the COL species shard and other packs', () => {
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-virus-ictv-'))
    temporaryRoots.push(temporaryRoot)
    const outputRoot = join(temporaryRoot, 'resource-packs')
    mkdirSync(outputRoot, { recursive: true })
    cpSync(join(resourcePacksRoot, 'manifest.json'), join(outputRoot, 'manifest.json'))
    cpSync(join(resourcePacksRoot, 'viruses'), join(outputRoot, 'viruses'), { recursive: true })
    const collectionBefore = JSON.parse(readFileSync(join(outputRoot, 'manifest.json'), 'utf8'))
    const speciesBefore = readFileSync(join(outputRoot, 'viruses', 'species-000.jsonl.gz'))
    expect(speciesBefore.byteLength).toBe(758880)
    expect(sha256(speciesBefore)).toBe('33ac321b49180529dc97ed5c44bda4c65298b48fde0097f04f23e7c5f3d7ae21')

    const first = buildVirusIctvSidecar({ resourcePacksRoot: outputRoot, crosswalkPath })
    const firstFiles = {
      sidecar: readFileSync(join(outputRoot, 'viruses', 'ictv-000.jsonl.gz')),
      manifest: readFileSync(join(outputRoot, 'viruses', 'manifest.json')),
      collection: readFileSync(join(outputRoot, 'manifest.json')),
    }
    const second = buildVirusIctvSidecar({ resourcePacksRoot: outputRoot, crosswalkPath })
    expect(readFileSync(join(outputRoot, 'viruses', 'ictv-000.jsonl.gz'))).toEqual(firstFiles.sidecar)
    expect(readFileSync(join(outputRoot, 'viruses', 'manifest.json'))).toEqual(firstFiles.manifest)
    expect(readFileSync(join(outputRoot, 'manifest.json'))).toEqual(firstFiles.collection)
    expect(readFileSync(join(outputRoot, 'viruses', 'species-000.jsonl.gz'))).toEqual(speciesBefore)

    const collectionAfter = JSON.parse(firstFiles.collection.toString('utf8'))
    expect(collectionAfter.packs.filter((pack) => pack.packageId !== 'viruses'))
      .toEqual(collectionBefore.packs.filter((pack) => pack.packageId !== 'viruses'))
    const descriptor = collectionAfter.packs.find((pack) => pack.packageId === 'viruses')
    expect(descriptor).toMatchObject({
      acceptedSpeciesCount: 17552,
      extensionCount: 1,
      extensionFileCount: 1,
      extensionCompressedBytes: first.extension.totalCompressedBytes,
      extensionSourceBytes: first.extension.totalSourceBytes,
    })
    expect(first.extension).toEqual(second.extension)
    expect(first.extension.counts).toEqual(crosswalk.counts)
    expect(first.extension.source).toMatchObject({
      canonicalCrosswalkSha256: sha256(crosswalkBytes),
      canonicalCrosswalkBytes: crosswalkBytes.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalkSourceBytes),
      canonicalCrosswalkSourceBytes: crosswalkSourceBytes.byteLength,
      fileIntegrity: crosswalk.integrity,
      license: 'CC-BY-4.0',
    })
    expect(first.extension.files[0]).toMatchObject({
      records: 17554,
      bytes: 1346739,
      sourceBytes: 19260678,
      sha256: '99253ddc92392bdb0a03465eda99e9c2ee3d6660ac690d3b52cb8c9caf3a1443',
      sourceSha256: '0ead1e4d27bf1a1d15189db899bc1c89edb6486aedc69fc5fb49708a1db7b1ca',
    })

    const runtimeRecords = ndjson(join(outputRoot, 'viruses', 'ictv-000.jsonl.gz'))
    expect(runtimeRecords).toHaveLength(17554)
    expect(runtimeRecords.filter((record) => record.mappingStatus === 'accepted')).toHaveLength(17552)
    expect(runtimeRecords.filter((record) => record.mappingStatus === 'upstream-only')).toHaveLength(2)
  }, 30_000)
})
