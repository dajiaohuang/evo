import fs from 'node:fs'

const coveragePath = 'docs/amphibia-content/collection-placeholder-coverage.json'
const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'))
const bodies = {
  en: 'This section is a placeholder. Reference metadata and indexes for the recorded source snapshots have been collected. A detailed account of morphology, life history, ecology, evolution, range, fossils and conservation is deferred until the material has been reviewed. Existing source summaries on this page remain available. A search result or reference record is not a verified biological claim.',
  zh: '本节为占位内容。所记来源快照的 reference 元数据与索引已收集。形态、生活史、生态、演化、分布、化石及保护的详实正文，待材料核对后再整理。本页已有来源摘要继续保留。检索结果或文献记录不等于已核实的生物学主张。',
}
let changed = 0
for (const row of coverage.rows) {
  for (const language of ['en', 'zh']) {
    const path = `${row.path}/page.${language}.md`
    const original = fs.readFileSync(path, 'utf8')
    const marker = `<!-- evo:text /records/amphibia-collection-placeholder/sections/0/text/${language} -->`
    const start = original.indexOf(marker)
    const end = original.indexOf('<!-- /evo:text -->', start)
    if (start < 0 || end < 0 || original.indexOf(marker, start + marker.length) >= 0) throw new Error(`Ambiguous placeholder: ${path}`)
    const updated = `${original.slice(0, start + marker.length)}\n${bodies[language]}\n${original.slice(end)}`
    if (updated !== original) {
      const stage = `${path}.placeholder-status.tmp`
      fs.writeFileSync(stage, updated)
      for (let attempt = 0; ; attempt++) {
        if (fs.readFileSync(path, 'utf8') !== original) throw new Error(`Concurrent page edit: ${path}`)
        try { fs.renameSync(stage, path); break }
        catch (error) {
          if (attempt >= 2 || !['EPERM', 'EBUSY', 'UNKNOWN'].includes(error.code)) throw error
          Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 150)
        }
      }
      changed++
    }
  }
  row.sourceCollectionComplete = true
  row.sourceCollectionScope = 'Reference metadata and indexes for recorded snapshots; detailed biological synthesis deferred'
  row.biologicalSynthesisComplete = false
}
coverage.referenceIndexPhaseComplete = true
coverage.placeholderStatusUpdatedAt = new Date().toISOString()
coverage.existingProsePreserved = true
fs.writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`)
console.log(JSON.stringify({ nodes: coverage.rows.length, changedPlaceholderBodies: changed, biologicalSynthesisComplete: false }))
