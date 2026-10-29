import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mergeCandidates } from './wikipedia-col-merge-candidates.mjs'

test('COL ID lookup merges statements without discarding prior name matches', () => {
  const previous = [{ item: 'https://www.wikidata.org/entity/Q1', ranks: ['rank'], colIds: [], parentNames: ['parent'], articles: ['https://en.wikipedia.org/wiki/A'] }]
  const incoming = [{ item: 'https://www.wikidata.org/entity/Q1', colIds: ['X'], articles: ['https://zh.wikipedia.org/wiki/B'] }, { item: 'https://www.wikidata.org/entity/Q2', colIds: ['Y'] }]
  const result = mergeCandidates(previous, incoming)
  assert.deepEqual(result[0], { item: previous[0].item, ranks: ['rank'], colIds: ['X'], parentNames: ['parent'], articles: [previous[0].articles[0], incoming[0].articles[0]] })
  assert.equal(result[1].item, incoming[1].item)
  assert.deepEqual(previous[0].colIds, [])
})
