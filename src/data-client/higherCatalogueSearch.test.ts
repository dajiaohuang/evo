import { createHash, webcrypto } from 'node:crypto'
import { gzipSync } from 'node:zlib'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'

vi.mock('./staticDataClient', () => ({
  normalizeCatalogueQuery: (value: string) => value.toLowerCase().replaceAll(/[^a-z0-9]+/g, ' ').trim(),
  loadCatalogueManifest: async () => ({ hierarchy: { counts: { higherTaxonNodes: 2 }, nodes: { files: [{ prefix: '00', sha256: 'a'.repeat(64) }] } } }),
}))

beforeEach(() => { vi.resetModules(); vi.stubGlobal('crypto', webcrypto) })
afterEach(() => { vi.unstubAllGlobals() })

function installIndex(corrupt = false, wrongTree = false, shortNames = false) {
  const prefix = shortNames ? 'aa' : 'za'
  const rows = shortNames
    ? ['aa', 'aabb'].map((name, i) => ({ id: String(i), scientificName: name, authorship: null, rank: 'genus', status: 'accepted', parentId: null, sourceDatasetId: null, normalizedName: name, normalizedBare: name }))
    : ['8LTCH', 'OTHER'].map(id => ({ id, scientificName: 'Zabrina', authorship: null, rank: 'subtribe', status: 'accepted', parentId: '8KTY5', sourceDatasetId: null, normalizedName: 'zabrina', normalizedBare: 'zabrina' }))
  const raw = Buffer.from(JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', prefix, records: rows }))
  const zipped = gzipSync(raw), sha = (value: Uint8Array) => createHash('sha256').update(value).digest('hex'), hash = sha(zipped), path = `${prefix}-${hash.slice(0, 16)}.json.gz`
  const manifest = { schemaVersion: 1, releaseAlias: 'COL26.8', nodes: 2, hierarchyNodeHashes: { '00': (wrongTree ? 'b' : 'a').repeat(64) }, files: { [prefix]: { path, sha256: hash, bytes: zipped.length, sourceSha256: sha(raw), sourceBytes: raw.length, records: rows.length } } }
  const fetchMock = vi.fn(async (url: string) => url.endsWith('manifest.json')
    ? { ok: true, json: async () => manifest }
    : { ok: true, arrayBuffer: async () => Uint8Array.from(corrupt ? Buffer.alloc(zipped.length) : zipped).buffer })
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

test('short genus names use exact matching without returning every prefix match', async () => {
  installIndex(false, false, true)
  const { searchHigherCatalogue } = await import('./higherCatalogueSearch')
  expect((await searchHigherCatalogue('Aa', 24, new AbortController().signal)).map(row => row.id)).toEqual(['0'])
})

test('higher taxa are searchable and exact homonyms remain visible', async () => {
  const fetchMock = installIndex()
  const { searchHigherCatalogue } = await import('./higherCatalogueSearch')
  const rows = await searchHigherCatalogue('Zabrina', 1, new AbortController().signal)
  expect(rows.map(row => row.id)).toEqual(['8LTCH', 'OTHER'])
  expect(rows[0]).toMatchObject({ kind: 'catalogue-name', parentId: '8KTY5', source: 'COL26.8' })
  expect(await searchHigherCatalogue('zab', 1, new AbortController().signal)).toHaveLength(1)
  expect(fetchMock).toHaveBeenCalledTimes(2)
})

test('rejects a corrupted index shard instead of returning a false result', async () => {
  installIndex(true)
  const { searchHigherCatalogue } = await import('./higherCatalogueSearch')
  await expect(searchHigherCatalogue('Zabrina', 24, new AbortController().signal)).rejects.toThrow(/size mismatch|hash mismatch/)
})

test('older installations without the optional index retain species search', async () => {
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 404 })))
  const { searchHigherCatalogue } = await import('./higherCatalogueSearch')
  expect(await searchHigherCatalogue('Zabrina', 24, new AbortController().signal)).toEqual([])
})

test('rejects an index built from a different hierarchy', async () => {
  installIndex(false, true)
  const { searchHigherCatalogue } = await import('./higherCatalogueSearch')
  await expect(searchHigherCatalogue('Zabrina', 24, new AbortController().signal)).rejects.toThrow(/does not match the current tree/)
})
