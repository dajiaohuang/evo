import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const testDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(testDirectory, '..')
assert.ok(existsSync(join(projectRoot, 'scripts/check-content-references.mjs')), 'could not locate the project CLI')
const cli = join(projectRoot, 'scripts/check-content-references.mjs')
const schemaSource = join(projectRoot, 'data/schemas/reference.schema.json')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const tmpRoots = []

function fixtureRoot(t) {
  const root = mkdtempSync(join(tmpdir(), 'reference cli fixture with spaces-'))
  tmpRoots.push(root)
  t.after(() => rmSync(root, { recursive: true, force: true }))
  mkdirSync(join(root, 'data/schemas'), { recursive: true })
  mkdirSync(join(root, 'content'), { recursive: true })
  writeFileSync(join(root, 'data/schemas/reference.schema.json'), readFileSync(schemaSource))
  return root
}

test.after(() => {
  for (const root of tmpRoots) rmSync(root, { recursive: true, force: true })
})

function validRow(overrides = {}) {
  return {
    id: 'fixture-reference',
    title: 'A minimal test reference',
    authors: ['Test Author'],
    type: 'journal-article',
    sourceRole: 'primary-study',
    ...overrides,
  }
}

function writeReferences(root, references, file = join(root, 'content/references.yaml')) {
  const yaml = `schemaVersion: 1\nreferences:\n${references.map(row => {
    const fields = Object.entries(row).map(([key, value]) => `    ${key}: ${JSON.stringify(value)}`).join('\n')
    return `  -\n${fields}`
  }).join('\n')}\n`
  writeFileSync(file, yaml)
  return { file, bytes: readFileSync(file) }
}

function run(args, cwd) {
  return spawnSync(process.execPath, [cli, ...args], { cwd, encoding: 'utf8', windowsHide: true })
}

function receipt(result) {
  assert.equal(result.error, undefined, result.error?.message)
  assert.equal(result.status, 0, `exit=${result.status}\nstdout=${result.stdout}\nstderr=${result.stderr}`)
  return JSON.parse(result.stdout.trim())
}

function snapshotTree(root) {
  const entries = []
  function visit(path, relativePath = '.') {
    const stat = statSync(path)
    entries.push([relativePath, stat.isDirectory() ? 'dir' : 'file', stat.mtimeMs])
    if (stat.isDirectory()) {
      for (const name of readdirSync(path).sort()) visit(join(path, name), relativePath === '.' ? name : `${relativePath}/${name}`)
    } else {
      entries[entries.length - 1].push(hash(readFileSync(path)))
    }
  }
  visit(root)
  return entries
}

test('explicit --repo and relative input resolve from a foreign CWD; receipt hashes selected input/schema', t => {
  const root = fixtureRoot(t)
  const { file, bytes } = writeReferences(root, [validRow({ pages: '33:34', publishedAt: '2020-04-05T12:30:00Z' })])
  const foreignCwd = mkdtempSync(join(tmpdir(), 'wrong cwd with spaces-'))
  t.after(() => rmSync(foreignCwd, { recursive: true, force: true }))
  const before = snapshotTree(root)
  const result = run(['--repo', root, '--references', 'content/references.yaml'], foreignCwd)
  const parsed = receipt(result)
  const schemaBytes = readFileSync(join(root, 'data/schemas/reference.schema.json'))
  assert.equal(parsed.status, 'PASS')
  assert.equal(parsed.repo, root)
  assert.equal(parsed.schema, join(root, 'data/schemas/reference.schema.json'))
  assert.equal(parsed.references, file)
  assert.equal(parsed.schemaSha256, hash(schemaBytes))
  assert.equal(parsed.inputSha256, hash(bytes))
  assert.equal(parsed.rowCount, 1)
  assert.equal(parsed.errorCount, 0)
  assert.deepEqual(snapshotTree(root), before, 'CLI must not change fixture bytes or mtimes')
})

test('default repo comes from the CLI import.meta location, not CWD', () => {
  const foreignCwd = mkdtempSync(join(tmpdir(), 'wrong default cwd with spaces-'))
  try {
    const parsed = receipt(run([], foreignCwd))
    assert.equal(parsed.status, 'PASS')
    assert.equal(parsed.repo, projectRoot)
    assert.equal(parsed.schema, join(projectRoot, 'data/schemas/reference.schema.json'))
    assert.equal(parsed.references, join(projectRoot, 'content/references.yaml'))
  } finally {
    rmSync(foreignCwd, { recursive: true, force: true })
  }
})

test('missing and duplicate option values reject', t => {
  const root = fixtureRoot(t)
  for (const args of [['--repo'], ['--references'], ['--repo', root, '--repo', root], ['--references', 'content/references.yaml', '--references', 'content/references.yaml']]) {
    const result = run(args, root)
    assert.equal(result.status, 1, `${args.join(' ')}\n${result.stderr}`)
    assert.match(result.stderr, /FAILED/)
  }
})

test('numeric pages, invalid enum, numeric rights, duplicate IDs, and malformed YAML fail', t => {
  const root = fixtureRoot(t)
  const cases = [
    ['numeric pages', [validRow({ pages: 33 })]],
    ['invalid enum', [validRow({ sourceRole: 'made-up-role' })]],
    ['numeric rights', [validRow({ license: 2024 })]],
    ['duplicate IDs', [validRow(), validRow({ title: 'Second test reference' })]],
  ]
  for (const [name, rows] of cases) {
    writeReferences(root, rows)
    const result = run(['--repo', root], root)
    assert.equal(result.status, 1, `${name}\n${result.stdout}\n${result.stderr}`)
    const output = JSON.parse(result.stdout.trim())
    assert.equal(output.status, 'FAIL', name)
  }
  writeFileSync(join(root, 'content/references.yaml'), 'schemaVersion: 1\nreferences: [broken\n')
  const malformed = run(['--repo', root], root)
  assert.equal(malformed.status, 1)
  assert.match(malformed.stderr, /FAILED/)
})
