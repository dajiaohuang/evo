import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { gzipSync } from 'node:zlib'

export function applicationManifest(source) {
  const summary = { ...source }
  delete summary.checksums
  return summary
}

export function encodeApplicationReferences(source) {
  return gzipSync(Buffer.from(JSON.stringify(source)), { level: 9 }).toString('base64')
}

export function applicationDataPlugin(root) {
  const normalize = value => {
    const path = value.replaceAll('\\', '/')
    return process.platform === 'win32' ? path.toLowerCase() : path
  }
  const manifestPath = resolve(root, 'data/manifest.json')
  const referencesPath = resolve(root, 'data/references.json')
  const manifestId = '\0evo:application-manifest'
  const referencesId = '\0evo:application-references'
  return {
    name: 'evo-application-data',
    enforce: 'pre',
    resolveId(source, importer) {
      // Explicit raw imports retain the full source manifest for query exports.
      if (!importer || source.includes('?') || !source.endsWith('.json')) return
      const path = normalize(resolve(dirname(importer.split('?')[0]), source))
      if (path === normalize(manifestPath)) return manifestId
      if (path === normalize(referencesPath)) return referencesId
    },
    load(id) {
      if (id === manifestId) {
        this.addWatchFile(manifestPath)
        return `export default ${JSON.stringify(applicationManifest(JSON.parse(readFileSync(manifestPath, 'utf8'))))};`
      }
      if (id === referencesId) {
        this.addWatchFile(referencesPath)
        const encoded = encodeApplicationReferences(JSON.parse(readFileSync(referencesPath, 'utf8')))
        // Preserve every reference field, variant and record. Encoding only
        // avoids repeating large metadata objects in application JavaScript.
        return `import { gunzipSync, strFromU8 } from 'fflate';
const bytes = Uint8Array.from(atob('${encoded}'), value => value.charCodeAt(0));
export default JSON.parse(strFromU8(gunzipSync(bytes)));`
      }
    },
  }
}
