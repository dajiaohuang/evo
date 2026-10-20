import test from 'node:test'
import assert from 'node:assert/strict'
import {extractNodeDependencies} from './page-dependencies.mjs'

function document(){return {
  node:{identity:{kind:'fixture'},structure:{sections:{en:[],zh:['material']}}},
  pages:{zh:'## 材料 {#material}\n\n仅为解析测试。\n\n'},
  evidence:{records:{'catalogue-profile':{
    sections:[{text:{zh:{page:'zh',section:'material',part:'body'}},sourceIds:['study']}],
    sources:[{id:'study',referenceId:'fixture-reference',fields:['id','title','url','locator'],usage:{locator:'Table 2, row 3',sourceFileSha256:'a'.repeat(64)}}],
  }}},
}}
test('Raw Markdown aggregate preserves section and source selectors without copying prose',()=>{
  const actual=extractNodeDependencies(document())
  assert.deepEqual(actual.blockers,[])
  assert.equal(actual.references.get('fixture-reference')[0].pointer,'/evidence/records/catalogue-profile/sources/0')
  assert.equal(actual.hashes.get('a'.repeat(64))[0].pointer,'/evidence/records/catalogue-profile/sources/0/usage/sourceFileSha256')
})
test('A dangling section pointer is rejected before dependency indexing',()=>{
  const value=document();value.evidence.records['catalogue-profile'].sections[0].text.zh.section='missing'
  assert.throws(()=>extractNodeDependencies(value),/missing section/)
})
test('A local passage citation cannot silently resolve to a different or missing source',()=>{
  const value=document();value.evidence.records['catalogue-profile'].sections[0].sourceIds=['other-study']
  assert.throws(()=>extractNodeDependencies(value),/Unknown passage source/)
})
test('A source body with a Markdown image requires a resource adapter',()=>{
  const value=document();value.pages.zh='## 材料 {#material}\n\n![test](figure.png)\n\n'
  assert.ok(extractNodeDependencies(value).blockers.includes('unmodelled-markdown-image:zh/material'))
})
test('Unknown content records are retained as explicit incomplete coverage',()=>{
  const value=document();value.evidence.records['future-record']={value:'retain original'}
  assert.ok(extractNodeDependencies(value).blockers.includes('unsupported-record:future-record'))
})
test('The canonical parser ignores a fake keyed heading inside a code fence',()=>{
  const value=document();value.pages.zh='## 材料 {#material}\n\n```md\n## 示例 {#not-a-section}\n```\n\n'
  assert.deepEqual(extractNodeDependencies(value).blockers,[])
})
