import json,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12822217');r=E.parse(base/'article.xml');table=next(t for t in r.findall('.//table-wrap') if t.get('id')=='Tab1').find('table');carry={};rows=[]
for i,tr in enumerate(table.findall('./tbody/tr'),1):
    cells=['']*9;occupied=set()
    for j,(text,n) in list(carry.items()):
        cells[j]=text;occupied.add(j)
        if n==1:del carry[j]
        else:carry[j]=(text,n-1)
    col=0
    for td in tr:
        while col in occupied:col+=1
        text=' '.join(''.join(td.itertext()).split());cells[col]=text;n=int(td.get('rowspan','1'))
        if n>1:carry[col]=(text,n-1)
        col+=1
    if col!=9:raise ValueError((i,cells))
    rows.append({'row':i,'familyAsRecorded':cells[0],'sourceName':cells[1],'assemblyAccession':cells[2],'assemblySizeGbpAsRecorded':cells[3],'contigN50KbpAsRecorded':cells[4],'buscoVectorAsRecorded':cells[5],'sequencingTechCells':dict(zip(['shortRead','longRead','structure3D'],cells[6:])),'literalCells':cells})
if len(rows)!=61:raise ValueError(len(rows))
(base/'genome-table1-rows.json').write_text(json.dumps({'pmc':'PMC12822217','tableId':'Tab1','rows':rows,'buscoVectorOrderCertified':False,'rawAssemblyAnalysisPerformed':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8');print(json.dumps({'rows':len(rows)}))
