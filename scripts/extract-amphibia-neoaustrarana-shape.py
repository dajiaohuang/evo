import json, hashlib, re
from pathlib import Path
import fitz
base = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC11117230')
pdf = fitz.open(base / 'TableS1.pdf')
genera = {'Alsodes', 'Atelognathus', 'Batrachyla', 'Chaltenobatrachus', 'Crossodactylus', 'Cycloramphus', 'Eupsophus', 'Hylodes', 'Hylorina', 'Limnomedusa', 'Megaelosia', 'Phantasmarana', 'Thoropa'}
columns = ['nameAsRecorded', 'genusAsRecorded', 'familyAsRecorded', 'tadpoleSourceAsRecorded', 'tadpoleVoucherAsRecorded', 'larvalGuildAsRecorded', 'adultSourceAsRecorded', 'adultVoucherAsRecorded', 'adultSexAsRecorded', 'adultEcomorphAsRecorded', 'referencesAsRecorded']
edges = [35, 155, 230, 300, 370, 470, 498, 557, 635, 660, 707, 807]
records = []
for page_index in range(3):
    words = pdf[page_index].get_text('words')
    starts = sorted(w[1] for w in words if 35 <= w[0] < 60 and w[4] in genera)
    for ordinal, start in enumerate(starts):
        stop = starts[ordinal + 1] - 0.1 if ordinal + 1 < len(starts) else start + 10
        cells = []
        for left, right in zip(edges, edges[1:]):
            selected = sorted((w for w in words if left <= w[0] < right and start - 0.1 <= w[1] < stop), key=lambda w: (round(w[1], 1), w[0]))
            cells.append(' '.join(w[4] for w in selected))
        row = dict(zip(columns, cells))
        if not re.fullmatch(r'[A-Z][a-z]+ [a-z]+', row['nameAsRecorded']):
            raise ValueError(row)
        if row['larvalGuildAsRecorded'] not in {'LE', 'LO', 'END', 'ST'} or row['adultEcomorphAsRecorded'] not in {'SAX', 'SEMAQ', 'TER', 'TOR'} or row['adultSexAsRecorded'] not in {'M', 'F', '?'}:
            raise ValueError(row)
        row.update({'pdfPage': page_index + 1, 'pageRow': ordinal + 1, 'rowOrdinal': len(records) + 1})
        records.append(row)
if len(records) != 83 or len({r['nameAsRecorded'] for r in records}) != 83:
    raise ValueError(f'Unexpected row/name count {len(records)}')
output = {'pmcid': 'PMC11117230', 'doi': '10.3390/ani14101406', 'supplementZipSha256': hashlib.sha256((base / 'animals-14-01406-s001.zip').read_bytes()).hexdigest(), 'tableS1Sha256': hashlib.sha256((base / 'TableS1.pdf').read_bytes()).hexdigest(), 'columns': columns, 'records': records, 'scope': 'TableS1 first3pages visually inspected; coordinate-bounded text columns retain voucher/source/sex and guild fields. Original148upstreamreference studies and individual specimens not independently examined.'}
(base / 'neoaustrarana-shape-source-rows.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({'rows': len(records), 'families': {f: sum(r['familyAsRecorded'] == f for r in records) for f in sorted({r['familyAsRecorded'] for r in records})}, 'sex': {s: sum(r['adultSexAsRecorded'] == s for r in records) for s in ['M', 'F', '?']}, 'zipSha256': output['supplementZipSha256'], 'first': records[0], 'last': records[-1]}, ensure_ascii=False))
