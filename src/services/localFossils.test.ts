import { describe, expect, it } from 'vitest'
import { getFossilsByInterval, getFossilsByTaxon, getLoadedFossilTotal } from './localFossils'

describe('local fossil chunks', () => {
  it('loads a geological period on demand and caches its total', async () => {
    expect(getLoadedFossilTotal('Cretaceous')).toBe(0)
    const records = await getFossilsByInterval('Cretaceous')
    expect(records).toHaveLength(800)
    expect(getLoadedFossilTotal('Cretaceous')).toBe(800)
  })

  it('returns an empty set for an unknown period', async () => {
    await expect(getFossilsByInterval('Unknown')).resolves.toEqual([])
  })

  it('distinguishes exact taxon rows from the represented descendant closure', async () => {
    const descendants = await getFossilsByTaxon('txn:40700', 'descendants')
    const exact = await getFossilsByTaxon('txn:40700', 'exact')
    expect(descendants.records).toHaveLength(2)
    expect(descendants.loadedPeriods).toEqual(['Quaternary'])
    expect(descendants.truncated).toBe(false)
    expect(exact.records).toHaveLength(0)
  })
})
