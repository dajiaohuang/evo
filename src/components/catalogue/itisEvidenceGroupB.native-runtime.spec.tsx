import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageManifest)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)

it('renders a real-shaped Actinopterygii native current-name row', async () => {
  const collection = {
    id: 'itis-actinopterygii-tsn-crosswalk', packageId: 'actinopterygii', provider: 'Integrated Taxonomic Information System', source: { exportDate: '2026-08-26' },
    counts: { total: 35928, accepted: 24266, synonymCurrentNameRedirect: 356, ambiguous: 14, unmatched: 11292, itisUpstreamOnly: 3732 },
    evidenceBoundary: { en: 'Actinopterygii exact mapping.', zh: '精确对应。' }, delivery: { profile: 'native-full', completeRows: true },
  } as never
  loadMetadata.mockResolvedValue({ nomenclatureCollections: [collection] } as never)
  loadRecord.mockResolvedValue({ collection, record: { status: 'accepted', colUsageId: '323C6', colScientificName: 'Cryptotomus roseus Cope, 1871', currentName: { tsn: '154401', scientificName: 'Cryptotomus roseus', usage: 'valid' } } } as never)
  const view = render(<PackageItisEvidence scope="actinopterygii" colId="323C6" packageId="actinopterygii" lineageIds={['8VR36']} zh={false} />)
  const details = view.container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
  await screen.findByText('Exact accepted-name match')
  expect(loadRecord).toHaveBeenCalledWith('actinopterygii', '323C6')
  expect(screen.getByRole('link', { name: /Cryptotomus roseus \(154401\)/ })).toBeVisible()
})

afterEach(() => vi.clearAllMocks())
