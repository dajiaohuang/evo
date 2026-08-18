import { describe, expect, it } from 'vitest'
import type { AppState } from '../index'
import { createFossilSlice } from '../fossilSlice'

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
