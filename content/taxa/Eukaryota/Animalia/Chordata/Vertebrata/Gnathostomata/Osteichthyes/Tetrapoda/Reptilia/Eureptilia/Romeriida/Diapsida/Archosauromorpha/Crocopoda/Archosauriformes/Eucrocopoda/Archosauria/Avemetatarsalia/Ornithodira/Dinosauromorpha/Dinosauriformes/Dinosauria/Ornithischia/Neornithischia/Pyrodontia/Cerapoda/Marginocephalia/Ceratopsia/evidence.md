---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ceratopsia
    commonName: Ceratopsians
    commonNameZh: 角龙类
    rank: suborder
    taxonId: txn:38842
    firstAppearance: 161.2
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: farke-2014-aquilops-ceratopsia concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: farke-2014-aquilops-ceratopsia
          relation: supports
          pages: 9(12):e112055
          figure: Figures 1–7; Data S1
          quoteLocator: Holotype and locality; phylogenetic analysis; biogeographic discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: farke-2014-aquilops-ceratopsia @ DOI 10.1371/journal.pone.0112055
      referenceLinks:
        - relation: supports
          referenceId: farke-2014-aquilops-ceratopsia
          pages: 9(12):e112055
          figure: Figures 1–7; Data S1
          quoteLocator: Holotype and locality; phylogenetic analysis; biogeographic discussion
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia
      rangeKind: global-composite
      taxonomicConcept: Ceratopsia — source-bounded sample window
      geographicScope: Cloverly Formation Aquilops holotype interval, Montana, USA
      olderMa: 113
      youngerMa: 100.5
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: farke-2014-aquilops-ceratopsia
          locator: 9(12):e112055; Holotype and locality; phylogenetic analysis; biogeographic discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Ceratopsia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ceratopsia is represented by a sampled morphology matrix in which the Aquilops holotype is placed among early neoceratopsians; that placement and its biogeographic implications do not identify a direct ancestor or a clade-wide first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The skull and matrix are direct primary evidence, but topology and dispersal are analytical interpretations. Medium confidence keeps the navigation claim at that level.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Ceratopsia is displayed at 113–100.5 Ma only as the Early Cretaceous Aquilops sample interval, not the origin or total duration of Ceratopsia. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Ceratopsia uses Farke, A.A.; Maxwell, W.D.; Cifelli, R.L.; Wedel, M.J. (2014) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Cloverly Formation Aquilops holotype interval, Montana, USA; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
头骨和矩阵是直接主研究证据，但拓扑与扩散属于分析解释；中等置信度将导航主张限制在该层级。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Ceratopsia 采用 Farke, A.A.; Maxwell, W.D.; Cifelli, R.L.; Wedel, M.J.（2014）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Cloverly Formation Aquilops holotype interval, Montana, USA；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
角龙类由一个取样形态矩阵表示，其中 Aquilops 正模被置于早期新角龙类；该位置及其生物地理含义不识别直接祖先或全支系首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Ceratopsia 仅以 113–100.5 Ma 展示为早白垩世 Aquilops 样本区间，而非角龙类起源或完整延续期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Early Cretaceous Aquilops sample interval, not the origin or total duration of Ceratopsia; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Ceratopsian Dinosaur from the Lower Cretaceous of Western North America, and the Biogeography of Neoceratopsia directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
