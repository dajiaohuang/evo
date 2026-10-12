import guides from '../../../data/reading-guides.json'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../i18n'
import type { ReferenceRecord } from '../../types/catalog'
import type { AppRoute } from '../../utils/routing'
import { isPagesPreview, isPreviewTaxonAllowed } from '../../config/pagesPreview'
import './ReadingPages.css'
import { LocalTreePanel } from '../tree/LocalTreePanel'

interface ReadingProps {
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

const availableGuides = guides.filter(guide => !isPagesPreview || isPreviewTaxonAllowed(guide.taxonId))

export function ReadingCards() {
  const { language } = useI18n()
  return <div className="reading-grid">
    {availableGuides.map((guide, index) => <a className="reading-card" key={guide.id} href={`#/stories?reading=${guide.id}`}>
      <span className="reading-card__number">{String(index + 1).padStart(2, '0')}</span>
      <h3>{guide.title[language]}</h3>
      <p>{guide.dek[language]}</p>
      <span className="reading-card__action">{language === 'zh' ? '开始阅读' : 'Read the chapter'} →</span>
    </a>)}
  </div>
}

export function ReadingArticle({ id, onNavigate }: ReadingProps & { id: string }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const guide = availableGuides.find(entry => entry.id === id)
  const articleRef = useRef<HTMLElement>(null)
  const [referenceState, setReferenceState] = useState<{ guideId: string; records: ReferenceRecord[]; error: boolean } | null>(null)
  const sources = referenceState?.guideId === guide?.id ? referenceState?.records ?? [] : []
  const sourceError = referenceState?.guideId === guide?.id && referenceState?.error
  useEffect(() => {
    let cancelled = false
    if (guide) void import('../../../data/references.json').then(({ default: references }) => {
      if (!cancelled) setReferenceState({ guideId: guide.id, records: (references as ReferenceRecord[]).filter(reference => guide.referenceIds.includes(reference.id)), error: false })
    }).catch(() => { if (!cancelled) setReferenceState({ guideId: guide.id, records: [], error: true }) })
    return () => { cancelled = true }
  }, [guide])
  if (!guide) return <main className="reading-page"><h1>{zh ? '这篇文章暂不可用' : 'This chapter is unavailable'}</h1><button type="button" onClick={() => onNavigate('home')}>{zh ? '选择其他文章' : 'Choose another chapter'}</button></main>
  return <main ref={articleRef} className="reading-page reading-article">
    <a className="reading-back" href="#/home">← {zh ? '古地图' : 'Paleomap'}</a>
    <header className="reading-hero"><span className="reading-kicker">{zh ? '从发现到解释' : 'From discovery to explanation'}</span><h1>{guide.title[language]}</h1><p>{guide.dek[language]}</p></header>
    <nav className="reading-contents" aria-label={zh ? '本文内容' : 'In this chapter'}>{guide.sections.map((section, index) => <a key={index} href={`#section-${index}`} onClick={event => { event.preventDefault(); articleRef.current?.querySelector(`#section-${index}`)?.scrollIntoView({ behavior: 'smooth' }) }}>{section.title[language]}</a>)}</nav>
    <div className="reading-prose">{guide.sections.map((section, index) => <section id={`section-${index}`} key={index}><h2>{section.title[language]}</h2><p>{section.text[language]}</p></section>)}</div>
    <aside className="reading-term"><h2>{guide.term.name[language]}</h2><p>{guide.term.meaning[language]}</p></aside>
    <LocalTreePanel nodeId={guide.taxonId} />
    <section className="reading-next"><h2>{zh ? '继续认识这个类群' : 'Continue with this group'}</h2><p>{zh ? '详情页保留更完整的形态、生态、演化关系和研究材料。未覆盖的部分会明确说明。' : 'The detail page retains morphology, ecology, evolutionary relationships and research material. Gaps are stated explicitly.'}</p><button type="button" onClick={() => onNavigate('taxa', { id: guide.taxonId })}>{zh ? '阅读类群或物种详情' : 'Read the group or species details'} →</button></section>
    <section className="reading-sources"><h2>{zh ? '本文依据的研究' : 'Studies behind this chapter'}</h2>{!sources.length && <p role="status">{sourceError ? zh ? '文献暂时无法加载，请刷新重试。' : 'Sources could not be loaded. Refresh to retry.' : zh ? '正在加载文献…' : 'Loading sources…'}</p>}<ol>{sources.map(source => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><small>{source.publishedYear ?? ''}{source.doi ? ` · DOI ${source.doi}` : ''}</small></li>)}</ol></section>
  </main>
}
