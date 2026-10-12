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
import { getEntityPublication } from '../../services/publication'
import { loadMediaForEntity, runtimeDataUrl } from '../../data-client/staticDataClient'
import { EvidenceIssueLink } from '../common/EvidenceIssueLink'
import { useAppStore } from '../../store'
import type { AppRoute } from '../../utils/routing'
import type { ReferenceRecord } from '../../types'
import type { MediaAsset } from '../../types/catalog'
import { useI18n } from '../../i18n'
import { localizedProfileText } from '../../i18n/profileText'
import { StoryBuilder, StoryLearningPanel } from './StoryStudio'
import readingGuides from '../../../data/reading-guides.json'
import './CatalogPages.css'
import { LocalTreePanel } from '../tree/LocalTreePanel'
import { NodeReadingSections } from '../reading/NodeReadingSections'
import { ReadingCards } from '../reading/ReadingPages'

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

function ReferenceList({ records }: { records: ReferenceRecord[] }) {
  const { t } = useI18n()
  return (
    <div className="reference-list">
      {records.map((reference, index) => (
        <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <strong>{reference.title}</strong>
            <small>{Array.isArray(reference.authors) ? reference.authors.join('; ') : reference.authors} · {reference.publishedYear ?? t('n.d.')}{reference.version ? ` · v${reference.version}` : ''}{reference.accessedAt ? ` · ${t('accessed {date}', { date: reference.accessedAt })}` : ''}{reference.doi ? ` · DOI ${reference.doi}` : ''}</small>
          </div>
          {reference.url && <i>↗</i>}
        </a>
      ))}
    </div>
  )
}

function DivergenceLedger({ profileId }: { profileId: string }) {
  const { t } = useI18n()
  const estimates = getCalibrationsForTaxon(profileId)
  const maximumAge = Math.max(1, ...estimates.map((estimate) => estimate.olderMa ?? estimate.medianMa)) * 1.08
  if (!estimates.length) {
    return null
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
            {reference?.url && <a href={reference.url} target="_blank" rel="noreferrer">{t('Source ↗')}</a>}
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
  const [materialsOpen, setMaterialsOpen] = useState(false)

  useEffect(() => {
    if (profile && materialsOpen) void loadOccurrences(profile.id)
  }, [loadOccurrences, profile, materialsOpen])

  useEffect(() => {
    let active = true
    if (id && materialsOpen) void loadMediaForEntity(id).then((assets) => {
      if (active) setRuntimeMedia({ entityId: id, assets })
    }).catch(() => undefined)
    return () => { active = false }
  }, [id, materialsOpen])

  if (!profile) return <TaxonDirectory onNavigate={onNavigate} />
  const rangeAvailable = hasPublishedRange(profile)
  const midpoint = (profile.firstAppearance + profile.lastAppearance) / 2
  const references = getReferences(profile.referenceIds)
  const locale = language === 'zh' ? 'zh' : 'en'
  const readerSources = profile.readerSources ?? []
  const media = runtimeMedia?.entityId === profile.id ? runtimeMedia.assets : getMediaForTaxon(profile.id)
  const claims = getClaimsForSubject(`taxon:${profile.id}`)
  const fallbackSections = claims.filter(claim => claim.claimKind === 'scientific').map(claim => ({
    id: claim.id, topic: claim.claimType, text: { en: claim.statement, zh: generatedClaimStatementsZh[claim.statement] ?? t(claim.statement) },
    sourceIds: claim.referenceLinks.map(link => link.referenceId),
    context: [language === 'zh' ? claim.confidenceRationaleZh : claim.confidenceRationale].filter(Boolean),
    contextLanguage: language,
  }))
  const proseSections = profile.readerSections ?? fallbackSections
  const proseSources = profile.readerSections?.length ? readerSources : getReferences(claims.flatMap(claim => claim.referenceLinks.map(link => link.referenceId)))
  const introduction = profile.readerSections?.find(section => section.id === 'reading-introduction')
  const publication = getEntityPublication(profile.treeNodeId ?? profile.id)
  const readingGuide = readingGuides.find(guide => guide.taxonId === profile.id)

  return (
    <main className="catalog-page taxon-page">
      <header className="catalog-hero">
        <div className="catalog-hero__meta">
          <span>{t('Taxon / {rank}', { rank: t(profile.rank) })}</span>
        </div>
        <div className="catalog-hero__title">
          <div>
            <span className="catalog-zh">{language === 'zh' ? profile.commonNameZh : profile.commonName}</span>
            <h1><em>{profile.scientificName}</em></h1>
            <p>{t(profile.rank)} · <em>{profile.parentName}</em></p>
          </div>
          <div className="catalog-age-seal">
            {rangeAvailable && <><span>{language === 'zh' ? '对应资料的时间范围' : 'Time range of the represented material'}</span><strong>{formatAge(profile.firstAppearance, t('Present'))}</strong><span>{t('to')}</span><strong>{formatAge(profile.lastAppearance, t('Present'))}</strong></>}
          </div>
        </div>
        <p className="catalog-dek">{introduction?.text[locale] ?? localizedProfileText(profile, profile.overview, language, t)}</p>
        <div className="catalog-actions">
          <button className="button button--primary" onClick={() => onNavigate('explore', {
            ...(rangeAvailable ? { age: midpoint.toFixed(1) } : {}),
            view: 'map',
            ...(profile.treeNodeId ? { taxon: profile.treeNodeId } : {}),
          })}>{t('Open in explorer')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('compare', { left: profile.id })}>{t('Compare taxon')}</button>
        </div>
      </header>

      {readingGuide && <aside className="taxon-reading-entry">
        <span>{language === 'zh' ? '相关主线文章' : 'Related chapter'}</span>
        <a href={`#/stories?reading=${readingGuide.id}`}>{readingGuide.title[language]} →</a>
        <p>{readingGuide.dek[language]}</p>
      </aside>}

      <section id="reader" className="taxon-reader">
        <NodeReadingSections sections={proseSections.filter(section => section.id !== 'reading-introduction')} sources={proseSources} language={locale} />
        <LocalTreePanel nodeId={profile.treeNodeId ?? profile.id} />
        {!!profile.readerRelatedPages?.length && <nav className="taxon-reader__related" aria-label={locale === 'zh' ? '相关阅读' : 'Related reading'}>
          {profile.readerRelatedPages.map(page => <button key={page.targetId} type="button" onClick={() => onNavigate('taxa', { id: page.targetId })}>
            <span>{page.context[locale]}</span><strong>{page.label[locale]} →</strong>
          </button>)}
        </nav>}
        {profile.readerLimitations && <aside className="taxon-reader__scope"><p>{profile.readerLimitations[locale]}</p></aside>}
      </section>

      {publication && <EvidenceIssueLink entityId={profile.id} />}

      <details className="taxon-query-details" onToggle={event => setMaterialsOpen(event.currentTarget.open)}>
        <summary>{language === 'zh' ? '化石样本、分类标识与查询范围' : 'Fossil samples, identifiers and query scope'}</summary>
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

      </details>

      <section className="catalog-section">
        <DivergenceLedger profileId={profile.id} />
      </section>
      {!!media.length && <details className="taxon-materials">
        <summary>{language === 'zh' ? '标本图像与复原材料' : 'Specimen images and reconstructions'}</summary>
        <div className="media-ledger">{media.map(asset => <article key={asset.id} className={`media-card${asset.contentOrigin === 'ai-assisted-interpretive-reconstruction' ? ' media-card--reconstruction' : ' media-card--external'}`}>
          {asset.asset?.url && <img src={runtimeDataUrl(asset.asset.url)} width={asset.asset.width} height={asset.asset.height} loading="lazy" decoding="async" alt={language === 'zh' ? asset.altTextZh : asset.altText} />}
          <strong>{language === 'zh' ? asset.titleZh : asset.title}</strong>
          <p>{language === 'zh' ? asset.captionZh : asset.caption}</p>
          {asset.contentOrigin === 'ai-assisted-interpretive-reconstruction' && <><p className="media-card__badge">{language === 'zh' ? asset.interpretiveNoticeZh : asset.interpretiveNotice}</p><p className="media-card__uncertainty">{language === 'zh' ? asset.uncertaintyZh : asset.uncertainty}</p></>}
          <p>{t(asset.licenseNote)}</p>
          <a href={asset.sourceUrl} target="_blank" rel="noreferrer">{asset.sourceName} ↗</a>
        </article>)}</div>
      </details>}
      <details className="taxon-materials"><summary>{language === 'zh' ? '文献与材料来源' : 'Bibliography and material sources'}</summary><ReferenceList records={references} /></details>
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
        {[...taxonProfiles].sort((left, right) => Number(Boolean(right.readerSections?.length)) - Number(Boolean(left.readerSections?.length))).map((profile) => {
          return (
            <button key={profile.id} onClick={() => onNavigate('taxa', { id: profile.id })}>
              <span>{language === 'zh' ? profile.commonNameZh : profile.commonName}</span>
              <h2><em>{profile.scientificName}</em></h2>
              <p>{profile.readerSections?.find(section => section.id === 'reading-introduction')?.text[language] ?? localizedProfileText(profile, profile.overview, language, t)}</p>
              <small>{t(profile.rank)} · {hasPublishedRange(profile) ? `${formatAge(profile.firstAppearance, t('Present'))}—${formatAge(profile.lastAppearance, t('Present'))}` : t('Unavailable')}</small>
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
      {event.clades.map(clade => <LocalTreePanel key={clade} nodeId={clade} />)}

      <div className="catalog-body catalog-body--wide">
        <div className="catalog-content">
          <section className="catalog-section">
            <span className="section-label">{t('01 / Observations')}</span>
            <h2>{language === 'zh' ? '记录中保存了什么' : 'What the record preserves'}</h2>
            <div className="statement-grid">
              {event.evidenceItems.map((item, index) => <article key={item.statement}><span>{index + 1}</span><p>{t(item.statement)}</p></article>)}
            </div>
            <NodeReadingSections sections={claims.filter(claim => claim.claimKind === 'scientific').map(claim => ({id: claim.id, topic: claim.claimType, text: {en: claim.statement, zh: generatedClaimStatementsZh[claim.statement] ?? t(claim.statement)}, sourceIds: claim.referenceLinks.map(link => link.referenceId), context: [language === 'zh' ? claim.confidenceRationaleZh : claim.confidenceRationale].filter(Boolean), contextLanguage: language}))} sources={getReferences(claims.flatMap(claim => claim.referenceLinks.map(link => link.referenceId)))} language={language} />
          </section>
          <section className="catalog-section">
            <span className="section-label">{t('02 / Uncertainty')}</span>
            <h2>{language === 'zh' ? '这些变化怎样解释' : 'How are these changes explained?'}</h2>
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
        <p>{language === 'zh' ? '从环境变化、化石材料与新结构的出现，认识地球和生命历史中的转折。' : 'Follow environmental changes, fossil material and new structures through turning points in Earth and life.'}</p>
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
  if (id === 'builder') return <StoryBuilder key={params?.get('draft') ?? 'local'} encodedDraft={params?.get('draft')} onNavigate={onNavigate} />
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
              {step.taxonIds.map(taxonId => <LocalTreePanel key={taxonId} nodeId={taxonId} />)}
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
      <section className="reading-section"><ReadingCards /></section>
      <details className="story-builder-callout"><summary>{language === 'zh' ? '高级工具：编写自己的章节' : 'Advanced tools: compose your own chapter'}</summary><button onClick={() => onNavigate('stories', { id: 'builder' })}>{t('Open Story Builder')} →</button></details>
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
