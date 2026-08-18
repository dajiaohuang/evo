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
})
