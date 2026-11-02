import { test } from 'node:test'
import assert from 'node:assert/strict'
import { withoutSubgenus } from './wikipedia-col-subgenus-name.mjs'
test('abbreviate only a subgenus between a genus and epithet', () => {
  assert.equal(withoutSubgenus('Sciurus (Otosciurus) aberti'), 'Sciurus aberti')
  assert.equal(withoutSubgenus('Sciurus (Otosciurus)'), 'Sciurus (Otosciurus)')
  assert.equal(withoutSubgenus('Sciurus aberti'), 'Sciurus aberti')
  assert.equal(withoutSubgenus('Sciurus (unresolved) aberti'), 'Sciurus (unresolved) aberti')
})
