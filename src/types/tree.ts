export interface TreeNode {
  id: string;
  name: string;
  commonName?: string;
  commonNameZh?: string;
  taxonId?: string;
  firstAppearance: number;
  lastAppearance: number;
  rangeEvidenceLevel?: 'legacy-display' | 'database-derived' | 'literature-synthesized' | 'withheld-no-range-evidence' | 'expert-reviewed';
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

export type TreeDisplayMode = 'navigation' | 'cladogram' | 'first-appearance' | 'fossil-range' | 'calibration' | 'radial'

export type TreeEvidenceSupport = 'strong' | 'moderate' | 'contextual' | 'contested'

export interface TreeEvidenceRecord {
  support: TreeEvidenceSupport
  groupingBasis?: string
  rangeBasis?: string
  conflicts: string
  references: string[]
}

export interface TreeEvidenceCatalog {
  schemaVersion: number
  navigationModel: string
  default: TreeEvidenceRecord
  nodes: Record<string, Partial<TreeEvidenceRecord>>
}
