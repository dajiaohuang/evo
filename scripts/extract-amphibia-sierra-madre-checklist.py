"""Extract only the amphibian part of the published mixed herpetofauna table."""
import json
from pathlib import Path
import xml.etree.ElementTree as ET

folder = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12070909')
root = ET.parse(folder / 'article.xml').getroot()
table = next(t for t in root.findall('.//table-wrap') if t.get('id') == 'animals-15-01278-t001')
records = []
active = False
order = None
family = None
for number, row in enumerate(table.findall('.//tbody/tr'), 1):
    cells = [''.join(c.itertext()).strip() for c in row.findall('td')]
    label = cells[0]
    if label == 'Class Amphibia':
        active = True
        continue
    if label == 'Class Reptilia':
        break
    if not active:
        continue
    if label.startswith('Order '):
        order = label[6:]
        continue
    if not cells[5]:
        family = label
        continue
    name = ' '.join(label.split()[:2])
    if len(cells) != 6 or order not in ['Anura', 'Caudata']:
        raise ValueError(f'Unexpected amphibian row {number}')
    records.append({'tableBodyRow': number, 'nameAsRecorded': name, 'labelAsRecorded': label, 'orderAsRecorded': order, 'familyAsRecorded': family, 'iucnAsRecorded': cells[1], 'evsAsRecorded': cells[2], 'mexicanCategoryAsRecorded': cells[3], 'globalDistributionCodeAsRecorded': cells[4], 'provinceCountOrIntroductionAsRecorded': cells[5], 'introducedAsRecorded': cells[5] == 'IN'})
if len(records) != 58 or sum(not r['introducedAsRecorded'] for r in records) != 57:
    raise ValueError('Source native/introduced denominator is not resolved')
taxa = json.loads(Path('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json').read_text(encoding='utf-8'))
names = {t['scientificName']: t['colId'] for t in taxa}
output = {'pmcid': 'PMC12070909', 'doi': '10.3390/ani15091278', 'license': 'CC BY 4.0', 'locator': 'XML Table1 amphibian rows', 'records': records, 'note': 'Source assignments retained, no current status, voucher identity or complete range certification.'}
(folder / 'sierra-madre-amphibian-rows.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'sourceRows': len(records), 'nativeRows': 57, 'introducedRows': 1, 'exactNameMapped': sum(r['nameAsRecorded'] in names for r in records), 'unmatchedNames': [r['nameAsRecorded'] for r in records if r['nameAsRecorded'] not in names], 'testsRun': False}))
