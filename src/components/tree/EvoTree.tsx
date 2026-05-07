import { useEffect, useRef, useCallback } from 'react'
import * as d3 from 'd3'
import { useAppStore } from '../../store'
import type { TreeNode } from '../../types'
import treeData from '../../../data/tree/life-cladogram.json'

function findNode(nodes: TreeNode[], id: string): TreeNode | null {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findNode(node.children, id)
      if (found) return found
    }
  }
  return null
}

export function EvoTree() {
  const svgRef = useRef<SVGSVGElement>(null)
  const currentAge = useAppStore((s) => s.currentAge)
  const selectedNodeId = useAppStore((s) => s.selectedNodeId)
  const selectNode = useAppStore((s) => s.selectNode)
  const highlightTaxon = useAppStore((s) => s.highlightTaxon)
  const loadOccurrencesForTaxon = useAppStore((s) => s.loadOccurrencesForTaxon)

  const handleNodeClick = useCallback((nodeId: string) => {
    selectNode(nodeId)
    const node = findNode([treeData as TreeNode], nodeId)
    if (node?.taxonId) {
      highlightTaxon(node.taxonId)
      loadOccurrencesForTaxon(node.taxonId)
    }
  }, [selectNode, highlightTaxon, loadOccurrencesForTaxon])

  const renderTree = useCallback(() => {
    const svg = svgRef.current
    if (!svg) return

    const width = svg.clientWidth || 340
    const height = svg.clientHeight || 600

    svg.innerHTML = ''

    const root = d3.hierarchy(treeData as TreeNode)
    const treeLayout = d3.tree<TreeNode>().nodeSize([80, 140])
    treeLayout(root)

    const bounds = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity }
    root.each((d) => {
      if (d.x! < bounds.x0) bounds.x0 = d.x!
      if (d.x! > bounds.x1) bounds.x1 = d.x!
      if (d.y! < bounds.y0) bounds.y0 = d.y!
      if (d.y! > bounds.y1) bounds.y1 = d.y!
    })

    const treeW = bounds.x1 - bounds.x0 || 1
    const treeH = bounds.y1 - bounds.y0 || 1
    const scaleX = (width - 24) / treeW
    const scaleY = Math.min(1, (height - 32) / treeH)
    const scale = Math.min(scaleX, scaleY, 1.2)
    const offsetX = (width - treeW * scale) / 2 - bounds.x0 * scale
    const offsetY = 16 - bounds.y0 * scale

    const g = d3.select(svg).append('g')
      .attr('transform', `translate(${offsetX},${offsetY}) scale(${scale})`)

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 20])
      .filter((event) => {
        if (event.type === 'dblclick') return false
        return true
      })
      .on('zoom', (event) => {
        g.attr('transform', `translate(${event.transform.x + offsetX}, ${event.transform.y + offsetY}) scale(${event.transform.k * scale})`)
      })

    d3.select(svg).call(zoom)

    const inRange = (node: d3.HierarchyNode<TreeNode>) =>
      currentAge <= node.data.firstAppearance && currentAge >= node.data.lastAppearance

    g.selectAll('path')
      .data(root.links())
      .join('path')
      .attr('d', (d) => {
        const sx = d.source.x!
        const sy = d.source.y!
        const tx = d.target.x!
        const ty = d.target.y!
        const my = (sy + ty) / 2
        return `M${sx},${sy} C${sx},${my} ${tx},${my} ${tx},${ty}`
      })
      .attr('fill', 'none')
      .attr('stroke', (d) => {
        const visible = inRange(d.source) || inRange(d.target)
        return visible ? '#30363d' : '#1a2030'
      })
      .attr('stroke-width', 1.5)

    g.selectAll('g.node')
      .data(root.descendants())
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
      .style('cursor', 'pointer')
      .style('opacity', (d) => inRange(d) ? 1 : 0.2)
      .on('click', (_event, d) => {
        handleNodeClick(d.data.id)
      })
      .each(function (d) {
        const el = d3.select(this)
        const nodeSelected = d.data.id === selectedNodeId

        el.append('circle')
          .attr('r', nodeSelected ? 7 : 5)
          .attr('fill', d.data.extinct ? '#8b949e' : '#58a6ff')
          .attr('stroke', nodeSelected ? '#ffd700' : 'none')
          .attr('stroke-width', nodeSelected ? 2 : 0)

        const label = (d.data.commonName || d.data.name).slice(0, 22)
        el.append('text')
          .attr('dy', -7)
          .attr('text-anchor', 'middle')
          .attr('fill', '#e6edf3')
          .attr('font-size', 9)
          .attr('font-family', 'var(--font-sans)')
          .text(label)

        if (d.data.extinct) {
          el.append('text')
            .attr('dy', 14)
            .attr('text-anchor', 'middle')
            .attr('fill', '#8b949e')
            .attr('font-size', 8)
            .text('†')
        }
      })
  }, [currentAge, selectedNodeId, handleNodeClick])

  useEffect(() => {
    renderTree()
  }, [renderTree])

  useEffect(() => {
    const observer = new ResizeObserver(() => renderTree())
    if (svgRef.current?.parentElement) {
      observer.observe(svgRef.current.parentElement)
    }
    return () => observer.disconnect()
  }, [renderTree])

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 8, left: 12,
        fontSize: 11, color: 'var(--color-text-muted)',
        zIndex: 10, pointerEvents: 'none',
      }}>
        Tree of Life — {currentAge.toFixed(1)} Ma
      </div>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
