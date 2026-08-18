import type { AppState } from './index'
import type { TreeDisplayMode } from '../types'

export interface TreeSlice {
  selectedNodeId: string | null
  expandedNodeIds: Set<string>
  visibleNodeIds: string[]
  treeMode: TreeDisplayMode
  selectNode: (nodeId: string | null) => void
  toggleExpand: (nodeId: string) => void
  setVisibleNodes: (ids: string[]) => void
  setTreeMode: (mode: TreeDisplayMode) => void
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
})
