"""Import reviewed Moss Flora excerpts with explicit source limitations."""
import gzip
import hashlib
import importlib.util
import json
from pathlib import Path
import sys

converter_path = Path(__file__).with_name('import-meso-descriptions.py')
spec = importlib.util.spec_from_file_location('flora_plain_text', converter_path)
converter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(converter)


def main(input_path):
    root = Path(__file__).resolve().parent.parent
    data = Path(input_path).read_bytes()
    expected = 'dbc7909e3d373b3ab44a38b91b7ebd9def890153db64488aa5b12477dc13ed25'
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError('Changed reviewed Moss Flora candidate')
    records = []
    for row in map(json.loads, data.decode('utf-8').splitlines()):
        description = {key: row[key] for key in (
            'type', 'language', 'rowNumber', 'sourceId', 'referenceRowNumbers',
            'rightsHolder', 'rights', 'license', 'sourceExcerpt',
            'atSourceCharacterLimit', 'sourceEndUnclosed')}
        description['text'] = converter.plain_text(row['sourceMarkup'])
        description['citations'] = [converter.plain_text(c) for c in row['citations']]
        records.append({key: row[key] for key in ('colId', 'wfoId', 'scientificName')})
        records[-1]['descriptions'] = [description]
    records.sort(key=lambda r: r['colId'])
    body = ''.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) + '\n'
                   for r in records).encode('utf-8')
    compressed = bytearray(gzip.compress(body, compresslevel=9, mtime=0))
    compressed[9] = 255
    output = 'data/sources/moss-descriptions.jsonl.gz'
    (root / output).write_bytes(compressed)
    ledger = {
        'provider': 'Missouri Botanical Garden', 'title': 'Moss Flora of Central America',
        'retrievedAt': '2026-09-05', 'sourceVersion': 'WFO archive retrieved 2026-09-05',
        'sourceUrl': 'https://files.worldfloraonline.org/files/MBG/Central_American_Mosses/Central_American_Mosses.zip',
        'license': 'CC BY 4.0', 'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/',
        'archiveSha256': '5e3e566508bdfdd6a7afe8d416d92ee7a45bb26d0ed7a2ac78d2b161ea34e2c9',
        'inputSha256': expected, 'output': output, 'outputBytes': len(compressed),
        'outputSha256': hashlib.sha256(compressed).hexdigest(),
        'species': len(records), 'descriptions': len(records),
        'limitations': [
            'Regional historical English source excerpts, not complete global species dossiers.',
            '54 excerpts reach the observed 32759-character source boundary and may be truncated; no missing text is reconstructed.',
            '76 source fields lack a closing paragraph tag; this alone does not prove textual truncation.',
            'HTML removed and entities decoded using the existing flora plain-text converter; original markup retained independently.',
            'WFO/COL links do not establish identical taxonomic concepts across source dates.',
        ],
    }
    (root / 'data/sources/moss-descriptions-import-ledger.json').write_text(
        json.dumps(ledger, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(ledger))


if __name__ == '__main__':
    main(sys.argv[1])
