import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { GlobalSearch } from './GlobalSearch'
import { searchCatalogue, searchStaticData } from '../../data-client/staticDataClient'
import { isBackendConfigured, loadBackendCapabilities, searchBackendNames } from '../../data-client/backendClient'
import type { RuntimeSearchEntry } from '../../data-client/types'

vi.mock('../../data-client/staticDataClient', () => ({ searchCatalogue: vi.fn(), searchStaticData: vi.fn() }))
vi.mock('../../data-client/backendClient', () => ({ isBackendConfigured: vi.fn(), loadBackendCapabilities: vi.fn(), searchBackendNames: vi.fn() }))
vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en', t: (value: string, params?: { count?: number }) => value.replace('{count}', String(params?.count)) }) }))
vi.mock('../../services/publication', () => ({ getPackagePublication: () => null, scientificMaturityLabel: (value: string) => value }))
vi.mock('../../config/pagesPreview', () => ({ isPagesPreview: false, isPreviewRouteLocked: () => false }))

const horse: RuntimeSearchEntry = { id: 'horse', kind: 'profile', title: 'Horse evidence', route: '#/explore?taxon=equus', terms: ['horse'] }
const bird: RuntimeSearchEntry = { id: 'bird', kind: 'story', title: 'Bird story', route: '#/stories?id=birds', terms: ['bird'] }
const advance = () => act(async () => { await vi.advanceTimersByTimeAsync(160) })
async function openSearch() {
  const trigger = screen.getByRole('button', { name: 'Search' })
  trigger.focus()
  fireEvent.click(trigger)
  await advance()
  return screen.getByRole('textbox', { name: 'Search taxa, intervals, events, places…' })
}

describe('global discovery interaction', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.mocked(isBackendConfigured).mockReturnValue(false)
    vi.mocked(searchStaticData).mockResolvedValue([horse, bird])
    vi.mocked(searchCatalogue).mockResolvedValue({ manifest: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', classificationFields: [] }, records: [], totalMatches: 0, resolutionTargets: {} } as unknown as Awaited<ReturnType<typeof searchCatalogue>>)
  })
  afterEach(() => { cleanup(); vi.useRealTimers(); vi.resetAllMocks() })

  it('preserves editable typing and IME composition, then restores the actual invoking focus', async () => {
    render(<><div contentEditable suppressContentEditableWarning tabIndex={0} data-testid="editor">Notes</div><GlobalSearch onNavigate={vi.fn()} /></>)
    const editor = screen.getByTestId('editor')
    editor.focus()
    fireEvent.keyDown(editor, { key: '/' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.keyDown(editor, { key: 'k', ctrlKey: true })
    await advance()
    const input = screen.getByRole('textbox', { name: /Search taxa/ })
    expect(input).toHaveFocus()
    fireEvent.compositionStart(input)
    fireEvent.change(input, { target: { value: '马' } })
    fireEvent.keyDown(input, { key: 'Escape', isComposing: true })
    await advance()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(searchStaticData).not.toHaveBeenCalled()
    fireEvent.compositionEnd(input)
    await advance()
    expect(searchStaticData).toHaveBeenCalledWith('马', 16, expect.any(AbortSignal))
    expect(searchCatalogue).not.toHaveBeenCalled()
    fireEvent.keyDown(input, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(editor).toHaveFocus()
  })

  it('navigates results, traps Tab, and opens the selected route with the keyboard', async () => {
    const navigate = vi.fn()
    render(<GlobalSearch onNavigate={navigate} />)
    const input = await openSearch()
    fireEvent.change(input, { target: { value: 'horse' } })
    expect(screen.getByRole('status')).toHaveTextContent('Searching…')
    await advance()
    const first = screen.getByRole('button', { name: /Horse evidence/ })
    const last = screen.getByRole('button', { name: /Bird story/ })
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    expect(first).toHaveFocus()
    fireEvent.keyDown(first, { key: 'End' })
    expect(last).toHaveFocus()
    fireEvent.keyDown(last, { key: 'Tab' })
    expect(input).toHaveFocus()
    fireEvent.keyDown(input, { key: 'Tab', shiftKey: true })
    expect(last).toHaveFocus()
    fireEvent.keyDown(last, { key: 'Home' })
    fireEvent.keyDown(first, { key: 'ArrowUp' })
    expect(input).toHaveFocus()
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(navigate).toHaveBeenCalledWith('explore', { taxon: 'equus' })
    expect(screen.getByRole('button', { name: 'Search' })).toHaveFocus()
  })

  it('retries an unavailable source while successful content remains navigable', async () => {
    vi.mocked(searchCatalogue).mockRejectedValueOnce(new Error('offline'))
    render(<GlobalSearch onNavigate={vi.fn()} />)
    const input = await openSearch()
    fireEvent.change(input, { target: { value: 'horse' } })
    await advance()
    expect(screen.getByRole('button', { name: /Horse evidence/ })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Retry search' }))
    await advance()
    expect(searchCatalogue).toHaveBeenCalledTimes(2)
    expect(screen.queryByRole('button', { name: 'Retry search' })).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('2 results')
    expect(input).toHaveFocus()
  })

  it('aborts outdated requests and ignores a source that resolves after cancellation', async () => {
    let finishOld!: (entries: RuntimeSearchEntry[]) => void
    vi.mocked(searchStaticData).mockImplementationOnce(() => new Promise(resolve => { finishOld = resolve }))
    vi.mocked(searchStaticData).mockResolvedValueOnce([bird])
    render(<GlobalSearch onNavigate={vi.fn()} />)
    const input = await openSearch()
    fireEvent.change(input, { target: { value: 'horse' } })
    await advance()
    const oldSignal = vi.mocked(searchStaticData).mock.calls[0][2]!
    fireEvent.change(input, { target: { value: 'bird' } })
    await advance()
    expect(oldSignal.aborted).toBe(true)
    await act(async () => { finishOld([horse]) })
    expect(screen.queryByRole('button', { name: /Horse evidence/ })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Bird story/ })).toBeInTheDocument()
  })

  it('routes backend results to their accepted record and forwards cancellation', async () => {
    vi.mocked(isBackendConfigured).mockReturnValue(true)
    vi.mocked(loadBackendCapabilities).mockResolvedValue({ treeIndex: { releaseAlias: 'COL26.8' } } as Awaited<ReturnType<typeof loadBackendCapabilities>>)
    vi.mocked(searchBackendNames).mockResolvedValue({ records: [{ id: 'synonym', acceptedId: 'accepted', kind: 'catalogue-name', title: 'Source name', status: 'synonym', source: 'Pinned source' }], totalMatches: 1 } as Awaited<ReturnType<typeof searchBackendNames>>)
    const navigate = vi.fn()
    render(<GlobalSearch onNavigate={navigate} />)
    const input = await openSearch()
    fireEvent.change(input, { target: { value: 'source' } })
    await advance()
    const signal = vi.mocked(searchBackendNames).mock.calls[0][1]!.signal!
    fireEvent.click(screen.getByRole('button', { name: /Source name/ }))
    expect(navigate).toHaveBeenCalledWith('registry', { release: 'COL26.8', id: 'accepted' })
    expect(signal.aborted).toBe(true)
    expect(searchCatalogue).not.toHaveBeenCalled()
  })
})
