import json,re
import xml.etree.ElementTree as ET
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13149743')
root=ET.parse(base/'article.xml').getroot()
text=lambda x: re.sub(r'\s+',' ',''.join(x.itertext())).strip()
table=next(t for t in root.findall('.//table-wrap') if t.get('id')=='ece373504-tbl-0003')
records=[]
for rowno,tr in enumerate(table.findall('./table/tbody/tr'),1):
    cells=[text(x) for x in tr]
    if len(cells)!=6: raise ValueError(cells)
    if not cells[-1]: continue
    name=cells[0].replace('*','').strip()
    records.append({'tableBodyRow':rowno,'nameAsRecorded':name,'nameLabelAsRecorded':cells[0],'endemicToEcuadorAsRecorded':'*' in cells[0],'areaCodesAsRecorded':cells[1],'typeLocalityFlagAsRecorded':cells[2],'iucnAsRecorded':cells[3],'ecuadorianRedListAsRecorded':cells[4],'appendixFigureAsRecorded':cells[5]})
doi=next(text(x) for x in root.findall('.//article-id') if x.get('pub-id-type')=='doi')
result={'pmcid':'PMC13149743','doi':doi,'pubDatesAsRecorded':[text(x) for x in root.findall('.//pub-date')],'tableId':table.get('id'),'captionAsRecorded':text(table.find('caption')),'footnoteAsRecorded':text(table.find('table-wrap-foot')),'records':records,'scope':'Table3 urban/periurban amphibian source assignments only; originalappendices/vouchers/rawrecords notindependentlyverified'}
(base/'guayaquil-urban-amphibian-rows.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'rows':len(records),'doi':doi,'pubDates':result['pubDatesAsRecorded'],'endemicRows':sum(r['endemicToEcuadorAsRecorded'] for r in records),'typeLocalityRows':sum(r['typeLocalityFlagAsRecorded']=='X' for r in records),'names':[r['nameAsRecorded'] for r in records]},ensure_ascii=False))
