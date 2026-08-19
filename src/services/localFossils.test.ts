import { describe, expect, it, vi } from 'vitest'

vi.mock('../data-client/staticDataClient', () => {
  const periods = ['Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian', 'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary']
  const files = Object.fromEntries(periods.map((period) => [period, [{ url: `test/${period.toLowerCase()}.json.gz`, records: 0, packageId: 'test', period }]]))
  const loadRuntimeFile = async (file: { url: string }) => {
    if (file.url.includes('occurrence-snapshot-v2')) return {
      queryResults: [{ profileId: 'brontotheriidae', entityId: 'brontotheriidae', rowsFetched: 2, paginationComplete: true, zeroInterpretation: 'complete-query-observed' }],
      records: [
        { oid: 'snapshot-1', tna: 'Brontotheriidae', idn: '', tid: 'txn:43027', rnk: 9, lng: '0', lat: '0', eag: 45, lag: 40, cid: 'c1', oei: 'Eocene', matchedProfileIds: ['brontotheriidae'] },
        { oid: 'snapshot-2', tna: 'Megacerops', idn: '', tid: 'txn:1', rnk: 5, lng: '0', lat: '0', eag: 38, lag: 34, cid: 'c2', oei: 'Eocene', matchedProfileIds: ['brontotheriidae'] },
      ],
    }
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
    loadPackageManifest: async () => ({ files: { occurrenceSnapshot: { url: 'occurrence-snapshot-v2.json.gz' } } }),
    loadRuntimeFile,
  }
})
import { getFossilsByEntity, getFossilsByInterval, getLoadedFossilTotal } from './localFossils'

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
    const descendants = await getFossilsByEntity('felidae', 'descendants')
    const exact = await getFossilsByEntity('felidae', 'exact')
    expect(descendants.records).toHaveLength(44)
    expect(descendants.loadedPeriods).toEqual(['Neogene', 'Quaternary'])
    expect(descendants.truncated).toBe(false)
    expect(descendants).toMatchObject({ indexStatus: 'hit', effectiveScope: 'descendants', fallbackApplied: false })
    expect(exact.records).toHaveLength(4)
  })

  it('reports an explicit exact fallback when a descendant index is missing', async () => {
    const result = await getFossilsByEntity('not-indexed', 'descendants')
    expect(result).toMatchObject({ indexStatus: 'miss', effectiveScope: 'exact', fallbackApplied: true })
  })

  it('uses the complete package-specific snapshot for eligible flagship profiles', async () => {
    const descendants = await getFossilsByEntity('brontotheriidae', 'descendants')
    const exact = await getFossilsByEntity('brontotheriidae', 'exact')
    expect(descendants).toMatchObject({ queryStatus: 'complete-query-observed', rowsLoaded: 2, truncated: false, samplingMethod: 'complete paginated PBDB base-id snapshot' })
    expect(exact.records).toHaveLength(1)
  })
})
