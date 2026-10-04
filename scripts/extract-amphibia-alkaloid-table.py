import json,pathlib,xml.etree.ElementTree as ET
base=pathlib.Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC11677230')
root=ET.parse(base/'article.xml').getroot()
taxa=json.loads(pathlib.Path('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json').read_text(encoding='utf-8'))
names={t['scientificName']:t['colId'] for t in taxa}
rows=[]
table=next(t for t in root.iter('table-wrap') if t.get('id')=='table1')
for i,tr in enumerate(table.iter('tr')):
    cells=[' '.join(''.join(c.itertext()).split()) for c in tr]
    if i<2: continue
    if len(cells)!=9: raise ValueError((i,cells))
    name=cells[2].removesuffix('*')
    rows.append(dict(zip(['family','subfamily','literalName','phenotype','sampleSize','logAreaRange','logAreaMedian','compoundRange','compoundMedian'],cells),name=name,xmlRow=i,assay='UHPLC-HESI-MS/MS' if cells[2].endswith('*') else 'GC-MS',colId=names.get(name)))
out={'pmc':'PMC11677230','source':'XML table1; row index counts both header rows','rows':rows,'summary':{'sourceLabels':len(rows),'animals':sum(int(r['sampleSize']) for r in rows),'GCMSAnimals':sum(int(r['sampleSize']) for r in rows if r['assay']=='GC-MS'),'LCMSAnimals':sum(int(r['sampleSize']) for r in rows if r['assay']!='GC-MS'),'exactPinnedNames':sum(r['colId'] is not None for r in rows)},'limits':['Relative integratedarea notabsolutequantities, logarithm base not inferred','Compoundcounts includeisomers perauthors; individual ranges/medians distinctfrompooledspecies total','Defended/undefended priorphenotypebin notthisstudy predator assay; NA notundefended','Supplementary files1/3/4 notdownloaded/read; no independentrawdata recalculation']}
(base/'alkaloid-table1-rows.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(out['summary']))
print('EXACT',[r['name'] for r in rows if r['colId']])
print('UNASSIGNED',[r['name'] for r in rows if not r['colId']])
