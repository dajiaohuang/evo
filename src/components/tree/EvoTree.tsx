import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as d3 from 'd3'
import { useAppStore } from '../../store'
import type { TreeNode } from '../../types'
import treeData from '../../../data/navigation/atlas-ontology.json'
import perissodactylHypothesisData from '../../../data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json'
import calibrationData from '../../../data/packages/mammalia/perissodactyla/phylogeny/calibrations.json'
import type { TreeDisplayMode } from '../../types'
import { useI18n } from '../../i18n'
import { evolutionEvents, getTaxonProfile, taxonProfiles } from '../../services/catalog'
import { isPagesPreview, isPreviewTaxonAllowed } from '../../config/pagesPreview'
import { isBackendConfigured } from '../../data-client/backendClient'
import { BackendCatalogueTree } from './BackendCatalogueTree'
import './EvoTree.css'

export type TreeMode = TreeDisplayMode

const mappedCalibrations = calibrationData.estimates.filter((estimate) => estimate.displayOnTree && estimate.mappingStatus === 'mapped' && estimate.nodeId)

function normalizedLabel(value: string | undefined): string {
  return String(value ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '')
}

function findNode(nodes: TreeNode[], id: string): TreeNode | null {
  for (const node of nodes) {
    if (node.id === id) return node
    const found = node.children ? findNode(node.children, id) : null
    if (found) return found
  }
  return null
}

function activeAt(node: TreeNode, age: number): boolean {
  return node.rangeEvidenceLevel !== 'withheld-no-range-evidence' && age <= node.firstAppearance && age >= node.lastAppearance
}

function rangeLabel(node: TreeNode, presentLabel: string, unavailableLabel: string): string {
  if (node.rangeEvidenceLevel === 'withheld-no-range-evidence') return unavailableLabel
  return `${node.firstAppearance}–${node.lastAppearance || presentLabel} Ma`
}

function flattenNodes(node: TreeNode, output: TreeNode[] = []): TreeNode[] {
  output.push(node)
  for (const child of node.children ?? []) flattenNodes(child, output)
  return output
}

function newick(node: TreeNode): string {
  const label = node.id.replace(/[^A-Za-z0-9_.-]/g, '_')
  return `${node.children?.length ? `(${node.children.map(newick).join(',')})` : ''}${label}`
}

function downloadTree(node: TreeNode, format: 'newick' | 'nexus') {
  const tree = `${newick(node)};`
  const text = format === 'newick' ? `${tree}\n` : `#NEXUS\nBegin trees;\n  Tree evo_atlas = ${tree}\nEnd;\n`
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `evo-atlas-${node.id}.${format === 'newick' ? 'nwk' : 'nex'}`
  anchor.click()
  URL.revokeObjectURL(url)
}

export function EvoTree() {
  const { language, t } = useI18n()
  const svgRef = useRef<SVGSVGElement>(null)
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => new Set())
  const [traceLineage, setTraceLineage] = useState(false)
  const [traitOverlay, setTraitOverlay] = useState('')
  const [eventOverlay, setEventOverlay] = useState(false)
  const [backendTreeView, setBackendTreeView] = useState(() => isBackendConfigured())
  const mode = useAppStore((state) => state.treeMode)
  const setMode = useAppStore((state) => state.setTreeMode)
  const currentAge = useAppStore((state) => state.currentAge)
  const selectedNodeId = useAppStore((state) => state.selectedNodeId)
  const selectSubject = useAppStore((state) => state.selectSubject)
  const alternativeNodes = useMemo(() => flattenNodes(mode === 'navigation' || mode === 'radial'
    ? treeData as TreeNode
    : perissodactylHypothesisData.root as TreeNode, []), [mode])
  const traitOptions = useMemo(() => {
    const visibleNodeIds = new Set(alternativeNodes.map((node) => node.id))
    return [...new Set(taxonProfiles.filter((profile) => visibleNodeIds.has(profile.treeNodeId ?? profile.id)).flatMap((profile) => profile.traits))]
      .sort((left, right) => left.localeCompare(right, 'en'))
  }, [alternativeNodes])
  const activeNodeCount = alternativeNodes.filter((node) => activeAt(node, currentAge)).length
  const exportTree = mode === 'navigation' || mode === 'radial' ? treeData as TreeNode : perissodactylHypothesisData.root as TreeNode
  const selectedSourceNode = selectedNodeId ? findNode([exportTree], selectedNodeId) : null
  const activeEventLabels = useMemo(() => new Set(eventOverlay
    ? evolutionEvents.filter((event) => currentAge <= event.startAge && currentAge >= event.endAge).flatMap((event) => event.clades).map(normalizedLabel)
    : []), [currentAge, eventOverlay])
  const hasTrait = useCallback((node: TreeNode) => Boolean(traitOverlay && getTaxonProfile(node.id)?.traits.includes(traitOverlay)), [traitOverlay])
  const hasEvent = useCallback((node: TreeNode) => activeEventLabels.has(normalizedLabel(node.id)) || activeEventLabels.has(normalizedLabel(node.name)) || activeEventLabels.has(normalizedLabel(node.commonName)), [activeEventLabels])
  const nodeFill = useCallback((node: TreeNode) => hasEvent(node) ? '#d8aa68' : hasTrait(node) ? '#6ddab1' : node.extinct ? '#8b949e' : '#58a6ff', [hasEvent, hasTrait])
  const toggleSelectedCollapse = () => {
    if (!selectedSourceNode?.children?.length) return
    setCollapsedIds((current) => {
      const next = new Set(current)
      if (next.has(selectedSourceNode.id)) next.delete(selectedSourceNode.id)
      else next.add(selectedSourceNode.id)
      return next
    })
  }
  const nodeLabel = useCallback((node: TreeNode) => {
    if (language !== 'zh') return node.commonName || node.name
    return getTaxonProfile(node.id)?.commonNameZh ?? node.commonNameZh ?? node.commonName ?? node.name
  }, [language])

  const handleNodeClick = useCallback((nodeId: string) => {
    if (isPagesPreview && !isPreviewTaxonAllowed(nodeId)) return
    const node = findNode([treeData as TreeNode], nodeId)
      ?? findNode([perissodactylHypothesisData.root as TreeNode], nodeId)
    void selectSubject({ nodeId, taxonId: node?.taxonId })
  }, [selectSubject])

  const renderTree = useCallback(() => {
    const svgElement = svgRef.current
    if (!svgElement) return
    const width = svgElement.parentElement?.clientWidth || 700
    const viewportHeight = svgElement.parentElement?.clientHeight || 560
    const svg = d3.select(svgElement)
    svg.selectAll('*').remove()
    svg.on('.zoom', null)

    const sourceTree = mode === 'navigation' || mode === 'radial'
      ? treeData as TreeNode
      : perissodactylHypothesisData.root as TreeNode
    const root = d3.hierarchy<TreeNode>(sourceTree, (node) => collapsedIds.has(node.id) ? undefined : node.children)
    const descendants = root.descendants()
    const maxAge = Math.max(1, ...descendants.map((node) => node.data.firstAppearance)) * 1.08
    const selectedHierarchyNode = selectedNodeId ? descendants.find((node) => node.data.id === selectedNodeId) : null
    const lineageIds = new Set(selectedHierarchyNode?.ancestors().map((node) => node.data.id) ?? [])
    const inLineage = (node: d3.HierarchyNode<TreeNode>) => !traceLineage || !selectedHierarchyNode || lineageIds.has(node.data.id)
    const nodeOpacity = (node: d3.HierarchyNode<TreeNode>, inactiveOpacity = .22) => inLineage(node) ? (activeAt(node.data, currentAge) ? 1 : inactiveOpacity) : .05
    const linkOpacity = (link: d3.HierarchyLink<TreeNode>) => !traceLineage || !selectedHierarchyNode || (lineageIds.has(link.source.data.id) && lineageIds.has(link.target.data.id)) ? 1 : .05

    if (mode === 'fossil-range') {
      const rowHeight = 21
      const ordered = [...descendants].sort((a, b) => b.data.firstAppearance - a.data.firstAppearance || a.depth - b.depth)
      const height = Math.max(viewportHeight, ordered.length * rowHeight + 82)
      svg.attr('height', height).attr('viewBox', `0 0 ${width} ${height}`)
      const labelWidth = Math.min(190, Math.max(120, width * 0.26))
      const x = d3.scaleLinear().domain([maxAge, 0]).range([labelWidth, width - 34])
      const axis = d3.axisTop(x).ticks(Math.max(4, Math.floor(width / 130))).tickFormat((value) => `${value} Ma`)
      svg.append('g').attr('class', 'tree-time-axis').attr('transform', 'translate(0,48)').call(axis)

      const currentX = x(Math.min(currentAge, maxAge))
      svg.append('line').attr('class', 'tree-current-line').attr('x1', currentX).attr('x2', currentX).attr('y1', 48).attr('y2', height)

      const rows = svg.append('g').selectAll('g.range-row').data(ordered).join('g')
        .attr('class', (node) => `range-row${node.data.id === selectedNodeId ? ' is-selected' : ''}`)
        .attr('transform', (_node, index) => `translate(0,${67 + index * rowHeight})`)
        .attr('role', 'treeitem')
        .attr('tabindex', 0)
        .attr('aria-disabled', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'true' : null)
        .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${rangeLabel(node.data, t('present'), t('Unavailable'))}`)
        .style('cursor', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'not-allowed' : 'pointer')
        .style('opacity', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? .42 : inLineage(node) ? 1 : .05)
        .on('click', (_event, node) => handleNodeClick(node.data.id))
        .on('keydown', (event: KeyboardEvent, node) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          event.preventDefault()
          handleNodeClick(node.data.id)
        })

      rows.append('text').attr('x', 10).attr('y', 4).attr('class', 'range-label')
        .attr('font-style', (node) => node.data.rank && node.data.rank !== 'kingdom' ? 'italic' : null)
        .text((node) => `${'·'.repeat(Math.min(node.depth, 5))} ${nodeLabel(node.data)}`)
      rows.append('line').attr('class', 'range-track').attr('x1', labelWidth).attr('x2', width - 34)
      rows.append('line').attr('class', 'range-bar')
        .attr('visibility', (node) => node.data.rangeEvidenceLevel === 'withheld-no-range-evidence' ? 'hidden' : null)
        .attr('x1', (node) => x(node.data.firstAppearance))
        .attr('x2', (node) => x(node.data.lastAppearance))
        .attr('data-active', (node) => activeAt(node.data, currentAge) ? 'true' : 'false')
        .attr('stroke', (node) => hasEvent(node.data) || hasTrait(node.data) ? nodeFill(node.data) : null)
      rows.append('title').text((node) => `${node.data.name}: ${rangeLabel(node.data, t('present'), t('Unavailable'))}`)
      return
    }

    svg.attr('height', '100%').attr('viewBox', null)
    const g = svg.append('g')

    if (mode === 'radial') {
      const radius = Math.max(120, Math.min(width, viewportHeight) / 2 - 58)
      d3.cluster<TreeNode>().size([Math.PI * 2, radius])(root)
      const radial = g.append('g').attr('transform', `translate(${width / 2},${viewportHeight / 2})`)
      const radialLink = d3.linkRadial<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
        .angle((node) => node.x)
        .radius((node) => node.y)
      radial.selectAll('path').data(root.links()).join('path').attr('class', 'tree-link').attr('d', (link) => radialLink(link as d3.HierarchyPointLink<TreeNode>)).style('opacity', linkOpacity)
      const nodes = radial.selectAll<SVGGElement, d3.HierarchyNode<TreeNode>>('g.node').data(root.descendants()).join('g')
        .attr('class', 'node')
        .attr('transform', (node) => {
          const point = node as d3.HierarchyPointNode<TreeNode>
          return `rotate(${point.x * 180 / Math.PI - 90}) translate(${point.y},0)`
        })
        .attr('role', 'treeitem').attr('tabindex', 0)
        .attr('aria-disabled', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'true' : null)
        .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${rangeLabel(node.data, t('present'), t('Unavailable'))}`)
        .style('cursor', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'not-allowed' : 'pointer').style('opacity', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? .42 : nodeOpacity(node))
        .on('click', (_event, node) => handleNodeClick(node.data.id))
        .on('keydown', (event: KeyboardEvent, node) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          event.preventDefault()
          handleNodeClick(node.data.id)
        })
      nodes.append('circle').attr('r', (node) => node.data.id === selectedNodeId ? 5.5 : 3.5)
        .attr('fill', (node) => nodeFill(node.data))
        .attr('stroke', (node) => node.data.id === selectedNodeId ? '#ffd700' : 'none').attr('stroke-width', 2)
      nodes.filter((node) => !node.children || node.depth < 2).append('text').attr('class', 'tree-node-label')
        .attr('x', 7).attr('y', 3)
        .attr('transform', (node) => {
          const point = node as d3.HierarchyPointNode<TreeNode>
          return point.x >= Math.PI ? 'rotate(180)' : null
        })
        .attr('text-anchor', (node) => (node as d3.HierarchyPointNode<TreeNode>).x >= Math.PI ? 'end' : 'start')
        .text((node) => nodeLabel(node.data).slice(0, 20))
      nodes.append('title').text((node) => `${node.data.name} · ${rangeLabel(node.data, t('present'), t('Unavailable'))}`)
      return
    }

    if (mode === 'first-appearance') {
      const layoutHeight = Math.max(viewportHeight - 70, descendants.length * 5)
      d3.tree<TreeNode>().size([layoutHeight, 1])(root)
      const timeX = d3.scaleLinear().domain([maxAge, 0]).range([55, width - 125])
      const yOffset = Math.max(35, (viewportHeight - layoutHeight) / 2)
      const xFor = (node: d3.HierarchyPointNode<TreeNode>) => timeX(node.data.firstAppearance)
      const yFor = (node: d3.HierarchyPointNode<TreeNode>) => node.x + yOffset

      const axis = d3.axisTop(timeX).ticks(Math.max(4, Math.floor(width / 130))).tickFormat((value) => `${value} Ma`)
      svg.append('g').attr('class', 'tree-time-axis').attr('transform', 'translate(0,28)').call(axis)
      svg.append('line').attr('class', 'tree-current-line').attr('x1', timeX(Math.min(currentAge, maxAge))).attr('x2', timeX(Math.min(currentAge, maxAge))).attr('y1', 28).attr('y2', viewportHeight)

      g.selectAll('path').data(root.links()).join('path').attr('class', 'tree-link')
        .attr('d', (link) => {
          const source = link.source as d3.HierarchyPointNode<TreeNode>
          const target = link.target as d3.HierarchyPointNode<TreeNode>
          return `M${xFor(source)},${yFor(source)}H${xFor(target)}V${yFor(target)}`
        }).style('opacity', linkOpacity)

      const nodes = g.selectAll<SVGGElement, d3.HierarchyNode<TreeNode>>('g.node').data(root.descendants()).join('g').attr('class', 'node')
        .attr('transform', (node) => {
          const point = node as d3.HierarchyPointNode<TreeNode>
          return `translate(${xFor(point)},${yFor(point)})`
        })
        .attr('role', 'treeitem').attr('tabindex', 0)
        .attr('aria-disabled', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'true' : null)
        .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${rangeLabel(node.data, t('present'), t('Unavailable'))}`)
        .style('cursor', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'not-allowed' : 'pointer').style('opacity', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? .42 : nodeOpacity(node, .3))
        .on('click', (_event, node) => handleNodeClick(node.data.id))
        .on('keydown', (event: KeyboardEvent, node) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          event.preventDefault()
          handleNodeClick(node.data.id)
        })
      drawNodes(nodes, selectedNodeId, 'right', nodeLabel, t('present'), t('Unavailable'))
      nodes.select('circle').attr('fill', (node) => nodeFill(node.data))
      return
    }

    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.2, 12]).on('zoom', (event) => g.attr('transform', event.transform.toString()))
    svg.call(zoom)

    d3.tree<TreeNode>().nodeSize([76, 128])(root)
    const bounds = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity }
    root.each((node) => {
      bounds.x0 = Math.min(bounds.x0, node.x ?? 0)
      bounds.x1 = Math.max(bounds.x1, node.x ?? 0)
      bounds.y0 = Math.min(bounds.y0, node.y ?? 0)
      bounds.y1 = Math.max(bounds.y1, node.y ?? 0)
    })
    const treeWidth = bounds.x1 - bounds.x0 || 1
    const treeHeight = bounds.y1 - bounds.y0 || 1
    const scale = Math.min((width - 24) / treeWidth, (viewportHeight - 36) / treeHeight, 1.2)
    const initialTransform = d3.zoomIdentity
      .translate((width - treeWidth * scale) / 2 - bounds.x0 * scale, 18 - bounds.y0 * scale)
      .scale(scale)
    svg.call(zoom.transform, initialTransform)
    g.selectAll('path').data(root.links()).join('path').attr('class', 'tree-link')
      .attr('d', (link) => {
        const sx = link.source.x ?? 0
        const sy = link.source.y ?? 0
        const tx = link.target.x ?? 0
        const ty = link.target.y ?? 0
        return `M${sx},${sy}C${sx},${(sy + ty) / 2} ${tx},${(sy + ty) / 2} ${tx},${ty}`
      }).style('opacity', linkOpacity)
    const nodes = g.selectAll<SVGGElement, d3.HierarchyNode<TreeNode>>('g.node').data(root.descendants()).join('g').attr('class', 'node')
      .attr('transform', (node) => `translate(${node.x},${node.y})`)
      .attr('role', 'treeitem').attr('tabindex', 0)
      .attr('aria-disabled', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'true' : null)
      .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${rangeLabel(node.data, t('present'), t('Unavailable'))}`)
      .style('cursor', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? 'not-allowed' : 'pointer').style('opacity', (node) => isPagesPreview && !isPreviewTaxonAllowed(node.data.id) ? .42 : nodeOpacity(node, .2))
      .on('click', (_event, node) => handleNodeClick(node.data.id))
      .on('keydown', (event: KeyboardEvent, node) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        event.preventDefault()
        handleNodeClick(node.data.id)
      })
    drawNodes(nodes, selectedNodeId, 'above', nodeLabel, t('present'), t('Unavailable'))
    nodes.select('circle').attr('fill', (node) => nodeFill(node.data))
    if (mode === 'calibration') {
      nodes.filter((node) => mappedCalibrations.some((estimate) => estimate.nodeId === node.data.id))
        .append('text').attr('class', 'tree-calibration-label').attr('x', 8).attr('y', 14)
        .text((node) => {
          const estimate = mappedCalibrations.find((entry) => entry.nodeId === node.data.id)
          return estimate ? `${estimate.medianMa} Ma · ${estimate.method}` : ''
        })
    }
  }, [collapsedIds, currentAge, handleNodeClick, hasEvent, hasTrait, mode, nodeFill, nodeLabel, selectedNodeId, t, traceLineage])

  useEffect(() => { renderTree() }, [renderTree])
  useEffect(() => {
    const parent = svgRef.current?.parentElement
    if (!parent) return
    const observer = new ResizeObserver(renderTree)
    observer.observe(parent)
    return () => observer.disconnect()
  }, [renderTree])

  if (backendTreeView && isBackendConfigured()) {
    return <div className="evo-tree evo-tree--backend"><BackendCatalogueTree onExit={() => setBackendTreeView(false)} /></div>
  }

  return (
    <div className={`evo-tree evo-tree--${mode}`}>
      {isBackendConfigured() && <button type="button" className="tree-backend-control" onClick={() => setBackendTreeView(true)}>{language === 'zh' ? '打开全量分类树' : 'Open full catalogue tree'}</button>}
      <div className="tree-mode-control" role="group" aria-label={t('Tree time model')}>
        <span>{t('Tree model')}</span>
        {([
          ['navigation', 'Navigation ontology'],
          ['cladogram', 'Periss. topology'],
          ['first-appearance', 'First appearance'],
          ['fossil-range', 'Fossil ranges'],
          ['calibration', 'Calibration evidence'],
          ['radial', 'Radial'],
        ] as Array<[TreeMode, string]>).map(([value, label]) => (
          <button key={value} className={mode === value ? 'is-active' : ''} onClick={() => setMode(value)}>{t(label)}</button>
        ))}
      </div>
      {isPagesPreview && <p className="tree-preview-note" role="note">
        {language === 'zh'
          ? '预览版中的灰显节点仅用于上下文，精选资源包之外的完整档案请使用完整版 Web。'
          : 'Dimmed nodes remain for context; full dossiers outside the selected resource packages are available in the full Web edition.'}
      </p>}
      <div className="tree-overlay-control" role="group" aria-label={t('Tree overlays and focus')}>
        <button disabled={!selectedSourceNode?.children?.length} onClick={toggleSelectedCollapse}>{t(selectedSourceNode && collapsedIds.has(selectedSourceNode.id) ? 'Expand selected clade' : 'Collapse selected clade')}</button>
        <button className={traceLineage ? 'is-active' : ''} aria-pressed={traceLineage} disabled={!selectedNodeId} onClick={() => setTraceLineage((current) => !current)}>{t('Lineage trace')}</button>
        <label><span>{t('Trait overlay')}</span><select value={traitOverlay} onChange={(event) => setTraitOverlay(event.target.value)}><option value="">{t('No trait overlay')}</option>{traitOptions.map((trait) => <option value={trait} key={trait}>{trait}</option>)}</select></label>
        <button className={eventOverlay ? 'is-active' : ''} aria-pressed={eventOverlay} onClick={() => setEventOverlay((current) => !current)}>{t('Event overlay')} · {activeEventLabels.size}</button>
      </div>
      <div className="tree-export-control" role="group" aria-label={t('Export topology')}>
        <button onClick={() => downloadTree(exportTree, 'newick')}>{t('Newick')}</button>
        <button onClick={() => downloadTree(exportTree, 'nexus')}>{t('Nexus')}</button>
      </div>
      <svg ref={svgRef} role="tree" aria-label={t('{mode} visualization of the tree of life', { mode: t(mode) })} />
      <details className="tree-data-alternative">
        <summary>{t('Text and table alternative')}</summary>
        <div>
          <p>{t('{active} of {total} represented nodes overlap {age} Ma in this {mode} view.', { active: activeNodeCount, total: alternativeNodes.length, age: currentAge.toFixed(1), mode: t(mode) })}</p>
          <table>
            <caption>{t('Tree nodes and represented fossil ranges')}</caption>
            <thead><tr><th>{t('Node')}</th><th>{t('Rank')}</th><th>{t('Range')}</th><th>{t('At current time')}</th></tr></thead>
            <tbody>{alternativeNodes.map((node) => <tr key={node.id}><td>{nodeLabel(node)}</td><td>{t(node.rank ?? 'not applicable')}</td><td>{rangeLabel(node, t('present'), t('Unavailable'))}</td><td>{t(activeAt(node, currentAge) ? 'yes' : 'no')}</td></tr>)}</tbody>
          </table>
        </div>
      </details>
      <details className="tree-hypothesis-status">
        <summary>{t('Competing hypothesis status')}</summary>
        <p>{t('One scoped Perissodactyla topology hypothesis is bundled. Navigation ontology is not a competing phylogenetic hypothesis, so a scientific hypothesis comparison remains unavailable until another source-linked topology is added.')}</p>
        <code>{perissodactylHypothesisData.id}</code>
        <p>{t('{mapped} of {total} published divergence estimates map to an exact node; calibration mode annotates evidence without inventing time-scaled branch lengths.', { mapped: mappedCalibrations.length, total: calibrationData.estimates.length })}</p>
      </details>
      <div className="tree-model-note">
        {mode === 'navigation' && t('Navigation ontology · convenient groupings may be paraphyletic and do not assert a phylogenetic hypothesis.')}
        {mode === 'cladogram' && t('Curated Perissodactyla hypothesis · branch length does not encode elapsed time.')}
        {mode === 'first-appearance' && t('Horizontal position uses curated first appearance as a fossil-record proxy, not a divergence-time estimate.')}
        {mode === 'fossil-range' && t('Bars show curated first–last appearance ranges; gaps and endpoints remain sampling-dependent.')}
        {mode === 'calibration' && t('Published calibration evidence is annotated on mapped nodes; branch lengths remain non-time-scaled because the current ledger is incomplete.')}
        {mode === 'radial' && t('Radial mode supports high-level navigation; angular and radial distances do not encode elapsed time.')}
      </div>
    </div>
  )
}

function drawNodes(
  nodes: d3.Selection<SVGGElement, d3.HierarchyNode<TreeNode>, SVGGElement, unknown>,
  selectedNodeId: string | null,
  labelPosition: 'right' | 'above',
  labelFor: (node: TreeNode) => string,
  presentLabel: string,
  unavailableLabel: string,
) {
  nodes.append('circle').attr('r', (node) => node.data.id === selectedNodeId ? 6.5 : 4.5)
    .attr('fill', (node) => node.data.extinct ? '#8b949e' : '#58a6ff')
    .attr('stroke', (node) => node.data.id === selectedNodeId ? '#ffd700' : 'none')
    .attr('stroke-width', 2)
  nodes.append('text').attr('class', 'tree-node-label')
    .attr('x', labelPosition === 'right' ? 8 : 0)
    .attr('y', labelPosition === 'right' ? 3 : -8)
    .attr('text-anchor', labelPosition === 'right' ? 'start' : 'middle')
    .text((node) => `${labelFor(node.data)}${node.data.extinct ? ' †' : ''}`.slice(0, 24))
  nodes.append('title').text((node) => `${node.data.name} · ${rangeLabel(node.data, presentLabel, unavailableLabel)}`)
}
