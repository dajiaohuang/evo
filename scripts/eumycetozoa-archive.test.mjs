import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import zlib from 'node:zlib';
test('1053 rebuild emits the complete COL target projection',()=>{
 const b='data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/';
 const d=JSON.parse(fs.readFileSync(b+'eumycetozoa-sidecar.json'));
 const rows=JSON.parse(zlib.gunzipSync(fs.readFileSync(b+'eumycetozoa-000.json.gz')));
 assert.equal(d.id,'eumycetozoa-archive-crosswalk');
 assert.equal(d.counts.total,1337); assert.equal(rows.length,1337);
 assert.equal(new Set(rows.map(x=>x.sourceAcceptedTaxonId)).size,1331);
 assert.equal(rows.filter(x=>x.status==='accepted').length,1330);
 assert.equal(rows.filter(x=>x.status==='unmatched').length,7);
 assert.ok(rows.every(x=>x.nameReferences.every(r=>r.referenceType)));
});
