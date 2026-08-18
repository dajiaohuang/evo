import { describe, expect, it, vi } from 'vitest'
import type { AppState } from '../index'
import { createFossilSlice } from '../fossilSlice'

vi.mock('../../services/localFossils', () => ({
  getFossilsByTaxon: async (taxonId: string, scope: 'exact' | 'descendants') => ({
    taxonId,
    scope,
    effectiveScope: scope,
    indexStatus: 'hit',
    fallbackApplied: false,
    sourceTotal: 2,
    matchedTotal: scope === 'descendants' ? 2 : 0,
    rowsLoaded: scope === 'descendants' ? 2 : 0,
    truncated: false,
    samplingMethod: 'test fixture',
    loadedPeriods: ['Quaternary'],
    records: scope === 'descendants' ? [
      { oid: 'one', idn: 'One', tid: 'txn:40701', lng: '0', lat: '0', eag: 1, lag: 0, cid: 'c1', oei: '' },
      { oid: 'two', idn: 'Two', tid: 'txn:40702', lng: '0', lat: '0', eag: 1, lag: 0, cid: 'c2', oei: '' },
    ] : [],
  }),
}))

describe('createFossilSlice', () => {
  it('keeps exact and descendant records under separate query keys', async () => {
    const state: Partial<AppState> = {}
    const set = (partial: Partial<AppState>) => { Object.assign(state, partial) }
    const get = () => state as AppState
    Object.assign(state, createFossilSlice(set, get))

    await get().loadOccurrencesForTaxon('txn:40700', 'descendants')
    await get().loadOccurrencesForTaxon('txn:40700', 'exact')

    expect(get().occurrencesByTaxonQuery['descendants:txn:40700']).toHaveLength(2)
    expect(get().occurrencesByTaxonQuery['exact:txn:40700']).toHaveLength(0)
    expect(get().taxonOccurrenceQueries['descendants:txn:40700'].effectiveScope).toBe('descendants')
    expect(get().taxonOccurrenceQueries['exact:txn:40700'].effectiveScope).toBe('exact')
  })
})
