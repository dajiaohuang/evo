---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Stem-chelicerate evidence
    commonName: Cambrian Stem-Chelicerate Evidence
    commonNameZh: 寒武纪螯肢动物干群证据
    rank: navigation group
    taxonId: ""
    firstAppearance: 519
    lastAppearance: 500.5
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Stem-chelicerate_evidence
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
      reviewedAgainstReferenceVersion: aria-caron-2019-mollisonia-plenovenatrix; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: aria-caron-2019-mollisonia-plenovenatrix
          relation: supports
          pages: 586–589
          figure: Figures 1–4
          quoteLocator: Mollisonia plenovenatrix appendage anatomy; phylogenetic analysis; ecological interpretation
    - subject:
        kind: taxon
        path: content/topics/atlas/Stem-chelicerate_evidence
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: liu-2026 + lerosey-aubril-ortega-2026 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: liu-2026-urokodia
          relation: supports
          pages: 653–658
          figure: Figures 1–3
          quoteLocator: Chengjiang Urokodia sample at 519–518 Ma
        - referenceId: lerosey-aubril-ortega-2026-megachelicerax
          relation: supports
          pages: 931–937
          figure: Figures 1–3
          quoteLocator: Wheeler Formation Megachelicerax sample at 504.5–500.5 Ma
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
    - entityPath: content/topics/atlas/Stem-chelicerate_evidence
      rangeKind: global-composite
      taxonomicConcept: Cambrian stem-chelicerate evidence route
      geographicScope: Chengjiang, Wheeler and Burgess Shale samples
      olderMa: 519
      youngerMa: 500.5
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
        - content/topics/atlas/Stem-chelicerate_evidence/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: liu-2026-urokodia
          locator: pp. 653–658; Figures 1–3; Chengjiang Urokodia sample at 519–518 Ma
        - referenceId: lerosey-aubril-ortega-2026-megachelicerax
          locator: pp. 931–937; Figures 1–3; Wheeler Formation Megachelicerax sample at 504.5–500.5 Ma
      reviewStatus: automated-audit-passed
---

# Stem-chelicerate evidence

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The stem-chelicerate evidence entity is a navigation group linking sampled Mollisonia appendage anatomy and its morphology-matrix placement to related specimen dossiers. It does not name a natural grade, direct ancestor sequence, global chelicerate FAD or complete stem range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Medium confidence applies to the described Mollisonia plenovenatrix anatomy and sampled matrix placement at the cited figures. The stem route is an editorial grouping and is not treated as a monophyletic lineage or temporal boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 519–500.5 Ma stem-chelicerate evidence route links the Chengjiang Urokodia and Wheeler Megachelicerax samples and does not represent one lineage's temporal duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The two primary descriptions directly date their named samples, while their separate fossils and analyses preclude a continuous lineage claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：引用图版直接支持 Mollisonia plenovenatrix 的已描述解剖和抽样矩阵位置；干群路线是编辑分组，不被当作单系谱系或时间边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
两项原始描述直接测定各自命名样本；化石与分析彼此独立，不能构成连续谱系断言。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
螯肢类干群证据实体是导航组，把所抽样 Mollisonia 附肢解剖及其形态矩阵位置连接到相关标本档案；它不命名自然分级、直接祖先序列、螯肢类全球首现或完整干群延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
519–500.5 Ma 的螯肢类干群证据路线连接澄江 Urokodia 与 Wheeler Megachelicerax 样本，不代表单一谱系的存续时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
A navigation envelope across separate fossils and competing topologies, not a lineage duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval links the 519–518 Ma Chengjiang Urokodia sample to the 504.5–500.5 Ma Wheeler Megachelicerax sample; it is a dossier-navigation envelope rather than a lineage duration.
<!-- /evo:text -->
