import { fireEvent, render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { EvoTree } from './EvoTree'
type TreeElement = SVGGElement & { __data__: { data: { id: string }; x: number; y: number } }

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
    expect(transform).not.toBe('translate(0,0) scale(1)')
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
  it('reveals a collapsed ancestor and centres an explicit locate request', () => {
    state.selectedNodeId = 'life'
    const { container, rerender, getByRole } = render(<EvoTree />)
    fireEvent.click(getByRole('button', { name: 'Collapse selected clade' }))
    expect(container.querySelectorAll('[role="treeitem"]')).toHaveLength(1)
    const request = { nodeId: 'tetrapoda', sequence: 1 }
    rerender(<EvoTree focusRequest={request} />)
    const target = [...container.querySelectorAll<TreeElement>('[role="treeitem"]')].find(element => element.__data__?.data.id === 'tetrapoda')!
    expect(target).toBeDefined()
    const point = target.__data__!
    const transform = container.querySelector('svg > g')!.getAttribute('transform')!
    const [x, y, scale] = transform.match(/-?\d+(?:\.\d+)?/g)!.map(Number)
    expect(x + point.x! * scale).toBeCloseTo(350)
    expect(y + point.y! * scale).toBeCloseTo(280)
    const scene = container.querySelector('svg > g')!
    state.currentAge = 80
    rerender(<EvoTree focusRequest={request} />)
    expect(container.querySelector('svg > g')).toBe(scene)
    expect(scene.getAttribute('transform')).toBe(transform)
  })
  it('uses a real parent subtree and independent selection for a local organism', () => {
    const select = vi.fn()
    const { container } = render(<EvoTree scopeNodeId="tiktaalik" selectionId="tiktaalik" onSelectNode={select} />)
    const items = [...container.querySelectorAll<TreeElement>('[role="treeitem"]')]
    expect(items.length).toBeGreaterThan(1)
    expect(items.some(element => element.__data__?.data.id === 'life')).toBe(false)
    const target = items.find(element => element.__data__?.data.id === 'tiktaalik')!
    expect(target.style.opacity).toBe('1')
    fireEvent.click(target)
    expect(select).toHaveBeenCalledWith('tiktaalik')
  })
  it('moves the first-appearance axis with its branches when zooming', () => {
    state.treeMode = 'first-appearance'
    const { container, getByRole, rerender } = render(<EvoTree />)
    const scene = container.querySelector('svg > g')!
    const axis = container.querySelector('.tree-time-axis')!
    const line = container.querySelector('.tree-current-line')!
    expect(scene.contains(axis)).toBe(true)
    expect(scene.contains(line)).toBe(true)
    fireEvent.click(getByRole('button', { name: 'Zoom in on tree' }))
    expect(scene.getAttribute('transform')).toContain('scale(1.4)')
    state.currentAge = 50
    rerender(<EvoTree />)
    expect(container.querySelector('.tree-time-axis')).toBe(axis)
    expect(scene.getAttribute('transform')).toContain('scale(1.4)')
  })
})
