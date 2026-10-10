import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { gzipSync } from 'node:zlib'

export function applicationManifest(source) {
  const summary = { ...source }
  delete summary.checksums
  return summary
}

export function encodeApplicationData(source) {
  return gzipSync(Buffer.from(JSON.stringify(source)), { level: 9 }).toString('base64')
}

export function applicationDataPlugin(root) {
  const normalize = value => {
    const path = value.replaceAll('\\', '/')
    return process.platform === 'win32' ? path.toLowerCase() : path
  }
  const manifestPath = resolve(root, 'data/manifest.json')
  const manifestId = '\0evo:application-manifest'
  const compressedSources = new Map([
    ['references', 'data/references.json'],
    ['ontology', 'data/navigation/atlas-ontology.json'],
    ['profiles', 'data/registry/taxon-profiles.json'],
    ['events', 'data/events.json'],
    ['claims', 'data/evidence/claims.json'],
    ['entities', 'data/registry/entities/entities.json'],
  ].map(([name, path]) => [`\0evo:application-${name}`, resolve(root, path)]))
  return {
    name: 'evo-application-data',
    enforce: 'pre',
    resolveId(source, importer) {
      // Explicit raw imports retain the full source manifest for query exports.
      if (!importer || source.includes('?') || !source.endsWith('.json')) return
      const path = normalize(resolve(dirname(importer.split('?')[0]), source))
      if (path === normalize(manifestPath)) return manifestId
      for (const [id, sourcePath] of compressedSources) {
        if (path === normalize(sourcePath)) return id
      }
    },
    load(id) {
      if (id === manifestId) {
        this.addWatchFile(manifestPath)
        return `export default ${JSON.stringify(applicationManifest(JSON.parse(readFileSync(manifestPath, 'utf8'))))};`
      }
      const path = compressedSources.get(id)
      if (path) {
        this.addWatchFile(path)
        const encoded = encodeApplicationData(JSON.parse(readFileSync(path, 'utf8')))
        // Preserve every field, variant and relationship without carrying
        // source formatting and repeated metadata into application JavaScript.
        return `import { gunzipSync, strFromU8 } from 'fflate';
const bytes = Uint8Array.from(atob('${encoded}'), value => value.charCodeAt(0));
export default JSON.parse(strFromU8(gunzipSync(bytes)));`
      }
    },
  }
}
