# Publish the complete local reading collection

The public collection at `/evo/nodes/` contains every current node from one
closed local Turso snapshot. For each node it chooses the current workspace
draft, or the imported baseline when no draft exists. Historical revisions are
not additional pages. Existing language bodies, classification identity,
scientific records and exact bibliography versions are retained. Nodes without
prose remain name records; the reader does not generate missing content.

This is an explicit, operator-run static publication. It does not enable the
unimplemented database publication APIs or remove any Turso schema guards.
OpenRig Workers continue writing to their original service and workspace.
Changes accepted after the snapshot belong to a subsequent publication.

Use Node 22 for the local database and scientific build. Invoking npm with
Node 22 alone does not force npm's child `node` commands to use that version;
set PATH appropriately or invoke the exact Node executable and scripts.

## Snapshot, export and verify

Choose a new empty snapshot directory under
`.git/platform-v2/local/turso/`. The snapshot command drains the service,
waits for its exact process and lock to close, copies the database and WAL,
and restores the same database, workspace and owner immediately afterward.
It does not stop any Worker seats.

```sh
rtk proxy node database/snapshot-local-publication.mjs --out <absolute-new-snapshot-directory>
rtk proxy node database/export-public-reading.mjs --snapshot <absolute-snapshot-directory>
rtk proxy node database/verify-public-reading.mjs --snapshot <absolute-snapshot-directory>
```

Export uses a fresh `public/nodes/`. It verifies immutable payload hashes and
exact reference dependencies while resolving the existing canonical reader
projection. Its gzip shards have both compressed and decoded SHA-256 values,
so browser integrity checks work with either static-server gzip convention.
The full directory and exact-ID lookup cover the complete selected node set.

The independent verifier reads the emitted shards back and compares every
node, language body, scientific projection and reference version with the
closed snapshot. It also verifies directory and lookup reachability. Its
receipt stays under the local snapshot directory, outside the public site.

The public reader uses one reusable page with on-demand content shards;
publishing all accounts does not require duplicating the page template into
hundreds of thousands of HTML files. The main Web navigation links to this
collection in a separate tab so the existing map position is preserved.

## Build and deploy

Build the ordinary full-Web data and app, then its existing static pages.
Vite copies `public/nodes/` into `dist/nodes/`. Keep a new dataset version when
runtime payloads change, and bind `public/release.json` to the actual code
commit used for the build.

Run the complete reading verifier above, the applicable app/data checks and
the browser check against the served output:

```sh
rtk proxy node scripts/verify-full-reading-browser.mjs --base <site>/evo/nodes/ --out <new-local-receipt.json> --site dist/nodes
```

Package only `dist/` under an `evo/` archive prefix. The artifact descriptor's
`fullReading` field pins `manifestSha256`, `nodes`, `languagePages` and
`snapshotAt`; the Vercel build checks all four before accepting the archive.
The snapshot database, authoring credentials, private source files and local
receipts are never deployment inputs.

Stage the production deployment, verify the hosted reader and existing map,
then promote it. For the user's 2026-10-23 single-version release, remove the
exact old Evo Vercel deployment IDs after the new production alias has been
verified. Do not delete the project, live database, other projects or source
history. This does not create an automatic release or cleanup schedule.
