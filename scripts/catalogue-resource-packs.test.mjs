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
  }, 30000)
})
