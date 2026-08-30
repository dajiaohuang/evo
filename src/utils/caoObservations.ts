import type { RuntimeMapObservationDataset } from '../data-client/types'
import type { CaoObservationPosition, CaoObservationRecord } from '../types'

export interface CaoObservationGeoJsonFeature {
  type: 'Feature'
  id: string
  geometry: { type: 'Point'; coordinates: CaoObservationPosition }
  properties: {
    recordId: string
    datasetId: CaoObservationRecord['observationKind']
    evidenceClass: 'observation-or-constraint'
    role: RuntimeMapObservationDataset['role']
    name: string | null
    sourceFeatureId: string
    sourceRevisionId: string
    sourceFeatureType: string
    sourceFile: string
    plateId: number | null
    age: CaoObservationRecord['age']
    referenceId: string | null
    sampleId: string | null
    poleA95: number | null
    poleA95Lexeme: string | null
    sourcePositions: CaoObservationRecord['sourcePositions']
    reconstructionStatus: CaoObservationRecord['reconstructionStatus']
    sourceFlags: CaoObservationRecord['sourceFlags']
    sourceAttributes: CaoObservationRecord['sourceAttributes']
  }
}

export interface CaoObservationGeoJson {
  type: 'FeatureCollection'
  features: CaoObservationGeoJsonFeature[]
}

export function observationAppliesAtAge(record: CaoObservationRecord, ageMa: number): boolean {
  if (!Number.isFinite(ageMa)) return false
  const youngerMa = Math.min(record.age.rawFromMa, record.age.rawToMa)
  const olderMa = Math.max(record.age.rawFromMa, record.age.rawToMa)
  return ageMa >= youngerMa && ageMa <= olderMa
}

export function reconstructedObservationPosition(record: CaoObservationRecord): CaoObservationPosition | null {
  const positions = record.reconstructedPositions
  if (!positions) return null
  if (record.observationKind === 'paleomagnetic-poles') {
    return positions.polePosition ?? positions.averageSampleSitePosition ?? positions.samplePosition ?? null
  }
  return positions.samplePosition ?? positions.polePosition ?? positions.averageSampleSitePosition ?? null
}

export function visibleCaoObservations(records: CaoObservationRecord[], ageMa: number): CaoObservationRecord[] {
  return records.filter((record) => observationAppliesAtAge(record, ageMa) && reconstructedObservationPosition(record) !== null)
}

export function observationsToGeoJson(
  records: CaoObservationRecord[],
  descriptor: RuntimeMapObservationDataset,
  ageMa: number,
): CaoObservationGeoJson {
  const features = visibleCaoObservations(records, ageMa).map((record): CaoObservationGeoJsonFeature => {
    const position = reconstructedObservationPosition(record)!
    return {
      type: 'Feature',
      id: record.sourceFeatureId,
      geometry: { type: 'Point', coordinates: position },
      properties: {
        recordId: record.sourceFeatureId,
        datasetId: record.observationKind,
        evidenceClass: 'observation-or-constraint',
        role: descriptor.role,
        name: record.name,
        sourceFeatureId: record.sourceFeatureId,
        sourceRevisionId: record.sourceRevisionId,
        sourceFeatureType: record.sourceFeatureType,
        sourceFile: descriptor.sourceFile,
        plateId: record.plateId,
        age: record.age,
        referenceId: record.referenceId,
        sampleId: record.sampleId,
        poleA95: record.poleA95,
        poleA95Lexeme: record.poleA95Lexeme,
        sourcePositions: record.sourcePositions,
        reconstructionStatus: record.reconstructionStatus,
        sourceFlags: record.sourceFlags,
        sourceAttributes: record.sourceAttributes,
      },
    }
  })
  return { type: 'FeatureCollection', features }
}
