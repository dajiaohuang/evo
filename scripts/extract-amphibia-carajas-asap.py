import openpyxl,json,pathlib,hashlib,collections
d=pathlib.Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12654886');file=d/'S3_File.xlsx'
w=openpyxl.load_workbook(file,read_only=True,data_only=False);s=w['S3 Table 1']
records=[]
for i,values in enumerate(s.values,1):
 if i<5 or values[1] is None:continue
 a,f,n,s16,g16,coi,gcoi,corr=values[1:9]
 if s16 not in ['Yes','No'] or coi not in ['Yes','No'] or corr not in ['True','False','NA']:raise ValueError((i,values))
 for flag,group in [(s16,g16),(coi,gcoi)]:
  if (flag=='Yes' and not isinstance(group,int)) or (flag=='No' and group!='NA'):raise ValueError((i,values))
 records.append({'sheetRow':i,'specimenAccessionAsRecorded':a,'familyAsRecorded':f,'speciesAsRecorded':n,'sequence16SAsRecorded':s16,'group16SAsRecorded':g16,'sequenceCOIAsRecorded':coi,'groupCOIAsRecorded':gcoi,'correlationAsRecorded':corr})
if len(records)!=384 or len({r['specimenAccessionAsRecorded'] for r in records})!=384:raise ValueError('Expected384unique source rows')
groups={}
for marker in ['16S','COI']:
 g=collections.defaultdict(set)
 for r in records:
  if r['sequence'+marker+'AsRecorded']=='Yes':g[str(r['group'+marker+'AsRecorded'])].add(r['speciesAsRecorded'])
 groups[marker]={k:sorted(v) for k,v in g.items()}
out={'pmc':'PMC12654886','sourceWorkbook':'S3_File.xlsx','sheet':'S3 Table 1','sha256':hashlib.sha256(file.read_bytes()).hexdigest(),'records':records,'groupSourceLabels':groups,'summary':{'rows':len(records),'nominalLabels':len({r['speciesAsRecorded'] for r in records}),'rows16S':sum(r['sequence16SAsRecorded']=='Yes' for r in records),'rowsCOI':sum(r['sequenceCOIAsRecorded']=='Yes' for r in records),'pairedRows':sum(r['sequence16SAsRecorded']=='Yes' and r['sequenceCOIAsRecorded']=='Yes' for r in records),'correlationLabels':dict(collections.Counter(r['correlationAsRecorded'] for r in records))},'scope':'Read-only literal source cells B:I rows5–388; specimen accession not GenBank number; numeric groups marker-specific; no formulas present; no sequence/voucher identity certification'}
(d/'carajas-amphibian-asap-rows.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps(out['summary']))
