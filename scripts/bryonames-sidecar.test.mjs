import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = process.cwd()
const packageRoot = join(root, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'other-plants')
const resourceRoot = join(root, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const manifest = JSON.parse(readFileSync(join(packageRoot, 'manifest.json'), 'utf8'))
const extension = manifest.extensions.find((candidate) => candidate.id === 'bryonames-archive-crosswalk')

const sha256 = (value) => createHash('sha256').update(value).digest('hex')

describe('Bryonames exact source-record sidecar', () => {
  it('publishes the complete 698-row native inventory with stable identities', () => {
    expect(extension).toMatchObject({
      provider: 'Bryophyte Nomenclator (Bryonames) through ChecklistBank',
      source: { sourceDatasetKey: 170394, license: 'CC-BY-4.0', archiveSha256: '477dc498544e91a7557d423500bf34166aaf360017d8fe16c855b011575556d6' },
      counts: { eligible: 698, resolved: 698, accepted: 698, redirects: 0, ambiguous: 0, unmatched: 0 },
      deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: 698, files: ['other-plants/bryonames-000.jsonl.gz'] } },
    })
    const file = extension.files[0]
    const compressed = readFileSync(join(resourceRoot, ...file.path.split('/')))
    const source = gunzipSync(compressed)
    const rows = source.toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
    expect(rows).toHaveLength(698)
    expect(sha256(compressed)).toBe(file.sha256)
    expect(sha256(source)).toBe(file.sourceSha256)
    expect(new Set(rows.map((row) => row.colId)).size).toBe(698)
    expect(new Set(rows.map((row) => row.sourceId)).size).toBe(698)
    expect(rows.every((row) => row.sourceDatasetId === '170394' && row.rank === 'species' && row.status === 'accepted' && row.mappingBasis === 'checklistbank-source-record')).toBe(true)
    expect(rows[0].colId).toBe(file.minColId)
    expect(rows.at(-1).colId).toBe(file.maxColId)
  })
})
