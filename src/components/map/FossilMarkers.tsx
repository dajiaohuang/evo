import { CircleMarker, Tooltip } from 'react-leaflet'
import { useAppStore } from '../../store'
import { computeClusters } from '../../utils/clustering'
import { getSpatialPosition, type CoordinateMode } from '../../utils/spatial'
import type { FossilMarkerMode } from '../../store/mapSlice'

export type MarkerMode = FossilMarkerMode
interface FossilMarkersProps {
  mode: MarkerMode
  coordinateMode: CoordinateMode
}

export function FossilMarkers({ mode, coordinateMode }: FossilMarkersProps) {
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const occurrencesByInterval = useAppStore((s) => s.occurrencesByInterval)
  const viewState = useAppStore((s) => s.viewState)
  const highlightedTaxonId = useAppStore((s) => s.highlightedTaxonId)
  const selectFossilOccurrence = useAppStore((s) => s.selectFossilOccurrence)

  if (!currentPeriod) return null

  const records = occurrencesByInterval[currentPeriod]
  if (!records || records.length === 0) return null

  const markers = mode === 'points'
    ? records
      .filter((occurrence) => getSpatialPosition(occurrence, coordinateMode).mode === coordinateMode)
      .map((occurrence) => ({ type: 'individual' as const, occurrence }))
    : computeClusters(records, viewState.zoom, {
      gridSize: mode === 'density' ? 70 : 40,
      maxZoom: mode === 'density' ? 20 : 5,
      coordinateMode,
    })

  return (
    <>
      {markers.map((marker, i) => {
        if (marker.type === 'cluster') {
          return (
            <CircleMarker
              key={`cluster-${i}`}
              center={[marker.lat, marker.lng]}
              radius={Math.min(mode === 'density' ? 28 : 20, 6 + Math.log2(marker.count + 1) * 3)}
              pathOptions={{
                color: mode === 'density' ? '#f58a65' : '#ffd700',
                weight: mode === 'density' ? 0.5 : 2,
                fillColor: mode === 'density' ? '#f58a65' : '#ffd700',
                fillOpacity: mode === 'density' ? 0.24 : 0.4,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={false}>
                <div style={{ fontSize: 11 }}>
                  {marker.count} sampled occurrences
                </div>
              </Tooltip>
            </CircleMarker>
          )
        }

        const occ = marker.occurrence
        const position = getSpatialPosition(occ, coordinateMode)
        if (position.mode !== coordinateMode) return null
        const { lat, lng } = position

        const isHighlighted = highlightedTaxonId && occ.tid === highlightedTaxonId
        const opacity = isHighlighted ? 1 : highlightedTaxonId ? 0.12 : 0.6
        const radius = isHighlighted ? 7 : 4

        return (
          <CircleMarker
            key={occ.oid || `occ-${i}`}
            center={[lat, lng]}
            radius={radius}
            pathOptions={{
              color: isHighlighted ? '#ffd700' : '#58a6ff',
              weight: isHighlighted ? 2 : 0.5,
              fillColor: isHighlighted ? '#ffd700' : '#58a6ff',
              fillOpacity: opacity,
            }}
            eventHandlers={{ click: () => selectFossilOccurrence(occ) }}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1}>
              <div style={{ fontSize: 11 }}>
                <strong>{occ.tna || occ.idn || 'Unresolved identification'}</strong>
                {occ.idn ? <div>{occ.idn}</div> : null}
                <div style={{ color: '#8b949e' }}>
                  {occ.eag?.toFixed(1)} – {occ.lag?.toFixed(1)} Ma
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        )
      })}
    </>
  )
}
