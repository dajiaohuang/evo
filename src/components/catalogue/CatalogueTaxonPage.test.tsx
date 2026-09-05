import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { CatalogueTaxonPage } from './CatalogueTaxonPage'
import { loadCatalogueSanbiDescriptions, loadCataloguePlaziDescriptions } from '../../data-client/staticDataClient'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en' }) }))
vi.mock('../../data-client/staticDataClient', () => ({
  loadCatalogueManifest: vi.fn(async () => ({
    releaseAlias: 'COL26.8', upstreamTaxonUrlTemplate: 'https://example.org/{id}',
    hierarchy: { counts: { nodes: 1, acceptedSpeciesNodes: 1 } },
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
}))

beforeEach(() => {
  vi.mocked(loadCataloguePlaziDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueSanbiDescriptions).mockResolvedValue({ colId: '8MG5', wfoId: 'wfo-0000178691', packageId: 'angiospermae', descriptions: [{ type: 'Morphology', text: 'Leaves 2–3 mm.', sourceId: '11118.0', citation: 'Original botanical publication', rowNumber: 1 }] })
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
