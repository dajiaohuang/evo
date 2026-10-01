---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Medusozoa
    commonName: Medusozoans
    commonNameZh: 水母亚门
    rank: subphylum
    taxonId: txn:349684
    firstAppearance: 562
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Medusozoa
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: kayal-2018-cnidarian-phylogenomics
      referenceLinks:
        - referenceId: kayal-2018-cnidarian-phylogenomics
          relation: supports
          pages: Article 68
          quoteLocator: Figures 1–5; phylogenomic topology and trait reconstructions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Medusozoa
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: dunn-2022-auroralumina locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: dunn-2022-auroralumina
          pages: 6:1095–1104
          figure: Figures 1–4; Extended Data Figures 1–8
          quoteLocator: Charnwood age, morphology and stem-medusozoan placement
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Medusozoa
      rangeKind: global-composite
      taxonomicConcept: Medusozoa stem-fossil-to-living navigation anthology
      geographicScope: Charnwood Forest Auroralumina stem-medusozoan interpretation plus living Medusozoa
      olderMa: 562
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Cnidaria/Medusozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: dunn-2022-auroralumina
          locator: 1095–1104; Figures 1–4; Extended Data Figures 1–8; Charnwood age, morphology and stem-medusozoan placement
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Medusozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic analyses recover a sampled Medusozoa branch and test relationships among its major lineages; the topology and reconstructed trait origins are model results, not observed ancestors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Large molecular matrices provide explicit support, while alternative models and uneven sampling limit universal ancestral-state claims.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Medusozoa is displayed at 562–0 Ma only as a stem-fossil-to-living navigation anthology: Auroralumina provides a matrix-dependent Ediacaran stem-medusozoan anchor, not a crown-Medusozoa FAD, direct ancestor or continuous global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Dunn et al. (2022) directly documents the Charnwood specimen and tests its stem-medusozoan placement. Medium confidence is restricted to that interpreted fossil anchor plus living continuation, not to a crown origin.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
大型分子矩阵提供明确支持，但替代模型与不均匀取样限制了普遍祖先状态主张。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Dunn 等（2022）直接记录查恩伍德标本并检验其干群水母亚门位置。中等置信度仅限于该解释性化石锚点与现生延续，不涉及冠群起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统基因组分析恢复了取样的水母亚门分支并检验其主要支系关系；拓扑和性状起源重建属于模型结果，不是已观察祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Medusozoa 的 562–0 Ma 仅作为“干群化石—现生类群”导航汇编：Auroralumina 提供依赖矩阵的埃迪卡拉纪干群水母亚门锚点，并非冠群首现、直接祖先或连续全球范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Auroralumina is used as a stem-medusozoan navigation anchor, not a crown-Medusozoa FAD or exact divergence date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Dunn et al. describe and matrix-test Auroralumina as an Ediacaran crown cnidarian on the medusozoan stem; 0 Ma denotes living medusozoans.
<!-- /evo:text -->
