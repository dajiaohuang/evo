import { describe, expect, it } from 'vitest'
import { compareCatalogueRecords, createRuntimeRowIndex } from './runtimeQueries'
import type { CatalogueRecord, RuntimeSearchEntry } from './types'

describe('worker-owned row indexes', () => {
  it('returns bounded content matches, including Chinese, without sending all rows', () => {
    const rows = Array.from({ length: 1000 }, (_, id) => ({ id: String(id), kind: 'profile', title: `Equus ${id}`, titleZh: '马', terms: ['mammalia'] })) as RuntimeSearchEntry[]
    const query = createRuntimeRowIndex([...rows, rows[0]])
    expect(query({ kind: 'content', text: '马', limit: 16 })).toMatchObject({ totalMatches: 1000, records: rows.slice(0, 16) })
    expect(query({ kind: 'content', text: 'absent', limit: 16 }).records).toEqual([])
    expect(query({ kind: 'ids', ids: ['3', 'missing'] }).records).toEqual([rows[3]])
  })

  it('preserves global ranking and exact-name ambiguity across shard pages', () => {
    const rows = Array.from({ length: 80 }, (_, id) => ({
      id: String(id), status: id % 2 ? 'synonym' : 'accepted', normalizedName: id < 20 ? 'equus' : `equus species${id}`, scientificName: id < 20 ? 'Equus' : `Equus species${id}`, authorship: '',
    })) as CatalogueRecord[]
    const expected = [...rows].sort(compareCatalogueRecords).filter((row) => row.normalizedName === 'equus')
    const shards = [rows.slice(0, 30), rows.slice(30)].map((shard) => createRuntimeRowIndex(shard)({ kind: 'catalogue', text: 'equus', limit: 12 }))
    expect(shards.reduce((sum, shard) => sum + shard.totalMatches, 0)).toBe(rows.length)
    expect((shards.flatMap((shard) => shard.records) as CatalogueRecord[]).sort(compareCatalogueRecords).filter((row) => row.normalizedName === 'equus')).toEqual(expected)
  })
})
