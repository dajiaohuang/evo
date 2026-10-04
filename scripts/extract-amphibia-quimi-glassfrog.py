import hashlib,json,pathlib,xml.etree.ElementTree as E
p=pathlib.Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13061190')
raw=(p/'article.xml').read_bytes();root=E.fromstring(raw)
def text(e):return ' '.join(''.join(e.itertext()).split())
tables=[]
for t in root.findall('./body//table-wrap'):
 tables.append({'id':t.get('id'),'caption':text(t.find('caption')),'header':[[text(c) for c in row] for row in t.findall('.//thead/tr')],'rows':[[text(c) for c in row] for row in t.findall('.//tbody/tr')]})
x={'pmc':'PMC13061190','sourceFile':'article.xml','sha256':hashlib.sha256(raw).hexdigest(),'tableExtraction':tables,'sectionText':[{'id':s.get('id'),'title':text(s.find('title')) if s.find('title') is not None else '', 'text':text(s)} for s in root.findall('./body//sec')], 'fullArticleCertifiedRead':False,'rawSequencesAuthenticated':False}
(p/'quimi-tables-and-sections-extraction.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'tables':len(tables),'rows':[len(t['rows']) for t in tables],'testsRun':False}))
