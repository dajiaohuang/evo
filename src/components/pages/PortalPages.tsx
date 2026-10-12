import { useEffect, useState } from 'react'
import manifest from '../../../data/manifest.json'
import { loadPackageRegistry, loadPackageResearchExamples } from '../../data-client/staticDataClient'
import type { RuntimeResearchExample } from '../../data-client/types'
import { evolutionEvents, taxonProfiles } from '../../services/catalog'
import { buildEvidenceIssueUrl, getEntityPublication, getPackagePublication } from '../../services/publication'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import { EvidenceIssueLink } from '../common/EvidenceIssueLink'
import { isNativeCore, isPagesPreview, isPreviewPackageAllowed } from '../../config/pagesPreview'
import { ReadingCards } from '../reading/ReadingPages'
import './PortalPages.css'

interface PortalPageProps {
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}


type CatalogResearchPreset = RuntimeResearchExample & { packageId: string }

export function CatalogHubPage({ onNavigate }: PortalPageProps) {
  const { language, t } = useI18n()
  const [researchPresets, setResearchPresets] = useState<CatalogResearchPreset[]>([])
  const [researchPresetError, setResearchPresetError] = useState(false)
  const [researchExpanded, setResearchExpanded] = useState(false)
  const flagship = getPackagePublication('perissodactyla')
  const flagshipProfileCount = taxonProfiles.filter((profile) => getEntityPublication(profile.treeNodeId ?? profile.id)?.packageId === 'perissodactyla').length
  const staticCatalogBase = `${import.meta.env.BASE_URL}${language === 'zh' ? 'zh/' : ''}`
  const previewLockedCards = [
    ['Geological intervals', 'Time-scale directory', 'The preview keeps time context in the Explorer; the complete interval directory is available in the full Web edition.'],
    ['Formations', 'Formation directory', 'Formation-level browsing is available in the full Web edition.'],
    ['Localities', 'Locality directory', 'Locality-level browsing is available in the full Web edition.'],
    ['Traits', 'Trait directory', 'Trait-level browsing is available in the full Web edition.'],
    ['References', 'Reference directory', 'Reference-level browsing is available in the full Web edition.'],
    ['Media', 'Media directory', 'Media browsing is available in the full Web edition.'],
    ['Datasets', 'Dataset registry', 'Release and download browsing is available in the full Web edition.'],
  ] as const

  useEffect(() => {
    if (!researchExpanded) return
    let cancelled = false
    loadPackageRegistry()
      .then((registry) => Promise.all(registry.packages.filter((entry) => !isPagesPreview || isPreviewPackageAllowed(entry.id)).map(async (entry) => {
        const payload = await loadPackageResearchExamples(entry.id)
        return payload.examples.map((example) => ({ ...example, packageId: entry.id }))
      })))
      .then((groups) => {
        if (!cancelled) setResearchPresets(groups.flat())
      })
      .catch(() => {
        if (!cancelled) setResearchPresetError(true)
      })
    return () => { cancelled = true }
  }, [researchExpanded])

  return (
    <main className="portal-page">
      <header className="portal-hero portal-hero--catalog">
        <span className="section-label">{language === 'zh' ? '类群与物种' : 'Groups and species'}</span>
        <h1>{language === 'zh' ? '沿着生命的分支继续阅读' : 'Read along the branches of life'}</h1>
        <p>{language === 'zh' ? '从你熟悉的类群出发，了解它们的身体、生活方式和演化关系。物种详情保留具体研究；主线文章先把问题讲清楚。' : 'Start with a familiar group and explore bodies, ways of life and evolutionary relationships. Detail pages retain specific studies; the main chapters explain the questions first.'}</p>
        <div className="portal-actions">
          <button className="button button--primary" onClick={() => onNavigate('taxa', isPagesPreview ? { id: 'perissodactyla' } : undefined)}>{t(isPagesPreview ? 'Open selected taxon dossier' : 'Browse taxon dossiers')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('events')}>{t('Browse evolutionary events')}</button>
          <button className="button button--ghost" onClick={() => onNavigate('stories')}>{t('Follow a field story')}</button>
        </div>
      </header>

      <section className="portal-section">
        <h2>{language === 'zh' ? '先读一个问题' : 'Start with a question'}</h2>
        <ReadingCards />
      </section>

      <details className="portal-section portal-featured">
        <summary>{language === 'zh' ? '奇蹄目资料与来源概况' : 'Perissodactyl material and source overview'}</summary>
        <div className="portal-section__heading"><span>01</span><div><small>{t('Selected pathway')}</small><h2>{t('Perissodactyla reading pathway')}</h2></div></div>
        {flagship && <EvidenceIssueLink entityId="perissodactyla" />}
        <div className="portal-featured__grid">
          <article><strong>{flagshipProfileCount}</strong><span>{t('rich taxon dossiers')}</span></article>
          <article><strong>{manifest.records.evidenceClaims}</strong><span>{t('atlas claim records')}</span></article>
          <article><strong>{manifest.records.references}</strong><span>{t('linked references')}</span></article>
        </div>
        <p>{t('The flagship has complete paginated occurrence retrieval and claim-level source links.')}</p>
        <button className="text-action" onClick={() => onNavigate('taxa', { id: 'perissodactyla' })}>{t('Open the flagship dossier')} →</button>
      </details>

      <details className="portal-section">
        <summary>{language === 'zh' ? '按年代、地点和原始资料查阅' : 'Look up times, places and source material'}</summary>
        <div className="portal-section__heading"><span>02</span><div><small>{t('Ways in')}</small><h2>{t('Choose the object you need')}</h2></div></div>
        <div className="portal-card-grid portal-card-grid--catalog">
          {isPagesPreview ? <>
            <a href={isNativeCore ? '#/taxa?id=perissodactyla' : `${staticCatalogBase}taxa/perissodactyla/`}><small>{t('Taxa')}</small><h3>{flagshipProfileCount} {t('selected dossiers')}</h3><p>{t('Selected Perissodactyla evidence remains available in this core edition.')}</p><i>→</i></a>
            <a href={isNativeCore ? '#/taxa?id=primates' : `${staticCatalogBase}taxa/primates/`}><small>{t('Taxa')}</small><h3>{t('Primates')}</h3><p>{t('A curated primate pathway covers key branches, bounded fossil samples and ancient genomes.')}</p><i>→</i></a>
            <a href={isNativeCore ? '#/events' : `${staticCatalogBase}events/`}><small>{t('Events')}</small><h3>{evolutionEvents.length} {t('selected events')}</h3><p>{t('Selected event context remains available in this core edition.')}</p><i>→</i></a>
            {previewLockedCards.map(([label, title, description]) => <article className="portal-card portal-card--locked" key={label} aria-disabled="true"><small>{t(label)}</small><h3>{t(title)}</h3><p>{t(description)}</p><i aria-hidden="true">—</i></article>)}
          </> : <>
          <a href={`${staticCatalogBase}taxa/`}><small>{t('Taxa')}</small><h3>{manifest.records.registryEntities} {t('stable entries')}</h3><p>{t('Definitions, ranges, package ownership and evidence boundaries.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}events/`}><small>{t('Events')}</small><h3>{evolutionEvents.length} {t('bounded events')}</h3><p>{t('Observations, interpretations and unresolved questions kept separate.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}intervals/`}><small>{t('Geological intervals')}</small><h3>{manifest.records.timeScaleUnits} {t('versioned units')}</h3><p>{t('ICS-bound ages, hierarchy, uncertainty and source locators.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}formations/`}><small>{t('Formations')}</small><h3>{manifest.records.formationNames} {t('stable entries')}</h3><p>{t('Filter occurrence records by named formation without implying absence.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}localities/`}><small>{t('Localities')}</small><h3>{manifest.records.fossilCollections} {t('stable entries')}</h3><p>{t('Inspect locality and collection fields with spatial precision limits.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}traits/`}><small>{t('Traits')}</small><h3>{manifest.records.traitTerms} {t('stable entries')}</h3><p>{t('Morphology and ecology remain linked to their package evidence.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}references/`}><small>{t('References')}</small><h3>{manifest.records.references} {t('source records')}</h3><p>{t('Roles, fitness, identifiers and stable citation pages.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}media/`}><small>{t('Media')}</small><h3>{manifest.records.mediaAssets} {t('rights-aware records')}</h3><p>{t('Attribution, rights and represented taxon remain visible.')}</p><i>→</i></a>
          <a href={`${staticCatalogBase}datasets/`}><small>{t('Datasets')}</small><h3>{manifest.records.dataPackages} {t('static packages')}</h3><p>{t('Versions, checksums and offline downloads.')}</p><i>→</i></a>
          </>}
        </div>
      </details>

      <section className="portal-section">
        <div className="portal-section__heading"><span>03</span><div><small>{language === 'zh' ? '精选物种页' : 'Featured species pages'}</small><h2>{language === 'zh' ? '阅读灵长类' : 'Read the primates'}</h2></div></div>
        <div className="portal-card-grid portal-card-grid--catalog">
          <a href={isPagesPreview ? (isNativeCore ? '#/taxa?id=callithrix_jacchus' : staticCatalogBase + 'taxa/callithrix_jacchus/') : '#/taxa?id=callithrix_jacchus'}><small>{language === 'zh' ? '物种介绍' : 'Species introduction'}</small><h3>{language === 'zh' ? '普通狨' : 'Common marmoset'}</h3><p>{language === 'zh' ? '阅读形态、分布与研究案例，并查看各结论的来源范围。' : 'Read the morphology, range and research cases with their source scopes.'}</p><i>→</i></a>
          <a href={isPagesPreview ? (isNativeCore ? '#/taxa?id=pan_troglodytes' : staticCatalogBase + 'taxa/pan_troglodytes/') : '#/taxa?id=pan_troglodytes'}><small>{language === 'zh' ? '物种介绍' : 'Species introduction'}</small><h3>{language === 'zh' ? '黑猩猩' : 'Chimpanzee'}</h3><p>{language === 'zh' ? '从栖地、工具使用、生活史和保育模型认识现有证据。' : 'Explore evidence on habitat, tool use, life history and conservation models.'}</p><i>→</i></a>
        </div>
      </section>



      <details className="portal-section" onToggle={event => { if (event.target === event.currentTarget) setResearchExpanded(event.currentTarget.open) }}>
        <summary>{language === 'zh' ? '进一步探索：研究中的地图与比较' : 'Explore further: maps and comparisons from studies'}</summary>
        <div className="portal-section__heading"><span>04</span><div><small>{t('Research presets')}</small><h2>{t('Open a source-bound evidence inspection route')}</h2></div></div>
        <p className="research-preset-boundary">{t('These presets open the claims and occurrence context published by each package. They are not package-specific phylogenies or complete histories of the groups.')}</p>
        {researchPresetError
          ? <p className="research-preset-state" role="alert">{t('Research presets are temporarily unavailable.')}</p>
          : researchPresets.length === 0
            ? <p className="research-preset-state" role="status">{t('Loading research presets…')}</p>
            : <div className="research-preset-grid">
              {researchPresets.map((example) => (
                <article className="research-preset-card" key={`${example.packageId}:${example.id}`}>
                  <div className="research-preset-card__meta">
                    <span>{example.packageId}</span>
                  </div>
                  <h3>{language === 'zh' ? example.title.zh : example.title.en}</h3>
                  <p>{language === 'zh' ? example.description.zh : example.description.en}</p>
                  <div className="research-preset-card__limitations">
                    <strong>{t('Limitations')}</strong>
                    {example.limitations.map((limitation) => <p key={limitation}>{t(limitation)}</p>)}
                  </div>
                  <a className="text-action" href={example.route}>{t('Open research preset')} →</a>
                </article>
              ))}
            </div>}
      </details>

    </main>
  )
}

export function ResearchHubPage({ onNavigate }: PortalPageProps) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const tools: Array<{route: AppRoute; title: string; text: string}> = [
    {route:'compare',title:zh ? '比较生物与时间' : 'Compare organisms and times',text:zh ? '把已有类群材料放在一起，比较形态描述、生活方式或不同年代的记录。' : 'Bring recorded group material together to compare descriptions of form, ways of life or records from different times.'},
    {route:'lab',title:zh ? '筛选化石发现' : 'Filter fossil discoveries',text:zh ? '按鉴定名称、年代、地层或集合找到记录，查看它们实际保留了哪些地点和材料。' : 'Find records by identification, time, formation or collection, then inspect their retained places and material.'},
    {route:'lab',title:zh ? '导出筛选结果' : 'Export your selection',text:zh ? '筛选后下载表格或带来源与查询条件的数据包，保留这次结果的范围。' : 'After filtering, download a table or a bundle with sources and query conditions to retain the scope of the result.'},
  ]
  return <main className="portal-page">
    <header className="portal-hero"><h1>{zh ? '把发现放在一起看' : 'Look at discoveries together'}</h1><p>{zh ? '同一结构在不同生物上有什么差异？换一个时间窗口，记录又怎样变化？先选定对象与范围，再比较或导出。' : 'How does a structure differ between organisms? What changes in the records when the time window changes? Choose the material and scope before comparing or exporting.'}</p></header>
    <div className="portal-card-grid">{tools.map((tool,index) => <button key={index} onClick={() => onNavigate(tool.route)}><h2>{tool.title}</h2><p>{tool.text}</p><i>→</i></button>)}</div>
    <p>{zh ? 'SQL、自带数据与查询笔记保留在筛选窗的高级工具中。' : 'SQL, your own data and query notes are available in the filter window’s advanced tools.'}</p>
  </main>
}

export function AboutPage({ onNavigate }: PortalPageProps) {
  const { language, t } = useI18n()
  const staticBase = `${import.meta.env.BASE_URL}${language === 'zh' ? 'zh/' : ''}`
  return (
    <main className="portal-page">
      <header className="portal-hero portal-hero--about">
        <span className="section-label">{t('About / open evidence atlas')}</span>
        <h1>{t('A small atlas that shows its seams.')}</h1>
        <p>{t('Evo Atlas is a static, bilingual, source-aware learning and research interface. It does not claim to cover all life, and it never treats missing fossil rows as biological absence.')}</p>
        <div className="portal-actions">
          <a className="button button--primary" href="https://github.com/dajiaohuang/evo" target="_blank" rel="noreferrer">{t('View source on GitHub')} ↗</a>
          <button className="button button--ghost" onClick={() => onNavigate('info', { tab: 'science' })}>{t('Read methods')}</button>
        </div>
      </header>
      <section className="portal-section portal-promise">
        <div className="portal-section__heading"><span>01</span><div><small>{t('Public promise')}</small><h2>{t('What every entry should tell you')}</h2></div></div>
        <div className="portal-card-grid">
          {[['What is known', 'Claims are separated from interface copy and linked to fit sources.'], ['Why we think so', 'References retain roles, locators, versions and evidence relations.'], ['What remains uncertain', 'Sampling limits, conflicts and provisional ranges remain visible.']].map(([title, description], index) => <article key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{t(title)}</h3><p>{t(description)}</p></article>)}
        </div>
      </section>
      <section className="portal-section portal-community">
        <div className="portal-section__heading"><span>02</span><div><small>{t('Open collaboration')}</small><h2>{t('Review, reproduce, correct')}</h2></div></div>
        <div className="community-links">
          <a href="https://github.com/dajiaohuang/evo/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer"><strong>{t('Contributing guide')}</strong><span>{t('Code, content and translation paths')}</span></a>
          <a href="https://github.com/dajiaohuang/evo/blob/main/docs/species-dossier-standard.md" target="_blank" rel="noreferrer"><strong>{t('Content and source standards')}</strong><span>{t('Source identity, scope and limitations')}</span></a>
          <a href="https://github.com/dajiaohuang/evo/blob/main/ROADMAP.md" target="_blank" rel="noreferrer"><strong>{t('Public roadmap')}</strong><span>{t('Vertical slices before breadth')}</span></a>
          {isPagesPreview
            ? <span className="community-link community-link--locked" aria-disabled="true"><strong>{t('Release history')}</strong><span>{language === 'zh' ? '完整发布历史请使用完整版 Web。' : 'The complete release history is available in the full Web edition.'}</span></span>
            : <a href={`${staticBase}datasets/`}><strong>{t('Release history')}</strong><span>{t('Versioned datasets and machine-readable artifacts')}</span></a>}
          <a href="https://github.com/dajiaohuang/evo/blob/main/DATA_LICENSES.md" target="_blank" rel="noreferrer"><strong>{t('Data and content licenses')}</strong><span>{t('Source-specific rights and redistribution boundaries')}</span></a>
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
