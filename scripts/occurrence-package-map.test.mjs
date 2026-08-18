import { describe, expect, it } from 'vitest'
import { assignOccurrencePackage, occurrenceClassification } from './occurrence-package-map.mjs'

describe('PBDB occurrence package assignment', () => {
  it('prefers an exact registry PBDB identifier over higher classification', () => {
    const exact = new Map([['txn:1', 'perissodactyla']])
    expect(assignOccurrencePackage({ tid: 'txn:1', phl: 'Mollusca' }, exact)).toMatchObject({
      packageId: 'perissodactyla',
      packageAssignmentStatus: 'mapped',
    })
  })

  it.each([
    [{ phl: 'Arthropoda', cll: 'Trilobita' }, 'trilobites-chelicerates'],
    [{ phl: 'Arthropoda', cll: 'Insecta' }, 'crustaceans-insects'],
    [{ phl: 'Hemichordata', odl: 'Graptoloidea' }, 'molluscs-brachiopods'],
    [{ phl: 'Chordata', cll: 'Mammalia', odl: 'Perissodactyla' }, 'perissodactyla'],
    [{ phl: 'Chordata', cll: 'Reptilia', odl: 'Saurischia' }, 'dinosauria'],
    [{ phl: 'Tracheophyta', cll: 'Magnoliopsida' }, 'angiospermae'],
  ])('maps PBDB higher classification %o to %s', (record, packageId) => {
    expect(assignOccurrencePackage(record).packageId).toBe(packageId)
  })

  it('retains unsupported groups as explicit atlas-core unresolved records', () => {
    expect(assignOccurrencePackage({ phl: 'Bryozoa', cll: 'Stenolaemata' })).toMatchObject({
      packageId: 'atlas-core',
      packageAssignmentStatus: 'unresolved',
    })
  })

  it('normalizes PBDB classification keys without copying empty values', () => {
    expect(occurrenceClassification({ phl: 'Mollusca', cll: '', odl: 'Ammonitida' })).toEqual({
      phylum: 'Mollusca',
      order: 'Ammonitida',
    })
  })
})
