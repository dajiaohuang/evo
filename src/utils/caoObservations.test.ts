import { describe, expect, it } from 'vitest'
import type { RuntimeMapObservationDataset } from '../data-client/types'
import type { CaoObservationRecord } from '../types'
import { observationAppliesAtAge, observationsToGeoJson, visibleCaoObservations } from './caoObservations'

const record: CaoObservationRecord = {
  sourceFeatureId: 'GPlates-source-1',
  sourceRevisionId: 'revision-1',
  sourceFeatureType: 'UnclassifiedFeature',
  observationKind: 'geochemistry',
  name: 'Source sample',
  plateId: 101,
  age: {
    rawFromMa: 33,
    rawToMa: -17,
    rawFromLexeme: '33',
    rawToLexeme: '-17',
    averageMa: 8,
    averageLexeme: '8',
    modelIntersectionMa: [0, 33],
    reconstructionAgeMa: 16.5,
    reconstructionAgeMethod: 'model-intersection-midpoint',
  },
  sourcePositions: { samplePosition: [134.575, -2.48] },
  reconstructedPositions: { samplePosition: [130, -3] },
  reconstructionStatus: 'reconstructed',
  poleA95: null,
  poleA95Lexeme: null,
  sampleId: 'sample-1',
  referenceId: 'reference-1',
  sourceFlags: ['negative-younger-bound', 'negative-sio2'],
  sourceAttributes: [
    ['FROMAGE', 'double', '33'],
    ['TOAGE', 'double', '-17'],
    ['TYPE', 'string', ''],
    ['sio2', 'double', '-18.205462'],
  ],
}

const descriptor: RuntimeMapObservationDataset = {
  id: 'geochemistry',
  title: 'Geochemistry samples',
  titleZh: '地球化学样本',
  role: 'observation',
  sourceFile: 'point_data/geochemistry.gpmlz',
  records: 1,
  reconstructableRecords: 1,
  rawOnlyRecords: 0,
  files: [{ url: 'maps/observations/geochemistry-01.json.gz', records: 1 }],
}

describe('CAO2024 observation presentation', () => {
  it('uses the inclusive source-age interval, including negative source bounds', () => {
    expect(observationAppliesAtAge(record, 33)).toBe(true)
    expect(observationAppliesAtAge(record, 0)).toBe(true)
    expect(observationAppliesAtAge(record, -17)).toBe(true)
    expect(observationAppliesAtAge(record, 34)).toBe(false)
    expect(observationAppliesAtAge(record, Number.NaN)).toBe(false)
  })

  it('normalizes inverted bounds only for filtering while retaining source order', () => {
    const inverted = { ...record, age: { ...record.age, rawFromMa: 10, rawToMa: 20 } }
    expect(observationAppliesAtAge(inverted, 15)).toBe(true)
    expect(inverted.age.rawFromMa).toBe(10)
    expect(inverted.age.rawToMa).toBe(20)
  })

  it('never falls back to source coordinates when reconstruction is unavailable', () => {
    const rawOnly: CaoObservationRecord = {
      ...record,
      reconstructedPositions: null,
      reconstructionStatus: 'raw-only-model-range',
      age: { ...record.age, reconstructionAgeMa: null, reconstructionAgeMethod: null },
    }
    expect(visibleCaoObservations([rawOnly], 0)).toEqual([])
  })

  it('exports reconstructed geometry while retaining exact source lexemes and flags', () => {
    const result = observationsToGeoJson([record], descriptor, 0)
    expect(result.features[0].geometry.coordinates).toEqual([130, -3])
    expect(result.features[0].properties).toMatchObject({
      evidenceClass: 'observation-or-constraint',
      sourcePositions: { samplePosition: [134.575, -2.48] },
      age: { reconstructionAgeMa: 16.5, reconstructionAgeMethod: 'model-intersection-midpoint' },
      sourceFlags: ['negative-younger-bound', 'negative-sio2'],
      sourceAttributes: expect.arrayContaining([['sio2', 'double', '-18.205462']]),
    })
    expect(result.features[0].properties).not.toHaveProperty('layer')
  })
})
