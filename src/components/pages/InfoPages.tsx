import manifest from '../../../data/manifest.json'
import { periods } from '../../services/geology'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import './InfoPages.css'

interface PageProps {
  onNavigate: (route: AppRoute) => void
}

export function DataPage({ onNavigate }: PageProps) {
  const { number, t } = useI18n()
  return (
    <main className="info-page">
      <header className="info-hero">
        <span className="section-label">{t('Dataset registry')} / {manifest.datasetVersion}</span>
        <h1>{t('Know what the atlas knows.')}</h1>
        <p>{t('Every view in Evo is backed by a named static artifact. This registry exposes its current scope, provenance and the places where the evidence remains incomplete.')}</p>
        <p>{t('App {appVersion} · schema {schemaVersion} · commit {commitSha}', { appVersion: manifest.appVersion, schemaVersion: manifest.schemaVersion, commitSha: manifest.commitSha })}</p>
        <button className="button button--primary" onClick={() => onNavigate('explore')}>{t('Explore the records')}</button>
      </header>

      <section className="info-grid info-grid--metrics">
        {Object.entries(manifest.records).map(([key, value]) => (
          <article key={key} className="metric-card">
            <strong>{number(value)}</strong>
            <span>{t(key.replace(/([A-Z])/g, ' $1'))}</span>
          </article>
        ))}
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>01</span>
          <div><small>{t('Sources')}</small><h2>{t('Evidence ledger')}</h2></div>
        </div>
        <div className="source-list">
          {manifest.sources.map((source) => (
            <a key={source.name} href={source.url} target="_blank" rel="noreferrer">
              <span className="source-index">{String(manifest.sources.indexOf(source) + 1).padStart(2, '0')}</span>
              <div><strong>{source.name}</strong><p>{t(source.role)}</p></div>
              <small>{t(source.mode)}</small>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>02</span>
          <div><small>{t('Coverage')}</small><h2>{t('Period inventory')}</h2></div>
        </div>
        <div className="coverage-table" role="table" aria-label={t('Period coverage')}>
          <div className="coverage-row coverage-row--head" role="row">
            <span>{t('Period')}</span><span>{t('Range')}</span><span>{t('Map')}</span><span>{t('Fossils')}</span>
          </div>
          {[...periods].reverse().map((period) => (
            <div className="coverage-row" role="row" key={period.name}>
              <strong><i style={{ background: period.color }} />{t(period.name)}</strong>
              <span>{period.eag.toFixed(1)}—{period.lag.toFixed(1)} Ma</span>
              <span className={period.mapLayerStatus === 'available' ? 'coverage-ok' : ''}>{t(period.mapLayerStatus === 'available' ? 'Available' : 'Withheld pending provenance')}</span>
              <span className="coverage-ok">{t('Bundled')}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section info-section--limitations">
        <div className="info-section__heading">
          <span>03</span>
          <div><small>{t('Known limits')}</small><h2>{t('Read before interpreting')}</h2></div>
        </div>
        <ol className="limitation-list">
          {manifest.limitations.map((limitation) => <li key={limitation}>{t(limitation)}</li>)}
        </ol>
      </section>
    </main>
  )
}

export function MethodsPage({ onNavigate }: PageProps) {
  const { t } = useI18n()
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
        <span className="section-label">{t('Methods / static-first architecture')}</span>
        <h1>{t('The browser is the research workspace.')}</h1>
        <p>{t('GitHub Actions prepares versioned evidence; GitHub Pages serves immutable files; the browser performs filtering, linking and visualization without a private backend.')}</p>
        <button className="button button--ghost" onClick={() => onNavigate('data')}>{t('Open data registry')}</button>
      </header>

      <section className="pipeline" aria-label={t('Data pipeline')}>
        {steps.map(([title, description], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{t(title)}</h2>
            <p>{t(description)}</p>
          </article>
        ))}
      </section>

      <section className="method-principles">
        <article>
          <span className="section-label">{t('Interpretation')}</span>
          <h2>{t('Observation is not absence.')}</h2>
          <p>{t('Fossil density mixes biological history with rock availability, collection effort and publication bias. The atlas displays observed records, not a complete census of past life.')}</p>
        </article>
        <article>
          <span className="section-label">{t('Time')}</span>
          <h2>{t('Ranges carry uncertainty.')}</h2>
          <p>{t('Occurrences may span an interval. Their midpoint can support display and navigation, but it must not be interpreted as an exact specimen age.')}</p>
        </article>
        <article>
          <span className="section-label">{t('Space')}</span>
          <h2>{t('Maps are discrete models.')}</h2>
          <p>{t('Continental geometry is withheld until source, license and processing provenance is complete. Occurrence coordinates remain explicitly separated into reconstructed and modern modes.')}</p>
        </article>
        <article>
          <span className="section-label">{t('Topology')}</span>
          <h2>{t('Tree modes answer different questions.')}</h2>
          <p>{t('The cladogram carries topology only. First-appearance and fossil-range modes expose occurrence-derived time context, not calibrated molecular divergence.')}</p>
        </article>
      </section>
    </main>
  )
}
