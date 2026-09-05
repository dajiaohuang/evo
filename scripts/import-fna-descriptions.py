"""Import FNA general descriptions using the flora plain-text converter."""
import gzip, hashlib, importlib.util, json, sys
from pathlib import Path
spec=importlib.util.spec_from_file_location('flora_plain_text',Path(__file__).with_name('import-meso-descriptions.py')); converter=importlib.util.module_from_spec(spec); spec.loader.exec_module(converter)
EXPECTED='8233845ca47933354065462bf701d3efa7b70917fad1df5fe704ef1fc297c15f'; ARCHIVE='0757eb55f2e844383d34650ea3aa577d15c2210f3893561b6694559dd9aa02e1'
def main(input_path):
 root=Path(__file__).resolve().parent.parent; data=Path(input_path).read_bytes()
 if hashlib.sha256(data).hexdigest()!=EXPECTED: raise ValueError('Changed final FNA candidate')
 records=[]; unclosed=0
 for row in map(json.loads,data.decode('utf-8').splitlines()):
  markup=row['sourceMarkup']; flag=markup.count('<p>')>markup.count('</p>'); unclosed+=flag
  d={key:row[key] for key in ('type','rowNumber','sourceId','referenceRowNumbers','rightsHolder','rights','license')}; d['citationMissingInSource']=False
  d.update({'language':'en','text':converter.plain_text(markup),'citations':[converter.plain_text(c) for c in row['citations']],'sourceExcerpt':True,'sourceEndUnclosed':flag})
  records.append({'colId':row['colId'],'wfoId':row['wfoId'],'scientificName':row['scientificName'],'descriptions':[d]})
 records.sort(key=lambda r:r['colId']); body=''.join(json.dumps(r,ensure_ascii=False,separators=(',',':'))+'\n' for r in records).encode(); out=bytearray(gzip.compress(body,9,mtime=0)); out[9]=255
 output='data/sources/fna-descriptions.jsonl.gz'; (root/output).write_bytes(out)
 ledger={'provider':'Flora of North America Association','title':'Flora of North America','retrievedAt':'2026-09-06','sourceVersion':'FNA archive retrieved 2026-09-06','sourceUrl':'https://files.worldfloraonline.org/files/eFloras/FNA/FNA.zip','license':'CC BY 4.0','licenseUrl':'https://creativecommons.org/licenses/by/4.0/','archiveSha256':ARCHIVE,'inputSha256':EXPECTED,'output':output,'outputBytes':len(out),'outputSha256':hashlib.sha256(out).hexdigest(),'species':len(records),'descriptions':len(records),'sourceEndUnclosed':unclosed,'limitations':['FNA core supplies taxonID only; species rank and accepted status come from pinned COL crosswalk.','General descriptions only; literature rows are retained outside integration as evidence.','Original markup is normalized for display; retained candidate preserves original markup and citations.']}
 (root/'data/sources/fna-descriptions-import-ledger.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(json.dumps(ledger))
if __name__=='__main__': main(sys.argv[1])
