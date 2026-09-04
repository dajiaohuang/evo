import assert from 'node:assert/strict'
import test from 'node:test'
import { replaceOwnedExtensions } from './manifest-extension-utils.mjs'

test('replaces owned extensions while retaining unrelated objects and order', () => {
  const existing = [{ id: 'wfo-plant-list-crosswalk' }, { id: 'worms-annelida-archive-crosswalk' }, { id: 'itis-annelida-tsn-crosswalk' }]
  const next = replaceOwnedExtensions(existing, [{ id: 'itis-annelida-tsn-crosswalk', version: 2 }, { id: 'itis-new-tsn-crosswalk' }], (extension) => extension.id.startsWith('itis-'))
  assert.deepEqual(next, [{ id: 'wfo-plant-list-crosswalk' }, { id: 'worms-annelida-archive-crosswalk' }, { id: 'itis-annelida-tsn-crosswalk', version: 2 }, { id: 'itis-new-tsn-crosswalk' }])
})
