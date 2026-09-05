#!/usr/bin/env python3
"""Build the pinned COL26.8/ICTV MSL41.v1 + VMR crosswalk.

This importer uses the Python standard library and the required Node runtime
for build-time Brotli storage. It consumes
the two exact official ICTV workbooks already downloaded by the operator and
never performs fuzzy or normalized-name matching.
"""

from __future__ import annotations

import argparse
import gzip
import hashlib
import json
import re
import zipfile
from source_brotli import compress_source
from collections import Counter, defaultdict
from pathlib import Path
from xml.etree import ElementTree as ET


REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SPECIES_SHARD = REPOSITORY_ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/viruses/species-000.jsonl.gz"
DEFAULT_OUTPUT = REPOSITORY_ROOT / "data/sources/ictv-virus-crosswalk-col26.8-msl41.v1.json.br"

COL_RELEASE = "COL26.8"
COL_RELEASE_DATE = "2026-08-20"
CHECKLISTBANK_DATASET_KEY = 316115
SOURCE_DATASET_KEY = 1014
RETRIEVED_AT = "2026-08-31"

MSL_FILE = {
    "role": "official-current-virus-taxonomy",
    "fileName": "ICTV_Master_Species_List_2025_MSL41.v1.xlsx",
    "version": "MSL41.v1",
    "releaseDate": "2026-03-20",
    "url": "https://ictv.global/sites/default/files/MSL/ICTV_Master_Species_List_2025_MSL41.v1.xlsx",
    "landingPage": "https://ictv.global/msl",
    "doi": "10.5281/zenodo.19154110",
    "bytes": 1803176,
    "sha256": "9d262d7864f1f619445a897ae568718ed15b1309c8f0c157a12fd7fb9fd07801",
    "zenodoMd5": "b86b2ea2a0fc310dfad3ea00ee707474",
    "lastModified": "2026-03-21T21:43:33Z",
    "etag": '"1b83a8-64d8fb18185f3"',
}

VMR_FILE = {
    "role": "official-current-virus-exemplar-metadata",
    "fileName": "VMR_MSL41.v1.20260729.xlsx",
    "version": "MSL41.v1.20260729",
    "releaseDate": "2026-07-29",
    "url": "https://ictv.global/sites/default/files/VMR/VMR_MSL41.v1.20260729.xlsx",
    "landingPage": "https://ictv.global/vmr",
    "doi": "10.5281/zenodo.21694279",
    "bytes": 3879426,
    "sha256": "b79b5d82a1b3b8e9dd5e19afe8fe1a8f441267474918a7cefa8ae4913adf45bb",
    "zenodoMd5": "0cbe5dade3aeb494ca79d97854ee8580",
    "lastModified": "2026-07-29T23:59:49Z",
    "etag": '"3b3202-657c8c03346b9"',
}

EXPECTED_COL_SPECIES = 17552
EXPECTED_ICTV_SPECIES = 17554
EXPECTED_VMR_ISOLATES = 19285
EXPECTED_EXEMPLARS = 17554
EXPECTED_ADDITIONAL_ISOLATES = 1731
EXPECTED_UPSTREAM_ONLY = {"Boscovirus hypoboscidae", "Simiispumavirus macfas"}

MAIN_NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
REL_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
PACKAGE_REL_NS = "http://schemas.openxmlformats.org/package/2006/relationships"
HYPERLINK_RE = re.compile(r'^HYPERLINK\("([^"]+)","([^"]+)"\)$')


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def md5(data: bytes) -> str:
    return hashlib.md5(data).hexdigest()  # noqa: S324 - verifies an upstream checksum; not used for security


def verify_source_file(path: Path, expected: dict[str, object]) -> bytes:
    data = path.read_bytes()
    if path.name != expected["fileName"]:
        raise ValueError(f"Expected {expected['fileName']}, received {path.name}")
    if len(data) != expected["bytes"] or sha256(data) != expected["sha256"] or md5(data) != expected["zenodoMd5"]:
        raise ValueError(f"{path.name} does not match the pinned official ICTV/Zenodo file")
    return data


def shared_strings(archive: zipfile.ZipFile) -> list[str]:
    root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    return ["".join(node.text or "" for node in item.iter(f"{{{MAIN_NS}}}t")) for item in root]


def sheet_path(archive: zipfile.ZipFile, sheet_name: str) -> str:
    workbook = ET.fromstring(archive.read("xl/workbook.xml"))
    relationships = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
    targets = {item.attrib["Id"]: item.attrib["Target"] for item in relationships.findall(f"{{{PACKAGE_REL_NS}}}Relationship")}
    for sheet in workbook.findall(f".//{{{MAIN_NS}}}sheet"):
        if sheet.attrib.get("name") == sheet_name:
            target = targets[sheet.attrib[f"{{{REL_NS}}}id"]].lstrip("/")
            return target if target.startswith("xl/") else f"xl/{target}"
    raise ValueError(f"Workbook has no sheet named {sheet_name}")


def cell_column(reference: str) -> int:
    letters = "".join(character for character in reference if character.isalpha())
    value = 0
    for character in letters:
        value = value * 26 + ord(character.upper()) - ord("A") + 1
    return value - 1


def cell_value(cell: ET.Element, strings: list[str]):
    formula = cell.findtext(f"{{{MAIN_NS}}}f")
    if formula:
        match = HYPERLINK_RE.fullmatch(formula)
        if not match:
            raise ValueError(f"Unsupported formula in authoritative source: {formula}")
        return match.group(2)
    cell_type = cell.attrib.get("t")
    if cell_type == "inlineStr":
        return "".join(node.text or "" for node in cell.iter(f"{{{MAIN_NS}}}t"))
    raw = cell.findtext(f"{{{MAIN_NS}}}v")
    if raw is None:
        return None
    if cell_type == "s":
        return strings[int(raw)]
    if cell_type in {"str", "e"}:
        return raw
    number = float(raw)
    return int(number) if number.is_integer() else number


def read_sheet(path: Path, name: str) -> list[dict[str, object]]:
    with zipfile.ZipFile(path) as archive:
        strings = shared_strings(archive)
        rows: list[list[object]] = []
        for _, element in ET.iterparse(archive.open(sheet_path(archive, name)), events=("end",)):
            if element.tag != f"{{{MAIN_NS}}}row":
                continue
            values: list[object] = []
            for cell in element.findall(f"{{{MAIN_NS}}}c"):
                column = cell_column(cell.attrib["r"])
                if column >= len(values):
                    values.extend([None] * (column + 1 - len(values)))
                values[column] = cell_value(cell, strings)
            rows.append(values)
            element.clear()
    if not rows:
        raise ValueError(f"{path.name}/{name} is empty")
    headers = [str(value).strip() if value is not None else "" for value in rows[0]]
    return [{headers[index]: value for index, value in enumerate(row) if index < len(headers) and headers[index]} for row in rows[1:]]


def load_col_species(path: Path) -> tuple[bytes, bytes, list[dict[str, object]]]:
    compressed = path.read_bytes()
    source = gzip.decompress(compressed)
    records = [json.loads(line) for line in source.decode("utf-8").splitlines() if line]
    if len(records) != EXPECTED_COL_SPECIES or any(
        record.get("rank") != "species"
        or record.get("status") != "accepted"
        or str(record.get("sourceDatasetId")) != str(SOURCE_DATASET_KEY)
        for record in records
    ):
        raise ValueError("Viruses shard is not the strict 17,552-species COL26.8/ICTV MSL sector")
    if len({record["id"] for record in records}) != len(records) or len({record["scientificName"] for record in records}) != len(records):
        raise ValueError("COL26.8 Viruses shard has duplicate IDs or species names")
    return compressed, source, records


def source_file_ledger(files: list[dict[str, object]]) -> tuple[str, int]:
    data = "".join(json.dumps(item, ensure_ascii=False, separators=(",", ":")) + "\n" for item in files).encode("utf-8")
    return sha256(data), len(data)


def taxonomy(record: dict[str, object]) -> dict[str, object]:
    return {
        "realm": record.get("Realm"),
        "subrealm": record.get("Subrealm"),
        "kingdom": record.get("Kingdom"),
        "subkingdom": record.get("Subkingdom"),
        "phylum": record.get("Phylum"),
        "subphylum": record.get("Subphylum"),
        "class": record.get("Class"),
        "subclass": record.get("Subclass"),
        "order": record.get("Order"),
        "suborder": record.get("Suborder"),
        "family": record.get("Family"),
        "subfamily": record.get("Subfamily"),
        "genus": record.get("Genus"),
        "subgenus": record.get("Subgenus"),
    }


def isolate(record: dict[str, object]) -> dict[str, object]:
    isolate_id = str(record["Isolate ID"])
    accession = record.get("Virus GENBANK accession")
    return {
        "isolateId": isolate_id,
        "isolateUrl": f"https://ictv.global/id/{isolate_id}",
        "role": "exemplar" if record["Exemplar or additional isolate"] == "E" else "additional",
        "virusNames": record.get("Virus name(s)"),
        "abbreviations": record.get("Virus name abbreviation(s)"),
        "isolateDesignation": record.get("Virus isolate designation"),
        "genbankAccessions": accession,
        "accessionsUrl": f"https://www.ncbi.nlm.nih.gov/nuccore/{accession}" if accession else None,
        "genomeCoverage": record.get("Genome coverage"),
        "genome": record.get("Genome"),
        "hostSource": record.get("Host source"),
    }


def deterministic_gzip(data: bytes) -> bytes:
    compressed = bytearray(gzip.compress(data, compresslevel=9, mtime=0))
    if compressed[:2] != b"\x1f\x8b":
        raise ValueError("Python did not produce a gzip stream")
    compressed[9] = 255
    return bytes(compressed)


def build_snapshot(msl_path: Path, vmr_path: Path, species_path: Path) -> dict[str, object]:
    verify_source_file(msl_path, MSL_FILE)
    verify_source_file(vmr_path, VMR_FILE)
    species_compressed, species_source, species = load_col_species(species_path)
    msl = read_sheet(msl_path, "MSL")
    vmr = read_sheet(vmr_path, "VMR MSL41")

    if len(msl) != EXPECTED_ICTV_SPECIES or len(vmr) != EXPECTED_VMR_ISOLATES:
        raise ValueError("Pinned ICTV workbook row counts changed")
    msl_by_name = {str(record["Species"]): record for record in msl}
    msl_by_id = {str(record["ICTV_ID"]): record for record in msl}
    if len(msl_by_name) != len(msl) or len(msl_by_id) != len(msl):
        raise ValueError("MSL41.v1 species names or ICTV IDs are not unique")

    vmr_by_id: dict[str, list[dict[str, object]]] = defaultdict(list)
    for record in vmr:
        vmr_by_id[str(record["ICTV_ID"])].append(record)
    if set(vmr_by_id) != set(msl_by_id):
        raise ValueError("VMR does not cover every and only MSL41.v1 species")
    role_counts = Counter(record["Exemplar or additional isolate"] for record in vmr)
    if role_counts != Counter({"E": EXPECTED_EXEMPLARS, "A": EXPECTED_ADDITIONAL_ISOLATES}):
        raise ValueError("VMR exemplar/additional-isolate counts changed")

    col_by_name = {str(record["scientificName"]): record for record in species}
    if not set(col_by_name).issubset(msl_by_name):
        raise ValueError("A COL26.8 virus species lacks an exact current MSL41.v1 name")
    upstream_only = set(msl_by_name) - set(col_by_name)
    if upstream_only != EXPECTED_UPSTREAM_ONLY:
        raise ValueError(f"Unexpected ICTV species outside the COL26.8 Viruses shard: {sorted(upstream_only)}")

    output_records: list[dict[str, object]] = []
    for msl_record in msl:
        species_name = str(msl_record["Species"])
        ictv_id = str(msl_record["ICTV_ID"])
        isolates = vmr_by_id[ictv_id]
        if sum(record["Exemplar or additional isolate"] == "E" for record in isolates) != 1:
            raise ValueError(f"{ictv_id} does not have exactly one exemplar isolate")
        for vmr_record in isolates:
            if vmr_record["Species"] != species_name or taxonomy(vmr_record) != taxonomy(msl_record):
                raise ValueError(f"VMR taxonomy disagrees with MSL for {ictv_id}")
        col_record = col_by_name.get(species_name)
        output_records.append({
            "colId": col_record["id"] if col_record else None,
            "scientificName": species_name,
            "mappingStatus": "accepted" if col_record else "upstream-only",
            "mappingBasis": "exact-unique-current-species-name-and-ictv-id" if col_record else "no-col26.8-accepted-species-record",
            "ictvTaxonId": ictv_id,
            "ictvTaxonUrl": f"https://ictv.global/id/{ictv_id}",
            "taxonomy": taxonomy(msl_record),
            "genome": msl_record.get("Genome"),
            "lastChange": msl_record.get("Last Change"),
            "mslOfLastChange": msl_record.get("MSL of Last Change"),
            "proposalForLastChange": msl_record.get("Proposal for Last Change"),
            "isolates": [isolate(record) for record in sorted(isolates, key=lambda item: (int(item["Isolate Sort"]), str(item["Isolate ID"])))],
        })

    source_files = [MSL_FILE, VMR_FILE]
    ledger_sha256, ledger_bytes = source_file_ledger(source_files)
    return {
        "schemaVersion": 1,
        "crosswalkType": "release-pinned-official-virus-taxonomy-and-exemplar-metadata",
        "source": {
            "provider": "International Committee on Taxonomy of Viruses (ICTV)",
            "catalogueRelease": COL_RELEASE,
            "catalogueReleaseDate": COL_RELEASE_DATE,
            "checklistBankDatasetKey": CHECKLISTBANK_DATASET_KEY,
            "sourceDatasetKey": SOURCE_DATASET_KEY,
            "retrievedAt": RETRIEVED_AT,
            "informationUrl": "https://ictv.global/taxonomy",
            "citationUrl": "https://ictv.global/faq/cite",
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "citation": "International Committee on Taxonomy of Viruses (ICTV), Master Species List MSL41.v1 and Virus Metadata Resource VMR_MSL41.v1.20260729.",
            "files": source_files,
        },
        "matching": {
            "eligiblePredicate": "COL26.8 rank=species AND status=accepted AND sourceDatasetId=1014",
            "acceptedPredicate": "one exact case-sensitive scientificName match to current MSL41.v1, with one unique ICTV_ID shared by MSL and VMR",
            "redirectPredicate": "not used; no historical-name or synonym redirect is inferred",
            "ambiguousPredicate": "more than one exact current MSL row or conflicting ICTV IDs",
            "unmatchedPredicate": "no exact current MSL41.v1 species-name match",
            "withheldPredicate": "source sector is not ICTV MSL or source workbook identity/integrity cannot be proved",
            "normalization": "none",
        },
        "integrity": {
            "algorithm": "sha256",
            "officialFileLedgerBytes": ledger_bytes,
            "officialFileLedgerSha256": ledger_sha256,
            "colSpeciesShard": {
                "path": "data/catalogue-of-life/releases/2026-08-20/resource-packs/viruses/species-000.jsonl.gz",
                "bytes": len(species_compressed),
                "sha256": sha256(species_compressed),
                "sourceBytes": len(species_source),
                "sourceSha256": sha256(species_source),
            },
        },
        "counts": {
            "acceptedSpecies": EXPECTED_COL_SPECIES,
            "eligible": EXPECTED_COL_SPECIES,
            "accepted": EXPECTED_COL_SPECIES,
            "redirect": 0,
            "ambiguous": 0,
            "unmatched": 0,
            "withheld": 0,
            "officialSpecies": EXPECTED_ICTV_SPECIES,
            "upstreamOnly": len(upstream_only),
            "vmrIsolates": EXPECTED_VMR_ISOLATES,
            "exemplarIsolates": EXPECTED_EXEMPLARS,
            "additionalIsolates": EXPECTED_ADDITIONAL_ISOLATES,
        },
        "upstreamOnlySpecies": sorted(upstream_only),
        "records": output_records,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--msl", type=Path, required=True, help="Exact official MSL41.v1 XLSX")
    parser.add_argument("--vmr", type=Path, required=True, help="Exact official VMR_MSL41.v1.20260729 XLSX")
    parser.add_argument("--species-shard", type=Path, default=DEFAULT_SPECIES_SHARD)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    return parser.parse_args()


def main() -> None:
    options = parse_args()
    snapshot = build_snapshot(options.msl, options.vmr, options.species_shard)
    source = (json.dumps(snapshot, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8")
    compressed = compress_source(source)
    options.output.parent.mkdir(parents=True, exist_ok=True)
    options.output.write_bytes(compressed)
    counts = snapshot["counts"]
    print(f"Wrote {counts['officialSpecies']} ICTV species and {counts['vmrIsolates']} VMR isolate rows to {options.output}")
    print(f"Mapping partition: accepted={counts['accepted']} redirect=0 ambiguous=0 unmatched=0 withheld=0 upstream-only={counts['upstreamOnly']}")
    print(f"Compressed bytes={len(compressed)} sha256={sha256(compressed)}; source bytes={len(source)} sha256={sha256(source)}")


if __name__ == "__main__":
    main()
