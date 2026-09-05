import { createHash } from 'node:crypto'
import { cpSync, mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, join, resolve } from 'node:path'
import { brotliDecompressSync, gunzipSync } from 'node:zlib'
import { afterAll, describe, expect, test } from 'vitest'
import { buildFungiAuthoritySidecar } from './build-fungi-authority-sidecar.mjs'
import { compareStableIds, locateColIdRangeFile } from './fungi-authority-sidecar-lib.mjs'

const REPOSITORY_ROOT = resolve(import.meta.dirname, '..')
const PACKAGE_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'fungi')
const CROSSWALK_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'fungi-species-fungorum-crosswalk-col26.8.json.br')
const IMPORT_LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'fungi-species-fungorum-import-ledger.json')
const DESCRIPTOR_PATH = join(PACKAGE_ROOT, 'index-fungorum-extension.json')
const temporaryRoots = []

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

function gzipNdjson(path) {
  return gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

afterAll(() => {
  for (const path of temporaryRoots) rmSync(path, { recursive: true, force: true })
})

describe('Fungi Species Fungorum / Index Fungorum authority sidecar', () => {
  test('preserves every original species shard byte-for-byte', () => {
    const expected = {
      'species-000.jsonl.gz': 'f281f9170ae58d825762ff965e8b6be5b113f6e063f39135db6c36f6dd428977',
      'species-001.jsonl.gz': 'bcdcf90709aa08700c49853da04c26b919f67cbb2f05a7de8d160b3a3f986483',
      'species-002.jsonl.gz': '35a7f76d655f5e3a9bc46b511d5c3cfc722db90c8eda5fac619cb5fe1d1a0ea2',
      'species-003.jsonl.gz': 'fe82dd1c5c8734d75e7c21646d6dbd21ef086f7011783bf66c5706e3826a44ee',
      'species-004.jsonl.gz': '2ae25b19d70549ff6f4d2662fc03b75341d94c889ecbe30f6bec000689dd41e5',
    }
    for (const [name, digest] of Object.entries(expected)) {
      expect(sha256(readFileSync(join(PACKAGE_ROOT, name)))).toBe(digest)
    }
  })

  test('covers all 157,044 accepted species with pinned CC BY source evidence', () => {
    const compressed = readFileSync(CROSSWALK_PATH)
    const sourceBytes = brotliDecompressSync(compressed)
    const snapshot = JSON.parse(sourceBytes.toString('utf8'))
    const ledger = JSON.parse(readFileSync(IMPORT_LEDGER_PATH, 'utf8'))
    const descriptor = JSON.parse(readFileSync(DESCRIPTOR_PATH, 'utf8'))

    expect(snapshot.sourceComposition).toEqual({ 1148: 1203, 2073: 155841 })
    expect(snapshot.counts).toEqual({
      acceptedSpecies: 157044,
      eligible: 157044,
      accepted: 157044,
      redirect: 0,
      ambiguous: 0,
      unmatched: 0,
      withheld: 0,
      upstreamOnly: 201,
    })
    expect(snapshot.source.sourceDatasets.map((source) => ({
      datasetId: source.datasetId,
      version: source.version,
      issued: source.issued,
      license: source.license,
    }))).toEqual([
      { datasetId: '2073', version: 'Apr 2024', issued: '2024-04-28', license: 'CC-BY-4.0' },
      { datasetId: '1148', version: 'Nov 2015', issued: '2015-11-22', license: 'CC-BY-4.0' },
    ])
    expect(snapshot.source.sourceDatasets[0].officialExport).toMatchObject({
      bytes: 7032137,
      sha256: '5a8875093c84660d6ffd488c3cd25431c0291b07f524a935e5beaffc40c07387',
      recordCount: 328830,
      dataMember: {
        bytes: 79201640,
        sha256: '2c7211638579e7125ec595ed5f178770dafa55f838e243e1f9d122a600ec32db',
      },
    })
    expect(snapshot.source.sourceDatasets[1].officialApiPages).toHaveLength(2)
    expect(snapshot.records).toHaveLength(157044)
    expect(new Set(snapshot.records.map((record) => record.colId)).size).toBe(157044)
    expect(new Set(snapshot.records.map((record) => record.indexFungorumId)).size).toBe(157044)
    expect(snapshot.records.filter((record) => record.mappingBasis === 'checklistbank-source-record')).toHaveLength(60)
    expect(snapshot.records.every((record) => record.status === 'accepted'
      && /^\d+$/.test(record.indexFungorumId)
      && record.indexFungorumUrl === `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${record.indexFungorumId}`)).toBe(true)
    expect(snapshot.upstreamOnlyRecords).toHaveLength(201)

    const recordLedgerBytes = Buffer.from(`${snapshot.records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
    expect(sha256(recordLedgerBytes)).toBe(snapshot.integrity.recordLedgerSha256)
    const directLedgerBytes = Buffer.from(`${ledger.directSourceRequests.map((request) => JSON.stringify({
      colId: request.colId,
      requestUrl: request.requestUrl,
      responseSha256: request.sha256,
    })).join('\n')}\n`, 'utf8')
    expect(ledger.directSourceRequests).toHaveLength(60)
    expect(sha256(directLedgerBytes)).toBe(snapshot.integrity.directSourceRequestLedgerSha256)
    expect(sha256(compressed)).toBe(ledger.output.sha256)
    expect(sha256(sourceBytes)).toBe(ledger.output.sourceSha256)
    expect(descriptor.counts).toEqual(snapshot.counts)
    expect(descriptor.integration.clientParityRequirement).toContain('Web runtime, offline ZIP, Android assets, and iOS assets')
  }, 30000)

  test('rebuilds deterministic bounded sidecar shards', () => {
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-fungi-authority-'))
    temporaryRoots.push(temporaryRoot)
    for (const name of readdirSync(PACKAGE_ROOT).filter((value) => /^species-\d{3}\.jsonl\.gz$/.test(value))) {
      cpSync(join(PACKAGE_ROOT, name), join(temporaryRoot, name))
    }
    const descriptorPath = join(temporaryRoot, 'index-fungorum-extension.json')
    const first = buildFungiAuthoritySidecar({ packageRoot: temporaryRoot, crosswalkPath: CROSSWALK_PATH, descriptorPath })
    const firstHashes = first.files.map((file) => sha256(readFileSync(join(temporaryRoot, basename(file.path)))))
    const second = buildFungiAuthoritySidecar({ packageRoot: temporaryRoot, crosswalkPath: CROSSWALK_PATH, descriptorPath })
    const secondHashes = second.files.map((file) => sha256(readFileSync(join(temporaryRoot, basename(file.path)))))
    expect(secondHashes).toEqual(firstHashes)
    expect(second.files).toEqual(first.files)
    expect(second.files).toHaveLength(6)
    expect(second.files.every((file) => file.sourceBytes <= 6 * 1024 * 1024)).toBe(true)
    expect(second.files.reduce((sum, file) => sum + file.records, 0)).toBe(157044)
    expect(second.integration.lookup.strategy).toBe('lexicographic-colId-range-v1')
    for (let index = 0; index < second.files.length; index += 1) {
      const file = second.files[index]
      expect(compareStableIds(file.minColId, file.maxColId)).toBeLessThanOrEqual(0)
      if (index) expect(compareStableIds(second.files[index - 1].maxColId, file.minColId)).toBeLessThan(0)
    }

    const recordsByPath = new Map(second.files.map((file) => [
      file.path,
      gzipNdjson(join(temporaryRoot, basename(file.path))),
    ]))
    const idsByPath = new Map([...recordsByPath].map(([path, records]) => [path, new Set(records.map((record) => record.colId))]))
    const sidecar = second.files.flatMap((file) => recordsByPath.get(file.path))
    expect(sidecar).toHaveLength(157044)
    expect(new Set(sidecar.map((record) => record.colId)).size).toBe(157044)
    expect(sidecar.every((record) => Object.keys(record).join(',')
      === 'colId,sourceDatasetId,indexFungorumId,indexFungorumUrl,mappingBasis,status')).toBe(true)
    expect(sidecar.every((record, index) => index === 0 || compareStableIds(sidecar[index - 1].colId, record.colId) < 0)).toBe(true)
    for (const record of sidecar) {
      const selected = locateColIdRangeFile(second.files, record.colId)
      expect(selected).not.toBeNull()
      expect(idsByPath.get(selected.path).has(record.colId)).toBe(true)
    }
  }, 30000)
})
