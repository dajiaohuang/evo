import type { NodeMapDataset, NodeMapResult } from '../../types/nodeMap'
import type { MapPoint, MapShape } from './mapScene'

export function nodeMapScene(result: NodeMapResult | null, dataset: NodeMapDataset | null,
  mode: 'bubbles' | 'heatmap' | 'points', zh: boolean): { points: MapPoint[]; shapes: MapShape[] } {
  if (!result || !dataset) return { points: [], shapes: [] }
  const label = (count: number) => zh ? `${count} 条采样记录` : `${count} sampled records`
  const points = result.bubbles.map((bubble): MapPoint => ({
    position: [bubble.longitude, bubble.latitude], color: '#ffc56b',
    radius: Math.min(24, 5 + Math.log2(bubble.recordCount + 1) * 3), opacity: .8,
    label: label(bubble.recordCount), nodeMap: { recordIds: bubble.recordIds, nodeIds: bubble.nodeIds, count: bubble.recordCount },
  }))
  if (mode === 'bubbles') return { points, shapes: [] }
  if (mode === 'points') {
    const visibleIds = new Set(result.bubbles.flatMap(bubble => bubble.recordIds))
    return { shapes: [], points: [...new Map(dataset.records.filter(record => visibleIds.has(record.id)).map(record => [record.id, record])).values()].map(record => ({
      position: [record.reconstruction!.longitude, record.reconstruction!.latitude], color: '#ffc56b', radius: 4, opacity: .85,
      label: `${record.name ?? record.nodeId} · ${record.age?.olderMa}–${record.age?.youngerMa} Ma`,
      nodeMap: { recordIds: [record.id], nodeIds: [record.nodeId], count: 1 },
    })) }
  }
  const peak = Math.max(1, ...result.bubbles.map(bubble => bubble.recordCount))
  const shapes = result.bubbles.flatMap((bubble, index): MapShape[] => {
    const [columns, x, y] = bubble.id.split(':').map(Number)
    const rows = columns / 2
    const south = Math.asin(y / rows * 2 - 1) * 180 / Math.PI
    const north = Math.asin((y + 1) / rows * 2 - 1) * 180 / Math.PI
    const west = (x - .5) / columns * 360 - 180
    const east = (x + .5) / columns * 360 - 180
    const ranges = west < -180 ? [[west + 360, 180], [-180, east]] : [[west, east]]
    return ranges.map(([left, right]) => ({
      geometry: { type: 'Polygon', coordinates: [[[left, south], [left, north], [right, north], [right, south], [left, south]]] },
      fill: '#ff9254', fillOpacity: .15 + .65 * Math.log1p(bubble.recordCount) / Math.log1p(peak),
      stroke: '#ff9254', width: 0, label: label(bubble.recordCount), point: points[index],
    }))
  })
  return { points: [], shapes }
}
