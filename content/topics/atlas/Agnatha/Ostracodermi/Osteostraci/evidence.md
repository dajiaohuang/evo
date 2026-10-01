---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Osteostraci
    commonName: Osteostracans
    commonNameZh: 骨甲类
    rank: subclass
    taxonId: ""
    firstAppearance: 435
    lastAppearance: 370
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Ostracodermi/Osteostraci
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
      reviewedAgainstReferenceVersion: sansom-2009-osteostraci-phylogeny DOI 10.1017/S1477201908002551; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: sansom-2009-osteostraci-phylogeny
          pages: 95–115
          figure: Figures 1–7; character matrix
          quoteLocator: Taxon observations; phylogenetic analysis; revised classification
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Ostracodermi/Osteostraci
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
      reviewedAgainstReferenceVersion: sansom-2009-osteostraci-phylogeny; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: sansom-2009-osteostraci-phylogeny
          pages: 95–115
          figure: Figures 1–7; sampled genera and character matrix
          quoteLocator: Taxon observations, stratigraphic context and revised classification
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
    - entityPath: content/topics/atlas/Agnatha/Ostracodermi/Osteostraci
      rangeKind: global-composite
      taxonomicConcept: Osteostraci genera sampled by Sansom 2009
      geographicScope: Dated genera represented in the morphology matrix
      olderMa: 433.4
      youngerMa: 358.9
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
        - content/topics/atlas/Agnatha/Ostracodermi/Osteostraci/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: sansom-2009-osteostraci-phylogeny
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Osteostraci

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Genus-level observations and a morphology matrix test osteostracan phylogeny, classification and character polarity. The analysis is a sampled systematic hypothesis and does not directly establish temporal endpoints for Osteostraci.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the analysis is a sampled systematic hypothesis and does not directly establish temporal endpoints for Osteostraci.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The sampled osteostracan genera occupy a Silurian–Devonian study window of about 433.4–358.9 Ma; the envelope records the matrix sample, not exact global origin or extinction.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Osteostraci genera sampled by Sansom 2009: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Osteostraci genera sampled by Sansom 2009：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
属级观察和形态矩阵检验了骨甲鱼类的系统关系、分类与性状极性。该分析是抽样的系统假说，不能直接确立骨甲鱼类的时间端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
该研究所采样的骨甲鱼类属处于约 4.334–3.589 亿年前的志留纪—泥盆纪窗口；此范围记录的是矩阵样本，而非全球起源或灭绝的精确端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-bound matrix-sample envelope; unsampled occurrences can extend either edge.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval follows the stratigraphic distribution of sampled genera and does not claim exact clade endpoints.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
95–115; Figures 1–7; sampled genera and character matrix; Taxon observations, stratigraphic context and revised classification
<!-- /evo:text -->
