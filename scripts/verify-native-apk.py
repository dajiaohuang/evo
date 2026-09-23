"""Check bytes in the final APK, after Android's asset merge and packaging."""
import hashlib
import json
import sys
import zipfile


def verify(apk_path):
    with zipfile.ZipFile(apk_path) as apk:
        current = json.loads(apk.read('assets/public/data/current.json'))
        if current['edition'] != 'native-core' or current['deliveryProfile'] != 'web-light':
            raise ValueError('APK does not contain the selected native-core profile')
        if current.get('previewScope', {}).get('catalogue') != 'omitted':
            raise ValueError('APK includes the full Catalogue of Life registry')
        index = json.loads(apk.read('assets/public/data/' + current['releaseBase'] + 'release-files.json'))
        if index['datasetVersion'] != current['datasetVersion']:
            raise ValueError('APK contains mixed dataset versions')
        records = [('assets/public/data/' + f['url'], f) for f in index['files'] if '/downloads/' not in f['url']]
        if len(records) != len(index['files']):
            raise ValueError('APK release inventory includes package download archives')
        if any('/catalogue/hierarchy/' in f['url'] or '/catalogue/search/' in f['url']
               or '/catalogue/source-checklists/' in f['url'] or '/catalogue/resource-packs/' in f['url']
               for f in index['files']):
            raise ValueError('APK includes full nomenclature or authority source rows')
        if any(name.startswith('assets/public/sql/') for name in apk.namelist()):
            raise ValueError('APK includes the full-data SQL research runtime')
        for path, record in records:
            digest = hashlib.sha256()
            size = 0
            with apk.open(path) as stream:
                for block in iter(lambda: stream.read(1024 * 1024), b''):
                    size += len(block)
                    digest.update(block)
            if size != record['bytes'] or digest.hexdigest() != record['sha256']:
                raise ValueError('APK bytes differ from source inventory: ' + path)
        config = json.loads(apk.read('assets/capacitor.config.json'))
        if config.get('server', {}).get('url'):
            raise ValueError('APK loads a remote application shell')
        if config['appId'] != 'io.github.dajiaohuang.evoatlas':
            raise ValueError('Wrong application identity')
        print(f"APK verified: {len(records)} core files; {current['datasetVersion']}; full scientific datasets excluded")


if __name__ == '__main__':
    verify(sys.argv[1])
