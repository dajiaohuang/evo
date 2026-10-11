import hypothesis from '../../../data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json'
import type { TreeDisplayMode, TreeNode } from '../../types'
import { navigationTree, treePath } from './navigationTree'
export { treePath } from './navigationTree'

export function treeSource(mode: TreeDisplayMode): TreeNode {
  return (mode === 'navigation' || mode === 'radial' ? navigationTree : hypothesis.root) as TreeNode
}

export function treeScope(anchorId: string | undefined, requestedMode: TreeDisplayMode) {
  const mode = anchorId && !canLocateTreeNode(requestedMode, anchorId) ? 'navigation' : requestedMode
  const source = treeSource(mode)
  const path = anchorId ? treePath(source, anchorId) : null
  const anchor = path?.at(-1)
  // A terminal organism needs its parent and siblings to show its position.
  const root = anchor ? anchor.children?.length ? anchor : path?.at(-2) ?? anchor : source
  return { mode, root }
}

export function canLocateTreeNode(mode: TreeDisplayMode, nodeId: string): boolean {
  const node = treePath(treeSource(mode), nodeId)?.at(-1)
  return Boolean(node && (mode !== 'first-appearance' || node.rangeEvidenceLevel !== 'withheld-no-range-evidence'))
}

