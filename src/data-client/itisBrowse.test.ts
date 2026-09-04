import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { catalogueItisBrowseCollections, loadItisBrowseFile, packageItisBrowseCollections } from './itisBrowse'

const root = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/'
function catalogueCollections(packageId: string, native = true) {
  const manifest = JSON.parse(readFileSync(`${root}${packageId}/manifest.json`, 'utf8'))
  return catalogueItisBrowseCollections(manifest.extensions.map((extension: { files: Array<{ path: string }> }) => ({
    ...extension,
    delivery: { profile: native ? 'native-full' : 'web-light', completeRows: native },
    files: native ? extension.files.map((file) => ({ ...file, url: `catalogue/resource-packs/${file.path}` })) : [],
  })))
}

describe('ITIS record browsing over existing canonical partitions', () => {
  afterEach(() => vi.unstubAllGlobals())

  it.each(['fungi', 'bacteria', 'other-animals', 'protists-chromists'])('preserves every %s source-only inventory independently from COL rows', (packageId) => {
    const collections = catalogueCollections(packageId)
    expect(collections.length).toBeGreaterThan(0)
    for (const collection of collections) {
      expect(collection.colFiles.reduce((sum, file) => sum + file.records, 0)).toBe(collection.colCount)
      expect(collection.sourceOnlyFiles.reduce((sum, file) => sum + file.records, 0)).toBe(collection.sourceOnlyCount)
      expect(collection.colFiles.some((file) => collection.sourceOnlyFiles.some((source) => source.path === file.path))).toBe(false)
    }
  })

  it('retains zero-COL source collections and truly empty boundaries without borrowing records', () => {
    const collections = catalogueCollections('protists-chromists')
    expect(collections).toHaveLength(25)
    expect(collections.filter((collection) => collection.colCount > 0)).toHaveLength(8)
    expect(collections.filter((collection) => collection.colCount === 0 && collection.sourceOnlyCount > 0)).toHaveLength(5)
    expect(collections.filter((collection) => collection.colCount === 0 && collection.sourceOnlyCount === 0)).toHaveLength(12)
  })

  it('does not infer LPSN or Index Fungorum identity from the independent ITIS collections', () => {
    const bacteria = catalogueCollections('bacteria')[0]
    const fungi = catalogueCollections('fungi')[0]
    expect(bacteria.colCount).toBe(4827)
    expect(bacteria.boundary.en).toContain('never substitutes for LPSN')
    expect(fungi.colCount).toBe(157044)
    expect(fungi.boundary.en).toContain('never substitutes for Index Fungorum')
  })

  it.each(['fungi', 'bacteria', 'other-animals', 'protists-chromists'])('loads one actual compressed %s source file through the normal checksum/gzip client', async (packageId) => {
    const collection = catalogueCollections(packageId).find((candidate) => candidate.sourceOnlyFiles.length)!
    const file = collection.sourceOnlyFiles[0]
    const bytes = readFileSync(root + file.path)
    vi.stubGlobal('Worker', undefined)
    const fetcher = vi.fn().mockResolvedValue({ ok: true, arrayBuffer: async () => Uint8Array.from(bytes).buffer })
    vi.stubGlobal('fetch', fetcher)
    const rows = await loadItisBrowseFile(collection, 'source-only', 0)
    expect(rows).toHaveLength(file.records)
    expect(rows[0]).toEqual(JSON.parse(gunzipSync(bytes).toString().split('\n')[0]))
    expect(fetcher).toHaveBeenCalledTimes(1)
    expect(fetcher.mock.calls[0][0]).toContain(file.url)
  })

  it('rejects Web row access before requesting any unavailable shard', async () => {
    const fetcher = vi.fn()
    vi.stubGlobal('fetch', fetcher)
    const collection = catalogueCollections('bacteria', false)[0]
    expect(collection.sourceOnlyCount).toBe(9348)
    expect(collection.sourceOnlyFiles).toEqual([])
    await expect(loadItisBrowseFile(collection, 'source-only', 0)).rejects.toThrow('native-full')
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('keeps the Amphibia source-only partition distinct in the package layout', () => {
    const descriptor = JSON.parse(readFileSync('data/packages/vertebrata/amphibia/nomenclature/itis-tsn-sidecar.json', 'utf8'))
    const [collection] = packageItisBrowseCollections([{
      id: 'itis-2026-08-26-tsn-crosswalk', source: descriptor.sources.itis,
      evidenceBoundary: descriptor.evidenceBoundary, counts: descriptor.counts,
      files: descriptor.colUsageIdLocator.files, upstreamOnlyFiles: descriptor.upstreamOnly.files,
      delivery: { profile: 'native-full', completeRows: true },
    } as never])
    expect(collection.colCount).toBe(8923)
    expect(collection.sourceOnlyCount).toBe(8)
    expect(collection.sourceOnlyFiles).toHaveLength(1)
    const row = JSON.parse(gunzipSync(readFileSync(collection.sourceOnlyFiles[0].path)).toString().split('\n')[0])
    expect(row.colUsageId).toBeNull()
    expect(row.currentName.tsn).toBe('550547')
  })
})
