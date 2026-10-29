# Current release checks

1. Confirm the current [product scope](project-scope.md), target channel, exact source commit and dirty-file ownership. Stage only intended files.
2. For Pages, run `rtk npm run verify:pages`. Its artifact must contain only the allowlisted introduction files, at most 256 KiB, with working Vercel entries and old-path 404 behavior.
3. For the application, run type and relevant interaction/data checks. Do not rebuild or publish the authoring corpus for an introduction-only change. Preserve the actual live base/overlay descriptor until a verified replacement exists.
4. Check publication inputs: no credentials, databases, local receipts, source corpora, old node accounts, topic readers or repository archives in site output. Check hashes, stored byte counts and real dataset/source identities.
5. After publication, read the actual public URL, identity files and changed routes. A successful upload is not hosted acceptance. GitHub Releases and old Vercel deployments are retained under this reorganization's scope.
