import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { CatalogueTaxonPage } from './CatalogueTaxonPage'
import { loadCatalogueSanbiDescriptions, loadCataloguePlaziDescriptions, loadCatalogueFoaDescriptions, loadCatalogueMesoDescriptions } from '../../data-client/staticDataClient'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en' }) }))
vi.mock('../../data-client/staticDataClient', () => ({
  loadCatalogueManifest: vi.fn(async () => ({
    releaseAlias: 'COL26.8', upstreamTaxonUrlTemplate: 'https://example.org/{id}',
    hierarchy: { counts: { nodes: 1, acceptedSpeciesNodes: 1 } },
    mesoDescriptions: { source: { provider: 'Missouri Botanical Garden', title: 'Flora Mesoamericana', sourceUrl: 'https://example.org/meso.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' } },
    foaDescriptions: { source: { provider: 'Australian Biological Resources Study', title: 'Flora of Australia', sourceVersion: '2020-12-03 archive', sourceUrl: 'https://example.org/foa.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' } },
    plaziDescriptions: { source: { provider: 'Plazi TreatmentBank', sourceUrl: 'https://plazi.org', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' } },
    sanbiDescriptions: { source: { provider: 'SANBI', title: 'e-Flora of South Africa', sourceVersion: '1.36', issued: '2022-06-06', sourceUrl: 'https://example.org/archive.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' } },
  })),
  loadCatalogueHierarchyNode: vi.fn(async (id: string) => ({ id, scientificName: 'Example plant', authorship: null, parentId: null, rank: 'species', status: 'accepted', sourceDatasetId: null, childCount: 0, projection: 'accepted-species-hierarchy' })),
  loadCatalogueChildren: vi.fn(async () => []),
  loadCatalogueLineage: vi.fn(async () => []),
  loadCatalogueSpeciesOwnership: vi.fn(async () => null),
  loadCatalogueSourceChecklists: vi.fn(async () => []),
  loadCatalogueSanbiDescriptions: vi.fn(),
  loadCataloguePlaziDescriptions: vi.fn(),
  loadCatalogueFoaDescriptions: vi.fn(),
  loadCatalogueMesoDescriptions: vi.fn(),
}))

beforeEach(() => {
  vi.mocked(loadCatalogueMesoDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueFoaDescriptions).mockResolvedValue(null)
  vi.mocked(loadCataloguePlaziDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueSanbiDescriptions).mockResolvedValue({ colId: '8MG5', wfoId: 'wfo-0000178691', packageId: 'angiospermae', descriptions: [{ type: 'Morphology', text: 'Leaves 2–3 mm.', sourceId: '11118.0', citation: 'Original botanical publication', rowNumber: 1 }] })
})

it('retains Spanish excerpts, every citation and source truncation disclosure', async () => {
  vi.mocked(loadCatalogueMesoDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'general', text: 'Raíces fibrosas.', language: 'es', rowNumber: 1, sourceExcerpt: true, atSourceCharacterLimit: true,
    rightsHolder: 'Missouri Botanical Garden', rights: 'Missouri Botanical Garden', license: 'https://creativecommons.org/licenses/by/4.0/',
    references: [{ sourceId: 'one', citation: 'First flora reference', sourceUrl: 'https://example.org/one', referenceRowNumber: 2, license: 'CC BY 4.0' },
      { sourceId: 'two', citation: 'Second flora reference', sourceUrl: '', referenceRowNumber: 3, license: 'CC BY 4.0' }],
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('Raíces fibrosas.')
  expect(paragraph).toHaveAttribute('lang', 'es')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('This entry reaches the source character limit and may be truncated.')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'First flora reference' })).toHaveAttribute('href', 'https://example.org/one')
  expect(screen.getByText('Second flora reference')).toBeInTheDocument()
})

it('keeps classification usable when Mesoamericana loading fails', async () => {
  vi.mocked(loadCatalogueMesoDescriptions).mockRejectedValueOnce(new Error('offline'))
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('Flora Mesoamericana excerpts could not be loaded.')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Example plant' })).toBeInTheDocument()
})

it('preserves FoA attribution, regional limits and collapsed plain text', async () => {
  vi.mocked(loadCatalogueFoaDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'Habitat', text: 'Grows on rocky slopes.', language: 'en', citation: 'Australian flora citation', sourceUrl: 'https://example.org/flora', sourceId: '1958', rowNumber: 3,
    rightsHolder: 'Commonwealth of Australia (2018)', rights: 'Australian Biological Resource Study', license: 'http://creativecommons.org/licenses/by/4.0',
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('Grows on rocky slopes.')
  expect(paragraph).toHaveAttribute('lang', 'en')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('Australian flora citation')).toBeInTheDocument()
  expect(screen.getByText(/Commonwealth of Australia/)).toBeInTheDocument()
  expect(screen.getByText(/Historical Australian regional source/)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Original source' })).toHaveAttribute('href', 'https://example.org/flora')
})

it('isolates FoA failure from the classification page', async () => {
  vi.mocked(loadCatalogueFoaDescriptions).mockRejectedValueOnce(new Error('offline'))
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('Flora of Australia descriptions could not be loaded.')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Example plant' })).toBeInTheDocument()
})

it('preserves Plazi language, citation and limitations in collapsed details', async () => {
  vi.mocked(loadCataloguePlaziDescriptions).mockResolvedValueOnce({ colId: '8MG5', scientificName: 'Example plant', descriptions: [{
    type: 'diagnosis', text: 'Herba annua.', language: 'la', citation: 'Original taxonomic publication',
    treatmentUrl: 'https://treatment.plazi.org/id/example', rowNumber: 3, archiveSha256: 'abc', sourceArchive: 'example.zip',
    sourceAuthorship: 'Original author', mappingBasis: 'individually-reviewed-bibliographic-author-variant', limitations: 'Publication sample scope.',
    sourceScientificName: 'Original species name', sourceColUsageId: 'source-usage',
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const text = await screen.findByText('Herba annua.')
  expect(text).toHaveAttribute('lang', 'la')
  const details = text.closest('details')!
  expect(details.open).toBe(false)
  fireEvent.click(details.querySelector('summary')!)
  expect(details.open).toBe(true)
  expect(screen.getByText('Original taxonomic publication')).toBeInTheDocument()
  expect(screen.getByText('Publication sample scope.')).toBeInTheDocument()
  expect(screen.getByText(/Source name: Original species name/)).toHaveTextContent('source-usage')
  expect(screen.getByRole('link', { name: 'Original treatment' })).toHaveAttribute('href', 'https://treatment.plazi.org/id/example')
})

it('isolates Plazi load failure from classification and SANBI content', async () => {
  vi.mocked(loadCataloguePlaziDescriptions).mockRejectedValueOnce(new Error('offline'))
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('Plazi original descriptions could not be loaded.')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Example plant' })).toBeInTheDocument()
  expect(screen.getByText('Original botanical publication')).toBeInTheDocument()
})

it('discards the previous species description error when navigating to another record', async () => {
  vi.mocked(loadCataloguePlaziDescriptions).mockRejectedValueOnce(new Error('offline'))
  const onNavigate = vi.fn()
  const view = render(<CatalogueTaxonPage release="COL26.8" id="first" onNavigate={onNavigate} />)
  expect(await screen.findByText('Plazi original descriptions could not be loaded.')).toBeInTheDocument()
  view.rerender(<CatalogueTaxonPage release="COL26.8" id="second" onNavigate={onNavigate} />)
  expect(await screen.findByRole('heading', { name: 'Example plant' })).toBeInTheDocument()
  expect(screen.queryByText('Plazi original descriptions could not be loaded.')).not.toBeInTheDocument()
})

it('renders collapsed original text with source attribution and a regional boundary', async () => {
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('Leaves 2–3 mm.')).toBeInTheDocument()
  const details = screen.getByText('Morphology').closest('details')!
  expect(details.open).toBe(false)
  expect(screen.getByText('Original botanical publication')).toBeInTheDocument()
  expect(screen.getByText(/Regional South African source/)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'CC BY 4.0' })).toHaveAttribute('href', 'https://creativecommons.org/licenses/by/4.0/')
})

it('keeps the classification page available when description loading fails', async () => {
  vi.mocked(loadCatalogueSanbiDescriptions).mockRejectedValueOnce(new Error('offline'))
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('SANBI descriptions could not be loaded.')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Example plant' })).toBeInTheDocument()
})
