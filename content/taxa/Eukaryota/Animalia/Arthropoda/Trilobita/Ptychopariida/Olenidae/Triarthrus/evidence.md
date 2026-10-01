---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Triarthrus
    commonName: Triarthrus
    commonNameZh: 三节虫属
    rank: genus
    taxonId: txn:21015
    firstAppearance: 450
    lastAppearance: 443
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Olenidae/Triarthrus
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
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377
          figure: Figures 1–5; Supplementary materials
          quoteLocator: Beecher's Trilobite Bed Triarthrus eatoni sample
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Olenidae/Triarthrus
      rangeKind: global-composite
      taxonomicConcept: Triarthrus respiratory-appendage sample
      geographicScope: Beecher’s Trilobite Bed, New York, USA
      olderMa: 450
      youngerMa: 443
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
        - content/events/Trilobite_upper_limb_branch_and_gill_function/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: hou-2021-trilobite-gill
          locator: eabe7377; Figures 1–5; Supplementary materials; Triarthrus imaging; Olenoides articulation; Functional comparison
      reviewStatus: automated-audit-passed
---

# Triarthrus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Triarthrus eatoni is bounded here by the cited respiratory-appendage sample from Beecher's Trilobite Bed, New York, USA; this named locality sample is not a genus-wide distribution or exact complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Triarthrus: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
三节虫属：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Triarthrus eatoni 在此由所引美国纽约州 Beecher 三叶虫层的呼吸附肢样本约束；这一具名地点样本不是整个属的分布或精确完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Broad Upper Ordovician sample envelope, not a direct specimen date or global range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
