import { describe, expect, it } from 'vitest'
import { replaceOwnedExtensions } from './manifest-extension-utils.mjs'

describe('manifest extension integration fixtures', () => {
it('replaces only declared owned extensions and preserves source-only files', () => {
  const existing = [{ id: 'wfo-plant-list-crosswalk' }, { id: 'worms-annelida-archive-crosswalk' }, { id: 'itis-annelida-tsn-crosswalk' }]
  const next = replaceOwnedExtensions(existing, [{ id: 'itis-annelida-tsn-crosswalk', version: 2 }, { id: 'itis-new-tsn-crosswalk' }], (extension) => extension.id === 'itis-annelida-tsn-crosswalk')
  expect(next).toEqual([{ id: 'wfo-plant-list-crosswalk' }, { id: 'worms-annelida-archive-crosswalk' }, { id: 'itis-annelida-tsn-crosswalk', version: 2 }, { id: 'itis-new-tsn-crosswalk' }])
})
})
