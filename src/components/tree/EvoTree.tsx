import { useCallback, useEffect, useMemo, useRef } from 'react'
import * as d3 from 'd3'
import { useAppStore } from '../../store'
import type { TreeNode } from '../../types'
import treeData from '../../../data/navigation/atlas-ontology.json'
import perissodactylHypothesisData from '../../../data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json'
import type { TreeDisplayMode } from '../../types'
import { useI18n } from '../../i18n'
import { getTaxonProfile } from '../../services/catalog'
import './EvoTree.css'

export type TreeMode = TreeDisplayMode

function findNode(nodes: TreeNode[], id: string): TreeNode | null {
  for (const node of nodes) {
    if (node.id === id) return node
    const found = node.children ? findNode(node.children, id) : null
    if (found) return found
  }
  return null
}

function activeAt(node: TreeNode, age: number): boolean {
  return age <= node.firstAppearance && age >= node.lastAppearance
}

function flattenNodes(node: TreeNode, output: TreeNode[] = []): TreeNode[] {
  output.push(node)
  for (const child of node.children ?? []) flattenNodes(child, output)
  return output
}

export function EvoTree() {
  const { language, t } = useI18n()
  const svgRef = useRef<SVGSVGElement>(null)
  const mode = useAppStore((state) => state.treeMode)
  const setMode = useAppStore((state) => state.setTreeMode)
  const currentAge = useAppStore((state) => state.currentAge)
  const selectedNodeId = useAppStore((state) => state.selectedNodeId)
  const selectSubject = useAppStore((state) => state.selectSubject)
  const alternativeNodes = useMemo(() => flattenNodes(mode === 'navigation' || mode === 'radial'
    ? treeData as TreeNode
    : perissodactylHypothesisData.root as TreeNode, []), [mode])
  const activeNodeCount = alternativeNodes.filter((node) => activeAt(node, currentAge)).length
  const nodeLabel = useCallback((node: TreeNode) => {
    if (language !== 'zh') return node.commonName || node.name
    return getTaxonProfile(node.id)?.commonNameZh ?? node.commonNameZh ?? node.commonName ?? node.name
  }, [language])

  const handleNodeClick = useCallback((nodeId: string) => {
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
    const root = d3.hierarchy(sourceTree)
    const descendants = root.descendants()
    const maxAge = Math.max(1, ...descendants.map((node) => node.data.firstAppearance)) * 1.08

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
        .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${node.data.firstAppearance}–${node.data.lastAppearance || t('present')} Ma`)
        .style('cursor', 'pointer')
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
        .attr('x1', (node) => x(node.data.firstAppearance))
        .attr('x2', (node) => x(node.data.lastAppearance))
        .attr('data-active', (node) => activeAt(node.data, currentAge) ? 'true' : 'false')
      rows.append('title').text((node) => `${node.data.name}: ${node.data.firstAppearance}–${node.data.lastAppearance || t('present')} Ma`)
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
      radial.selectAll('path').data(root.links()).join('path').attr('class', 'tree-link').attr('d', (link) => radialLink(link as d3.HierarchyPointLink<TreeNode>))
      const nodes = radial.selectAll<SVGGElement, d3.HierarchyNode<TreeNode>>('g.node').data(root.descendants()).join('g')
        .attr('class', 'node')
        .attr('transform', (node) => {
          const point = node as d3.HierarchyPointNode<TreeNode>
          return `rotate(${point.x * 180 / Math.PI - 90}) translate(${point.y},0)`
        })
        .attr('role', 'treeitem').attr('tabindex', 0)
        .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${node.data.firstAppearance}–${node.data.lastAppearance || t('present')} Ma`)
        .style('cursor', 'pointer').style('opacity', (node) => activeAt(node.data, currentAge) ? 1 : .22)
        .on('click', (_event, node) => handleNodeClick(node.data.id))
        .on('keydown', (event: KeyboardEvent, node) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          event.preventDefault()
          handleNodeClick(node.data.id)
        })
      nodes.append('circle').attr('r', (node) => node.data.id === selectedNodeId ? 5.5 : 3.5)
        .attr('fill', (node) => node.data.extinct ? '#8b949e' : '#58a6ff')
        .attr('stroke', (node) => node.data.id === selectedNodeId ? '#ffd700' : 'none').attr('stroke-width', 2)
      nodes.filter((node) => !node.children || node.depth < 2).append('text').attr('class', 'tree-node-label')
        .attr('x', 7).attr('y', 3)
        .attr('transform', (node) => {
          const point = node as d3.HierarchyPointNode<TreeNode>
          return point.x >= Math.PI ? 'rotate(180)' : null
        })
        .attr('text-anchor', (node) => (node as d3.HierarchyPointNode<TreeNode>).x >= Math.PI ? 'end' : 'start')
        .text((node) => nodeLabel(node.data).slice(0, 20))
      nodes.append('title').text((node) => `${node.data.name} · ${node.data.firstAppearance}–${node.data.lastAppearance || t('present')} Ma`)
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
        })

      const nodes = g.selectAll<SVGGElement, d3.HierarchyNode<TreeNode>>('g.node').data(root.descendants()).join('g').attr('class', 'node')
        .attr('transform', (node) => {
          const point = node as d3.HierarchyPointNode<TreeNode>
          return `translate(${xFor(point)},${yFor(point)})`
        })
        .attr('role', 'treeitem').attr('tabindex', 0)
        .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${node.data.firstAppearance}–${node.data.lastAppearance || t('present')} Ma`)
        .style('cursor', 'pointer').style('opacity', (node) => activeAt(node.data, currentAge) ? 1 : .3)
        .on('click', (_event, node) => handleNodeClick(node.data.id))
        .on('keydown', (event: KeyboardEvent, node) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          event.preventDefault()
          handleNodeClick(node.data.id)
        })
      drawNodes(nodes, selectedNodeId, 'right', nodeLabel, t('present'))
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
      })
    const nodes = g.selectAll<SVGGElement, d3.HierarchyNode<TreeNode>>('g.node').data(root.descendants()).join('g').attr('class', 'node')
      .attr('transform', (node) => `translate(${node.x},${node.y})`)
      .attr('role', 'treeitem').attr('tabindex', 0)
      .attr('aria-label', (node) => `${nodeLabel(node.data)}: ${node.data.firstAppearance}–${node.data.lastAppearance || t('present')} Ma`)
      .style('cursor', 'pointer').style('opacity', (node) => activeAt(node.data, currentAge) ? 1 : .2)
      .on('click', (_event, node) => handleNodeClick(node.data.id))
      .on('keydown', (event: KeyboardEvent, node) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        event.preventDefault()
        handleNodeClick(node.data.id)
      })
    drawNodes(nodes, selectedNodeId, 'above', nodeLabel, t('present'))
  }, [currentAge, handleNodeClick, mode, nodeLabel, selectedNodeId, t])

  useEffect(() => { renderTree() }, [renderTree])
  useEffect(() => {
    const parent = svgRef.current?.parentElement
    if (!parent) return
    const observer = new ResizeObserver(renderTree)
    observer.observe(parent)
    return () => observer.disconnect()
  }, [renderTree])

  return (
    <div className={`evo-tree evo-tree--${mode}`}>
      <div className="tree-mode-control" role="group" aria-label={t('Tree time model')}>
        <span>{t('Tree model')}</span>
        {([
          ['navigation', 'Navigation ontology'],
          ['cladogram', 'Periss. topology'],
          ['first-appearance', 'First appearance'],
          ['fossil-range', 'Fossil ranges'],
          ['radial', 'Radial'],
        ] as Array<[TreeMode, string]>).map(([value, label]) => (
          <button key={value} className={mode === value ? 'is-active' : ''} onClick={() => setMode(value)}>{t(label)}</button>
        ))}
      </div>
      <svg ref={svgRef} role="tree" aria-label={t('{mode} visualization of the tree of life', { mode: t(mode) })} />
      <details className="tree-data-alternative">
        <summary>{t('Text and table alternative')}</summary>
        <div>
          <p>{t('{active} of {total} represented nodes overlap {age} Ma in this {mode} view.', { active: activeNodeCount, total: alternativeNodes.length, age: currentAge.toFixed(1), mode: t(mode) })}</p>
          <table>
            <caption>{t('Tree nodes and represented fossil ranges')}</caption>
            <thead><tr><th>{t('Node')}</th><th>{t('Rank')}</th><th>{t('Range')}</th><th>{t('At current time')}</th></tr></thead>
            <tbody>{alternativeNodes.map((node) => <tr key={node.id}><td>{nodeLabel(node)}</td><td>{t(node.rank ?? 'not applicable')}</td><td>{node.firstAppearance}–{node.lastAppearance || t('present')} Ma</td><td>{t(activeAt(node, currentAge) ? 'yes' : 'no')}</td></tr>)}</tbody>
          </table>
        </div>
      </details>
      <div className="tree-model-note">
        {mode === 'navigation' && t('Navigation ontology · convenient groupings may be paraphyletic and do not assert a phylogenetic hypothesis.')}
        {mode === 'cladogram' && t('Curated Perissodactyla hypothesis · branch length does not encode elapsed time.')}
        {mode === 'first-appearance' && t('Horizontal position uses curated first appearance as a fossil-record proxy, not a divergence-time estimate.')}
        {mode === 'fossil-range' && t('Bars show curated first–last appearance ranges; gaps and endpoints remain sampling-dependent.')}
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
  nodes.append('title').text((node) => `${node.data.name} · ${node.data.firstAppearance}–${node.data.lastAppearance || presentLabel} Ma`)
}
