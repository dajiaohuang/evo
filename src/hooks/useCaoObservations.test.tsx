import { Activity, StrictMode } from 'react'
import { act, render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { loadCaoObservationDataset } from '../data-client/staticDataClient'
import { useCaoObservations } from './useCaoObservations'

vi.mock('../data-client/staticDataClient', () => ({ loadCaoObservationDataset: vi.fn() }))
const dataset = 'geochemistry' as const
const loaded = {
  manifest: {}, descriptor: {},
  collection: { schemaVersion: 1, model: 'CAO2024', modelVersion: 'test', datasetId: dataset, bucket: 'test', records: [] },
} as unknown as Awaited<ReturnType<typeof loadCaoObservationDataset>>
function Probe() {
  const result = useCaoObservations([dataset])
  return <output>{result.collections[dataset] ? 'loaded' : 'waiting'}</output>
}
beforeEach(() => vi.mocked(loadCaoObservationDataset).mockReset())

it('publishes observations after StrictMode effect replay', async () => {
  vi.mocked(loadCaoObservationDataset).mockResolvedValue(loaded)
  render(<StrictMode><Probe /></StrictMode>)
  expect(await screen.findByText('loaded')).toBeInTheDocument()
  expect(loadCaoObservationDataset).toHaveBeenCalledTimes(1)
})

it('loads again after the request finishes while the map is hidden', async () => {
  let finish!: (value: typeof loaded) => void
  vi.mocked(loadCaoObservationDataset).mockImplementationOnce(() => new Promise((resolve) => { finish = resolve }))
  const { rerender } = render(<Activity mode="visible"><Probe /></Activity>)
  rerender(<Activity mode="hidden"><Probe /></Activity>)
  await act(async () => { finish(loaded) })
  vi.mocked(loadCaoObservationDataset).mockResolvedValue(loaded)
  rerender(<Activity mode="visible"><Probe /></Activity>)
  expect(await screen.findByText('loaded')).toBeInTheDocument()
  expect(loadCaoObservationDataset).toHaveBeenCalledTimes(2)
})
