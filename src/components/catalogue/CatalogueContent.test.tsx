import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { CatalogueContent } from './CatalogueContent'
import type { CatalogueRuntimeManifest, CatalogueKnowledgeRecord } from '../../data-client/types'

const mocks = vi.hoisted(() => Object.fromEntries(['Knowledge', 'Sanbi', 'Foa', 'Meso', 'Moss', 'MossChina', 'Fna', 'BrazilFlora', 'Turkey', 'FloraChina', 'Pakistan', 'Fdac', 'Plazi', 'Nicaragua', 'Panama'].map(name => [`loadCatalogue${name}${name === 'Knowledge' ? '' : 'Descriptions'}`, vi.fn()])))
vi.mock('../../data-client/staticDataClient', () => mocks)
const source = { title: 'Flora de Nicaragua', sourceUrl: 'https://example.org/source', provider: 'MBG', sourceVersion: 'retained', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' }
const manifest = { releaseAlias: 'COL26.8', knowledge: {}, sanbiDescriptions: { source }, nicaraguaDescriptions: { source }, panamaDescriptions: { source }, plaziDescriptions: { source } } as unknown as CatalogueRuntimeManifest
beforeEach(() => { Object.values(mocks).forEach(mock => mock.mockReset().mockResolvedValue(null)) })

it('renders source-linked introductions after editorial source scopes are removed', async () => {
  const record: CatalogueKnowledgeRecord = {
    colId: 'species', descriptionCollections: [],
    profile: {
      colId: 'species', scientificName: 'Example species', rank: 'species', sourceDatasetId: null,
      name: { en: 'Example species', zh: '示例种' }, checkedAt: '2026-10-11',
      sections: [{ topic: 'identity', text: { en: 'Source-linked text.', zh: '来源正文。' }, sourceIds: ['source'] }],
      sources: [{ id: 'source', title: 'Original source', url: 'https://example.org/source' }],
      limitations: { en: 'Names only.', zh: '仅名称。' },
    },
  }
  mocks.loadCatalogueKnowledge.mockResolvedValue(record)
  render(<CatalogueContent id="species" rank="species" manifest={manifest} zh={false} />)
  expect(await screen.findByText('Source-linked text.')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Original source' })).toHaveAttribute('href', 'https://example.org/source')
})

it('checks one index and skips all description collections when content is absent', async () => {
  render(<CatalogueContent id="species" rank="species" manifest={manifest} zh={false} />)
  await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument())
  expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledTimes(1)
  expect(screen.queryByText(/unstudied|no evidence/i)).not.toBeInTheDocument()
  Object.entries(mocks).filter(([name]) => name !== 'loadCatalogueKnowledge').forEach(([, mock]) => expect(mock).not.toHaveBeenCalled())
})

it('loads only indexed Nicaragua text and preserves missing citation boundaries', async () => {
  mocks.loadCatalogueKnowledge.mockResolvedValue({ colId: 'species', descriptionCollections: ['nicaraguaDescriptions'] })
  mocks.loadCatalogueNicaraguaDescriptions.mockResolvedValue({ colId: 'species', wfoId: 'wfo-example', descriptions: [{ rowNumber: 7, type: 'general', text: 'Hojas opuestas.', language: 'es', languageNote: 'Source language', citations: [], citationMissingInSource: true, citationScope: 'dataset', missingSourceIds: ['unresolved'], datasetCitation: 'Dataset citation', rightsHolder: 'MBG', rights: 'Retained rights', license: 'https://creativecommons.org/licenses/by/4.0/' }] })
  render(<CatalogueContent id="species" rank="species" manifest={manifest} zh={false} />)
  expect(await screen.findByText('Hojas opuestas.')).toHaveAttribute('lang', 'es')
  expect(screen.getByText(/entry-level citation is missing/)).toBeInTheDocument()
  expect(mocks.loadCatalogueNicaraguaDescriptions).toHaveBeenCalledTimes(1)
  expect(mocks.loadCataloguePanamaDescriptions).not.toHaveBeenCalled()
  expect(mocks.loadCatalogueSanbiDescriptions).not.toHaveBeenCalled()
})

it('does not turn a corrupt index into a claim that the taxon lacks content', async () => {
  mocks.loadCatalogueKnowledge.mockRejectedValue(new Error('checksum'))
  render(<CatalogueContent id="species" rank="species" manifest={manifest} zh={false} />)
  expect(await screen.findByText(/The account could not be loaded/)).toBeInTheDocument()
  expect(screen.queryByText(/release has no imported/)).not.toBeInTheDocument()
  expect(mocks.loadCatalogueSanbiDescriptions).not.toHaveBeenCalled()
})

it('does not turn branch coverage statistics into reader prose or fabricated child biology', async () => {
  const record: CatalogueKnowledgeRecord = { colId: 'order', descriptionCollections: [], subtree: { acceptedSpecies: 100, describedSpecies: 9, profiledSpecies: 0 } }
  mocks.loadCatalogueKnowledge.mockResolvedValue(record)
  render(<CatalogueContent id="order" rank="order" manifest={manifest} zh={false} />)
  await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument())
  expect(screen.queryByText('Coverage within this branch')).not.toBeInTheDocument()
  expect(screen.queryByText('100')).not.toBeInTheDocument()
  expect(screen.queryByText('9')).not.toBeInTheDocument()
  expect(mocks.loadCatalogueSanbiDescriptions).not.toHaveBeenCalled()
})

it('ignores late responses after leaving a taxon', async () => {
  let resolve!: (record: CatalogueKnowledgeRecord) => void
  mocks.loadCatalogueKnowledge.mockReturnValueOnce(new Promise(done => { resolve = done }))
  const { unmount } = render(<CatalogueContent id="old" rank="species" manifest={manifest} zh={false} />)
  unmount()
  resolve({ colId: 'old', descriptionCollections: ['sanbiDescriptions'] })
  await waitFor(() => expect(mocks.loadCatalogueSanbiDescriptions).not.toHaveBeenCalled())
})
