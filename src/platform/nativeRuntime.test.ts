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

  it('opens static evidence in its matching native route and leaves other documents external', () => {
    expect(routeHashFromAppUrl('https://dajiaohuang.github.io/evo/zh/taxa/perissodactyla/'))
      .toBe('#/taxa?id=perissodactyla')
    expect(routeHashFromAppUrl('https://dajiaohuang.github.io/evo/stories/rise-and-fall-perissodactyls/'))
      .toBe('#/stories?id=rise-and-fall-perissodactyls')
    expect(routeHashFromAppUrl('https://dajiaohuang.github.io/evo/methods/')).toBe('#/methods')
    expect(routeHashFromAppUrl('https://dajiaohuang.github.io/evo/zh/apps/')).toBeNull()
    expect(routeHashFromAppUrl('https://dajiaohuang.github.io/evo/references/pbdb/')).toBeNull()
  })
})
