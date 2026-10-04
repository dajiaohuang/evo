import json
import xml.etree.ElementTree as ET
from pathlib import Path
base = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13024529')
root = ET.parse(base / 'article.xml').getroot()
table = next(t for t in root.findall('.//table-wrap') if t.get('id') == 'biology-15-00451-t002')
text = lambda x: ''.join(x.itertext()).strip()
headers = [[text(x) for x in tr] for tr in table.findall('./table/thead/tr')]
records = []
footer = None
family = order = None
for rowno, tr in enumerate(table.findall('./table/tbody/tr'), 1):
    cells = [text(x) for x in tr]
    if cells[0] == 'REPTILIA':
        break
    if cells[0] == 'Total':
        footer = cells
        continue
    if 'ORDER' in cells[0]:
        order = cells[0]
        continue
    if 'FAMILY' in cells[0]:
        family = cells[0]
        continue
    if len(cells) == 7 and ' ' in cells[0] and cells[0] != 'AMPHIBIA':
        records.append({'tableBodyRow': rowno, 'nameAsRecorded': cells[0], 'orderAsRecorded': order, 'familyAsRecorded': family, 'statusCountsAsRecorded': dict(zip(['DD', 'EN', 'LC', 'VU', 'NE'], cells[1:6])), 'totalAsRecorded': cells[6]})
footer = [text(x) for x in table.findall('./table/tbody/tr')[-1]]
doi = next(text(x) for x in root.findall('.//article-id') if x.get('pub-id-type') == 'doi')
output = {'pmcid': 'PMC13024529', 'doi': doi, 'tableId': table.get('id'), 'headersAsRecorded': headers, 'allHerpetofaunaFooterAsRecorded': footer, 'records': records, 'scope': 'Amphibian rows before REPTILIA only; nominal named rows and unresolved genus rows retained separately; original identity and unique observed individuals uncertified'}
(base / 'pastaza-amphibian-count-rows.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({'rows': len(records), 'headers': headers, 'footer': footer, 'names': [r['nameAsRecorded'] for r in records]}, ensure_ascii=False))
