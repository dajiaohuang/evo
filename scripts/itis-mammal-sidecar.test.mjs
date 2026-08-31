import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
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
  'mammal-origins': 0,
  perissodactyla: 19,
  cetartiodactyla: 503,
  primates: 530,
  carnivora: 310,
  'other-mammals': 5099,
}

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

describe('checked-in ITIS Mammalia sidecars', () => {
  const ledgerPath = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-mammal-sidecar-import-ledger.json')
  const ledgerBytes = readFileSync(ledgerPath)
  const ledger = JSON.parse(ledgerBytes.toString('utf8'))

  it('covers the six COL26.8 mammal package owners exactly once', () => {
    expect(ledger.totals.total).toBe(6461)
    expect(ledger.outputs.map((output) => output.packageId)).toEqual(Object.keys(PACKAGE_COUNTS))
    expect(Object.fromEntries(ledger.outputs.map((output) => [output.packageId, output.counts.total]))).toEqual(PACKAGE_COUNTS)
    expect(ledger.matchingContract.matching.forbidden).toContain('No fuzzy')
  })

  for (const [packageId, expectedCount] of Object.entries(PACKAGE_COUNTS)) {
    it(`${packageId} preserves deterministic exact-match evidence`, () => {
      const output = ledger.outputs.find((entry) => entry.packageId === packageId)
      const path = join(REPOSITORY_ROOT, ...output.path.split('/'))
      const bytes = readFileSync(path)
      const sidecar = JSON.parse(bytes.toString('utf8'))
      expect(bytes.length).toBe(output.bytes)
      expect(sha256(bytes)).toBe(output.sha256)
      expect(sidecar.packageId).toBe(packageId)
      expect(sidecar.counts).toEqual(output.counts)
      expect(sidecar.counts.total).toBe(expectedCount)

      const groups = sidecar.records
      const allRecords = Object.values(groups).flat()
      expect(new Set(allRecords.map((record) => record.colUsageId)).size).toBe(expectedCount)
      expect(allRecords.every((record) => record.exactMatchName === colExactMatchName({
        scientificName: record.colScientificName,
        authorship: record.colAuthorship,
      }))).toBe(true)
      expect(groups.accepted.every((record) => normalizeScientificName(record.currentName.scientificName) === record.exactMatchName)).toBe(true)
      expect(groups.synonymCurrentNameRedirect.every((record) => (
        record.matchedSynonyms.length > 0
        && record.matchedSynonyms.every((name) => normalizeScientificName(name.scientificName) === record.exactMatchName)
      ))).toBe(true)
      expect(groups.ambiguous.every((record) => (
        record.candidates.length > 1
        && new Set(record.candidates.map((candidate) => candidate.currentName.tsn)).size === record.candidates.length
        && record.candidates.every((candidate) => candidate.evidence.some((evidence) => (
          normalizeScientificName(evidence.name.scientificName) === record.exactMatchName
        )))
      ))).toBe(true)
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
    // The rc59 sidecar truthfully pins the ownership bytes used at import time;
    // later release metadata must not rewrite that provenance or its gzip.
    expect(ledger.generatedFrom.colOwnershipSha256).toBe('aa750d41daef08e4512767680a3707e10a644a4ac04c44b4f7a2b5850d16754a')
    const scriptBytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.generatedBy.scriptPath.split('/')))
    expect(sha256(scriptBytes)).toBe(ledger.generatedBy.scriptSha256)
  })
})
