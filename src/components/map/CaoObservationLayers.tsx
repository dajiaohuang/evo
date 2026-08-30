import { useMemo } from 'react'
import { circleMarker } from 'leaflet'
import type { GeoJsonObject } from 'geojson'
import { GeoJSON } from 'react-leaflet'
import type { RuntimeMapObservationDataset } from '../../data-client/types'
import type { CaoObservationCollection, CaoObservationDatasetId, CaoObservationRecord } from '../../types'
import { observationsToGeoJson } from '../../utils/caoObservations'

const STYLES: Record<CaoObservationDatasetId, { color: string; fillColor: string; radius: number }> = {
  'paleomagnetic-poles': { color: '#d7b0ff', fillColor: '#8d63c7', radius: 5 },
  geochemistry: { color: '#ffbe72', fillColor: '#d9823f', radius: 3 },
  'metamorphic-gradient-orogen': { color: '#f2d37c', fillColor: '#b99a3c', radius: 4 },
  'metamorphic-gradient-rift': { color: '#ff8c86', fillColor: '#c85555', radius: 4 },
  'metamorphic-gradient-subduction-zone': { color: '#79c8e8', fillColor: '#3f91b5', radius: 4 },
}

interface CaoObservationLayersProps {
  ageMa: number
  datasetIds: readonly CaoObservationDatasetId[]
  collections: Partial<Record<CaoObservationDatasetId, CaoObservationCollection>>
  descriptors: Partial<Record<CaoObservationDatasetId, RuntimeMapObservationDataset>>
  onSelect: (record: CaoObservationRecord, descriptor: RuntimeMapObservationDataset) => void
}

export function CaoObservationLayers({ ageMa, datasetIds, collections, descriptors, onSelect }: CaoObservationLayersProps) {
  const rendered = useMemo(() => datasetIds.flatMap((datasetId) => {
    const collection = collections[datasetId]
    const descriptor = descriptors[datasetId]
    if (!collection || !descriptor) return []
    const recordsById = new Map(collection.records.map((record) => [record.sourceFeatureId, record]))
    return [{ datasetId, descriptor, recordsById, geojson: observationsToGeoJson(collection.records, descriptor, ageMa) }]
  }), [ageMa, collections, datasetIds, descriptors])

  return <>{rendered.map(({ datasetId, descriptor, recordsById, geojson }) => {
    const style = STYLES[datasetId]
    return <GeoJSON
      key={`${datasetId}:${ageMa}:${geojson.features.length}`}
      data={geojson as GeoJsonObject}
      pointToLayer={(_feature, latlng) => circleMarker(latlng, {
        radius: style.radius,
        color: style.color,
        weight: 1,
        opacity: .9,
        fillColor: style.fillColor,
        fillOpacity: .66,
      })}
      onEachFeature={(feature, layer) => {
        const recordId = String(feature.properties?.recordId ?? '')
        const record = recordsById.get(recordId)
        if (!record) return
        const tooltip = document.createElement('div')
        tooltip.textContent = `${record.name ?? record.sourceFeatureId} · ${record.age.rawFromLexeme}–${record.age.rawToLexeme} Ma`
        layer.bindTooltip(tooltip, { sticky: true })
        layer.on('click', () => onSelect(record, descriptor))
      }}
    />
  })}</>
}
