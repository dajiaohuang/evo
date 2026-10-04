import{readFileSync as r,writeFileSync as w}from'node:fs';import{gunzipSync}from'node:zlib';
const files=JSON.parse(gunzipSync(r('data/sources/amniota-collection-stage-2026-10-03-created-files.json.gz')));
const terms=[['No biological archive or non-taxonomy reference located by this bounded collection pass; this is not a finding that sources do not exist.','本轮尚未定位到生物资料档案或分类以外的文献引用，不能据此认定没有可用来源'],['no usable unqualified species-level cited occurrence with age and locality context','尚缺带文献、年代与地点信息且无鉴定限定的可用种级产地记录'],['no complete recorded parent chain to the documented Dinosauria anchor','缺少通往已记录 Dinosauria 锚点的完整分类父链'],['No occurrence guide material located by this collection pass','本轮尚未定位到产地导读资料']];
let count=0;
for(const p of files.filter(p=>/page\.(zh|en)\.md$/.test(p))){let s=r(p,'utf8'),old=s;if(p.endsWith('.zh.md')){for(const[a,b]of terms)s=s.replaceAll(a,b);s=s.replaceAll('.。','。');}else s=s.replaceAll('exist..','exist.').replaceAll('context..','context.');if(s!==old){w(p,s);count++;}}
console.log(JSON.stringify({placeholderLanguageFilesEdited:count,scope:'Only files newly created by this collection stage; existing authored pages preserved.'}));
