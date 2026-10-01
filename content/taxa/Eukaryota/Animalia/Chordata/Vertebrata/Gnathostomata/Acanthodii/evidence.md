---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Acanthodii
    commonName: Spiny Sharks
    commonNameZh: 棘鱼类
    rank: class
    taxonId: txn:34849
    firstAppearance: 439
    lastAppearance: 252
    extinct: true
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Acanthodii
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Andreev et al. 2022 DOI 10.1038/s41586-022-05233-8; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: andreev-2022-fanjingshania
          relation: supports
          pages: 969–974, especially 970–972
          figure: Figures 1–3; Extended Data Figures 1 and 4
          quoteLocator: "Systematic palaeontology: holotype, referred material, locality and horizon; phylogenetic analysis and Discussion"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Acanthodii
      rangeKind: global-composite
      taxonomicConcept: Acanthodii
      geographicScope: Global or represented navigation composite
      olderMa: 439
      youngerMa: 252
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Acanthodii/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: andreev-2022-fanjingshania
          locator: pp. 969–974, especially 970–972; Figures 1–3; Extended Data Figures 1 and 4; material, horizon and phylogenetic analysis
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Acanthodii

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The historical Acanthodii navigation grade begins at the approximately 439 Ma Fanjingshania dermoskeletal sample, which the cited analysis places on the chondrichthyan stem; the 252 Ma younger edge is a rounded legacy composite, not evidence that Acanthodii is monophyletic or that Fanjingshania is a direct ancestor or global first occurrence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary description fixes a late Aeronian horizon and a large referred sample, but the material is disarticulated and the acanthodian-grade grouping is historical. Medium confidence is therefore limited to the display anchor and its explicit interpretive boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手描述限定了晚埃隆期层位和大型转归样本，但材料彼此分离，棘鱼等级也是历史分组；中等置信度仅适用于显示锚点及其明确的解释边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
历史性的棘鱼类导航等级从约 4.39 亿年前 Fanjingshania 皮骨骼样本开始；所引分析把它置于软骨鱼干群。2.52 亿年前的年轻端是取整后的历史综合边界，不能据此认定棘鱼类为单系，也不能把 Fanjingshania 写成直系祖先或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 439 Ma older edge follows the disarticulated Fanjingshania dermoskeletal sample; 252 Ma remains a rounded historical-grade composite.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Fanjingshania anchors the historical acanthodian-grade display while its cited stem-chondrichthyan placement prevents treating Acanthodii as a monophyletic lineage or the specimen as a direct ancestor.
<!-- /evo:text -->
