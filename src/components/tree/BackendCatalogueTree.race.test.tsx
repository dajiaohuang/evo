import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', ResizeObserverStub)

const backend = vi.hoisted(() => ({
  loadBackendCataloguePath: vi.fn(),
  loadBackendCatalogueRoots: vi.fn(),
  loadBackendCatalogueChildren: vi.fn(),
  searchBackendNames: vi.fn(),
}))
vi.mock('../../data-client/backendClient', () => ({
  ...backend,
  BACKEND_TREE_PAGE_SIZE: 100,
}))
vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en' }) }))
vi.mock('../../platform/frontendContract', () => ({ frontendContract: { tree: { overscanRows: 0, pageSize: 100, maxMaterializedRows: 100 } } }))

import { BackendCatalogueTree } from './BackendCatalogueTree'

function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (reason: unknown) => void
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej })
  return { promise, resolve, reject }
}
const path = (id: string) => [{ id, scientificName: `${id} path`, authorship: '', rank: 'species', childCount: 0 }]

async function startSearchAndWait() {
  await screen.findByRole('textbox', { name: /search names/i })
  fireEvent.change(screen.getByRole('textbox', { name: /search names/i }), { target: { value: 'abc' } })
  await waitFor(() => expect(backend.searchBackendNames).toHaveBeenCalled(), { timeout: 1500 })
  await waitFor(() => expect(screen.getByRole('button', { name: /A result/i })).toBeTruthy(), { timeout: 1500 })
}

beforeEach(() => {
  vi.useRealTimers()
  backend.loadBackendCatalogueRoots.mockResolvedValue({
    capabilities: { treeIndex: { nodeCount: 2, releaseAlias: 'test' } },
    roots: [],
  })
  backend.searchBackendNames.mockResolvedValue({ records: [
    { id: 'A', acceptedId: 'A', title: 'A result', kind: 'catalogue-name' },
    { id: 'B', acceptedId: 'B', title: 'B result', kind: 'catalogue-name' },
  ] })
  backend.loadBackendCataloguePath.mockReset()
  backend.loadBackendCatalogueChildren.mockResolvedValue({ records: [], total: 0 })
})
afterEach(() => { cleanup(); vi.clearAllMocks() })

describe('production BackendCatalogueTree search-path request race', () => {
  it('reproduces A-start → B-start → B-resolve → A-resolve without letting A replace B', async () => {
    const a = deferred<ReturnType<typeof path>>()
    const b = deferred<ReturnType<typeof path>>()
    backend.loadBackendCataloguePath.mockImplementation((id: string) => id === 'A' ? a.promise : b.promise)
    render(<BackendCatalogueTree />)
    await startSearchAndWait()
    fireEvent.click(screen.getByRole('button', { name: /A result/i }))
    fireEvent.click(screen.getByRole('button', { name: /B result/i }))
    b.resolve(path('B'))
    await waitFor(() => expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toContain('B path'))
    a.resolve(path('A'))
    await waitFor(() => expect(backend.loadBackendCataloguePath).toHaveBeenCalledTimes(2))
    expect(screen.getByRole('button', { name: /B result/i }).className).toContain('is-selected')
    expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toContain('B path')
    expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).not.toContain('A path')
  })

  it('keeps the latest retry for the same identity when an earlier attempt resolves late', async () => {
    const first = deferred<ReturnType<typeof path>>()
    const retry = deferred<ReturnType<typeof path>>()
    backend.loadBackendCataloguePath.mockReturnValueOnce(first.promise).mockReturnValueOnce(retry.promise)
    render(<BackendCatalogueTree />)
    await startSearchAndWait()
    fireEvent.click(screen.getByRole('button', { name: /A result/i }))
    fireEvent.click(screen.getByRole('button', { name: /A result/i }))
    retry.resolve([{ ...path('A')[0], scientificName: 'A retry path' }])
    await waitFor(() => expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toContain('A retry path'))
    first.resolve(path('A'))
    await waitFor(() => expect(backend.loadBackendCataloguePath).toHaveBeenCalledTimes(2))
    expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toContain('A retry path')
  })

  it('invalidates a pending path on unmount', async () => {
    const a = deferred<ReturnType<typeof path>>()
    backend.loadBackendCataloguePath.mockReturnValue(a.promise)
    const view = render(<BackendCatalogueTree />)
    await startSearchAndWait()
    fireEvent.click(screen.getByRole('button', { name: /A result/i }))
    view.unmount()
    a.resolve(path('A'))
    await Promise.resolve()
    expect(backend.loadBackendCataloguePath).toHaveBeenCalledTimes(1)
  })

  it('ignores a late path after the search selection is cleared by changing the query', async () => {
    const a = deferred<ReturnType<typeof path>>()
    backend.loadBackendCataloguePath.mockReturnValue(a.promise)
    render(<BackendCatalogueTree />)
    await startSearchAndWait()
    fireEvent.click(screen.getByRole('button', { name: /A result/i }))
    fireEvent.change(screen.getByRole('textbox', { name: /search names/i }), { target: { value: 'abcd' } })
    a.resolve(path('A'))
    await waitFor(() => expect(backend.loadBackendCataloguePath).toHaveBeenCalledTimes(1))
    expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toBe('')
    expect(screen.queryByRole('button', { name: /A result/i })).toBeNull()
  })

  it('does not clear B path when stale A rejects', async () => {
    const a = deferred<ReturnType<typeof path>>()
    const b = deferred<ReturnType<typeof path>>()
    backend.loadBackendCataloguePath.mockImplementation((id: string) => id === 'A' ? a.promise : b.promise)
    render(<BackendCatalogueTree />)
    await startSearchAndWait()
    fireEvent.click(screen.getByRole('button', { name: /A result/i }))
    fireEvent.click(screen.getByRole('button', { name: /B result/i }))
    b.resolve(path('B'))
    await waitFor(() => expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toContain('B path'))
    a.reject(new Error('stale A failure'))
    await waitFor(() => expect(backend.loadBackendCataloguePath).toHaveBeenCalledTimes(2))
    expect(screen.getByRole('button', { name: /B result/i }).className).toContain('is-selected')
    expect(screen.getByRole('navigation', { name: 'Taxon path' }).textContent).toContain('B path')
  })
})
