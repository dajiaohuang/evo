import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, test } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

test('mobile Crustacea descriptor pin follows the verified canonical storage migration', () => {
  const bytes = readFileSync(resolve(root, 'data/packages/arthropoda/crustaceans-insects/nomenclature/itis-tsn-sidecar.json'))
  const digest = createHash('sha256').update(bytes).digest('hex')
  const finalizer = readFileSync(resolve(root, 'scripts/finalize-mobile-build.mjs'), 'utf8')
  const block = finalizer.match(/'itis-crustacea-tsn-crosswalk':\s*\{([^}]+)\}/)?.[1]
  expect(block).toBeDefined()
  expect(block).toContain(`descriptorSha256: '${digest}'`)
  expect(block).toContain('files: 40, upstreamFiles: 1, records: 80890, upstreamRecords: 5991')
})
