// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const cases = [['molluscs-brachiopods', 'worms-mollusca', 154718], ['sponges-cnidarians', 'worms-porifera', 9899], ['sponges-cnidarians', 'worms-cnidaria', 20622]]
describe('WoRMS archive sidecars', () => {
  for (const [pkg, prefix, total] of cases) it(`${prefix} has verified arrays and ranges`, () => {
    const dir = join(root, 'data/packages/invertebrata', pkg, 'nomenclature')
    const descriptor = JSON.parse(readFileSync(join(dir, `${prefix}-sidecar.json`)))
    expect(descriptor.counts.total).toBe(total)
    expect(descriptor.rowEncoding).toBe('json')
    const rows = []
    for (const file of [...descriptor.files, ...descriptor.upstreamOnlyFiles]) {
      const bytes = readFileSync(join(dir, file.path.split('/').at(-1)))
      expect(createHash('sha256').update(bytes).digest('hex')).toBe(file.sha256)
      const decoded = gunzipSync(bytes)
      expect(decoded.length).toBe(file.sourceBytes)
      expect(createHash('sha256').update(decoded).digest('hex')).toBe(file.sourceSha256)
      expect(decoded.length).toBeLessThanOrEqual(2 * 1024 * 1024)
      const parsed = JSON.parse(decoded)
      expect(parsed.length).toBe(file.records)
      if (file.minColId) rows.push(...parsed)
    }
    expect(rows.length).toBe(total)
    expect(rows.every((row, i) => i === 0 || rows[i - 1].colId < row.colId)).toBe(true)
  })
})
