/**
 * Paleogeographic geometry is deliberately unavailable until every snapshot has
 * source, version, licence, processing and checksum provenance. Keeping this
 * hook makes the absence explicit at the map boundary without bundling the
 * legacy, provenance-unknown GeoJSON files.
 */
export function usePaleogeography(_period: string | null) {
  void _period
  return {
    geoJson: null as ContinentFeatureCollection | null,
    loading: false,
    error: null,
    available: false as boolean,
  }
}
import type { ContinentFeatureCollection } from '../types'
