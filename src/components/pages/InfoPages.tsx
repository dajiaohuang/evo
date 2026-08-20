import { useEffect, useState } from 'react'
import manifest from '../../../data/manifest.json'
import { periods } from '../../services/geology'
import { loadReleaseMetadata, localReleaseMetadata } from '../../services/release'
import { loadCurrentManifest, loadEntityLinkageCoverage, loadPackageManifest, loadPackageRegistry } from '../../data-client/staticDataClient'
import { clearOfflinePackages, saveAllPackagesOffline, savePackageOffline } from '../../data-client/offlinePackages'
import type { CurrentRuntimeManifest, RuntimeEntityLinkageCoverage, RuntimePackageManifest, RuntimePackageRegistry } from '../../data-client/types'
import type { AppRoute } from '../../utils/routing'
import { reviewStatusLabel, scientificMaturityLabel } from '../../services/publication'
import { useI18n } from '../../i18n'
import './InfoPages.css'

interface PageProps {
  onNavigate: (route: AppRoute) => void
}

function formatBoundary(boundary: { valueMa: number; uncertaintyMa: number | null; approximate: boolean }): string {
  const value = Number.isInteger(boundary.valueMa) ? boundary.valueMa.toFixed(0) : String(boundary.valueMa)
  const uncertainty = boundary.uncertaintyMa == null ? '' : ` ± ${boundary.uncertaintyMa.toFixed(2)}`
  return `${boundary.approximate ? '~' : ''}${value}${uncertainty} Ma`
}

export function DataPage({ onNavigate }: PageProps) {
  const { language, number, t } = useI18n()
  const [release, setRelease] = useState(localReleaseMetadata)
  const [runtime, setRuntime] = useState<CurrentRuntimeManifest | null>(null)
  const [packageRegistry, setPackageRegistry] = useState<RuntimePackageRegistry | null>(null)
  const [packageManifests, setPackageManifests] = useState<RuntimePackageManifest[]>([])
  const [linkageCoverage, setLinkageCoverage] = useState<RuntimeEntityLinkageCoverage | null>(null)
  const [platformError, setPlatformError] = useState<string | null>(null)
  const [offlineStatus, setOfflineStatus] = useState('idle')

  useEffect(() => {
    void loadReleaseMetadata().then(setRelease)
  }, [])

  useEffect(() => {
    let cancelled = false
    void Promise.all([loadCurrentManifest(), loadPackageRegistry(), loadEntityLinkageCoverage()]).then(async ([current, registry, linkage]) => {
      const packages = await Promise.all(registry.packages.map((entry) => loadPackageManifest(entry.id)))
      if (cancelled) return
      setRuntime(current)
      setPackageRegistry(registry)
      setPackageManifests(packages)
      setLinkageCoverage(linkage)
    }).catch((error: unknown) => {
      if (!cancelled) setPlatformError(error instanceof Error ? error.message : String(error))
    })
    return () => { cancelled = true }
  }, [])

  const storeOffline = async (packageId?: string) => {
    setOfflineStatus('saving')
    try {
      if (packageId) await savePackageOffline(packageId)
      else await saveAllPackagesOffline()
      setOfflineStatus('saved')
    } catch {
      setOfflineStatus('failed')
    }
  }

  const clearOffline = async () => {
    await clearOfflinePackages()
    setOfflineStatus('cleared')
  }

  return (
    <main className="info-page">
      <header className="info-hero">
        <span className="section-label">{t('Dataset registry')} / {manifest.datasetVersion}</span>
        <h1>{t('Know what the atlas knows.')}</h1>
        <p>{t('Every view in Evo is backed by a named static artifact. This registry exposes its current scope, provenance and the places where the evidence remains incomplete.')}</p>
        <p><strong>{t('Scope')}:</strong> {t(manifest.scopeStatement)}</p>
        <p>{t('App {appVersion} · schema {schemaVersion} · deployment commit {commitSha}', { appVersion: release.appVersion, schemaVersion: manifest.schemaVersion, commitSha: release.deploymentCommitSha })}</p>
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
          <div><small>{t('Static packages')}</small><h2>{t('Package coverage dashboard')}</h2></div>
        </div>
        {platformError && <p className="platform-error" role="alert">{t('Runtime registry unavailable')}: {platformError}</p>}
        {runtime && packageRegistry && (
          <div className="platform-summary">
            <article><strong>{packageRegistry.entityCount}/{packageRegistry.entityCount}</strong><span>{t('registry entities assigned')}</span></article>
            <article><strong>{packageRegistry.packageCount}</strong><span>{t('static packages')}</span></article>
            <article><strong>{number(runtime.occurrences.totalRecords)}</strong><span>{t('published occurrence rows')}</span></article>
            <article><strong>{(runtime.budgets.coreCompressedBytes / 1024).toFixed(1)} KiB</strong><span>{t('compressed core')}</span></article>
          </div>
        )}
        {linkageCoverage && (
          <div className="platform-summary platform-summary--quality" aria-label={t('Taxonomy and entity linkage quality')}>
            <article><strong>{linkageCoverage.resolutionSummary.resolved}/{linkageCoverage.indexedEntityCount}</strong><span>{t('PBDB names and ranks resolved')}</span></article>
            <article><strong>{linkageCoverage.resolutionSummary.unresolved}</strong><span>{t('external concepts unresolved')}</span></article>
            <article><strong>{linkageCoverage.resolutionSummary.conceptResolved}</strong><span>{t('concept mappings cleared')}</span></article>
            <article><strong>{linkageCoverage.resolutionSummary.needsConceptReview}</strong><span>{t('PBDB concepts needing review')}</span></article>
            <article><strong>{linkageCoverage.resolutionSummary.humanCuratorDecisions}</strong><span>{t('human curator decisions')}</span></article>
            <article><strong>{number(linkageCoverage.directLinkTotal)}/{number(linkageCoverage.sourceTotal)}</strong><span>{t('direct entity links')}</span></article>
            <article><strong>{(linkageCoverage.directLinkRate * 100).toFixed(2)}%</strong><span>{t('direct-link rate')}</span></article>
            <article><strong>{number(linkageCoverage.broadLinkTotal)}/{number(linkageCoverage.sourceTotal)}</strong><span>{t('broad ontology links')}</span></article>
            <article><strong>{(linkageCoverage.broadLinkRate * 100).toFixed(2)}%</strong><span>{t('broad-link rate')}</span></article>
            <article><strong>{number(linkageCoverage.linkageMethods.exactExternalId)}</strong><span>{t('exact external-ID matches')}</span></article>
            <article><strong>{number(linkageCoverage.linkageMethods.acceptedName)}</strong><span>{t('accepted-name matches')}</span></article>
            <article><strong>{number(linkageCoverage.linkageMethods.higherClassification)}</strong><span>{t('higher-classification matches')}</span></article>
            <article><strong>{number(linkageCoverage.unmatchedOccurrenceTotal)}</strong><span>{t('unmatched occurrence rows')}</span></article>
          </div>
        )}
        {linkageCoverage && <p className="quality-disclaimer">{t(linkageCoverage.precisionStatement)}</p>}
        <p className="quality-disclaimer quality-disclaimer--review">{t('Automated data audits verify schemas, identifiers, translations and links. Maintainer review is digest-bound; ChatGPT assistance and external expert review remain separately disclosed.')}</p>
        <p className="quality-disclaimer">{t('Occurrence counts describe atlas-wide period shards; query coverage may describe a separate package-specific source snapshot.')}</p>
        <div className="package-table" role="table" aria-label={t('Static package coverage')}>
          <div className="package-row package-row--head" role="row"><span>{t('Package')}</span><span>{t('Maturity / review')}</span><span>{t('Query coverage')}</span><span>{t('Entities')}</span><span>{t('Runtime')}</span><span>{t('Occurrences')}</span><span>{t('Offline')}</span></div>
          {packageManifests.map((entry) => (
            <div className="package-row" role="row" key={entry.packageId}>
              <strong>{language === 'zh' ? entry.titleZh : entry.title}<small>{entry.packageId}</small></strong>
              <span className={`package-maturity package-maturity--${entry.scientificMaturity}`} title={`${entry.platformMaturity} · ${entry.effectiveReviewStatus}`}><b>{t(scientificMaturityLabel(entry.scientificMaturity))}</b><small>{t(reviewStatusLabel(entry.effectiveReviewStatus))}</small><small>{t(entry.chatgptAssisted ? 'ChatGPT-assisted check recorded' : 'No ChatGPT-assisted review recorded')}</small></span>
              <span className={`query-coverage query-coverage--${entry.queryCoverage.completeness}`} title={t('Fetched {rows} source rows across {pages} page(s)', { rows: number(entry.queryCoverage.rowsFetched), pages: number(entry.queryCoverage.pagesFetched) })}>{t(entry.queryCoverage.completeness)}<small>{entry.queryCoverage.upstreamReportedTotal == null ? t('upstream total unavailable') : t('{count} upstream rows', { count: number(entry.queryCoverage.upstreamReportedTotal) })}</small><small>{t('{accepted} accepted source rows · {outside} outside package rules', { accepted: number(entry.queryCoverage.rowsAccepted), outside: number(entry.queryCoverage.rowsOutsidePackage) })}</small></span>
              <span>{number(entry.entityCount)}</span>
              <span>{(entry.metrics.runtimeKnowledgeCompressedBytes / 1024).toFixed(1)} KiB</span>
              <span>{number(entry.occurrenceCount)}</span>
              <button type="button" onClick={() => void storeOffline(entry.packageId)}>{t('Save')}</button>
            </div>
          ))}
        </div>
        <div className="offline-actions">
          <button className="button button--ghost" type="button" disabled={offlineStatus === 'saving'} onClick={() => void storeOffline()}>{t(offlineStatus === 'saving' ? 'Saving…' : offlineStatus === 'saved' ? 'Saved for offline use' : 'Save all published packages')}</button>
          <button className="button button--ghost" type="button" onClick={() => void clearOffline()}>{t('Clear offline data')}</button>
          {offlineStatus === 'failed' && <span role="alert">{t('Offline storage failed')}</span>}
        </div>
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>03</span>
          <div><small>{t('Coverage')}</small><h2>{t('Period inventory')}</h2></div>
        </div>
        <div className="coverage-table" role="table" aria-label={t('Period coverage')}>
          <div className="coverage-row coverage-row--head" role="row">
            <span>{t('Period')}</span><span>{t('Range')}</span><span>{t('Map')}</span><span>{t('Fossils')}</span>
          </div>
          {[...periods].reverse().map((period) => (
            <div className="coverage-row" role="row" key={period.name}>
              <strong><i style={{ background: period.color }} />{language === 'zh' ? period.nameZh : period.name}</strong>
              <span className="boundary-range">
                <b>{formatBoundary(period.olderBoundary)} — {formatBoundary(period.youngerBoundary)}</b>
                <small>{period.olderBoundary.definitionType} → {period.youngerBoundary.definitionType} · ICS {period.officialVersion}</small>
              </span>
              <span className={period.mapLayerStatus === 'available' ? 'coverage-ok' : ''}>{t(period.mapLayerStatus === 'available' ? 'Available' : 'Withheld pending provenance')}</span>
              <span className="coverage-ok">{t('Bundled')}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section info-section--limitations">
        <div className="info-section__heading">
          <span>04</span>
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
