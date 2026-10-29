import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { WikipediaWindow } from './WikipediaWindow'
import { loadCatalogueWikipedia, loadWikipediaMapping } from '../../services/wikipedia'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'zh' }) }))
vi.mock('../../services/wikipedia', () => ({ loadWikipediaMapping: vi.fn(), loadCatalogueWikipedia: vi.fn() }))
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) { this.setAttribute('open', '') })
  HTMLDialogElement.prototype.close = vi.fn()
  vi.mocked(loadWikipediaMapping).mockResolvedValue({ entries: {} })
  vi.mocked(loadCatalogueWikipedia).mockResolvedValue(null)
})
afterEach(() => { cleanup(); vi.clearAllMocks() })

it('opens an existing link without requesting a summary', async () => {
  vi.mocked(loadWikipediaMapping).mockResolvedValue({ entries: { 'Homo sapiens': { status: 'matched', title: 'Human', url: 'https://en.wikipedia.org/wiki/Human' } } })
  const close = vi.fn()
  render(<WikipediaWindow name="Homo sapiens" onClose={close} />)
  expect(await screen.findByText(/已找到 Wikipedia 条目/)).toBeTruthy()
  expect(screen.getByRole('link', { name: /打开完整/ }).getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Human')
  expect(loadWikipediaMapping).toHaveBeenCalledOnce()
  fireEvent.click(screen.getByRole('button'))
  expect(close).toHaveBeenCalledOnce()
})

it('offers search when an identity has not been confirmed', async () => {
  render(<WikipediaWindow name="Unknown taxon" onClose={vi.fn()} />)
  expect(await screen.findByText(/链接尚未确认/)).toBeTruthy()
  expect(screen.getByRole('link').getAttribute('href')).toContain('search=Unknown%20taxon')
})

it('offers an external lookup when the local link cannot be loaded', async () => {
  vi.mocked(loadWikipediaMapping).mockRejectedValue(new Error('offline'))
  render(<WikipediaWindow name="Homo sapiens" onClose={vi.fn()} />)
  expect(await screen.findByRole('alert')).toBeTruthy()
  expect(screen.getByRole('link').getAttribute('href')).toContain('search=')
})

it('labels same-name candidates and links directly to them', async () => {
  vi.mocked(loadCatalogueWikipedia).mockResolvedValue({ status: 'candidate', options: [{ item: 'https://www.wikidata.org/entity/Q1', parentNames: ['Hominidae'], url: 'https://en.wikipedia.org/wiki/Pan_(genus)' }] })
  render(<WikipediaWindow name="Pan" catalogueId="COL1" onClose={vi.fn()} />)
  expect(await screen.findByText(/身份尚未确认/)).toBeTruthy()
  expect(screen.getByRole('link', { name: /打开候选/ }).getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Pan_(genus)')
  expect(loadWikipediaMapping).not.toHaveBeenCalled()
})
