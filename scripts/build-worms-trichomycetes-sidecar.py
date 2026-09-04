"""Build the pinned 2017 Trichomycetes (ChecklistBank source 1033) projection offline."""
import argparse,csv,gzip,hashlib,json,tarfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
PACK=ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists'
DEFAULT=ROOT/'data/sources/archives/checklistbank-1033-trichomycetes-2017-10-27.tar.gz'
OUT=PACK/'worms-trichomycetes-000.json.gz'; DESC=PACK/'worms-trichomycetes-sidecar.json'; LEDGER=ROOT/'data/sources/worms-trichomycetes-archive-import-ledger.json'
URL='https://api.checklistbank.org/dataset/1033/archive'; SHA='ad2f2a5e8b9feab455f73ac390be34908687f79fea4c858ade29e52a8acfc33e'; BYTES=38716
def clean(x): return ' '.join((x or '').split())
def rows(blob):
    return list(csv.DictReader((blob.decode('utf-8-sig','replace').splitlines()),delimiter='\t'))
def member(tf,name): return tf.extractfile(name).read()
def sha(b): return hashlib.sha256(b).hexdigest()
def main():
 p=argparse.ArgumentParser();p.add_argument('--archive',default=str(DEFAULT));a=p.parse_args(); archive=Path(a.archive)
 archiveBytes=archive.read_bytes()
 if len(archiveBytes)!=BYTES or sha(archiveBytes)!=SHA: raise SystemExit('archive bytes/hash do not match pinned snapshot')
 with tarfile.open(archive,'r:gz') as tf:
  src=rows(member(tf,'AcceptedSpecies.tsv')); refs=rows(member(tf,'References.tsv')); nrefs=rows(member(tf,'NameReferences.tsv'))
 byref={r['ReferenceID']:r for r in refs}; nr={}
 for n in nrefs: nr.setdefault(n['ID'],[]).append(byref.get(n['ReferenceID']))
 col=[]
 manifest=json.loads((PACK/'manifest.json').read_text(encoding='utf-8'))
 for f in manifest['files']:
  with gzip.open(ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs'/f['path'],'rt',encoding='utf-8') as h:
   col += [json.loads(x) for x in h if x.strip()]
 targets=[x for x in col if x.get('rank')=='species' and x.get('status')=='accepted' and str(x.get('sourceDatasetId'))=='1033']
 indexed={ (clean(r['Genus']+' '+r['SpeciesEpithet']),clean(r['AuthorString'])):r for r in src if r.get('Kingdom')=='Protozoa' and r.get('Class')=='Ichthyosporea' }
 out=[]
 for c in targets:
  bare=c['scientificName']; author=clean(c.get('authorship')); suffix=' '+author
  if author and bare.endswith(suffix): bare=bare[:-len(suffix)]
  key=(clean(bare),author); matches=[r for r in src if (clean(r['Genus']+' '+r['SpeciesEpithet']),clean(r['AuthorString']))==key]
  if len(matches)!=1 or matches[0].get('Kingdom')!='Protozoa' or matches[0].get('Class')!='Ichthyosporea': raise SystemExit(f'non-unique/non-Ichthyosporea {c}')
  r=matches[0]; sid=r['AcceptedTaxonID']; sname=clean(r['Genus']+' '+r['SpeciesEpithet']); surl=r['SpeciesURL']; matched={'id':sid,'scientificName':sname,'authorship':r['AuthorString'],'status':r['Sp2000NameStatus'],'url':surl}; out.append({'colId':c['id'],'colScientificName':c['scientificName'],'colAuthorship':c.get('authorship') or '','status':'accepted','matchedName':matched,'acceptedName':matched,'candidates':[],'mappingBasis':'Exact source name+authorship match; source fields preserved.','sourceRows':[{'member':'AcceptedSpecies.tsv','row':src.index(r)+2}],'sourceAcceptedTaxonId':sid,'sourceUrl':surl,'sourceClassification':{k:r[k] for k in ('Kingdom','Phylum','Class','Order')},'nameReferences':[x for x in nr.get(sid,[]) if x is not None]})
 out.sort(key=lambda x:x['colId']); payload=(json.dumps(out,ensure_ascii=False,separators=(',',':'))+'\n').encode(); OUT.parent.mkdir(parents=True,exist_ok=True)
 with OUT.open('wb') as raw:
  with gzip.GzipFile(filename='',fileobj=raw,mode='wb',mtime=0) as z: z.write(payload)
 ob=OUT.read_bytes(); descriptor={'schemaVersion':1,'recordType':'release-pinned-authority-archive-crosswalk','id':'worms-trichomycetes-archive-crosswalk','packageId':'protists-chromists','provider':'Trichomycetes – Fungi Associated with Arthropods via ChecklistBank','rowEncoding':'json','colIdField':'colId','totalCountField':'total','source':{'provider':'University of Kansas Trichomycetes database via Catalogue of Life ChecklistBank','license':'CC-BY-4.0','licenseUrl':'https://creativecommons.org/licenses/by/4.0/','archiveUrl':URL,'archiveBytes':BYTES,'archiveSha256':SHA,'archiveEncoding':'gzip-compressed tar (HTTP Content-Type application/zip)','version':'Oct 2017','versionDoi':'10.48580/d38n.v9','retrievedAt':'2026-09-04','sourceLedgerPath':'data/sources/worms-trichomycetes-archive-import-ledger.json'},'scope':{'colSourceDatasetId':1033,'sourceKingdom':'Protozoa','sourcePhylum':'Choanozoa','eligibleColSpecies':len(out),'excludedSourceFungiRows':289,'matchingKey':'exact source scientific name + authorship'},'matching':{'normalization':'Whitespace-only comparison of COL scientificName/authorship to source Genus + SpeciesEpithet/AuthorString; source fields preserved.','prohibited':'No fuzzy or inferred species-concept matching.'},'counts':{'total':len(out),'accepted':len(out),'redirect':0,'ambiguous':0,'unmatched':0,'withheld':0,'upstreamOnly':0,'records':len(out)},'files':[{'path':'protists-chromists/worms-trichomycetes-000.json.gz','records':len(out),'bytes':len(ob),'sha256':sha(ob),'sourceBytes':len(payload),'sourceSha256':sha(payload),'minColId':out[0]['colId'],'maxColId':out[-1]['colId'],'encoding':'gzip','mediaType':'application/json','role':'col-partition'}],'upstreamOnlyFiles':[],'evidenceBoundary':{'en':'A frozen source-provenance projection for COL names; not independent scientific corroboration, species-concept equivalence, a biological dossier, fossil evidence or expert review.','zh':'COL 名称的冻结来源追溯投影；不是独立科学佐证、物种概念等同、生物档案、化石证据或专家审查。'},'limitations':['Only the 96 COL strict accepted species assigned source dataset 1033 and matching Protozoa rows are projected; the 289 Fungi rows are excluded, not upstream-only records.','Only selected nomenclatural, status, identifier and linked reference fields are redistributed; this is not the raw archive.'],'descriptorSha256':'','totalCompressedBytes':len(ob),'totalSourceBytes':len(payload),'deliveryProfiles':{'web-light':{'payload':'summary-only','files':[],'records':0,'totalCompressedBytes':0,'totalSourceBytes':0},'native-full':{'payload':'complete','files':['protists-chromists/worms-trichomycetes-000.json.gz'],'records':len(out),'totalCompressedBytes':len(ob),'totalSourceBytes':len(payload)}}}
 DESC.write_text(json.dumps(descriptor,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 ledger={'schemaVersion':1,'importType':'COL26.8-to-ChecklistBank-1033-Protozoa-source-archive','source':descriptor['source'],'metadata':{'sourceDatabase':'Trichomycetes','sourceDatabaseVersion':'Oct 2017','releaseDate':'2017-10-27','taxonomicCoverage':'Protozoa - Choanozoa (pro parte); Fungi excluded from this projection'},'scopeAudit':{'method':'Exact name+authorship join restricted to COL sourceDatasetId 1033 and source Kingdom Protozoa','colEligibleSpecies':len(out),'matchedUniqueSourceAcceptedTaxonIds':len({x['sourceAcceptedTaxonId'] for x in out}),'excludedFungiRows':289}}
 LEDGER.write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(json.dumps({'records':len(out),'bytes':len(ob),'sourceBytes':len(payload),'descriptorSha256':descriptor['descriptorSha256']}))
if __name__=='__main__': main()
