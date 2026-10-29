/** All ages are Ma before present; intervals include both endpoints. */
export interface NodeMapAgeRange {
  olderMa: number
  youngerMa: number
}

export interface NodeMapFrame {
  modelRevision: string
  referenceFrame: string
  anchorPlateId: number
  ageMa: number
}

export interface NodeMapRecord {
  id: string
  nodeId: string
  age: NodeMapAgeRange | null
  sourceId: string
  name?: string
  sourceUrl?: string
  referenceId?: string | null
  /** This query only aggregates observations, never inferred origins. */
  kind: 'fossil-occurrence'
  reconstruction: (NodeMapFrame & {
    longitude: number
    latitude: number
  }) | null
}

export interface NodeMapNode {
  id: string
  name: string
  recordCount: number
  olderMa: number | null
  youngerMa: number | null
  parentId?: string | null
}

export interface NodeMapManifest {
  schemaVersion: 1
  revision: string
  treeRevision: string
  modelRevision: string
  referenceFrame: string
  anchorPlateId: number
  coverage: NodeMapDataset['coverage']
  /** Only independently verified cross-source identities. */
  aliases?: Record<string, string>
  nodes: NodeMapNode[]
  members?: { url: string; sha256: string }
  /** SHA-256(node ID) prefix buckets; URLs are relative to node-map/. */
  memberBuckets?: Record<string, Array<{ url: string; sha256: string }>>
  frames: Array<{ ageMa: number; url: string; sha256: string; coastlineSha256: string;
    parts?: Array<{ url: string; sha256: string; records: number }>; recordCount?: number; truncated?: boolean }>
  /** Frame shards include every inventory record overlapping this window. */
  frameWindowHalfWidthMa?: number
  stats: Record<string, unknown>
}

export interface NodeMapDataset {
  revision: string
  treeRevision: string
  /** Verified membership, including a self entry. Not scientific-name matching. */
  members: Record<string, string[]>
  records: NodeMapRecord[]
  coverage: 'bounded-sample' | 'complete-snapshot'
  truncated: boolean
}

export interface NodeMapQuery {
  nodeId: string
  treeRevision: string
  scope: 'direct' | 'descendants'
  time: NodeMapAgeRange
  frame: NodeMapFrame
  /** Grid subdivisions along longitude; latitude uses half as many equal-area rows. */
  gridColumns: number
}

export interface NodeMapBubble {
  id: string
  longitude: number
  latitude: number
  recordCount: number
  /** Distinct identified nodes, not inferred species richness. */
  nodeCount: number
  directRecordCount: number
  descendantRecordCount: number
  recordIds: string[]
  nodeIds: string[]
}

export interface NodeMapResult {
  status: 'ready' | 'unmapped-node' | 'tree-version-mismatch'
  datasetRevision: string
  query: NodeMapQuery
  coverage: NodeMapDataset['coverage']
  truncated: boolean
  counts: {
    matched: number
    unknownAge: number
    outsideTime: number
    missingReconstruction: number
    incompatibleReconstruction: number
    invalidCoordinates: number
    plotted: number
  }
  bubbles: NodeMapBubble[]
}
