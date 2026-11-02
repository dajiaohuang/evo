import gzip
import hashlib
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path('.git/evo-wikipedia-col26-8')
INVENTORY = ROOT / 'diptera-archive-new-synonym-inventory-20261031-v2.json'
OUT = ROOT / 'diptera-archive-normalized-synonym-title-candidates-20261031.json'
inventory_bytes = INVENTORY.read_bytes()
inventory = json.loads(inventory_bytes)
projects = {row['locale']: row for row in json.loads((ROOT / 'sources/wikipedia-projects.json').read_bytes())['projects']}
digest = lambda value: hashlib.sha256(value).hexdigest()
def normalize(value):
    value = ''.join(char for char in unicodedata.normalize('NFKD', value) if not unicodedata.combining(char)).lower()
    return re.sub(r'[^a-z0-9]+', ' ', value).strip()
results, counts, sources = [], {}, {}
for locale in sorted(projects):
    project = projects[locale]
    path = ROOT / 'sources' / f'{locale}wiki-titles-ns0.gz'
    receipt = json.loads(Path(str(path) + '.receipt.json').read_bytes())
    assert receipt['url'] == f"https://dumps.wikimedia.org/{project['dbname']}/latest/{project['dbname']}-latest-all-titles-in-ns0.gz"
    data = path.read_bytes()
    assert digest(data) == receipt['sha256']
    sources[locale] = receipt['sha256']
    wanted = {}
    for row in inventory['values']:
        wanted.setdefault(normalize(row['name']), []).append(row)
    total, matches = 0, 0
    with gzip.open(path, 'rt', encoding='utf-8') as handle:
        for line in handle:
            title = line.rstrip('\r\n')
            if total == 0 and title == 'page_title':
                total += 1
                continue
            total += 1
            for row in wanted.get(normalize(title.replace('_', ' ')), []):
                if unicodedata.normalize('NFKC', title.replace('_', ' ')).casefold() == unicodedata.normalize('NFKC', row['name']).casefold():
                    continue
                from urllib.parse import quote
                results.append({**row, 'matchedTitle': title.replace('_', ' '), 'url': f'https://{locale}.wikipedia.org/wiki/{quote(title, safe="()")}'})
                matches += 1
    counts[locale] = {'titlesScanned': total, 'matches': matches}
    if matches or len(counts) % 25 == 0:
        print(json.dumps({'locale': locale, 'projectsScanned': len(counts), **counts[locale]}), flush=True)
result = {'inventorySha256': digest(inventory_bytes), 'snapshotSha256': inventory['snapshotSha256'], 'sourceDigests': sources, 'counts': counts, 'matches': results}
with OUT.open('x', encoding='utf-8', newline='\n') as handle:
    json.dump(result, handle, ensure_ascii=False, separators=(',', ':'))
print(json.dumps({'status': 'scanned', 'matches': len(results), 'nodes': len({row['node'] for row in results}), 'output': str(OUT)}))
