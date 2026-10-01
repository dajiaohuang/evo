---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Trilobita
    commonName: Trilobites
    commonNameZh: 三叶虫
    rank: class
    taxonId: txn:19100
    firstAppearance: 521
    lastAppearance: 252
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita
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
      reviewedAgainstReferenceVersion: Holmes and Budd 2022 DOI 10.1038/s42003-022-04146-6 and Mychko 2025 DOI 10.26879/1399 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: holmes-budd-2022-early-trilobites
          relation: supports
          pages: 7:1177
          figure: Figures 1–4; Supplementary analyses
          quoteLocator: Approximately 521 Ma widespread appearance; phylogenetic clock and cryptic-interval tests
        - referenceId: mychko-2025-latest-trilobites
          relation: supports
          pages: 28.2:a22
          figure: Figures 1–7; distribution overview
          quoteLocator: Revision of Changhsingian North Caucasus material and global Lopingian occurrence review
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita
      rangeKind: global-composite
      taxonomicConcept: Trilobita sampled fossil envelope
      geographicScope: Widespread early Cambrian record through revised Changhsingian occurrences
      olderMa: 521
      youngerMa: 252
      status: available
      uncertainty:
        olderMa: 3
        youngerMa: 1
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: holmes-budd-2022-early-trilobites
          locator: article 1177; Figures 1–4 and supplementary analyses
        - referenceId: mychko-2025-latest-trilobites
          locator: article 28.2:a22; Figures 1–7 and global Lopingian overview
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Trilobita

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Trilobita root display retains a rounded 521–252 Ma sampled envelope: approximately 521 Ma marks the widespread early record, and revised Changhsingian material documents survival into the latest Permian; neither endpoint is an exact global FAD or LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Early-trilobite phylogenetic and stratigraphic analyses support the older sampled boundary, while revised Lopingian specimens support a latest-Permian record. Preservation, correlation and taxonomy prevent either rounded atlas endpoint from becoming an exact origination or extinction instant.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
早期三叶虫系统与地层分析支持较老采样边界，重新研究的乐平世标本支持最晚二叠纪记录；保存、对比和分类不确定性使两个端点都不能成为精确起源或灭绝瞬间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
三叶虫纲根节点保留取整后的 5.21–2.52 亿年前采样包络：约 5.21 亿年前代表广布的早期记录，重新研究的长兴期材料证明其延续到二叠纪最晚期；两个端点都不是精确的全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Both endpoints are rounded sampled bounds: approximately 521 Ma widespread records and latest-Permian occurrences, not exact global FAD/LAD instants.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
An early-trilobite matrix and clock analysis constrains the older record, while revised Changhsingian material constrains survival into the latest Permian.
<!-- /evo:text -->
