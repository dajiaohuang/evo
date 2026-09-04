// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readdirSync, readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const archive = join(root, 'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip')
const metadata = join(root, 'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.metadata.json')

describe('Ascidiacea 1186 importer', () => {
  it('rebuilds deterministic output and preserves source rows', () => {
    const base = join(root, '.repostew', 'ascidiacea-test')
    const one = join(base, 'one')
    const two = join(base, 'two')
    const canonicalLedger = readFileSync(join(root, 'data/sources/worms-ascidiacea-1186-import-ledger.json'))
    for (const out of [one, two]) execFileSync('python', ['-B', join(root, 'scripts/build-ascidiacea-source.py'), '--archive', archive, '--metadata', metadata, '--output-root', join(out, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'), '--ledger-root', out], { cwd: root, stdio: 'pipe' })
    const output = out => join(out, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
    const names = p => readdirSync(output(p)).filter(x => x.endsWith('.gz') || x.endsWith('.json')).sort()
    expect(names(one)).toEqual(names(two))
    for (const name of names(one)) expect(readFileSync(join(output(one), name))).toEqual(readFileSync(join(output(two), name)))
    const descriptor = JSON.parse(readFileSync(join(output(one), 'worms-ascidiacea-sidecar.json')))
    expect(descriptor.scope).toEqual({ colRootUsageId: 'B8V3P', colParentClosureRootUsageId: '7NF2Z', eligibleColSpecies: 3000, excludedParentClosureSpecies: { '1178': 68, '1185': 78 } })
    expect(descriptor.counts).toMatchObject({ total: 3000, records: 3000, accepted: 3000, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: 0 })
    const rows = []
    for (const file of descriptor.files) {
      const part = JSON.parse(gunzipSync(readFileSync(join(output(one), file.path.split('/').at(-1)))))
      expect(part).toHaveLength(file.records); expect(part[0].colId).toBe(file.minColId); rows.push(...part)
    }
    expect(rows).toHaveLength(3000)
    expect(rows.every(row => row.status === 'accepted' && row.acceptedName?.sourceRows?.some(x => x.member === 'Name.txt'))).toBe(true)
    const ledger = JSON.parse(readFileSync(join(one, 'data/sources/worms-ascidiacea-1186-import-ledger.json')))
    expect(ledger.sourceArchive.sha256).toBe('10f7ee92363e3fab5df9964a494b59e1d79a5214f38b9e796f73afd51558863a')
    expect(ledger.colInput.nodeShards.length).toBeGreaterThan(0)
    expect(createHash('sha256').update(readFileSync(archive)).digest('hex')).toBe(ledger.sourceArchive.sha256)
    expect(readFileSync(join(root, 'data/sources/worms-ascidiacea-1186-import-ledger.json'))).toEqual(canonicalLedger)
  }, 120_000)
})
