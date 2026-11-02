import { execFileSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
const root = 'data/sources/archives', archives = readdirSync(root).filter(name => name.endsWith('.zip')).sort(), results = [], errors = []
for (const name of archives) {
  try {
    const names = execFileSync('rtk', ['proxy', 'tar', '-tf', join(root, name)], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).split(/\r?\n/)
    const vernacular = names.filter(value => /(?:^|\/)vernacularname\.(?:tsv|csv)$/i.test(value))
    if (vernacular.length) results.push({ archive: name, members: vernacular })
  } catch (error) { errors.push({ archive: name, error: error.message }) }
}
console.log(JSON.stringify({ archives: archives.length, withVernacular: results, errors }))
