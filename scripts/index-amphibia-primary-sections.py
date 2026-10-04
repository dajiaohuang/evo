"""Prepare local reading leads; no biological claims or concept mappings certified."""
import json
import re
from pathlib import Path
import xml.etree.ElementTree as ET

root = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02')
taxa = json.loads(Path('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json').read_text(encoding='utf-8'))
by_name = {taxon['scientificName']: taxon['colId'] for taxon in taxa}

def plain(element):
    if element is None:
        return ''
    return re.sub(r'\s+', ' ', ' '.join(element.itertext())).replace('\ufeff', '').strip()

def names_in(text):
    return sorted(set(re.findall(r'\b[A-Z][a-z]+ [a-z][a-z-]+\b', text)) & by_name.keys())

articles = []
species = {}
for path in sorted(root.glob('*/article.xml')):
    article = ET.parse(path).getroot()
    body = article.find('body')
    if body is None:
        continue
    metadata = article.find('front/article-meta')
    title = plain(metadata.find('title-group/article-title')) if metadata is not None else ''
    authors = []
    if metadata is not None:
        for group in metadata.findall('contrib-group'):
            for contributor in group.findall('contrib'):
                if contributor.get('contrib-type') != 'author' and group.get('content-type') != 'author':
                    continue
                name = contributor.find('name')
                if name is not None:
                    authors.append(' '.join(filter(None, [name.findtext('given-names'), name.findtext('surname')])))
    licenses = [plain(license) for license in article.iter('license')]
    ids = {item.get('pub-id-type'): item.text for item in metadata.findall('article-id')} if metadata is not None else {}
    sections = []
    def walk(element, headings=(), inherited_names=()):
        if element.tag == 'sec':
            heading = plain(element.find('title'))
            headings = (*headings, heading)
            matched = names_in(heading)
            if matched:
                inherited_names = tuple(matched)
        paragraphs = [plain(p) for p in element.findall('p')]
        if paragraphs:
            direct_names = names_in(' '.join(paragraphs))
            targeted_names = sorted(set(inherited_names) | set(direct_names))
            if targeted_names:
                section_id = element.get('id')
                record = {'sectionId': section_id, 'headings': list(headings), 'explicitOrInheritedNameLeads': targeted_names, 'paragraphs': paragraphs, 'evidenceRead': False, 'biologicalClaimAssignmentCertified': False}
                sections.append(record)
                for name in targeted_names:
                    species.setdefault(by_name[name], {'colId': by_name[name], 'scientificName': name, 'articleSectionLeads': []})['articleSectionLeads'].append({'pmcid': path.parent.name, 'doi': ids.get('doi'), 'title': title, 'sectionId': section_id, 'headings': list(headings), 'sourceFile': str(path).replace('\\', '/'), 'readingFile': str(path.parent / 'reading-sections.json').replace('\\', '/'), 'sectionIndex': len(sections) - 1})
        for child in element:
            if child.tag in ('sec', 'boxed-text'):
                walk(child, headings, inherited_names)
    walk(body)
    reading = {'pmcid': path.parent.name, 'title': title, 'authorsAsRecorded': authors, 'articleIds': ids, 'licenseTextAsRecorded': licenses, 'licenseReviewed': False, 'sections': sections, 'note': 'Local source excerpts for reading. Name mentions and inherited treatment headings are leads only, including comparative or cited claims. No automated biological assignment.'}
    (path.parent / 'reading-sections.json').write_text(json.dumps(reading, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    articles.append({'pmcid': path.parent.name, 'title': title, 'doi': ids.get('doi'), 'readingSectionCount': len(sections), 'licenseTextPresent': bool(licenses), 'articleRead': False})

ledger = {'note': 'Paragraph-reading queue, not completed scientific content. Current name matches do not certify taxon concepts or ownership of cited observations.', 'capturedArticles': len(articles), 'currentSpeciesWithParagraphLeads': len(species), 'articles': articles, 'species': sorted(species.values(), key=lambda item: item['scientificName'])}
Path('docs/amphibia-content/primary-section-reading-queue.json').write_text(json.dumps(ledger, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'capturedArticles': len(articles), 'currentSpeciesWithParagraphLeads': len(species), 'indexedSections': sum(item['readingSectionCount'] for item in articles), 'biologicalClaimsAuthored': False}))
