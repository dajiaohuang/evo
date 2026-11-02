import json
import sqlite3
import unicodedata
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
source = json.loads((root / 'diptera-archive-synonym-inventory-20261031-v2.json').read_bytes())
checks = json.loads((root / 'diptera-archive-synonym-item-checks-20261031.json').read_bytes())
by_taxon = {}
for row in source['values']:
    by_taxon.setdefault((row['node'], row['sourceTaxonId']), []).append(row)
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
def norm(value):
    return ' '.join(unicodedata.normalize('NFC', value).casefold().split())
try:
    groups = {}
    for row in checks['rows']:
        claims = row.get('claims')
        if row['status'] != 'available' or not claims or claims.get('missing') or 'Q7432' not in claims['ranks']:
            continue
        conflicts = [ident for ident in claims['colIds'] if ident != row['node'] and db.execute('SELECT 1 FROM nodes WHERE id=?', (ident,)).fetchone()]
        if conflicts:
            continue
        source_names = by_taxon.get((row['node'], row['sourceTaxonId']), [])
        shared = [candidate for candidate in source_names if any(norm(candidate['name']) == norm(name) for name in claims['names'])]
        if not shared:
            continue
        key = (row['node'], row['item'])
        group = groups.setdefault(key, {'node': row['node'], 'sourceName': row['nodeInfo']['name'], 'item': row['item'], 'targetNames': claims['names'], 'colIds': claims['colIds'], 'matchedSourceSynonyms': shared, 'pages': []})
        group['pages'].append({'locale': row['locale'], 'title': row['canonicalTitle'], 'url': row['url']})
    print(json.dumps({'groups': len(groups), 'nodes': len({node for node, _ in groups}), 'values': list(groups.values())}, ensure_ascii=True))
finally:
    db.close()
