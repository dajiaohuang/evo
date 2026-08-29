import { useEffect, useMemo, useRef, useState } from 'react'
import {
  loadMapManifest,
  loadPaleogeographyLayerAtAge,
  resolvePaleogeographyFrame,
} from '../data-client/staticDataClient'
import type { PaleogeographyLayerId, PaleogeographyLayers } from '../types'
import type { RuntimeMapFrameSelection, RuntimeMapManifest } from '../data-client/types'

interface PaleogeographyState {
  settledAgeMa: number | null
  layers: PaleogeographyLayers
  selections: Partial<Record<PaleogeographyLayerId, RuntimeMapFrameSelection>>
  manifest: RuntimeMapManifest | null
  loading: boolean
  error: string | null
  loadingLayers: Partial<Record<PaleogeographyLayerId, boolean>>
  layerErrors: Partial<Record<PaleogeographyLayerId, string>>
}

const EMPTY_STATE: PaleogeographyState = {
  settledAgeMa: null,
  layers: {},
  selections: {},
  manifest: null,
  loading: true,
  error: null,
  loadingLayers: {},
  layerErrors: {},
}

export function usePaleogeography(ageMa: number | null, requestedLayers: readonly PaleogeographyLayerId[]) {
  const [settledAgeMa, setSettledAgeMa] = useState(ageMa)
  const [state, setState] = useState<PaleogeographyState>(EMPTY_STATE)
  const generation = useRef(0)

  useEffect(() => {
    let active = true
    loadMapManifest().then((manifest) => {
      if (active) setState((current) => ({ ...current, manifest, loading: false, error: null }))
    }, (error) => {
      if (active) setState((current) => ({ ...current, loading: false, error: error instanceof Error ? error.message : String(error) }))
    })
    return () => { active = false }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setSettledAgeMa(ageMa), ageMa === null ? 0 : 120)
    return () => window.clearTimeout(timer)
  }, [ageMa])

  const requestedKey = [...new Set(requestedLayers)].sort().join('|')
  const targetSelections = useMemo(() => {
    if (!state.manifest || settledAgeMa === null) return []
    return requestedKey.split('|').filter(Boolean).map((layerId) => (
      resolvePaleogeographyFrame(state.manifest!, settledAgeMa, layerId as PaleogeographyLayerId)
    )).filter((selection): selection is RuntimeMapFrameSelection => Boolean(selection))
  }, [requestedKey, settledAgeMa, state.manifest])
  const targetKey = targetSelections.map((selection) => `${selection.layerId}:${selection.frame.url}#${selection.frame.sha256 ?? ''}`).join('|')

  useEffect(() => {
    const currentGeneration = ++generation.current
    if (!state.manifest || settledAgeMa === null) return
    const wantedIds = requestedKey.split('|').filter(Boolean) as PaleogeographyLayerId[]
    const selectionByLayer = new Map(targetSelections.map((selection) => [selection.layerId, selection]))
    queueMicrotask(() => {
      if (generation.current !== currentGeneration) return
      setState((current) => {
      const layers: PaleogeographyLayers = {}
      const selections: Partial<Record<PaleogeographyLayerId, RuntimeMapFrameSelection>> = {}
      const loadingLayers: Partial<Record<PaleogeographyLayerId, boolean>> = {}
      const layerErrors: Partial<Record<PaleogeographyLayerId, string>> = {}
      for (const layerId of wantedIds) {
        const target = selectionByLayer.get(layerId)
        const prior = current.selections[layerId]
        if (target && prior?.frame.url === target.frame.url && current.layers[layerId]) {
          layers[layerId] = current.layers[layerId]
          selections[layerId] = target
        } else if (target) {
          loadingLayers[layerId] = true
        } else {
          layerErrors[layerId] = 'No published CAO2024 frame is available at this age.'
        }
      }
        return { ...current, settledAgeMa, layers, selections, loadingLayers, layerErrors }
      })
    })

    for (const selection of targetSelections) {
      loadPaleogeographyLayerAtAge(settledAgeMa, selection.layerId).then((result) => {
        if (generation.current !== currentGeneration || !result) return
        setState((current) => ({
          ...current,
          layers: { ...current.layers, [selection.layerId]: result.collection },
          selections: { ...current.selections, [selection.layerId]: result.selection },
          loadingLayers: { ...current.loadingLayers, [selection.layerId]: false },
        }))
      }, (error) => {
        if (generation.current !== currentGeneration) return
        setState((current) => ({
          ...current,
          loadingLayers: { ...current.loadingLayers, [selection.layerId]: false },
          layerErrors: { ...current.layerErrors, [selection.layerId]: error instanceof Error ? error.message : String(error) },
        }))
      })
    }
  // targetKey is the stable checksum-addressed generation identity for every requested layer.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedKey, settledAgeMa, state.manifest, targetKey])

  const range = state.manifest?.ageRangeMa
  const available = ageMa !== null && Boolean(range && ageMa >= range.youngest && ageMa <= range.oldest)
  return { ...state, requestedAgeMa: ageMa, available }
}
