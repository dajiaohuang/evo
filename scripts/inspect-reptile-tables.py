import csv
import io
import json
import zipfile

archive_path = 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip'
with zipfile.ZipFile(archive_path) as archive:
    for name in ('Taxon.tsv', 'Name.tsv', 'VernacularName.tsv'):
        with archive.open(name) as raw:
            reader = csv.DictReader(io.TextIOWrapper(raw, encoding='utf-8-sig', newline=''), delimiter='\t')
            examples = []
            for row in reader:
                examples.append(row)
                if len(examples) == 2:
                    break
            print(json.dumps({'member': name, 'header': reader.fieldnames, 'examples': examples}, ensure_ascii=False))
