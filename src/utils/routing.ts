export type AppRoute = 'home' | 'catalog' | 'registry' | 'pbdb' | 'stories' | 'explore' | 'research' | 'info' | 'taxa' | 'events' | 'compare' | 'lab'

export interface RouteState {
  route: AppRoute
  params: URLSearchParams
}

const ROUTES = new Set<AppRoute>([
  'home', 'catalog', 'registry', 'pbdb', 'stories', 'explore', 'research', 'info', 'taxa', 'events', 'compare', 'lab',
])

export function parseRouteHash(hash: string): RouteState {
  const normalized = hash.replace(/^#\/?/, '')
  const [rawRoute = 'home', query = ''] = normalized.split('?')
  const route = ROUTES.has(rawRoute as AppRoute) ? rawRoute as AppRoute : 'home'
  return { route, params: new URLSearchParams(ROUTES.has(rawRoute as AppRoute) ? query : '') }
}

export function buildRouteHash(
  route: AppRoute,
  params: Record<string, string | number | null | undefined> = {},
): string {
  const query = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined && value !== '') {
      query.set(key, String(value))
    }
  }
  const suffix = query.toString()
  return `#/${route}${suffix ? `?${suffix}` : ''}`
}

export function getFiniteRouteNumber(params: URLSearchParams, key: string): number | null {
  if (!params.has(key)) return null
  const raw = params.get(key)
  if (raw === null || raw.trim() === '') return null
  const parsed = Number(raw)
  return Number.isFinite(parsed) ? parsed : null
}

export function explorationShareUrl(href: string, native: boolean): string {
  if (!native) return href
  const hash = new URL(href).hash
  return `evoatlas://open/${hash.startsWith('#/') ? hash.slice(2) : 'home'}`
}
