import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { useAppStore } from '../../store'
import { ExplorerWorkspace } from './ExplorerWorkspace'
import type { OpenFullTree } from '../tree/LocalTreePanel'

type TreeElement = SVGGElement & { __data__: { data: { id: string }; x: number; y: number } }

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en', t: (value: string) => value, number: String }) }))
vi.mock('../../services/catalogProfiles', () => ({ taxonProfiles: [], getTaxonProfile: () => null }))
vi.mock('../../services/publication', () => ({ getEntityPublication: () => null }))
vi.mock('../../data-client/staticDataClient', () => ({ loadPackageForEntity: vi.fn().mockResolvedValue(undefined) }))
vi.mock('../../data-client/backendClient', () => ({ isBackendConfigured: () => false }))
vi.mock('../tree/BackendCatalogueTree', () => ({ BackendCatalogueTree: () => null }))
vi.mock('../map/PaleoMap', () => ({ PaleoMap: () => <div>Map canvas</div> }))
vi.mock('../timeline/GeoTimeline', () => ({ GeoTimeline: () => null }))
// Keep the production local-tree producer and workspace consumer; replace only article data rendering.
vi.mock('../details/SpeciesDetail', async () => {
  const { LocalTreePanel } = await import('../tree/LocalTreePanel')
  const { useAppStore } = await import('../../store')
  return { SpeciesDetail: ({ onOpenFullTree }: { onOpenFullTree: OpenFullTree }) => {
    const id = useAppStore(state => state.selectedNodeId)!
    return <article><h2>{id} article</h2><LocalTreePanel nodeId={id} onOpenFullTree={onOpenFullTree} /></article>
  } }
})

beforeEach(() => {
  window.history.replaceState(null, '', '#/home')
  useAppStore.setState(useAppStore.getInitialState(), true)
  useAppStore.setState({
    selectedNodeId: 'tetrapoda', highlightedTaxonId: 'txn:123',
    highlightedOccurrenceIds: ['occ:568160'], currentPeriod: null,
    loadOccurrencesForInterval: vi.fn().mockResolvedValue(undefined),
    loadOccurrencesForEntity: vi.fn().mockResolvedValue(undefined),
  })
  vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} })
})

it('locates the clicked local branch without replacing the article or its reading position', async () => {
  const selectSubject = vi.spyOn(useAppStore.getState(), 'selectSubject')
  const { container } = render(<ExplorerWorkspace params={new URLSearchParams()} />)
  await screen.findByRole('heading', { name: 'tetrapoda article' })
  const scroll = container.querySelector<HTMLDivElement>('.inspector-scroll')!
  scroll.scrollTop = 420
  const localPanel = container.querySelector<HTMLDetailsElement>('.local-tree-panel')!
  localPanel.open = true
  fireEvent(localPanel, new Event('toggle'))
  const branch = await waitFor(() => {
    const target = [...localPanel.querySelectorAll<TreeElement>('[role= treeitem]')]
      .find(element => element.__data__.data.id === 'amniota')
    expect(target).toBeDefined()
    return target!
  })
  fireEvent.click(branch)
  expect(branch).toHaveAttribute('aria-selected', 'true')
  fireEvent.click(screen.getByRole('button', { name: 'Locate in the full tree ↗' }))
  const target = await waitFor(() => {
    const found = [...container.querySelectorAll<TreeElement>('.stage-canvas [role=treeitem]')]
      .find(element => element.__data__.data.id === 'amniota')
    expect(found).toBeDefined()
    return found!
  })
  const transform = target.closest('svg')!.querySelector('g')!.getAttribute('transform')!
  const [x, y, scale] = transform.match(/-?\d+(?:\.\d+)?/g)!.map(Number)
  expect(x + target.__data__.x * scale).toBeCloseTo(350)
  expect(y + target.__data__.y * scale).toBeCloseTo(280)
  expect(selectSubject).not.toHaveBeenCalled()
  expect(useAppStore.getState()).toMatchObject({ selectedNodeId: 'tetrapoda', highlightedTaxonId: 'txn:123', highlightedOccurrenceIds: ['occ:568160'], treeMode: 'navigation' })
  fireEvent.click(screen.getByRole('button', { name: 'Return to the paleomap' }))
  expect(screen.getByRole('heading', { name: 'tetrapoda article' })).toBeInTheDocument()
  expect(container.querySelector('.inspector-scroll')).toBe(scroll)
  expect(scroll.scrollTop).toBe(420)
  expect(window.location.hash).toContain('taxon=tetrapoda')
})
