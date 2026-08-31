import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packsRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs')
const manifest = JSON.parse(readFileSync(join(packsRoot, 'bacteria/manifest.json'), 'utf8'))
const authority = manifest.extensions.find((extension) => extension.id === 'itis-bacteria-tsn-crosswalk')
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('COL26.8 non-LPSN Bacteria ITIS authority collection', () => {
  it('keeps the ITIS collection independent from LPSN and pins all full native inventory bytes', () => {
    expect(manifest.extensions.map((extension) => extension.id)).toEqual(['lpsn-identifiers', 'itis-bacteria-tsn-crosswalk'])
    expect(authority).toMatchObject({
      recordType: 'release-pinned-exact-nomenclatural-crosswalk',
      provider: 'Integrated Taxonomic Information System',
      source: { datasetId: 'itis-2026-08-26', exportDate: '2026-08-26', rootTsn: '50', license: 'CC0-1.0' },
      counts: { acceptedSpecies: 26397, eligible: 4827, nonApplicable: 21570, records: 14175, accepted: 4824, redirects: 0, ambiguous: 2, unmatched: 1, upstreamOnly: 9348, withheld: 0 },
      deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: 14175 } },
    })
    expect(authority.scope).toContain('sourceDatasetId is not 2015')
    expect(authority.evidenceBoundary.en).toContain('never substitutes for LPSN')
    expect(authority.files).toHaveLength(8)
    expect(authority.colUsageIdLocator.files).toHaveLength(4)
    expect(authority.upstreamOnly.files).toHaveLength(4)
    expect(authority.deliveryProfiles['native-full'].files).toEqual(authority.files.map((file) => file.path))

    let records = 0
    for (const file of authority.files) {
      const bytes = readFileSync(join(packsRoot, file.path))
      const source = gunzipSync(bytes)
      const rows = source.toString('utf8').trim().split('\n').map(JSON.parse)
      expect(bytes.length).toBe(file.bytes)
      expect(source.length).toBe(file.sourceBytes)
      expect(hash(bytes)).toBe(file.sha256)
      expect(hash(source)).toBe(file.sourceSha256)
      expect(rows).toHaveLength(file.records)
      records += rows.length
    }
    expect(records).toBe(authority.counts.records)
  })
})
