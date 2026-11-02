import gzip
import hashlib
import json
import re
import sqlite3
import sys
import unicodedata
from pathlib import Path
from urllib.parse import quote

root = Path('.git/evo-wikipedia-col26-8')
inventory_bytes = (root / 'late-uncovered-title-inventory.json').read_bytes()
inventory = json.loads(inventory_bytes)
pages = json.loads((root / 'late-uncovered-title-page-checks.json').read_bytes())
db = sqlite3.connect(f'file:{root / "inventory.sqlite"}?mode=ro', uri=True)
ids = {row['node'] for row in inventory['values']}
linked = {row[0] for row in db.execute('SELECT node_id FROM exact_source_synonym_links UNION SELECT node_id FROM primary_related_candidates')}
available = {row['node'] for row in pages['checks'] if row['status'] == 'available'}
eligible = ids - linked - available
hybrid_mode = '--hybrid-variants' in sys.argv
if hybrid_mode:
    eligible = {'7G2FW'} - linked
db.close()
normalize = lambda value: unicodedata.normalize('NFKC', value).casefold().strip()
hybrid_key = lambda value: re.sub(r'(?<=\s)[×x]\s*', '', normalize(value))
wanted = {}
for row in inventory['values']:
    if row['node'] in eligible:
        wanted.setdefault(hybrid_key(row['name']) if hybrid_mode else normalize(row['name']), []).append(row)
projects = json.loads((root / 'sources/wikipedia-projects.json').read_bytes())['projects']
matches, receipts = [], {}
for index, project in enumerate(sorted(projects, key=lambda p: p['locale']), 1):
    locale, dbname = project['locale'], project['dbname']
    path = root / 'sources' / f'{locale}wiki-titles-ns0.gz'
    receipt = json.loads(Path(str(path) + '.receipt.json').read_bytes())
    assert receipt['url'] == f'https://dumps.wikimedia.org/{dbname}/latest/{dbname}-latest-all-titles-in-ns0.gz'
    digest = hashlib.sha256()
    with path.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            digest.update(block)
    assert digest.hexdigest() == receipt['sha256']
    receipts[locale] = receipt['sha256']
    with gzip.open(path, 'rt', encoding='utf-8') as stream:
        for line in stream:
            title = line.rstrip('\r\n').replace('_', ' ')
            if hybrid_mode:
                if not title.casefold().startswith('verbascum '):
                    continue
                base = hybrid_key(title)
            else:
                if ' (' not in title or not title.endswith(')'):
                    continue
                base = normalize(title.rsplit(' (', 1)[0])
            for row in wanted.get(base, []):
                matches.append({**row, 'locale': locale, 'matchedTitle': title, 'url': f'https://{locale}.wikipedia.org/wiki/{quote(title.replace(" ", "_"), safe="()")}'})
    if index % 25 == 0 or index == len(projects):
        print(json.dumps({'projectsScanned': index, 'totalProjects': len(projects), 'matches': len(matches)}, ensure_ascii=False), flush=True)
result = {'inventorySha256': hashlib.sha256(inventory_bytes).hexdigest(), 'snapshotSha256': inventory['snapshotSha256'], 'eligibleNodes': len(eligible), 'sourceDigests': receipts, 'matches': matches}
out = root / ('late-hybrid-title-variants.json' if hybrid_mode else 'late-disambiguation-qualified-candidates.json')
with out.open('x', encoding='utf-8', newline='\n') as stream:
    json.dump(result, stream, ensure_ascii=False, separators=(',', ':'))
print(json.dumps({'status': 'scanned', 'eligibleNodes': len(eligible), 'projects': len(projects), 'matches': len(matches), 'nodes': len({r['node'] for r in matches})}), flush=True)
