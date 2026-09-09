import {
  loadBackendCatalogueChildren,
  loadBackendCatalogueRoots,
  loadBackendCatalogueTaxon,
  loadBackendCapabilities,
  searchBackendNames,
  type BackendCapabilities,
  type BackendCatalogueChildrenResponse,
  type BackendNameSearchResponse,
  type BackendTreeNodeSummary,
} from '../data-client/backendClient'
import {
  loadPackageRanges,
  loadPackageRegistry,
  loadPackageResearchExamples,
} from '../data-client/staticDataClient'
import type { RuntimeRangeEvidence, RuntimeResearchExample } from '../data-client/types'
import { findTemporalPackageCards, type TemporalPackageCard, type TemporalPackageSource } from '../components/map/temporalPackageSceneMatcher'
import { resolveFrontendContract, type FrontendCapabilityContract, type FrontendTarget } from './frontendContract'

export interface FrontendAdapterSources {
  loadCapabilities: typeof loadBackendCapabilities
  loadRoots: typeof loadBackendCatalogueRoots
  loadNode: typeof loadBackendCatalogueTaxon
  loadChildren: typeof loadBackendCatalogueChildren
  searchNames: typeof searchBackendNames
  loadPackageRegistry: typeof loadPackageRegistry
  loadPackageRanges: typeof loadPackageRanges
  loadPackageResearchExamples: typeof loadPackageResearchExamples
}

const defaultSources: FrontendAdapterSources = {
  loadCapabilities: loadBackendCapabilities,
  loadRoots: loadBackendCatalogueRoots,
  loadNode: loadBackendCatalogueTaxon,
  loadChildren: loadBackendCatalogueChildren,
  searchNames: searchBackendNames,
  loadPackageRegistry,
  loadPackageRanges,
  loadPackageResearchExamples,
}

export interface FrontendTreePage {
  parentId: string | null
  records: BackendTreeNodeSummary[]
  total: number
  nextCursor?: string
}

export interface FrontendClientState {
  phase: 'idle' | 'loading' | 'ready' | 'error'
  datasetVersion: string | null
  error: string | null
  search: { query: string; page: BackendNameSearchResponse | null }
  tree: { roots: BackendTreeNodeSummary[]; pages: Record<string, FrontendTreePage> }
  selectedNode: BackendTreeNodeSummary | null
  timeline: { ageMa: number | null; cards: TemporalPackageCard[] }
}

export type FrontendClientAction =
  | { type: 'loading' }
  | { type: 'ready'; datasetVersion: string }
  | { type: 'error'; error: string }
  | { type: 'search'; query: string; page: BackendNameSearchResponse }
  | { type: 'roots'; roots: BackendTreeNodeSummary[] }
  | { type: 'tree-page'; page: FrontendTreePage }
  | { type: 'node'; node: BackendTreeNodeSummary }
  | { type: 'timeline'; ageMa: number; cards: TemporalPackageCard[] }

export function createFrontendClientState(): FrontendClientState {
  return {
    phase: 'idle', datasetVersion: null, error: null,
    search: { query: '', page: null }, tree: { roots: [], pages: {} }, selectedNode: null,
    timeline: { ageMa: null, cards: [] },
  }
}

export function reduceFrontendClientState(state: FrontendClientState, action: FrontendClientAction): FrontendClientState {
  switch (action.type) {
    case 'loading': return { ...state, phase: 'loading', error: null }
    case 'ready': return { ...state, phase: 'ready', datasetVersion: action.datasetVersion, error: null }
    case 'error': return { ...state, phase: 'error', error: action.error }
    case 'search': return { ...state, search: { query: action.query, page: action.page } }
    case 'roots': return { ...state, tree: { ...state.tree, roots: action.roots } }
    case 'tree-page': return { ...state, tree: { ...state.tree, pages: { ...state.tree.pages, [action.page.parentId ?? '__roots__']: action.page } } }
    case 'node': return { ...state, selectedNode: action.node }
    case 'timeline': return { ...state, timeline: { ageMa: action.ageMa, cards: action.cards } }
  }
}

export interface FrontendDataAdapter {
  readonly target: FrontendTarget
  readonly contract: FrontendCapabilityContract
  loadCapabilities(signal?: AbortSignal): Promise<BackendCapabilities>
  searchNames(query: string, options?: { cursor?: string; limit?: number; signal?: AbortSignal }): Promise<BackendNameSearchResponse>
  loadTreePage(parentId: string | null, options?: { cursor?: string; limit?: number; signal?: AbortSignal }): Promise<FrontendTreePage>
  loadNode(id: string, signal?: AbortSignal): Promise<BackendTreeNodeSummary>
  loadTimelineSceneCards(ageMa: number): Promise<TemporalPackageCard[]>
}

export function createFrontendAdapter(target: FrontendTarget, sources: FrontendAdapterSources = defaultSources): FrontendDataAdapter {
  const contract = resolveFrontendContract({
    nativePlatform: target === 'web' ? undefined : target,
    nativeApp: target === 'web' ? 'false' : 'true',
    backendBaseUrl: 'adapter-boundary',
  })
  let capabilitiesPromise: Promise<BackendCapabilities> | null = null
  let packageSourcesPromise: Promise<TemporalPackageSource[]> | null = null

  return {
    target,
    contract,
    loadCapabilities: async () => {
      if (!capabilitiesPromise) capabilitiesPromise = sources.loadCapabilities()
      return capabilitiesPromise
    },
    searchNames: (query, options) => sources.searchNames(query, options),
    loadTreePage: async (parentId, options) => {
      if (parentId === null) {
        const roots = await sources.loadRoots()
        return { parentId: null, records: roots.roots, total: roots.roots.length }
      }
      const page: BackendCatalogueChildrenResponse = await sources.loadChildren(parentId, options)
      return { parentId, records: page.records, total: page.total, nextCursor: page.nextCursor }
    },
    loadNode: (id, signal) => sources.loadNode(id, signal),
    loadTimelineSceneCards: async (ageMa) => {
      if (!packageSourcesPromise) {
        packageSourcesPromise = sources.loadPackageRegistry().then((registry) => Promise.all(registry.packages.map(async (entry) => {
          const [research, ranges] = await Promise.all([
            sources.loadPackageResearchExamples(entry.id),
            sources.loadPackageRanges(entry.id),
          ])
          return {
            id: entry.id, title: entry.title, titleZh: entry.titleZh,
            examples: research.examples as RuntimeResearchExample[], ranges: ranges as RuntimeRangeEvidence[],
          }
        })))
      }
      return findTemporalPackageCards(await packageSourcesPromise, ageMa)
    },
  }
}

export const createWebFrontendAdapter = (sources?: FrontendAdapterSources) => createFrontendAdapter('web', sources)
export const createAndroidFrontendAdapter = (sources?: FrontendAdapterSources) => createFrontendAdapter('android', sources)
export const createIosFrontendAdapter = (sources?: FrontendAdapterSources) => createFrontendAdapter('ios', sources)
