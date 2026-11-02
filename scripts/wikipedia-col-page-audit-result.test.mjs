import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pageAuditError } from './wikipedia-col-page-audit-result.mjs'

test('requires the actual item to match even for an accepted audit status', () => {
  assert.equal(pageAuditError('Q1', { status: 'matched', actual_item: 'Q1' }), undefined)
  assert.equal(pageAuditError('Q1', { status: 'matched', actual_item: 'Q2' }), 'identity or page rejected')
  assert.equal(pageAuditError('Q1', null, { status: 'available', actual_item: 'Q2' }), 'identity not confirmed')
  assert.equal(pageAuditError(null, null, { status: 'available', actual_item: null }), undefined)
  assert.equal(pageAuditError('Q1', null, null), 'page not confirmed')
})
