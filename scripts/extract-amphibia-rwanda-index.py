import json,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13072372');r=E.parse(base/'article.xml')
tables={}
for t in r.findall('.//table-wrap'):
    tables[t.get('id')]=[[ ' '.join(''.join(c.itertext()).split()) for c in tr] for tr in t.findall('.//tr')]
a2=tables['animals-16-01104-t0A2'][1:];a3=tables['animals-16-01104-t0A3'][2:];a4=tables['animals-16-01104-t0A4'][1:];rows=[]
for i,cells in enumerate(a4,1):
    name=cells[0];d=next(row for row in a2 if row[0]==name);e=next(row for row in a3 if row[0]==name)
    rows.append({'sourceName':name,'tableA4Row':i,'sitesAsTableA2':int(d[1]),'ecoZonesAsTableA3':[j for j,x in enumerate(e[1:6],1) if x=='x'],'ecoZoneCountAsPrinted':e[6],'scoresAsTableA4':dict(zip(['DBS','TBS','SBS','SI'],map(int,cells[1:]))),'qualified':bool(' cf.' in name or ' sp.' in name)})
if len(rows)!=54:raise ValueError(len(rows))
(base/'rwanda-index-extraction.json').write_text(json.dumps({'pmc':'PMC13072372','rows':rows,'literalTables':tables,'fullArticleRead':False,'rawFieldDataIndependentlyVerified':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'tableRows':len(rows),'qualifiedRows':sum(x['qualified'] for x in rows)}))
