import { buildRouteHash, getFiniteRouteNumber, parseRouteHash } from './routing'

export function isLocatedMapRoute(hash: string): boolean {
  if (!/^#\/(home|explore)\?/.test(hash)) return false
  const { params } = parseRouteHash(hash)
  const age = getFiniteRouteNumber(params, 'age')
  const lat = getFiniteRouteNumber(params, 'lat')
  const lng = getFiniteRouteNumber(params, 'lng')
  return age !== null && age >= 0 && age <= 4567
    && lat !== null && Math.abs(lat) <= 90 && lng !== null && Math.abs(lng) <= 180
}

export function searchReturnHash(params: URLSearchParams): string | null {
  const hash = params.get('returnTo')
  return hash && isLocatedMapRoute(hash) ? hash : null
}

export function withSearchReturn(hash: string, previousHash: string): string {
  if (!isLocatedMapRoute(hash) || !isLocatedMapRoute(previousHash)) return hash
  const previous = parseRouteHash(previousHash)
  previous.params.delete('returnTo')
  const next = parseRouteHash(hash)
  next.params.set('returnTo', buildRouteHash(previous.route, Object.fromEntries(previous.params)))
  return buildRouteHash(next.route, Object.fromEntries(next.params))
}
