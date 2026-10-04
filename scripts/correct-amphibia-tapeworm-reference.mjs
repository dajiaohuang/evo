import fs from 'node:fs'
import {topLevelReferenceSpans,replaceAmphibianReferenceFile} from './amphibia-source-reference.mjs'
const attribution='Original bilingual factual summaries of a compiled literature checklist; no source prose, tables, identification key or illustrations reproduced, adapted or translated.'
const file='docs/amphibia-content/primary-reader-authoring-input.json',inputs=JSON.parse(fs.readFileSync(file))
for(const r of inputs)if(r.pmc==='PMC10658874'){r.attribution=attribution;r.sourceRole='unclassified'}
fs.writeFileSync(file,JSON.stringify(inputs,null,2)+'\n')
const refs='data/references.json',bytes=fs.readFileSync(refs,'utf8'),spans=topLevelReferenceSpans(bytes).filter(s=>s.reference.doi==='10.1645/23-6')
if(spans.length!==1)throw Error(`Unexpected own reference count ${spans.length}`)
const span=spans[0],ref=span.reference
ref.sourceRole='unclassified'
ref.note='Compiled literature checklist with historical host and parasite attributions; not an independently reproduced primary survey or a documented reproducible systematic search.'
for(const m of ref.importedSourceMetadata??[]){m.attribution=attribution;if(m.referenceEnvelopeFields?.attribution)m.referenceEnvelopeFields.attribution=attribution}
if(ref.attribution!==undefined)ref.attribution=attribution
const replacement=JSON.stringify(ref,null,2),updated=bytes.slice(0,span.start)+replacement+bytes.slice(span.end)
if(updated!==bytes){const staged=`data/references.amphibia-tapeworm-${process.pid}.tmp`;fs.writeFileSync(staged,updated,{flag:'wx'});replaceAmphibianReferenceFile(staged,refs,bytes)}
console.log(JSON.stringify({referenceUpdated:ref.id,speciesMetadataUpdated:inputs.filter(r=>r.pmc==='PMC10658874').length,unrelatedReferenceBytesPreserved:true,testsRun:false}))
