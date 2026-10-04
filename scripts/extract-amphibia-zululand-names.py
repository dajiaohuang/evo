import json,re,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC6434812')
r=E.parse(base/'article.xml'); rows=[]
for i,tr in enumerate(r.findall('.//table-wrap[@id="Tab1"]/table/tbody/tr')[1:],2):
    td=tr.find('td'); text=''.join(td.itertext()); flags=[s.text for s in td.findall('sup')]
    prefix=text.split('(')[0]
    for flag in flags:
        if prefix.endswith(flag+' '): prefix=prefix[:-2]+' '
    name=re.sub(r'^\s*\d+\.\s*','',prefix).strip()
    scientific=text.split('(',1)[1]
    match=re.match(r'([A-Z][a-z]+ [a-z]+)',scientific)
    if not match:raise ValueError(text)
    rows.append({'tableRow':i,'sourceName':match.group(1),'isiZuluName':name,'footnoteFlags':flags,'literalCell':text.strip()})
if len(rows)!=58:raise ValueError(len(rows))
(base/'zululand-names-extraction.json').write_text(json.dumps({'pmc':'PMC6434812','rows':rows,'fullArticleRead':False,'indigenousNamesIndependentlyValidated':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'rows':len(rows),'modifiedNameFootnotes':sum('a' in x['footnoteFlags'] for x in rows),'sample':rows[:3]},ensure_ascii=False))
