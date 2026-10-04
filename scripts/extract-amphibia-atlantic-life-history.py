"""Archive workbook rows, inference flags and upstream reference links verbatim."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import openpyxl

folder = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10688756')
file = folder / 'pone.0291644.s003.xlsx'
workbook = openpyxl.load_workbook(file, read_only=True, data_only=False)
values = list(workbook['Traits'].values)
headers = list(values[0])
references = {str(row[0]): row[1] for row in list(workbook['References'].values)[1:]}
records = []
for number, values in enumerate(values[1:], start=2):
    record = dict(zip(headers, values))
    if any(isinstance(value, str) and value.startswith('=') for value in values):
        raise ValueError(f'Unresolved formula at Traits row {number}')
    refs = [value.strip() for value in str(record['References']).split(',') if value.strip()]
    if any(ref not in references for ref in refs):
        raise ValueError(f'Unresolved upstream reference at row {number}')
    records.append({'sheetRow': number, 'sourceName': record['Species'], 'normalizedName': record['Species'].replace('_', ' '), 'valuesAsRecorded': record, 'referenceNumbersAsRecorded': refs, 'upstreamReferencesAsRecorded': {ref: references[ref] for ref in refs}})
output = {'pmcid': 'PMC10688756', 'doi': '10.1371/journal.pone.0291644', 'license': 'CC BY 4.0', 'acquiredFrom': 'https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0291644.s003&type=supplementary', 'recordedAt': datetime.now(timezone.utc).isoformat(), 'sha256': hashlib.sha256(file.read_bytes()).hexdigest(), 'worksheet': 'Traits', 'headersAsRecorded': headers, 'records': records, 'upstreamReferenceCount': len(references), 'unitsAsRecorded': 'Length headers do not specify units; no unit conversion or independently certified dimensional values.', 'limits': ['Observation flags identify inferred head width/tibia length; unflagged cells are not independent proof of original measurements.', 'Means when available, otherwise maxima; sex and age not consistently specified by row.', 'Sheet S1–S7 categorical order interpreted with Methods Functional diversity list; multiple positive categories retained.', 'Upstream references transcribed, not independently read or taxonomic-concept-certified.']}
if len(records) != 464:
    raise ValueError(f'Unexpected source denominator {len(records)}')
(folder / 'atlantic-life-history-rows.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'rowsRetained': len(records), 'upstreamReferences': len(references), 'independentlyCertifiedMeasurements': False, 'testsRun': False}))
