import json,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC6746222');r=E.parse(base/'article.xml')
table=r.find('.//table-wrap[@id="table-1"]/table');family=None;rows=[]
for i,tr in enumerate(table.findall('./tbody/tr'),1):
    cells=[' '.join(''.join(td.itertext()).split()) for td in tr]
    if len(cells)==1:family=cells[0];continue
    if len(cells)!=13:raise ValueError(cells)
    rows.append({'tableRow':i,'familyAsRecorded':family,'sourceName':cells[0],'filterText':cells[1],'maleCount':cells[2],'callsAnalyzed':cells[3],'localities':cells[4],'recorder':cells[5],'microphone':cells[6],'recordist':cells[7],'date':cells[8],'fnjvNumbers':cells[9],'identificationCriterion':cells[10],'historicalMMA2014Status':cells[11],'historicalEndemismLabel':cells[12],'literalCells':cells})
sec=r.find('.//sec[@id="sec3"]');children=list(sec)
for j,row in enumerate(rows):
    i=3+j*3;heading=' '.join(''.join(children[i].itertext()).split())
    if row['sourceName'] not in heading:raise ValueError((row['sourceName'],heading))
    row.update({'resultHeadingRow':i,'resultParagraphRow':i+1,'resultParagraph':' '.join(''.join(children[i+1].itertext()).split()),'figureCaption':' '.join(''.join(children[i+2].itertext()).split())})
if len(rows)!=20:raise ValueError(len(rows))
(base/'atlantic-calls-extraction.json').write_text(json.dumps({'pmc':'PMC6746222','rows':rows,'fullArticleRead':False,'rawAudioIndependentlyReanalyzed':False},ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'speciesRows':len(rows),'licenses':len(r.findall('.//license'))}))
