import { describe, expect, it } from 'vitest'
import { fossilsForSql, validateReadOnlySql } from './localSql'
import type { FossilOccurrence } from '../types'

describe('local SQL safety and projection', () => {
  it('accepts one read-only SELECT or CTE and rejects mutations', () => {
    expect(validateReadOnlySql('SELECT period, count(*) FROM occurrences GROUP BY period;')).toContain('SELECT period')
    expect(validateReadOnlySql('-- local\nWITH x AS (SELECT 1 AS n) SELECT * FROM x')).toContain('WITH x')
    expect(() => validateReadOnlySql('DROP TABLE occurrences')).toThrow(/Only SELECT/)
    expect(() => validateReadOnlySql('SELECT 1; DELETE FROM occurrences')).toThrow(/one read-only/)
    expect(() => validateReadOnlySql("SELECT * FROM occurrences COPY TO 'x'" )).toThrow(/file-writing/)
  })

  it('projects occurrence records into stable analysis columns', () => {
    const record = {
      oid: 'occ:1', tna: 'Equus', idn: 'Equus sp.', tid: 'txn:1', oei: 'Holocene', eag: 0.01, lag: 0,
      cid: 'col:1', cc2: 'US', lng: '-100', lat: '40', paleolng: -98, paleolat: 41,
      packageId: 'perissodactyla', referenceId: 'ref:1',
    } as FossilOccurrence
    expect(fossilsForSql([record])[0]).toMatchObject({
      occurrence_id: 'occ:1', accepted_name: 'Equus', period: 'Quaternary', country: 'US', modern_lng: -100,
    })
  })
})
