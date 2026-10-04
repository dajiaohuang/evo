import json,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC8819055')
root=E.parse(base/'article.xml')
table=next(t for t in root.findall('.//table-wrap') if t.get('id')=='joa13569-tbl-0002').find('table')
carry={};rows=[];genus=None
for i,tr in enumerate(table.findall('./tbody/tr'),1):
    values=['']*7;occupied=set()
    for j,(text,n) in list(carry.items()):
        values[j]=text;occupied.add(j)
        if n==1:del carry[j]
        else:carry[j]=(text,n-1)
    col=0
    for td in tr:
        while col in occupied:col+=1
        text=' '.join(''.join(td.itertext()).split());values[col]=text
        n=int(td.get('rowspan','1'))
        if n>1:carry[col]=(text,n-1)
        col+=1
    if values[1]:genus=values[1].replace('“','').replace('”','')
    if len(values)!=7 or any(x not in ['0','1'] for x in values[3:]):raise ValueError(values)
    rows.append({'row':i,'familyAsRecorded':values[0],'genusAsRecorded':values[1],'inheritedGenus':genus,'speciesLabel':values[2],'sourceName':genus+' '+values[2],'smgScores':list(map(int,values[3:])),'literalCells':values,'evidenceType':'literature-only' if genus=='Melanophryniscus' else 'direct-preserved-specimen-histology'})
if len(rows)!=40:raise ValueError(len(rows))
(base/'hand-gland-table2-rows.json').write_text(json.dumps({'pmc':'PMC8819055','tableId':'joa13569-tbl-0002','rows':rows,'fullArticleRead':False,'supplementsIndependentlyRead':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'rows':len(rows),'directRows':sum(r['evidenceType']!='literature-only' for r in rows),'literatureOnlyRows':2}))
