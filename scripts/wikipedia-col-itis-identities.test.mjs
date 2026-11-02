import { test } from 'node:test'
import assert from 'node:assert/strict'
import { itisIdentityCandidates, itisExactIdentity } from './wikipedia-col-itis-identities.mjs'
test('exclude conflicting COL identifiers and confirm only one exact identity', () => {
  const rows = [{ item:'Q1', col_ids:'["A"]' }, { item:'Q2', col_ids:'["B"]' }, { item:null, col_ids:null }]
  assert.deepEqual(itisIdentityCandidates(rows, 'A'), [rows[0], rows[2]])
  assert.equal(itisExactIdentity(rows, 'A'), rows[0])
  assert.equal(itisExactIdentity([...rows, { item:'Q3', col_ids:'["A"]' }], 'A'), null)
  assert.equal(itisExactIdentity(rows, 'C'), null)
  assert.deepEqual(itisIdentityCandidates(rows,'A',()=>false), rows)
})
