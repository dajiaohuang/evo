import { describe, expect, it, vi } from 'vitest'
import { loadStaticTreeChildren, loadStaticTreePath, loadStaticTreeRoots, searchStaticTree } from './catalogueTreeSource'

vi.mock('./staticDataClient', () => ({
  loadCatalogueManifest: vi.fn(async () => ({ releaseAlias: 'COL26.8', hierarchy: { counts: { nodes: 3 }, roots: [{ id: 'root' }] } })),
  loadCatalogueHierarchyNode: vi.fn(async (id: string) => ({ id, parentId: null, scientificName: id, authorship: null, rank: 'domain', status: 'accepted', sourceDatasetId: null, childCount: 3, projection: 'accepted-species-hierarchy' })),
  loadCatalogueChildren: vi.fn(async (parentId: string) => ['one', 'two', 'three'].map(id => ({ id, parentId, scientificName: id, authorship: null, rank: 'species', status: 'accepted', sourceDatasetId: null, childCount: 0 }))),
  loadCatalogueLineage: vi.fn(async (id: string) => [{ id }]),
  searchCatalogue: vi.fn(async () => ({ manifest: { releaseAlias: 'COL26.8' }, records: [{ id: 'syn', scientificName: 'Synonym', authorship: null, status: 'synonym', acceptedId: 'accepted', parentId: null, sourceDatasetId: null }] })),
}))

describe('static full catalogue tree', () => {
  it('reads the frozen roots and exposes the node count', async () => {
    const result = await loadStaticTreeRoots()
    expect(result.treeIndex).toEqual({ nodeCount: 3, releaseAlias: 'COL26.8' })
    expect(result.roots[0].id).toBe('root')
  })
  it('paginates children without dropping the last page', async () => {
    const first = await loadStaticTreeChildren('root', { limit: 2 })
    expect(first.records.map(row => row.id)).toEqual(['one', 'two'])
    expect(first.nextCursor).toBe('2')
    const last = await loadStaticTreeChildren('root', { limit: 2, cursor: first.nextCursor })
    expect(last.records.map(row => row.id)).toEqual(['three'])
    expect(last.nextCursor).toBeUndefined()
    await expect(loadStaticTreeChildren('root', { limit: 2, cursor: '-1' })).rejects.toThrow('Invalid catalogue page cursor')
  })
  it('preserves accepted identity when a synonym is searched', async () => {
    const result = await searchStaticTree('Synonym', { limit: 10, signal: new AbortController().signal })
    expect(result.records[0]).toMatchObject({ id: 'syn', acceptedId: 'accepted', kind: 'catalogue-name' })
    expect((await loadStaticTreePath('accepted'))[0].id).toBe('accepted')
  })
})
