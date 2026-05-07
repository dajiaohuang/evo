import type { AppState } from './index'

export interface TreeSlice {
  selectedNodeId: string | null
  expandedNodeIds: Set<string>
  visibleNodeIds: string[]
  selectNode: (nodeId: string | null) => void
  toggleExpand: (nodeId: string) => void
  setVisibleNodes: (ids: string[]) => void
}

export const createTreeSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): TreeSlice => ({
  selectedNodeId: null,
  expandedNodeIds: new Set<string>(),
  visibleNodeIds: [],

  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),

  toggleExpand: (nodeId) => {
    const next = new Set(get().expandedNodeIds)
    if (next.has(nodeId)) next.delete(nodeId)
    else next.add(nodeId)
    set({ expandedNodeIds: next })
  },

  setVisibleNodes: (ids) => set({ visibleNodeIds: ids }),
})
