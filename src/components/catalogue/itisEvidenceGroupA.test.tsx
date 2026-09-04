import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import { itisEvidenceGroupA } from './itisEvidenceGroupA'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'
import type { RuntimeItisNomenclatureCollection } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ loadPackageItisAuthorityRecord: vi.fn(), loadPackageManifest: vi.fn() }))
const loadMetadata = vi.mocked(loadPackageManifest)
const loadRecord = vi.mocked(loadPackageItisAuthorityRecord)

const fixtures = [
  ['crocodylia', 'crocodylomorphs-birds', 'itis-crocodylia-tsn-crosswalk', '329', '3FFQ3', 'Gavialis gangeticus', '202218'],
  ['perissodactyla', 'perissodactyla', 'itis-perissodactyla-tsn-crosswalk', '623DW', '35JV8', 'Dicerorhinus sumatrensis', '625002'],
  ['cetartiodactyla', 'cetartiodactyla', 'itis-cetartiodactyla-tsn-crosswalk', '6227M', '342N9', 'Dama dama', '552472'],
  ['primates', 'primates', 'itis-primates-tsn-crosswalk', '3W7', '34B7X', 'Daubentonia madagascariensis', '572886'],
  ['crustacea', 'crustaceans-insects', 'itis-crustacea-tsn-crosswalk', 'KZX8B', '322FY', 'Cryptosoma bairdii', '621742'],
] as const

function collection(id: RuntimeItisNomenclatureCollection['id'], packageId: string, completeRows: boolean): RuntimeItisNomenclatureCollection {
  return {
    schemaVersion: 1, id, recordType: 'release-pinned-exact-nomenclatural-crosswalk', provider: 'Integrated Taxonomic Information System', packageId,
    source: { exportDate: '2026-08-26' }, matching: {}, counts: { total: 1, accepted: 1, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 1, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 },
    files: [{ path: 'real-sidecar-000.jsonl.gz', records: 1, firstColUsageId: '000', lastColUsageId: 'ZZZZ', bytes: 1, sha256: 'fixture', sourceBytes: 1, sourceSha256: 'fixture' }], upstreamOnlyFiles: [], canonicalFileInventory: [], descriptorSha256: 'fixture',
    evidenceBoundary: { en: 'A name crosswalk, not an extantness audit.', zh: '名称对应，不是现存状态审查。' }, limitations: [], delivery: { profile: completeRows ? 'native-full' : 'web-light', completeRows, publishedFileCount: completeRows ? 1 : 0, canonicalFileCount: 1 },
  }
}

function openDisclosure(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}

describe('ITIS evidence Group A', () => {
  afterEach(() => vi.clearAllMocks())

  it('declares exactly the five owned scopes and their COL roots', () => {
    expect(Object.keys(itisEvidenceGroupA).sort()).toEqual(['cetartiodactyla', 'crocodylia', 'crustacea', 'perissodactyla', 'primates'])
    for (const [scope, , collectionId, root] of fixtures) {
      const config = itisEvidenceGroupA[scope]
      expect(config?.collectionId).toBe(collectionId)
      expect([...config!.roots]).toContain(root)
    }
  })

  it.each(fixtures)('%s stays closed without a request and loads its real accepted fixture', async (scope, packageId, collectionId, root, colId, name, tsn) => {
    const native = collection(collectionId, packageId, true)
    loadMetadata.mockResolvedValue({ nomenclatureCollections: [native] } as never)
    loadRecord.mockResolvedValue({ collection: native, record: { status: 'accepted', colUsageId: colId, colScientificName: `${name} (fixture source)`, exactMatchName: name, currentName: { tsn, scientificName: name, usage: 'valid' } } })
    const { container } = render(<PackageItisEvidence scope={scope} colId={colId} packageId={packageId} lineageIds={[root]} zh={false} />)
    expect(container.querySelector('details')).not.toHaveAttribute('open')
    expect(loadMetadata).not.toHaveBeenCalled()
    openDisclosure(container)
    await screen.findByText('Exact accepted-name match')
    expect(screen.getByRole('link', { name: new RegExp(`${name} \\(${tsn}\\)`) })).toBeVisible()
    expect(loadRecord).toHaveBeenCalledWith(scope, colId)
  })

  it.each(fixtures)('%s Web summary does not fetch a row', async (scope, packageId, collectionId, root, colId) => {
    const web = collection(collectionId, packageId, false)
    loadMetadata.mockResolvedValue({ nomenclatureCollections: [web] } as never)
    const { container } = render(<PackageItisEvidence scope={scope} colId={colId} packageId={packageId} lineageIds={[root]} zh={false} />)
    openDisclosure(container)
    await screen.findByText('A name crosswalk, not an extantness audit.')
    expect(loadRecord).not.toHaveBeenCalled()
  })
})
