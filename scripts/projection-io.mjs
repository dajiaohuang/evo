import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { parse } from 'yaml'

export function writeUtf8(path, text) {
  mkdirSync(dirname(path), { recursive: true })
  if (existsSync(path) && readFileSync(path, 'utf8') === text) return false
  const temporary = path + '.content-tmp'
  writeFileSync(temporary, text, 'utf8')
  renameSync(temporary, path)
  return true
}

export const readYaml = path => parse(readFileSync(path, 'utf8'), { uniqueKeys: true, maxAliasCount: 0 })
export const jsonText = value => JSON.stringify(value, null, 2) + '\n'
export const digest = bytes => createHash('sha256').update(bytes).digest('hex')
