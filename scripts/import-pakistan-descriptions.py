"""Import reviewed Flora of Pakistan text with source citations."""
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
    expected = '904e64d1506cc8be280ae44093a8970507202177c4a07d033fb5f503dad85eae'
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError('Changed reviewed Pakistan candidate')
    records = []
    for row in map(json.loads, data.decode('utf-8').splitlines()):
        description = {key: row[key] for key in (
            'type', 'language', 'rowNumber', 'sourceId', 'referenceRowNumbers',
            'rightsHolder', 'rights', 'license', 'citationMissingInSource')}
        description['text'] = converter.plain_text(row['sourceText'])
        description['citations'] = [converter.plain_text(c) for c in row['citations']]
        record = {key: row[key] for key in ('colId', 'wfoId', 'scientificName')}
        record['descriptions'] = [description]
        records.append(record)
    records.sort(key=lambda r: r['colId'])
    body = ''.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) + '\n'
                   for r in records).encode('utf-8')
    compressed = bytearray(gzip.compress(body, compresslevel=9, mtime=0))
    compressed[9] = 255
    output = 'data/sources/pakistan-descriptions.jsonl.gz'
    (root / output).write_bytes(compressed)
    ledger = {
        'provider': 'Missouri Botanical Garden', 'title': 'Flora of Pakistan',
        'retrievedAt': '2026-09-05', 'sourceVersion': 'WFO archive retrieved 2026-09-05',
        'sourceUrl': 'https://files.worldfloraonline.org/files/MBG/Flora_of_Pakistan/Flora_of_Pakistan.zip',
        'license': 'CC BY 4.0', 'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/',
        'archiveSha256': 'de6244d764c495dc0329979eb0c6085c3ad1395175ebac59c916070dcb01d10a',
        'inputSha256': expected, 'output': output, 'outputBytes': len(compressed),
        'outputSha256': hashlib.sha256(compressed).hexdigest(),
        'species': len(records), 'descriptions': len(records),
        'limitations': [
            'Regional historical English descriptions, not complete global species dossiers or current distribution assessments.',
            'HTML tags removed and entities decoded for plain-text display; original fields retained independently.',
            'No source character cap was observed; this does not establish completeness.',
            'WFO/COL links do not establish identical taxonomic concepts across source dates.',
        ],
    }
    (root / 'data/sources/pakistan-descriptions-import-ledger.json').write_text(
        json.dumps(ledger, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(ledger))


if __name__ == '__main__':
    main(sys.argv[1])
