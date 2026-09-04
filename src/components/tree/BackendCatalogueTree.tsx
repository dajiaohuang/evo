import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  loadBackendCatalogueChildren,
  loadBackendCataloguePath,
  loadBackendCatalogueRoots,
  searchBackendNames,
  BACKEND_TREE_PAGE_SIZE,
  type BackendCapabilities,
  type BackendNameSearchRecord,
  type BackendTreeNodeSummary,
} from '../../data-client/backendClient'
import { useI18n } from '../../i18n'
import { frontendContract } from '../../platform/frontendContract'
import './BackendCatalogueTree.css'

const ROW_HEIGHT = 44
const OVERSCAN_ROWS = frontendContract.tree.overscanRows
const CHILD_PAGE_LIMIT = frontendContract.tree.pageSize
const MAX_MATERIALIZED_ROWS = frontendContract.tree.maxMaterializedRows

interface ChildState {
  records: BackendTreeNodeSummary[]
  total: number
  nextCursor?: string
  loading: boolean
  error: string | null
}

type TreeRow =
  | { kind: 'node'; node: BackendTreeNodeSummary; depth: number }
  | { kind: 'loading' | 'error' | 'load-more'; parentId: string; depth: number; cursor?: string }

function displayedName(node: Pick<BackendTreeNodeSummary, 'scientificName' | 'authorship'>): string {
  if (!node.authorship || !node.scientificName.endsWith(node.authorship)) return node.scientificName
  return node.scientificName.slice(0, -node.authorship.length).trim()
}

function forgetDescendants(parentId: string, children: Map<string, ChildState>): void {
  const queue = [parentId]
  const visited = new Set<string>()
  while (queue.length) {
    const id = queue.shift() as string
    if (visited.has(id)) continue
    visited.add(id)
    const state = children.get(id)
    for (const child of state?.records ?? []) queue.push(child.id)
    children.delete(id)
  }
}

function flattenRows(
  nodes: BackendTreeNodeSummary[],
  expanded: Set<string>,
  children: Map<string, ChildState>,
  output: TreeRow[] = [],
  depth = 0,
  visited = new Set<string>(),
): TreeRow[] {
  for (const node of nodes) {
    if (output.length >= MAX_MATERIALIZED_ROWS || visited.has(node.id)) break
    visited.add(node.id)
    output.push({ kind: 'node', node, depth })
    if (!expanded.has(node.id)) continue
    const state = children.get(node.id)
    if (!state) {
      output.push({ kind: 'loading', parentId: node.id, depth: depth + 1 })
      continue
    }
    if (state.loading && !state.records.length) output.push({ kind: 'loading', parentId: node.id, depth: depth + 1 })
    flattenRows(state.records, expanded, children, output, depth + 1, visited)
    if (state.error) output.push({ kind: 'error', parentId: node.id, depth: depth + 1 })
    if (state.nextCursor) output.push({ kind: 'load-more', parentId: node.id, depth: depth + 1, cursor: state.nextCursor })
  }
  return output
}

export function BackendCatalogueTree({ onExit }: { onExit?: () => void }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const scrollRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [capabilities, setCapabilities] = useState<BackendCapabilities | null>(null)
  const [roots, setRoots] = useState<BackendTreeNodeSummary[]>([])
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [children, setChildren] = useState<Map<string, ChildState>>(new Map())
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<BackendNameSearchRecord[]>([])
  const [searchStatus, setSearchStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [path, setPath] = useState<BackendTreeNodeSummary[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(520)
  const requestGeneration = useRef(new Map<string, number>())

  useEffect(() => {
    let cancelled = false
    void loadBackendCatalogueRoots().then(({ capabilities: loadedCapabilities, roots: loadedRoots }) => {
      if (cancelled) return
      setCapabilities(loadedCapabilities)
      setRoots(loadedRoots)
      setStatus('ready')
    }).catch((error: unknown) => {
      if (!cancelled) {
        setErrorMessage(error instanceof Error ? error.message : String(error))
        setStatus('error')
      }
    })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return
    const update = () => setViewportHeight(element.clientHeight || 520)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [status])

  const loadPage = useCallback((parentId: string, cursor?: string) => {
    const generation = (requestGeneration.current.get(parentId) ?? 0) + 1
    requestGeneration.current.set(parentId, generation)
    setChildren((current) => {
      const next = new Map(current)
      const previous = next.get(parentId)
      next.set(parentId, { records: previous?.records ?? [], total: previous?.total ?? 0, nextCursor: previous?.nextCursor, loading: true, error: null })
      return next
    })
    void loadBackendCatalogueChildren(parentId, { cursor, limit: CHILD_PAGE_LIMIT }).then((page) => {
      if (requestGeneration.current.get(parentId) !== generation) return
      setChildren((current) => {
        const next = new Map(current)
        const previous = next.get(parentId)
        const records = cursor ? [...(previous?.records ?? []), ...page.records] : page.records
        next.set(parentId, { records, total: page.total, nextCursor: page.nextCursor, loading: false, error: null })
        return next
      })
    }).catch((error: unknown) => {
      if (requestGeneration.current.get(parentId) !== generation) return
      setChildren((current) => {
        const next = new Map(current)
        const previous = next.get(parentId)
        next.set(parentId, { records: previous?.records ?? [], total: previous?.total ?? 0, nextCursor: previous?.nextCursor, loading: false, error: error instanceof Error ? error.message : String(error) })
        return next
      })
    })
  }, [])

  const toggleNode = useCallback((node: BackendTreeNodeSummary) => {
    if (!node.childCount) {
      setSelectedId(node.id)
      return
    }
    const isExpanded = expanded.has(node.id)
    setSelectedId(node.id)
    setExpanded((current) => {
      const next = new Set(current)
      if (isExpanded) next.delete(node.id)
      else next.add(node.id)
      return next
    })
    if (isExpanded) {
      requestGeneration.current.set(node.id, (requestGeneration.current.get(node.id) ?? 0) + 1)
      setChildren((current) => {
        const next = new Map(current)
        forgetDescendants(node.id, next)
        return next
      })
    } else if (!children.has(node.id) || children.get(node.id)?.error) {
      loadPage(node.id)
    }
  }, [children, expanded, loadPage])

  useEffect(() => {
    const normalized = query.trim()
    if (normalized.length < 3) return
    const controller = new AbortController()
    const timer = window.setTimeout(() => {
      setSearchStatus('loading')
      void searchBackendNames(normalized, { limit: 24, signal: controller.signal }).then((response) => {
        if (!controller.signal.aborted) {
          setSearchResults(response.records.filter((record) => record.kind === 'catalogue-name'))
          setSearchStatus('ready')
        }
      }).catch(() => { if (!controller.signal.aborted) setSearchStatus('error') })
    }, 220)
    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  const revealSearchResult = useCallback((record: BackendNameSearchRecord) => {
    const targetId = record.acceptedId || record.id
    setSelectedId(targetId)
    void loadBackendCataloguePath(targetId).then(setPath).catch(() => setPath([]))
  }, [])

  const rows = useMemo(() => flattenRows(roots, expanded, children), [children, expanded, roots])
  const firstVisible = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN_ROWS)
  const lastVisible = Math.min(rows.length, Math.ceil((scrollTop + viewportHeight) / ROW_HEIGHT) + OVERSCAN_ROWS)
  const visibleRows = rows.slice(firstVisible, lastVisible)
  const number = (value: number) => value.toLocaleString(zh ? 'zh-CN' : 'en-US')

  if (status === 'loading') return <section className="backend-tree" role="status"><p>{zh ? '正在连接全量树索引…' : 'Connecting to the full tree index…'}</p></section>
  if (status === 'error' || !capabilities) return <section className="backend-tree" role="alert"><p>{zh ? '当前后端没有提供可用的大树索引。' : 'The current backend did not provide a usable large-tree index.'}</p>{errorMessage && <small className="backend-tree__error-detail">{errorMessage}</small>}{onExit && <button type="button" onClick={onExit}>{zh ? '使用本地图谱' : 'Use the local atlas tree'}</button>}</section>

  return (
    <section className="backend-tree" aria-label={zh ? '全量分类树' : 'Full catalogue tree'}>
      <div className="backend-tree__top">
        <header className="backend-tree__header">
          <div>
            <span>{zh ? 'PACKED ADJACENCY / 当前协议' : 'PACKED ADJACENCY / CURRENT PROTOCOL'}</span>
            <h2>{zh ? '全量 Catalogue of Life 树' : 'Full Catalogue of Life tree'}</h2>
            <p>{zh ? '只读取展开分支；行窗口之外不创建 DOM。' : 'Only expanded branches are fetched; rows outside the viewport never become DOM.'}</p>
          </div>
          {onExit && <button type="button" className="backend-tree__exit" onClick={onExit}>{zh ? '本地图谱' : 'Local atlas'}</button>}
        </header>

        <div className="backend-tree__status" role="status">
          <span>{number(capabilities.treeIndex.nodeCount)} {zh ? '节点索引' : 'indexed nodes'}</span>
          <span>{zh ? `每页 ${number(BACKEND_TREE_PAGE_SIZE)}` : `${number(BACKEND_TREE_PAGE_SIZE)} per page`}</span>
          <span>{zh ? `${number(children.size)} 个展开分支` : `${number(children.size)} branch pages`}</span>
        </div>

        <label className="backend-tree__search">
          <span>{zh ? '搜索名称（至少 3 个字符）' : 'Search names (3+ characters)'}</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setSearchResults([]); setSearchStatus('idle') }} placeholder={zh ? '如 Perissodactyla' : 'e.g. Perissodactyla'} />
        </label>

        <nav className="backend-tree__path" aria-label={zh ? '分类路径' : 'Taxon path'}>
          {path.map((node, index) => <span key={node.id}>{index > 0 && <i aria-hidden="true">/</i>}<a href={`#/registry?release=${encodeURIComponent(capabilities.treeIndex.releaseAlias)}&id=${encodeURIComponent(node.id)}`}>{displayedName(node)}</a></span>)}
        </nav>

        {query.trim().length >= 3 && <div className="backend-tree__results" aria-live="polite">
          {searchStatus === 'loading' && <p>{zh ? '正在读取名称分片…' : 'Reading the routed name index…'}</p>}
          {searchStatus === 'error' && <p role="alert">{zh ? '名称搜索失败。' : 'Name search failed.'}</p>}
          {searchStatus === 'ready' && !searchResults.length && <p>{zh ? '没有匹配名称。' : 'No matching names.'}</p>}
          {searchResults.map((record) => <button type="button" key={`${record.kind}:${record.id}`} onClick={() => revealSearchResult(record)} className={selectedId === (record.acceptedId || record.id) ? 'is-selected' : ''}>
            <strong>{record.title}</strong><small>{record.status ?? record.kind} · {record.id}</small>
          </button>)}
        </div>}
      </div>

      <div ref={scrollRef} className="backend-tree__viewport" onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)} role="tree" aria-label={zh ? '可展开分类树' : 'Expandable catalogue tree'}>
        <div className="backend-tree__canvas" style={{ height: rows.length * ROW_HEIGHT }}>
          {visibleRows.map((row, offset) => {
            const rowIndex = firstVisible + offset
            if (row.kind !== 'node') {
              if (row.kind === 'load-more') return <button type="button" className="backend-tree__row backend-tree__row--action" key={`more:${row.parentId}`} style={{ top: rowIndex * ROW_HEIGHT, paddingLeft: `${18 + row.depth * 20}px` }} onClick={() => loadPage(row.parentId, row.cursor)}>{zh ? '读取下一页子级' : 'Load the next child page'} ↘</button>
              if (row.kind === 'error') return <button type="button" className="backend-tree__row backend-tree__row--action" key={`error:${row.parentId}`} style={{ top: rowIndex * ROW_HEIGHT, paddingLeft: `${18 + row.depth * 20}px` }} onClick={() => loadPage(row.parentId)}>{zh ? '子级读取失败，重试' : 'Child page failed; retry'}</button>
              return <div className="backend-tree__row backend-tree__row--muted" key={`loading:${row.parentId}`} style={{ top: rowIndex * ROW_HEIGHT, paddingLeft: `${18 + row.depth * 20}px` }}>{zh ? '正在读取子级…' : 'Loading children…'}</div>
            }
            const isExpanded = expanded.has(row.node.id)
            return <div className={`backend-tree__row${selectedId === row.node.id ? ' is-selected' : ''}`} key={row.node.id} style={{ top: rowIndex * ROW_HEIGHT, paddingLeft: `${10 + row.depth * 20}px` }} role="treeitem" aria-expanded={row.node.childCount ? isExpanded : undefined} aria-level={row.depth + 1}>
              <button type="button" className="backend-tree__toggle" onClick={() => toggleNode(row.node)} aria-label={row.node.childCount ? (isExpanded ? (zh ? '折叠' : 'Collapse') : (zh ? '展开' : 'Expand')) : (zh ? '选择' : 'Select')}>
                {row.node.childCount ? (isExpanded ? '⌄' : '›') : '·'}
              </button>
              <a className="backend-tree__name" href={`#/registry?release=${encodeURIComponent(capabilities.treeIndex.releaseAlias)}&id=${encodeURIComponent(row.node.id)}`} onClick={() => setSelectedId(row.node.id)}>
                <span><i>{displayedName(row.node)}</i>{row.node.authorship && <small>{row.node.authorship}</small>}</span>
                <small>{row.node.rank} · {number(row.node.childCount)} {zh ? '子级' : 'children'}</small>
              </a>
            </div>
          })}
        </div>
      </div>
      <footer className="backend-tree__footer">
        {zh ? `当前窗口 ${number(rows.length)} 行，实际渲染 ${number(visibleRows.length)} 行；展开分支会按 ${number(CHILD_PAGE_LIMIT)} 条分页。` : `${number(rows.length)} rows in the current window; ${number(visibleRows.length)} rendered. Branches page by ${number(CHILD_PAGE_LIMIT)}.`}
      </footer>
    </section>
  )
}
