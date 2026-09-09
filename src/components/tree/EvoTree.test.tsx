import { fireEvent, render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { EvoTree } from './EvoTree'

const { state } = vi.hoisted(() => ({ state: { treeMode: 'navigation', currentAge: 10, selectedNodeId: null as string | null, selectSubject: vi.fn(), setTreeMode: vi.fn() } }))
vi.mock('../../store', () => ({ useAppStore: (select: (value: typeof state) => unknown) => select(state) }))
vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'en', t: (value: string) => value }) }))
vi.mock('../../services/catalog', () => ({ evolutionEvents: [], taxonProfiles: [], getTaxonProfile: () => null }))
vi.mock('../../services/catalogProfiles', () => ({ taxonProfiles: [], getTaxonProfile: () => null }))
vi.mock('../../data-client/backendClient', () => ({ isBackendConfigured: () => false }))
vi.mock('./BackendCatalogueTree', () => ({ BackendCatalogueTree: () => null }))

describe('tree scene lifetime', () => {
  beforeEach(() => {
    state.treeMode = 'navigation'; state.currentAge = 10; state.selectedNodeId = null
    vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} })
  })
  it('keeps SVG nodes, camera and focus when time and selection change', () => {
    const { container, rerender } = render(<EvoTree />)
    const svg = container.querySelector('svg[role="tree"]')!
    const first = svg.querySelector<SVGGElement>('[role="treeitem"]')!
    const scene = svg.firstElementChild!
    const transform = scene.getAttribute('transform')
    first.focus()
    state.currentAge = 300
    state.selectedNodeId = 'life'
    rerender(<EvoTree />)
    expect(svg.querySelector('[role="treeitem"]')).toBe(first)
    expect(svg.firstElementChild).toBe(scene)
    expect(scene.getAttribute('transform')).toBe(transform)
    expect(document.activeElement).toBe(first)
    expect(first).toHaveAttribute('aria-selected', 'true')
    expect(svg.querySelectorAll('[tabindex="0"]')).toHaveLength(1)
    fireEvent.keyDown(first, { key: 'ArrowDown' })
    expect(document.activeElement).not.toBe(first)
    expect(svg.querySelectorAll('[tabindex="0"]')).toHaveLength(1)
  })
  it('updates the time line without rebuilding fossil range rows', () => {
    state.treeMode = 'fossil-range'
    const { container, rerender } = render(<EvoTree />)
    const row = container.querySelector('.range-row')
    const line = container.querySelector('.tree-current-line')!
    const x = line.getAttribute('x1')
    state.currentAge = 25
    rerender(<EvoTree />)
    expect(container.querySelector('.range-row')).toBe(row)
    expect(line.getAttribute('x1')).not.toBe(x)
  })
})
