import { expect, test } from '@playwright/test'
import { queryNodeMap } from '../../src/services/nodeMap'
import { createMapProjection, visiblePointProjector } from '../../src/utils/mapProjection'
import type { NodeMapDataset, NodeMapManifest } from '../../src/types/nodeMap'

const base = process.env.NODE_MAP_BASE_URL ?? 'http://127.0.0.1:4173/evo/'
const url = `${base}?lang=en#/home?age=10&mapNode=txn%3A106418`

test('real node data: bubble, heatmap, evidence, export, and unknown identity', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(url)
  const panel = page.locator('#node-map-panel')
  await expect(panel).toBeVisible()
  await expect(panel.locator('.node-map-selection')).toContainText('Perissodactyla', { timeout: 30_000 })
  await expect(panel.locator('.node-map-count')).toContainText(/[1-9]\d* plottable records/, { timeout: 30_000 })
  const canvas = page.locator('.projected-map__vectors')
  await expect(canvas).toHaveAttribute('data-node-point-count', /^[1-9]\d*$/)
  const manifest = await (await page.request.get(`${base}node-map/manifest.json`)).json() as NodeMapManifest
  const frame = manifest.frames.find(item => item.ageMa === 10)!
  const dataset = await (await page.request.get(`${base}node-map/${frame.url}`)).json() as NodeMapDataset
  if (manifest.members) dataset.members = (await (await page.request.get(`${base}node-map/${manifest.members.url}`)).json()).members
  const result = queryNodeMap(dataset, { nodeId: 'txn:106418', treeRevision: manifest.treeRevision, scope: 'descendants',
    gridColumns: 72, time: { olderMa: 15, youngerMa: 5 }, frame: { modelRevision: manifest.modelRevision, referenceFrame: manifest.referenceFrame, anchorPlateId: 0, ageMa: 10 } })
  await panel.getByRole('button', { name: 'Collapse taxon map' }).click()
  const box = (await canvas.boundingBox())!
  const center = (await canvas.getAttribute('data-center'))!.split(',').map(Number) as [number, number]
  const projector = visiblePointProjector(createMapProjection('equal-earth', { center, zoom: Number(await canvas.getAttribute('data-zoom')) }, { width: box.width, height: box.height }))
  const hit = result.bubbles.map(bubble => projector([bubble.longitude, bubble.latitude])).find(point => point && point[0] > 40 && point[0] < box.width - 40 && point[1] > 140 && point[1] < box.height - 220)
  expect(hit).toBeTruthy()
  await page.mouse.click(box.x + hit![0], box.y + hit![1])
  await expect(panel).toBeVisible()
  await expect(panel.locator('.node-map-records')).toHaveAttribute('open', '')
  await expect(panel.locator('.node-map-records li').first()).toBeVisible()
  await panel.getByRole('button', { name: 'Grid heatmap', exact: true }).click()
  await expect(canvas).toHaveAttribute('data-node-point-count', '0')
  await panel.getByRole('button', { name: 'Evidence points', exact: true }).click()
  await expect(canvas).toHaveAttribute('data-node-point-count', /^[1-9]\d*$/)
  if (!await panel.locator('.node-map-records').getAttribute('open').then(value => value !== null)) await panel.locator('.node-map-records summary').click()
  await expect(panel.locator('.node-map-records li').first()).toBeVisible()
  const downloadEvent = page.waitForEvent('download')
  await panel.getByRole('button', { name: 'Export current paleocoordinates' }).click()
  const download = await downloadEvent
  expect(download.suggestedFilename()).toBe('evo-node-map.geojson')
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []; for await (const chunk of stream!) chunks.push(chunk)
  const geojson = JSON.parse(Buffer.concat(chunks).toString())
  expect(geojson.features.length).toBeGreaterThan(0)
  expect(geojson.features[0].properties.reconstruction.ageMa).toBe(10)
  expect(geojson.features[0].properties.reconstruction.modelRevision).toContain('CAO2024')
  await panel.getByRole('button', { name: 'Clear', exact: true }).click()
  await expect(canvas).toHaveAttribute('data-node-point-count', '0')
  await page.goto(`${base}?lang=en#/home?age=10&mapNode=COL%3Aunknown`)
  await expect(page.locator('#node-map-panel')).toContainText('no verified fossil identity mapping', { timeout: 30_000 })
  await expect(canvas).toHaveAttribute('data-node-point-count', '0')
  expect(errors).toEqual([])
})

test('a tree node opens its PBDB identity on the map', async ({ page }) => {
  await page.goto(`${base}?lang=en#/home?age=10&view=tree&taxon=perissodactyla`)
  const openMap = page.getByRole('button', { name: 'View on ancient map', exact: true })
  await expect(openMap).toBeEnabled({ timeout: 30_000 })
  await openMap.click()
  await expect(page.locator('#node-map-panel .node-map-selection')).toContainText('Perissodactyla', { timeout: 30_000 })
  await expect(page.locator('#node-map-panel .node-map-count')).toContainText(/[1-9]\d* plottable records/, { timeout: 30_000 })
  await expect(page.locator('.atlas-view-window').first()).toBeHidden()
})

test('mobile can find a node, jump to its records and keep the map touchable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(`${base}?lang=en#/home?age=65`)
  await page.getByRole('button', { name: 'Taxon map', exact: true }).click()
  const panel = page.locator('#node-map-panel')
  await panel.getByLabel('Find taxa with records').fill('Perissodactyla')
  await panel.locator('.node-map-options').getByRole('button', { name: /^Perissodactyla / }).click()
  await panel.getByRole('button', { name: 'Go to age' }).click()
  await expect(panel.locator('.node-map-count')).toContainText(/[1-9]\d* plottable records/, { timeout: 30_000 })
  const bounds = await panel.boundingBox()
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390)
  expect(bounds!.y + bounds!.height).toBeLessThan(744)
  await panel.getByRole('button', { name: 'Collapse taxon map' }).click()
  await expect(panel).toHaveCount(0)
  await expect(page.locator('.projected-map__vectors')).toHaveAttribute('data-node-point-count', /^[1-9]\d*$/)
  await page.screenshot({ path: '.git/platform-v2/local/node-map/mobile-map.png' })
})
