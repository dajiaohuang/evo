import { Activity, lazy, Suspense, useState } from 'react'
import manifest from '../../../data/manifest.json'
import { useI18n } from '../../i18n'
import { useAppStore } from '../../store'
import { getTaxonProfile } from '../../services/catalogProfiles'
import { buildRouteHash } from '../../utils/routing'
import type { TreeDisplayMode } from '../../types'
import { ErrorBoundary } from '../common/ErrorBoundary'
import { navigationTree, resolveTreeNodeId, treePath } from './navigationTree'
import './LocalTreePanel.css'

const EvoTree = lazy(() => import('./EvoTree').then(module => ({ default: module.EvoTree })))

export type OpenFullTree = (nodeId: string, mode: TreeDisplayMode) => void

export function LocalTreePanel({ nodeId, onOpenFullTree }: { nodeId: string; onOpenFullTree?: OpenFullTree }) {
  const anchorId = resolveTreeNodeId(getTaxonProfile(nodeId)?.treeNodeId ?? nodeId)
  if (!anchorId) return null
  return <LocalTree key={anchorId} anchorId={anchorId} onOpenFullTree={onOpenFullTree} />
}

function LocalTree({ anchorId, onOpenFullTree }: { anchorId: string; onOpenFullTree?: OpenFullTree }) {
  const { language } = useI18n()
  const zh = language === 'zh'
  const [mode, setMode] = useState<TreeDisplayMode>('navigation')
  const [selectedId, setSelectedId] = useState(anchorId)
  const [open, setOpen] = useState(false)
  const [visited, setVisited] = useState(false)
  const selected = treePath(navigationTree, selectedId)?.at(-1)
  const label = selected ? zh ? getTaxonProfile(selected.id)?.commonNameZh ?? selected.commonNameZh ?? selected.name : selected.commonName ?? selected.name : selectedId
  const openFullTree = () => {
    if (onOpenFullTree) { onOpenFullTree(selectedId, mode); return }
    const state = useAppStore.getState()
    window.location.hash = buildRouteHash('home', {
      view: 'tree', taxon: selectedId, focus: selectedId, treeMode: mode,
      age: state.currentAge, dataset: manifest.datasetVersion,
      lat: state.viewState.center[0], lng: state.viewState.center[1], zoom: state.viewState.zoom,
      projection: state.mapProjection, markers: state.markerMode, coords: state.coordinateMode,
    })
  }
  return <details className="local-tree-panel" onToggle={event => {
    const expanded = event.currentTarget.open
    setOpen(expanded)
    if (expanded) setVisited(true)
  }}>
    <summary>{zh ? '在生命树中的位置' : 'Position in the tree of life'}</summary>
    {visited && <Activity mode={open ? 'visible' : 'hidden'}>
      <div className="local-tree-panel__actions">
        <strong>{label}</strong>
        <button type="button" onClick={openFullTree}>{zh ? '在完整树中定位' : 'Locate in the full tree'} ↗</button>
      </div>
      <p className="local-tree-panel__hint">{zh ? '拖动、缩放，点选枝条；方向键浏览，左右键展开或收起。' : 'Drag, zoom and select branches. Arrow keys browse; left and right fold or unfold.'}</p>
      <div className="local-tree-panel__canvas">
        <ErrorBoundary fallback={<p>{zh ? '局部树暂不可用' : 'Local tree unavailable'}</p>}>
          <Suspense fallback={<p role="status">{zh ? '正在展开枝条…' : 'Opening branches…'}</p>}>
            <EvoTree scopeNodeId={anchorId} selectionId={selectedId} onSelectNode={setSelectedId} displayMode={mode} onModeChange={nextMode => {
              setMode(nextMode)
              setSelectedId(anchorId)
            }} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Activity>}
  </details>
}
