import type { CatalogueKnowledgeProfile, CatalogueKnowledgeRecord, CatalogueSpeciesDossier } from '../../data-client/types'
import type { AppRoute } from '../../utils/routing'
import type { PbdbReaderRecord } from '../../data-client/pbdbReaderTypes'
import { catalogueReadingSections } from '../../utils/nodeReading.mjs'
import { NodeReadingSections, type NodeReadingSource } from '../reading/NodeReadingSections'
import { SourceRelatedReading } from '../reading/SourceRelatedReading'

interface Props {
  record: CatalogueKnowledgeRecord | (Pick<PbdbReaderRecord, 'atlasProfile'> & { profile?: Omit<CatalogueKnowledgeProfile, 'colId'>; dossier?: CatalogueSpeciesDossier }) | null
  status: 'loading' | 'ready' | 'error'
  zh: boolean
  release?: string
  onNavigate?: (route: AppRoute, params?: Record<string, string>) => void
}

export function CatalogueKnowledge({ record, status, zh, release, onNavigate }: Props) {
  const language = zh ? 'zh' : 'en'
  if (status === 'loading') return <p role="status">{zh ? '正在展开正文与研究材料…' : 'Opening the account and study material…'}</p>
  if (status === 'error') return <p role="status">{zh ? '正文暂时无法加载，分类与原始来源仍可查看。' : 'The account could not be loaded. Classification and original sources remain available.'}</p>
  const profile = record?.profile
  const dossier = record?.dossier
  const atlas = record && 'atlasProfile' in record ? record.atlasProfile : undefined
  const sections = [...catalogueReadingSections(profile, dossier), ...(atlas?.readerSections ?? []).map(section => ({
    ...section, id: `atlas-${section.id}`, sourceIds: (section.sourceIds ?? []).map(id => `atlas:${id}`),
  }))]
  if (!sections.length && !profile?.sources.length && !dossier?.sources.length && !atlas?.readerSources?.length) return null
  const studySources = new Map([...(dossier?.sources ?? []), ...(dossier?.readerSources ?? [])]
    .map(source => [source.id, source]))
  const sources: NodeReadingSource[] = [
    ...(profile?.sources ?? []).map(source => ({ ...source, id: `account:${source.id}` })),
    ...[...studySources.values()].map(source => ({ ...source, id: `study:${source.id}` })),
    ...(atlas?.readerSources ?? []).map(source => ({ ...source, id: `atlas:${source.id}` })),
  ]
  return <section className="catalogue-source-card catalogue-knowledge" aria-label={zh ? '生物与研究' : 'The organism and its studies'}>
    {profile && <h2>{profile.name[language]}</h2>}
    <NodeReadingSections sections={sections} sources={sources} language={language} />
    {onNavigate && <SourceRelatedReading sources={profile?.sources ?? []} release={release} language={language} onNavigate={onNavigate} />}
    {(profile?.limitations || atlas?.readerLimitations || sources.length > 0) && <details className="node-reading__methods">
      <summary>{zh ? '研究来源与适用范围' : 'Study sources and scope'}</summary>
      {profile?.limitations && <p>{profile.limitations[language]}</p>}
      {atlas?.readerLimitations && <p>{atlas.readerLimitations[language]}</p>}
      <ul>{sources.map(source => <li key={source.id}>{source.url
        ? <a href={source.url} target="_blank" rel="noreferrer">{typeof source.title === 'string' ? source.title : source.title[language]}</a>
        : <strong>{typeof source.title === 'string' ? source.title : source.title[language]}</strong>}{source.scope && <p>{typeof source.scope === 'string' ? source.scope : source.scope[language]}</p>}
        {source.locator && <p>{zh ? '来源定位：' : 'Source locator: '}{source.locator}</p>}
        {source.version && <p>{source.version}</p>}
        {source.publishedAt && <p>{zh ? '发布日期：' : 'Published: '}{source.publishedAt}</p>}
        {source.accessedAt && <p>{zh ? '访问日期：' : 'Accessed: '}{source.accessedAt}</p>}
        {source.license && <p>{source.licenseUrl ? <a href={source.licenseUrl} target="_blank" rel="noreferrer">{source.license}</a> : source.license}{source.licenseVersion ? ` ${source.licenseVersion}` : ''}{source.licenseAppliesTo ? ` · ${source.licenseAppliesTo}` : ''}{source.rightsHolder ? ` · ${source.rightsHolder}` : ''}</p>}
        {source.rights && <p>{zh ? '权利说明：' : 'Rights: '}{source.rights}</p>}
        {source.attribution && <p>{source.attribution}</p>}
      </li>)}</ul>
    </details>}
  </section>
}
