# ITIS Sipuncula TSN sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-sipuncula-sidecar.json` is a frozen, deterministic, exact nomenclatural crosswalk between the strict accepted-species partition below COL26.8 usage `63` (`Sipuncula`) and the official ITIS monthly SQLite export `itisSqlite082626` (2026-08-26).

It covers every one of the 146 strict accepted COL26.8 Sipuncula species owned by the mixed `other-animals` resource pack. All 146 resolve directly to one valid ITIS Sipuncula species; zero are synonym redirects, ambiguous, or unmatched. ITIS has 205 valid current species in the same phylum and 575 species-level synonym links; the 59 current ITIS species not evidenced by a strict COL record are retained in a separate ITIS-only shard with a null COL usage ID.

The 99,015 remaining strict accepted species in `other-animals` are explicitly non-applicable. This is a nomenclatural sidecar, not a global sipunculan checklist, final classification authority, phylogeny, species-concept equivalence claim, biological dossier, fossil record, or scientific review.

## Rebuild

The generator checks the committed ITIS database SHA-256, the pinned COL registry and ownership manifests, root identities, update dates, deterministic range ordering, and deterministic gzip output.

```bash
node scripts/build-itis-sipuncula-sidecar.mjs --itis-sqlite /absolute/path/to/ITIS.sqlite
```

Pages/light delivery retains the small descriptor only. Android and iOS native-full inventories must retain the descriptor and both gzip shards with their stated checksums.
