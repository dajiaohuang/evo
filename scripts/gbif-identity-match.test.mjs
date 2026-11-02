import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gbifExactRelationship } from './gbif-identity-match.mjs'

test('distinguishes accepted identities and leaves uncertain matches unresolved', () => {
  const a = { matchType: 'EXACT', usageKey: 11, acceptedUsageKey: 20 }
  assert.equal(gbifExactRelationship(a, { matchType: 'EXACT', usageKey: 20 }), 'same')
  assert.equal(gbifExactRelationship(a, { matchType: 'EXACT', usageKey: 21 }), 'distinct')
  assert.equal(gbifExactRelationship(a, { matchType: 'FUZZY', usageKey: 21 }), 'unknown')
  assert.equal(gbifExactRelationship(a, { matchType: 'EXACT' }), 'unknown')
})
