import {
  loadCatalogueChildren, loadCatalogueHierarchyNode, loadCatalogueLineage, loadCatalogueManifest, searchCatalogue,
} from './staticDataClient'
import type { BackendNameSearchRecord, BackendTreeNodeSummary } from './backendClient'

export async function loadStaticTreeRoots() {
  const manifest = await loadCatalogueManifest()
  const roots = await Promise.all(manifest.hierarchy.roots.map(async root => {
    const node = await loadCatalogueHierarchyNode(root.id)
    if (!node || node.projection !== 'accepted-species-hierarchy') throw new Error(`Missing catalogue root ${root.id}`)
    return node
  }))
  return { roots, treeIndex: { nodeCount: manifest.hierarchy.counts.nodes, releaseAlias: manifest.releaseAlias } }
}

export async function loadStaticTreeChildren(parentId: string, options: { cursor?: string; limit: number }) {
  const offset = options.cursor === undefined ? 0 : Number(options.cursor)
  if (!Number.isSafeInteger(offset) || offset < 0) throw new Error('Invalid catalogue page cursor')
  const records = await loadCatalogueChildren(parentId)
  const page = records.slice(offset, offset + options.limit)
  return { records: page, total: records.length, nextCursor: offset + page.length < records.length ? String(offset + page.length) : undefined }
}

export async function loadStaticTreePath(id: string): Promise<BackendTreeNodeSummary[]> {
  return loadCatalogueLineage(id)
}

export async function searchStaticTree(query: string, options: { limit: number; signal: AbortSignal }): Promise<{ records: BackendNameSearchRecord[] }> {
  const response = await searchCatalogue(query, options.limit, options.signal)
  return { records: response.records.map(record => ({ id: record.id, kind: 'catalogue-name', title: record.scientificName,
    authorship: record.authorship, status: record.status, acceptedId: record.acceptedId, parentId: record.parentId,
    sourceDatasetId: record.sourceDatasetId, source: response.manifest.releaseAlias })) }
}
