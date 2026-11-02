import gzip
import hashlib
import json
import re
import sqlite3
import time
import urllib.parse
import urllib.request
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
checks_path = root / 'diptera-archive-synonym-item-checks-20261031.json'
checks = json.loads(checks_path.read_bytes())
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
groups = {}
try:
    for row in checks['rows']:
        claims = row.get('claims')
        if row['status'] != 'available' or not claims or claims.get('missing') or 'Q7432' not in claims['ranks'] or len(claims['names']) != 1:
            continue
        if any(ident != row['node'] and db.execute('SELECT 1 FROM nodes WHERE id=?', (ident,)).fetchone() for ident in claims['colIds']):
            continue
        key = (row['node'], row['item'])
        groups.setdefault(key, {'node': row['node'], 'source': row['nodeInfo']['name'], 'item': row['item'], 'target': claims['names'][0], 'colIds': claims['colIds'], 'pages': []})['pages'].append({'locale': row['locale'], 'canonicalTitle': row['canonicalTitle']})
finally:
    db.close()
ledger_path = Path('data/sources/systema-dipterorum-archive-1101-import-ledger.json')
ledger_bytes = ledger_path.read_bytes()
ledger = json.loads(ledger_bytes)
base = Path(ledger['outputs']['descriptor']['path']).parent.parent
authors = {}
target_nodes = {key[0] for key in groups}
for file in ledger['outputs']['files']:
    if file.get('role') != 'col-partition':
        continue
    data = (base / file['path']).read_bytes()
    assert hashlib.sha256(data).hexdigest() == file['sha256']
    rows = json.loads(gzip.decompress(data))
    assert len(rows) == file['records']
    for row in rows:
        if row['colId'] in target_nodes:
            authors[row['colId']] = row['colAuthorship']
def norm_author(value):
    return re.sub(r'[^a-z0-9]', '', value.casefold())
cache = {}
for group in groups.values():
    target = group['target']
    if target not in cache:
        query = urllib.parse.urlencode({'name': target, 'strict': 'true'})
        request = urllib.request.Request('https://api.gbif.org/v1/species/match?' + query, headers={'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon metadata cross-check)'})
        with urllib.request.urlopen(request, timeout=30) as response:
            result = json.load(response)
        cache[target] = {key: result.get(key) for key in ('usageKey', 'scientificName', 'canonicalName', 'authorship', 'rank', 'status', 'matchType', 'confidence', 'kingdom', 'family')}
        time.sleep(0.2)
    group['sourceAuthorship'] = authors.get(group['node'])
    group['gbif'] = cache[target]
    target_author = group['gbif'].get('authorship') or ''
    group['sameAuthorship'] = bool(target_author and group['sourceAuthorship'] and norm_author(target_author) == norm_author(group['sourceAuthorship']))
proof = {'checksSha256': hashlib.sha256(checks_path.read_bytes()).hexdigest(), 'ledgerSha256': hashlib.sha256(ledger_bytes).hexdigest(), 'values': list(groups.values())}
out = root / 'diptera-candidate-authorship-profile-20261031.json'
with out.open('x', encoding='utf-8', newline='\n') as handle:
    json.dump(proof, handle, ensure_ascii=False, separators=(',', ':'))
print(json.dumps({'groups': len(groups), 'nodes': len({value['node'] for value in groups.values()}), 'sameAuthorship': [value for value in groups.values() if value['sameAuthorship']], 'output': str(out)}, ensure_ascii=True))
