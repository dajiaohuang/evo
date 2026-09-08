import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { CatalogueTaxonPage } from './CatalogueTaxonPage'
import { loadCatalogueFloraChinaDescriptions } from '../../data-client/staticDataClient'
import { loadCatalogueSanbiDescriptions, loadCataloguePlaziDescriptions, loadCatalogueFoaDescriptions, loadCatalogueMesoDescriptions, loadCatalogueFdacDescriptions, loadCatalogueMossDescriptions, loadCatalogueMossChinaDescriptions, loadCatalogueFnaDescriptions, loadCatalogueBrazilFloraDescriptions, loadCatalogueTurkeyDescriptions, loadCataloguePakistanDescriptions } from '../../data-client/staticDataClient'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en' }) }))
vi.mock('../../data-client/staticDataClient', () => ({
  loadCatalogueManifest: vi.fn(async () => ({
    releaseAlias: 'COL26.8', upstreamTaxonUrlTemplate: 'https://example.org/{id}',
    floraChinaDescriptions: { source: { provider: 'Missouri Botanical Garden', title: 'Flora of China', sourceVersion: 'retained archive', retrievedAt: '2026-09-05', sourceUrl: 'https://example.org/china.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    hierarchy: { counts: { nodes: 1, acceptedSpeciesNodes: 1 } },
    mesoDescriptions: { source: { provider: 'Missouri Botanical Garden', title: 'Flora Mesoamericana', sourceUrl: 'https://example.org/meso.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' } },
    fdacDescriptions: { source: { provider: 'Meise Botanic Garden', title: 'Flora of the Democratic Republic of the Congo', sourceVersion: 'historical archive', retrievedAt: '2026-09-05', sourceUrl: 'https://example.org/fdac.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    mossDescriptions: { source: { provider: 'Missouri Botanical Garden', title: 'Moss Flora of Central America', sourceVersion: 'historical archive', retrievedAt: '2026-09-05', sourceUrl: 'https://example.org/moss.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    pakistanDescriptions: { source: { provider: 'Pakistan Plant Database', title: 'Flora of Pakistan', sourceVersion: 'historical archive', retrievedAt: '2026-09-06', sourceUrl: 'https://example.org/pakistan.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    mossChinaDescriptions: { source: { provider: 'Missouri Botanical Garden', title: 'Moss Flora of China', sourceVersion: 'historical archive', retrievedAt: '2026-09-06', sourceUrl: 'https://example.org/moss-china.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    fnaDescriptions: { source: { provider: 'Flora of North America Association', title: 'Flora of North America', sourceVersion: 'historical archive', retrievedAt: '2026-09-06', sourceUrl: 'https://example.org/fna.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    brazilFloraDescriptions: { source: { provider: 'Brazil Flora Group', title: 'Brazil flora source', sourceVersion: 'older snapshot', retrievedAt: '2026-09-06', sourceUrl: 'https://example.org/brazil.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
    turkeyDescriptions: { source: { provider: 'Turkey Flora Archive', title: 'Turkey flora source', sourceVersion: '2024-02-20 snapshot', retrievedAt: '2026-09-06', sourceUrl: 'https://example.org/turkey.zip', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', limitations: [] } },
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
  loadCatalogueFdacDescriptions: vi.fn(),
  loadCatalogueMossDescriptions: vi.fn(),
  loadCatalogueMossChinaDescriptions: vi.fn(),
  loadCatalogueFnaDescriptions: vi.fn(),
  loadCatalogueBrazilFloraDescriptions: vi.fn(),
  loadCatalogueTurkeyDescriptions: vi.fn(),
  loadCatalogueFloraChinaDescriptions: vi.fn(),
  loadCataloguePakistanDescriptions: vi.fn(),
}))

beforeEach(() => {
  vi.mocked(loadCatalogueFloraChinaDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueMesoDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueFdacDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueMossDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueMossChinaDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueFnaDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueBrazilFloraDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueTurkeyDescriptions).mockResolvedValue(null)
  vi.mocked(loadCataloguePakistanDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueFoaDescriptions).mockResolvedValue(null)
  vi.mocked(loadCataloguePlaziDescriptions).mockResolvedValue(null)
  vi.mocked(loadCatalogueSanbiDescriptions).mockResolvedValue({ colId: '8MG5', wfoId: 'wfo-0000178691', packageId: 'angiospermae', descriptions: [{ type: 'Morphology', text: 'Leaves 2–3 mm.', sourceId: '11118.0', citation: 'Original botanical publication', rowNumber: 1 }] })
})

it('preserves Flora of China plain text, subscripts, citation and record locators', async () => {
  vi.mocked(loadCatalogueFloraChinaDescriptions).mockResolvedValueOnce({
    colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptionRecordNumber: 10,
    type: 'general', language: 'en', sourceLanguage: 'English', text: '<b>C₃ and C₄.</b>', sourceId: 'china-1',
    citation: 'Original Flora of China citation', referenceRecordNumber: 42, referenceTitle: '', referenceCreator: '', referenceDate: '',
    rightsHolder: 'Missouri Botanical Garden', rights: 'Flora of China archive', license: 'https://creativecommons.org/licenses/by/4.0/', citationScope: 'description-source',
  })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<b>C₃ and C₄.</b>')
  expect(paragraph).toHaveAttribute('lang', 'en')
  expect(paragraph.querySelector('b')).toBeNull()
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('Original Flora of China citation')).toBeInTheDocument()
  expect(screen.getByText(/description record 10.*reference record 42.*description-source citation/)).toBeInTheDocument()
  expect(screen.getByText(/Historical regional English source from China/)).toBeInTheDocument()
})

it('reports Flora of China loading failure without hiding the taxon page', async () => {
  vi.mocked(loadCatalogueFloraChinaDescriptions).mockRejectedValueOnce(new Error('checksum mismatch'))
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('Flora of China descriptions could not be loaded.')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Example plant', level: 1 })).toBeInTheDocument()
})

it('preserves Flora of Pakistan plain text, regional boundary and missing citation disclosure', async () => {
  vi.mocked(loadCataloguePakistanDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'general', text: '<i>Pakistan text.</i>', language: 'en', rowNumber: 7, sourceId: 'pak-1', citations: [], referenceRowNumbers: [], citationMissingInSource: true,
    rightsHolder: 'Pakistan Plant Database', rights: 'Flora of Pakistan archive', license: 'https://creativecommons.org/licenses/by/4.0/',
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<i>Pakistan text.</i>')
  expect(paragraph).toHaveAttribute('lang', 'en')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('The source provides no citation for this entry; none has been added.')).toBeInTheDocument()
  expect(screen.getByText(/Historical regional source in original English/)).toBeInTheDocument()
  expect(screen.getByText(/Flora of Pakistan archive/)).toBeInTheDocument()
})

it('preserves Moss Flora of China plain text, regional boundary and missing citation disclosure', async () => {
  vi.mocked(loadCatalogueMossChinaDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', sourceAuthorship: 'Source author', descriptions: [{
    type: 'general', text: '<i>China text.</i>', language: 'en', rowNumber: 7, sourceId: 'china-moss-1', citations: [], referenceRowNumbers: [], citationMissingInSource: true,
    rightsHolder: 'Missouri Botanical Garden', rights: 'Moss Flora of China archive', license: 'https://creativecommons.org/licenses/by/4.0/',
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<i>China text.</i>')
  expect(paragraph).toHaveAttribute('lang', 'en')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('The source provides no citation for this entry; none has been added.')).toBeInTheDocument()
  expect(screen.getByText(/Historical regional source in original English/)).toBeInTheDocument()
  expect(screen.getByText(/Moss Flora of China archive/)).toBeInTheDocument()
  expect(screen.getByText('Source name: Example plant Source author')).toBeInTheDocument()
})

it('preserves Flora of North America source prose, citation locators and end-marker warning', async () => {
  vi.mocked(loadCatalogueFnaDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'general', text: '<b>FNA text.</b>', language: 'en', rowNumber: 7, sourceId: 'fna-1', citations: ['Source citation'], referenceRowNumbers: [8], citationMissingInSource: false,
    rightsHolder: 'Flora of North America Association', rights: 'Flora of North America archive', license: 'https://creativecommons.org/licenses/by/4.0/', sourceExcerpt: true, sourceEndUnclosed: true,
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<b>FNA text.</b>')
  expect(paragraph).toHaveAttribute('lang', 'en')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('The source-end marker is unclosed; this alone does not establish whether text is missing.')).toBeInTheDocument()
  expect(screen.getByText('Source citation')).toBeInTheDocument()
  expect(screen.getByText(/Historical regional source in original English/)).toBeInTheDocument()
})

it('preserves Brazil flora language, citation scope and regional boundary as plain text', async () => {
  vi.mocked(loadCatalogueBrazilFloraDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'habitat', language: 'pt', text: '<b>Texto brasileiro.</b>', rowNumber: 7, sourceId: 'br-1', citations: [], referenceRowNumbers: [], citationScope: 'dataset', datasetCitation: 'Brazil flora dataset citation',
    rightsHolder: 'Brazil Flora Group', rights: 'Brazil flora archive', license: 'https://creativecommons.org/licenses/by/4.0/', sourceExcerpt: true,
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<b>Texto brasileiro.</b>')
  expect(paragraph).toHaveAttribute('lang', 'pt')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('Brazil flora dataset citation')).toBeInTheDocument()
  expect(screen.getByText(/Historical regional Brazil source/)).toBeInTheDocument()
})

it('preserves Turkey source name, Turkish language, citation and collapsed plain text', async () => {
  vi.mocked(loadCatalogueTurkeyDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', sourceScientificName: 'Örnek bitki', sourceAuthorship: 'L.', sourceFamily: 'Örnek familyası', descriptions: [{
    type: 'morphology', language: 'tr', sourceLanguage: 'TR', text: '<b>Türkçe metin.</b>', descriptionRecordNumber: 42, citationScope: 'dataset', datasetCitation: 'Turkey flora dataset citation', rights: 'Turkey flora archive', license: 'https://creativecommons.org/licenses/by/4.0/',
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<b>Türkçe metin.</b>')
  expect(paragraph).toHaveAttribute('lang', 'tr')
  expect(paragraph.closest('details')!.open).toBe(false)
  expect(screen.getByText('Turkey flora dataset citation')).toBeInTheDocument()
  expect(screen.getByText('Source name: Örnek bitki L. · Family: Örnek familyası')).toBeInTheDocument()
  expect(screen.getByText(/20 February 2024 snapshot/)).toBeInTheDocument()
})

it('preserves Moss Flora source boundaries and end-marker disclosure as plain text', async () => {
  vi.mocked(loadCatalogueMossDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'general', text: '<b>Habitat text.</b>', language: 'en', rowNumber: 54, sourceId: 'moss-1', citations: [], referenceRowNumbers: [],
    rightsHolder: 'Missouri Botanical Garden', rights: 'Moss archive', license: 'https://creativecommons.org/licenses/by/4.0/', sourceExcerpt: true, atSourceCharacterLimit: true, sourceEndUnclosed: true,
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  const paragraph = await screen.findByText('<b>Habitat text.</b>')
  expect(paragraph).toHaveAttribute('lang', 'en')
  expect(screen.getByText('This entry reaches the source character boundary and may be truncated.')).toBeInTheDocument()
  expect(screen.getByText('The source-end marker is unclosed; this does not indicate missing text.')).toBeInTheDocument()
  expect(screen.getByText(/Historical regional excerpts, not a complete global species dossier/)).toBeInTheDocument()
  expect(screen.getByText(/Moss archive/)).toBeInTheDocument()
})

it('preserves FDAC source language uncertainty, regional limits and missing citations', async () => {
  vi.mocked(loadCatalogueFdacDescriptions).mockResolvedValueOnce({ colId: '8MG5', wfoId: 'wfo-example', scientificName: 'Example plant', descriptions: [{
    type: 'habitat', text: 'Habitat text.', language: 'und', languageNote: 'The source does not declare a language.', sourceId: 'fdac-1', rowNumber: 19,
    citations: [], referenceRowNumbers: [], citationMissingInSource: true, rightsHolder: 'Meise Botanic Garden', rights: 'FDAC archive', license: 'https://creativecommons.org/licenses/by/4.0/',
  }] })
  render(<CatalogueTaxonPage release="COL26.8" id="8MG5" onNavigate={vi.fn()} />)
  expect(await screen.findByText('Habitat text.')).toHaveAttribute('lang', 'und')
  expect(screen.getByText('The source provides no citation for this entry; none has been added.')).toBeInTheDocument()
  expect(screen.getByText(/Historical regional source with no declared source language/)).toBeInTheDocument()
  expect(screen.getByText(/FDAC archive/)).toBeInTheDocument()
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
