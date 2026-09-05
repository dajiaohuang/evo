import { render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { CatalogueTaxonPage } from './CatalogueTaxonPage'
import { loadCatalogueSanbiDescriptions } from '../../data-client/staticDataClient'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en' }) }))
vi.mock('../../data-client/staticDataClient', () => ({
  loadCatalogueManifest: vi.fn(async () => ({
    releaseAlias: 'COL26.8', upstreamTaxonUrlTemplate: 'https://example.org/{id}',
    hierarchy: { counts: { nodes: 1, acceptedSpeciesNodes: 1 } },
    sanbiDescriptions: { source: { provider: 'SANBI', title: 'e-Flora of South Africa', sourceVersion: '1.36', issued: '2022-06-06', sourceUrl: 'https://example.org/archive.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' } },
  })),
  loadCatalogueHierarchyNode: vi.fn(async (id: string) => ({ id, scientificName: 'Example plant', authorship: null, parentId: null, rank: 'species', status: 'accepted', sourceDatasetId: null, childCount: 0, projection: 'accepted-species-hierarchy' })),
  loadCatalogueChildren: vi.fn(async () => []),
  loadCatalogueLineage: vi.fn(async () => []),
  loadCatalogueSpeciesOwnership: vi.fn(async () => null),
  loadCatalogueSourceChecklists: vi.fn(async () => []),
  loadCatalogueSanbiDescriptions: vi.fn(),
}))

beforeEach(() => {
  vi.mocked(loadCatalogueSanbiDescriptions).mockResolvedValue({ colId: '8MG5', wfoId: 'wfo-0000178691', packageId: 'angiospermae', descriptions: [{ type: 'Morphology', text: 'Leaves 2–3 mm.', sourceId: '11118.0', citation: 'Original botanical publication', rowNumber: 1 }] })
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
