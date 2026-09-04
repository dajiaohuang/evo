import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MyriapodaItisEvidence, PackageItisEvidence } from './MyriapodaItisEvidence'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'
import type { RuntimeItisNomenclatureCollection } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageManifest)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)
const collection: RuntimeItisNomenclatureCollection = {
  schemaVersion: 1, id: 'itis-myriapoda-tsn-crosswalk', recordType: 'release-pinned-exact-nomenclatural-crosswalk',
  provider: 'Integrated Taxonomic Information System', packageId: 'crustaceans-insects', source: { exportDate: '2026-08-26' }, matching: {},
  counts: { total: 17351, accepted: 5904, synonymCurrentNameRedirect: 58, ambiguous: 17, unmatched: 11372, itisCurrentSpecies: 6488, itisUpstreamOnly: 544 },
  files: [], upstreamOnlyFiles: [], canonicalFileInventory: [], descriptorSha256: 'fixture', evidenceBoundary: { en: 'A name crosswalk, not an extantness audit.', zh: '名称对应，不是现存状态审查。' }, limitations: [],
  delivery: { profile: 'web-light', completeRows: false, publishedFileCount: 0, canonicalFileCount: 4 },
}

function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej })
  return { promise, resolve, reject }
}

function manifestFor(value: RuntimeItisNomenclatureCollection) {
  return { nomenclatureCollections: [value] } as never
}

const acceptedRecord = { status: 'accepted' as const, colUsageId: '93ABC', colScientificName: 'Example centipede', currentName: { tsn: '154401', scientificName: 'Example centipede', usage: 'valid' } }

function openDetails(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
  return details
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
    loadMetadata.mockResolvedValue(manifestFor(collection))
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    openDetails(container)
    await screen.findByText('A name crosswalk, not an extantness audit.')
    expect(loadMetadata).toHaveBeenCalledWith('crustaceans-insects')
    expect(loadRecord).not.toHaveBeenCalled()
    expect(screen.queryByText(/not found in the pinned mapping/)).toBeNull()
  })

  it('loads one native row and renders explicit current-name evidence', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue(manifestFor(native))
    loadRecord.mockResolvedValue({ collection: native, record: acceptedRecord })
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['L2G4H']} zh={false} />)
    openDetails(container)
    await screen.findByText('Exact accepted-name match')
    expect(loadRecord).toHaveBeenCalledWith('myriapoda', '93ABC')
    expect(screen.getByRole('link', { name: /Example centipede \(154401\)/ })).toHaveAttribute('href', expect.stringContaining('search_value=154401'))
  })

  it('retries after metadata failure when reopened', async () => {
    loadMetadata.mockRejectedValueOnce(new Error('metadata unavailable')).mockResolvedValueOnce(manifestFor(collection))
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    const details = openDetails(container)
    await screen.findByRole('alert')
    expect(loadMetadata).toHaveBeenCalledTimes(1)
    details.open = false
    fireEvent(details, new Event('toggle'))
    openDetails(container)
    await screen.findByText('A name crosswalk, not an extantness audit.')
    expect(loadMetadata).toHaveBeenCalledTimes(2)
  })

  it('retries after a native row failure when reopened', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue(manifestFor(native))
    loadRecord.mockRejectedValueOnce(new Error('row unavailable')).mockResolvedValueOnce({ collection: native, record: acceptedRecord })
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    const details = openDetails(container)
    await screen.findByRole('alert')
    expect(screen.queryByText(/not found in the pinned mapping/)).toBeNull()
    details.open = false
    fireEvent(details, new Event('toggle'))
    openDetails(container)
    await screen.findByText('Exact accepted-name match')
    expect(loadRecord).toHaveBeenCalledTimes(2)
  })

  it('renders nested candidates for the real 3S67T ambiguous record', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue(manifestFor(native))
    loadRecord.mockResolvedValue({ collection: native, record: {
      status: 'ambiguous', colUsageId: '3S67T', colScientificName: 'Lamyctes (Metalamyctes) neglectus Lawrence, 1955', currentName: null,
      candidates: [
        { currentName: { tsn: '1089704', scientificName: 'Lamyctes andinus' }, evidence: [{}] },
        { currentName: { tsn: '1089740', scientificName: 'Lamyctes neglectus' }, evidence: [{}] },
      ],
    } })
    const { container } = render(<MyriapodaItisEvidence colId="3S67T" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    openDetails(container)
    await screen.findByText('Multiple exact candidates')
    expect(screen.getByRole('link', { name: /Lamyctes andinus \(1089704\)/ })).toBeVisible()
    expect(screen.getByRole('link', { name: /Lamyctes neglectus \(1089740\)/ })).toBeVisible()
  })

  it('renders the explicit redirect target for the real 363VR record', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue(manifestFor(native))
    loadRecord.mockResolvedValue({ collection: native, record: {
      status: 'synonym-current-name-redirect', colUsageId: '363VR', colScientificName: 'Digitipes gravelyi Jangi & Dass, 1984',
      currentName: { tsn: '1090822', scientificName: 'Otostigmus gravelyi', usage: 'valid' },
    } })
    const { container } = render(<MyriapodaItisEvidence colId="363VR" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    openDetails(container)
    await screen.findByText('Explicit synonym redirect')
    expect(screen.getByRole('link', { name: /Otostigmus gravelyi \(1090822\)/ })).toHaveAttribute('href', expect.stringContaining('search_value=1090822'))
  })

  it('does not show not-found while metadata or native row is pending', async () => {
    const native = { ...collection, delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    const metadata = deferred<never>()
    const row = deferred<{ collection: RuntimeItisNomenclatureCollection; record: typeof acceptedRecord }>()
    loadMetadata.mockReturnValue(metadata.promise)
    loadRecord.mockReturnValue(row.promise)
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    openDetails(container)
    expect(screen.queryByText(/not found in the pinned mapping/)).toBeNull()
    metadata.resolve(manifestFor(native))
    await screen.findByText('Loading the matching ITIS shard…')
    expect(screen.queryByText(/not found in the pinned mapping/)).toBeNull()
    row.resolve({ collection: native, record: acceptedRecord })
    await screen.findByText('Exact accepted-name match')
  })

  it('retries when a pending request fails after the disclosure was closed', async () => {
    const pending = deferred<never>()
    loadMetadata.mockReturnValueOnce(pending.promise).mockResolvedValueOnce(manifestFor(collection))
    const { container } = render(<MyriapodaItisEvidence colId="93ABC" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    const details = openDetails(container)
    details.open = false
    fireEvent(details, new Event('toggle'))
    await act(async () => { pending.reject(new Error('closed request failed')) })
    openDetails(container)
    await screen.findByText('A name crosswalk, not an extantness audit.')
    expect(loadMetadata).toHaveBeenCalledTimes(2)
  })

  it('closes on COL ID changes and ignores the old deferred response', async () => {
    const first = deferred<never>()
    const second = deferred<never>()
    const oldCollection = { ...collection, evidenceBoundary: { en: 'OLD RESPONSE', zh: 'OLD RESPONSE' } }
    const newCollection = { ...collection, evidenceBoundary: { en: 'NEW RESPONSE', zh: 'NEW RESPONSE' } }
    loadMetadata.mockReturnValueOnce(first.promise).mockReturnValueOnce(second.promise)
    const view = render(<MyriapodaItisEvidence colId="OLD" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    openDetails(view.container)
    view.rerender(<MyriapodaItisEvidence colId="NEW" packageId="crustaceans-insects" lineageIds={['93']} zh={false} />)
    expect(view.container.querySelector('details')?.open).toBe(false)
    first.resolve(manifestFor(oldCollection))
    await Promise.resolve()
    expect(screen.queryByText('OLD RESPONSE')).toBeNull()
    openDetails(view.container)
    second.resolve(manifestFor(newCollection))
    await screen.findByText('NEW RESPONSE')
  })

  it('does not render for another package or unrelated lineage', () => {
    expect(render(<MyriapodaItisEvidence colId="X" packageId="other-animals" lineageIds={['93']} zh />).container.querySelector('details')).toBeNull()
    expect(render(<MyriapodaItisEvidence colId="X" packageId="crustaceans-insects" lineageIds={['H6']} zh />).container.querySelector('details')).toBeNull()
    expect(render(<MyriapodaItisEvidence colId="P55BK" packageId="crustaceans-insects" lineageIds={['L2G4H', 'L25JL']} zh />).container.querySelector('details')).toBeNull()
  })

  it('routes the Chondrichthyes root to its own ITIS collection', async () => {
    const chondrichthyes = { ...collection, id: 'itis-chondrichthyes-tsn-crosswalk' as const, packageId: 'chondrichthyes', delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue(manifestFor(chondrichthyes))
    loadRecord.mockResolvedValue({ collection: chondrichthyes, record: { status: 'accepted', colUsageId: '3247M', colScientificName: 'Ctenacis fehlmanni (Springer, 1968)', exactMatchName: 'Ctenacis fehlmanni', currentName: { tsn: '160559', scientificName: 'Ctenacis fehlmanni', usage: 'valid' } } })
    const { container } = render(<PackageItisEvidence scope="chondrichthyes" colId="3247M" packageId="chondrichthyes" lineageIds={['8X6G5']} zh={false} />)
    openDetails(container)
    await screen.findByText('Exact accepted-name match')
    expect(loadMetadata).toHaveBeenCalledWith('chondrichthyes')
    expect(loadRecord).toHaveBeenCalledWith('chondrichthyes', '3247M')
    expect(screen.getByRole('link', { name: /Ctenacis fehlmanni \(160559\)/ })).toBeVisible()
  })

  it('keeps Chondrichthyes Web mode metadata-only', async () => {
    const chondrichthyes = { ...collection, id: 'itis-chondrichthyes-tsn-crosswalk' as const, packageId: 'chondrichthyes' }
    loadMetadata.mockResolvedValue(manifestFor(chondrichthyes))
    const { container } = render(<PackageItisEvidence scope="chondrichthyes" colId="3247M" packageId="chondrichthyes" lineageIds={['8X6G5']} zh={false} />)
    openDetails(container)
    await screen.findByText('ITIS Chondrichthyes exact nomenclatural mapping')
    expect(loadRecord).not.toHaveBeenCalled()
  })

  it('routes Chelicerata and excludes the TRL Trilobita root', async () => {
    const chelicerata = { ...collection, id: 'itis-chelicerata-tsn-crosswalk' as const, packageId: 'trilobites-chelicerates', delivery: { ...collection.delivery, profile: 'native-full' as const, completeRows: true } }
    loadMetadata.mockResolvedValue(manifestFor(chelicerata))
    loadRecord.mockResolvedValue({ collection: chelicerata, record: { status: 'accepted', colUsageId: '3235D', colScientificName: 'Cryptothele alluaudi Simon, 1893', exactMatchName: 'Cryptothele alluaudi', currentName: { tsn: '877405', scientificName: 'Cryptothele alluaudi', usage: 'valid' } } })
    const included = render(<PackageItisEvidence scope="chelicerata" colId="3235D" packageId="trilobites-chelicerates" lineageIds={['KZWYC']} zh={false} />)
    openDetails(included.container)
    await screen.findByText('Exact accepted-name match')
    expect(loadMetadata).toHaveBeenCalledWith('trilobites-chelicerates')
    expect(loadRecord).toHaveBeenCalledWith('chelicerata', '3235D')
    expect(screen.getByRole('link', { name: /Cryptothele alluaudi \(877405\)/ })).toBeVisible()
    expect(render(<PackageItisEvidence scope="chelicerata" colId="TRL" packageId="trilobites-chelicerates" lineageIds={['KZWYC', 'TRL']} zh={false} />).container.querySelector('details')).toBeNull()
  })
})
