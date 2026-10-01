---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Gustafsonia
    commonName: Gustafsonia
    commonNameZh: 古斯塔夫森兽
    rank: genus
    firstAppearance: 38
    lastAppearance: 36.6
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:351932
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Amphicyonidae/Gustafsonia
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
          figure: Figures 1–7
          quoteLocator: Revised systematics; digital reconstruction; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Amphicyonidae/Gustafsonia
      rangeKind: global-composite
      taxonomicConcept: Gustafsonia cognita sampled occurrence
      geographicScope: Chambers Tuff, Texas, USA
      olderMa: 38
      youngerMa: 36.6
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

# Gustafsonia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Gustafsonia cognita is bounded by CT-reconstructed holotype cranium TMM 40209-200 from the Chambers Tuff within an approximately 38–36.6 Ma sample envelope; the interval is not a global family first appearance or direct ancestry date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype and geological setting are direct. Basal amphicyonid placement and geographic origin remain analysis-dependent.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模与地质背景属于直接证据；基干 Amphicyonidae 位置和地理起源仍依赖分析。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Gustafsonia cognita 由 Chambers Tuff 的 CT 重建正模头骨 TMM 40209-200 约束，处于约 3800 万—3660 万年前的样本区间；该区间不是全球科级首现或直接祖先日期。
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
