"""Check bytes in the final APK, after Android's asset merge and packaging."""
import hashlib
import json
import sys
import zipfile


def verify(apk_path):
    with zipfile.ZipFile(apk_path) as apk:
        current = json.loads(apk.read('assets/public/data/current.json'))
        if current['deliveryProfile'] != 'native-full':
            raise ValueError('APK does not contain native-full data')
        index = json.loads(apk.read('assets/public/data/' + current['releaseBase'] + 'release-files.json'))
        if index['datasetVersion'] != current['datasetVersion']:
            raise ValueError('APK contains mixed dataset versions')
        records = [('assets/public/data/' + f['url'], f) for f in index['files'] if '/downloads/' not in f['url']]
        sql = json.loads(apk.read('assets/public/native-runtime-manifest.json'))['sql']
        if sql['variant'] != 'mvp' or len(sql['files']) != 4:
            raise ValueError('Missing offline SQL runtime contract')
        records += [('assets/public/' + f['path'], f) for f in sql['files']]
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
        print(f"APK verified: {len(records)} scientific and runtime files; {current['datasetVersion']}; offline DuckDB {sql['version']}")


if __name__ == '__main__':
    verify(sys.argv[1])
