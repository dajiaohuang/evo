"""Export the reviewed Lycianthes Plazi treatment as a pinned candidate.

The archive is read as UTF-8 and every description row is retained.  Only the
three exact accepted COL/WFO crosswalk rows below are materialized; no fuzzy
name matching or article/media redistribution is performed.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
from pathlib import Path


ARCHIVE_SHA256 = "19af36d18abcf3f356cbb004c07efdd099e7f5fdd5c904a3b78fae53a4f057d8"
ARCHIVE_NAME = "lycianthes-5F2FFFCFFF921009FF971805DA76AF06.zip"
TREATMENT_BASE = "https://treatment.plazi.org/id/"
COL_SOURCE_DATASET = "1141"
LICENSE = "CC0 1.0"
LICENSE_URL = "https://creativecommons.org/publicdomain/zero/1.0/"

EXACT_CROSSWALK = {
    "Lycianthes coloradensis": {
        "colId": "7X2WL",
        "wfoId": "wfo-1000023513",
        "scientificName": "Lycianthes coloradensis E.Dean & H.Kang",
        "sourceScientificName": "Lycianthes coloradensis E. Dean and H. Kang",
        "sourceAuthorship": "E. Dean and H. Kang",
        "taxonID": "A31687B7FF91100DFF1F19C8D9CDA86B.taxon",
    },
    "Lycianthes fortunensis": {
        "colId": "7X2WM",
        "wfoId": "wfo-1000023514",
        "scientificName": "Lycianthes fortunensis J.Poore & E.Dean",
        "sourceScientificName": "Lycianthes fortunensis J. Poore & E. Dean",
        "sourceAuthorship": "J. Poore & E. Dean",
        "taxonID": "A31687B7FF971000FF1F1C6FDF42AC47.taxon",
    },
    "Lycianthes talamancensis": {
        "colId": "7X2WR",
        "wfoId": "wfo-1000023516",
        "scientificName": "Lycianthes talamancensis E.Dean & J.Poore",
        "sourceScientificName": "Lycianthes talamancensis E. Dean & J. Poore",
        "sourceAuthorship": "E. Dean & J. Poore",
        "taxonID": "A31687B7FF9B1005FF1F1B6BDBD0AE07.taxon",
    },
}

CANONICAL_TYPES = {
    "diagnosis": "diagnosis",
    "description": "description",
    "biology_ecology": "biology_ecology",
    "distribution": "biology_ecology",
    "materials_examined": "description",
    "etymology": "description",
    "discussion": "description",
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def rows(path: Path):
    with path.open("r", encoding="utf-8", newline="") as handle:
        yield from csv.DictReader(handle, delimiter="\t", strict=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("unpacked", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    archive = args.unpacked.parent / ARCHIVE_NAME
    actual_archive_sha = sha256(archive)
    if actual_archive_sha != ARCHIVE_SHA256:
        raise SystemExit(f"archive hash changed: {actual_archive_sha}")

    refs = {}
    for row in rows(args.unpacked / "references.txt"):
        taxon_id = row["taxonID"]
        refs[taxon_id] = {
            "referenceId": row["identifier"],
            "citation": row["full_reference"],
            "pageStart": row.get("pageStart") or None,
            "pageEnd": row.get("pageEnd") or None,
            "doi": (row.get("doi") or "10.11646/phytotaxa.471.2.2").removeprefix("https://doi.org/"),
            "referenceUrl": row.get("uri") or "https://doi.org/10.11646/phytotaxa.471.2.2",
        }

    output_rows = []
    for row_number, row in enumerate(rows(args.unpacked / "description.txt"), start=2):
        taxon_id = row["taxonID"]
        name = next((name for name, value in EXACT_CROSSWALK.items() if value["taxonID"] == taxon_id), None)
        if name is None:
            raise SystemExit(f"description row {row_number} has an unreviewed taxonID: {taxon_id}")
        source_type = row["type"]
        if source_type not in CANONICAL_TYPES:
            raise SystemExit(f"unsupported description type: {source_type}")
        crosswalk = EXACT_CROSSWALK[name]
        reference = refs.get(taxon_id)
        if reference is None:
            raise SystemExit(f"missing exact reference for {taxon_id}")
        output_rows.append({
            "colId": crosswalk["colId"],
            "wfoId": crosswalk["wfoId"],
            "scientificName": crosswalk["scientificName"],
            "sourceScientificName": crosswalk["sourceScientificName"],
            "sourceAuthorship": crosswalk["sourceAuthorship"],
            "mappingBasis": "exact accepted COL26.8 name+authorship; WFO 2026-06 crosswalk",
            "colSourceDatasetId": COL_SOURCE_DATASET,
            "sourceColUsageId": crosswalk["colId"],
            "taxonID": taxon_id,
            "type": CANONICAL_TYPES[source_type],
            "sourceType": source_type,
            "text": row["description"],
            "language": row["language"],
            "sourceLanguage": row["language"],
            "citation": row["source"],
            "referenceId": reference["referenceId"],
            "referencePageStart": reference["pageStart"],
            "referencePageEnd": reference["pageEnd"],
            "referenceDoi": reference["doi"],
            "referenceUrl": reference["referenceUrl"],
            "rowNumber": row_number,
            "archiveSha256": ARCHIVE_SHA256,
            "sourceArchive": ARCHIVE_NAME,
            "provider": "Plazi TreatmentBank",
            "license": LICENSE,
            "licenseUrl": LICENSE_URL,
            "treatmentUrl": TREATMENT_BASE + taxon_id.removesuffix(".taxon"),
            "limitations": "Article-scoped treatment text; original wording and source type retained. Linked publication media and PDFs are not redistributed.",
            "review": "LYCIANTHES-IDENTITY-20260908",
        })

    if len(output_rows) != 24 or len({row["colId"] for row in output_rows}) != 3:
        raise SystemExit(f"unexpected candidate counts: {len(output_rows)} rows")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8", newline="\n") as handle:
        for row in output_rows:
            handle.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(json.dumps({"rows": len(output_rows), "species": len({row['colId'] for row in output_rows}), "sha256": sha256(args.output)}))


if __name__ == "__main__":
    main()
