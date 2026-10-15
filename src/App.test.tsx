import type { ReactNode } from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import App from './App'
import type { AppRoute } from './utils/routing'

vi.mock('./i18n', () => ({ useI18n: () => ({ language: 'en', t: (text: string) => text }) }))
vi.mock('./store', () => {
  const useAppStore = Object.assign(
    (select: (state: { loadIntervals: () => void }) => unknown) => select({ loadIntervals: () => {} }),
    { getState: () => ({ selectionIntentVersion: 0, selectNode: () => {} }) },
  )
  return { useAppStore }
})
vi.mock('./config/pagesPreview', () => ({ isNativeCore: false, isPagesPreview: false, isPreviewRouteLocked: () => false }))
vi.mock('./data-client/backendClient', () => ({ isBackendConfigured: () => false }))
vi.mock('./services/catalog', () => ({ getTaxonProfile: () => null, getEvolutionEvent: () => null, getEvolutionStory: () => null }))
vi.mock('./components/shell/AppShell', () => ({ AppShell: ({ children }: { children: ReactNode }) => children }))
vi.mock('./components/explorer/ExplorerWorkspace', () => ({ ExplorerWorkspace: () => <div>Persistent map</div> }))
vi.mock('./components/catalog/CatalogPages', () => {
  const Article = ({ id, onNavigate }: { id: string; onNavigate: (route: AppRoute, params: Record<string, string>) => void }) => <div>
    <h1>Article {id}</h1>
    <button onClick={() => onNavigate('compare', { left: id })}>Compare</button>
  </div>
  return { TaxonPage: Article, EventPage: Article }
})
vi.mock('./components/workbench/WorkbenchPages', () => ({ ComparePage: ({ onNavigate }: { onNavigate: (route: AppRoute, params: Record<string, string>) => void }) => <div>
  <h1>Comparison</h1>
  <button onClick={() => onNavigate('compare', { left: 'changed' })}>Change comparison</button>
</div> }))

afterEach(() => { cleanup(); window.history.replaceState(null, '', '#/home') })

it.each(['taxa', 'events'])('returns from comparison to the originating %s route', async route => {
  const origin = `#/${route}?id=metamynodon&context=retained`
  window.history.replaceState(null, '', origin)
  render(<App />)
  fireEvent.click(await screen.findByRole('button', { name: 'Compare' }))
  await screen.findByRole('heading', { name: 'Comparison' })
  fireEvent.click(screen.getByRole('button', { name: 'Change comparison' }))
  await waitFor(() => expect(window.location.hash).toBe('#/compare?left=changed'))
  fireEvent.click(screen.getByRole('button', { name: 'Close comparison and return to the article' }))
  await waitFor(() => expect(window.location.hash).toBe(origin))
  expect(await screen.findByRole('heading', { name: 'Article metamynodon' })).toBeVisible()
  expect(screen.getByText('Persistent map')).toBeVisible()
})

it('closes a direct comparison link to the map', async () => {
  window.history.replaceState(null, '', '#/compare?left=metamynodon')
  render(<App />)
  await screen.findByRole('heading', { name: 'Comparison' })
  fireEvent.click(screen.getByRole('button', { name: 'Close reading and return to the map' }))
  await waitFor(() => expect(window.location.hash).toBe('#/home'))
  expect(screen.getByText('Persistent map')).toBeVisible()
})
