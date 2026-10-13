import { useState } from 'react'
import type { PbdbReaderIndexEntry } from '../../data-client/pbdbReaderTypes'

/** A bounded view of recorded PBDB parent links, with no phylogenetic inference. */
export function PbdbSourceTree({ id, index, zh, onOpen }: {
  id: string; index: PbdbReaderIndexEntry[]; zh: boolean; onOpen: (entry: PbdbReaderIndexEntry) => void
}) {
  const [query, setQuery] = useState('')
  const [limit, setLimit] = useState(25)
  const byId = new Map(index.map(entry => [entry.pbdbTaxonId, entry]))
  const selected = byId.get(id as `txn:${number}`)
  const lineage: PbdbReaderIndexEntry[] = []
  const visited = new Set<string>([id])
  let parentId = selected?.identity.classification.parentSourceIdentifier
  while (parentId && !visited.has(parentId) && lineage.length < 64) {
    visited.add(parentId)
    const parent = byId.get(parentId as `txn:${number}`)
    if (!parent) break
    lineage.unshift(parent)
    parentId = parent.identity.classification.parentSourceIdentifier
  }
  const children = index.filter(entry => entry.identity.classification.parentSourceIdentifier === id
    && `${entry.identity.scientificName} ${entry.pbdbTaxonId}`.toLowerCase().includes(query.toLowerCase()))
  return <details className="node-reading__methods pbdb-source-tree">
    <summary>{zh ? 'PBDB 来源分类中的位置' : 'Position in the PBDB source classification'}</summary>
    <p>{zh ? '枝条表示来源记录的分类父级关系；它们不指定直接祖先或研究得到的系统发育关系。' : 'Branches show parent relationships in the source classification; they do not identify direct ancestors or a study-derived phylogeny.'}</p>
    <nav aria-label={zh ? '来源分类父链' : 'Source classification parent chain'}>{lineage.map(entry => <button key={entry.pbdbTaxonId} type="button" onClick={() => onOpen(entry)}>{entry.identity.scientificName} →</button>)}</nav>
    {parentId && !byId.has(parentId as `txn:${number}`) && <p>{zh ? '更上级的来源标识：' : 'Higher source identifier: '}{parentId}</p>}
    <strong>{selected?.identity.scientificName}</strong>
    {!selected?.identity.classification.parentSourceIdentifier && <p>{zh ? '这份身份资料没有记录 PBDB 父级标识。' : 'This identity record does not include a PBDB parent identifier.'}</p>}
    {children.length > 0 || query ? <>
      <label>{zh ? '筛选来源分类成员' : 'Filter source classification members'}<input value={query} onChange={event => { setQuery(event.target.value); setLimit(25) }} /></label>
      <ul className="pbdb-source-tree__children">{children.slice(0, limit).map(entry => <li key={entry.pbdbTaxonId}><button type="button" onClick={() => onOpen(entry)}>{entry.identity.scientificName} →</button></li>)}</ul>
      {children.length > limit && <button type="button" onClick={() => setLimit(previous => previous + 25)}>{zh ? '继续显示 25 个来源成员' : 'Show 25 more source members'}</button>}
    </> : null}
  </details>
}
