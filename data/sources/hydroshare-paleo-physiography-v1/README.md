# HydroShare Paleo-Physiography research preview

This is a separately licensed, non-commercial research artifact for issue
[#167](https://github.com/dajiaohuang/evo/issues/167). It is not part of the
default Evo Atlas runtime or native app bundles.

The source resource contains 108 irregular-age global goSPL NetCDF frames at
0.05° resolution (about 11.2 GB). The companion release asset contains only
the deterministic 0.5° preview: NCSS `horizStride=10` selects every tenth
source row and column, then values are encoded as little-endian float32. No
spatial averaging or temporal interpolation is performed. The manifest records
the source response and preview SHA-256 for every age, dimensions, coordinates,
and the maximum float64-to-float32 cast error.

The preview is a model output, not a direct observation, unique reconstruction,
or uncertainty surface. Source ages (0–541 Ma) must not be substituted for the
five-million-year PALEOMAP contract. Scotese & Wright (2018) and Valdes et al.
(2021) retain their own rights and citations.

See [`manifest.json`](./manifest.json) for the complete inventory and
[`LICENSE.txt`](./LICENSE.txt) for the reuse boundary.
