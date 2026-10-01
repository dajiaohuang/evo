---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Coelacanthimorpha
    commonName: Coelacanths
    commonNameZh: 腔棘鱼类
    rank: order
    taxonId: ""
    firstAppearance: 409
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Coelacanthimorpha
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
      reviewedAgainstReferenceVersion: takezaki-nishihara-2016-coelacanth DOI 10.1093/gbe/evw071; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: takezaki-nishihara-2016-coelacanth
          pages: 1208–1221
          figure: Figures 1–5; supplementary alignments
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Coelacanthimorpha
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: broughton-2013-bony-fish-tempo; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: broughton-2013-bony-fish-tempo
          pages: Article 2ca8041495ffafd0c92756e75247483e
          figure: Figures 1–3; time-calibrated phylogeny
          quoteLocator: Timescale of bony-fish evolution; crown Sarcopterygii split
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Coelacanthimorpha
      rangeKind: global-composite
      taxonomicConcept: Living coelacanth lineage divergence model
      geographicScope: Twenty-four-calibration bony-fish relaxed-clock analysis
      olderMa: 409
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
      confidence: medium
      claimPaths:
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Coelacanthimorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: broughton-2013-bony-fish-tempo
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Coelacanthimorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Genome comparisons test the placement of the living coelacanth relative to lungfishes and tetrapods while explicitly examining outgroup bias. This extant relationship test does not delimit fossil Coelacanthimorpha, its origin, or a direct tetrapod ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond this extant relationship test does not delimit fossil Coelacanthimorpha, its origin, or a direct tetrapod ancestor.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
Abstract and Discussion: cartilaginous versus ray-finned fish outgroups, branch lengths and amino acid frequencies; topology tests
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
A 24-calibration relaxed-clock analysis estimated the living coelacanth split from lungfishes plus tetrapods near 409 Ma, supporting a model-to-present route rather than a fossil Coelacanthimorpha FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Living coelacanth lineage divergence model: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Living coelacanth lineage divergence model：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基因组比较检验现生腔棘鱼相对肺鱼与四足类的位置，并明确考察外群偏差。这一现生关系检验不能限定化石腔棘鱼类、其起源或四足类的直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
采用 24 个校准点的宽松分子钟把现生腔棘鱼与肺鱼加四足动物谱系的分化估计在约 4.09 亿年前；这支持模型至今的路线，而不是腔棘鱼类的化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
409 Ma is the study mean for the coelacanth versus lungfish-plus-tetrapod split, not a fossil occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The model-to-present route does not delimit all fossil coelacanthimorphs.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article 2ca8041495ffafd0c92756e75247483e; Figures 1–3; time-calibrated phylogeny; Timescale of bony-fish evolution; crown Sarcopterygii split
<!-- /evo:text -->
