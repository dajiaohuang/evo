import csv
import io
import json
import zipfile

path = 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip'
with zipfile.ZipFile(path) as archive, archive.open('Synonym.tsv') as raw:
    reader = csv.DictReader(io.TextIOWrapper(raw, encoding='utf-8-sig', newline=''), delimiter='\t')
    count = 0
    examples = []
    for row in reader:
        count += 1
        if len(examples) < 2:
            examples.append(row)
    print(json.dumps({'member': 'Synonym.tsv', 'fields': reader.fieldnames, 'count': count, 'examples': examples}, ensure_ascii=False))
