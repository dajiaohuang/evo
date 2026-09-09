import { createHash } from 'node:crypto'
import { cpSync, mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { buildFishbaseAuthoritySidecar } from './build-fishbase-authority-sidecar.mjs'

const REPOSITORY_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'fishbase-authority-crosswalk-col26.8.json.gz')
const SIDECAR = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'fish')

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function compareStableIds(left, right) {
  return left < right ? -1 : left > right ? 1 : 0
}

function readJsonGzip(path) {
  return JSON.parse(gunzipSync(readFileSync(path)).toString('utf8'))
}

describe('FishBase authority sidecar', () => {
  it('pins all five disjoint COL26.8 fish roots and source endpoint responses', () => {
    const snapshot = readJsonGzip(CROSSWALK)
    expect(snapshot.source.catalogueRelease).toBe('COL26.8')
    expect(snapshot.source.sourceDatasetKey).toBe(1010)
    expect(snapshot.source.sourceDatasetLicense).toBe('CC-BY-NC-4.0')
    expect(snapshot.counts).toEqual({
      eligible: 37436,
      resolved: 37436,
      direct: 37436,
      redirect: 0,
      ambiguous: 0,
      unmatched: 0,
      withheld: 0,
      upstreamOnly: 0,
      byScope: { actinopterygii: 35928, chondrichthyes: 1359, myxini: 92, petromyzontida: 49, sarcopterygii: 8 },
    })
    expect(snapshot.records).toHaveLength(37436)
    expect(new Set(snapshot.records.map((record) => record.colId)).size).toBe(37436)
    expect(new Set(snapshot.records.map((record) => record.fishBaseId)).size).toBe(37436)
    expect(snapshot.records.filter((record) => record.scopeId === 'sarcopterygii')).toHaveLength(8)
    expect(snapshot.records.filter((record) => record.scopeId === 'sarcopterygii').every((record) => (
      record.scopeRootColId === '8VSMX' && record.colPackage === 'tetrapod-transition'
    ))).toBe(true)
    expect(snapshot.records.every((record) => (
      record.mappingBasis === 'checklistbank-source-record'
      && record.sourceDatasetId === '1010'
      && /^urn:lsid:marinespecies.org:taxname:\d+$/.test(record.fishBaseId)
      && /^[a-f0-9]{64}$/.test(record.sourceResponseSha256)
    ))).toBe(true)
  })

  it('writes deterministic non-overlapping COL ID range shards and repeats byte-identically', () => {
    const sourceRoot = SIDECAR
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-fish-sidecar-'))
    const outputRoot = join(temporaryRoot, 'fish')
    try {
      const first = buildFishbaseAuthoritySidecar({ outputRoot })
      const firstBytes = Object.fromEntries(readdirSync(outputRoot).map((name) => [name, readFileSync(join(outputRoot, name))]))
      const second = buildFishbaseAuthoritySidecar({ outputRoot })
      const secondBytes = Object.fromEntries(readdirSync(outputRoot).map((name) => [name, readFileSync(join(outputRoot, name))]))
      expect(second.files).toEqual(first.files)
      expect(Object.keys(secondBytes).sort()).toEqual(Object.keys(firstBytes).sort())
      for (const name of Object.keys(firstBytes)) expect(secondBytes[name]).toEqual(firstBytes[name])
      const shards = first.files
      expect(shards.length).toBeGreaterThan(1)
      expect(shards.reduce((sum, file) => sum + file.records, 0)).toBe(37436)
      for (let index = 1; index < shards.length; index += 1) {
        expect(compareStableIds(shards[index - 1].maxColId, shards[index].minColId)).toBeLessThan(0)
      }
      for (const file of shards) {
        const bytes = readFileSync(join(sourceRoot, file.path.split('/').at(-1)))
        expect(sha256(bytes)).toBe(file.sha256)
      }
      expect(first.upstreamOnly.status).toBe('not-enumerated')
      expect(first.upstreamOnly.files).toEqual([])
    } finally {
      rmSync(temporaryRoot, { recursive: true, force: true })
    }
  }, 30000)
})
