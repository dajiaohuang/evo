---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Jaekelopterus
    commonName: Jaekelopterus
    commonNameZh: 耶克尔鲎属
    rank: genus
    taxonId: txn:18976
    firstAppearance: 411
    lastAppearance: 407
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/Eurypterina/Diploperculata/Pterygotoidea/Pterygotidae/Jaekelopterus
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
      reviewedAgainstReferenceVersion: braddy-2008-jaekelopterus; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: braddy-2008-jaekelopterus
          relation: supports
          pages: 106–109
          figure: Figures 1–2
          quoteLocator: Willwerath chelicera; Body-length scaling; Assumptions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/Eurypterina/Diploperculata/Pterygotoidea/Pterygotidae/Jaekelopterus
      rangeKind: global-composite
      taxonomicConcept: Jaekelopterus rhenaniae giant-chelicera occurrence
      geographicScope: Willwerath Lagerstätte, Germany
      olderMa: 411
      youngerMa: 407
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
        - content/events/Jaekelopterus_giant_chelicera_and_body-size_estimate/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: braddy-2008-jaekelopterus
          locator: 106–109; Figures 1–2; Willwerath chelicera; Body-length scaling; Assumptions
      reviewStatus: automated-audit-passed
---

# Jaekelopterus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The cited Jaekelopterus rhenaniae chelicera comes from the Willwerath Lagerstätte in Germany's Klerf Formation, assigned to the Lower Emsian of the Early Devonian. This fossil locality is not the genus's global distribution or complete temporal range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Jaekelopterus: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
耶克尔鲎属：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引 Jaekelopterus rhenaniae 螯肢来自德国 Klerf 组的 Willwerath 化石库，属早泥盆世埃姆斯阶下部。这一化石地点不代表该属的全球分布或完整生存延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Broad Early Devonian locality envelope, not a direct date or whole-genus range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
