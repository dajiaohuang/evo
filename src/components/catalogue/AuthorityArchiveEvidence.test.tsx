import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AuthorityArchiveEvidence } from './AuthorityArchiveEvidence'
import { loadPackageAuthorityArchiveRecord, loadPackageAuthorityArchiveSourceOnly } from '../../data-client/staticDataClient'
import type { RuntimeAuthorityArchiveCollection } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageAuthorityArchiveRecord: vi.fn(), loadPackageAuthorityArchiveSourceOnly: vi.fn() }))
const load = vi.mocked(loadPackageAuthorityArchiveRecord)
const collection: RuntimeAuthorityArchiveCollection = {
  schemaVersion: 1,
  id: 'worms-mollusca-archive-crosswalk',
  recordType: 'release-pinned-authority-archive-crosswalk',
  packageId: 'molluscs-brachiopods',
  provider: 'World Register of Marine Species via ChecklistBank',
  source: { license: 'CC-BY-4.0', version: '2026-09-01', versionDoi: '10.48580/d4fd.v148' },
  counts: { total: 10, accepted: 7, redirect: 1, ambiguous: 1, unmatched: 1, withheld: 0, upstreamOnly: 2 },
  evidenceBoundary: { en: 'A pinned name mapping, not a biological dossier.', zh: '固定名称对应，不是生物档案。' },
  scope: {}, matching: {}, files: [], upstreamOnlyFiles: [], canonicalFileInventory: [], descriptorSha256: 'fixture', limitations: [],
  delivery: { completeRows: false, profile: 'web-light', publishedFileCount: 0, canonicalFileCount: 0 },
}

describe('authority archive disclosure', () => {
  afterEach(() => { vi.clearAllMocks() })
  it('stays collapsed without loading rows and distinguishes Web summary from an unmatched name', async () => {
    load.mockResolvedValue({ collection, record: null })
    const { container } = render(<AuthorityArchiveEvidence colId="M001" packageId="molluscs-brachiopods" lineageIds={['M2L']} zh={false} />)
    const details = container.querySelector('details')!
    expect(details.open).toBe(false)
    expect(load).not.toHaveBeenCalled()
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText(/does not mean this species is unmatched/)
    expect(load).toHaveBeenCalledWith('molluscs-brachiopods', 'worms-mollusca-archive-crosswalk', 'M001')
    expect(screen.getByRole('link', { name: 'Verify the pinned source version' })).toHaveAttribute('href', 'https://doi.org/10.48580/d4fd.v148')
    await waitFor(() => expect(load).toHaveBeenCalledTimes(1))
  })
  it('does not show OSF for a non-Orthoptera member of the mixed arthropod package', () => {
    const { container } = render(<AuthorityArchiveEvidence colId="N001" packageId="crustaceans-insects" lineageIds={['H6']} zh />)
    expect(container.querySelector('details')).toBeNull()
    expect(load).not.toHaveBeenCalled()
  })
  it.each([
    ['crustaceans-insects', '93', '326BJ', 'chilobase-archive-crosswalk', 'ChiloBase'],
    ['trilobites-chelicerates', '42N', '345WT', 'scorpion-files-archive-crosswalk', 'The Scorpion Files'],
    ['turtles-lepidosaurs', '45C', 'REPTILE1', 'reptiledb-turtles-lepidosaurs-extension', 'ReptileDB'],
    ['turtles-lepidosaurs', '477', 'REPTILE2', 'reptiledb-turtles-lepidosaurs-extension', 'ReptileDB'],
    ['turtles-lepidosaurs', 'RP', 'REPTILE3', 'reptiledb-turtles-lepidosaurs-extension', 'ReptileDB'],
    ['crocodylomorphs-birds', '329', 'CROC1', 'reptiledb-crocodylia-extension', 'ReptileDB'],
  ] as const)('routes %s specialist evidence only from its exact lineage root', async (packageId, root, colId, id, title) => {
    load.mockResolvedValue({ collection: { ...collection, id, packageId, provider: 'ChecklistBank' }, record: null })
    const { container } = render(<AuthorityArchiveEvidence colId={colId} packageId={packageId} lineageIds={[root]} zh={false} />)
    const details = container.querySelector('details')!
    expect(screen.getByText(new RegExp(title))).toBeInTheDocument()
    expect(load).not.toHaveBeenCalled()
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText(/does not mean this species is unmatched/)
    expect(load).toHaveBeenCalledWith(packageId, id, colId)
  })
  it('does not route bird members of the mixed package to ReptileDB', () => {
    const { container } = render(<AuthorityArchiveEvidence colId="BIRD1" packageId="crocodylomorphs-birds" lineageIds={['RP', 'V2']} zh={false} />)
    expect(container.querySelector('details')).toBeNull()
    expect(load).not.toHaveBeenCalled()
  })
  it('labels the archive version DOI separately when ReptileDB API metadata has none', async () => {
    load.mockResolvedValue({ collection: { ...collection, id: 'reptiledb-turtles-lepidosaurs-extension',
      packageId: 'turtles-lepidosaurs', source: { license: 'cc by', versionDoi: null,
        embeddedArchiveMetadata: { versionDoi: '10.48580/d37s.v31' } } }, record: null })
    const { container } = render(<AuthorityArchiveEvidence colId="REPTILE1" packageId="turtles-lepidosaurs" lineageIds={['45C']} zh={false} />)
    const details = container.querySelector('details')!
    details.open = true
    fireEvent(details, new Event('toggle'))
    expect(await screen.findByRole('link', { name: 'Verify the version recorded inside the archive' }))
      .toHaveAttribute('href', 'https://doi.org/10.48580/d37s.v31')
    expect(screen.queryByRole('link', { name: 'Verify the pinned source version' })).not.toBeInTheDocument()
  })
  it('routes the Radiozoa COL root to the WoRMS archive without loading while collapsed', async () => {
    load.mockResolvedValue({ collection: { ...collection, id: 'worms-radiozoa-archive-crosswalk', packageId: 'protists-chromists' }, record: null })
    const { container } = render(<AuthorityArchiveEvidence colId="328ST" packageId="protists-chromists" lineageIds={['5X']} zh={false} />)
    const details = container.querySelector('details')!
    expect(screen.getByText(/WoRMS · Radiozoa/)).toBeInTheDocument()
    expect(load).not.toHaveBeenCalled()
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText(/does not mean this species is unmatched/)
    expect(load).toHaveBeenCalledWith('protists-chromists', 'worms-radiozoa-archive-crosswalk', '328ST')
  })
  it('routes the Hydrozoa COL root to its pinned archive without loading while collapsed', async () => {
    load.mockResolvedValue({ collection: { ...collection, id: 'worms-hydrozoa-archive-crosswalk', packageId: 'sponges-cnidarians', provider: 'World Hydrozoa Database via ChecklistBank' }, record: null })
    const { container } = render(<AuthorityArchiveEvidence colId="3245N" packageId="sponges-cnidarians" lineageIds={['CN2', 'B8V3X']} zh={false} />)
    const details = container.querySelector('details')!
    expect(screen.getByText(/WoRMS · Hydrozoa/)).toBeInTheDocument()
    expect(load).not.toHaveBeenCalled()
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText(/does not mean this species is unmatched/)
    expect(load).toHaveBeenCalledWith('sponges-cnidarians', 'worms-hydrozoa-archive-crosswalk', '3245N')
  })
  it('shows distinct OSF synonym and accepted Name IDs sharing one target OTU', async () => {
    load.mockResolvedValue({ collection: { ...collection, delivery: { ...collection.delivery, profile: 'native-full', completeRows: true } }, record: {
      colId: 'O001', colScientificName: 'Old name', colAuthorship: '', status: 'redirect',
      matchedName: { id: 'otu-1', nameId: 'old-1', scientificName: 'Old name', authorship: '', status: 'synonym', url: '' },
      acceptedName: { id: 'otu-1', nameId: 'new-1', scientificName: 'New name', authorship: '', status: 'accepted', url: '' },
      candidates: [], mappingBasis: 'Explicit synonym relation.', sourceRows: [],
    } })
    const { container } = render(<AuthorityArchiveEvidence colId="O001" packageId="crustaceans-insects" lineageIds={['CJBKK']} zh={false} />)
    const details = container.querySelector('details')!
    details.open = true
    fireEvent(details, new Event('toggle'))
    await screen.findByText('Name ID: old-1')
    expect(screen.getByText('Name ID: new-1')).toBeInTheDocument()
  })
  it('loads native source-only records only after their separate disclosure is opened', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    load.mockResolvedValue({ collection: native, record: null })
    const sourceOnly = vi.mocked(loadPackageAuthorityArchiveSourceOnly)
    sourceOnly.mockResolvedValue([{ colId: null, colScientificName: null, colAuthorship: null, status: 'upstream-only', matchedName: null,
      acceptedName: { id: 'source-1', scientificName: 'Example taxon', authorship: '', status: 'accepted', url: 'https://example.org/taxon/1' },
      candidates: [], mappingBasis: 'Fixture', sourceRows: [] }])
    const { container } = render(<AuthorityArchiveEvidence colId="M001" packageId="molluscs-brachiopods" lineageIds={['M2L']} zh={false} />)
    const details = container.querySelector('details')!
    details.open = true
    fireEvent(details, new Event('toggle'))
    const summary = await screen.findByText('Browse separate source-only records')
    expect(sourceOnly).not.toHaveBeenCalled()
    const nested = summary.closest('details')!
    nested.open = true
    fireEvent(nested, new Event('toggle'))
    await screen.findByRole('link', { name: 'Example taxon' })
    expect(sourceOnly).toHaveBeenCalledWith('molluscs-brachiopods', 'worms-mollusca-archive-crosswalk', 0)
    expect(details.open).toBe(true)
  })
})
