import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ItisSourceBrowser } from './ItisSourceBrowser'
import { loadItisBrowseCollections, loadItisBrowseFile } from '../../data-client/itisBrowse'
import type { CatalogueSpeciesCoverageEntry } from '../../data-client/types'
import type { ItisBrowseCollection } from '../../data-client/itisBrowse'

vi.mock('../../data-client/itisBrowse', () => ({ loadItisBrowseCollections: vi.fn(), loadItisBrowseFile: vi.fn() }))
const loadMetadata = vi.mocked(loadItisBrowseCollections)
const loadFile = vi.mocked(loadItisBrowseFile)
const entries = [
  { id: 'bacteria', title: 'Bacteria', titleZh: '细菌', kind: 'nomenclatural-resource-pack' },
  { id: 'fungi', title: 'Fungi', titleZh: '真菌', kind: 'nomenclatural-resource-pack' },
] as CatalogueSpeciesCoverageEntry[]
const collection: ItisBrowseCollection = {
  id: 'itis-bacteria-tsn-crosswalk', label: 'bacteria', exportDate: '2026-08-26', boundary: { en: 'Independent of LPSN.', zh: '独立于 LPSN。' },
  completeRows: true, colCount: 4827, sourceOnlyCount: 9348,
  colFiles: [{ path: 'col.gz', url: 'col.gz', records: 4827 } as never],
  sourceOnlyFiles: [{ path: 'source.gz', url: 'source.gz', records: 52 } as never, { path: 'next.gz', url: 'next.gz', records: 1 } as never],
}
function open(container: HTMLElement) {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}
async function chooseCollection(container: HTMLElement) {
  open(container)
  fireEvent.change(screen.getByLabelText('Resource pack'), { target: { value: 'bacteria' } })
  fireEvent.change(await screen.findByLabelText('ITIS collection'), { target: { value: collection.id } })
}

describe('ITIS source browser interaction', () => {
  afterEach(() => vi.clearAllMocks())

  it('stays collapsed without loading metadata or rows', () => {
    const { container } = render(<ItisSourceBrowser entries={entries} zh={false} />)
    expect(container.querySelector('details')?.open).toBe(false)
    expect(loadMetadata).not.toHaveBeenCalled()
    expect(loadFile).not.toHaveBeenCalled()
  })

  it('shows Web metadata and never loads source-only rows', async () => {
    loadMetadata.mockResolvedValue([{ ...collection, completeRows: false, colFiles: [], sourceOnlyFiles: [] }])
    const { container } = render(<ItisSourceBrowser entries={entries} zh={false} />)
    await chooseCollection(container)
    expect(screen.getByText(/Web provides summaries only/)).toBeVisible()
    expect(screen.queryByLabelText(/Choose a file/)).toBeNull()
    expect(loadFile).not.toHaveBeenCalled()
  })

  it('loads only the selected source file, paginates and resets on partition change', async () => {
    loadMetadata.mockResolvedValue([collection])
    loadFile.mockResolvedValue(Array.from({ length: 52 }, (_, index) => ({ tsn: String(64 + index), scientificName: `Source name ${index}`, usage: 'valid' })))
    const { container } = render(<ItisSourceBrowser entries={entries} zh={false} />)
    await chooseCollection(container)
    expect(loadFile).not.toHaveBeenCalled()
    fireEvent.change(screen.getByLabelText(/Choose a file/), { target: { value: '0' } })
    await screen.findByRole('link', { name: 'Source name 0 (64)' })
    expect(screen.getAllByRole('link')).toHaveLength(50)
    expect(loadFile).toHaveBeenCalledExactlyOnceWith(collection, 'source-only', 0)
    fireEvent.click(screen.getByRole('button', { name: 'Next page' }))
    expect(screen.getAllByRole('link')).toHaveLength(2)
    fireEvent.change(screen.getByLabelText(/Find a name/), { target: { value: 'Source name 0' } })
    expect(screen.getAllByRole('link')).toHaveLength(1)
    fireEvent.change(screen.getByLabelText('Record partition'), { target: { value: 'col' } })
    expect(screen.queryAllByRole('link')).toHaveLength(0)
    expect(screen.getByLabelText(/Choose a file/)).toHaveValue('')
    expect(loadFile).toHaveBeenCalledTimes(1)
  })

  it('does not display a stale file after changing the selected package', async () => {
    loadMetadata.mockResolvedValue([collection])
    let resolve!: (value: []) => void
    loadFile.mockReturnValue(new Promise((done) => { resolve = done }))
    const { container } = render(<ItisSourceBrowser entries={entries} zh={false} />)
    await chooseCollection(container)
    fireEvent.change(screen.getByLabelText(/Choose a file/), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText('Resource pack'), { target: { value: 'fungi' } })
    await act(async () => resolve([]))
    expect(screen.queryByLabelText(/Find a name/)).toBeNull()
  })

  it('retries an unavailable file without switching partitions', async () => {
    loadMetadata.mockResolvedValue([collection])
    loadFile.mockRejectedValueOnce(new Error('offline miss')).mockResolvedValueOnce([{ tsn: '64', scientificName: 'Nitrobacter winogradskyi', usage: 'valid' }])
    const { container } = render(<ItisSourceBrowser entries={entries} zh={false} />)
    await chooseCollection(container)
    fireEvent.change(screen.getByLabelText(/Choose a file/), { target: { value: '0' } })
    await screen.findByRole('alert')
    fireEvent.click(screen.getByRole('button', { name: 'Retry' }))
    await screen.findByRole('link', { name: 'Nitrobacter winogradskyi (64)' })
    expect(loadFile).toHaveBeenCalledTimes(2)
  })
})
