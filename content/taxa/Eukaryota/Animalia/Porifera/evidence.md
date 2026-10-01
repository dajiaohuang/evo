---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Porifera
    commonName: Sponges
    commonNameZh: 海绵动物
    rank: phylum
    taxonId: txn:2894
    firstAppearance: 635
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera
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
      reviewedAgainstReferenceVersion: Wang et al. 2024 DOI 10.1038/s41586-024-07520-y checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: wang-2024-helicolocellus
          relation: supports
          pages: 905–911
          figure: Figures 1–4; Extended Data Figures 1–10
          quoteLocator: Dengying Formation age interval; specimen reconstruction; Bayesian morphology analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Porifera
      rangeKind: global-composite
      taxonomicConcept: Porifera under the sampled Helicolocellus morphology hypothesis
      geographicScope: Dengying Formation sample to living sponges
      olderMa: 551
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 12
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Porifera/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: wang-2024-helicolocellus
          locator: pp. 905–911; Figures 1–4 and Extended Data Figures 1–10
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Porifera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Porifera root display uses 551–0 Ma as a sampled navigation envelope from the older bound of the 551–539 Ma Helicolocellus-bearing Dengying interval to living sponges; its crown placement is morphology-matrix dependent and does not establish the phylum's origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple specimens and the dated formation constrain the sampled occurrence, while the organic-skeleton homology and crown placement depend on character coding and model choice. The endpoint is not generalized to an unsampled global FAD.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多件标本及有年代约束的地层限定了采样记录，但有机骨架同源性和冠群位置取决于性状编码与模型，因此不能外推为未采样的全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
多孔动物门根节点采用 5.51 亿年前至今的采样导航包络，从含 Helicolocellus 的 5.51–5.39 亿年前灯影组区间上界延伸到现生海绵；其冠群位置依赖形态矩阵，不能确定该门的起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The source brackets the fossil-bearing interval at approximately 551–539 Ma; crown placement is morphology-matrix dependent.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Helicolocellus specimens preserve a nested organic lattice in a dated interval and are recovered near Hexactinellida in the sampled matrix.
<!-- /evo:text -->
