import type { AppState } from './index'
import type { TaxonQueryScope, TreeDisplayMode } from '../types'

export interface SubjectSelection {
  nodeId: string | null
  taxonId?: string | null
  scope?: TaxonQueryScope
  clearOccurrence?: boolean
}

export interface TreeSlice {
  selectedNodeId: string | null
  expandedNodeIds: Set<string>
  visibleNodeIds: string[]
  treeMode: TreeDisplayMode
  selectNode: (nodeId: string | null) => void
  toggleExpand: (nodeId: string) => void
  setVisibleNodes: (ids: string[]) => void
  setTreeMode: (mode: TreeDisplayMode) => void
  selectSubject: (selection: SubjectSelection) => Promise<void>
}

export const createTreeSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): TreeSlice => ({
  selectedNodeId: null,
  expandedNodeIds: new Set<string>(),
  visibleNodeIds: [],
  treeMode: 'navigation',

  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),

  toggleExpand: (nodeId) => {
    const next = new Set(get().expandedNodeIds)
    if (next.has(nodeId)) next.delete(nodeId)
    else next.add(nodeId)
    set({ expandedNodeIds: next })
  },

  setVisibleNodes: (ids) => set({ visibleNodeIds: ids }),
  setTreeMode: (mode) => set({ treeMode: mode }),
  selectSubject: async ({ nodeId, taxonId = null, scope = 'descendants', clearOccurrence = true }) => {
    set({
      selectedNodeId: nodeId,
      highlightedTaxonId: taxonId,
      highlightedOccurrenceIds: [],
      ...(clearOccurrence ? { selectedOccurrence: null, selectedOccurrenceId: null } : {}),
    })
    if (!nodeId) return
    await get().loadOccurrencesForEntity(nodeId, scope)
    const queryKey = `${scope}:${nodeId}`
    const state = get()
    if (state.selectedNodeId !== nodeId || state.highlightedTaxonId !== taxonId) return
    set({ highlightedOccurrenceIds: (state.occurrencesByTaxonQuery[queryKey] ?? []).map((occurrence) => occurrence.oid) })
  },
})
