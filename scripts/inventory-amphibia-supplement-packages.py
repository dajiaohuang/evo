import hashlib
import json
from pathlib import Path
import zipfile

root = Path('data/sources/snapshots/amphibia-supplement-packages-2026-10-03')
packages, failures = [], []
for directory in sorted(root.iterdir()):
    file = directory / 'supplementary.zip'
    if not file.exists():
        continue
    try:
        members = []
        with zipfile.ZipFile(file) as archive:
            for item in archive.infolist():
                members.append({'filename': item.filename, 'uncompressedBytes': item.file_size, 'compressedBytes': item.compress_size, 'crc32': f'{item.CRC:08x}', 'directory': item.is_dir(), 'contentRead': False})
        metadata = json.loads(Path(f'data/sources/snapshots/amphibia-full-roster-primary-2026-10-03/{directory.name}/bibliographic-metadata.json').read_text(encoding='utf8'))
        declared = sorted(set(link['href'] for supplement in metadata['supplements'] for link in supplement['links']))
        names = {member['filename'].rsplit('/', 1)[-1] for member in members}
        matches = [{'xmlHref': name, 'filenameMatch': name.rsplit('/', 1)[-1] in names, 'contentIdentityVerified': False} for name in declared]
        record = {'pmcid': directory.name, 'file': file.as_posix(), 'sha256': hashlib.sha256(file.read_bytes()).hexdigest(), 'members': members, 'declaredXmlLinks': matches, 'scientificEvidenceRead': False, 'itemRightsVerified': False, 'packageNameMatchIsNotContentAuthentication': True}
        (directory / 'member-inventory.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
        packages.append({'pmcid': directory.name, 'inventory': (directory / 'member-inventory.json').as_posix(), 'members': len(members), 'declaredLinks': len(matches), 'filenameMatchedLinks': sum(row['filenameMatch'] for row in matches)})
    except Exception as error:
        failures.append({'path': file.as_posix(), 'error': str(error)})
result = {'packages': packages, 'failures': failures, 'packageCount': len(packages), 'members': sum(row['members'] for row in packages), 'declaredLinks': sum(row['declaredLinks'] for row in packages), 'filenameMatchedLinks': sum(row['filenameMatchedLinks'] for row in packages), 'collectionComplete': False, 'scientificEvidenceRead': False}
Path('docs/amphibia-content/supplement-package-inventory.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({key: value for key, value in result.items() if key not in ['packages', 'failures']} | {'failures': len(failures)}))
