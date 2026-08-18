import { useRef, useCallback, useEffect, useState } from 'react'
import { useAppStore } from '../../store'
import { EARTH_HISTORY_TOTAL_MA, PHANEROZOIC_TOTAL_MA } from '../../constants'
import eventsData from '../../../data/events.json'
import type { GeoInterval } from '../../types'
import { periods, timeScaleUnits } from '../../services/geology'
import { useI18n } from '../../i18n'

const TIMELINE_HEIGHT = 100
const PADDING_X = 8
const TRACK_TOP = 32
const ERA_TRACK_HEIGHT = 20
const PERIOD_TRACK_HEIGHT = 28

export function GeoTimeline() {
  const { language, t } = useI18n()
  const currentAge = useAppStore((s) => s.currentAge)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const currentEon = useAppStore((s) => s.currentEon)
  const setTime = useAppStore((s) => s.setTime)
  const svgRef = useRef<SVGSVGElement>(null)
  const [dragging, setDragging] = useState(false)
  const [width, setWidth] = useState(800)
  const [scaleMode, setScaleMode] = useState<'earth' | 'phanerozoic'>(() => (
    currentAge > PHANEROZOIC_TOTAL_MA ? 'earth' : 'phanerozoic'
  ))
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(10)
  const rafRef = useRef<number>(0)
  const playbackRafRef = useRef<number>(0)
  const playbackAgeRef = useRef(currentAge)

  const activeScaleMode = currentAge > PHANEROZOIC_TOTAL_MA ? 'earth' : scaleMode
  const totalMa = activeScaleMode === 'earth' ? EARTH_HISTORY_TOTAL_MA : PHANEROZOIC_TOTAL_MA

  const ageToX = useCallback((age: number, width: number) => {
    return PADDING_X + (1 - Math.min(age, totalMa) / totalMa) * (width - PADDING_X * 2)
  }, [totalMa])

  const xToAge = useCallback((x: number, width: number) => {
    const ratio = (x - PADDING_X) / (width - PADDING_X * 2)
    return (1 - Math.max(0, Math.min(1, ratio))) * totalMa
  }, [totalMa])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!dragging || !svgRef.current) return
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const rect = svgRef.current!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const age = xToAge(x, rect.width)
      setTime(age)
    })
  }, [dragging, xToAge, setTime])

  const handlePointerUp = useCallback(() => {
    setDragging(false)
  }, [])

  useEffect(() => {
    if (dragging) {
      window.addEventListener('pointermove', handlePointerMove)
      window.addEventListener('pointerup', handlePointerUp)
      return () => {
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('pointerup', handlePointerUp)
      }
    }
  }, [dragging, handlePointerMove, handlePointerUp])

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const updateWidth = () => setWidth(svg.clientWidth || 800)
    const observer = new ResizeObserver(updateWidth)
    observer.observe(svg)
    window.requestAnimationFrame(updateWidth)
    return () => observer.disconnect()
  }, [])

  useEffect(() => { playbackAgeRef.current = currentAge }, [currentAge])
  useEffect(() => {
    if (!playing) return
    let previous = performance.now()
    const tick = (now: number) => {
      const elapsedSeconds = Math.min((now - previous) / 1000, 0.1)
      previous = now
      const nextAge = Math.max(0, playbackAgeRef.current - speed * elapsedSeconds)
      playbackAgeRef.current = nextAge
      setTime(nextAge)
      if (nextAge === 0) setPlaying(false)
      else playbackRafRef.current = requestAnimationFrame(tick)
    }
    playbackRafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(playbackRafRef.current)
  }, [playing, setTime, speed])

  const handlePointerDown = useCallback(() => {
    setDragging(true)
  }, [])

  const handleTrackClick = useCallback((e: React.PointerEvent) => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const age = xToAge(x, rect.width)
    setTime(age)
  }, [xToAge, setTime])

  const handleX = ageToX(currentAge, width)

  const eras = (timeScaleUnits as GeoInterval[]).filter((unit) => unit.itp === 'era' && unit.eag <= PHANEROZOIC_TOTAL_MA)
  const eons = (timeScaleUnits as GeoInterval[]).filter((unit) => unit.itp === 'eon')

  const ageLabel = currentAge >= 1000
    ? `${(currentAge / 1000).toFixed(2)} Ga`
    : `${currentAge.toFixed(1)} Ma`

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', userSelect: 'none' }}>
      <div className="timeline-controls" onPointerDown={(event) => event.stopPropagation()}>
        <button onClick={() => setPlaying((value) => !value)} aria-label={t(playing ? 'Pause geological time playback' : 'Play toward the present')}>{playing ? 'Ⅱ' : '▶'}</button>
        <label><span>Ma</span><input type="number" min="0" max={EARTH_HISTORY_TOTAL_MA} step="0.1" value={Number(currentAge.toFixed(1))} onChange={(event) => setTime(Number(event.target.value))} /></label>
        <label><span>{t('speed')}</span><select value={speed} onChange={(event) => setSpeed(Number(event.target.value))}><option value={1}>1 Ma/s</option><option value={10}>10 Ma/s</option><option value={50}>50 Ma/s</option><option value={200}>200 Ma/s</option></select></label>
        <label className="timeline-event-jump"><span>{t('event')}</span><select value="" onChange={(event) => {
          const selected = eventsData.find((item) => item.id === event.target.value)
          if (!selected) return
          const age = (selected.startAge + selected.endAge) / 2
          setTime(age)
          if (age > PHANEROZOIC_TOTAL_MA) setScaleMode('earth')
        }}><option value="">{t('Jump to…')}</option>{eventsData.map((event) => <option value={event.id} key={event.id}>{language === 'zh' ? event.titleZh : event.title}</option>)}</select></label>
      </div>
      <div className="timeline-scale-switch" role="group" aria-label={t('Timeline scale')}>
        <button className={activeScaleMode === 'earth' ? 'is-active' : ''} onClick={() => setScaleMode('earth')}>4.567 Ga</button>
        <button className={activeScaleMode === 'phanerozoic' ? 'is-active' : ''} onClick={() => {
          if (currentAge > PHANEROZOIC_TOTAL_MA) setTime(PHANEROZOIC_TOTAL_MA)
          setScaleMode('phanerozoic')
        }}>538.8 Ma</button>
      </div>
      <svg
        ref={svgRef}
        style={{ width: '100%', height: '100%', cursor: dragging ? 'ew-resize' : 'default' }}
        onPointerDown={handleTrackClick}
      >
        <title>{t('Geological time control. Current context: {context}.', { context: t(currentPeriod ?? currentEon ?? 'Deep time') })}</title>
        <rect x={0} y={0} width="100%" height="100%" fill="transparent" />
        {activeScaleMode === 'earth' && eons.map((eon) => {
          const left = ageToX(eon.eag, width)
          const right = ageToX(eon.lag, width)
          const eonWidth = Math.max(1, right - left)
          return (
            <g key={eon.oid}>
              <rect
                x={left}
                y={TRACK_TOP}
                width={eonWidth}
                height={ERA_TRACK_HEIGHT + PERIOD_TRACK_HEIGHT}
                fill={eon.col}
                opacity={0.68}
                stroke="var(--color-surface)"
                strokeWidth={0.5}
              />
              {eonWidth > 55 && (
                <text
                  x={left + eonWidth / 2}
                  y={TRACK_TOP + 29}
                  textAnchor="middle"
                  fill="var(--color-text)"
                  fontSize={10}
                  fontFamily="var(--font-sans)"
                >
                  {t(eon.nam)}
                </text>
              )}
            </g>
          )
        })}
        {activeScaleMode === 'phanerozoic' && eras.map((era) => {
          const left = ageToX(era.eag, width)
          const right = ageToX(era.lag, width)
          return (
            <rect
              key={era.oid}
              x={left}
              y={TRACK_TOP}
              width={Math.max(1, right - left)}
              height={ERA_TRACK_HEIGHT}
              fill={era.col}
              opacity={0.6}
            />
          )
        })}
        {activeScaleMode === 'phanerozoic' && periods.map((p) => {
          const left = ageToX(p.eag, width)
          const right = ageToX(p.lag, width)
          const periodW = Math.max(1, right - left)
          return (
            <g key={p.name}>
              <rect
                x={left}
                y={TRACK_TOP + ERA_TRACK_HEIGHT}
                width={periodW}
                height={PERIOD_TRACK_HEIGHT}
                fill={p.color}
                opacity={0.8}
                stroke="var(--color-surface)"
                strokeWidth={0.5}
              />
              {periodW > 24 && (
                <text
                  x={left + periodW / 2}
                  y={TRACK_TOP + ERA_TRACK_HEIGHT + PERIOD_TRACK_HEIGHT / 2 + 5}
                  textAnchor="middle"
                  fill="var(--color-text)"
                  fontSize={10}
                  fontFamily="var(--font-sans)"
                >
                  {p.abr}
                </text>
              )}
            </g>
          )
        })}
        <line
          x1={handleX}
          y1={0}
          x2={handleX}
          y2={TIMELINE_HEIGHT - 10}
          stroke="var(--color-accent)"
          strokeWidth={2}
          style={{ pointerEvents: 'none' }}
        />
        <circle
          cx={handleX}
          cy={TIMELINE_HEIGHT - 10}
          r={8}
          fill="var(--color-accent)"
          stroke="var(--color-text)"
          strokeWidth={2}
          style={{ cursor: 'ew-resize' }}
          onPointerDown={handlePointerDown}
        />
        <text
          x={handleX}
          y={12}
          textAnchor="middle"
          fill="var(--color-text)"
          fontSize={12}
          fontWeight={600}
          fontFamily="var(--font-mono)"
          style={{ pointerEvents: 'none' }}
        >
          {ageLabel}
        </text>
      </svg>
    </div>
  )
}
