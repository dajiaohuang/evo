import fs from 'node:fs'
import { readNodeContent, writeNodeContent } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const entries = [...JSON.parse(fs.readFileSync(`${base}/pending-profile-mappings.json`)), ...JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))]
let changed = 0
for (const entry of new Map(entries.map(x => [x.path, x])).values()) {
  const node = readNodeContent(entry.path)
  const record = node.records['catalogue-profile']
  if (!record) throw new Error(`Missing owned catalogue reader ${entry.path}`)
  const before = JSON.stringify(record.limitations)
  record.limitations ??= { en: '', zh: '' }
  if (!record.limitations.en.includes('not externally expert-reviewed')) record.limitations.en += ' This reader is not externally expert-reviewed.'
  if (!record.limitations.zh.includes('未经过外部领域专家评审')) record.limitations.zh += ' 本页未经过外部领域专家评审。'
  if (JSON.stringify(record.limitations) === before) continue
  const index = fs.readFileSync(`${entry.path}/index.yaml`)
  writeNodeContent(entry.path, node.index, node.records)
  fs.writeFileSync(`${entry.path}/index.yaml`, index)
  for (const locale of ['en', 'zh']) {
    const file = `${entry.path}/page.${locale}.md`
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  changed++
}
console.log(JSON.stringify({ reviewBoundaryParagraphsNormalized: changed, expertReviewStatusesChanged: 0 }))
