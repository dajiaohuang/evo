# Orthoptera Species File authority-sidecar audit

Status: **independent official archive acquired and projected in RC105** on 2026-09-04. The public ChecklistBank dataset 1021 archive (Sep 2026, attempt 56, DOI `10.48580/d388.v56`) now supplies the source snapshot. All 30,859 scoped COL records have explicit outcomes, and 53 source-only accepted concepts are separate. See [current archive provenance and delivery](authority-archives-rc105.md).

The direct TaxonWorks API route below remains a **historical 2026-08-31 investigation**: the production host returned no HTTP response from this build environment. RC105 does not claim API pagination succeeded. It uses a complete separately retrieved official ColDP archive instead; this is not a crosswalk derived only from the existing COL sector. The API-specific proposed acquisition and earlier failure record below are retained as history, not the current archive status.

## Exact COL26.8 scope

The relevant package is mixed and must not be described as fully covered by an Orthoptera sidecar.

| Scope | Pinned identifier | Strict accepted species |
| --- | --- | ---: |
| `crustaceans-insects` package | package owner | 1,049,133 |
| Orthoptera | COL usage `CJBKK`, `Orthoptera Olivier, 1789` | 30,859 |
| Rest of package | outside this proposed sidecar | 1,018,274 |

Orthoptera represents 2.9414% of the package's accepted-species inventory. The proposed authority coverage is therefore only “all 30,859 strict accepted COL26.8 species below the exact Orthoptera root”, never “all insects”, “the million-species package”, or “complete Orthoptera known to science”.

The enumeration traversed the pinned COL hierarchy using `parentId`, starting at `CJBKK`, and retained only `rank=species AND status=accepted`. All 30,859 species and all 37,877 hierarchy nodes in that subtree have `sourceDatasetId=1021`, the COL sector titled “Orthoptera Species File”. Every sector node closes through its stored parent chain to `CJBKK`; there are zero sector species outside that subtree and zero missing parents.

Pinned inputs:

| Path | Bytes | SHA-256 |
| --- | ---: | --- |
| `data/catalogue-of-life/releases/2026-08-20/registry/manifest.json` | 733,359 | `8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151` |
| `data/registry/package-species-coverage.json` | 31,602 | `6fe5871f3d5bd9a332fc874af6226221379adf3cee7871a3237fa9376258afe0` |
| `data/catalogue-of-life/releases/2026-08-20/registry/sources.json` | 134,189 | `6a82d43afeb975ac483db4459bdc03bfd9131ff0a28cf18cae61a06f55508c6c` |

These inputs establish the proposed COL scope only. They are not a substitute for a new OSF/TaxonWorks snapshot.

## Official licence evidence

The live [OSF home page](https://orthoptera.speciesfile.org/) and [help page](https://orthoptera.speciesfile.org/help) state that site content is CC BY, except where otherwise noted. The site separately states that images default to CC BY-NC-SA; the proposed nomenclatural sidecar would not copy images, sounds, specimens, distributions, bibliography or narrative text.

The immutable evidence used for review is the official `sfg-taxonpages/orthoptera` setup commit [`f017e83e101b127152917cf0c87f4d8d6608e353`](https://github.com/sfg-taxonpages/orthoptera/commit/f017e83e101b127152917cf0c87f4d8d6608e353):

| Official file | Bytes | SHA-256 | Evidence |
| --- | ---: | --- | --- |
| [`config/copyright.yml`](https://github.com/sfg-taxonpages/orthoptera/blob/f017e83e101b127152917cf0c87f4d8d6608e353/config/copyright.yml) | 281 | `34e6425a01b9412aaa5417cb5b65bf3999ae44a89a100b282caa39e5d77cf59c` | CC BY 4.0 link and attribution statement |
| [`pages/help.md`](https://github.com/sfg-taxonpages/orthoptera/blob/f017e83e101b127152917cf0c87f4d8d6608e353/pages/help.md) | 1,933 | `5cb99d2769924275cf053db7ff8612db9f103ef74a2297959cb41b78607c5611` | OSF is curated in TaxonWorks; public view provides DwC/CSV downloads; valid and invalid names and OTUs are distinct |
| [`pages/components/Section/SectionData.vue`](https://github.com/sfg-taxonpages/orthoptera/blob/f017e83e101b127152917cf0c87f4d8d6608e353/pages/components/Section/SectionData.vue) | 3,536 | `10230b07e085bf77f879412893c12d21f83a28f1934e46bf3943e100a844107e` | Pins the Orthoptera TaxonWorks root ID used for descendant species queries |
| `config/api.yml` | 85 | `751d5c8c95fb49f83aa31f57a77c9314a38b57be0accfc0e07c5802cc0070bf5` | Pins the production API base and a public-project access credential; the credential value is deliberately not copied into this repository |

Conclusion: minimal derived names, authorship, validity relationships and identifiers can be redistributed under CC BY 4.0 with OSF attribution. That conclusion does not extend to separately licensed media. It also does not turn the TaxonWorks software's MIT licence into a data licence.

## Official API contract

The official TaxonWorks API documentation is pinned at commit [`397ca02bcb5721d7fd0820b6375513d4480001e5`](https://github.com/SpeciesFileGroup/taxonworks_api/commit/397ca02bcb5721d7fd0820b6375513d4480001e5):

| Specification | Bytes | SHA-256 | Relevant contract |
| --- | ---: | --- | --- |
| [`taxon_name.yaml`](https://github.com/SpeciesFileGroup/taxonworks_api/blob/397ca02bcb5721d7fd0820b6375513d4480001e5/docs/openapi/taxon_name.yaml) | 45,670 | `b28ae82a5d8a9479c7f0dc2236eaeb892c90f4dad226dc310249890fd886be5d` | Paginated `taxon_names`; maximum `per=10000`; `id`, `cached`, `cached_author_year`, `cached_is_valid`, and explicit `cached_valid_taxon_name_id` |
| [`otu.yaml`](https://github.com/SpeciesFileGroup/taxonworks_api/blob/397ca02bcb5721d7fd0820b6375513d4480001e5/docs/openapi/otu.yaml) | 45,153 | `4482cf6cf28119b23c9e21c2afdad71165c8d6db5f5aa30c7ec7200f3d051255` | Paginated `otus`; integer OTU `id`, linked `taxon_name_id`, `global_id`, and `extend[]=taxon_name` |
| [`download.yaml`](https://github.com/SpeciesFileGroup/taxonworks_api/blob/397ca02bcb5721d7fd0820b6375513d4480001e5/docs/openapi/download.yaml) | 7,476 | `afc8051387de1f78c8888dba986968999321faea34395920325ccc8e3e0186ce` | A complete DwC archive can be generated for a public project, but downloads expire and are not immutable releases |

The production database is live and the API contract provides no immutable OSF taxonomic release identifier. Any successful acquisition must therefore be labelled a **retrieval-pinned live snapshot**, not an OSF release. The TaxonWorks software version and API-documentation commit describe software contracts; neither freezes OSF row content.

The specifications describe TaxonName and OTU IDs as unique record identifiers, but they do not promise that IDs or species concepts are immutable across edits, merges or future snapshots. A future sidecar may preserve both identifiers as exact locators for the pinned retrieval; it must not claim guaranteed cross-release concept identity.

Authentication uses the public project token intentionally shipped by OSF's official TaxonPages configuration. It is still credential-shaped material and must not be committed, logged, embedded in request URLs, or copied into a source ledger. A future fetcher should accept it at execution time, while the ledger records the credential-free URL and the pinned public configuration file hash above.

## Intended complete acquisition

After connectivity is restored, acquisition must record every credential-free page URL, retrieval timestamp, response byte count, response SHA-256, `X-Page`, `X-Per-Page`, `X-Total` and `X-Total-Pages`. Page numbers stop only at the server-declared total, and aggregate hashes are computed over the ordered response ledger.

Required query families, with `page=N` enumerated completely and the project token supplied only at execution time, are:

```text
https://sfg.taxonworks.org/api/v1/taxon_names.json?taxon_name_id%5B%5D=913531&descendants=false&rank%5B%5D=NomenclaturalRank%3A%3AIczn%3A%3ASpeciesGroup%3A%3ASpecies&per=10000&page=N
https://sfg.taxonworks.org/api/v1/otus.json?taxon_name_id%5B%5D=913531&descendants=true&extend%5B%5D=taxon_name&per=10000&page=N
https://sfg.taxonworks.org/api/v1/downloads/dwc_archive_complete
```

`913531` is the Orthoptera TaxonWorks taxon-name identifier used by OSF's pinned public configuration. The first query intentionally includes valid and invalid species-group names so official synonym/current-name relationships remain available. The second preserves OTU IDs separately from nomenclatural TaxonName IDs. The expiring DwC archive is supplemental recovery evidence, not the canonical source unless its returned metadata, bytes and `sha2` are successfully captured.

## Matching boundary for a future implementation

Only the following outcomes are permitted:

- `accepted`: one case-, diacritic- and punctuation-preserving exact COL current name equals one OSF valid current name;
- `official-current-name-redirect`: one exact COL name equals one OSF invalid name whose official `cached_valid_taxon_name_id` points to one retrieved valid target;
- `ambiguous`: permitted exact evidence has multiple candidate concepts or an official target cannot be resolved uniquely;
- `unmatched`: no permitted exact current or invalid-name evidence exists;
- `withheld`: a required OSF identifier, valid target, pagination page, response checksum or scope assertion is absent or internally inconsistent;
- `upstream-only`: an OSF valid species has no permitted COL link and retains a null COL ID.

No fuzzy, edit-distance, case-folded, diacritic-stripped, token-reordered, genus-substitution, gender-ending, common-name, higher-rank or external-checklist inference is allowed. TaxonName IDs and OTU IDs remain separate. An exact name link is not proof that COL and OSF use identical species concepts.

## Blocking retrieval evidence

At `2026-08-31T03:49:32.237Z`–`2026-08-31T03:49:53.473Z`, two minimal authenticated requests were attempted after loading the access credential in memory from the pinned official configuration:

| Credential-free request | Result | Elapsed | Response bytes / checksum |
| --- | --- | ---: | --- |
| `https://sfg.taxonworks.org/api/v1/taxon_names.json?validity=true&rank%5B%5D=NomenclaturalRank%3A%3AIczn%3A%3ASpeciesGroup%3A%3ASpecies&per=1&page=1` | no HTTP response; `UND_ERR_CONNECT_TIMEOUT` | 10,476 ms | none |
| `https://sfg.taxonworks.org/api/v1/downloads/dwc_archive_complete` | no HTTP response; `UND_ERR_CONNECT_TIMEOUT` | 10,611 ms | none |

Separate IPv4 `curl` attempts to the production API, the current OSF site, the retired IPT host and the archived OSF host also timed out without HTTP status or response bytes. GitHub-hosted official configuration and API specifications remained reachable. Because zero TaxonWorks data responses were acquired, there is no honest response SHA, complete pagination ledger, upstream-only inventory, accepted redirect set or match-status distribution to publish.

## Unblock acceptance criteria

A later data-only change may proceed only when all of these are met:

1. every page in both official query families returns successfully and agrees with its pagination headers;
2. the credential is never stored or logged, while credential-free URLs and all response checksums are retained;
3. the live snapshot timestamp, API-documentation commit, OSF configuration commit and CC BY evidence are pinned;
4. every one of the 30,859 COL Orthoptera species receives exactly one explicit outcome, and all OSF-only valid species remain a separate null-COL partition;
5. redirects come only from `cached_valid_taxon_name_id`; unmatched, ambiguous and withheld rows are never forced through fuzzy matching;
6. deterministic package-local shards have non-overlapping `colId` ranges and a test proves that each COL ID selects exactly one shard;
7. the descriptor and identical shard bytes are contractually reserved for the later Web, package ZIP, browser offline, Android and iOS release integration;
8. no statement expands the result from Orthoptera to the remaining 1,018,274 package species, all insects, fossils, phylogeny, ecology, distribution, complete history or expert review.
