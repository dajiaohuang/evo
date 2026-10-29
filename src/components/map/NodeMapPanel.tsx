import { useMemo, useState } from 'react'
import { useI18n } from '../../i18n'
import { useAppStore } from '../../store'
import { useNodeMapStore } from '../../store/nodeMapStore'
import type { useNodeMap } from '../../hooks/useNodeMap'
import type { MapPoint } from './mapScene'
import './NodeMapPanel.css'

type Model = ReturnType<typeof useNodeMap>

export function NodeMapPanel({ model, requestedAge, gridColumns, setGridColumns, picked }: {
  model: Model; requestedAge: number; gridColumns: number; setGridColumns: (value: number) => void
  picked: MapPoint['nodeMap'] | null
}) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const state = useNodeMapStore()
  const setTime = useAppStore(value => value.setTime)
  const [search, setSearch] = useState('')
  const [recordLimit, setRecordLimit] = useState(20)
  const [childLimit, setChildLimit] = useState(20)
  const nodes = model.manifest?.nodes
  const nodeById = useMemo(() => new Map(nodes?.map(node => [node.id, node])), [nodes])
  const options = useMemo(() => (nodes ?? []).filter(node => `${node.name} ${node.id}`.toLowerCase().includes(search.trim().toLowerCase()))
    .sort((a, b) => b.recordCount - a.recordCount || a.id.localeCompare(b.id)).slice(0, 30), [nodes, search])
  const children = useMemo(() => nodes?.filter(node => node.parentId === model.node?.id) ?? [], [nodes, model.node])
  const parent = model.node?.parentId ? nodeById.get(model.node.parentId) : null
  const visibleIds = useMemo(() => new Set(model.result?.bubbles.flatMap(bubble => bubble.recordIds)), [model.result])
  const inspectedIds = useMemo(() => picked ? new Set(picked.recordIds) : visibleIds, [picked, visibleIds])
  const records = useMemo(() => model.dataset?.records.filter(record => inspectedIds.has(record.id)) ?? [], [model.dataset, inspectedIds])
  const choose = (id: string, name: string) => { state.select(id, name); setSearch(''); setRecordLimit(20); setChildLimit(20) }
  const jumpToRecords = () => {
    const node = model.node
    if (node?.olderMa == null || node.youngerMa == null || !model.manifest) return
    const midpoint = (node.olderMa + node.youngerMa) / 2
    const frame = [...model.manifest.frames].sort((a, b) => Math.abs(a.ageMa - midpoint) - Math.abs(b.ageMa - midpoint) || a.ageMa - b.ageMa)[0]
    if (frame) setTime(frame.ageMa)
  }
  const download = () => {
    if (!model.result || !model.dataset) return
    const collection = { type: 'FeatureCollection', datasetRevision: model.dataset.revision, query: model.result.query,
      coverage: model.dataset.coverage, truncated: model.dataset.truncated,
      features: model.dataset.records.filter(record => visibleIds.has(record.id)).map(record => ({
        type: 'Feature', geometry: { type: 'Point', coordinates: [record.reconstruction!.longitude, record.reconstruction!.latitude] },
        properties: { id: record.id, nodeId: record.nodeId, age: record.age, sourceId: record.sourceId,
          sourceUrl: record.sourceUrl, referenceId: record.referenceId, reconstruction: record.reconstruction },
      })) }
    const url = URL.createObjectURL(new Blob([JSON.stringify(collection)], { type: 'application/geo+json' }))
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'evo-node-map.geojson'; anchor.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <div className="node-map-widget">
    <button type="button" className="node-map-toggle" aria-expanded={state.open} aria-controls="node-map-panel" onClick={() => state.setOpen(!state.open)}>
      {zh ? '类群地图' : 'Taxon map'}{state.selection ? ` · ${state.selection.name}` : ''}
    </button>
    {state.open && <aside id="node-map-panel" className="node-map-panel" aria-label={zh ? '类群时空分布' : 'Taxon distribution through time'}>
      <header><strong>{zh ? '类群与古地图' : 'Taxa on the ancient Earth'}</strong><button type="button" aria-label={zh ? '收起类群地图' : 'Collapse taxon map'} onClick={() => state.setOpen(false)}>×</button></header>
      <label>{zh ? '搜索有记录的类群' : 'Find taxa with records'}<input value={search} onChange={event => setSearch(event.target.value)} placeholder={zh ? '学名或 PBDB ID' : 'Scientific name or PBDB ID'} /></label>
      {(!state.selection || search) && <ul className="node-map-options" aria-label={zh ? '类群搜索结果' : 'Taxon search results'}>
        {options.map(node => <li key={node.id}><button type="button" onClick={() => choose(node.id, node.name)}><i>{node.name}</i><small>{node.recordCount} {zh ? '条记录' : 'records'}</small></button></li>)}
        {model.manifest && !options.length && <li>{zh ? '本批次没有匹配类群。' : 'No matching taxa in this snapshot.'}</li>}
      </ul>}
      {model.error && <p role="alert">{zh ? '类群地图数据暂不可用。' : 'Taxon map data unavailable.'} <button type="button" onClick={model.retry}>{zh ? '重试' : 'Retry'}</button></p>}
      {model.loading && <p role="status">{zh ? '正在加载对应年代的记录…' : 'Loading records for this frame…'}</p>}
      {state.selection && <>
        <div className="node-map-selection"><strong>{model.node?.name ?? state.selection.name}</strong><button type="button" onClick={state.clear}>{zh ? '清除' : 'Clear'}</button></div>
        {!model.node && model.manifest && <p role="status">{zh ? '此节点尚无经过核验的化石身份映射。可搜索本批次已有记录的类群。' : 'This node has no verified fossil identity mapping yet. Search the taxa covered by this snapshot.'}</p>}
        {model.node && <>
          <p className="node-map-range">{zh ? '已收录记录的年代范围' : 'Age range of included records'}: {model.node.olderMa ?? '?'}–{model.node.youngerMa ?? '?'} Ma <button type="button" onClick={jumpToRecords}>{zh ? '定位年代' : 'Go to age'}</button></p>
          <div className="node-map-switches" role="group" aria-label={zh ? '记录范围' : 'Record scope'}>
            <button type="button" aria-pressed={state.scope === 'descendants'} onClick={() => state.setScope('descendants')}>{zh ? '包含后代' : 'Include descendants'}</button>
            <button type="button" aria-pressed={state.scope === 'direct'} onClick={() => state.setScope('direct')}>{zh ? '直接记录' : 'Direct records'}</button>
          </div>
          <div className="node-map-switches" role="group" aria-label={zh ? '地图视图' : 'Map view'}>
            {(['bubbles', 'heatmap', 'points'] as const).map((mode, index) => <button type="button" key={mode} aria-pressed={state.mode === mode} onClick={() => state.setMode(mode)}>{(zh ? ['气泡', '网格热力', '证据点'] : ['Bubbles', 'Grid heatmap', 'Evidence points'])[index]}</button>)}
          </div>
          <label>{zh ? '网格精度' : 'Grid resolution'}<select value={gridColumns} onChange={event => setGridColumns(Number(event.target.value))}><option value={36}>{zh ? '粗' : 'Coarse'}</option><option value={72}>{zh ? '中' : 'Medium'}</option><option value={144}>{zh ? '细' : 'Fine'}</option></select></label>
          <label className="node-map-check"><input type="checkbox" checked={state.exactTime} onChange={event => state.setExactTime(event.target.checked)} />{zh ? '仅纳入年代范围包含底图时刻的记录' : 'Only records whose age range includes the map age'}</label>
          {!model.compatible && <p role="status">{zh ? '当前底图尚无匹配的类群坐标；请开启古地理海岸线并关闭独立地形图层。' : 'No matching taxon coordinates for this map. Enable paleogeographic coastlines and turn off the independent terrain layer.'}</p>}
          {model.frame && <p>{zh ? '所选年代 / 实际底图' : 'Requested / map age'}: {requestedAge} / {model.frame.ageMa} Ma</p>}
          {model.result && <>
            <p role="status" className="node-map-count">{model.result.counts.plotted} {zh ? '条可绘制记录' : 'plottable records'} · {model.result.query.time.olderMa}–{model.result.query.time.youngerMa} Ma</p>
            <p className="node-map-note">{zh ? '颜色和气泡表示采样记录数，不代表生物丰度或起源。浅色到深色表示较少到较多记录；不同时间帧分别归一化。' : 'Color and bubbles count sampled records, not abundance or origins. Light to dark means fewer to more records; each frame is normalized separately.'}</p>
            <details><summary>{zh ? '覆盖与未绘制原因' : 'Coverage and excluded records'}</summary><p>{zh ? '有限、非随机来源样本；未覆盖不等于不存在。分类父链可能不完整，汇总仅含已核验关系。' : 'Bounded, non-random source sample. Absence of records is not evidence of absence. Aggregates include only verified parent links; ancestry may be incomplete.'}</p>
              <dl>{Object.entries(model.result.counts).map(([key, value]) => <div key={key}><dt>{({ matched: zh ? '范围内记录' : 'Matched', unknownAge: zh ? '年代未知' : 'Unknown age', outsideTime: zh ? '时间窗外' : 'Outside window', missingReconstruction: zh ? '无重建位置' : 'No reconstruction', incompatibleReconstruction: zh ? '重建不兼容' : 'Incompatible reconstruction', invalidCoordinates: zh ? '坐标无效' : 'Invalid coordinates', plotted: zh ? '已绘制' : 'Plotted' } as Record<string, string>)[key]}</dt><dd>{value}</dd></div>)}</dl></details>
            <button type="button" disabled={!model.result.counts.plotted} onClick={download}>{zh ? '导出当前古坐标 GeoJSON' : 'Export current paleocoordinates'}</button>
          </>}
          <details open={Boolean(picked)} className="node-map-records"><summary>{picked ? (zh ? '所选位置的证据' : 'Evidence at selected location') : (zh ? '当前证据列表' : 'Current evidence list')} ({records.length})</summary>
            <ul>{records.slice(0, recordLimit).map(record => <li key={record.id}>
              <button type="button" onClick={() => choose(record.nodeId, nodeById.get(record.nodeId)?.name ?? record.nodeId)}>{nodeById.get(record.nodeId)?.name ?? record.nodeId}</button>
              <span>{record.age?.olderMa ?? '?'}–{record.age?.youngerMa ?? '?'} Ma</span>
              <a href={`https://paleobiodb.org/data1.2/occs/single.json?id=${encodeURIComponent(record.id.replace(/^occ:/, ''))}`} target="_blank" rel="noreferrer">{record.id} ↗</a>
              {record.referenceId && <small>{record.referenceId}</small>}
            </li>)}</ul>
            {records.length > recordLimit && <button type="button" onClick={() => setRecordLimit(value => value + 20)}>{zh ? '再显示 20 条' : 'Show 20 more'}</button>}
          </details>
          <details className="node-map-source-tree"><summary>{zh ? '来源分类树' : 'Source classification tree'}</summary>
            <p>{zh ? 'PBDB 来源分类关系，不表示直接祖先。' : 'PBDB classification links, not direct ancestry.'}</p>
            {parent && <button type="button" onClick={() => choose(parent.id, parent.name)}>↑ {parent.name}</button>}
            <ul>{children.slice(0, childLimit).map(child => <li key={child.id}><button type="button" onClick={() => choose(child.id, child.name)}>↳ {child.name} ({child.recordCount})</button></li>)}</ul>
            {children.length > childLimit && <button type="button" onClick={() => setChildLimit(value => value + 20)}>{zh ? '再显示 20 个类群' : 'Show 20 more taxa'}</button>}
            {!parent && !children.length && <p>{zh ? '本批次没有可展开的父子关系。' : 'No verified parent or child links in this snapshot.'}</p>}
          </details>
        </>}
      </>}
      {model.manifest && <footer>{model.manifest.nodes.length.toLocaleString()} {zh ? '个来源节点 · PBDB / CAO2024' : 'source nodes · PBDB / CAO2024'}</footer>}
    </aside>}
  </div>
}
