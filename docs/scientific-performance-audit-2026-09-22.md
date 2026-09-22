# Scientific data and computation audit — 2026-09-22

Baseline: `a420ec8ec2bf1fb42e0047ec8c80c65b117d574d`, dataset RC148.
Corrections are projected into RC149. Deployment and release publication remain
paused. This audit checks source identity, data transformations, numerical
contracts and runtime behavior; it does not confer external expert review.

## Coverage and evidence

| Area | Scope checked | Result and boundary |
| --- | --- | --- |
| Canonical data | 1,440 manifest checksums; schemas, IDs, package ownership, translations, graph continuity, references and review contracts | Existing `validate-data` and all platform validators pass. A digest verifies identity, not scientific truth. |
| Occurrences | All 13,600 records across 12 period files | 13,600 unique IDs; 0–538.8 Ma envelope; all retained reconstruction-model labels are `pbdb:gplates`. Age overlap, coordinate pairs, index membership and provenance checks pass. This remains a bounded, non-random API-prefix sample. |
| Geological time | All 165 units; fresh official 2026/06 RDF replay for 139 epochs/ages; major boundaries against the official PDF | Replay produces identical JSON. Anisian 247.0 Ma, Olenekian 250.8 Ma and Wuchiapingian 259.857 ± 0.084 Ma match the chart. Existing documented Ludlow/Aquitanian RDF-to-PDF corrections remain explicit. Numerical boundaries are display values, not replacements for GSSPs. |
| Evidence and content | 1,309 claims, 486 references, 417 range records, 403 navigation entities, 133 profiles, 208 events, 29 published stories and 3 blocked drafts | Checked linkage/locators, review-version DOI consistency, bilingual coverage and available/withheld boundaries. This is not a new full-text adjudication of every claim. Scientific review states were not promoted. |
| Bibliographic identity | All 469 references carrying a DOI | 464 resolve through Crossref and 5 through DataCite. Nine initial rate-limit responses succeeded on a paced retry. Two reference identity errors and four stale claim audit markers were corrected below. The 17 entries without a DOI retain their existing source links; they are not counted as DOI-verified. |
| CAO model and observations | Six geometry series/1,889 frames; all 44,175 observation records | 41,320 have reconstructed coordinates, 2,855 remain raw-only. All 206 reconstructed magnetic poles contain pole and sample-site positions; all 41,114 other reconstructed records contain sample positions. No cross-role fallback is exercised by the current data. Source ages, out-of-model records and three missing plate circuits remain explicit. |
| PALEOMAP elevation | All 109 frames, 706,908,709 int16 metre cells | Recomputed every decoded SHA-256 and every min/max. Recreated all 78,676,309 preview cells by the recorded stride: every preview digest matches. Three canonical files use Brotli and 106 use gzip; the audit follows metadata rather than filename assumptions. |
| Spatial and temporal computation | Modern/paleo separation, antimeridian clipping, inverse projection, Equal Earth area behavior, midpoint diversity bins, nearest-frame selection, tree modes/calibrations | Focused regression suites pass. No conversion of fossil minima to origins, navigation hierarchy to inferred phylogeny, or unlike divergence estimates to one synthetic clock. |
| Query/export/SQL | Truncated query bundles, numeric aggregates, quoted scientific text and engine lifecycle | Fixed aggregate scope and SQL text corruption. Actual Chromium + DuckDB-Wasm execution preserves a name containing apostrophes/comment markers and returns the expected count/sum/mean to 1e-12 tolerance. |
| Catalogue and backend | Exact-name/homonym contracts, worker queries, release-pinned hierarchy, source ownership, packed tree index and bounded shard cache | No new scientific interpretation is inferred from name matches. Largest measured search shard: 67,440 rows; 99 warm prefix queries had 1.62 ms median / 3.39 ms P95 locally. No additional indexing complexity was introduced for that measured workload. |

Official time-scale evidence: [ICS chart 2026/06](https://stratigraphy.org/ICSchart/ChronostratChart2026-06.pdf)
and [ICS machine-readable chart](https://github.com/i-c-stratigraphy/chart/blob/main/chart.ttl).
The current official PBDB service source documents default `gplates` coordinates
at the collection age midpoint; this supports the retained midpoint convention,
but does not establish that PBDB uses the CAO2024 model.
[PBDB CollectionData source](https://github.com/paleobiodb/data_service/blob/master/lib/PB2/CollectionData.pm).

All 1,889 CAO geometry payloads were also decoded: compressed byte counts and
SHA-256 values, declared feature counts, reconstruction ages and layer identities
match their provenance. All 574,469 features and 31,957,478 coordinate positions
have finite values within longitude/latitude bounds. These checks establish
payload integrity and coordinate validity, not independent model calibration.

## Corrected scientific provenance

1. `servais-2010-gobe` pointed to `10.1111/j.1502-3931.2009.00184.x`, a paper
   about tremarctine bears. The matching GOBE review is
   `10.1016/j.palaeo.2010.05.031`. Both the reference and its claim audit marker
   now identify the review. [Author institution record](https://durham-repository.worktribe.com/output/1510368/the-great-ordovician-biodiversification-event-gobe-the-palaeoecological-dimension).
2. `takezaki-nishihara-2016-coelacanth` had the title of the authors' later
   lungfish study attached to the 2016 DOI. The title now matches
   `10.1093/gbe/evw071`; the locator identifies its outgroup, branch-length and
   amino-acid-frequency analysis. The existing bounded topology statement is
   retained. [2016 primary paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC4860700/).
3. The Buriolestes and Paskov-wing claim audit markers contained unrelated or
   obsolete DOIs despite correct supporting-reference links. They now identify
   `10.1016/j.cub.2016.09.040` and `10.1016/j.geobios.2003.11.006`, respectively.
   [Cabreira et al.](https://doi.org/10.1016/j.cub.2016.09.040),
   [Prokop et al.](https://doi.org/10.1016/j.geobios.2003.11.006).
4. Tyrannosaurus feeding and Archaeopteryx flight claims had stale Horner and
   Rauhut audit markers. Their existing support links and bounded statements
   correspond to Gignac/Erickson 2017 and Voeten et al. 2018; audit markers now
   agree. [Osteophagy paper](https://www.nature.com/articles/s41598-017-02161-w),
   [Wing-bone geometry paper](https://www.nature.com/articles/s41467-018-03296-8).

Other DOI discrepancies were inspected rather than automatically replaced:
supplementary dataset DOIs and errata are legitimate distinct records; legacy
DOIs can contain semicolons. ICS's chart version differs from its background
article year. Ford/Benson's article was online in 2019 but belongs to the 2020
volume; Brauckmann/Zessin is a 1989 article digitized later. Shortened titles
that still identify the same work were not treated as new scientific errors.

## Calculation and performance repairs

### Query evidence bundle

`summary.json` now exports the complete matched-record statistics, period
counts and top names, with explicit `all-matched-before-limit` scope. Row files
remain `returned-after-limit`; GeoJSON further requires a valid coordinate
pair. The SVG states its denominator and can be reproduced from the exported
summary. Methods explain that source-period counts differ from midpoint
rebinning, and replaying a truncated row export alone cannot reproduce the
full-match aggregates. The summary participates in the bundle checksums.

Reference selection uses a set of referenced IDs instead of rescanning every
returned record for each bibliography entry.

### SQL text

Validation now distinguishes executable tokens from single/double/dollar-quoted
text, escape strings, line comments and nested block comments. Names such as
`O'Brien -- Basin; /* sample */` are preserved. Unterminated constructs and
multiple statements fail explicitly. Mutation/extension-management restrictions,
preview limits, cancellation and timeouts remain enforced.

Actual Chromium/DuckDB-Wasm MVP check with two fixture occurrences returned:
count `2`, age sum `0.375`, mean `0.037500000000000006`; ordinary floating-point
rounding is tested with a tolerance, not represented as exact decimal arithmetic.
This check exercises the real browser engine, not the lifecycle mocks.

### Terrain color writes

The rasterizer writes interpolated RGB channels directly into the output buffer,
eliminating a temporary RGB array per sampled pixel. Projection, clipping,
bilinear elevation sampling, palette thresholds and rounding are unchanged.

Paired local measurement: Windows, Node 24.14.1, actual 3,601 × 1,801 Holocene
grid, output 1,000 × 667, two projections and three camera positions; two warmup
rounds then 18 measurements per implementation, alternating execution order.

| Work | Before median / P95 | After median / P95 | Fidelity |
| --- | ---: | ---: | --- |
| Terrain rendering | 152.38 / 248.97 ms | 124.73 / 216.70 ms | All 30 paired image hashes identical, including warmup |
| Citation selection, 5,000 rows / 486 references | 17.48 / 18.40 ms | 0.20 / 9.67 ms | Identical selected reference IDs |

These are CPU measurements on this host, not device/browser frame-rate promises.
The worker already coalesces camera updates and rejects obsolete images; those
semantics remain intact. No scientific resolution was reduced for speed.

## Closed PR data reconciliation

All eight closed, unmerged PRs were fetched by their GitHub head refs and compared
against main. Original archive/metadata blobs are retained. Renamed/moved gzip
and JSONL projections were decoded before comparison; file absence at an old
path was not treated as data loss.

| PR / source | PR head | Source-name identities present in main | Result |
| --- | --- | ---: | --- |
| [#317](https://github.com/dajiaohuang/evo/pull/317), Nemys | `5b0aef7e2a88223d801aa06394b53d880394f1b5` | 20,810 | All 19,604 COL IDs retained. Eighteen formerly unmatched rows now match; redundant source-only copies removed. |
| [#318](https://github.com/dajiaohuang/evo/pull/318), Priapulida/Gnathostomulida | `c9db3c1b61da312bdf703faf628bb8d3e42f1cfd` | 23 / 100 | Rows identical after the accepted-shard rename. |
| [#319](https://github.com/dajiaohuang/evo/pull/319), ITIS | `b90b6eb5718c92d76f3a24ca05f7c9f53f867247` | All retained files | All 679 changed data-file blobs identical. |
| [#320](https://github.com/dajiaohuang/evo/pull/320), WSC | `670d5f8f835fc17101b875ed42b408fa3047f049` | 53,400 | All 53,353 COL IDs and row contents retained under trilobites-chelicerates. |
| [#321](https://github.com/dajiaohuang/evo/pull/321), MDD/IOC | `b3c7a8bc269f029fff9df0f6923bda7d4139065e` | 6,801 / 11,250 | All 6,461 / 11,044 COL IDs retained in owning packages; raw blank statuses and matching-basis corrections retained. |
| [#322](https://github.com/dajiaohuang/evo/pull/322), Reptile Database | `bfeabb627b0f8b98b4a78415f08031722dfb62a9` | 27 / 12,623 | All source names and 27 / 12,622 COL IDs retained; row data identical. |
| [#323](https://github.com/dajiaohuang/evo/pull/323), arthropod evidence | `909121e6df9b8c9b02d8de78f495cc5807106d81` | All changed claims/profiles/ranges | Nine changed claim records and two profiles present; field links retained; research scenes have more specific display labels. |
| [#324](https://github.com/dajiaohuang/evo/pull/324), mollusc/brachiopod evidence | `e3b6b668a6e5959da7ca8289e6463ad38bdaa8d2` | All changed claims/profiles/ranges | Seven changed claim records and two profiles present; translations and scenes retained. |

No unique source identity, COL ID, claim, profile or research scene was missing.
Consequently this audit does not restore obsolete partitions or duplicate
records. Generated registry and package projections continue to come from
canonical inputs.

## Validation and remaining boundaries

During editing: 39 targeted Lab/SQL tests, 47 numerical/map/tree tests, TypeScript
checking, full data/platform validation and review freshness checks. New tests
first reproduced the SQL and missing-summary failures.

Final code/data head: `cd8d7b916212a788621c4b53bac7e4d463b581a4`. One full CI
cycle passed without reruns:

- [CI](https://github.com/dajiaohuang/evo/actions/runs/35738801263): 173 unit-test
  files / 742 tests, 127 Web browser tests and 39 reading-edition tests; Go vet
  and race tests; Windows determinism, data and type checks. All three jobs pass.
- [Android](https://github.com/dajiaohuang/evo/actions/runs/35738801232): APK
  builds and 62 full-data/offline-SQL browser tests pass.
- [iOS](https://github.com/dajiaohuang/evo/actions/runs/35738801261): five hosted
  AppTests and unsigned archive build pass.

Local full-app and reading-edition builds also pass. Both preview release
descriptors identify RC149 and this code/data head; 7,011 reading-edition HTML
pages pass the link/source checks. The final follow-up commit changes only this
audit report (CI receipts and the independently changed issue status), so it
does not repeat the full CI cycle. Native CI is not physical-device acceptance.

The 24 package review states are unchanged: 23 not-reviewed; Perissodactyla's
existing in-review snapshot is stale and remains disclosed. This automated audit
is not a claim that every scientific statement has received independent expert
or complete new full-text review. The approximately 2.18 million accepted names
remain a nomenclatural catalogue, not 2.18 million scientific dossiers.

[Issue #167](https://github.com/dajiaohuang/evo/issues/167) was closed on
2026-09-22 at 12:28 UTC. Its closing state does not supply the missing permission
and full-resolution source-integrity evidence described in the existing issue
comments. No new grant or full-source manifest was found during this audit;
the separate 0.05° palaeophysiography layer therefore remains outside the
unrestricted app bundle. The verified PALEOMAP and CAO datasets above do not
resolve that dependency. At the final repository check, no issues or PRs were
open. Live deployment and release publication were not performed.
