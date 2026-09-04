"""Freeze the small set of official COL/CilCat relation responses."""

import argparse
import gzip
import hashlib
import json
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--col-ids", nargs="+", required=True)
    args = parser.parse_args()
    def fetch(col_id):
        relation_url = f"https://api.checklistbank.org/dataset/316115/nameusage/{col_id}/source"
        relation_raw = urllib.request.urlopen(relation_url).read()
        relation = json.loads(relation_raw)
        source_id = relation["sourceId"]
        source_url = f"https://api.checklistbank.org/dataset/1113/nameusage/{source_id}"
        source_raw = urllib.request.urlopen(source_url).read()
        return (
            args.col_ids.index(col_id),
            {
                "colId": col_id,
                "relationUrl": relation_url,
                "relationRawSha256": hashlib.sha256(relation_raw).hexdigest(),
                "relationRaw": relation_raw.decode("utf-8"),
                "sourceUrl": source_url,
                "sourceRawSha256": hashlib.sha256(source_raw).hexdigest(),
                "sourceRaw": source_raw.decode("utf-8"),
            },
        )
    with ThreadPoolExecutor(max_workers=8) as pool:
        records = [item for _, item in sorted(pool.map(fetch, args.col_ids))]
    payload = (json.dumps({"retrievedAt": "2026-09-04", "records": records}, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("wb") as handle:
        with gzip.GzipFile(filename="", fileobj=handle, mode="wb", mtime=0) as archive:
            archive.write(payload)


if __name__ == "__main__":
    main()
