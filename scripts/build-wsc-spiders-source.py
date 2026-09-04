"""Project the byte-pinned World Spider Catalog archive into COL rows.

The importer deliberately keeps the source archive and the current
ChecklistBank API metadata separate.  The archive currently embeds an older
metadata DOI/version, so this script records that mismatch instead of
silently replacing the embedded metadata.
"""
import argparse
import csv
import gzip
import hashlib
import io
import json
import unicodedata
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "data/catalogue-of-life/releases/2026-08-20/registry"
ARCHIVE = ROOT / "data/sources/archives/checklistbank-56185-wsc-2026-08-30.zip"
METADATA = ROOT / "data/sources/archives/checklistbank-56185-wsc-2026-08-30.metadata.json"
ARCHIVE_SHA = "56ec2edda2d4570ee24fd67e9ab392ef0dce80fb9cef4967ba74caf00e12a390"
ARCHIVE_BYTES = 3051808
ARCHIVE_URL = "https://api.checklistbank.org/dataset/56185/archive?attempt=80"
ARCHIVE_ATTEMPT = 80
API_VERSION = "2026-08-30"
API_VERSION_DOI = "10.48580/d4btg.v80"
COL_SOURCE = "56185"
COL_ROOTS = ("RN",)
OUT = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
SHARD_LIMIT = 2 * 1024 * 1024


def digest(data):
    return hashlib.sha256(data).hexdigest()


def script_digest(path):
    return digest(path.read_bytes().replace(b"\r\n", b"\n"))


def dump(obj, pretty=False):
    return (json.dumps(obj, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (",", ":")) + "\n").encode("utf-8")


def norm(value):
    return " ".join(unicodedata.normalize("NFC", value or "").split())


def col_bare(row):
    name, author = row.get("scientificName") or "", row.get("authorship") or ""
    suffix = " " + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def source_scientific_name(row):
    # WSC's ColDP export stores species parts rather than a populated
    # scientificName field.  This is a structural reconstruction, not a
    # synonym or species-concept inference.
    parts = [row.get("col:uninomial"), row.get("col:genericName"),
             row.get("col:specificEpithet"), row.get("col:infraspecificEpithet")]
    return " ".join(part for part in parts if part)


def source_name(row, distributions):
    taxon_id = row["col:ID"]
    return {
        "id": taxon_id,
        "scientificName": source_scientific_name(row),
        "authorship": row.get("col:authorship") or "",
        "rank": row.get("col:rank") or "",
        "status": row.get("col:status") or "",
        "nameStatus": row.get("col:nameStatus") or "",
        "nameReferenceId": row.get("col:nameReferenceID") or "",
        "publishedInPage": row.get("col:publishedInPage") or "",
        "url": row.get("col:link") or "",
        "distribution": distributions.get(taxon_id, []),
    }


def parse_embedded_metadata(raw):
    fields = {}
    for line in raw.decode("utf-8").splitlines():
        if line and not line[0].isspace() and ":" in line:
            key, value = line.split(":", 1)
            fields[key] = value.strip()
    return {key: fields.get(key, "") for key in
            ("doi", "title", "issued", "version", "license", "url")}


def read_archive(path):
    members = {}
    with zipfile.ZipFile(path) as archive:
        for member in archive.namelist():
            raw = archive.read(member)
            members[member] = {"bytes": len(raw), "sha256": digest(raw)}

        def rows(member):
            return list(csv.DictReader(io.TextIOWrapper(
                archive.open(member), encoding="utf-8-sig"), delimiter="\t"))

        name_rows = rows("NameUsage.tsv")
        reference_rows = rows("Reference.tsv")
        distribution_rows = rows("Distribution.tsv")
        references = {row["col:ID"]: (row, index)
                      for index, row in enumerate(reference_rows, 2)}
        distributions = {}
        for index, row in enumerate(distribution_rows, 2):
            distributions.setdefault(row["col:taxonID"], []).append({
                "gazetteer": row.get("col:gazetteer") or "",
                "area": row.get("col:area") or "",
                "sourceRows": [{"member": "Distribution.tsv", "row": index}],
            })
        accepted = {}
        accepted_count = 0
        rank_counts = {}
        status_counts = {}
        for index, row in enumerate(name_rows, 2):
            rank = row.get("col:rank") or ""
            status = row.get("col:status") or ""
            rank_counts[rank] = rank_counts.get(rank, 0) + 1
            status_counts[status] = status_counts.get(status, 0) + 1
            if rank == "species" and status == "accepted":
                accepted_count += 1
                accepted[row["col:ID"]] = (row, index)
    return (accepted, references, distributions, members, accepted_count,
            rank_counts, status_counts)


def read_col():
    manifest_bytes = (REGISTRY / "manifest.json").read_bytes()
    manifest = json.loads(manifest_bytes)
    parents, candidates, rows = {}, [], {}
    for file in manifest["hierarchy"]["nodes"]["files"]:
        with gzip.open(REGISTRY / file["path"], "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                parents[row["id"]] = row.get("parentId")
                if (row.get("rank") == "species" and row.get("status") == "accepted"
                        and row.get("sourceDatasetId") == COL_SOURCE):
                    candidates.append(row)
    for row in candidates:
        seen, current = set(), row.get("parentId")
        while current and current not in seen and current not in COL_ROOTS:
            seen.add(current)
            current = parents.get(current)
        if current in COL_ROOTS:
            rows[row["id"]] = row
    inputs = []
    for file in manifest["hierarchy"]["nodes"]["files"]:
        path = REGISTRY / file["path"]
        inputs.append({
            "path": f"data/catalogue-of-life/releases/2026-08-20/registry/{file['path']}",
            "bytes": path.stat().st_size,
            "sha256": digest(path.read_bytes()),
        })
    return rows, digest(manifest_bytes), inputs


def row_locators(row, row_number, references, distributions):
    locators = [{"member": "NameUsage.tsv", "row": row_number}]
    reference_id = (row.get("col:nameReferenceID") or "").strip()
    if reference_id in references:
        locators.append({"member": "Reference.tsv", "row": references[reference_id][1]})
    for item in distributions.get(row["col:ID"], []):
        locators.extend(item["sourceRows"])
    return locators


def source_references(row, references):
    reference_id = (row.get("col:nameReferenceID") or "").strip()
    if not reference_id:
        return []
    item = {"referenceID": reference_id, "missing": reference_id not in references}
    if reference_id in references:
        reference, row_number = references[reference_id]
        item["reference"] = reference
        item["sourceRows"] = [{"member": "Reference.tsv", "row": row_number}]
    return [item]


def write_shards(destination, prefix, rows, role):
    if not rows:
        return []
    parts, current, used = [], [], 2
    for row in rows:
        size = len(dump(row)) + 1
        if current and used + size > SHARD_LIMIT:
            parts.append(current)
            current, used = [row], 2 + size
        else:
            current.append(row)
            used += size
    if current:
        parts.append(current)
    items = []
    for index, part in enumerate(parts):
        name = f"{prefix}-{index:03d}.json.gz"
        payload = dump(part)
        if len(payload) > SHARD_LIMIT:
            raise ValueError(f"shard exceeds uncompressed limit: {name}")
        compressed = gzip.compress(payload, compresslevel=9, mtime=0)
        # gzip.compress uses the platform OS byte; pin it for cross-platform
        # deterministic replay.
        compressed = compressed[:9] + bytes([255]) + compressed[10:]
        (destination / name).write_bytes(compressed)
        item = {
            "path": f"other-animals/{name}", "records": len(part),
            "bytes": len(compressed), "sha256": digest(compressed),
            "sourceBytes": len(payload), "sourceSha256": digest(payload),
            "encoding": "gzip", "mediaType": "application/json", "role": role,
        }
        if part and role == "col-partition":
            item.update(minColId=part[0]["colId"], maxColId=part[-1]["colId"])
        items.append(item)
    return items


def project(archive, output_root=None):
    raw = archive.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != ARCHIVE_SHA:
        raise ValueError("archive does not match the byte-pinned WSC archive")
    metadata_bytes = METADATA.read_bytes()
    api_metadata = json.loads(metadata_bytes)
    if api_metadata.get("attempt") != ARCHIVE_ATTEMPT:
        raise ValueError("metadata does not describe the pinned ChecklistBank archive attempt")
    if api_metadata.get("version") != API_VERSION or api_metadata.get("versionDoi") != API_VERSION_DOI:
        raise ValueError("metadata API version changed from the pinned WSC release")
    with zipfile.ZipFile(archive) as z:
        embedded_metadata_bytes = z.read("metadata.yaml")
    embedded_metadata = parse_embedded_metadata(embedded_metadata_bytes)
    archive_data = read_archive(archive)
    source, references, distributions, members, source_count, rank_counts, status_counts = archive_data
    col, col_sha, col_inputs = read_col()
    by_key = {}
    for sid, (row, row_number) in source.items():
        by_key.setdefault((norm(source_scientific_name(row)),
                           norm(row.get("col:authorship"))), []).append(
                               (sid, row, row_number))

    records, used = [], set()
    counts = {"accepted": 0, "redirect": 0, "ambiguous": 0,
              "unmatched": 0, "withheld": 0}
    for cid, row in sorted(col.items()):
        hits = by_key.get((norm(col_bare(row)), norm(row.get("authorship"))), [])
        status = "accepted" if len(hits) == 1 else "ambiguous" if len(hits) > 1 else "unmatched"
        counts[status] += 1
        matched, locators, refs = None, [], []
        if len(hits) == 1:
            sid, source_row, source_row_number = hits[0]
            used.add(sid)
            matched = source_name(source_row, distributions)
            locators = row_locators(source_row, source_row_number, references, distributions)
            refs = source_references(source_row, references)
        candidates = [source_name(hit[1], distributions) for hit in hits] if len(hits) > 1 else []
        records.append({
            "colId": cid, "colScientificName": row["scientificName"],
            "colAuthorship": row.get("authorship"), "status": status,
            "matchedName": matched, "acceptedName": matched, "candidates": candidates,
            "mappingBasis": "Exact source scientific name plus authorship; no fuzzy fallback.",
            "sourceRows": locators, "references": refs,
        })

    source_only = []
    for sid, (row, row_number) in sorted(source.items()):
        if sid in used:
            continue
        source_only.append({
            "colId": None, "colScientificName": None, "colAuthorship": None,
            "status": "source-only", "matchedName": None,
            "acceptedName": source_name(row, distributions), "candidates": [],
            "mappingBasis": "Accepted WSC source row not linked by exact COL name+authorship; not a global new species claim.",
            "sourceRows": row_locators(row, row_number, references, distributions),
            "references": source_references(row, references),
        })

    output_base = Path(output_root) if output_root else ROOT
    destination = output_base / OUT.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    col_files = write_shards(destination, "wsc-spiders", records, "col-partition")
    source_files = write_shards(destination, "wsc-spiders-source-only", source_only, "source-only")
    all_files = col_files + source_files

    source_info = {
        "datasetId": COL_SOURCE, "title": api_metadata["title"],
        # These are the API release fields.  The archive's embedded metadata is
        # retained separately below because it has a different DOI/version.
        "version": API_VERSION, "versionDoi": API_VERSION_DOI,
        "doi": api_metadata["doi"], "issued": api_metadata["issued"],
        "citation": api_metadata["citation"], "contact": api_metadata.get("contact"),
        "creator": api_metadata.get("creator"), "contributor": api_metadata.get("contributor"),
        "metadataBytes": len(metadata_bytes), "metadataSha256": digest(metadata_bytes),
        "license": api_metadata["license"], "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
        "archiveUrl": ARCHIVE_URL, "archiveAttempt": ARCHIVE_ATTEMPT,
        "archivePath": "data/sources/archives/checklistbank-56185-wsc-2026-08-30.zip",
        "metadataPath": "data/sources/archives/checklistbank-56185-wsc-2026-08-30.metadata.json",
        "archiveBytes": len(raw), "archiveSha256": digest(raw), "members": members,
        "embeddedMetadata": {
            **embedded_metadata, "bytes": len(embedded_metadata_bytes),
            "sha256": digest(embedded_metadata_bytes),
        },
        "metadataConsistency": {
            "status": "mismatch",
            "apiResponse": {key: api_metadata.get(key) for key in
                            ("doi", "versionDoi", "version", "issued", "license")},
            "archiveEmbedded": {key: embedded_metadata.get(key) for key in
                                ("doi", "version", "issued", "license")},
            "boundary": "The byte-pinned archive is the actual projection input; embedded metadata.yaml is preserved and not overwritten. The current API metadata is retained separately, and this mismatch must not be read as archive/version equivalence.",
        },
    }
    descriptor = {
        "schemaVersion": 1, "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "wsc-spiders-archive-crosswalk", "packageId": "other-animals",
        "provider": "World Spider Catalog via ChecklistBank", "role": "authority-crosswalk",
        "rowEncoding": "json", "encoding": "gzip", "mediaType": "application/json",
        "colIdField": "colId", "totalCountField": "total", "source": source_info,
        "scope": {"colRootUsageIds": list(COL_ROOTS), "scientificName": "Araneae",
                   "eligibleColSpecies": len(col), "sourceAcceptedSpecies": source_count,
                   "sourceAcceptedSpeciesRankStatus": "rank=species and col:status=accepted"},
        "matching": {
            "normalization": "NFC and Unicode-whitespace normalization only; COL trailing authorship is removed exactly.",
            "prohibited": "No fuzzy, case-folded, accent-folded, synonym, redirect or species-concept matching.",
        },
        "counts": {"total": len(records), **counts, "sourceOnly": len(source_only),
                   "sourceOnlyRecords": len(source_only), "records": len(records) + len(source_only)},
        "files": col_files, "sourceOnlyFiles": source_files,
        # Keep the established integration spelling as an alias while the
        # record status remains explicitly source-only.
        "upstreamOnlyFiles": source_files,
        "evidenceBoundary": {
            "en": "Frozen WSC nomenclatural/source projection for the exact COL26.8 source-56185 Araneae root; not species-concept equivalence, a biological dossier, fossil evidence, distribution completeness or expert review.",
            "zh": "精确 COL26.8 source-56185 Araneae 根节点范围的 WSC 冻结命名/来源投影；不是物种概念等同性、生物档案、化石证据、分布完整性或专家审查。",
        },
        "limitations": [
            "Source-only rows are relative only to COL source dataset 56185.",
            "WSC distribution rows are preserved as source statements and are not claimed comprehensive.",
            "The archive metadata.yaml DOI/version differs from the current API metadata; both are preserved and neither is silently substituted.",
            "The source catalog excludes fossil entries according to its own published scope; no fossil conclusion is inferred here.",
        ],
        "sourceAudit": {"rankCounts": rank_counts, "statusCounts": status_counts,
                        "archiveEmbeddedMetadataSha256": digest(embedded_metadata_bytes)},
        "totalCompressedBytes": sum(item["bytes"] for item in all_files),
        "totalSourceBytes": sum(item["sourceBytes"] for item in all_files),
        "totals": {"records": len(records), "sourceOnlyRecords": len(source_only),
                   "compressedBytes": sum(item["bytes"] for item in col_files),
                   "sourceCompressedBytes": sum(item["bytes"] for item in source_files),
                   "sourceBytes": sum(item["sourceBytes"] for item in col_files),
                   "sourceOnlySourceBytes": sum(item["sourceBytes"] for item in source_files)},
        "deliveryProfiles": {
            "web-light": {"mode": "summary-only", "records": 0, "files": [],
                          "totalCompressedBytes": 0, "totalSourceBytes": 0},
            "native-full": {"mode": "complete", "records": len(records) + len(source_only),
                            "files": [item["path"] for item in all_files],
                            "totalCompressedBytes": sum(item["bytes"] for item in all_files),
                            "totalSourceBytes": sum(item["sourceBytes"] for item in all_files)},
        },
    }
    descriptor_path = destination / "wsc-spiders-sidecar.json"
    descriptor_bytes = dump(descriptor, True)
    descriptor_path.write_bytes(descriptor_bytes)
    ledger = {
        "schemaVersion": 1, "importType": "COL26.8-to-WSC-56185-archive-projection",
        "source": source_info, "registryManifestSha256": col_sha, "registryInputs": col_inputs,
        "generatedBy": {"script": "scripts/build-wsc-spiders-source.py",
                        "scriptSha256": script_digest(Path(__file__)), "hashNormalization": "LF"},
        "outputs": {"descriptor": {"path": "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/wsc-spiders-sidecar.json",
                                     "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)},
                    "files": col_files, "sourceOnlyFiles": source_files,
                    "upstreamOnlyFiles": source_files},
        "scopeAudit": {"colRootUsageIds": list(COL_ROOTS), "colSpecies": len(col),
                        "sourceAcceptedSpecies": source_count, "sourceOnly": len(source_only),
                        "memberDigests": members, "rankCounts": rank_counts,
                        "statusCounts": status_counts},
    }
    ledger_path = output_base / "data/sources/wsc-spiders-archive-56185-import-ledger.json"
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(dump(ledger, True))
    print(json.dumps({"counts": descriptor["counts"],
                      "sourceArchive": {"bytes": len(raw), "sha256": digest(raw)},
                      "metadataConsistency": source_info["metadataConsistency"],
                      "shards": [{"path": item["path"], "records": item["records"],
                                  "bytes": item["bytes"], "sourceBytes": item["sourceBytes"],
                                  "sha256": item["sha256"]} for item in all_files]}))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", type=Path, default=ARCHIVE)
    parser.add_argument("--output-root", type=Path)
    args = parser.parse_args()
    project(args.archive, args.output_root)


if __name__ == "__main__":
    main()
