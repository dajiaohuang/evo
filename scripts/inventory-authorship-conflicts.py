import gzip
import hashlib
import json
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
raw = (root / 'cross-remaining-unkeyed-candidates-evidence.json').read_bytes()
source = json.loads(raw)
ids = {row['node'] for row in source['rows']} | {ident for row in source['rows'] for ident in row['others']}
registry = Path('data/catalogue-of-life/releases/2026-08-20/registry')
manifest_bytes = (registry / 'manifest.json').read_bytes()
manifest = json.loads(manifest_bytes)
nodes = {}
for shard in manifest['hierarchy']['nodes']['files']:
    data = (registry / shard['path']).read_bytes()
    assert hashlib.sha256(data).hexdigest() == shard['sha256']
    for line in gzip.decompress(data).splitlines():
        row = json.loads(line)
        if row['id'] in ids:
            nodes[row['id']] = {key: row.get(key) for key in ('id', 'scientificName', 'authorship', 'rank', 'parentId', 'sourceDatasetId')}
assert ids == set(nodes)
rows = []
for row in source['rows']:
    source_node = nodes[row['node']]
    others = [nodes[ident] for ident in row['others']]
    if source_node['authorship'] and all(other['authorship'] and other['authorship'] != source_node['authorship'] for other in others):
        rows.append({**row, 'sourceNode': source_node, 'targetNodes': others})
proof = {'sourceSha256': hashlib.sha256(raw).hexdigest(), 'registryManifestSha256': hashlib.sha256(manifest_bytes).hexdigest(), 'rows': rows}
with (root / 'cross-authorship-unkeyed-candidates-evidence.json').open('x', encoding='utf-8') as handle:
    json.dump(proof, handle, ensure_ascii=True, separators=(',', ':'))
print(json.dumps({'rows': len(rows), 'nodes': len({row['node'] for row in rows}), 'withoutDistinctAuthorship': len(source['rows']) - len(rows)}))
