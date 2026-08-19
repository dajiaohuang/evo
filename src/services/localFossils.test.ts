import { describe, expect, it, vi } from 'vitest'

vi.mock('../data-client/staticDataClient', () => {
  const periods = ['Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian', 'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary']
  const files = Object.fromEntries(periods.map((period) => [period, [{ url: `test/${period.toLowerCase()}.json.gz`, records: 0, packageId: 'test', period }]]))
  const loadRuntimeFile = async (file: { url: string }) => {
    if (file.url.includes('cambrian')) return (await import('../../data/fossils/cambrian.json')).default
    if (file.url.includes('ordovician')) return (await import('../../data/fossils/ordovician.json')).default
    if (file.url.includes('silurian')) return (await import('../../data/fossils/silurian.json')).default
    if (file.url.includes('devonian')) return (await import('../../data/fossils/devonian.json')).default
    if (file.url.includes('carboniferous')) return (await import('../../data/fossils/carboniferous.json')).default
    if (file.url.includes('permian')) return (await import('../../data/fossils/permian.json')).default
    if (file.url.includes('triassic')) return (await import('../../data/fossils/triassic.json')).default
    if (file.url.includes('jurassic')) return (await import('../../data/fossils/jurassic.json')).default
    if (file.url.includes('cretaceous')) return (await import('../../data/fossils/cretaceous.json')).default
    if (file.url.includes('paleogene')) return (await import('../../data/fossils/paleogene.json')).default
    if (file.url.includes('neogene')) return (await import('../../data/fossils/neogene.json')).default
    if (file.url.includes('quaternary')) return (await import('../../data/fossils/quaternary.json')).default
    return []
  }
  return {
    loadOccurrenceManifest: async () => ({ periods: files }),
    loadRuntimeFile,
  }
})
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
    expect(descendants.records).toHaveLength(42)
    expect(descendants.loadedPeriods).toEqual(['Neogene', 'Quaternary'])
    expect(descendants.truncated).toBe(false)
    expect(descendants).toMatchObject({ indexStatus: 'hit', effectiveScope: 'descendants', fallbackApplied: false })
    expect(exact.records).toHaveLength(0)
  })

  it('reports an explicit exact fallback when a descendant index is missing', async () => {
    const result = await getFossilsByTaxon('txn:not-indexed', 'descendants')
    expect(result).toMatchObject({ indexStatus: 'miss', effectiveScope: 'exact', fallbackApplied: true })
  })
})
