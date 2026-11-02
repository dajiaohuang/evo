import csv
import io
import json
import zipfile
from pathlib import Path

for path in sorted(Path('data/sources/archives').glob('*.zip')):
    try:
        with zipfile.ZipFile(path) as archive:
            members = set(archive.namelist())
            if not {'Taxon.tsv', 'Name.tsv', 'Synonym.tsv'} <= members:
                continue
            sizes = {name: archive.getinfo(name).file_size for name in ('Taxon.tsv', 'Name.tsv', 'Synonym.tsv')}
            fields = {}
            for name in sizes:
                with archive.open(name) as raw:
                    fields[name] = csv.DictReader(io.TextIOWrapper(raw, encoding='utf-8-sig', newline=''), delimiter='\t').fieldnames
            print(json.dumps({'archive': path.name, 'bytes': sizes, 'fields': fields}, ensure_ascii=False))
    except (OSError, zipfile.BadZipFile, UnicodeError) as error:
        print(json.dumps({'archive': path.name, 'error': str(error)}))
