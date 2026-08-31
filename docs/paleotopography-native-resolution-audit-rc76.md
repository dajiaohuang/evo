# PaleoDEM native-detail audit — rc75 baseline

Audit baseline: `origin/main` at `5dc5abc1f01f5abb8cb7a1d709c535259f2d7df8` (release `2026.08-static-v5-rc75`), checked 2026-08-31.

## Decision

No finer **scientific raster resolution** can be added deterministically from
the fixed, redistributable PaleoDEM source already in the repository. The pinned archive's
native grid is 0.1° (3601 × 1801 cells, integer metres), and rc75 already
publishes every one of its 109 nominal frames (0–540 Ma, 5 Ma cadence) in
`native-full`. Creating a 0.05° file by copying, interpolating or otherwise
resampling these cells would increase the byte count but would not add source
observations; it must not be described as finer terrain.

A separate HydroShare paleo-physiography collection does publish 0.05° goSPL
model outputs, but it is not currently eligible for Evo's default Web or
native bundles: its data licence is CC BY-NC-SA 4.0, the server publishes no
per-file checksum manifest, its 108 irregular ages do not match the 5 Ma
PaleoDEM contract, and the elevation-only NetCDF files total 11.23 GB. It is
tracked separately in [issue #167](https://github.com/dajiaohuang/evo/issues/167)
instead of being silently treated as a replacement source.

The current delivery split is therefore the strongest truthful option:

| Profile | Frames | Grid | Compressed grids | Purpose |
| --- | ---: | --- | ---: | --- |
| `web-preview` | 109 | 721 × 361, exact 0.5° every-fifth-cell decimation | 10,147,417 bytes | GitHub Pages / browser preview |
| `native-full` | 109 | 3601 × 1801, exact 0.1° source grid | 168,418,483 bytes | Android and iOS offline data |

The Pages profile remains below its paleogeography budget because it does not
ship the full grids. The native profile already retains the complete source
coverage and does not use the Pages preview as a fallback.

## Evidence and reproducibility

- Source: Scotese & Wright (2018), PALEOMAP PaleoDEM v2, Zenodo
  [`10.5281/zenodo.5460860`](https://doi.org/10.5281/zenodo.5460860), CC BY 4.0.
- Fixed archive: `207,273,848` bytes; official MD5
  `89eb50d8645707ab221b023078535bda`; SHA-256
  `ab360184d8260a815ef5ed6b8b4e0abdbf99ef5ee8aa87dfd070af323ceb42da`.
- `data/paleotopography/scotese-wright-2018-v2/manifest.json` records one
  source member for every age in `0, 5, …, 540 Ma`. Every member is
  `NETCDF4_CLASSIC`, 3601 × 1801, finite and exactly integral metres. The
  canonical native payloads total `1,413,817,418` decoded bytes and retain
  the source member and decoded SHA-256 values.
- `scripts/import-scotese-paleodem.py` is the deterministic importer and
  rejects any archive whose members, dimensions, coordinates, values or
  pinned archive checksums differ.
- `scripts/paleotopography-series.test.mjs` decompresses all 218 canonical
  payloads and proves every Web cell is the corresponding exact fifth source
  row/column. `scripts/finalize-mobile-build.mjs` requires all 109 full
  frames, the `native-full` profile, and the 168,418,483-byte grid total for
  the mobile build.

## Candidate review

| Candidate | Why it is not a compliant finer source | Status |
| --- | --- | --- |
| 0.05° nearest-neighbour or bilinear raster | Repeats or invents values between 0.1° source cells; no new evidence | Reject |
| Temporal interpolation between 5 Ma frames | Invents an intermediate surface and conflicts with the no-interpolation contract | Reject |
| CAO2024 geometry/observations | Vector geometry and typed observation points do not contain elevation or bathymetry | Reject as terrain source |
| [HydroShare paleo-physiography](https://www.hydroshare.org/resource/b3f1e3581d174bf58b00ba5672604710/) | 108 physical-model outputs at 0.05°, derived from Scotese–Wright and climate forcing; CC BY-NC-SA, 11.23 GB, irregular ages, no upstream checksums | Blocked for default redistribution; track as a possible opt-in research layer in #167 |
| Müller ocean-crust age/bathymetry | Ocean-only, younger than 140 Ma, and not a global land palaeotopography replacement | Defer as a separate layer |
| More stored tile levels | Re-encodes the same grid and would spend mobile/Pages budget without increasing source resolution | Reject |

## Best immediately actionable alternative

Keep `native-full` at the lossless 0.1° source grid and preserve the current
runtime contract: load only the selected frame, render it on demand, and use
the existing bilinear display sampling only as a visualization operation.
This delivers all available source detail to Android/iOS without inflating
Pages or claiming unsupported precision. A future *data* improvement should
start only after an immutable, app-compatible redistributable palaeotopography source with
cells finer than 0.1° (and a complete age/coverage inventory) is acquired.

If a visual-detail improvement is desired before that source exists, it must
be separately labelled as a derived visualization (for example, dynamic
shading from the unchanged 0.1° values), must not be called a finer DEM, and
must be evaluated against the native 800 MiB and Pages 650 MiB budgets. No
such derived layer is added by this audit.

## Acceptance gate for a future finer release

Before changing the profile or adding any finer grid, require an immutable
source URL and licence, complete frame/age inventory, per-frame dimensions
and coordinate checks, raw-value and decoded checksums, deterministic
regeneration, a Web budget report, and byte-identical Android/iOS inventory
checks. Until all of those are available, rc75's 109-frame 0.1°
`native-full` contract is the maximum defensible native terrain detail.
