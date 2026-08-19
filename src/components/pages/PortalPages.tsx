import manifest from '../../../data/manifest.json'
import { evolutionEvents, evolutionStories, taxonProfiles } from '../../services/catalog'
import { buildEvidenceIssueUrl, getPackagePublication, publicationPackages, scientificMaturityLabel } from '../../services/publication'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import { EvidenceStatus } from '../common/EvidenceStatus'
import './PortalPages.css'

interface PortalPageProps {
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

const maturityStages = [
  ['generated-scaffold', 'Structure and bilingual identity are available; scientific content remains provisional.'],
  ['curator-draft', 'Claims and sources are linked by the project curator; human domain review is pending.'],
  ['source-complete', 'Required claim types have fit sources and concrete locators.'],
  ['expert-reviewed', 'A named domain specialist has recorded a decision, scope and conflict statement.'],
  ['published-featured', 'Expert-reviewed content passes the public-feature and reproducibility gates.'],
] as const

export function CatalogHubPage({ onNavigate }: PortalPageProps) {
  const { language, t } = useI18n()
  const flagship = getPackagePublication('perissodactyla')
  const scaffolds = publicationPackages.filter((entry) => entry.scientificMaturity === 'generated-scaffold')

  return (
    <main className="portal-page">
      <header className="portal-hero portal-hero--catalog">
        <span className="section-label">{t('Catalog / taxa and events')}</span>
        <h1>{t('Find a branch. Inspect its evidence boundary.')}</h1>
        <p>{t('Catalog separates richly curated dossiers from generated navigation scaffolds, so coverage never masquerades as scientific maturity.')}</p>
        <div className="portal-actions">
          <button className="button button--primary" onClick={() => onNavigate('taxa')}>{t('Browse taxon dossiers')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('events')}>{t('Browse evolutionary events')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('stories')}>{t('Follow a field story')}</button>
        </div>
      </header>

      <section className="portal-section portal-featured">
        <div className="portal-section__heading"><span>01</span><div><small>{t('Flagship vertical slice')}</small><h2>{t('Audited Perissodactyla pathway')}</h2></div></div>
        {flagship && <EvidenceStatus publication={flagship} entityId="perissodactyla" />}
        <div className="portal-featured__grid">
          <article><strong>{taxonProfiles.length}</strong><span>{t('rich taxon dossiers')}</span></article>
          <article><strong>{manifest.records.evidenceClaims}</strong><span>{t('atlas claim records')}</span></article>
          <article><strong>{manifest.records.references}</strong><span>{t('linked references')}</span></article>
          <article><strong>{t('Pending')}</strong><span>{t('named human domain review')}</span></article>
        </div>
        <p>{t('The flagship has complete paginated occurrence retrieval and claim-level source links. It remains a curator draft until a qualified human reviewer records an acceptance decision.')}</p>
        <button className="text-action" onClick={() => onNavigate('taxa', { id: 'perissodactyla' })}>{t('Open the flagship dossier')} →</button>
      </section>

      <section className="portal-section">
        <div className="portal-section__heading"><span>02</span><div><small>{t('Ways in')}</small><h2>{t('Choose the object you need')}</h2></div></div>
        <div className="portal-card-grid portal-card-grid--three">
          <button onClick={() => onNavigate('taxa')}><small>{t('Taxa')}</small><h3>{taxonProfiles.length} {t('curated dossiers')}</h3><p>{t('Morphology, ecology, range evidence, claims and references.')}</p><i>→</i></button>
          <button onClick={() => onNavigate('events')}><small>{t('Events')}</small><h3>{evolutionEvents.length} {t('bounded events')}</h3><p>{t('Observations, interpretations and unresolved questions kept separate.')}</p><i>→</i></button>
          <button onClick={() => onNavigate('stories')}><small>{t('Stories')}</small><h3>{evolutionStories.length} {t('published stories')}</h3><p>{t('Guided arguments that resolve to reproducible Explorer states.')}</p><i>→</i></button>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-section__heading"><span>03</span><div><small>{t('Scientific maturity')}</small><h2>{t('One visible ladder, five explicit gates')}</h2></div></div>
        <ol className="maturity-ladder">
          {maturityStages.map(([stage, description], index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{t(scientificMaturityLabel(stage))}</strong><p>{t(description)}</p></li>)}
        </ol>
      </section>

      <section className="portal-section portal-scaffolds">
        <div className="portal-section__heading"><span>04</span><div><small>{t('Experimental coverage')}</small><h2>{t('Generated scaffolds stay folded by default')}</h2></div></div>
        <details>
          <summary>{t('Show {count} generated scientific packages', { count: scaffolds.length })}</summary>
          <div className="scaffold-grid">
            {scaffolds.map((entry) => <article key={entry.id}><span>{entry.id}</span><strong>{language === 'zh' ? entry.titleZh : entry.title}</strong><small>{t('Generated scaffold · no human scientific review')}</small></article>)}
          </div>
        </details>
      </section>
    </main>
  )
}

export function ResearchHubPage({ onNavigate }: PortalPageProps) {
  const { t } = useI18n()
  const tools: Array<[AppRoute, string, string]> = [
    ['explore', 'Explorer', 'Synchronize time, occurrence geography, tree context and evidence.'],
    ['compare', 'Compare', 'Contrast taxa, time windows and representation assumptions.'],
    ['lab', 'Data Lab', 'Run bounded local queries and export reproducible evidence bundles.'],
    ['data', 'Data Registry', 'Inspect packages, query coverage, versions, checksums and offline scope.'],
  ]
  return (
    <main className="portal-page">
      <header className="portal-hero portal-hero--research">
        <span className="section-label">{t('Research / inspect and reproduce')}</span>
        <h1>{t('Move from a visual pattern to its data boundary.')}</h1>
        <p>{t('Every analytical route stays local to the browser and carries the dataset version needed to reproduce what you saw.')}</p>
        <button className="button button--primary" onClick={() => onNavigate('explore')}>{t('Open Explorer')}</button>
      </header>
      <section className="portal-section">
        <div className="portal-section__heading"><span>01</span><div><small>{t('Research tools')}</small><h2>{t('Inspect, compare, query, verify')}</h2></div></div>
        <div className="portal-card-grid">
          {tools.map(([route, title, description], index) => <button key={route} onClick={() => onNavigate(route)}><small>{String(index + 1).padStart(2, '0')}</small><h3>{t(title)}</h3><p>{t(description)}</p><i>→</i></button>)}
        </div>
      </section>
      <section className="portal-section portal-principle-grid">
        <article><span>{t('Methods')}</span><h2>{t('Read the pipeline before interpreting a chart.')}</h2><p>{t('Sampling, age precision, coordinate models and topology semantics each impose different limits.')}</p><button className="text-action" onClick={() => onNavigate('methods')}>{t('Open methods')} →</button></article>
        <article><span>{t('Versioning')}</span><h2>{manifest.datasetVersion}</h2><p>{t('Static artifacts are checksum-addressed and bound to an application release.')}</p><button className="text-action" onClick={() => onNavigate('data')}>{t('Inspect this release')} →</button></article>
      </section>
    </main>
  )
}

export function AboutPage({ onNavigate }: PortalPageProps) {
  const { t } = useI18n()
  return (
    <main className="portal-page">
      <header className="portal-hero portal-hero--about">
        <span className="section-label">{t('About / open evidence atlas')}</span>
        <h1>{t('A small atlas that shows its seams.')}</h1>
        <p>{t('Evo Atlas is a static, bilingual, source-aware learning and research interface. It does not claim to cover all life, and it never treats missing fossil rows as biological absence.')}</p>
        <div className="portal-actions">
          <a className="button button--primary" href="https://github.com/dajiaohuang/evo" target="_blank" rel="noreferrer">{t('View source on GitHub')} ↗</a>
          <button className="button button--ghost" onClick={() => onNavigate('methods')}>{t('Read methods')}</button>
        </div>
      </header>
      <section className="portal-section portal-promise">
        <div className="portal-section__heading"><span>01</span><div><small>{t('Public promise')}</small><h2>{t('What every entry should tell you')}</h2></div></div>
        <div className="portal-card-grid">
          {[['What is known', 'Claims are separated from interface copy and linked to fit sources.'], ['Why we think so', 'References retain roles, locators, versions and evidence relations.'], ['What remains uncertain', 'Sampling limits, conflicts and provisional ranges remain visible.'], ['How it was reviewed', 'Automated validation and human scientific review use different labels and gates.']].map(([title, description], index) => <article key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{t(title)}</h3><p>{t(description)}</p></article>)}
        </div>
      </section>
      <section className="portal-section portal-community">
        <div className="portal-section__heading"><span>02</span><div><small>{t('Open collaboration')}</small><h2>{t('Review, reproduce, correct')}</h2></div></div>
        <div className="community-links">
          <a href="https://github.com/dajiaohuang/evo/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer"><strong>{t('Contributing guide')}</strong><span>{t('Code, content and translation paths')}</span></a>
          <a href="https://github.com/dajiaohuang/evo/blob/main/SCIENTIFIC_REVIEW.md" target="_blank" rel="noreferrer"><strong>{t('Scientific review protocol')}</strong><span>{t('Identity, scope, decisions and conflicts')}</span></a>
          <a href="https://github.com/dajiaohuang/evo/blob/main/ROADMAP.md" target="_blank" rel="noreferrer"><strong>{t('Public roadmap')}</strong><span>{t('Vertical slices before breadth')}</span></a>
          <a href={buildEvidenceIssueUrl()} target="_blank" rel="noreferrer"><strong>{t('Report an evidence issue')}</strong><span>{t('Version and page context are prefilled')}</span></a>
        </div>
      </section>
      <section className="portal-section portal-citation">
        <div><span className="section-label">{t('Citation')}</span><h2>Evo Atlas {manifest.appVersion}</h2><p>{t('Cite the repository metadata together with the dataset version shown on the page you used.')}</p></div>
        <code>{manifest.datasetVersion}</code>
      </section>
    </main>
  )
}
