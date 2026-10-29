import { create } from 'zustand'

interface NodeMapState {
  open: boolean
  selection: { id: string; name: string } | null
  selectionSequence: number
  mode: 'bubbles' | 'heatmap' | 'points'
  scope: 'direct' | 'descendants'
  exactTime: boolean
  select: (id: string, name: string) => void
  clear: () => void
  setOpen: (open: boolean) => void
  setMode: (mode: NodeMapState['mode']) => void
  setScope: (scope: NodeMapState['scope']) => void
  setExactTime: (exactTime: boolean) => void
}

/** Separate from legacy content-package selection; every source node may request map evidence. */
export const useNodeMapStore = create<NodeMapState>((set) => ({
  open: false, selection: null, selectionSequence: 0, mode: 'bubbles', scope: 'descendants', exactTime: false,
  select: (id, name) => set((state) => ({ selection: { id, name }, open: true, selectionSequence: state.selectionSequence + 1 })),
  clear: () => set({ selection: null }),
  setOpen: (open) => set({ open }),
  setMode: (mode) => set({ mode }),
  setScope: (scope) => set({ scope }),
  setExactTime: (exactTime) => set({ exactTime }),
}))
