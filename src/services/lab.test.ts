import { describe, expect, it } from 'vitest'
import { strFromU8, unzipSync } from 'fflate'
import type { FossilOccurrence } from '../types'
import { createQueryPackage, diffLabQueries, filterFossils, fossilsToCsv, fossilsToGeoJson, LabQueryError, validateLabQuery, type LabQuery } from './lab'

const records: FossilOccurrence[] = [
  { oid: 'occ:1', tna: 'Hipparion', idn: '', tid: 'txn:1', rnk: 5, lng: '10', lat: '20', paleolng: 12, paleolat: 22, eag: 10, lag: 8, cid: 'c1', oei: '', cc2: 'CN' },
  { oid: 'occ:2', tna: 'Teleoceras', idn: '', tid: 'txn:2', rnk: 5, lng: '-90', lat: '35', eag: 12, lag: 10, cid: 'c2', oei: '', cc2: 'US' },
]

const query: LabQuery = { periods: [], taxon: 'hip', country: 'CN', olderMa: 11, youngerMa: 7, limit: 100 }

describe('lab query helpers', () => {
  it('combines taxon, country and intersecting age filters', () => {
    expect(filterFossils(records, query).map((record) => record.oid)).toEqual(['occ:1'])
  })

  it('creates CSV and GeoJSON representations', () => {
    expect(fossilsToCsv(records)).toContain('Hipparion')
    expect(fossilsToGeoJson(records, 'paleo').features).toHaveLength(1)
    expect(fossilsToGeoJson(records, 'modern').features).toHaveLength(2)
  })

  it('rejects a reversed age window', () => {
    try {
      validateLabQuery({ ...query, olderMa: 7, youngerMa: 11 })
      throw new Error('Expected validation to fail')
    } catch (error) {
      expect(error).toBeInstanceOf(LabQueryError)
      expect((error as LabQueryError).code).toBe('AGE_BOUNDS_REVERSED')
    }
  })

  it('diffs saved query definitions without treating missing optional filters as changes', () => {
    expect(diffLabQueries(query, { ...query, formation: '', taxon: 'teleo' }).map((change) => change.field)).toEqual(['taxon'])
  })

  it('neutralizes spreadsheet formulas in text cells', () => {
    const dangerous = [{ ...records[0], tna: '=HYPERLINK("https://example.test")' }]
    expect(fossilsToCsv(dangerous)).toContain("'=HYPERLINK")
  })

  it('creates a reproducible zip payload', async () => {
    const payload = await createQueryPackage({
      query,
      records,
      stats: { totalMatched: 2, returned: 2, uniqueTaxa: 2, countries: 2, paleoCoordinateCoverage: 0.5, modernCoordinateCoverage: 1 },
      countsByPeriod: [],
      topTaxa: [],
      truncated: false,
      samplingMethod: 'bounded non-random PBDB API prefix sample',
    })
    expect(payload.byteLength).toBeGreaterThan(500)
    const files = unzipSync(payload)
    expect(Object.keys(files)).toContain('release.json')
    expect(Object.keys(files)).toContain('checksums.txt')
    expect(Object.keys(files)).toContain('chart.svg')
    expect(Object.keys(files)).toContain('methods.md')
    expect(JSON.parse(strFromU8(files['release.json'])).datasetVersion).toBe('2026.08-static-v5-rc58')
  })
})
