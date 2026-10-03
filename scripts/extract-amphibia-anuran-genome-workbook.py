import json,openpyxl
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12822217');name='12864_2025_12414_MOESM1_ESM.xlsx';w=openpyxl.load_workbook(base/name,read_only=True,data_only=False);sheets=[]
for s in w:
    rows=[]
    for i,cells in enumerate(s.iter_rows(values_only=True),1):
        rows.append({'row':i,'cells':list(cells)})
    sheets.append({'sheet':s.title,'rows':rows,'formulaCells':sum(isinstance(v,str) and v.startswith('=') for r in rows for v in r['cells'])})
out={'file':name,'sheets':sheets,'sourceWorkbookModified':False,'allCachedValuesRecalculated':False,'fullScientificClaimReview':False}
(base/'genome-workbook-extraction.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps([{'sheet':s['sheet'],'rows':len(s['rows']),'formulas':s['formulaCells']} for s in sheets]))
