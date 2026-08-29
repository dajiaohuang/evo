import { unzipSync } from 'fflate'

const textDecoder = new TextDecoder('utf-8')

function viewOf(bytes) {
  return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
}

function assertRange(bytes, offset, length, label) {
  if (offset < 0 || length < 0 || offset + length > bytes.byteLength) {
    throw new Error(`${label}: truncated binary input at byte ${offset}`)
  }
}

function decodedText(bytes) {
  return textDecoder.decode(bytes).replaceAll('\0', '').trim()
}

export function decodeDbf(bytes) {
  const view = viewOf(bytes)
  assertRange(bytes, 0, 32, 'DBF header')
  const recordCount = view.getUint32(4, true)
  const headerLength = view.getUint16(8, true)
  const recordLength = view.getUint16(10, true)
  if (headerLength < 33 || recordLength < 1) throw new Error('DBF header contains invalid lengths')

  const fields = []
  for (let offset = 32; offset + 32 <= headerLength && bytes[offset] !== 0x0d; offset += 32) {
    const name = decodedText(bytes.subarray(offset, offset + 11))
    const type = String.fromCharCode(bytes[offset + 11])
    const length = bytes[offset + 16]
    if (!name || !length) throw new Error(`DBF field descriptor at byte ${offset} is invalid`)
    fields.push({ name, type, length })
  }
  const describedLength = 1 + fields.reduce((sum, field) => sum + field.length, 0)
  if (describedLength > recordLength) throw new Error('DBF fields exceed the declared record length')

  const records = []
  for (let index = 0; index < recordCount; index += 1) {
    const recordOffset = headerLength + index * recordLength
    assertRange(bytes, recordOffset, recordLength, `DBF record ${index + 1}`)
    if (bytes[recordOffset] === 0x2a) {
      records.push(null)
      continue
    }
    const record = {}
    let fieldOffset = recordOffset + 1
    for (const field of fields) {
      const raw = decodedText(bytes.subarray(fieldOffset, fieldOffset + field.length))
      fieldOffset += field.length
      if (!raw) continue
      if (field.type === 'N' || field.type === 'F') {
        const value = Number(raw)
        if (Number.isFinite(value)) record[field.name] = value
      } else if (field.type === 'L') {
        record[field.name] = /^[TY]$/i.test(raw)
      } else {
        record[field.name] = raw
      }
    }
    records.push(record)
  }
  return records
}

function ringArea(ring) {
  let area = 0
  for (let index = 0; index < ring.length; index += 1) {
    const current = ring[index]
    const next = ring[(index + 1) % ring.length]
    area += current[0] * next[1] - next[0] * current[1]
  }
  return area / 2
}

function containsPoint(ring, point) {
  let inside = false
  for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current, current += 1) {
    const [cx, cy] = ring[current]
    const [px, py] = ring[previous]
    if ((cy > point[1]) !== (py > point[1]) && point[0] < ((px - cx) * (point[1] - cy)) / (py - cy) + cx) inside = !inside
  }
  return inside
}

export function polygonGeometry(rings) {
  const ordered = rings
    .filter((ring) => ring.length >= 3 && Math.abs(ringArea(ring)) > 0)
    .map((ring) => ({ ring, area: Math.abs(ringArea(ring)), parent: null, depth: 0 }))
    .sort((left, right) => right.area - left.area)
  for (let index = 0; index < ordered.length; index += 1) {
    const candidate = ordered[index]
    for (let parentIndex = index - 1; parentIndex >= 0; parentIndex -= 1) {
      const possibleParent = ordered[parentIndex]
      if (containsPoint(possibleParent.ring, candidate.ring[0])) {
        candidate.parent = possibleParent
        candidate.depth = possibleParent.depth + 1
        break
      }
    }
  }

  const polygons = []
  const polygonByOuter = new Map()
  for (const candidate of ordered) {
    if (candidate.depth % 2 === 0) {
      const polygon = [candidate.ring]
      polygons.push(polygon)
      polygonByOuter.set(candidate, polygon)
      continue
    }
    let outer = candidate.parent
    while (outer && outer.depth % 2 !== 0) outer = outer.parent
    polygonByOuter.get(outer)?.push(candidate.ring)
  }
  if (!polygons.length) return null
  return polygons.length === 1
    ? { type: 'Polygon', coordinates: polygons[0] }
    : { type: 'MultiPolygon', coordinates: polygons }
}

export function decodeShp(bytes) {
  const view = viewOf(bytes)
  assertRange(bytes, 0, 100, 'SHP header')
  if (view.getInt32(0, false) !== 9994) throw new Error('SHP header has an invalid file code')
  const features = []
  let offset = 100
  while (offset < bytes.byteLength) {
    assertRange(bytes, offset, 8, 'SHP record header')
    const recordNumber = view.getInt32(offset, false)
    const contentLength = view.getInt32(offset + 4, false) * 2
    const contentOffset = offset + 8
    assertRange(bytes, contentOffset, contentLength, `SHP record ${recordNumber}`)
    const shapeType = view.getInt32(contentOffset, true)
    if (shapeType === 0) {
      features.push(null)
    } else if (shapeType === 5 || shapeType === 15 || shapeType === 25) {
      assertRange(bytes, contentOffset, 44, `SHP polygon record ${recordNumber}`)
      const partCount = view.getInt32(contentOffset + 36, true)
      const pointCount = view.getInt32(contentOffset + 40, true)
      if (partCount < 1 || pointCount < 3) {
        features.push(null)
      } else {
        const partsOffset = contentOffset + 44
        const pointsOffset = partsOffset + partCount * 4
        assertRange(bytes, partsOffset, partCount * 4 + pointCount * 16, `SHP polygon record ${recordNumber}`)
        const partStarts = []
        for (let part = 0; part < partCount; part += 1) partStarts.push(view.getInt32(partsOffset + part * 4, true))
        partStarts.push(pointCount)
        const rings = []
        for (let part = 0; part < partCount; part += 1) {
          const ring = []
          for (let point = partStarts[part]; point < partStarts[part + 1]; point += 1) {
            ring.push([view.getFloat64(pointsOffset + point * 16, true), view.getFloat64(pointsOffset + point * 16 + 8, true)])
          }
          rings.push(ring)
        }
        features.push(polygonGeometry(rings))
      }
    } else {
      throw new Error(`SHP record ${recordNumber}: unsupported shape type ${shapeType}; expected polygon output`)
    }
    offset = contentOffset + contentLength
  }
  return features
}

function archiveFile(entries, extension) {
  const matches = Object.entries(entries).filter(([name]) => name.toLowerCase().endsWith(extension))
  if (matches.length !== 1) throw new Error(`Reconstruction archive must contain exactly one ${extension} file; found ${matches.length}`)
  return matches[0]
}

export function decodeShapefileArchive(archiveBytes) {
  const entries = unzipSync(archiveBytes)
  const [shpName, shpBytes] = archiveFile(entries, '.shp')
  const [, dbfBytes] = archiveFile(entries, '.dbf')
  const geometries = decodeShp(shpBytes)
  const records = decodeDbf(dbfBytes)
  if (geometries.length !== records.length) {
    throw new Error(`${shpName}: SHP/DBF record count mismatch (${geometries.length} geometries, ${records.length} records)`)
  }
  return {
    type: 'FeatureCollection',
    features: geometries.map((geometry, index) => ({ type: 'Feature', properties: records[index] ?? {}, geometry })),
  }
}
