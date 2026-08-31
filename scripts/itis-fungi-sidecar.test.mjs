import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packsRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const manifest = JSON.parse(readFileSync(join(packsRoot, 'fungi/manifest.json'), 'utf8'))
const authority = manifest.extensions.find((extension) => extension.id === 'itis-fungi-tsn-crosswalk')
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('COL26.8 Fungi ITIS authority collection', () => {
  it('keeps the CC0 ITIS collection independent from Index Fungorum and pins its full native inventory', () => {
    expect(manifest.extensions.map((extension) => extension.id)).toEqual(['index-fungorum-identifiers', 'itis-fungi-tsn-crosswalk'])
    expect(authority).toMatchObject({
      recordType: 'release-pinned-exact-nomenclatural-crosswalk', provider: 'Integrated Taxonomic Information System',
      source: { datasetId: 'itis-2026-08-26', exportDate: '2026-08-26', rootTsn: '555705', license: 'CC0-1.0' },
      counts: { acceptedSpecies: 157044, eligible: 157044, records: 158805, accepted: 928, redirects: 45, ambiguous: 1, unmatched: 156070, upstreamOnly: 1761, withheld: 0 },
      deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: 158805 } },
    })
    expect(authority.scope).toContain('does not replace')
    expect(authority.evidenceBoundary.en).toContain('never substitutes for Index Fungorum')
    expect(authority.files).toHaveLength(57)
    expect(authority.colUsageIdLocator.files).toHaveLength(56)
    expect(authority.upstreamOnly.files).toHaveLength(1)
    expect(authority.deliveryProfiles['native-full'].files).toEqual(authority.files.map((file) => file.path))
    let records = 0
    for (const file of authority.files) {
      const bytes = readFileSync(join(packsRoot, file.path)); const source = gunzipSync(bytes)
      expect(bytes.length).toBe(file.bytes); expect(source.length).toBe(file.sourceBytes)
      expect(hash(bytes)).toBe(file.sha256); expect(hash(source)).toBe(file.sourceSha256)
      records += source.toString('utf8').trim().split('\n').length
    }
    expect(records).toBe(authority.counts.records)
  })
})
