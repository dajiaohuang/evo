import{readFileSync as read,writeFileSync as write,readdirSync as list,existsSync as exists,mkdirSync as mkdir}from'node:fs';
import{gunzipSync,gzipSync}from'node:zlib';
import{createHash}from'node:crypto';
import{stringify,parse}from'yaml';
import{scientificNameSegment}from'./tree-path-content.mjs';
const date='2026-10-03',root='data/catalogue-of-life/releases/2026-08-20/registry/hierarchy/nodes',sourceRoot='data/sources',out=sourceRoot+'/amniota-collection-stage-'+date;
const j=p=>JSON.parse(read(p,'utf8')),gz=p=>gunzipSync(read(p)).toString('utf8'),sha=p=>createHash('sha256').update(read(p)).digest('hex');
const bare=x=>x.authorship&&x.scientificName.endsWith(' '+x.authorship)?x.scientificName.slice(0,-x.authorship.length-1):x.scientificName;
const higher=new Map(),files=list(root).filter(x=>x.endsWith('.jsonl.gz')).sort();
for(const f of files)for(const line of gz(root+'/'+f).split('\n'))if(line){const x=JSON.parse(line);if(x.rank!=='species')higher.set(x.id,x);}
const chains=new Map();function ancestors(id){if(!id)return[];if(chains.has(id))return chains.get(id);const x=higher.get(id);if(!x)return null;const a=ancestors(x.parentId);if(!a)return null;const c=[...a,x];chains.set(id,c);return c;}
const sources=new Map(),sourceFiles=[];
function add(id,locator){if(!id)return;if(!sources.has(id))sources.set(id,[]);sources.get(id).push(locator);}
for(const f of list(sourceRoot).filter(x=>x.endsWith('-records.jsonl.gz')).sort()){
 const p=sourceRoot+'/'+f;sourceFiles.push({path:p,sha256:sha(p)});let lineNo=0;
 for(const line of gz(p).split('\n')){lineNo++;if(!line)continue;const x=JSON.parse(line);if(x.colId)add('COL:'+x.colId,{path:p,line:lineNo});}
}
// Selected historical-name crosswalks are retained as candidates, never concept equivalence.
const cross='data/sources/avonet-name-crosswalk-intake-2026-10-03.json';
const candidateFile='.git/avonet-name-source-candidates-145.json',candidatePath=out+'-historical-candidates.json.gz';
let candidateCount=0;
if(exists(candidateFile)){const a=j(candidateFile);write(candidatePath,gzipSync(JSON.stringify(a)+'\n'));sourceFiles.push({path:candidatePath,sha256:sha(candidatePath)});for(let i=0;i<a.length;i++){const x=a[i];add('COL:'+x.target.colId,{path:candidatePath,recordIndex:i,matchStatus:'historical-name-candidate-not-concept-equivalence'});candidateCount++;}}
const pbRoot=sourceRoot+'/snapshots/pbdb-amniota-accepted-fossil-species-2026-10-02.json',pbRows=j(pbRoot).records;
const pbPaths=new Map(),pbGaps=new Map(),pbReceipts=new Map();
for(const f of list(sourceRoot).filter(x=>x.endsWith('-occurrence-guides-2026-10-02.json')).sort()){
 const p=sourceRoot+'/'+f,v=j(p);sourceFiles.push({path:p,sha256:sha(p)});
 for(const x of v.authoredPages??[]){pbPaths.set(x.pbdbTaxonId,x.path);add('PBDB:'+x.pbdbTaxonId,{path:p,field:'authoredPages',sourceArchive:v.sourceArchivePath??null});}
 for(const x of v.sourceInsufficient??[]){pbGaps.set(x.oid,x.reason);pbReceipts.set(x.oid,p);}
}
// Missing fossil placements remain explicit navigation topics; no ancestry is invented.
const topicBase='content/topics/atlas/amniota-source-collection',topicNames=new Map();
for(const x of pbRows){const n=scientificNameSegment(x.nam);topicNames.set(n,(topicNames.get(n)??0)+1);}
const counts={COL:{records:0,byClass:{},withArchivedBiologicalMaterial:0,withoutArchivedBiologicalMaterial:0},PBDB:{records:pbRows.length,withOccurrenceGuideMaterial:0,sourceInsufficient:0},created:{indices:0,evidenceFiles:0,localePlaceholders:0},preservedLocaleFiles:0,unresolvedPlaceholderPaths:[]};
const rows=[],queue=[],newFiles=[];
function put(p,s){if(exists(p))return false;mkdir(p.slice(0,p.lastIndexOf('/')),{recursive:true});write(p,s);newFiles.push(p);return true;}
function placeholders(row,index){const p=row.canonicalPath;if(!p){counts.unresolvedPlaceholderPaths.push(row.identity);return;}
 if(put(p+'/index.yaml',stringify(index,{lineWidth:0})))counts.created.indices++;
 // The collection record deliberately does not use catalogue-profile or reviewed status.
 const zh=`资料收集中。本页为 ${row.scientificName} 的占位入口，生物学正文尚未编写。${row.gapReason?'当前资料缺口：'+row.gapReason+'。':''}分类记录与名称对应不等于完整生物学资料。已收集材料及补充任务见资料清单；占位不计正文完成。`;
 const en=`Source collection is in progress. This is a placeholder for ${row.scientificName}; biological prose has not been authored. ${row.gapReason?'Recorded gap: '+row.gapReason+'. ':''}Taxonomic identity and name links do not constitute complete biological evidence. Collected material and follow-up tasks are recorded in the collection ledger. A placeholder is not completed prose.`;
 const record={scientificName:row.scientificName,sourceIdentity:row.identity,status:'source-collection-placeholder',ledger:out+'-records.jsonl.gz',sourceLocators:row.sourceLocators,comprehensiveSpeciesMonograph:false};
 const ep=p+'/evidence.md';if(!exists(ep)){put(ep,'---\n'+stringify({schemaVersion:1,kind:'evidence',records:{'collection-status':record}},{lineWidth:0})+'---\n\n# '+row.scientificName+'\n');counts.created.evidenceFiles++;}
 for(const [locale,text]of [['zh',zh],['en',en]]){
  const fp=p+'/page.'+locale+'.md';if(exists(fp)){counts.preservedLocaleFiles++;continue;}
  if(put(fp,'---\nschemaVersion: 1\nkind: reader-page\nlocale: '+locale+'\nstatus: not-authored\n---\n\n# '+row.scientificName+'\n\n'+text+'\n\n'+(locale==='zh'?'[资料收集范围与状态]':'[Collection scope and status]')+'('+('../'.repeat(p.split('/').length))+'docs/amniota-collection-stage-2026-10-03.md)\n'))counts.created.localePlaceholders++;
 }
}
function record(row,index){rows.push(row);if(row.gapReason)queue.push({identity:row.identity,scientificName:row.scientificName,canonicalPath:row.canonicalPath,gapReason:row.gapReason,nextAction:row.authority==='COL'?'Collect species-specific biological sources; resolve historical name/concept matches before reuse.':'Retrieve original cited taxonomic/occurrence literature and resolve placement; retain unusable occurrence records separately.'});placeholders(row,index);}
for(const f of files)for(const line of gz(root+'/'+f).split('\n'))if(line){const x=JSON.parse(line);if(x.rank!=='species'||x.status!=='accepted')continue;const a=ancestors(x.parentId);if(!a)continue;const cls=a.find(y=>y.rank==='class'&&['Mammalia','Aves','Reptilia'].includes(bare(y)));if(!cls)continue;
 const name=bare(x),p='content/taxa/'+[...a,x].map(y=>scientificNameSegment(bare(y))).join('/'),id='COL:'+x.id,loc=sources.get(id)??[];
 const ep=p+'/evidence.md';let bindings=[];if(exists(ep)){const m=/^---\r?\n([\s\S]*?)\r?\n---/.exec(read(ep,'utf8'));if(m){const e=parse(m[1]);for(const [key,r]of Object.entries(e.records??{}))if(key!=='collection-status'){const b=r?.sources?.referenceBindings??[];if(b.length)bindings.push({path:ep,recordKey:key,referenceBindings:b});}}}
 const hasMaterial=loc.some(l=>!l.matchStatus)||bindings.some(b=>b.referenceBindings.some(r=>r.sourceKey!=='taxonomy'));
 counts.COL.records++;counts.COL.byClass[bare(cls)]=(counts.COL.byClass[bare(cls)]??0)+1;counts.COL[hasMaterial?'withArchivedBiologicalMaterial':'withoutArchivedBiologicalMaterial']++;
 const sourceUrl='https://www.checklistbank.org/dataset/316115/taxon/'+x.id;
 record({identity:id,authority:'COL',sourceId:x.id,scientificName:name,class:bare(cls),canonicalPath:p,taxonomy:{path:root+'/'+f,recordId:x.id,url:sourceUrl},sourceLocators:loc,existingEvidence:bindings,collectionState:hasMaterial?'archived-material-not-comprehensive-review':'biological-source-collection-pending',gapReason:hasMaterial?null:'No biological archive or non-taxonomy reference located by this bounded collection pass; this is not a finding that sources do not exist.'},{schemaVersion:1,kind:'taxon',scientificName:x.scientificName,displayName:name,rank:x.rank,classification:{authority:'Catalogue of Life',release:'COL26.8',publishedAt:'2026-08-20',status:x.status,sourceDatasetId:x.sourceDatasetId,sourceUrl}});
}
for(const x of pbRows){const id='PBDB:'+x.oid,loc=sources.get(id)??[],gap=pbGaps.get(x.oid)??(loc.length?null:'No occurrence guide material located by this collection pass'),name=x.nam;
 let p=pbPaths.get(x.oid);if(!p){const n=scientificNameSegment(name);p=topicNames.get(n)===1?topicBase+'/'+n:null;}
 counts.PBDB[loc.length?'withOccurrenceGuideMaterial':'sourceInsufficient']++;
 record({identity:id,authority:'PBDB',sourceId:x.oid,scientificName:name,canonicalPath:p,placement:pbPaths.has(x.oid)?'previously-recorded-ancestry':'unresolved-navigation-topic',taxonomy:{path:pbRoot,recordId:x.oid,url:'https://paleobiodb.org/data1.2/taxa/single.json?id='+x.oid.replace('txn:','')},sourceLocators:loc,collectionState:loc.length?'archived-occurrence-material-not-full-literature-review':'original-literature-collection-pending',gapReason:gap,priorGapReceipt:pbReceipts.get(x.oid)??null},{schemaVersion:1,kind:'topic',scientificName:name,displayName:name,sourceIdentity:{authority:'PBDB',oid:x.oid,snapshot:pbRoot},placementStatus:'unresolved-navigation-topic'});
}
write(out+'-records.jsonl.gz',gzipSync(rows.map(x=>JSON.stringify(x)).join('\n')+'\n'));
write(out+'-followups.jsonl.gz',gzipSync(queue.map(x=>JSON.stringify(x)).join('\n')+'\n'));
const receipt={schemaVersion:1,date,scope:'Pinned COL26.8 Mammalia/Aves/Reptilia accepted species and dated PBDB Amniota fossil species; independent source identities, no biological-name deduplication.',counts,historicalCandidates: candidateCount,sourceFiles,ledger:out+'-records.jsonl.gz',followupQueue:out+'-followups.jsonl.gz',ledgerSha256:sha(out+'-records.jsonl.gz'),newFileManifest:out+'-created-files.json.gz',placeholderCompletion:counts.unresolvedPlaceholderPaths.length===0,biologicalCollectionComplete:false,comprehensiveProseComplete:false,delivery:'Canonical placeholders and collection ledger only. Generation, tests, commits and publication remain deferred. Existing locale files and evidence are preserved.'};
write(receipt.newFileManifest,gzipSync(JSON.stringify(newFiles)+'\n'));write(out+'.json',JSON.stringify(receipt,null,2)+'\n');
const doc=`# 羊膜动物资料收集与占位阶段\n\n2026-10-03。按用户最新指令，暂停扩写生物学正文，先逐目标收集资料和放置占位。\n\n## 范围\n\nCOL26.8：${counts.COL.records} 个接受种记录，${JSON.stringify(counts.COL.byClass)}。PBDB：${counts.PBDB.records} 个独立化石种级记录。两份清单不按名称合并为唯一生物物种数。\n\n## 当前产物\n\n- 全目标资料索引：${receipt.ledger}。每条保留来源身份、分类位置、档案定位和已存证据引用。\n- 待采集清单：${receipt.followupQueue}，共 ${queue.length} 条。COL ${counts.COL.withoutArchivedBiologicalMaterial} 条本轮未定位到生物资料；PBDB ${counts.PBDB.sourceInsufficient} 条保留产地资料不足或分类位置问题。\n- 新增 ${counts.created.localePlaceholders} 个语言占位文件，保留 ${counts.preservedLocaleFiles} 个已有语言文件。占位 status=not-authored；不计可读生物学正文。\n- ${candidateCount} 个历史名称候选已从工作缓存转存独立来源档案；名称对应尚须逐项确认物种概念。\n\n## 尚未完成\n\n生物资料收集未全部完成。现有档案和引用定位不等于原始论文全文已读取、资料主题完整或概念匹配已解决。占位不消除资料缺口。按后续指令，测试、生成、提交和发布继续延后。原正文任务和历史正文计数保留为独立口径。\n\n下一步直接使用待采集清单，优先补 COL 的未定位生物资料及 PBDB 的原始命名／产地文献；收集完成后再恢复正文生产。\n`;
write('docs/amniota-collection-stage-2026-10-03.md',doc);
write('docs/content-goal.md',`# Current content goal\n\nUser update 2026-10-03: complete source collection and explicit placeholders for all scoped Amniota before continuing prose.\n\nKeep the pinned COL26.8 accepted-species union (Mammalia 6461, Aves 11044, Reptilia 12649; 30154 records) separate from the dated PBDB fossil species roster (22684 OIDs). These are distinct source concepts, not deduplicated biological species.\n\nUse canonical recorded-name taxon paths, shared references and independent source archives according to docs/content-storage.md. Preserve existing prose. Missing material or unresolved placement remains explicit; placeholders use status not-authored and do not count as authored biology, complete collection.\n\nCurrent collection ledger and remaining source work: docs/amniota-collection-stage-2026-10-03.md and data/sources/amniota-collection-stage-2026-10-03.json. Biological collection is complete only when remaining source gaps have actually been resolved or individually reported with a concrete access/source blocker. A ledger, name record or placeholder alone is not biological collection completion.\n\nTests, validators, generation, commits and publication remain deferred under the user’s prior instruction until the authorized content stage is finished. Previous reader-production requirements remain recorded in docs/content-production-plan.md; do not reinterpret historical prose counts as this collection stage.\n`);
console.log(JSON.stringify({counts,followups:queue.length,receipt:out+'.json'}));
