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
out = root / 'marine-cross-source-synonym-inventory-20261031.json'
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
    values, sources, skipped = {}, [], []
    existing = db.cursor()
    for ledger_path in sorted(Path('data/sources').glob('worms-*import-ledger.json')):
        ledger_bytes = ledger_path.read_bytes()
        source = json.loads(ledger_bytes).get('source', {})
        archive_name = source.get('archivePath', '')
        if not archive_name.lower().endswith('.zip') or not source.get('archiveSha256'):
            continue
        archive_bytes = Path(archive_name).read_bytes()
        assert digest(archive_bytes) == source['archiveSha256']
        with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
            required = ('Name.txt', 'Taxon.txt', 'Synonym.txt')
            if not set(required).issubset(archive.namelist()):
                skipped.append(archive_name)
                continue
            members = source.get('members', {})
            def rows(name):
                raw = archive.read(name)
                assert digest(raw) == members[name]['sha256']
                yield from csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t')
            name_to_node = {}
            for row in rows('Name.txt'):
                key = (clean(row['scientificName']), row['rank'].lower(), clean(row['authorship']))
                ident = unique_targets.get(key)
                if ident:
                    name_to_node[row['ID']] = ident
            taxon_to_nodes = {}
            for row in rows('Taxon.txt'):
                ident = name_to_node.get(row['nameID'])
                if ident and row.get('provisional', '').strip().lower() not in ('1', 'true', 'yes'):
                    taxon_to_nodes.setdefault(row['ID'], set()).add(ident)
            synonym_refs = {}
            for row in rows('Synonym.txt'):
                ids = taxon_to_nodes.get(row['taxonID'], set())
                if len(ids) == 1 and row.get('status', '').lower() == 'synonym':
                    synonym_refs.setdefault(row['nameID'], []).append((next(iter(ids)), row['taxonID']))
            for row in rows('Name.txt'):
                if row['rank'].lower() != 'species' or row['ID'] not in synonym_refs:
                    continue
                name = clean(row['scientificName'])
                if not name or len(name) > 120 or re.search(r'[|;\[\]{}\r\n]', name):
                    continue
                for ident, taxon_id in synonym_refs[row['ID']]:
                    if existing.execute('SELECT 1 FROM synonym_names WHERE node_id=? AND name=? LIMIT 1', (ident, name)).fetchone():
                        continue
                    values[(ident, name, archive_name, taxon_id)] = {'node': ident, 'name': name, 'authorship': clean(row['authorship']), 'sourceTaxonId': taxon_id, 'sourceNameId': row['ID'], 'sourceArchive': archive_name, 'status': 'synonym'}
            sources.append({'ledger': str(ledger_path), 'ledgerSha256': digest(ledger_bytes), 'archive': archive_name, 'archiveSha256': digest(archive_bytes), 'matchedTaxa': len(taxon_to_nodes)})
    proof = {'snapshotSha256': digest(manifest_bytes), 'registryManifestSha256': digest(registry_manifest_bytes), 'sources': sources, 'skipped': skipped, 'mapping': 'exact scientific name, rank and nonempty authorship; unique in tree', 'values': list(values.values())}
    with out.open('x', encoding='utf-8', newline='\n') as handle:
        json.dump(proof, handle, ensure_ascii=False, separators=(',', ':'))
    print(json.dumps({'unlinkedTargets': len(targets), 'uniqueNameAuthorKeys': len(unique_targets), 'sources': len(sources), 'skippedArchives': len(skipped), 'newRelations': len(values), 'newNodes': len({row['node'] for row in values.values()}), 'output': str(out)}))
finally:
    db.close()
