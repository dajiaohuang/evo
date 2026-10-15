#!/usr/bin/env node
/** Strict authoring preflight for a references table; not a runtime loader. */
import { createHash } from 'node:crypto'
import { readFileSync, realpathSync, statSync } from 'node:fs'
import { dirname, isAbsolute, join, relative, resolve, sep, win32 } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'yaml'
import Ajv2020 from 'ajv/dist/2020.js'

const scriptRepo = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const fail = message => {
  console.error(`Reference preflight FAILED: ${message}`)
  process.exitCode = 1
}
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')

function parseArgs(args) {
  let repoArg
  let referencesArg
  for (let i = 0; i < args.length; i += 1) {
    const flag = args[i]
    if (flag !== '--repo' && flag !== '--references') throw new Error(`unknown argument: ${flag}`)
    const value = args[i + 1]
    if (!value || value.startsWith('--')) throw new Error(`missing value for ${flag}`)
    if (flag === '--repo') {
      if (repoArg !== undefined) throw new Error('--repo may be specified only once')
      repoArg = value
    } else {
      if (referencesArg !== undefined) throw new Error('--references may be specified only once')
      referencesArg = value
    }
    i += 1
  }
  return { repoArg, referencesArg }
}

try {
  const { repoArg, referencesArg } = parseArgs(process.argv.slice(2))
  if (repoArg && !(isAbsolute(repoArg) || win32.isAbsolute(repoArg))) {
    throw new Error('--repo must be an absolute path')
  }
  if (process.platform !== 'win32' && repoArg && win32.isAbsolute(repoArg) && !isAbsolute(repoArg)) {
    throw new Error(`Windows --repo path cannot be resolved on ${process.platform}: ${repoArg}`)
  }
  const repo = realpathSync(repoArg ? resolve(repoArg) : scriptRepo)
  if (!statSync(repo).isDirectory()) throw new Error(`--repo is not a directory: ${repo}`)

  if (referencesArg && process.platform !== 'win32' && win32.isAbsolute(referencesArg) && !isAbsolute(referencesArg)) {
    throw new Error(`Windows --references path cannot be resolved on ${process.platform}: ${referencesArg}`)
  }
  const inputPath = referencesArg
    ? (isAbsolute(referencesArg) || win32.isAbsolute(referencesArg) ? resolve(referencesArg) : resolve(repo, referencesArg))
    : join(repo, 'content/references.yaml')
  const input = realpathSync(inputPath)
  const schemaPath = realpathSync(join(repo, 'data/schemas/reference.schema.json'))
  const schemaRelativePath = relative(repo, schemaPath)
  if (schemaRelativePath === '..' || schemaRelativePath.startsWith(`..${sep}`) || isAbsolute(schemaRelativePath)) {
    throw new Error(`resolved schema is outside --repo: ${schemaPath}`)
  }
  const inputBytes = readFileSync(input)
  const schemaBytes = readFileSync(schemaPath)
  const document = parse(inputBytes.toString('utf8'), { uniqueKeys: true })
  if (!document || typeof document !== 'object' || Array.isArray(document)) throw new Error('references document must be an object')
  if (document.schemaVersion !== 1) throw new Error(`unsupported references schemaVersion: ${String(document.schemaVersion)}`)
  if (!Array.isArray(document.references)) throw new Error('references must be an array')

  const schema = JSON.parse(schemaBytes.toString('utf8'))
  const validate = new Ajv2020({ allErrors: true, strict: true }).compile(schema)
  const ids = new Set()
  const errors = []
  for (const [index, row] of document.references.entries()) {
    const id = row && typeof row.id === 'string' && row.id ? row.id : `<row ${index + 1}>`
    if (row && typeof row.id === 'string' && row.id) {
      if (ids.has(row.id)) errors.push(`${id}: duplicate reference ID`)
      ids.add(row.id)
    }
    if (!validate(row)) {
      for (const error of validate.errors ?? []) errors.push(`${id} ${error.instancePath || '/'} ${error.message}`)
    }
  }
  const receipt = {
    status: errors.length ? 'FAIL' : 'PASS',
    repo,
    schema: schemaPath,
    schemaSha256: sha256(schemaBytes),
    references: input,
    inputSha256: sha256(inputBytes),
    rowCount: document.references.length,
    errorCount: errors.length,
  }
  console.log(JSON.stringify(receipt))
  if (errors.length) {
    for (const error of errors) console.error(`- ${error}`)
    process.exitCode = 1
  }
} catch (error) {
  fail(error.message)
}
