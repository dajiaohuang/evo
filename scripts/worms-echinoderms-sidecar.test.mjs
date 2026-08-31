import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  colExactMatchName,
  matchColSpecies,
  normalizeScientificName,
} from './worms-echinoderms-sidecar-lib.mjs'

const REPOSITORY_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'worms-echinoderms-2026-08-31.json')
const LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'worms-echinoderms-import-ledger.json')

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function colRecord(id, scientificName, authorship = null) {
  return { id, scientificName, authorship, sourceDatasetId: '1095' }
}

function aphiaRecord({
  aphiaId,
  scientificName,
  status = 'accepted',
  validAphiaId = aphiaId,
  validName = scientificName,
  phylum = 'Echinodermata',
}) {
  return {
    AphiaID: aphiaId,
    scientificname: scientificName,
    authority: 'Fixture, 2026',
    status,
    unacceptreason: status === 'accepted' ? null : 'synonym',
    rank: 'Species',
    phylum,
    valid_AphiaID: validAphiaId,
    valid_name: validName,
    match_type: 'exact',
    modified: '2026-08-01T00:00:00.000Z',
    isExtinct: 0,
  }
}

describe('WoRMS Echinodermata exact matching', () => {
  it('uses representation-only normalization and preserves subgenus tokens', () => {
    expect(normalizeScientificName('  Holothuria_(Roweothuria)\targuinensis  ')).toBe('Holothuria (Roweothuria) arguinensis')
    expect(colExactMatchName(colRecord(
      'a',
      'Holothuria (Roweothuria) arguinensis Koehler & Vaney, 1906',
      'Koehler & Vaney, 1906',
    ))).toEqual({
      matchable: true,
      exactMatchName: 'Holothuria (Roweothuria) arguinensis',
      reason: null,
    })
    expect(colExactMatchName(colRecord(
      'b',
      'Antedon loveni Bell, 1882 () not Bell, 1884',
      'Bell, 1882 ()',
    )).matchable).toBe(false)
  })

  it('keeps accepted, redirect, ambiguous, unmatched and withheld results separate', () => {
    const accepted = matchColSpecies(
      colRecord('a', 'Asterias rubens Linnaeus, 1758', 'Linnaeus, 1758'),
      [aphiaRecord({ aphiaId: 123776, scientificName: 'Asterias rubens' })],
      1,
    )
    expect(accepted.status).toBe('accepted')
    expect(accepted.record.aphiaRecord.aphiaUrl).toBe('https://www.marinespecies.org/aphia.php?p=taxdetails&id=123776')

    const redirect = matchColSpecies(
      colRecord('b', 'Asterias oldname'),
      [aphiaRecord({
        aphiaId: 10,
        scientificName: 'Asterias oldname',
        status: 'unaccepted',
        validAphiaId: 123776,
        validName: 'Asterias rubens',
      })],
      1,
    )
    expect(redirect.status).toBe('accepted-name-redirect')
    expect(redirect.record.acceptedName.aphiaId).toBe('123776')

    const ambiguous = matchColSpecies(
      colRecord('c', 'Shared exact'),
      [
        aphiaRecord({ aphiaId: 11, scientificName: 'Shared exact' }),
        aphiaRecord({ aphiaId: 12, scientificName: 'Shared exact' }),
      ],
      1,
    )
    expect(ambiguous.status).toBe('ambiguous')
    expect(ambiguous.record.candidates.map((candidate) => candidate.validAphiaId)).toEqual(['11', '12'])

    expect(matchColSpecies(colRecord('d', 'Missing exact'), [], 1).status).toBe('unmatched')
    expect(matchColSpecies(
      colRecord('e', 'Qualified name Author () not Other', 'Author ()'),
      [],
      null,
    ).status).toBe('withheld')
  })

  it('rejects non-exact, non-species and non-echinoderm candidates', () => {
    const base = aphiaRecord({ aphiaId: 1, scientificName: 'Asterias rubens' })
    const col = colRecord('a', 'Asterias rubens')
    expect(matchColSpecies(col, [{ ...base, match_type: 'near_1' }], 1).status).toBe('unmatched')
    expect(matchColSpecies(col, [{ ...base, rank: 'Genus' }], 1).status).toBe('unmatched')
    expect(matchColSpecies(col, [{ ...base, phylum: 'Mollusca' }], 1).status).toBe('unmatched')
  })
})

describe('checked-in WoRMS Echinodermata sidecar', () => {
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes.toString('utf8'))
  const ledgerBytes = readFileSync(LEDGER_PATH)
  const ledger = JSON.parse(ledgerBytes.toString('utf8'))
  const sidecarPath = join(REPOSITORY_ROOT, ...ledger.output.path.split('/'))
  const sidecarBytes = readFileSync(sidecarPath)
  const sidecarSourceBytes = gunzipSync(sidecarBytes)
  const sidecar = JSON.parse(sidecarSourceBytes.toString('utf8'))

  it('pins official requests, source attribution and the full COL26.8 package boundary', () => {
    expect(source.releaseBoundary.type).toBe('date-pinned-continuously-updated-service')
    expect(source.releaseBoundary.retrievedAt.startsWith('2026-08-31T')).toBe(true)
    expect(source.license.spdx).toBe('CC-BY-4.0')
    expect(source.citation.doi).toBe('10.14284/170')
    expect(source.api.endpoint).toBe('https://www.marinespecies.org/rest/AphiaRecordsByNames')
    expect(source.api.query).toEqual({ like: false, marine_only: false, extant_only: false })
    expect(source.colInput.acceptedSpecies).toBe(11891)
    expect(source.colInput.sourceDatasetCounts).toEqual({
      1059: 2500,
      1095: 2563,
      1106: 4235,
      1107: 1869,
      2300: 724,
    })
    expect(source.acquisition.requestCount).toBe(source.acquisition.requests.length)
    expect(source.acquisition.requestedNames + source.acquisition.locallyWithheldNames).toBe(11891)
    expect(source.acquisition.locallyWithheldNames).toBe(4)
    expect(source.acquisition.responseWithheldNames).toBe(5)
    expect(source.acquisition.requests.every((request, index) => (
      request.batch === index + 1
      && request.method === 'GET'
      && request.names > 0
      && request.names <= 500
      && request.url.includes('like=false')
      && request.url.includes('marine_only=false')
      && request.url.includes('extant_only=false')
      && /^[a-f0-9]{64}$/.test(request.responseSha256)
    ))).toBe(true)
    expect(source.matchingContract.forbidden).toContain('No fuzzy')
  })

  it('tracks deterministic compressed bytes and every exact matching status', () => {
    expect(ledger.generatedFrom.sourceSha256).toBe(sha256(sourceBytes))
    expect(ledger.output.bytes).toBe(sidecarBytes.byteLength)
    expect(ledger.output.sha256).toBe(sha256(sidecarBytes))
    expect(ledger.output.sourceBytes).toBe(sidecarSourceBytes.byteLength)
    expect(ledger.output.sourceSha256).toBe(sha256(sidecarSourceBytes))
    expect(Buffer.from(deterministicGzip(sidecarSourceBytes, { level: 9 }))).toEqual(sidecarBytes)
    expect(sidecar.counts).toEqual(ledger.totals)
    expect(sidecar.counts.total).toBe(11891)
    expect(Object.keys(sidecar.records)).toEqual([
      'accepted',
      'acceptedNameRedirect',
      'ambiguous',
      'unmatched',
      'withheld',
    ])
    const allRecords = Object.values(sidecar.records).flat()
    expect(allRecords).toHaveLength(11891)
    expect(new Set(allRecords.map((record) => record.colUsageId)).size).toBe(11891)
    expect(sidecar.records.withheld.filter((record) => (
      record.withheldReason === 'unsafe-col-authorship-boundary'
    ))).toHaveLength(4)
    expect(sidecar.records.withheld.filter((record) => (
      record.withheldReason === 'incomplete-worms-exact-record'
    ))).toHaveLength(5)
    expect(sidecar.records.withheld.every((record) => (
      record.withheldReason === 'unsafe-col-authorship-boundary'
        ? record.requestBatch === null
        : Number.isInteger(record.requestBatch)
    ))).toBe(true)
    expect(sidecar.records.accepted.every((record) => (
      normalizeScientificName(record.aphiaRecord.scientificName) === record.exactMatchName
      && record.aphiaRecord.aphiaUrl.endsWith(`id=${record.aphiaRecord.aphiaId}`)
    ))).toBe(true)
    expect(sidecar.records.acceptedNameRedirect.every((record) => (
      record.matchedNames.length > 0
      && record.matchedNames.every((name) => normalizeScientificName(name.scientificName) === record.exactMatchName)
      && record.acceptedName.aphiaUrl.endsWith(`id=${record.acceptedName.aphiaId}`)
    ))).toBe(true)
    expect(sidecar.records.ambiguous.every((record) => (
      record.candidates.length > 1
      && new Set(record.candidates.map((candidate) => candidate.validAphiaId)).size === record.candidates.length
    ))).toBe(true)
  })

  it('pins the source inputs and generator bytes named by the import ledger', () => {
    for (const [pathKey, hashKey] of [
      ['sourcePath', 'sourceSha256'],
      ['colRegistryManifestPath', 'colRegistryManifestSha256'],
      ['colOwnershipPath', 'colOwnershipSha256'],
    ]) {
      const bytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.generatedFrom[pathKey].split('/')))
      expect(sha256(bytes)).toBe(ledger.generatedFrom[hashKey])
    }
    const scriptBytes = readFileSync(join(REPOSITORY_ROOT, ...ledger.generatedBy.scriptPath.split('/')))
    expect(sha256(scriptBytes)).toBe(ledger.generatedBy.scriptSha256)
  })
})
