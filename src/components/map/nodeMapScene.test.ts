import { geoArea } from 'd3'
import { describe, expect, it } from 'vitest'
import { queryNodeMap } from '../../services/nodeMap'
import { nodeMapScene } from './nodeMapScene'
import type { NodeMapDataset } from '../../types/nodeMap'

const frame = { modelRevision: 'model', referenceFrame: 'mantle', anchorPlateId: 0, ageMa: 10 }
const data: NodeMapDataset = { revision: 'v1', treeRevision: 'tree', coverage: 'bounded-sample', truncated: true,
  members: { taxon: ['taxon'] }, records: [179, -179, 20].map((longitude, index) => ({
    id: String(index), nodeId: 'taxon', sourceId: 'source', kind: 'fossil-occurrence',
    age: { olderMa: 12, youngerMa: 8 }, reconstruction: { ...frame, longitude, latitude: 5 },
  })) }
const result = queryNodeMap(data, { nodeId: 'taxon', scope: 'direct', treeRevision: 'tree', gridColumns: 36,
  time: { olderMa: 15, youngerMa: 5 }, frame })

describe('node map views', () => {
  it('retains drilldown through bubbles and exact evidence points', () => {
    const bubbles = nodeMapScene(result, data, 'bubbles', false)
    expect(bubbles.points).toHaveLength(2)
    expect(bubbles.points.flatMap(point => point.nodeMap!.recordIds).sort()).toEqual(['0', '1', '2'])
    const points = nodeMapScene(result, data, 'points', false)
    expect(points.points.map(point => point.position)).toEqual([[179, 5], [-179, 5], [20, 5]])
  })
  it('splits antimeridian heat cells into small polygons with equal-area totals', () => {
    const heat = nodeMapScene(result, data, 'heatmap', true)
    expect(heat.shapes).toHaveLength(3)
    expect(heat.points).toEqual([])
    expect(heat.shapes.every(shape => geoArea(shape.geometry) < .1 && shape.point?.nodeMap)).toBe(true)
    const boundary = heat.shapes.filter(shape => shape.point?.nodeMap?.count === 2)
    const other = heat.shapes.find(shape => shape.point?.nodeMap?.count === 1)!
    expect(boundary.reduce((sum, shape) => sum + geoArea(shape.geometry), 0)).toBeCloseTo(geoArea(other.geometry), 4)
  })
  it('shows no data when the query or frame is absent', () => {
    expect(nodeMapScene(null, data, 'heatmap', false)).toEqual({ points: [], shapes: [] })
    expect(nodeMapScene(result, null, 'bubbles', false)).toEqual({ points: [], shapes: [] })
  })
})
