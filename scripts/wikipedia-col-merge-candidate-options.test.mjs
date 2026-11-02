import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mergeCandidateOptions } from './wikipedia-col-merge-candidate-options.mjs'

test('preserves uncertainty for duplicate links without mixing different identities', () => {
  const a = { url: 'https://en.wikipedia.org/wiki/A', item: 'Q1', parentNames: ['source'] }
  const merged = mergeCandidateOptions([a, { ...a, parentNames: ['genus differs', 'source'] }, { ...a, item: 'Q2', parentNames: ['different item'] }])
  assert.deepEqual(merged, [{ ...a, parentNames: ['source', 'genus differs'] }])
  assert.deepEqual(a.parentNames, ['source'])
})
