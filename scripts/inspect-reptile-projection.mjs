import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { dirname, join } from 'node:path'
const ledger = JSON.parse(readFileSync('data/sources/reptiledb-turtles-lepidosaurs-1008-import-ledger.json', 'utf8'))
const file = ledger.outputs.files.find(value => value.role === 'col-partition')
const path = join(dirname(dirname(ledger.outputs.descriptor.path)), file.path)
const row = JSON.parse(gunzipSync(readFileSync(path)).toString('utf8').split('\n')[0])
console.log(JSON.stringify({ path, keys: Object.keys(row), row }))
