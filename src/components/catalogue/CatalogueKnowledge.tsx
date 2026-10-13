import type { CatalogueKnowledgeRecord } from '../../data-client/types'
import { catalogueReadingSections } from '../../utils/nodeReading.mjs'
import { NodeReadingSections, type NodeReadingSource } from '../reading/NodeReadingSections'

interface Props {
  record: CatalogueKnowledgeRecord | null
  status: 'loading' | 'ready' | 'error'
  zh: boolean
}

export function CatalogueKnowledge({ record, status, zh }: Props) {
  const language = zh ? 'zh' : 'en'
  if (status === 'loading') return <p role="status">{zh ? '正在展开正文与研究材料…' : 'Opening the account and study material…'}</p>
  if (status === 'error') return <p role="status">{zh ? '正文暂时无法加载，分类与原始来源仍可查看。' : 'The account could not be loaded. Classification and original sources remain available.'}</p>
  const profile = record?.profile
  const dossier = record?.dossier
  const sections = catalogueReadingSections(profile, dossier)
  if (!sections.length) return null
  const studySources = new Map([...(dossier?.sources ?? []), ...(dossier?.readerSources ?? [])]
    .map(source => [source.id, source]))
  const sources: NodeReadingSource[] = [
    ...(profile?.sources ?? []).map(source => ({ ...source, id: `account:${source.id}` })),
    ...[...studySources.values()].map(source => ({ ...source, id: `study:${source.id}` })),
  ]
  return <section className="catalogue-source-card catalogue-knowledge" aria-label={zh ? '生物与研究' : 'The organism and its studies'}>
    {profile && <h2>{profile.name[language]}</h2>}
    <NodeReadingSections sections={sections} sources={sources} language={language} />
    {(profile?.limitations || sources.length > 0) && <details className="node-reading__methods">
      <summary>{zh ? '研究来源与适用范围' : 'Study sources and scope'}</summary>
      {profile?.limitations && <p>{profile.limitations[language]}</p>}
      <ul>{sources.map(source => <li key={source.id}>{source.url
        ? <a href={source.url} target="_blank" rel="noreferrer">{typeof source.title === 'string' ? source.title : source.title[language]}</a>
        : <strong>{typeof source.title === 'string' ? source.title : source.title[language]}</strong>}{source.scope && <p>{typeof source.scope === 'string' ? source.scope : source.scope[language]}</p>}
        {source.version && <p>{source.version}</p>}
        {source.license && <p>{source.licenseUrl ? <a href={source.licenseUrl} target="_blank" rel="noreferrer">{source.license}</a> : source.license}{source.rightsHolder ? ` · ${source.rightsHolder}` : ''}</p>}
        {source.attribution && <p>{source.attribution}</p>}
      </li>)}</ul>
    </details>}
  </section>
}
