import { useEffect, useState } from 'react'
import { loadPackageAuthorityArchiveRecord, loadPackageAuthorityArchiveSourceOnly } from '../../data-client/staticDataClient'
import type { AuthorityArchiveCollectionId, AuthorityArchiveName, AuthorityArchiveRecord, RuntimeAuthorityArchiveCollection } from '../../data-client/types'

const scopes: Array<{ root: string; packageId: string; id: AuthorityArchiveCollectionId; title: string }> = [
  { root: 'M2L', packageId: 'molluscs-brachiopods', id: 'worms-mollusca-archive-crosswalk', title: 'WoRMS · Mollusca' },
  { root: 'B8TXQ', packageId: 'sponges-cnidarians', id: 'worms-porifera-archive-crosswalk', title: 'WoRMS · Porifera' },
  { root: 'B8V3X', packageId: 'sponges-cnidarians', id: 'worms-hydrozoa-archive-crosswalk', title: 'WoRMS · Hydrozoa' },
  { root: 'CN2', packageId: 'sponges-cnidarians', id: 'worms-cnidaria-archive-crosswalk', title: 'WoRMS · Cnidaria' },
  { root: 'NN', packageId: 'other-animals', id: 'worms-annelida-archive-crosswalk', title: 'WoRMS · Annelida' },
  { root: 'NM', packageId: 'other-animals', id: 'worms-nematoda-archive-crosswalk', title: 'WoRMS · Nematoda' },
  { root: 'KZX8B', packageId: 'crustaceans-insects', id: 'worms-crustacea-archive-crosswalk', title: 'WoRMS · Crustacea' },
  { root: '5X', packageId: 'protists-chromists', id: 'worms-radiozoa-archive-crosswalk', title: 'WoRMS · Radiozoa' },
  { root: '36', packageId: 'other-animals', id: 'worms-chaetognatha-archive-crosswalk', title: 'WoRMS · Chaetognatha' },
  { root: 'B8VFC', packageId: 'other-animals', id: 'worms-rhombozoa-archive-crosswalk', title: 'WoRMS · Rhombozoa' },
  { root: 'B8VF6', packageId: 'other-animals', id: 'worms-loricifera-archive-crosswalk', title: 'WoRMS · Loricifera' },
  { root: 'B8VF3', packageId: 'other-animals', id: 'worms-gnathostomulida-archive-crosswalk', title: 'WoRMS · Gnathostomulida' },
  { root: 'B8VF9', packageId: 'other-animals', id: 'worms-priapulida-archive-crosswalk', title: 'WoRMS · Priapulida' },
  { root: 'Z', packageId: 'protists-chromists', id: 'trichomycetes-archive-crosswalk', title: 'ChecklistBank source-1033 · Trichomycetes' },
  { root: 'CJBKK', packageId: 'crustaceans-insects', id: 'osf-orthoptera-archive-crosswalk', title: 'OSF · Orthoptera' },
  { root: '93', packageId: 'crustaceans-insects', id: 'chilobase-archive-crosswalk', title: 'ChiloBase · Chilopoda' },
  { root: '42N', packageId: 'trilobites-chelicerates', id: 'scorpion-files-archive-crosswalk', title: 'The Scorpion Files · Scorpiones' },
]

function SourceName({ name }: { name: AuthorityArchiveName }) {
  const text = `${name.scientificName} ${name.authorship}`.trim()
  return <span>{/^https?:\/\//.test(name.url) ? <a href={name.url} target="_blank" rel="noreferrer">{text}</a> : text} <code>{name.id}</code>{name.nameId && <small> Name ID: {name.nameId}</small>}</span>
}

function SourceOnlyRecords({ collection, fileIndex, zh }: { collection: RuntimeAuthorityArchiveCollection; fileIndex: number; zh: boolean }) {
  const [records, setRecords] = useState<AuthorityArchiveRecord[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [visible, setVisible] = useState(100)
  useEffect(() => {
    let cancelled = false
    void loadPackageAuthorityArchiveSourceOnly(collection.packageId, collection.id, fileIndex)
      .then((value) => { if (!cancelled) setRecords(value) })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [collection, fileIndex])
  if (failed) return <p role="alert">{zh ? '单独记录读取失败；收起后可重试。' : 'Separate records could not be loaded; close and reopen to retry.'}</p>
  if (!records) return <p role="status">{zh ? '正在读取单独记录…' : 'Loading separate records…'}</p>
  return <>
    <ul>{records.slice(0, visible).map((record, index) => {
      const name = record.acceptedName ?? record.matchedName
      return <li key={name?.id ?? index}>{name && <SourceName name={name} />}</li>
    })}</ul>
    {visible < records.length && <button type="button" onClick={() => setVisible((value) => value + 100)}>{zh ? '再显示 100 条' : 'Show 100 more'}</button>}
  </>
}

function SourceOnlyDisclosure({ collection, zh }: { collection: RuntimeAuthorityArchiveCollection; zh: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const [fileIndex, setFileIndex] = useState(0)
  return <details onToggle={(event) => { if (event.target === event.currentTarget) setExpanded(event.currentTarget.open) }}>
    <summary>{zh ? '浏览单独的 source-only 记录' : 'Browse separate source-only records'}</summary>
    <p>{zh ? '这些记录没有被分配 COL ID，不计入 COL 接受种总数。' : 'These records have no assigned COL ID and are not added to the COL accepted-species total.'}</p>
    {collection.upstreamOnlyFiles.length > 1 && <label>{zh ? '记录分组' : 'Record group'} <select value={fileIndex} onChange={(event) => setFileIndex(Number(event.target.value))}>{collection.upstreamOnlyFiles.map((file, index) => <option key={file.url} value={index}>{index + 1} · {file.records}</option>)}</select></label>}
    {expanded && <SourceOnlyRecords key={fileIndex} collection={collection} fileIndex={fileIndex} zh={zh} />}
  </details>
}

function ArchiveRecord({ scope, colId, zh }: { scope: typeof scopes[number]; colId: string; zh: boolean }) {
  const [result, setResult] = useState<Awaited<ReturnType<typeof loadPackageAuthorityArchiveRecord>> | null>(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let cancelled = false
    void loadPackageAuthorityArchiveRecord(scope.packageId, scope.id, colId)
      .then((value) => { if (!cancelled) setResult(value) })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [scope, colId])
  if (failed) return <p role="alert">{zh ? '来源数据读取失败；可收起后重新打开。COL 记录仍可使用。' : 'Source data could not be loaded. Close and reopen to retry; the COL record remains available.'}</p>
  if (!result) return <p role="status">{zh ? '正在读取来源记录…' : 'Loading the source record…'}</p>
  const { collection, record } = result
  const counts = collection.counts
  const version = typeof collection.source.version === 'string' ? collection.source.version : ''
  const doi = typeof collection.source.versionDoi === 'string' ? collection.source.versionDoi : ''
  const statuses = { accepted: '接受名精确对应', redirect: '明示接受名重定向', ambiguous: '多个候选', unmatched: '没有精确对应', withheld: '保留未定', 'upstream-only': '仅权威源收录', 'source-only': '仅权威源收录' }
  return <div className="catalogue-source-card">
    <strong>{collection.provider}</strong>
    <span>{version} · {collection.source.license}</span>
    <p>{zh ? collection.evidenceBoundary.zh : collection.evidenceBoundary.en}</p>
    <dl>
      <div><dt>{zh ? '本范围 COL 记录' : 'COL records in this scope'}</dt><dd>{counts.total.toLocaleString()}</dd></div>
      <div><dt>{zh ? '接受名／明示重定向' : 'Accepted / explicit redirects'}</dt><dd>{counts.accepted.toLocaleString()} / {counts.redirect.toLocaleString()}</dd></div>
      <div><dt>{zh ? '多候选／无对应／未定' : 'Ambiguous / unmatched / withheld'}</dt><dd>{counts.ambiguous.toLocaleString()} / {counts.unmatched.toLocaleString()} / {counts.withheld.toLocaleString()}</dd></div>
      <div><dt>{zh ? '独立的源特有记录' : 'Separate source-only records'}</dt><dd>{counts.upstreamOnly.toLocaleString()}</dd></div>
    </dl>
    {!collection.delivery.completeRows ? <p>{zh ? '网页版只提供本来源的摘要与文件清单；逐条记录随 Android 和 iOS 完整数据提供。这不表示当前物种没有对应记录。' : 'Web provides this source’s summary and file inventory; row-level records ship with the full Android and iOS data. This does not mean this species is unmatched.'}</p>
      : !record ? <p>{zh ? '固定映射中未找到这个 COL ID；未猜测替代记录。' : 'This COL ID was not found in the pinned mapping; no substitute was guessed.'}</p>
        : <>
          <p>{zh ? '当前记录：' : 'This record: '}{zh ? statuses[record.status] : record.status}</p>
          {record.matchedName && <p><SourceName name={record.matchedName} /></p>}
          {record.acceptedName && (record.acceptedName.id !== record.matchedName?.id || record.acceptedName.nameId !== record.matchedName?.nameId) && <p>{zh ? '来源接受名：' : 'Source accepted name: '}<SourceName name={record.acceptedName} /></p>}
          {record.candidates.length > 0 && <ul>{record.candidates.map((candidate, index) => <li key={`${candidate.id}:${index}`}><SourceName name={candidate} /></li>)}</ul>}
          <p>{record.mappingBasis}</p>
        </>}
    {doi && <a href={`https://doi.org/${doi}`} target="_blank" rel="noreferrer">{zh ? '核对固定来源版本' : 'Verify the pinned source version'}</a>}
    {collection.delivery.completeRows && counts.upstreamOnly > 0 && <SourceOnlyDisclosure collection={collection} zh={zh} />}
  </div>
}

export function AuthorityArchiveEvidence({ colId, packageId, lineageIds, zh }: { colId: string; packageId: string; lineageIds: string[]; zh: boolean }) {
  const scope = scopes.find((entry) => entry.packageId === packageId && lineageIds.includes(entry.root))
  const [expanded, setExpanded] = useState(false)
  if (!scope) return null
  return <details className="catalogue-authority-disclosure" onToggle={(event) => { if (event.target === event.currentTarget) setExpanded(event.currentTarget.open) }}>
    <summary>{scope.title} — {zh ? '查看来源名称对照' : 'Source name mapping'}</summary>
    {expanded && <ArchiveRecord key={`${colId}:${scope.id}`} scope={scope} colId={colId} zh={zh} />}
  </details>
}
