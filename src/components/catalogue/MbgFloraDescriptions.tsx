import type { CatalogueMbgFloraDescriptionRecord, CatalogueRuntimeManifest } from '../../data-client/types'

export function MbgFloraDescriptions({ record, source, zh }: {
  record: CatalogueMbgFloraDescriptionRecord
  source: NonNullable<CatalogueRuntimeManifest['nicaraguaDescriptions']>['source']
  zh: boolean
}) {
  return <section className="catalogue-source-card">
    <h2>{source.title} · {zh ? '来源原文摘录' : 'Original source excerpts'}</h2>
    <p>{zh ? '区域植物志摘录，可能不完整；不代表全球分布或完整物种档案。原文语言、引用缺失与版权字段均按来源保留。' : 'Regional flora excerpts may be incomplete; they are not global ranges or complete species dossiers. Original language, citation gaps and rights are retained.'}</p>
    <p><a href={source.sourceUrl}>{source.provider}</a> · {source.sourceVersion} · <a href={source.licenseUrl}>{source.license}</a></p>
    {record.descriptions.map((description, index) => <details key={`${description.rowNumber}:${index}`}>
      <summary>{description.type} · {description.language}</summary>
      <p lang={description.language === 'und' ? undefined : description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
      <p>{description.languageNote}</p>
      {description.citations.map(citation => <p key={`${citation.identifier}:${citation.rowNumber}`}>{citation.citation} · {citation.rightsHolder} · {citation.license}</p>)}
      {(description.citationMissingInSource || description.citationScope !== 'description-source') && <p>{zh ? '条目级引文缺失或不完整；数据集引文不作为本段的独立文献证据。' : 'The entry-level citation is missing or incomplete; the dataset citation is not independent evidence for this passage.'} {description.missingSourceIds.join(', ')}</p>}
      <p>{description.datasetCitation}</p>
      <small>{record.wfoId} · description.txt:{description.rowNumber} · {description.rightsHolder} · {description.rights} · <a href={description.license}>CC BY 4.0</a></small>
    </details>)}
  </section>
}
