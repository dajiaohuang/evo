import hashlib,json,pathlib,fitz
p=pathlib.Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13061190')
rows=[]
for name in ['pone.0345097.s001.pdf','pone.0345097.s003.pdf']:
 raw=(p/name).read_bytes();doc=fitz.open(stream=raw,filetype='pdf');pages=[]
 for i,page in enumerate(doc):
  image=f'{name}.page{i+1}.png';page.get_pixmap(matrix=fitz.Matrix(1.5,1.5)).save(p/image)
  pages.append({'page':i+1,'text':page.get_text(),'image':image})
 rows.append({'file':name,'sha256':hashlib.sha256(raw).hexdigest(),'pages':pages,'sourceModified':False})
(p/'quimi-supplement-pdf-extraction.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
for row in rows:
 print(row['file'])
 for page in row['pages']:print('PAGE',page['page'],page['text'])
