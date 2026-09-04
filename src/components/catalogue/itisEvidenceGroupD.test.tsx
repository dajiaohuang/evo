import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import { itisEvidenceGroupB } from './itisEvidenceGroupB'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'
import type { RuntimeItisNomenclatureCollection } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageManifest)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)

const fixtures = [
  ['amphibia', 'amphibia', 'itis-2026-08-26-tsn-crosswalk', 'PH', '323CW', 'Cryptotriton alvarezdeltoroi', '586361'],
  ['collembola-protura', 'crustaceans-insects', 'itis-collembola-protura-tsn-crosswalk', 'KZS5W', '333WW', 'Cylindropygus ferox', '723760'],
] as const

function collection(id: RuntimeItisNomenclatureCollection['id'], packageId: string, completeRows: boolean): RuntimeItisNomenclatureCollection {
  const file = packageId === 'amphibia'
    ? { path: 'data/packages/vertebrata/amphibia/nomenclature/itis-tsn-sidecar-000.jsonl.gz', url: 'releases/rc113/packages/amphibia/nomenclature/itis-tsn-sidecar-000.jsonl.gz', records: 1320, minColId: '323CW', maxColId: '3TSLM', bytes: 47606, sourceBytes: 524210, sha256: '2835486f15e454aa1931ed27bc0887419870a8ce96feb86235b58d12016fe257', sourceSha256: '5e883293b6389a37f2640eb7ceb7dd9a48adac0e5d4471d81a58a8fa9f47a118', mediaType: 'application/x-ndjson' as const }
    : { path: 'data/packages/arthropoda/crustaceans-insects/nomenclature/itis-collembola-protura-sidecar-0000.jsonl.gz', url: 'releases/rc113/packages/crustaceans-insects/nomenclature/itis-collembola-protura-sidecar-0000.jsonl.gz', records: 6821, minColId: '333WW', maxColId: '6XB8P', bytes: 191800, sourceBytes: 2097038, sha256: 'abedfed6be3cf3640071bbd3c09fb81fa8d6f012d87c8f74e20b31fe3a16e61f', sourceSha256: '1237928f34daafad36cc0a378ee88ab4626c169ede5ee6f9fe53bb6f7ea219da', mediaType: 'application/x-ndjson' as const }
  return {
    schemaVersion: 1, id, recordType: 'release-pinned-exact-nomenclatural-crosswalk', provider: 'Integrated Taxonomic Information System', packageId,
    source: { exportDate: '2026-08-26' }, matching: {}, counts: { total: 1, accepted: 1, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisUpstreamOnly: 0 },
    files: [file], upstreamOnlyFiles: [], canonicalFileInventory: [{ ...file, role: 'col-partition' }], descriptorSha256: 'fixture', evidenceBoundary: { en: 'Frozen exact nomenclatural crosswalk.', zh: '冻结严格命名交叉映射。' }, limitations: [],
    delivery: { profile: completeRows ? 'native-full' : 'web-light', completeRows, publishedFileCount: completeRows ? 1 : 0, canonicalFileCount: 1 },
  }
}

function openDisclosure(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}

describe('RC113 ITIS package scopes', () => {
  afterEach(() => vi.clearAllMocks())

  it('declares the exact Amphibia and Collembola/Protura roots', () => {
    expect([...itisEvidenceGroupB.amphibia!.roots]).toEqual(['PH'])
    expect([...itisEvidenceGroupB['collembola-protura']!.roots]).toEqual(['KZS5W', '8NKDZ'])
  })

  it.each(fixtures)('%s stays closed and loads the real accepted row only after opening', async (scope, packageId, collectionId, root, colId, name, tsn) => {
    const native = collection(collectionId, packageId, true)
    loadMetadata.mockResolvedValue({ nomenclatureCollections: [native] } as never)
    loadRecord.mockResolvedValue({ collection: native, record: { status: 'accepted', colUsageId: colId, colScientificName: name, exactMatchName: name, currentName: { tsn, scientificName: name, usage: 'valid' } } })
    const { container } = render(<PackageItisEvidence scope={scope} colId={colId} packageId={packageId} lineageIds={[root]} zh={false} />)
    expect(container.querySelector('details')).not.toHaveAttribute('open')
    expect(loadMetadata).not.toHaveBeenCalled()
    openDisclosure(container)
    await screen.findByText('Exact accepted-name match')
    expect(screen.getByRole('link', { name: new RegExp(`${name} \\(${tsn}\\)`) })).toBeVisible()
    expect(loadRecord).toHaveBeenCalledWith(scope, colId)
  })
})
