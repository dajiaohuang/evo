import { describe, expect, it, vi } from 'vitest'
import {
  createAndroidFrontendAdapter, createIosFrontendAdapter, createWebFrontendAdapter,
  createFrontendClientState, reduceFrontendClientState, type FrontendAdapterSources,
} from './frontendAdapters'

const root = { id: 'root', parentId: null, scientificName: 'Animalia', authorship: null, rank: 'kingdom', status: 'accepted', sourceDatasetId: '316115', childCount: 1 }
const child = { ...root, id: 'child', parentId: 'root', scientificName: 'Animalia minor', rank: 'species', childCount: 0 }
const capabilities = {
  schemaVersion: 1 as const, apiVersion: 'v1' as const, protocolVersion: 'v1' as const, datasetVersion: 'dataset-test', appVersion: 'test',
  profiles: { full: { available: true, offline: true, scope: 'full' } }, features: [],
  treeIndex: { representation: 'packed-adjacency' as const, nodeCount: 2, rootCount: 1, paging: 'offset-cursor' as const, children: 'direct-children' as const, windowed: true as const, releaseAlias: 'COL26.8', recordEndpoint: '/v1/catalogue/taxa/{id}' as const, childrenEndpoint: '/v1/catalogue/taxa/{id}/children' as const, pageSize: { default: 200, max: 500 }, recordFields: ['id', 'parentId', 'scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId', 'childCount'] },
  treeRoots: [root],
}
const searchPage = { schemaVersion: 1 as const, apiVersion: 'v1' as const, protocolVersion: 'v1' as const, datasetVersion: 'dataset-test', query: 'minor', normalizedQuery: 'minor', records: [{ id: 'child', kind: 'taxon', title: child.scientificName, source: 'COL' }], totalMatches: 1, limit: 24 }
const example = { id: 'scene', type: 'explorer-preset' as const, title: { en: 'Scene', zh: '场景' }, description: { en: 'Description', zh: '描述' }, route: '#/map?age=10', entityIds: ['child'], claimIds: ['claim'], evidenceStatus: 'available-with-limitations' as const, limitations: [] }
const range = { id: 'range', entityId: 'child', taxonomicConcept: 'Animalia minor', geographicScope: 'global', olderMa: 20, youngerMa: 0, confidence: 'high' as const, status: 'available' as const, claimIds: ['claim'] }

function sources(): FrontendAdapterSources {
  return {
    loadCapabilities: vi.fn(async () => capabilities), loadRoots: vi.fn(async () => ({ capabilities, roots: [root] })), loadNode: vi.fn(async () => child),
    loadChildren: vi.fn(async () => ({ ...capabilities, parentId: 'root', queryStatus: 'catalogue-direct-children' as const, records: [child], total: 1, limit: 200 })),
    searchNames: vi.fn(async () => searchPage),
    loadPackageRegistry: vi.fn(async () => ({ schemaVersion: 1, version: 'dataset-test', schemaStatus: 'frozen' as const, packageCount: 1, entityCount: 1, packages: [{ id: 'pkg', title: 'Package', titleZh: '包', wave: 'test', platformMaturity: 'published' as const, scientificMaturity: 'published' as const, automatedReviewStatus: 'passed' as const, reviewStatus: 'reviewed' as const, entityCount: 1, runtimePath: 'pkg' }], entityToPackage: { child: 'pkg' } })),
    loadPackageRanges: vi.fn(async () => [range]), loadPackageResearchExamples: vi.fn(async () => ({ schemaVersion: 1 as const, packageId: 'pkg', examples: [example] })),
  }
}

describe('independent frontend adapters', () => {
  it('exposes the same v1 flow with explicit Web, Android and iOS boundaries', async () => {
    const web = createWebFrontendAdapter(sources()); const android = createAndroidFrontendAdapter(sources()); const ios = createIosFrontendAdapter(sources())
    expect(web.contract.target).toBe('web'); expect(android.contract.target).toBe('android'); expect(ios.contract.target).toBe('ios'); expect(android.contract.content.profile).toBe('native-full')
    await expect(web.searchNames('minor')).resolves.toMatchObject({ records: [{ id: 'child' }] }); await expect(android.loadTreePage('root')).resolves.toMatchObject({ records: [child] }); await expect(ios.loadNode('child')).resolves.toEqual(child)
  })
  it('covers search, tree page, detail and timeline scene-card flow', async () => {
    const adapter = createWebFrontendAdapter(sources()); const search = await adapter.searchNames('minor'); const page = await adapter.loadTreePage('root'); const node = await adapter.loadNode(search.records[0].id); const cards = await adapter.loadTimelineSceneCards(10)
    expect(search.records[0].id).toBe(page.records[0].id); expect(node.id).toBe('child'); expect(cards).toHaveLength(1); expect(cards[0].example.id).toBe('scene')
  })
  it('keeps the client state model bounded to fetched pages and selections', () => {
    let state = createFrontendClientState(); state = reduceFrontendClientState(state, { type: 'loading' }); state = reduceFrontendClientState(state, { type: 'roots', roots: [root] }); state = reduceFrontendClientState(state, { type: 'tree-page', page: { parentId: 'root', records: [child], total: 1 } }); state = reduceFrontendClientState(state, { type: 'node', node: child })
    expect(state.tree.pages.root.records).toEqual([child]); expect(state.selectedNode?.id).toBe('child'); expect(state.tree.pages).not.toHaveProperty('all')
  })
})
