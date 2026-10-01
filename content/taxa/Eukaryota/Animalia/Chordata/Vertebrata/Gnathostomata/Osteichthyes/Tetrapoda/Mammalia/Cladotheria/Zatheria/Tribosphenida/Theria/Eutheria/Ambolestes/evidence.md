---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ambolestes
    commonName: Ambolestes
    commonNameZh: 无惧兽
    rank: genus
    taxonId: txn:371741
    firstAppearance: 126
    lastAppearance: 125
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Ambolestes
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
      reviewedAgainstReferenceVersion: bi-2018-ambolestes concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: bi-2018-ambolestes
          pages: 390–395
          figure: Figures 1–5
          quoteLocator: Holotype; geological setting; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Ambolestes
      rangeKind: global-composite
      taxonomicConcept: Ambolestes zhoui holotype occurrence
      geographicScope: Lujiatun Unit, Yixian Formation, Liaoning, China
      olderMa: 126
      youngerMa: 125
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
        - content/events/Ambolestes_and_a_revised_therian_boundary/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: bi-2018-ambolestes
          locator: 390–395; Figures 1–5
      reviewStatus: automated-audit-passed
---

# Ambolestes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ambolestes zhoui is bounded by near-complete holotype STM33-5 from the Lujiatun Unit of the Yixian Formation within an approximately 126–125 Ma interval; its eutherian placement is matrix-dependent and does not make it a direct placental ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype and unit are direct evidence; higher placement and implications for the metatherian record are analytical.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模与地层单元属于直接证据；高阶位置及其对后兽类记录的含义属于分析结果。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Ambolestes zhoui 由义县组陆家屯层近完整正模 STM33-5 约束，处于约 1.26 亿—1.25 亿年前区间；其真兽类位置依赖矩阵，不使其成为胎盘类直接祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level occurrence or model-bounded navigation interval, not a guaranteed global first appearance, direct origination date or ancestor range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
STM33-5 is the near-complete holotype reported from the Lujiatun Unit.
<!-- /evo:text -->
