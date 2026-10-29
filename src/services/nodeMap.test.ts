import { describe, expect, it } from 'vitest'
import { queryNodeMap } from './nodeMap'
import type { NodeMapDataset, NodeMapQuery, NodeMapRecord } from '../types/nodeMap'

const frame = { modelRevision: 'model:sha256', referenceFrame: 'mantle', anchorPlateId: 0, ageMa: 65 }
const query: NodeMapQuery = { nodeId: 'parent', treeRevision: 'tree:v1', scope: 'descendants',
  time: { olderMa: 70, youngerMa: 60 }, frame, gridColumns: 36 }
function record(id: string, nodeId = 'child', longitude = 179): NodeMapRecord {
  return { id, nodeId, kind: 'fossil-occurrence', sourceId: 'source:v1',
    age: { olderMa: 67, youngerMa: 63 }, reconstruction: { ...frame, longitude, latitude: 10 } }
}
function dataset(records: NodeMapRecord[]): NodeMapDataset {
  return { revision: 'data:v1', treeRevision: 'tree:v1', members: { parent: ['parent', 'child'], child: ['child'] },
    coverage: 'bounded-sample', truncated: true, records }
}

describe('node map query', () => {
  it('aggregates verified descendants, retains drilldown and separates direct evidence', () => {
    const result = queryNodeMap(dataset([record('a'), record('b', 'parent', -179), record('c', 'other')]), query)
    expect(result.bubbles).toHaveLength(1)
    expect(result.bubbles[0]).toMatchObject({ recordCount: 2, nodeCount: 2, directRecordCount: 1,
      descendantRecordCount: 1, recordIds: ['a', 'b'], longitude: -180 })
    expect(result.counts.plotted).toBe(2)
    expect(result.coverage).toBe('bounded-sample')
    expect(result.truncated).toBe(true)
  })
  it('direct scope never includes children', () => {
    const result = queryNodeMap(dataset([record('a'), record('b', 'parent')]), { ...query, scope: 'direct' })
    expect(result.bubbles[0].recordIds).toEqual(['b'])
  })
  it('does not interpret an unmapped identity or different tree version as an observed zero', () => {
    expect(queryNodeMap(dataset([]), { ...query, nodeId: 'unknown' }).status).toBe('unmapped-node')
    expect(queryNodeMap(dataset([]), { ...query, treeRevision: 'new' }).status).toBe('tree-version-mismatch')
  })
  it('deduplicates shard overlap and refuses conflicting occurrence identities', () => {
    expect(queryNodeMap(dataset([record('a'), record('a')]), query).counts.plotted).toBe(1)
    expect(() => queryNodeMap(dataset([record('a'), record('a', 'parent')]), query)).toThrow('Conflicting occurrence')
  })
  it('uses interval overlap, including boundaries, and accounts for missing ages', () => {
    const records = [record('a'), record('b'), record('c')]
    records[0].age = { olderMa: 80, youngerMa: 70 }
    records[1].age = { olderMa: 59, youngerMa: 50 }
    records[2].age = null
    expect(queryNodeMap(dataset(records), query).counts).toMatchObject({ plotted: 1, outsideTime: 1, unknownAge: 1 })
  })
  it.each(['modelRevision', 'referenceFrame', 'anchorPlateId', 'ageMa'] as const)(
    'rejects a mismatched %s without substituting modern coordinates', (key) => {
      const entry = record('a')
      const position = entry.reconstruction!
      if (key === 'ageMa' || key === 'anchorPlateId') position[key] += 1
      else position[key] += ':other'
      const result = queryNodeMap(dataset([entry]), query)
      expect(result.counts.incompatibleReconstruction).toBe(1)
      expect(result.bubbles).toEqual([])
    })
  it('accounts for absent and invalid coordinates separately', () => {
    const missing = record('missing'); missing.reconstruction = null
    const invalid = record('invalid', 'child', NaN)
    expect(queryNodeMap(dataset([missing, invalid]), query).counts).toMatchObject({
      missingReconstruction: 1, invalidCoordinates: 1, plotted: 0,
    })
  })
  it('handles poles and gives deterministic output regardless of shard order', () => {
    const a = record('a', 'child', 180); a.reconstruction!.latitude = 90
    const b = record('b', 'child', -180); b.reconstruction!.latitude = -90
    const first = queryNodeMap(dataset([a, b]), query)
    expect(first.bubbles.every((bubble) => Number.isFinite(bubble.latitude))).toBe(true)
    expect(queryNodeMap(dataset([b, a]), query)).toEqual(first)
  })
  it('rejects invalid time windows and frames outside the selected window', () => {
    expect(() => queryNodeMap(dataset([]), { ...query, time: { olderMa: 1, youngerMa: 2 } })).toThrow()
    expect(() => queryNodeMap(dataset([]), { ...query, frame: { ...frame, ageMa: 50 } })).toThrow()
    expect(() => queryNodeMap(dataset([]), { ...query, gridColumns: 0 })).toThrow()
  })
})
