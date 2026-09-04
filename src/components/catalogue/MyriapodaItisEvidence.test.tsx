import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MyriapodaItisEvidence } from './MyriapodaItisEvidence'
import { loadPackageItisAuthorityRecord, loadPackageNomenclatureCollection } from '../../data-client/staticDataClient'
import type { RuntimeItisNomenclatureCollection } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageNomenclatureCollection: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageNomenclatureCollection)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)
const collection: RuntimeItisNomenclatureCollection = {
  schemaVersion: 1, id: 'itis-myriapoda-tsn-crosswalk', recordType: 'release-pinned-exact-nomenclatural-crosswalk',
  provider: 'Integrated Taxonomic Information System', packageId: 'crustaceans-insects', source: { exportDate: '2026-08-26' }, matching: {},
  counts: { total: 17351, accepted: 5904, synonymCurrentNameRedirect: 58, ambiguous: 17, unmatched: 11372, itisCurrentSpecies: 6488, itisUpstreamOnly: 544 },
  files: [], upstreamOnlyFiles: [], canonicalFileInventory: [], descriptorSha256: 'fixture', evidenceBoundary: { en: 'A name crosswalk, not an extantness audit.', zh: '名称对应，不是现存状态审查。' }, limitations: [],
  delivery: { profile: 'web-light', completeRows: false, publishedFileCount: 0, canonicalFileCount: 3 },
}

describe('Myriapoda ITIS evidence disclosure', () => {
  afterEach(() => { vi.clearAllMocks() })

  it('is available for both exact roots and remains collapsed without fetching', () => {
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['Arthropoda', '93']} zh={false} />)
    expect(container.querySelector('details')?.open).toBe(false)
    expect(loadMetadata).not.toHaveBeenCalled()
    expect(loadRecord).not.toHaveBeenCalled()
  })

  it('loads summary on Web without treating the absent row as unmatched', async () => {
    loadMetadata.mockResolvedValue({ collection, sidecar: {} as never })
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    const details = container.querySelector('details')!
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText('A name crosswalk, not an extantness audit.')
    expect(loadMetadata).toHaveBeenCalledWith('crustaceans-insects', 'itis-myriapoda-tsn-crosswalk')
    expect(loadRecord).not.toHaveBeenCalled()
    expect(screen.queryByText(/not found in the pinned mapping/)).toBeNull()
  })

  it('loads one native row and renders explicit current-name evidence', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue({ collection: native, sidecar: {} as never })
    loadRecord.mockResolvedValue({ collection: native, record: { status: 'accepted', colUsageId: '93ABC', colScientificName: 'Example centipede', currentName: { tsn: '154401', scientificName: 'Example centipede', usage: 'valid' } } })
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['L2G4H']} zh={false} />)
    const details = container.querySelector('details')!
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText('Exact accepted-name match')
    expect(loadRecord).toHaveBeenCalledWith('myriapoda', '93ABC')
    expect(screen.getByRole('link', { name: /Example centipede \(154401\)/ })).toHaveAttribute('href', expect.stringContaining('search_value=154401'))
  })

  it('does not render for another package or unrelated lineage', () => {
    expect(render(<MyriapodaItisEvidence colId="X" packageId="other-animals" lineageIds={['93']} zh />).container.querySelector('details')).toBeNull()
    expect(render(<MyriapodaItisEvidence colId="X" packageId="crustaceans-insects" lineageIds={['H6']} zh />).container.querySelector('details')).toBeNull()
  })
})
