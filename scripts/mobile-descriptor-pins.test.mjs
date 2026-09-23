import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, test } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

test('mobile core edition excludes the full Crustacea descriptor package', () => {
  const finalizer = readFileSync(resolve(root, 'scripts/finalize-mobile-build.mjs'), 'utf8')
  expect(finalizer).toContain("current.deliveryProfile !== 'web-light'")
  expect(finalizer).toContain('Mobile core bundle must not include the offline SQL research runtime')
  expect(finalizer).not.toContain("'itis-crustacea-tsn-crosswalk':")
})
