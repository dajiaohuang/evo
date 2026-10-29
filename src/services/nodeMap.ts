import type { NodeMapAgeRange, NodeMapBubble, NodeMapDataset, NodeMapFrame, NodeMapQuery, NodeMapResult } from '../types/nodeMap'

function validRange(range: NodeMapAgeRange): boolean {
  return Number.isFinite(range.olderMa) && Number.isFinite(range.youngerMa)
    && range.youngerMa >= 0 && range.olderMa >= range.youngerMa
}

function validFrame(frame: NodeMapFrame): boolean {
  return Boolean(frame.modelRevision.trim() && frame.referenceFrame.trim())
    && Number.isInteger(frame.anchorPlateId) && frame.anchorPlateId >= 0
    && Number.isFinite(frame.ageMa) && frame.ageMa >= 0
}

/** A pure query over a versioned, verified snapshot; no network or modern-coordinate fallback. */
export function queryNodeMap(dataset: NodeMapDataset, query: NodeMapQuery): NodeMapResult {
  if (!validRange(query.time) || !validFrame(query.frame)
    || query.frame.ageMa < query.time.youngerMa || query.frame.ageMa > query.time.olderMa
    || !Number.isInteger(query.gridColumns) || query.gridColumns < 4
    || query.gridColumns > 720 || query.gridColumns % 2 !== 0) {
    throw new Error('Invalid node-map time, frame, or grid')
  }
  const result: NodeMapResult = {
    status: 'ready', datasetRevision: dataset.revision, query,
    coverage: dataset.coverage, truncated: dataset.truncated,
    counts: { matched: 0, unknownAge: 0, outsideTime: 0, missingReconstruction: 0,
      incompatibleReconstruction: 0, invalidCoordinates: 0, plotted: 0 },
    bubbles: [],
  }
  if (dataset.treeRevision !== query.treeRevision) {
    result.status = 'tree-version-mismatch'
    return result
  }
  const members = Object.hasOwn(dataset.members, query.nodeId) ? dataset.members[query.nodeId] : undefined
  if (!members?.includes(query.nodeId)) {
    result.status = 'unmapped-node'
    return result
  }
  const allowed = new Set(query.scope === 'direct' ? [query.nodeId] : members)
  const seen = new Map<string, string>()
  const buckets = new Map<string, NodeMapBubble>()
  const columns = query.gridColumns
  const rows = columns / 2
  for (const record of dataset.records) {
    // Duplicate shards must not increase density; conflicting identities require upstream repair.
    const signature = JSON.stringify(record)
    if (seen.has(record.id)) {
      if (seen.get(record.id) !== signature) throw new Error(`Conflicting occurrence: ${record.id}`)
      continue
    }
    seen.set(record.id, signature)
    if (!allowed.has(record.nodeId)) continue
    result.counts.matched++
    if (!record.age || !validRange(record.age)) { result.counts.unknownAge++; continue }
    if (record.age.youngerMa > query.time.olderMa || record.age.olderMa < query.time.youngerMa) {
      result.counts.outsideTime++; continue
    }
    const position = record.reconstruction
    if (!position) { result.counts.missingReconstruction++; continue }
    if (!validFrame(position) || position.modelRevision !== query.frame.modelRevision
      || position.referenceFrame !== query.frame.referenceFrame
      || position.anchorPlateId !== query.frame.anchorPlateId
      || position.ageMa !== query.frame.ageMa) {
      result.counts.incompatibleReconstruction++; continue
    }
    if (!Number.isFinite(position.longitude) || Math.abs(position.longitude) > 180
      || !Number.isFinite(position.latitude) || Math.abs(position.latitude) > 90) {
      result.counts.invalidCoordinates++; continue
    }
    // Equal-area cylindrical bins; the first column straddles the antimeridian.
    const x = Math.floor((((position.longitude + 180) / 360 * columns + .5) % columns + columns) % columns)
    const y = Math.min(rows - 1, Math.floor((Math.sin(position.latitude * Math.PI / 180) + 1) / 2 * rows))
    const id = `${columns}:${x}:${y}`
    let bubble = buckets.get(id)
    if (!bubble) {
      bubble = { id, longitude: x / columns * 360 - 180,
        latitude: Math.asin((y + .5) / rows * 2 - 1) * 180 / Math.PI,
        recordCount: 0, nodeCount: 0, directRecordCount: 0, descendantRecordCount: 0,
        recordIds: [], nodeIds: [] }
      buckets.set(id, bubble)
    }
    bubble.recordCount++
    if (record.nodeId === query.nodeId) bubble.directRecordCount++
    else bubble.descendantRecordCount++
    bubble.recordIds.push(record.id)
    bubble.nodeIds.push(record.nodeId)
    result.counts.plotted++
  }
  result.bubbles = [...buckets.values()].map((bubble) => {
    bubble.recordIds.sort()
    bubble.nodeIds = [...new Set(bubble.nodeIds)].sort()
    bubble.nodeCount = bubble.nodeIds.length
    return bubble
  }).sort((a, b) => a.id.localeCompare(b.id))
  return result
}
