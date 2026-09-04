import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import { loadPackageManifest } from '../../data-client/staticDataClient'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageManifest)

describe('ITIS group C disclosure boundaries', () => {
  it('does not render or fetch for a wrong owner', () => {
    const { container } = render(<PackageItisEvidence scope="mollusca-brachiopoda" colId="329PB" packageId="echinoderms" lineageIds={['M2L']} zh={false} />)
    expect(container.querySelector('details')).toBeNull()
    expect(loadMetadata).not.toHaveBeenCalled()
  })

  it('renders the KZ Graptolithina boundary and loads metadata only after opening', async () => {
    loadMetadata.mockResolvedValue({ nomenclatureCollections: [{
      id: 'itis-mollusca-brachiopoda-tsn-crosswalk', provider: 'Integrated Taxonomic Information System', packageId: 'molluscs-brachiopods',
      recordType: 'release-pinned-exact-nomenclatural-crosswalk', source: { license: 'CC0-1.0' }, counts: { total: 159801, accepted: 7219, synonymCurrentNameRedirect: 256, ambiguous: 16, unmatched: 152310, itisCurrentSpecies: 1, itisSpeciesSynonymLinks: 1, itisUpstreamOnly: 4289 }, files: [], upstreamOnlyFiles: [], canonicalFileInventory: [], descriptorSha256: 'fixture', matching: {}, evidenceBoundary: { en: 'fixture', zh: 'fixture' }, limitations: [], delivery: { profile: 'web-light', completeRows: false, publishedFileCount: 0, canonicalFileCount: 60 },
    }] } as never)
    render(<PackageItisEvidence scope="mollusca-brachiopoda" colId="329PB" packageId="molluscs-brachiopods" lineageIds={['KZ']} zh={false} />)
    const details = screen.getByText('ITIS Mollusca, Brachiopoda and Graptolithina exact nomenclatural mapping').closest('details')!
    expect(details).not.toHaveAttribute('open')
    expect(loadMetadata).not.toHaveBeenCalled()
    fireEvent.click(screen.getByText('ITIS Mollusca, Brachiopoda and Graptolithina exact nomenclatural mapping'))
    expect(await screen.findByText('COL records in scope')).toBeVisible()
    expect(loadMetadata).toHaveBeenCalledWith('molluscs-brachiopods')
  })
})
