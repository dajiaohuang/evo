import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { WikipediaWindow } from './WikipediaWindow'
import { wikipediaSummary } from '../../services/wikipedia'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'zh' }) }))
vi.mock('../../services/wikipedia', () => ({ wikipediaSummary: vi.fn(), loadWikipediaMapping: () => Promise.resolve({ entries: {} }) }))
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) { this.setAttribute('open', '') })
  HTMLDialogElement.prototype.close = vi.fn()
})
afterEach(() => { cleanup(); vi.unstubAllGlobals() })

it('resolves redirects to the canonical article and renders summary as text', async () => {
  vi.mocked(wikipediaSummary).mockResolvedValue({ status: 'ready', title: 'Human', extract: 'Human summary', url: 'https://en.wikipedia.org/wiki/Human', locale: 'en', scope: undefined })
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
