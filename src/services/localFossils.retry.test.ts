import { beforeEach, expect, it, vi } from 'vitest'
import { loadRuntimeFile } from '../data-client/staticDataClient'

vi.mock('../data-client/staticDataClient', () => ({
  loadOccurrenceManifest: vi.fn(async () => ({ periods: { Cambrian: [{ url: 'cambrian' }] } })),
  loadPackageManifest: vi.fn(async () => ({ files: { occurrenceSnapshot: { url: 'targeted' } } })),
  loadRuntimeFile: vi.fn(),
}))
beforeEach(() => { vi.resetModules(); vi.mocked(loadRuntimeFile).mockReset() })

it('retries a failed period shard while deduplicating simultaneous requests', async () => {
  const { getFossilsByInterval } = await import('./localFossils')
  vi.mocked(loadRuntimeFile).mockRejectedValueOnce(new Error('offline')).mockResolvedValue([])
  const requests = await Promise.allSettled([getFossilsByInterval('Cambrian'), getFossilsByInterval('Cambrian')])
  expect(requests.every((request) => request.status === 'rejected')).toBe(true)
  expect(loadRuntimeFile).toHaveBeenCalledTimes(1)
  await expect(getFossilsByInterval('Cambrian')).resolves.toEqual([])
  expect(loadRuntimeFile).toHaveBeenCalledTimes(2)
})

it('rejects inherited object keys as unknown periods', async () => {
  const { getFossilsByInterval } = await import('./localFossils')
  await expect(getFossilsByInterval('constructor')).resolves.toEqual([])
  expect(loadRuntimeFile).not.toHaveBeenCalled()
})

it('retries a failed targeted snapshot instead of retaining the rejection', async () => {
  const { getFossilsByEntity } = await import('./localFossils')
  vi.mocked(loadRuntimeFile).mockRejectedValueOnce(new Error('offline')).mockResolvedValue({
    uniqueOccurrenceCount: 0, records: [],
    queryResults: [{ entityId: 'ptychopariida', upstreamReportedTotal: 0, paginationComplete: true }],
  })
  await expect(getFossilsByEntity('ptychopariida')).rejects.toThrow('offline')
  await expect(getFossilsByEntity('ptychopariida')).resolves.toMatchObject({ records: [], truncated: false })
  expect(loadRuntimeFile).toHaveBeenCalledTimes(2)
})
