import { useEffect, useRef, useState } from 'react'
import { loadCatalogueItisOtherAnimalsRecord, loadCatalogueItisProtistsRecord, loadCatalogueResourcePackManifest } from '../../data-client/staticDataClient'
import type { CatalogueItisOtherAnimalsScope, CatalogueItisProtistsScope, ItisNomenclatureRecord } from '../../data-client/types'
import { RecordDetail } from './MyriapodaItisEvidence'
import type { CatalogueItisScopeConfig } from './catalogueItisScopeTypes'

type CatalogueItisEvidenceProps = {
  config: CatalogueItisScopeConfig
  colId: string
  packageId: string
  lineageIds: string[]
  zh: boolean
}

type SummaryExtension = {
  provider: string
  source: { exportDate?: string }
  counts: { eligible: number; accepted: number; redirects: number; ambiguous: number; unmatched: number; upstreamOnly: number }
  delivery: { completeRows: boolean; profile: string }
  evidenceBoundary?: { en: string; zh: string }
}

function EvidencePanel({ config, colId, packageId, zh }: CatalogueItisEvidenceProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [extension, setExtension] = useState<SummaryExtension | null>(null)
  const [record, setRecord] = useState<ItisNomenclatureRecord | null>(null)
  const [rowLoaded, setRowLoaded] = useState(false)
  const requestRef = useRef(0)

  useEffect(() => () => { requestRef.current += 1 }, [])

  const load = async () => {
    if (loading) return
    const requestId = ++requestRef.current
    setLoading(true)
    setFailed(false)
    setRowLoaded(false)
    try {
      const manifest = await loadCatalogueResourcePackManifest(packageId)
      const candidate = manifest.extensions?.find((value) => value.id === config.collectionId) as SummaryExtension | undefined
      if (!candidate || candidate.provider !== 'Integrated Taxonomic Information System') throw new Error(`Missing ITIS collection ${config.collectionId}`)
      if (requestId !== requestRef.current) return
      setExtension(candidate)
      if (candidate.delivery.completeRows && candidate.delivery.profile === 'native-full') {
        const result = packageId === 'other-animals'
          ? await loadCatalogueItisOtherAnimalsRecord(config.scope as CatalogueItisOtherAnimalsScope, colId)
          : await loadCatalogueItisProtistsRecord(config.scope as CatalogueItisProtistsScope, colId)
        if (requestId !== requestRef.current) return
        setRecord(result?.record ?? null)
      }
      if (requestId === requestRef.current) setRowLoaded(true)
    } catch {
      if (requestId === requestRef.current) setFailed(true)
    } finally {
      if (requestId === requestRef.current) setLoading(false)
    }
  }

  return <details open={open} className="catalogue-authority-disclosure" onToggle={(event) => {
    if (event.target !== event.currentTarget) return
    const next = event.currentTarget.open
    setOpen(next)
    if (!next) { setFailed(false); return }
    if (!loading && (!extension || !rowLoaded || failed)) void load()
  }}>
    <summary>{zh ? config.title.zh : config.title.en}</summary>
    {open && <div className="catalogue-source-card">
      {loading && <p role="status">{zh ? '正在读取固定 ITIS 摘要…' : 'Loading the pinned ITIS summary…'}</p>}
      {failed && <p role="alert">{zh ? `ITIS ${config.scope} 对应读取失败；收起后可重试。` : `The ITIS ${config.scope} mapping could not be loaded; close and reopen to retry.`}</p>}
      {extension && <>
        <strong>{extension.provider}</strong>
        <span>{extension.source.exportDate ?? ''}</span>
        {extension.evidenceBoundary && <p>{zh ? extension.evidenceBoundary.zh : extension.evidenceBoundary.en}</p>}
        <dl>
          <div><dt>{zh ? '本范围 COL 记录' : 'COL records in scope'}</dt><dd>{extension.counts.eligible.toLocaleString()}</dd></div>
          <div><dt>{zh ? '接受名／明确重定向' : 'Accepted / explicit redirects'}</dt><dd>{extension.counts.accepted.toLocaleString()} / {extension.counts.redirects.toLocaleString()}</dd></div>
          <div><dt>{zh ? '多候选／无对应' : 'Ambiguous / unmatched'}</dt><dd>{extension.counts.ambiguous.toLocaleString()} / {extension.counts.unmatched.toLocaleString()}</dd></div>
          <div><dt>{zh ? '独立分区 ITIS 当前种' : 'Separate ITIS source-only species'}</dt><dd>{extension.counts.upstreamOnly.toLocaleString()}</dd></div>
        </dl>
        {!extension.delivery.completeRows && <p>{zh ? '网页版仅提供摘要；逐条映射随 Android 与 iOS 完整数据提供。' : 'Web provides the summary only; row-level mappings ship with the complete Android and iOS data profile.'}</p>}
        {extension.delivery.completeRows && loading && <p role="status">{zh ? '正在读取对应的 ITIS 分片…' : 'Loading the matching ITIS shard…'}</p>}
        {extension.delivery.completeRows && !loading && !failed && rowLoaded && <RecordDetail record={record} zh={zh} />}
      </>}
    </div>}
  </details>
}

export function CatalogueItisEvidence(props: CatalogueItisEvidenceProps) {
  const { config, colId, packageId, lineageIds } = props
  if (packageId !== config.packageId || !lineageIds.some((id) => config.roots.has(id)) || lineageIds.some((id) => config.excludedRoots.has(id))) return null
  return <EvidencePanel key={`${config.scope}|${colId}|${packageId}|${lineageIds.join('|')}`} {...props} />
}
