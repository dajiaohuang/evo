import { Activity, lazy, Suspense, useEffect, useEffectEvent, useMemo, useRef, useState } from 'react'
import treeData from '../../../data/navigation/atlas-ontology.json'
import manifest from '../../../data/manifest.json'
import { useAppStore } from '../../store'
import type { TreeDisplayMode, TreeNode } from '../../types'
import type { FossilMarkerMode } from '../../store/mapSlice'
import type { CoordinateMode } from '../../utils/spatial'
import { getTaxonProfile } from '../../services/catalogProfiles'
import { useCatalogContext } from '../../hooks/useCatalogContext'
import { getEntityPublication } from '../../services/publication'
import { periods, timeScaleUnits } from '../../services/geology'
import { buildRouteHash, explorationShareUrl, getFiniteRouteNumber } from '../../utils/routing'
import { searchReturnHash } from '../../utils/searchMapNavigation'
import { MAX_MAP_ZOOM, MIN_MAP_ZOOM } from '../../constants'
import { loadPackageForEntity } from '../../data-client/staticDataClient'
import { useI18n } from '../../i18n'
import { localizedProfileText } from '../../i18n/profileText'
import { isPagesPreview, isPreviewTaxonAllowed } from '../../config/pagesPreview'
import { GeoTimeline } from '../timeline/GeoTimeline'
import { ErrorBoundary } from '../common/ErrorBoundary'
import { EvidenceIssueLink } from '../common/EvidenceIssueLink'
import './ExplorerWorkspace.css'
import type { TreeFocusRequest } from '../tree/EvoTree'
import type { OpenFullTree } from '../tree/LocalTreePanel'

type ExplorerView = 'map' | 'tree' | 'diversity'
type GuideMode = 'tour' | 'hidden'
type TutorialStepId = 'time' | 'map' | 'tree' | 'evidence'

interface ExplorerWorkspaceProps {
  params: URLSearchParams
  syncRoute?: boolean
}

const TUTORIAL_STEPS: Array<{ id: TutorialStepId; title: string; description: string }> = [
  { id: 'time', title: 'Set a time context', description: 'The geological timeline is the shared clock. Changing age updates the period context, fossil sample and nearest available map frame; only claim-linked, published range evidence can surface a scene card.' },
  { id: 'map', title: 'Read the map as a reconstruction', description: 'Map layers are modelled geometries, not direct observations. Fossil markers keep reconstructed and modern coordinates separate.' },
  { id: 'tree', title: 'Switch to the tree without changing context', description: 'The tree keeps the selected age and subject. Navigation, fossil first appearances and the scoped topology remain distinct representations.' },
  { id: 'evidence', title: 'Check evidence before drawing a conclusion', description: 'The evidence panel shows claims, sources and uncertainty.' },
]

const TREE_MODES = new Set<TreeDisplayMode>(['navigation', 'cladogram', 'first-appearance', 'fossil-range', 'calibration', 'radial'])
const MARKER_MODES = new Set<FossilMarkerMode>(['clusters', 'density', 'points'])
const COORDINATE_MODES = new Set<CoordinateMode>(['paleo', 'modern'])

const PaleoMap = lazy(() => import('../map/PaleoMap')
  .then((module) => ({ default: module.PaleoMap })))
const EvoTree = lazy(() => import('../tree/EvoTree')
  .then((module) => ({ default: module.EvoTree })))
const DiversityView = lazy(() => import('../diversity/DiversityView')
  .then((module) => ({ default: module.DiversityView })))
const SpeciesDetail = lazy(() => import('../details/SpeciesDetail')
  .then((module) => ({ default: module.SpeciesDetail })))

interface FlatNode {
  id: string
  name: string
  commonName?: string
  commonNameZh?: string
  taxonId?: string
  firstAppearance: number
  lastAppearance: number
  rangeEvidenceLevel?: TreeNode['rangeEvidenceLevel']
}

function flattenTree(node: TreeNode, output: FlatNode[] = []): FlatNode[] {
  output.push(node)
  for (const child of node.children ?? []) flattenTree(child, output)
  return output
}

function ViewFallback({ label }: { label: string }) {
  const { t } = useI18n()
  return <div className="explorer-fallback">{t('{label} could not be rendered.', { label: t(label) })}</div>
}

function ModuleLoading() {
  const { t } = useI18n()
  return <div className="explorer-module-loading">{t('Loading view…')}</div>
}

export function ExplorerWorkspace({ params, syncRoute = true }: ExplorerWorkspaceProps) {
  const dashboard = true
  const { language, number, t } = useI18n()
  const initialRoute = useMemo(() => ({ params }), [params])
  const [hydratedRoute, setHydratedRoute] = useState<typeof initialRoute | null>(null)
  const pendingOccurrence = useRef<string | null>(null)
  const historySelection = useRef<string | null>(null)
  const appliedHash = useRef(window.location.hash)
  const routeView = initialRoute.params.get('view')
  const returnToMap = searchReturnHash(initialRoute.params)
  const readingReturn = initialRoute.params.get('returnReading')
  const returnToReading = readingReturn?.startsWith('#/') && readingReturn.length <= 4000 ? readingReturn : null
  const initialView: ExplorerView = routeView === 'tree' || routeView === 'diversity' ? routeView : 'map'
  const context = useMemo(() => ({
    profile: initialRoute.params.get('profile'),
    event: initialRoute.params.get('event'),
    story: initialRoute.params.get('story'),
    step: initialRoute.params.get('step'),
    older: getFiniteRouteNumber(initialRoute.params, 'older'),
    younger: getFiniteRouteNumber(initialRoute.params, 'younger'),
  }), [initialRoute])
  const [view, setView] = useState<ExplorerView>(initialView)
  const [treeFocus, setTreeFocus] = useState<TreeFocusRequest | null>(null)
  const focusSequence = useRef(0)
  const [visitedViews, setVisitedViews] = useState(() => new Set<ExplorerView>([initialView]))
  if (!visitedViews.has(view)) setVisitedViews(new Set([...visitedViews, view]))
  const requestedDataset = initialRoute.params.get('dataset')
  const datasetMismatch = requestedDataset && requestedDataset !== manifest.datasetVersion
    ? { requested: requestedDataset, current: manifest.datasetVersion }
    : null
  const [acceptedDataset, setAcceptedDataset] = useState<string | null>(null)
  const datasetAccepted = !datasetMismatch || acceptedDataset === requestedDataset
  const [mobilePanel, setMobilePanel] = useState<'navigator' | 'inspector' | null>(null)
  const [query, setQuery] = useState('')
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'ready'>('idle')
  const [shareUrl, setShareUrl] = useState('')
  const [guideMode, setGuideMode] = useState<GuideMode>('hidden')
  const [guideStep, setGuideStep] = useState(0)
  const [detailsOpen, setDetailsOpen] = useState(!dashboard)

  const currentAge = useAppStore((state) => state.currentAge)
  const currentPeriod = useAppStore((state) => state.currentPeriod)
  const currentEpoch = useAppStore((state) => state.currentEpoch)
  const currentAgeUnit = useAppStore((state) => state.currentAgeUnit)
  const currentEra = useAppStore((state) => state.currentEra)
  const currentEon = useAppStore((state) => state.currentEon)
  const selectedNodeId = useAppStore((state) => state.selectedNodeId)
  const setTime = useAppStore((state) => state.setTime)
  const selectSubject = useAppStore((state) => state.selectSubject)
  const loadOccurrencesForInterval = useAppStore((state) => state.loadOccurrencesForInterval)
  const viewState = useAppStore((state) => state.viewState)
  const mapProjection = useAppStore((state) => state.mapProjection)
  const setMapProjection = useAppStore((state) => state.setMapProjection)
  const markerMode = useAppStore((state) => state.markerMode)
  const coordinateMode = useAppStore((state) => state.coordinateMode)
  const mapContentMode = useAppStore((state) => state.mapContentMode)
  const treeMode = useAppStore((state) => state.treeMode)
  const selectedOccurrence = useAppStore((state) => state.selectedOccurrence)
  const occurrencesByInterval = useAppStore((state) => state.occurrencesByInterval)
  const occurrencesByTaxonQuery = useAppStore((state) => state.occurrencesByTaxonQuery)
  const setViewState = useAppStore((state) => state.setViewState)
  const setMarkerMode = useAppStore((state) => state.setMarkerMode)
  const setMapContentMode = useAppStore((state) => state.setMapContentMode)
  const setCoordinateMode = useAppStore((state) => state.setCoordinateMode)
  const setTreeMode = useAppStore((state) => state.setTreeMode)
  const selectFossilOccurrence = useAppStore((state) => state.selectFossilOccurrence)
  const periodOccurrences = useAppStore((state) => (
    currentPeriod ? state.occurrencesByInterval[currentPeriod] : undefined
  ))
  const localizedTimeContext = [currentEon, currentEra, currentPeriod, currentEpoch, currentAgeUnit]
    .filter((name): name is string => Boolean(name))
    .map((name) => {
      const unit = timeScaleUnits.find((candidate) => candidate.nam === name)
      return language === 'zh' ? (unit?.namZh ?? name) : name
    })

  const nodes = useMemo(() => flattenTree(treeData as TreeNode), [])
  const profileContext = getTaxonProfile(context.profile)
  const { event: eventContext, story: storyContext, error: contextError } = useCatalogContext(context.event, context.story)
  const storyStep = storyContext?.steps.find((step) => step.id === context.step)
  const selectedPublication = getEntityPublication(profileContext?.treeNodeId ?? selectedNodeId)
  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return nodes.filter((node) => (
      ['life', 'mammalia', 'dinosauria', 'tetrapoda', 'arthropoda'].includes(node.id)
      && (!isPagesPreview || isPreviewTaxonAllowed(node.id))
    ))
    return nodes.filter((node) => {
      if (isPagesPreview && !isPreviewTaxonAllowed(node.id)) return false
      return node.name.toLowerCase().includes(needle)
        || node.commonName?.toLowerCase().includes(needle)
        || node.commonNameZh?.toLowerCase().includes(needle)
        || getTaxonProfile(node.id)?.commonNameZh.includes(needle)
    }).slice(0, 8)
  }, [nodes, query])

  const hydrateRoute = useEffectEvent(() => {
    if (!datasetAccepted || hydratedRoute === initialRoute) return
    historySelection.current = null
    appliedHash.current = window.location.hash
    pendingOccurrence.current = initialRoute.params.get('occurrence')
    const params = initialRoute.params
    const routeView = params.get('view')
    if (routeView === 'map' || routeView === 'tree' || routeView === 'diversity') setView(routeView)
    const age = getFiniteRouteNumber(params, 'age')
    if (age !== null) setTime(age)

    const lat = getFiniteRouteNumber(params, 'lat')
    const lng = getFiniteRouteNumber(params, 'lng')
    const zoom = getFiniteRouteNumber(params, 'zoom')
    const projection = params.get('projection')
    if (projection === 'mercator' || projection === 'equal-earth') setMapProjection(projection)
    if (lat !== null && lng !== null && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      setViewState({ center: [lat, lng] })
    }
    if (zoom !== null && zoom >= MIN_MAP_ZOOM && zoom <= MAX_MAP_ZOOM) setViewState({ zoom })

    const requestedMarkerMode = params.get('markers') as FossilMarkerMode | null
    if (requestedMarkerMode && MARKER_MODES.has(requestedMarkerMode)) setMarkerMode(requestedMarkerMode)
    const requestedContent = params.get('mapContent')
    if (requestedContent === 'all' || requestedContent === 'featured') setMapContentMode(requestedContent)
    const requestedCoordinateMode = params.get('coords') as CoordinateMode | null
    if (requestedCoordinateMode && COORDINATE_MODES.has(requestedCoordinateMode)) setCoordinateMode(requestedCoordinateMode)
    const requestedTreeMode = params.get('treeMode') as TreeDisplayMode | null
    if (requestedTreeMode && TREE_MODES.has(requestedTreeMode)) setTreeMode(requestedTreeMode)
    const taxon = params.get('taxon')
    const focusedNodeId = params.get('focus') ?? (routeView === 'tree' ? taxon : null)
    if (focusedNodeId) setTreeFocus({ nodeId: focusedNodeId, sequence: ++focusSequence.current })
    if (!taxon && params.has('dataset')) void selectSubject({ nodeId: null })
    if (taxon && (!isPagesPreview || isPreviewTaxonAllowed(taxon))) {
      const node = nodes.find((candidate) => candidate.id === taxon)
      if (node) {
        void selectSubject({ nodeId: node.id, taxonId: node.taxonId })
      }
    }
    if (profileContext?.pbdbTaxonId && (!isPagesPreview || isPreviewTaxonAllowed(profileContext.id))) {
      void selectSubject({ nodeId: profileContext.treeNodeId ?? null, taxonId: profileContext.pbdbTaxonId })
    }
    setHydratedRoute(initialRoute)
  })
  // URL navigation is an external event: apply its complete snapshot before writing it back.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { hydrateRoute() }, [initialRoute, datasetAccepted])

  useEffect(() => {
    if (currentPeriod) void loadOccurrencesForInterval(currentPeriod)
  }, [currentPeriod, loadOccurrencesForInterval])

  useEffect(() => {
    if (selectedNodeId && (!isPagesPreview || isPreviewTaxonAllowed(selectedNodeId))) void loadPackageForEntity(selectedNodeId).catch(() => undefined)
  }, [selectedNodeId])

  useEffect(() => {
    const requestedId = pendingOccurrence.current
    if (!requestedId) return
    if (selectedOccurrence?.oid === requestedId) { pendingOccurrence.current = null; return }
    const availableRecords = [
      ...Object.values(occurrencesByInterval).flat(),
      ...Object.values(occurrencesByTaxonQuery).flat(),
    ]
    const match = availableRecords.find((record) => record.oid === requestedId)
    if (match) { pendingOccurrence.current = null; selectFossilOccurrence(match) }
  }, [initialRoute.params, occurrencesByInterval, occurrencesByTaxonQuery, selectFossilOccurrence, selectedOccurrence?.oid])

  useEffect(() => {
    if (!syncRoute || !datasetAccepted || hydratedRoute !== initialRoute) return
    // A navigation may have changed the URL before React receives hashchange.
    // Never let an asynchronous data update replace that pending navigation.
    if (window.location.hash !== appliedHash.current) return
    const hash = buildRouteHash(dashboard ? 'home' : 'explore', {
      age: currentAge.toFixed(1),
      view,
      taxon: selectedNodeId,
      profile: context.profile,
      event: context.event,
      story: context.story,
      step: context.step,
      older: context.older,
      younger: context.younger,
      dataset: manifest.datasetVersion,
      lat: viewState.center[0].toFixed(3),
      lng: viewState.center[1].toFixed(3),
      zoom: viewState.zoom.toFixed(2),
      projection: mapProjection,
      markers: markerMode,
      coords: coordinateMode,
      mapContent: mapContentMode,
      treeMode,
      occurrence: selectedOccurrence?.oid,
      returnTo: returnToMap,
      returnReading: returnToReading,
    })
    const selection = `${view}:${selectedNodeId ?? ''}:${selectedOccurrence?.oid ?? ''}`
    const method = historySelection.current !== null && historySelection.current !== selection ? 'pushState' : 'replaceState'
    historySelection.current = selection
    if (window.location.hash !== hash) window.history[method](window.history.state, '', `${window.location.pathname}${window.location.search}${hash}`)
    appliedHash.current = hash
  }, [context, coordinateMode, currentAge, dashboard, datasetAccepted, hydratedRoute, initialRoute, mapProjection, mapContentMode, markerMode, returnToMap, returnToReading, selectedNodeId, selectedOccurrence?.oid, syncRoute, treeMode, view, viewState])

  const chooseNode = (node: FlatNode) => {
    if (isPagesPreview && !isPreviewTaxonAllowed(node.id)) return
    void selectSubject({ nodeId: node.id, taxonId: node.taxonId })
    setDetailsOpen(true)
    setMobilePanel('inspector')
  }

  const openFullTree: OpenFullTree = (nodeId, mode) => {
    const node = nodes.find(candidate => candidate.id === nodeId)
    if (!node) return
    setTreeMode(mode)
    // Locating a local branch moves the tree camera, while the article keeps its subject.
    setTreeFocus({ nodeId, sequence: ++focusSequence.current })
    setView('tree')
    setMobilePanel(null)
  }
  const toggleMainView = () => {
    if (view === 'tree') { setView('map'); return }
    if (selectedNodeId) {
      setTreeFocus({ nodeId: selectedNodeId, sequence: ++focusSequence.current })
    }
    setView('tree')
  }
  const mainViewLabel = language === 'zh' ? view === 'tree' ? '返回古地图' : '前往物种树' : view === 'tree' ? 'Return to the paleomap' : 'Go to the species tree'

  const shareState = async () => {
    const url = explorationShareUrl(window.location.href, import.meta.env.VITE_NATIVE_APP === 'true')
    setShareUrl(url)
    try {
      await navigator.clipboard.writeText(url)
      setShareStatus('copied')
      window.setTimeout(() => setShareStatus('idle'), 1600)
    } catch {
      setShareStatus('ready')
    }
  }

  const dismissGuide = () => {
    setGuideMode('hidden')
    setMobilePanel(null)
    if (dashboard) setDetailsOpen(false)
  }

  const showTutorialStep = (nextStep: number) => {
    const boundedStep = Math.min(Math.max(nextStep, 0), TUTORIAL_STEPS.length - 1)
    const step = TUTORIAL_STEPS[boundedStep]
    setGuideStep(boundedStep)
    setMobilePanel(null)

    if (step.id === 'time') {
      if (dashboard) setDetailsOpen(false)
      setView('map')
      setTime(512.8)
    } else if (step.id === 'map') {
      setView('map')
    } else if (step.id === 'tree') {
      setView('tree')
      const node = nodes.find((candidate) => candidate.id === 'perissodactyla')
      if (node) void selectSubject({ nodeId: node.id, taxonId: node.taxonId })
    } else if (step.id === 'evidence') {
      setDetailsOpen(true)
      setMobilePanel('inspector')
    }
  }

  const startTutorial = () => {
    setGuideMode('tour')
    showTutorialStep(0)
  }

  const currentTutorialStep = TUTORIAL_STEPS[guideStep]

  const selectedPeriod = periods.find((period) => period.name === currentPeriod)
  const selectedNode = nodes.find((node) => node.id === selectedNodeId)
  const canLocateTime = selectedNode && selectedNode.rangeEvidenceLevel !== 'withheld-no-range-evidence'
    && Number.isFinite(selectedNode.firstAppearance) && Number.isFinite(selectedNode.lastAppearance)
  const revealSelection = useEffectEvent(() => {
    if (!syncRoute || (!selectedNodeId && !selectedOccurrence) || guideMode !== 'hidden') return
    if (view === 'tree' && treeFocus?.nodeId === selectedNodeId) {
      setMobilePanel(null)
      return
    }
    setDetailsOpen(true)
    setMobilePanel('inspector')
  })
  // Map and tree selections arrive through the external store, not local button handlers.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { revealSelection() }, [selectedNodeId, selectedOccurrence?.oid, treeFocus])

  return (
    <section aria-label={language === 'zh' ? '古地图看板' : 'Paleomap dashboard'} className={`explorer-workspace${dashboard ? ' explorer-workspace--dashboard' : ''}${detailsOpen ? ' is-details-open' : ''}`}>
      {datasetMismatch && !datasetAccepted && (
        <section className="dataset-mismatch" role="alertdialog" aria-modal="true" aria-labelledby="dataset-mismatch-title">
          <div>
            <span>{t('Dataset version mismatch')}</span>
            <h2 id="dataset-mismatch-title">{t('This shared link targets a different data snapshot.')}</h2>
            <p>{t('Requested {requested}; this deployment provides {current}. Continuing may change scientific results.', datasetMismatch)}</p>
            <div>
              <a href="#/home">{t('Leave Explorer')}</a>
              <button autoFocus onClick={() => setAcceptedDataset(requestedDataset)}>{t('Use current dataset')}</button>
            </div>
          </div>
        </section>
      )}
      {detailsOpen && <aside className={`explorer-nav${mobilePanel === 'navigator' ? ' is-open' : ''}`} aria-label={t('Taxon and time navigator')}>
        <div className="panel-heading">
          <span>{t('Taxon navigator')}</span>
          <div className="panel-heading-actions">
            <small>{t('{count} nodes', { count: number(manifest.records.treeNodes) })}</small>
            <button className="mobile-panel-close" aria-label={t('Close taxon panel')} onClick={() => setMobilePanel(null)}>×</button>
          </div>
        </div>

        <label className="taxon-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('Search the tree…')}
            aria-label={t('Search taxa')}
          />
        </label>

        {(storyContext || eventContext || profileContext) && (
          <div className="explorer-context-card">
            <span>{t(storyContext ? 'Story state' : eventContext ? 'Event context' : 'Taxon context')}</span>
            <strong>{storyStep ? t(storyStep.title) : eventContext ? (language === 'zh' ? eventContext.titleZh : eventContext.title) : profileContext ? (language === 'zh' ? profileContext.commonNameZh : profileContext.commonName) : ''}</strong>
            <small>{storyContext ? (language === 'zh' ? storyContext.titleZh : storyContext.title) : eventContext ? (language === 'zh' ? eventContext.titleZh : eventContext.title) : profileContext?.scientificName}</small>
          </div>
        )}

        <div className="navigator-section">
          <span className="navigator-label">{t(query ? 'Matches' : 'Quick access')}</span>
          <div className="taxon-results">
            {searchResults.map((node) => (
              <button
                key={node.id}
                className={selectedNodeId === node.id ? 'is-selected' : ''}
                onClick={() => chooseNode(node)}
              >
                <span className="taxon-node-dot" />
                <span>
                  <strong>{language === 'zh' ? (getTaxonProfile(node.id)?.commonNameZh ?? node.commonNameZh ?? node.commonName ?? node.name) : (node.commonName ?? node.name)}</strong>
                  <small>{node.name}</small>
                </span>
                <i>→</i>
              </button>
            ))}
          </div>
        </div>

        {isPagesPreview && <p className="preview-scope-note" role="note">
          {language === 'zh'
            ? '预览版只开放精选资源包；其他树节点仍用于上下文展示，打开其完整内容请使用完整版 Web。'
            : 'This preview opens selected resource packages only. Other tree nodes remain visible for context; use the full Web edition to open them.'}
        </p>}

        <div className="navigator-section navigator-section--time">
          <span className="navigator-label">{t('Current context')}</span>
          <div className="time-readout">
            <strong>{currentAge.toFixed(1)}</strong>
            <span>Ma</span>
          </div>
          <p>{localizedTimeContext.length ? localizedTimeContext.join(' / ') : t('Unsubdivided')}</p>
          {selectedPeriod && <small>{t(selectedPeriod.description)}</small>}
        </div>

        <button className="share-button" onClick={shareState}>
          <span>↗</span> {t(shareStatus === 'copied' ? 'Link copied' : shareStatus === 'ready' ? 'URL is ready' : 'Share state')}
        </button>
        {shareStatus === 'ready' && <input className="share-url" aria-label={language === 'zh' ? '复制分享链接' : 'Copy share link'} value={shareUrl} readOnly onFocus={event => event.currentTarget.select()} />}
        <div className="dataset-status" role="status">
          <span>{t('Dataset')}</span>
          <strong>{manifest.datasetVersion}</strong>
          <small>{t(datasetMismatch ? 'Mismatch acknowledged; using the current snapshot.' : requestedDataset ? 'Shared snapshot matches this deployment.' : 'Current deployment snapshot.')}</small>
        </div>
      </aside>}

      {mobilePanel && <button className="explorer-panel-backdrop" aria-label={t('Close Explorer panel')} onClick={() => setMobilePanel(null)} />}

      <section className="explorer-stage">
        {contextError && <p role="alert">{language === 'zh' ? '无法加载所选故事或事件。' : 'The selected story or event could not be loaded.'}</p>}
        {guideMode === 'tour' && syncRoute && (
          <aside className="explorer-first-run" aria-label={t('Explorer quick guide')}>
            <div className="explorer-first-run__heading">
              <strong>{t('Dashboard walkthrough')}</strong>
              <button onClick={dismissGuide} aria-label={t('Dismiss Explorer guide')}>×</button>
            </div>
            <ol className="explorer-first-run__progress" aria-label={t('Tutorial steps')}>
              {TUTORIAL_STEPS.map((step, index) => (
                <li key={step.id} className={index === guideStep ? 'is-current' : index < guideStep ? 'is-complete' : ''}>
                  <button onClick={() => showTutorialStep(index)} aria-current={index === guideStep ? 'step' : undefined}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <small>{t(step.title)}</small>
                  </button>
                </li>
              ))}
            </ol>
            <article className="explorer-first-run__step" aria-live="polite">
              <span>{t('Step {current} of {total}', { current: guideStep + 1, total: TUTORIAL_STEPS.length })}</span>
              <h2>{t(currentTutorialStep.title)}</h2>
              <p>{t(currentTutorialStep.description)}</p>
            </article>
            <div className="explorer-first-run__actions">
              <button onClick={() => showTutorialStep(guideStep - 1)} disabled={guideStep === 0}>{t('Previous')}</button>
              {guideStep < TUTORIAL_STEPS.length - 1
                ? <button className="explorer-first-run__next" autoFocus onClick={() => showTutorialStep(guideStep + 1)}>{t('Next')}</button>
                : <button className="explorer-first-run__next" autoFocus onClick={dismissGuide}>{t('Finish tour')}</button>}
            </div>
          </aside>
        )}
        <div className="stage-toolbar">
          <div>
            <span className="stage-eyebrow">{t('Primary view')}</span>
            <strong>{t(view === 'map' ? 'Fossil occurrence map' : view === 'tree' ? 'Tree of life' : 'Sampling & diversity')}</strong>
          </div>
          <div className="view-switcher" role="group" aria-label={t('Primary view')}>
            <button className={view === 'map' ? 'is-active' : ''} onClick={() => setView('map')}>{t('Map')}</button>
            <button className={view === 'tree' ? 'is-active' : ''} onClick={() => setView('tree')}>{t('Tree')}</button>
            <button className={view === 'diversity' ? 'is-active' : ''} onClick={() => setView('diversity')}>{t('Diversity')}</button>
          </div>
          <div className="mobile-panel-switcher" role="group" aria-label={t('Explorer side panels')}>
            <button aria-expanded={mobilePanel === 'navigator'} onClick={() => { setDetailsOpen(true); setMobilePanel((panel) => panel === 'navigator' ? null : 'navigator') }}>{t('Taxa & time')}</button>
            <button aria-expanded={mobilePanel === 'inspector'} onClick={() => { setDetailsOpen(true); setMobilePanel((panel) => panel === 'inspector' ? null : 'inspector') }}>{t('Evidence')}</button>
          </div>
          <div className="stage-actions">
            <button className="stage-tutorial-trigger" onClick={startTutorial}>{t('Tutorial')}</button>
            {dashboard && <button className="stage-details-trigger" aria-expanded={detailsOpen} onClick={() => setDetailsOpen((open) => !open)}>{t(detailsOpen ? 'Fold detailed tools' : 'Open detailed tools')}</button>}
            <div className="stage-metric">
              <strong>{number(periodOccurrences?.length ?? 0)}</strong>
              <span>{language === 'zh' ? '当前地质期记录' : 'period sample records'}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-stage-body">
          <div className="stage-canvas">
            {returnToReading && <a className="search-map-return" href={returnToReading}>{language === 'zh' ? '返回刚才的阅读位置' : 'Return to your reading position'} ↶</a>}
            {returnToMap && <a className="search-map-return" href={returnToMap}>
              <span aria-hidden="true">↶</span> {language === 'zh' ? '返回搜索前地图' : 'Return to the previous map'}
            </a>}
            <Suspense fallback={<ModuleLoading />}>
              {visitedViews.has('map') && <Activity mode={view === 'map' ? 'visible' : 'hidden'}><ErrorBoundary fallback={<ViewFallback label="Map" />}><PaleoMap /></ErrorBoundary></Activity>}
              {visitedViews.has('tree') && <Activity mode={view === 'tree' ? 'visible' : 'hidden'}><ErrorBoundary fallback={<ViewFallback label="Tree" />}><EvoTree focusRequest={treeFocus} /></ErrorBoundary></Activity>}
              {visitedViews.has('diversity') && <Activity mode={view === 'diversity' ? 'visible' : 'hidden'}><ErrorBoundary fallback={<ViewFallback label="Diversity view" />}><DiversityView /></ErrorBoundary></Activity>}
            </Suspense>
            <div className="main-view-corner">
              <button type="button" className="main-view-corner__button" aria-label={mainViewLabel} aria-describedby="main-view-tooltip" onClick={toggleMainView}>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {view === 'tree' ? <><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Z" /><path d="M9 3v16M15 5v16" /></> : <><path d="M12 4v6M5 15v-5h14v5M12 10v5" /><circle cx="12" cy="3" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="12" cy="18" r="2" /><circle cx="19" cy="18" r="2" /></>}
                </svg>
              </button>
              <span className="main-view-corner__tooltip" id="main-view-tooltip" role="tooltip">{mainViewLabel}</span>
            </div>
          </div>
        </div>

        <div className="stage-note">
          <span className="status-dot" />
          {view === 'map'
            ? eventContext
              ? t('{event} · event window {start}–{end} Ma', { event: language === 'zh' ? eventContext.titleZh : eventContext.title, start: eventContext.startAge, end: eventContext.endAge })
              : context.older !== null && context.younger !== null
                ? t('Shared time window {older}–{younger} Ma · map shown at {age} Ma', { older: context.older, younger: context.younger, age: currentAge.toFixed(1) })
                : t('Period-level paleogeography · coordinate layers never mix modern and reconstructed positions')
            : view === 'tree'
              ? t('Cladogram, first-appearance proxy and fossil-range modes expose distinct time assumptions')
              : t('Observed sample patterns · absence and record counts are not direct biological richness estimates')}
        </div>
      </section>

      {detailsOpen && <aside className={`explorer-inspector${mobilePanel === 'inspector' ? ' is-open' : ''}`} aria-label={t('Evidence inspector')}>
        <div className="panel-heading">
          <span>{t('Evidence inspector')}</span>
          <div className="panel-heading-actions">
            <small>{t('Selection')}</small>
            <button className="mobile-panel-close" aria-label={t('Close evidence panel')} onClick={() => setMobilePanel(null)}>×</button>
          </div>
        </div>
        <div className="inspector-scroll">
          {canLocateTime && <button className="share-button" onClick={() => setTime((selectedNode.firstAppearance + selectedNode.lastAppearance) / 2)}>
            {language === 'zh' ? '定位到记录时间范围' : 'Locate represented time range'}
          </button>}
          {(profileContext || eventContext) && (
            <div className="context-inspector-card">
              <span>{t(profileContext ? 'Curated taxon profile' : 'Curated event')}</span>
              <h2>{profileContext?.scientificName ?? (language === 'zh' ? eventContext?.titleZh : eventContext?.title)}</h2>
              <p>{profileContext
                ? localizedProfileText(profileContext, profileContext.evidenceSummary, language, t)
                : language === 'zh' ? eventContext?.summaryZh ?? t(eventContext?.summary ?? '') : eventContext?.summary}</p>
              <a href={profileContext ? `#/taxa?id=${profileContext.id}` : `#/events?id=${eventContext?.id}`}>
                {t('Open full evidence page →')}
              </a>
            </div>
          )}
          {selectedPublication && <EvidenceIssueLink entityId={profileContext?.id ?? selectedNodeId ?? undefined} compact />}
          <Suspense fallback={<ModuleLoading />}><ErrorBoundary fallback={<ViewFallback label="Inspector" />}><SpeciesDetail onOpenFullTree={openFullTree} /></ErrorBoundary></Suspense>
        </div>
      </aside>}

      <section className="explorer-timeline">
        <ErrorBoundary fallback={<ViewFallback label="Timeline" />}><GeoTimeline /></ErrorBoundary>
      </section>
    </section>
  )
}
