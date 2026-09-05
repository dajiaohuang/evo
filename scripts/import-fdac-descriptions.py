"""Import reviewed FDAC original text without rewriting source punctuation."""
import gzip
import hashlib
import json
from pathlib import Path
import sys


def main(input_path):
    root = Path(__file__).resolve().parent.parent
    data = Path(input_path).read_bytes()
    expected = '4c9155a9115807703ce078b5234784cbdce319bbe1c0f1e3fada912dc49306a2'
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError('Changed reviewed FDAC candidate')
    species = {}
    for row in map(json.loads, data.decode('utf-8').splitlines()):
        record = species.setdefault(row['colId'], {
            'colId': row['colId'], 'wfoId': row['wfoId'],
            'scientificName': row['scientificName'], 'descriptions': []})
        description = {key: row[key] for key in (
            'type', 'language', 'languageNote', 'sourceId', 'rowNumber',
            'citations', 'referenceRowNumbers', 'citationMissingInSource',
            'rightsHolder', 'rights', 'license')}
        description['text'] = row['sourceText']
        record['descriptions'].append(description)
    records = [species[key] for key in sorted(species)]
    body = ''.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) + '\n'
                   for r in records).encode('utf-8')
    compressed = bytearray(gzip.compress(body, compresslevel=9, mtime=0))
    compressed[9] = 255
    output = 'data/sources/fdac-descriptions.jsonl.gz'
    (root / output).write_bytes(compressed)
    ledger = {
        'provider': 'Meise Botanic Garden', 'title': "Flora d'Afrique Centrale",
        'retrievedAt': '2026-09-05', 'sourceVersion': 'WFO archive retrieved 2026-09-05',
        'sourceUrl': 'https://files.worldfloraonline.org/files/Flora%20d%27Afrique/WFO-fdac.zip',
        'license': 'CC BY 4.0', 'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/',
        'archiveSha256': 'c6c64bb11a078f4d8690622a20f7097e8b121ae28fbc41f4952c192959d39c2e',
        'inputSha256': expected, 'output': output, 'outputBytes': len(compressed),
        'outputSha256': hashlib.sha256(compressed).hexdigest(),
        'species': len(records), 'descriptions': sum(len(r['descriptions']) for r in records),
        'limitations': [
            'Regional historical morphology and habitat text, not complete global species dossiers.',
            'Original text and punctuation preserved exactly; no missing passages reconstructed.',
            'The archive does not declare description language; und is not an inferred language.',
            'Nineteen paragraphs lack bibliographic citations in the source; archive attribution and row locators remain available.',
            'WFO/COL links do not establish identical taxonomic concepts across source dates.',
        ],
    }
    (root / 'data/sources/fdac-descriptions-import-ledger.json').write_text(
        json.dumps(ledger, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(ledger))


if __name__ == '__main__':
    main(sys.argv[1])
