---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Titanosauria
    commonName: Titanosaurs
    commonNameZh: 泰坦巨龙类
    rank: clade
    taxonId: txn:55585
    firstAppearance: 145
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Titanosauria
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
      reviewedAgainstReferenceVersion: carballido-2017-patagotitan concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: carballido-2017-patagotitan
          relation: supports
          pages: 284:20171219
          figure: Figures 1–4; Supplementary Information
          quoteLocator: Specimen sample; geochronology; phylogenetic analysis; body-mass methods
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Titanosauria
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
      reviewedAgainstReferenceVersion: carballido-2017-patagotitan @ DOI 10.1098/rspb.2017.1219
      referenceLinks:
        - relation: supports
          referenceId: carballido-2017-patagotitan
          pages: 284:20171219
          figure: Figures 1–4; Supplementary Information
          quoteLocator: Specimen sample; geochronology; phylogenetic analysis; body-mass methods
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Titanosauria
      rangeKind: global-composite
      taxonomicConcept: Titanosauria — source-bounded sample window
      geographicScope: Cerro Barcino Formation Patagotitan quarry, Patagonia
      olderMa: 101.8
      youngerMa: 101.4
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Titanosauria/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: carballido-2017-patagotitan
          locator: 284:20171219; Specimen sample; geochronology; phylogenetic analysis; body-mass methods
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Titanosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Titanosauria is represented by the Patagotitan specimen set and its sampled sauropod matrix placement; the result constrains that taxon and a body-mass analysis, not the complete clade range, origin or ancestor chain.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimens, geochronology and matrix are direct, but broader body-mass evolution and placement depend on comparative models and sampling.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Titanosauria is displayed at 101.8–101.4 Ma only as the directly dated Patagotitan quarry window, not the first or last appearance of Titanosauria. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Titanosauria uses Carballido, J.L.; Pol, D.; Otero, A.; Cerda, I.A.; Salgado, L.; Garrido, A.C.; Ramezani, J.; Cúneo, N.R.; Krause, J.M. (2017) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Cerro Barcino Formation Patagotitan quarry, Patagonia; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本、地质年代和矩阵是直接证据，但更广的体重演化及位置依赖比较模型和取样。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Titanosauria 采用 Carballido, J.L.; Pol, D.; Otero, A.; Cerda, I.A.; Salgado, L.; Garrido, A.C.; Ramezani, J.; Cúneo, N.R.; Krause, J.M.（2017）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Cerro Barcino Formation Patagotitan quarry, Patagonia；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
泰坦巨龙类由巴塔哥巨龙标本集合及其在取样蜥脚类矩阵中的位置表示；结果约束该类群和体重分析，而非完整支系范围、起源或祖先链。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Titanosauria 仅以 101.8–101.4 Ma 展示为直接测年的 Patagotitan 采石场窗口，而非泰坦巨龙类首现或末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the directly dated Patagotitan quarry window, not the first or last appearance of Titanosauria; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A new giant titanosaur sheds light on body mass evolution among sauropod dinosaurs directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
