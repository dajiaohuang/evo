import { describe, expect, it } from 'vitest'
import type { FossilOccurrence } from '../types'
import { buildDiversityBins, summarizeSampling, topObservedTaxa } from './diversity'

function occurrence(id: string, name: string, early: number, late: number): FossilOccurrence {
  return {
    oid: id, tna: name, idn: name, tid: '', rnk: 0, lng: '10', lat: '20',
    paleolng: 8, paleolat: 18, eag: early, lag: late, cid: `c-${id}`, oei: '', cc2: 'CN',
  }
}

describe('diversity summaries', () => {
  const records = [
    occurrence('1', 'Alpha', 100, 90),
    occurrence('2', 'Alpha', 90, 80),
    occurrence('3', 'Beta', 80, 60),
  ]

  it('summarizes sampling completeness without treating occurrences as richness', () => {
    const quality = summarizeSampling(records)
    expect(quality.totalOccurrences).toBe(3)
    expect(quality.observedTaxa).toBe(2)
    expect(quality.paleoCoordinateCoverage).toBe(1)
    expect(quality.medianAgeUncertaintyMa).toBe(10)
  })

  it('bins midpoint observations and preserves the occurrence total', () => {
    const bins = buildDiversityBins(records, 4)
    expect(bins).toHaveLength(4)
    expect(bins.reduce((sum, bin) => sum + bin.occurrences, 0)).toBe(3)
  })

  it('orders observed taxa by sampled occurrence count', () => {
    expect(topObservedTaxa(records)[0]).toEqual({ name: 'Alpha', count: 2 })
  })

  it('keeps sub-million-year and point-age bins ordered without inventing a wider range', () => {
    const bins = buildDiversityBins([occurrence('1', 'Alpha', 0.4, 0.1)], 12)
    expect(bins.every((bin) => bin.olderMa >= bin.youngerMa && bin.youngerMa >= 0.1)).toBe(true)
    expect(bins.reduce((sum, bin) => sum + bin.occurrences, 0)).toBe(1)
    expect(buildDiversityBins([occurrence('1', 'Alpha', 2, 2)], 12)).toEqual([
      { olderMa: 2, youngerMa: 2, occurrences: 1, observedTaxa: 1 },
    ])
  })

  it('excludes invalid ages and out-of-bounds coordinates from completeness', () => {
    const invalid = [occurrence('1', 'Alpha', NaN, 0), occurrence('2', 'Beta', 1, 2), occurrence('3', 'Gamma', 1, -1)]
    expect(buildDiversityBins(invalid)).toEqual([])
    expect(summarizeSampling(invalid).medianAgeUncertaintyMa).toBeNull()
    expect(summarizeSampling([{ ...records[0], paleolat: 91 }]).paleoCoordinateCoverage).toBe(0)
    expect(buildDiversityBins([...records, ...invalid], 4)).toEqual(buildDiversityBins(records, 4))
  })

  it('handles large samples without spreading them onto the call stack', () => {
    const large = Array.from({ length: 200_000 }, (_, index) => occurrence(String(index), 'Alpha', 100, 90))
    expect(buildDiversityBins(large, 12).reduce((sum, bin) => sum + bin.occurrences, 0)).toBe(large.length)
  })
})
