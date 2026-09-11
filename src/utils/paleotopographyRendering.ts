import { createMapProjection, invertMapPoint, type MapProjectionId, type MapViewport } from "./mapProjection"
import type { MapViewState } from "../types"

export interface ProjectedGridRequest {
  type: "render"
  id: number
  projectionId: MapProjectionId
  camera: MapViewState
  viewport: MapViewport
  width: number
  height: number
}

const palette = [
  [-6000, [5, 20, 48]],
  [-4000, [13, 47, 83]],
  [-2000, [24, 82, 120]],
  [-200, [58, 132, 158]],
  [0, [112, 176, 174]],
  [1, [72, 116, 70]],
  [300, [103, 138, 77]],
  [1000, [157, 143, 91]],
  [2000, [143, 104, 72]],
  [3600, [232, 226, 209]],
] as const

function color(elevation: number): readonly number[] {
  if (elevation <= palette[0][0]) return palette[0][1]
  for (let index = 1; index < palette.length; index += 1) {
    const [upperValue, upperColor] = palette[index]
    const [lowerValue, lowerColor] = palette[index - 1]
    if (elevation > upperValue) continue
    const ratio = (elevation - lowerValue) / (upperValue - lowerValue)
    return upperColor.map((channel, channelIndex) => Math.round(lowerColor[channelIndex] + ratio * (channel - lowerColor[channelIndex])))
  }
  return palette.at(-1)![1]
}

function sample(values: Int16Array, width: number, height: number, latitude: number, longitude: number): number {
  const row = Math.max(0, Math.min(height - 1, (90 - latitude) * (height - 1) / 180))
  const column = Math.max(0, Math.min(width - 1, (longitude + 180) * (width - 1) / 360))
  const row0 = Math.floor(row)
  const column0 = Math.floor(column)
  const row1 = Math.min(height - 1, row0 + 1)
  const column1 = Math.min(width - 1, column0 + 1)
  const rowRatio = row - row0
  const columnRatio = column - column0
  const top = values[row0 * width + column0] * (1 - columnRatio) + values[row0 * width + column1] * columnRatio
  const bottom = values[row1 * width + column0] * (1 - columnRatio) + values[row1 * width + column1] * columnRatio
  return top * (1 - rowRatio) + bottom * rowRatio
}

export function renderProjectedGrid(grid: { values: Int16Array; width: number; height: number }, request: ProjectedGridRequest): Uint8ClampedArray {
  const { width, height, viewport, camera, projectionId } = request
  const rgba = new Uint8ClampedArray(width * height * 4)
  const projection = createMapProjection(projectionId, camera, viewport)
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const point = invertMapPoint(projection, projectionId, [(x + .5) * viewport.width / width, (y + .5) * viewport.height / height])
      if (!point) continue
      const rgb = color(sample(grid.values, grid.width, grid.height, point[1], point[0]))
      const offset = (y * width + x) * 4
      rgba[offset] = rgb[0]; rgba[offset + 1] = rgb[1]; rgba[offset + 2] = rgb[2]; rgba[offset + 3] = 255
    }
  }
  return rgba
}
