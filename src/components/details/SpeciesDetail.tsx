import { useAppStore } from '../../store'
import treeData from '../../../data/navigation/atlas-ontology.json'
import type { TreeNode } from '../../types'
import type { TreeEvidenceCatalog, TreeEvidenceRecord } from '../../types'
import treeEvidenceData from '../../../data/tree/evidence.json'
import references from '../../../data/references.json'
import { getSpatialPosition } from '../../utils/spatial'
import { useI18n } from '../../i18n'
import { getTaxonProfile } from '../../services/catalog'

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
  const { language, number, t } = useI18n()
  const selectedNodeId = useAppStore((s) => s.selectedNodeId)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const currentAge = useAppStore((s) => s.currentAge)
  const highlightedTaxonId = useAppStore((s) => s.highlightedTaxonId)
  const occurrencesByTaxon = useAppStore((s) => s.occurrencesByTaxon)
  const taxonOccurrenceStatus = useAppStore((s) => s.taxonOccurrenceStatus)
  const taxonOccurrenceErrors = useAppStore((s) => s.taxonOccurrenceErrors)
  const occurrencesByInterval = useAppStore((s) => s.occurrencesByInterval)
  const selectedOccurrence = useAppStore((s) => s.selectedOccurrence)
  const selectFossilOccurrence = useAppStore((s) => s.selectFossilOccurrence)
  const selectNode = useAppStore((s) => s.selectNode)
  const setTime = useAppStore((s) => s.setTime)

  const node = selectedNodeId ? findNode([treeData as TreeNode], selectedNodeId) : null
  const evidenceCatalog = treeEvidenceData as TreeEvidenceCatalog
  const nodeEvidence: TreeEvidenceRecord | null = node ? {
    ...evidenceCatalog.default,
    ...evidenceCatalog.nodes[node.id],
  } : null
  const taxonOccurrences = highlightedTaxonId ? occurrencesByTaxon[highlightedTaxonId] ?? [] : []
  const periodCache = currentPeriod ? (occurrencesByInterval[currentPeriod] ?? null) : null
  const periodFossils = periodCache ?? []
  const taxonQueryKey = highlightedTaxonId ? `descendants:${highlightedTaxonId}` : ''
  const taxonStatus = taxonQueryKey ? taxonOccurrenceStatus[taxonQueryKey] ?? 'idle' : 'idle'
  const taxonError = taxonQueryKey ? taxonOccurrenceErrors[taxonQueryKey] : null

  if (selectedOccurrence) {
    const paleoPosition = getSpatialPosition(selectedOccurrence, 'paleo')
    const modernPosition = getSpatialPosition(selectedOccurrence, 'modern')
    return (
      <div style={{ padding: 16 }}>
        <button
          onClick={() => selectFossilOccurrence(null)}
          style={{
            background: 'none', border: 'none', color: 'var(--color-accent)',
            cursor: 'pointer', fontSize: 12, marginBottom: 8, padding: 0,
          }}
        >
          ← {t('Back')}
        </button>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-accent)', marginBottom: 4 }}>
          {selectedOccurrence.tna || selectedOccurrence.idn || t('Unresolved identification')}
        </h3>
        {selectedOccurrence.idn && (
          <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 12 }}>
            {selectedOccurrence.idn}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
          <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>{t('Identification')}</div>
            <div><strong>{selectedOccurrence.tna || t('Accepted name unresolved')}</strong></div>
            <div style={{ marginTop: 3, color: 'var(--color-text-muted)', fontSize: 10 }}>{t('Original: {name} · rank code {rank}', { name: selectedOccurrence.idn || t('not retained'), rank: selectedOccurrence.rnk ?? t('Unknown') })}</div>
          </div>
          <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>{t('Age Range')}</div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>
              {selectedOccurrence.eag?.toFixed(1)} – {selectedOccurrence.lag?.toFixed(1)} Ma
            </div>
            <div style={{ marginTop: 3, color: 'var(--color-text-muted)', fontSize: 10 }}>{t('Displayed midpoint: {age} Ma', { age: ((selectedOccurrence.eag + selectedOccurrence.lag) / 2).toFixed(1) })}</div>
          </div>
          {paleoPosition.mode === 'paleo' && (
            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)' }}>{t('Reconstructed Coordinates')}</div>
              <div style={{ fontFamily: 'var(--font-mono)' }}>{paleoPosition.lat.toFixed(2)}°, {paleoPosition.lng.toFixed(2)}°</div>
              <div style={{ marginTop: 3, color: 'var(--color-text-muted)', fontSize: 10 }}>{t('Model: {model} · reconstruction age {age} Ma.', { model: paleoPosition.modelId, age: paleoPosition.reconstructionAgeMa.toFixed(2) })}</div>
            </div>
          )}
          {modernPosition.mode === 'modern' && <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>{t('Modern Coordinates')}</div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>
              {modernPosition.lat.toFixed(2)}°, {modernPosition.lng.toFixed(2)}°
            </div>
            {modernPosition.coordinatePrecision && <div style={{ marginTop: 3, color: 'var(--color-text-muted)', fontSize: 10 }}>{t('Precision: {precision}', { precision: modernPosition.coordinatePrecision })}</div>}
          </div>}
          {selectedOccurrence.cc2 && (
            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)' }}>{t('Country')}</div>
              <div>{selectedOccurrence.cc2}</div>
            </div>
          )}
          <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
            <div style={{ color: 'var(--color-text-muted)' }}>{t('Collection ID')}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>{selectedOccurrence.cid}</div>
          </div>
          {selectedOccurrence.tid && (
            <button
              onClick={() => {
                const taxonId = selectedOccurrence.tid
                if (!taxonId) return
                const treeNode = findNodeByTaxon([treeData as TreeNode], taxonId)
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
              {t('View on Tree →')}
            </button>
          )}
          <div className="occurrence-quality-card">
            <div>{t('Quality flags')}</div>
            <span className={selectedOccurrence.eag - selectedOccurrence.lag > 10 ? 'is-warning' : ''}>{t(selectedOccurrence.eag - selectedOccurrence.lag > 10 ? 'Broad age range >10 Ma' : 'Age range ≤10 Ma')}</span>
            <span className={selectedOccurrence.paleolat == null || selectedOccurrence.paleolng == null ? 'is-warning' : ''}>{t(selectedOccurrence.paleolat == null || selectedOccurrence.paleolng == null ? 'No reconstructed coordinate' : 'Reconstructed coordinate present')}</span>
            <span className={!selectedOccurrence.tna ? 'is-warning' : ''}>{t(selectedOccurrence.tna ? 'Accepted name present' : 'Accepted name unresolved; original retained')}</span>
            <a href={`https://paleobiodb.org/classic/displayCollResults?collection_no=${selectedOccurrence.cid.replace('col:', '')}`} target="_blank" rel="noreferrer">{t('Open PBDB collection ↗')}</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--color-text)' }}>
        {t('Species Detail')}
      </div>

      {node ? (
        <>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2, color: 'var(--color-accent)' }}>
            {language === 'zh' ? (getTaxonProfile(node.id)?.commonNameZh ?? t(node.commonName || node.name)) : (node.commonName || node.name)}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 12 }}>
            {node.name}{node.rank ? ` · ${t(node.rank)}` : ''}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: 2 }}>{t('Temporal Range')}</div>
              <div style={{ fontFamily: 'var(--font-mono)' }}>
                {node.firstAppearance.toFixed(1)} – {node.lastAppearance === 0 ? t('Present') : node.lastAppearance.toFixed(1)} Ma
              </div>
              <div style={{ marginTop: 6, height: 6, background: 'var(--color-border)', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  background: 'var(--color-accent)', opacity: 0.6,
                  width: `${Math.max(2, ((node.firstAppearance - node.lastAppearance) / 4567) * 100)}%`,
                }} />
              </div>
            </div>

            <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: 2 }}>{t('Status')}</div>
              <div style={{ color: node.extinct ? 'var(--color-danger)' : 'var(--color-success)', fontWeight: 600 }}>
                {t(node.extinct ? 'Extinct †' : 'Extant')}
              </div>
            </div>

            {node.taxonId && (
              <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
                <div style={{ color: 'var(--color-text-muted)', marginBottom: 2 }}>{t('PBDB Taxon ID')}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{node.taxonId}</div>
              </div>
            )}

            {nodeEvidence && (
              <div className="tree-evidence-card">
                <div><span>{t('Tree evidence')}</span><strong>{t(nodeEvidence.support)}</strong></div>
                {nodeEvidence.groupingBasis && <p>{t(nodeEvidence.groupingBasis)}</p>}
                {nodeEvidence.rangeBasis && <p>{t(nodeEvidence.rangeBasis)}</p>}
                <p className="tree-evidence-conflict"><b>{t('Uncertainty')}</b> {t(nodeEvidence.conflicts)}</p>
                <small>{t(evidenceCatalog.navigationModel)}</small>
                <div className="tree-evidence-links">
                  {nodeEvidence.references.map((referenceId) => {
                    const reference = references.find((item) => item.id === referenceId)
                    return reference ? <a key={referenceId} href={reference.url} target="_blank" rel="noreferrer">{reference.title} ↗</a> : null
                  })}
                </div>
              </div>
            )}

            {node.taxonId && (
              <div style={{ padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6 }}>
                <div style={{ color: 'var(--color-text-muted)', marginBottom: 4 }}>
                  {t('Fossil Records ({count})', { count: number(taxonOccurrences.length) })}
                </div>
                {taxonStatus === 'loading' || taxonStatus === 'idle' ? (
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 11 }}>{t('Loading represented descendants…')}</div>
                ) : taxonStatus === 'error' ? (
                  <div style={{ color: 'var(--color-danger)', fontSize: 11 }}>{t('Query failed: {error}', { error: taxonError ?? t('Unknown') })}</div>
                ) : taxonStatus === 'empty' ? (
                  <div style={{ color: 'var(--color-text-muted)', fontSize: 11 }}>{t('No matching row in the bounded local sample.')}</div>
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
                        {occ.cc2 ?? t('Unknown')}
                      </button>
                    ))}
                    {taxonOccurrences.length > 30 && <small style={{ color: 'var(--color-text-muted)' }}>{t('Showing 30 of {count} matched rows.', { count: number(taxonOccurrences.length) })}</small>}
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--color-text-muted)', marginBottom: 16 }}>
            {t('Click a node in the evolutionary tree or a fossil marker on the map to view details.')}
          </p>

          <div style={{ marginTop: 8, padding: 10, background: 'var(--color-surface-alt)', borderRadius: 6, fontSize: 11 }}>
            <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--color-text)' }}>{t('Current Time')}</div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>{currentAge.toFixed(1)} Ma</div>
            <div style={{ color: 'var(--color-text-muted)', marginTop: 2 }}>{t(currentPeriod ?? 'Unknown')}</div>
          </div>

          {periodFossils.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: 'var(--color-text)' }}>
                {t('{period} Fossils ({count})', { period: t(currentPeriod ?? 'Unknown'), count: periodCache?.length != null ? number(periodCache.length) : '?' })}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 300, overflowY: 'auto' }}>
                {periodFossils.slice(0, 50).map((occ) => (
                  <button
                    key={occ.oid}
                    onClick={() => {
                      selectFossilOccurrence(occ)
                      setTime((occ.eag + occ.lag) / 2)
                    }}
                    style={{
                      background: '#21262d', border: '1px solid #30363d',
                      color: '#e6edf3', cursor: 'pointer', fontSize: 11,
                      padding: '4px 8px', borderRadius: 4, textAlign: 'left',
                      display: 'flex', justifyContent: 'space-between',
                    }}
                  >
                    <span>{occ.tna || occ.idn || t('Unresolved identification')}</span>
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
