---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Placentalia
    commonName: Placental Mammals
    commonNameZh: 胎盘类哺乳动物
    rank: infraclass
    taxonId: ""
    firstAppearance: 100
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: murphy-2001-placental-bayesian
          relation: supports
          pages: 2348–2351
          figure: Figures 1–2
          quoteLocator: Bayesian phylogeny; molecular divergence estimates; Gondwanan scenario
        - referenceId: oleary-2013-placental-ancestor-model
          relation: contextualizes
          pages: 662–667
          figure: Figures 1–2; Table 1; Tables S1–S8
          quoteLocator: Combined phenomic–molecular analysis; ghost-lineage chronology; ancestral reconstruction
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Placentalia
      rangeKind: global-composite
      taxonomicConcept: Placentalia molecular and phenomic model envelope
      geographicScope: Globally sampled living and fossil model inputs
      olderMa: 100
      youngerMa: 0
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
      confidence: contested
      claimPaths:
        - content/topics/atlas/Placentalia/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: murphy-2001-placental-bayesian
          locator: pp. 2348–2351; Figures 1–2; molecular divergence estimates
        - referenceId: oleary-2013-placental-ancestor-model
          locator: pp. 662–667; Figures 1–2; Table 1; Tables S1–S8
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Placentalia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 100–0 Ma Placentalia route is a model envelope: a molecular analysis estimated a roughly 103 Ma deep placental split, whereas the phenomic combined analysis placed sampled crown diversification after K–Pg; neither model is a fossil FAD or ancestor observation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Both primary datasets and their model assumptions are inspectable, but they produce materially different chronologies. The rounded route deliberately exposes the model boundary instead of selecting one date as fact.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
murphy-2001-placental-bayesian, oleary-2013-placental-ancestor-model primary-study locators checked for 2026.08-static-v5-rc41
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两套一手数据及模型假设均可核查，但产生显著不同的时间框架；取整路线明确暴露模型边界，而不把任一日期当作事实。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
100–0 Ma 的胎盘类路线是模型包络：分子分析估计了约 103 Ma 的深层胎盘类分裂，而表型—分子联合分析把所取样冠群辐射置于 K–Pg 之后；两种模型都不是化石首现或祖先观察。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The rounded 100 Ma display ceiling contextualizes an approximately 103 Ma molecular estimate and a conflicting post-K–Pg phenomic chronology; it is not a fossil occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Two primary combined-data analyses bracket substantially different model chronologies, so the route exposes model dependence instead of selecting a fossil FAD.
<!-- /evo:text -->
