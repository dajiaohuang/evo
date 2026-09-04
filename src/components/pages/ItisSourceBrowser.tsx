import { useEffect, useState } from 'react'
import { loadItisBrowseCollections, loadItisBrowseFile } from '../../data-client/itisBrowse'
import type { ItisBrowseCollection, ItisBrowseRecord, ItisSourceOnlyRecord } from '../../data-client/itisBrowse'
import type { CatalogueSpeciesCoverageEntry, ItisNomenclatureRecord } from '../../data-client/types'
import { RecordDetail } from '../catalogue/MyriapodaItisEvidence'
import './ItisSourceBrowser.css'

function sourceName(record: ItisSourceOnlyRecord) {
  return 'currentName' in record ? record.currentName : record
}

function FileRows({ collection, partition, index, zh }: { collection: ItisBrowseCollection; partition: 'col' | 'source-only'; index: number; zh: boolean }) {
  const [rows, setRows] = useState<ItisBrowseRecord[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')
  useEffect(() => {
    let cancelled = false
    void loadItisBrowseFile(collection, partition, index).then((data) => {
      if (!cancelled) setRows(data)
    }).catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [collection, partition, index, attempt])
  if (failed) return <p role="alert">{zh ? '该文件读取失败。' : 'This file could not be loaded.'} <button type="button" onClick={() => { setFailed(false); setAttempt((value) => value + 1) }}>{zh ? '重试' : 'Retry'}</button></p>
  if (!rows) return <p role="status">{zh ? '正在读取所选文件…' : 'Loading the selected file…'}</p>
  const needle = query.trim().toLocaleLowerCase()
  const filtered = rows.filter((row) => {
    const name = partition === 'col' ? (row as ItisNomenclatureRecord).colScientificName : sourceName(row as ItisSourceOnlyRecord).scientificName
    const id = partition === 'col' ? (row as ItisNomenclatureRecord).colUsageId : sourceName(row as ItisSourceOnlyRecord).tsn
    return `${name} ${id}`.toLocaleLowerCase().includes(needle)
  })
  const start = page * 50
  return <>
    <label>{zh ? '在当前文件内查找名称或 ID（不搜索其他文件）' : 'Find a name or ID in this file only (not other files)'}<input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(0) }} /></label>
    <p role="status">{zh ? `当前文件 ${rows.length.toLocaleString()} 条；匹配 ${filtered.length.toLocaleString()} 条。` : `${rows.length.toLocaleString()} records in this file; ${filtered.length.toLocaleString()} match.`}</p>
    <ol className="itis-browser__rows" start={start + 1}>
      {filtered.slice(start, start + 50).map((row, position) => {
        if (partition === 'col') {
          const record = row as ItisNomenclatureRecord
          return <li key={record.colUsageId ?? position}><strong>{record.colScientificName}</strong><p>COL {record.colUsageId}</p><RecordDetail record={record} zh={zh} /></li>
        }
        const source = row as ItisSourceOnlyRecord
        const name = sourceName(source)
        return <li key={name.tsn}><a href={`https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=${encodeURIComponent(name.tsn)}`} target="_blank" rel="noreferrer">{name.scientificName} ({name.tsn})</a>
          <p>{zh ? '来源中的名称状态：' : 'Name status in source: '}{name.usage}</p>
          {name.credibilityRating && <p>{zh ? 'ITIS 原始评定：' : 'Original ITIS rating: '}{name.credibilityRating}</p>}
          {'basis' in source && source.basis && <p>{source.basis}</p>}
        </li>
      })}
    </ol>
    {!filtered.length && <p>{zh ? '当前文件内没有匹配记录；可选择其他文件。' : 'No match in this file; you can select another file.'}</p>}
    <nav className="itis-browser__pagination" aria-label={zh ? 'ITIS 文件分页' : 'ITIS file pagination'}>
      <button type="button" disabled={page === 0} onClick={() => setPage((value) => value - 1)}>{zh ? '上一页' : 'Previous page'}</button>
      <span>{page + 1} / {Math.max(1, Math.ceil(filtered.length / 50))}</span>
      <button type="button" disabled={start + 50 >= filtered.length} onClick={() => setPage((value) => value + 1)}>{zh ? '下一页' : 'Next page'}</button>
    </nav>
  </>
}

function CollectionRows({ collection, zh }: { collection: ItisBrowseCollection; zh: boolean }) {
  const [partition, setPartition] = useState<'col' | 'source-only'>('source-only')
  const [fileIndex, setFileIndex] = useState('')
  const files = partition === 'col' ? collection.colFiles : collection.sourceOnlyFiles
  const count = partition === 'col' ? collection.colCount : collection.sourceOnlyCount
  return <>
    <p>{collection.exportDate} · CC0 ITIS</p>
    <p>{zh ? collection.boundary.zh || collection.boundary.en : collection.boundary.en}</p>
    <label>{zh ? '记录分区' : 'Record partition'}<select value={partition} onChange={(event) => { setPartition(event.target.value as 'col' | 'source-only'); setFileIndex('') }}>
      <option value="source-only">{zh ? '来源独有记录' : 'Source-only records'} ({collection.sourceOnlyCount.toLocaleString()})</option>
      <option value="col">{zh ? 'COL 对应记录' : 'COL mapping records'} ({collection.colCount.toLocaleString()})</option>
    </select></label>
    <p>{partition === 'source-only'
      ? (zh ? '这些是本固定映射范围中未对应 COL 的来源记录，不是全球去重后的新增物种，也不代表现生或经过专家评审。它们不自动归入 COL 物种。' : 'These source records have no COL match within this pinned mapping scope. They are not globally deduplicated additional species, nor evidence of extant status or expert review. They are not assigned to a COL species.')
      : (zh ? '保留接受名、明示重定向、多候选及无对应结果。精确命名对应不等于物种概念等同或独立科学验证。' : 'Accepted-name matches, explicit redirects, multiple candidates and unmatched outcomes remain distinct. Exact name matching does not establish species-concept equivalence or independent scientific verification.')}</p>
    {!count && <p>{zh ? '此固定分区没有记录；不会从相邻类群补入。' : 'This pinned partition has no records; none are borrowed from adjacent groups.'}</p>}
    {!collection.completeRows && <p>{zh ? '网页版只提供摘要；逐条记录已随 Android 和 iOS 完整数据内置。' : 'Web provides summaries only; individual records are bundled with the complete Android and iOS data.'}</p>}
    {collection.completeRows && count > 0 && <>
      <label>{zh ? '选择文件（仅按需读取一个）' : 'Choose a file (load one on demand)'}<select value={fileIndex} onChange={(event) => setFileIndex(event.target.value)}>
        <option value="">{zh ? '请选择…' : 'Select…'}</option>
        {files.map((file, index) => <option key={file.path} value={index}>{index + 1} / {files.length} · {file.records.toLocaleString()} {zh ? '条' : 'records'}</option>)}
      </select></label>
      {fileIndex !== '' && <FileRows key={`${partition}:${fileIndex}`} collection={collection} partition={partition} index={Number(fileIndex)} zh={zh} />}
    </>}
  </>
}

function PackageCollections({ entry, zh }: { entry: CatalogueSpeciesCoverageEntry; zh: boolean }) {
  const [collections, setCollections] = useState<ItisBrowseCollection[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [selected, setSelected] = useState('')
  useEffect(() => {
    let cancelled = false
    if (entry.kind !== 'static-package' && entry.kind !== 'nomenclatural-resource-pack') return
    void loadItisBrowseCollections(entry.id, entry.kind).then((result) => {
      if (!cancelled) setCollections(result)
    }).catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [entry.id, entry.kind, attempt])
  if (failed) return <p role="alert">{zh ? '来源摘要读取失败。' : 'The source summary could not be loaded.'} <button type="button" onClick={() => { setFailed(false); setAttempt((value) => value + 1) }}>{zh ? '重试' : 'Retry'}</button></p>
  if (!collections) return <p role="status">{zh ? '正在读取来源摘要…' : 'Loading source summaries…'}</p>
  if (!collections.length) return <p>{zh ? '此包未收录独立 ITIS 集合；不据此推断其他来源的覆盖情况。' : 'This pack has no separate ITIS collection; this says nothing about other source coverage.'}</p>
  const collection = collections.find((candidate) => candidate.id === selected)
  return <>
    <label>{zh ? 'ITIS 集合' : 'ITIS collection'}<select value={selected} onChange={(event) => setSelected(event.target.value)}>
      <option value="">{zh ? '请选择…' : 'Select…'}</option>
      {collections.map((candidate) => <option key={candidate.id} value={candidate.id}>{candidate.label}</option>)}
    </select></label>
    {collection && <CollectionRows key={collection.id} collection={collection} zh={zh} />}
  </>
}

export function ItisSourceBrowser({ entries, zh }: { entries: CatalogueSpeciesCoverageEntry[]; zh: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const [packageId, setPackageId] = useState('')
  const entry = entries.find((candidate) => candidate.id === packageId)
  return <details className="itis-browser" onToggle={(event) => { if (event.currentTarget === event.target) setExpanded(event.currentTarget.open) }}>
    <summary>{zh ? '浏览 ITIS 来源记录' : 'Browse ITIS source records'}</summary>
    {expanded && <div className="itis-browser__body">
      <p>{zh ? '先选择资源包与来源集合，再按需读取记录；关闭时不读取分片。' : 'Choose a resource pack and source collection, then load records on demand. No shards are loaded while closed.'}</p>
      <label>{zh ? '资源包' : 'Resource pack'}<select value={packageId} onChange={(event) => setPackageId(event.target.value)}>
        <option value="">{zh ? '请选择…' : 'Select…'}</option>
        {entries.filter((candidate) => candidate.kind === 'static-package' || candidate.kind === 'nomenclatural-resource-pack').map((candidate) => <option key={candidate.id} value={candidate.id}>{zh ? candidate.titleZh : candidate.title}</option>)}
      </select></label>
      {entry && <PackageCollections key={entry.id} entry={entry} zh={zh} />}
    </div>}
  </details>
}
