import csv
import io
import json
import zipfile
from pathlib import Path

for path in sorted(Path('data/sources/archives').glob('*.zip')):
    if not any(value in path.name for value in ('1081-', '1085-', '1090-', '1099-', '1112-', '1122-', '1124-', '1125-', '1127-', '1128-', '1132-', '1150-', '1153-', '1178-', '1180-', '1182-', '1185-', '1186-', '1193-', '2302-', '298081-', 'worms-monogenea')):
        continue
    try:
        with zipfile.ZipFile(path) as archive:
            candidates = [name for name in archive.namelist() if name.lower().endswith(('nameusage.tsv', 'taxon.tsv', 'synonym.tsv', 'name.tsv', 'taxon.txt', 'name.txt', 'synonym.txt'))]
            fields = {}
            for name in candidates[:4]:
                with archive.open(name) as raw:
                    fields[name] = csv.DictReader(io.TextIOWrapper(raw, encoding='utf-8-sig', newline=''), delimiter='\t').fieldnames
            print(json.dumps({'archive': path.name, 'members': candidates, 'fields': fields}, ensure_ascii=True))
    except (OSError, UnicodeError, zipfile.BadZipFile) as exc:
        print(json.dumps({'archive': path.name, 'error': str(exc)}))
