import { describe, expect, it } from 'vitest'
import { routeHashFromAppUrl } from './nativeRuntime'

describe('native deep-link routing', () => {
  it('maps the custom app scheme to an Atlas hash route', () => {
    expect(routeHashFromAppUrl('evoatlas://open/stories?id=angiosperm-evidence-boundaries'))
      .toBe('#/stories?id=angiosperm-evidence-boundaries')
  })

  it('maps canonical web links without changing their hash state', () => {
    expect(routeHashFromAppUrl('https://dajiaohuang.github.io/evo/#/explore?age=375&taxon=tiktaalik'))
      .toBe('#/explore?age=375&taxon=tiktaalik')
  })

  it('rejects unrelated web origins and malformed links', () => {
    expect(routeHashFromAppUrl('https://example.org/evo/#/home')).toBeNull()
    expect(routeHashFromAppUrl('not a url')).toBeNull()
  })
})
