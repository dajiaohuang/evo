import { Activity } from 'react'
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { ComparePage, LabPage } from './WorkbenchPages'
import { runLabQuery, type LabQuery, type LabResult } from '../../services/lab'
import { saveWorkspaceNote } from '../../services/workspaceDb'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en', number: String, t: (text: string, values: Record<string, unknown> = {}) => text.replace(/\{(\w+)\}/g, (_, key) => String(values[key])) }) }))
vi.mock('../../store', () => ({ useAppStore: (select: (state: unknown) => unknown) => select({ occurrencesByTaxonQuery: {}, loadOccurrencesForEntity: vi.fn() }) }))
vi.mock('../../services/lab', async (original) => ({ ...await original<typeof import('../../services/lab')>(), runLabQuery: vi.fn() }))
vi.mock('../../services/workspaceDb', () => ({ listSavedLabQueries: vi.fn(async () => []), saveLabQuery: vi.fn(), listWorkspaceNotes: vi.fn(async () => []), saveWorkspaceNote: vi.fn(), deleteWorkspaceNote: vi.fn() }))
vi.mock('../../services/localSql', () => ({ runLocalSql: vi.fn(), exportLocalSqlParquet: vi.fn() }))

function result(query: LabQuery): LabResult {
  return { query, records: [], stats: { totalMatched: 7, returned: 0, uniqueTaxa: 2, countries: 1, paleoCoordinateCoverage: 0, modernCoordinateCoverage: 0 }, countsByPeriod: [], topTaxa: [], truncated: false, samplingMethod: 'bounded non-random PBDB API prefix sample' }
}
beforeEach(() => { vi.mocked(runLabQuery).mockImplementation(async (query) => result(query)) })
afterEach(() => { cleanup(); vi.clearAllMocks(); localStorage.clear() })
it('shows an async query failure and permits retry', async () => {
  render(compare())
  fireEvent.click(screen.getByRole('button', { name: 'geography' }))
  vi.mocked(runLabQuery).mockRejectedValueOnce(new Error('chunk unavailable'))
  run()
  expect(await screen.findByRole('alert')).toHaveTextContent('Query failed')
  run()
  await screen.findByText('CN')
  expect(screen.queryByRole('alert')).toBeNull()
})

function compare() { return <ComparePage params={new URLSearchParams()} onNavigate={vi.fn()} /> }
function run() { fireEvent.click(screen.getByRole('button', { name: 'Run bounded comparison' })) }

it('keeps executed time and region labels after draft edits', async () => {
  render(compare())
  fireEvent.click(screen.getByRole('button', { name: 'time' }))
  run()
  await screen.findByText('40–30 Ma')
  fireEvent.change(screen.getAllByLabelText('Older')[0], { target: { value: '50' } })
  expect(screen.getByText('40–30 Ma')).toBeInTheDocument()
  expect(screen.queryByText('50–30 Ma')).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: 'geography' }))
  run()
  await screen.findByText('CN')
  fireEvent.change(screen.getByLabelText('Region A · ISO country'), { target: { value: 'AU' } })
  expect(screen.getByText('CN')).toBeInTheDocument()
})

it.each(['mode', 'hide', 'unmount'])('ignores completion after %s and allows a fresh request', async (transition) => {
  const completions: (() => void)[] = []
  vi.mocked(runLabQuery).mockImplementation((query) => new Promise((resolve) => { completions.push(() => resolve(result(query))) }))
  const view = render(<Activity mode="visible">{compare()}</Activity>)
  fireEvent.click(screen.getByRole('button', { name: 'time' }))
  run()
  if (transition === 'mode') fireEvent.click(screen.getByRole('button', { name: 'geography' }))
  else if (transition === 'hide') view.rerender(<Activity mode="hidden">{compare()}</Activity>)
  else view.unmount()
  await act(async () => { completions.forEach((complete) => complete()) })
  if (transition === 'hide') {
    view.rerender(<Activity mode="visible">{compare()}</Activity>)
  }
  if (transition === 'unmount') render(compare())
  expect(screen.queryByText('40–30 Ma')).toBeNull()
  if (transition !== 'hide') fireEvent.click(screen.getByRole('button', { name: 'geography' }))
  vi.mocked(runLabQuery).mockImplementation(async (query) => result(query))
  run()
  await screen.findByText(transition === 'hide' ? '40–30 Ma' : 'CN')
})

it.each([[5000, 0, 'Older bound must be between 0 and 4567 Ma.'], [40, -1, 'Younger bound must be between 0 and 4567 Ma.'], [20, 30, 'Older bound must be greater than or equal to younger bound.']])('shows numeric error for %s/%s and supports retry', async (older, younger, message) => {
  render(compare())
  fireEvent.click(screen.getByRole('button', { name: 'time' }))
  const olderInput = screen.getAllByLabelText('Older')[0]
  expect(olderInput).toHaveAttribute('max', '4567')
  fireEvent.change(olderInput, { target: { value: older } })
  fireEvent.change(screen.getAllByLabelText('Younger')[0], { target: { value: younger } })
  run()
  expect(screen.getByRole('alert')).toHaveTextContent(message)
  expect(runLabQuery).not.toHaveBeenCalled()
  fireEvent.change(olderInput, { target: { value: 40 } })
  fireEvent.change(screen.getAllByLabelText('Younger')[0], { target: { value: 30 } })
  run()
  await screen.findByText('40–30 Ma')
  expect(screen.queryByRole('alert')).toBeNull()
})

it('saves interpretation against displayed results after editing the lab draft', async () => {
  render(<LabPage params={new URLSearchParams('taxon=Hipparion')} onNavigate={vi.fn()} />)
  fireEvent.click(screen.getByRole('button', { name: 'Run query →' }))
  await waitFor(() => expect(screen.getByText('Result workspace').parentElement).toHaveTextContent('7 matched'))
  fireEvent.change(screen.getByLabelText('Name text contains'), { target: { value: 'Teleoceras' } })
  fireEvent.click(screen.getByText('Advanced tools: SQL and research notes'))
  fireEvent.click(screen.getByText('Local collections & notes'))
  fireEvent.change(screen.getByPlaceholderText('Note title'), { target: { value: 'Interpretation' } })
  fireEvent.change(screen.getByPlaceholderText('Interpretation, caveat or next step'), { target: { value: 'Displayed evidence' } })
  fireEvent.click(screen.getByRole('button', { name: 'Save query note' }))
  await waitFor(() => expect(saveWorkspaceNote).toHaveBeenCalledWith('Interpretation', 'Displayed evidence', expect.objectContaining({ taxon: 'Hipparion' }), false))
})
