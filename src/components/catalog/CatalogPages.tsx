import { useEffect } from 'react'
import {
  evolutionEvents,
  evolutionStories,
  getEvolutionEvent,
  getEvolutionStory,
  getReferences,
  getTaxonProfile,
  getMediaForTaxon,
  perissodactylCalibrations,
  taxonProfiles,
} from '../../services/catalog'
import { useAppStore } from '../../store'
import type { AppRoute } from '../../utils/routing'
import type { ConfidenceLevel, ReferenceRecord } from '../../types'
import './CatalogPages.css'

interface CatalogPageProps {
  id: string | null
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

function formatAge(age: number): string {
  if (age === 0) return 'Present'
  if (age >= 1000) return `${(age / 1000).toFixed(2)} Ga`
  if (age < 1) return `${Math.round(age * 1000)} ka`
  return `${Number.isInteger(age) ? age : age.toFixed(1)} Ma`
}

function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  return <span className={`confidence confidence--${level}`}>{level} confidence</span>
}

function ReferenceList({ records }: { records: ReferenceRecord[] }) {
  return (
    <div className="reference-list">
      {records.map((reference, index) => (
        <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <strong>{reference.title}</strong>
            <small>{reference.authors} · {reference.year}{reference.doi ? ` · DOI ${reference.doi}` : ''}</small>
          </div>
          <i>↗</i>
        </a>
      ))}
    </div>
  )
}

function DivergenceLedger() {
  const maximumAge = 60
  return (
    <div className="divergence-ledger">
      <div className="divergence-axis"><span>60 Ma</span><span>Published node estimate</span><span>0 Ma</span></div>
      {perissodactylCalibrations.map((estimate) => {
        const older = estimate.olderMa ?? estimate.medianMa
        const younger = estimate.youngerMa ?? estimate.medianMa
        const reference = getReferences([estimate.referenceId])[0]
        return (
          <article key={estimate.id}>
            <div><strong>{estimate.nodeLabel}</strong><small>{estimate.method}</small></div>
            <div className="divergence-track">
              <i style={{ left: `${(1 - older / maximumAge) * 100}%`, width: `${Math.max(.4, (older - younger) / maximumAge * 100)}%` }} />
              <b style={{ left: `${(1 - estimate.medianMa / maximumAge) * 100}%` }} />
            </div>
            <span>{estimate.medianMa.toFixed(1)} Ma{estimate.youngerMa != null && estimate.olderMa != null ? ` · ${estimate.olderMa.toFixed(1)}–${estimate.youngerMa.toFixed(1)}` : ''}</span>
            <p>{estimate.note}</p>
            {reference && <a href={reference.url} target="_blank" rel="noreferrer">Source ↗</a>}
          </article>
        )
      })}
      <aside><strong>Do not merge unlike clocks silently.</strong><span>These are study-specific node estimates with different datasets and methods. The atlas preserves them as an evidence ledger rather than forcing them into the occurrence-derived whole-life tree.</span></aside>
    </div>
  )
}

function MissingEntry({ kind, onNavigate }: { kind: string; onNavigate: CatalogPageProps['onNavigate'] }) {
  return (
    <main className="catalog-page catalog-missing">
      <span className="section-label">Catalog / not found</span>
      <h1>No {kind} selected.</h1>
      <p>Use global search to open a stable catalog entry.</p>
      <button className="button button--primary" onClick={() => onNavigate('home')}>Return to atlas</button>
    </main>
  )
}

export function TaxonPage({ id, onNavigate }: CatalogPageProps) {
  const profile = getTaxonProfile(id)
  const loadOccurrences = useAppStore((state) => state.loadOccurrencesForTaxon)
  const occurrences = useAppStore((state) => (
    profile?.pbdbTaxonId ? state.occurrencesByTaxon[profile.pbdbTaxonId] : undefined
  ))

  useEffect(() => {
    if (profile?.pbdbTaxonId) void loadOccurrences(profile.pbdbTaxonId)
  }, [loadOccurrences, profile?.pbdbTaxonId])

  if (!profile) return <TaxonDirectory onNavigate={onNavigate} />
  const midpoint = (profile.firstAppearance + profile.lastAppearance) / 2
  const references = getReferences(profile.referenceIds)
  const media = getMediaForTaxon(profile.id)

  return (
    <main className="catalog-page taxon-page">
      <header className="catalog-hero">
        <div className="catalog-hero__meta">
          <span>Taxon / {profile.rank}</span>
          <ConfidenceBadge level={profile.confidence} />
        </div>
        <div className="catalog-hero__title">
          <div>
            <span className="catalog-zh">{profile.commonNameZh}</span>
            <h1><em>{profile.scientificName}</em></h1>
            <p>{profile.commonName} · {profile.parentName}</p>
          </div>
          <div className="catalog-age-seal">
            <strong>{formatAge(profile.firstAppearance)}</strong>
            <span>to</span>
            <strong>{formatAge(profile.lastAppearance)}</strong>
          </div>
        </div>
        <p className="catalog-dek">{profile.overview}</p>
        <div className="catalog-actions">
          <button className="button button--primary" onClick={() => onNavigate('explore', {
            age: midpoint.toFixed(1),
            view: 'map',
            ...(profile.treeNodeId ? { taxon: profile.treeNodeId } : {}),
          })}>Open in explorer</button>
          <button className="button button--ghost" onClick={() => onNavigate('compare', { left: profile.id })}>Compare taxon</button>
        </div>
      </header>

      <section className="catalog-facts">
        <div><span>Status</span><strong className={profile.extinct ? 'is-extinct' : 'is-extant'}>{profile.extinct ? 'Extinct †' : 'Extant'}</strong></div>
        <div><span>Local occurrence sample</span><strong>{occurrences ? occurrences.length.toLocaleString() : 'Loading…'}</strong></div>
        <div><span>PBDB identifier</span><strong>{profile.pbdbTaxonId ?? 'Not linked'}</strong></div>
        <div><span>Known geography</span><strong>{profile.geography.length} regions</strong></div>
      </section>

      <div className="catalog-body">
        <aside className="catalog-toc">
          <span>On this page</span>
          <a href="#evolution">Evolution</a>
          <a href="#ecology">Ecology</a>
          <a href="#traits">Diagnostic context</a>
          <a href="#evidence">Evidence</a>
          <a href="#media">Media</a>
          <a href="#references">References</a>
        </aside>

        <div className="catalog-content">
          <section id="evolution" className="catalog-section">
            <span className="section-label">01 / Evolution</span>
            <h2>Time-calibrated evidence, kept separate from fossil ranges</h2>
            <DivergenceLedger />
          </section>

          <section id="ecology" className="catalog-section">
            <span className="section-label">02 / Ecology</span>
            <h2>Reconstructed way of life</h2>
            <div className="ecology-grid">
              {Object.entries(profile.ecology).map(([key, value]) => (
                <article key={key}><span>{key.replace(/([A-Z])/g, ' $1')}</span><strong>{value}</strong></article>
              ))}
            </div>
            <div className="region-line"><span>Occurrences and inferred range</span><p>{profile.geography.join(' · ')}</p></div>
          </section>

          <section id="traits" className="catalog-section">
            <span className="section-label">03 / Morphology</span>
            <h2>Diagnostic context</h2>
            <div className="trait-list">
              {profile.traits.map((trait, index) => <div key={trait}><span>{String(index + 1).padStart(2, '0')}</span><strong>{trait}</strong></div>)}
            </div>
          </section>

          <section id="evidence" className="catalog-section evidence-callout">
            <span className="section-label">04 / Evidence quality</span>
            <h2>What supports this reconstruction?</h2>
            <p>{profile.evidenceSummary}</p>
            <div className="evidence-note">
              <strong>Interpretive boundary</strong>
              <span>Age ranges summarize current catalog evidence and are not exact origination or extinction instants.</span>
            </div>
          </section>

          <section id="media" className="catalog-section">
            <span className="section-label">05 / Museum media</span>
            <h2>Specimens and reconstructions at their source</h2>
            <div className="media-ledger">
              {media.map((asset) => <a key={asset.id} href={asset.sourceUrl} target="_blank" rel="noreferrer"><span>{asset.type.replace('-', ' ')}</span><strong>{asset.title}</strong><small>{asset.sourceName}</small><p>{asset.licenseNote}</p><i>↗</i></a>)}
            </div>
          </section>

          <section id="references" className="catalog-section">
            <span className="section-label">06 / Sources</span>
            <h2>Reference ledger</h2>
            <ReferenceList records={references} />
          </section>
        </div>
      </div>
    </main>
  )
}

function TaxonDirectory({ onNavigate }: { onNavigate: CatalogPageProps['onNavigate'] }) {
  return (
    <main className="catalog-page directory-page">
      <header className="directory-hero">
        <span className="section-label">Taxon catalog</span>
        <h1>Curated branches with evidence.</h1>
        <p>Milestone two begins with ten richly annotated perissodactyl exemplars; the tree remains searchable at broader scale.</p>
      </header>
      <div className="directory-grid">
        {taxonProfiles.map((profile) => (
          <button key={profile.id} onClick={() => onNavigate('taxa', { id: profile.id })}>
            <span>{profile.commonNameZh}</span>
            <h2><em>{profile.scientificName}</em></h2>
            <p>{profile.overview}</p>
            <small>{profile.rank} · {formatAge(profile.firstAppearance)}—{formatAge(profile.lastAppearance)}</small>
          </button>
        ))}
      </div>
    </main>
  )
}

export function EventPage({ id, onNavigate }: CatalogPageProps) {
  const event = getEvolutionEvent(id)
  if (!event) return <EventDirectory onNavigate={onNavigate} />
  const midpoint = (event.startAge + event.endAge) / 2
  const references = getReferences(event.referenceIds)

  return (
    <main className="catalog-page event-page">
      <header className="catalog-hero event-hero">
        <div className="catalog-hero__meta">
          <span>Event / {event.category}</span>
          <ConfidenceBadge level={event.confidence} />
        </div>
        <span className="catalog-zh">{event.titleZh}</span>
        <h1>{event.title}</h1>
        <div className="event-range"><strong>{formatAge(event.startAge)}</strong><span>→</span><strong>{formatAge(event.endAge)}</strong></div>
        <p className="catalog-dek">{event.summary}</p>
        <div className="catalog-actions">
          <button className="button button--primary" onClick={() => onNavigate('explore', { age: midpoint.toFixed(2), view: 'map' })}>Open time state</button>
          <button className="button button--ghost" onClick={() => onNavigate('compare', { event: event.id })}>Compare windows</button>
        </div>
      </header>

      <section className="event-context-grid">
        <article><span>Regions</span><p>{event.regions.join(' · ')}</p></article>
        <article><span>Affected branches</span><p>{event.clades.join(' · ')}</p></article>
      </section>

      <div className="catalog-body catalog-body--wide">
        <div className="catalog-content">
          <section className="catalog-section">
            <span className="section-label">01 / Observations</span>
            <h2>Evidence in the record</h2>
            <div className="statement-grid">
              {event.evidence.map((item, index) => <article key={item}><span>{index + 1}</span><p>{item}</p></article>)}
            </div>
          </section>
          <section className="catalog-section">
            <span className="section-label">02 / Uncertainty</span>
            <h2>What remains unresolved</h2>
            <div className="uncertainty-list">
              {event.uncertainties.map((item) => <p key={item}>{item}</p>)}
            </div>
          </section>
          <section className="catalog-section">
            <span className="section-label">03 / Sources</span>
            <h2>Reference ledger</h2>
            <ReferenceList records={references} />
          </section>
        </div>
      </div>
    </main>
  )
}

function EventDirectory({ onNavigate }: { onNavigate: CatalogPageProps['onNavigate'] }) {
  return (
    <main className="catalog-page directory-page">
      <header className="directory-hero">
        <span className="section-label">Event catalog / 4.567 Ga—Present</span>
        <h1>Turning points in Earth and life.</h1>
        <p>Events are bounded evidence objects: each separates observations, interpretation and unresolved questions.</p>
      </header>
      <div className="event-directory">
        {evolutionEvents.map((event, index) => (
          <button key={event.id} onClick={() => onNavigate('events', { id: event.id })}>
            <span className="event-directory__index">{String(index + 1).padStart(2, '0')}</span>
            <div><small>{event.category}</small><h2>{event.titleZh}</h2><p>{event.title}</p></div>
            <strong>{formatAge(event.startAge)}</strong>
            <i>→</i>
          </button>
        ))}
      </div>
    </main>
  )
}

export function StoriesPage({ id, onNavigate }: CatalogPageProps) {
  const story = getEvolutionStory(id)
  if (!story) return <StoryDirectory onNavigate={onNavigate} />

  return (
    <main className={`catalog-page story-reader story-reader--${story.theme}`}>
      <header className="story-reader__hero">
        <button className="story-back" onClick={() => onNavigate('stories')}>← All stories</button>
        <span className="section-label">Field story / {story.durationMinutes} min</span>
        <span className="catalog-zh">{story.titleZh}</span>
        <h1>{story.title}</h1>
        <p>{story.dek}</p>
      </header>

      <div className="story-sequence">
        {story.steps.map((step, index) => (
          <article key={step.id} className="story-step">
            <div className="story-step__rail">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i />
            </div>
            <div className="story-step__content">
              <small>{formatAge(step.age)} · {step.view}</small>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
              {step.annotation && <blockquote>{step.annotation}</blockquote>}
              <button onClick={() => onNavigate('explore', {
                age: step.age.toFixed(2),
                view: step.view === 'tree' || step.view === 'diversity' ? step.view : 'map',
                ...(step.taxonIds[0] ? { profile: step.taxonIds[0] } : {}),
                ...(step.eventId ? { event: step.eventId } : {}),
                story: story.id,
                step: step.id,
              })}>Open this state in Explorer <span>↗</span></button>
            </div>
            <aside className="story-step__meta">
              <span>Window</span>
              <strong>{formatAge(step.timeRange[0])}<br />{formatAge(step.timeRange[1])}</strong>
              <span>References</span>
              <strong>{step.referenceIds.length}</strong>
            </aside>
          </article>
        ))}
      </div>
    </main>
  )
}

function StoryDirectory({ onNavigate }: { onNavigate: CatalogPageProps['onNavigate'] }) {
  return (
    <main className="catalog-page directory-page story-directory-page">
      <header className="directory-hero">
        <span className="section-label">Field stories / reproducible states</span>
        <h1>Follow an argument through deep time.</h1>
        <p>Every chapter is a real Explorer state with a time window, primary view, highlighted evidence and reference set.</p>
      </header>
      <div className="story-directory">
        {evolutionStories.map((story, index) => (
          <button key={story.id} className={`story-directory__card story-directory__card--${story.theme}`} onClick={() => onNavigate('stories', { id: story.id })}>
            <div className="story-directory__top"><span>{String(index + 1).padStart(2, '0')}</span><small>{story.durationMinutes} min</small></div>
            <div><span className="story-directory__zh">{story.titleZh}</span><h2>{story.title}</h2><p>{story.dek}</p></div>
            <footer><span>{story.steps.length} explorer states</span><i>→</i></footer>
          </button>
        ))}
      </div>
    </main>
  )
}

export { MissingEntry }
