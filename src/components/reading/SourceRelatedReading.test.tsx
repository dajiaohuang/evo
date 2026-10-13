import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { recordedReadingTargets, SourceRelatedReading } from './SourceRelatedReading'
import { loadPbdbReaderIndex } from '../../data-client/staticDataClient'

vi.mock('../../data-client/staticDataClient', () => ({ loadPbdbReaderIndex: vi.fn(async () => [{ pbdbTaxonId: 'txn:249478' }]) }))

it('opens a supported ordinary PBDB ID and rejects other source namespaces', async () => {
  const onNavigate = vi.fn()
  const sources = [{ readingTargets: [{ name: 'Colognathus obscurus', pbdbTaxonId: 'txn:249478' }, { name: 'Wrong source', pbdbTaxonId: 'occ:249478' }] }]
  render(<SourceRelatedReading language="en" sources={sources} onNavigate={onNavigate} />)
  fireEvent.click(await screen.findByRole('button', { name: 'Colognathus obscurus →' }))
  expect(onNavigate).toHaveBeenCalledWith('pbdb', { id: 'txn:249478' })
  expect(screen.queryByRole('button', { name: 'Wrong source →' })).toBeNull()
})

it('distinguishes an unavailable PBDB loader from a missing target without using COL fallback', async () => {
  vi.mocked(loadPbdbReaderIndex).mockRejectedValueOnce(new Error('checksum'))
  const onNavigate = vi.fn()
  render(<SourceRelatedReading language="en" sources={[{ readingTargets: [{ name: 'Recorded PBDB concept', pbdbTaxonId: 'txn:249478' }] }]} onNavigate={onNavigate} />)
  expect(await screen.findByText('Related PBDB material could not be loaded.')).toBeInTheDocument()
  expect(onNavigate).not.toHaveBeenCalled()
  expect(screen.queryByText('No published reader for these recorded PBDB identifiers.')).toBeNull()
})

it('opens a recorded COL material target in its source release without resolving a storage path', () => {
  const onNavigate = vi.fn()
  render(<SourceRelatedReading language="zh" release="COL26.8" onNavigate={onNavigate} sources={[
    { id: 'historical-records', readingTargets: [{ name: 'Equus kiang', colId: '7TKMZ', release: 'COL26.8', canonicalPath: 'content/nodes/COL%3A7TKMZ' }] },
  ]} />)
  fireEvent.click(screen.getByRole('button', { name: 'Equus kiang →' }))
  expect(onNavigate).toHaveBeenCalledWith('registry', { release: 'COL26.8', id: '7TKMZ' })
})

it('keeps missing and unresolved source targets unavailable without merging same-name concepts', () => {
  const targets = recordedReadingTargets([
    { readingTargets: [{ name: 'Recorded name', colId: 'same-name', release: 'COL26.7' }] },
    { readingTargets: [{ name: 'Recorded name', canonicalPath: 'old/tree/Recorded_name/page.en.md' }] },
    { readingTargets: [{ name: 'Unpublished PBDB concept', pbdbTaxonId: 'txn:unpublished' }] },
    { readingTargets: [{ name: 'Equus kiang', colId: '7TKMZ', release: 'COL26.8' }, { name: 'Equus kiang', colId: '7TKMZ', release: 'COL26.8' }] },
  ], 'COL26.8')
  expect(targets).toEqual([{ name: 'Equus kiang', route: 'registry', params: { release: 'COL26.8', id: '7TKMZ' } }])
})

it('uses the caller release for an exact recorded COL ID and requires that release context', () => {
  const sources = [{ readingTargets: [{ name: 'Crocidura batesi', colId: 'ZK3H', canonicalPath: 'content/nodes/COL%3AZK3H' }] }]
  expect(recordedReadingTargets(sources, 'COL26.8')).toEqual([
    { name: 'Crocidura batesi', route: 'registry', params: { release: 'COL26.8', id: 'ZK3H' } },
  ])
  expect(recordedReadingTargets(sources)).toEqual([])
})
