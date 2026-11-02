import csv
import collections
import gzip
import hashlib
import io
import json
import re
import sqlite3
import sys
import unicodedata
import tarfile
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
published = root / 'published-data-reviewed-20261031'
registry = Path('data/catalogue-of-life/releases/2026-08-20/registry')
out = root / 'chilobase-cross-source-synonym-inventory-20261031.json'
digest = lambda value: hashlib.sha256(value).hexdigest()
clean = lambda value: ' '.join(unicodedata.normalize('NFC', value or '').split())
manifest_bytes = (published / 'manifest.json').read_bytes()
manifest = json.loads(manifest_bytes)
assert manifest['contentMode'] == 'links-only'
if '--coverage' in sys.argv:
    ledger = json.loads(Path('data/sources/chilobase-archive-1042-import-ledger.json').read_bytes())['source']
    archive_bytes = Path(ledger['archivePath']).read_bytes()
    assert digest(archive_bytes) == ledger['archiveSha256']
    with tarfile.open(fileobj=io.BytesIO(archive_bytes), mode='r:*') as archive:
        raw = archive.extractfile('AcceptedSpecies.tsv').read()
    assert digest(raw) == ledger['members']['AcceptedSpecies.tsv']['sha256']
    rows = csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t')
    names = {clean(row['Genus'] + ' ' + row['SpeciesEpithet']) for row in rows}
    db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
    try:
        wanted = {ident for ident, name in db.execute("SELECT id,name FROM nodes WHERE rank='species'") if name in names}
    finally:
        db.close()
    counts = collections.Counter()
    candidates = []
    seen = set()
    for shard in manifest['shards'].values():
        compressed = (published / shard['path']).read_bytes()
        assert digest(compressed) == shard['sha256']
        for ident, entry in json.loads(gzip.decompress(compressed))['entries'].items():
            if ident in wanted:
                counts[entry['status']] += 1
                seen.add(ident)
                if entry['status'] == 'candidate':
                    candidates.append({'id': ident, 'options': entry.get('options', [])})
    print(json.dumps({'nodes': len(wanted), 'covered': len(seen), 'missing': len(wanted - seen), 'statuses': counts, 'candidates': candidates}))
    sys.exit(0)
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
    authors_by_name = {}
    for (name, rank, author), ids in by_key.items():
        authors_by_name.setdefault((name, rank), []).append((author, sorted(ids)))
    values, sources, skipped = {}, [], []
    existing = db.cursor()
    for ledger_path in [Path('data/sources/chilobase-archive-1042-import-ledger.json')]:
        ledger_bytes = ledger_path.read_bytes()
        source = json.loads(ledger_bytes).get('source', {})
        archive_name = source.get('archivePath', '')
        if not archive_name.lower().endswith('.zip') or not source.get('archiveSha256'):
            continue
        archive_bytes = Path(archive_name).read_bytes()
        assert digest(archive_bytes) == source['archiveSha256']
        with tarfile.open(fileobj=io.BytesIO(archive_bytes), mode='r:*') as archive:
            required = ('AcceptedSpecies.tsv', 'Synonyms.tsv')
            if not set(required).issubset(archive.getnames()):
                skipped.append(archive_name)
                continue
            members = source.get('members', {})
            def rows(name):
                raw = archive.extractfile(name).read()
                assert digest(raw) == members[name]['sha256']
                yield from csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t')
            taxon_to_nodes = {}
            diagnostics = []
            for row in rows('AcceptedSpecies.tsv'):
                key = (clean(row['Genus'] + ' ' + row['SpeciesEpithet']), 'species', clean(row['AuthorString']))
                if (key[0], key[1]) in desired_names:
                    variants = authors_by_name.get((key[0], key[1]), [])
                    diagnostics.append({'name': key[0], 'sourceAuthor': key[2], 'registryAuthors': variants, 'status': row.get('Sp2000NameStatus')})
                ident = unique_targets.get(key)
                if ident and row.get('Sp2000NameStatus', '').lower() == 'accepted name':
                    taxon_to_nodes.setdefault(row['AcceptedTaxonID'], set()).add(ident)
            for row in rows('Synonyms.tsv'):
                ids = taxon_to_nodes.get(row['AcceptedTaxonID'], set())
                if len(ids) != 1 or row.get('Sp2000NameStatus', '').strip().lower() != 'synonym' or clean(row.get('InfraSpeciesEpithet')):
                    continue
                name = clean(row['Genus'] + ' ' + row['SpeciesEpithet'])
                if not name or len(name) > 120 or re.search(r'[|;\[\]{}\r\n]', name):
                    continue
                ident = next(iter(ids))
                taxon_id = row['AcceptedTaxonID']
                if existing.execute('SELECT 1 FROM synonym_names WHERE node_id=? AND name=? LIMIT 1', (ident, name)).fetchone():
                    continue
                values[(ident, name, archive_name, taxon_id)] = {'node': ident, 'name': name, 'authorship': clean(row['AuthorString']), 'sourceTaxonId': taxon_id, 'sourceNameId': row['ID'], 'sourceArchive': archive_name, 'status': 'synonym'}
            sources.append({'ledger': str(ledger_path), 'ledgerSha256': digest(ledger_bytes), 'archive': archive_name, 'archiveSha256': digest(archive_bytes), 'matchedTaxa': len(taxon_to_nodes)})
    if '--diagnose' in sys.argv:
        print(json.dumps({'matchingNames': len(diagnostics), 'examples': diagnostics[:20]}, ensure_ascii=False))
        sys.exit(0)
    proof = {'snapshotSha256': digest(manifest_bytes), 'registryManifestSha256': digest(registry_manifest_bytes), 'sources': sources, 'skipped': skipped, 'mapping': 'exact scientific name, rank and nonempty authorship; unique in tree', 'values': list(values.values())}
    with out.open('x', encoding='utf-8', newline='\n') as handle:
        json.dump(proof, handle, ensure_ascii=False, separators=(',', ':'))
    print(json.dumps({'unlinkedTargets': len(targets), 'uniqueNameAuthorKeys': len(unique_targets), 'sources': len(sources), 'skippedArchives': len(skipped), 'newRelations': len(values), 'newNodes': len({row['node'] for row in values.values()}), 'output': str(out)}))
finally:
    db.close()
