import { frontendContract, FRONTEND_BACKEND_PROTOCOL_VERSION, FRONTEND_TREE_PAGE_SIZE } from '../platform/frontendContract'

export interface BackendTreeNodeSummary {
  id: string
  parentId: string | null
  scientificName: string
  authorship: string | null
  rank: string
  status: string
  sourceDatasetId: string | null
  childCount: number
}

export interface BackendTreeIndexDescriptor {
  representation: 'packed-adjacency'
  nodeCount: number
  rootCount: number
  paging: 'offset-cursor'
  children: 'direct-children'
  windowed: true
  releaseAlias: string
  recordEndpoint: '/v1/catalogue/taxa/{id}'
  childrenEndpoint: '/v1/catalogue/taxa/{id}/children'
  pageSize: { default: number; max: number }
  recordFields: string[]
}

export interface BackendCapabilities {
  schemaVersion: 1
  apiVersion: 'v1'
  protocolVersion: 'v1'
  datasetVersion: string
  appVersion: string
  profiles: Record<string, { available: boolean; offline: boolean; scope: string }>
  features: string[]
  treeIndex: BackendTreeIndexDescriptor
  treeRoots: BackendTreeNodeSummary[]
}

export interface BackendCatalogueTaxonResponse {
  schemaVersion: 1
  apiVersion: 'v1'
  protocolVersion: 'v1'
  datasetVersion: string
  entityId: string
  record: BackendTreeNodeSummary
  releaseAlias: string
}

export interface BackendCatalogueChildrenResponse {
  schemaVersion: 1
  apiVersion: 'v1'
  protocolVersion: 'v1'
  datasetVersion: string
  parentId: string
  queryStatus: 'catalogue-direct-children'
  records: BackendTreeNodeSummary[]
  total: number
  limit: number
  nextCursor?: string
}

export interface BackendNameSearchRecord {
  id: string
  kind: string
  title: string
  authorship?: string | null
  status?: string
  acceptedId?: string | null
  parentId?: string | null
  sourceDatasetId?: string | null
  source: string
  recordUrl?: string
}

export interface BackendNameSearchResponse {
  schemaVersion: 1
  apiVersion: 'v1'
  protocolVersion: 'v1'
  datasetVersion: string
  query: string
  normalizedQuery: string
  records: BackendNameSearchRecord[]
  totalMatches: number
  limit: number
  nextCursor?: string
}

const configuredBaseUrl = (import.meta.env.VITE_EVO_API_BASE_URL as string | undefined)?.trim()
const backendBaseUrl = configuredBaseUrl ? configuredBaseUrl.replace(/\/+$/, '') : null
const NODE_CACHE_LIMIT = 2048
const CHILD_PAGE_CACHE_LIMIT = 96
const SEARCH_PAGE_CACHE_LIMIT = 24
export const BACKEND_TREE_PAGE_SIZE = FRONTEND_TREE_PAGE_SIZE

let capabilityPromise: Promise<BackendCapabilities> | null = null
const nodeCache = new Map<string, BackendTreeNodeSummary>()
const nodeInFlight = new Map<string, Promise<BackendTreeNodeSummary>>()
const childPageCache = new Map<string, BackendCatalogueChildrenResponse>()
const childPageInFlight = new Map<string, Promise<BackendCatalogueChildrenResponse>>()
const searchPageCache = new Map<string, BackendNameSearchResponse>()
const searchPageInFlight = new Map<string, Promise<BackendNameSearchResponse>>()

export function isBackendConfigured(): boolean {
  return frontendContract.backend.configured
}

export function backendUrl(pathname: string): string {
  if (!backendBaseUrl) throw new Error('Evo backend is not configured')
  return `${backendBaseUrl}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}

function touch<T>(cache: Map<string, T>, key: string, value: T, limit: number): T {
  cache.delete(key)
  cache.set(key, value)
  while (cache.size > limit) {
    const oldest = cache.keys().next().value
    if (oldest === undefined) break
    cache.delete(oldest)
  }
  return value
}

function assertEnvelope(value: unknown): asserts value is { schemaVersion: 1; apiVersion: 'v1'; protocolVersion: 'v1'; datasetVersion: string } {
  if (!value || typeof value !== 'object') throw new Error('Evo backend returned a non-object response')
  const envelope = value as Record<string, unknown>
  if (envelope.schemaVersion !== 1 || envelope.apiVersion !== FRONTEND_BACKEND_PROTOCOL_VERSION || envelope.protocolVersion !== FRONTEND_BACKEND_PROTOCOL_VERSION || typeof envelope.datasetVersion !== 'string') {
    throw new Error('Evo backend protocol v1 response is not the current frontend contract')
  }
}

function assertNodeSummary(value: unknown): BackendTreeNodeSummary {
  if (!value || typeof value !== 'object') throw new Error('Evo backend returned an invalid tree node summary')
  const node = value as Record<string, unknown>
  if (typeof node.id !== 'string' || (node.parentId !== null && typeof node.parentId !== 'string')
    || typeof node.scientificName !== 'string' || (node.authorship !== null && typeof node.authorship !== 'string')
    || typeof node.rank !== 'string' || typeof node.status !== 'string'
    || (node.sourceDatasetId !== null && typeof node.sourceDatasetId !== 'string')
    || typeof node.childCount !== 'number' || !Number.isInteger(node.childCount) || node.childCount < 0) {
    throw new Error('Evo backend returned an invalid tree node summary')
  }
  return node as unknown as BackendTreeNodeSummary
}

async function requestJson<T>(pathname: string, signal?: AbortSignal): Promise<T> {
  if (!isBackendConfigured()) throw new Error('Evo backend is not configured for this edition')
  const response = await fetch(backendUrl(pathname), { headers: { Accept: 'application/json' }, signal })
  if (!response.ok) {
    let detail = ''
    try {
      const payload = await response.json() as { error?: { message?: string } }
      detail = payload.error?.message ? `: ${payload.error.message}` : ''
    } catch {
      // Keep the status as the useful diagnostic when the backend did not return JSON.
    }
    throw new Error(`Evo backend request failed (${response.status}) for ${pathname}${detail}`)
  }
  const value = await response.json() as unknown
  assertEnvelope(value)
  return value as T
}

function assertDataset(value: { datasetVersion: string }, capabilities: BackendCapabilities): void {
  if (value.datasetVersion !== capabilities.datasetVersion) {
    throw new Error(`Evo backend mixed dataset versions: expected ${capabilities.datasetVersion}, received ${value.datasetVersion}`)
  }
}

export async function loadBackendCapabilities(): Promise<BackendCapabilities> {
  if (!isBackendConfigured()) throw new Error('Evo backend is not configured for this edition')
  if (!capabilityPromise) {
    capabilityPromise = requestJson<BackendCapabilities>('/v1/capabilities').then((value) => {
      const requiredRecordFields = ['id', 'parentId', 'scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId', 'childCount']
      if (value.treeIndex?.representation !== 'packed-adjacency' || typeof value.treeIndex.releaseAlias !== 'string' || !value.treeIndex.releaseAlias
        || value.treeIndex.paging !== 'offset-cursor' || value.treeIndex.children !== 'direct-children' || value.treeIndex.windowed !== true
        || !Number.isInteger(value.treeIndex.nodeCount) || value.treeIndex.nodeCount < 1
        || !Number.isInteger(value.treeIndex.rootCount) || value.treeIndex.rootCount < 1
        || value.treeIndex.recordEndpoint !== '/v1/catalogue/taxa/{id}'
        || value.treeIndex.childrenEndpoint !== '/v1/catalogue/taxa/{id}/children'
        || !value.treeIndex.pageSize || !Number.isInteger(value.treeIndex.pageSize.default) || value.treeIndex.pageSize.default < 1
        || !Number.isInteger(value.treeIndex.pageSize.max) || value.treeIndex.pageSize.max < value.treeIndex.pageSize.default
        || !Array.isArray(value.treeIndex.recordFields) || value.treeIndex.recordFields.length !== requiredRecordFields.length
        || value.treeIndex.recordFields.some((field, index) => field !== requiredRecordFields[index])
        || !Array.isArray(value.treeRoots) || value.treeRoots.length !== value.treeIndex.rootCount) {
        throw new Error('Evo backend does not advertise the current packed-adjacency tree contract')
      }
      const roots = value.treeRoots.map(assertNodeSummary)
      return { ...value, treeRoots: roots }
    })
  }
  return capabilityPromise
}

export async function loadBackendCatalogueRoots(): Promise<{
  capabilities: BackendCapabilities
  roots: BackendTreeNodeSummary[]
}> {
  const capabilities = await loadBackendCapabilities()
  return { capabilities, roots: capabilities.treeRoots }
}

export async function loadBackendCatalogueTaxon(id: string, signal?: AbortSignal): Promise<BackendTreeNodeSummary> {
  const cached = nodeCache.get(id)
  if (cached) {
    touch(nodeCache, id, cached, NODE_CACHE_LIMIT)
    return cached
  }
  const pending = nodeInFlight.get(id)
  if (pending) return pending
  const request = Promise.all([loadBackendCapabilities(), requestJson<BackendCatalogueTaxonResponse>(`/v1/catalogue/taxa/${encodeURIComponent(id)}`, signal)])
    .then(([capabilities, response]) => {
      assertDataset(response, capabilities)
      if (response.entityId !== id || response.record.id !== id) throw new Error(`Evo backend returned the wrong tree node for ${id}`)
      return touch(nodeCache, id, assertNodeSummary(response.record), NODE_CACHE_LIMIT)
    })
    .finally(() => nodeInFlight.delete(id))
  nodeInFlight.set(id, request)
  return request
}

export async function loadBackendCatalogueChildren(
  parentId: string,
  options: { cursor?: string; limit?: number; signal?: AbortSignal } = {},
): Promise<BackendCatalogueChildrenResponse> {
  const limit = Math.max(1, Math.min(500, Math.trunc(options.limit ?? BACKEND_TREE_PAGE_SIZE)))
  const cursor = options.cursor ?? ''
  const key = `${parentId}:${cursor}:${limit}`
  const cached = childPageCache.get(key)
  if (cached) return touch(childPageCache, key, cached, CHILD_PAGE_CACHE_LIMIT)
  const pending = childPageInFlight.get(key)
  if (pending) return pending
  const query = new URLSearchParams({ limit: String(limit) })
  if (cursor) query.set('cursor', cursor)
  const request = Promise.all([loadBackendCapabilities(), requestJson<BackendCatalogueChildrenResponse>(`/v1/catalogue/taxa/${encodeURIComponent(parentId)}/children?${query}`, options.signal)])
    .then(([capabilities, response]) => {
      assertDataset(response, capabilities)
      if (response.parentId !== parentId || !Array.isArray(response.records) || response.records.some((record) => record.parentId !== parentId)) {
        throw new Error(`Evo backend returned an invalid child page for ${parentId}`)
      }
      const normalized = { ...response, records: response.records.map(assertNodeSummary) }
      normalized.records.forEach((record) => touch(nodeCache, record.id, record, NODE_CACHE_LIMIT))
      return touch(childPageCache, key, normalized, CHILD_PAGE_CACHE_LIMIT)
    })
    .finally(() => childPageInFlight.delete(key))
  childPageInFlight.set(key, request)
  return request
}

export async function loadBackendCataloguePath(id: string, signal?: AbortSignal): Promise<BackendTreeNodeSummary[]> {
  const path: BackendTreeNodeSummary[] = []
  const visited = new Set<string>()
  let currentId: string | null = id
  while (currentId) {
    if (visited.has(currentId)) throw new Error(`Evo backend tree cycle detected at ${currentId}`)
    visited.add(currentId)
    const node = await loadBackendCatalogueTaxon(currentId, signal)
    path.push(node)
    currentId = node.parentId
    if (path.length > 128) throw new Error(`Evo backend tree path exceeds 128 nodes for ${id}`)
  }
  return path.reverse()
}

export async function searchBackendNames(
  query: string,
  options: { cursor?: string; limit?: number; signal?: AbortSignal } = {},
): Promise<BackendNameSearchResponse> {
  const limit = Math.max(1, Math.min(100, Math.trunc(options.limit ?? 24)))
  const cursor = options.cursor ?? ''
  const key = `${query}:${cursor}:${limit}`
  const cached = searchPageCache.get(key)
  if (cached) return touch(searchPageCache, key, cached, SEARCH_PAGE_CACHE_LIMIT)
  const pending = searchPageInFlight.get(key)
  if (pending) return pending
  const params = new URLSearchParams({ q: query, limit: String(limit) })
  if (cursor) params.set('cursor', cursor)
  const request = Promise.all([loadBackendCapabilities(), requestJson<BackendNameSearchResponse>(`/v1/search/names?${params}`, options.signal)])
    .then(([capabilities, response]) => {
      assertDataset(response, capabilities)
      if (!Array.isArray(response.records) || response.records.some((record) => typeof record.id !== 'string' || typeof record.title !== 'string')) {
        throw new Error('Evo backend returned an invalid name-search page')
      }
      return touch(searchPageCache, key, response, SEARCH_PAGE_CACHE_LIMIT)
    })
    .finally(() => searchPageInFlight.delete(key))
  searchPageInFlight.set(key, request)
  return request
}

export function clearBackendMemoryCache(): void {
  capabilityPromise = null
  nodeCache.clear()
  nodeInFlight.clear()
  childPageCache.clear()
  childPageInFlight.clear()
  searchPageCache.clear()
  searchPageInFlight.clear()
}
