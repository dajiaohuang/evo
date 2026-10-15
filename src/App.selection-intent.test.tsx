import type { ReactNode } from 'react'
import { afterEach, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import App from './App'
import { useAppStore } from './store'
import { SpeciesDetail } from './components/details/SpeciesDetail'

const { catalogGate, releaseCatalog, catalogReady, markCatalogReady } = vi.hoisted(() => {
  let release!: () => void
  let ready!: () => void
  const catalogGate = new Promise<void>((resolve) => { release = resolve })
  const catalogReady = new Promise<void>((resolve) => { ready = resolve })
  return {
    catalogGate,
    releaseCatalog: () => release(),
    catalogReady,
    markCatalogReady: () => ready(),
  }
})

vi.mock('./services/catalog', async (importOriginal) => {
  await catalogGate
  const actual = await importOriginal<typeof import('./services/catalog')>()
  markCatalogReady()
  return actual
})
vi.mock('./i18n', () => ({ useI18n: () => ({ language: 'en', t: (value: string) => value, number: (value: number) => String(value) }) }))
vi.mock('./components/shell/AppShell', () => ({ AppShell: ({ children }: { children: ReactNode }) => children }))
vi.mock('./components/catalog/CatalogPages', () => ({
  TaxonPage: ({ id }: { id: string }) => <article aria-label="Reader"><h1>Reader {id}</h1></article>,
  EventPage: () => <article aria-label="Reader">Event reader</article>,
}))
vi.mock('./config/pagesPreview', () => ({ isNativeCore: false, isPagesPreview: false, isPreviewRouteLocked: () => false }))
vi.mock('./data-client/backendClient', () => ({ isBackendConfigured: () => false }))

function mountReader(id: string) {
  window.history.replaceState(null, '', `#/taxa?id=${id}`)
  return render(<><App /><section aria-label="Map bubble"><SpeciesDetail /></section></>)
}

afterEach(() => {
  cleanup()
  useAppStore.getState().selectNode(null)
  window.history.replaceState(null, '', '#/home')
})

it('late profile fulfillment cannot override a newer clear or map-selection intent', async () => {
  act(() => useAppStore.getState().selectNode('mammalia'))
  mountReader('dinosauria')

  // The App's real dynamic catalog import is held pending while the user clears.
  act(() => useAppStore.getState().selectNode(null))
  expect(useAppStore.getState().selectedNodeId).toBeNull()
  releaseCatalog()

  await screen.findByRole('heading', { name: 'Reader dinosauria' })
  await catalogReady
  await act(async () => { await Promise.resolve(); await Promise.resolve() })
  expect(useAppStore.getState().selectedNodeId).toBeNull()
  expect(screen.getByText('Species Detail')).toBeVisible()

})
