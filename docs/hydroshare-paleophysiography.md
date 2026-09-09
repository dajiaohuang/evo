# HydroShare palaeophysiography research preview

Issue [#167](https://github.com/dajiaohuang/evo/issues/167) evaluates the
HydroShare **Paleo-Physiography Elevation-only Dataset** (resource
`b3f1e3581d174bf58b00ba5672604710`). The public resource page identifies the
authors as Salles, Husson, Lorcery and Halder Boggiani (2022), supplies a
CC BY-NC-SA 4.0 notice, and exposes the 108 irregular-age NetCDF frames through
the THREDDS/OPeNDAP service.

## What is uploaded

The full source is about 11.2 GB and is not copied into Evo. The companion
research asset contains one deterministic preview for each of the 108 source
ages (0–541 Ma):

1. request `z{age}Ma.nc` from the public NCSS endpoint with `var=z`,
   `horizStride=10` and `accept=netcdf`;
2. verify the 721 × 361, 0.5° global coordinate grid and finite `z` values;
3. cast the source float64 values to little-endian float32 and gzip the
   unchanged row-major cell order;
4. retain source-response and preview SHA-256 values, dimensions, coordinate
   order, source metadata and the maximum cast error in
   [`manifest.json`](../data/sources/hydroshare-paleo-physiography-v1/manifest.json).

The exact importer is
[`scripts/import-hydroshare-paleophysiography.py`](../scripts/import-hydroshare-paleophysiography.py)
and its focused test is
[`scripts/import-hydroshare-paleophysiography.test.py`](../scripts/import-hydroshare-paleophysiography.test.py).

## Rights and scientific boundary

The source and derivative are distributed under CC BY-NC-SA 4.0. This permits
sharing and adaptation only for non-commercial purposes, with attribution and
the same licence for adaptations. The preview is therefore a separate licence
boundary; it is not folded into Evo's default CC BY-4.0 compilation, runtime
manifest, Pages bundle, Android package or iOS package. The source page notes
that the owner account is no longer active; the public licence notice is
retained as the rights evidence, and CUAHSI remains the contact for any future
relicensing or owner confirmation.

The result is a goSPL landscape-evolution model output, not a direct
observation, unique reconstruction or uncertainty surface. It has irregular
ages and must not replace the 109-frame, five-million-year PALEOMAP contract.
Scotese & Wright (2018) and Valdes et al. (2021) retain their own rights and
citations.
