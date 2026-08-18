import manifest from '../../../data/manifest.json'
import { periods } from '../../services/geology'
import type { AppRoute } from '../../utils/routing'
import './InfoPages.css'

interface PageProps {
  onNavigate: (route: AppRoute) => void
}

export function DataPage({ onNavigate }: PageProps) {
  return (
    <main className="info-page">
      <header className="info-hero">
        <span className="section-label">Dataset registry / {manifest.datasetVersion}</span>
        <h1>Know what the atlas knows.</h1>
        <p>
          Every view in Evo is backed by a named static artifact. This registry exposes its
          current scope, provenance and the places where the evidence remains incomplete.
        </p>
        <button className="button button--primary" onClick={() => onNavigate('explore')}>Explore the records</button>
      </header>

      <section className="info-grid info-grid--metrics">
        {Object.entries(manifest.records).map(([key, value]) => (
          <article key={key} className="metric-card">
            <strong>{value.toLocaleString()}</strong>
            <span>{key.replace(/([A-Z])/g, ' $1')}</span>
          </article>
        ))}
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>01</span>
          <div><small>Sources</small><h2>Evidence ledger</h2></div>
        </div>
        <div className="source-list">
          {manifest.sources.map((source) => (
            <a key={source.name} href={source.url} target="_blank" rel="noreferrer">
              <span className="source-index">{String(manifest.sources.indexOf(source) + 1).padStart(2, '0')}</span>
              <div><strong>{source.name}</strong><p>{source.role}</p></div>
              <small>{source.mode}</small>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>02</span>
          <div><small>Coverage</small><h2>Period inventory</h2></div>
        </div>
        <div className="coverage-table" role="table" aria-label="Period coverage">
          <div className="coverage-row coverage-row--head" role="row">
            <span>Period</span><span>Range</span><span>Map</span><span>Fossils</span>
          </div>
          {[...periods].reverse().map((period) => (
            <div className="coverage-row" role="row" key={period.name}>
              <strong><i style={{ background: period.color }} />{period.name}</strong>
              <span>{period.eag.toFixed(1)}—{period.lag.toFixed(1)} Ma</span>
              <span className="coverage-ok">Available</span>
              <span className="coverage-ok">Bundled</span>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section info-section--limitations">
        <div className="info-section__heading">
          <span>03</span>
          <div><small>Known limits</small><h2>Read before interpreting</h2></div>
        </div>
        <ol className="limitation-list">
          {manifest.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
        </ol>
      </section>
    </main>
  )
}

export function MethodsPage({ onNavigate }: PageProps) {
  const steps = [
    ['Acquire', 'Fetch bounded occurrence samples from public scientific sources.'],
    ['Normalize', 'Preserve source identifiers while aligning age, taxon and coordinate fields.'],
    ['Validate', 'Check identifiers, linked references, ranges, coordinates, record counts and SHA-256 checksums.'],
    ['Partition', 'Bundle data by geological period for predictable static loading.'],
    ['Explore', 'Synchronize time, geography and taxonomy entirely in the browser.'],
  ]

  return (
    <main className="info-page methods-page">
      <header className="info-hero">
        <span className="section-label">Methods / static-first architecture</span>
        <h1>The browser is the research workspace.</h1>
        <p>
          GitHub Actions prepares versioned evidence; GitHub Pages serves immutable files;
          the browser performs filtering, linking and visualization without a private backend.
        </p>
        <button className="button button--ghost" onClick={() => onNavigate('data')}>Open data registry</button>
      </header>

      <section className="pipeline" aria-label="Data pipeline">
        {steps.map(([title, description], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="method-principles">
        <article>
          <span className="section-label">Interpretation</span>
          <h2>Observation is not absence.</h2>
          <p>Fossil density mixes biological history with rock availability, collection effort and publication bias. The atlas displays observed records, not a complete census of past life.</p>
        </article>
        <article>
          <span className="section-label">Time</span>
          <h2>Ranges carry uncertainty.</h2>
          <p>Occurrences may span an interval. Their midpoint can support display and navigation, but it must not be interpreted as an exact specimen age.</p>
        </article>
        <article>
          <span className="section-label">Space</span>
          <h2>Maps are discrete models.</h2>
          <p>Current maps summarize broad period configurations. They are not continuous tectonic reconstructions and should be labeled as snapshots.</p>
        </article>
        <article>
          <span className="section-label">Topology</span>
          <h2>Tree modes answer different questions.</h2>
          <p>The cladogram carries topology only. First-appearance and fossil-range modes expose occurrence-derived time context, not calibrated molecular divergence.</p>
        </article>
      </section>
    </main>
  )
}
