# Wikipedia tree links

Current policy: **links only**. The tree opens a window with the original Wikipedia article link, language and matching status. It does not fetch, display or republish article summaries. See [full catalogue link pipeline](wikipedia-col.md).

`public/wikipedia/mapping.json` records frozen mappings for the represented navigation and scoped hypothesis names. It keeps source identity, canonical URL, page IDs and matching evidence. Names, homonyms, candidates and project-only nodes remain distinguishable; matching does not reconcile competing taxonomies.

Original node accounts, topic and guided-reading pages are paused publicly. Their source files, local authoring database and drafts remain retained. Publication must not copy `public/nodes/`, source corpora, local research material or repository archives into the new edition.

The ordinary scientific runtime and model identities remain release-pinned. UI-only overlays reuse verified scientific data; [Vercel deployment](vercel-deployment.md) requires exact archive hashes and the real source commit. Wikipedia link data is refreshed independently on its data branch, with atomic manifest and shard updates. GitHub Pages contains only the [application introduction](project-scope.md).
