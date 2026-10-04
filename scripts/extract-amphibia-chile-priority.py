"""Retain the article's row-level conservation scores without recalculating them."""
from pathlib import Path
import json
import xml.etree.ElementTree as ET

root_dir = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10968267')
root = ET.parse(root_dir / 'article.xml').getroot()
tables = {table.get('id'): table for table in root.findall('.//table-wrap')}
criteria_rows = []
for row in tables['biology-13-00169-t003'].findall('.//tbody/tr'):
    cells = [''.join(cell.itertext()).strip() for cell in row.findall('td')]
    criteria_rows.append({'sourceLabel': cells[0], 'scores': [int(value) for value in cells[1:]]})
records = []
for row in tables['biology-13-00169-t004'].findall('.//tbody/tr'):
    cells = [''.join(cell.itertext()).strip() for cell in row.findall('td')]
    name = cells[2]
    matches = [r for r in criteria_rows if r['sourceLabel'].startswith(name + ' ')]
    if len(matches) != 1 or len(matches[0]['scores']) != 9:
        raise ValueError(f'Unresolved Table3 correspondence: {name}')
    records.append({'name': name, 'familyAsRecorded': cells[1], 'priorityAsPrinted': cells[3], 'categoryAsPrinted': cells[4], 'table3Label': matches[0]['sourceLabel'], 'criteriaAsPrinted': dict(zip(['GEDIS', 'BREHA', 'AOO', 'EOO', 'LET', 'POPT', 'TAXU', 'BOSI', 'LAND'], matches[0]['scores']))})
if len(records) != 58:
    raise ValueError(f'Unexpected table row count: {len(records)}')
output = {'pmcid': 'PMC10968267', 'doi': '10.3390/biology13030169', 'license': 'CC BY 4.0', 'locators': ['XML Table3', 'XML Table4'], 'records': records, 'note': 'Printed ordinal scores and priority values retained; no formula reproduction, current conservation-status verification or independent occurrence reconstruction.'}
(root_dir / 'chile-priority-table-rows.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'sourceRowsExtracted': len(records), 'scoresRecomputed': False, 'testsRun': False}))
