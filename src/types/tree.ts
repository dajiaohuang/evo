export interface TreeNode {
  id: string;
  name: string;
  commonName?: string;
  taxonId?: string;
  firstAppearance: number;
  lastAppearance: number;
  children: TreeNode[];
  extinct: boolean;
  imageUrl?: string;
  fossilCount?: number;
  rank?: string;
}

export interface TreeLayoutNode extends TreeNode {
  x: number;
  y: number;
  depth: number;
  parent: TreeLayoutNode | null;
  children: TreeLayoutNode[];
}

export interface TreeViewState {
  selectedNodeId: string | null;
  expandedNodeIds: Set<string>;
  visibleNodeIds: string[];
  transform: { x: number; y: number; k: number };
}
