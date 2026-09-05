"""Import reviewed Moss Flora of China prose and its source citations."""
import gzip
import hashlib
import importlib.util
import json
from pathlib import Path
import sys

spec = importlib.util.spec_from_file_location(
    'flora_plain_text', Path(__file__).with_name('import-meso-descriptions.py'))
converter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(converter)


def main(input_path):
    root = Path(__file__).resolve().parent.parent
    data = Path(input_path).read_bytes()
    expected = 'b12e792886bec2302f5885104cfe196d505ff295a293c0d9ed38cf9ec6fb1ff1'
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError('Changed reviewed Moss China candidate')
    records = []
    for row in map(json.loads, data.decode('utf-8').splitlines()):
        description = {key: row[key] for key in (
            'type', 'rowNumber', 'sourceId', 'referenceRowNumbers',
            'rightsHolder', 'rights', 'license', 'citationMissingInSource')}
        description['language'] = 'en' if row['language'] == 'English' else row['language']
        description['text'] = converter.plain_text(row['sourceMarkup'])
        description['citations'] = [converter.plain_text(c) for c in row['citations']]
        record = {key: row[key] for key in (
            'colId', 'wfoId', 'scientificName', 'sourceAuthorship')}
        record['descriptions'] = [description]
        records.append(record)
    records.sort(key=lambda r: r['colId'])
    body = ''.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) + '\n'
                   for r in records).encode('utf-8')
    compressed = bytearray(gzip.compress(body, compresslevel=9, mtime=0))
    compressed[9] = 255
    output = 'data/sources/moss-china-descriptions.jsonl.gz'
    (root / output).write_bytes(compressed)
    ledger = {
        'provider': 'Missouri Botanical Garden', 'title': 'Moss Flora of China',
        'retrievedAt': '2026-09-06', 'sourceVersion': 'WFO archive retrieved 2026-09-06',
        'sourceUrl': 'https://files.worldfloraonline.org/files/MBG/Moss_Flora_of_China/Moss_Flora_of_China.zip',
        'license': 'CC BY 4.0', 'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/',
        'archiveSha256': 'af48f215e59305f4eceb3beb9cecbf5e68797110459e9d6f9428d5d0c10a95ba',
        'inputSha256': expected, 'output': output, 'outputBytes': len(compressed),
        'outputSha256': hashlib.sha256(compressed).hexdigest(),
        'species': len(records), 'descriptions': len(records),
        'limitations': [
            'Regional historical English prose, not complete global species dossiers or current distribution assessments.',
            'Markup removed and entities decoded for plain-text display; original fields retained independently.',
            'No source character cap established; completeness is not implied.',
            'Scientific names and authorship reflect the source; WFO/COL links do not prove identical taxonomic concepts across dates.',
        ],
    }
    (root / 'data/sources/moss-china-descriptions-import-ledger.json').write_text(
        json.dumps(ledger, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(ledger))


if __name__ == '__main__':
    main(sys.argv[1])
