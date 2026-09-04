import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageManifest)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)

const scopes = [
  ['actinopterygii', 'itis-actinopterygii-tsn-crosswalk', 'actinopterygii', '8VR36'],
  ['agnatha-myxini', 'itis-agnatha-myxini-tsn-crosswalk', 'early-fishes', 'KTXJW'],
  ['sarcopterygii', 'itis-sarcopterygii-tsn-crosswalk', 'tetrapod-transition', '8VSMX'],
  ['insecta', 'itis-insecta-tsn-crosswalk', 'crustaceans-insects', 'H6'],
  ['reptilia-non-crocodylia', 'itis-reptilia-tsn-crosswalk', 'turtles-lepidosaurs', '45C'],
] as const

function open(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}

describe('ITIS evidence Group B Web delivery', () => {
  afterEach(() => vi.clearAllMocks())

  it.each(scopes)('loads %s summary without a native row request', async (scope, collectionId, packageId, root) => {
    const collection = {
      id: collectionId, packageId, provider: 'Integrated Taxonomic Information System', source: { exportDate: '2026-08-26' },
      counts: { total: 2, accepted: 1, synonymCurrentNameRedirect: 1, ambiguous: 0, unmatched: 0, itisUpstreamOnly: 0 },
      evidenceBoundary: { en: `${scope} exact mapping only.`, zh: '精确对应。' }, delivery: { profile: 'web-light', completeRows: false },
    } as never
    loadMetadata.mockResolvedValue({ nomenclatureCollections: [collection] } as never)
    const view = render(<PackageItisEvidence scope={scope} colId="fixture" packageId={packageId} lineageIds={[root]} zh={false} />)
    open(view.container)
    await screen.findByText(`${scope} exact mapping only.`)
    expect(loadRecord).not.toHaveBeenCalled()
  })
})
