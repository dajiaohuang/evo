import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  colExactMatchName,
  createItisMammalNameIndex,
  matchColSpecies,
  normalizeScientificName,
} from './itis-mammal-sidecar-lib.mjs'

const REPOSITORY_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PACKAGE_COUNTS = {
  perissodactyla: 19,
  cetartiodactyla: 503,
  primates: 530,
  carnivora: 310,
  'other-mammals': 5099,
}
const PACKAGE_ROOTS = Object.fromEntries(Object.keys(PACKAGE_COUNTS).map((packageId) => [packageId, `data/packages/mammalia/${packageId}/nomenclature`]))

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function fixtureCurrent(tsn, scientificName) {
  return {
    tsn,
    scientific_name: scientificName,
    name_usage: 'valid',
    credibility_rtng: 'TWG standards met',
    completeness_rtng: 'complete',
    currency_rating: '2026',
    update_date: '2026-08-26',
  }
}

function fixtureSynonym(tsn, scientificName, acceptedTsn) {
  return {
    synonym_tsn: tsn,
    synonym_name: scientificName,
    synonym_usage: 'invalid',
    unaccept_reason: 'junior synonym',
    synonym_update_date: '2026-08-26',
    tsn_accepted: acceptedTsn,
  }
}

describe('ITIS Mammalia exact sidecar matching', () => {
  it('uses representation-only normalization and exact COL authorship removal', () => {
    expect(normalizeScientificName('  Homo_sapiens\t')).toBe('Homo sapiens')
    expect(normalizeScientificName('Équus  ferus')).toBe('Équus ferus')
    expect(normalizeScientificName('Acomys (Acomys) airensis')).toBe('Acomys airensis')
    expect(colExactMatchName({ scientificName: 'Homo sapiens Linnaeus, 1758', authorship: 'Linnaeus, 1758' })).toBe('Homo sapiens')
    expect(colExactMatchName({ scientificName: 'Homo sapiens Linnaeus, 1758', authorship: 'Linnaeus, 1759' })).toBe('Homo sapiens Linnaeus, 1758')
  })

  it('keeps accepted, synonym redirect, ambiguous and unmatched results separate', () => {
    const current = [fixtureCurrent(1, 'Panthera leo'), fixtureCurrent(2, 'Felis leo')]
    const synonyms = [
      fixtureSynonym(10, 'Leo leo', 1),
      fixtureSynonym(11, 'Shared name', 1),
      fixtureSynonym(12, 'Shared name', 2),
    ]
    const index = createItisMammalNameIndex(current, synonyms)
    const match = (id, name) => matchColSpecies({ id, scientificName: name, authorship: null }, index)

    expect(match('a', 'Panthera leo').status).toBe('accepted')
    expect(match('b', 'Leo leo').status).toBe('synonym-current-name-redirect')
    expect(match('c', 'Shared name').status).toBe('ambiguous')
    expect(match('d', 'Missing species').status).toBe('unmatched')
    expect(match('c', 'Shared name').record.candidates.map((candidate) => candidate.currentName.tsn)).toEqual(['1', '2'])
  })
})

describe('checked-in ITIS Mammalia authority sidecars', () => {
  const ledgerPath = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-mammal-authority-import-ledger.json')
  const ledgerBytes = readFileSync(ledgerPath)
  const ledger = JSON.parse(ledgerBytes.toString('utf8'))

  it('covers the five non-empty COL26.8 mammal package owners exactly once', () => {
    expect(ledger.totals.total).toBe(6461)
    expect(Object.keys(ledger.outputs)).toEqual(Object.keys(PACKAGE_COUNTS))
    expect(Object.fromEntries(Object.entries(ledger.outputs).map(([packageId, output]) => [packageId, output.counts.total]))).toEqual(PACKAGE_COUNTS)
    expect(ledger.matchingContract.exactMatching?.forbidden ?? ledger.matchingContract.forbidden).toContain('No fuzzy')
    expect(ledger.totals.itisUpstreamOnly).toBe(3)
  })

  it('pins the canonical crosswalk and its complete package partition', () => {
    const canonicalBytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.canonical.path.split('/')))
    expect(canonicalBytes.length).toBe(ledger.canonical.bytes)
    expect(sha256(canonicalBytes)).toBe(ledger.canonical.sha256)
    const canonical = JSON.parse(gunzipSync(canonicalBytes).toString('utf8'))
    expect(canonical.records).toHaveLength(6461)
    expect(new Set(canonical.records.map((record) => record.colUsageId)).size).toBe(6461)
    expect(canonical.records.map((record) => record.colUsageId)).toEqual([...canonical.records].map((record) => record.colUsageId).sort((left, right) => left < right ? -1 : left > right ? 1 : 0))
    expect(canonical.upstreamOnlyRecords).toHaveLength(3)
    expect(canonical.upstreamOnlyRecords.every((record) => record.packageId === 'other-mammals')).toBe(true)
    expect(canonical.integrity.recordLedgerSha256).toBe(sha256(Buffer.from(`${canonical.records.map((record) => JSON.stringify(record)).join('\n')}\n`)))
  })

  for (const [packageId, expectedCount] of Object.entries(PACKAGE_COUNTS)) {
    it(`${packageId} exposes disjoint range shards and upstream-only evidence`, () => {
      const output = ledger.outputs[packageId]
      const descriptorPath = join(REPOSITORY_ROOT, ...PACKAGE_ROOTS[packageId].split('/'), 'itis-tsn-sidecar.json')
      const bytes = readFileSync(descriptorPath)
      const sidecar = JSON.parse(bytes.toString('utf8'))
      expect(bytes.length).toBe(output.descriptor.bytes)
      expect(sha256(bytes)).toBe(output.descriptor.sha256)
      expect(sidecar.packageId).toBe(packageId)
      expect(sidecar.counts).toEqual(output.counts)
      expect(sidecar.counts.total).toBe(expectedCount)
      const records = sidecar.colUsageIdLocator.files.flatMap((file) => {
        const shard = readFileSync(join(REPOSITORY_ROOT, ...file.path.split('/')))
        expect(shard.length).toBe(file.bytes)
        expect(sha256(shard)).toBe(file.sha256)
        const payload = gunzipSync(shard).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
        expect(payload).toHaveLength(file.records)
        expect(payload[0].colUsageId).toBe(file.firstColUsageId)
        expect(payload.at(-1).colUsageId).toBe(file.lastColUsageId)
        return payload
      })
      expect(records).toHaveLength(expectedCount)
      expect(new Set(records.map((record) => record.colUsageId)).size).toBe(expectedCount)
      for (let index = 1; index < sidecar.colUsageIdLocator.files.length; index += 1) {
        expect(sidecar.colUsageIdLocator.files[index - 1].lastColUsageId < sidecar.colUsageIdLocator.files[index].firstColUsageId).toBe(true)
      }
      const upstreamFiles = sidecar.upstreamOnly.files
      expect(upstreamFiles).toHaveLength(packageId === 'other-mammals' ? 1 : 0)
      if (upstreamFiles.length) {
        const file = upstreamFiles[0]
        const shard = readFileSync(join(REPOSITORY_ROOT, ...file.path.split('/')))
        expect(sha256(shard)).toBe(file.sha256)
        const upstream = gunzipSync(shard).toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
        expect(upstream).toHaveLength(3)
        expect(upstream.every((record) => record.colUsageId === null)).toBe(true)
      }
    })
  }

  it('pins the source and generator bytes used for the import', () => {
    for (const [pathKey, hashKey] of [
      ['sourcePath', 'sourceSha256'],
      ['colRegistryManifestPath', 'colRegistryManifestSha256'],
    ]) {
      const bytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.generatedFrom[pathKey].split('/')))
      expect(sha256(bytes)).toBe(ledger.generatedFrom[hashKey])
    }
    const ownershipBytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.generatedFrom.colOwnershipPath.split('/')))
    expect(sha256(ownershipBytes)).toBe(ledger.generatedFrom.colOwnershipSha256)
    expect(ledger.generatedFrom.colOwnershipInputSemantics).toContain('historical ITIS source import contract')
    const scriptBytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.generatedBy.scriptPath.split('/')))
    expect(sha256(scriptBytes)).toBe(ledger.generatedBy.scriptSha256)
  })
})
