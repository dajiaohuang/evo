---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Angelarctocyon
    commonName: Angelarctocyon
    commonNameZh: 天使熊犬兽
    rank: genus
    firstAppearance: 42
    lastAppearance: 38
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:351934
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Amphicyonidae/Angelarctocyon
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: tomiya-tseng-2016-beardogs concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: tomiya-tseng-2016-beardogs
          pages: Article 160518
          figure: Figures 4–7
          quoteLocator: Revised systematics; referred material; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Amphicyonidae/Angelarctocyon
      rangeKind: global-composite
      taxonomicConcept: Angelarctocyon australis sampled occurrence
      geographicScope: Chambers Tuff, Texas, USA
      olderMa: 42
      youngerMa: 38
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Texas_“Miacis”_beardog_reappraisal/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: tomiya-tseng-2016-beardogs
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Angelarctocyon

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Angelarctocyon australis is bounded by holotype TMM 41850-1 and referred jaw material from the Chambers Tuff within an approximately 42–38 Ma sample envelope; this is not a global genus duration or direct ancestor interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named material and formation context are direct; genus reassignment and basal family placement come from comparative scoring.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名材料与地层背景属于直接证据；属级重归和基干科位置来自比较编码。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Angelarctocyon australis 由 Chambers Tuff 的正模 TMM 41850-1 与归入颌骨材料约束，处于约 4200 万—3800 万年前的样本区间；这不是全球属级延续或直接祖先区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level sampled occurrence envelope, not a direct date on ancestry or a guaranteed global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The holotype cranium of Gustafsonia cognita, TMM 40209-200, was CT-reconstructed; Angelarctocyon australis is represented by TMM 41850-1 and referred jaw material.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
160518; Figures 1–7; Tables 1–2; Electronic supplementary material; Revised systematics; Digital reconstruction; Phylogenetic analysis
<!-- /evo:text -->
