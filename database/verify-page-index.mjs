import assert from 'node:assert/strict'
import {readFile,mkdir,writeFile} from 'node:fs/promises'
import {connect,PROJECT_ID,safeError} from './client.mjs'
import {readRevision} from './read-revision.mjs'
import {extractNodeDependencies} from './page-dependencies.mjs'
import {parsePageMarkdown} from '../scripts/node-content.mjs'
const client=await connect(),checks=[]
try{
  await client.query('BEGIN READ ONLY')
  for(const key of ['3KTM2','6G5JP','8GNQF','HY5','N6S2'])for(const locale of ['en','zh']){
    const physicalKey='COL%3A'+key
    const receipt=JSON.parse(await readFile(new URL('../.git/platform-v2/page-dependencies/'+encodeURIComponent(physicalKey)+'-'+locale+'.json',import.meta.url),'utf8'))
    assert.equal(receipt.mode,'private-index-committed')
    const revision=(await client.query('SELECT * FROM evo_v2.node_revision WHERE id=$1',[receipt.revisionId])).rows[0]
    const document=await readRevision(client,revision.id),extracted=extractNodeDependencies(document)
    const root=(await client.query('SELECT v.*,s.ready,s.blockers FROM evo_v2.dependency_version v JOIN evo_v2.dependency_seal s ON s.version_id=v.id WHERE v.id=$1',[receipt.pageVersionId])).rows[0]
    assert.equal(root.kind,'page');assert.equal(root.descriptor.locale,locale)
    assert.deepEqual(root.descriptor.sections,parsePageMarkdown(document.pages[locale],'verified database page').map(section=>section.key))
    const node=(await client.query("SELECT v.* FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version v ON v.id=e.to_version_id WHERE e.from_version_id=$1 AND e.required AND e.role='content'",[root.id])).rows
    assert.equal(node.length,1);assert.equal(node[0].node_revision_id,revision.id)
    const citations=(await client.query("SELECT r.reference_id,e.selectors FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version v ON v.id=e.to_version_id JOIN evo_v2.reference_revision r ON r.version_id=v.reference_version_id WHERE e.from_version_id=$1 AND e.role='citation' AND e.required",[node[0].id])).rows
    assert.deepEqual(citations.map(row=>row.reference_id).sort(),[...extracted.references.keys()].sort())
    for(const citation of citations)assert.deepEqual(citation.selectors,extracted.references.get(citation.reference_id))
    const originals=(await client.query("SELECT v.descriptor->>'expectedSha256' AS hash,e.selectors,e.required FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version v ON v.id=e.to_version_id WHERE e.from_version_id=$1 AND e.role='source-original'",[node[0].id])).rows
    assert.deepEqual(originals.map(row=>row.hash).sort(),[...extracted.hashes.keys()].sort())
    for(const original of originals){assert.equal(original.required,false);assert.deepEqual(original.selectors,extracted.hashes.get(original.hash))}
    const classification=document.node.identity.classification
    const identities=(await client.query("SELECT v.kind,v.taxon_usage_id,r.authority,r.release_key FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version v ON v.id=e.to_version_id JOIN evo_v2.source_release r ON r.id=v.source_release_id WHERE e.from_version_id=$1 AND e.role IN ('identity','classification')",[node[0].id])).rows
    assert.equal(identities.length,1);assert.equal(identities[0].authority,classification.authority);assert.equal(identities[0].release_key,classification.release)
    assert.equal(identities[0].taxon_usage_id,classification.id??null)
    assert.equal(identities[0].kind,classification.id?'taxon':'dataset')
    assert.equal(root.ready,false);assert.ok(root.blockers.every(blocker=>blocker.role==='renderer'))
    const closure=(await client.query('SELECT version_id FROM evo_v2.dependency_closure($1,true)',[root.id])).rows.map(row=>row.version_id).sort()
    assert.deepEqual(closure,receipt.closure.map(row=>row.version_id).sort())
    const reverse=(await client.query('SELECT * FROM evo_v2.dependency_referrers($1)',[node[0].id])).rows
    assert.ok(reverse.some(row=>row.page_version_id===root.id))
    checks.push({physicalKey,locale,pageVersionId:root.id,nodeRevisionId:revision.id,dependencies:closure.length,bibliographicDependencies:citations.length,optionalOriginalFiles:originals.length,classificationBinding:classification.id?'exact-recorded-taxon':'recorded-source-context-only',allSelectorsVerified:true,fullPrivateBodyHashVerified:true,ready:false,blocker:'renderer-not-verified'})
  }
  const counts=(await client.query(`SELECT
    (SELECT count(*)::integer FROM evo_v2.node_revision) node_revisions,
    (SELECT count(*)::integer FROM evo_v2.reference_revision) references_count,
    (SELECT count(*)::integer FROM evo_v2.taxon_usage) taxonomy_nodes,
    (SELECT count(*)::integer FROM evo_v2.artifact) artifacts,
    (SELECT count(DISTINCT node_revision_id)::integer FROM evo_v2.dependency_version WHERE kind='node') indexed_node_revisions,
    (SELECT count(*)::integer FROM evo_v2.dependency_version WHERE kind='page') page_versions,
    (SELECT count(*)::integer FROM evo_v2.dependency_entity) dependency_entities,
    (SELECT count(*)::integer FROM evo_v2.dependency_version) dependency_versions,
    (SELECT count(*)::integer FROM evo_v2.dependency_edge) dependency_edges,
    (SELECT count(*)::integer FROM evo_v2.channel) public_channels,
    (SELECT count(*)::integer FROM evo_v2.release_page) release_pages,
    (SELECT count(*)::integer FROM evo_v2.page_release_seal) sealed_page_releases,
    (SELECT count(*)::integer FROM evo_v2.page_draft_head) draft_pages,
    (SELECT count(*)::integer FROM evo_v2.authoring_workspace) authoring_workspaces,
    (SELECT count(*)::integer FROM evo_v2.node_draft_head) shared_node_drafts,
    (SELECT count(*)::integer FROM evo_v2.page_write_receipt) write_receipts,
    (SELECT count(*)::integer FROM evo_v2.dependency_entity WHERE entity_key LIKE 'native-fixture/%') synthetic_graph_rows,
    (SELECT count(*)::integer FROM evo_v2.node_revision WHERE created_by='native-test-only') synthetic_node_rows,
    pg_database_size(current_database())::text database_bytes`)).rows[0]
  assert.equal(counts.node_revisions,139458);assert.equal(counts.references_count,5255);assert.equal(counts.taxonomy_nodes,2429092);assert.equal(counts.artifacts,1572)
  for(const name of ['public_channels','release_pages','sealed_page_releases','draft_pages','authoring_workspaces','shared_node_drafts','write_receipts','synthetic_graph_rows','synthetic_node_rows'])assert.equal(counts[name],0,name)
  assert.equal(counts.indexed_node_revisions,5);assert.equal(counts.page_versions,10)
  const migrations=(await client.query('SELECT version,sha256 FROM evo_v2.schema_migration ORDER BY version')).rows
  await client.query('COMMIT')
  const report={status:'passed',projectId:PROJECT_ID,recordedAt:new Date().toISOString(),layer:'Native read-only graph verification plus exact private Blob body hash readback',checks,counts,migrations,productionCutover:false,coverage:'Five node-reading aggregates / ten locale views only; full catalogue widgets and full-site dependencies are not imported; every root remains publication-blocked.'}
  await mkdir(new URL('../.git/platform-v2/',import.meta.url),{recursive:true})
  await writeFile(new URL('../.git/platform-v2/page-index-verified.json',import.meta.url),JSON.stringify(report,null,2)+'\n')
  console.log(JSON.stringify({status:report.status,checkedPages:checks.length,counts,productionCutover:false}))
}catch(error){await client.query('ROLLBACK').catch(()=>{});console.error(safeError(error));process.exitCode=1}finally{await client.end()}
