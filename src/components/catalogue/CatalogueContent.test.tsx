import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { CatalogueContent } from './CatalogueContent'
import type { CatalogueRuntimeManifest, CatalogueKnowledgeRecord } from '../../data-client/types'

const mocks = vi.hoisted(() => Object.fromEntries(['Knowledge', 'Sanbi', 'Foa', 'Meso', 'Moss', 'MossChina', 'Fna', 'BrazilFlora', 'Turkey', 'FloraChina', 'Pakistan', 'Fdac', 'Plazi', 'Nicaragua', 'Panama'].map(name => [`loadCatalogue${name}${name === 'Knowledge' ? '' : 'Descriptions'}`, vi.fn()])))
vi.mock('../../data-client/staticDataClient', () => mocks)
const source = { title: 'Flora de Nicaragua', sourceUrl: 'https://example.org/source', provider: 'MBG', sourceVersion: 'retained', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' }
const manifest = { releaseAlias: 'COL26.8', knowledge: {}, sanbiDescriptions: { source }, nicaraguaDescriptions: { source }, panamaDescriptions: { source }, plaziDescriptions: { source } } as unknown as CatalogueRuntimeManifest
beforeEach(() => { Object.values(mocks).forEach(mock => mock.mockReset().mockResolvedValue(null)) })

it('checks one index and skips all description collections when content is absent', async () => {
  render(<CatalogueContent id="species" rank="species" manifest={manifest} zh={false} />)
  expect(await screen.findByText(/does not mean the species is unstudied/)).toBeInTheDocument()
  expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledTimes(1)
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
  expect(await screen.findByText(/Coverage is unknown/)).toBeInTheDocument()
  expect(screen.queryByText(/release has no imported/)).not.toBeInTheDocument()
  expect(mocks.loadCatalogueSanbiDescriptions).not.toHaveBeenCalled()
})

it('keeps higher-rank source-text coverage separate from a missing introduction', async () => {
  const record: CatalogueKnowledgeRecord = { colId: 'order', descriptionCollections: [], subtree: { acceptedSpecies: 100, describedSpecies: 9, profiledSpecies: 0 } }
  mocks.loadCatalogueKnowledge.mockResolvedValue(record)
  render(<CatalogueContent id="order" rank="order" manifest={manifest} zh={false} />)
  expect(await screen.findByText('Coverage within this branch')).toBeInTheDocument()
  expect(screen.getByText('100')).toBeInTheDocument()
  expect(screen.getByText('9')).toBeInTheDocument()
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
