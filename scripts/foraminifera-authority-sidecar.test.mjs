import { createHash } from 'node:crypto'
import { cpSync, mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync, brotliDecompressSync } from 'node:zlib'
import { afterAll, describe, expect, it } from 'vitest'
import { buildForaminiferaAuthoritySidecar } from './build-foraminifera-authority-sidecar.mjs'
import { deterministicGzip } from './archive-determinism.mjs'
import { locateColIdRangeFile } from './foraminifera-authority-sidecar-lib.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resourceRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const packageRoot = join(resourceRoot, 'protists-chromists')
const crosswalkPath = join(repositoryRoot, 'data', 'sources', 'foraminifera-wfd-col26.8-crosswalk.json.br')
const ledgerPath = join(repositoryRoot, 'data', 'sources', 'foraminifera-wfd-import-ledger.json')
const descriptorPath = join(packageRoot, 'foraminifera-wfd-extension.json')
const temporaryRoots = []
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonl = (path) => gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))

afterAll(() => temporaryRoots.forEach((path) => rmSync(path, { recursive: true, force: true })))

describe('COL26.8 World Foraminifera Database authority sidecar', () => {
  it('pins the full COL scope, official WFD version and truthful upstream boundary', () => {
    const compressed = readFileSync(crosswalkPath)
    const snapshot = JSON.parse(brotliDecompressSync(compressed).toString('utf8'))
    const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
    const descriptor = JSON.parse(readFileSync(descriptorPath, 'utf8'))
    expect(snapshot.colInput).toMatchObject({ releaseAlias: 'COL26.8', releaseDate: '2026-08-20', checklistBankDatasetKey: 316115, rootUsageId: 'C', sourceDatasetKey: 1157, acceptedSpecies: 47975 })
    expect(snapshot.source).toMatchObject({ sourceDatasetKey: 1157, sourceDatasetTitle: 'World Foraminifera Database', sourceDatasetVersion: '2026-08-01', sourceDatasetVersionDoi: '10.48580/d3dx.v88', sourceDatasetLicense: 'CC-BY-4.0', nameusageTotal: 86094 })
    expect(snapshot.source.nameusagePages).toHaveLength(87)
    expect(snapshot.records).toHaveLength(47975)
    expect(snapshot.counts).toMatchObject({ acceptedSpecies: 47975, sourceAcceptedSpecies: 48154, linkedSourceRecords: 47975, accepted: 47975, redirects: 0 })
    expect(snapshot.upstreamOnly.status).toBe('not-asserted')
    expect(snapshot.upstreamOnly.observedUnlinkedAcceptedSpeciesCount).toBe(179)
    expect(ledger.output.sha256).toBe(sha256(compressed))
    expect(ledger.generatedFrom.sourceSha256).toBe(sha256(compressed))
    expect(descriptor).toMatchObject({ id: 'foraminifera-wfd-identifiers', provider: 'World Foraminifera Database (WoRMS) through ChecklistBank', counts: { eligible: 47975, resolved: 47975, accepted: 47975, withheld: 0, upstreamOnly: null }, deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: 47975, files: expect.any(Array) } } })
    expect(descriptor.integration.lookup.strategy).toBe('lexicographic-colId-range-v1')
  })

  it('covers every COL species exactly once with deterministic bounded shards', () => {
    const descriptor = JSON.parse(readFileSync(descriptorPath, 'utf8'))
    const records = descriptor.files.flatMap((file) => {
      const compressed = readFileSync(join(resourceRoot, file.path))
      const source = gunzipSync(compressed)
      expect(compressed.byteLength).toBe(file.bytes)
      expect(source.byteLength).toBe(file.sourceBytes)
      expect(sha256(compressed)).toBe(file.sha256)
      expect(sha256(source)).toBe(file.sourceSha256)
      expect(Buffer.compare(Buffer.from(deterministicGzip(source, { level: 9 })), compressed)).toBe(0)
      const rows = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
      expect(rows).toHaveLength(file.records)
      expect(rows[0].colId).toBe(file.minColId)
      expect(rows.at(-1).colId).toBe(file.maxColId)
      return rows
    })
    expect(records).toHaveLength(47975)
    expect(new Set(records.map((record) => record.colId)).size).toBe(47975)
    expect(new Set(records.map((record) => record.sourceId)).size).toBe(47975)
    expect(records.every((record) => record.sourceDatasetId === '1157' && record.status === 'accepted' && record.mappingBasis === 'checklistbank-source-record' && /^\d+$/.test(record.sourceAphiaId))).toBe(true)
    for (const record of records) expect(locateColIdRangeFile(descriptor.files, record.colId)?.path).toBeTruthy()
    for (let index = 1; index < descriptor.files.length; index += 1) expect(descriptor.files[index - 1].maxColId < descriptor.files[index].minColId).toBe(true)
  })

  it('counts unrelated source-only files when refreshing the collection manifest', () => {
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-foraminifera-counts-'))
    temporaryRoots.push(temporaryRoot)
    const output = join(temporaryRoot, 'protists-chromists')
    mkdirSync(output)
    for (const name of readdirSync(packageRoot).filter((value) => /^species-\d{3}\.jsonl\.gz$/.test(value))) cpSync(join(packageRoot, name), join(output, name))
    const unrelated = { id: 'independent-authority', files: [{ path: 'independent-col.gz', bytes: 7, sourceBytes: 11 }], upstreamOnlyFiles: [{ path: 'independent-source.gz', bytes: 13, sourceBytes: 17 }] }
    writeFileSync(join(output, 'manifest.json'), JSON.stringify({ extensions: [unrelated] }))
    writeFileSync(join(temporaryRoot, 'manifest.json'), JSON.stringify({ packs: [{ packageId: 'protists-chromists' }] }))
    const result = buildForaminiferaAuthoritySidecar({ packageRoot: output, crosswalkPath, descriptorPath: join(output, 'foraminifera-wfd-extension.json') })
    const collection = JSON.parse(readFileSync(join(temporaryRoot, 'manifest.json'), 'utf8'))
    expect(collection.packs[0]).toMatchObject({ extensionCount: 2, extensionFileCount: result.files.length + 2, extensionCompressedBytes: result.totalCompressedBytes + 20, extensionSourceBytes: result.totalSourceBytes + 28 })
    expect(JSON.parse(readFileSync(join(output, 'manifest.json'), 'utf8')).extensions[0]).toEqual(unrelated)
  }, 60000)

  it('rebuilds identical shards from the pinned crosswalk', () => {
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-foraminifera-authority-'))
    temporaryRoots.push(temporaryRoot)
    for (const name of readdirSync(packageRoot).filter((value) => /^species-\d{3}\.jsonl\.gz$/.test(value))) cpSync(join(packageRoot, name), join(temporaryRoot, name))
    const first = buildForaminiferaAuthoritySidecar({ packageRoot: temporaryRoot, crosswalkPath, descriptorPath: join(temporaryRoot, 'foraminifera-wfd-extension.json') })
    const firstHashes = first.files.map((file) => sha256(readFileSync(join(temporaryRoot, basename(file.path)))))
    const second = buildForaminiferaAuthoritySidecar({ packageRoot: temporaryRoot, crosswalkPath, descriptorPath: join(temporaryRoot, 'foraminifera-wfd-extension.json') })
    expect(second.files).toEqual(first.files)
    expect(second.files.map((file) => sha256(readFileSync(join(temporaryRoot, basename(file.path)))))).toEqual(firstHashes)
    expect(second.files).toHaveLength(5)
    expect(second.files.reduce((sum, file) => sum + file.records, 0)).toBe(47975)
    expect(second.deliveryProfiles['web-light'].files).toEqual([])
    expect(second.deliveryProfiles['native-full'].records).toBe(47975)
  }, 60000)
})
