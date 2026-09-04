// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const cases = [['molluscs-brachiopods', 'worms-mollusca', 154718], ['sponges-cnidarians', 'worms-porifera', 9899], ['sponges-cnidarians', 'worms-cnidaria', 20622], ['other-animals', 'worms-annelida', 18982], ['other-animals', 'worms-nematoda', 19604], ['crustaceans-insects', 'worms-crustacea', 80890]]
describe('WoRMS archive sidecars', () => {
  for (const [pkg, prefix, total] of cases) it(`${prefix} has verified arrays and ranges`, () => {
    const dir = pkg === 'other-animals'
      ? join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs', pkg)
      : join(root, 'data/packages', pkg === 'crustaceans-insects' ? 'arthropoda' : 'invertebrata', pkg, 'nomenclature')
    const descriptor = JSON.parse(readFileSync(join(dir, `${prefix}-sidecar.json`)))
    expect(descriptor.counts.total).toBe(total)
    expect(descriptor.rowEncoding).toBe('json')
    const rows = []
    const upstreamRows = []
    for (const file of [...descriptor.files, ...descriptor.upstreamOnlyFiles]) {
      const bytes = readFileSync(join(dir, file.path.split('/').at(-1)))
      expect(createHash('sha256').update(bytes).digest('hex')).toBe(file.sha256)
      const decoded = gunzipSync(bytes)
      expect(decoded.length).toBe(file.sourceBytes)
      expect(createHash('sha256').update(decoded).digest('hex')).toBe(file.sourceSha256)
      expect(decoded.length).toBeLessThanOrEqual(2 * 1024 * 1024)
      const parsed = JSON.parse(decoded)
      expect(parsed.length).toBe(file.records)
      if (file.minColId) {
        expect(parsed[0].colId).toBe(file.minColId)
        expect(parsed.at(-1).colId).toBe(file.maxColId)
        rows.push(...parsed)
      } else upstreamRows.push(...parsed)
    }
    expect(rows.length).toBe(total)
    expect(rows.every((row, i) => i === 0 || rows[i - 1].colId < row.colId)).toBe(true)
    for (const status of ['accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld']) {
      expect(rows.filter((row) => row.status === status)).toHaveLength(descriptor.counts[status])
    }
    expect(upstreamRows).toHaveLength(descriptor.counts.upstreamOnly)
    expect(upstreamRows.every((row) => row.colId === null && row.status === 'upstream-only' && row.acceptedName?.status === 'accepted')).toBe(true)
    const implicated = new Set(rows.flatMap((row) => [row.acceptedName?.id, ...row.candidates.map((candidate) => candidate.id)]).filter(Boolean))
    expect(upstreamRows.every((row) => !implicated.has(row.acceptedName.id))).toBe(true)
    expect(new Set(upstreamRows.map((row) => row.acceptedName.id)).size).toBe(upstreamRows.length)
    const ledgerBytes = readFileSync(join(root, descriptor.source.sourceLedgerPath))
    expect(createHash('sha256').update(ledgerBytes).digest('hex')).toBe(descriptor.source.sourceLedgerSha256)
    const sourceScope = JSON.parse(ledgerBytes).scopeAudit.scopes[prefix.replace('worms-', '')]
    expect(implicated.size + upstreamRows.length).toBe(sourceScope.acceptedSpecies)
  })
})
