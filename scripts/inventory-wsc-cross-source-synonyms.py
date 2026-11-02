import csv
import gzip
import hashlib
import io
import json
import re
import sqlite3
import unicodedata
import zipfile
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
published = root / 'published-data-reviewed-20261031'
registry = Path('data/catalogue-of-life/releases/2026-08-20/registry')
ledger_path = Path('data/sources/wsc-spiders-archive-56185-import-ledger.json')
archive_path = Path('data/sources/archives/checklistbank-56185-wsc-2026-08-30.zip')
out = root / 'wsc-cross-source-synonym-inventory-20261031.json'
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
    ledger_bytes = ledger_path.read_bytes()
    ledger = json.loads(ledger_bytes)
    assert ledger['source']['datasetId'] == '56185'
    archive_bytes = archive_path.read_bytes()
    assert digest(archive_bytes) == ledger['source']['archiveSha256']
    with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
        raw = archive.read('NameUsage.tsv')
        assert digest(raw) == ledger['source']['members']['NameUsage.tsv']['sha256']
        rows = list(csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t'))
        def scientific_name(row):
            return clean(row['col:scientificName'] or ' '.join(value for value in (row['col:genericName'], row['col:specificEpithet'], row['col:infraspecificEpithet']) if value))
        taxon_to_nodes = {}
        for row in rows:
            if row['col:status'] != 'accepted':
                continue
            key = (scientific_name(row), row['col:rank'].lower(), clean(row['col:authorship']))
            ident = unique_targets.get(key)
            if ident:
                taxon_to_nodes.setdefault(row['col:ID'], set()).add(ident)
        values = {}
        existing = db.cursor()
        for row in rows:
            if row['col:status'] != 'synonym' or row['col:rank'].lower() != 'species':
                continue
            name = scientific_name(row)
            if not name or len(name) > 120 or re.search(r'[|;\[\]{}\r\n]', name):
                continue
            ids = taxon_to_nodes.get(row['col:parentID'], set())
            if len(ids) != 1:
                continue
            ident = next(iter(ids))
            if existing.execute('SELECT 1 FROM synonym_names WHERE node_id=? AND name=? LIMIT 1', (ident, name)).fetchone():
                continue
            values[(ident, name, row['col:parentID'])] = {'node': ident, 'name': name, 'authorship': clean(row['col:authorship']), 'sourceTaxonId': row['col:parentID'], 'sourceNameId': row['col:ID'], 'status': 'synonym'}
    proof = {'snapshotSha256': digest(manifest_bytes), 'registryManifestSha256': digest(registry_manifest_bytes), 'ledgerSha256': digest(ledger_bytes), 'archiveSha256': digest(archive_bytes), 'mapping': 'exact scientific name, rank and nonempty authorship; unique in tree', 'values': list(values.values())}
    with out.open('x', encoding='utf-8', newline='\n') as handle:
        json.dump(proof, handle, ensure_ascii=False, separators=(',', ':'))
    print(json.dumps({'unlinkedTargets': len(targets), 'uniqueNameAuthorKeys': len(unique_targets), 'mappedTaxa': len(taxon_to_nodes), 'newRelations': len(values), 'newNodes': len({row['node'] for row in values.values()}), 'output': str(out)}))
finally:
    db.close()
