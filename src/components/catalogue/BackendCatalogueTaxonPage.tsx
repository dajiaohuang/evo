import { useEffect, useState } from 'react'
import {
  loadBackendCapabilities,
  loadBackendCatalogueChildren,
  loadBackendCataloguePath,
  loadBackendCatalogueTaxon,
  BACKEND_TREE_PAGE_SIZE,
  type BackendCapabilities,
  type BackendTreeNodeSummary,
} from '../../data-client/backendClient'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import './BackendCatalogueTaxonPage.css'

interface BackendCatalogueTaxonPageProps {
  release: string | null
  id: string | null
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

function displayedName(node: Pick<BackendTreeNodeSummary, 'scientificName' | 'authorship'>): string {
  if (!node.authorship || !node.scientificName.endsWith(node.authorship)) return node.scientificName
  return node.scientificName.slice(0, -node.authorship.length).trim()
}

export function BackendCatalogueTaxonPage({ release, id, onNavigate }: BackendCatalogueTaxonPageProps) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'invalid' | 'release-mismatch' | 'not-found'>('loading')
  const [capabilities, setCapabilities] = useState<BackendCapabilities | null>(null)
  const [node, setNode] = useState<BackendTreeNodeSummary | null>(null)
  const [lineage, setLineage] = useState<BackendTreeNodeSummary[]>([])
  const [children, setChildren] = useState<BackendTreeNodeSummary[]>([])
  const [nextCursor, setNextCursor] = useState<string | undefined>()
  const [childrenStatus, setChildrenStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const displayStatus = !release || !id ? 'invalid' : status

  useEffect(() => {
    let cancelled = false
    if (!release || !id) return () => { cancelled = true }
    void loadBackendCapabilities().then(async (loadedCapabilities) => {
      if (cancelled) return
      setCapabilities(loadedCapabilities)
      if (release !== loadedCapabilities.treeIndex.releaseAlias) {
        setStatus('release-mismatch')
        return
      }
      const [loadedNode, loadedLineage] = await Promise.all([loadBackendCatalogueTaxon(id), loadBackendCataloguePath(id)])
      if (cancelled) return
      setNode(loadedNode)
      setLineage(loadedLineage)
      setStatus('ready')
      document.title = `${loadedNode.scientificName} — Catalogue of Life — Evo Atlas`
      if (loadedNode.childCount > 0) {
        setChildrenStatus('loading')
        try {
          const page = await loadBackendCatalogueChildren(id, { limit: BACKEND_TREE_PAGE_SIZE })
          if (cancelled) return
          setChildren(page.records)
          setNextCursor(page.nextCursor)
          setChildrenStatus('ready')
        } catch {
          if (!cancelled) setChildrenStatus('error')
        }
      }
    }).catch((error: unknown) => {
      if (cancelled) return
      setStatus(error instanceof Error && error.message.includes('not found') ? 'not-found' : 'error')
    })
    return () => { cancelled = true }
  }, [id, release])

  const loadMore = async () => {
    if (!id || !nextCursor || childrenStatus === 'loading') return
    setChildrenStatus('loading')
    try {
      const page = await loadBackendCatalogueChildren(id, { cursor: nextCursor, limit: BACKEND_TREE_PAGE_SIZE })
      setChildren((current) => [...current, ...page.records])
      setNextCursor(page.nextCursor)
      setChildrenStatus('ready')
    } catch {
      setChildrenStatus('error')
    }
  }

  if (displayStatus !== 'ready' || !node || !capabilities) {
    const title = displayStatus === 'loading'
      ? (zh ? '正在读取全量分类索引…' : 'Loading the full catalogue index…')
      : displayStatus === 'release-mismatch'
        ? (zh ? '请求的版本不是当前协议版本' : 'The requested release is not the current protocol release')
        : displayStatus === 'not-found'
          ? (zh ? '当前索引中没有该分类单元' : 'The current index has no such taxon')
          : status === 'invalid'
            ? (zh ? '链接缺少版本或分类单元 ID' : 'The link is missing a release or taxon ID')
            : (zh ? '全量分类索引读取失败' : 'The full catalogue index could not be read')
    return <main className="catalogue-taxon-page catalogue-taxon-page--message backend-catalogue-page"><section role={displayStatus === 'error' ? 'alert' : 'status'}><span>FULL CATALOGUE / {release ?? '—'}</span><h1>{title}</h1>{displayStatus === 'release-mismatch' && <p>{zh ? `链接请求 ${release}，当前协议提供 ${capabilities?.treeIndex.releaseAlias ?? '—'}。未加载旧版本或其他数据格式。` : `This link requests ${release}; the current protocol provides ${capabilities?.treeIndex.releaseAlias ?? '—'}. No older release or alternate data format was loaded.`}</p>}<button className="button button--primary" onClick={() => onNavigate('catalog')}>{zh ? '返回目录' : 'Return to catalog'}</button></section></main>
  }

  return <main className="catalogue-taxon-page backend-catalogue-page">
    <header className="catalogue-taxon-hero">
      <div className="catalogue-release-line"><span>FULL CATALOGUE</span><strong>{capabilities.treeIndex.releaseAlias}</strong><span>{zh ? '当前协议' : 'CURRENT PROTOCOL'}</span></div>
      <nav className="catalogue-lineage" aria-label={zh ? '分类谱系' : 'Taxonomic lineage'}>
        {lineage.map((ancestor, index) => <span key={ancestor.id}>{index > 0 && <i aria-hidden="true">/</i>}<button onClick={() => onNavigate('registry', { release: capabilities.treeIndex.releaseAlias, id: ancestor.id })} aria-current={ancestor.id === node.id ? 'page' : undefined}>{displayedName(ancestor)}</button></span>)}
      </nav>
      <div className="catalogue-taxon-heading"><div><span className="catalogue-status catalogue-status--accepted">{node.status}</span><h1><i>{displayedName(node)}</i>{node.authorship ? <small>{node.authorship}</small> : null}</h1></div><dl><div><dt>{zh ? '等级' : 'Rank'}</dt><dd>{node.rank}</dd></div><div><dt>{zh ? '精确 ID' : 'Exact ID'}</dt><dd><code>{node.id}</code></dd></div><div><dt>{zh ? '直接子级' : 'Direct children'}</dt><dd>{node.childCount.toLocaleString(zh ? 'zh-CN' : 'en-US')}</dd></div></dl></div>
      <p className="backend-catalogue-page__note">{zh ? '此页面只通过当前 Go packed-adjacency 协议读取节点摘要与 direct children；不复制原始层级分片。' : 'This page reads node summaries and direct children through the current Go packed-adjacency protocol; raw hierarchy shards are not copied into the client.'}</p>
    </header>
    <section className="catalogue-taxon-grid"><article className="catalogue-children-panel"><div className="catalogue-section-heading"><div><span>01</span><h2>{zh ? '直接子级' : 'Direct children'}</h2></div></div>{childrenStatus === 'loading' && <p className="catalogue-section-note">{zh ? '正在读取可见子级…' : 'Loading the visible child page…'}</p>}{childrenStatus === 'error' && <p className="catalogue-section-note catalogue-inline-error">{zh ? '子级读取失败。' : 'The child page failed to load.'}</p>}{childrenStatus === 'ready' && !children.length && <p className="catalogue-section-note">{zh ? '此节点没有直接子级。' : 'This node has no direct children.'}</p>}{children.length > 0 && <><div className="catalogue-children-summary">{zh ? `已加载 ${children.length.toLocaleString('zh-CN')} / 全部 ${node.childCount.toLocaleString('zh-CN')}` : `${children.length.toLocaleString()} of ${node.childCount.toLocaleString()} children loaded`}</div><ol className="catalogue-child-list">{children.map((child) => <li key={child.id}><button onClick={() => onNavigate('registry', { release: capabilities.treeIndex.releaseAlias, id: child.id })}><span><i>{displayedName(child)}</i>{child.authorship ? <small>{child.authorship}</small> : null}</span><span><small>{child.rank} · {child.status}</small><code>{child.id}</code></span></button></li>)}</ol>{nextCursor && <button className="catalogue-show-more" onClick={() => void loadMore()}>{zh ? '读取下一页' : 'Load next page'}</button>}</>}</article><aside className="catalogue-source-panel"><section><span>02</span><h2>{zh ? '索引状态' : 'Index state'}</h2><dl><div><dt>{zh ? '驻留节点' : 'Indexed nodes'}</dt><dd>{capabilities.treeIndex.nodeCount.toLocaleString(zh ? 'zh-CN' : 'en-US')}</dd></div><div><dt>{zh ? '分页大小' : 'Page size'}</dt><dd>{BACKEND_TREE_PAGE_SIZE.toLocaleString(zh ? 'zh-CN' : 'en-US')}</dd></div><div><dt>{zh ? '数据版本' : 'Dataset'}</dt><dd>{capabilities.datasetVersion}</dd></div></dl></section><section><span>03</span><h2>{zh ? '访问边界' : 'Access boundary'}</h2><p>{zh ? '全树可访问不等于全树同时绘制。展开分支按需分页，视口之外的行不进入 DOM。' : 'A fully accessible tree does not require drawing every node at once. Branches page on demand, and rows outside the viewport never enter the DOM.'}</p></section></aside></section>
  </main>
}
