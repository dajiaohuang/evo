import json
import xml.etree.ElementTree as ET
from pathlib import Path
base = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC11383632')
root = ET.parse(base / 'article.xml').getroot()
text = lambda x: ''.join(x.itertext()).strip()
tables = {t.get('id'): t for t in root.findall('.//table-wrap')}
rows, pooled = [], []
for rowno, tr in enumerate(tables['t1-tlsr_35-1-219'].findall('./table/tbody/tr'), 1):
    cells = [text(x) for x in tr]
    if len(cells) != 7:
        raise ValueError(cells)
    row = dict(zip(['zoneAsRecorded', 'habitatAsRecorded', 'nameAsRecorded', 'nAsRecorded', 'bodyTemperatureAsRecorded', 'substrateTemperatureAsRecorded', 'airTemperatureAsRecorded'], cells))
    row['tableBodyRow'] = rowno
    (pooled if row['nameAsRecorded'] in {'All anurans', 'Total anurans'} else rows).append(row)
correlations = [[text(x) for x in tr] for tr in tables['t2-tlsr_35-1-219'].findall('./table/tbody/tr')]
doi = next(text(x) for x in root.findall('.//article-id') if x.get('pub-id-type') == 'doi')
result = {'pmcid': 'PMC11383632', 'doi': doi, 'records': rows, 'pooledRowsAsRecorded': pooled, 'correlationsAsRecorded': correlations, 'units': 'degrees Celsius', 'summaryConventionAsRecorded': text(tables['t1-tlsr_35-1-219'].find('table-wrap-foot')), 'scope': 'Named Table1 rows separate from pooled rows; simultaneous dorsal-skin/substrate/air measurements from2018adultencounters, notcriticalthermal limits orpreferredtemperatures.'}
(base / 'colombia-field-thermal-rows.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({'rows': len(rows), 'species': len({r['nameAsRecorded'] for r in rows}), 'individualCounts': sum(int(r['nAsRecorded']) for r in rows), 'doi': doi, 'names': sorted({r['nameAsRecorded'] for r in rows})}, ensure_ascii=False))
