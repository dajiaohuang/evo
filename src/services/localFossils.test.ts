import { describe, expect, it, vi } from 'vitest'

vi.mock('../data-client/staticDataClient', () => {
  const periods = ['Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian', 'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary']
  const files = Object.fromEntries(periods.map((period) => [period, [{ url: `test/${period.toLowerCase()}.json.gz`, records: 0, packageId: 'test', period }]]))
  const loadRuntimeFile = async (file: { url: string }) => {
    if (file.url.includes('trilobites-chelicerates-occurrence-snapshot-v1')) return {
      packageId: 'trilobites-chelicerates',
      uniqueOccurrenceCount: 2,
      queryResults: [{ entityId: 'ptychopariida', upstreamReportedTotal: 2, paginationComplete: true }],
      records: [
        { oid: 'ptycho-1', tna: 'Ptychopariida', idn: '', tid: 'txn:20239', rnk: 9, lng: '0', lat: '0', eag: 520, lag: 500, cid: 'c1', oei: 'Cambrian', matchedEntityIds: ['ptychopariida'] },
        { oid: 'ptycho-2', tna: 'Rimouskia', idn: '', tid: 'txn:20928', rnk: 5, lng: '0', lat: '0', eag: 515, lag: 510, cid: 'c2', oei: 'Cambrian', matchedEntityIds: ['ptychopariida'] },
      ],
    }
    if (file.url.includes('perissodactyla-occurrence-snapshot-v1')) return {
      packageId: 'perissodactyla',
      uniqueOccurrenceCount: 3,
      queryResults: [{ entityId: 'brontotheriidae', upstreamReportedTotal: 3, paginationComplete: true }],
      records: [
        { oid: 'snapshot-1', tna: 'Brontotheriidae', idn: '', tid: 'txn:43027', rnk: 9, lng: '0', lat: '0', eag: 45, lag: 40, cid: 'c1', oei: 'Eocene', matchedEntityIds: ['brontotheriidae'] },
        { oid: 'snapshot-2', tna: 'Megacerops', idn: '', tid: 'txn:1', rnk: 5, lng: '0', lat: '0', eag: 38, lag: 34, cid: 'c2', oei: 'Eocene', matchedEntityIds: ['brontotheriidae'] },
      ],
    }
    if (file.url.includes('echinoderms-occurrence-snapshot-v1')) return {
      packageId: 'echinoderms',
      uniqueOccurrenceCount: 1,
      queryResults: [{ entityId: 'echinodermata', upstreamReportedTotal: 1, paginationComplete: true }],
      records: [{ oid: 'echino-1', tna: 'Pentremites', idn: '', tid: 'txn:1', rnk: 5, lng: '0', lat: '0', eag: 335, lag: 323, cid: 'c3', oei: 'Carboniferous', matchedEntityIds: ['echinodermata'] }],
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
    loadPackageManifest: async (packageId: string) => ({ files: { occurrenceSnapshot: { url: `${packageId}-occurrence-snapshot-v1.json.gz` } } }),
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

  it('loads a reconciled historical concept from its complete targeted snapshot', async () => {
    const descendants = await getFossilsByEntity('ptychopariida', 'descendants')
    const exact = await getFossilsByEntity('ptychopariida', 'exact')
    expect(descendants.records).toHaveLength(2)
    expect(descendants).toMatchObject({ queryStatus: 'complete-query-observed', matchedTotal: 2, rowsLoaded: 2 })
    expect(descendants.loadedPeriods).toEqual(['Cambrian', 'Ordovician', 'Silurian', 'Devonian', 'Carboniferous', 'Permian', 'Triassic', 'Jurassic', 'Cretaceous', 'Paleogene', 'Neogene', 'Quaternary'])
    expect(descendants.truncated).toBe(false)
    expect(descendants).toMatchObject({ indexStatus: 'hit', effectiveScope: 'descendants', fallbackApplied: false })
    expect(exact.records).toHaveLength(1)
  })

  it('reports an explicit exact fallback when a descendant index is missing', async () => {
    const result = await getFossilsByEntity('not-indexed', 'descendants')
    expect(result).toMatchObject({ indexStatus: 'miss', effectiveScope: 'exact', fallbackApplied: true })
  })

  it('uses the generic package-specific snapshot and reports bounded display details', async () => {
    const descendants = await getFossilsByEntity('brontotheriidae', 'descendants')
    const exact = await getFossilsByEntity('brontotheriidae', 'exact')
    expect(descendants).toMatchObject({ queryStatus: 'complete-query-observed', matchedTotal: 3, rowsLoaded: 2, truncated: true, samplingMethod: 'complete paginated PBDB base-id ID ledger with bounded package details' })
    expect(exact.records).toHaveLength(1)
  })

  it('loads a targeted snapshot from a non-flagship package', async () => {
    const result = await getFossilsByEntity('echinodermata', 'descendants')
    expect(result).toMatchObject({ queryStatus: 'complete-query-observed', sourceTotal: 1, matchedTotal: 1, rowsLoaded: 1, truncated: false })
    expect(result.records[0]?.oid).toBe('echino-1')
  })
})
