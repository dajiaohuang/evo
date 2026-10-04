"""Read-only extraction: preserve original cells, rows and field names."""
import csv
import io
import json
from pathlib import Path
import openpyxl

root = Path('data/sources/snapshots')
for slug in ['amphibian-morphology-2023', 'caeciliantraits-2025', 'tadpoletraits-2025']:
    directory = root / f'{slug}-2026-10-02'
    tables = []
    for source in sorted(directory.iterdir()):
        if source.suffix == '.csv':
            raw = source.read_bytes()
            encoding = 'utf-8-sig'
            try:
                text = raw.decode(encoding)
            except UnicodeDecodeError:
                encoding = 'windows-1252'
                text = raw.decode(encoding)
            rows = list(csv.reader(io.StringIO(text, newline='')))
            tables.append({'sourceFile': source.name, 'encoding': encoding,
                           'headers': rows[0], 'rows': [
                               {'rowNumber': i + 2, 'values': row}
                               for i, row in enumerate(rows[1:])]})
        elif source.suffix == '.xlsx':
            workbook = openpyxl.load_workbook(source, read_only=True, data_only=True)
            for sheet in workbook.worksheets:
                rows = list(sheet.iter_rows(values_only=True))
                tables.append({'sourceFile': source.name, 'sheet': sheet.title,
                               'headers': rows[0], 'rows': [
                                   {'rowNumber': i + 2, 'values': row}
                                   for i, row in enumerate(rows[1:])],
                               'extraction': 'Original cached cell values; no recalculation, editing or export.'})
            workbook.close()
    (directory / 'decoded-source-tables.json').write_text(
        json.dumps({'tables': tables}, ensure_ascii=False, indent=2, allow_nan=False) + '\n',
        encoding='utf-8')
    print(json.dumps({'source': slug, 'tables': [
        {'file': table['sourceFile'], 'sheet': table.get('sheet'),
         'rows': len(table['rows']), 'columns': len(table['headers'])}
        for table in tables]}))
