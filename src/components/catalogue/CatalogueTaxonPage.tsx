import { useEffect, useMemo, useState } from 'react'
import {
  loadCatalogueChildren,
  loadCatalogueHierarchyNode,
  loadCatalogueIndexFungorumIdentifier,
  loadCatalogueIctvVirusMetadata,
  loadCatalogueLpsnIdentifiers,
  loadCatalogueLineage,
  loadCatalogueManifest,
  loadCatalogueSanbiDescriptions,
  loadCatalogueFoaDescriptions,
  loadCatalogueFdacDescriptions,
  loadCatalogueMesoDescriptions,
  loadCatalogueMossDescriptions,
  loadCatalogueMossChinaDescriptions,
  loadCatalogueFnaDescriptions,
  loadCatalogueBrazilFloraDescriptions,
  loadCatalogueTurkeyDescriptions,
  loadCataloguePakistanDescriptions,
  loadCataloguePlaziDescriptions,
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
import { packageItisEvidenceScopes } from './itisEvidenceScopes'
import { CatalogueItisEvidence } from './CatalogueItisEvidence'
import { catalogueItisOtherAnimalsScopes } from './catalogueItisOtherAnimalsScopes'
import { catalogueItisProtistsScopes } from './catalogueItisProtistsScopes'
import { deriveCatalogueNodeIntroduction } from './catalogueNodeIntroduction'
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
  const [sanbi, setSanbi] = useState<Awaited<ReturnType<typeof loadCatalogueSanbiDescriptions>>>(null)
  const [sanbiError, setSanbiError] = useState(false)
  const [foa, setFoa] = useState<Awaited<ReturnType<typeof loadCatalogueFoaDescriptions>>>(null)
  const [foaError, setFoaError] = useState(false)
  const [meso, setMeso] = useState<Awaited<ReturnType<typeof loadCatalogueMesoDescriptions>>>(null)
  const [mesoError, setMesoError] = useState(false)
  const [moss, setMoss] = useState<Awaited<ReturnType<typeof loadCatalogueMossDescriptions>>>(null)
  const [mossError, setMossError] = useState(false)
  const [mossChina, setMossChina] = useState<Awaited<ReturnType<typeof loadCatalogueMossChinaDescriptions>>>(null)
  const [mossChinaError, setMossChinaError] = useState(false)
  const [fna, setFna] = useState<Awaited<ReturnType<typeof loadCatalogueFnaDescriptions>>>(null)
  const [fnaError, setFnaError] = useState(false)
  const [brazilFlora, setBrazilFlora] = useState<Awaited<ReturnType<typeof loadCatalogueBrazilFloraDescriptions>>>(null)
  const [brazilFloraError, setBrazilFloraError] = useState(false)
  const [turkey, setTurkey] = useState<Awaited<ReturnType<typeof loadCatalogueTurkeyDescriptions>>>(null)
  const [turkeyError, setTurkeyError] = useState(false)
  const [pakistan, setPakistan] = useState<Awaited<ReturnType<typeof loadCataloguePakistanDescriptions>>>(null)
  const [pakistanError, setPakistanError] = useState(false)
  const [fdac, setFdac] = useState<Awaited<ReturnType<typeof loadCatalogueFdacDescriptions>>>(null)
  const [fdacError, setFdacError] = useState(false)
  const [plazi, setPlazi] = useState<Awaited<ReturnType<typeof loadCataloguePlaziDescriptions>>>(null)
  const [plaziError, setPlaziError] = useState(false)

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
      if (loadedManifest.mesoDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueMesoDescriptions(id).then((record) => {
          if (!cancelled) setMeso(record)
        }).catch(() => { if (!cancelled) setMesoError(true) })
      }
      if (loadedManifest.fdacDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueFdacDescriptions(id).then((record) => {
          if (!cancelled) setFdac(record)
        }).catch(() => { if (!cancelled) setFdacError(true) })
      }
      if (loadedManifest.mossDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueMossDescriptions(id).then((record) => {
          if (!cancelled) setMoss(record)
        }).catch(() => { if (!cancelled) setMossError(true) })
      }
      if (loadedManifest.mossChinaDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueMossChinaDescriptions(id).then((record) => {
          if (!cancelled) setMossChina(record)
        }).catch(() => { if (!cancelled) setMossChinaError(true) })
      }
      if (loadedManifest.fnaDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueFnaDescriptions(id).then((record) => {
          if (!cancelled) setFna(record)
        }).catch(() => { if (!cancelled) setFnaError(true) })
      }
      if (loadedManifest.brazilFloraDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueBrazilFloraDescriptions(id).then((record) => {
          if (!cancelled) setBrazilFlora(record)
        }).catch(() => { if (!cancelled) setBrazilFloraError(true) })
      }
      if (loadedManifest.turkeyDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueTurkeyDescriptions(id).then((record) => {
          if (!cancelled) setTurkey(record)
        }).catch(() => { if (!cancelled) setTurkeyError(true) })
      }
      if (loadedManifest.pakistanDescriptions && loadedNode.rank === 'species') {
        void loadCataloguePakistanDescriptions(id).then((record) => {
          if (!cancelled) setPakistan(record)
        }).catch(() => { if (!cancelled) setPakistanError(true) })
      }
      if (loadedManifest.foaDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueFoaDescriptions(id).then((record) => {
          if (!cancelled) setFoa(record)
        }).catch(() => { if (!cancelled) setFoaError(true) })
      }
      if (loadedManifest.plaziDescriptions && loadedNode.rank === 'species') {
        void loadCataloguePlaziDescriptions(id).then((record) => {
          if (!cancelled) setPlazi(record)
        }).catch(() => { if (!cancelled) setPlaziError(true) })
      }
      if (loadedManifest.sanbiDescriptions && loadedNode.rank === 'species') {
        void loadCatalogueSanbiDescriptions(id).then((record) => {
          if (!cancelled) setSanbi(record)
        }).catch(() => { if (!cancelled) setSanbiError(true) })
      }
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
  const nodeIntroduction = node ? deriveCatalogueNodeIntroduction({
    node,
    parent: lineageStatus === 'ready' ? lineage.at(-2) : undefined,
    source: sourcesStatus === 'ready' && node.sourceDatasetId && source
      ? { authority: 'ChecklistBank', sourceId: node.sourceDatasetId, title: source.title ?? source.shortName }
      : undefined,
    releaseAlias: manifest?.releaseAlias,
  }) : null
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
        {nodeIntroduction && <p className="catalogue-provisional-note">{zh ? nodeIntroduction.zh : nodeIntroduction.en}</p>}
        {plaziError && <p role="status">{zh ? 'Plazi 原文描述暂时无法加载。' : 'Plazi original descriptions could not be loaded.'}</p>}
        {plazi && manifest.plaziDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? 'Plazi 分类描述（原文）' : 'Plazi taxonomic descriptions (original text)'}</h2>
          <p>{zh ? '保留原始文献与标本范围，不代表全球完整档案或当前保育评价。原文可能存在排印、提取或表述差异。' : 'Original publication and specimen scope; not a complete global dossier or current conservation assessment. Source text may contain typographic, extraction or wording discrepancies.'}</p>
          <p><a href={manifest.plaziDescriptions.source.sourceUrl}>{manifest.plaziDescriptions.source.provider}</a> · <a href={manifest.plaziDescriptions.source.licenseUrl}>{manifest.plaziDescriptions.source.license}</a></p>
          {plazi.descriptions.map((description) => <details key={`${description.archiveSha256}:${description.rowNumber}`}>
            <summary>{zh ? ({ diagnosis: '鉴别特征', description: '形态描述', biology_ecology: '生物学与生态' }[description.type]) : description.type} · {description.language}</summary>
            <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            <p lang="en">{description.citation}</p>
            <p lang="en">{description.limitations}</p>
            {description.sourceAuthorship && <p>{zh ? '原始署名：' : 'Source authorship: '}{description.sourceAuthorship}</p>}
            {description.sourceScientificName && <p>{zh ? '来源名称：' : 'Source name: '}{description.sourceScientificName} · {description.sourceColUsageId}</p>}
            <small><a href={description.treatmentUrl}>{zh ? '原始分类处理' : 'Original treatment'}</a> · description.txt:{description.rowNumber} · {description.mappingBasis}</small>
          </details>)}
        </section>}
        {sanbiError && <p role="status">{zh ? 'SANBI 描述暂时无法加载。' : 'SANBI descriptions could not be loaded.'}</p>}
        {sanbi && manifest.sanbiDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? 'SANBI 植物描述（英文原文）' : 'SANBI botanical descriptions (original English)'}</h2>
          <p>{zh ? '南非区域来源；不代表全球分布或完整物种档案。不同年份的分类概念可能不同。' : 'Regional South African source; not a global distribution or complete species dossier. Taxonomic concepts may differ across source dates.'}</p>
          <p><a href={manifest.sanbiDescriptions.source.sourceUrl}>{manifest.sanbiDescriptions.source.provider} — {manifest.sanbiDescriptions.source.title}</a> · {manifest.sanbiDescriptions.source.sourceVersion} · {manifest.sanbiDescriptions.source.issued} · <a href={manifest.sanbiDescriptions.source.licenseUrl}>{manifest.sanbiDescriptions.source.license}</a></p>
          {sanbi.descriptions.map((description) => <details key={`${description.rowNumber}:${description.sourceId}`}>
            <summary>{zh ? ({ Morphology: '形态', Diagnostic: '鉴别特征', Habitat: '生境' }[description.type]) : description.type}</summary>
            <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            <p lang="en">{description.citation}</p>
            <small>{sanbi.wfoId} · description.txt:{description.rowNumber} · {description.sourceId}</small>
          </details>)}
        </section>}
        {foaError && <p role="status">{zh ? '澳大利亚植物志描述暂时无法加载。' : 'Flora of Australia descriptions could not be loaded.'}</p>}
        {foa && manifest.foaDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '澳大利亚植物志描述（英文原文）' : 'Flora of Australia descriptions (original English)'}</h2>
          <p>{zh ? '澳大利亚区域历史来源；不代表全球分布或完整物种档案。不同年份的分类概念可能不同。' : 'Historical Australian regional source; not a global distribution or complete species dossier. Taxonomic concepts may differ across source dates.'}</p>
          <p><a href={manifest.foaDescriptions.source.sourceUrl}>{manifest.foaDescriptions.source.provider} — {manifest.foaDescriptions.source.title}</a> · {manifest.foaDescriptions.source.sourceVersion} · <a href={manifest.foaDescriptions.source.licenseUrl}>{manifest.foaDescriptions.source.license}</a></p>
          {foa.descriptions.map((description) => <details key={`${description.rowNumber}:${description.sourceId}`}>
            <summary>{zh ? ({ Morphology: '形态', Biology: '生物学', Diagnostic: '鉴别特征', Ecology: '生态', Habitat: '生境' }[description.type]) : description.type}</summary>
            <p lang={description.language || 'en'} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            <p lang="en">{description.citation}</p>
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>CC BY 4.0</a></p>
            <small><a href={description.sourceUrl}>{zh ? '原始来源' : 'Original source'}</a> · {foa.wfoId} · {description.rowNumber} · {description.sourceId}</small>
          </details>)}
        </section>}
        {mesoError && <p role="status">{zh ? '中美洲植物志摘录暂时无法加载。' : 'Flora Mesoamericana excerpts could not be loaded.'}</p>}
        {meso && manifest.mesoDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '中美洲植物志原文摘录' : 'Flora Mesoamericana original excerpts'}</h2>
          <p>{zh ? '区域历史来源，不代表全球分布或完整物种档案。来源档案存在 4,000 字符上限，摘录可能在句中结束；未补写缺失内容。不同年份的分类概念可能不同。' : 'Historical regional source, not a global distribution or complete species dossier. The source archive has a 4,000-character limit and excerpts may end mid-sentence; missing text has not been reconstructed. Taxonomic concepts may differ across dates.'}</p>
          <p><a href={manifest.mesoDescriptions.source.sourceUrl}>{manifest.mesoDescriptions.source.provider} — {manifest.mesoDescriptions.source.title}</a> · <a href={manifest.mesoDescriptions.source.licenseUrl}>{manifest.mesoDescriptions.source.license}</a></p>
          {meso.descriptions.map((description) => <details key={description.rowNumber}>
            <summary>{description.language === 'es' ? (zh ? '西班牙语原文摘录' : 'Original Spanish excerpt') : (zh ? '英语原文摘录' : 'Original English excerpt')}</summary>
            {description.atSourceCharacterLimit && <p>{zh ? '此条达到来源字符上限，可能被截断。' : 'This entry reaches the source character limit and may be truncated.'}</p>}
            <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            <ul>{description.references.map((reference) => <li key={reference.sourceId}>
              {reference.sourceUrl ? <a href={reference.sourceUrl}>{reference.citation}</a> : reference.citation}
              <small> · {reference.sourceId} · reference.txt:{reference.referenceRowNumber}</small>
            </li>)}</ul>
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>CC BY 4.0</a></p>
            <small>{meso.wfoId} · description.txt:{description.rowNumber}</small>
          </details>)}
        </section>}
        {fdacError && <p role="status">{zh ? 'FDAC 原文描述暂时无法加载。' : 'FDAC original descriptions could not be loaded.'}</p>}
        {fdac && manifest.fdacDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? 'FDAC 植物描述（原文）' : 'FDAC botanical descriptions (original text)'}</h2>
          <p>{zh ? '区域历史来源，原文语言未声明；不代表全球分布或完整物种档案。引用缺失会明确标示，不补写引用。' : 'Historical regional source with no declared source language; not a global distribution or complete species dossier. Missing citations are marked explicitly and have not been invented.'}</p>
          <p><a href={manifest.fdacDescriptions.source.sourceUrl}>{manifest.fdacDescriptions.source.provider} — {manifest.fdacDescriptions.source.title}</a> · {manifest.fdacDescriptions.source.sourceVersion} · {manifest.fdacDescriptions.source.retrievedAt} · <a href={manifest.fdacDescriptions.source.licenseUrl}>{manifest.fdacDescriptions.source.license}</a></p>
          {fdac.descriptions.map((description) => <details key={`${description.rowNumber}:${description.sourceId}`}>
            <summary>{description.type === 'habitat' ? (zh ? '生境' : 'Habitat') : (zh ? '形态' : 'Morphology')}</summary>
            <p lang="und" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            <p>{description.languageNote}</p>
            {description.citationMissingInSource
              ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
              : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{fdac.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
          </details>)}
        </section>}
        {mossError && <p role="status">{zh ? '中美洲藓类植物志描述暂时无法加载。' : 'Moss Flora of Central America descriptions could not be loaded.'}</p>}
        {moss && manifest.mossDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '中美洲藓类植物志' : 'Moss Flora of Central America'}</h2>
          <p>{zh ? '区域历史节选，不代表全球分布或完整物种档案。原文为纯文本；达到来源字符边界的条目可能在句中截断。来源末尾未闭合标记仅说明原始标记状态，不断言文字缺失。' : 'Historical regional excerpts, not a complete global species dossier or distribution. Source text is displayed as plain text; entries at the source character boundary may end mid-sentence. An unclosed source-end marker records source markup state only and does not assert missing text.'}</p>
          <p><a href={manifest.mossDescriptions.source.sourceUrl}>{manifest.mossDescriptions.source.provider} — {manifest.mossDescriptions.source.title}</a> · {manifest.mossDescriptions.source.sourceVersion} · {manifest.mossDescriptions.source.retrievedAt} · <a href={manifest.mossDescriptions.source.licenseUrl}>{manifest.mossDescriptions.source.license}</a></p>
          {moss.descriptions.map((description) => <details key={description.rowNumber}>
            <summary>{zh ? '一般描述' : 'General description'}</summary>
            {description.atSourceCharacterLimit && <p role="note">{zh ? '此条达到来源字符边界，可能被截断。' : 'This entry reaches the source character boundary and may be truncated.'}</p>}
            {description.sourceEndUnclosed && <p role="note">{zh ? '来源末尾标记未闭合；这不表示文字缺失。' : 'The source-end marker is unclosed; this does not indicate missing text.'}</p>}
            <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            {description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{moss.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
          </details>)}
        </section>}
        {mossChinaError && <p role="status">{zh ? '中国藓类植物志描述暂时无法加载。' : 'Moss Flora of China descriptions could not be loaded.'}</p>}
        {mossChina && manifest.mossChinaDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '中国藓类植物志' : 'Moss Flora of China'}</h2>
          <p>{zh ? '区域历史英文原文，非完整全球档案或现代全球分布记录。原文以纯文本显示，未补写来源缺失的引用。' : 'Historical regional source in original English; not a complete global dossier or modern global distribution record. Source text is displayed as plain text, with no citations added where the source is missing them.'}</p>
          <p>{zh ? `来源名称：${mossChina.scientificName}${mossChina.sourceAuthorship ? ` ${mossChina.sourceAuthorship}` : ''}` : `Source name: ${mossChina.scientificName}${mossChina.sourceAuthorship ? ` ${mossChina.sourceAuthorship}` : ''}`}</p>
          <p><a href={manifest.mossChinaDescriptions.source.sourceUrl}>{manifest.mossChinaDescriptions.source.provider} — {manifest.mossChinaDescriptions.source.title}</a> · {manifest.mossChinaDescriptions.source.sourceVersion} · {manifest.mossChinaDescriptions.source.retrievedAt} · <a href={manifest.mossChinaDescriptions.source.licenseUrl}>{manifest.mossChinaDescriptions.source.license}</a></p>
          {mossChina.descriptions.map((description) => <details key={description.rowNumber}>
            <summary>{zh ? '一般描述' : 'General description'}</summary>
            <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            {description.citationMissingInSource
              ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
              : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{mossChina.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
          </details>)}
        </section>}
        {fnaError && <p role="status">{zh ? '北美植物志描述暂时无法加载。' : 'Flora of North America descriptions could not be loaded.'}</p>}
        {fna && manifest.fnaDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '北美植物志' : 'Flora of North America'}</h2>
          <p>{zh ? '区域历史英文来源，非完整全球档案或现代全球分布记录。原文以纯文本显示，未补写来源缺失的引用。' : 'Historical regional source in original English; not a complete global dossier or modern global distribution record. Source text is displayed as plain text, with no citations added where the source is missing them.'}</p>
          <p><a href={manifest.fnaDescriptions.source.sourceUrl}>{manifest.fnaDescriptions.source.provider} — {manifest.fnaDescriptions.source.title}</a> · {manifest.fnaDescriptions.source.sourceVersion} · {manifest.fnaDescriptions.source.retrievedAt} · <a href={manifest.fnaDescriptions.source.licenseUrl}>{manifest.fnaDescriptions.source.license}</a></p>
          {fna.descriptions.map((description) => <details key={description.rowNumber}>
            <summary>{zh ? '一般描述' : 'General description'}</summary>
            <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            {description.sourceEndUnclosed && <p role="note">{zh ? '来源末尾标记未闭合；仅凭此项无法判断是否缺失文字。' : 'The source-end marker is unclosed; this alone does not establish whether text is missing.'}</p>}
            {description.citationMissingInSource
              ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
              : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{fna.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
          </details>)}
        </section>}
        {brazilFloraError && <p role="status">{zh ? '巴西植物志描述暂时无法加载。' : 'Brazil flora descriptions could not be loaded.'}</p>}
        {brazilFlora && manifest.brazilFloraDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '巴西植物志' : 'Brazil flora source descriptions'}</h2>
          <p>{zh ? '巴西区域历史来源（较早快照），不是完整物种档案或当前名录。原文按来源语言以纯文本显示，不推断性状。' : 'Historical regional Brazil source (older snapshot), not a complete species dossier or current census. Original text is shown as plain text in its source language; no traits are inferred.'}</p>
          <p><a href={manifest.brazilFloraDescriptions.source.sourceUrl}>{manifest.brazilFloraDescriptions.source.provider} — {manifest.brazilFloraDescriptions.source.title}</a> · {manifest.brazilFloraDescriptions.source.sourceVersion} · {manifest.brazilFloraDescriptions.source.retrievedAt} · <a href={manifest.brazilFloraDescriptions.source.licenseUrl}>{manifest.brazilFloraDescriptions.source.license}</a></p>
          {brazilFlora.descriptions.map((description) => <details key={description.rowNumber}>
            <summary>{description.type === 'morphology' ? (zh ? '形态' : 'Morphology') : description.type === 'habit' ? (zh ? '习性' : 'Habit') : (zh ? '生境' : 'Habitat')}</summary>
            <p lang={description.language} style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            {description.citationScope === 'description-source'
              ? description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)
              : <p>{description.datasetCitation}</p>}
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{brazilFlora.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''} · {description.citationScope}</small>
          </details>)}
          </section>}
        {turkeyError && <p role="status">Turkey flora descriptions could not be loaded.</p>}
        {turkey && manifest.turkeyDescriptions && <section className="catalogue-source-card">
          <h2>Turkey flora source descriptions</h2>
          <p>Historical regional source from Turkey (20 February 2024 snapshot), not a complete species dossier or current census. Original Turkish text is shown as plain text; no figures, PDFs or authored summaries are included.</p>
          <p>Source name: {turkey.sourceScientificName} {turkey.sourceAuthorship} · Family: {turkey.sourceFamily}</p>
          <p><a href={manifest.turkeyDescriptions.source.sourceUrl}>{manifest.turkeyDescriptions.source.provider} — {manifest.turkeyDescriptions.source.title}</a> · {manifest.turkeyDescriptions.source.sourceVersion} · {manifest.turkeyDescriptions.source.retrievedAt} · <a href={manifest.turkeyDescriptions.source.licenseUrl}>{manifest.turkeyDescriptions.source.license}</a></p>
          {turkey.descriptions.map((description) => <details key={description.descriptionRecordNumber}>
            <summary>Morphology</summary>
            <p lang="tr" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            <p>{description.datasetCitation}</p>
            <p>{description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{turkey.wfoId} · description record {description.descriptionRecordNumber} · dataset citation</small>
          </details>)}
        </section>}
        {pakistanError && <p role="status">{zh ? '巴基斯坦植物志描述暂时无法加载。' : 'Flora of Pakistan descriptions could not be loaded.'}</p>}
        {pakistan && manifest.pakistanDescriptions && <section className="catalogue-source-card">
          <h2>{zh ? '巴基斯坦植物志' : 'Flora of Pakistan'}</h2>
          <p>{zh ? '区域历史英文原文，非完整全球档案或分布记录。原文以纯文本显示，未补写来源缺失的引用。' : 'Historical regional source in original English; not a complete global species dossier or distribution record. Source text is displayed as plain text, with no citations added where the source is missing them.'}</p>
          <p><a href={manifest.pakistanDescriptions.source.sourceUrl}>{manifest.pakistanDescriptions.source.provider} — {manifest.pakistanDescriptions.source.title}</a> · {manifest.pakistanDescriptions.source.sourceVersion} · {manifest.pakistanDescriptions.source.retrievedAt} · <a href={manifest.pakistanDescriptions.source.licenseUrl}>{manifest.pakistanDescriptions.source.license}</a></p>
          {pakistan.descriptions.map((description) => <details key={description.rowNumber}>
            <summary>{zh ? '一般描述' : 'General description'}</summary>
            <p lang="en" style={{ whiteSpace: 'pre-wrap' }}>{description.text}</p>
            {description.citationMissingInSource
              ? <p role="note">{zh ? '来源未提供引用；此处不补写。' : 'The source provides no citation for this entry; none has been added.'}</p>
              : description.citations.map((citation, index) => <p key={`${citation}:${description.referenceRowNumbers[index] ?? index}`}>{citation}</p>)}
            <p>{description.rightsHolder} · {description.rights} · <a href={description.license}>{description.license}</a></p>
            <small>{pakistan.wfoId} · {description.sourceId} · source row {description.rowNumber}{description.referenceRowNumbers.length ? ` · reference rows ${description.referenceRowNumbers.join(', ')}` : ''}</small>
          </details>)}
        </section>}
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
            {node.rank === 'species' && node.status === 'accepted' && speciesOwner && packageItisEvidenceScopes.map((scope) => <PackageItisEvidence key={scope} scope={scope} colId={node.id} packageId={speciesOwner.entry.id} lineageIds={lineage.map((ancestor) => ancestor.id)} zh={zh} />)}
            {node.rank === 'species' && node.status === 'accepted' && speciesOwner && [...catalogueItisOtherAnimalsScopes, ...catalogueItisProtistsScopes].map((config) => <CatalogueItisEvidence key={config.scope} config={config} colId={node.id} packageId={speciesOwner.entry.id} lineageIds={lineage.map((ancestor) => ancestor.id)} zh={zh} />)}
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
