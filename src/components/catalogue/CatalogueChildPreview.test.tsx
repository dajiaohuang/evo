import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { CatalogueChildPreview } from './CatalogueChildPreview'
import type { CatalogueKnowledgeRecord } from '../../data-client/types'

const mocks = vi.hoisted(() => ({ loadCatalogueKnowledge: vi.fn(), loadCurrentManifest: vi.fn(), loadCatalogueManifest: vi.fn() }))
vi.mock('../../data-client/staticDataClient', () => mocks)
const props = { id: 'a', release: 'test', name: 'a', authorship: null, rank: 'species', status: 'accepted', zh: false, onRead: vi.fn() }
const record = (): CatalogueKnowledgeRecord => ({ colId: 'a', releaseAlias: 'test', descriptionCollections: [], profile: {
  colId: 'a', scientificName: 'a', rank: 'species', sourceDatasetId: null, name: { en: 'a', zh: 'a' }, summary: { en: 'Bound preview', zh: '限定介绍' }, summarySourceIds: ['preview'],
  limitations: { en: 'Test fixture only', zh: '仅供测试' }, sections: [], sources: [{ id: 'preview', title: 'Preview paper', url: 'https://example.org/preview' }, { id: 'account', title: 'Account paper', url: 'https://example.org/account' }],
} })
const activate = () => fireEvent.mouseEnter(screen.getByRole('listitem'))
const deferred = () => { let resolve!: (value: CatalogueKnowledgeRecord) => void; const promise = new Promise<CatalogueKnowledgeRecord>(done => { resolve = done }); return { promise, resolve } }
beforeEach(() => {
  mocks.loadCatalogueKnowledge.mockReset().mockResolvedValue(record())
  mocks.loadCurrentManifest.mockReset().mockResolvedValue({ datasetVersion: 'd1', catalogue: { releaseAlias: 'test' } })
  mocks.loadCatalogueManifest.mockReset().mockResolvedValue({ releaseAlias: 'test' })
})
afterEach(cleanup)

it('discloses only preview-bound sources and preserves the loaded bilingual preview on locale change', async () => {
  const view = render(<CatalogueChildPreview {...props} />)
  activate()
  expect(await screen.findByText('Bound preview')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Preview paper' })).toHaveAttribute('href', 'https://example.org/preview')
  expect(screen.queryByText('Account paper')).not.toBeInTheDocument()
  view.rerender(<CatalogueChildPreview {...props} zh />)
  expect(screen.getByText('限定介绍')).toBeInTheDocument()
  expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledTimes(1)
})
it.each(['missing-language', 'unresolved-source'] as const)('withholds a preview with %s', async boundary => {
  const value = record()
  if (boundary === 'missing-language') value.profile!.summary!.zh = ''
  else value.profile!.summarySourceIds = ['absent']
  mocks.loadCatalogueKnowledge.mockResolvedValue(value)
  render(<CatalogueChildPreview {...props} />); activate()
  expect(await screen.findByText(/No valid source-bound/)).toBeInTheDocument()
  expect(screen.queryByText('Bound preview')).not.toBeInTheDocument()
  expect(screen.queryByRole('link')).not.toBeInTheDocument()
})
it('requires manual retry after failure and coalesces activation while retry is in flight', async () => {
  const pending = deferred()
  mocks.loadCatalogueKnowledge.mockRejectedValueOnce(new Error('transport')).mockReturnValueOnce(pending.promise)
  render(<CatalogueChildPreview {...props} />); activate()
  const retry = await screen.findByRole('button', { name: 'Retry preview' })
  activate(); fireEvent.focus(screen.getByRole('button', { name: /species · accepted/ }))
  expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledTimes(1)
  fireEvent.click(retry); activate(); fireEvent.click(retry)
  expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledTimes(2)
  await act(async () => pending.resolve(record()))
  expect(screen.getByText('Bound preview')).toBeInTheDocument()
})
it.each(['id', 'release', 'datasetVersion', 'unmount'] as const)('ignores a late response after %s changes', async boundary => {
  const pending = deferred()
  mocks.loadCatalogueKnowledge.mockReturnValueOnce(pending.promise)
  const view = render(<CatalogueChildPreview {...props} datasetVersion="d1" />); activate()
  await act(async () => {})
  expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledTimes(1)
  if (boundary === 'unmount') view.unmount()
  else view.rerender(<CatalogueChildPreview {...props} datasetVersion="d1" {...{ [boundary]: 'changed' }} />)
  await act(async () => pending.resolve(record()))
  expect(screen.queryByText('Bound preview')).not.toBeInTheDocument()
  expect(screen.queryByText('Preview paper')).not.toBeInTheDocument()
})
it.each(['record', 'profile', 'release'] as const)('rejects a mismatched %s identity', async boundary => {
  const value = record()
  if (boundary === 'record') value.colId = 'other'
  else if (boundary === 'profile') value.profile!.colId = 'other'
  else value.releaseAlias = 'other'
  mocks.loadCatalogueKnowledge.mockResolvedValue(value)
  render(<CatalogueChildPreview {...props} />); activate()
  expect(await screen.findByRole('button', { name: 'Retry preview' })).toBeInTheDocument()
  expect(screen.queryByText('Bound preview')).not.toBeInTheDocument()
})
it.each(['dataset', 'current-release', 'catalogue-release', 'match'])('gates backend preview against the bundled %s', async boundary => {
  if (boundary === 'dataset') mocks.loadCurrentManifest.mockResolvedValue({ datasetVersion: 'other', catalogue: { releaseAlias: 'test' } })
  if (boundary === 'current-release') mocks.loadCurrentManifest.mockResolvedValue({ datasetVersion: 'd1', catalogue: { releaseAlias: 'other' } })
  if (boundary === 'catalogue-release') mocks.loadCatalogueManifest.mockResolvedValue({ releaseAlias: 'other' })
  render(<CatalogueChildPreview {...props} datasetVersion="d1" />); activate()
  if (boundary === 'match') { expect(await screen.findByText('Bound preview')).toBeInTheDocument(); expect(mocks.loadCatalogueKnowledge).toHaveBeenCalledWith('a') }
  else { expect(await screen.findByRole('button', { name: 'Retry preview' })).toBeInTheDocument(); expect(mocks.loadCatalogueKnowledge).not.toHaveBeenCalled() }
})
