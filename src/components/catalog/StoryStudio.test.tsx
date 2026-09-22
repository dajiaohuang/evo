import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { StoryBuilder } from './StoryStudio'

vi.mock('../../i18n', () => ({ useI18n: () => ({ number: String, t: (value: string) => value }) }))
vi.mock('../../services/evidence', () => ({ evidenceClaims: [] }))
vi.mock('../../services/catalog', () => ({ getReferences: () => [], getTaxonProfile: () => null }))
afterEach(() => { cleanup(); vi.restoreAllMocks(); localStorage.clear() })

it('recovers from a malformed shared draft without overwriting the saved copy', () => {
  localStorage.setItem('evo-local-story-draft-v1', 'preserve this original')
  render(<StoryBuilder encodedDraft={btoa(JSON.stringify({ schemaVersion: 1, kind: 'evo-local-story-draft', title: '', titleZh: '', dek: '', steps: [null] }))} onNavigate={vi.fn()} />)
  expect(screen.getByRole('status')).toHaveTextContent('could not be opened')
  expect(screen.getByLabelText('English title')).toHaveValue('Untitled local story')
  expect(localStorage.getItem('evo-local-story-draft-v1')).toBe('preserve this original')
})

it('retains edits and reports storage and clipboard failures', async () => {
  render(<StoryBuilder onNavigate={vi.fn()} />)
  fireEvent.change(screen.getByLabelText('English title'), { target: { value: 'Keep my edits' } })
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota') })
  fireEvent.click(screen.getByRole('button', { name: 'Save locally' }))
  expect(screen.getByRole('status')).toHaveTextContent('Could not save')
  expect(screen.getByLabelText('English title')).toHaveValue('Keep my edits')
  fireEvent.click(screen.getByRole('button', { name: 'Copy teacher share link' }))
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Could not copy'))
})

it('reorders with buttons and allows adding after deleting a middle step', () => {
  render(<StoryBuilder onNavigate={vi.fn()} />)
  const add = screen.getByRole('button', { name: 'Add Explorer state' })
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(screen.getAllByRole('button', { name: 'Remove' })[1])
  fireEvent.click(add)
  fireEvent.change(screen.getAllByLabelText('Step title')[2], { target: { value: 'Move me' } })
  fireEvent.click(screen.getByRole('button', { name: 'Move step up 3' }))
  expect(screen.getAllByLabelText('Step title')[1]).toHaveValue('Move me')
  expect(screen.getAllByLabelText('Step title')[2]).toHaveValue('Evidence state 3')
})
