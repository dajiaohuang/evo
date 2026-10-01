---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Chelicerata
    commonName: Spiders & Scorpions
    commonNameZh: 蜘蛛与蝎类
    rank: subphylum
    taxonId: txn:91508
    firstAppearance: 519
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: liu-2026-urokodia; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: liu-2026-urokodia
          relation: supports
          pages: 653–658
          figure: Figures 1–3; Extended Data
          quoteLocator: Microtomographic reconstruction; Appendage homology; Phylogenetic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata
      rangeKind: global-composite
      taxonomicConcept: Chelicerata total-group navigation concept
      geographicScope: Chengjiang stem sample plus living total-group navigation
      olderMa: 519
      youngerMa: 0
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
      confidence: contested
      claimPaths:
        - content/events/Urokodia_appendages_and_upper_stem-chelicerate_placement/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: liu-2026-urokodia
          locator: pp. 653–658; Figs. 1–4; Supplementary phylogenetic analyses; Chengjiang occurrence and stem-chelicerate placement
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Chelicerata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Chelicerata route is source-linked here only to the Urokodia aequalis micro-CT character sample and its morphology-matrix placement. That disputed upper-stem interpretation is not a crown-chelicerate origin, global FAD, direct ancestor, or complete chelicerate range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Medium confidence applies to the explicitly imaged Urokodia anatomy and reported matrix result. The link deliberately preserves the study's interpretive and sampling limits instead of treating a navigation envelope as an ancestral or global range claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
螯肢类路线在此仅链接到 Urokodia aequalis 的显微 CT 性状样本及其形态矩阵位置；这一有争议的较高干群解释不是冠群螯肢类起源、全球首现、直接祖先或完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is the dossier-bounded Chengjiang Urokodia sample under the study's stem-chelicerate topology, not a crown-group age or uncontested global first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The older display bound follows the cited Urokodia occurrence and analytical stem-chelicerate placement; the living endpoint reflects extant total-group members and does not imply uninterrupted sampling.
<!-- /evo:text -->
