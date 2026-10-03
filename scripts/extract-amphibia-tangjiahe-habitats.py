import json
import xml.etree.ElementTree as ET
from pathlib import Path
base = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12189923')
root = ET.parse(base / 'article.xml').getroot()
table = next(t for t in root.findall('.//table-wrap') if t.get('id') == 'biology-14-00614-t001')
text = lambda x: ''.join(x.itertext()).strip()
headers = [text(x) for x in table.findall('./table/thead/tr')[1]]
records = []
for rowno, tr in enumerate(table.findall('./table/tbody/tr'), 1):
    cells = [text(x) for x in tr]
    if len(cells) != 9:
        raise ValueError((rowno, cells))
    records.append({'tableBodyRow': rowno, 'nameAsRecorded': cells[-1], 'habitatCountAsRecorded': cells[0], 'habitatsAsRecorded': dict(zip(headers, cells[1:8]))})
output = {'pmcid': 'PMC12189923', 'doi': '10.3390/biology14060614', 'tableId': table.get('id'), 'captionAsRecorded': text(table.find('caption')), 'headersAsRecorded': headers, 'records': records, 'scope': 'Table1 compiled habitat assignments; 20field/5literature membership notcertified for eachrow withoutS1; nocoordinates copied'}
(base / 'tangjiahe-habitat-rows.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({'rows': len(records), 'headers': headers, 'names': [r['nameAsRecorded'] for r in records]}, ensure_ascii=False))
