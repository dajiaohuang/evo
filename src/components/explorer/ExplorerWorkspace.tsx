import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import treeData from '../../../data/navigation/atlas-ontology.json'
import manifest from '../../../data/manifest.json'
import { useAppStore } from '../../store'
import type { TreeDisplayMode, TreeNode } from '../../types'
import type { FossilMarkerMode } from '../../store/mapSlice'
import type { CoordinateMode } from '../../utils/spatial'
import { getEvolutionEvent, getEvolutionStory, getTaxonProfile } from '../../services/catalog'
import { periods } from '../../services/geology'
import { buildRouteHash, getFiniteRouteNumber, parseRouteHash } from '../../utils/routing'
import { MAX_MAP_ZOOM, MIN_MAP_ZOOM } from '../../constants'
import { loadPackageForEntity } from '../../data-client/staticDataClient'
import { useI18n } from '../../i18n'
import { GeoTimeline } from '../timeline/GeoTimeline'
import { SpeciesDetail } from '../details/SpeciesDetail'
import { ErrorBoundary } from '../common/ErrorBoundary'
import './ExplorerWorkspace.css'

type ExplorerView = 'map' | 'tree' | 'diversity'

const TREE_MODES = new Set<TreeDisplayMode>(['navigation', 'cladogram', 'first-appearance', 'fossil-range', 'radial'])
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

export function ExplorerWorkspace() {
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

  const currentAge = useAppStore((state) => state.currentAge)
  const currentPeriod = useAppStore((state) => state.currentPeriod)
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

  const nodes = useMemo(() => flattenTree(treeData as TreeNode), [])
  const profileContext = getTaxonProfile(context.profile)
  const eventContext = getEvolutionEvent(context.event)
  const storyContext = getEvolutionStory(context.story)
  const storyStep = storyContext?.steps.find((step) => step.id === context.step)
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
    const hash = buildRouteHash('explore', {
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
  }, [context, coordinateMode, currentAge, datasetAccepted, markerMode, selectedNodeId, selectedOccurrence?.oid, treeMode, view, viewState])

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

  const selectedPeriod = periods.find((period) => period.name === currentPeriod)

  return (
    <main className="explorer-workspace">
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
      <aside className={`explorer-nav${mobilePanel === 'navigator' ? ' is-open' : ''}`} aria-label={t('Taxon and time navigator')}>
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
          <p>{t(currentEon ?? 'Earth history')} / {t(currentEra ?? currentPeriod ?? 'Unsubdivided')}</p>
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
      </aside>

      {mobilePanel && <button className="explorer-panel-backdrop" aria-label={t('Close Explorer panel')} onClick={() => setMobilePanel(null)} />}

      <section className="explorer-stage">
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
          <div className="stage-metric">
            <strong>{number(periodOccurrences?.length ?? 0)}</strong>
            <span>{t('visible records')}</span>
          </div>
        </div>

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

        <div className="stage-note">
          <span className="status-dot" />
          {view === 'map'
            ? eventContext
              ? t('{event} · event window {start}–{end} Ma', { event: language === 'zh' ? eventContext.titleZh : eventContext.title, start: eventContext.startAge, end: eventContext.endAge })
              : context.older !== null && context.younger !== null
                ? t('Shared time window {older}–{younger} Ma · map shown at {age} Ma', { older: context.older, younger: context.younger, age: currentAge.toFixed(1) })
                : t('Continental geometry is withheld · coordinate layers never mix modern and reconstructed positions')
            : view === 'tree'
              ? t('Cladogram, first-appearance proxy and fossil-range modes expose distinct time assumptions')
              : t('Observed sample patterns · absence and record counts are not direct biological richness estimates')}
        </div>
      </section>

      <aside className={`explorer-inspector${mobilePanel === 'inspector' ? ' is-open' : ''}`} aria-label={t('Evidence inspector')}>
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
          <ErrorBoundary fallback={<ViewFallback label="Inspector" />}><SpeciesDetail /></ErrorBoundary>
        </div>
      </aside>

      <section className="explorer-timeline">
        <ErrorBoundary fallback={<ViewFallback label="Timeline" />}><GeoTimeline /></ErrorBoundary>
      </section>
    </main>
  )
}
