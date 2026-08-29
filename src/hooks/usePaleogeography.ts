import { useEffect, useState } from 'react'
import { loadPaleogeography } from '../data-client/staticDataClient'
import type { PaleogeographyLayers } from '../types'
import type { RuntimeMapManifest, RuntimeMapSnapshot } from '../data-client/types'

interface PaleogeographyState {
  period: string | null
  layers: PaleogeographyLayers | null
  manifest: RuntimeMapManifest | null
  snapshot: RuntimeMapSnapshot | null
  loading: boolean
  error: string | null
}

const EMPTY_STATE: PaleogeographyState = { period: null, layers: null, manifest: null, snapshot: null, loading: false, error: null }

export function usePaleogeography(period: string | null) {
  const [state, setState] = useState<PaleogeographyState>(EMPTY_STATE)
  useEffect(() => {
    if (!period) return
    let active = true
    loadPaleogeography(period).then((result) => {
      if (!active) return
      setState(result
        ? { period, layers: result.layers, manifest: result.manifest, snapshot: result.snapshot, loading: false, error: null }
        : { ...EMPTY_STATE, period, error: 'No published paleogeography snapshot is available for this period.' })
    }, (error) => {
      if (!active) return
      setState({ ...EMPTY_STATE, period, error: error instanceof Error ? error.message : String(error) })
    })
    return () => { active = false }
  }, [period])
  if (!period) return { ...EMPTY_STATE, available: false }
  if (state.period !== period) return { ...EMPTY_STATE, period, loading: true, available: false }
  return { ...state, available: state.snapshot?.status === 'available' }
}
