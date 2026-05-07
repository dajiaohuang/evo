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

    svg.innerHTML = ''

    const root = d3.hierarchy(treeData as TreeNode)
    const treeLayout = d3.tree<TreeNode>().nodeSize([160, 26])
    treeLayout(root)

    const g = d3.select(svg).append('g')
      .attr('transform', 'translate(40, 20)')

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 3])
      .on('zoom', (event) => {
        g.attr('transform', `translate(${event.transform.x + 40}, ${event.transform.y + 20}) scale(${event.transform.k})`)
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
        const mx = (sx + tx) / 2
        return `M${sx},${sy} C${mx},${sy} ${mx},${ty} ${tx},${ty}`
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

        el.append('text')
          .attr('dy', -8)
          .attr('text-anchor', 'middle')
          .attr('fill', '#e6edf3')
          .attr('font-size', 10)
          .attr('font-family', 'var(--font-sans)')
          .text(d.data.commonName || d.data.name)

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
        zIndex: 10,
      }}>
        Tree of Life — {currentAge.toFixed(1)} Ma
      </div>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
