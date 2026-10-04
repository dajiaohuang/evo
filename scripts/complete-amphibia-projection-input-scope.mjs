import fs from 'node:fs'
import path from 'node:path'
import { parse } from 'yaml'
const source=process.cwd(),target=path.resolve(process.argv[2]??'')
if(!process.argv[2]||target===source||!fs.existsSync(path.join(target,'.git')))throw Error('Independent verification checkout required')
const map=parse(fs.readFileSync(path.join(target,'content/projection-map.yaml'),'utf8')),directories=new Set()
function pointers(value){if(!value||typeof value!=='object')return;if(value.contentRecord?.path)directories.add(value.contentRecord.path);for(const child of Object.values(value))pointers(child)}
for(const [file,descriptor]of Object.entries(map.generatedInputs))if(file.startsWith('data/research/amphibia/'))pointers(descriptor)
const refs=new Set(),copied=[]
for(const dir of directories){if(!dir.startsWith('content/')||dir.includes('..')||dir.includes('\\'))throw Error('Unsafe canonical input');const from=path.join(source,dir),to=path.join(target,dir);if(!fs.existsSync(path.join(from,'index.yaml')))throw Error(`Source canonical input missing: ${dir}`);fs.mkdirSync(to,{recursive:true});for(const name of ['index.yaml','evidence.md','page.en.md','page.zh.md']){const file=path.join(from,name);if(!fs.existsSync(file))throw Error(`Source canonical file missing: ${file}`);const bytes=fs.readFileSync(file);fs.writeFileSync(path.join(to,name),bytes);if(name==='evidence.md')for(const m of bytes.toString('utf8').matchAll(/referenceId:\s*['"]?(ref-[\w-]+)/g))refs.add(m[1]);copied.push(`${dir}/${name}`)}}
const current=JSON.parse(fs.readFileSync(path.join(source,'data/references.json'))),file=path.join(target,'data/references.json'),clean=JSON.parse(fs.readFileSync(file)),existing=new Set(clean.map(r=>r.id)),added=current.filter(r=>refs.has(r.id)&&!existing.has(r.id));fs.writeFileSync(file,JSON.stringify([...clean,...added],null,2)+'\n')
const allInputs=new Set();function allPointers(value){if(!value||typeof value!=='object')return;if(value.contentRecord?.path)allInputs.add(value.contentRecord.path);for(const child of Object.values(value))allPointers(child)};allPointers(map.generatedInputs)
const missing=[...allInputs].filter(dir=>!fs.existsSync(path.join(target,dir,'index.yaml')))
const receipt={target,ownedSourceDirectories:directories.size,copiedFiles:copied.length,addedReferenceIds:added.map(r=>r.id),allProjectionInputDirectories:allInputs.size,missingProjectionInputDirectories:missing,existingReferencesPreserved:true,scopeAssumptionCorrected:'Independent Amphibia research readers live outside the Amphibia classification tree',projectionBuildNotRun:true}
for(const root of [source,target])fs.writeFileSync(path.join(root,'docs/amphibia-content/projection-input-scope-audit.json'),JSON.stringify(receipt,null,2)+'\n')
console.log(JSON.stringify({directories:directories.size,copied:copied.length,addedReferences:added.length,missing:missing.length}));if(missing.length)throw Error('Projection inputs remain missing; inspect scope audit before another build')
