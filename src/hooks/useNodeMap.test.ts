import { act, renderHook } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { useNodeMap } from './useNodeMap'
import { useNodeMapStore } from '../store/nodeMapStore'
import { loadNodeMapFrame, loadNodeMapManifest } from '../data-client/nodeMapClient'
import type { NodeMapDataset, NodeMapManifest } from '../types/nodeMap'

vi.mock('../data-client/nodeMapClient', () => ({ loadNodeMapFrame: vi.fn(), loadNodeMapManifest: vi.fn() }))
const manifest: NodeMapManifest = { schemaVersion: 1, revision: 'v1', treeRevision: 'tree',
  modelRevision: 'model', referenceFrame: 'mantle', anchorPlateId: 0, coverage: 'bounded-sample', frameWindowHalfWidthMa: 5, stats: {},
  nodes: [{ id: 'taxon', name: 'Taxon', recordCount: 1, olderMa: 30, youngerMa: 5 }],
  frames: [10, 20].map(ageMa => ({ ageMa, coastlineSha256: `coast-${ageMa}`, sha256: `records-${ageMa}`, url: `${ageMa}.json` })) }
function dataset(ageMa: number): NodeMapDataset {
  return { revision: 'v1', treeRevision: 'tree', coverage: 'bounded-sample', truncated: true,
    members: { taxon: ['taxon'] }, records: [{ id: 'occ:1', nodeId: 'taxon', sourceId: 'source', kind: 'fossil-occurrence',
      age: { olderMa: 30, youngerMa: 5 }, reconstruction: { modelRevision: 'model', referenceFrame: 'mantle', anchorPlateId: 0, ageMa, longitude: 10, latitude: 10 } }] }
}
beforeEach(() => {
  vi.clearAllMocks()
  useNodeMapStore.setState({ open: false, selection: null, scope: 'descendants', exactTime: false })
  vi.mocked(loadNodeMapManifest).mockResolvedValue(manifest)
  vi.mocked(loadNodeMapFrame).mockImplementation(async (_manifest, frame) => dataset(frame.ageMa))
})
it('does not load the dataset until the user opens the feature', async () => {
  renderHook(() => useNodeMap(null, true, 36))
  await act(async () => {})
  expect(loadNodeMapManifest).not.toHaveBeenCalled()
})
it('requires matching actual coastline bytes, and suppresses independent terrain/modern modes', async () => {
  useNodeMapStore.getState().select('taxon', 'Taxon')
  const { result, rerender } = renderHook(({ sha256, visible }) => useNodeMap({ ageMa: 10, sha256 }, visible, 36),
    { initialProps: { sha256: 'wrong-coast', visible: true } })
  await act(async () => {})
  expect(loadNodeMapFrame).not.toHaveBeenCalled()
  expect(result.current.result).toBeNull()
  rerender({ sha256: 'coast-10', visible: true })
  await act(async () => {})
  expect(result.current.result?.counts.plotted).toBe(1)
  rerender({ sha256: 'coast-10', visible: false })
  expect(result.current.result).toBeNull()
})
it('does not show stale points while changing frames or after an older fetch completes', async () => {
  useNodeMapStore.getState().select('taxon', 'Taxon')
  let finishOld!: (data: NodeMapDataset) => void
  vi.mocked(loadNodeMapFrame).mockImplementation((_manifest, frame) => frame.ageMa === 10
    ? new Promise(resolve => { finishOld = resolve }) : Promise.resolve(dataset(20)))
  const { result, rerender } = renderHook(({ age }) => useNodeMap({ ageMa: age, sha256: `coast-${age}` }, true, 36), { initialProps: { age: 10 } })
  await act(async () => {})
  rerender({ age: 20 })
  expect(result.current.result).toBeNull()
  await act(async () => {})
  expect(result.current.result?.query.frame.ageMa).toBe(20)
  await act(async () => { finishOld(dataset(10)) })
  expect(result.current.result?.query.frame.ageMa).toBe(20)
})
it('keeps an unmapped node visible as unknown without fetching arbitrary fossils', async () => {
  useNodeMapStore.getState().select('COL:unmapped', 'Unknown')
  const { result } = renderHook(() => useNodeMap({ ageMa: 10, sha256: 'coast-10' }, true, 36))
  await act(async () => {})
  expect(result.current.node).toBeUndefined()
  expect(loadNodeMapFrame).not.toHaveBeenCalled()
})
