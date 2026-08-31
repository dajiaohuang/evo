# Mammal Diversity Database v2.5 redistribution audit

Audit date: 2026-08-31

Decision: **do not bundle MDD records or an MDD-derived COL crosswalk in Evo Atlas until the American Society of Mammalogists or the MDD release metadata supplies an explicit data-reuse licence or written redistribution permission.** Public download access and a software-repository licence are not enough to establish that permission.

This decision blocks only the proposed MDD nomenclatural sidecar. It does not change the existing, separately licensed COL26.8 registry or any of the six mammal packages.

## Release identity and reproducibility

The [official MDD site](https://www.mammaldiversity.org/) identifies v2.5 as the current release, dated 2026-07-28, with 6,904 living, domestic or recently extinct accepted species. Its [release page](https://www.mammaldiversity.org/releases/) points to the fixed Zenodo record [10.5281/zenodo.21654811](https://doi.org/10.5281/zenodo.21654811) and to the website repository's current `MDD.zip` download.

The fixed Zenodo record reports these v2.5 files and MD5 checksums:

| File | Bytes | Zenodo MD5 |
| --- | ---: | --- |
| `MDD_v2.5_6904species.csv` | 9,303,589 | `533e662fd5b8f66a5f56c191e7efac44` |
| `META_v2.5.csv` | 28,196 | `2c013cde9933dd2b7dd93e990df49006` |
| `Species_Syn_v2.5.csv` | 68,049,580 | `018ab2df0e2f18b7aa032965511e3e11` |
| `TypeSpecimenMetadata_v2.5.csv` | 18,862 | `17065428c5163a058c93ecf2fbb071b9` |
| `Diff_v2.4-v2.5.csv` | 29,755 | `24fe2a885701227f9f21084681819261` |
| `Diff-AllChanges_v2.4-v2.5.csv` | 1,884,336 | `07f99483e16693d6c03bb0de2bfc36be` |
| `release.toml` | 544 | `6670ccf2f7ff84134866813a89a22c4e` |

For this audit, the official GitHub archive was downloaded from the URL linked by the MDD site. It was a 15,046,679-byte ZIP with SHA-256 `9ec55472ffd7237131b1bda1284bc4d8ba6ad22ad6e83104d23c193cc7008399`. GitHub `master` resolved to commit `749c2de16a949099cfc13ccbd2b86d427641e844`; the archive was Git blob `7b7dd572279b89dffeca419854e2562fb1d23879`.

The archive's principal files matched the Zenodo byte sizes and MD5 values. Locally computed SHA-256 values were:

| Archive member | SHA-256 |
| --- | --- |
| `MDD_v2.5_6904species.csv` | `0d07a7e9409712fa86c1e3afadcf4c67bf4f9e16d5693a878e11ec1bf6860493` |
| `META_v2.5.csv` | `de6efba79c560025582e10382a153ff400eae7123ff7f8881d6aa1a1b4d0c111` |
| `Species_Syn_Current_v2.5.csv` | `6467d05eef4a45fddf2cab97fcd6dd19aeb1b4da3d70ff6d23e92c99351cdfd4` |
| `TypeSpecimenMetadata_v2.5.csv` | `e0dd7cea65353317e91ae7ff6dc588831c8823281280de664005fb331b1f6c6a` |
| `Diff_v2.4-v2.5.csv` | `030ec671e3b17001d98193ca108c37111966466b12da98a7822bee2b33907e1e` |
| `Diff-AllChanges_v2.4-v2.5.csv` | `852dc1c3694744458ec5483c4e23d39dd955a53deb9cea57e31f9038d419f51f` |
| `release.toml` | `c2b5320a5cca4e581382b16c4f0c08c2c5b8d776d85f6b5a12215c3daa13398f` |

The archive calls the synonym file `Species_Syn_Current_v2.5.csv`; the fixed Zenodo record and `release.toml` call it `Species_Syn_v2.5.csv`. The contents have the same byte length and Zenodo MD5.

## Official species fields

`MDD_v2.5_6904species.csv` has exactly 6,904 data rows and 52 fields:

```text
sciName, id, phylosort, mainCommonName, otherCommonNames, subclass,
infraclass, magnorder, superorder, order, suborder, infraorder, parvorder,
superfamily, family, subfamily, tribe, subtribe, genus, subgenus,
specificEpithet, authoritySpeciesAuthor, authoritySpeciesYear,
authorityParentheses, originalNameCombination, authoritySpeciesCitation,
authoritySpeciesLink, typeVoucher, typeKind, typeVoucherURIs, typeLocality,
typeLocalityLatitude, typeLocalityLongitude, nominalNames, subspecies,
taxonomyNotes, taxonomyNotesCitation, distributionNotes,
distributionNotesCitation, subregionDistribution, countryDistribution,
continentDistribution, biogeographicRealm, iucnStatus, extinct, domestic,
flagged, CMW_sciName, diffSinceCMW, MSW3_matchtype, MSW3_sciName,
diffSinceMSW3
```

`META_v2.5.csv` supplies the official field descriptions. `release.toml` pins the release name, v2.5 version, 2026-07-28 release date, species filename, synonym filename and Zenodo citation. None of these files contains a licence statement.

## Licence finding

The redistribution permission is unresolved:

1. The [Zenodo v2.5 record](https://zenodo.org/records/21654811) exposes the files and labels the record open, but its `Rights / License` field is empty. The official Zenodo API metadata likewise has no `rights` value.
2. `release.toml`, `META_v2.5.csv` and the other release members contain no licence identifier, licence URL or reuse terms.
3. The current MDD site footer says `© 2026 The MDD Team. All rights reserved.`
4. The MDD website source repository carries an MIT licence for “this software and associated documentation files.” It does not explicitly license the MDD v2.5 dataset, and the contrary website notice makes extending that software licence to the data unsafe.

Therefore the release is reproducibly downloadable but not demonstrably redistributable. Evo Atlas must not copy MDD rows, synonym rows, descriptions, notes or an MDD-derived row-level mapping into its CC BY compilation on this evidence.

## Effect on the proposed six-package sidecar

The COL26.8 ownership projection currently assigns accepted species to the six mammal packages as follows:

| Package | COL26.8 accepted species |
| --- | ---: |
| `mammal-origins` | 0 |
| `perissodactyla` | 19 |
| `cetartiodactyla` | 503 |
| `primates` | 530 |
| `carnivora` | 310 |
| `other-mammals` | 5,099 |

`mammal-origins` is intentionally a zero-assignment fossil/navigation boundary. The other five packages contain 6,461 accepted COL26.8 species. No row-level COL-to-MDD match was generated or retained after the licence gate failed, so this audit makes no claim about matched, renamed, ambiguous or unmatched totals.

If reuse permission is later established, the crosswalk must remain deterministic and conservative:

- `accepted-exact`: one COL accepted scientific name equals one MDD accepted `sciName` after only the documented underscore-to-space representation conversion;
- `renamed-exact`: the COL accepted name equals one official MDD synonym that resolves to exactly one accepted MDD ID;
- `ambiguous`: an exact accepted or synonym name resolves to more than one MDD concept, or exact evidence conflicts;
- `unmatched`: neither official accepted nor synonym table contains the exact name;
- no edit-distance, phonetic, token, genus substitution or other fuzzy match is permitted.

Every output row would need both source identifiers, both verbatim names, status, matching rule, package ownership and the fixed release/checksum provenance. Ambiguous and unmatched rows must remain first-class outputs rather than being forced to a match.

## Unblocking condition and alternative

Preferred unblock: obtain an explicit data licence or written permission from the ASM/MDD team that covers redistribution and publication of the v2.5 species and synonym fields. The fixed Zenodo record should ideally name a standard licence such as CC BY 4.0 or CC0. Until that happens, a links-only MDD citation may be shown, but no MDD-derived sidecar should ship.

The strongest licence-safe alternative found is the [Integrated Taxonomic Information System](https://www.itis.gov/). ITIS describes its complete database as an authoritative, literature-referenced taxonomy and publishes it under [CC0/public-domain terms](https://www.itis.gov/citation.html), with full monthly database downloads and MD5 validation files. An ITIS sidecar could pin a dated full export, retain TSNs and review indicators, and use the same exact-only status model. It must be labelled a general expert-curated taxonomic reference, not an equivalent replacement for the mammal-specialist MDD.

COL26.8 remains the preferred release-scoped baseline already in Evo Atlas: it is pinned, checksummed and licensed CC BY 4.0. ITIS should be added only if its independent TSN/review metadata provides user value beyond that existing baseline.
