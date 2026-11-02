import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { canUseSupplementalExact, selectRefreshedExact } from './wikipedia-col-refreshed-exact.mjs'

test('only a usable, audited, non-held page for the matched item can restore an exact link', () => {
  const rows = [
    { item: 'Q-other', url: 'wrong-item' },
    { item: 'Q-current', url: 'held' },
    { item: 'Q-current', url: 'unusable' },
    { item: 'Q-current', url: 'bad-audit' },
    { item: 'Q-current', url: 'verified' },
  ]
  const choose = candidates => selectRefreshedExact(candidates, 'Q-current', (_, url) => url === 'held', url => url !== 'unusable', url => url !== 'bad-audit')
  assert.equal(choose(rows)?.url, 'verified')
  assert.equal(choose(rows.slice(0, -1)), undefined)
})

test('a direct identifier supersedes name matching but not another direct match', () => {
  assert.equal(canUseSupplementalExact('matched-name-parent-rank'), true)
  assert.equal(canUseSupplementalExact('unresolved'), true)
  assert.equal(canUseSupplementalExact('matched-col-id'), false)
  assert.equal(canUseSupplementalExact('ambiguous-col-id'), false)
})
