"""Build the pinned ChecklistBank 1177 Gymnodinium projection offline."""

import argparse
import csv
import gzip
import hashlib
import json
import tarfile
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACK = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists"
DEFAULT = ROOT / "data/sources/archives/checklistbank-1177-gymnodinium-2026-09-04.tar.gz"
DESC = PACK / "gymnodinium-sidecar.json"
OUT = PACK / "gymnodinium-sidecar-000.json.gz"
UPSTREAM = PACK / "gymnodinium-sidecar-upstream-only-000.json.gz"
LEDGER = ROOT / "data/sources/gymnodinium-archive-import-ledger.json"
URL = "https://api.checklistbank.org/dataset/1177/archive"
SHA = "7bfcccdfd515b7e5024718bb8c407e5521f727b166fe5a191006658715dbd8d7"
ARCHIVE_BYTES = 19661
COL_ROOT = "4RTJ"
SOURCE_DATASET = "1177"


def digest(value):
    return hashlib.sha256(value).hexdigest()


def clean(value):
    return " ".join((value or "").split())


def tsv(value):
    return list(csv.DictReader(StringIO(value.decode("utf-8-sig")), delimiter="\t"))


def exact_key(genus, epithet, authorship):
    return clean(f"{genus} {epithet}") + "|" + clean(authorship)


def col_bare(record):
    scientific = clean(record["scientificName"])
    authorship = clean(record.get("authorship"))
    suffix = f" {authorship}" if authorship else ""
    return scientific[: -len(suffix)] if suffix and scientific.endswith(suffix) else scientific


def json_bytes(value):
    return (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode("utf-8")


def jsonl_bytes(records):
    return ("\n".join(json.dumps(record, ensure_ascii=False, separators=(",", ":")) for record in records) + "\n").encode("utf-8")


def write_gzip(path, payload):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("wb") as handle:
        with gzip.GzipFile(filename="", fileobj=handle, mode="wb", mtime=0) as stream:
            stream.write(payload)


def file_entry(path, records, payload, source_payload, root):
    return {
        "path": path.relative_to(root).as_posix(),
        "records": len(records),
        "bytes": len(payload),
        "sha256": digest(payload),
        "sourceBytes": len(source_payload),
        "sourceSha256": digest(source_payload),
        "minColId": records[0]["colId"] if records and records[0]["colId"] else None,
        "maxColId": records[-1]["colId"] if records and records[0]["colId"] else None,
        "encoding": "gzip",
        "mediaType": "application/json",
        "role": "col-partition",
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", default=str(DEFAULT))
    parser.add_argument("--output-root", type=Path, default=ROOT)
    args = parser.parse_args()
    input_root = ROOT
    root = args.output_root.resolve()
    archive = Path(args.archive).resolve()
    raw = archive.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != SHA:
        raise SystemExit("pinned Gymnodinium archive bytes/hash mismatch")

    with tarfile.open(archive, "r:gz") as tar:
        names = ["AcceptedSpecies.tsv", "NameReferences.tsv", "References.tsv", "SourceDatabase.tsv"]
        members = {name: tar.extractfile(name).read() for name in names}
    source_rows = tsv(members["AcceptedSpecies.tsv"])
    name_refs = tsv(members["NameReferences.tsv"])
    references = tsv(members["References.tsv"])
    source_database = tsv(members["SourceDatabase.tsv"])
    if len(source_rows) != 259 or len({row["AcceptedTaxonID"] for row in source_rows}) != 259:
        raise SystemExit("Gymnodinium source accepted-species boundary changed")
    if len(references) != 99 or len(name_refs) != 309:
        raise SystemExit("Gymnodinium source bibliography boundary changed")
    by_ref = {row["ReferenceID"]: (index, row) for index, row in enumerate(references, 2)}
    if len(by_ref) != len(references):
        raise SystemExit("duplicate Gymnodinium bibliography reference ID")
    refs_by_taxon = {}
    for index, row in enumerate(name_refs, 2):
        if row["ReferenceType"] != "TaxAccRef":
            raise SystemExit("invalid Gymnodinium NameReferences row")
        reference_index, reference = by_ref.get(row["ReferenceID"], (None, None))
        source_locators = [{"member": "NameReferences.tsv", "row": index}]
        if reference_index is not None:
            source_locators.append({"member": "References.tsv", "row": reference_index})
        refs_by_taxon.setdefault(row["ID"], []).append({
            "referenceId": row["ReferenceID"],
            "referenceType": row["ReferenceType"],
            "sourceRows": source_locators,
            "reference": reference,
        })

    registry = json.loads((input_root / "data/catalogue-of-life/releases/2026-08-20/registry/manifest.json").read_text(encoding="utf-8"))
    col_rows = []
    node_files = registry["hierarchy"]["nodes"]["files"]
    for file in node_files:
        with gzip.open(input_root / "data/catalogue-of-life/releases/2026-08-20/registry" / file["path"], "rt", encoding="utf-8") as handle:
            for line in handle:
                record = json.loads(line)
                if record.get("sourceDatasetId") == SOURCE_DATASET and record.get("rank") == "species" and record.get("status") == "accepted":
                    col_rows.append(record)
    if len(col_rows) != 259 or len({row["id"] for row in col_rows}) != len(col_rows):
        raise SystemExit("COL Gymnodinium scope changed")
    root_record = None
    for file in node_files:
        with gzip.open(input_root / "data/catalogue-of-life/releases/2026-08-20/registry" / file["path"], "rt", encoding="utf-8") as handle:
            for line in handle:
                candidate = json.loads(line)
                if candidate.get("id") == COL_ROOT:
                    root_record = candidate
                    break
            if root_record:
                break
    if not root_record or root_record.get("scientificName") != "Gymnodinium" or root_record.get("rank") != "genus":
        raise SystemExit("COL Gymnodinium root changed")

    by_key = {}
    for row_number, row in enumerate(source_rows, 2):
        key = exact_key(row["Genus"], row["SpeciesEpithet"], row["AuthorString"])
        if key in by_key:
            raise SystemExit("duplicate Gymnodinium source name+authorship")
        by_key[key] = (row_number, row)

    crosswalk = []
    used_source_ids = set()
    for col in col_rows:
        authorship = clean(col.get("authorship"))
        match = by_key.get(exact_key(col_bare(col).split(" ", 1)[0], col_bare(col).split(" ", 1)[1], authorship))
        base = {
            "colId": col["id"],
            "colScientificName": col["scientificName"],
            "colAuthorship": col.get("authorship"),
            "sourceRows": [],
            "candidates": [],
        }
        if match is None:
            base.update({"status": "unmatched", "mappingBasis": "No exact source scientific name+authorship match; punctuation and epithet spelling are not normalized.", "sourceAcceptedTaxonId": None})
            crosswalk.append(base)
            continue
        row_number, source = match
        used_source_ids.add(source["AcceptedTaxonID"])
        matched = {
            "id": source["AcceptedTaxonID"],
            "scientificName": clean(f"{source['Genus']} {source['SpeciesEpithet']}"),
            "authorship": source["AuthorString"],
            "status": source["Sp2000NameStatus"],
            "url": source["SpeciesURL"] or None,
        }
        base.update({
            "status": "accepted",
            "matchedName": matched,
            "acceptedName": matched,
            "mappingBasis": "Exact source scientific name+authorship match; all AcceptedSpecies fields are preserved.",
            "sourceRows": [{"member": "AcceptedSpecies.tsv", "row": row_number}],
            "sourceAcceptedTaxonId": source["AcceptedTaxonID"],
            "sourceUrl": source["SpeciesURL"] or None,
            "sourceClassification": {key: source[key] for key in ("Kingdom", "Phylum", "Class", "Order", "Family", "Genus")},
            "sourceAcceptedRecord": source,
            "nameReferences": refs_by_taxon.get(source["AcceptedTaxonID"], []),
        })
        crosswalk.append(base)
    crosswalk.sort(key=lambda row: row["colId"])
    source_only = []
    for row_number, source in enumerate(source_rows, 2):
        if source["AcceptedTaxonID"] in used_source_ids:
            continue
        source_only.append({
            "colId": None,
            "status": "source-only",
            "mappingBasis": "Source accepted record has no exact COL26.8 source-1177 name+authorship counterpart; retained separately from the COL crosswalk.",
            "sourceRows": [{"member": "AcceptedSpecies.tsv", "row": row_number}],
            "sourceAcceptedTaxonId": source["AcceptedTaxonID"],
            "sourceClassification": {key: source[key] for key in ("Kingdom", "Phylum", "Class", "Order", "Family", "Genus")},
            "sourceAcceptedRecord": source,
            "nameReferences": refs_by_taxon.get(source["AcceptedTaxonID"], []),
        })
    if len(crosswalk) != 259 or len(source_only) != 1:
        raise SystemExit("unexpected Gymnodinium matching totals")
    if sum(row["status"] == "accepted" for row in crosswalk) != 258 or sum(row["status"] == "unmatched" for row in crosswalk) != 1:
        raise SystemExit("unexpected Gymnodinium outcome counts")

    payload = jsonl_bytes(crosswalk)
    compressed = gzip.compress(payload, compresslevel=9, mtime=0)
    upstream_payload = jsonl_bytes(source_only)
    upstream_compressed = gzip.compress(upstream_payload, compresslevel=9, mtime=0)
    output = root / OUT.relative_to(ROOT)
    upstream = root / UPSTREAM.relative_to(ROOT)
    descriptor = root / DESC.relative_to(ROOT)
    ledger = root / LEDGER.relative_to(ROOT)
    write_gzip(output, payload)
    write_gzip(upstream, upstream_payload)
    files = [file_entry(output, crosswalk, compressed, payload, root)]
    upstream_file = {**file_entry(upstream, source_only, upstream_compressed, upstream_payload, root), "role": "source-only", "colOwnership": None}
    counts = {"total": 259, "accepted": 258, "redirect": 0, "ambiguous": 0, "unmatched": 1, "withheld": 0, "upstreamOnly": 1, "records": 259}
    descriptor_value = {
        "schemaVersion": 1,
        "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "gymnodinium-archive-crosswalk",
        "packageId": "protists-chromists",
        "provider": "Gymnodinium checklist via Catalogue of Life ChecklistBank",
        "rowEncoding": "json",
        "colIdField": "colId",
        "totalCountField": "total",
        "source": {"provider": "The dinoflagellate genus Gymnodinium checklist via Catalogue of Life ChecklistBank", "license": "CC0-1.0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/", "archiveUrl": URL, "archiveBytes": ARCHIVE_BYTES, "archiveSha256": SHA, "archiveEncoding": "gzip-compressed tar (HTTP Content-Type application/zip)", "version": source_database[0]["DatabaseVersion"], "versionDate": source_database[0]["ReleaseDate"], "sourceDatabase": source_database[0], "retrievedAt": "2026-09-04", "members": {name: {"bytes": len(value), "sha256": digest(value)} for name, value in members.items()}},
        "scope": {"packageId": "protists-chromists", "colSourceDatasetId": SOURCE_DATASET, "colRootUsageId": COL_ROOT, "colRootScientificName": root_record["scientificName"], "colRootRank": root_record["rank"], "sourceKingdom": "Chromista", "sourcePhylum": "Miozoa", "sourceClass": "Dinophyceae", "sourceOrder": "Gymnodiniales", "sourceGenus": "Gymnodinium", "colStrictAcceptedSpecies": 259, "eligibleColSpecies": 259, "projectedSpecies": 259, "matchingKey": "exact source scientific name + authorship", "boundary": "Only strict accepted COL26.8 species descending from exact Gymnodinium genus 4RTJ and source dataset 1177 are included; no Dinophyceae siblings are inferred."},
        "matching": {"normalization": "UTF-8 quoted TSV; surrounding whitespace is trimmed for name+authorship comparison only.", "prohibited": "No fuzzy, punctuation, edit-distance, phonetic, epithet-substitution, taxon-substitution or missing-authorship matching.", "unmatchedReason": "COL p-dorhnii and source p.dorhni remain unmatched because the source spelling differs."},
        "counts": counts,
        "files": files,
        "upstreamOnlyFiles": [upstream_file],
        "evidenceBoundary": {"en": "Frozen source provenance and exact nomenclatural linkage only; this is not independent scientific corroboration, species-concept equivalence, an ecological or biological dossier, fossil evidence or expert review.", "zh": "冻结的来源追溯与严格命名关联；不是独立科学佐证、物种概念等同、生态或生物档案、化石证据或专家审查。"},
        "limitations": ["One source accepted row (T284, Gymnodinium p.dorhni) remains source-only because its spelling does not exactly match COL Gymnodinium p-dorhnii.", "The source archive's IsExtinct, HasModern and HasPreHolocene fields are preserved source fields, not an Evo Atlas extant-status review."],
        "totalCompressedBytes": len(compressed), "totalSourceBytes": len(payload),
        "deliveryProfiles": {"web-light": {"payload": "summary-only", "files": [], "records": 0, "totalCompressedBytes": 0, "totalSourceBytes": 0}, "native-full": {"payload": "complete", "files": [files[0]["path"], upstream_file["path"]], "records": 260, "totalCompressedBytes": len(compressed) + len(upstream_compressed), "totalSourceBytes": len(payload) + len(upstream_payload)}},
    }
    descriptor_bytes = json_bytes(descriptor_value)
    descriptor.parent.mkdir(parents=True, exist_ok=True)
    descriptor.write_bytes(descriptor_bytes)
    ledger_value = {"schemaVersion": 1, "importType": "COL26.8-to-ChecklistBank-1177-Gymnodinium-source-archive", "source": descriptor_value["source"], "inputs": [{"path": archive.relative_to(input_root).as_posix(), "bytes": len(raw), "sha256": digest(raw)}], "scopeAudit": {"method": "Exact source scientific name+authorship under source dataset 1177 and COL root 4RTJ", "archiveAcceptedSpeciesRows": len(source_rows), "nameReferenceRows": len(name_refs), "bibliographyRows": len(references), "colEligibleSpecies": 259, "matchedSourceAcceptedTaxonIds": 258, "sourceOnlyRows": 1, "unmatchedColRows": 1}, "matchingContract": descriptor_value["matching"], "totals": counts, "output": {"path": files[0]["path"], "bytes": len(compressed), "sha256": digest(compressed), "sourceBytes": len(payload), "sourceSha256": digest(payload), "upstreamOnly": upstream_file, "descriptor": {"path": descriptor.relative_to(root).as_posix(), "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)}}, "deliveryContract": {"pagesLight": "Pages needs only this descriptor and may omit row shards.", "androidIosFull": "Native full inventories must include the descriptor and both listed row-level shards unchanged.", "runtimeChange": "This import changes no runtime protocol or global manifest."}, "generatedBy": {"scriptPath": "scripts/build-gymnodinium-sidecar.py", "deterministic": "Pinned archive bytes, exact scope, exact name+authorship, source-row locators, sorted COL IDs and deterministic gzip."}}
    ledger.parent.mkdir(parents=True, exist_ok=True)
    ledger.write_bytes(json_bytes(ledger_value))
    print(json.dumps({"counts": counts, "output": files[0], "upstreamOnly": upstream_file}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
