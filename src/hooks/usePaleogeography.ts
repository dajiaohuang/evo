import { useState, useEffect } from 'react'
import type { ContinentFeatureCollection } from '../types'

import cambrian from '../../data/paleogeography/cambrian.json'
import ordovician from '../../data/paleogeography/ordovician.json'
import silurian from '../../data/paleogeography/silurian.json'
import devonian from '../../data/paleogeography/devonian.json'
import carboniferous from '../../data/paleogeography/carboniferous.json'
import permian from '../../data/paleogeography/permian.json'
import triassic from '../../data/paleogeography/triassic.json'
import jurassic from '../../data/paleogeography/jurassic.json'
import cretaceous from '../../data/paleogeography/cretaceous.json'
import paleogene from '../../data/paleogeography/paleogene.json'
import neogene from '../../data/paleogeography/neogene.json'
import quaternary from '../../data/paleogeography/quaternary.json'

const geoJsonMap: Record<string, ContinentFeatureCollection> = {
  cambrian: cambrian as ContinentFeatureCollection,
  ordovician: ordovician as ContinentFeatureCollection,
  silurian: silurian as ContinentFeatureCollection,
  devonian: devonian as ContinentFeatureCollection,
  carboniferous: carboniferous as ContinentFeatureCollection,
  permian: permian as ContinentFeatureCollection,
  triassic: triassic as ContinentFeatureCollection,
  jurassic: jurassic as ContinentFeatureCollection,
  cretaceous: cretaceous as ContinentFeatureCollection,
  paleogene: paleogene as ContinentFeatureCollection,
  neogene: neogene as ContinentFeatureCollection,
  quaternary: quaternary as ContinentFeatureCollection,
}

function getGeoJsonFile(period: string | null): string {
  if (!period) return 'cretaceous'
  const periodToFile: Record<string, string> = {
    Cambrian: 'cambrian',
    Ordovician: 'ordovician',
    Silurian: 'silurian',
    Devonian: 'devonian',
    Carboniferous: 'carboniferous',
    Permian: 'permian',
    Triassic: 'triassic',
    Jurassic: 'jurassic',
    Cretaceous: 'cretaceous',
    Paleogene: 'paleogene',
    Neogene: 'neogene',
    Quaternary: 'quaternary',
  }
  return periodToFile[period] ?? 'cretaceous'
}

export function usePaleogeography(period: string | null) {
  const [geoJson, setGeoJson] = useState<ContinentFeatureCollection | null>(null)

  useEffect(() => {
    const file = getGeoJsonFile(period)
    setGeoJson(geoJsonMap[file] ?? null)
  }, [period])

  return { geoJson, loading: false, error: null }
}
