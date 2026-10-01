---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Fanjingshania renovata
    commonName: Silurian dermoskeletal chondrichthyan
    commonNameZh: 志留纪皮骨骼软骨鱼干群
    rank: species
    taxonId: ""
    firstAppearance: 439
    lastAppearance: 439
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Stem-chondrichthyan_evidence_route/Fanjingshania_renovata
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
      reviewedAgainstReferenceVersion: andreev-2022-fanjingshania; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: andreev-2022-fanjingshania
          pages: 969–974, especially pp. 970–972
          figure: Figures 1g, 2a–c and 3; Extended Data Figures 1 and 4c
          quoteLocator: "Systematic palaeontology: holotype, referred material, locality and horizon; Discussion"
        - relation: contextualizes
          referenceId: andreev-2025-fanjingshania-shoulder
          pages: 2–6
          figure: Figures 1–3, especially Figure 2
          quoteLocator: "Results: structure and development; Discussion: dermal skeletal remodelling"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Stem-chondrichthyan_evidence_route/Fanjingshania_renovata
      rangeKind: global-composite
      taxonomicConcept: Fanjingshania renovata Rongxi Formation dermoskeletal sample
      geographicScope: Rongxi Formation, Leijiatun, Guizhou, China
      olderMa: 439
      youngerMa: 439
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
        - content/events/Fanjingshania_dermoskeleton_and_shoulder_remodelling/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: andreev-2022-fanjingshania
          locator: pp. 969–974; Figs. 1–3; Extended Data Fig. 4
      reviewStatus: automated-audit-passed
---

# Fanjingshania renovata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Fanjingshania renovata is represented by holotype IVPP V27433.1 and more than 1000 isolated dermal elements from the late Aeronian Rongxi Formation at approximately 439 Ma; this source-linked sample is not a clade-wide origin, global FAD/LAD, direct ancestor or exact complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Silurian dermoskeletal chondrichthyan: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
志留纪皮骨骼软骨鱼干群：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
约 439 Ma 晚埃隆期融溪组的 Fanjingshania renovata 由正模 IVPP V27433.1 和一千余件孤立皮骨骼元件代表；这一带来源链接的样本不表示全群起源、全球首末出现、直系祖先或精确完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Approximate late Aeronian point; isolated elements do not form one articulated body.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Holotype IVPP V27433.1 and more than one thousand referred dermal elements occur in the late Aeronian Rongxi Formation.
<!-- /evo:text -->
