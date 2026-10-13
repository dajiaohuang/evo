import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { PbdbTaxonPage } from './PbdbTaxonPage'
import type { PbdbReaderIndexEntry, PbdbReaderRecord } from '../../data-client/pbdbReaderTypes'
import { buildRouteHash, parseRouteHash } from '../../utils/routing'
import { useAppStore } from '../../store'

const mocks = vi.hoisted(() => ({ loadPbdbReader: vi.fn(), loadPbdbReaderIndex: vi.fn() }))
vi.mock('../../data-client/staticDataClient', () => mocks)
vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en' }) }))

it('opens the public exact-ID reader, retains map state and pages recorded source-classification members', async () => {
  const identity = (id: number, name: string, parent?: string): PbdbReaderIndexEntry => ({
    pbdbTaxonId: `txn:${id}`,
    identity: { kind: 'taxon', scientificName: name, classification: { authority: 'Paleobiology Database', sourceUrl: `https://paleobiodb.org/data1.2/taxa/single.json?id=${id}`, parentSourceIdentifier: parent } },
  })
  const index = [identity(249478, 'Colognathus obscurus', 'txn:69037'), identity(69037, 'Colognathus'),
    ...Array.from({ length: 70 }, (_, n) => identity(500000 + n, `Recorded child ${n + 1}`, 'txn:249478'))]
  const record: PbdbReaderRecord = { ...index[0], profile: { scientificName: 'Colognathus obscurus', rank: 'species', sourceDatasetId: null, name: { en: 'Colognathus obscurus', zh: 'Colognathus obscurus' }, sections: [{ topic: 'occurrences', title: { en: 'What the records preserve' }, text: { en: 'Selected source records retain their own age brackets.' }, sourceIds: ['source'] }], sources: [{ id: 'source', title: 'Fixed source response', locator: 'accepted_no txn:249478', license: 'Recorded source rights' }], limitations: { en: 'Selected records, not a complete species range.', zh: '所选记录。' } } }
  mocks.loadPbdbReader.mockResolvedValue(record)
  record.ranges = [{ entityId: 'colognathus-test-material', taxonomicConcept: 'Recorded test material scope', geographicScope: 'Recorded sample scope', olderMa: 154.8, youngerMa: 145, status: 'available', confidence: 'medium', claimIds: ['recorded-claim'], referenceLocators: [{ referenceId: 'source', locator: 'Recorded sample window' }] }]
  mocks.loadPbdbReaderIndex.mockResolvedValue(index)
  const initialMap = { age: useAppStore.getState().currentAge, view: useAppStore.getState().viewState }
  const onNavigate = vi.fn()
  const route = parseRouteHash(buildRouteHash('pbdb', { id: 'txn:249478' }))
  expect(route.route).toBe('pbdb')
  render(<PbdbTaxonPage id={route.params.get('id')} onNavigate={onNavigate} />)
  expect(await screen.findByText('Selected source records retain their own age brackets.')).toBeInTheDocument()
  expect(screen.getAllByText('Recorded source rights').length).toBeGreaterThan(0)
  expect(screen.getAllByRole('button', { name: /^Recorded child/ })).toHaveLength(25)
  fireEvent.click(screen.getByRole('button', { name: 'Show 25 more source members' }))
  expect(screen.getAllByRole('button', { name: /^Recorded child/ })).toHaveLength(50)
  fireEvent.click(screen.getByRole('button', { name: 'Colognathus →' }))
  expect(onNavigate).toHaveBeenCalledWith('pbdb', { id: 'txn:69037' })
  expect(useAppStore.getState().currentAge).toBe(initialMap.age)
  expect(useAppStore.getState().viewState).toBe(initialMap.view)
  fireEvent.click(screen.getByRole('button', { name: 'View map time at the recorded interval midpoint' }))
  expect(onNavigate).toHaveBeenLastCalledWith('explore', { age: '149.9', older: '154.8', younger: '145' })
})
