import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import treeData from '../../../data/navigation/atlas-ontology.json'
import manifest from '../../../data/manifest.json'
import { useAppStore } from '../../store'
import type { TreeDisplayMode, TreeNode } from '../../types'
import type { FossilMarkerMode } from '../../store/mapSlice'
import type { CoordinateMode } from '../../utils/spatial'
import { getEvolutionEvent, getEvolutionStory, getTaxonProfile } from '../../services/catalog'
import { getEntityPublication } from '../../services/publication'
import { periods, timeScaleUnits } from '../../services/geology'
import { buildRouteHash, getFiniteRouteNumber, parseRouteHash } from '../../utils/routing'
import { MAX_MAP_ZOOM, MIN_MAP_ZOOM } from '../../constants'
import { loadPackageForEntity } from '../../data-client/staticDataClient'
import { useI18n } from '../../i18n'
import { GeoTimeline } from '../timeline/GeoTimeline'
import { SpeciesDetail } from '../details/SpeciesDetail'
import { ErrorBoundary } from '../common/ErrorBoundary'
import { EvidenceStatus } from '../common/EvidenceStatus'
import './ExplorerWorkspace.css'

type ExplorerView = 'map' | 'tree' | 'diversity'
type GuideMode = 'choice' | 'tour' | 'hidden'
type TutorialStepId = 'presets' | 'time' | 'map' | 'tree' | 'evidence'

interface ExplorerWorkspaceProps {
  dashboard?: boolean
}

const DASHBOARD_PRESETS: Array<{ id: string; title: string; description: string; age: number; view: ExplorerView; taxonId?: string }> = [
  { id: 'k-pg', title: 'K–Pg boundary', description: 'Extinction boundary, occurrences and changing land geometry', age: 66, view: 'map' },
  { id: 'cambrian', title: 'Cambrian seas', description: 'Early Phanerozoic geography and sampled fossil records', age: 512.8, view: 'map' },
  { id: 'perissodactyla', title: 'Odd-toed ungulates', description: 'An evidence package at curated-draft maturity and its tree context', age: 34, view: 'tree', taxonId: 'perissodactyla' },
  { id: 'jurassic', title: 'Jurassic radiations', description: 'Compare sampled diversity around 172 Ma', age: 172.3, view: 'diversity' },
]

const TUTORIAL_STEPS: Array<{ id: TutorialStepId; title: string; description: string }> = [
  { id: 'presets', title: 'Begin with a preset scene', description: 'Presets set a documented age and primary view together. Try another at any time; they never hide the underlying controls.' },
  { id: 'time', title: 'Move every view through time', description: 'The geological timeline is the shared clock. Changing age updates the period context, fossil sample and nearest available map frame.' },
  { id: 'map', title: 'Read the map as a reconstruction', description: 'Map layers are modelled geometries, not direct observations. Fossil markers keep reconstructed and modern coordinates separate.' },
  { id: 'tree', title: 'Switch to the tree without changing context', description: 'The tree keeps the selected age and subject. Navigation, fossil first appearances and the scoped topology remain distinct representations.' },
  { id: 'evidence', title: 'Check evidence before drawing a conclusion', description: 'The evidence panel discloses package maturity, claims, sources and uncertainty. Automated checks are not expert review.' },
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

interface FlatNode {
  id: string
  name: string
  commonName?: string
  commonNameZh?: string
  taxonId?: string
  firstAppearance: number
  lastAppearance: number
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

function initialGuideMode(): GuideMode {
  try { return window.localStorage.getItem('evo-explorer-guide-v2') === 'dismissed' ? 'hidden' : 'choice' } catch { return 'choice' }
}

export function ExplorerWorkspace({ dashboard = false }: ExplorerWorkspaceProps) {
  const { language, number, t } = useI18n()
  const [initialRoute] = useState(() => parseRouteHash(window.location.hash))
  const routeView = initialRoute.params.get('view')
  const initialView: ExplorerView = routeView === 'tree' || routeView === 'diversity' ? routeView : 'map'
  const [context] = useState(() => ({
    profile: initialRoute.params.get('profile'),
    event: initialRoute.params.get('event'),
    story: initialRoute.params.get('story'),
    step: initialRoute.params.get('step'),
    older: getFiniteRouteNumber(initialRoute.params, 'older'),
    younger: getFiniteRouteNumber(initialRoute.params, 'younger'),
  }))
  const [view, setView] = useState<ExplorerView>(initialView)
  const requestedDataset = initialRoute.params.get('dataset')
  const datasetMismatch = requestedDataset && requestedDataset !== manifest.datasetVersion
    ? { requested: requestedDataset, current: manifest.datasetVersion }
    : null
  const [datasetAccepted, setDatasetAccepted] = useState(!datasetMismatch)
  const [mobilePanel, setMobilePanel] = useState<'navigator' | 'inspector' | null>(null)
  const [query, setQuery] = useState('')
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'ready'>('idle')
  const [guideMode, setGuideMode] = useState<GuideMode>(() => dashboard ? initialGuideMode() : 'hidden')
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
  const markerMode = useAppStore((state) => state.markerMode)
  const coordinateMode = useAppStore((state) => state.coordinateMode)
  const treeMode = useAppStore((state) => state.treeMode)
  const selectedOccurrence = useAppStore((state) => state.selectedOccurrence)
  const occurrencesByInterval = useAppStore((state) => state.occurrencesByInterval)
  const occurrencesByTaxonQuery = useAppStore((state) => state.occurrencesByTaxonQuery)
  const setViewState = useAppStore((state) => state.setViewState)
  const setMarkerMode = useAppStore((state) => state.setMarkerMode)
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
  const eventContext = getEvolutionEvent(context.event)
  const storyContext = getEvolutionStory(context.story)
  const storyStep = storyContext?.steps.find((step) => step.id === context.step)
  const selectedPublication = getEntityPublication(profileContext?.treeNodeId ?? selectedNodeId)
  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return nodes.filter((node) => ['life', 'mammalia', 'dinosauria', 'tetrapoda', 'arthropoda'].includes(node.id))
    return nodes.filter((node) => (
      node.name.toLowerCase().includes(needle)
      || node.commonName?.toLowerCase().includes(needle)
      || node.commonNameZh?.toLowerCase().includes(needle)
      || getTaxonProfile(node.id)?.commonNameZh.includes(needle)
    )).slice(0, 8)
  }, [nodes, query])

  useEffect(() => {
    const params = initialRoute.params
    const age = getFiniteRouteNumber(params, 'age')
    if (age !== null) setTime(age)

    const lat = getFiniteRouteNumber(params, 'lat')
    const lng = getFiniteRouteNumber(params, 'lng')
    const zoom = getFiniteRouteNumber(params, 'zoom')
    if (lat !== null && lng !== null && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      setViewState({ center: [lat, lng] })
    }
    if (zoom !== null && zoom >= MIN_MAP_ZOOM && zoom <= MAX_MAP_ZOOM) setViewState({ zoom })

    const requestedMarkerMode = params.get('markers') as FossilMarkerMode | null
    if (requestedMarkerMode && MARKER_MODES.has(requestedMarkerMode)) setMarkerMode(requestedMarkerMode)
    const requestedCoordinateMode = params.get('coords') as CoordinateMode | null
    if (requestedCoordinateMode && COORDINATE_MODES.has(requestedCoordinateMode)) setCoordinateMode(requestedCoordinateMode)
    const requestedTreeMode = params.get('treeMode') as TreeDisplayMode | null
    if (requestedTreeMode && TREE_MODES.has(requestedTreeMode)) setTreeMode(requestedTreeMode)
    const taxon = params.get('taxon')
    if (taxon) {
      const node = nodes.find((candidate) => candidate.id === taxon)
      if (node) {
        void selectSubject({ nodeId: node.id, taxonId: node.taxonId })
      }
    }
    if (profileContext?.pbdbTaxonId) {
      void selectSubject({ nodeId: profileContext.treeNodeId ?? null, taxonId: profileContext.pbdbTaxonId })
    }
    // Initial URL hydration only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (currentPeriod) void loadOccurrencesForInterval(currentPeriod)
  }, [currentPeriod, loadOccurrencesForInterval])

  useEffect(() => {
    if (selectedNodeId) void loadPackageForEntity(selectedNodeId).catch(() => undefined)
  }, [selectedNodeId])

  useEffect(() => {
    const requestedId = initialRoute.params.get('occurrence')
    if (!requestedId || selectedOccurrence?.oid === requestedId) return
    const availableRecords = [
      ...Object.values(occurrencesByInterval).flat(),
      ...Object.values(occurrencesByTaxonQuery).flat(),
    ]
    const match = availableRecords.find((record) => record.oid === requestedId)
    if (match) selectFossilOccurrence(match)
  }, [initialRoute.params, occurrencesByInterval, occurrencesByTaxonQuery, selectFossilOccurrence, selectedOccurrence?.oid])

  useEffect(() => {
    if (!datasetAccepted) return
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
      markers: markerMode,
      coords: coordinateMode,
      treeMode,
      occurrence: selectedOccurrence?.oid,
    })
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`)
  }, [context, coordinateMode, currentAge, dashboard, datasetAccepted, markerMode, selectedNodeId, selectedOccurrence?.oid, treeMode, view, viewState])

  const chooseNode = (node: FlatNode) => {
    void selectSubject({ nodeId: node.id, taxonId: node.taxonId })
    const midpoint = (node.firstAppearance + node.lastAppearance) / 2
    if (Number.isFinite(midpoint)) setTime(midpoint)
    setMobilePanel(null)
  }

  const shareState = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareStatus('copied')
    } catch {
      setShareStatus('ready')
    }
    window.setTimeout(() => setShareStatus('idle'), 1600)
  }

  const dismissGuide = () => {
    setGuideMode('hidden')
    setMobilePanel(null)
    if (dashboard) setDetailsOpen(false)
    try { window.localStorage.setItem('evo-explorer-guide-v2', 'dismissed') } catch { /* Guide can still close for this session. */ }
  }

  const openPreset = (preset: (typeof DASHBOARD_PRESETS)[number]) => {
    setTime(preset.age)
    setView(preset.view)
    if (preset.taxonId) {
      const node = nodes.find((candidate) => candidate.id === preset.taxonId)
      if (node) void selectSubject({ nodeId: node.id, taxonId: node.taxonId })
    }
  }

  const showTutorialStep = (nextStep: number) => {
    const boundedStep = Math.min(Math.max(nextStep, 0), TUTORIAL_STEPS.length - 1)
    const step = TUTORIAL_STEPS[boundedStep]
    setGuideStep(boundedStep)
    setMobilePanel(null)

    if (step.id === 'presets') {
      if (dashboard) setDetailsOpen(false)
      openPreset(DASHBOARD_PRESETS[1])
    } else if (step.id === 'time') {
      setTime(66)
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

  return (
    <main className={`explorer-workspace${dashboard ? ' explorer-workspace--dashboard' : ''}${detailsOpen ? ' is-details-open' : ''}`}>
      {datasetMismatch && !datasetAccepted && (
        <section className="dataset-mismatch" role="alertdialog" aria-modal="true" aria-labelledby="dataset-mismatch-title">
          <div>
            <span>{t('Dataset version mismatch')}</span>
            <h2 id="dataset-mismatch-title">{t('This shared link targets a different data snapshot.')}</h2>
            <p>{t('Requested {requested}; this deployment provides {current}. Continuing may change scientific results.', datasetMismatch)}</p>
            <div>
              <a href="#/home">{t('Leave Explorer')}</a>
              <button autoFocus onClick={() => setDatasetAccepted(true)}>{t('Use current dataset')}</button>
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
        <div className="dataset-status" role="status">
          <span>{t('Dataset')}</span>
          <strong>{manifest.datasetVersion}</strong>
          <small>{t(datasetMismatch ? 'Mismatch acknowledged; using the current snapshot.' : requestedDataset ? 'Shared snapshot matches this deployment.' : 'Current deployment snapshot.')}</small>
        </div>
      </aside>}

      {mobilePanel && <button className="explorer-panel-backdrop" aria-label={t('Close Explorer panel')} onClick={() => setMobilePanel(null)} />}

      <section className="explorer-stage">
        {guideMode === 'choice' && (
          <section className="dashboard-welcome" role="dialog" aria-modal="true" aria-labelledby="dashboard-welcome-title">
            <div>
              <span>{t('Evo Atlas dashboard')}</span>
              <h1 id="dashboard-welcome-title">{t('Start with the dashboard or take the quick tour?')}</h1>
              <p>{t('The map, tree, fossil sample and geological timeline share one time context. Detailed research tools stay folded until you ask for them.')}</p>
              <div>
                <button className="dashboard-welcome__primary" autoFocus onClick={startTutorial}>{t('Take the 3-minute tour')}</button>
                <button onClick={dismissGuide}>{t('Use the dashboard now')}</button>
              </div>
            </div>
          </section>
        )}
        {guideMode === 'tour' && (
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
            <button aria-expanded={mobilePanel === 'navigator'} onClick={() => setMobilePanel((panel) => panel === 'navigator' ? null : 'navigator')}>{t('Taxa & time')}</button>
            <button aria-expanded={mobilePanel === 'inspector'} onClick={() => setMobilePanel((panel) => panel === 'inspector' ? null : 'inspector')}>{t('Evidence')}</button>
          </div>
          <div className="stage-actions">
            <button className="stage-tutorial-trigger" onClick={dashboard ? () => setGuideMode('choice') : startTutorial}>{t('Tutorial')}</button>
            {dashboard && <button className="stage-details-trigger" aria-expanded={detailsOpen} onClick={() => setDetailsOpen((open) => !open)}>{t(detailsOpen ? 'Fold detailed tools' : 'Open detailed tools')}</button>}
            <div className="stage-metric">
              <strong>{number(periodOccurrences?.length ?? 0)}</strong>
              <span>{t('visible records')}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-stage-body">
          {dashboard && !detailsOpen && (
            <aside className="dashboard-presets" aria-label={t('Preset scenes')}>
              <div><span>{t('Preset scenes')}</span><small>{t('Choose a starting point')}</small></div>
              {DASHBOARD_PRESETS.map((preset) => (
                <button key={preset.id} onClick={() => openPreset(preset)}>
                  <span>{preset.age.toFixed(1)} <small>Ma</small></span>
                  <strong>{t(preset.title)}</strong>
                  <p>{t(preset.description)}</p>
                  <i>→</i>
                </button>
              ))}
            </aside>
          )}
          <div className="stage-canvas">
            <Suspense fallback={<ModuleLoading />}>
              {view === 'map' ? (
                <ErrorBoundary fallback={<ViewFallback label="Map" />}><PaleoMap /></ErrorBoundary>
              ) : view === 'tree' ? (
                <ErrorBoundary fallback={<ViewFallback label="Tree" />}><EvoTree /></ErrorBoundary>
              ) : (
                <ErrorBoundary fallback={<ViewFallback label="Diversity view" />}><DiversityView /></ErrorBoundary>
              )}
            </Suspense>
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
          {(profileContext || eventContext) && (
            <div className="context-inspector-card">
              <span>{t(profileContext ? 'Curated taxon profile' : 'Curated event')}</span>
              <h2>{profileContext?.scientificName ?? (language === 'zh' ? eventContext?.titleZh : eventContext?.title)}</h2>
              <p>{t(profileContext?.evidenceSummary ?? eventContext?.summary ?? '')}</p>
              <a href={profileContext ? `#/taxa?id=${profileContext.id}` : `#/events?id=${eventContext?.id}`}>
                {t('Open full evidence page →')}
              </a>
            </div>
          )}
          {selectedPublication && <EvidenceStatus publication={selectedPublication} entityId={profileContext?.id ?? selectedNodeId ?? undefined} compact />}
          <ErrorBoundary fallback={<ViewFallback label="Inspector" />}><SpeciesDetail /></ErrorBoundary>
        </div>
      </aside>}

      <section className="explorer-timeline">
        <ErrorBoundary fallback={<ViewFallback label="Timeline" />}><GeoTimeline /></ErrorBoundary>
      </section>
    </main>
  )
}
