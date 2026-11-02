import { test } from 'node:test'
import assert from 'node:assert/strict'
import { externalIdStatus,linkEvidenceStatus,nameIdentityEvidence,sameParentIdentityCandidates } from './wikipedia-col-external-id.mjs'
test('unknown identifiers stay candidates while current conflicts are rejected',()=>{
 const known=id=>id==='B'
 assert.equal(externalIdStatus(['OLD'],'A',known),'unresolved')
 assert.equal(externalIdStatus(['B'],'A',known),'conflict')
 assert.equal(externalIdStatus(['A'],'A',known),'exact')
 assert.equal(linkEvidenceStatus([{status:'available',col_ids:'["OLD"]'}],'A',known),'unresolved')
 assert.equal(linkEvidenceStatus([{status:'available',col_ids:'["OLD"]'},{status:'available',col_ids:'["B"]'}],'A',known),'conflict')
 assert.equal(linkEvidenceStatus([{status:'disambiguation',col_ids:null}],'A',known),'conflict')
})
test('same-name candidates require equal rank and the same explicit parent for every known ID',()=>{
 const node={name:'Iridopsis',rank:'genus',parent_id:'family'}
 const rows=[{colIds:['B'],articles:['url']},{colIds:['C'],articles:['url']},{colIds:['B','C'],articles:['url']},{colIds:['A'],articles:['url']}]
 const others={B:{...node},C:{...node,parent_id:'other'}}
 assert.deepEqual(sameParentIdentityCandidates(rows,'A',node,id=>others[id]),[rows[0]])
 assert.deepEqual(sameParentIdentityCandidates(rows,'A',{...node,parent_id:null},id=>others[id]),[])
})
test('same-name evidence blocks other current identities and marks absent identifiers',()=>{
 const candidates=[{item:'conflict',colIds:['B'],articles:['https://en.wikipedia.org/wiki/Conflict']},{item:'unknown',colIds:['OLD'],articles:['https://en.wikipedia.org/wiki/Unknown']},{item:'exact',colIds:['A'],articles:['https://en.wikipedia.org/wiki/Exact']}]
 const result=nameIdentityEvidence(candidates,'A',id=>id==='B')
 assert.deepEqual(result.eligible.map(c=>c.item),['unknown','exact'])
 assert.ok(result.conflictingUrls.has(candidates[0].articles[0]))
 assert.ok(result.unresolvedUrls.has(candidates[1].articles[0]))
 assert.equal(result.unresolvedUrls.has(candidates[2].articles[0]),false)
})
