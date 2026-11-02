import { test } from 'node:test'
import assert from 'node:assert/strict'
import { validateOptionalProvenance } from './wikipedia-col-provenance.mjs'

test('validates optional link data source hashes', () => {
  assert.doesNotThrow(() => validateOptionalProvenance({ exactSourceSynonym: { sourceSha256: 'a'.repeat(64) } }))
  assert.doesNotThrow(() => validateOptionalProvenance({}))
  assert.throws(() => validateOptionalProvenance({ exactSourceSynonym: { sourceSha256: 'invalid' } }), /Invalid exactSourceSynonym source hash/)
  assert.throws(() => validateOptionalProvenance({ ncbiIdentityHolds: {} }), /Invalid ncbiIdentityHolds source hash/)
  for (const field of ['itisCrossSource', 'itisCrossUnkeyed']) {
    assert.doesNotThrow(() => validateOptionalProvenance({ [field]: { sourceSha256: 'b'.repeat(64) } }))
    assert.throws(() => validateOptionalProvenance({ [field]: { sourceSha256: 'invalid' } }), new RegExp(`Invalid ${field} source hash`))
  }
})
