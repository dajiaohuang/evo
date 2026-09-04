# Rebuilding resource packs without losing authority data

The COL baseline and each independent authority supplement have separate owners. Rebuilding names and package ownership must not erase already imported sources.

## Why this changed

The previous `data:packages:species` implementation recursively replaced the complete `resource-packs` directory, then reconstructed only the authorities wired directly into that command. Running it against an isolated copy of the RC107 release reduced 62 extensions to five and removed 246 files, including ITIS and the WoRMS Annelida archive projection. The published release was not affected by that reproduction.

The baseline writer now updates its own species shards and baseline manifest fields while retaining independent extension objects, descriptors, payloads and collection metadata. Targeted authority builders replace their declared extension IDs in place and remove only their own obsolete shard names. Other sources, including separate source-only partitions, retain their identity and bytes. Manifest aggregate counts describe the complete retained collection rather than only the source being refreshed.

## Rebuild the pinned release

From a clean checkout containing the committed source snapshots:

```sh
npm run data:packages:species
npm run data:registry:build
npm run data:manifest
npm run verify
```

The baseline command reads the pinned COL26.8 registry and committed authority inputs offline. It does not reacquire the large upstream archives or perform new taxonomic matching. A source-specific importer and integrator remain necessary when intentionally updating an independent authority; rerunning an unrelated builder must not implicitly refresh that source.

Preservation is not cross-release reconciliation. These scripts and source snapshots are scoped to the declared COL release. A different baseline requires reviewing identifiers, parent closures, matching outcomes and source pins; retaining a file does not establish compatibility with a different taxonomy.

Historical imports retain their original ownership SHA-256. The exact RC72 input is archived in `data/sources/snapshots/package-species-coverage-col26.8-rc72.json` (SHA-256 `a31a41ef0e9e785192a2fbbed11df9aa9bc06ba2f84a04b8fe38bd45824ff6ff`). Its bytes come unchanged from commit `3f34d0df83d5f348b5b28d5a77f68b39e244ee25`; no historical hash is relabeled as a new import. The existing mammal regression checks both that archived hash and the unchanged current ownership rules/counts/proof. To replay the original strictly pinned mammal importer, use that historical checkout or place the archived ownership input at its original path in an isolated replay checkout, not the active release workspace.

## Delivery and evidence boundaries

Pages remains `web-light`; Android and iOS remain `native-full`. The repair does not add new accepted species, merge source-only records into the COL total, change biological claims, create a dossier or promote review status. Existing release inventories and native tests continue to verify delivery. Regression fixtures exercise the actual rebuild/update paths; no new scientific content-validation system is introduced.
