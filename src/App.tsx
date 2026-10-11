import { Activity, lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { useAppStore } from './store'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { AppShell } from './components/shell/AppShell'
import { buildRouteHash, parseRouteHash, type AppRoute } from './utils/routing'
import { staticPathSegment } from './utils/staticPath.mjs'
import { useI18n } from './i18n'
import { isNativeCore, isPagesPreview, isPreviewRouteLocked } from './config/pagesPreview'
import { isBackendConfigured } from './data-client/backendClient'
import { PagesPreviewGate } from './components/common/PagesPreviewGate'

const datasetVersion = import.meta.env.VITE_DATASET_VERSION

const ExplorerWorkspace = lazy(() => import('./components/explorer/ExplorerWorkspace')
  .then((module) => ({ default: module.ExplorerWorkspace })))
const ReadingHome = lazy(() => import('./components/reading/ReadingPages')
  .then((module) => ({ default: module.ReadingHome })))
const ReadingArticle = lazy(() => import('./components/reading/ReadingPages')
  .then((module) => ({ default: module.ReadingArticle })))
const DataPage = lazy(() => import('./components/pages/InfoPages')
  .then((module) => ({ default: module.DataPage })))
const MethodsPage = lazy(() => import('./components/pages/InfoPages')
  .then((module) => ({ default: module.MethodsPage })))
const CatalogueTaxonPage = lazy(() => import('./components/catalogue/CatalogueTaxonPage')
  .then((module) => ({ default: module.CatalogueTaxonPage })))
const BackendCatalogueTaxonPage = lazy(() => import('./components/catalogue/BackendCatalogueTaxonPage')
  .then((module) => ({ default: module.BackendCatalogueTaxonPage })))
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
const CatalogHubPage = lazy(() => import('./components/pages/PortalPages')
  .then((module) => ({ default: module.CatalogHubPage })))
const ResearchHubPage = lazy(() => import('./components/pages/PortalPages')
  .then((module) => ({ default: module.ResearchHubPage })))
const AboutPage = lazy(() => import('./components/pages/PortalPages')
  .then((module) => ({ default: module.AboutPage })))

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
  // Existing shared home links carrying map state still open that saved state.
  const exploring = route === 'explore' || (route === 'home' && routeState.params.size > 0)
  const [explorerRoute, setExplorerRoute] = useState(exploring ? routeState : null)
  if (exploring && explorerRoute !== routeState) setExplorerRoute(routeState)
  const previewLocked = isPreviewRouteLocked(
    route,
    routeState.params,
    isPagesPreview,
    isNativeCore && isBackendConfigured(),
  )
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
      home: language === 'zh' ? '读懂生命的分支与变化 — Evo Atlas' : 'Read the branches and changes of life — Evo Atlas',
      catalog: 'Catalog — Evo Atlas',
      registry: 'Catalogue taxon — Evo Atlas',
      explore: 'Explore — Evo Atlas',
      research: 'Research — Evo Atlas',
      about: 'About — Evo Atlas',
      taxa: 'Taxon — Evo Atlas',
      events: 'Event — Evo Atlas',
      stories: 'Stories — Evo Atlas',
      compare: 'Compare — Evo Atlas',
      lab: 'Data Lab — Evo Atlas',
      data: 'Data — Evo Atlas',
      methods: 'Methods — Evo Atlas',
    }
    let cancelled = false
    const fallbackDescription = 'Explore deep-time evolution through linked fossil occurrences, reconstructed coordinates, geological intervals and evolutionary hypotheses.'
    const applyMetadata = (entityTitle: string | null, descriptionSource: string, staticPath: string) => {
      if (cancelled) return
      const description = t(descriptionSource)
      const canonical = `https://dajiaohuang.github.io/evo/${language === 'zh' && staticPath ? 'zh/' : ''}${staticPath}`
      const title = entityTitle ? `${entityTitle} — Evo Atlas` : t(labels[route])
      document.title = title
      document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
      document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
      document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
      document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonical)
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonical)
    }

    const id = routeState.params.get('id')
    if (route === 'stories' && routeState.params.has('reading')) {
      applyMetadata(null, fallbackDescription, '')
      void import('../data/reading-guides.json').then(({ default: guides }) => {
        const guide = guides.find(entry => entry.id === routeState.params.get('reading'))
        if (guide) applyMetadata(guide.title[language], guide.dek[language], `read/${guide.id}/`)
      })
    } else if (id && (route === 'taxa' || route === 'events' || route === 'stories')) {
      applyMetadata(null, fallbackDescription, '')
      void import('./services/catalog').then(({ getEvolutionEvent, getEvolutionStory, getTaxonProfile }) => {
        const profile = route === 'taxa' ? getTaxonProfile(id) : null
        const event = route === 'events' ? getEvolutionEvent(id) : null
        const story = route === 'stories' ? getEvolutionStory(id) : null
        const entityTitle = profile?.scientificName ?? (event ? (language === 'zh' ? event.titleZh : event.title) : story ? (language === 'zh' ? story.titleZh : story.title) : null)
        const description = profile?.overview ?? event?.summary ?? story?.dek ?? fallbackDescription
        const staticPath = profile ? `taxa/${staticPathSegment(profile.id)}/` : event ? `events/${encodeURIComponent(event.id)}/` : story ? `stories/${encodeURIComponent(story.id)}/` : ''
        applyMetadata(entityTitle, description, staticPath)
      })
    } else {
      const staticPath = route === 'methods' ? 'methods/' : route === 'data' && !isPagesPreview ? `datasets/${datasetVersion}/` : ''
      applyMetadata(null, route === 'home' && !routeState.params.size ? language === 'zh' ? '从鱼鳍与四肢、开花植物的起源和动物的生活出发，沿着问题理解生命的分支与变化。' : 'Follow questions about fins and limbs, flowering plant origins and animal lives to understand evolutionary branches and change.' : fallbackDescription, staticPath)
    }
    return () => { cancelled = true }
  }, [language, route, routeState.params, t])

  const navigate = useCallback((nextRoute: AppRoute, params: Record<string, string> = {}) => {
    const nextHash = buildRouteHash(nextRoute, params)
    if (nextHash === window.location.hash) return
    window.location.hash = nextHash
  }, [])

  let page
  if (previewLocked) page = <PagesPreviewGate />
  else if (exploring) page = null
  else if (route === 'home') page = <ReadingHome onNavigate={navigate} />
  else if (route === 'catalog') page = <CatalogHubPage onNavigate={navigate} />
  else if (route === 'registry') page = isBackendConfigured()
    ? <BackendCatalogueTaxonPage release={routeState.params.get('release')} id={routeState.params.get('id')} onNavigate={navigate} />
    : <CatalogueTaxonPage release={routeState.params.get('release')} id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'research') page = <ResearchHubPage onNavigate={navigate} />
  else if (route === 'about') page = <AboutPage onNavigate={navigate} />
  else if (route === 'taxa') page = <TaxonPage id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'events') page = <EventPage id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'stories' && routeState.params.has('reading')) page = <ReadingArticle id={routeState.params.get('reading') ?? ''} onNavigate={navigate} />
  else if (route === 'stories') page = <StoriesPage id={routeState.params.get('id')} params={routeState.params} onNavigate={navigate} />
  else if (route === 'compare') page = <ComparePage params={routeState.params} onNavigate={navigate} />
  else if (route === 'lab') page = <LabPage params={routeState.params} onNavigate={navigate} />
  else if (route === 'data') page = <DataPage onNavigate={navigate} />
  else if (route === 'methods') page = <MethodsPage onNavigate={navigate} />
  else page = null

  return (
    <ErrorBoundary>
      <AppShell route={route} onNavigate={navigate} immersive={exploring} focused={exploring && route === 'home'}>
        <Suspense fallback={<RouteLoading />}>
          {explorerRoute && <Activity mode={exploring && !previewLocked ? 'visible' : 'hidden'}>
            <ExplorerWorkspace dashboard={explorerRoute.route === 'home'} params={explorerRoute.params} />
          </Activity>}
          {page}
        </Suspense>
      </AppShell>
    </ErrorBoundary>
  )
}
