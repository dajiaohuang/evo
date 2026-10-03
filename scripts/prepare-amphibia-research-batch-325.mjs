import fs from 'node:fs'
import {prepareAmphibianResearchInput} from './prepare-amphibia-research-input.mjs'
const b='docs/amphibia-content',pmc='PMC10351143',d=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${pmc}`
const inputs=JSON.parse(fs.readFileSync(`${b}/primary-reader-authoring-input.json`)),cells=JSON.parse(fs.readFileSync(`${d}/yunnan-amolops-focal-distance-reading.json`)).cells,changed=[]
for(const ep of ['loloensis','jinjiangensis','tuberodepressus','granulosus','shuichengicus','lifanensis','sangzhiensis']){
 const s=structuredClone(inputs.find(s=>s.pmc===pmc&&s.name===`Amolops ${ep}`));if(!s)throw Error(`Missing comparison ${ep}`)
 const chosen=cells.filter(c=>c.rowLabel===`1 A. ailao sp. nov.`?c.columnLabel.endsWith(` A. ${ep}`):c.rowLabel.endsWith(` A. ${ep}`)),byGene=new Map(chosen.map(c=>[c.gene,c]))
 const value=g=>byGene.has(g)?`${g}: ${byGene.get(g).printedPercent==='NA'?'NA':`${byGene.get(g).printedPercent}%`}`:`${g}: no named row in the selected table`
 const en=`The 2023 ailao description prints the following uncorrected pairwise distances between its focal label and A. ${ep}: ${['16S','COI','CYTB'].map(value).join('; ')}. Table 2 places 16S below the diagonal and COI above it; Table 3 gives CYTB below the diagonal. These are different mitochondrial loci with uneven taxon coverage. NA is retained as an unavailable comparison, and the absence of a named row is not evidence that the organism lacks that gene. The percentages are the authors' published values, not distances recomputed from authenticated sequences. They do not measure population-wide variation or establish a universal species threshold.`
 const zh=`2023年ailao描述刊出的焦点标签与A. ${ep}间未校正成对遗传距离为：${['16S','COI','CYTB'].map(g=>byGene.has(g)?`${g}：${byGene.get(g).printedPercent==='NA'?'NA':`${byGene.get(g).printedPercent}%`}`:`${g}：所选表中没有该具名行`).join('；')}。表2下三角为16S、上三角为COI，表3下三角为CYTB。这些是覆盖不均匀的不同线粒体位点。NA保留为不可用比较，缺少具名行不证明生物缺少该基因。百分数是作者发表值，并非从已认证序列重新计算，不测量全种群变异，也不建立普遍物种阈值。`
 const title='Published mitochondrial distances from the ailao label',i=s.sections.findIndex(r=>r[1]===title),row=['evolution',title,'与ailao标签的已发表线粒体距离',en,zh],loc=`${pmc} article.xml ${chosen.map(c=>`${c.table} row ${c.row} column ${c.column} (${c.gene}; ${c.rowLabel} / ${c.columnLabel})`).join('; ')}; yunnan-amolops-focal-distance-reading.json; Tab3 header has columns 1–11 for twelve numbered data rows, selected first-column values retained`
 if(i>=0){s.sections[i]=row;s.sectionLocators[i]=loc}else{s.sections.push(row);s.sectionLocators.push(loc)}
 s.readScope+='; selected focal pairwise-distance cells read with explicit row, column, gene and original label; no sequence or alignment authentication'
 changed.push(s)
}
prepareAmphibianResearchInput(changed)
console.log(JSON.stringify({extendedSpecies:changed.length,addedSections:7,selectedCells:cells.length,unassigned:['Amolops ottorum: no exact frozen accepted-name match; preserve in genus source-label comparison'],testsRun:false}))
