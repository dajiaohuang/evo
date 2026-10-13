import { useEffect, useState } from 'react'
import { loadPbdbReader, loadPbdbReaderIndex } from '../../data-client/staticDataClient'
import type { PbdbReaderIndexEntry, PbdbReaderRecord } from '../../data-client/pbdbReaderTypes'
import { useI18n } from '../../i18n'
import type { AppRoute } from '../../utils/routing'
import { isPbdbTaxonId } from '../../utils/pbdbIdentity.mjs'
import { CatalogueKnowledge } from './CatalogueKnowledge'
import { LocalTreePanel } from '../tree/LocalTreePanel'
import { navigationTree, treePath } from '../tree/navigationTree'
import { PbdbSourceTree } from './PbdbSourceTree'
import './CatalogueTaxonPage.css'
import './PbdbTaxonPage.css'

export function PbdbTaxonPage({ id, onNavigate }: {
  id: string | null
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const [loaded, setLoaded] = useState<{ id: string; record: PbdbReaderRecord | null; index: PbdbReaderIndexEntry[] } | null>(null)
  const [errorId, setErrorId] = useState<string | null>(null)
  useEffect(() => {
    let active = true
    if (id && isPbdbTaxonId(id)) void Promise.all([loadPbdbReader(id), loadPbdbReaderIndex()]).then(([record, index]) => {
      if (active) setLoaded({ id, record, index })
    }).catch(() => { if (active) setErrorId(id) })
    return () => { active = false }
  }, [id])
  if (!id || !isPbdbTaxonId(id)) return <main className="catalogue-taxon-page"><h1>{zh ? '需要 PBDB 分类单元标识' : 'A PBDB taxon identifier is required'}</h1><p>{zh ? '请使用记录中的 txn: 标识。' : 'Use the recorded txn: identifier.'}</p></main>
  if (errorId === id) return <main className="catalogue-taxon-page"><p role="alert">{zh ? '该 PBDB 资料暂时无法加载。' : 'This PBDB account could not be loaded.'}</p></main>
  if (loaded?.id !== id) return <main className="catalogue-taxon-page"><p role="status">{zh ? '正在打开 PBDB 资料…' : 'Opening the PBDB account…'}</p></main>
  const record = loaded.record
  if (!record) return <main className="catalogue-taxon-page"><h1>{zh ? '此 PBDB 标识没有已发布资料' : 'No published account for this PBDB identifier'}</h1><p>{id}</p></main>
  const classification = record.identity.classification
  const open = (entry: PbdbReaderIndexEntry) => onNavigate('pbdb', { id: entry.pbdbTaxonId })
  const atlasTreeId = record.atlasProfile?.treeNodeId
  return <main className="catalogue-taxon-page pbdb-taxon-page">
    <header className="catalogue-taxon-hero">
      <span>{zh ? 'PBDB 分类单元资料' : 'PBDB taxon account'}</span>
      <h1>{record.identity.scientificName ?? id}</h1>
      <p>{[record.identity.rank, classification.status, classification.release].filter(Boolean).join(' · ')}</p>
    </header>
    <div className="pbdb-taxon-account">
    {record.contexts ? record.contexts.map((context, index) => <section key={index}>
      <h2>{context.identity.scientificName ?? context.pbdbTaxonId} · {context.identity.classification.release}</h2>
      {context.identity.classification.placement && <p>{context.identity.classification.placement}</p>}
      {context.identity.classification.parentSourceIdentifier && <p>{zh ? '该来源父级：' : 'Parent in this source: '}{context.identity.classification.parentSourceIdentifier}</p>}
      <CatalogueKnowledge record={context} status="ready" zh={zh} onNavigate={onNavigate} />
    </section>) : <CatalogueKnowledge record={record} status="ready" zh={zh} onNavigate={onNavigate} />}
    {(record.contexts ?? [record]).flatMap(account => account.ranges ?? []).filter(range => range.status === 'available' && range.claimIds.length > 0 && range.referenceLocators?.length
      && Number.isFinite(range.olderMa) && Number.isFinite(range.youngerMa) && range.olderMa >= range.youngerMa && range.youngerMa >= 0)
      .map((range, index) => <section className="node-reading__context" key={`${range.entityId}:${index}`}>
        <p>{range.taxonomicConcept} · {range.geographicScope} · {range.olderMa}–{range.youngerMa} Ma</p>
        {range.evidenceBasis && <p>{range.evidenceBasis}</p>}
        {range.uncertainty?.note && <p>{range.uncertainty.note}</p>}
        <button type="button" onClick={() => onNavigate('explore', { age: String((range.olderMa + range.youngerMa) / 2), older: String(range.olderMa), younger: String(range.youngerMa) })}>{zh ? '以记录区间中点查看地图时间' : 'View map time at the recorded interval midpoint'}</button>
      </section>)}
    <details className="node-reading__methods">
      <summary>{zh ? 'PBDB 来源分类与身份' : 'PBDB source classification and identity'}</summary>
      <p><a href={classification.sourceUrl} target="_blank" rel="noreferrer">{id} · {classification.authority}</a></p>
      {classification.placement && <p>{classification.placement}</p>}
      {classification.sourceSnapshot && <p>{zh ? '来源快照：' : 'Source snapshot: '}{classification.sourceSnapshot}</p>}
      {record.identity.conceptsMerged === false && <p>{zh ? '这些条目代表独立的来源分类概念，未认定它们等价。' : 'These entries represent independent source classification concepts; their equivalence has not been established.'}</p>}
      {record.scopedIdentities?.map(entry => <div key={entry.context}><strong>{entry.context}</strong><p>{[entry.identity.scientificName, entry.identity.classification.release, entry.identity.classification.placement].filter(Boolean).join(' · ')}</p><a href={entry.identity.classification.sourceUrl} target="_blank" rel="noreferrer">{zh ? '独立来源身份' : 'Independent source identity'}</a></div>)}
    </details>
    <PbdbSourceTree key={id} id={id} index={loaded.index} zh={zh} onOpen={open} />
    {atlasTreeId && treePath(navigationTree, atlasTreeId) && <LocalTreePanel nodeId={atlasTreeId} />}
    </div>
  </main>
}
