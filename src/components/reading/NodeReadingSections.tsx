import { useId } from 'react'
import { orderReadingSections, paragraphParts, readingSectionTitle, type NodeReadingSection } from '../../utils/nodeReading.mjs'
import { ReaderInlineText } from './ReaderInlineText'
import './NodeReadingSections.css'

export interface NodeReadingSource {
  id: string
  title: string | { en?: string; zh?: string }
  url?: string
  scope?: string | { en?: string; zh?: string }
  locator?: string
  readingUrl?: string
  readingLocator?: string
  version?: string
  publishedAt?: string
  accessedAt?: string
  license?: string
  licenseVersion?: string
  licenseUrl?: string
  licenseAppliesTo?: string
  rights?: string
  rightsHolder?: string
  attribution?: string
}

export function NodeReadingSections({ sections, sources, language }: {
  sections: NodeReadingSection[]; sources: NodeReadingSource[]; language: 'en' | 'zh'
}) {
  const prefix = useId().replaceAll(':', '')
  const zh = language === 'zh'
  const ordered = orderReadingSections(sections)
  const prose = ordered.filter(section => section.group !== 'source-context' && (section.text.en || section.text.zh))
  const sourceContext = ordered.filter(section => section.group === 'source-context')
  const sourceById = new Map(sources.map(source => [source.id, source]))
  const sourceText = (value: NodeReadingSource['title'] | undefined) => typeof value === 'string' ? value : value?.[language] ?? value?.en ?? value?.zh ?? ''
  const renderSection = (section: NodeReadingSection & { sourceIds: string[] }) => {
    const fallback = !section.text[language]
    const text = section.text[language] || section.text.en || section.text.zh || ''
    if (!text.trim()) return null
    return <section className="node-reading__section" id={`${prefix}-${section.id}`} key={section.id}>
      <h3>{readingSectionTitle(section, language)}</h3>
      {fallback && <p className="node-reading__language" role="note">{zh ? '以下保留现有原语言内容。' : 'The available source-language account is retained below.'}</p>}
      <div lang={fallback ? section.originalLanguage ?? (section.text.en ? 'en' : 'zh') : language}>
        {paragraphParts(text).map((paragraph, index) => <p key={index}><ReaderInlineText text={paragraph} /></p>)}
      </div>
      {!!section.context?.length && <aside className="node-reading__context" lang={section.contextLanguage ?? 'en'}>{section.context.map((context, index) => <p key={index}>{context}</p>)}</aside>}
      {!!section.sourceIds.length && <details className="node-reading__citation">
        <summary>{zh ? '本段的来源与材料' : 'Sources and material for this passage'}</summary>
        {section.sourceIds.map(id => {
          const source = sourceById.get(id)
          if (!source) return <p key={id}>{zh ? '该段的来源信息暂不可用。' : 'Source details for this passage are unavailable.'}</p>
          return <div key={id}>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{sourceText(source.title)} ↗</a> : <strong>{sourceText(source.title)}</strong>}
            {section.locator && <p><strong>{zh ? '段落定位：' : 'Passage locator: '}</strong>{section.locator}</p>}
            {source.locator && <p><strong>{zh ? '来源定位：' : 'Source locator: '}</strong>{source.locator}</p>}
            {source.readingUrl && <p><a href={source.readingUrl} target="_blank" rel="noreferrer">{zh ? '所引文本 ↗' : 'Cited text ↗'}</a></p>}
            {source.readingLocator && <p><strong>{zh ? '所引文本定位：' : 'Cited text locator: '}</strong>{source.readingLocator}</p>}
            {source.scope && <p><strong>{zh ? '范围：' : 'Scope: '}</strong>{sourceText(source.scope)}</p>}
            {source.version && <p><strong>{zh ? '版本：' : 'Version: '}</strong>{source.version}</p>}
            {source.publishedAt && <p><strong>{zh ? '发布日期：' : 'Published: '}</strong>{source.publishedAt}</p>}
            {source.accessedAt && <p><strong>{zh ? '访问日期：' : 'Accessed: '}</strong>{source.accessedAt}</p>}
            {(source.license || source.licenseVersion || source.licenseAppliesTo) && <p><strong>{zh ? '许可：' : 'License: '}</strong>{source.licenseUrl ? <a href={source.licenseUrl} target="_blank" rel="noreferrer">{source.license}</a> : source.license}{source.licenseVersion ? ` ${source.licenseVersion}` : ''}{source.licenseAppliesTo ? ` · ${source.licenseAppliesTo}` : ''}</p>}
            {source.rights && <p><strong>{zh ? '权利说明：' : 'Rights: '}</strong>{source.rights}</p>}
            {source.rightsHolder && <p><strong>{zh ? '权利人：' : 'Rights holder: '}</strong>{source.rightsHolder}</p>}
            {source.attribution && <p><strong>{zh ? '署名：' : 'Attribution: '}</strong>{source.attribution}</p>}
          </div>
        })}
        {!!section.limitations?.length && <ul lang="en">{section.limitations.map((limit, index) => <li key={index}>{limit}</li>)}</ul>}
      </details>}
    </section>
  }
  return <div className="node-reading">
    {prose.length > 1 && <nav className="node-reading__contents" aria-label={zh ? '本文内容' : 'In this account'}>
      {prose.map(section => <button key={section.id} type="button" onClick={() => document.getElementById(`${prefix}-${section.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{readingSectionTitle(section, language)}</button>)}
    </nav>}
    {prose.map(renderSection)}
    {!!sourceContext.length && <details className="node-reading__methods"><summary>{zh ? '来源对应、研究方法与材料范围' : 'Source correspondence, methods and material scope'}</summary>{sourceContext.map(renderSection)}</details>}
  </div>
}
