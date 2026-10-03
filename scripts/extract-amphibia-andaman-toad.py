import json,re,xml.etree.ElementTree as E
from pathlib import Path
base=Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC4740822');r=E.parse(base/'article.xml')
tables={t.get('id'):[[' '.join(''.join(c.itertext()).split()) for c in tr] for tr in t.findall('.//tr')] for t in r.findall('.//table-wrap')}
sequence=[]
for i,cells in enumerate(tables['T6'][1:],1):
    match=re.match(r'([A-Z][a-z]+ [a-z]+)',cells[0])
    if not match:raise ValueError(cells)
    sequence.append({'sourceName':match.group(1),'row':i,'locationAsRecorded':cells[1],'accessionsAsRecorded':cells[2],'treeMembershipAsRecorded':cells[3:6],'referenceAsRecorded':cells[6]})
app=r.find('.//sec[@id="App1"]');text=' '.join(''.join(app.findall('p')[1].itertext()).split());vouchers=[]
for i,part in enumerate(re.split(r'; (?=[A-Z][a-z]+ )',text),1):
    part=part.strip().rstrip('.');match=re.match(r'([A-Z][a-z]+ (?:[a-z]+|‘[^’]+’)) (.*)',part)
    if not match:raise ValueError(part)
    vouchers.append({'sourceName':match.group(1),'entry':i,'materialAsRecorded':match.group(2),'qualified':bool('‘' in match.group(1))})
obj={'pmc':'PMC4740822','sequenceRows':sequence,'comparativeVoucherRows':vouchers,'literalTables':tables,'fullArticleRead':False,'originalVouchersOrSequencesIndependentlyReviewed':False}
(base/'andaman-toad-extraction.json').write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'sequenceRows':len(sequence),'comparativeVoucherRows':len(vouchers),'sourceNames':sorted(set(x['sourceName'] for x in sequence+vouchers))},ensure_ascii=False))
