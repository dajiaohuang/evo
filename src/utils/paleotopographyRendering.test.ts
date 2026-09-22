import { expect, it } from 'vitest'
import { renderProjectedGrid, type ProjectedGridRequest } from './paleotopographyRendering'

it.each([
  [-9000, [5, 20, 48]], [10500, [232, 226, 209]],
  [0, [112, 176, 174]], [1, [72, 116, 70]], [150.5, [88, 127, 74]],
] as const)('preserves the palette and fractional interpolation at %s metres', (elevation, rgb) => {
  // The centre interpolates four cells; no rounding of the sampled elevation.
  const grid = { values: new Int16Array([Math.floor(elevation), Math.ceil(elevation), Math.floor(elevation), Math.ceil(elevation)]), width: 2, height: 2 }
  const request: ProjectedGridRequest = { type: 'render', id: 1, projectionId: 'mercator', camera: { center: [0, 0], zoom: 1 }, viewport: { width: 100, height: 100 }, width: 1, height: 1 }
  expect([...renderProjectedGrid(grid, request)]).toEqual([...rgb, 255])
})

it('inverse-projects terrain using the current centre and preserves empty map corners', () => {
  const grid = { values: new Int16Array([0, 0, 0, 1000, 1000, 1000, 3600, 3600, 3600]), width: 3, height: 3 }
  const request: ProjectedGridRequest = { type: 'render', id: 1, projectionId: 'equal-earth', camera: { center: [0, 0], zoom: 1 }, viewport: { width: 1000, height: 600 }, width: 1, height: 1 }
  expect([...renderProjectedGrid(grid, request)]).toEqual([157, 143, 91, 255])
  expect([...renderProjectedGrid(grid, { ...request, camera: { center: [90, 0], zoom: 1 } })]).toEqual([112, 176, 174, 255])
  const image = renderProjectedGrid(grid, { ...request, width: 10, height: 6 })
  expect(image[3]).toBe(0)
  expect(image[(3 * 10 + 5) * 4 + 3]).toBe(255)
  expect([...grid.values]).toEqual([0, 0, 0, 1000, 1000, 1000, 3600, 3600, 3600])
})
