import { useEffect, useRef, useState } from 'react'
import { loadPackageItisAuthorityRecord, loadPackageManifest } from '../../data-client/staticDataClient'
import type { RuntimeItisNomenclatureCollection, ItisNomenclatureRecord } from '../../data-client/types'

const COLLECTION_ID = 'itis-myriapoda-tsn-crosswalk' as const
const COL_ROOTS = new Set(['L2G4H', '93'])

function itisUrl(tsn: string) {
  return `https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=${encodeURIComponent(tsn)}`
}

function candidateName(candidate: NonNullable<ItisNomenclatureRecord['candidates']>[number]) {
  if (candidate.currentName) return candidate.currentName
  if (candidate.tsn && candidate.scientificName) return { tsn: candidate.tsn, scientificName: candidate.scientificName }
  return null
}

function StatusLabel({ status, zh }: { status: ItisNomenclatureRecord['status']; zh: boolean }) {
  const labels = {
    accepted: zh ? '接受名精确对应' : 'Exact accepted-name match',
    'synonym-current-name-redirect': zh ? '明示同物异名重定向' : 'Explicit synonym redirect',
    ambiguous: zh ? '多个精确候选' : 'Multiple exact candidates',
    unmatched: zh ? '没有精确对应' : 'No exact match',
    'non-applicable': zh ? '不适用' : 'Not applicable',
  }
  return <strong>{labels[status]}</strong>
}

function RecordDetail({ record, zh }: { record: ItisNomenclatureRecord | null; zh: boolean }) {
  if (!record) return <p>{zh ? '固定映射中未找到该 COL ID；未猜测替代记录。' : 'This COL ID was not found in the pinned mapping; no substitute was inferred.'}</p>
  return <>
    <p><StatusLabel status={record.status} zh={zh} /></p>
    {record.currentName && <p>{zh ? '当前 ITIS 名称：' : 'Current ITIS name: '}<a href={itisUrl(record.currentName.tsn)} target="_blank" rel="noreferrer">{record.currentName.scientificName} ({record.currentName.tsn}) ↗</a></p>}
    {record.status === 'ambiguous' && record.candidates && <>
      <p>{zh ? '保留的精确候选：' : 'Retained exact candidates:'}</p>
      <ul>{record.candidates.map((candidate, index) => {
        const name = candidateName(candidate)
        if (!name) return <li key={index}>{zh ? '候选记录缺少 ITIS 名称标识。' : 'Candidate record has no ITIS name identifier.'}</li>
        return <li key={name.tsn}><a href={itisUrl(name.tsn)} target="_blank" rel="noreferrer">{name.scientificName} ({name.tsn}) ↗</a></li>
      })}</ul>
    </>}
    {record.status === 'synonym-current-name-redirect' && <p>{zh ? '该重定向只依据 ITIS 明示的 species synonym 关系。' : 'This redirect follows only the explicit ITIS species-synonym relation.'}</p>}
  </>
}

type MyriapodaItisEvidenceProps = { colId: string; packageId: string; lineageIds: string[]; zh: boolean }

function MyriapodaItisEvidencePanel({ colId, packageId, zh }: MyriapodaItisEvidenceProps) {
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [collection, setCollection] = useState<RuntimeItisNomenclatureCollection | null>(null)
  const [record, setRecord] = useState<ItisNomenclatureRecord | null>(null)
  const [rowLoaded, setRowLoaded] = useState(false)
  const requestRef = useRef(0)

  useEffect(() => {
    return () => { requestRef.current += 1 }
  }, [])

  const load = async () => {
    if (loading) return
    const requestId = ++requestRef.current
    setLoading(true)
    setFailed(false)
    setRowLoaded(false)
    try {
      const manifest = await loadPackageManifest(packageId)
      if (requestId !== requestRef.current) return
      const metadata = manifest.nomenclatureCollections?.find((candidate): candidate is RuntimeItisNomenclatureCollection => candidate.id === COLLECTION_ID)
      if (!metadata) throw new Error('Runtime package does not publish the Myriapoda collection')
      setCollection(metadata)
      if (metadata.delivery.completeRows && metadata.delivery.profile === 'native-full') {
        const result = await loadPackageItisAuthorityRecord('myriapoda', colId)
        if (requestId !== requestRef.current) return
        setRecord(result.record)
      }
      setRowLoaded(true)
    } catch {
      if (requestId === requestRef.current) setFailed(true)
    } finally {
      if (requestId === requestRef.current) setLoading(false)
    }
  }

  const rowReady = collection !== null && (!collection.delivery.completeRows || rowLoaded)

  return <details open={expanded} className="catalogue-authority-disclosure" onToggle={(event) => {
    if (event.target !== event.currentTarget) return
    const open = event.currentTarget.open
    if (open === expanded) return
    setExpanded(open)
    if (!open) {
      setFailed(false)
      return
    }
    if (open && !loading && (failed || !collection || !rowReady)) void load()
  }}>
    <summary>{zh ? 'ITIS 多足动物精确命名对应' : 'ITIS Myriapoda exact nomenclatural mapping'}</summary>
    {expanded && <div className="catalogue-source-card">
      {loading && <p role="status">{zh ? '正在读取固定 ITIS 摘要…' : 'Loading the pinned ITIS summary…'}</p>}
      {failed && <p role="alert">{zh ? 'ITIS 对应读取失败；请收起后重新打开重试。' : 'The ITIS mapping could not be loaded; close and reopen to retry.'}</p>}
      {collection && <>
        <span>{collection.provider} · {String(collection.source.exportDate ?? '')}</span>
        <p>{zh ? collection.evidenceBoundary.zh : collection.evidenceBoundary.en}</p>
        <dl>
          <div><dt>{zh ? '本范围 COL 记录' : 'COL records in scope'}</dt><dd>{collection.counts.total.toLocaleString()}</dd></div>
          <div><dt>{zh ? '接受名／明示重定向' : 'Accepted / explicit redirects'}</dt><dd>{collection.counts.accepted.toLocaleString()} / {collection.counts.synonymCurrentNameRedirect.toLocaleString()}</dd></div>
          <div><dt>{zh ? '多候选／无对应' : 'Ambiguous / unmatched'}</dt><dd>{collection.counts.ambiguous.toLocaleString()} / {collection.counts.unmatched.toLocaleString()}</dd></div>
          <div><dt>{zh ? '独立分区 ITIS 当前种' : 'Separate ITIS source-only species'}</dt><dd>{(collection.counts.itisUpstreamOnly ?? 0).toLocaleString()}</dd></div>
        </dl>
        {!collection.delivery.completeRows && <p>{zh ? '网页版只提供摘要；逐条映射随 Android 与 iOS 完整数据提供。' : 'Web provides the summary only; row-level mappings ship with the complete Android and iOS data profile.'}</p>}
        {collection.delivery.completeRows && loading && <p role="status">{zh ? '正在读取对应的 ITIS 分片…' : 'Loading the matching ITIS shard…'}</p>}
        {collection.delivery.completeRows && !loading && !failed && rowReady && <RecordDetail record={record} zh={zh} />}
      </>}
    </div>}
  </details>
}

export function MyriapodaItisEvidence({ colId, packageId, lineageIds, zh }: MyriapodaItisEvidenceProps) {
  const applicable = packageId === 'crustaceans-insects' && lineageIds.some((id) => COL_ROOTS.has(id))
  if (!applicable) return null
  const identity = `${colId}|${packageId}|${lineageIds.join('|')}`
  return <MyriapodaItisEvidencePanel key={identity} colId={colId} packageId={packageId} lineageIds={lineageIds} zh={zh} />
}
