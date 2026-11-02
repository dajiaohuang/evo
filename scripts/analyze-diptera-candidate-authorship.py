import json
import re
import unicodedata
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
profile = json.loads((root / 'diptera-candidate-authorship-profile-20261031.json').read_bytes())
def normalized(value):
    text = unicodedata.normalize('NFKD', value or '')
    return re.sub(r'[^a-z0-9]', '', ''.join(char for char in text.casefold() if not unicodedata.combining(char)))
matches, mismatch, missing = [], [], []
for row in profile['values']:
    data = row['gbif']
    canonical, scientific = data.get('canonicalName') or '', data.get('scientificName') or ''
    target_author = scientific[len(canonical):].strip() if canonical and scientific.startswith(canonical) else ''
    source_author = row.get('sourceAuthorship') or ''
    item = {'node': row['node'], 'source': row['source'], 'sourceAuthorship': source_author, 'target': row['target'], 'targetAuthorship': target_author, 'item': row['item']}
    if not target_author or not source_author or data.get('matchType') != 'EXACT' or canonical != row['target']:
        missing.append(item)
    elif normalized(target_author) == normalized(source_author):
        matches.append(item)
    else:
        mismatch.append(item)
print(json.dumps({'matches': matches, 'mismatches': mismatch, 'unknown': missing}, ensure_ascii=True))
