import { readFileSync } from 'node:fs'
const id = process.argv[2]
if (!id) throw new Error('Provide catalogue ID')
const data = JSON.parse(readFileSync('.git/evo-wikipedia-col26-8/uncovered-synonym-title-checks.json', 'utf8'))
console.log(JSON.stringify(data.values.filter(row => row.node === id)))
