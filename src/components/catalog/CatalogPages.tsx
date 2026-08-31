import { useEffect, useState } from 'react'
import claimStatementsZh from '../../../data/evidence/claim-statements.zh.json'
import {
  evolutionEvents,
  evolutionStories,
  getEvolutionEvent,
  getEvolutionStory,
  getReferences,
  getTaxonProfile,
  getMediaForTaxon,
  getCalibrationsForTaxon,
  hasPublishedRange,
  taxonProfiles,
} from '../../services/catalog'
import { evidenceClaims, getClaimsForSubject } from '../../services/evidence'
import { buildEvidenceIssueUrl, getEntityPublication, reviewStatusLabel, scientificMaturityLabel } from '../../services/publication'
import { loadMediaForEntity, runtimeDataUrl } from '../../data-client/staticDataClient'
import { EvidenceStatus } from '../common/EvidenceStatus'
import { useAppStore } from '../../store'
import type { AppRoute } from '../../utils/routing'
import type { ConfidenceLevel, EvidenceClaim, ReferenceRecord } from '../../types'
import type { MediaAsset } from '../../types/catalog'
import { useI18n } from '../../i18n'
import { StoryBuilder, StoryLearningPanel } from './StoryStudio'
import './CatalogPages.css'

const generatedClaimStatementsZh = claimStatementsZh as Record<string, string>

interface CatalogPageProps {
  id: string | null
  params?: URLSearchParams
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

function formatAge(age: number, present = 'Present'): string {
  if (age === 0) return present
  if (age >= 1000) return `${(age / 1000).toFixed(2)} Ga`
  if (age < 1) return `${Math.round(age * 1000)} ka`
  return `${Number.isInteger(age) ? age : age.toFixed(1)} Ma`
}

function explorerTaxonState(id: string | undefined): Record<string, string> {
  if (!id) return {}
  const profile = getTaxonProfile(id)
  return profile ? { profile: profile.id } : { taxon: id }
}

function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  const { t } = useI18n()
  return <span className={`confidence confidence--${level}`}>{t('{level} confidence', { level: t(level) })}</span>
}

function ReferenceList({ records }: { records: ReferenceRecord[] }) {
  const { t } = useI18n()
  return (
    <div className="reference-list">
      {records.map((reference, index) => (
        <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <strong>{reference.title}</strong>
            <small>{reference.authors} · {reference.publishedYear ?? t('n.d.')}{reference.version ? ` · v${reference.version}` : ''}{reference.accessedAt ? ` · ${t('accessed {date}', { date: reference.accessedAt })}` : ''}{reference.doi ? ` · DOI ${reference.doi}` : ''}</small>
          </div>
          <i>↗</i>
        </a>
      ))}
    </div>
  )
}

function ClaimLedger({ claims }: { claims: EvidenceClaim[] }) {
  const { language, t } = useI18n()
  if (!claims.length) return <p>{t('No claim-level evidence record is bundled for this subject.')}</p>
  return (
    <div className="statement-grid">
      {claims.map((claim, index) => (
        <article key={claim.id}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p><strong>{t(claim.claimType.replace('-', ' '))}</strong><br />{language === 'zh' ? generatedClaimStatementsZh[claim.statement] ?? t(claim.statement) : claim.statement}</p>
          <small>{t(claim.confidence)} · {claim.referenceLinks.map((link) => `${link.relation}: ${link.referenceId}`).join(' · ')}</small>
          <small>{language === 'zh' ? claim.confidenceRationaleZh : claim.confidenceRationale}</small>
          <small>{t('Reviewed {date} by {reviewer} against {version}', { date: claim.reviewedAt, reviewer: claim.reviewedBy, version: claim.reviewedAgainstReferenceVersion })}</small>
          <a className="claim-report-link" href={buildEvidenceIssueUrl({ entityId: claim.subjectId.split(':')[1], claimId: claim.id })} target="_blank" rel="noreferrer">{t('Report this claim')} ↗</a>
        </article>
      ))}
    </div>
  )
}

function DivergenceLedger({ profileId }: { profileId: string }) {
  const { t } = useI18n()
  const estimates = getCalibrationsForTaxon(profileId)
  const maximumAge = Math.max(1, ...estimates.map((estimate) => estimate.olderMa ?? estimate.medianMa)) * 1.08
  if (!estimates.length) {
    return <div className="divergence-ledger"><aside><strong>{t('No compatible published node estimate is bundled for this profile.')}</strong><span>{t('The atlas does not substitute a fossil first appearance or an unrelated clade clock.')}</span></aside></div>
  }
  return (
    <div className="divergence-ledger">
      <div className="divergence-axis"><span>{maximumAge.toFixed(0)} Ma</span><span>{t('Compatible published node estimate')}</span><span>0 Ma</span></div>
      {estimates.map((estimate) => {
        const older = estimate.olderMa ?? estimate.medianMa
        const younger = estimate.youngerMa ?? estimate.medianMa
        const reference = getReferences([estimate.referenceId])[0]
        return (
          <article key={estimate.id}>
            <div><strong>{t(estimate.nodeLabel)}</strong><small>{t(estimate.method)} · {t(estimate.mappingStatus === 'mapped' ? 'mapped to exact topology node' : 'unmapped; not shown on tree')}</small></div>
            <div className="divergence-track">
              <i style={{ left: `${(1 - older / maximumAge) * 100}%`, width: `${Math.max(.4, (older - younger) / maximumAge * 100)}%` }} />
              <b style={{ left: `${(1 - estimate.medianMa / maximumAge) * 100}%` }} />
            </div>
            <span>{estimate.medianMa.toFixed(1)} Ma{estimate.youngerMa != null && estimate.olderMa != null ? ` · ${estimate.olderMa.toFixed(1)}–${estimate.youngerMa.toFixed(1)}` : ''}</span>
            <p>{t(estimate.note)} · {estimate.topologyHypothesisId} · {t(estimate.locator?.figure ?? estimate.locator?.table ?? estimate.locator?.pages ?? '')}</p>
            {reference && <a href={reference.url} target="_blank" rel="noreferrer">{t('Source ↗')}</a>}
          </article>
        )
      })}
      <aside><strong>{t('Do not merge unlike clocks silently.')}</strong><span>{t('These are study-specific node estimates with different datasets and methods. The atlas preserves them as an evidence ledger rather than forcing them into the occurrence-derived atlas navigation tree.')}</span></aside>
    </div>
  )
}

function MissingEntry({ kind, onNavigate }: { kind: string; onNavigate: CatalogPageProps['onNavigate'] }) {
  const { t } = useI18n()
  return (
    <main className="catalog-page catalog-missing">
      <span className="section-label">{t('Catalog / not found')}</span>
      <h1>{t('No {kind} selected.', { kind: t(kind) })}</h1>
      <p>{t('Use global search to open a stable catalog entry.')}</p>
      <button className="button button--primary" onClick={() => onNavigate('home')}>{t('Return to atlas')}</button>
    </main>
  )
}

export function TaxonPage({ id, onNavigate }: CatalogPageProps) {
  const { language, number, t } = useI18n()
  const profile = getTaxonProfile(id)
  const loadOccurrences = useAppStore((state) => state.loadOccurrencesForEntity)
  const occurrences = useAppStore((state) => (
    profile ? state.occurrencesByTaxonQuery[`descendants:${profile.id}`] : undefined
  ))
  const taxonQuery = useAppStore((state) => (
    profile ? state.taxonOccurrenceQueries[`descendants:${profile.id}`] : undefined
  ))
  const taxonStatus = useAppStore((state) => (
    profile ? state.taxonOccurrenceStatus[`descendants:${profile.id}`] ?? 'idle' : 'idle'
  ))
  const taxonError = useAppStore((state) => (
    profile ? state.taxonOccurrenceErrors[`descendants:${profile.id}`] : null
  ))
  const [runtimeMedia, setRuntimeMedia] = useState<{ entityId: string; assets: MediaAsset[] } | null>(null)

  useEffect(() => {
    if (profile) void loadOccurrences(profile.id)
  }, [loadOccurrences, profile])

  useEffect(() => {
    let active = true
    if (id) void loadMediaForEntity(id).then((assets) => {
      if (active) setRuntimeMedia({ entityId: id, assets })
    }).catch(() => undefined)
    return () => { active = false }
  }, [id])

  if (!profile) return <TaxonDirectory onNavigate={onNavigate} />
  const rangeAvailable = hasPublishedRange(profile)
  const midpoint = (profile.firstAppearance + profile.lastAppearance) / 2
  const references = getReferences(profile.referenceIds)
  const media = runtimeMedia?.entityId === profile.id ? runtimeMedia.assets : getMediaForTaxon(profile.id)
  const claims = getClaimsForSubject(`taxon:${profile.id}`)
  const publication = getEntityPublication(profile.treeNodeId ?? profile.id)
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="catalog-page taxon-page">
      <header className="catalog-hero">
        <div className="catalog-hero__meta">
          <span>{t('Taxon / {rank}', { rank: t(profile.rank) })}</span>
          <ConfidenceBadge level={profile.confidence} />
        </div>
        <div className="catalog-hero__title">
          <div>
            <span className="catalog-zh">{language === 'zh' ? profile.commonNameZh : profile.commonName}</span>
            <h1><em>{profile.scientificName}</em></h1>
            <p>{t(profile.rank)} · <em>{profile.parentName}</em></p>
          </div>
          <div className="catalog-age-seal">
            {rangeAvailable ? <><strong>{formatAge(profile.firstAppearance, t('Present'))}</strong><span>{t('to')}</span><strong>{formatAge(profile.lastAppearance, t('Present'))}</strong></> : <strong>{t('Unavailable')}</strong>}
          </div>
        </div>
        <p className="catalog-dek">{t(profile.overview)}</p>
        <div className="catalog-actions">
          <button className="button button--primary" onClick={() => onNavigate('explore', {
            ...(rangeAvailable ? { age: midpoint.toFixed(1) } : {}),
            view: 'map',
            ...(profile.treeNodeId ? { taxon: profile.treeNodeId } : {}),
          })}>{t('Open in explorer')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('compare', { left: profile.id })}>{t('Compare taxon')}</button>
        </div>
      </header>

      {publication && <EvidenceStatus publication={publication} entityId={profile.id} />}

      <section className="catalog-facts">
        <div><span>{t('Status')}</span><strong className={profile.extinct ? 'is-extinct' : 'is-extant'}>{t(profile.extinct ? 'Extinct †' : 'Extant')}</strong></div>
        <div><span>{t('Bundled occurrences · represented descendants')}</span><strong>{taxonStatus === 'loading' || taxonStatus === 'idle' ? t('Loading…') : taxonStatus === 'error' ? t('Error') : number(occurrences?.length ?? 0)}</strong></div>
        <div><span>{t('PBDB identifier')}</span><strong>{profile.pbdbTaxonId ?? t('Not linked')}</strong></div>
        <div><span>{t('Query completeness')}</span><strong>{t(taxonQuery?.truncated ? 'Truncated' : taxonStatus === 'ready' || taxonStatus === 'empty' ? 'No UI truncation' : 'Pending')}</strong></div>
        <div><span>{t('Range evidence')}</span><strong>{t(profile.rangeEvidenceLevel)}{profile.rangeProvisional ? ` · ${t('Provisional')}` : ''}</strong></div>
      </section>
      {taxonStatus === 'empty' && <p className="catalog-query-state">{t('No matching row occurs in the bounded local sample; this is not evidence of biological absence.')}</p>}
      {taxonStatus === 'error' && <p className="catalog-query-state catalog-query-state--error">{t('Local taxon query failed: {error}', { error: taxonError ?? t('Unknown') })}</p>}
      {taxonQuery && <p className="catalog-query-state">{t('Loaded {rows} rows from {periods} relevant period chunk(s). Scope: {scope}. Index: {index}. Source: {method}.', { rows: number(taxonQuery.rowsLoaded), periods: taxonQuery.loadedPeriods.length, scope: t(taxonQuery.effectiveScope), index: t(taxonQuery.indexStatus), method: t(taxonQuery.samplingMethod) })}{taxonQuery.fallbackApplied ? ` ${t('The descendant index was unavailable, so this result fell back to exact taxon matching.')}` : ''}</p>}

      <div className="catalog-body">
        <aside className="catalog-toc">
          <span>{t('On this page')}</span>
          <button type="button" onClick={() => scrollToSection('evolution')}>{t('Evolution')}</button>
          <button type="button" onClick={() => scrollToSection('ecology')}>{t('Ecology')}</button>
          <button type="button" onClick={() => scrollToSection('traits')}>{t('Diagnostic context')}</button>
          <button type="button" onClick={() => scrollToSection('evidence')}>{t('Evidence')}</button>
          <button type="button" onClick={() => scrollToSection('media')}>{t('Media')}</button>
          <button type="button" onClick={() => scrollToSection('references')}>{t('References')}</button>
        </aside>

        <div className="catalog-content">
          <section id="evolution" className="catalog-section">
            <span className="section-label">{t('01 / Evolution')}</span>
            <h2>{t('Time-calibrated evidence, kept separate from fossil ranges')}</h2>
            <DivergenceLedger profileId={profile.id} />
            {profile.regionalRanges && profile.regionalRanges.length > 0 && (
              <>
                <h2>{t('Regional and concept-specific ranges')}</h2>
                <div className="statement-grid">
                  {profile.regionalRanges.map((range) => (
                    <article key={`${range.label}-${range.region}`}>
                      <span>{t(range.rangeKind)} · {t(range.evidenceLevel)}{range.provisional ? ` · ${t('Provisional')}` : ''}</span>
                      <strong>{t(range.label)}</strong>
                      <p>{t(range.region)} · {formatAge(range.olderMa, t('Present'))}—{formatAge(range.youngerMa, t('Present'))}</p>
                      <p>{t(range.basis)}</p>
                      <ConfidenceBadge level={range.confidence} />
                    </article>
                  ))}
                </div>
              </>
            )}
          </section>

          <section id="ecology" className="catalog-section">
            <span className="section-label">{t('02 / Ecology')}</span>
            <h2>{t('Reconstructed way of life')}</h2>
            <div className="ecology-grid">
              {Object.entries(profile.ecology).map(([key, value]) => (
                <article key={key}><span>{t(key.replace(/([A-Z])/g, ' $1'))}</span><strong>{t(value)}</strong></article>
              ))}
            </div>
            <div className="region-line"><span>{t('Occurrences and inferred range')}</span><p>{profile.geography.map((item) => t(item)).join(' · ')}</p></div>
          </section>

          <section id="traits" className="catalog-section">
            <span className="section-label">{t('03 / Morphology')}</span>
            <h2>{t('Diagnostic context')}</h2>
            <div className="trait-list">
              {profile.traits.map((trait, index) => <div key={trait}><span>{String(index + 1).padStart(2, '0')}</span><strong>{t(trait)}</strong></div>)}
            </div>
          </section>

          <section id="evidence" className="catalog-section evidence-callout">
            <span className="section-label">{t('04 / Evidence quality')}</span>
            <h2>{t('What supports this reconstruction?')}</h2>
            <p>{t(profile.evidenceSummary)}</p>
            <ClaimLedger claims={claims} />
            <div className="evidence-note">
              <strong>{t('Interpretive boundary')}</strong>
              <span>{t('Age ranges summarize current catalog evidence and are not exact origination or extinction instants.')}</span>
            </div>
          </section>

          <section id="media" className="catalog-section">
            <span className="section-label">{t('05 / Media')}</span>
            <h2>{t('Source media and interpretive reconstructions')}</h2>
            <div className="media-ledger">
              {media.map((asset) => asset.contentOrigin === 'ai-assisted-interpretive-reconstruction'
                ? <article key={asset.id} className="media-card media-card--reconstruction">
                    {asset.asset?.url && <img src={runtimeDataUrl(asset.asset.url)} width={asset.asset.width} height={asset.asset.height} loading="lazy" decoding="async" alt={language === 'zh' ? asset.altTextZh : asset.altText} />}
                    <span className="media-card__badge">{language === 'zh' ? asset.interpretiveNoticeZh : asset.interpretiveNotice}</span>
                    <strong>{language === 'zh' ? asset.titleZh : asset.title}</strong>
                    <small>{asset.sourceName} · {asset.subjectScope}</small>
                    <p>{language === 'zh' ? asset.captionZh : asset.caption}</p>
                    <p className="media-card__uncertainty"><b>{language === 'zh' ? '不确定性' : 'Uncertainty'}</b>{language === 'zh' ? asset.uncertaintyZh : asset.uncertainty}</p>
                    <a href={asset.sourceUrl} target="_blank" rel="noreferrer">{language === 'zh' ? '生成记录、许可与哈希' : 'Generation record, licence and hashes'} ↗</a>
                  </article>
                : <a className="media-card media-card--external" key={asset.id} href={asset.sourceUrl} target="_blank" rel="noreferrer"><span>{t(asset.type.replace('-', ' '))}</span><strong>{t(asset.title)}</strong><small>{asset.sourceName} · {asset.subjectScope}</small><p>{language === 'zh' ? asset.captionZh : asset.caption}</p><p>{t(asset.licenseNote)}</p><i>↗</i></a>)}
            </div>
          </section>

          <section id="references" className="catalog-section">
            <span className="section-label">{t('06 / Sources')}</span>
            <h2>{t('Reference ledger')}</h2>
            <ReferenceList records={references} />
          </section>
        </div>
      </div>
    </main>
  )
}

function TaxonDirectory({ onNavigate }: { onNavigate: CatalogPageProps['onNavigate'] }) {
  const { language, t } = useI18n()
  return (
    <main className="catalog-page directory-page">
      <header className="directory-hero">
        <span className="section-label">{t('Taxon catalog')}</span>
        <h1>{t('Curated branches with evidence.')}</h1>
        <p>{t('Source-linked dossiers from multiple packages appear here; broader registry-only branches remain searchable in the tree.')}</p>
      </header>
      <div className="directory-grid">
        {taxonProfiles.map((profile) => {
          const publication = getEntityPublication(profile.treeNodeId ?? profile.id)
          return (
            <button key={profile.id} onClick={() => onNavigate('taxa', { id: profile.id })}>
              <span>{language === 'zh' ? profile.commonNameZh : profile.commonName}</span>
              <h2><em>{profile.scientificName}</em></h2>
              <p>{t(profile.overview)}</p>
              <small>{t(profile.rank)} · {hasPublishedRange(profile) ? `${formatAge(profile.firstAppearance, t('Present'))}—${formatAge(profile.lastAppearance, t('Present'))}` : t('Unavailable')}</small>
              {publication && <small className={`directory-maturity directory-maturity--${publication.scientificMaturity}`}>{t(scientificMaturityLabel(publication.scientificMaturity))} · {t(reviewStatusLabel(publication.reviewStatus))}</small>}
            </button>
          )
        })}
      </div>
    </main>
  )
}

export function EventPage({ id, onNavigate }: CatalogPageProps) {
  const { language, t } = useI18n()
  const event = getEvolutionEvent(id)
  if (!event) return <EventDirectory onNavigate={onNavigate} />
  const midpoint = (event.startAge + event.endAge) / 2
  const references = getReferences(event.referenceIds)
  const claims = getClaimsForSubject(`event:${event.id}`)

  return (
    <main className="catalog-page event-page">
      <header className="catalog-hero event-hero">
        <div className="catalog-hero__meta">
          <span>{t('Event / {category}', { category: t(event.category) })}</span>
          <ConfidenceBadge level={event.confidence} />
        </div>
        <h1>{language === 'zh' ? event.titleZh : event.title}</h1>
        <div className="event-range"><strong>{formatAge(event.startAge, t('Present'))}</strong><span>→</span><strong>{formatAge(event.endAge, t('Present'))}</strong></div>
        <p className="catalog-dek">{t(event.summary)}</p>
        <div className="catalog-actions">
          <button className="button button--primary" onClick={() => onNavigate('explore', {
            age: midpoint.toFixed(2),
            older: event.startAge.toFixed(2),
            younger: event.endAge.toFixed(2),
            view: 'map',
            event: event.id,
          })}>{t('Open time state')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('compare', { event: event.id })}>{t('Compare windows')}</button>
        </div>
      </header>

      <section className="event-context-grid">
        <article><span>{t('Regions')}</span><p>{event.regions.map((item) => t(item)).join(' · ')}</p></article>
        <article><span>{t('Affected branches')}</span><p>{event.clades.map((item) => t(item)).join(' · ')}</p></article>
      </section>

      <div className="catalog-body catalog-body--wide">
        <div className="catalog-content">
          <section className="catalog-section">
            <span className="section-label">{t('01 / Observations')}</span>
            <h2>{t('Evidence in the record')}</h2>
            <div className="statement-grid">
              {event.evidenceItems.map((item, index) => <article key={item.statement}><span>{index + 1}</span><p>{t(item.statement)}</p></article>)}
            </div>
            <h2>{t('Claim-level source links')}</h2>
            <ClaimLedger claims={claims} />
          </section>
          <section className="catalog-section">
            <span className="section-label">{t('02 / Uncertainty')}</span>
            <h2>{t('What remains unresolved')}</h2>
            <div className="uncertainty-list">
              {event.uncertaintyItems.map((item) => <p key={item.statement}>{t(item.statement)}</p>)}
            </div>
          </section>
          <section className="catalog-section">
            <span className="section-label">{t('03 / Sources')}</span>
            <h2>{t('Reference ledger')}</h2>
            <ReferenceList records={references} />
          </section>
        </div>
      </div>
    </main>
  )
}

function EventDirectory({ onNavigate }: { onNavigate: CatalogPageProps['onNavigate'] }) {
  const { language, t } = useI18n()
  return (
    <main className="catalog-page directory-page">
      <header className="directory-hero">
        <span className="section-label">{t('Event catalog / 4.567 Ga—Present')}</span>
        <h1>{t('Turning points in Earth and life.')}</h1>
        <p>{t('Events are bounded evidence objects: each separates observations, interpretation and unresolved questions.')}</p>
      </header>
      <div className="event-directory">
        {evolutionEvents.map((event, index) => (
          <button key={event.id} onClick={() => onNavigate('events', { id: event.id })}>
            <span className="event-directory__index">{String(index + 1).padStart(2, '0')}</span>
            <div><small>{t(event.category)}</small><h2>{language === 'zh' ? event.titleZh : event.title}</h2><p>{t(event.summary)}</p></div>
            <strong>{formatAge(event.startAge, t('Present'))}</strong>
            <i>→</i>
          </button>
        ))}
      </div>
    </main>
  )
}

export function StoriesPage({ id, params, onNavigate }: CatalogPageProps) {
  const { language, t } = useI18n()
  if (id === 'builder') return <StoryBuilder encodedDraft={params?.get('draft')} onNavigate={onNavigate} />
  const story = getEvolutionStory(id)
  if (!story) return <StoryDirectory onNavigate={onNavigate} />
  if (story.evidenceStatus === 'blocked-pending-step-evidence') {
    return (
      <main className={`catalog-page story-reader story-reader--${story.theme}`}>
        <header className="story-reader__hero">
          <button className="story-back" onClick={() => onNavigate('stories')}>← {t('All stories')}</button>
          <span className="section-label">{t('Story withheld')}</span>
          <h1>{language === 'zh' ? story.titleZh : story.title}</h1>
          <p>{t('This story is not published because one or more steps lack claim-level scientific evidence.')}</p>
        </header>
      </main>
    )
  }

  return (
    <main className={`catalog-page story-reader story-reader--${story.theme}`}>
      <header className="story-reader__hero">
        <button className="story-back" onClick={() => onNavigate('stories')}>← {t('All stories')}</button>
        <span className="section-label">{t('Field story / {minutes} min', { minutes: story.durationMinutes })}</span>
        <h1>{language === 'zh' ? story.titleZh : story.title}</h1>
        <p>{t(story.dek)}</p>
        <p className="catalog-query-state">{t('Available with limitations: every step links to a reviewed claim, but the story remains an editorial synthesis.')}</p>
      </header>

      <div className="story-sequence">
        {story.steps.map((step, index) => (
          <article key={step.id} className="story-step">
            <div className="story-step__rail">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i />
            </div>
            <div className="story-step__content">
              <small>{formatAge(step.age, t('Present'))} · {t(step.view)}</small>
              <h2>{t(step.title)}</h2>
              <p>{t(step.text)}</p>
              {step.annotation && <blockquote>{t(step.annotation)}</blockquote>}
              <button onClick={() => onNavigate('explore', {
                age: step.age.toFixed(2),
                older: step.timeRange[0].toFixed(2),
                younger: step.timeRange[1].toFixed(2),
                view: step.view === 'tree' || step.view === 'diversity' ? step.view : 'map',
                ...explorerTaxonState(step.taxonIds[0]),
                ...(step.eventId ? { event: step.eventId } : {}),
                story: story.id,
                step: step.id,
              })}>{t('Open this state in Explorer')} <span>↗</span></button>
            </div>
            <aside className="story-step__meta">
              <span>{t('Window')}</span>
              <strong>{formatAge(step.timeRange[0], t('Present'))}<br />{formatAge(step.timeRange[1], t('Present'))}</strong>
              <span>{t('Claims / sources')}</span>
              <strong>{step.claimLinks.length} / {new Set(step.claimLinks.flatMap((link) => evidenceClaims.find((claim) => claim.id === link.claimId)?.referenceLinks.map((referenceLink) => referenceLink.referenceId) ?? [])).size}</strong>
            </aside>
          </article>
        ))}
      </div>
      <StoryLearningPanel story={story} />
    </main>
  )
}

function StoryDirectory({ onNavigate }: { onNavigate: CatalogPageProps['onNavigate'] }) {
  const { language, t } = useI18n()
  const [facet, setFacet] = useState('all')
  const publishedStories = evolutionStories.filter((story) => story.evidenceStatus === 'available-with-limitations')
  const eraForStory = (story: (typeof publishedStories)[number]) => {
    const oldestStep = Math.max(...story.steps.map((step) => step.age))
    if (oldestStep > 538.8) return 'Precambrian'
    if (oldestStep > 251.902) return 'Paleozoic'
    if (oldestStep > 66) return 'Mesozoic'
    return 'Cenozoic'
  }
  const eras = [...new Set(publishedStories.map(eraForStory))]
  const taxa = [...new Set(publishedStories.flatMap((story) => story.steps.flatMap((step) => step.taxonIds)))]
  const themes = [...new Set(publishedStories.map((story) => story.theme))]
  const filteredStories = publishedStories.filter((story) => {
    const [kind, value] = facet.split(':')
    if (facet === 'all') return true
    if (kind === 'era') return eraForStory(story) === value
    if (kind === 'taxon') return story.steps.some((step) => step.taxonIds.includes(value))
    if (kind === 'theme') return story.theme === value
    return true
  })
  const taxonName = (id: string) => {
    const profile = getTaxonProfile(id)
    return profile ? (language === 'zh' ? profile.commonNameZh : profile.commonName) : id
  }
  const courses = [
    { id: 'herbivore-change', title: t('Deep-time herbivore change'), description: t('A two-story sequence on radiation, turnover and why ecological succession is not ancestry.'), storyIds: ['rise-and-fall-perissodactyls', 'ungulate-guild-turnover'] },
    { id: 'evidence-practice', title: t('Reading evidence and uncertainty'), description: t('Use habitat and locomotor cases to practice separating observations, interpretations and missing evidence.'), storyIds: ['semi-aquatic-ungulates', 'horse-forest-to-grassland'] },
  ]
  return (
    <main className="catalog-page directory-page story-directory-page">
      <header className="directory-hero">
        <span className="section-label">{t('Field stories / reproducible states')}</span>
        <h1>{t('Follow an argument through deep time.')}</h1>
        <p>{t('Every chapter is a real Explorer state with a time window, primary view, highlighted evidence and reference set.')}</p>
      </header>
      <div className="story-builder-callout"><div><small>{t('Local teaching studio')}</small><h2>{t('Build from real Explorer states')}</h2><p>{t('Save in this browser, import or export JSON, derive citations and share an embeddable draft without a server.')}</p></div><button onClick={() => onNavigate('stories', { id: 'builder' })}>{t('Open Story Builder')} →</button></div>
      <section className="story-facets" aria-label={t('Group stories by era, taxon and theme')}>
        <div><small>{t('All')}</small><button className={facet === 'all' ? 'is-active' : ''} aria-pressed={facet === 'all'} onClick={() => setFacet('all')}>{t('All published stories')} · {publishedStories.length}</button></div>
        <div><small>{t('By era')}</small>{eras.map((era) => <button key={era} className={facet === `era:${era}` ? 'is-active' : ''} aria-pressed={facet === `era:${era}`} onClick={() => setFacet(`era:${era}`)}>{t(era)}</button>)}</div>
        <div><small>{t('By taxon')}</small>{taxa.map((taxonId) => <button key={taxonId} className={facet === `taxon:${taxonId}` ? 'is-active' : ''} aria-pressed={facet === `taxon:${taxonId}`} onClick={() => setFacet(`taxon:${taxonId}`)}>{taxonName(taxonId)}</button>)}</div>
        <div><small>{t('By theme')}</small>{themes.map((theme) => <button key={theme} className={facet === `theme:${theme}` ? 'is-active' : ''} aria-pressed={facet === `theme:${theme}`} onClick={() => setFacet(`theme:${theme}`)}>{t(theme)}</button>)}</div>
      </section>
      <div className="story-directory">
        {filteredStories.map((story, index) => (
          <button key={story.id} className={`story-directory__card story-directory__card--${story.theme}`} onClick={() => onNavigate('stories', { id: story.id })}>
            <div className="story-directory__top"><span>{String(index + 1).padStart(2, '0')}</span><small>{story.durationMinutes} {language === 'zh' ? '分钟' : 'min'}</small></div>
            <div><h2>{language === 'zh' ? story.titleZh : story.title}</h2><p>{t(story.dek)}</p></div>
            <footer><span>{t('{count} explorer states', { count: story.steps.length })}</span><i>→</i></footer>
          </button>
        ))}
      </div>
      <section className="story-courses">
        <header><small>{t('Course collections')}</small><h2>{t('Teach with an evidence-bound sequence.')}</h2><p>{t('Collections order published stories; each chapter still opens its own claim-linked Explorer states.')}</p></header>
        <div>{courses.map((course, courseIndex) => <article key={course.id}><span>{String(courseIndex + 1).padStart(2, '0')}</span><h3>{course.title}</h3><p>{course.description}</p><ol>{course.storyIds.map((storyId) => { const story = publishedStories.find((entry) => entry.id === storyId); return story ? <li key={story.id}><button onClick={() => onNavigate('stories', { id: story.id })}>{language === 'zh' ? story.titleZh : story.title}<i>→</i></button></li> : null })}</ol></article>)}</div>
      </section>
    </main>
  )
}

export { MissingEntry }
