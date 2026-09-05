"""Import pinned, reviewed original-language flora excerpts offline."""
import gzip
import hashlib
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys


class PlainText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)

    def handle_starttag(self, tag, attrs):
        if tag in ('p', 'div', 'br', 'li'):
            self.parts.append('\n')

    def handle_endtag(self, tag):
        if tag in ('p', 'div', 'li'):
            self.parts.append('\n')


def plain_text(markup):
    parser = PlainText()
    parser.feed(markup)
    parser.close()
    text = ''.join(parser.parts)
    # Decode nested text entities only after HTML parsing, preserving < and >
    # as measurement characters rather than interpreting them as new markup.
    for _ in range(4):
        decoded = html.unescape(text)
        if decoded == text:
            break
        text = decoded
    return '\n\n'.join(re.sub(r'[^\S\n]+', ' ', line).strip()
                        for line in text.split('\n') if line.strip())


def main(input_path):
    root = Path(__file__).resolve().parent.parent
    data = Path(input_path).read_bytes()
    expected = 'b4a010a2c8be91f717fac3d61e26141c79ac60b674a23bef5069a4d101d8059d'
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError('Changed reviewed Mesoamericana candidate')
    species = {}
    for row in map(json.loads, data.decode('utf-8').splitlines()):
        record = species.setdefault(row['colId'], {
            'colId': row['colId'], 'wfoId': row['wfoId'],
            'scientificName': row['scientificName'], 'descriptions': []})
        record['descriptions'].append({
            'type': 'general', 'text': plain_text(row['sourceMarkup']),
            'language': row['language'], 'rowNumber': row['rowNumber'],
            'references': [{**reference, 'citation': plain_text(reference['citation'])}
                           for reference in row['references']],
            'rightsHolder': row['rightsHolder'], 'rights': row['rights'],
            'license': row['license'], 'sourceExcerpt': True,
            'atSourceCharacterLimit': len(row['sourceMarkup'].encode('utf-16-le')) // 2 >= 4000,
        })
    records = [species[key] for key in sorted(species)]
    body = ''.join(json.dumps(record, ensure_ascii=False, separators=(',', ':')) + '\n'
                   for record in records).encode('utf-8')
    compressed = bytearray(gzip.compress(body, compresslevel=9, mtime=0))
    compressed[9] = 255
    output = 'data/sources/meso-descriptions.jsonl.gz'
    (root / output).write_bytes(compressed)
    ledger = {
        'provider': 'Missouri Botanical Garden', 'title': 'Flora Mesoamericana',
        'retrievedAt': '2026-09-05', 'sourceVersion': 'WFO archive retrieved 2026-09-05',
        'sourceUrl': 'https://files.worldfloraonline.org/files/MBG/Flora_Mesoamericana/Flora_Mesoamericana.zip',
        'license': 'CC BY 4.0', 'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/',
        'archiveSha256': '55a67bc3092d472aced949cd61bc17b40cb15ad50ac0254f54918b9246df67bb',
        'inputSha256': expected, 'output': output, 'outputBytes': len(compressed),
        'outputSha256': hashlib.sha256(compressed).hexdigest(),
        'species': len(records), 'descriptions': sum(len(r['descriptions']) for r in records),
        'limitations': [
            'Regional historical original-language excerpts, not complete global species dossiers.',
            'Source archive has a 4000-character text limit; excerpts may end mid-sentence. No missing text is reconstructed.',
            'WFO/COL links do not establish identical taxonomic concepts across source dates.',
            'HTML markup removed and entities decoded for plain-text display; original archive retained separately.',
        ],
    }
    (root / 'data/sources/meso-descriptions-import-ledger.json').write_text(
        json.dumps(ledger, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(ledger))


if __name__ == '__main__':
    main(sys.argv[1])
