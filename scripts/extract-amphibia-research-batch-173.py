import json
import re
import xml.etree.ElementTree as E
from pathlib import Path

root=E.parse('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12694819/article.xml')
tables={t.attrib.get('id'):t for t in root.iter('table-wrap')}
facts={}
for table_id,kind in [('pone.0334746.t002','morphology'),('pone.0334746.t007','conservation')]:
    for row in tables[table_id].iter('tr'):
        cells=[' '.join(''.join(c.itertext()).split()) for c in row]
        if not cells:
            continue
        match=re.fullmatch(r'B\. ([a-z]+)',cells[0])
        if not match:
            continue
        name='Brachycephalus '+match.group(1)
        entry=facts.setdefault(name,{'name':name})
        if kind=='morphology':
            panel='measurements' if re.match(r'\d',cells[1]) else 'acoustics'
            if panel in entry:
                raise ValueError('Duplicate evidence row '+name)
            entry[panel]=cells[1:]
        else:
            entry[kind]=cells[1:]
for name,entry in facts.items():
    if len(entry.get('measurements',[]))!=9 or len(entry.get('acoustics',[]))!=10 or len(entry.get('conservation',[]))!=8:
        raise ValueError('Incomplete table row '+name)
Path('docs/amphibia-content/brachycephalus-pernix-comparison-source-rows.json').write_text(json.dumps({'source':'PMC12694819','tables':['pone.0334746.t002','pone.0334746.t007'],'rows':list(facts.values()),'table2SampleUnit':'Individuals observed for each variable or individuals with one or more recorded/analyzed calls; not a common denominator across variables','fullArticleReadCertified':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'speciesTableRows':len(facts),'originalTableOrderPreserved':True,'testsRun':False}))
