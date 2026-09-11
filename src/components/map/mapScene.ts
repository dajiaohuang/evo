import type { GeoPermissibleObjects } from 'd3'
import type { PaleogeographyLayerId, PaleogeographyLayers, FossilOccurrence, CaoObservationRecord } from '../../types'
import type { RuntimeMapObservationDataset } from '../../data-client/types'
import type { CoordinateMode } from '../../utils/spatial'
import { getSpatialPosition } from '../../utils/spatial'
import { reconstructedObservationPosition } from '../../utils/caoObservations'
import { sphericalMapCollection } from '../../utils/projectionGeometry'

export interface MapShape {
  geometry: GeoPermissibleObjects
  stroke: string
  width: number
  opacity?: number
  fill?: string
  fillOpacity?: number
  dash?: number[]
  label?: string
}

export interface MapPoint {
  position: [number, number]
  color: string
  radius: number
  opacity: number
  label: string
  occurrence?: FossilOccurrence
  observation?: { record: CaoObservationRecord; descriptor: RuntimeMapObservationDataset }
}

type Translate = (text: string, params?: Record<string, string | number>) => string
const layerOrder: PaleogeographyLayerId[] = ['staticPolygons', 'platePolygons', 'coastlines', 'continentalPolygons', 'continentOceanBoundaries', 'plateBoundaries']

export function vectorShapes(layers: PaleogeographyLayers | null, enabled: readonly PaleogeographyLayerId[], t: Translate): MapShape[] {
  return layerOrder.flatMap((id) => {
    const collection = layers?.[id]
    if (!collection || !enabled.includes(id)) return []
    const projectedSource = sphericalMapCollection(collection)
    // Source coastline polygons include internal reconstruction partitions;
    // filling their union avoids presenting partition seams as coastlines.
    if (id === 'coastlines') return [{ geometry: projectedSource, stroke: '#5a957d', width: 0, fill: '#24463c', fillOpacity: .7 }]
    return collection.features.map((feature, index): MapShape => {
      const { pid = 0, name, type, polarity } = feature.properties
      const plate = pid ? t('Plate') + ` ${pid}` : null
      const label = [type ? t(type) : null, name, plate].filter(Boolean).join(' · ')
      const geometry = projectedSource.features[index]
      if (id === 'staticPolygons') {
        const color = ['#645e76', '#536f78', '#6e6550', '#526d60'][Math.abs(pid) % 4]
        return { geometry, stroke: color, width: .55, opacity: .38, fill: color, fillOpacity: .035, dash: [2, 5], label: `${t('Static reconstruction partition')} · ${label}` }
      }
      if (id === 'platePolygons') {
        const color = ['#516d7c', '#59657d', '#536f69', '#6d6256', '#5d6670'][Math.abs(pid) % 5]
        return { geometry, stroke: color, width: .8, opacity: .65, fill: color, fillOpacity: .08, label }
      }
      if (id === 'continentalPolygons') return { geometry, stroke: '#b8a270', width: .8, opacity: .58, fill: '#8b7548', fillOpacity: .12, label: `${t('Modelled continental crust')} · ${label}` }
      if (id === 'continentOceanBoundaries') return { geometry, stroke: '#74a9cf', width: 1.3, opacity: .78, dash: [7, 4], label: `${t('Continent–ocean transition boundary')} · ${label}` }
      const styles: Record<string, Pick<MapShape, 'stroke' | 'width' | 'dash'>> = {
        MidOceanRidge: { stroke: '#efb65a', width: 1.5, dash: [5, 3] },
        SubductionZone: { stroke: '#e27a73', width: 1.8 },
        Transform: { stroke: '#79b9c6', width: 1.35, dash: [2, 3] },
        ContinentalRift: { stroke: '#c6a6d9', width: 1.35, dash: [6, 3] },
        TerraneBoundary: { stroke: '#b8aa86', width: 1.1, dash: [1, 3] },
      }
      return { geometry, ...(styles[type ?? ''] ?? { stroke: '#83969e', width: 1, dash: [3, 4] }), opacity: .9, label: [label, polarity ? t('GPlates polarity: {polarity}', { polarity: t(polarity) }) : null].filter(Boolean).join(' · ') }
    })
  })
}

export function fossilPoints(records: FossilOccurrence[], mode: CoordinateMode, highlighted: readonly string[], t: Translate): MapPoint[] {
  const ids = new Set(highlighted)
  return records.flatMap((record) => {
    const position = getSpatialPosition(record, mode)
    if (position.mode !== mode) return []
    const selected = ids.has(record.oid)
    return [{
      position: [position.lng, position.lat] as [number, number],
      color: selected ? '#ffd700' : '#58a6ff', radius: selected ? 7 : 4,
      opacity: selected ? 1 : ids.size ? .12 : .6,
      label: `${record.tna || record.idn || t('Unresolved identification')} · ${record.eag.toFixed(1)}–${record.lag.toFixed(1)} Ma`,
      occurrence: record,
    }]
  })
}

export function observationPoints(records: { record: CaoObservationRecord; descriptor: RuntimeMapObservationDataset }[]): MapPoint[] {
  return records.flatMap(({ record, descriptor }) => {
    const position = reconstructedObservationPosition(record)
    if (!position) return []
    const styles = {
      'paleomagnetic-poles': ['#d7b0ff', 5],
      geochemistry: ['#ffbe72', 3],
      'metamorphic-gradient-orogen': ['#f2d37c', 4],
      'metamorphic-gradient-rift': ['#ff8c86', 4],
      'metamorphic-gradient-subduction-zone': ['#79c8e8', 4],
    } as const
    const [color, radius] = styles[record.observationKind]
    return [{ position, color, radius, opacity: .66, label: `${record.name ?? record.sourceFeatureId} · ${record.age.rawFromLexeme}–${record.age.rawToLexeme} Ma`, observation: { record, descriptor } }]
  })
}
