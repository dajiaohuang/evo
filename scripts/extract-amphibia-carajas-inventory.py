import fitz,json,re,pathlib,hashlib
d=pathlib.Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12654886')
p=fitz.open(d/'S3_Table.pdf');records=[]
for pi in range(3):
 words=p[pi].get_text('words');left={}
 for w in words:
  if w[0]<330:left.setdefault(round(w[1],0),[]).append(w)
 lines=[]
 for y,ws in sorted(left.items()):
  text=' '.join(w[4] for w in sorted(ws,key=lambda w:w[0]))
  if (pi!=2 or y<575) and min(w[0] for w in ws)<70 and re.match(r'^[A-Z][a-z]+ (?:[a-z][a-z-]+|(?:aff\.|cf\.|gr\.|sp\.))\b',text):lines.append((y,text))
 # Right cells may be vertically centered in a two-line taxon label.
 for ix,(y,label) in enumerate(lines):
  end=lines[ix+1][0]-1 if ix+1<len(lines) else (575 if pi==2 else 760)
  vals=[[],[],[],[],[],[]]
  for w in words:
   if w[0]<330 or not y-1<=w[1]<end:continue
   ci=next((i for i,e in enumerate([355,390,438,473,518,560]) if w[0]<e),None)
   if ci is not None:vals[ci].append(w)
  cells=[' '.join(w[4] for w in sorted(v,key=lambda w:(w[1],w[0]))).strip() for v in vals]
  name=re.match(r'^([A-Z][a-z]+\s+(?:(?:aff\.|cf\.|gr\.)\s+)?(?:sp\.|[a-z][a-z-]+))',label).group(1)
  records.append({'pdfPage':pi+1,'pageRow':ix+1,'nameAsRecorded':name,'labelAsRecorded':label,'areaSourceCodesAsRecorded':dict(zip(['CA','CM','ON/SX','SA'],cells[:4])),'habitatAsRecorded':cells[4],'iucnAsRecorded':cells[5]})
for r in records:
 if r['iucnAsRecorded'] not in ['LC','DD','-']:raise ValueError(r)
 if not re.fullmatch(r'[FOPa, *]+',r['habitatAsRecorded']):raise ValueError(r)
 for v in r['areaSourceCodesAsRecorded'].values():
  if v and not re.fullmatch(r'[123, ]+',v):raise ValueError(r)
out={'pmc':'PMC12654886','doi':'10.1371/journal.pone.0332753','sourceFile':'S3_Table.pdf','sha256':hashlib.sha256((d/'S3_Table.pdf').read_bytes()).hexdigest(),'records':records,'legend':{'1':'fieldwork','2':'MPEG collection','3':'literature','F':'forest','O':'open vegetation','O*':'preferentially open/occasionally forest','Pa':'perianthropic'},'qualifiedNamesNotAssigned':[r['nameAsRecorded'] for r in records if re.search(r'\b(?:aff\.|cf\.|gr\.|sp\.)',r['nameAsRecorded'])],'fullArticleRead':False}
(d/'carajas-amphibian-inventory-rows.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'rows':len(records),'qualified':out['qualifiedNamesNotAssigned'],'pagesInspected':3}))
