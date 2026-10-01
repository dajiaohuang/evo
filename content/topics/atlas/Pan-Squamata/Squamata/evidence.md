---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Squamata
    commonName: Lizards & Snakes
    commonNameZh: 蜥蜴与蛇
    rank: order
    taxonId: ""
    firstAppearance: 168
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Pan-Squamata/Squamata
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
      reviewedAgainstReferenceVersion: pyron-2013-squamate-phylogeny concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: pyron-2013-squamate-phylogeny
          relation: supports
          pages: 1–53
          figure: Figures 1–28; Additional files 1–7
          quoteLocator: p. 4 Figure 1; Methods; phylogenetic results; revised classification; limitations
    - subject:
        kind: taxon
        path: content/topics/atlas/Pan-Squamata/Squamata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: simoes-2018-megachirella; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: simoes-2018-megachirella
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: Middle Triassic specimen and combined-evidence stem-squamate placement
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
    - entityPath: content/topics/atlas/Pan-Squamata/Squamata
      rangeKind: global-composite
      taxonomicConcept: Crown Squamata temporal range
      geographicScope: Crown interval pending a crown-specific fossil calibration
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
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
        - content/topics/atlas/Pan-Squamata/Squamata/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: simoes-2018-megachirella
          locator: 706–709; Figures 1–2; Extended Data Figures 1–8; Middle Triassic specimen and combined-evidence stem-squamate placement
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Squamata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Squamata route follows a molecular supermatrix classification of 4,161 sampled living lizard and snake species; it is an extant topology hypothesis and does not establish a fossil first appearance, ancestral species or exact divergence date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The species sample and analysis are large and explicit, but gene coverage is uneven and the source is not a fossil chronology. Medium confidence preserves those boundaries.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Megachirella provides a Middle Triassic Pan-Squamata stem sample, not a crown-Squamata first appearance; the former 201.4 Ma–present crown display is therefore withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Squamata temporal range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
物种取样和分析规模大且明确，但基因覆盖不均，来源也不是化石年代学研究；中等置信度保留这些边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Squamata temporal range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
有鳞目路线采用覆盖 4,161 个取样现生蜥蜴和蛇类物种的分子超级矩阵分类；它是现生类群拓扑假说，并不建立化石首现、祖先物种或精确分化日期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Megachirella 提供中三叠世泛有鳞类干群样本，而不是有鳞类冠群首现；因此原先 2.014 亿年前至今的冠群显示暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Megachirella is placed on the squamate stem and cannot by itself validate the former crown display.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 201.4 Ma–present range is withheld rather than transferring a Pan-Squamata stem occurrence to crown Squamata.
<!-- /evo:text -->
