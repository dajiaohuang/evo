import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { useAppStore } from './store'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { AppShell } from './components/shell/AppShell'
import { HomePage } from './components/home/HomePage'
import { buildRouteHash, parseRouteHash, type AppRoute } from './utils/routing'
import { useI18n } from './i18n'

const ExplorerWorkspace = lazy(() => import('./components/explorer/ExplorerWorkspace')
  .then((module) => ({ default: module.ExplorerWorkspace })))
const DataPage = lazy(() => import('./components/pages/InfoPages')
  .then((module) => ({ default: module.DataPage })))
const MethodsPage = lazy(() => import('./components/pages/InfoPages')
  .then((module) => ({ default: module.MethodsPage })))
const TaxonPage = lazy(() => import('./components/catalog/CatalogPages')
  .then((module) => ({ default: module.TaxonPage })))
const EventPage = lazy(() => import('./components/catalog/CatalogPages')
  .then((module) => ({ default: module.EventPage })))
const StoriesPage = lazy(() => import('./components/catalog/CatalogPages')
  .then((module) => ({ default: module.StoriesPage })))
const ComparePage = lazy(() => import('./components/workbench/WorkbenchPages')
  .then((module) => ({ default: module.ComparePage })))
const LabPage = lazy(() => import('./components/workbench/WorkbenchPages')
  .then((module) => ({ default: module.LabPage })))

function RouteLoading() {
  const { t } = useI18n()
  return (
    <div style={{ minHeight: 'calc(100vh - var(--topbar-height))', display: 'grid', placeItems: 'center' }}>
      <span style={{ color: 'var(--color-text-faint)', font: '10px var(--font-mono)' }}>{t('Loading atlas module…').toUpperCase()}</span>
    </div>
  )
}

export default function App() {
  const { language, t } = useI18n()
  const [routeState, setRouteState] = useState(() => parseRouteHash(window.location.hash))
  const route = routeState.route
  const loadIntervals = useAppStore((s) => s.loadIntervals)

  useEffect(() => {
    loadIntervals()
  }, [loadIntervals])

  useEffect(() => {
    const handleHashChange = () => setRouteState(parseRouteHash(window.location.hash))
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const labels: Record<AppRoute, string> = {
      home: 'Evo Atlas — Deep-Time Evidence Explorer',
      explore: 'Explore — Evo Atlas',
      taxa: 'Taxon — Evo Atlas',
      events: 'Event — Evo Atlas',
      stories: 'Stories — Evo Atlas',
      compare: 'Compare — Evo Atlas',
      lab: 'Data Lab — Evo Atlas',
      data: 'Data — Evo Atlas',
      methods: 'Methods — Evo Atlas',
    }
    document.title = t(labels[route])
  }, [language, route, t])

  const navigate = useCallback((nextRoute: AppRoute, params: Record<string, string> = {}) => {
    const nextHash = buildRouteHash(nextRoute, params)
    if (nextHash === window.location.hash) return
    window.location.hash = nextHash
  }, [])

  let page
  if (route === 'explore') page = <ExplorerWorkspace key={routeState.params.toString()} />
  else if (route === 'taxa') page = <TaxonPage id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'events') page = <EventPage id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'stories') page = <StoriesPage id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'compare') page = <ComparePage params={routeState.params} onNavigate={navigate} />
  else if (route === 'lab') page = <LabPage params={routeState.params} onNavigate={navigate} />
  else if (route === 'data') page = <DataPage onNavigate={navigate} />
  else if (route === 'methods') page = <MethodsPage onNavigate={navigate} />
  else page = <HomePage onNavigate={navigate} />

  return (
    <ErrorBoundary>
      <AppShell route={route} onNavigate={navigate} immersive={route === 'explore'}>
        <Suspense fallback={<RouteLoading />}>{page}</Suspense>
      </AppShell>
    </ErrorBoundary>
  )
}
