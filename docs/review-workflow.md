# Minimal package review workflow

Evo Atlas keeps one human-maintained review record per package: `review.json`. There is no review center, reviewer database, model-report archive, account system, or built-in ChatGPT API.

## Four-step loop

1. Generate a complete packet with `npm run review:packet -- --package <package-id>`.
2. Upload the ZIP or the self-contained Markdown packet to ChatGPT and require it to read every path in `FILE_MANIFEST.json` before reporting findings.
3. The repository maintainer fixes the canonical content, regenerates the packet, and asks for a focused recheck.
4. The maintainer—not ChatGPT—sets `review.json` to `reviewed` or `reviewed-with-caveats`, recording the exact commit and `contentDigest`.

Use this prompt after uploading the packet:

> Please follow REVIEW_INSTRUCTIONS.md. You must explicitly read every file listed in FILE_MANIFEST.json. Report which files were read before beginning the scientific-content check.

## Status model

The only stored review states are:

- `not-reviewed`
- `in-review`
- `reviewed-with-caveats`
- `reviewed`

`stale` is never written by hand. `npm run review:check` rebuilds the review materials, computes their SHA-256 content digest, and compares it with `review.json`. A changed digest makes the effective status `stale`. A stale completed review fails the release gate.

Content maturity is separate:

- `generated-scaffold`
- `structured`
- `source-linked`
- `curated-draft`
- `published`

A package can therefore be a `curated-draft` with a `reviewed-with-caveats` maintainer decision. Neither state claims external expert peer review.

## Packet contents

The packet contains package scope, extracted entity records, taxonomy, canonical ranges, source and rendered profiles, package claims and Chinese claim text, only the references actually used, provenance, media records, stories, events, phylogeny files or an explicit status note, the occurrence query ledger, user-visible frontend text, and aggregated known limitations.

`FILE_MANIFEST.json` records the byte length and SHA-256 checksum of every required file. The generated Markdown packet concatenates the same files as a fallback when ZIP extraction is unavailable.

Generated packets live in ignored `review-output/`; model conversations are not committed. Unresolved material issues belong in `review.json/openIssues`, the affected data field, or a GitHub issue.

## Maintainer decision rules

- Do not set a completed status until every manifest file has been read and release blockers are resolved.
- `reviewed-with-caveats` requires at least one explicit open issue.
- `reviewedBy`, `reviewedAt`, `reviewedCommit`, and `contentDigest` are mandatory for completed states.
- `chatgptAssisted` records whether ChatGPT helped check the packet; it does not mean ChatGPT made the decision.
- External domain-expert review is disclosed separately and is not inferred from maintainer review.

After editing the record, run:

```bash
npm run data:registry:build
npm run review:check
npm run verify
```
