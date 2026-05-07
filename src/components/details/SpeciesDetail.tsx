import { useAppStore } from '../../store'
import treeData from '../../../data/tree/life-cladogram.json'
import type { TreeNode } from '../../types'

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

export function SpeciesDetail() {
  const selectedNodeId = useAppStore((s) => s.selectedNodeId)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const currentAge = useAppStore((s) => s.currentAge)
  const highlightedTaxonId = useAppStore((s) => s.highlightedTaxonId)
  const occurrencesByTaxon = useAppStore((s) => s.occurrencesByTaxon)
  const occurrencesByInterval = useAppStore((s) => s.occurrencesByInterval)
  const selectedOccurrence = useAppStore((s) => s.selectedOccurrence)
  const selectFossilOccurrence = useAppStore((s) => s.selectFossilOccurrence)
  const selectNode = useAppStore((s) => s.selectNode)
  const setTime = useAppStore((s) => s.setTime)

  const node = selectedNodeId ? findNode([treeData as TreeNode], selectedNodeId) : null
  const taxonOccurrences = highlightedTaxonId ? occurrencesByTaxon[highlightedTaxonId] ?? [] : []
  const periodCache = currentPeriod ? (occurrencesByInterval[currentPeriod] ?? null) : null
  const periodFossils = periodCache?.slice(0, 100) ?? []

  if (selectedOccurrence) {
    return (
      <div style={{ padding: 16 }}>
        <button
          onClick={() => selectFossilOccurrence(null)}
          style={{
            background: 'none', border: 'none', color: 'var(--color-accent)',
            cursor: 'pointer', fontSize: 12, marginBottom: 8, padding: 0,
          }}
        >
          ← Back
        </button>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-accent)', marginBottom: 4 }}>
          {selectedOccurrence.tna}
        </h3>
        {selectedOccurrence.idn && (
          <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 12 }}>
            {selectedOccurrence.idn}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
          <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>Age Range</div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>
              {selectedOccurrence.eag?.toFixed(1)} – {selectedOccurrence.lag?.toFixed(1)} Ma
            </div>
          </div>
          <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>Modern Coordinates</div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>
              {parseFloat(selectedOccurrence.lat).toFixed(2)}°, {parseFloat(selectedOccurrence.lng).toFixed(2)}°
            </div>
          </div>
          {selectedOccurrence.cc2 && (
            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)' }}>Country</div>
              <div>{selectedOccurrence.cc2}</div>
            </div>
          )}
          <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>Collection ID</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>{selectedOccurrence.cid}</div>
          </div>
          {selectedOccurrence.tid && (
            <button
              onClick={() => {
                const treeNode = findNodeByTaxon([treeData as TreeNode], selectedOccurrence.tid)
                if (treeNode) {
                  selectNode(treeNode.id)
                  selectFossilOccurrence(null)
                }
              }}
              style={{
                background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)',
                color: 'var(--color-accent)', cursor: 'pointer', fontSize: 12,
                padding: '8px 12px', borderRadius: 6, textAlign: 'left',
              }}
            >
              View on Tree →
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--color-text)' }}>
        Species Detail
      </div>

      {node ? (
        <>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2, color: 'var(--color-accent)' }}>
            {node.commonName || node.name}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 12 }}>
            {node.name}{node.rank ? ` · ${node.rank}` : ''}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: 2 }}>Temporal Range</div>
              <div style={{ fontFamily: 'var(--font-mono)' }}>
                {node.firstAppearance.toFixed(1)} – {node.lastAppearance === 0 ? 'Present' : node.lastAppearance.toFixed(1)} Ma
              </div>
              <div style={{ marginTop: 6, height: 6, background: 'var(--color-border)', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  background: 'var(--color-accent)', opacity: 0.6,
                  width: `${Math.max(2, ((node.firstAppearance - node.lastAppearance) / 540) * 100)}%`,
                }} />
              </div>
            </div>

            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: 2 }}>Status</div>
              <div style={{ color: node.extinct ? 'var(--color-danger)' : 'var(--color-success)', fontWeight: 600 }}>
                {node.extinct ? 'Extinct †' : 'Extant'}
              </div>
            </div>

            {node.taxonId && (
              <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
                <div style={{ color: 'var(--color-text-muted)', marginBottom: 2 }}>PBDB Taxon ID</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{node.taxonId}</div>
              </div>
            )}

            {node.taxonId && (
              <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
                <div style={{ color: 'var(--color-text-muted)', marginBottom: 4 }}>
                  Fossil Records ({taxonOccurrences.length})
                </div>
                {taxonOccurrences.length === 0 ? (
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 11 }}>Loading...</div>
                ) : (
                  <div style={{ maxHeight: 200, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {taxonOccurrences.slice(0, 30).map((occ) => (
                      <button
                        key={occ.oid}
                        onClick={() => selectFossilOccurrence(occ)}
                        style={{
                          background: '#21262d', border: '1px solid #30363d',
                          color: '#e6edf3', cursor: 'pointer', fontSize: 11,
                          padding: '4px 8px', borderRadius: 4, textAlign: 'left',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)' }}>
                          {occ.eag?.toFixed(0)} Ma
                        </span>
                        {' — '}
                        {occ.cc2 ?? 'Unknown'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--color-text-muted)', marginBottom: 16 }}>
            Click a node in the evolutionary tree or a fossil marker on the map to view details.
          </p>

          <div style={{ marginTop: 8, padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6, fontSize: 11 }}>
            <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--color-text)' }}>Current Time</div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>{currentAge.toFixed(1)} Ma</div>
            <div style={{ color: 'var(--color-text-muted)', marginTop: 2 }}>{currentPeriod ?? 'Unknown'}</div>
          </div>

          {periodFossils.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: 'var(--color-text)' }}>
                {currentPeriod} Fossils ({periodCache?.length?.toLocaleString() ?? '?'})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 300, overflowY: 'auto' }}>
                {periodFossils.slice(0, 50).map((occ) => (
                  <button
                    key={occ.oid}
                    onClick={() => {
                      selectFossilOccurrence(occ)
                      if (occ.paleolat && occ.paleolng) {
                        setTime((occ.eag + occ.lag) / 2)
                      }
                    }}
                    style={{
                      background: '#21262d', border: '1px solid #30363d',
                      color: '#e6edf3', cursor: 'pointer', fontSize: 11,
                      padding: '4px 8px', borderRadius: 4, textAlign: 'left',
                      display: 'flex', justifyContent: 'space-between',
                    }}
                  >
                    <span>{occ.tna}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', fontSize: 10 }}>
                      {occ.eag?.toFixed(0)} Ma
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function findNodeByTaxon(nodes: TreeNode[], taxonId: string): TreeNode | null {
  for (const node of nodes) {
    if (node.taxonId === taxonId) return node
    if (node.children) {
      const found = findNodeByTaxon(node.children, taxonId)
      if (found) return found
    }
  }
  return null
}
