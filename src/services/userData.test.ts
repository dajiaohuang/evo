import { describe, expect, it } from 'vitest'
import { parseUserDatasetText } from './userData'

describe('local user dataset import', () => {
  it('parses quoted CSV and matches registry entities', () => {
    const result = parseUserDatasetText('taxon,formation\nPerissodactyla,"Test, Formation"\nUnknown taxon,Other', 'sample.csv')
    expect(result.recordCount).toBe(2)
    expect(result.matchedEntityIds).toContain('perissodactyla')
    expect(result.unmatchedNames).toContain('Unknown taxon')
  })

  it('parses GeoJSON properties without uploading data', () => {
    const result = parseUserDatasetText(JSON.stringify({ type: 'FeatureCollection', features: [{ type: 'Feature', properties: { taxon: 'Dinosauria' }, geometry: { type: 'Point', coordinates: [1, 2] } }] }), 'sample.geojson')
    expect(result.format).toBe('geojson')
    expect(result.fields).toContain('coordinates')
    expect(result.matchedEntityIds).toContain('dinosauria')
  })
})
