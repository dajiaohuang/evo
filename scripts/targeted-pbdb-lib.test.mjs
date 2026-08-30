import { describe, expect, it } from 'vitest'
import { checksumOccurrenceIds, normalizePbdbOccurrence, numericOccurrenceId, queryEligibility } from './targeted-pbdb-lib.mjs'

describe('targeted PBDB query helpers', () => {
  it('permits only resolution-ledger accepted concepts', () => {
    expect(queryEligibility({
      resolutionStatus: 'resolved',
      pbdbId: 'txn:39240',
      acceptedName: 'Archaeopteryx',
      conceptReviewStatus: 'needs-concept-review',
      automatedRecommendation: 'needs-concept-review',
    })).toEqual({ eligible: false, reason: 'needs-concept-review' })
    expect(queryEligibility({
      resolutionStatus: 'resolved',
      pbdbId: 'txn:36616',
      acceptedName: 'Aves',
      conceptReviewStatus: 'compatible',
      automatedRecommendation: 'accept-external-mapping',
    })).toEqual({ eligible: true, reason: 'resolution-ledger-accepted-mapping' })
  })

  it('normalizes provider fields without inventing missing coordinates', () => {
    const normalized = normalizePbdbOccurrence({
      oid: 'occ:12',
      tna: 'Test taxon',
      lng: 1,
      lat: 2,
      eag: 3,
      lag: 2,
      phl: 'Chordata',
    }, 'fixture-package')
    expect(normalized).toMatchObject({
      oid: 'occ:12',
      lng: '1',
      lat: '2',
      classification: { phylum: 'Chordata' },
      packageId: 'fixture-package',
    })
    expect(normalized).not.toHaveProperty('paleolng')
    expect(normalized).not.toHaveProperty('paleolat')
  })

  it('keeps occurrence ordering and identity checksums deterministic', () => {
    expect(['occ:20', 'occ:3'].sort((left, right) => numericOccurrenceId(left) - numericOccurrenceId(right))).toEqual(['occ:3', 'occ:20'])
    expect(checksumOccurrenceIds(['occ:3', 'occ:20'])).toBe('be7fe6a2b9a032655f23f391329cefebf1916e3b151d93ac2bbf0ad5bf0476a6')
  })
})
