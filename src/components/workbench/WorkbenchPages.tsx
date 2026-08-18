import { useEffect, useState, type FormEvent } from 'react'
import { getEvolutionEvent, getTaxonProfile, taxonProfiles } from '../../services/catalog'
import {
  downloadQueryPackage,
  runLabQuery,
  type LabQuery,
  type LabResult,
} from '../../services/lab'
import { FOSSIL_PERIODS } from '../../services/localFossils'
import { useAppStore } from '../../store'
import type { FossilOccurrence } from '../../types'
import type { AppRoute } from '../../utils/routing'
import { listSavedLabQueries, saveLabQuery, type SavedLabQuery } from '../../services/workspaceDb'
import './WorkbenchPages.css'

interface WorkbenchProps {
  params: URLSearchParams
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

type LabView = 'table' | 'periods' | 'ranges' | 'latitude' | 'map'

const defaultQuery: LabQuery = {
  periods: ['Cretaceous'],
  taxon: '',
  country: '',
  olderMa: null,
  youngerMa: null,
  limit: 1000,
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`
}

function ResultMap({ records }: { records: FossilOccurrence[] }) {
  const points = records.flatMap((record) => {
    const lng = record.paleolng ?? Number(record.lng)
    const lat = record.paleolat ?? Number(record.lat)
    if (!Number.isFinite(lng) || !Number.isFinite(lat)) return []
    return [{ id: record.oid, name: record.tna, x: ((lng + 180) / 360) * 100, y: ((90 - lat) / 180) * 100 }]
  }).slice(0, 1000)

  return (
    <div className="lab-result-map" aria-label={`Map of ${points.length} occurrence coordinates`}>
      <div className="map-grid-lines" />
      {points.map((point) => (
        <span key={point.id} style={{ left: `${point.x}%`, top: `${point.y}%` }} title={point.name} />
      ))}
      <small>Plate Carrée preview · reconstructed coordinates preferred · max 1,000 rendered points</small>
    </div>
  )
}

function ResultChart({ result }: { result: LabResult }) {
  const max = Math.max(1, ...result.countsByPeriod.map((item) => item.count))
  return (
    <div className="lab-chart">
      <div className="lab-bars">
        {result.countsByPeriod.map((item) => (
          <div key={item.period}>
            <span>{item.count.toLocaleString()}</span>
            <i style={{ height: `${Math.max(2, item.count / max * 100)}%` }} />
            <small>{item.period.slice(0, 3)}</small>
          </div>
        ))}
      </div>
      <aside>
        <span>Most observed taxa</span>
        {result.topTaxa.slice(0, 8).map((item) => (
          <div key={item.taxon}><strong>{item.taxon}</strong><small>{item.count}</small></div>
        ))}
      </aside>
    </div>
  )
}

function RangeThroughChart({ records }: { records: FossilOccurrence[] }) {
  const ranges = [...records.reduce((map, record) => {
    const current = map.get(record.tna)
    map.set(record.tna, current
      ? { name: record.tna, first: Math.max(current.first, record.eag), last: Math.min(current.last, record.lag), count: current.count + 1 }
      : { name: record.tna, first: record.eag, last: record.lag, count: 1 })
    return map
  }, new Map<string, { name: string; first: number; last: number; count: number }>()).values()]
    .sort((a, b) => b.count - a.count || b.first - a.first)
    .slice(0, 24)
  const oldest = Math.max(1, ...ranges.map((range) => range.first))

  return (
    <div className="range-through-chart">
      <header><div><span>Range-through display</span><strong>Sampled FAD—LAD by accepted name</strong></div><small>{oldest.toFixed(1)} Ma → present</small></header>
      {ranges.map((range) => (
        <div className="range-through-row" key={range.name}>
          <span title={range.name}>{range.name || 'Unresolved accepted name'}</span>
          <i><b style={{ left: `${(oldest - range.first) / oldest * 100}%`, width: `${Math.max(0.5, (range.first - range.last) / oldest * 100)}%` }} /></i>
          <small>{range.first.toFixed(1)}—{range.last.toFixed(1)}</small>
        </div>
      ))}
      <p>Endpoints are observed in the returned sample and are not exact origination or extinction dates.</p>
    </div>
  )
}

function LatitudeChart({ records }: { records: FossilOccurrence[] }) {
  const bins = Array.from({ length: 18 }, (_, index) => ({ lower: -90 + index * 10, count: 0 }))
  for (const record of records) {
    const latitude = record.paleolat ?? Number(record.lat)
    if (!Number.isFinite(latitude)) continue
    const index = Math.min(17, Math.max(0, Math.floor((latitude + 90) / 10)))
    bins[index].count += 1
  }
  const max = Math.max(1, ...bins.map((bin) => bin.count))
  return (
    <div className="latitude-chart">
      <header><span>Paleolatitude distribution</span><strong>10° occurrence bins</strong></header>
      <div className="latitude-bars">
        {bins.map((bin) => <div key={bin.lower}><span>{bin.count}</span><i style={{ height: `${Math.max(2, bin.count / max * 100)}%` }} /><small>{bin.lower}°</small></div>)}
      </div>
      <p>Reconstructed latitude is preferred; records without it fall back to modern locality latitude.</p>
    </div>
  )
}

function ResultTable({ records }: { records: FossilOccurrence[] }) {
  return (
    <div className="lab-table-wrap">
      <table className="lab-table">
        <thead><tr><th>Accepted name</th><th>Age range</th><th>Country</th><th>Coordinates</th><th>Occurrence</th></tr></thead>
        <tbody>
          {records.slice(0, 250).map((record) => (
            <tr key={record.oid}>
              <td><strong><em>{record.tna}</em></strong><small>{record.idn || '—'}</small></td>
              <td>{record.eag?.toFixed(1)}—{record.lag?.toFixed(1)} Ma</td>
              <td>{record.cc2 || '—'}</td>
              <td>{record.paleolng != null ? `${record.paleolng.toFixed(1)}, ${record.paleolat?.toFixed(1)} paleo` : `${record.lng}, ${record.lat} modern`}</td>
              <td>{record.oid}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {records.length > 250 && <p className="table-limit-note">Showing 250 of {records.length.toLocaleString()} returned rows. The export contains every returned row.</p>}
    </div>
  )
}

export function LabPage({ params }: WorkbenchProps) {
  const [query, setQuery] = useState<LabQuery>(() => ({
    ...defaultQuery,
    taxon: params.get('taxon') ?? '',
    country: params.get('country') ?? '',
  }))
  const [result, setResult] = useState<LabResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<LabView>('table')
  const [queryHistory, setQueryHistory] = useState<SavedLabQuery[]>([])

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
      setError(caught instanceof Error ? caught.message : 'Query failed')
    } finally {
      setLoading(false)
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

  return (
    <main className="workbench-page lab-page">
      <header className="workbench-hero">
        <span className="section-label">Data lab / browser query engine</span>
        <h1>Ask a bounded question of the fossil record.</h1>
        <p>Build a reproducible query against 13,600 bundled PBDB occurrence samples. Filtering and export happen locally in your browser.</p>
      </header>

      <div className="lab-layout">
        <form className="query-builder" onSubmit={execute}>
          <div className="query-builder__heading"><span>Query definition</span><small>Static snapshot</small></div>

          <label className="query-field">
            <span>Taxon name contains</span>
            <input value={query.taxon} onChange={(event) => setQuery({ ...query, taxon: event.target.value })} placeholder="e.g. Hipparion" />
          </label>

          <label className="query-field">
            <span>Country code</span>
            <input value={query.country} onChange={(event) => setQuery({ ...query, country: event.target.value.toUpperCase().slice(0, 2) })} placeholder="e.g. CN" maxLength={2} />
          </label>

          <div className="query-field">
            <div className="query-label-row"><span>Geological periods</span><button type="button" onClick={() => setQuery({ ...query, periods: query.periods.length === FOSSIL_PERIODS.length ? [] : [...FOSSIL_PERIODS] })}>{query.periods.length === FOSSIL_PERIODS.length ? 'Clear' : 'All'}</button></div>
            <div className="period-checks">
              {FOSSIL_PERIODS.map((period) => (
                <button type="button" key={period} className={query.periods.includes(period) ? 'is-selected' : ''} onClick={() => togglePeriod(period)}>{period.slice(0, 3)}</button>
              ))}
            </div>
            <small>No selected period means all periods.</small>
          </div>

          <div className="query-field query-field--split">
            <label><span>Older bound (Ma)</span><input type="number" min="0" max="4567" step="0.01" value={query.olderMa ?? ''} onChange={(event) => setQuery({ ...query, olderMa: event.target.value ? Number(event.target.value) : null })} /></label>
            <label><span>Younger bound (Ma)</span><input type="number" min="0" max="4567" step="0.01" value={query.youngerMa ?? ''} onChange={(event) => setQuery({ ...query, youngerMa: event.target.value ? Number(event.target.value) : null })} /></label>
          </div>

          <label className="query-field">
            <span>Maximum returned rows</span>
            <select value={query.limit} onChange={(event) => setQuery({ ...query, limit: Number(event.target.value) })}>
              <option value={250}>250</option><option value={1000}>1,000</option><option value={2500}>2,500</option><option value={5000}>5,000</option>
            </select>
          </label>

          <button className="run-query" type="submit" disabled={loading}>{loading ? 'Querying local chunks…' : 'Run query →'}</button>
          <p className="query-method-note">Age filtering uses range intersection. Taxon matching searches accepted and identified names.</p>
          <div className="query-history">
            <div><span>Local workspace</span><small>IndexedDB · latest {queryHistory.length}</small></div>
            {queryHistory.slice(0, 4).map((saved) => (
              <button type="button" key={saved.id} onClick={() => setQuery(saved.query)}>
                <span>{saved.query.taxon || saved.query.country || saved.query.periods.join(', ') || 'All occurrences'}</span>
                <small>{saved.matched.toLocaleString()} · {new Date(saved.savedAt).toLocaleDateString()}</small>
              </button>
            ))}
            {queryHistory.length === 0 && <p>Completed queries will be saved only in this browser.</p>}
          </div>
        </form>

        <section className="lab-results">
          <div className="lab-results__toolbar">
            <div>
              <span>Result workspace</span>
              <strong>{result ? `${result.stats.totalMatched.toLocaleString()} matched` : 'No query run'}</strong>
            </div>
            <div className="lab-view-switcher">
              {(['table', 'periods', 'ranges', 'latitude', 'map'] as LabView[]).map((item) => <button key={item} className={view === item ? 'is-active' : ''} onClick={() => setView(item)} disabled={!result}>{item}</button>)}
            </div>
            <button className="export-package" disabled={!result} onClick={() => result && downloadQueryPackage(result)}>Export package .zip</button>
          </div>

          {error && <div className="lab-error">{error}</div>}
          {!result && !error && <div className="lab-empty"><span>SQL-like filtering without a server</span><h2>Define a query, then inspect the evidence.</h2><p>Results can be explored as rows, period counts or reconstructed-coordinate points.</p></div>}
          {result && (
            <>
              <div className="lab-stats">
                <div><strong>{result.stats.returned.toLocaleString()}</strong><span>returned</span></div>
                <div><strong>{result.stats.uniqueTaxa.toLocaleString()}</strong><span>taxa</span></div>
                <div><strong>{result.stats.countries}</strong><span>countries</span></div>
                <div><strong>{formatPercent(result.stats.paleoCoordinateCoverage)}</strong><span>paleo coords</span></div>
              </div>
              <div className="lab-result-canvas">
                {view === 'table' && <ResultTable records={result.records} />}
                {view === 'periods' && <ResultChart result={result} />}
                {view === 'ranges' && <RangeThroughChart records={result.records} />}
                {view === 'latitude' && <LatitudeChart records={result.records} />}
                {view === 'map' && <ResultMap records={result.records} />}
              </div>
              <div className="reproducibility-strip"><span>Export contains</span><strong>query.json · results.csv/json/geojson · README · citations.bib · dataset-manifest.json</strong></div>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

type CompareMode = 'taxa' | 'time' | 'geography' | 'hypotheses'

function CompareStats({ left, right, leftLabel, rightLabel }: { left: LabResult | null; right: LabResult | null; leftLabel: string; rightLabel: string }) {
  if (!left || !right) return <div className="compare-empty">Run the comparison to load both bounded result sets.</div>
  const rows = [
    ['Observed occurrences', left.stats.totalMatched, right.stats.totalMatched],
    ['Unique taxa', left.stats.uniqueTaxa, right.stats.uniqueTaxa],
    ['Countries represented', left.stats.countries, right.stats.countries],
    ['Paleo-coordinate coverage', formatPercent(left.stats.paleoCoordinateCoverage), formatPercent(right.stats.paleoCoordinateCoverage)],
  ]
  return (
    <div className="comparison-table">
      <div className="comparison-row comparison-row--head"><span>Metric</span><strong>{leftLabel}</strong><strong>{rightLabel}</strong></div>
      {rows.map(([label, a, b]) => <div className="comparison-row" key={label}><span>{label}</span><strong>{a}</strong><strong>{b}</strong></div>)}
    </div>
  )
}

export function ComparePage({ params, onNavigate }: WorkbenchProps) {
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
  const occurrencesByTaxon = useAppStore((state) => state.occurrencesByTaxon)
  const loadOccurrences = useAppStore((state) => state.loadOccurrencesForTaxon)
  const leftProfile = getTaxonProfile(leftTaxon) ?? taxonProfiles[0]
  const rightProfile = getTaxonProfile(rightTaxon) ?? taxonProfiles[1]

  useEffect(() => {
    if (mode !== 'taxa') return
    if (leftProfile.pbdbTaxonId) void loadOccurrences(leftProfile.pbdbTaxonId)
    if (rightProfile.pbdbTaxonId) void loadOccurrences(rightProfile.pbdbTaxonId)
  }, [leftProfile.pbdbTaxonId, loadOccurrences, mode, rightProfile.pbdbTaxonId])

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
        <span className="section-label">Compare / matched evidence</span>
        <h1>Difference needs a shared frame.</h1>
        <p>Compare taxa, time windows, regions or model assumptions while keeping definitions and evidence limits visible.</p>
      </header>

      <div className="compare-mode-tabs">
        {(['taxa', 'time', 'geography', 'hypotheses'] as CompareMode[]).map((item) => <button key={item} className={mode === item ? 'is-active' : ''} onClick={() => { setMode(item); setLeftResult(null); setRightResult(null) }}>{item}</button>)}
      </div>

      {mode === 'taxa' && (
        <section className="taxa-compare">
          <div className="compare-selectors">
            <label><span>Taxon A</span><select value={leftTaxon} onChange={(event) => setLeftTaxon(event.target.value)}>{taxonProfiles.map((profile) => <option key={profile.id} value={profile.id}>{profile.commonNameZh} · {profile.scientificName}</option>)}</select></label>
            <span className="versus">VS</span>
            <label><span>Taxon B</span><select value={rightTaxon} onChange={(event) => setRightTaxon(event.target.value)}>{taxonProfiles.map((profile) => <option key={profile.id} value={profile.id}>{profile.commonNameZh} · {profile.scientificName}</option>)}</select></label>
          </div>
          <div className="taxa-compare-grid">
            {[leftProfile, rightProfile].map((profile) => {
              const count = profile.pbdbTaxonId ? occurrencesByTaxon[profile.pbdbTaxonId]?.length : undefined
              return <article key={profile.id}><span>{profile.commonNameZh}</span><h2><em>{profile.scientificName}</em></h2><p>{profile.overview}</p><dl><div><dt>Range</dt><dd>{profile.firstAppearance}—{profile.lastAppearance || 'Present'} Ma</dd></div><div><dt>Guild</dt><dd>{profile.ecology.guild}</dd></div><div><dt>Body size</dt><dd>{profile.ecology.bodySize}</dd></div><div><dt>Local sample</dt><dd>{count ?? 'Loading…'}</dd></div><div><dt>Confidence</dt><dd>{profile.confidence}</dd></div></dl><button onClick={() => onNavigate('taxa', { id: profile.id })}>Open evidence page →</button></article>
            })}
          </div>
        </section>
      )}

      {(mode === 'time' || mode === 'geography') && (
        <section className="bounded-compare">
          {initialEvent && mode === 'time' && <div className="compare-event-context"><span>Event context</span><strong>{initialEvent.titleZh} · {initialEvent.title}</strong></div>}
          <div className="compare-input-grid">
            {mode === 'time' ? (
              <>
                <div><span>Window A</span><label>Older<input type="number" value={olderA} onChange={(event) => setOlderA(Number(event.target.value))} /></label><label>Younger<input type="number" value={youngerA} onChange={(event) => setYoungerA(Number(event.target.value))} /></label></div>
                <div><span>Window B</span><label>Older<input type="number" value={olderB} onChange={(event) => setOlderB(Number(event.target.value))} /></label><label>Younger<input type="number" value={youngerB} onChange={(event) => setYoungerB(Number(event.target.value))} /></label></div>
              </>
            ) : (
              <>
                <label><span>Region A · ISO country</span><input value={countryA} maxLength={2} onChange={(event) => setCountryA(event.target.value.toUpperCase())} /></label>
                <label><span>Region B · ISO country</span><input value={countryB} maxLength={2} onChange={(event) => setCountryB(event.target.value.toUpperCase())} /></label>
              </>
            )}
          </div>
          <button className="run-comparison" onClick={runComparison} disabled={loading}>{loading ? 'Loading all period chunks…' : 'Run matched comparison'}</button>
          <CompareStats left={leftResult} right={rightResult} leftLabel={mode === 'time' ? `${olderA}–${youngerA} Ma` : countryA} rightLabel={mode === 'time' ? `${olderB}–${youngerB} Ma` : countryB} />
        </section>
      )}

      {mode === 'hypotheses' && (
        <section className="hypothesis-grid">
          <article><span>Tree representation</span><div><h2>Cladogram</h2><p>Branch length carries no time meaning. Best for topology and navigation.</p></div><div><h2>First-appearance proxy</h2><p>Node positions use fossil observations, not calibrated divergence estimates.</p></div><footer>Current atlas: topology, first-appearance proxy and fossil-range modes are kept distinct</footer></article>
          <article><span>Coordinate representation</span><div><h2>Modern discovery</h2><p>Where the fossil locality exists on today's continents.</p></div><div><h2>Paleocoordinate</h2><p>Model-derived location at a chosen reconstruction age.</p></div><footer>Current atlas: both fields preserved · paleocoordinates preferred on map</footer></article>
          <article><span>Ecological interpretation</span><div><h2>Observed occurrence</h2><p>A database record linked to a collection and identification.</p></div><div><h2>Inferred absence</h2><p>Not supported by a missing point without sampling and rock-availability controls.</p></div><footer>Current atlas: absence is never inferred from raw occurrence density</footer></article>
        </section>
      )}
    </main>
  )
}
