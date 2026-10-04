import csv,gzip,hashlib,io,json,pathlib,zipfile,collections,shutil,openpyxl,re
root=pathlib.Path('.'); base=root/'data/sources/amniota-collection-stage-2026-10-03'
def loadgz(p):
    with gzip.open(p,'rt',encoding='utf-8') as f:return [json.loads(s) for s in f if s.strip()]
targets=loadgz(str(base)+'-followups.jsonl.gz');byname=collections.defaultdict(list);name_links=collections.defaultdict(list)
def simple_name(n):return re.sub(r'\s+',' ',re.sub(r'\s+\([^()]+\)','',n)).strip()
for x in targets:
    if x['identity'].startswith('COL:'):
        byname[x['scientificName']].append(x)
        n=simple_name(x['scientificName'])
        if n!=x['scientificName']:
            byname[n].append(x);name_links[(x['identity'],n)].append({'type':'subgenus-notation-normalization','recordedName':x['scientificName'],'candidateName':n,'conceptEquivalenceConfirmed':False})
selected_ids={x['identity'][4:]:x for x in targets if x['identity'].startswith('COL:')};name_shards=[];alias_count=0
for p in sorted((root/'data/catalogue-of-life/releases/2026-08-20/registry/search').glob('name-*.jsonl.gz')):
    matched=False
    for x in loadgz(p):
        if x.get('status')!='synonym' or x.get('acceptedId') not in selected_ids:continue
        n=x['scientificName'];author=x.get('authorship')
        if author and n.endswith(' '+author):n=n[:-len(author)-1]
        t=selected_ids[x['acceptedId']]
        for variant in set([n,simple_name(n)]):
            if variant not in byname or not any(y['identity']==t['identity'] for y in byname[variant]):byname[variant].append(t)
            name_links[(t['identity'],variant)].append({'type':'catalogue-synonym-candidate','record':x,'archive':str(p).replace('\\','/'),'conceptEquivalenceConfirmed':False})
        matched=True;alias_count+=1
    if matched:name_shards.append({'path':str(p).replace('\\','/'),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
print(json.dumps({'colSynonymNameRecordsCollected':alias_count,'nameShards':len(name_shards)}),flush=True)
materials=[];inputs=[];counts=collections.Counter()
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def inputfile(p,retained=None):
    p=pathlib.Path(p)
    if retained:
        retained=root/retained;retained.parent.mkdir(parents=True,exist_ok=True)
        if not retained.exists():shutil.copyfile(p,retained)
        if sha(p)!=sha(retained):raise ValueError('Source archive differs: '+str(retained))
    inputs.append({'originalPath':str(p).replace('\\','/'),'retainedPath':str(retained or p).replace('\\','/'),'sha256':sha(p)})
    return str(retained or p).replace('\\','/')
def add(name,source,locator,raw,related=None):
    for t in byname.get(name,[]):
        links=name_links[(t['identity'],name)]
        materials.append({'targetIdentity':t['identity'],'targetName':t['scientificName'],'sourceMatchedName':name,'canonicalPath':t['canonicalPath'],'source':source,'locator':locator,'matchStatus':'name-linked-source-candidate' if links else 'exact-name-source-candidate','catalogueNameLinks':links,'conceptEquivalenceConfirmed':False,'rawRecord':raw,'relatedMaterial':related or {},'interpretation':'Collected source material only; no biological prose, full-text reading, current distribution or expert review inferred.'});counts[source]+=1
def tsv(z,n):return list(csv.DictReader(io.StringIO(z.read(n).decode('utf-8-sig')),delimiter='\t'))
# Versioned source-checklist archives retain name assertions, original references,
# coarse distribution and type-material records separately.
current_mdd=root/'data/sources/archives/mdd-official-2026-10-03.zip'
if current_mdd.exists():
    retained=inputfile(current_mdd);z=zipfile.ZipFile(current_mdd)
    member='MDD/MDD_v2.5_6904species.csv';current=list(csv.DictReader(io.StringIO(z.read(member).decode('utf-8-sig'))));byid={x['id']:x for x in current}
    for i,x in enumerate(current,2):add(x['sciName'].replace('_',' '),'MDD-v2-5',{'archive':retained,'member':member,'line':i,'sourceId':x['id']},x,{'releaseMetadata':z.read('MDD/release.toml').decode()})
    member='MDD/Species_Syn_Current_v2.5.csv'
    for i,x in enumerate(csv.DictReader(io.StringIO(z.read(member).decode('utf-8-sig'))),2):
        name=x.get('MDD_normalized_original_combination','').strip()
        if name in byname:
            add(name,'MDD-v2-5-nominal-name',{'archive':retained,'member':member,'line':i,'sourceNameId':x['MDD_syn_ID']},{'nominalName':x,'currentMddSpecies':byid.get(x['MDD_species_id'])},{'currentSpeciesEquivalenceConfirmed':False,'nominalNameSourceIsNotAutomaticallyCurrentCOLSpeciesEvidence':True})
for source,file in [('MDD','checklistbank-9802-mdd.zip'),('ReptileDB','checklistbank-1008-reptiledb-2026-06.zip')]:
    path=root/'data/sources/archives'/file; retained=inputfile(path);z=zipfile.ZipFile(path)
    if source=='MDD':
        names=tsv(z,'NameUsage.tsv');refs={x['col:ID']:x for x in tsv(z,'Reference.tsv')};dist=collections.defaultdict(list);types=collections.defaultdict(list);syn=collections.defaultdict(list)
        for x in tsv(z,'Distribution.tsv'):dist[x['col:taxonID']].append(x)
        for x in tsv(z,'TypeMaterial.tsv'):types[x['col:nameID']].append(x)
        for x in names:
            if x['col:status']=='synonym':syn[x['col:parentID']].append(x)
        for i,x in enumerate(names,2):
            if x['col:rank']!='species' or x['col:status']=='synonym':continue
            id=x['col:ID']; refids={r['col:nameReferenceID'] for r in [x,*syn[id]] if r['col:nameReferenceID']}
            add(x['col:scientificName'],source,{'archive':retained,'member':'NameUsage.tsv','line':i,'sourceId':id},x,{'distribution':dist[id],'typeMaterial':types[id],'synonyms':syn[id],'references':[refs[k] for k in sorted(refids) if k in refs]})
    else:
        names={x['id']:x for x in tsv(z,'Name.tsv')};refs={x['id']:x for x in tsv(z,'Reference.tsv')};dist=collections.defaultdict(list);syn=collections.defaultdict(list)
        for x in tsv(z,'Distribution.tsv'):dist[x['taxon_id']].append(x)
        for x in tsv(z,'Synonym.tsv'):syn[x['taxon_id']].append(x)
        for i,x in enumerate(tsv(z,'Taxon.tsv'),2):
            n=names.get(x['name_id']);
            if not n or n['rank']!='species':continue
            relatedNames=[n]+[names[s['name_id']] for s in syn[x['id']] if s['name_id'] in names];refids=set()
            for r in [x,*relatedNames,*syn[x['id']]]:
                for k in ['reference_id','published_in_id','according_to_id']:
                    refids.update(v.strip() for v in r.get(k,'').split(',') if v.strip())
            add(n['scientific_name'],source,{'archive':retained,'member':'Taxon.tsv','line':i,'sourceId':x['id']}, {'taxon':x,'name':n},{'distribution':dist[x['id']],'synonyms':syn[x['id']],'relatedNames':relatedNames,'references':[refs[k] for k in sorted(refids) if k in refs]})
# ITIS biological distribution rows are retained alongside their name assertions.
p=root/'data/sources/archives/checklistbank-2144-itis-2026-08-26.zip';retained=inputfile(p);z=zipfile.ZipFile(p)
names={x['ID']:x for x in tsv(z,'Name.tsv')};refs={x['ID']:x for x in tsv(z,'Reference.tsv')};dist=collections.defaultdict(list)
for x in tsv(z,'Distribution.tsv'):dist[x['taxonID']].append(x)
for i,x in enumerate(tsv(z,'Taxon.tsv'),2):
    n=names.get(x['nameID'])
    if not n or n['rank']!='species' or not dist[x['ID']]:continue
    refids={r.get('referenceID') for r in [x,*dist[x['ID']]]}|{n.get('publishedInID')}
    add(n['scientificName'],'ITIS-distribution-2026-08-26',{'archive':retained,'member':'Taxon.tsv','line':i,'sourceId':x['ID']},{'taxon':x,'name':n},{'distribution':dist[x['ID']],'references':[refs[k] for k in sorted(k for k in refids if k and k!='NULL') if k in refs],'missingValue':'NULL','currentDistributionConfirmed':False})
# Full raw workbooks are retained; candidate extraction does not inherit prose filters.
p=root/'.git/avonet-supplementary-dataset-1-v7.xlsx';retained=inputfile(p,'data/sources/archives/amniota-avonet-v7.xlsx');wb=openpyxl.load_workbook(p,read_only=True,data_only=True)
def sheetrows(wb,name):
    it=iter(wb[name].values);headers=next(it);return [(i,{str(k).strip():v for k,v in zip(headers,row) if k is not None}) for i,row in enumerate(it,2)]
eb={x['Species1']:x for i,x in sheetrows(wb,'BirdLife-eBird crosswalk')};bt={x['Species1']:x for i,x in sheetrows(wb,next(s for s in wb.sheetnames if s.startswith('BirdLife') and s.endswith('BirdTree crosswalk')))}
defs=[list(x) for x in wb['Metadata'].values]
for i,x in sheetrows(wb,'AVONET1_BirdLife'):add(x['Species1'],'AVONET-v7',{'archive':retained,'worksheet':'AVONET1_BirdLife','excelRow':i},x,{'eBirdCrosswalk':eb.get(x['Species1']),'birdTreeCrosswalk':bt.get(x['Species1'])})
wb.close()
p=root/'.git/repttraits-ReptTraits dataset v1-2.xlsx';retained=inputfile(p,'data/sources/archives/amniota-repttraits-v1-2.xlsx');wb=openpyxl.load_workbook(p,read_only=True,data_only=True);sources=collections.defaultdict(list)
for i,x in sheetrows(wb,'Sources of individual trait val'):sources[x['Species']].append({'excelRow':i,'record':x})
reptdefs=[list(x) for x in wb['Trait definitions'].values];reptrefs=[list(x) for x in wb['References'].values]
for i,x in sheetrows(wb,'Data'):add(x['Species'],'ReptTraits-v1-2',{'archive':retained,'worksheet':'Data','excelRow':i},x,{'sourcesByTrait':sources[x['Species']]})
wb.close()
p=root/'.git/amniote-Amniote_Database_Aug_2015.csv';retained=inputfile(p,'data/sources/archives/amniota-lifehistory-2015.csv');refpath=root/'.git/amniote-Amniote_Database_References_Aug_2015.csv';refret=inputfile(refpath,'data/sources/archives/amniota-lifehistory-references-2015.csv')
with p.open(encoding='utf-8-sig',newline='') as f:
    for i,x in enumerate(csv.DictReader(f),2):add(x['genus']+' '+x['species'],'Amniote-lifehistory-2015',{'archive':retained,'line':i},x,{'referenceArchive':refret})
for version in ['WR05','WR93']:
    p=root/('.git/pantheria-PanTHERIA_1-0_'+version+'_Aug2008.txt');retained=inputfile(p,'data/sources/archives/amniota-pantheria-'+version+'-2008.tsv')
    with p.open(encoding='utf-8-sig',newline='') as f:
        for i,x in enumerate(csv.DictReader(f,delimiter='\t'),2):
            key=next((k for k in x if k.endswith('_Binomial')),None)
            if key:add(x[key],'PanTHERIA-'+version,{'archive':retained,'line':i},x)
for category in ['Bird','Mam']:
    p=root/('.git/eltontraits-'+category+'FuncDat.txt');retained=inputfile(p,'data/sources/archives/amniota-eltontraits-'+category+'-2014.tsv')
    with p.open(encoding='cp1252',newline='') as f:
        for i,x in enumerate(csv.DictReader(f,delimiter='\t'),2):add(x['Scientific'],'EltonTraits-'+category,{'archive':retained,'line':i,'encoding':'windows-1252'},x)
    p=root/('.git/eltontraits-'+category+'FuncDatSources.txt');inputfile(p,'data/sources/archives/amniota-eltontraits-'+category+'-sources-2014.tsv')
p=root/'.git/ernest2003-Mammal_lifehistories_v2.txt';retained=inputfile(p,'data/sources/archives/amniota-ernest-lifehistory-2003.tsv')
with p.open(encoding='cp1252',newline='') as f:
    for i,x in enumerate(csv.DictReader(f,delimiter='\t'),2):add(x['Genus']+' '+x['species'],'Ernest-lifehistory-2003',{'archive':retained,'line':i,'encoding':'windows-1252'},x)
# Same-name fossil candidates retain PBDB identity. Bibliographic records have
# already been downloaded, but they are not assumed to be original descriptions.
pbfile=root/'data/sources/snapshots/pbdb-amniota-accepted-fossil-species-2026-10-02.json';inputfile(pbfile);pb=json.loads(pbfile.read_text())['records'];bibliography={}
for p in sorted((root/'data/sources/snapshots/amniota-pbdb-bibliography-2026-10-03').glob('batch-*.json.gz')):
    with gzip.open(p,'rt',encoding='utf-8') as f:
        for x in json.load(f)['records']:bibliography[x['oid']]=x
for i,x in enumerate(pb):add(x['nam'],'PBDB-dated-fossil-name-candidate',{'archive':str(pbfile).replace('\\','/'),'recordIndex':i,'pbdbTaxonId':x['oid']},x,{'bibliography':bibliography.get(x.get('rid')),'COLConceptEquivalenceConfirmed':False})
path=root/'data/sources/amniota-additional-source-candidates-2026-10-03.jsonl.gz'
with gzip.open(path,'wt',encoding='utf-8') as f:
    for x in materials:f.write(json.dumps(x,ensure_ascii=False,allow_nan=False)+'\n')
definitions=root/'data/sources/amniota-raw-trait-definitions-2026-10-03.json'
definitions.write_text(json.dumps({'AVONET':defs,'ReptTraits':reptdefs,'ReptTraitsReferences':reptrefs},ensure_ascii=False,indent=2,allow_nan=False)+'\n',encoding='utf-8')
matched={x['targetIdentity'] for x in materials};unmatched=[x for x in targets if x['identity'].startswith('COL:') and x['identity'] not in matched]
receipt={'date':'2026-10-03','scope':'Collect unfiltered exact-name, subgenus-normalized and recorded-synonym candidates from retained versioned source archives. Identity, synonymy, family, missing-value conventions, historical boundaries and field-specific provenance still need review. Candidate availability is not biological concept equivalence, completed prose or full-text reading.','inputs':inputs,'catalogueNameShards':name_shards,'colSynonymRecordsCollected':alias_count,'candidateArchive':str(path).replace('\\','/'),'candidateArchiveSha256':sha(path),'definitions':str(definitions).replace('\\','/'),'countsBySource':dict(counts),'candidateRows':len(materials),'targetCOLRecordsWithCandidates':len(matched),'targetCOLRecordsWithoutCandidates':len(unmatched),'unmatchedCOL':unmatched,'fullTextRead':False,'expertReview':False}
(root/'data/sources/amniota-additional-source-candidates-2026-10-03.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({k:receipt[k] for k in ['countsBySource','candidateRows','targetCOLRecordsWithCandidates','targetCOLRecordsWithoutCandidates']}))
