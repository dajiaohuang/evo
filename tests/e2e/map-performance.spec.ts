import { test, expect } from '@playwright/test'
import { writeFileSync } from 'node:fs'

test('measure map and timeline interaction frames', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('./?lang=en#/home?age=0&projection=equal-earth&zoom=2')
  const canvas = page.locator('.projected-map__vectors')
  await expect(canvas).toHaveAttribute('data-render-count', /^[1-9]\d*$/, { timeout: 30000 })
  await page.waitForTimeout(2000)
  const cdp = await page.context().newCDPSession(page)
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
  const begin = async () => page.evaluate(() => {
    const node = document.querySelector<HTMLCanvasElement>('.projected-map__vectors')!
    const samples: { paint: number; phases: number[]; latency: number }[] = []
    const gaps: number[] = []
    const started = performance.now()
    let previous = started, active = true
    const tick = (now: number) => { gaps.push(now - previous); previous = now; if (active) requestAnimationFrame(tick) }
    requestAnimationFrame(tick)
    const observer = new MutationObserver(() => samples.push({ paint: Number(node.dataset.renderMs), phases: node.dataset.phases!.split(',').map(Number), latency: Number(node.dataset.inputLatencyMs) }))
    observer.observe(node, { attributes: true, attributeFilter: ['data-render-count'] })
    Object.assign(window, { endMapMeasurement: () => { active = false; observer.disconnect(); return { samples, gaps, duration: performance.now() - started } } })
  })
  const end = async () => page.evaluate(() => (window as unknown as { endMapMeasurement: () => unknown }).endMapMeasurement()) as Promise<{ samples: { paint: number; phases: number[]; latency: number }[]; gaps: number[]; duration: number }>
  const bounds = (await canvas.boundingBox())!
  await page.mouse.move(bounds.x + bounds.width * .45, bounds.y + bounds.height * .5)
  await page.mouse.down()
  await begin()
  await page.mouse.move(bounds.x + bounds.width * .75, bounds.y + bounds.height * .6, { steps: 24 })
  const map = await end()
  console.log('Geometry vs drawing', await canvas.getAttribute('data-geometry-ms'), await canvas.getAttribute('data-drawing-ms'))
  console.log('Map sample', JSON.stringify(map.samples.slice(0, 3)), 'frames', map.samples.length)
  writeFileSync('.git/platform-v2/local/node-map/performance-map-partial.json', JSON.stringify(map))
  await page.mouse.up()
  const handle = page.locator('svg circle[style*="ew-resize"]')
  const handleBounds = (await handle.boundingBox())!
  await page.mouse.move(handleBounds.x + handleBounds.width / 2, handleBounds.y + handleBounds.height / 2)
  await page.mouse.down()
  await begin()
  await page.mouse.move(handleBounds.x - 100, handleBounds.y + handleBounds.height / 2, { steps: 24 })
  const timeline = await end()
  await page.mouse.up()
  const percentile = (items: number[], p: number) => [...items].sort((a,b) => a-b)[Math.min(items.length - 1, Math.floor(items.length * p))] ?? 0
  const summary = (data: typeof map) => ({ frames: data.samples.length, duration: data.duration, presentedFps: data.samples.length * 1000 / data.duration, paintP50: percentile(data.samples.map(x=>x.paint), .5), paintP95: percentile(data.samples.map(x=>x.paint), .95), gapP95: percentile(data.gaps,.95), gapsOver50: data.gaps.filter(x=>x>50).length, phasesP50: [0,1,2,3].map(i=>percentile(data.samples.map(x=>x.phases[i]),.5)) })
  const report = { map: summary(map), timeline: summary(timeline), cpuThrottle: 4 }
  console.log(JSON.stringify(report))
  writeFileSync(process.env.MAP_PERF_OUTPUT ?? '.git/platform-v2/local/node-map/performance.json', JSON.stringify({ report, map, timeline }, null, 2))
})
