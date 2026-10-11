import guides from '../../../data/reading-guides.json'
import { useEffect, useState } from 'react'
import { useI18n } from '../../i18n'
import type { ReferenceRecord } from '../../types/catalog'
import type { AppRoute } from '../../utils/routing'
import { isPagesPreview, isPreviewTaxonAllowed } from '../../config/pagesPreview'
import './ReadingPages.css'

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

export function ReadingHome({ onNavigate }: ReadingProps) {
  const { language } = useI18n()
  const zh = language === 'zh'
  return <main className="reading-page reading-home">
    <header className="reading-hero">
      <span className="reading-kicker">{zh ? '生命演化 · 从问题开始' : 'Life and evolution · Start with a question'}</span>
      <h1>{zh ? '读懂生命的分支与变化' : 'Read the branches and changes of life'}</h1>
      <p>{zh ? '从一件化石、一种动物或一个分支出发，认识身体结构怎样变化、不同谱系怎样分化，以及研究者怎样拼出这些历史。' : 'Start with a fossil, an animal or a branch. Follow changes in bodies, the diversification of lineages and the research that reconstructs their histories.'}</p>
      <a className="reading-start" href="#reading-chapters" onClick={(event) => { event.preventDefault(); document.getElementById('reading-chapters')?.scrollIntoView({ behavior: 'smooth' }) }}>{zh ? '选择一个问题' : 'Choose a question'} ↓</a>
    </header>
    <section className="reading-section" id="reading-chapters">
      <h2>{zh ? '沿着一个问题读下去' : 'Follow a question'}</h2>
      <p>{zh ? '每篇从具体材料讲起，再解释它与演化或生活方式的联系。读完可进入物种详情，查看更细的形态、生态和原始研究。' : 'Each chapter starts with specific material, then explains its connection to evolution or a way of life. Continue to species details for morphology, ecology and the original studies.'}</p>
      <ReadingCards />
    </section>
    <section className="reading-section reading-principles">
      <h2>{zh ? '读演化历史时，先分清三件事' : 'Three distinctions for reading evolutionary history'}</h2>
      <div>
        <article><h3>{zh ? '分类位置不是祖先名单' : 'Classification is not an ancestor list'}</h3><p>{zh ? '同属一个类群说明分类上的联系。某件化石与现生动物相似，不等于它就是直接祖先；具体关系要看研究比较了哪些性状或数据。' : 'Membership records a taxonomic relationship. Resemblance to a living animal does not identify a fossil as its direct ancestor; the evidence depends on the traits and data compared.'}</p></article>
        <article><h3>{zh ? '身体结构与生活方式之间有推断' : 'Structure and behaviour are connected by inference'}</h3><p>{zh ? '骨骼或牙齿可以保存下来，运动、取食和栖地利用却常需要结合其他材料解释。正文会说明哪些是观察，哪些是推测。' : 'Bones and teeth may be preserved, while movement, feeding and habitat use often need interpretation with other evidence. The chapters distinguish observations from inferences.'}</p></article>
        <article><h3>{zh ? '一个研究有自己的尺度' : 'A study has its own scale'}</h3><p>{zh ? '一件标本、一个种群和整个物种回答的问题不同。地点、时期和样本会跟随相应结论出现，帮助你判断能推广到哪里。' : 'A specimen, a population and an entire species answer different questions. Places, periods and samples stay close to their findings so you can judge their reach.'}</p></article>
      </div>
    </section>
    <section className="reading-section reading-next">
      <h2>{zh ? '想沿着类群继续找？' : 'Continue through a group?'}</h2>
      <p>{zh ? '到类群与物种入口继续阅读，或打开地图，把已经读过的故事放回时间和地点。' : 'Continue through groups and species, or use the map to place what you have read in time and space.'}</p>
      <button type="button" onClick={() => onNavigate('catalog')}>{zh ? '类群与物种' : 'Groups and species'} →</button>
      <button type="button" onClick={() => onNavigate('explore', { age: '66' })}>{zh ? '打开时空地图' : 'Open the time and place map'} →</button>
    </section>
  </main>
}

export function ReadingArticle({ id, onNavigate }: ReadingProps & { id: string }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const guide = availableGuides.find(entry => entry.id === id)
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
  return <main className="reading-page reading-article">
    <a className="reading-back" href="#/home">← {zh ? '阅读主线' : 'Reading home'}</a>
    <header className="reading-hero"><span className="reading-kicker">{zh ? '从发现到解释' : 'From discovery to explanation'}</span><h1>{guide.title[language]}</h1><p>{guide.dek[language]}</p></header>
    <nav className="reading-contents" aria-label={zh ? '本文内容' : 'In this chapter'}>{guide.sections.map((section, index) => <a key={index} href={`#section-${index}`} onClick={event => { event.preventDefault(); document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' }) }}>{section.title[language]}</a>)}</nav>
    <div className="reading-prose">{guide.sections.map((section, index) => <section id={`section-${index}`} key={index}><h2>{section.title[language]}</h2><p>{section.text[language]}</p></section>)}</div>
    <aside className="reading-term"><h2>{guide.term.name[language]}</h2><p>{guide.term.meaning[language]}</p></aside>
    <section className="reading-next"><h2>{zh ? '继续认识这个类群' : 'Continue with this group'}</h2><p>{zh ? '详情页保留更完整的形态、生态、演化关系和研究材料。未覆盖的部分会明确说明。' : 'The detail page retains morphology, ecology, evolutionary relationships and research material. Gaps are stated explicitly.'}</p><button type="button" onClick={() => onNavigate('taxa', { id: guide.taxonId })}>{zh ? '阅读类群或物种详情' : 'Read the group or species details'} →</button></section>
    <section className="reading-sources"><h2>{zh ? '本文依据的研究' : 'Studies behind this chapter'}</h2>{!sources.length && <p role="status">{sourceError ? zh ? '文献暂时无法加载，请刷新重试。' : 'Sources could not be loaded. Refresh to retry.' : zh ? '正在加载文献…' : 'Loading sources…'}</p>}<ol>{sources.map(source => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><small>{source.publishedYear ?? ''}{source.doi ? ` · DOI ${source.doi}` : ''}</small></li>)}</ol></section>
  </main>
}
