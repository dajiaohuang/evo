---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Placodermi
    commonName: Placoderms
    commonNameZh: 盾皮鱼类
    rank: class
    taxonId: txn:34249
    firstAppearance: 436
    lastAppearance: 358.9
    extinct: true
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi
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
      reviewedAgainstReferenceVersion: Zhu et al. 2022 DOI 10.1038/s41586-022-05136-8; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: zhu-2022-chongqing-gnathostomes
          relation: supports
          pages: 954–958, especially 955–957
          figure: Figures 1–2; Extended Data Figures 1–7
          quoteLocator: Systematic palaeontology and description of Xiushanosteus; locality, horizon and phylogenetic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi
      rangeKind: global-composite
      taxonomicConcept: Placodermi
      geographicScope: Global or represented navigation composite
      olderMa: 436
      youngerMa: 358.9
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: zhu-2022-chongqing-gnathostomes
          locator: pp. 954–958, especially 955–957; Figures 1–2; systematic palaeontology, horizon and phylogenetic analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Placodermi

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Placodermi historical-grade display uses the approximately 436 Ma Huixingshao Formation Xiushanosteus sample as its evidence-linked older anchor; the 358.9 Ma younger edge remains a rounded composite, and neither endpoint is asserted as a global first or last appearance or a direct-ancestor interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple articulated Xiushanosteus specimens directly support an early Silurian placoderm-grade occurrence. Medium confidence retains the historical-grade boundary, sampling limits and the composite younger endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多件关节相连的 Xiushanosteus 标本直接支持早志留世盾皮鱼等级记录；中等置信度保留历史等级边界、取样限制和综合性的年轻端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
盾皮鱼类历史等级的显示范围以约 4.36 亿年前回星哨组的 Xiushanosteus 样本作为有证据连接的老端锚点；3.589 亿年前的年轻端仍是取整后的综合边界，两个端点都不被表述为全球首现、末现或直系祖先区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 436 Ma older edge follows the articulated Huixingshao Xiushanosteus sample; 358.9 Ma remains a rounded composite younger boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Xiushanosteus supplies a primary-study early Silurian anchor for the historical placoderm-grade display without asserting a global FAD, LAD or direct ancestor.
<!-- /evo:text -->
