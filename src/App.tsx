import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { useAppStore } from './store'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { AppShell } from './components/shell/AppShell'
import { buildRouteHash, parseRouteHash, type AppRoute } from './utils/routing'
import { staticPathSegment } from './utils/staticPath.mjs'
import { useI18n } from './i18n'
import { isBackendConfigured } from './data-client/backendClient'
import { isNativeCore, isPagesPreview, isPreviewRouteLocked } from './config/pagesPreview'
import { PagesPreviewGate } from './components/common/PagesPreviewGate'
import { ReadingWindow } from './components/reading/ReadingWindow'
import './atlas-fullscreen.css'

const ExplorerWorkspace = lazy(() => import('./components/explorer/ExplorerWorkspace')
  .then((module) => ({ default: module.ExplorerWorkspace })))
const ReadingArticle = lazy(() => import('./components/reading/ReadingPages')
  .then((module) => ({ default: module.ReadingArticle })))
const InformationPage = lazy(() => import('./components/reading/InformationPage')
  .then((module) => ({ default: module.InformationPage })))
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
  const [comparisonOrigin, setComparisonOrigin] = useState<ReturnType<typeof parseRouteHash> | null>(null)
  const route = routeState.route
  const exploring = route === 'explore' || route === 'home'
  const [explorerRoute, setExplorerRoute] = useState(exploring ? routeState : { route: 'home' as const, params: new URLSearchParams() })
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
    const id = routeState.params.get('id')
    if (route !== 'taxa' || !id) return

    const intentAtRequest = useAppStore.getState().selectionIntentVersion
    let active = true
    void import('./services/catalog').then(({ getTaxonProfile }) => {
      if (!active || useAppStore.getState().selectionIntentVersion !== intentAtRequest) return
      const treeNodeId = getTaxonProfile(id)?.treeNodeId
      if (treeNodeId) useAppStore.getState().selectNode(treeNodeId)
    })
    return () => { active = false }
  }, [route, routeState.params])

  useEffect(() => {
    const handleHashChange = () => {
      const next = parseRouteHash(window.location.hash)
      if (next.route !== 'compare') setComparisonOrigin(null)
      setRouteState(next)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const labels: Record<AppRoute, string> = {
      home: language === 'zh' ? '古地图与生命故事 — Evo Atlas' : 'Paleomap and stories of life — Evo Atlas',
      catalog: 'Catalog — Evo Atlas',
      registry: 'Catalogue taxon — Evo Atlas',
      pbdb: 'PBDB taxon — Evo Atlas',
      explore: 'Explore — Evo Atlas',
      research: 'Research — Evo Atlas',
      info: language === 'zh' ? '资料与方法 — Evo Atlas' : 'Information and methods — Evo Atlas',
      taxa: 'Taxon — Evo Atlas',
      events: 'Event — Evo Atlas',
      stories: 'Stories — Evo Atlas',
      compare: 'Compare — Evo Atlas',
      lab: 'Data Lab — Evo Atlas',
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
        const description = profile?.readerSections?.find(section => section.id === 'reading-introduction')?.text[language] ?? profile?.overview ?? event?.summary ?? story?.dek ?? fallbackDescription
        const staticPath = profile ? `taxa/${staticPathSegment(profile.id)}/` : event ? `events/${encodeURIComponent(event.id)}/` : story ? `stories/${encodeURIComponent(story.id)}/` : ''
        applyMetadata(entityTitle, description, staticPath)
      })
    } else {
      const staticPath = route === 'info' && routeState.params.get('tab') !== 'sources' ? 'methods/' : ''
      applyMetadata(null, route === 'home' && !routeState.params.size ? language === 'zh' ? '大陆怎样移动，生命又怎样变化？在古地图上阅读化石发现、生物结构与演化故事。' : 'How did continents move and life change? Read fossil discoveries, biological structures and evolutionary stories on the paleomap.' : fallbackDescription, staticPath)
    }
    return () => { cancelled = true }
  }, [language, route, routeState.params, t])

  const navigate = useCallback((nextRoute: AppRoute, params: Record<string, string> = {}) => {
    const current = parseRouteHash(window.location.hash)
    // Reading a chapter's scene updates the persistent map beside the article.
    if (nextRoute === 'explore' && current.route !== 'home' && current.route !== 'explore') {
      setExplorerRoute({ route: 'home', params: new URLSearchParams(params) })
      return
    }
    const nextHash = buildRouteHash(nextRoute, params)
    if (nextHash === window.location.hash) return
    if (nextRoute === 'compare' && current.route !== 'compare') {
      setComparisonOrigin(current.route === 'home' || current.route === 'explore' ? null : current)
    }
    window.location.hash = nextHash
  }, [])

  let page
  if (previewLocked) page = <PagesPreviewGate />
  else if (exploring) page = null
  else if (route === 'catalog') page = <CatalogHubPage onNavigate={navigate} />
  else if (route === 'registry' || route === 'taxa' || route === 'pbdb') page = <section style={{ padding: 24 }}>
    <h1>{language === 'zh' ? '节点页面暂时下线' : 'Node pages are temporarily offline'}</h1>
    <p>{language === 'zh' ? '请在物种树中点击名称，在浮窗阅读 Wikipedia 摘要或打开完整条目。' : 'Select a name in the species tree to preview Wikipedia or open the full article.'}</p>
    <button type="button" onClick={() => navigate('home', { view: 'tree' })}>{language === 'zh' ? '打开物种树' : 'Open species tree'}</button>
  </section>
  else if (route === 'research') page = <ResearchHubPage onNavigate={navigate} />
  else if (route === 'info') page = <InformationPage params={routeState.params} onNavigate={navigate} />
  else if (route === 'events') page = <EventPage id={routeState.params.get('id')} onNavigate={navigate} />
  else if (route === 'stories' && routeState.params.has('reading')) page = <ReadingArticle id={routeState.params.get('reading') ?? ''} onNavigate={navigate} />
  else if (route === 'stories') page = <StoriesPage id={routeState.params.get('id')} params={routeState.params} onNavigate={navigate} />
  else if (route === 'compare') page = <ComparePage params={routeState.params} onNavigate={navigate} />
  else if (route === 'lab') page = <LabPage params={routeState.params} onNavigate={navigate} />
  else page = null

  return (
    <ErrorBoundary>
      <AppShell route={route} onNavigate={navigate} immersive focused>
          <div className="atlas-reading-workspace">
            <div className="atlas-reading-map"><Suspense fallback={<RouteLoading />}>{!previewLocked && <ExplorerWorkspace params={explorerRoute.params} syncRoute={exploring} />}</Suspense></div>
            <ReadingWindow routeKey={buildRouteHash(route, Object.fromEntries(routeState.params))} page={page}
              closeLabel={route === 'compare' && comparisonOrigin ? language === 'zh' ? '关闭比较，回到原文' : 'Close comparison and return to the article' : undefined}
              onClose={() => route === 'compare' && comparisonOrigin
                ? navigate(comparisonOrigin.route, Object.fromEntries(comparisonOrigin.params))
                : navigate('home')} />
          </div>
      </AppShell>
    </ErrorBoundary>
  )
}
