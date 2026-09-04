import { useEffect, useMemo, useState } from 'react'
import {
  loadCatalogueChildren,
  loadCatalogueHierarchyNode,
  loadCatalogueIndexFungorumIdentifier,
  loadCatalogueIctvVirusMetadata,
  loadCatalogueLpsnIdentifiers,
  loadCatalogueLineage,
  loadCatalogueManifest,
  loadCatalogueSpeciesOwnership,
  loadCatalogueSourceChecklists,
  loadWfoPlantRecord,
  resolveCatalogueSpeciesOwner,
} from '../../data-client/staticDataClient'
import type {
  CatalogueHierarchyChildRecord,
  CatalogueHierarchyNodeRecord,
  CatalogueIctvResourcePackExtension,
  CatalogueIctvVirusRecord,
  CatalogueIndexFungorumIdentifierRecord,
  CatalogueIndexFungorumResourcePackExtension,
  CatalogueRuntimeManifest,
  CatalogueLpsnIdentifierRecord,
  CatalogueLpsnResourcePackExtension,
  CatalogueSpeciesOwnership,
  CatalogueTaxonRecord,
  WfoPlantRecord,
  WfoPlantSource,
} from '../../data-client/types'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import { AuthorityArchiveEvidence } from './AuthorityArchiveEvidence'
import { PackageItisEvidence } from './MyriapodaItisEvidence'
import './CatalogueTaxonPage.css'

interface CatalogueTaxonPageProps {
  release: string | null
  id: string | null
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

type PageStatus = 'loading' | 'ready' | 'invalid' | 'release-mismatch' | 'not-found' | 'error'
type SectionStatus = 'idle' | 'loading' | 'ready' | 'error'

function displayedName(record: Pick<CatalogueHierarchyNodeRecord, 'scientificName' | 'authorship'>) {
  if (!record.authorship || !record.scientificName.endsWith(record.authorship)) return record.scientificName
  return record.scientificName.slice(0, -record.authorship.length).trim()
}

function ownershipKindLabel(kind: 'static-package' | 'nomenclatural-resource-pack' | 'catalogue-only', zh: boolean): string {
  if (kind === 'static-package') return zh ? '富内容资源包' : 'Curated content pack'
  if (kind === 'nomenclatural-resource-pack') return zh ? '命名资源包' : 'Nomenclatural pack'
  return zh ? '零记录目录边界' : 'Zero-record catalogue boundary'
}

export function CatalogueTaxonPage(props: CatalogueTaxonPageProps) {
  return <CatalogueTaxonRecord key={`${props.release ?? ''}:${props.id ?? ''}`} {...props} />
}

function CatalogueTaxonRecord({ release, id, onNavigate }: CatalogueTaxonPageProps) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const [status, setStatus] = useState<PageStatus>('loading')
  const [manifest, setManifest] = useState<CatalogueRuntimeManifest | null>(null)
  const [node, setNode] = useState<CatalogueTaxonRecord | null>(null)
  const [lineage, setLineage] = useState<CatalogueHierarchyNodeRecord[]>([])
  const [lineageStatus, setLineageStatus] = useState<SectionStatus>('idle')
  const [children, setChildren] = useState<CatalogueHierarchyChildRecord[]>([])
  const [childrenStatus, setChildrenStatus] = useState<SectionStatus>('idle')
  const [ownership, setOwnership] = useState<CatalogueSpeciesOwnership | null>(null)
  const [ownershipStatus, setOwnershipStatus] = useState<SectionStatus>('idle')
  const [sources, setSources] = useState<Awaited<ReturnType<typeof loadCatalogueSourceChecklists>>>([])
  const [sourcesStatus, setSourcesStatus] = useState<SectionStatus>('idle')
  const [lpsn, setLpsn] = useState<{ record: CatalogueLpsnIdentifierRecord; extension: CatalogueLpsnResourcePackExtension } | null>(null)
  const [lpsnStatus, setLpsnStatus] = useState<SectionStatus>('idle')
  const [ictv, setIctv] = useState<{ record: CatalogueIctvVirusRecord; extension: CatalogueIctvResourcePackExtension } | null>(null)
  const [ictvStatus, setIctvStatus] = useState<SectionStatus>('idle')
  const [wfo, setWfo] = useState<{ record: WfoPlantRecord; source: WfoPlantSource; counts: { wfoAcceptedSpecies: number; upstreamOnly: number } } | null>(null)
  const [wfoStatus, setWfoStatus] = useState<SectionStatus>('idle')
  const [fungiAuthority, setFungiAuthority] = useState<{ record: CatalogueIndexFungorumIdentifierRecord; extension: CatalogueIndexFungorumResourcePackExtension } | null>(null)
  const [fungiAuthorityStatus, setFungiAuthorityStatus] = useState<SectionStatus>('idle')
  const [childFilter, setChildFilter] = useState('')
  const [visibleChildren, setVisibleChildren] = useState(100)

  useEffect(() => {
    let cancelled = false
    void loadCatalogueManifest().then(async (loadedManifest) => {
      if (cancelled) return
      setManifest(loadedManifest)
      if (!release || !id) {
        setStatus('invalid')
        return
      }
      if (release !== loadedManifest.releaseAlias) {
        setStatus('release-mismatch')
        return
      }
      const loadedNode = await loadCatalogueHierarchyNode(id)
      if (cancelled) return
      if (!loadedNode) {
        setStatus('not-found')
        return
      }
      setNode(loadedNode)
      setStatus('ready')
      document.title = `${loadedNode.scientificName} — Catalogue of Life — Evo Atlas`

      if (loadedNode.projection === 'accepted-species-hierarchy') {
        setLineageStatus('loading')
        void loadCatalogueLineage(id).then((records) => {
          if (!cancelled) {
            setLineage(records)
            setLineageStatus('ready')
          }
        }).catch(() => { if (!cancelled) setLineageStatus('error') })

        setChildrenStatus('loading')
        void loadCatalogueChildren(id).then((records) => {
          if (!cancelled) {
            setChildren(records.sort((left, right) => left.scientificName.localeCompare(right.scientificName)))
            setChildrenStatus('ready')
          }
        }).catch(() => { if (!cancelled) setChildrenStatus('error') })

        setOwnershipStatus('loading')
        void loadCatalogueSpeciesOwnership().then((record) => {
          if (!cancelled) {
            setOwnership(record)
            setOwnershipStatus('ready')
          }
        }).catch(() => { if (!cancelled) setOwnershipStatus('error') })
      }

      setSourcesStatus('loading')
      void loadCatalogueSourceChecklists().then((records) => {
        if (!cancelled) {
          setSources(records)
          setSourcesStatus('ready')
        }
      }).catch(() => { if (!cancelled) setSourcesStatus('error') })
    }).catch(() => { if (!cancelled) setStatus('error') })

    return () => { cancelled = true }
  }, [id, release])

  const orderedLineage = useMemo(() => {
    if (lineage.length < 2 || lineage[0].parentId === null) return lineage
    return [...lineage].reverse()
  }, [lineage])
  const normalizedFilter = childFilter.trim().toLocaleLowerCase()
  const filteredChildren = children.filter((child) => !normalizedFilter
    || child.scientificName.toLocaleLowerCase().includes(normalizedFilter)
    || child.id.toLocaleLowerCase().includes(normalizedFilter))
  const visible = filteredChildren.slice(0, visibleChildren)
  const source = node?.sourceDatasetId
    ? sources.find((record) => record.datasetId === node.sourceDatasetId)
    : null
  const upstreamUrl = node && manifest
    ? manifest.upstreamTaxonUrlTemplate.replace('{id}', encodeURIComponent(node.id))
    : null
  const speciesOwner = useMemo(() => {
    if (!node || node.projection !== 'accepted-species-hierarchy' || node.rank !== 'species' || node.status !== 'accepted' || !ownership || lineageStatus !== 'ready') return null
    return resolveCatalogueSpeciesOwner(lineage, ownership)
  }, [lineage, lineageStatus, node, ownership])

  useEffect(() => {
    let cancelled = false
    if (!node || speciesOwner?.entry.id !== 'archaea') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- discard an identifier from a previously selected archaeal record immediately
      setLpsn(null)
      setLpsnStatus('idle')
      return () => { cancelled = true }
    }
    setLpsn(null)
    setLpsnStatus('loading')
    void loadCatalogueLpsnIdentifiers().then(({ extension, records }) => {
      if (cancelled) return
      const record = records.find((candidate) => candidate.colId === node.id)
      setLpsn(record ? { record, extension } : null)
      setLpsnStatus('ready')
    }).catch(() => { if (!cancelled) setLpsnStatus('error') })
    return () => { cancelled = true }
  }, [node, speciesOwner?.entry.id])

  useEffect(() => {
    let cancelled = false
    if (!node || speciesOwner?.entry.id !== 'viruses') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- discard metadata from a previously selected virus record immediately
      setIctv(null)
      setIctvStatus('idle')
      return () => { cancelled = true }
    }
    setIctv(null)
    setIctvStatus('loading')
    void loadCatalogueIctvVirusMetadata().then(({ extension, records }) => {
      if (cancelled) return
      const record = records.find((candidate) => candidate.colId === node.id)
      setIctv(record ? { record, extension } : null)
      setIctvStatus('ready')
    }).catch(() => { if (!cancelled) setIctvStatus('error') })
    return () => { cancelled = true }
  }, [node, speciesOwner?.entry.id])
  useEffect(() => {
    let cancelled = false
    const packageId = speciesOwner?.entry.id
    const isPlant = packageId === 'angiospermae' || packageId === 'gymnosperms' || packageId === 'early-land-plants' || packageId === 'other-plants'
    if (!node || !packageId || !isPlant) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- discard a WFO record from a previously selected plant immediately
      setWfo(null)
      setWfoStatus('idle')
      return () => { cancelled = true }
    }
    setWfo(null)
    setWfoStatus('loading')
    void loadWfoPlantRecord(node.id, packageId).then((result) => {
      if (!cancelled) {
        setWfo(result)
        setWfoStatus('ready')
      }
    }).catch(() => { if (!cancelled) setWfoStatus('error') })
    return () => { cancelled = true }
  }, [node, speciesOwner?.entry.id])
  useEffect(() => {
    let cancelled = false
    if (!node || speciesOwner?.entry.id !== 'fungi') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- discard an authority record from a previously selected fungus immediately
      setFungiAuthority(null)
      setFungiAuthorityStatus('idle')
      return () => { cancelled = true }
    }
    setFungiAuthority(null)
    setFungiAuthorityStatus('loading')
    void loadCatalogueIndexFungorumIdentifier(node.id).then((result) => {
      if (!cancelled) {
        setFungiAuthority(result)
        setFungiAuthorityStatus('ready')
      }
    }).catch(() => { if (!cancelled) setFungiAuthorityStatus('error') })
    return () => { cancelled = true }
  }, [node, speciesOwner?.entry.id])
  const isHierarchyMember = node?.projection === 'accepted-species-hierarchy'
  const number = (value: number) => value.toLocaleString(zh ? 'zh-CN' : 'en-US')
  const ictvExemplar = ictv?.record.isolates.find((isolate) => isolate.role === 'exemplar')
  const ictvAdditional = ictv?.record.isolates.filter((isolate) => isolate.role === 'additional') ?? []
  const fungiAuthoritySource = fungiAuthority?.extension.source.sourceDatasets.find((dataset) => String(dataset.datasetId) === fungiAuthority.record.sourceDatasetId)

  if (status !== 'ready' || !node || !manifest) {
    const title = status === 'loading'
      ? (zh ? '正在读取固定版本登记册…' : 'Loading the pinned registry…')
      : status === 'release-mismatch'
        ? (zh ? '请求的版本与当前发布版不一致' : 'The requested release is not the published release')
        : status === 'not-found'
          ? (zh ? '此版本中没有该分类单元 ID' : 'That taxon ID is absent from this release')
          : status === 'invalid'
            ? (zh ? '链接缺少版本或分类单元 ID' : 'The link is missing a release or taxon ID')
            : (zh ? '登记册读取或完整性校验失败' : 'The registry could not be read or verified')
    return (
      <main className="catalogue-taxon-page catalogue-taxon-page--message">
        <section role={status === 'error' ? 'alert' : 'status'}>
          <span>CATALOGUE OF LIFE / {release ?? '—'}</span>
          <h1>{title}</h1>
          {status === 'release-mismatch' && <p>{zh ? `链接请求 ${release}，本站只发布 ${manifest?.releaseAlias ?? '—'}。为避免悄悄切换分类版本，未加载其他记录。` : `This link requests ${release}; this site publishes ${manifest?.releaseAlias ?? '—'}. No record was silently substituted.`}</p>}
          {status === 'not-found' && <p>{zh ? `${id} 未出现在 ${release} 的接受种及其祖先闭包中。` : `${id} is not present in the accepted-species hierarchy for ${release}.`}</p>}
          <button className="button button--primary" onClick={() => onNavigate('catalog')}>{zh ? '返回目录' : 'Return to catalog'}</button>
        </section>
      </main>
    )
  }

  return (
    <main className="catalogue-taxon-page">
      <header className="catalogue-taxon-hero">
        <div className="catalogue-release-line">
          <span>CATALOGUE OF LIFE</span>
          <strong>{manifest.releaseAlias}</strong>
          <span>{manifest.releaseDate}</span>
          <span>{zh ? '固定版本' : 'PINNED RELEASE'}</span>
        </div>

        <nav className="catalogue-lineage" aria-label={zh ? '分类谱系' : 'Taxonomic lineage'}>
          {!isHierarchyMember && <span>{zh ? '解析目标记录 · 不属于接受种祖先闭包' : 'Resolution target record · outside the accepted-species ancestor closure'}</span>}
          {isHierarchyMember && lineageStatus === 'loading' && <span>{zh ? '正在读取谱系…' : 'Loading lineage…'}</span>}
          {isHierarchyMember && lineageStatus === 'error' && <span className="catalogue-inline-error">{zh ? '谱系读取失败；当前记录仍可使用。' : 'Lineage failed to load; this record remains available.'}</span>}
          {orderedLineage.map((ancestor, index) => (
            <span key={ancestor.id}>
              {index > 0 && <i aria-hidden="true">/</i>}
              <button onClick={() => onNavigate('registry', { release: manifest.releaseAlias, id: ancestor.id })} aria-current={ancestor.id === node.id ? 'page' : undefined}>
                {ancestor.scientificName}
              </button>
            </span>
          ))}
        </nav>

        <div className="catalogue-taxon-heading">
          <div>
            <span className={`catalogue-status catalogue-status--${node.status === 'accepted' ? 'accepted' : 'provisional'}`}>
              {node.status === 'accepted' ? (zh ? '接受名' : 'Accepted') : (zh ? '暂定接受名' : 'Provisionally accepted')}
            </span>
            <h1><i>{displayedName(node)}</i>{node.authorship ? <small>{node.authorship}</small> : null}</h1>
          </div>
          <dl>
            <div><dt>{zh ? '等级' : 'Rank'}</dt><dd>{node.rank}</dd></div>
            <div><dt>{zh ? '精确 ID' : 'Exact ID'}</dt><dd><code>{node.id}</code></dd></div>
            {node.projection === 'accepted-species-hierarchy'
              ? <div><dt>{zh ? '直接子级' : 'Direct children'}</dt><dd>{number(node.childCount)}</dd></div>
              : <div><dt>{zh ? '记录范围' : 'Record scope'}</dt><dd>{zh ? '解析目标' : 'Resolution target'}</dd></div>}
          </dl>
        </div>

        {!isHierarchyMember && (
          <p className="catalogue-provisional-note">{zh ? '此记录由解析名称指向，保留上游的真实等级、状态与来源。它不计入严格接受种基线，也不会被推断为接受种层级、祖先闭包或资源归属的一部分。' : 'A resolving name points to this record, with its upstream rank, status, and source preserved. It is not counted in the strict accepted-species baseline or inferred into that hierarchy, ancestor closure, or resource ownership.'}</p>
        )}
        {isHierarchyMember && node.status === 'provisionally accepted' && (
          <p className="catalogue-provisional-note">{zh ? '此高阶分类单元由上游标记为暂定接受；它用于连接接受种层级，但不计入 2,183,133 个接受种基线。' : 'The upstream release marks this higher taxon as provisionally accepted. It connects the accepted-species hierarchy but is not counted in the 2,183,133 accepted-species baseline.'}</p>
        )}
      </header>

      <section className="catalogue-taxon-grid">
        <article className="catalogue-children-panel">
          <div className="catalogue-section-heading">
            <div><span>01</span><h2>{zh ? '直接子级' : 'Direct children'}</h2></div>
            {children.length > 100 && <label><span>{zh ? '在本级筛选' : 'Filter this level'}</span><input value={childFilter} onChange={(event) => { setChildFilter(event.target.value); setVisibleChildren(100) }} placeholder={zh ? '名称或 ID' : 'Name or ID'} /></label>}
          </div>
          {!isHierarchyMember && <p className="catalogue-section-note">{zh ? '此解析目标未进入接受种层级投影，因此不推断父链或直接子级。' : 'This resolution target is outside the accepted-species hierarchy projection, so no parent chain or direct children are inferred.'}</p>}
          {isHierarchyMember && childrenStatus === 'loading' && <p className="catalogue-section-note">{zh ? '正在读取父级分片…' : 'Loading the parent shard…'}</p>}
          {isHierarchyMember && childrenStatus === 'error' && <p className="catalogue-section-note catalogue-inline-error">{zh ? '子级分片读取或完整性校验失败；当前分类记录不受影响。' : 'The child shard could not be read or verified; the current taxon record is unaffected.'}</p>}
          {isHierarchyMember && childrenStatus === 'ready' && children.length === 0 && <p className="catalogue-section-note">{zh ? '此层级投影中没有直接子级。' : 'No direct children occur in this hierarchy projection.'}</p>}
          {isHierarchyMember && childrenStatus === 'ready' && children.length > 0 && (
            <>
              <div className="catalogue-children-summary">{zh ? `显示 ${number(visible.length)} / 匹配 ${number(filteredChildren.length)} / 全部 ${number(children.length)}` : `Showing ${number(visible.length)} of ${number(filteredChildren.length)} matches · ${number(children.length)} total`}</div>
              <ol className="catalogue-child-list">
                {visible.map((child) => <li key={child.id}>
                  <button onClick={() => onNavigate('registry', { release: manifest.releaseAlias, id: child.id })}>
                    <span><i>{displayedName(child)}</i>{child.authorship ? <small>{child.authorship}</small> : null}</span>
                    <span><small>{child.rank} · {child.status}</small><code>{child.id}</code></span>
                  </button>
                </li>)}
              </ol>
              {visible.length < filteredChildren.length && <button className="catalogue-show-more" onClick={() => setVisibleChildren((value) => value + 100)}>{zh ? '再显示 100 项' : 'Show 100 more'}</button>}
            </>
          )}
        </article>

        <aside className="catalogue-source-panel">
          <section className="catalogue-ownership-section">
            <span>02</span><h2>{zh ? '唯一资源归属' : 'Exclusive resource ownership'}</h2>
            {!isHierarchyMember ? (
              <p>{zh ? '解析目标不会被强行分配给接受种资源分区；页面仅展示固定发布版中的原始登记元数据。' : 'Resolution targets are not forced into accepted-species resource partitions; this page only reports their original pinned-release registry metadata.'}</p>
            ) : node.rank !== 'species' || node.status !== 'accepted' ? (
              <p>{zh ? '唯一归属投影只覆盖严格 accepted 的物种记录；高阶分类单元用于浏览，其后代可以分属多个资源分区。' : 'Exclusive ownership applies only to strict accepted species records. Higher taxa support browsing, and their descendants may belong to several resource partitions.'}</p>
            ) : ownershipStatus === 'loading' || lineageStatus === 'loading' ? (
              <p>{zh ? '正在解析本发布版父链归属…' : 'Resolving ownership from the pinned release lineage…'}</p>
            ) : ownershipStatus === 'error' || lineageStatus === 'error' ? (
              <p className="catalogue-inline-error">{zh ? '资源归属或父链读取失败；当前分类记录仍可使用。' : 'Ownership or lineage could not be loaded; this taxon record remains available.'}</p>
            ) : speciesOwner && ownership ? (
              <div className={`catalogue-owner-card catalogue-owner-card--${speciesOwner.entry.kind}`}>
                <div className="catalogue-owner-card__heading">
                  <strong>{zh ? speciesOwner.entry.titleZh : speciesOwner.entry.title}</strong>
                  <span>{ownershipKindLabel(speciesOwner.entry.kind, zh)}</span>
                </div>
                <code>{speciesOwner.entry.id}</code>
                <dl>
                  <div><dt>{zh ? '本分区严格 accepted' : 'Strict accepted in partition'}</dt><dd>{number(speciesOwner.entry.acceptedSpeciesCount)}</dd></div>
                  <div><dt>{zh ? '发布版严格 accepted 总数' : 'Release strict accepted total'}</dt><dd>{number(ownership.source.acceptedSpecies)}</dd></div>
                  <div><dt>{zh ? '分类发布版' : 'Taxonomic release'}</dt><dd>{ownership.source.releaseAlias} · {ownership.source.releaseDate}</dd></div>
                  <div><dt>{zh ? '归属规则' : 'Ownership route'}</dt><dd>#{speciesOwner.route.priority}</dd></div>
                </dl>
                {speciesOwner.route.browseRoots.some((root) => lineage.some((ancestor) => ancestor.id === root.id)) && <p className="catalogue-owner-roots">{zh ? '命中父链：' : 'Matched lineage: '}{speciesOwner.route.browseRoots.filter((root) => lineage.some((ancestor) => ancestor.id === root.id)).map((root) => root.scientificName).join(' · ')}</p>}
                {(speciesOwner.entry.scope || speciesOwner.entry.scopeZh) && <p className="catalogue-owner-scope">{zh ? speciesOwner.entry.scopeZh ?? speciesOwner.entry.scope : speciesOwner.entry.scope ?? speciesOwner.entry.scopeZh}</p>}
                {(speciesOwner.entry.disclaimer || speciesOwner.entry.disclaimerZh) && <p className="catalogue-owner-scope">{zh ? speciesOwner.entry.disclaimerZh ?? speciesOwner.entry.disclaimer : speciesOwner.entry.disclaimer ?? speciesOwner.entry.disclaimerZh}</p>}
                <p className="catalogue-owner-disclaimer">{zh ? '目录归属只覆盖本发布版名称与分类位置，不等于 Evo Atlas 专档、证据、媒体、化石、生态、翻译或专家评审已经成熟。' : 'Catalogue ownership covers release-scoped names and placement only. It does not imply an Evo Atlas dossier, evidence, media, fossil, ecology, translation, or expert-review maturity.'}</p>
              </div>
            ) : (
              <p className="catalogue-inline-error">{zh ? '此严格 accepted 物种没有解析出唯一资源归属。' : 'No exclusive resource owner resolved for this strict accepted species.'}</p>
            )}
          </section>
          <section>
            <span>03</span><h2>{zh ? '来源清单' : 'Source checklist'}</h2>
            {!node.sourceDatasetId && <p>{zh ? '上游记录未提供 datasetID；这是源数据缺失，不是应用错误。' : 'The upstream record has no datasetID. This is missing source linkage, not an application error.'}</p>}
            {node.sourceDatasetId && sourcesStatus === 'loading' && <p>{zh ? '正在读取来源清单…' : 'Loading source checklists…'}</p>}
            {node.sourceDatasetId && sourcesStatus === 'error' && <p className="catalogue-inline-error">{zh ? '来源清单读取失败；精确分类记录仍可使用。' : 'Source checklists failed to load; the exact taxon record remains available.'}</p>}
            {node.sourceDatasetId && sourcesStatus === 'ready' && source && <div className="catalogue-source-card">
              <strong>{source.title}</strong>
              <span>{[source.shortName, source.version, source.publicationDate].filter(Boolean).join(' · ')}</span>
              <p>{source.licenseLabel}</p>
              <div>{source.informationUrl && <a href={source.informationUrl} target="_blank" rel="noreferrer">{zh ? '来源站点' : 'Source site'} ↗</a>}{source.doi && <a href={`https://doi.org/${source.doi}`} target="_blank" rel="noreferrer">DOI ↗</a>}</div>
            </div>}
            {node.sourceDatasetId && sourcesStatus === 'ready' && !source && <p>{zh ? `来源 datasetID ${node.sourceDatasetId} 未列入本版来源清单。` : `Source datasetID ${node.sourceDatasetId} is not listed in this release's source checklist file.`}</p>}
            {speciesOwner && <AuthorityArchiveEvidence colId={node.id} packageId={speciesOwner.entry.id} lineageIds={lineage.map((ancestor) => ancestor.id)} zh={zh} />}
            {node.rank === 'species' && node.status === 'accepted' && speciesOwner && (['myriapoda', 'chondrichthyes', 'chelicerata'] as const).map((scope) => <PackageItisEvidence key={scope} scope={scope} colId={node.id} packageId={speciesOwner.entry.id} lineageIds={lineage.map((ancestor) => ancestor.id)} zh={zh} />)}
            {(['angiospermae', 'gymnosperms', 'early-land-plants', 'other-plants'].includes(speciesOwner?.entry.id ?? '')) && (wfoStatus === 'idle' || wfoStatus === 'loading') && <p>{zh ? '正在读取固定 WFO 植物名录精确映射…' : 'Loading the pinned exact WFO Plant List mapping…'}</p>}
            {(['angiospermae', 'gymnosperms', 'early-land-plants', 'other-plants'].includes(speciesOwner?.entry.id ?? '')) && wfoStatus === 'error' && <p className="catalogue-inline-error">{zh ? 'WFO 分片读取或完整性校验失败；COL26.8 记录仍可使用。' : 'The WFO shard could not be read or verified; the COL26.8 record remains available.'}</p>}
            {wfoStatus === 'ready' && wfo?.record.colId === node.id && <div className="catalogue-lpsn-card catalogue-wfo-card">
              <strong>{zh ? 'WFO 植物名录固定映射' : 'Pinned WFO Plant List mapping'}</strong>
              <span>WFO {wfo.source.wfoVersion} · COL26.8 · {wfo.record.status.toUpperCase()}</span>
              <p>{zh ? `映射状态：${wfo.record.status}。仅使用区分大小写、变音符号和标点的精确名称与作者字段，或 WFO 明示的同物异名目标；不使用模糊匹配。WFO 当前 ${number(wfo.counts.wfoAcceptedSpecies)} 个接受种全部随数据集提供，其中 ${number(wfo.counts.upstreamOnly)} 个尚无可证明的 COL26.8 ID，保留在独立的非 COL 分区。` : `Mapping status: ${wfo.record.status}. Matching preserves case, diacritics, punctuation, and authorship, using only exact names or an explicit WFO synonym target—never fuzzy matching. All ${number(wfo.counts.wfoAcceptedSpecies)} WFO accepted species ship with the dataset; ${number(wfo.counts.upstreamOnly)} without a provable COL26.8 ID remain in a separate non-COL partition.`}</p>
              {wfo.record.status === 'redirect' && <p>{zh ? 'COL 名称精确命中 WFO 同物异名，并只跟随 WFO 明示的接受名目标。' : 'The COL name exactly matches a WFO synonym and follows only its explicit accepted-name target.'}</p>}
              {wfo.record.status === 'ambiguous' && <p>{zh ? `存在多个精确 WFO 接受名候选：${wfo.record.candidateWfoIds?.join(' · ')}` : `Multiple exact WFO accepted-name candidates remain: ${wfo.record.candidateWfoIds?.join(' · ')}`}</p>}
              {wfo.record.status === 'unmatched' && <p>{zh ? '固定版 WFO 中没有精确名称与作者记录；未猜测替代名称。' : 'No exact name-and-authorship record exists in the pinned WFO release; no substitute was guessed.'}</p>}
              {wfo.record.status === 'withheld' && <p>{zh ? `映射被保留：${wfo.record.reason ?? '必要边界无法被精确证明'}` : `Mapping withheld: ${wfo.record.reason ?? 'a required exact boundary could not be proved'}.`}</p>}
              <div>{wfo.record.wfoSnapshotUrl && <a href={wfo.record.wfoSnapshotUrl} target="_blank" rel="noreferrer">{zh ? '打开固定 WFO 记录' : 'Open pinned WFO record'} ↗</a>}<a href={`https://doi.org/${wfo.source.versionDoi}`} target="_blank" rel="noreferrer">DOI ↗</a></div>
            </div>}
            {speciesOwner?.entry.id === 'fungi' && (fungiAuthorityStatus === 'idle' || fungiAuthorityStatus === 'loading') && <p>{zh ? '正在按 COL ID 读取对应的真菌权威标识分片…' : 'Loading the single Fungi authority shard selected by COL ID…'}</p>}
            {speciesOwner?.entry.id === 'fungi' && fungiAuthorityStatus === 'error' && <p className="catalogue-inline-error">{zh ? '真菌权威标识分片读取或完整性校验失败；COL26.8 分类记录仍可使用。' : 'The Fungi authority shard could not be read or verified; the COL26.8 record remains available.'}</p>}
            {speciesOwner?.entry.id === 'fungi' && fungiAuthorityStatus === 'ready' && !fungiAuthority && <p className="catalogue-inline-error">{zh ? '本记录未在固定权威映射中找到；未使用名称猜测替代。' : 'This record is absent from the pinned authority mapping; no name-based substitute was inferred.'}</p>}
            {fungiAuthorityStatus === 'ready' && fungiAuthority?.record.colId === node.id && fungiAuthoritySource && <div className="catalogue-lpsn-card catalogue-fungi-card">
              <strong>{zh ? 'Species Fungorum / Index Fungorum 固定权威标识' : 'Pinned Species Fungorum / Index Fungorum identifier'}</strong>
              <span>{fungiAuthoritySource.version} · COL26.8 · {fungiAuthority.record.status.toUpperCase()}</span>
              <p>{zh ? `该映射仅来自固定 sourceDatasetId ${fungiAuthority.record.sourceDatasetId} 的逐字名称与作者唯一匹配，或 ChecklistBank 明示的源记录；不做模糊匹配。COL26.8 的 ${number(fungiAuthority.extension.counts.accepted)} 个真菌接受种均有稳定权威 ID。权威源额外的 ${number(fungiAuthority.extension.counts.upstreamOnly)} 个接受种只保留在审计快照，不冒充 COL 记录。详情页仅按 COL ID 下载一个命中分片。` : `This mapping uses only a unique verbatim name-and-authorship match inside pinned sourceDatasetId ${fungiAuthority.record.sourceDatasetId}, or the explicit ChecklistBank source record—never fuzzy matching. All ${number(fungiAuthority.extension.counts.accepted)} COL26.8 accepted Fungi species have a stable authority ID. The ${number(fungiAuthority.extension.counts.upstreamOnly)} additional accepted source records remain audit-only and are not presented as COL records. A detail view downloads only the single shard selected by COL ID.`}</p>
              <p>{zh ? '这是命名标识侧车，不是完整 Index Fungorum 数据库，也不表示生态、宿主、基质、地点、描述、媒体、化石、系统发育、物种专档或专家评审已经完成。' : 'This is a nomenclatural identifier sidecar, not a complete Index Fungorum database or a claim of completed ecology, host, substrate, locality, description, media, fossil, phylogeny, species dossier, or expert review.'}</p>
              <div><a href={fungiAuthority.record.indexFungorumUrl} target="_blank" rel="noreferrer">{zh ? '打开具体 Index Fungorum 记录' : 'Open the specific Index Fungorum record'} ↗</a><a href={`https://doi.org/${fungiAuthoritySource.versionDoi}`} target="_blank" rel="noreferrer">DOI ↗</a><a href={fungiAuthoritySource.licenseUrl} target="_blank" rel="noreferrer">CC BY 4.0 ↗</a></div>
            </div>}
            {speciesOwner?.entry.id === 'archaea' && (lpsnStatus === 'idle' || lpsnStatus === 'loading') && <p>{zh ? '正在读取固定 LPSN 标识映射…' : 'Loading the pinned LPSN identifier mapping…'}</p>}
            {speciesOwner?.entry.id === 'archaea' && lpsnStatus === 'error' && <p className="catalogue-inline-error">{zh ? 'LPSN 标识分片读取或校验失败；COL26.8 分类记录仍可使用。' : 'The LPSN identifier shard could not be read or verified; the COL26.8 record remains available.'}</p>}
            {speciesOwner?.entry.id === 'archaea' && lpsnStatus === 'ready' && !lpsn && <p className="catalogue-inline-error">{zh ? '本古菌记录未在固定 LPSN 映射中找到；未使用名称猜测替代。' : 'This archaeal record is absent from the pinned LPSN mapping; no name-based substitute was inferred.'}</p>}
            {lpsnStatus === 'ready' && lpsn?.record.colId === node.id && <div className="catalogue-lpsn-card">
              <strong>{zh ? 'LPSN 固定来源记录' : 'Pinned LPSN source record'}</strong>
              <span>LPSN {lpsn.extension.source.sourceDatasetVersion} · {zh ? '获取于' : 'retrieved'} {lpsn.extension.source.retrievedAt}</span>
              <p>{zh ? '该标识通过固定 COL26.8 / ChecklistBank 316115 来源记录映射，不是按名称猜测，也不代表生态、基因组、菌株、化石、媒体、系统发育或专家评审档案已经完成。' : 'This identifier follows the pinned COL26.8 / ChecklistBank 316115 source record. It is not a name-based guess or a claim of completed ecology, genome, strain, fossil, media, phylogeny, or expert-review content.'}</p>
              <div><a href={lpsn.record.lpsnUrl} target="_blank" rel="noreferrer">{zh ? '打开具体 LPSN 记录' : 'Open the specific LPSN record'} ↗</a><a href={lpsn.extension.source.licenseUrl} target="_blank" rel="noreferrer">CC BY-SA 4.0 ↗</a></div>
            </div>}
            {speciesOwner?.entry.id === 'viruses' && (ictvStatus === 'idle' || ictvStatus === 'loading') && <p>{zh ? '正在读取固定 ICTV MSL / VMR 元数据…' : 'Loading the pinned ICTV MSL / VMR metadata…'}</p>}
            {speciesOwner?.entry.id === 'viruses' && ictvStatus === 'error' && <p className="catalogue-inline-error">{zh ? 'ICTV 元数据分片读取或校验失败；COL26.8 分类记录仍可使用。' : 'The ICTV metadata shard could not be read or verified; the COL26.8 record remains available.'}</p>}
            {speciesOwner?.entry.id === 'viruses' && ictvStatus === 'ready' && !ictv && <p className="catalogue-inline-error">{zh ? '本病毒记录未在固定 ICTV 精确映射中找到；未使用模糊名称或历史同义名猜测。' : 'This virus record is absent from the pinned exact ICTV mapping; no fuzzy name or historical-synonym substitute was inferred.'}</p>}
            {ictvStatus === 'ready' && ictv?.record.colId === node.id && <div className="catalogue-lpsn-card">
              <strong>{zh ? 'ICTV 当前分类与病毒样本元数据' : 'Current ICTV taxonomy and virus metadata'}</strong>
              <span>MSL41.v1 · VMR 2026-07-29 · {ictv.record.ictvTaxonId}</span>
              <p>{zh ? `该记录以区分大小写的当前种名精确匹配，并由 MSL 与 VMR 共享的唯一 ICTV ID 复核；不使用名称归一化、模糊匹配或同义名推断。当前 ICTV 的 ${number(ictv.extension.counts.officialSpecies)} 个种全部随包提供，其中 ${number(ictv.extension.counts.upstreamOnly)} 个尚无 COL26.8 接受种 ID。` : `This record uses an exact, case-sensitive current species-name match, confirmed by the unique ICTV ID shared by MSL and VMR. No normalization, fuzzy matching, or synonym inference is used. All ${number(ictv.extension.counts.officialSpecies)} current ICTV species ship with the pack; ${number(ictv.extension.counts.upstreamOnly)} do not yet have a COL26.8 accepted-species ID.`}</p>
              {ictvExemplar && <p>{zh ? '代表病毒：' : 'Exemplar virus: '}<strong>{ictvExemplar.virusNames ?? ictvExemplar.isolateId}</strong>{ictvExemplar.abbreviations ? ` (${ictvExemplar.abbreviations})` : ''}<br />{ictvExemplar.genome} · {ictvExemplar.genomeCoverage} · {ictvExemplar.hostSource}</p>}
              {ictvAdditional.length > 0 && <details><summary>{zh ? `${number(ictvAdditional.length)} 条附加分离物` : `${number(ictvAdditional.length)} additional isolate record${ictvAdditional.length === 1 ? '' : 's'}`}</summary><ul>{ictvAdditional.map((isolate) => <li key={isolate.isolateId}><a href={isolate.isolateUrl} target="_blank" rel="noreferrer">{isolate.virusNames ?? isolate.isolateId} ↗</a>{isolate.genbankAccessions ? ` · ${isolate.genbankAccessions}` : ''}</li>)}</ul></details>}
              <div><a href={ictv.record.ictvTaxonUrl} target="_blank" rel="noreferrer">{zh ? '打开具体 ICTV 分类记录' : 'Open the specific ICTV taxon record'} ↗</a>{ictvExemplar?.accessionsUrl && <a href={ictvExemplar.accessionsUrl} target="_blank" rel="noreferrer">GenBank ↗</a>}<a href={ictv.extension.source.licenseUrl} target="_blank" rel="noreferrer">CC BY 4.0 ↗</a></div>
            </div>}
          </section>
          <section>
            <span>04</span><h2>{zh ? '证据边界' : 'Evidence boundary'}</h2>
            <p>{zh ? '这是命名与分类登记记录，不是 Evo Atlas 内容档案；它不主张化石、形态、地理分布或系统发育证据已经整理。' : 'This is a nomenclatural and classification registry record, not an Evo Atlas dossier. It does not claim curated fossil, morphology, range, or phylogenetic evidence.'}</p>
            <dl>
              <div><dt>{zh ? '层级范围' : 'Hierarchy scope'}</dt><dd>{number(manifest.hierarchy.counts.nodes)} {zh ? '节点' : 'nodes'}</dd></div>
              <div><dt>{zh ? '接受种基线' : 'Accepted species baseline'}</dt><dd>{number(manifest.hierarchy.counts.acceptedSpeciesNodes)}</dd></div>
              <div><dt>{zh ? '本记录投影' : 'This record projection'}</dt><dd>{isHierarchyMember ? (zh ? '接受种层级' : 'Accepted-species hierarchy') : (zh ? '仅解析目标' : 'Resolution target only')}</dd></div>
            </dl>
            {upstreamUrl && <a className="catalogue-upstream-link" href={upstreamUrl} target="_blank" rel="noreferrer">{zh ? '在 ChecklistBank 核对原记录' : 'Verify the upstream record in ChecklistBank'} ↗</a>}
          </section>
        </aside>
      </section>
    </main>
  )
}
