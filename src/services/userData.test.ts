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

  it('rejects extra CSV values instead of silently discarding user data', () => {
    expect(() => parseUserDatasetText('taxon\nAlpha,extra', 'sample.csv')).toThrow('more values than column names')
  })

  it('reports real registry homonyms instead of silently choosing the last entity', () => {
    const preview = parseUserDatasetText('taxon\nAnisian stem teleosteomorph', 'sample.csv')
    expect(preview.matchedEntityIds).toEqual([])
    expect(preview.issues).toContain('Ambiguous taxon name "Anisian stem teleosteomorph" matches 3 entities; supply an entityId to resolve it.')
    const resolved = parseUserDatasetText('entityId,taxon\npseudopholidoctenus-germanicus,Anisian stem teleosteomorph', 'sample.csv')
    expect(resolved.matchedEntityIds).toEqual(['pseudopholidoctenus-germanicus'])
  })
})
