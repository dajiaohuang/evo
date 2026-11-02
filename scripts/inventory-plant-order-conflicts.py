import gzip
import hashlib
import json
import sqlite3
import sys
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
group = sys.argv[1] if len(sys.argv) > 1 else 'plant'
assert group in ('plant', 'other')
raw = (root / 'cross-nameorder-unkeyed-live-checks.json').read_bytes()
data = json.loads(raw)
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
try:
    nodes = {r[0]: r[1:] for r in db.execute('SELECT id,name,rank,parent_id FROM nodes')}
    held = set(db.execute('SELECT node_id,url FROM candidate_identity_held_urls'))
finally:
    db.close()
def ancestor(ident, rank):
    seen = set()
    while ident and ident not in seen:
        seen.add(ident)
        row = nodes.get(ident)
        if not row:
            break
        if row[1] == rank:
            return row[0]
        ident = row[2]
    return None
rows = [row for row in data['rows'] if (ancestor(row['node'], 'class') == 'Magnoliopsida') == (group == 'plant') and (row['node'], row['url']) not in held and nodes[row['node']][1] == 'species' and all(nodes[ident][1] == 'species' for ident in row['others'])]
ids = {row['node'] for row in rows} | {ident for row in rows for ident in row['others']}
registry = Path('data/catalogue-of-life/releases/2026-08-20/registry')
manifest_bytes = (registry / 'manifest.json').read_bytes()
manifest = json.loads(manifest_bytes)
records = {}
for shard in manifest['hierarchy']['nodes']['files']:
    raw_shard = (registry / shard['path']).read_bytes()
    assert hashlib.sha256(raw_shard).hexdigest() == shard['sha256']
    for line in gzip.decompress(raw_shard).splitlines():
        row = json.loads(line)
        if row['id'] in ids:
            records[row['id']] = {key: row.get(key) for key in ('id', 'scientificName', 'authorship', 'rank')}
assert ids == set(records)
enriched = [{**row, 'sourceNode': records[row['node']], 'targetNodes': [records[ident] for ident in row['others']]} for row in rows]
proof = {'sourceSha256': hashlib.sha256(raw).hexdigest(), 'registryManifestSha256': hashlib.sha256(manifest_bytes).hexdigest(), 'rows': enriched}
with (root / f'cross-{group}-order-authorship-evidence.json').open('x', encoding='utf-8') as handle:
    json.dump(proof, handle, ensure_ascii=True, separators=(',', ':'))
print(json.dumps({'links': len(enriched), 'nodes': len({row['node'] for row in enriched}), 'taxonomyRecords': len(ids)}))
