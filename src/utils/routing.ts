export type AppRoute = 'home' | 'explore' | 'taxa' | 'events' | 'stories' | 'compare' | 'lab' | 'data' | 'methods'

export interface RouteState {
  route: AppRoute
  params: URLSearchParams
}

const ROUTES = new Set<AppRoute>([
  'home', 'explore', 'taxa', 'events', 'stories', 'compare', 'lab', 'data', 'methods',
])

export function parseRouteHash(hash: string): RouteState {
  const normalized = hash.replace(/^#\/?/, '')
  const [rawRoute = 'home', query = ''] = normalized.split('?')
  const route = ROUTES.has(rawRoute as AppRoute) ? rawRoute as AppRoute : 'home'
  return { route, params: new URLSearchParams(query) }
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
