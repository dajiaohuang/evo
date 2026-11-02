import { beforeEach, expect, test, vi } from 'vitest'
import { searchStaticTree } from './catalogueTreeSource'
import { searchCatalogue } from './staticDataClient'
import { searchHigherCatalogue } from './higherCatalogueSearch'

vi.mock('./staticDataClient', () => ({
  searchCatalogue: vi.fn(),
  normalizeCatalogueQuery: (value: string) => value.toLowerCase().replaceAll(/[^a-z0-9]+/g, ' ').trim(),
}))
vi.mock('./higherCatalogueSearch', () => ({ searchHigherCatalogue: vi.fn() }))

beforeEach(() => vi.clearAllMocks())

test('combines exact higher taxa and species without losing homonyms', async () => {
  vi.mocked(searchCatalogue).mockResolvedValue({ manifest: { releaseAlias: 'COL26.8' }, records: [
    { id: 'species', scientificName: 'Zabrina species', authorship: null, status: 'accepted', acceptedId: null, parentId: '8LTCH', sourceDatasetId: null },
  ] } as Awaited<ReturnType<typeof searchCatalogue>>)
  vi.mocked(searchHigherCatalogue).mockResolvedValue([
    { id: '8LTCH', kind: 'catalogue-name', title: 'Zabrina', status: 'accepted', source: 'COL26.8' },
    { id: 'other', kind: 'catalogue-name', title: 'Zabrina', status: 'accepted', source: 'COL26.8' },
  ])
  const response = await searchStaticTree('Zabrina', { limit: 1, signal: new AbortController().signal })
  expect(response.records.map(record => record.id)).toEqual(['8LTCH', 'other'])
})
