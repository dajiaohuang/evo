import json,re,xml.etree.ElementTree as ET
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13215752')
root=ET.parse(base/'article.xml')
sec=next(s for s in root.findall('.//sec') if s.get('id')=='sec3')
rows=[{'row':i,'tag':c.tag,'text':' '.join(''.join(c.itertext()).split())} for i,c in enumerate(sec)]
parasite=None; associations=[];blocks=[];block=None
def chunks(text):
    start=0;depth=0
    for i,ch in enumerate(text):
        if ch=='(':depth+=1
        elif ch==')':depth-=1
        elif ch in ',;' and depth==0:
            yield text[start:i].strip();start=i+1
    yield text[start:].strip()
for row in rows:
    text=row['text']
    m=re.match(r'^(Kentropyxia|Oswaldocruzia|Poekilostrongylus|Schulzia|Typhlopsia) ([a-z]+)\b',text)
    if m and row['row']<326 and (row['tag']=='disp-quote' or not text.startswith(('Oswaldocruzia anolisi and','Oswaldocruzia subauricularis was'))):
        parasite=' '.join(m.groups());block={'parasite':parasite,'headingRow':row['row'],'rows':[]};blocks.append(block)
    if block is not None:block['rows'].append(row)
    if parasite and re.match(r'^(Type[- ]hosts? and type[- ]locality|Other hosts and locality records|Hosts and locality records):',text):
        for chunk in chunks(text.split(':',1)[1]):
            # One source row separates hosts by a period; another joins the last two by "and".
            for part in re.split(r'(?<=\))\.\s+(?=[A-Z][a-z]+ )|(?<=\)) and (?=[A-Z][a-z]+ )',chunk):
                m=re.match(r'^([A-Z][a-z]+) (cf\. |aff\. )?([a-z]+|sp\.)\b',part.strip())
                if not m:continue
                name=m.group(1)+' '+(m.group(2) or '')+m.group(3)
                parens=re.findall(r'\(([^()]*)\)',part)
                locality=parens[-1] if parens and re.fullmatch(r'[A-Z]{2,3}(?:, [A-Z]{2,3})*',parens[-1]) else None
                associations.append({'name':name,'parasite':parasite,'row':row['row'],'typeHost':text.startswith('Type'),'literal':part.strip(),'localityCodes':locality})
codes={}
localitysec=next(s for s in root.findall('.//sec') if s.get('id')=='sec2-3')
for p in localitysec.findall('p'):
    text=' '.join(''.join(p.itertext()).split())
    country=text.split(':',1)[0] if ':' in text else None
    if country:
        for name,code in re.findall(r'([^,:()]+?)\s*\(([A-Z]{2,3})\)',text):
            codes[code]={'name':name.strip(),'countryLabel':country}
out={'pmc':'PMC13215752','rows':rows,'parasiteBlocks':blocks,'associations':associations,'localityDefinitions':codes,'fullArticleRead':False,'originalVoucherIdentityCertified':False}
(base/'molineid-checklist-extraction.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'blocks':len(blocks),'associations':len(associations)}))
