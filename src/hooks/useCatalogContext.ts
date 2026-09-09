import { useEffect, useState } from 'react'

type Catalog = typeof import('../services/catalog')

export function useCatalogContext(event: string | null, story: string | null) {
  const [catalog, setCatalog] = useState<Catalog | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    if (!event && !story) return
    let active = true
    void import('../services/catalog').then((module) => {
      if (active) setCatalog(module)
    }, (reason) => { if (active) setError(reason instanceof Error ? reason.message : String(reason)) })
    return () => { active = false }
  }, [event, story])
  return { event: catalog?.getEvolutionEvent(event) ?? null, story: catalog?.getEvolutionStory(story) ?? null, error }
}
