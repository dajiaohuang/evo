"""Export exact, rights-screened MBG Flora DwC-A descriptions.

The archive is retained outside Git.  This exporter pins its archive and WFO/COL
crosswalk hashes, uses only exact accepted WFO identities, and preserves every
description/reference field needed to audit citation joins.
"""
import argparse
import csv
import hashlib
import io
import json
import re
import zipfile
from pathlib import Path

import brotli


ROOT = Path(__file__).resolve().parent.parent
CROSSWALK = ROOT / "data/sources/wfo-plant-crosswalk-col26.8.json.br"
UUID_RE = re.compile(r"[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}")


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def rows(zf, name):
    # The DwC-A metadata declares UTF-8, CRLF, and tab-separated records.
    with zf.open(name) as raw:
        return list(csv.reader(io.TextIOWrapper(raw, encoding="utf-8", newline=""), delimiter="\t", quotechar='"'))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("archive", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--source-name", required=True)
    parser.add_argument("--source-url", required=True)
    args = parser.parse_args()

    archive_bytes = args.archive.read_bytes()
    archive_hash = sha256(archive_bytes)
    crosswalk_bytes = CROSSWALK.read_bytes()
    crosswalk = json.loads(brotli.decompress(crosswalk_bytes))
    crosswalk_decoded_hash = sha256(brotli.decompress(crosswalk_bytes))
    accepted = {}
    for row in crosswalk["colRecords"]:
        if row.get("status") != "accepted" or not row.get("wfoId"):
            continue
        accepted.setdefault(row["wfoId"], []).append(row)

    with zipfile.ZipFile(io.BytesIO(archive_bytes)) as zf:
        meta = zf.read("meta.xml").decode("utf-8")
        description_rows = rows(zf, "description.txt")
        reference_rows = rows(zf, "reference.txt")

    references = {}
    for physical_row, row in enumerate(reference_rows, start=1):
        if len(row) < 19:
            raise ValueError(f"reference row {physical_row} has {len(row)} fields")
        wfo_id, identifier = row[0], row[1]
        if identifier:
            references[(wfo_id, identifier)] = {
                "rowNumber": physical_row,
                "identifier": identifier,
                "citation": row[2],
                "title": row[3],
                "creator": row[4],
                "date": row[5],
                "source": row[6],
                "description": row[7],
                "subject": row[8],
                "language": row[9],
                "rights": row[10],
                "taxonRemarks": row[11],
                "type": row[12],
                "relation": row[13],
                "created": row[14],
                "modified": row[15],
                "license": row[16],
                "rightsHolder": row[17],
                "accessRights": row[18],
            }

    records = {}
    counts = {"descriptions": 0, "matched": 0, "withMissingCitation": 0, "types": {}, "languages": {}}
    for physical_row, row in enumerate(description_rows, start=1):
        if len(row) < 12:
            raise ValueError(f"description row {physical_row} has {len(row)} fields")
        wfo_id, source_text, description_type, source, language = row[:5]
        matches = accepted.get(wfo_id, [])
        if len(matches) != 1:
            # Unmatched, ambiguous, synonym, and non-accepted archive rows stay
            # in the retained archive and are never silently assigned.
            continue
        col = matches[0]
        source_ids = UUID_RE.findall(source or "")
        found_refs = [references[(wfo_id, source_id)] for source_id in source_ids if (wfo_id, source_id) in references]
        missing_ids = [source_id for source_id in source_ids if (wfo_id, source_id) not in references]
        citation_scope = "description-source" if source_ids else "dataset"
        if missing_ids:
            citation_scope = "description-source-partial"
            counts["withMissingCitation"] += 1
        description = {
            "type": description_type or "general",
            "language": language or "und",
            "rowNumber": physical_row,
            "sourceId": source_ids[0] if len(source_ids) == 1 else None,
            "sourceIds": source_ids,
            "sourceText": source_text,
            "citations": [ref["citation"] for ref in found_refs],
            "references": found_refs,
            "referenceRowNumbers": [ref["rowNumber"] for ref in found_refs],
            "citationMissingInSource": bool(missing_ids),
            "missingSourceIds": missing_ids,
            "citationScope": citation_scope,
            "datasetCitation": args.source_name,
            "rightsHolder": row[10] or "Missouri Botanical Garden",
            "rights": row[11] or "Missouri Botanical Garden",
            "license": row[9] or "http://creativecommons.org/licenses/by/4.0",
            "sourceExcerpt": True,
        }
        record = records.setdefault(col["colId"], {
            "colId": col["colId"], "wfoId": wfo_id,
            "scientificName": col["colScientificName"], "descriptions": []})
        record["descriptions"].append(description)
        counts["descriptions"] += 1
        counts["matched"] += 1
        counts["types"][description["type"]] = counts["types"].get(description["type"], 0) + 1
        counts["languages"][description["language"]] = counts["languages"].get(description["language"], 0) + 1

    output_bytes = b"".join((json.dumps(records[key], ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8") for key in sorted(records))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_bytes(output_bytes)
    summary = {
        "sourceName": args.source_name, "sourceUrl": args.source_url,
        "archiveSha256": archive_hash, "archiveBytes": len(archive_bytes),
        "crosswalkDecodedSha256": crosswalk_decoded_hash,
        "metadataSha256": sha256(meta.encode()), "outputSha256": sha256(output_bytes),
        "outputBytes": len(output_bytes), "species": len(records), **counts,
    }
    summary_path = args.output.with_suffix(args.output.suffix + ".summary.json")
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    main()
