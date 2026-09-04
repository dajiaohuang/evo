import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { CatalogueItisEvidence } from './CatalogueItisEvidence'
import { catalogueItisOtherAnimalsScopes } from './catalogueItisOtherAnimalsScopes'
import { loadCatalogueItisOtherAnimalsRecord, loadCatalogueResourcePackManifest } from '../../data-client/staticDataClient'

vi.mock('./MyriapodaItisEvidence', () => ({ RecordDetail: ({ record }: { record: { status: string } | null }) => <span>{record?.status ?? 'no record'}</span> }))
vi.mock('../../data-client/staticDataClient', () => ({ loadCatalogueItisOtherAnimalsRecord: vi.fn(), loadCatalogueItisProtistsRecord: vi.fn(), loadCatalogueResourcePackManifest: vi.fn() }))

const loadManifest = vi.mocked(loadCatalogueResourcePackManifest)
const loadRecord = vi.mocked(loadCatalogueItisOtherAnimalsRecord)
const config = catalogueItisOtherAnimalsScopes[0]

function open(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}

describe('Catalogue ITIS evidence disclosure', () => {
  afterEach(() => vi.clearAllMocks())

  it('does not fetch while collapsed or for a wrong package', () => {
    const view = render(<CatalogueItisEvidence config={config} colId="NM001" packageId="protists-chromists" lineageIds={['NM']} zh={false} />)
    expect(view.container.querySelector('details')).toBeNull()
    expect(loadManifest).not.toHaveBeenCalled()
  })

  it('loads metadata first and one native record after opening', async () => {
    const collection = { id: config.collectionId, packageId: config.packageId, provider: 'Integrated Taxonomic Information System', source: { exportDate: '2026-08-26' }, counts: { eligible: 19604, accepted: 1899, redirects: 36, ambiguous: 1, unmatched: 17668, upstreamOnly: 1245 }, delivery: { completeRows: true, profile: 'native-full' }, evidenceBoundary: 'Exact scope.' }
    loadManifest.mockResolvedValue({ extensions: [collection] } as never)
    loadRecord.mockResolvedValue({ extension: collection, record: { status: 'accepted', colUsageId: 'NM001', colScientificName: 'Example', currentName: { tsn: '123', scientificName: 'Example', usage: 'valid' } } } as never)
    const view = render(<CatalogueItisEvidence config={config} colId="NM001" packageId="other-animals" lineageIds={['NM']} zh={false} />)
    expect(loadManifest).not.toHaveBeenCalled()
    open(view.container)
    await screen.findByText('accepted')
    expect(loadManifest).toHaveBeenCalledWith('other-animals')
    expect(loadRecord).toHaveBeenCalledWith('nematoda', 'NM001')
  })
})
