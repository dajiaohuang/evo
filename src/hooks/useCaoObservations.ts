import { useEffect, useMemo, useRef, useState } from 'react'
import { loadCaoObservationDataset } from '../data-client/staticDataClient'
import type { RuntimeMapManifest, RuntimeMapObservationDataset } from '../data-client/types'
import type { CaoObservationCollection, CaoObservationDatasetId } from '../types'

export function useCaoObservations(requestedDatasets: readonly CaoObservationDatasetId[]) {
  const [manifest, setManifest] = useState<RuntimeMapManifest | null>(null)
  const [collections, setCollections] = useState<Partial<Record<CaoObservationDatasetId, CaoObservationCollection>>>({})
  const [descriptors, setDescriptors] = useState<Partial<Record<CaoObservationDatasetId, RuntimeMapObservationDataset>>>({})
  const [loading, setLoading] = useState<Partial<Record<CaoObservationDatasetId, boolean>>>({})
  const [errors, setErrors] = useState<Partial<Record<CaoObservationDatasetId, string>>>({})
  const pending = useRef(new Set<CaoObservationDatasetId>())
  const mounted = useRef(true)

  useEffect(() => () => { mounted.current = false }, [])

  const requestedKey = useMemo(() => [...new Set(requestedDatasets)].sort().join('|'), [requestedDatasets])
  useEffect(() => {
    const datasetIds = requestedKey.split('|').filter(Boolean) as CaoObservationDatasetId[]
    for (const datasetId of datasetIds) {
      if (collections[datasetId] || pending.current.has(datasetId)) continue
      pending.current.add(datasetId)
      queueMicrotask(() => {
        if (mounted.current) setLoading((current) => ({ ...current, [datasetId]: true }))
      })
      void loadCaoObservationDataset(datasetId).then((result) => {
        if (!mounted.current) return
        setManifest(result.manifest)
        setCollections((current) => ({ ...current, [datasetId]: result.collection }))
        setDescriptors((current) => ({ ...current, [datasetId]: result.descriptor }))
        setErrors((current) => {
          const next = { ...current }
          delete next[datasetId]
          return next
        })
      }, (error) => {
        if (mounted.current) setErrors((current) => ({ ...current, [datasetId]: error instanceof Error ? error.message : String(error) }))
      }).finally(() => {
        pending.current.delete(datasetId)
        if (mounted.current) setLoading((current) => ({ ...current, [datasetId]: false }))
      })
    }
  }, [collections, requestedKey])

  return { manifest, collections, descriptors, loading, errors }
}
