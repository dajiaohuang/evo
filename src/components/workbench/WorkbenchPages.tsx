import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { getEvolutionEvent, getTaxonProfile, taxonProfiles } from '../../services/catalog'
import {
  downloadQueryPackage,
  diffLabQueries,
  LabQueryError,
  runLabQuery,
  type LabQuery,
  type LabResult,
} from '../../services/lab'
import { FOSSIL_PERIODS } from '../../services/localFossils'
import { useAppStore } from '../../store'
import type { FossilOccurrence } from '../../types'
import { getSpatialPosition, type CoordinateMode } from '../../utils/spatial'
import type { AppRoute } from '../../utils/routing'
import { listSavedLabQueries, saveLabQuery, type SavedLabQuery } from '../../services/workspaceDb'
import { parseUserDataset, type UserDataPreview } from '../../services/userData'
import './WorkbenchPages.css'
import { useI18n } from '../../i18n'
import manifest from '../../../data/manifest.json'
import { LocalResearchWorkspace } from './LocalResearchWorkspace'
import { DatasetVersionComparison } from './DatasetVersionComparison'

interface WorkbenchProps {
  params: URLSearchParams
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

type LabView = 'table' | 'periods' | 'ranges' | 'latitude' | 'map'
type ExportStatus = 'idle' | 'exporting' | 'ready' | 'failed'

const defaultQuery: LabQuery = {
  periods: ['Cretaceous'],
  taxon: '',
  country: '',
  formation: '',
  collection: '',
  olderMa: null,
  youngerMa: null,
  limit: 1000,
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`
}

function labErrorMessage(error: unknown, t: (key: string, values?: Record<string, string | number>) => string): string {
  if (!(error instanceof LabQueryError)) return t('Query failed')
  switch (error.code) {
    case 'OLDER_BOUND_OUT_OF_RANGE': return t('Older bound must be between 0 and {max} Ma.', error.details)
    case 'YOUNGER_BOUND_OUT_OF_RANGE': return t('Younger bound must be between 0 and {max} Ma.', error.details)
    case 'AGE_BOUNDS_REVERSED': return t('Older bound must be greater than or equal to younger bound.')
    case 'UNKNOWN_PERIOD': return t('Unknown geological period: {period}', error.details)
    case 'RESULT_LIMIT_OUT_OF_RANGE': return t('Result limit must be between 1 and {max} rows.', error.details)
  }
}

function ResultMap({ records, coordinateMode }: { records: FossilOccurrence[]; coordinateMode: CoordinateMode }) {
  const { t } = useI18n()
  const points = records.flatMap((record) => {
    const position = getSpatialPosition(record, coordinateMode)
    if (position.mode !== coordinateMode) return []
    return [{ id: record.oid, name: record.tna || record.idn || t('Unresolved identification'), x: ((position.lng + 180) / 360) * 100, y: ((90 - position.lat) / 180) * 100 }]
  }).slice(0, 1000)

  return (
    <div className="lab-result-map" aria-label={t('Map of {count} occurrence coordinates', { count: points.length })}>
      <div className="map-grid-lines" />
      {points.map((point) => (
        <span key={point.id} style={{ left: `${point.x}%`, top: `${point.y}%` }} title={point.name} />
      ))}
      <small>{t('Plate Carrée preview · {mode} coordinates only · max 1,000 rendered points', { mode: t(coordinateMode) })}</small>
    </div>
  )
}

function ResultChart({ result }: { result: LabResult }) {
  const { language, number, t } = useI18n()
  const max = Math.max(1, ...result.countsByPeriod.map((item) => item.count))
  return (
    <div className="lab-chart">
      <div className="lab-bars">
        {result.countsByPeriod.map((item) => (
          <div key={item.period}>
            <span>{number(item.count)}</span>
            <i style={{ height: `${Math.max(2, item.count / max * 100)}%` }} />
            <small>{language === 'zh' ? t(item.period) : item.period.slice(0, 3)}</small>
          </div>
        ))}
      </div>
      <aside>
        <span>{t('Most observed taxa')}</span>
        {result.topTaxa.slice(0, 8).map((item) => (
          <div key={item.taxon}><strong>{item.taxon}</strong><small>{item.count}</small></div>
        ))}
      </aside>
    </div>
  )
}

function RangeThroughChart({ records }: { records: FossilOccurrence[] }) {
  const { t } = useI18n()
  const ranges = [...records.reduce((map, record) => {
    const name = record.tna || record.idn || t('Unresolved identification')
    const current = map.get(name)
    map.set(name, current
      ? { name, first: Math.max(current.first, record.eag), last: Math.min(current.last, record.lag), count: current.count + 1 }
      : { name, first: record.eag, last: record.lag, count: 1 })
    return map
  }, new Map<string, { name: string; first: number; last: number; count: number }>()).values()]
    .sort((a, b) => b.count - a.count || b.first - a.first)
    .slice(0, 24)
  const oldest = Math.max(1, ...ranges.map((range) => range.first))

  return (
    <div className="range-through-chart">
      <header><div><span>{t('Range-through display')}</span><strong>{t('Sampled FAD—LAD by accepted name')}</strong></div><small>{t('{age} Ma → present', { age: oldest.toFixed(1) })}</small></header>
      {ranges.map((range) => (
        <div className="range-through-row" key={range.name}>
          <span title={range.name}>{range.name || t('Unresolved accepted name')}</span>
          <i><b style={{ left: `${(oldest - range.first) / oldest * 100}%`, width: `${Math.max(0.5, (range.first - range.last) / oldest * 100)}%` }} /></i>
          <small>{range.first.toFixed(1)}—{range.last.toFixed(1)}</small>
        </div>
      ))}
      <p>{t('Endpoints are observed in the returned sample and are not exact origination or extinction dates.')}</p>
    </div>
  )
}

function LatitudeChart({ records, coordinateMode }: { records: FossilOccurrence[]; coordinateMode: CoordinateMode }) {
  const { t } = useI18n()
  const bins = Array.from({ length: 18 }, (_, index) => ({ lower: -90 + index * 10, count: 0 }))
  for (const record of records) {
    const position = getSpatialPosition(record, coordinateMode)
    if (position.mode !== coordinateMode) continue
    const index = Math.min(17, Math.max(0, Math.floor((position.lat + 90) / 10)))
    bins[index].count += 1
  }
  const max = Math.max(1, ...bins.map((bin) => bin.count))
  return (
    <div className="latitude-chart">
      <header><span>{t('{label} distribution', { label: t(coordinateMode === 'paleo' ? 'Paleolatitude' : 'Modern locality latitude') })}</span><strong>{t('10° occurrence bins')}</strong></header>
      <div className="latitude-bars">
        {bins.map((bin) => <div key={bin.lower}><span>{bin.count}</span><i style={{ height: `${Math.max(2, bin.count / max * 100)}%` }} /><small>{bin.lower}°</small></div>)}
      </div>
      <p>{t('Only paired {mode} coordinates are included; missing values are not filled from the other coordinate system.', { mode: t(coordinateMode) })}</p>
    </div>
  )
}

function ResultTable({ records, coordinateMode }: { records: FossilOccurrence[]; coordinateMode: CoordinateMode }) {
  const { number, t } = useI18n()
  return (
    <div className="lab-table-wrap">
      <table className="lab-table">
        <thead><tr><th>{t('Accepted name')}</th><th>{t('Age Range')}</th><th>{t('Country')}</th><th>{t('Coordinates')}</th><th>{t('Occurrence')}</th></tr></thead>
        <tbody>
          {records.slice(0, 250).map((record) => {
            const position = getSpatialPosition(record, coordinateMode)
            return (
            <tr key={record.oid}>
              <td><strong><em>{record.tna || record.idn || t('Unresolved identification')}</em></strong><small>{record.tna && record.idn ? record.idn : '—'}</small></td>
              <td>{record.eag?.toFixed(1)}—{record.lag?.toFixed(1)} Ma</td>
              <td>{record.cc2 || '—'}</td>
              <td>{position.mode === coordinateMode ? `${position.lng.toFixed(1)}, ${position.lat.toFixed(1)} ${t(coordinateMode)}` : t('No {mode} pair', { mode: t(coordinateMode) })}</td>
              <td>{record.oid}</td>
            </tr>
          )})}
        </tbody>
      </table>
      {records.length > 250 && <p className="table-limit-note">{t('Showing 250 of {count} returned rows. The export contains every returned row.', { count: number(records.length) })}</p>}
    </div>
  )
}

export function LabPage({ params }: WorkbenchProps) {
  const { language, number, t } = useI18n()
  const [query, setQuery] = useState<LabQuery>(() => ({
    ...defaultQuery,
    taxon: params.get('taxon') ?? '',
    country: params.get('country') ?? '',
    formation: params.get('formation') ?? '',
    collection: params.get('collection') ?? '',
  }))
  const [result, setResult] = useState<LabResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<LabView>('table')
  const [coordinateMode, setCoordinateMode] = useState<CoordinateMode>('paleo')
  const [queryHistory, setQueryHistory] = useState<SavedLabQuery[]>([])
  const [exportStatus, setExportStatus] = useState<ExportStatus>('idle')
  const [userData, setUserData] = useState<UserDataPreview | null>(null)
  const [userDataError, setUserDataError] = useState<string | null>(null)

  useEffect(() => {
    void listSavedLabQueries().then(setQueryHistory).catch(() => setQueryHistory([]))
  }, [])

  const execute = async (event?: FormEvent) => {
    event?.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const nextResult = await runLabQuery(query)
      setResult(nextResult)
      try {
        await saveLabQuery(query, nextResult.stats.totalMatched)
        setQueryHistory(await listSavedLabQueries())
      } catch {
        // Query results remain usable if private-mode storage is unavailable.
      }
    } catch (caught) {
      setError(labErrorMessage(caught, t))
    } finally {
      setLoading(false)
    }
  }

  const exportPackage = async () => {
    if (!result || exportStatus === 'exporting') return
    setExportStatus('exporting')
    try {
      await downloadQueryPackage(result)
      setExportStatus('ready')
    } catch {
      setExportStatus('failed')
    }
  }

  const togglePeriod = (period: string) => {
    setQuery((current) => ({
      ...current,
      periods: current.periods.includes(period)
        ? current.periods.filter((item) => item !== period)
        : [...current.periods, period],
    }))
  }

  const importUserFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setUserDataError(null)
    try {
      setUserData(await parseUserDataset(file))
    } catch (caught) {
      setUserData(null)
      setUserDataError(caught instanceof Error ? caught.message : t('Import failed'))
    } finally {
      event.target.value = ''
    }
  }

  return (
    <main className="workbench-page lab-page">
      <header className="workbench-hero">
        <span className="section-label">{t('Data lab / browser query engine')}</span>
        <h1>{t('Ask a bounded question of the fossil record.')}</h1>
        <p>{t('Build a reproducible query against 13,600 bounded, non-random PBDB API-prefix rows. Filtering and export happen locally in your browser.')}</p>
      </header>

      <DatasetVersionComparison />

      <div className="lab-layout">
        <form className="query-builder" onSubmit={execute}>
          <div className="query-builder__heading"><span>{t('Query definition')}</span><small>{t('Static snapshot')}</small></div>

          <label className="query-field">
            <span>{t('Name text contains')}</span>
            <input value={query.taxon} onChange={(event) => setQuery({ ...query, taxon: event.target.value })} placeholder={t('e.g. Hipparion')} />
          </label>

          <label className="query-field">
            <span>{t('Country code')}</span>
            <input value={query.country} onChange={(event) => setQuery({ ...query, country: event.target.value.toUpperCase().slice(0, 2) })} placeholder={t('e.g. CN')} maxLength={2} />
          </label>

          <label className="query-field">
            <span>{t('Formation or member contains')}</span>
            <input value={query.formation ?? ''} onChange={(event) => setQuery({ ...query, formation: event.target.value })} placeholder={t('e.g. Hell Creek')} />
          </label>

          <label className="query-field">
            <span>{t('Collection or locality ID contains')}</span>
            <input value={query.collection ?? ''} onChange={(event) => setQuery({ ...query, collection: event.target.value })} placeholder={t('e.g. col:')} />
          </label>

          <div className="query-field">
            <div className="query-label-row"><span>{t('Geological periods')}</span><button type="button" onClick={() => setQuery({ ...query, periods: query.periods.length === FOSSIL_PERIODS.length ? [] : [...FOSSIL_PERIODS] })}>{t(query.periods.length === FOSSIL_PERIODS.length ? 'Clear' : 'All')}</button></div>
            <div className="period-checks">
              {FOSSIL_PERIODS.map((period) => (
                <button type="button" key={period} className={query.periods.includes(period) ? 'is-selected' : ''} onClick={() => togglePeriod(period)}>{language === 'zh' ? t(period) : period.slice(0, 3)}</button>
              ))}
            </div>
            <small>{t('No selected period means all periods.')}</small>
          </div>

          <div className="query-field query-field--split">
            <label><span>{t('Older bound (Ma)')}</span><input type="number" min="0" max="4567" step="0.01" value={query.olderMa ?? ''} onChange={(event) => setQuery({ ...query, olderMa: event.target.value ? Number(event.target.value) : null })} /></label>
            <label><span>{t('Younger bound (Ma)')}</span><input type="number" min="0" max="4567" step="0.01" value={query.youngerMa ?? ''} onChange={(event) => setQuery({ ...query, youngerMa: event.target.value ? Number(event.target.value) : null })} /></label>
          </div>

          <label className="query-field">
            <span>{t('Maximum returned rows')}</span>
            <select value={query.limit} onChange={(event) => setQuery({ ...query, limit: Number(event.target.value) })}>
              <option value={250}>250</option><option value={1000}>1,000</option><option value={2500}>2,500</option><option value={5000}>5,000</option>
            </select>
          </label>

          <button className="run-query" type="submit" disabled={loading}>{t(loading ? 'Querying local chunks…' : 'Run query →')}</button>
          <p className="query-method-note">{t('Age filtering uses range intersection. This field is a name-text filter, not a descendant-inclusive classification query.')}</p>
          <div className="query-history">
            <div><span>{t('Local workspace')}</span><small>{t('IndexedDB · latest {count}', { count: queryHistory.length })}</small></div>
            {queryHistory.slice(0, 4).map((saved) => (
              <button type="button" key={saved.id} onClick={() => setQuery(saved.query)}>
                <span>{saved.query.taxon || saved.query.formation || saved.query.collection || saved.query.country || saved.query.periods.map((period) => t(period)).join(', ') || t('All occurrences')}</span>
                <small>{saved.datasetVersion === manifest.datasetVersion ? number(saved.matched) : t('rerun required')} · {new Date(saved.savedAt).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}</small>
              </button>
            ))}
            {queryHistory.length >= 2 && (
              <details className="query-diff">
                <summary>{t('Compare the two latest queries')}</summary>
                {diffLabQueries(queryHistory[1].query, queryHistory[0].query).map((change) => (
                  <p key={change.field}><strong>{change.field}</strong><span>{JSON.stringify(change.left)} → {JSON.stringify(change.right)}</span></p>
                ))}
              </details>
            )}
            {queryHistory.length === 0 && <p>{t('Completed queries will be saved only in this browser.')}</p>}
          </div>
          <div className="local-import">
            <div><span>{t('Local user data')}</span><small>{t('Never uploaded')}</small></div>
            <label><input type="file" accept=".csv,.json,.geojson,text/csv,application/json,application/geo+json" onChange={(event) => void importUserFile(event)} /><span>{t('Import CSV, JSON or GeoJSON')}</span></label>
            {userDataError && <p role="alert">{userDataError}</p>}
            {userData && (
              <section>
                <strong>{t('{count} local records validated', { count: number(userData.recordCount) })}</strong>
                <span>{t('{matched} atlas entities matched · {fields} fields', { matched: number(userData.matchedEntityIds.length), fields: number(userData.fields.length) })}</span>
                {userData.unmatchedNames.length > 0 && <small>{t('Unmatched names')}: {userData.unmatchedNames.slice(0, 4).join(', ')}</small>}
                {userData.issues.map((issue) => <small key={issue}>{issue}</small>)}
              </section>
            )}
          </div>
        </form>

        <section className="lab-results">
          <div className="lab-results__toolbar">
            <div>
              <span>{t('Result workspace')}</span>
              <strong>{result ? t('{count} matched', { count: number(result.stats.totalMatched) }) : t('No query run')}</strong>
            </div>
            <div className="lab-view-switcher">
              {(['table', 'periods', 'ranges', 'latitude', 'map'] as LabView[]).map((item) => <button key={item} className={view === item ? 'is-active' : ''} onClick={() => setView(item)} disabled={!result}>{t(item)}</button>)}
            </div>
            <div className="lab-view-switcher" role="group" aria-label={t('Coordinate mode')}>
              {(['paleo', 'modern'] as CoordinateMode[]).map((mode) => <button key={mode} className={coordinateMode === mode ? 'is-active' : ''} onClick={() => setCoordinateMode(mode)}>{t(mode)}</button>)}
            </div>
            <button className="export-package" disabled={!result || exportStatus === 'exporting'} onClick={() => void exportPackage()}>{t(exportStatus === 'exporting' ? 'Exporting…' : exportStatus === 'ready' ? 'Export ready' : exportStatus === 'failed' ? 'Retry export' : 'Export package .zip')}</button>
          </div>

          {exportStatus === 'ready' && <div className="lab-export-status" role="status">{t('Export ready')}</div>}
          {exportStatus === 'failed' && <div className="lab-error" role="alert">{t('Export failed')}</div>}
          {error && <div className="lab-error" role="alert">{error}</div>}
          {!result && !error && <div className="lab-empty"><span>{t('SQL-like filtering without a server')}</span><h2>{t('Define a query, then inspect the evidence.')}</h2><p>{t('Results can be explored as rows, period counts or reconstructed-coordinate points.')}</p></div>}
          {result && (
            <>
              <div className="lab-stats">
                <div><strong>{number(result.stats.returned)}</strong><span>{t('returned')}</span></div>
                <div><strong>{number(result.stats.uniqueTaxa)}</strong><span>{t('taxa')}</span></div>
                <div><strong>{number(result.stats.countries)}</strong><span>{t('countries')}</span></div>
                <div><strong>{formatPercent(coordinateMode === 'paleo' ? result.stats.paleoCoordinateCoverage : result.stats.modernCoordinateCoverage)}</strong><span>{t('{mode} coords', { mode: t(coordinateMode) })}</span></div>
              </div>
              <div className="lab-result-canvas">
                {view === 'table' && <ResultTable records={result.records} coordinateMode={coordinateMode} />}
                {view === 'periods' && <ResultChart result={result} />}
                {view === 'ranges' && <RangeThroughChart records={result.records} />}
                {view === 'latitude' && <LatitudeChart records={result.records} coordinateMode={coordinateMode} />}
                {view === 'map' && <ResultMap records={result.records} coordinateMode={coordinateMode} />}
              </div>
              <div className="reproducibility-strip"><span>{t('Export contains')}</span><strong>query.json · CSV / JSON / GeoJSON · chart.svg · citations JSON / BibTeX · methods.md · dataset manifest · checksums.txt</strong></div>
              <LocalResearchWorkspace result={result} query={query} userData={userData} onRestoreQuery={setQuery} />
            </>
          )}
        </section>
      </div>
    </main>
  )
}

type CompareMode = 'taxa' | 'time' | 'geography' | 'hypotheses'

function CompareStats({ left, right, leftLabel, rightLabel }: { left: LabResult | null; right: LabResult | null; leftLabel: string; rightLabel: string }) {
  const { number, t } = useI18n()
  if (!left || !right) return <div className="compare-empty">{t('Run the comparison to load both bounded result sets.')}</div>
  const rows = [
    ['Bundled rows matching filters', number(left.stats.totalMatched), number(right.stats.totalMatched)],
    ['Observed taxon concepts', number(left.stats.uniqueTaxa), number(right.stats.uniqueTaxa)],
    ['Country codes represented', number(left.stats.countries), number(right.stats.countries)],
    ['Paleo-coordinate coverage', formatPercent(left.stats.paleoCoordinateCoverage), formatPercent(right.stats.paleoCoordinateCoverage)],
  ]
  return (
    <div className="comparison-table">
      <div className="comparison-row comparison-row--head"><span>{t('Metric')}</span><strong>{leftLabel}</strong><strong>{rightLabel}</strong></div>
      {rows.map(([label, a, b]) => <div className="comparison-row" key={label}><span>{t(label)}</span><strong>{a}</strong><strong>{b}</strong></div>)}
    </div>
  )
}

export function ComparePage({ params, onNavigate }: WorkbenchProps) {
  const { language, number, t } = useI18n()
  const initialEvent = getEvolutionEvent(params.get('event'))
  const [mode, setMode] = useState<CompareMode>(params.get('left') ? 'taxa' : initialEvent ? 'time' : 'taxa')
  const [leftTaxon, setLeftTaxon] = useState(params.get('left') ?? 'metamynodon')
  const [rightTaxon, setRightTaxon] = useState('teleoceras')
  const [olderA, setOlderA] = useState(initialEvent ? initialEvent.startAge + 5 : 40)
  const [youngerA, setYoungerA] = useState(initialEvent ? initialEvent.startAge : 30)
  const [olderB, setOlderB] = useState(initialEvent ? initialEvent.endAge : 20)
  const [youngerB, setYoungerB] = useState(initialEvent ? Math.max(0, initialEvent.endAge - 5) : 10)
  const [countryA, setCountryA] = useState('CN')
  const [countryB, setCountryB] = useState('US')
  const [leftResult, setLeftResult] = useState<LabResult | null>(null)
  const [rightResult, setRightResult] = useState<LabResult | null>(null)
  const [loading, setLoading] = useState(false)
  const occurrencesByTaxonQuery = useAppStore((state) => state.occurrencesByTaxonQuery)
  const loadOccurrences = useAppStore((state) => state.loadOccurrencesForEntity)
  const leftProfile = getTaxonProfile(leftTaxon) ?? taxonProfiles[0]
  const rightProfile = getTaxonProfile(rightTaxon) ?? taxonProfiles[1]
  const timeWindowsValid = olderA >= youngerA && olderB >= youngerB

  useEffect(() => {
    if (mode !== 'taxa') return
    void loadOccurrences(leftProfile.id)
    void loadOccurrences(rightProfile.id)
  }, [leftProfile.id, loadOccurrences, mode, rightProfile.id])

  const runComparison = async () => {
    setLoading(true)
    try {
      const common = { periods: [] as string[], taxon: '', country: '', olderMa: null, youngerMa: null, limit: 5000 }
      const [left, right] = mode === 'time'
        ? await Promise.all([
          runLabQuery({ ...common, olderMa: olderA, youngerMa: youngerA }),
          runLabQuery({ ...common, olderMa: olderB, youngerMa: youngerB }),
        ])
        : await Promise.all([
          runLabQuery({ ...common, country: countryA }),
          runLabQuery({ ...common, country: countryB }),
        ])
      setLeftResult(left)
      setRightResult(right)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="workbench-page compare-page">
      <header className="workbench-hero compare-hero">
        <span className="section-label">{t('Compare / bounded evidence')}</span>
        <h1>{t('Difference needs a shared frame.')}</h1>
        <p>{t('Compare taxa, time windows, regions or model assumptions while keeping definitions and evidence limits visible.')}</p>
      </header>

      <div className="compare-mode-tabs">
        {(['taxa', 'time', 'geography', 'hypotheses'] as CompareMode[]).map((item) => <button key={item} className={mode === item ? 'is-active' : ''} onClick={() => { setMode(item); setLeftResult(null); setRightResult(null) }}>{t(item)}</button>)}
      </div>

      {mode === 'taxa' && (
        <section className="taxa-compare">
          <div className="compare-selectors">
            <label><span>{t('Taxon A')}</span><select value={leftTaxon} onChange={(event) => setLeftTaxon(event.target.value)}>{taxonProfiles.map((profile) => <option key={profile.id} value={profile.id}>{language === 'zh' ? profile.commonNameZh : profile.commonName} · {profile.scientificName}</option>)}</select></label>
            <span className="versus">VS</span>
            <label><span>{t('Taxon B')}</span><select value={rightTaxon} onChange={(event) => setRightTaxon(event.target.value)}>{taxonProfiles.map((profile) => <option key={profile.id} value={profile.id}>{language === 'zh' ? profile.commonNameZh : profile.commonName} · {profile.scientificName}</option>)}</select></label>
          </div>
          <div className="taxa-compare-grid">
            {[leftProfile, rightProfile].map((profile) => {
              const count = occurrencesByTaxonQuery[`descendants:${profile.id}`]?.length
              return <article key={profile.id}><span>{language === 'zh' ? profile.commonNameZh : profile.commonName}</span><h2><em>{profile.scientificName}</em></h2><p>{t(profile.overview)}</p><dl><div><dt>{t('Range')}</dt><dd>{profile.firstAppearance}—{profile.lastAppearance || t('Present')} Ma</dd></div><div><dt>{t('Guild')}</dt><dd>{t(profile.ecology.guild)}</dd></div><div><dt>{t('Body size')}</dt><dd>{t(profile.ecology.bodySize)}</dd></div><div><dt>{t('Bundled descendant rows')}</dt><dd>{count == null ? t('Loading…') : number(count)}</dd></div><div><dt>{t('Profile confidence')}</dt><dd>{t(profile.confidence)}</dd></div></dl><button onClick={() => onNavigate('taxa', { id: profile.id })}>{t('Open evidence page →')}</button></article>
            })}
          </div>
        </section>
      )}

      {(mode === 'time' || mode === 'geography') && (
        <section className="bounded-compare">
          {initialEvent && mode === 'time' && <div className="compare-event-context"><span>{t('Event context')}</span><strong>{language === 'zh' ? initialEvent.titleZh : initialEvent.title}</strong></div>}
          <div className="compare-input-grid">
            {mode === 'time' ? (
              <>
                <div><span>{t('Window A')}</span><label>{t('Older')}<input type="number" value={olderA} onChange={(event) => setOlderA(Number(event.target.value))} /></label><label>{t('Younger')}<input type="number" value={youngerA} onChange={(event) => setYoungerA(Number(event.target.value))} /></label></div>
                <div><span>{t('Window B')}</span><label>{t('Older')}<input type="number" value={olderB} onChange={(event) => setOlderB(Number(event.target.value))} /></label><label>{t('Younger')}<input type="number" value={youngerB} onChange={(event) => setYoungerB(Number(event.target.value))} /></label></div>
              </>
            ) : (
              <>
                <label><span>{t('Region A · ISO country')}</span><input value={countryA} maxLength={2} onChange={(event) => setCountryA(event.target.value.toUpperCase())} /></label>
                <label><span>{t('Region B · ISO country')}</span><input value={countryB} maxLength={2} onChange={(event) => setCountryB(event.target.value.toUpperCase())} /></label>
              </>
            )}
          </div>
          {mode === 'time' && !timeWindowsValid && <p className="lab-error" role="alert">{t('Older bounds must be greater than or equal to younger bounds.')}</p>}
          <button className="run-comparison" onClick={runComparison} disabled={loading || (mode === 'time' && !timeWindowsValid)}>{t(loading ? 'Loading all period chunks…' : 'Run bounded comparison')}</button>
          <CompareStats left={leftResult} right={rightResult} leftLabel={mode === 'time' ? `${olderA}–${youngerA} Ma` : countryA} rightLabel={mode === 'time' ? `${olderB}–${youngerB} Ma` : countryB} />
        </section>
      )}

      {mode === 'hypotheses' && (
        <section className="hypothesis-grid">
          <article><span>{t('Tree representation')}</span><div><h2>{t('Cladogram')}</h2><p>{t('Branch length carries no time meaning. Best for topology and navigation.')}</p></div><div><h2>{t('First-appearance proxy')}</h2><p>{t('Node positions use fossil observations, not calibrated divergence estimates.')}</p></div><footer>{t('Current atlas: topology, first-appearance proxy and fossil-range modes are kept distinct')}</footer></article>
          <article><span>{t('Coordinate representation')}</span><div><h2>{t('Modern discovery')}</h2><p>{t("Where the fossil locality exists on today's continents.")}</p></div><div><h2>{t('Paleocoordinate')}</h2><p>{t('Model-derived location at a chosen reconstruction age.')}</p></div><footer>{t('Current atlas: both fields are preserved and selected explicitly; neither fills gaps in the other')}</footer></article>
          <article><span>{t('Ecological interpretation')}</span><div><h2>{t('Observed occurrence')}</h2><p>{t('A database record linked to a collection and identification.')}</p></div><div><h2>{t('Inferred absence')}</h2><p>{t('Not supported by a missing point without sampling and rock-availability controls.')}</p></div><footer>{t('Current atlas: absence is never inferred from raw occurrence density')}</footer></article>
        </section>
      )}
    </main>
  )
}
