import { describe, expect, it } from 'vitest'
import { encodeWfoSource, decodeWfoSource } from './wfo-source-codec.mjs'

describe('WFO build-time source compression', () => {
  it('preserves every source byte including accents, whitespace and uncertainty', () => {
    const source = Buffer.from('{\n "name": "Espèce", "qualifier": "?", "records": [1, 2]\n}\n')
    expect(decodeWfoSource(encodeWfoSource(source))).toEqual(source)
  })

  it('produces the same bytes for repeated encoding', () => {
    const source = Buffer.from('WFO source data\n'.repeat(100))
    expect(encodeWfoSource(source)).toEqual(encodeWfoSource(source))
  })
})
