import { test } from 'vitest'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { partitionSanbiDescriptions } from './sanbi-description-shards.mjs'

test('keeps source text and citations intact in deterministic catalogue hash routes', () => {
  const records = ['8MG5', '64B44', '8NBX'].map((colId) => ({
    colId, wfoId: `wfo-${colId}`, packageId: 'angiospermae',
    descriptions: [{ type: 'Morphology', text: 'Leaves 2–3 mm.\nOriginal text.', sourceId: '11118.0', citation: 'Original publication', rowNumber: 4 }],
  }))
  const result = partitionSanbiDescriptions(records)
  assert.deepEqual(partitionSanbiDescriptions(records), result)
  assert.equal(result.flatMap(([, rows]) => rows).length, records.length)
  for (const [prefix, rows] of result) for (const row of rows) {
    assert.equal(createHash('sha256').update(row.colId).digest('hex').slice(0, 2), prefix)
    assert.deepEqual(row, records.find((candidate) => candidate.colId === row.colId))
  }
})

test('empty source does not invent a route or description', () => {
  assert.deepEqual(partitionSanbiDescriptions([]), [])
})
