---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Elasmosauridae
    commonName: Elasmosaurs
    commonNameZh: 薄板龙类
    rank: family
    taxonId: txn:38175
    firstAppearance: 130
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Elasmosauridae
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
      reviewedAgainstReferenceVersion: ogorman-2019-elasmosaurid-phylogeny concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: ogorman-2019-elasmosaurid-phylogeny
          relation: supports
          pages: 39(5):e1692025
          figure: Figures 1–7; Tables 1–2; supplementary matrix
          quoteLocator: Systematic paleontology; phylogenetic analysis; paleobiogeographic discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Elasmosauridae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ogorman-2019-elasmosaurid-phylogeny; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: ogorman-2019-elasmosaurid-phylogeny
          pages: Article e1692025
          figure: Figures 1–7; Tables 1–2
          quoteLocator: Aphrosaurus systematic reappraisal, Moreno Formation age and matrix
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Elasmosauridae
      rangeKind: global-composite
      taxonomicConcept: Aphrosaurus furlongi represented elasmosaurid sample
      geographicScope: Maastrichtian Moreno Formation, California, United States
      olderMa: 72.1
      youngerMa: 66
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Elasmosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: ogorman-2019-elasmosaurid-phylogeny
          locator: Article e1692025; Figures 1–7; Tables 1–2; Aphrosaurus systematic reappraisal, Moreno Formation age and matrix
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Elasmosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Elasmosauridae is represented by the taxa sampled in O’Gorman’s revised matrix and paleobiogeographic analysis; the recovered topology and recognized Cenomanian/Santonian intervals are study results, not exact family-wide origin or extinction boundaries.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source directly revises a specimen and runs a family-level matrix, but topology and inferred biogeographic phases remain sampling-dependent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The reappraised Aphrosaurus furlongi material from the Maastrichtian Moreno Formation supports a 72.1–66 Ma elasmosaurid study-sample window, not exact family-wide origin or extinction.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Aphrosaurus furlongi represented elasmosaurid sample: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源直接修订标本并运行科级矩阵，但拓扑和推断的古生物地理阶段仍依赖取样。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Aphrosaurus furlongi represented elasmosaurid sample：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
薄板龙科表示 O’Gorman 修订矩阵和古生物地理分析中取样的类群；恢复的拓扑及识别出的森诺曼期/桑托期区间是研究结果，不是全科精确起源或灭绝边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
重新评估的 Maastrichtian Moreno 组 Aphrosaurus furlongi 材料支持 7210–6600 万年前的薄板龙科研究样本窗口，而非整个科的精确起源或灭绝。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-level Maastrichtian window for the reappraised specimen and formation.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval is specimen- and study-scoped, not the complete Elasmosauridae range.
<!-- /evo:text -->
