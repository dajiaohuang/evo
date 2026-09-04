"""Build an offline, deterministic source-1053 provenance projection."""
import argparse,csv,gzip,hashlib,json,zipfile
from io import StringIO
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; PACK=ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists'
DEFAULT=ROOT/'data/sources/archives/checklistbank-1053-eumycetozoa-2024-05.tar.gz'; OUT=PACK/'eumycetozoa-000.json.gz'; DESC=PACK/'eumycetozoa-sidecar.json'; LEDGER=ROOT/'data/sources/eumycetozoa-archive-import-ledger.json'
URL='https://api.checklistbank.org/dataset/1053/archive'; SHA='2d8a55a43d7273bfabaa19c16942c9258b7ca00c17319fead95c562af40f24b1'; ARCHIVE_BYTES=131700
def h(x): return hashlib.sha256(x).hexdigest()
def norm(x): return ' '.join((x or '').split())
def tsv(x): return list(csv.DictReader(StringIO(x.decode('utf-8-sig')),delimiter='\t'))
def main():
 p=argparse.ArgumentParser();p.add_argument('--archive',default=str(DEFAULT)); archive=Path(p.parse_args().archive); raw=archive.read_bytes()
 if len(raw)!=ARCHIVE_BYTES or h(raw)!=SHA: raise SystemExit('archive hash mismatch')
 with zipfile.ZipFile(archive) as tf: members={n:tf.read(n) for n in ('AcceptedSpecies.tsv','NameReferencesLinks.tsv','References.tsv')}
 src=tsv(members['AcceptedSpecies.tsv']); links=tsv(members['NameReferencesLinks.tsv']); refs=tsv(members['References.tsv']); byref={r['ReferenceID']:r for r in refs}; rb={}
 for i,x in enumerate(links,2):
  if x['ReferenceID'] not in byref: raise SystemExit('missing reference '+x['ReferenceID'])
  rb.setdefault(x['ID'],[]).append({'referenceId':x['ReferenceID'],'referenceType':x['ReferenceType'],'sourceRow':i,'reference':byref[x['ReferenceID']]})
 m=json.loads((PACK/'manifest.json').read_text(encoding='utf-8')); col=[]
 for f in m['files']:
  with gzip.open(ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs'/f['path'],'rt',encoding='utf-8') as z: col += [json.loads(x) for x in z if x.strip()]
 targets=[x for x in col if x.get('rank')=='species' and x.get('status')=='accepted' and str(x.get('sourceDatasetId'))=='1053']; bykey={}
 for i,r in enumerate(src,2):
  key=(norm(r['Genus']+' '+r['SpeciesEpithet']),norm(r['AuthorString'])); bykey.setdefault(key,[]).append((r,i))
 out=[]
 for c in targets:
  a=norm(c.get('authorship')); n=c['scientificName']; bare=n[:-len(a)-1] if a and n.endswith(' '+a) else n; mm=bykey.get((norm(bare),a),[])
  if len(mm)!=1:
   out.append({'colId':c['id'],'colScientificName':c['scientificName'],'colAuthorship':a,'status':'unmatched' if not mm else 'ambiguous','matchedName':None,'acceptedName':None,'candidates':[{'id':r['AcceptedTaxonID'],'scientificName':norm(r['Genus']+' '+r['SpeciesEpithet']),'authorship':r['AuthorString'],'status':r['Sp2000NameStatus'],'url':r['SpeciesURL']} for r,_ in mm],'mappingBasis':'No unique exact source name+authorship match.','sourceRows':[{'member':'AcceptedSpecies.tsv','row':i} for _,i in mm],'nameReferences':[],'sourceAcceptedTaxonId':None}); continue
  r,ordinal=mm[0]; sid=r['AcceptedTaxonID']; sn=norm(r['Genus']+' '+r['SpeciesEpithet']); matched={'id':sid,'scientificName':sn,'authorship':r['AuthorString'],'status':r['Sp2000NameStatus'],'url':r['SpeciesURL']}
  out.append({'colId':c['id'],'colScientificName':c['scientificName'],'colAuthorship':a,'status':'accepted','matchedName':matched,'acceptedName':matched,'candidates':[],'mappingBasis':'Exact source name+authorship match; source fields preserved.','sourceRows':[{'member':'AcceptedSpecies.tsv','row':ordinal}],'sourceAcceptedTaxonId':sid,'sourceUrl':r['SpeciesURL'],'sourceClassification':{k:r[k] for k in ('Kingdom','Phylum','Class','Order')},'nameReferences':rb.get(sid,[])})
 out.sort(key=lambda x:x['colId']); payload=(json.dumps(out,ensure_ascii=False,separators=(',',':'))+'\n').encode(); OUT.parent.mkdir(parents=True,exist_ok=True)
 with OUT.open('wb') as f:
  with gzip.GzipFile(filename='',fileobj=f,mode='wb',mtime=0) as z:z.write(payload)
 ob=OUT.read_bytes(); file={'path':'protists-chromists/eumycetozoa-000.json.gz','records':len(out),'bytes':len(ob),'sha256':h(ob),'sourceBytes':len(payload),'sourceSha256':h(payload),'minColId':out[0]['colId'],'maxColId':out[-1]['colId'],'encoding':'gzip','mediaType':'application/json','role':'col-partition'}
 d={'schemaVersion':1,'recordType':'release-pinned-authority-archive-crosswalk','id':'eumycetozoa-archive-crosswalk','packageId':'protists-chromists','provider':'Eumycetozoa database via Catalogue of Life ChecklistBank','rowEncoding':'json','colIdField':'colId','totalCountField':'total','source':{'provider':'Eumycetozoa database','license':'CC-BY-4.0','archiveUrl':URL,'archiveBytes':ARCHIVE_BYTES,'archiveSha256':SHA,'version':'May 2024','sourceLedgerPath':'data/sources/eumycetozoa-archive-import-ledger.json'},'scope':{'colSourceDatasetId':1053,'eligibleColSpecies':len(targets),'projectedSpecies':len(out),'matchingKey':'exact source scientific name + authorship'},'matching':{'normalization':'Strict UTF-8 TSV; whitespace-only name+authorship comparison.','prohibited':'No fuzzy or inferred matching.'},'counts':{'total':len(out),'accepted':sum(x['status']=='accepted' for x in out),'redirect':0,'ambiguous':sum(x['status']=='ambiguous' for x in out),'unmatched':sum(x['status']=='unmatched' for x in out),'withheld':0,'upstreamOnly':0,'records':len(out)},'files':[file],'upstreamOnlyFiles':[],'evidenceBoundary':{'en':'Frozen source provenance for COL names; not an independent scientific validation or biological dossier.','zh':'COL 名称的冻结来源追溯；不是独立科学验证或生物档案。'},'limitations':['Only COL strict accepted species assigned source dataset 1053 are projected; no additional source-only rows are asserted.','Reference links retain original type, identifiers, source row locators and empty fields.'],'descriptorSha256':'','totalCompressedBytes':len(ob),'totalSourceBytes':len(payload),'deliveryProfiles':{'web-light':{'payload':'summary-only','files':[],'records':0,'totalCompressedBytes':0,'totalSourceBytes':0},'native-full':{'payload':'complete','files':[file['path']],'records':len(out),'totalCompressedBytes':len(ob),'totalSourceBytes':len(payload)}}}
 DESC.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); ledger={'schemaVersion':1,'importType':'COL26.8-to-ChecklistBank-1053-source-archive','source':d['source'],'scopeAudit':{'method':'Exact name+authorship match restricted to COL sourceDatasetId 1053','archiveAcceptedSpeciesRows':len(src),'colEligibleSpecies':len(targets),'matchedUniqueSourceAcceptedTaxonIds':len({x['sourceAcceptedTaxonId'] for x in out}),'sourceReferenceLinks':len(links),'sourceReferences':len(refs)},'output':{'path':file['path'],'bytes':len(ob),'sha256':h(ob),'sourceBytes':len(payload),'sourceSha256':h(payload)}}; LEDGER.write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(json.dumps({'records':len(out),'bytes':len(ob),'sourceBytes':len(payload)}))
if __name__=='__main__':main()
