import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const manifest = JSON.parse(readFileSync(join(packRoot, 'manifest.json'), 'utf8'))
const extension = manifest.extensions.find((candidate) => candidate.id === 'species-fungorum-oomycota-identifiers')
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('COL26.8 Oomycota Species Fungorum authority collection', () => {
  it('pins every strict accepted root-5K species and retains live request evidence', () => {
    expect(extension).toMatchObject({
      provider: 'Species Fungorum / Index Fungorum (Royal Botanic Gardens, Kew)',
      counts: { eligible: 1673, resolved: 1673, accepted: 1673, redirects: 0, ambiguous: 0, unmatched: 0, withheld: 0 },
      source: { rootColUsageId: '5K', sourceDatasetKey: '2073', retrievedAt: '2026-09-09' },
      deliveryProfiles: { 'web-light': { records: 0, files: [] }, 'native-full': { records: 1673 } },
    })
    expect(extension.files).toHaveLength(1)
    const file = extension.files[0]
    const compressed = readFileSync(join(packRoot, 'species-fungorum-oomycota-000.jsonl.gz'))
    const source = gunzipSync(compressed)
    expect(compressed.byteLength).toBe(file.bytes)
    expect(source.byteLength).toBe(file.sourceBytes)
    expect(hash(compressed)).toBe(file.sha256)
    expect(hash(source)).toBe(file.sourceSha256)
    const records = source.toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
    expect(records).toHaveLength(1673)
    expect(new Set(records.map((record) => record.colId)).size).toBe(1673)
    expect(new Set(records.map((record) => record.indexFungorumId)).size).toBe(1673)
    expect(records.every((record) => record.sourceDatasetId === '2073' && record.rank === 'species' && record.status === 'accepted' && record.currentUse === 'X')).toBe(true)
    expect(records.filter((record) => record.phylum === 'Oomycota')).toHaveLength(1650)
    expect(records.filter((record) => record.phylum === 'Hyphochytriomycota')).toHaveLength(23)
    expect(records.every((record) => /^https:\/\/www\.indexfungorum\.org\/ixfwebservice\/fungus\.asmx\/NameByKey\?NameKey=\d+$/.test(record.indexFungorumEndpoint))).toBe(true)
    expect(records.every((record) => /^[a-f0-9]{64}$/.test(record.indexFungorumResponseSha256) && /^[a-f0-9]{64}$/.test(record.checklistBankSourceResponseSha256))).toBe(true)
  })
})
