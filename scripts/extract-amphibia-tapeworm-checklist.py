import json, pathlib, re, xml.etree.ElementTree as ET
base=pathlib.Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10658874')
root=ET.parse(base/'article.xml').getroot()
def text(e): return ' '.join(''.join(e.itertext()).split()) if e is not None else ''
rows=[]
for sec in root.find('body').iter('sec'):
    if sec.get('id')=='ref-list1': continue
    title=text(sec.find('title'))
    rows.append({'id':sec.get('id'),'title':title,'direct':[{ 'tag':e.tag,'id':e.get('id'),'text':text(e)} for e in sec if e.tag not in ['sec','title','table-wrap','fig']]})
(base/'checklist-section-extraction.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
for row in rows: print(row['id'], row['title'], len(row['direct']))
print('\nMETHODS\n'+text(root.find('body').findall('sec')[0]))
hostrows=[]
current=None
for i,e in enumerate(next(r for r in rows if r['id']=='s3j')['direct']):
    if e['text']=='REPTILIA': break
    if e['tag']=='list':
        current={'literal':e['text'],'name':' '.join(e['text'].split()[:2]),'hostRow':i,'parasiteFamilies':[]}
        hostrows.append(current)
    elif current and ':' in e['text']:
        current['parasiteFamilies'].append({'row':i,'text':e['text']})
    elif e['text'].isupper(): current=None
locations=[]
parasite=None
for row in rows:
    if row['id'] not in ['s3a','s3b','s3c','s3d','s3e','s3f','s3g','s3h','s3i']: continue
    for i,e in enumerate(row['direct']):
        if e['tag']=='list':
            hits=re.findall(r'\b\d+\. ([A-Z][a-z]+ [a-z]+)',e['text'])
            parasite=hits[-1] if hits else None
        elif parasite:
            for match in re.finditer(r'([A-Z][a-z]+ [a-z]+) from (.*?)(?=; [A-Z][a-z]+ (?:[a-z]+|sp\.)(?: \([^)]*\))? from |$)',e['text']):
                raw=match.group(2)
                clean=raw
                while re.search(r'\([^()]*\)',clean): clean=re.sub(r'\([^()]*\)','',clean)
                clean=' '.join(clean.split()).strip(' .;')
                locations.append({'hostAsRecorded':match.group(1),'parasite':parasite,'locationSummary':clean,'raw':raw,'section':row['id'],'directRow':i})
taxa=json.loads(pathlib.Path('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json').read_text(encoding='utf-8'))
names={r['scientificName'] for r in taxa}
for h in hostrows:
    h['exactPinnedMatch']=h['name'] in names
    h['locations']=[l for l in locations if l['hostAsRecorded']==h['name']]
(base/'amphibian-host-records.json').write_text(json.dumps({'hostRows':hostrows,'locations':locations},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('HOST ROWS',len(hostrows),'EXACT',sum(h['exactPinnedMatch'] for h in hostrows))
print('UNASSIGNED',[(h['name'],h['literal']) for h in hostrows if not h['exactPinnedMatch']])
print('MISSING LOCATION',[(h['name'],h['parasiteFamilies']) for h in hostrows if h['exactPinnedMatch'] and not h['locations']])
