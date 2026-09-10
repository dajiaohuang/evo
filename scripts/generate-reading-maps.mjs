import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve, sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { geoIdentity, geoPath } from 'd3'
import { readJson, rootDir } from './data-lib.mjs'

const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex')

function geometry(descriptor) {
  const path = resolve(rootDir, descriptor.geometryFile)
  if (!path.startsWith(resolve(rootDir, 'data/paleogeography') + sep)) throw new Error('Map source escapes canonical geometry directory')
  const bytes = readFileSync(path)
  if (bytes.length !== descriptor.geometryBytes || digest(bytes) !== descriptor.geometrySha256) throw new Error(`Map source checksum mismatch: ${descriptor.geometryFile}`)
  const data = JSON.parse(gunzipSync(bytes))
  if (data.type !== 'FeatureCollection' || data.features.length !== descriptor.geometryFeatures) throw new Error('Map geometry feature count mismatch')
  return data
}

export function generateReadingMaps({ write, pageHtml, localize, basePath, baseUrl, sitemapUrls }) {
  const provenance = readJson('data/paleogeography/provenance.json')
  const snapshots = [
    { period: 'Present', reconstructionAgeMa: 0, layers: Object.fromEntries(['coastlines', 'plateBoundaries'].map((layer) => [layer, provenance.series.layers[layer].frames.find((frame) => frame.ageMa === 0)])) },
    ...[...provenance.snapshots].reverse(),
  ]
  const projection = geoIdentity().reflectY(true).scale(3).translate([540, 270])
  // Canonical geometry is already wrapped at the antimeridian. A planar
  // equirectangular projection preserves those cuts and GeoJSON ring winding.
  const path = geoPath(projection).digits(1)
  const frames = snapshots.map((snapshot) => {
    const slug = snapshot.period.toLowerCase()
    const source = Object.fromEntries(['coastlines', 'plateBoundaries'].map((layer) => [layer, snapshot.layers[layer]]))
    const land = path(geometry(source.coastlines))
    const boundaries = path(geometry(source.plateBoundaries))
    const ageMa = snapshot.reconstructionAgeMa
    const metadata = { ageMa, model: provenance.service.model, dataset: provenance.dataset, source, processing: 'Equirectangular SVG; projected coordinates rounded to 0.1 pixel at 1080 × 540; no age interpolation or terrain inference.' }
    const grid = [...Array.from({ length: 11 }, (_, i) => `M${(i + 1) * 90},0V540`), ...Array.from({ length: 5 }, (_, i) => `M0,${(i + 1) * 90}H1080`)].join('')
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 540" role="img"><title>CAO2024 · ${ageMa} Ma</title><desc>Modelled coastlines and plate boundaries. Equirectangular projection. Cao et al. (2024), CC-BY-4.0. Not terrain or direct observations.</desc><metadata>${escape(JSON.stringify(metadata))}</metadata><rect width="1080" height="540" fill="#102c39"/><path d="${grid}" fill="none" stroke="#31505b" stroke-width=".5"/><path d="${land}" fill="#b8c7a0" fill-rule="evenodd"/><path d="${boundaries}" fill="none" stroke="#edb77c" stroke-width=".65"/><text x="14" y="520" fill="#e1e8dc" font-family="sans-serif" font-size="12">CAO2024 · ${ageMa} Ma · Cao et al. (2024) · CC-BY-4.0</text></svg>`
    if (Buffer.byteLength(svg) > 2 * 1024 * 1024) throw new Error(`Reading map exceeds 2 MiB: ${slug}`)
    const file = `map/images/${slug}.svg`
    write(file, svg)
    return { slug, period: snapshot.period, ageMa, path: slug === 'present' ? 'map/' : `map/${slug}/`, file, bytes: Buffer.byteLength(svg), sha256: digest(svg), source }
  })
  write('map/manifest.json', JSON.stringify({ model: provenance.service.model, source: provenance.dataset, frames }, null, 2) + '\n')
  write('map-controls.js', readFileSync(resolve(rootDir, 'scripts/reading-map-controls.js'), 'utf8'))
  for (const language of ['en', 'zh']) {
    const zh = language === 'zh'
    const prefix = zh ? 'zh/' : ''
    const label = (frame) => frame.period === 'Present' ? (zh ? '现代' : 'Present') : localize(language, frame.period)
    for (const frame of frames) {
      const title = zh ? '轻量古地理地图' : 'Lightweight paleogeography map'
      const description = zh ? '浏览现代与 12 个地质时期的海岸线和板块边界，按需加载单幅地图。' : 'Browse coastlines and plate boundaries for the present and 12 geological periods, loading one map at a time.'
      const links = frames.map((item) => `<a href="${basePath}/${prefix}${item.path}"${frame.slug === item.slug ? ' aria-current="page"' : ''}>${escape(label(item))}<small>${item.ageMa} Ma</small></a>`).join('')
      const body = `<span class="eyebrow">EVO ATLAS / ${zh ? '轻量地图' : 'LIGHTWEIGHT MAP'}</span><h1>${title}</h1><p class="dek">${description}</p><nav class="map-ages" aria-label="${zh ? '地图年代' : 'Map age'}">${links}</nav><section class="reading-map"><h2>${escape(label(frame))} · ${frame.ageMa} Ma</h2><div class="map-tools" hidden><button type="button" data-zoom="1" aria-label="${zh ? '放大' : 'Zoom in'}">+</button><button type="button" data-zoom="-1" aria-label="${zh ? '缩小' : 'Zoom out'}">−</button><button type="button" data-reset>${zh ? '重置视图' : 'Reset view'}</button><output aria-live="polite">100%</output></div><div class="map-viewport" tabindex="0" role="group" aria-label="${zh ? '地图视窗；方向键平移，加减键缩放，0 键重置' : 'Map viewport; arrow keys pan, plus/minus zoom, 0 resets'}"><img src="${basePath}/${frame.file}" width="1080" height="540" alt="${escape(label(frame))} · ${frame.ageMa} Ma · CAO2024 ${zh ? '模型海岸线和板块边界' : 'modelled coastlines and plate boundaries'}" draggable="false"></div><p class="map-legend"><span>● ${zh ? '浅绿：模型海岸线围定的陆地' : 'Green: land enclosed by modelled coastlines'}</span><span>— ${zh ? '橙色：板块边界' : 'Orange: plate boundaries'}</span></p><p>${zh ? '启用 JavaScript 后可拖动、缩放；无 JavaScript 时仍可切换年代或打开完整 SVG。' : 'With JavaScript, drag and zoom; without it, change ages or open the full SVG.'}</p><div class="actions"><a class="button secondary" href="${basePath}/${frame.file}">${zh ? '打开地图 SVG' : 'Open map SVG'}</a><a href="${basePath}/map/manifest.json">${zh ? '来源与文件校验信息' : 'Sources and file checksums'}</a></div></section><aside class="notice"><strong>${zh ? '模型与科学边界' : 'Model and scientific limits'}</strong><p>${zh ? `当前显示的是 ${frame.ageMa} Ma 的离散重建帧，不是整个地质时期的平均地图，不进行帧间插值。等距圆柱投影会夸大高纬度区域，缩放仅放大显示，不增加地理精度。` : `This is a discrete reconstruction at ${frame.ageMa} Ma, not an average map of the geological period. No frames are interpolated. The equirectangular projection distorts high latitudes; zoom changes display size, not geographic precision.`}</p><p>${zh ? '古地理位置具有模型依赖性，越古老的重建通常越不确定。本图不表示高程、海深或地形，也不将不同模型的化石坐标叠加为配准证据。完整地形、多图层和 SQL 功能仍在完整应用中。' : 'Positions depend on the reconstruction model, with generally greater uncertainty deeper in time. This map does not represent elevation, bathymetry or terrain and does not overlay fossil coordinates from other models as co-registered evidence. Terrain, additional layers and SQL remain in the full application.'}</p></aside><section><h2>${zh ? '来源与许可' : 'Source and license'}</h2><p>Cao et al. (2024), CAO2024 v2.4 · <a href="${escape(provenance.dataset.url)}">${escape(provenance.dataset.title)}</a> · <a href="${escape(provenance.dataset.licenseUrl)}">${escape(provenance.dataset.license)}</a>.</p><p>${zh ? '从仓库内已校验的重建几何生成，输出坐标四舍五入至 1080 × 540 视图中的 0.1 像素；原始科学数据保持不变。' : 'Generated from checksum-verified reconstructed geometry in the repository, rounded to 0.1 pixel in a 1080 × 540 view; canonical scientific data is unchanged.'}</p><a href="${basePath}/${prefix}methods/">${zh ? '方法与证据边界' : 'Methods and evidence boundaries'}</a></section>`
      write(`${prefix}${frame.path}index.html`, pageHtml({ language, title, description, path: prefix + frame.path, alternatePath: (zh ? '' : 'zh/') + frame.path, body, mapControls: true }))
      if (!zh) sitemapUrls.add(`${baseUrl}/${frame.path}`)
    }
  }
  return frames.length * 2
}

export const readingMapCss = `.map-ages{display:flex;flex-wrap:wrap;gap:8px;margin:28px 0}.map-ages a{padding:9px 12px;border:1px solid var(--line);text-decoration:none;min-height:44px}.map-ages small{display:block;color:var(--muted)}.map-ages a[aria-current]{border-color:var(--accent);background:#173a39}.map-tools{display:flex;align-items:center;gap:10px;margin:12px 0}.map-tools[hidden]{display:none}.map-tools button{min-width:44px;min-height:44px;background:#173a39;color:inherit;border:1px solid #547575;border-radius:4px;padding:8px 14px;font:inherit;cursor:pointer}.map-viewport{overflow:hidden;border:1px solid #547575;background:#102c39;position:relative;aspect-ratio:2}.map-viewport img{display:block;width:100%;height:100%;max-width:none;transform-origin:center}.map-viewport[data-interactive]{touch-action:none;cursor:grab}.map-viewport[data-dragging]{cursor:grabbing}.map-legend{display:flex;gap:18px;flex-wrap:wrap;font-size:14px}.map-tools output{font-variant-numeric:tabular-nums}@media(max-width:600px){.map-ages{gap:6px}.map-ages a{padding:7px 9px;font-size:13px}.reading-map h2{font-size:24px}}`
