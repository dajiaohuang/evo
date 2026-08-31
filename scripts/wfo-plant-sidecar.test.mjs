import { describe, expect, it } from 'vitest'
import {
  exactNameKey,
  matchExactWfoRecord,
  parseTsvLine,
  splitColScientificName,
} from './wfo-plant-sidecar-lib.mjs'

const col = { scientificName: 'Example plantus (L.) Author', authorship: '(L.) Author' }
const accepted = {
  nameId: 'wfo-0000000001',
  wfoId: 'wfo-0000000001',
  scientificName: 'Example plantus',
  authorship: '(L.) Author',
}
const key = exactNameKey({ scientificName: accepted.scientificName, authorship: accepted.authorship })

describe('WFO plant sidecar exact matching', () => {
  it('parses quoted TSV fields without changing tabs or escaped quotes', () => {
    expect(parseTsvLine('one\t"two\tparts"\t"three ""quoted"""')).toEqual(['one', 'two\tparts', 'three "quoted"'])
  })

  it('removes only the exact trailing COL authorship field', () => {
    expect(splitColScientificName(col.scientificName, col.authorship)).toEqual({
      name: 'Example plantus',
      authorship: '(L.) Author',
      safe: true,
    })
    expect(splitColScientificName('Example plantus Author', '(L.) Author').safe).toBe(false)
  })

  it('distinguishes accepted names from explicit synonym redirects', () => {
    const acceptedByTaxonId = new Map([[accepted.wfoId, accepted]])
    expect(matchExactWfoRecord(col, new Map([[key, [{ kind: 'accepted', nameId: accepted.nameId, targetTaxonId: accepted.wfoId }]]]), acceptedByTaxonId).status).toBe('accepted')
    expect(matchExactWfoRecord(col, new Map([[key, [{ kind: 'synonym', nameId: 'wfo-0000000002', targetTaxonId: accepted.wfoId }]]]), acceptedByTaxonId).status).toBe('redirect')
  })

  it('withholds unsafe authorship boundaries and preserves ambiguity', () => {
    const acceptedTwo = { ...accepted, nameId: 'wfo-0000000003', wfoId: 'wfo-0000000003' }
    const acceptedByTaxonId = new Map([[accepted.wfoId, accepted], [acceptedTwo.wfoId, acceptedTwo]])
    expect(matchExactWfoRecord({ scientificName: 'Example plantus Author', authorship: '(L.) Author' }, new Map(), acceptedByTaxonId).status).toBe('withheld')
    expect(matchExactWfoRecord(col, new Map([[key, [
      { kind: 'accepted', nameId: accepted.nameId, targetTaxonId: accepted.wfoId },
      { kind: 'accepted', nameId: acceptedTwo.nameId, targetTaxonId: acceptedTwo.wfoId },
    ]]]), acceptedByTaxonId)).toMatchObject({ status: 'ambiguous', candidateWfoIds: [accepted.wfoId, acceptedTwo.wfoId] })
  })
})
