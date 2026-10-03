"""Capture all declared objects for available PMC versions, with provenance."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import sys
import time
from urllib.parse import urlencode, urlsplit, parse_qs, unquote
from urllib.request import urlopen, Request
import xml.etree.ElementTree as ET

base = Path('docs/amphibia-content')
root = Path('data/sources/snapshots/amphibia-pmc-cloud-materials-2026-10-03')
root.mkdir(parents=True, exist_ok=True)
host = 'https://pmc-oa-opendata.s3.amazonaws.com'
inventory = json.loads((base / 'collected-article-metadata-inventory.json').read_text(encoding='utf8'))
ids = sorted({p['pmcid'] for p in inventory['papers']})
receipt_name = 'pmc-cloud-materials-collection.json'
if '--failed-fulltexts' in sys.argv:
    corpus = Path('data/sources/snapshots/amphibia-full-roster-primary-2026-10-03')
    ids = []
    for directory in corpus.iterdir():
        manifest = directory / 'manifest.json'
        if not manifest.exists() or (directory / 'article.xml').exists():
            continue
        record = json.loads(manifest.read_text(encoding='utf8'))
        if record.get('error'):
            ids.append(directory.name)
    ids.sort()
    receipt_name = 'pmc-cloud-recovery-collection.json'
if '--pmcid' in sys.argv:
    ids = [sys.argv[sys.argv.index('--pmcid') + 1]]
if '--limit' in sys.argv:
    ids = ids[:int(sys.argv[sys.argv.index('--limit') + 1])]

def fetch(url):
    failure = None
    for attempt in range(3):
        try:
            with urlopen(Request(url, headers={'User-Agent': 'Evo source collection'}), timeout=40) as response:
                return response.read(), dict(response.headers), response.geturl()
        except Exception as error:
            failure = error
            time.sleep((attempt + 1) * .5)
    raise failure

def capture(url, file):
    reused = file.exists()
    if reused:
        raw = file.read_bytes()
        headers, final = {}, url
    else:
        raw, headers, final = fetch(url)
        file.parent.mkdir(parents=True, exist_ok=True)
        with file.open('xb') as output:
            output.write(raw)
    md5 = hashlib.md5(raw).hexdigest()
    expected = parse_qs(urlsplit(url).query).get('md5', [None])[0]
    if expected and expected.lower().zfill(32) != md5:
        raise ValueError(f'MD5 differs from source metadata: {file}')
    receipt_file = Path(str(file) + '.capture.json')
    previous = json.loads(receipt_file.read_text(encoding='utf8')) if receipt_file.exists() else {}
    receipt = {'url': url, 'finalUrl': final, 'file': file.as_posix(), 'byteLength': len(raw), 'sha256': hashlib.sha256(raw).hexdigest(), 'md5': md5, 'sourceExpectedMd5': expected, 'sourceMd5Matched': bool(expected), 'headers': headers or previous.get('headers', {}), 'reusedLocalSnapshot': reused, 'capturedAt': previous.get('capturedAt', time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(file.stat().st_mtime)))}
    receipt_file.write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
    return raw, receipt

def collect(pmcid):
    directory = root / pmcid
    directory.mkdir(parents=True, exist_ok=True)
    old_manifest = directory / 'manifest.json'
    if old_manifest.exists():
        prior = directory / f'prior-manifest-{time.time_ns()}.json'
        with prior.open('xb') as output:
            output.write(old_manifest.read_bytes())
    row = {'pmcid': pmcid, 'versions': [], 'scientificEvidenceRead': False, 'biologicalClaimsAssigned': False, 'redistributionRightsVerified': False, 'allAvailableVersionsRetained': True}
    try:
        url = host + '/?' + urlencode({'list-type': '2', 'prefix': pmcid + '.', 'delimiter': '/'})
        raw, row['versionListingCapture'] = capture(url, directory / 'version-listing.xml')
        listing = ET.fromstring(raw)
        if listing.findtext('{*}IsTruncated') == 'true':
            raise ValueError('Version listing truncated; continuation required')
        prefixes = [node.text for node in listing.findall('{*}CommonPrefixes/{*}Prefix')]
        row['availablePrefixes'] = prefixes
        for prefix in prefixes:
            version_name = prefix.rstrip('/')
            version_dir = directory / version_name
            version = {'prefix': prefix, 'objects': [], 'failures': []}
            row['versions'].append(version)
            try:
                metadata_url = host + '/' + prefix + version_name + '.json'
                raw, version['metadataCapture'] = capture(metadata_url, version_dir / 'source-metadata.json')
                metadata = json.loads(raw)
                if metadata.get('pmcid') != pmcid:
                    raise ValueError('Cloud metadata PMCID mismatch')
                version['sourceLicenseCode'] = metadata.get('license_code')
                version['sourceIsManuscript'] = metadata.get('is_manuscript')
                version['sourceIsRetracted'] = metadata.get('is_retracted')
                urls = []
                for key in ['xml_url', 'text_url', 'pdf_url']:
                    if metadata.get(key):
                        urls.append((key, metadata[key]))
                urls.extend(('media_urls', value) for value in (metadata.get('media_urls') or []))
                for kind, object_url in urls:
                    try:
                        declared_url = object_url
                        if isinstance(object_url, str) and object_url.startswith('s3://pmc-oa-opendata/'):
                            object_url = host + '/' + object_url[len('s3://pmc-oa-opendata/'):]
                        if not isinstance(object_url, str) or not object_url.startswith(host + '/' + prefix):
                            raise ValueError('Object URL is not within the declared PMC version prefix')
                        filename = unquote(urlsplit(object_url).path.rsplit('/', 1)[-1])
                        safe = ''.join(c if c.isalnum() or c in '._-' else '_' for c in filename)
                        key = hashlib.sha256(object_url.encode()).hexdigest()[:16]
                        _, result = capture(object_url, version_dir / 'objects' / f'{key}-{safe}')
                        version['objects'].append({'kind': kind, 'declaredSourceUrl': declared_url, 'sourceFilename': filename, **result})
                    except Exception as error:
                        version['failures'].append({'kind': kind, 'url': object_url, 'error': str(error)})
                version['complete'] = not version['failures'] and len(version['objects']) == len(urls)
            except Exception as error:
                version['error'] = str(error)
                version['complete'] = False
            (version_dir / 'manifest.json').write_text(json.dumps(version, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
        row['complete'] = bool(prefixes) and all(version['complete'] for version in row['versions'])
        if not prefixes:
            row['availabilityStatus'] = 'No version prefix in this captured cloud listing; not biological absence'
    except Exception as error:
        row['complete'] = False
        row['error'] = str(error)
    (directory / 'manifest.json').write_text(json.dumps(row, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
    return row

rows = []
def persist():
    result = {'sourceDocumentation': host + '/README.txt', 'articleMetadataInventoryAtStart': inventory['capturedArticlesProcessed'], 'requestedArticles': len(ids), 'processedArticles': len(rows), 'completeArticles': sum(r['complete'] for r in rows), 'objectsCaptured': sum(len(v['objects']) for r in rows for v in r['versions']), 'articles': rows, 'fullCollectionComplete': False, 'scientificEvidenceRead': False}
    (base / receipt_name).write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
    print(json.dumps({k: v for k, v in result.items() if k != 'articles'}), flush=True)

persist()
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    for future in concurrent.futures.as_completed([pool.submit(collect, pmcid) for pmcid in ids]):
        rows.append(future.result())
        if len(rows) % 25 == 0:
            persist()
persist()
