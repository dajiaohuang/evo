import type { CatalogueKnowledgeRecord } from '../../data-client/types'

interface Props {
  record: CatalogueKnowledgeRecord | null
  status: 'loading' | 'ready' | 'error'
  zh: boolean
}

export function CatalogueKnowledge({ record, status, zh }: Props) {
  const language = zh ? 'zh' : 'en'
  const profile = record?.profile
  const dossier = record?.dossier
  const subtree = record?.subtree
  const facetNames: Record<string, string> = zh
    ? { morphology: '形态', lifeHistory: '生活史', ecology: '生态', evolution: '演化', distribution: '分布', fossil: '化石', conservation: '保育' }
    : { morphology: 'Morphology', lifeHistory: 'Life history', ecology: 'Ecology', evolution: 'Evolution', distribution: 'Distribution', fossil: 'Fossils', conservation: 'Conservation' }
  const facetStatus = (state: string) => ({
    supported: zh ? '证据覆盖' : 'Supported',
    'partially-supported': zh ? '部分证据，未完整' : 'Partial evidence',
    'searched-no-evidence': zh ? '限定检索未发现' : 'No evidence found in scoped search',
    conflicted: zh ? '证据有冲突' : 'Conflicted evidence',
    'not-assessed': zh ? '尚未评估' : 'Not assessed',
  }[state] ?? state)
  const number = (n: number) => n.toLocaleString(zh ? 'zh-CN' : 'en-US')
  return <section className="catalogue-source-card catalogue-knowledge" aria-label={zh ? '内容与证据' : 'Content and evidence'}>
    <h2>{profile ? profile.name[language] : (zh ? '内容与证据' : 'Content and evidence')}</h2>
    {status === 'loading' && <p role="status">{zh ? '正在核对本条目的内容…' : 'Checking content for this taxon…'}</p>}
    {status === 'error' && <p role="status">{zh ? '内容索引读取或校验失败，暂时无法判断覆盖情况。分类记录仍可阅读。' : 'The content index could not be read or verified. Coverage is unknown; the taxonomic record remains available.'}</p>}
    {status === 'ready' && <>
      {profile ? <>
        <span className="catalogue-status">{zh ? '有来源的入门概述' : 'Source-linked introduction'}</span>
        {profile.sections.map((section, index) => <div key={`${section.topic}:${index}`}>
          <p>{section.text[language]}</p>
          <small>{section.sourceIds.map((id, sourceIndex) => {
            const source = profile.sources.find(item => item.id === id)
            return source ? <span key={id}>{sourceIndex > 0 ? ' · ' : ''}<a href={source.url}>{source.title}</a></span> : null
          })}</small>
        </div>)}
        <details><summary>{zh ? '来源范围与待补证据' : 'Source scope and remaining evidence'}</summary>
          <p>{profile.limitations[language]}</p>
          <ul>{profile.sources.map(source => <li key={source.id}><a href={source.url}>{source.title}</a> — {source.scope[language]}</li>)}</ul>
          <small>{zh ? '来源核对日期：' : 'Sources checked: '}{profile.checkedAt}</small>
        </details>
      </> : <p>{zh ? '本目录条目尚未关联独立的双语概述。下面的分类、原文与覆盖记录可分别核对。' : 'This catalogue entry has no linked bilingual introduction yet. Classification, source text and coverage can be checked separately below.'}</p>}
      {dossier && <div className="catalogue-scientific-dossier">
        <h3>{zh ? '逐项科学证据' : 'Facet-by-facet scientific evidence'}</h3>
        <p>{zh ? '完整档案状态：' : 'Dossier completeness: '}{dossier.completeness.status === 'complete' ? (zh ? '完整' : 'complete') : (zh ? '未完成' : 'incomplete')} · {zh ? '外部专家评审：' : 'External expert review: '}{dossier.expertReview.status === 'externally-reviewed' ? (zh ? '已完成' : 'reviewed') : (zh ? '尚未完成' : 'not completed')}</p>
        {Object.entries(dossier.facets).map(([facet, assessment]) => <section key={facet}>
          <h4>{facetNames[facet] ?? facet} <small>— {facetStatus(assessment.status)}</small></h4>
          {assessment.claims?.map((claim, index) => <div key={`${facet}:${index}`}>
            <p>{zh ? claim.textZh : claim.text}</p>
            <small>{claim.sourceIds.map((id, sourceIndex) => {
              const source = dossier.sources.find(item => item.id === id)
              return source ? <span key={id}>{sourceIndex ? ' · ' : ''}<a href={source.url}>{source.title}</a> ({claim.locator})</span> : null
            })}</small>
            <small>{zh ? '适用范围：' : 'Scope: '}{claim.placeTimeScope} · {claim.lifeStatus}</small>
          </div>)}
          {assessment.gaps?.length ? <ul>{assessment.gaps.map(gap => <li key={gap}>{gap}</li>)}</ul> : null}
        </section>)}
        <details><summary>{zh ? '来源版本、许可与边界' : 'Source versions, rights and scope'}</summary>
          <ul>{dossier.sources.map(source => <li key={source.id}><a href={source.url}>{source.title}</a> — {source.version}; {source.license}; {source.scope}</li>)}</ul>
          <small>{zh ? '身份核对日期：' : 'Identity checked: '}{dossier.checkedAt}</small>
        </details>
      </div>}
      {!!record?.descriptionCollections.length && <p>{zh ? `本条目收录 ${number(record.descriptionCollections.length)} 套来源原文，见下方各来源；地域与年代范围分别保留。` : `${number(record.descriptionCollections.length)} source-text collections are available below, each retaining its geographic and temporal scope.`}</p>}
      {!!record?.sourceFacetEvidence?.length && <p>{zh ? `来源标签初筛（不代表完整科学证据）：${record.sourceFacetEvidence.map(facet => facetNames[facet] ?? facet).join('、')}。` : `Source-label screening only (not complete scientific evidence): ${record.sourceFacetEvidence.map(facet => facetNames[facet] ?? facet).join(', ')}.`}</p>}
      {!record?.descriptionCollections.length && !subtree && <p>{zh ? '本版未收录此条目的来源原文；这不表示该物种在科学文献中没有研究。' : 'This release has no imported source text for this taxon; this does not mean the species is unstudied.'}</p>}
      {subtree && <div>
        <h3>{zh ? '此分支的实际覆盖' : 'Coverage within this branch'}</h3>
        <dl className="catalogue-knowledge-counts">
          <div><dt>{zh ? '接受种条目' : 'Accepted species entries'}</dt><dd>{number(subtree.acceptedSpecies)}</dd></div>
          <div><dt>{zh ? '有来源原文' : 'With imported source text'}</dt><dd>{number(subtree.describedSpecies)}</dd></div>
          <div><dt>{zh ? '已关联双语概述' : 'Linked bilingual introductions'}</dt><dd>{number(subtree.profiledSpecies)}</dd></div>
          <div><dt>{zh ? '有逐项证据档案' : 'With facet evidence records'}</dt><dd>{number(subtree.dossierSpecies ?? 0)}</dd></div>
          {Object.entries(subtree.sourceFacetEvidenceSpecies ?? {}).filter(([, count]) => count > 0).map(([facet, count]) => <div key={`source:${facet}`}><dt>{zh ? `${facetNames[facet] ?? facet}：来源明确标注` : `${facetNames[facet] ?? facet}: explicitly labeled source text`}</dt><dd>{number(count)}</dd></div>)}
          <div><dt>{zh ? '完整科学档案' : 'Complete scientific dossiers'}</dt><dd>{number(subtree.completeDossierSpecies ?? 0)}</dd></div>
          <div><dt>{zh ? '外部专家评审' : 'External expert reviews'}</dt><dd>{number(subtree.expertReviewedSpecies ?? 0)}</dd></div>
        </dl>
        <p>{zh ? '按固定分类树统计后代接受种；原文与概述可重叠。条目数不等于野生现生物种数，也不表示完整档案或专家评审已完成。' : 'Counts follow accepted species descendants in the pinned tree. Text and introduction counts can overlap. Entries are not counts of living wild species, complete dossiers or expert reviews.'}</p>
      </div>}
    </>}
  </section>
}
