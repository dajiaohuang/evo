import { useEffect, useState } from 'react'
import type { ContinentFeatureCollection } from '../types'

type GeoModule = { default: unknown }

const geoJsonLoaders: Record<string, () => Promise<GeoModule>> = {
  cambrian: () => import('../../data/paleogeography/cambrian.json'),
  ordovician: () => import('../../data/paleogeography/ordovician.json'),
  silurian: () => import('../../data/paleogeography/silurian.json'),
  devonian: () => import('../../data/paleogeography/devonian.json'),
  carboniferous: () => import('../../data/paleogeography/carboniferous.json'),
  permian: () => import('../../data/paleogeography/permian.json'),
  triassic: () => import('../../data/paleogeography/triassic.json'),
  jurassic: () => import('../../data/paleogeography/jurassic.json'),
  cretaceous: () => import('../../data/paleogeography/cretaceous.json'),
  paleogene: () => import('../../data/paleogeography/paleogene.json'),
  neogene: () => import('../../data/paleogeography/neogene.json'),
  quaternary: () => import('../../data/paleogeography/quaternary.json'),
}

const geoJsonCache = new Map<string, ContinentFeatureCollection>()

function getGeoJsonFile(period: string | null): string | null {
  if (!period) return null
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
  const file = getGeoJsonFile(period)
  const fileKey = file ?? 'none'
  const [loaded, setLoaded] = useState<{ file: string; data: ContinentFeatureCollection | null } | null>(() => {
    const cached = file ? geoJsonCache.get(file) : null
    return cached && file ? { file, data: cached } : file ? null : { file: fileKey, data: null }
  })

  useEffect(() => {
    let cancelled = false
    const cached = file ? geoJsonCache.get(file) : null
    const request = !file
      ? Promise.resolve(null)
      : cached
        ? Promise.resolve(cached)
        : geoJsonLoaders[file]().then((module) => module.default as ContinentFeatureCollection)

    request.then((data) => {
      if (cancelled) return
      if (file && data) geoJsonCache.set(file, data)
      setLoaded({ file: fileKey, data })
    })

    return () => { cancelled = true }
  }, [file, fileKey])

  const geoJson = loaded?.file === fileKey ? loaded.data : null
  return { geoJson, loading: loaded?.file !== fileKey, error: null }
}
