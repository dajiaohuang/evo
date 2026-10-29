# Vercel deployment

The Vercel project is `evo` in the `dajiaohuangdjh` scope. The public site
uses `/evo/`; the domain root redirects there. The current application opens
the paleomap and species tree. Original node, topic and guided-reading prose
is paused. GitHub Pages is a separate introduction only.

```sh
rtk proxy vercel link --project evo --scope dajiaohuangdjh
rtk proxy vercel deploy --prod --scope dajiaohuangdjh
```

Vercel receives only the deployment configuration, `package.json`, the artifact
descriptor and `scripts/deploy-static-artifact.mjs`. It downloads the public
site archive recorded in `deployment-artifact.json`, checks its exact byte
count and SHA-256, then extracts it. It checks the Web edition, dataset version
and source commit before publishing. Runtime payloads retain their original
bytes and integrity descriptors. Static document metadata uses the Vercel host.

This avoids uploading the authoring corpus, private research directories,
credentials or the full runtime as Vercel source files. It also avoids running
the scientific generators a second time on Vercel. No server functions or
paid build machine are required by this configuration.

When application code or canonical content changes, create one fresh
production output with `npm run build`. Package its public `dist/` contents
under an `evo/` archive prefix, publish the archive as a GitHub release asset,
and update the descriptor with the actual URL, bytes, SHA-256, source commit
and dataset version. Preserve the previous artifact; do not replace an
existing release asset with different bytes. Deploy again after those fields
match the new output.

The former [full reading publication](../archive/docs/full-reading-publication.md)
procedure is archived and does not authorize republishing the local corpus.
Current Turso drafts remain local. See [project scope](project-scope.md).

Both the pinned base archive and overlay are current dependencies. The descriptor
must match the actual hosted `deployment.json`; an old local descriptor can roll
back the map/UI even when a deployment succeeds. This reorganization retains old
GitHub Releases and old Vercel deployments, as requested.

The archive must contain generated public site files only. Local previews,
candidate/review folders and credentials are not deployment inputs. Verify the
production entry point, `/evo/release.json`, `/evo/data/current.json`, and actual
map/data requests after deploying; a successful upload alone is not acceptance.
