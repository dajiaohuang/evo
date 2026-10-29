# Wikipedia tree edition

The interactive navigation tree and scoped Perissodactyla hypothesis now open
Wikipedia previews instead of the original Evo node accounts. The frozen
mapping covers every represented name in both tree sources, including repeats.
`public/wikipedia/mapping.json` records each name's checked result, canonical
article URL, page ID, Chinese sitelink when available, source hashes and UTC.

Regenerate with `rtk proxy node scripts/build-wikipedia-links.mjs`, then run
`rtk proxy node scripts/check-wikipedia-links.mjs`. `data/wikipedia-overrides.json`
records classification-specific homonym resolutions. A missing exact title,
an ambiguous result and a project-only research/navigation item are distinct
outcomes; none is presented as a confirmed species article. Matching names
does not reconcile the tree's scientific taxonomy with Wikipedia's taxonomy.
The optional full Catalogue of Life backend uses the same preview component;
names outside the frozen displayed tree are looked up when selected, rather
than being claimed as preverified mappings.

The modal prefers the Chinese sitelink for Chinese UI and otherwise shows the
English article summary. It includes attribution, license and a full-article
link. It cancels abandoned requests, times out after 15 seconds, supports Escape
and restores focus on close.

Original interactive taxon routes and generated static taxon readers are
temporarily paused. The build replaces only disposable `dist/nodes/` with an
offline notice; local `public/nodes/`, canonical content and Turso drafts remain
intact. Original node account shards are excluded from this new deployment.
The archive descriptor pins the paused-node manifest instead of claiming to
publish the earlier full-reading collection. Map and scientific data retain
their existing release identities.

For a link-table-only publication, prepare the table locally and use
`scripts/prepare-wikipedia-overlay.mjs` once to compile only the UI. It reuses
the prior verified scientific-data artifact. `scripts/package-wikipedia-overlay.mjs`
packages the small overlay with separate hashes for the archive and link table.
The deployment wrapper checks the base archive before applying that overlay,
removes only the deployed old node-account projection, then checks the new
release and paused-page manifest. No Turso snapshot or scientific-data rebuild
is needed. Hosted HTTP and browser verification scripts write local receipts.
