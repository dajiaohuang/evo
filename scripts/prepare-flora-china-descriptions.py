"""Prepare the pinned Flora of China candidate using only Python's standard library.

Pass the retained ZIP, decoded WFO crosswalk JSON, and a new output JSONL path.
The output is consumed by import-flora-china-descriptions.mjs.
"""
import argparse
import csv
import hashlib
import io
import json
import zipfile
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path


class SourceText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.sub = False

    def handle_starttag(self, tag, attrs):
        if tag in ('p', 'br'):
            self.parts.append('\n')
        if tag == 'sub':
            self.sub = True

    def handle_endtag(self, tag):
        if tag == 'p':
            self.parts.append('\n')
        if tag == 'sub':
            self.sub = False

    def handle_data(self, data):
        self.parts.append(data.translate(str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')) if self.sub else data)


def plain(value):
    parser = SourceText()
    parser.feed(value)
    parser.close()
    return ''.join(parser.parts).strip()


def prepare(archive, crosswalk):
    if hashlib.sha256(archive).hexdigest() != '4c0b89280efdcfd0ef8dc753cca5d63566ddf8c34542b0bb4a78cdce799b63a9':
        raise ValueError('Flora of China archive fingerprint changed')
    if hashlib.sha256(crosswalk).hexdigest() != '980144add135db3fa709392552534e19e33bc45605a97f5bafeb4d239d1621af':
        raise ValueError('WFO crosswalk fingerprint changed')
    by = defaultdict(list)
    for row in json.loads(crosswalk)['colRecords']:
        if row.get('wfoId'):
            by[row['wfoId']].append(row)
    with zipfile.ZipFile(io.BytesIO(archive)) as source:
        descriptions = list(csv.reader(io.StringIO(source.read('description.txt').decode(), newline=''), delimiter='\t', quoting=csv.QUOTE_NONE))
        references = list(csv.reader(io.StringIO(source.read('reference.txt').decode(), newline=''), delimiter='\t'))
    refs = {(row[0], row[1]): (number, row) for number, row in enumerate(references, 1)}
    if len(refs) != 37061 or len(references) != 37061:
        raise ValueError('Reference identity count changed')
    selected = []
    for number, row in enumerate(descriptions, 1):
        matches = by[row[0]]
        if len(matches) != 1 or matches[0].get('status') != 'accepted':
            continue
        col = matches[0]
        reference_number, reference = refs[(row[0], row[3])]
        if len(row) != 12 or row[2] != 'general' or row[4] != 'English' or row[9] or len(reference) != 19 or reference[16]:
            raise ValueError('Source schema or license defaults changed')
        selected.append({'colId': col['colId'], 'wfoId': row[0], 'scientificName': col['colScientificName'],
            'descriptionRecordNumber': number, 'type': row[2], 'language': 'en', 'sourceLanguage': row[4],
            'text': plain(row[1]), 'sourceId': row[3], 'citation': plain(reference[2]),
            'referenceRecordNumber': reference_number, 'referenceTitle': plain(reference[3]),
            'referenceCreator': plain(reference[4]), 'referenceDate': reference[5],
            'rightsHolder': row[10] or 'Missouri Botanical Garden', 'rights': row[11] or 'Missouri Botanical Garden',
            'license': 'http://creativecommons.org/licenses/by/4.0', 'citationScope': 'description-source'})
    if len(selected) != 20049 or len({row['colId'] for row in selected}) != 20049 or not all(row['text'] and row['citation'] for row in selected):
        raise ValueError('Candidate identity or citation contract changed')
    output = ''.join(json.dumps(row, ensure_ascii=False, separators=(',', ':')) + '\n' for row in selected).encode('utf-8')
    if hashlib.sha256(output).hexdigest() != '2ecd4df59916b5b0073724f6b32ac04f5df9297e484d3975bacc34b55eda99a7':
        raise ValueError('Candidate output fingerprint changed')
    return output


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path)
    parser.add_argument('decoded_crosswalk', type=Path)
    parser.add_argument('output', type=Path)
    args = parser.parse_args()
    output = prepare(args.archive.read_bytes(), args.decoded_crosswalk.read_bytes())
    with args.output.open('xb') as destination:
        destination.write(output)
    print(f'Prepared 20049 records, {len(output)} bytes')
