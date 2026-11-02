import collections
import gzip
import hashlib
import json
import sqlite3
import sys
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
try:
    covered = {row[0] for row in db.execute('SELECT id FROM uncovered_nodes')}
    published = root / 'published-data-reviewed-20261031'
    manifest = json.loads((published / 'manifest.json').read_bytes())
    counts = collections.Counter()
    examples = []
    missing_rows = []
    missing_by_status = collections.Counter()
    name_query = db.cursor()
    for shard in manifest['shards'].values():
        data = (published / shard['path']).read_bytes()
        assert hashlib.sha256(data).hexdigest() == shard['sha256']
        for ident, entry in json.loads(gzip.decompress(data))['entries'].items():
            if entry['status'] not in ('unresolved', 'ambiguous'):
                continue
            counts['total'] += 1
            if ident not in covered:
                counts['missing'] += 1
                missing_by_status[(entry['status'], entry.get('matchKind', ''))] += 1
                name = name_query.execute('SELECT name FROM nodes WHERE id=?', (ident,)).fetchone()
                if name:
                    missing_rows.append({'node': ident, 'name': name[0], 'kind': 'accepted'})
                    for (synonym,) in name_query.execute('SELECT name FROM synonym_names WHERE node_id=?', (ident,)).fetchall():
                        missing_rows.append({'node': ident, 'name': synonym, 'kind': 'synonym'})
                if name and name_query.execute('SELECT 1 FROM uncovered_names WHERE name=?', (name[0],)).fetchone():
                    counts['missing_id_name_present'] += 1
                if len(examples) < 10:
                    examples.append(ident)
    if '--write' in sys.argv:
        values = list({(row['node'], row['name'], row['kind']): row for row in missing_rows}.values())
        proof = {'snapshotSha256': hashlib.sha256((published / 'manifest.json').read_bytes()).hexdigest(), 'values': values}
        with (root / 'late-uncovered-title-inventory.json').open('x', encoding='utf-8') as handle:
            json.dump(proof, handle, ensure_ascii=True, separators=(',', ':'))
    print(json.dumps({'unresolvedOrAmbiguous': counts['total'], 'presentInUncoveredInventory': counts['total'] - counts['missing'], 'missing': counts['missing'], 'missingIdNamePresent': counts['missing_id_name_present'], 'missingIdNameAbsent': counts['missing'] - counts['missing_id_name_present'], 'missingByStatus': {str(k): v for k, v in missing_by_status.items()}, 'names': len(missing_rows), 'examples': examples}))
finally:
    db.close()
