import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isCandidateIdentityHeld } from './wikipedia-col-identity-holds.mjs'

test('holds apply by identity and by URL even when no item is available', () => {
  const byItem = (node, item) => node === 'A' && item === 'Q1'
  const byUrl = (node, url) => node === 'A' && url === 'https://en.wikipedia.org/wiki/Example'
  assert.equal(isCandidateIdentityHeld('A', 'Q1', '', byItem, byUrl), true)
  assert.equal(isCandidateIdentityHeld('A', '', 'https://en.wikipedia.org/wiki/Example', byItem, byUrl), true)
  assert.equal(isCandidateIdentityHeld('B', 'Q1', 'https://en.wikipedia.org/wiki/Example', byItem, byUrl), false)
  assert.equal(isCandidateIdentityHeld('A', '', '', undefined, undefined), false)
})
