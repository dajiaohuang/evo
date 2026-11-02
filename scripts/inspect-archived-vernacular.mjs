import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
const archives = ['data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip', 'data/sources/archives/checklistbank-1101-systema-dipterorum-attempt-47.zip']
for (const archive of archives) {
  const raw = execFileSync('rtk', ['proxy', 'tar', '-xOf', archive, 'VernacularName.tsv'], { maxBuffer: 256 * 1024 * 1024 })
  const lines = raw.toString('utf8').split(/\r?\n/).filter(Boolean), header = lines[0]?.split('\t') ?? []
  const languageIndex = header.findIndex(name => /(?:^|:)language$/i.test(name)), languages = {}
  if (languageIndex >= 0) for (const line of lines.slice(1)) { const language = line.split('\t')[languageIndex] ?? ''; languages[language] = (languages[language] ?? 0) + 1 }
  console.log(JSON.stringify({ archive, archiveSha256: createHash('sha256').update(readFileSync(archive)).digest('hex'), memberSha256: createHash('sha256').update(raw).digest('hex'), rows: Math.max(0, lines.length - 1), header, languages, samples: lines.slice(1, 4) }))
}
