import { fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))

const loadMetadata = vi.mocked(loadPackageManifest)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)

const cases = [
  ['actinopterygii', 'itis-actinopterygii-tsn-crosswalk', 'actinopterygii', '8VR36', '323C6'],
  ['agnatha-myxini', 'itis-agnatha-myxini-tsn-crosswalk', 'early-fishes', 'KTXJW', '3C2LN'],
  ['sarcopterygii', 'itis-sarcopterygii-tsn-crosswalk', 'tetrapod-transition', '8VSMX', '4N6QX'],
  ['insecta', 'itis-insecta-tsn-crosswalk', 'crustaceans-insects', 'H6', '32222'],
  ['reptilia-non-crocodylia', 'itis-reptilia-tsn-crosswalk', 'turtles-lepidosaurs', '45C', '3256B'],
] as const

function openDetails(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}

describe('ITIS evidence Group B scope routing', () => {
  afterEach(() => vi.clearAllMocks())

  it.each(cases)('keeps %s collapsed without fetching', (scope, _collectionId, packageId, root) => {
    const view = render(<PackageItisEvidence scope={scope} colId="fixture" packageId={packageId} lineageIds={[root]} zh={false} />)
    expect(view.container.querySelector('details')?.open).toBe(false)
    expect(loadMetadata).not.toHaveBeenCalled()
    expect(loadRecord).not.toHaveBeenCalled()
  })

  it('excludes the Crocodylia root from the non-crocodylian Reptilia scope', () => {
    const view = render(<PackageItisEvidence scope="reptilia-non-crocodylia" colId="fixture" packageId="turtles-lepidosaurs" lineageIds={['45C', '329']} zh={false} />)
    expect(view.container.querySelector('details')).toBeNull()
  })

  it.each(cases)('routes %s native rows through its exact scope and COL ID', async (scope, collectionId, packageId, root, colId) => {
    const collection = {
      id: collectionId, packageId, provider: 'Integrated Taxonomic Information System', source: { exportDate: '2026-08-26' },
      counts: { total: 1, accepted: 1, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisUpstreamOnly: 0 },
      evidenceBoundary: { en: 'Exact mapping only.', zh: '精确对应。' }, delivery: { profile: 'native-full', completeRows: true },
    } as never
    loadMetadata.mockResolvedValue({ nomenclatureCollections: [collection] } as never)
    loadRecord.mockResolvedValue({ collection, record: { status: 'accepted', colUsageId: colId, colScientificName: 'Fixture species', currentName: { tsn: '123', scientificName: 'Fixture species', usage: 'valid' } } } as never)
    const view = render(<PackageItisEvidence scope={scope} colId={colId} packageId={packageId} lineageIds={[root]} zh={false} />)
    openDetails(view.container)
    await vi.waitFor(() => expect(loadRecord).toHaveBeenCalledWith(scope, colId))
  })
})
