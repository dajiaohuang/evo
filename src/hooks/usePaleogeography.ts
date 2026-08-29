import { useEffect, useState } from 'react'
import { loadPaleogeographyLayer, loadPaleogeographySnapshot } from '../data-client/staticDataClient'
import type { PaleogeographyLayerId, PaleogeographyLayers } from '../types'
import type { RuntimeMapManifest, RuntimeMapSnapshot } from '../data-client/types'

interface PaleogeographyState {
  period: string | null
  layers: PaleogeographyLayers | null
  manifest: RuntimeMapManifest | null
  snapshot: RuntimeMapSnapshot | null
  loading: boolean
  error: string | null
  loadingLayers: Partial<Record<PaleogeographyLayerId, boolean>>
  layerErrors: Partial<Record<PaleogeographyLayerId, string>>
}

const EMPTY_STATE: PaleogeographyState = { period: null, layers: null, manifest: null, snapshot: null, loading: false, error: null, loadingLayers: {}, layerErrors: {} }

export function usePaleogeography(period: string | null, requestedLayers: readonly PaleogeographyLayerId[]) {
  const [state, setState] = useState<PaleogeographyState>(EMPTY_STATE)
  useEffect(() => {
    if (!period) {
      return
    }
    let active = true
    loadPaleogeographySnapshot(period).then((result) => {
      if (!active) return
      setState(result
        ? { ...EMPTY_STATE, period, layers: {}, manifest: result.manifest, snapshot: result.snapshot, loading: false }
        : { ...EMPTY_STATE, period, error: 'No published paleogeography snapshot is available for this period.' })
    }, (error) => {
      if (!active) return
      setState({ ...EMPTY_STATE, period, error: error instanceof Error ? error.message : String(error) })
    })
    return () => { active = false }
  }, [period])

  const requestedKey = [...new Set(requestedLayers)].sort().join('|')
  useEffect(() => {
    if (!period || state.period !== period || !state.snapshot) return
    const wanted = requestedKey.split('|').filter(Boolean) as PaleogeographyLayerId[]
    const missing = wanted.filter((layerId) => !state.layers?.[layerId] && !state.loadingLayers[layerId])
    if (!missing.length) return
    Promise.resolve().then(() => setState((current) => current.period !== period ? current : ({
      ...current,
      loadingLayers: { ...current.loadingLayers, ...Object.fromEntries(missing.map((layerId) => [layerId, true])) },
      layerErrors: Object.fromEntries(Object.entries(current.layerErrors).filter(([layerId]) => !missing.includes(layerId as PaleogeographyLayerId))),
    })))
    for (const layerId of missing) {
      loadPaleogeographyLayer(state.snapshot, layerId).then((collection) => {
        setState((current) => current.period !== period ? current : ({
          ...current,
          layers: { ...current.layers, [layerId]: collection },
          loadingLayers: { ...current.loadingLayers, [layerId]: false },
        }))
      }, (error) => {
        setState((current) => current.period !== period ? current : ({
          ...current,
          loadingLayers: { ...current.loadingLayers, [layerId]: false },
          layerErrors: { ...current.layerErrors, [layerId]: error instanceof Error ? error.message : String(error) },
        }))
      })
    }
  // The stable key deliberately represents the caller's set, independent of array identity.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period, requestedKey, state.period, state.snapshot])

  if (!period) return { ...EMPTY_STATE, available: false }
  if (state.period !== period) return { ...EMPTY_STATE, period, loading: true, available: false }
  return { ...state, available: state.snapshot?.status === 'available' }
}
