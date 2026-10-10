import { readFileSync } from 'node:fs'
import Ajv2020 from 'ajv/dist/2020.js'
import { describe, expect, it } from 'vitest'

const schema = JSON.parse(readFileSync('data/schemas/profile.schema.json', 'utf8'))
const validate = new Ajv2020({ strict: true, allErrors: true }).compile(schema)
const source = JSON.parse(readFileSync('data/registry/taxon-profiles.json', 'utf8')).find(record => record.id === 'dinosauria')

describe('explicitly unresolved atlas geography', () => {
  it('retains the explicit null identifier through source and registry projections', () => {
    const generated = JSON.parse(readFileSync('data/packages/archosauria/dinosauria/profiles.source.json', 'utf8')).find(record => record.id === 'dinosauria')
    expect(Object.hasOwn(generated, 'pbdbTaxonId')).toBe(true)
    expect(generated.pbdbTaxonId).toBe(null)
    expect(source.pbdbTaxonId).toBe(null)
  })
  it('keeps geography availability independent of identity and range confidence', () => {
    expect(validate({ ...source, pbdbTaxonId: null, geography: [], rangeProvisional: true })).toBe(true)
    expect(validate({ ...source, pbdbTaxonId: 'txn:1', geography: [], rangeProvisional: true })).toBe(true)
    expect(validate({ ...source, pbdbTaxonId: null, geography: [], rangeProvisional: false })).toBe(true)
    expect(validate({ ...source, geography: [''] })).toBe(false)
  })
})
