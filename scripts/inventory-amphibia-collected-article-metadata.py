"""Extract citation and attachment metadata; never certify article reading."""
import hashlib
import json
from pathlib import Path
import xml.etree.ElementTree as ET

root = Path('data/sources/snapshots/amphibia-full-roster-primary-2026-10-03')
papers, failures = [], []
def local(tag):
    return tag.rsplit('}', 1)[-1]
def text(element):
    return ''.join(element.itertext()).strip() if element is not None else None
def children(element, name):
    return [node for node in element.iter() if local(node.tag) == name] if element is not None else []
def first(element, name):
    return next(iter(children(element, name)), None)

jobs = [(directory.name, directory / 'article.xml', directory, None) for directory in sorted(root.iterdir())]
cloud_root = Path('data/sources/snapshots/amphibia-pmc-cloud-materials-2026-10-03')
for cloud_manifest in sorted(cloud_root.glob('*/manifest.json')):
    cloud = json.loads(cloud_manifest.read_text(encoding='utf8'))
    for version in cloud.get('versions', []):
        for item in version.get('objects', []):
            if item.get('kind') == 'xml_url' and item.get('file'):
                cloud_xml = Path(item['file'])
                if cloud_xml.exists():
                    jobs.append((cloud['pmcid'], cloud_xml, cloud_xml.parent.parent, {'prefix': version['prefix'], 'sourceUrl': item['url'], 'declaredSha256': item.get('sha256')}))

for pmcid, xml, directory, source_version in jobs:
    if not xml.exists():
        continue
    try:
        raw = xml.read_bytes()
        if source_version and source_version.get('declaredSha256') != hashlib.sha256(raw).hexdigest():
            raise ValueError('Captured version object does not match its source receipt SHA-256')
        article = ET.fromstring(raw)
        meta = first(article, 'article-meta')
        if meta is None:
            raise ValueError('No article-meta')
        authors = []
        for contributor in children(meta, 'contrib'):
            if contributor.get('contrib-type') != 'author':
                continue
            name = first(contributor, 'name')
            name_parts = {field: text(first(name, field)) for field in ['prefix', 'given-names', 'surname', 'suffix']} if name is not None else None
            value = ' '.join(filter(None, name_parts.values())) if name_parts is not None else text(first(contributor, 'collab'))
            authors.append({'name': value, 'nameParts': name_parts, 'originalName': text(name) if name is not None else text(first(contributor, 'collab')), 'attributes': contributor.attrib, 'identifiers': [{**part.attrib, 'value': text(part)} for part in children(contributor, 'contrib-id')]})
        ids = [{**node.attrib, 'value': text(node)} for node in children(meta, 'article-id')]
        dates = [{**node.attrib, 'year': text(first(node, 'year')), 'month': text(first(node, 'month')), 'day': text(first(node, 'day'))} for node in children(meta, 'pub-date')]
        licenses = []
        for node in children(meta, 'license'):
            links = []
            for part in node.iter():
                for key, value in part.attrib.items():
                    if local(key) == 'href':
                        links.append(value)
            licenses.append({'attributes': node.attrib, 'links': list(dict.fromkeys(links)), 'locator': 'article/front/article-meta/permissions/license', 'licenseInterpretationVerified': False})
        supplements = []
        for position, node in enumerate(children(article, 'supplementary-material')):
            links = []
            for part in node.iter():
                for key, value in part.attrib.items():
                    if local(key) == 'href':
                        links.append({'element': local(part.tag), 'href': value, 'attributes': part.attrib})
            supplements.append({'id': node.get('id'), 'position': position, 'links': links, 'downloaded': False, 'read': False})
        references = []
        for position, node in enumerate(children(article, 'ref')):
            citation = first(node, 'element-citation')
            if citation is None:
                citation = first(node, 'mixed-citation')
            people = []
            for group in children(node, 'person-group'):
                names = []
                for part in group:
                    if local(part.tag) in ['name', 'string-name']:
                        names.append({'surname': text(first(part, 'surname')), 'givenNames': text(first(part, 'given-names')), 'prefix': text(first(part, 'prefix')), 'suffix': text(first(part, 'suffix')), 'originalName': text(part)})
                    elif local(part.tag) in ['collab', 'etal']:
                        names.append({'kind': local(part.tag), 'originalName': text(part)})
                people.append({'attributes': group.attrib, 'names': names})
            references.append({'id': node.get('id'), 'position': position, 'title': text(first(node, 'article-title')), 'source': text(first(node, 'source')), 'year': text(first(node, 'year')), 'citationAttributes': citation.attrib if citation is not None else {}, 'personGroups': people, 'bibliographicFields': {field: [text(part) for part in children(node, field)] for field in ['volume', 'issue', 'fpage', 'lpage', 'elocation-id', 'publisher-name', 'publisher-loc', 'edition', 'ISBN', 'ISSN'] if children(node, field)}, 'originalCitationText': text(citation), 'identifiers': [{**part.attrib, 'value': text(part)} for part in children(node, 'pub-id')], 'externalLinks': [value for part in node.iter() for key, value in part.attrib.items() if local(key) == 'href'], 'originalLocator': {'xmlPath': xml.as_posix(), 'articleSha256': hashlib.sha256(raw).hexdigest(), 'referenceId': node.get('id'), 'position': position, 'element': 'ref'}, 'originalCitedWorkRead': False, 'biologicalClaimsAssigned': False})
        result = {'pmcid': pmcid, 'sourceVersion': source_version, 'xmlPath': xml.as_posix(), 'sha256': hashlib.sha256(raw).hexdigest(), 'articleType': article.get('article-type'), 'title': text(first(meta, 'article-title')), 'authors': authors, 'identifiers': ids, 'publicationDates': dates, 'licenses': licenses, 'supplements': supplements, 'citedReferences': references, 'metadataLocator': 'article/front/article-meta', 'extractionMethod': 'XML structural fields only; existing local objects only, no network requests', 'scientificEvidenceRead': False, 'biologicalClaimsAssigned': False}
        journal_meta = first(article, 'journal-meta')
        result['journalMetadata'] = {'titles': [text(part) for part in children(journal_meta, 'journal-title')], 'abbreviations': [{**part.attrib, 'value': text(part)} for part in children(journal_meta, 'abbrev-journal-title')], 'identifiers': [{**part.attrib, 'value': text(part)} for part in children(journal_meta, 'journal-id')], 'issns': [{**part.attrib, 'value': text(part)} for part in children(journal_meta, 'issn')], 'publisherNames': [text(part) for part in children(journal_meta, 'publisher-name')], 'publisherLocations': [text(part) for part in children(journal_meta, 'publisher-loc')]}
        result['articleCitationFields'] = {field: [text(part) for part in children(meta, field)] for field in ['volume', 'issue', 'fpage', 'lpage', 'elocation-id', 'isbn', 'edition'] if children(meta, field)}
        metadata_file = directory / 'bibliographic-metadata.json'
        new_text = json.dumps(result, ensure_ascii=False, indent=2) + '\n'
        if metadata_file.exists():
            previous = metadata_file.read_bytes()
            if previous != new_text.encode('utf8'):
                previous_hash = hashlib.sha256(previous).hexdigest()
                archive = directory / f'bibliographic-metadata.previous-{previous_hash}.json'
                if not archive.exists():
                    archive.write_bytes(previous)
        metadata_file.write_text(new_text, encoding='utf8')
        papers.append({'pmcid': pmcid, 'sourceVersion': source_version, 'metadataPath': (directory / 'bibliographic-metadata.json').as_posix(), 'sha256': result['sha256'], 'supplementItems': len(supplements), 'citedReferences': len(references)})
    except Exception as error:
        failures.append({'path': xml.as_posix(), 'error': str(error)})

receipt = {'capturedArticlesProcessed': len(papers), 'failures': failures, 'papers': papers, 'supplementItems': sum(row['supplementItems'] for row in papers), 'citedReferences': sum(row['citedReferences'] for row in papers), 'collectionComplete': False, 'scientificEvidenceRead': False, 'centralReferencesRegistered': False}
Path('docs/amphibia-content/collected-article-metadata-inventory.json').write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({key: value for key, value in receipt.items() if key not in ['papers', 'failures']} | {'failures': len(failures)}))
