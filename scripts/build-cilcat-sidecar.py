"""Build the pinned ChecklistBank 1113 (CilCat) authority projection offline."""

import argparse
import csv
import gzip
import hashlib
import json
import tarfile
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RELEASE = "data/catalogue-of-life/releases/2026-08-20"
PACK = ROOT / RELEASE / "resource-packs/protists-chromists"
DEFAULT = ROOT / "data/sources/archives/checklistbank-1113-cilcat-2012-01-16.tar.gz"
OUT_NAME = "cilcat-000.json.gz"
UPSTREAM_NAME = "cilcat-upstream-only-000.json.gz"
DESC_NAME = "cilcat-sidecar.json"
LEDGER_NAME = "data/sources/cilcat-1113-archive-import-ledger.json"
RELATIONS_PATH = ROOT / "data/sources/cilcat-1113-source-relations-2026-09-04.json"
RAW_RELATIONS_PATH = ROOT / "data/sources/cilcat-1113-source-relations-raw-2026-09-04.json.gz"
ARCHIVE_URL = "https://api.checklistbank.org/dataset/1113/archive"
ARCHIVE_SHA = "cd0e0bad24a8b790cb404575f05b80eb26a6f913e5b770c011bcb6316fff15ed"
ARCHIVE_BYTES = 296399


def digest(value):
    return hashlib.sha256(value).hexdigest()


def clean(value):
    return " ".join((value or "").split())


def tsv(value):
    return list(csv.DictReader(StringIO(value.decode("utf-8-sig")), delimiter="\t"))


def write_gzip(path, rows):
    payload = (json.dumps(rows, ensure_ascii=False, separators=(",", ":")) + "\n").encode()
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("wb") as handle:
        with gzip.GzipFile(filename="", fileobj=handle, mode="wb", mtime=0) as archive:
            archive.write(payload)
    return payload, path.read_bytes()


def source_name(row):
    return clean(row["Genus"] + " " + row["SpeciesEpithet"])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", type=Path, default=DEFAULT)
    parser.add_argument("--output-root", type=Path, default=ROOT)
    args = parser.parse_args()
    raw = args.archive.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != ARCHIVE_SHA:
        raise SystemExit("pinned CilCat archive bytes/hash mismatch")

    with tarfile.open(args.archive, "r:*") as archive:
        members = {
            name: archive.extractfile(name).read()
            for name in (
                "AcceptedSpecies.tsv",
                "NameReferences.tsv",
                "References.tsv",
                "SourceDatabase.tsv",
            )
        }
    source = tsv(members["AcceptedSpecies.tsv"])
    name_refs = tsv(members["NameReferences.tsv"])
    references = tsv(members["References.tsv"])
    source_ids = [row["AcceptedTaxonID"] for row in source]
    reference_ids = [row["ReferenceID"] for row in references]
    if len(source_ids) != len(set(source_ids)):
        raise SystemExit("duplicate AcceptedTaxonID in AcceptedSpecies.tsv")
    if len(reference_ids) != len(set(reference_ids)):
        raise SystemExit("duplicate ReferenceID in References.tsv")
    source_by_id = {row["AcceptedTaxonID"]: row for row in source}
    relation_bytes = RELATIONS_PATH.read_bytes()
    relation_doc = json.loads(relation_bytes.decode("utf-8"))
    relations = {row["colId"]: row for row in relation_doc["records"]}
    if len(relations) != len(relation_doc["records"]):
        raise SystemExit("duplicate COL ID in frozen CilCat relations")
    raw_relation_bytes = RAW_RELATIONS_PATH.read_bytes()
    raw_relation_doc = json.loads(gzip.decompress(raw_relation_bytes).decode("utf-8"))
    raw_relations = {row["colId"]: row for row in raw_relation_doc["records"]}
    if raw_relation_doc.get("retrievedAt") != relation_doc.get("retrievedAt") or set(raw_relations) != set(relations):
        raise SystemExit("frozen CilCat raw relation inventory mismatch")
    for col_id, relation in relations.items():
        raw = raw_relations[col_id]
        relation_response = json.loads(raw["relationRaw"])
        source_response = json.loads(raw["sourceRaw"])
        if digest(raw["relationRaw"].encode("utf-8")) != raw["relationRawSha256"] or digest(raw["sourceRaw"].encode("utf-8")) != raw["sourceRawSha256"]:
            raise SystemExit("frozen CilCat raw relation hash mismatch: " + col_id)
        if relation_response.get("datasetKey") != 316115 or relation_response.get("sourceDatasetKey") != 1113 or relation_response.get("sourceEntity") != "name usage" or relation_response.get("id") != relation["relationId"] or relation_response.get("sourceId") != relation["sourceId"]:
            raise SystemExit("invalid frozen COL source relation: " + col_id)
        if source_response.get("datasetKey") != 1113 or source_response.get("id") != relation["sourceId"] or source_response.get("status") != "accepted":
            raise SystemExit("invalid frozen CilCat source response: " + col_id)
        if relation["relationSha256"] != raw["relationRawSha256"] or relation["sourceSha256"] != raw["sourceRawSha256"]:
            raise SystemExit("relation metadata/raw hash mismatch: " + col_id)
    refs_by_id = {row["ReferenceID"]: (index, row) for index, row in enumerate(references, 2)}
    refs_by_source = {}
    for index, link in enumerate(name_refs, 2):
        reference_row, reference = refs_by_id.get(link["ReferenceID"], (None, None))
        item = {
            "referenceId": link["ReferenceID"],
            "referenceType": link["ReferenceType"],
            "sourceRows": [{"member": "NameReferences.tsv", "row": index}],
            "reference": reference,
        }
        if reference_row is not None:
            item["sourceRows"].append({"member": "References.tsv", "row": reference_row})
        else:
            item["referenceMissing"] = True
        refs_by_source.setdefault(link["ID"], []).append(item)

    manifest = json.loads((PACK / "manifest.json").read_text(encoding="utf-8"))
    targets = []
    canonical_inputs = []
    for listed in manifest["files"]:
        path = ROOT / RELEASE / "resource-packs" / listed["path"]
        input_bytes = path.read_bytes()
        canonical_inputs.append({"path": path.relative_to(ROOT).as_posix(), "bytes": len(input_bytes), "sha256": digest(input_bytes)})
        with gzip.open(path, "rt", encoding="utf-8") as handle:
            for line in handle:
                if line.strip():
                    row = json.loads(line)
                    if (
                        row.get("rank") == "species"
                        and row.get("status") == "accepted"
                        and str(row.get("sourceDatasetId")) == "1113"
                    ):
                        targets.append(row)
    if len(targets) != 8505 or len({row["id"] for row in targets}) != len(targets):
        raise SystemExit("pinned COL source-1113 scope changed")

    by_name = {}
    source_row_numbers = {}
    by_display = {}
    for row_number, row in enumerate(source, 2):
        by_name.setdefault(source_name(row), []).append(row)
        source_row_numbers[row["AcceptedTaxonID"]] = row_number
        by_display.setdefault(clean(source_name(row) + " " + row["AuthorString"]), []).append(row)
    matched_source_ids = set()
    claimed_source_ids = set()
    output = []
    unresolved = []
    for col in targets:
        col_name = clean(col["scientificName"])
        col_authorship = clean(col.get("authorship"))
        bare = (
            clean(col_name[: -len(col_authorship) - 1])
            if col_authorship and col_name.endswith(" " + col_authorship)
            else col_name
        )
        candidates = by_name.get(bare, [])
        exact = [row for row in candidates if col_authorship and clean(row["AuthorString"]) == col_authorship]
        # A full display-name hit is still invalid when COL supplies a
        # conflicting non-empty authorship.  Never let the display field
        # silently override the separated authorship field.
        full = [row for row in by_display.get(col_name, []) if not col_authorship or clean(row["AuthorString"]) == col_authorship]
        if len(full) == 1:
            selected = full[0]
            basis = "Official sourceDatasetId=1113 plus exact full source display-name match."
        elif len(exact) == 1:
            selected = exact[0]
            basis = "Official sourceDatasetId=1113 plus exact name+authorship match."
        else:
            selected = None
            relation = relations.get(col["id"])
            relation_source = source_by_id.get(relation["sourceId"]) if relation else None
            if relation and relation["status"] == "accepted" and relation_source and relation_source["Sp2000NameStatus"] == "accepted name":
                selected = relation_source
                basis = "Pinned COL source relation to ChecklistBank 1113 accepted source record; archive row retained without name normalization."
            else:
                unresolved.append((col, candidates))
                claimed_source_ids.update(row["AcceptedTaxonID"] for row in candidates)
        if selected is None:
            continue
        if selected["Sp2000NameStatus"] != "accepted name":
            raise SystemExit("COL target matched a non-accepted source row: " + col["id"])
        sid = selected["AcceptedTaxonID"]
        if sid in matched_source_ids:
            raise SystemExit("multiple COL targets map to source row: " + sid)
        matched_source_ids.add(sid)
        claimed_source_ids.add(sid)
        matched = {
            "id": sid,
            "scientificName": source_name(selected),
            "authorship": selected["AuthorString"],
            "status": selected["Sp2000NameStatus"],
            "url": selected["SpeciesURL"],
        }
        relation = relations.get(col["id"])
        evidence = None
        if relation and relation["sourceId"] == sid:
            evidence = {
                "relationId": relation["relationId"],
                "relationUrl": f"https://api.checklistbank.org/dataset/316115/nameusage/{col['id']}/source",
                "sourceUrl": f"https://api.checklistbank.org/dataset/1113/nameusage/{sid}",
                "retrievedAt": relation_doc["retrievedAt"],
                "relationResponseSha256": relation["relationSha256"],
                "sourceResponseSha256": relation["sourceSha256"],
                "sourceStatus": relation["status"],
            }
        output.append(
            {
                "colId": col["id"],
                "colScientificName": col["scientificName"],
                "colAuthorship": col.get("authorship"),
                "status": "accepted",
                "matchedName": matched,
                "acceptedName": matched,
                "candidates": [],
                "mappingBasis": basis,
                "sourceRows": [{"member": "AcceptedSpecies.tsv", "row": source_row_numbers[selected["AcceptedTaxonID"]]}],
                "sourceAcceptedTaxonId": sid,
                "sourceUrl": selected["SpeciesURL"],
                "sourceClassification": {key: selected[key] for key in ("Kingdom", "Phylum", "Class", "Order")},
                "nameReferences": refs_by_source.get(sid, []),
                **({"sourceRelation": evidence} if evidence else {}),
            }
        )

    for col, candidates in unresolved:
        output.append(
            {
                "colId": col["id"],
                "colScientificName": col["scientificName"],
                "colAuthorship": col.get("authorship"),
                "status": "ambiguous" if len(candidates) > 1 else "unmatched",
                "matchedName": None,
                "acceptedName": None,
                "candidates": [
                    {"id": row["AcceptedTaxonID"], "scientificName": source_name(row), "authorship": row["AuthorString"], "status": row["Sp2000NameStatus"]}
                    for row in candidates
                ],
                "mappingBasis": "Exact name+authorship did not resolve to one source record; no fallback on name-only or source uniqueness.",
                "sourceRows": [{"member": "AcceptedSpecies.tsv", "row": source_row_numbers[row["AcceptedTaxonID"]]} for row in candidates],
                "sourceAcceptedTaxonId": None,
                "sourceUrl": None,
                "sourceClassification": None,
                "nameReferences": [],
            }
        )

    source_only = [
        row for row in source
        if row["Sp2000NameStatus"] == "accepted name" and row["AcceptedTaxonID"] not in matched_source_ids
    ]
    upstream = []
    for row in source_only:
        upstream.append(
            {
                "colId": None,
                "status": "upstream-only",
                "matchedName": {
                    "id": row["AcceptedTaxonID"],
                    "scientificName": source_name(row),
                    "authorship": row["AuthorString"],
                    "status": row["Sp2000NameStatus"],
                    "url": row["SpeciesURL"],
                },
                "acceptedName": None,
                "candidates": [],
                "mappingBasis": "Accepted source row has no strict COL source-1113 owner match; retained separately.",
                "sourceRows": [{"member": "AcceptedSpecies.tsv", "row": source_row_numbers[row["AcceptedTaxonID"]]}],
                "sourceAcceptedTaxonId": row["AcceptedTaxonID"],
                "sourceUrl": row["SpeciesURL"],
                "sourceClassification": {key: row[key] for key in ("Kingdom", "Phylum", "Class", "Order")},
                "nameReferences": refs_by_source.get(row["AcceptedTaxonID"], []),
            }
        )
    output.sort(key=lambda row: row["colId"])
    upstream.sort(key=lambda row: row["sourceAcceptedTaxonId"])
    out_path = args.output_root / RELEASE / "resource-packs/protists-chromists" / OUT_NAME
    upstream_path = args.output_root / RELEASE / "resource-packs/protists-chromists" / UPSTREAM_NAME
    payload, out_bytes = write_gzip(out_path, output)
    upstream_payload, upstream_bytes = write_gzip(upstream_path, upstream)
    files = [
        {"path": "protists-chromists/" + OUT_NAME, "records": len(output), "bytes": len(out_bytes), "sha256": digest(out_bytes), "sourceBytes": len(payload), "sourceSha256": digest(payload), "minColId": output[0]["colId"], "maxColId": output[-1]["colId"], "encoding": "gzip", "mediaType": "application/json", "role": "col-partition"},
    ]
    upstream_files = [
        {"path": "protists-chromists/" + UPSTREAM_NAME, "records": len(upstream), "bytes": len(upstream_bytes), "sha256": digest(upstream_bytes), "sourceBytes": len(upstream_payload), "sourceSha256": digest(upstream_payload), "minColId": None, "maxColId": None, "encoding": "gzip", "mediaType": "application/json", "role": "upstream-only"},
    ]
    descriptor = {
        "schemaVersion": 1,
        "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "cilcat-1113-archive-crosswalk",
        "packageId": "protists-chromists",
        "provider": "The World Ciliate Catalog via ChecklistBank",
        "rowEncoding": "json",
        "colIdField": "colId",
        "totalCountField": "total",
        "source": {"datasetId": "1113", "title": "The World Ciliate Catalog", "version": "4.0, Jan 2012", "versionDoi": "10.48580/d3cf.v11", "license": "CC-BY-4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0/", "archiveUrl": ARCHIVE_URL, "archiveBytes": ARCHIVE_BYTES, "archiveSha256": ARCHIVE_SHA, "archiveEncoding": "gzip-compressed tar (HTTP Content-Type application/zip)", "retrievedAt": "2026-09-04", "members": {key: {"bytes": len(value), "sha256": digest(value)} for key, value in members.items()}, "relationEvidencePath": "data/sources/cilcat-1113-source-relations-2026-09-04.json", "relationEvidenceBytes": len(relation_bytes), "relationEvidenceSha256": digest(relation_bytes), "relationRawEvidencePath": "data/sources/cilcat-1113-source-relations-raw-2026-09-04.json.gz", "relationRawEvidenceBytes": len(raw_relation_bytes), "relationRawEvidenceSha256": digest(raw_relation_bytes), "relationCount": len(relations)},
        "scope": {"colSourceDatasetId": "1113", "colPackageId": "protists-chromists", "eligibleColSpecies": len(output), "projectedSpecies": len(output), "sourceAcceptedSpecies": sum(row["Sp2000NameStatus"] == "accepted name" for row in source), "sourceProvisionalSpecies": sum(row["Sp2000NameStatus"] == "provisionally accepted name" for row in source), "sourceOnlyAccepted": len(upstream), "excludedSourceProvisional": sum(row["Sp2000NameStatus"] == "provisionally accepted name" for row in source), "matchingKey": "Strict full display-name or separated name+authorship matching for 8,477 rows; 28 additional accepted outcomes use frozen COL source relations keyed to exact AcceptedTaxonID; no name-only fallback"},
        "matching": {"normalization": "UTF-8 quoted TSV; Unicode whitespace collapse only; case, diacritics, punctuation and empty fields preserved.", "prohibited": "No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching."},
        "counts": {"total": len(output), "accepted": sum(row["status"] == "accepted" for row in output), "redirect": 0, "ambiguous": sum(row["status"] == "ambiguous" for row in output), "unmatched": sum(row["status"] == "unmatched" for row in output), "withheld": 0, "upstreamOnly": len(upstream), "records": len(output) + len(upstream)},
        "files": files,
        "upstreamOnlyFiles": upstream_files,
        "evidenceBoundary": {"en": "Frozen CilCat source provenance, not independent scientific corroboration, species-concept equivalence, biological dossier, fossil evidence or expert review.", "zh": "冻结的 CilCat 来源追溯，不是独立科学佐证、物种概念等同、生物档案、化石证据或专家审查。"},
        "limitations": ["The 8,505 COL source-1113 species comprise 8,477 strict name+authorship matches and 28 accepted rows resolved only by their frozen official COL source relation; 27 additional accepted archive rows remain in a separate upstream-only partition and 81 provisional rows are excluded.", "The archive's nomenclatural/taxonomic references support source name provenance only; they do not constitute biological dossiers.", "34 TaxAccRef links point to ReferenceID 95, which is absent from References.tsv; those links retain their NameReferences locator and explicit referenceMissing=true."],
        "totalCompressedBytes": len(out_bytes) + len(upstream_bytes),
        "totalSourceBytes": len(payload) + len(upstream_payload),
        "deliveryProfiles": {"web-light": {"payload": "summary-only", "files": [], "records": 0, "totalCompressedBytes": 0, "totalSourceBytes": 0}, "native-full": {"payload": "complete", "files": [files[0]["path"], upstream_files[0]["path"]], "records": len(output) + len(upstream), "totalCompressedBytes": len(out_bytes) + len(upstream_bytes), "totalSourceBytes": len(payload) + len(upstream_payload)}},
    }
    descriptor_path = args.output_root / RELEASE / "resource-packs/protists-chromists" / DESC_NAME
    descriptor_bytes = (json.dumps(descriptor, ensure_ascii=False, indent=2) + "\n").encode()
    descriptor_path.write_bytes(descriptor_bytes)
    ledger = {"schemaVersion": 1, "importType": "COL26.8-to-ChecklistBank-1113-CilCat-source-archive", "source": descriptor["source"], "inputs": canonical_inputs, "scopeAudit": descriptor["scope"], "output": {"paths": [out_path.relative_to(args.output_root).as_posix(), upstream_path.relative_to(args.output_root).as_posix()], "bytes": len(out_bytes) + len(upstream_bytes), "sha256": digest(out_bytes + upstream_bytes)}, "descriptor": {"path": descriptor_path.relative_to(args.output_root).as_posix(), "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)}}
    ledger_path = args.output_root / LEDGER_NAME
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes((json.dumps(ledger, ensure_ascii=False, indent=2) + "\n").encode())
    print(json.dumps({"accepted": descriptor["counts"]["accepted"], "unmatched": descriptor["counts"]["unmatched"], "sourceOnlyAccepted": len(upstream), "excludedProvisional": descriptor["scope"]["excludedSourceProvisional"], "bytes": len(out_bytes) + len(upstream_bytes)}))


if __name__ == "__main__":
    main()
