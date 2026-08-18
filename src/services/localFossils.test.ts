import { describe, expect, it } from 'vitest'
import { getFossilsByInterval, getLoadedFossilTotal } from './localFossils'

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
})
