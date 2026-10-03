import json,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC9985417');r=E.parse(base/'article.xml');tables={t.get('id'):[[' '.join(''.join(c.itertext()).split()) for c in tr] for tr in t.findall('.//tr')] for t in r.findall('.//table-wrap')}
rows=[]
for i,cells in enumerate(tables['table-2'][1:],1):
    if len(cells)!=6:raise ValueError(cells)
    rows.append({'sourceName':cells[0].replace('P. ','Pristimantis ',1),'tableRow':i,'distributionAsRecorded':cells[1],'iucnAsRecorded':cells[2],'national2021AsRecorded':cells[3],'reassessmentAsRecorded':cells[4],'sourcesAsRecorded':cells[5]})
if len(rows)!=16:raise ValueError(len(rows))
(base/'myersi-tables-extraction.json').write_text(json.dumps({'pmc':'PMC9985417','groupRows':rows,'sequenceRelabelsAsRecorded':tables['table-1'][1:],'literalTables':tables,'supplementarySpecimensIndependentlyRead':False,'fullArticleRead':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'retainedNamedMembers':len(rows),'sequenceRelabelRows':len(tables['table-1'])-1}))
