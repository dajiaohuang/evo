import csv
import io
import json
import sys
import zipfile

if len(sys.argv) < 2:
    raise SystemExit('Provide source taxon IDs')
ids = set(sys.argv[1:])
with zipfile.ZipFile('data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip') as archive:
    def rows(member):
        with archive.open(member) as raw:
            yield from csv.DictReader(io.TextIOWrapper(raw, encoding='utf-8-sig', newline=''), delimiter='\t')
    taxa = [row for row in rows('Taxon.tsv') if row['id'] in ids]
    synonyms = [row for row in rows('Synonym.tsv') if row.get('taxon_id') in ids]
    name_ids = {row['name_id'] for row in taxa + synonyms}
    names = {row['id']: row for row in rows('Name.tsv') if row['id'] in name_ids}
    for taxon in taxa:
        print(json.dumps({'taxonId': taxon['id'], 'accepted': names.get(taxon['name_id']), 'synonyms': [{'row': row, 'name': names.get(row['name_id'])} for row in synonyms if row['taxon_id'] == taxon['id']]}, ensure_ascii=False))
