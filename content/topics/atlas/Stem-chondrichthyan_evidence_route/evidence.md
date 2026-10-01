---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Stem-chondrichthyan evidence route
    commonName: Silurian–Carboniferous specimen dossiers
    commonNameZh: 志留纪—石炭纪软骨鱼干群标本档案
    rank: navigation group
    taxonId: ""
    firstAppearance: 439
    lastAppearance: 326
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Stem-chondrichthyan_evidence_route
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: andreev-2022-qianodus; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: andreev-2022-qianodus
          pages: 964–968, especially p. 965
          figure: Figures 1c–f and 2a,f; Extended Data Figures 1–5
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
        - relation: supports
          referenceId: andreev-2022-fanjingshania
          pages: 969–974, especially pp. 970–972
          figure: Figures 1g, 2a–c and 3; Extended Data Figures 1 and 4c
          quoteLocator: "Systematic palaeontology: holotype, referred material, locality and horizon; Discussion"
        - relation: supports
          referenceId: andreev-2025-fanjingshania-shoulder
          pages: 2–6
          figure: Figures 1–3, especially Figure 2
          quoteLocator: "Results: structure and development; Discussion: dermal skeletal remodelling"
        - relation: supports
          referenceId: zhu-2022-chongqing-gnathostomes
          pages: 954–958, especially pp. 956–958
          figure: Figures 1a, 3 and 4; Extended Data Figure 8 and phylogenies
          quoteLocator: Systematic palaeontology; Shenacanthus description; phylogenetic results and Discussion
        - relation: supports
          referenceId: coates-2018-gladbachus
          pages: 1–10, especially Material section 2a and Results
          figure: Figures 1–4; Supplementary Figure S1
          quoteLocator: Specimens; anatomical results; phylogenetic results; Discussion and Conclusion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Stem-chondrichthyan_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Stem-chondrichthyan evidence route navigation envelope
      geographicScope: Represented specimen localities only
      olderMa: 439
      youngerMa: 326
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
        - content/events/Qianodus_tooth_whorls_in_the_late_Aeronian/evidence.md#/records/claims/0
        - content/events/Fanjingshania_dermoskeleton_and_shoulder_remodelling/evidence.md#/records/claims/0
        - content/events/Shenacanthus_combines_chondrichthyan_and_armoured_traits/evidence.md#/records/claims/0
        - content/events/Gladbachus_reveals_a_mosaic_stem-chondrichthyan_anatomy/evidence.md#/records/claims/0
        - content/events/Maghriboselache_documents_a_broad-snouted_Devonian_symmoriiform/evidence.md#/records/claims/0
        - content/events/Cosmoselachus_reveals_an_operculate_symmoriiform/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: andreev-2022-qianodus
          locator: pp. 964–968; Figs. 1–2
        - referenceId: andreev-2022-fanjingshania
          locator: pp. 969–974; Figs. 1–3
        - referenceId: zhu-2022-chongqing-gnathostomes
          locator: pp. 954–958; Figs. 1, 3
        - referenceId: coates-2018-gladbachus
          locator: Article 20172418; Figs. 1–4
        - referenceId: klug-2023-maghriboselache
          locator: pp. 1–28; Figures 1–15; Systematic palaeontology; phylogenetic analysis
        - referenceId: bronson-2024-cosmoselachus
          locator: pp. 101–117; Figures 1–8; CT reconstruction and phylogenetic analysis
      reviewStatus: automated-audit-passed
---

# Stem-chondrichthyan evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Stem-chondrichthyan evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Silurian–Devonian specimen dossiers: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
Systematic palaeontology; tooth-whorl development and histology; Supplementary Information: Geological setting and biostratigraphy
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
志留纪—泥盆纪软骨鱼干群标本档案：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
志留纪—泥盆纪软骨鱼干群标本档案导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope across heterogeneous samples; not a lineage duration, global FAD or ancestor sequence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The browse interval spans the represented specimen dossiers from the Silurian through the Late Mississippian while preserving each occurrence, topology and interpretation as a separate evidence record.
<!-- /evo:text -->
