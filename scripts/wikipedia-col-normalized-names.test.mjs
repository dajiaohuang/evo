import { test } from 'node:test'
import assert from 'node:assert/strict'
import { normalizeName } from './wikipedia-col-normalized-names.mjs'

test('normalizes case, diacritics, underscores and punctuation for candidates', () => {
  assert.equal(normalizeName('Ácer_crassum'), 'acer crassum')
  assert.equal(normalizeName('Acer—crassum'), 'acer crassum')
  assert.notEqual(normalizeName('Acer crassum'), normalizeName('Acer campestre'))
})
