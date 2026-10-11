import navigation from '../../../data/navigation/atlas-ontology.json'
import type { TreeNode } from '../../types'

export const navigationTree = navigation as TreeNode

export function treePath(root: TreeNode, id: string): TreeNode[] | null {
  if (root.id === id) return [root]
  for (const child of root.children ?? []) {
    const path = treePath(child, id)
    if (path) return [root, ...path]
  }
  return null
}

export function resolveTreeNodeId(idOrName: string): string | undefined {
  const needle = idOrName.trim().toLowerCase()
  if (!needle) return undefined
  const visit = (node: TreeNode): string | undefined => {
    if ([node.id, node.name, node.commonName, node.commonNameZh].some(value => value?.toLowerCase() === needle)) return node.id
    for (const child of node.children ?? []) {
      const found = visit(child)
      if (found) return found
    }
    return undefined
  }
  return visit(navigationTree)
}
