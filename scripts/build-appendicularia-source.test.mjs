// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { gunzipSync } from 'node:zlib'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const archive = join(root, 'data/sources/archives/checklistbank-1178-appendicularia-2026-09-01.zip')
const metadata = join(root, 'data/sources/archives/checklistbank-1178-appendicularia-2026-09-01.metadata.json')

describe('Appendicularia 1178 importer', () => {
  it('rebuilds deterministic output and preserves source rows', () => {
    const base = mkdtempSync(join(tmpdir(), 'evo-appendicularia-'))
    try {
    const one = join(base, 'one')
    const two = join(base, 'two')
    const canonicalLedger = readFileSync(join(root, 'data/sources/worms-appendicularia-1178-import-ledger.json'))
    for (const out of [one, two]) execFileSync('python', ['-B', join(root, 'scripts/build-appendicularia-source.py'), '--archive', archive, '--metadata', metadata, '--output-root', out], { cwd: root, stdio: 'pipe' })
    const output = out => join(out, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
    const names = p => readdirSync(output(p)).filter(x => x.endsWith('.gz') || x.endsWith('.json')).sort()
    expect(names(one)).toEqual(names(two))
    for (const name of names(one)) {
      expect(readFileSync(join(output(one), name))).toEqual(readFileSync(join(output(two), name)))
      expect(readFileSync(join(output(one), name))).toEqual(readFileSync(join(output(root), name)))
    }
    const descriptor = JSON.parse(readFileSync(join(output(one), 'worms-appendicularia-sidecar.json')))
    expect(descriptor.scope).toEqual({ colRootUsageId: '622C5', colParentClosureRootUsageId: '7NF2Z', eligibleColSpecies: 68, excludedParentClosureSpecies: { '1185': 78, '1186': 3000 }, sourceDatasetId: '1178' })
    expect(descriptor.counts).toMatchObject({ total: 68, records: 68, accepted: 68, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: 0 })
    const rows = []
    for (const file of descriptor.files) {
      const part = JSON.parse(gunzipSync(readFileSync(join(output(one), file.path.split('/').at(-1)))))
      expect(file.sourceBytes).toBeLessThanOrEqual(2 * 1024 * 1024)
      expect(part).toHaveLength(file.records); expect(part[0].colId).toBe(file.minColId); rows.push(...part)
    }
    expect(rows).toHaveLength(68)
    expect(rows.every(row => row.status === 'accepted' && row.acceptedName?.sourceRows?.some(x => x.member === 'Name.txt'))).toBe(true)
    const ledger = JSON.parse(readFileSync(join(one, 'data/sources/worms-appendicularia-1178-import-ledger.json')))
    expect(ledger.sourceArchive.sha256).toBe('5a4a49450d581faa30d0fa3d6beb54b4b561f920f075174124efbfd8bdfa8c1f')
    expect(ledger.colInput.nodeShards.length).toBeGreaterThan(0)
    expect(createHash('sha256').update(readFileSync(archive)).digest('hex')).toBe(ledger.sourceArchive.sha256)
    expect(readFileSync(join(root, 'data/sources/worms-appendicularia-1178-import-ledger.json'))).toEqual(canonicalLedger)
    for (const out of [one, two]) expect(readFileSync(join(out, 'data/sources/worms-appendicularia-1178-import-ledger.json'))).toEqual(canonicalLedger)
    expect(descriptor.deliveryProfiles['web-light']).toEqual({ mode: 'summary-only', records: 0, files: [], totalCompressedBytes: 0, totalSourceBytes: 0 })
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual(descriptor.files.map(file => file.path))
    expect(execFileSync('python', ['-B', join(root, 'scripts/test-appendicularia-source.py')], { cwd: root, encoding: 'utf8' })).toContain('raw archive rows verified 68')
    } finally {
      rmSync(base, { recursive: true, force: true })
    }
  }, 120_000)
})
