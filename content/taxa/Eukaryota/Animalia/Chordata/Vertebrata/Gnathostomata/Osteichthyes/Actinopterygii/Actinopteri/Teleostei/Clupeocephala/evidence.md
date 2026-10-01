---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Clupeocephala
    commonName: Clupeocephalans
    commonNameZh: 鲱头鱼类
    rank: unranked clade
    taxonId: txn:184584
    firstAppearance: 201.4
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Clupeocephala
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
      reviewedAgainstReferenceVersion: takezaki-2021-teleost-divergence DOI 10.1093/gbe/evab052; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: takezaki-2021-teleost-divergence
          pages: evab052
          figure: Figures 1–6; supplementary datasets
          quoteLocator: Dataset construction; topology comparisons; sampling sensitivity
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Clupeocephala
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
      reviewedAgainstReferenceVersion: qi-2024-teleost-wgd-dating; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: qi-2024-teleost-wgd-dating
          pages: Article evae128
          figure: Figure 1; Supplementary Table S1
          quoteLocator: "Results: Clupeocephala 210.83–186.01 Ma"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Clupeocephala
      rangeKind: global-composite
      taxonomicConcept: Crown Clupeocephala molecular-clock interval
      geographicScope: Concatenated ohnologue clock model of Qi et al. 2024
      olderMa: 210.83
      youngerMa: 186.01
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Clupeocephala/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: qi-2024-teleost-wgd-dating
          locator: "Article evae128; Figure 1; Supplementary Table S1; Results: Clupeocephala 210.83–186.01 Ma"
      reviewStatus: automated-audit-passed
---

# Clupeocephala

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Genome-scale comparisons test early teleost branching patterns that include the sampled Clupeocephala route. The recovered position changes with species and gene sampling, so it is not presented as a fossil FAD, ancestor or exact clade age.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the recovered position changes with species and gene sampling, so it is not presented as a fossil FAD, ancestor or exact clade age.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 2024 clock analysis estimated crown Clupeocephala between 210.83 and 186.01 Ma; the interval is a divergence model, not a fossil first appearance or ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Clupeocephala molecular-clock interval: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Clupeocephala molecular-clock interval：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基因组尺度比较检验了包含所抽样鲱头鱼类路线的早期真骨鱼分支模式。所得位置会随物种和基因抽样变化，因此不被表述为化石首现、祖先或精确支系年龄。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
2024 年分子钟分析把鲱头鱼类冠群估计在 2.1083–1.8601 亿年前；该区间是分化模型，不是化石首现或祖先主张。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The reported interval is model- and calibration-dependent.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval represents a crown-node estimate, not a complete fossil or species range.
<!-- /evo:text -->
