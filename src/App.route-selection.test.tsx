import type { ReactNode } from 'react'
import { afterEach, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import App from './App'
import { useAppStore } from './store'
import { SpeciesDetail } from './components/details/SpeciesDetail'

vi.mock('./i18n', () => ({ useI18n: () => ({ language: 'en', t: (value: string) => value, number: (value: number) => String(value) }) }))
vi.mock('./components/shell/AppShell', () => ({ AppShell: ({ children }: { children: ReactNode }) => children }))
vi.mock('./components/catalog/CatalogPages', () => ({
  TaxonPage: ({ id }: { id: string }) => <article aria-label="Reader"><h1>Reader {id}</h1></article>,
  EventPage: () => <article aria-label="Reader">Event reader</article>,
}))
vi.mock('./config/pagesPreview', () => ({ isNativeCore: false, isPagesPreview: false, isPreviewRouteLocked: () => false }))
vi.mock('./data-client/backendClient', () => ({ isBackendConfigured: () => false }))

function setRoute(hash: string) {
  act(() => {
    window.history.pushState(null, '', hash)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  })
}

afterEach(() => {
  cleanup()
  useAppStore.getState().selectNode(null)
  window.history.replaceState(null, '', '#/home')
})

it('route-backed reader selection follows its tree identity through close, reopen and history', async () => {
  act(() => useAppStore.getState().selectNode('mammalia'))
  window.history.replaceState(null, '', '#/taxa?id=dinosauria')
  const { rerender } = render(<><App /><section aria-label="Map bubble"><SpeciesDetail /></section></>)

  expect(await screen.findByRole('heading', { name: 'Reader dinosauria' })).toBeVisible()
  await waitFor(() => expect(screen.getByText('Species Detail')).toBeVisible())
  await waitFor(() => expect(useAppStore.getState().selectedNodeId).toBe('dinosauria'))
  expect(screen.queryByText('Mammals')).toBeNull()
  expect(screen.getByText('Dinosaurs', { selector: 'h2' })).toBeVisible()

  fireEvent.click(screen.getByRole('button', { name: 'Close reading and return to the map' }))
  await waitFor(() => expect(window.location.hash).toBe('#/home'))
  expect(useAppStore.getState().selectedNodeId).toBe('dinosauria')
  setRoute('#/taxa?id=dinosauria')
  rerender(<><App /><section aria-label="Map bubble"><SpeciesDetail /></section></>)
  expect(await screen.findByRole('heading', { name: 'Reader dinosauria' })).toBeVisible()
  await waitFor(() => expect(screen.getAllByText('Dinosaurs', { selector: 'h2' }).length).toBeGreaterThan(0))
  expect(useAppStore.getState().selectedNodeId).toBe('dinosauria')
  expect(within(screen.getByRole('region', { name: 'Map bubble' })).queryByText('Mammals')).toBeNull()

  setRoute('#/taxa?id=ankylosaurus')
  expect(await screen.findByRole('heading', { name: 'Reader ankylosaurus' })).toBeVisible()
  await waitFor(() => expect(useAppStore.getState().selectedNodeId).toBe('ankylosaurus'))
  setRoute('#/taxa?id=dinosauria')
  expect(await screen.findByRole('heading', { name: 'Reader dinosauria' })).toBeVisible()
  await waitFor(() => expect(useAppStore.getState().selectedNodeId).toBe('dinosauria'))

  act(() => window.history.back())
  await waitFor(() => expect(window.location.hash).toBe('#/taxa?id=ankylosaurus'))
  expect(await screen.findByRole('heading', { name: 'Reader ankylosaurus' })).toBeVisible()
  await waitFor(() => expect(useAppStore.getState().selectedNodeId).toBe('ankylosaurus'))
  act(() => window.history.forward())
  await waitFor(() => expect(window.location.hash).toBe('#/taxa?id=dinosauria'))
  expect(await screen.findByRole('heading', { name: 'Reader dinosauria' })).toBeVisible()
  await waitFor(() => expect(useAppStore.getState().selectedNodeId).toBe('dinosauria'))
})

it('keeps same-display-name identities separate, withholds unsupported range, and clears the bubble', async () => {
  act(() => useAppStore.getState().selectNode('ankylosaurus'))
  const { rerender } = render(<SpeciesDetail />)
  expect(screen.getByText('Ankylosaurus', { selector: 'h2' })).toBeVisible()
  expect(screen.getByText('68.0 – 66.0 Ma')).toBeVisible()

  act(() => useAppStore.getState().selectNode('ankylosaurus_magniventris'))
  rerender(<SpeciesDetail />)
  expect(screen.getByText('Ankylosaurus', { selector: 'h2' })).toBeVisible()
  expect(screen.getAllByText(/Ankylosaurus magniventris/).some(element => element.tagName === 'P' && element.textContent?.startsWith('Ankylosaurus magniventris'))).toBe(true)
  expect(screen.getByText('Range unavailable')).toBeVisible()
  expect(screen.queryByText('0.0 – 0.0 Ma')).toBeNull()

  act(() => useAppStore.getState().selectNode(null))
  rerender(<SpeciesDetail />)
  expect(screen.getByText('Species Detail')).toBeVisible()
  expect(screen.queryByText('Ankylosaurus magniventris')).toBeNull()
})

it('preserves the map selection for empty, navigation-only and reader-only routes', async () => {
  act(() => useAppStore.getState().selectNode('mammalia'))
  window.history.replaceState(null, '', '#/taxa')
  const { rerender } = render(<><App /><section aria-label="Map bubble"><SpeciesDetail /></section></>)
  expect(useAppStore.getState().selectedNodeId).toBe('mammalia')
  setRoute('#/taxa?id=life')
  rerender(<><App /><section aria-label="Map bubble"><SpeciesDetail /></section></>)
  await waitFor(() => expect(screen.getByRole('heading', { name: 'Reader life' })).toBeVisible())
  expect(useAppStore.getState().selectedNodeId).toBe('mammalia')
  setRoute('#/taxa?id=ankylosaurus_magniventris')
  await waitFor(() => expect(screen.getByRole('heading', { name: 'Reader ankylosaurus_magniventris' })).toBeVisible())
  await waitFor(() => expect(useAppStore.getState().selectedNodeId).toBe('ankylosaurus_magniventris'))
})

it('renders a navigation-only node without fabricating a reader link or crashing', () => {
  act(() => useAppStore.getState().selectNode('life'))
  render(<SpeciesDetail />)
  expect(screen.getByText('Life on Earth', { selector: 'h2' })).toBeVisible()
  expect(screen.queryByText('Continue reading')).toBeNull()
})
