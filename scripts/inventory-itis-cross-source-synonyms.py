import csv
import gzip
import hashlib
import io
import json
import re
import sqlite3
import subprocess
import unicodedata
import zipfile
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
published = root / 'published-data-reviewed-20261031'
registry = Path('data/catalogue-of-life/releases/2026-08-20/registry')
global_root = Path('data/catalogue-of-life/releases/2026-08-20/global-sources')
archive_path = Path('data/sources/archives/checklistbank-2144-itis-2026-08-26.zip')
out = root / 'itis-cross-source-synonym-inventory-20261031-v2.json'
digest = lambda value: hashlib.sha256(value).hexdigest()
clean = lambda value: ' '.join(unicodedata.normalize('NFC', value or '').split())
manifest_bytes = (published / 'manifest.json').read_bytes()
manifest = json.loads(manifest_bytes)
assert manifest['contentMode'] == 'links-only'
targets = set()
for shard in manifest['shards'].values():
    compressed = (published / shard['path']).read_bytes()
    assert digest(compressed) == shard['sha256']
    targets.update(node for node, entry in json.loads(gzip.decompress(compressed))['entries'].items() if entry['status'] in ('unresolved', 'ambiguous'))
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
try:
    node = db.execute('SELECT id,name,rank FROM nodes WHERE rank=?', ('species',))
    desired_names = {(clean(name), rank.lower()) for ident, name, rank in node if ident in targets}
    registry_manifest_bytes = (registry / 'manifest.json').read_bytes()
    registry_manifest = json.loads(registry_manifest_bytes)
    by_key = {}
    for shard in registry_manifest['hierarchy']['nodes']['files']:
        compressed = (registry / shard['path']).read_bytes()
        assert digest(compressed) == shard['sha256']
        for line in gzip.decompress(compressed).splitlines():
            row = json.loads(line)
            name, rank, author = clean(row.get('scientificName')), (row.get('rank') or '').lower(), clean(row.get('authorship'))
            if author and name.endswith(' ' + author):
                name = name[:-len(author)].rstrip()
            if author and (name, rank) in desired_names:
                by_key.setdefault((name, rank, author), set()).add(row['id'])
    unique_targets = {key: next(iter(ids)) for key, ids in by_key.items() if len(ids) == 1 and next(iter(ids)) in targets}
    global_manifest = json.loads((global_root / 'manifest.json').read_bytes())
    source = next(value for value in global_manifest['sources'] if value['id'] == 'itis-global-original-rc130')
    descriptor_bytes = subprocess.run(['rtk', 'proxy', 'git', 'show', '53d0600b57ac5ea25e68693375dc73103dd03547:' + source['descriptorPath']], check=True, capture_output=True).stdout
    assert digest(descriptor_bytes) == source['descriptorSha256']
    descriptor = json.loads(descriptor_bytes)
    archive_bytes = archive_path.read_bytes()
    assert digest(archive_bytes) == descriptor['source']['archiveSha256']
    members = {row['member']: row for row in descriptor['source']['members']}
    with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
        def rows(name):
            raw = archive.read(name)
            assert digest(raw) == members[name]['sha256']
            yield from csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t')
        name_to_node = {}
        for row in rows('Name.tsv'):
            key = (clean(row['scientificName']), row['rank'].lower(), clean(row['authorship']))
            ident = unique_targets.get(key)
            if ident:
                name_to_node[row['ID']] = ident
        taxon_to_nodes = {}
        for row in rows('Taxon.tsv'):
            ident = name_to_node.get(row['nameID'])
            if ident:
                taxon_to_nodes.setdefault(row['ID'], set()).add(ident)
        synonym_refs = {}
        for row in rows('Synonym.tsv'):
            ids = taxon_to_nodes.get(row['taxonID'], set())
            if len(ids) == 1:
                synonym_refs.setdefault(row['nameID'], []).append((next(iter(ids)), row['taxonID'], row['status']))
        values = {}
        existing = db.cursor()
        for row in rows('Name.tsv'):
            if row['rank'].lower() != 'species' or row['ID'] not in synonym_refs:
                continue
            name = clean(row['scientificName'])
            if not name or len(name) > 120 or re.search(r'[|;\[\]{}\r\n]', name):
                continue
            for ident, taxon_id, status in synonym_refs[row['ID']]:
                if existing.execute('SELECT 1 FROM synonym_names WHERE node_id=? AND name=? LIMIT 1', (ident, name)).fetchone():
                    continue
                values[(ident, name, taxon_id)] = {'node': ident, 'name': name, 'authorship': clean(row['authorship']), 'sourceTaxonId': taxon_id, 'sourceNameId': row['ID'], 'status': status}
    proof = {'snapshotSha256': digest(manifest_bytes), 'registryManifestSha256': digest(registry_manifest_bytes), 'descriptorSha256': digest(descriptor_bytes), 'archiveSha256': digest(archive_bytes), 'mapping': 'exact scientific name, rank and nonempty authorship; unique in tree', 'values': list(values.values())}
    with out.open('x', encoding='utf-8', newline='\n') as handle:
        json.dump(proof, handle, ensure_ascii=False, separators=(',', ':'))
    print(json.dumps({'unlinkedTargets': len(targets), 'uniqueNameAuthorKeys': len(unique_targets), 'mappedSourceNames': len(name_to_node), 'mappedTaxa': len(taxon_to_nodes), 'newRelations': len(values), 'newNodes': len({row['node'] for row in values.values()}), 'output': str(out)}))
finally:
    db.close()
