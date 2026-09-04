import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import zlib from 'node:zlib';
const base='data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/';
test('1033 projection is the exact 96-row Ichthyosporea boundary',()=>{
 const d=JSON.parse(fs.readFileSync(base+'trichomycetes-sidecar.json'));
 assert.equal(d.id,'trichomycetes-archive-crosswalk'); assert.equal(d.scope.sourceClass,'Ichthyosporea');
 assert.deepEqual(d.counts,{total:96,accepted:96,redirect:0,ambiguous:0,unmatched:0,withheld:0,upstreamOnly:0,records:96});
 const rows=JSON.parse(zlib.gunzipSync(fs.readFileSync(base+'trichomycetes-000.json.gz')));
 assert.equal(rows.length,96); assert.equal(new Set(rows.map(x=>x.sourceAcceptedTaxonId)).size,96);
 assert.ok(rows.every(x=>x.status==='accepted'&&x.matchedName&&x.acceptedName&&x.sourceClassification.Class==='Ichthyosporea'));
 assert.ok(rows.every(x=>Array.isArray(x.nameReferences)));
 assert.equal(rows.filter(x=>x.nameReferences.length===1).length,96);
 assert.equal(rows.filter(x=>x.nameReferences[0].reference.Title==='').length,66);
 assert.deepEqual(d.scope.excludedOtherProtozoaIds.sort(),['254534','255335']);
});
