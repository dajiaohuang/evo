import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { WikipediaWindow } from './WikipediaWindow'
import { wikipediaSummary } from '../../services/wikipedia'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'zh' }) }))
vi.mock('../../services/wikipedia', () => ({ wikipediaSummary: vi.fn(), loadWikipediaMapping: () => Promise.resolve({ entries: {} }), loadCatalogueWikipedia: () => Promise.resolve(null) }))
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) { this.setAttribute('open', '') })
  HTMLDialogElement.prototype.close = vi.fn()
})
afterEach(() => { cleanup(); vi.unstubAllGlobals() })

it('resolves redirects to the canonical article and renders summary as text', async () => {
  vi.mocked(wikipediaSummary).mockResolvedValue({ status: 'ready', title: 'Human', extract: 'Human summary', url: 'https://en.wikipedia.org/wiki/Human', locale: 'en', scope: undefined, revisionId: undefined, revisionTimestamp: undefined, attributionUrl: undefined, licenseUrl: undefined, licenseLabel: undefined })
  const close = vi.fn()
  render(<WikipediaWindow name="Homo sapiens" onClose={close} />)
  expect(await screen.findByText('Human summary')).toBeTruthy()
  expect(screen.getByRole('link', { name: /打开完整/ }).getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Human')
  fireEvent.click(screen.getByRole('button'))
  expect(close).toHaveBeenCalledOnce()
})

it('does not claim missing or ambiguous names have an article', async () => {
  vi.mocked(wikipediaSummary).mockResolvedValue({ status: 'missing' })
  render(<WikipediaWindow name="Unknown taxon" onClose={vi.fn()} />)
  expect(await screen.findByText(/未找到名称/)).toBeTruthy()
  expect(screen.getByRole('link').getAttribute('href')).toContain('search=Unknown%20taxon')
})

it('offers an external lookup when the network fails', async () => {
  vi.mocked(wikipediaSummary).mockRejectedValue(new Error('offline'))
  render(<WikipediaWindow name="Homo sapiens" onClose={vi.fn()} />)
  expect(await screen.findByRole('alert')).toBeTruthy()
  expect(screen.getByRole('link').getAttribute('href')).toContain('search=')
})

it('labels a same-name candidate before showing its locally saved summary', async () => {
  vi.mocked(wikipediaSummary).mockResolvedValue({ status: 'candidates', options: [{ item: 'https://www.wikidata.org/entity/Q1', parentNames: ['Hominidae'], url: 'https://en.wikipedia.org/wiki/Pan_(genus)', snapshot: {
    status: 'available', locale: 'en', requestedTitle: 'Pan (genus)', title: 'Pan (genus)', extract: 'Saved candidate', url: 'https://en.wikipedia.org/wiki/Pan_(genus)', revisionId: 42,
  } }] })
  render(<WikipediaWindow name="Pan" catalogueId="COL1" onClose={vi.fn()} />)
  fireEvent.click(await screen.findByRole('button', { name: '查看候选摘要' }))
  expect(screen.getByText('Saved candidate')).toBeTruthy()
  expect(screen.getByText(/同名候选条目/)).toBeTruthy()
  expect(screen.getByRole('link', { name: /打开完整/ }).getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Pan_(genus)')
})
