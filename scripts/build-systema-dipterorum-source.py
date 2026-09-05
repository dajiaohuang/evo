"""Project the byte-pinned Systema Dipterorum archive into COL rows.

The archive is a TaxonWorks ColDP export.  Its Taxon rows do not carry an
accepted/extant label; this importer therefore calls them selected source
species and preserves raw status/extinction fields without interpretation.
"""
import argparse
import csv
import gzip
import hashlib
import io
import json
import unicodedata
import zipfile
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "data/catalogue-of-life/releases/2026-08-20/registry"
ARCHIVE = ROOT / "data/sources/archives/checklistbank-1101-systema-dipterorum-attempt-47.zip"
METADATA = ROOT / "data/sources/archives/checklistbank-1101-systema-dipterorum.metadata.json"
ARCHIVE_SHA = "f6d65c7a7a30be55f2cb07cf8dab80c81d03489c3cae855bf096687bcfb40f51"
ARCHIVE_BYTES = 22335590
ARCHIVE_URL = "https://api.checklistbank.org/dataset/1101/archive?attempt=47"
ARCHIVE_ATTEMPT = 47
API_VERSION = "7.2"
COL_SOURCE = "1101"
COL_ROOTS = ("D2P",)
COL_ROOT_NAME = "Diptera"
SOURCE_ROOT_TAXON = "1381750"
SOURCE_ROOT_NAME = "1551900"
OUT = ROOT / "data/packages/arthropoda/crustaceans-insects/nomenclature"
COL_PREFIX = "systema-dipterorum"
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
    name = row.get("scientificName") or ""
    author = row.get("authorship") or ""
    suffix = " " + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def parse_embedded_metadata(raw):
    fields = {}
    for line in raw.decode("utf-8").splitlines():
        if line and not line[0].isspace() and ":" in line:
            key, value = line.split(":", 1)
            fields[key] = value.strip().strip("'")
    return {key: fields.get(key, "") for key in
            ("doi", "title", "issued", "version", "license", "url")}


def read_archive(path):
    with zipfile.ZipFile(path) as archive:
        members = {}
        for member in archive.namelist():
            raw = archive.read(member)
            members[member] = {"bytes": len(raw), "sha256": digest(raw)}

        def rows(member):
            return list(csv.DictReader(io.TextIOWrapper(
                archive.open(member), encoding="utf-8-sig", newline=""),
                delimiter="\t"))

        names = rows("Name.tsv")
        taxa = rows("Taxon.tsv")
        references = rows("References.tsv")
        name_by_id = {row["ID"]: (row, index)
                      for index, row in enumerate(names, 2)}
        reference_by_id = {row["ID"]: (row, index)
                          for index, row in enumerate(references, 2)}
        if len(name_by_id) != len(names):
            raise ValueError("Name.tsv IDs are not unique")
        taxon_ids = [row["ID"] for row in taxa]
        if len(set(taxon_ids)) != len(taxon_ids):
            raise ValueError("Taxon.tsv IDs are not unique")
        if any(row["nameID"] not in name_by_id for row in taxa):
            raise ValueError("Taxon.tsv contains a nameID absent from Name.tsv")
        taxon_name_ids = [row["nameID"] for row in taxa]
        if len(set(taxon_name_ids)) != len(taxon_name_ids):
            raise ValueError("Taxon.tsv nameID relationship is not one-to-one")
        parent = {row["ID"]: row["parentID"] or None for row in taxa}
        if SOURCE_ROOT_TAXON not in parent:
            raise ValueError("Systema Dipterorum root Taxon ID is absent")
        missing_parents = sorted({value for value in parent.values()
                                  if value is not None and value not in parent})
        children = defaultdict(list)
        for taxon_id, parent_id in parent.items():
            if parent_id is not None:
                children[parent_id].append(taxon_id)
        reachable = set()
        pending = [SOURCE_ROOT_TAXON]
        while pending:
            taxon_id = pending.pop()
            if taxon_id in reachable:
                continue
            reachable.add(taxon_id)
            pending.extend(children.get(taxon_id, []))
        selected = []
        rank_counts = Counter()
        name_status_counts = Counter()
        extinct_counts = Counter()
        provisional_counts = Counter()
        selected_extinct_counts = Counter()
        selected_provisional_counts = Counter()
        selected_name_status_counts = Counter()
        for taxon_index, taxon in enumerate(taxa, 2):
            name, name_index = name_by_id[taxon["nameID"]]
            rank = name.get("rank") or ""
            rank_counts[rank] += 1
            name_status_counts[name.get("status") or ""] += 1
            extinct_counts[taxon.get("extinct") or ""] += 1
            provisional_counts[taxon.get("provisional") or ""] += 1
            if rank == "species":
                selected.append((taxon, taxon_index, name, name_index))
                selected_extinct_counts[taxon.get("extinct") or ""] += 1
                selected_provisional_counts[taxon.get("provisional") or ""] += 1
                selected_name_status_counts[name.get("status") or ""] += 1
        return {
            "members": members,
            "names": names,
            "taxa": taxa,
            "references": references,
            "nameById": name_by_id,
            "referenceById": reference_by_id,
            "selected": selected,
            "rankCounts": dict(rank_counts),
            "nameStatusCounts": dict(name_status_counts),
            "extinctCounts": dict(extinct_counts),
            "provisionalCounts": dict(provisional_counts),
            "selectedExtinctCounts": dict(selected_extinct_counts),
            "selectedProvisionalCounts": dict(selected_provisional_counts),
            "selectedNameStatusCounts": dict(selected_name_status_counts),
            "sourceRoot": {
                "taxonId": SOURCE_ROOT_TAXON,
                "nameId": SOURCE_ROOT_NAME,
                "reachableTaxa": len(reachable),
                "orphanTaxa": len(taxa) - len(reachable),
                "missingParentIds": missing_parents,
            },
            "embeddedMetadataBytes": archive.read("metadata.yaml"),
        }


def read_col():
    manifest_bytes = (REGISTRY / "manifest.json").read_bytes()
    manifest = json.loads(manifest_bytes)
    parents = {}
    candidates = []
    for file in manifest["hierarchy"]["nodes"]["files"]:
        with gzip.open(REGISTRY / file["path"], "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                parents[row["id"]] = row.get("parentId")
                if (row.get("rank") == "species" and row.get("status") == "accepted"
                        and row.get("sourceDatasetId") == COL_SOURCE):
                    candidates.append(row)
    rows = {}
    for row in candidates:
        seen = set()
        current = row.get("parentId")
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


def source_references(name, taxon, references):
    ids = []
    for value in (name.get("referenceID"), taxon.get("referenceID")):
        if value and value not in ids:
            ids.append(value)
    result = []
    for reference_id in ids:
        item = {"referenceID": reference_id, "missing": reference_id not in references}
        if reference_id in references:
            reference, row_number = references[reference_id]
            item["reference"] = reference
            item["sourceRows"] = [{"member": "References.tsv", "row": row_number}]
        result.append(item)
    return result


def source_name(taxon, taxon_row, name, name_row):
    return {
        "id": taxon["ID"],
        "nameId": name["ID"],
        "scientificName": name.get("scientificName") or "",
        "authorship": name.get("authorship") or "",
        "rank": name.get("rank") or "",
        "status": name.get("status") or "",
        "url": name.get("link") or "",
        "sourceStatusRaw": name.get("status") or "",
        "extinctRaw": taxon.get("extinct") or "",
        "provisionalRaw": taxon.get("provisional") or "",
        "parentId": taxon.get("parentID") or None,
        "sourceRows": [
            {"member": "Taxon.tsv", "row": taxon_row},
            {"member": "Name.tsv", "row": name_row},
        ],
    }


def write_shards(destination, prefix, rows, role):
    # Keep replay output self-contained when an earlier projection emitted more
    # shards.  Only this generator's exact prefixes are eligible for cleanup.
    for stale in destination.glob(f"{prefix}-*.json.gz"):
        stale.unlink()
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
        compressed = compressed[:9] + bytes([255]) + compressed[10:]
        (destination / name).write_bytes(compressed)
        item = {
            "path": f"nomenclature/{name}", "records": len(part),
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
        raise ValueError("archive does not match the byte-pinned Systema Dipterorum archive")
    metadata_bytes = METADATA.read_bytes()
    api_metadata = json.loads(metadata_bytes)
    if api_metadata.get("key") != int(COL_SOURCE) or api_metadata.get("attempt") != ARCHIVE_ATTEMPT:
        raise ValueError("metadata does not describe the pinned ChecklistBank archive attempt")
    if api_metadata.get("version") != API_VERSION:
        raise ValueError("metadata API version changed from the pinned Systema Dipterorum release")
    with zipfile.ZipFile(archive) as z:
        embedded_metadata_bytes = z.read("metadata.yaml")
    embedded_metadata = parse_embedded_metadata(embedded_metadata_bytes)
    archive_data = read_archive(archive)
    source_rows = archive_data["selected"]
    references = {row["ID"]: (row, index)
                  for index, row in enumerate(archive_data["references"], 2)}
    source_by_key = defaultdict(list)
    for taxon, taxon_row, name, name_row in source_rows:
        source_by_key[(norm(name.get("scientificName")), norm(name.get("authorship")))].append(
            (taxon, taxon_row, name, name_row))
    col, col_sha, col_inputs = read_col()
    records, used = [], set()
    counts = {"accepted": 0, "redirect": 0, "ambiguous": 0,
              "unmatched": 0, "withheld": 0}
    for cid, row in sorted(col.items()):
        author = row.get("authorship") or ""
        key = (norm(col_bare(row)), norm(author)) if author else None
        hits = source_by_key.get(key, []) if key else []
        status = "accepted" if len(hits) == 1 else "ambiguous" if len(hits) > 1 else "unmatched"
        counts[status] += 1
        matched = None
        locators = []
        refs = []
        if len(hits) == 1:
            taxon, taxon_row, name, name_row = hits[0]
            used.add(taxon["ID"])
            matched = source_name(taxon, taxon_row, name, name_row)
            locators = matched["sourceRows"]
            refs = source_references(name, taxon, references)
        candidates = [source_name(*hit) for hit in hits] if len(hits) > 1 else []
        records.append({
            "colId": cid, "colScientificName": row["scientificName"],
            "colAuthorship": row.get("authorship"), "status": status,
            "matchedName": matched, "acceptedName": None, "candidates": candidates,
            "mappingBasis": "Exact NFC/Unicode-whitespace scientific name plus non-empty authorship; crosswalk match only, with no source accepted/extant inference.",
            "sourceRows": locators, "references": refs,
        })
    source_only = []
    for taxon, taxon_row, name, name_row in sorted(source_rows, key=lambda item: item[0]["ID"]):
        if taxon["ID"] in used:
            continue
        source = source_name(taxon, taxon_row, name, name_row)
        refs = source_references(name, taxon, references)
        source_only.append({
            "colId": None, "colScientificName": None, "colAuthorship": None,
            "status": "source-only", "matchedName": source, "acceptedName": None,
            "candidates": [],
            "mappingBasis": "Selected Systema Dipterorum Taxon species row not linked by a unique exact COL name plus non-empty authorship; no COL identity or accepted/extant inference.",
            "sourceRows": source["sourceRows"], "references": refs,
        })
    if len(used) + len(source_only) != len(source_rows):
        raise ValueError("source species rows are not covered exactly once")
    output_base = Path(output_root) if output_root else ROOT
    destination = output_base / OUT.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    col_files = write_shards(destination, COL_PREFIX, records, "col-partition")
    source_files = write_shards(destination, f"{COL_PREFIX}-source-only", source_only, "source-only")
    all_files = col_files + source_files
    source_info = {
        "datasetId": COL_SOURCE, "title": api_metadata["title"],
        "version": api_metadata["version"], "doi": api_metadata["doi"],
        "issued": api_metadata["issued"], "citation": api_metadata["citation"],
        "contact": api_metadata.get("contact"), "editor": api_metadata.get("editor"),
        "metadataBytes": len(metadata_bytes), "metadataSha256": digest(metadata_bytes),
        "license": api_metadata["license"], "archiveUrl": ARCHIVE_URL,
        "archiveAttempt": ARCHIVE_ATTEMPT,
        "archivePath": "data/sources/archives/checklistbank-1101-systema-dipterorum-attempt-47.zip",
        "metadataPath": "data/sources/archives/checklistbank-1101-systema-dipterorum.metadata.json",
        "archiveBytes": len(raw), "archiveSha256": digest(raw), "members": archive_data["members"],
        "embeddedMetadata": {**embedded_metadata, "bytes": len(embedded_metadata_bytes),
                              "sha256": digest(embedded_metadata_bytes)},
        "metadataConsistency": {
            "status": "mismatch",
            "apiResponse": {key: api_metadata.get(key) for key in
                            ("doi", "version", "issued", "license")},
            "archiveEmbedded": {key: embedded_metadata.get(key) for key in
                                ("doi", "version", "issued", "license")},
            "boundary": "The byte-pinned archive is the projection input. API metadata and embedded metadata.yaml are preserved as separate layers; their version and issued fields are not treated as equivalent.",
        },
    }
    descriptor = {
        "schemaVersion": 1, "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "systema-dipterorum-archive-crosswalk", "packageId": "crustaceans-insects",
        "provider": "Systema Dipterorum via ChecklistBank", "role": "authority-crosswalk",
        "rowEncoding": "json", "encoding": "gzip", "mediaType": "application/json",
        "colIdField": "colId", "totalCountField": "total", "source": source_info,
        "scope": {
            "colRootUsageIds": list(COL_ROOTS), "scientificName": COL_ROOT_NAME,
            "eligibleColSpecies": len(col), "sourceSelectedSpecies": len(source_rows),
            "sourceSelectedSpeciesDefinition": "Taxon.tsv rows whose nameID resolves to Name.tsv rank=species; source rows do not expose an accepted/extant status.",
            "sourceTaxonRoot": archive_data["sourceRoot"],
        },
        "matching": {
            "normalization": "NFC and Unicode-whitespace normalization only; COL trailing authorship is removed exactly; both authorship fields must be non-empty.",
            "prohibited": "No fuzzy, case-folded, accent-folded, synonym, OBO-status, redirect or species-concept matching; missing or duplicate keys remain unmatched/ambiguous.",
        },
        "counts": {"total": len(records), **counts, "upstreamOnly": len(source_only)},
        "files": col_files, "upstreamOnlyFiles": source_files,
        "evidenceBoundary": {
            "en": "Frozen Systema Dipterorum source crosswalk for the exact COL26.8 source-1101 Diptera root; crosswalk accepted means one exact name-plus-authorship match only. It is not source acceptance, extant status, species-concept equivalence, a biological dossier, distribution completeness or expert review.",
            "zh": "精确 COL26.8 source-1101 Diptera 根节点范围内的 Systema Dipterorum 冻结来源对照；crosswalk accepted 仅表示唯一精确名称加作者匹配，不表示源数据 accepted、现生状态、物种概念等同、生物档案、分布完整性或专家审查。",
        },
        "limitations": [
            "Source-only rows are relative only to the selected Taxon.tsv species rows and have null COL identity.",
            "Taxon.tsv has seven species rows with missing parent IDs; they are retained with raw parentID and are not assigned a fabricated parent.",
            "Name.status is blank for every selected source species row; raw status fields are preserved and no OBO code is interpreted as a redirect or accepted state.",
            "Distribution.tsv, SpeciesInteraction.tsv and VernacularName.tsv contain zero data rows; no ecology, range or interaction fact is generated.",
            "API metadata and embedded metadata.yaml have distinct version/issued values; both are retained without substitution.",
            "Both metadata layers expose the raw license string cc by; no license version or license URL is inferred.",
        ],
        "sourceAudit": {
            "rankCounts": archive_data["rankCounts"],
            "nameStatusCounts": archive_data["nameStatusCounts"],
            "taxonExtinctCounts": archive_data["extinctCounts"],
            "taxonProvisionalCounts": archive_data["provisionalCounts"],
            "selectedExtinctCounts": archive_data["selectedExtinctCounts"],
            "selectedProvisionalCounts": archive_data["selectedProvisionalCounts"],
            "selectedNameStatusCounts": archive_data["selectedNameStatusCounts"],
            "selectedSpecies": len(source_rows),
            "archiveTaxonRows": len(archive_data["taxa"]),
            "archiveRoot": archive_data["sourceRoot"],
            "archiveEmbeddedMetadataSha256": digest(embedded_metadata_bytes),
        },
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
    descriptor_path = destination / "systema-dipterorum-sidecar.json"
    descriptor_bytes = dump(descriptor, True)
    descriptor_path.write_bytes(descriptor_bytes)
    ledger = {
        "schemaVersion": 1, "importType": "COL26.8-to-Systema-Dipterorum-1101-archive-projection",
        "source": source_info, "registryManifestSha256": col_sha, "registryInputs": col_inputs,
        "generatedBy": {"script": "scripts/build-systema-dipterorum-source.py",
                        "scriptSha256": script_digest(Path(__file__)), "hashNormalization": "LF"},
        "outputs": {"descriptor": {"path": "data/packages/arthropoda/crustaceans-insects/nomenclature/systema-dipterorum-sidecar.json",
                                     "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)},
                    "files": col_files, "upstreamOnlyFiles": source_files},
        "scopeAudit": {"colRootUsageIds": list(COL_ROOTS), "colSpecies": len(col),
                        "sourceSelectedSpecies": len(source_rows), "sourceOnly": len(source_only),
                        "memberDigests": archive_data["members"], "rankCounts": archive_data["rankCounts"],
                        "nameStatusCounts": archive_data["nameStatusCounts"],
                        "taxonExtinctCounts": archive_data["extinctCounts"],
                        "selectedExtinctCounts": archive_data["selectedExtinctCounts"],
                        "selectedProvisionalCounts": archive_data["selectedProvisionalCounts"],
                        "selectedNameStatusCounts": archive_data["selectedNameStatusCounts"],
                        "archiveRoot": archive_data["sourceRoot"]},
    }
    ledger_path = output_base / "data/sources/systema-dipterorum-archive-1101-import-ledger.json"
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(dump(ledger, True))
    print(json.dumps({"counts": descriptor["counts"],
                      "sourceArchive": {"bytes": len(raw), "sha256": digest(raw)},
                      "metadataConsistency": source_info["metadataConsistency"],
                      "sourceRoot": archive_data["sourceRoot"],
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
