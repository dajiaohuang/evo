import assert from 'node:assert/strict'
import {validateNodeAggregate,collectNodeReferenceBindings,resolveNodeDocument,createContentReferenceCatalogue} from '../scripts/node-content.mjs'
import {sha256,stableJson,internalId} from './model.mjs'

export const CONTENT_CONTRACT='node-aggregate-v1'
export function prepareNodeRevision({nodeId,parentRevisionId=null,document,references}) {
  validateNodeAggregate(document)
  // Validate metadata once, keep only the references actually used by this node.
  createContentReferenceCatalogue(references)
  const catalogue=new Map(references.map(reference=>[reference.id,reference]))
  const bindings=collectNodeReferenceBindings(document,catalogue)
  const dependencies=[...bindings].sort(([a],[b])=>a.localeCompare(b)).map(([referenceId,selectors])=>{
    const metadata=catalogue.get(referenceId)
    return {referenceId,referenceSha256:sha256(stableJson(metadata)),metadata,selectors}
  })
  // One plain document, no Git paths, hydrated bibliography or generated exports.
  const sourceFiles={},deliveryBindings=[]
  const contentSha256=sha256(stableJson({document,sourceFiles,deliveryBindings}))
  const versions=dependencies.map(row=>[row.referenceId,row.referenceSha256])
  const revisionId=internalId('authored-revision/'+stableJson({nodeId,parentRevisionId,contentSha256,versions}))
  // The actual runtime projection must resolve before a draft can be saved.
  const projection=resolveNodeDocument(document,catalogue)
  assert.deepEqual(projection.identity,document.node.identity)
  return {contract:CONTENT_CONTRACT,nodeId,revisionId,parentRevisionId,contentSha256,document,sourceFiles,deliveryBindings,dependencies}
}
