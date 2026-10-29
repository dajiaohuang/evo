import { useEffect, useMemo, useState } from 'react'
import { loadNodeMapFrame, loadNodeMapManifest } from '../data-client/nodeMapClient'
import { queryNodeMap } from '../services/nodeMap'
import { useNodeMapStore } from '../store/nodeMapStore'
import type { NodeMapDataset, NodeMapManifest } from '../types/nodeMap'

/** Bind to the actually loaded coastline, never to an independently rounded slider age. */
export function useNodeMap(coastline: { ageMa: number; sha256: string } | null, visible: boolean, gridColumns: number) {
  const selection = useNodeMapStore(state => state.selection)
  const open = useNodeMapStore(state => state.open)
  const scope = useNodeMapStore(state => state.scope)
  const exactTime = useNodeMapStore(state => state.exactTime)
  const [manifest, setManifest] = useState<NodeMapManifest | null>(null)
  const [data, setData] = useState<{ key: string; value: NodeMapDataset } | null>(null)
  const [failure, setFailure] = useState<{ key: string; message: string } | null>(null)
  const [attempt, setAttempt] = useState(0)
  const enabled = open || Boolean(selection)
  useEffect(() => {
    if (!enabled) return
    let active = true
    loadNodeMapManifest().then(value => { if (active) setManifest(value) }, error => {
      if (active) setFailure({ key: 'manifest', message: String(error) })
    })
    return () => { active = false }
  }, [enabled, attempt])
  const frame = manifest?.frames.find(item => item.ageMa === coastline?.ageMa && item.coastlineSha256 === coastline?.sha256)
  const frameKey = frame && manifest ? `${manifest.revision}:${frame.url}:${frame.sha256}` : null
  const nodeId = selection && manifest ? manifest.aliases?.[selection.id] ?? selection.id : null
  const node = manifest?.nodes.find(item => item.id === nodeId)
  useEffect(() => {
    if (!frame || !manifest || !node || !visible) return
    let active = true
    const key = frameKey!
    loadNodeMapFrame(manifest, frame).then(value => { if (active) setData({ key, value }) }, error => {
      if (active) setFailure({ key, message: String(error) })
    })
    return () => { active = false }
  }, [manifest, frame, frameKey, node, visible, attempt])
  const dataset = visible && data?.key === frameKey ? data!.value : null
  const result = useMemo(() => {
    if (!dataset || !nodeId || !manifest || !frame) return null
    const halfWidth = exactTime ? 0 : manifest.frameWindowHalfWidthMa ?? 0
    return queryNodeMap(dataset, {
      nodeId, treeRevision: manifest.treeRevision, scope, gridColumns,
      time: { olderMa: frame.ageMa + halfWidth, youngerMa: Math.max(0, frame.ageMa - halfWidth) },
      frame: { modelRevision: manifest.modelRevision, referenceFrame: manifest.referenceFrame,
        anchorPlateId: manifest.anchorPlateId, ageMa: frame.ageMa },
    })
  }, [dataset, nodeId, manifest, frame, scope, exactTime, gridColumns])
  const error = failure && (failure.key === 'manifest' ? !manifest : failure.key === frameKey && !dataset) ? failure.message : null
  return { manifest, node, frame, dataset, result, error, retry: () => { setFailure(null); setAttempt(value => value + 1) },
    loading: enabled && !error && (!manifest || Boolean(node && frame && visible && !dataset)),
    compatible: Boolean(frame && visible) }
}
