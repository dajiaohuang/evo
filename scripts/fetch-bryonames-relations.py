#!/usr/bin/env python3
"""Freeze ChecklistBank source-record relations for the COL26.8 Bryonames slice.

The builder consumes this byte-pinned relation evidence offline.  This fetcher is
the only network step: it requests the exact COL source relation for each of the
698 accepted COL species whose sourceDatasetId is Bryonames (170394), preserves
the response JSON and records the request URL and response digest.
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import gzip
import hashlib
import json
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPECIES = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-plants/species-000.jsonl.gz"
DEFAULT_OUTPUT = ROOT / "data/sources/bryonames-col26.8-source-relations-2026-09-08.jsonl"
API_TEMPLATE = "https://api.checklistbank.org/dataset/316115/nameusage/{col_id}/source"
DATASET_KEY = "170394"


def digest(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def load_species() -> list[dict]:
    with gzip.open(SPECIES, "rt", encoding="utf-8", newline="") as handle:
        rows = [json.loads(line) for line in handle if line.strip()]
    selected = [row for row in rows if row.get("rank") == "species" and row.get("status") == "accepted" and row.get("sourceDatasetId") == DATASET_KEY]
    if len(selected) != 698 or len({row["id"] for row in selected}) != len(selected):
        raise SystemExit(f"unexpected Bryonames COL slice: {len(selected)}")
    return sorted(selected, key=lambda row: row["id"])


def fetch(row: dict) -> dict:
    url = API_TEMPLATE.format(col_id=row["id"])
    request = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "Evo-Atlas-source-audit/1.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        body = response.read()
        if response.status != 200:
            raise SystemExit(f"{url}: HTTP {response.status}")
    text = body.decode("utf-8")
    payload = json.loads(text)
    if payload.get("datasetKey") != 316115 or payload.get("sourceDatasetKey") != int(DATASET_KEY) or str(payload.get("sourceId", "")).strip() == "":
        raise SystemExit(f"{url}: unexpected source relation {payload}")
    return {
        "col": row,
        "requestUrl": url,
        "retrievedAt": "2026-09-08",
        "responseSha256": digest(body),
        "responseBytes": len(body),
        "responseText": text,
        "response": payload,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--pause-ms", type=int, default=75)
    args = parser.parse_args()
    species = load_species()
    rows = [None] * len(species)
    with ThreadPoolExecutor(max_workers=12) as pool:
        futures = {pool.submit(fetch, col): index for index, col in enumerate(species)}
        for completed, future in enumerate(as_completed(futures), start=1):
            rows[futures[future]] = future.result()
            if completed % 100 == 0:
                print(f"fetched {completed}/{len(species)}", flush=True)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    raw = "".join(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n" for row in rows).encode("utf-8")
    args.output.write_bytes(raw)
    print(json.dumps({"path": str(args.output), "rows": len(rows), "bytes": len(raw), "sha256": digest(raw)}, indent=2))


if __name__ == "__main__":
    main()
