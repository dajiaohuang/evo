import { expect, it, vi } from 'vitest'
import { getFossilsByInterval } from './localFossils'
import { runLabQuery } from './lab'

vi.mock('./localFossils', () => ({
  FOSSIL_PERIODS: ['Cambrian', 'Ordovician'],
  getFossilsByInterval: vi.fn(async () => [{ oid: '1', tna: 'Alpha', idn: '', tid: '1', eag: 500, lag: 490, cid: '1', lng: '0', lat: '0' }]),
}))

it('counts repeated period selections once and does not substitute all periods', async () => {
  const result = await runLabQuery({ periods: ['Cambrian', 'Cambrian'], taxon: '', country: '', olderMa: null, youngerMa: null, limit: 100 })
  expect(result.stats.totalMatched).toBe(1)
  expect(result.countsByPeriod).toEqual([{ period: 'Cambrian', count: 1 }])
  expect(getFossilsByInterval).toHaveBeenCalledTimes(1)
  expect(getFossilsByInterval).toHaveBeenCalledWith('Cambrian')
})
