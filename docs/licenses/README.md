# Bundled native runtime notices

`duckdb-wasm-LICENSE.txt` is the unmodified MIT license from
[DuckDB-Wasm v1.32.0](https://github.com/duckdb/duckdb-wasm/blob/v1.32.0/LICENSE).
The native build copies this notice alongside the MVP Worker and WASM binary
from the existing lockfile-pinned `@duckdb/duckdb-wasm` package. The Worker also
retains its upstream bundled license comments.

The Parquet extension comes from the official DuckDB v1.4.3 `wasm_mvp`
extension repository, matching the engine in DuckDB-Wasm 1.32.0. Its URL,
decoded byte size and SHA-256 are pinned in `scripts/stage-native-sql.mjs`.
DuckDB's MIT copyright and license are retained with the runtime.

These are application dependencies, separate from canonical scientific data
and its source-specific licenses.
