import { useRef, useCallback, useEffect, useState } from 'react'
import { useAppStore } from '../../store'
import { ERA_COLORS, PHANEROZOIC_TOTAL_MA } from '../../constants'
import periodsData from '../../../data/periods.json'

const TIMELINE_HEIGHT = 100
const PADDING_X = 8
const TRACK_TOP = 32
const ERA_TRACK_HEIGHT = 20
const PERIOD_TRACK_HEIGHT = 28

export function GeoTimeline() {
  const currentAge = useAppStore((s) => s.currentAge)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const setTime = useAppStore((s) => s.setTime)
  const svgRef = useRef<SVGSVGElement>(null)
  const [dragging, setDragging] = useState(false)
  const rafRef = useRef<number>(0)

  const ageToX = useCallback((age: number, width: number) => {
    return PADDING_X + (1 - age / PHANEROZOIC_TOTAL_MA) * (width - PADDING_X * 2)
  }, [])

  const xToAge = useCallback((x: number, width: number) => {
    const ratio = (x - PADDING_X) / (width - PADDING_X * 2)
    return (1 - Math.max(0, Math.min(1, ratio))) * PHANEROZOIC_TOTAL_MA
  }, [])

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

  const width = svgRef.current?.clientWidth ?? 800
  const handleX = ageToX(currentAge, width)

  const eras = [
    { name: 'Cenozoic', lag: 0, eag: 66, color: ERA_COLORS['Cenozoic'] },
    { name: 'Mesozoic', lag: 66, eag: 251.9, color: ERA_COLORS['Mesozoic'] },
    { name: 'Paleozoic', lag: 251.9, eag: 538.8, color: ERA_COLORS['Paleozoic'] },
  ]

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', userSelect: 'none' }}>
      <div style={{
        position: 'absolute', top: 4, left: PADDING_X,
        fontSize: 11, color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-mono)',
        pointerEvents: 'none',
      }}>
        {currentPeriod ?? 'Cretaceous'}
      </div>
      <svg
        ref={svgRef}
        style={{ width: '100%', height: '100%', cursor: dragging ? 'ew-resize' : 'default' }}
        onPointerDown={handleTrackClick}
      >
        <rect x={0} y={0} width="100%" height="100%" fill="transparent" />
        {eras.map((era) => {
          const left = ageToX(era.eag, width)
          const right = ageToX(era.lag, width)
          return (
            <rect
              key={era.name}
              x={left}
              y={TRACK_TOP}
              width={Math.max(1, right - left)}
              height={ERA_TRACK_HEIGHT}
              fill={era.color}
              opacity={0.6}
            />
          )
        })}
        {periodsData.map((p) => {
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
          {currentAge.toFixed(1)} Ma
        </text>
      </svg>
    </div>
  )
}
