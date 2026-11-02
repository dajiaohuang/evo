import csv
import io
import json
import zipfile
from pathlib import Path

ledger = json.loads(Path('data/sources/wsc-spiders-archive-56185-import-ledger.json').read_bytes())
source = ledger['source']
print(json.dumps({'sourceKeys': list(source), 'archivePath': source.get('archivePath'), 'archiveSha256': source.get('archiveSha256'), 'membersType': type(source.get('members')).__name__}, ensure_ascii=True))
with zipfile.ZipFile(source['archivePath']) as archive, archive.open('NameUsage.tsv') as raw:
    reader = csv.DictReader(io.TextIOWrapper(raw, encoding='utf-8-sig', newline=''), delimiter='\t')
    print(json.dumps({'fields': reader.fieldnames, 'first': next(reader)}, ensure_ascii=True))
