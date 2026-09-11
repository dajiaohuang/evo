import { useEffect, useEffectEvent, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { geoGraticule10, geoPath } from 'd3'
import type { MapViewState } from '../../types'
import type { FossilMarkerMode } from '../../store/mapSlice'
import type { RuntimePaleotopographyCollection, RuntimePaleotopographyFrame } from '../../data-client/types'
import { createMapProjection, normalizeMapView, panMapView, visiblePointProjector, type MapProjectionId } from '../../utils/mapProjection'
import { useI18n } from '../../i18n'
import { PaleotopographyLayer } from './PaleotopographyLayer'
import type { MapPoint, MapShape } from './mapScene'
import './ProjectedMap.css'
import { mapDisplayDetail } from '../../utils/mapDisplayDetail'

interface Props {
  projectionId: MapProjectionId
  view: MapViewState
  onViewChange: (view: MapViewState) => void
  onProjectionChange: (projection: MapProjectionId) => void
  panelsVisible: boolean
  onTogglePanels: () => void
  shapes: MapShape[]
  fossils: MapPoint[]
  observations: MapPoint[]
  markerMode: FossilMarkerMode
  onSelect: (point: MapPoint) => void
  terrain?: { collection: RuntimePaleotopographyCollection; frame: RuntimePaleotopographyFrame }
  onTerrainStatus: (status: 'loading' | 'ready' | 'error', error?: string) => void
}

interface ScreenPoint extends MapPoint { x: number; y: number }
interface ShapeHit { path: Path2D; shape: MapShape }
const graticule = geoGraticule10()
const projectionPath = () => Object.assign(new Path2D(), { beginPath() {} })

export function ProjectedMap({ projectionId, view, onViewChange, onProjectionChange, panelsVisible, onTogglePanels, shapes, fossils, observations, markerMode, onSelect, terrain, onTerrainStatus }: Props) {
  const { t, number } = useI18n()
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState({ width: 1, height: 1 })
  const [camera, setCamera] = useState(view)
  const cameraRef = useRef(view)
  const [interacting, setInteracting] = useState(false)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null)
  const frameRef = useRef<number | null>(null)
  const dragRef = useRef<{ id: number; x: number; y: number; distance: number } | null>(null)
  const hitsRef = useRef<{ points: ScreenPoint[]; shapes: ShapeHit[] }>({ points: [], shapes: [] })
  const paintCount = useRef(0)
  const latestInputTime = useRef(0)
  const projection = useMemo(() => createMapProjection(projectionId, camera, size), [projectionId, camera, size])
  const movingShapes = useMemo(() => shapes.map((shape) => ({ ...shape, geometry: mapDisplayDetail(shape.geometry, Math.ceil(camera.zoom)) })), [shapes, camera.zoom])

  const applyExternalView = useEffectEvent(() => {
    cameraRef.current = normalizeMapView(view, projectionId)
    setCamera(cameraRef.current)
  })
  useEffect(() => { applyExternalView() }, [view, projectionId])
  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height })
      }
    })
    observer.observe(host)
    return () => {
      observer.disconnect()
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      frameRef.current = null
      dragRef.current = null
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

  // Each camera frame projects geographic coordinates again. No bitmap/CSS pan.
  useLayoutEffect(() => {
    const started = performance.now()
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context || size.width < 2 || size.height < 2) return
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    const width = Math.round(size.width * pixelRatio); const height = Math.round(size.height * pixelRatio)
    if (canvas.width !== width) canvas.width = width
    if (canvas.height !== height) canvas.height = height
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    context.clearRect(0, 0, size.width, size.height)
    const path = geoPath(projection)
    const outline = projectionPath()
    path.context(outline)({ type: 'Sphere' })
    context.strokeStyle = '#48636d'
    context.lineWidth = 1
    context.stroke(outline)
    const grid = projectionPath()
    path.context(grid)(graticule)
    context.strokeStyle = '#35505a'
    context.globalAlpha = .45
    context.lineWidth = .5
    context.stroke(grid)
    const gridFinished = performance.now()
    const shapeHits: ShapeHit[] = []
    for (const shape of interacting ? movingShapes : shapes) {
      const outline = projectionPath()
      path.context(outline)(shape.geometry)
      if (shape.fill) {
        context.fillStyle = shape.fill
        context.globalAlpha = shape.fillOpacity ?? 1
        context.fill(outline)
      }
      if (shape.width > 0) {
        context.strokeStyle = shape.stroke
        context.lineWidth = shape.width
        context.globalAlpha = shape.opacity ?? 1
        context.setLineDash(shape.dash ?? [])
        context.stroke(outline)
      }
      if (shape.label) shapeHits.push({ path: outline, shape })
    }
    context.setLineDash([])
    const shapesFinished = performance.now()
    const projectPoint = visiblePointProjector(projection)
    const project = (points: MapPoint[]): ScreenPoint[] => points.flatMap((point) => {
      const pixel = projectPoint(point.position)
      return pixel ? [{ ...point, x: pixel[0], y: pixel[1] }] : []
    })
    const rawFossils = project(fossils)
    let displayedFossils = rawFossils
    if (markerMode !== 'points' && rawFossils.length > 20) {
      const gridSize = markerMode === 'density' ? 70 : 40
      const buckets = new Map<string, ScreenPoint[]>()
      for (const point of rawFossils) {
        if (point.radius === 7) continue // Preserve selected fossils above clusters.
        const key = `${Math.floor(point.x / gridSize)},${Math.floor(point.y / gridSize)}`
        const bucket = buckets.get(key)
        if (bucket) bucket.push(point)
        else buckets.set(key, [point])
      }
      displayedFossils = [...buckets.values()].map((points) => points.length === 1 ? points[0] : {
        position: points[0].position,
        x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
        y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
        radius: Math.min(markerMode === 'density' ? 28 : 20, 6 + Math.log2(points.length + 1) * 3),
        color: markerMode === 'density' ? '#f58a65' : '#ffd700',
        opacity: markerMode === 'density' ? .24 : .4,
        label: t('{count} sampled occurrences', { count: points.length }),
      }).concat(rawFossils.filter((point) => point.radius === 7))
    }
    const points = [...project(observations), ...displayedFossils]
    const pointsFinished = performance.now()
    for (const point of points) {
      context.beginPath()
      context.arc(point.x, point.y, point.radius, 0, 2 * Math.PI)
      context.fillStyle = point.color
      context.globalAlpha = point.opacity
      context.fill()
      context.strokeStyle = point.color
      context.globalAlpha = .9
      context.lineWidth = point.radius === 7 ? 2 : .7
      context.stroke()
    }
    context.globalAlpha = 1
    hitsRef.current = { points, shapes: shapeHits }
    canvas.dataset.renderCount = String(++paintCount.current)
    canvas.dataset.projection = projectionId
    canvas.dataset.center = camera.center.join(',')
    canvas.dataset.pointCount = String(points.length)
    canvas.dataset.renderMs = (performance.now() - started).toFixed(2)
    canvas.dataset.phases = [gridFinished - started, shapesFinished - gridFinished, pointsFinished - shapesFinished, performance.now() - pointsFinished].map((value) => value.toFixed(2)).join(',')
    canvas.dataset.inputLatencyMs = latestInputTime.current ? (performance.now() - latestInputTime.current).toFixed(2) : '0'
  }, [camera, size, projection, projectionId, shapes, movingShapes, interacting, fossils, observations, markerMode, t])

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
        return { label: shape.label! }
      }
    }
    context.restore()
    return null
  }

  function finishDrag() {
    if (!dragRef.current) return
    dragRef.current = null
    setInteracting(false)
    onViewChange(cameraRef.current)
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
        if (!event.isPrimary || event.button !== 0) return
        event.preventDefault()
        event.currentTarget.focus({ preventScroll: true })
        event.currentTarget.setPointerCapture(event.pointerId)
        dragRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, distance: 0 }
        setInteracting(true)
        setTooltip(null)
      }}
      onPointerMove={(event) => {
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
        }
      }}
      onPointerUp={(event) => {
        if (dragRef.current?.id !== event.pointerId) return
        if (dragRef.current.distance < 4) {
          const bounds = event.currentTarget.getBoundingClientRect()
          const point = hitAt(event.clientX - bounds.left, event.clientY - bounds.top)?.point
          if (point) onSelect(point)
        }
        finishDrag()
      }}
      onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
      onPointerLeave={() => { if (!dragRef.current) setTooltip(null) }}
      onWheel={(event) => {
        updateView({ ...cameraRef.current, zoom: cameraRef.current.zoom - Math.sign(event.deltaY) * .25 }, true)
        setTooltip(null)
      }}
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
      <small>{t('Drag the map to change its centre.')}</small>
    </div>
  </div>
}
