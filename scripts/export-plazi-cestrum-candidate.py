"""Export the reviewed Cestrum Plazi treatment as a pinned candidate.

The archive is retained locally and the candidate is intentionally limited to
the eight article names whose COL 26.8 usage is independently verified.  Two
article names are exact COL synonyms; their descriptions are delivered under
the explicit accepted usage while retaining the source usage and redirect.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
from pathlib import Path


ARCHIVE_SHA256 = "0953e88f539f8b31a25f4cb32bcb46dc82af3ba522a6974fa875309ad88b1214"
ARCHIVE_NAME = "cestrum-FFF3FFEA6333AC3FFFF60A671A6CFFE7.zip"
TREATMENT_BASE = "https://treatment.plazi.org/id/"
COL_SOURCE_DATASET = "1141"
LICENSE = "CC0 1.0"
LICENSE_URL = "https://creativecommons.org/publicdomain/zero/1.0/"
ARTICLE_DOI = "10.3897/phytokeys.8.2238"
ARTICLE_URL = f"https://doi.org/{ARTICLE_DOI}"

# IDs are release-pinned from the COL 26.8 World Plants dataset.  The two
# synonym rows deliberately point at their accepted usage; no fuzzy matching
# is performed by this exporter.
EXACT_CROSSWALK = {
    "7C96DE519D935D19BDC0BEFA5CE7656E.taxon": {
        "sourceScientificName": "Cestrum amistadense A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "298203cf-9f1f-5a31-8cd3-c69182216d33",
        "colId": "298203cf-9f1f-5a31-8cd3-c69182216d33",
        "scientificName": "Cestrum amistadense A.K.Monro",
        "wfoId": "wfo-0001020305",
        "sourceStatus": "accepted",
    },
    "46E931F39C6F566EB90D18BF384E5484.taxon": {
        "sourceScientificName": "Cestrum contrerasianum A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "75b17e82-a871-5ab7-a610-93dd791183b2",
        "colId": "75b17e82-a871-5ab7-a610-93dd791183b2",
        "scientificName": "Cestrum contrerasianum A.K.Monro",
        "wfoId": "wfo-0001020416",
        "sourceStatus": "accepted",
    },
    "B8A4AE46EF0756EC8594A329C1C79ABA.taxon": {
        "sourceScientificName": "Cestrum darienense A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "23f91f4a-5716-5265-9b23-46152031b6de",
        "colId": "23f91f4a-5716-5265-9b23-46152031b6de",
        "scientificName": "Cestrum darienense A.K.Monro",
        "wfoId": "wfo-0001020442",
        "sourceStatus": "accepted",
    },
    "DEF3ABC759415A4A9234E11063C4C3E2.taxon": {
        "sourceScientificName": "Cestrum gilliae A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "0d16fe64-e8a6-513f-ad3c-8834d6e4ecf8",
        "colId": "0d16fe64-e8a6-513f-ad3c-8834d6e4ecf8",
        "scientificName": "Cestrum gilliae A.K.Monro",
        "wfoId": "wfo-0001020532",
        "sourceStatus": "accepted",
    },
    "9A1773F39FAD5E57AF2BB596A2B38D04.taxon": {
        "sourceScientificName": "Cestrum haberii A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "acf80a10-0520-58f3-8d7e-c0d320e8596b",
        "colId": "0b959879-6895-5d6f-8bf3-c1f4bddfeef5",
        "scientificName": "Cestrum rugulosum Francey",
        "wfoId": "wfo-0001020858",
        "sourceStatus": "synonym",
        "acceptedRedirectId": "0b959879-6895-5d6f-8bf3-c1f4bddfeef5",
        "acceptedRedirectName": "Cestrum rugulosum Francey",
    },
    "E194ED1914195FB2B32300103767305B.taxon": {
        "sourceScientificName": "Cestrum knappiae A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "d0708292-b7e2-56cf-ae09-2d7abfd12010",
        "colId": "d0708292-b7e2-56cf-ae09-2d7abfd12010",
        "scientificName": "Cestrum knappiae A.K.Monro",
        "wfoId": "wfo-0001020600",
        "sourceStatus": "accepted",
    },
    "689D962C8E7751BAB06D4DECF4567B88.taxon": {
        "sourceScientificName": "Cestrum lentii A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "243d9536-a3c5-5c75-9fbe-c19c2d569407",
        "colId": "243d9536-a3c5-5c75-9fbe-c19c2d569407",
        "scientificName": "Cestrum lentii A.K.Monro",
        "wfoId": "wfo-0001020647",
        "sourceStatus": "accepted",
    },
    "F0965AC57711585786F29B6BB03E5158.taxon": {
        "sourceScientificName": "Cestrum talamancaense A. K. Monro",
        "sourceAuthorship": "A. K. Monro",
        "sourceColUsageId": "e587d515-073a-5baa-b61e-5d28e62f08c0",
        "colId": "4f7e9de7-3d31-5d71-b0c6-cfd7584d123e",
        "scientificName": "Cestrum irazuense Kuntze",
        "wfoId": "wfo-0001020589",
        "sourceStatus": "synonym",
        "acceptedRedirectId": "4f7e9de7-3d31-5d71-b0c6-cfd7584d123e",
        "acceptedRedirectName": "Cestrum irazuense Kuntze",
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
        refs[row["taxonID"]] = {
            "referenceId": row["identifier"],
            "citation": row["full_reference"],
            "pageStart": row.get("pageStart") or None,
            "pageEnd": row.get("pageEnd") or None,
            "doi": ARTICLE_DOI,
            "referenceUrl": ARTICLE_URL,
        }

    output_rows = []
    for row_number, row in enumerate(rows(args.unpacked / "description.txt"), start=2):
        crosswalk = EXACT_CROSSWALK.get(row["taxonID"])
        if crosswalk is None:
            raise SystemExit(f"description row {row_number} has an unreviewed taxonID: {row['taxonID']}")
        source_type = row["type"]
        if source_type not in CANONICAL_TYPES:
            raise SystemExit(f"unsupported description type: {source_type}")
        reference = refs.get(row["taxonID"])
        if reference is None:
            raise SystemExit(f"missing exact reference for {row['taxonID']}")
        output_rows.append({
            "colId": crosswalk["colId"],
            "wfoId": crosswalk["wfoId"],
            "scientificName": crosswalk["scientificName"],
            "sourceScientificName": crosswalk["sourceScientificName"],
            "sourceAuthorship": crosswalk["sourceAuthorship"],
            "sourceColUsageId": crosswalk["sourceColUsageId"],
            "sourceStatus": crosswalk["sourceStatus"],
            "acceptedRedirectId": crosswalk.get("acceptedRedirectId"),
            "acceptedRedirectName": crosswalk.get("acceptedRedirectName"),
            "mappingBasis": "exact COL26.8 World Plants name usage; explicit synonym redirect where source status is synonym",
            "colSourceDatasetId": COL_SOURCE_DATASET,
            "taxonID": row["taxonID"],
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
            "treatmentUrl": TREATMENT_BASE + row["taxonID"].removesuffix(".taxon"),
            "limitations": "Article-scoped treatment text; original wording and source type retained. Linked publication media and PDFs are not redistributed.",
            "review": "CESTRUM-IDENTITY-20260908",
        })

    if len(output_rows) != 40 or len({row["colId"] for row in output_rows}) != 8:
        raise SystemExit(f"unexpected candidate counts: {len(output_rows)} rows/{len({row['colId'] for row in output_rows})} species")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8", newline="\n") as handle:
        for row in output_rows:
            handle.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(json.dumps({"rows": len(output_rows), "species": len({row['colId'] for row in output_rows}), "sha256": sha256(args.output)}))


if __name__ == "__main__":
    main()
