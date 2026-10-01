---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Primatomorpha
    commonName: Primates and Plesiadapiform Kin
    commonNameZh: 灵长形类
    rank: clade
    taxonId: txn:132602
    firstAppearance: 79.2
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Primatomorpha
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: dos-reis-2018-primate-clock primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: dos-reis-2018-primate-clock
          relation: supports
          pages: 594–615
          figure: Figures 1–5; Table 3; Supplementary spreadsheet
          quoteLocator: Timeline of primate evolution; calibration-strategy and relaxed-clock sensitivity analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Placentalia/Primatomorpha
      rangeKind: global-composite
      taxonomicConcept: Primatomorpha navigation-model envelope
      geographicScope: Globally sampled phylogenomic model and living continuation
      olderMa: 79.2
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
      confidence: low
      claimPaths:
        - content/topics/atlas/Placentalia/Primatomorpha/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: dos-reis-2018-primate-clock
          locator: pp. 594–615; Figures 1–5; Table 3; Supplementary spreadsheet
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Primatomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 79.2–0 Ma Primatomorpha route is a navigation-model envelope borrowed from the cited crown-Primates relaxed-clock interval and living continuation; it does not date the Primatomorpha node or provide a fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The molecular analysis explicitly reports model- and calibration-sensitive crown-Primate intervals, not a Primatomorpha estimate. The atlas retains that distinction and uses the value only as a visibly model-bounded browsing ceiling.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
分子分析明确报告的是受模型与校准影响的灵长目冠群区间，并非 Primatomorpha 估计；图谱保留这一区别，仅把该数值作为显式受模型约束的浏览上限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
79.2–0 Ma 的灵长形类路线是导航模型包络，借用所引灵长目冠群松弛钟区间并延续到现生；它不测定 Primatomorpha 节点，也不提供化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
79.2 Ma is the older limit of a cited crown-Primates clock interval, not a Primatomorpha-node estimate, fossil occurrence or global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A calibration-sensitive crown-Primates relaxed-clock interval is retained only as a clearly labelled browsing ceiling for the wider navigation parent.
<!-- /evo:text -->
