import { useEffect, useEffectEvent, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { MapViewState } from '../../types'
import type { FossilMarkerMode } from '../../store/mapSlice'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'
import { createMapProjection, normalizeMapView, panMapView, zoomMapView, type MapProjectionId } from '../../utils/mapProjection'
import { useI18n } from '../../i18n'
import { PaleotopographyLayer } from './PaleotopographyLayer'
import type { MapPoint, MapShape } from './mapScene'
import './ProjectedMap.css'
import { paintMapGeometry } from '../../utils/mapVectorRendering'
import { paintMapPoints, type ScreenPoint } from '../../utils/mapCanvasPoints'
import { useMapVectorWorker } from '../../hooks/useMapVectorWorker'

interface Props {
  timeInteracting?: boolean
  projectionId: MapProjectionId
  view: MapViewState
  onViewChange: (view: MapViewState) => void
  onProjectionChange: (projection: MapProjectionId) => void
  panelsVisible: boolean
  onTogglePanels: () => void
  shapes: MapShape[]
  fossils: MapPoint[]
  observations: MapPoint[]
  nodePoints?: MapPoint[]
  markerMode: FossilMarkerMode
  onSelect: (point: MapPoint) => void
  terrain?: { collection: RuntimePaleotopographyCollection; frame: RuntimePaleotopographyFrame }
  onTerrainStatus: (status: 'loading' | 'ready' | 'error', error?: string) => void
}

interface ShapeHit { path: Path2D; shape: MapShape }

const NO_NODE_POINTS: MapPoint[] = []

export function ProjectedMap({ timeInteracting = false, projectionId, view, onViewChange, onProjectionChange, panelsVisible, onTogglePanels, shapes, fossils, observations, nodePoints = NO_NODE_POINTS, markerMode, onSelect, terrain, onTerrainStatus }: Props) {
  const { t, number, language } = useI18n()
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState({ width: 1, height: 1 })
  const [camera, setCamera] = useState(view)
  const cameraRef = useRef(view)
  const [interacting, setInteracting] = useState(false)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null)
  const frameRef = useRef<number | null>(null)
  const dragRef = useRef<{ id: number; x: number; y: number; distance: number } | null>(null)
  const pointersRef = useRef(new Map<number, { x: number; y: number }>())
  const pinchRef = useRef<{ x: number; y: number; distance: number } | null>(null)
  const pinchedRef = useRef(false)
  const hitsRef = useRef<{ points: ScreenPoint[]; shapes: ShapeHit[] }>({ points: [], shapes: [] })
  const paintCount = useRef(0)
  const latestInputTime = useRef(0)
  const wheelEndRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const projection = useMemo(() => createMapProjection(projectionId, camera, size), [projectionId, camera, size])
  const displayedShapes = useRef(shapes)
  const hoverSequence = useRef(0)
  const vectorWorker = useMapVectorWorker(!terrain && !fossils.length, (frame, snapshot) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) { frame.bitmap.close(); return }
    const started = performance.now()
    if (canvas.width !== frame.bitmap.width) canvas.width = frame.bitmap.width
    if (canvas.height !== frame.bitmap.height) canvas.height = frame.bitmap.height
    context.resetTransform()
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(frame.bitmap, 0, 0); frame.bitmap.close()
    context.setTransform(snapshot.ratio, 0, 0, snapshot.ratio, 0, 0)
    const projection = createMapProjection(snapshot.projectionId, snapshot.camera, snapshot.size)
    const points = paintMapPoints(context, projection, NO_NODE_POINTS, snapshot.observations, snapshot.nodePoints, markerMode,
      count => t('{count} sampled occurrences', { count }))
    hitsRef.current = { points, shapes: [] }
    displayedShapes.current = snapshot.shapes
    const elapsed = performance.now() - started
    recordFrame(canvas, snapshot.camera, snapshot.projectionId, points.length, snapshot.nodePoints.length, elapsed,
      [0, 0, elapsed, 0], snapshot.inputTime)
    canvas.dataset.workerMs = frame.renderMs.toFixed(2)
    canvas.dataset.geometryMs = frame.geometryMs.toFixed(2)
    canvas.dataset.drawingMs = frame.drawingMs.toFixed(2)
    canvas.dataset.renderer = 'worker'
    canvas.dataset.renderQuality = snapshot.preview ? 'preview' : 'full'
  })

  const applyExternalView = useEffectEvent(() => {
    const next = normalizeMapView(view, projectionId)
    if (next.zoom === cameraRef.current.zoom && next.center.every((value, i) => value === cameraRef.current.center[i])) return
    cameraRef.current = next
    setCamera(cameraRef.current)
  })
  useEffect(() => { applyExternalView() }, [view, projectionId])
  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const pointers = pointersRef.current
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height })
      }
    })
    observer.observe(host)
    return () => {
      observer.disconnect()
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      if (wheelEndRef.current !== null) clearTimeout(wheelEndRef.current)
      frameRef.current = null
      dragRef.current = null
      pointers.clear()
      pinchRef.current = null
    }
  }, [])

  function updateView(next: MapViewState, commit = false) {
    cameraRef.current = normalizeMapView(next, projectionId)
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      setCamera(cameraRef.current)
    })
    if (commit) onViewChange(cameraRef.current)
  }

  const handleWheel = useEffectEvent((event: WheelEvent) => {
    event.preventDefault()
    const bounds = canvasRef.current!.getBoundingClientRect()
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? size.height : 1
    const delta = Math.max(-240, Math.min(240, event.deltaY * unit))
    latestInputTime.current = performance.now()
    updateView(zoomMapView(cameraRef.current, projectionId, size,
      cameraRef.current.zoom - delta * (event.ctrlKey ? .01 : .002),
      [event.clientX - bounds.left, event.clientY - bounds.top]))
    setInteracting(true)
    if (wheelEndRef.current !== null) clearTimeout(wheelEndRef.current)
    wheelEndRef.current = setTimeout(() => {
      wheelEndRef.current = null
      if (!pointersRef.current.size) setInteracting(false)
      onViewChange(cameraRef.current)
    }, 140)
    setTooltip(null)
  })
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const wheel = (event: WheelEvent) => handleWheel(event)
    // Trackpad pinch arrives as ctrl+wheel. React's passive wheel listener
    // cannot prevent the browser from zooming the entire page.
    canvas.addEventListener('wheel', wheel, { passive: false })
    return () => canvas.removeEventListener('wheel', wheel)
  }, [])

  function recordFrame(canvas: HTMLCanvasElement, camera: MapViewState, projectionId: MapProjectionId,
    pointCount: number, nodeCount: number, elapsed: number, phases: number[], inputTime: number) {
    canvas.dataset.renderCount = String(++paintCount.current)
    canvas.dataset.projection = projectionId
    canvas.dataset.center = camera.center.join(',')
    canvas.dataset.zoom = String(camera.zoom)
    canvas.dataset.pointCount = String(pointCount)
    canvas.dataset.nodePointCount = String(nodeCount)
    canvas.dataset.renderMs = elapsed.toFixed(2)
    canvas.dataset.phases = phases.map(value => value.toFixed(2)).join(',')
    canvas.dataset.inputLatencyMs = inputTime ? (performance.now() - inputTime).toFixed(2) : '0'
  }

  // Geographic coordinates are reprojected for each camera; no stretched bitmap pan.
  const submitWorker = useEffectEvent(() => vectorWorker.render({ camera, projectionId, size,
    ratio: Math.min(window.devicePixelRatio || 1, 2), preview: interacting || timeInteracting,
    shapes, observations, nodePoints, inputTime: latestInputTime.current }))
  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || size.width < 2 || size.height < 2) return
    canvas.dataset.requestedCenter = camera.center.join(',')
    canvas.dataset.requestedZoom = String(camera.zoom)
    if (vectorWorker.active) { submitWorker(); return }
    const context = canvas.getContext('2d')
    if (!context) return
    const started = performance.now()
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    const geometry = paintMapGeometry(context, shapes, projection, size, ratio,
      interacting || timeInteracting ? Math.ceil(camera.zoom) : null, Boolean(terrain))
    const pointStart = performance.now()
    const points = paintMapPoints(context, projection, fossils, observations, nodePoints, markerMode,
      count => t('{count} sampled occurrences', { count }))
    hitsRef.current = { points, shapes: geometry.hits.map(hit => ({ path: hit.path, shape: shapes[hit.index] })) }
    recordFrame(canvas, camera, projectionId, points.length, nodePoints.length, performance.now() - started,
      [geometry.gridMs, geometry.shapeMs, performance.now() - pointStart, 0], latestInputTime.current)
    canvas.dataset.geometryMs = geometry.geometryMs.toFixed(2)
    canvas.dataset.drawingMs = geometry.drawingMs.toFixed(2)
    canvas.dataset.renderer = 'main'
    canvas.dataset.renderQuality = interacting || timeInteracting ? 'preview' : 'full'
  }, [camera, size, projection, projectionId, shapes, interacting, timeInteracting, fossils, observations, nodePoints, markerMode, terrain, t, vectorWorker.active])

  function hitAt(x: number, y: number): { point?: MapPoint; label: string } | null {
    for (const point of [...hitsRef.current.points].reverse()) {
      if (Math.hypot(point.x - x, point.y - y) <= Math.max(8, point.radius)) return { point, label: point.label }
    }
    const context = canvasRef.current?.getContext('2d')
    if (!context) return null
    context.save()
    context.resetTransform()
    for (const { path, shape } of [...hitsRef.current.shapes].reverse()) {
      context.lineWidth = Math.max(shape.width, 6)
      if (context.isPointInStroke(path, x, y) || (shape.fill && context.isPointInPath(path, x, y))) {
        context.restore()
        return { label: shape.label!, point: shape.point }
      }
    }
    context.restore()
    return null
  }

  function pinch() {
    const [a, b] = [...pointersRef.current.values()]
    return a && b ? { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, distance: Math.hypot(a.x - b.x, a.y - b.y) } : null
  }

  function finishPointer(id: number) {
    if (!pointersRef.current.delete(id)) return
    pinchRef.current = pinch()
    const remaining = [...pointersRef.current.entries()][0]
    dragRef.current = remaining ? { id: remaining[0], ...remaining[1], distance: 4 } : null
    if (!remaining) {
      setInteracting(false)
      onViewChange(cameraRef.current)
    }
  }

  return <div className="projected-map">
    <div className="projected-map__viewport" ref={hostRef}>
    {terrain && <PaleotopographyLayer
      collection={terrain.collection} frame={terrain.frame} projectionId={projectionId}
      camera={camera} viewport={size} interacting={interacting} onStatus={onTerrainStatus}
    />}
    <canvas
      ref={canvasRef} className="projected-map__vectors" tabIndex={0} role="application"
      aria-label={t('Interactive map: drag to change the view centre; arrow keys pan, plus/minus zoom, Home resets.')}
      onPointerDown={(event) => {
        if (event.button !== 0 || (event.pointerType !== 'touch' && !event.isPrimary)) return
        event.preventDefault()
        event.currentTarget.focus({ preventScroll: true })
        event.currentTarget.setPointerCapture(event.pointerId)
        if (!pointersRef.current.size) pinchedRef.current = false
        pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
        pinchRef.current = pinch()
        if (pinchRef.current) { pinchedRef.current = true; dragRef.current = null }
        else dragRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, distance: 0 }
        setInteracting(true)
        hoverSequence.current++
        setTooltip(null)
      }}
      onPointerMove={(event) => {
        if (pointersRef.current.has(event.pointerId)) {
          pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
          const previous = pinchRef.current
          const current = pinch()
          if (previous && current) {
            latestInputTime.current = performance.now()
            const bounds = event.currentTarget.getBoundingClientRect()
            const zoom = cameraRef.current.zoom + Math.log2(Math.max(1, current.distance) / Math.max(1, previous.distance))
            const scaled = zoomMapView(cameraRef.current, projectionId, size, zoom, [previous.x - bounds.left, previous.y - bounds.top])
            updateView(panMapView(scaled, projectionId, size, current.x - previous.x, current.y - previous.y))
            pinchRef.current = current
            return
          }
        }
        const drag = dragRef.current
        if (drag && drag.id === event.pointerId) {
          latestInputTime.current = performance.now()
          const dx = event.clientX - drag.x
          const dy = event.clientY - drag.y
          drag.distance += Math.hypot(dx, dy)
          drag.x = event.clientX; drag.y = event.clientY
          updateView(panMapView(cameraRef.current, projectionId, size, dx, dy))
        } else {
          const bounds = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - bounds.left; const y = event.clientY - bounds.top
          const hit = hitAt(x, y)
          setTooltip(hit ? { x, y, label: hit.label } : null)
          const sequence = ++hoverSequence.current
          if (!hit && vectorWorker.active) void vectorWorker.hit(x, y).then(index => {
            if (sequence !== hoverSequence.current || pointersRef.current.size) return
            const shape = index === null ? null : displayedShapes.current[index]
            setTooltip(shape?.label ? { x, y, label: shape.label } : null)
          })
        }
      }}
      onPointerUp={(event) => {
        if (!pointersRef.current.has(event.pointerId)) return
        if (!pinchedRef.current && dragRef.current?.id === event.pointerId && dragRef.current.distance < 4) {
          const bounds = event.currentTarget.getBoundingClientRect()
          const point = hitAt(event.clientX - bounds.left, event.clientY - bounds.top)?.point
          if (point) onSelect(point)
          else if (vectorWorker.active) {
            const scene = displayedShapes.current
            void vectorWorker.hit(event.clientX - bounds.left, event.clientY - bounds.top).then(index => {
              if (scene !== displayedShapes.current) return
              const point = index === null ? null : scene[index]?.point
              if (point) onSelect(point)
            })
          }
        }
        finishPointer(event.pointerId)
      }}
      onPointerCancel={(event) => finishPointer(event.pointerId)} onLostPointerCapture={(event) => finishPointer(event.pointerId)}
      onPointerLeave={() => { if (!pointersRef.current.size) { hoverSequence.current++; setTooltip(null) } }}
      onKeyDown={(event) => {
        const moves: Record<string, [number, number]> = { ArrowLeft: [40, 0], ArrowRight: [-40, 0], ArrowUp: [0, 40], ArrowDown: [0, -40] }
        if (moves[event.key]) updateView(panMapView(cameraRef.current, projectionId, size, ...moves[event.key]), true)
        else if (event.key === '+' || event.key === '=') updateView({ ...cameraRef.current, zoom: cameraRef.current.zoom + .5 }, true)
        else if (event.key === '-') updateView({ ...cameraRef.current, zoom: cameraRef.current.zoom - .5 }, true)
        else if (event.key === 'Home') updateView({ center: [0, 0], zoom: 2 }, true)
        else return
        event.preventDefault()
        setTooltip(null)
      }}
    />
    {tooltip && <div role="tooltip" className="projected-map__tooltip" style={{ left: Math.min(tooltip.x + 12, Math.max(8, size.width - 240)), top: Math.max(8, tooltip.y - 40) }}>{tooltip.label}</div>}
    </div>
    <details className="map-controls-window">
    <summary>{t('Map projection')} · + / −</summary>
    <div className="projected-map__controls">
      <label>{t('Projection')}<select aria-label={t('Map projection')} value={projectionId} onChange={(event) => onProjectionChange(event.target.value as MapProjectionId)}>
        <option value="mercator">{t('Mercator')}</option><option value="equal-earth">{t('Equal Earth (equal-area)')}</option>
      </select></label>
      <div className="projected-map__zoom">
        <button type="button" aria-label={t('Zoom in')} disabled={camera.zoom >= 6} onClick={() => updateView({ ...cameraRef.current, zoom: cameraRef.current.zoom + .5 }, true)}>+</button>
        <button type="button" aria-label={t('Zoom out')} disabled={camera.zoom <= 1} onClick={() => updateView({ ...cameraRef.current, zoom: cameraRef.current.zoom - .5 }, true)}>−</button>
        <button type="button" onClick={() => updateView({ center: [0, 0], zoom: 2 }, true)}>{t('Reset view')}</button>
        <button type="button" aria-pressed={panelsVisible} onClick={onTogglePanels}>{t(panelsVisible ? 'Hide map panels' : 'Show map panels')}</button>
      </div>
      <output data-testid="map-view-centre">{t('View centre')}: {number(Number(camera.center[0].toFixed(2)))}°, {number(Number(camera.center[1].toFixed(2)))}°</output>
      <small>{language === 'zh' ? '单指拖动 · 双指或触摸板捏合缩放' : 'Drag to pan · pinch with two fingers or a trackpad to zoom'}</small>
    </div>
    </details>
  </div>
}
