import { useEffect, useState } from 'react'
import manifest from '../../../data/manifest.json'
import { periods } from '../../services/geology'
import { loadReleaseMetadata, localReleaseMetadata } from '../../services/release'
import { loadCatalogueManifest, loadCatalogueSpeciesOwnership, loadCurrentManifest, loadEntityLinkageCoverage, loadPackageManifest, loadPackageRegistry, runtimeDataUrl } from '../../data-client/staticDataClient'
import { clearOfflinePackages, getCompleteAtlasOfflinePlan, saveAllPackagesOffline, saveCatalogueResourcePackOffline, saveCompleteAtlasOffline, savePackageOffline } from '../../data-client/offlinePackages'
import type { CompleteAtlasOfflinePlan, OfflineDownloadProgress } from '../../data-client/offlinePackages'
import type { CatalogueRuntimeManifest, CatalogueSpeciesCoverageEntry, CatalogueSpeciesOwnership, CurrentRuntimeManifest, RuntimeEntityLinkageCoverage, RuntimePackageManifest, RuntimePackageRegistry } from '../../data-client/types'
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

function ownershipKindLabel(kind: CatalogueSpeciesCoverageEntry['kind'], zh: boolean): string {
  if (kind === 'static-package') return zh ? '富内容资源包' : 'Curated content pack'
  if (kind === 'nomenclatural-resource-pack') return zh ? '命名资源包' : 'Nomenclatural pack'
  return zh ? '零记录目录边界' : 'Zero-record catalogue boundary'
}

export function DataPage({ onNavigate }: PageProps) {
  const { language, number, t } = useI18n()
  const bundledNativeData = import.meta.env.VITE_NATIVE_APP === 'true'
  const [release, setRelease] = useState(localReleaseMetadata)
  const [runtime, setRuntime] = useState<CurrentRuntimeManifest | null>(null)
  const [packageRegistry, setPackageRegistry] = useState<RuntimePackageRegistry | null>(null)
  const [packageManifests, setPackageManifests] = useState<RuntimePackageManifest[]>([])
  const [linkageCoverage, setLinkageCoverage] = useState<RuntimeEntityLinkageCoverage | null>(null)
  const [catalogue, setCatalogue] = useState<CatalogueRuntimeManifest | null>(null)
  const [speciesOwnership, setSpeciesOwnership] = useState<CatalogueSpeciesOwnership | null>(null)
  const [platformError, setPlatformError] = useState<string | null>(null)
  const [speciesOwnershipError, setSpeciesOwnershipError] = useState<string | null>(null)
  const [offlineStatus, setOfflineStatus] = useState('idle')
  const [cataloguePackStatus, setCataloguePackStatus] = useState<Record<string, 'saving' | 'saved' | 'failed'>>({})
  const [completeOfflinePlan, setCompleteOfflinePlan] = useState<CompleteAtlasOfflinePlan | null>(null)
  const [completeOfflineProgress, setCompleteOfflineProgress] = useState<OfflineDownloadProgress | null>(null)

  useEffect(() => {
    void loadReleaseMetadata().then(setRelease)
    void getCompleteAtlasOfflinePlan().then(setCompleteOfflinePlan).catch(() => undefined)
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

  useEffect(() => {
    let cancelled = false
    void Promise.all([loadCatalogueSpeciesOwnership(), loadCatalogueManifest()]).then(([ownership, loadedCatalogue]) => {
      if (!cancelled) {
        setSpeciesOwnership(ownership)
        setCatalogue(loadedCatalogue)
      }
    }).catch((error: unknown) => {
      if (!cancelled) setSpeciesOwnershipError(error instanceof Error ? error.message : String(error))
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
    setCompleteOfflineProgress(null)
  }

  const storeCataloguePackOffline = async (packageId: string) => {
    setCataloguePackStatus((current) => ({ ...current, [packageId]: 'saving' }))
    try {
      await saveCatalogueResourcePackOffline(packageId)
      setCataloguePackStatus((current) => ({ ...current, [packageId]: 'saved' }))
    } catch {
      setCataloguePackStatus((current) => ({ ...current, [packageId]: 'failed' }))
    }
  }

  const storeCompleteAtlasOffline = async () => {
    setOfflineStatus('saving-complete')
    try {
      const plan = await saveCompleteAtlasOffline(setCompleteOfflineProgress)
      setCompleteOfflinePlan(plan)
      setOfflineStatus('saved-complete')
    } catch {
      setOfflineStatus('failed')
    }
  }

  const offlineBusy = offlineStatus === 'saving' || offlineStatus === 'saving-complete'

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
              {bundledNativeData
                ? <span>{language === 'zh' ? '已内置' : 'Bundled'}</span>
                : <button type="button" onClick={() => void storeOffline(entry.packageId)}>{t('Save')}</button>}
            </div>
          ))}
        </div>
        {bundledNativeData ? (
          <div className="offline-actions">
            <span role="status">{language === 'zh'
              ? `当前完整交互数据已随应用内置：${completeOfflinePlan ? `${number(completeOfflinePlan.fileCount)} 个文件 · ${(completeOfflinePlan.totalBytes / 1024 / 1024).toFixed(2)} MiB` : '正在读取发布清单…'}。断网启动无需另行下载。`
              : `The complete interactive release is bundled with this app: ${completeOfflinePlan ? `${number(completeOfflinePlan.fileCount)} files · ${(completeOfflinePlan.totalBytes / 1024 / 1024).toFixed(2)} MiB` : 'reading the release inventory…'}. No separate download is required for offline startup.`}</span>
          </div>
        ) : (
          <div className="offline-actions">
            <button className="button button--ghost" type="button" disabled={offlineBusy} onClick={() => void storeOffline()}>{t(offlineStatus === 'saving' ? 'Saving…' : offlineStatus === 'saved' ? 'Saved for offline use' : 'Save all current packages')}</button>
            <button className="button button--ghost" type="button" disabled={offlineBusy} onClick={() => void storeCompleteAtlasOffline()}>{t(offlineStatus === 'saving-complete' ? 'Saving complete Atlas…' : offlineStatus === 'saved-complete' ? 'Complete Atlas saved' : 'Save complete Atlas ({size})', { size: completeOfflinePlan ? `${(completeOfflinePlan.totalBytes / 1024 / 1024).toFixed(0)} MiB` : '…' })}</button>
            <button className="button button--ghost" type="button" disabled={offlineBusy} onClick={() => void clearOffline()}>{t('Clear offline data')}</button>
            {completeOfflineProgress && offlineStatus === 'saving-complete' && <span role="status">{t('Saved {completed} of {total} files', { completed: number(completeOfflineProgress.completedFiles), total: number(completeOfflineProgress.fileCount) })}</span>}
            {offlineStatus === 'failed' && <span role="alert">{t('Offline storage failed')}</span>}
          </div>
        )}
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>03</span>
          <div><small>{language === 'zh' ? '全量物种归属' : 'Complete species ownership'}</small><h2>{language === 'zh' ? '一个物种，一个资源分区' : 'One species, one resource partition'}</h2></div>
        </div>
        {speciesOwnershipError && <p className="platform-error">{language === 'zh' ? '物种归属数据暂不可用：' : 'Species ownership data is unavailable: '}{speciesOwnershipError}</p>}
        {!speciesOwnership && !speciesOwnershipError && <p className="ownership-loading">{language === 'zh' ? '正在加载全量物种归属…' : 'Loading complete species ownership…'}</p>}
        {speciesOwnership && <>
          <div className="ownership-summary" aria-label={language === 'zh' ? 'Catalogue of Life 物种归属摘要' : 'Catalogue of Life species ownership summary'}>
            <article><strong>{number(speciesOwnership.proof.assignedSpecies)}</strong><span>{language === 'zh' ? '严格 accepted 已归属' : 'strict accepted assigned'}</span></article>
            <article><strong>{speciesOwnership.entries.length}</strong><span>{language === 'zh' ? '互斥资源分区' : 'exclusive resource partitions'}</span></article>
            <article><strong>{speciesOwnership.entries.filter((entry) => entry.kind === 'static-package').length}</strong><span>{language === 'zh' ? '静态资源包' : 'static packages'}</span></article>
            <article><strong>{speciesOwnership.entries.filter((entry) => entry.kind === 'nomenclatural-resource-pack').length}</strong><span>{language === 'zh' ? '命名资源包' : 'nomenclatural packs'}</span></article>
            <article><strong>{speciesOwnership.entries.filter((entry) => entry.kind === 'catalogue-only').length}</strong><span>{language === 'zh' ? '仅目录兜底' : 'catalogue-only fallbacks'}</span></article>
            <article><strong>{number(speciesOwnership.proof.unmatchedSpecies)}</strong><span>{language === 'zh' ? '未归属物种' : 'unmatched species'}</span></article>
          </div>
          <div className="ownership-policy-note">
            <strong>{speciesOwnership.source.releaseAlias} · {speciesOwnership.source.releaseDate} · {speciesOwnership.source.strictPredicate}</strong>
            <p>{language === 'zh' ? '沿本发布版 CoL 父链应用精确祖先 ID 与固定优先级；全部严格 accepted 物种恰好归属一个分区。归属覆盖仅表示名称与分类位置完整，不等于 Evo Atlas 专档、证据、媒体、化石、生态、翻译或专家评审已经成熟。' : 'Exact ancestor IDs and fixed priorities are applied along the pinned CoL lineage; every strict accepted species has exactly one owner. Ownership coverage means complete names and placement only, not mature Evo Atlas dossiers, evidence, media, fossils, ecology, translations, or expert review.'}</p>
          </div>
          <div className="ownership-table" role="table" aria-label={language === 'zh' ? '32 个物种资源分区' : '32 species resource partitions'}>
            <div className="ownership-row ownership-row--head" role="row">
              <span>{language === 'zh' ? '资源分区' : 'Resource partition'}</span>
              <span>{language === 'zh' ? '类型' : 'Kind'}</span>
              <span>{language === 'zh' ? '严格 accepted' : 'Strict accepted'}</span>
              <span>{language === 'zh' ? '全集占比' : 'Share'}</span>
              <span>{language === 'zh' ? '浏览根' : 'Browse roots'}</span>
              <span>{language === 'zh' ? '范围边界' : 'Scope boundary'}</span>
              <span>{language === 'zh' ? '访问' : 'Access'}</span>
            </div>
            {speciesOwnership.entries.map((entry) => (
              <div className={`ownership-row ownership-row--${entry.kind}`} role="row" key={entry.id}>
                <strong>{language === 'zh' ? entry.titleZh : entry.title}<small>{entry.id}</small></strong>
                <span className="ownership-kind">{ownershipKindLabel(entry.kind, language === 'zh')}</span>
                <span>{number(entry.acceptedSpeciesCount)}</span>
                <span>{((entry.acceptedSpeciesCount / speciesOwnership.source.acceptedSpecies) * 100).toFixed(entry.acceptedSpeciesCount === 0 ? 1 : 3)}%</span>
                <span className="ownership-roots">{entry.browseRootIds.length ? entry.browseRootIds.map((rootId) => <code key={rootId}>{rootId}</code>) : '—'}</span>
                <span className="ownership-scope">
                  {language === 'zh'
                    ? entry.scopeZh ?? (entry.zeroAssignmentReason ? '本发布版没有归属记录；保留此分区以表达明确的零覆盖边界。' : entry.kind === 'catalogue-only' ? '残余目录分区；不是专档成熟度声明。' : '由固定 CoL 祖先 ID 定义的物种归属。')
                    : entry.scope ?? entry.zeroAssignmentReason ?? (entry.kind === 'catalogue-only' ? 'Residual catalogue partition; not a dossier-maturity claim.' : 'Species ownership defined by pinned CoL ancestor IDs.')}
                  {(entry.disclaimer || entry.disclaimerZh) && <small>{language === 'zh' ? entry.disclaimerZh ?? entry.disclaimer : entry.disclaimer ?? entry.disclaimerZh}</small>}
                </span>
                <span className="ownership-access">
                  {entry.kind === 'nomenclatural-resource-pack' && catalogue ? <>
                    {bundledNativeData
                      ? <span>{language === 'zh' ? '已随应用内置' : 'Bundled with app'}</span>
                      : <>
                        <button type="button" disabled={cataloguePackStatus[entry.id] === 'saving'} onClick={() => void storeCataloguePackOffline(entry.id)}>{cataloguePackStatus[entry.id] === 'saving' ? (language === 'zh' ? '保存中…' : 'Saving…') : cataloguePackStatus[entry.id] === 'saved' ? (language === 'zh' ? '已离线保存' : 'Saved offline') : cataloguePackStatus[entry.id] === 'failed' ? (language === 'zh' ? '重试保存' : 'Retry save') : (language === 'zh' ? '离线保存' : 'Save offline')}</button>
                        <a href={runtimeDataUrl(catalogue.resourcePacks.downloadTemplate.replace('{packageId}', entry.id))} download>{language === 'zh' ? '下载 ZIP' : 'Download ZIP'}</a>
                      </>}
                  </> : <span>—</span>}
                </span>
              </div>
            ))}
          </div>
          <p className="ownership-proof">{language === 'zh'
            ? `证明：访问 ${number(speciesOwnership.proof.visitedAcceptedSpecies)}，归属 ${number(speciesOwnership.proof.assignedSpecies)}，未归属 ${number(speciesOwnership.proof.unmatchedSpecies)}，优先级后歧义 ${number(speciesOwnership.proof.ambiguousAfterPriority)}，父链断裂 ${number(speciesOwnership.proof.brokenLineages)}。`
            : `Proof: ${number(speciesOwnership.proof.visitedAcceptedSpecies)} visited, ${number(speciesOwnership.proof.assignedSpecies)} assigned, ${number(speciesOwnership.proof.unmatchedSpecies)} unmatched, ${number(speciesOwnership.proof.ambiguousAfterPriority)} ambiguous after priority, and ${number(speciesOwnership.proof.brokenLineages)} broken lineages.`}</p>
        </>}
      </section>

      <section className="info-section">
        <div className="info-section__heading">
          <span>04</span>
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
          <span>05</span>
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
          <p>{t('The map uses the nearest available frame from six locally reconstructed CAO2024 geometry layers and separately exposes all five point-data collections. Points are observations or constraints, not terrain; out-of-range and missing-circuit records remain source-only. Neither coordinate source is assumed to be co-registered with PBDB paleocoordinates.')}</p>
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
