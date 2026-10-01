---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Elopomorpha
    commonName: Eels, Tarpons and Relatives
    commonNameZh: 海鲢总目
    rank: superorder
    taxonId: ""
    firstAppearance: 201.4
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Elopomorpha
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
      reviewedAgainstReferenceVersion: chen-2014-elopomorpha-phylogeny DOI 10.1016/j.ympev.2013.09.002; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: chen-2014-elopomorpha-phylogeny
          pages: 152–161
          figure: Figures 1–4; supplementary alignments
          quoteLocator: Taxon and marker sampling; topology comparisons; classification
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Elopomorpha
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
          quoteLocator: "Results: Elopomorpha 239.12–213.05 Ma"
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Elopomorpha
      rangeKind: global-composite
      taxonomicConcept: Crown Elopomorpha molecular-clock interval
      geographicScope: Concatenated ohnologue clock model of Qi et al. 2024
      olderMa: 239.12
      youngerMa: 213.05
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Elopomorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: qi-2024-teleost-wgd-dating
          locator: "Article evae128; Figure 1; Supplementary Table S1; Results: Elopomorpha 239.12–213.05 Ma"
      reviewStatus: automated-audit-passed
---

# Elopomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Six nuclear and mitochondrial markers across a 70-species sample test elopomorph relationships and classification. Marker conflict and incomplete sampling are retained; the study does not set the clade's fossil range or global origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond marker conflict and incomplete sampling are retained; the study does not set the clade's fossil range or global origin.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 2024 clock analysis estimated crown Elopomorpha between 239.12 and 213.05 Ma; this is a calibrated divergence interval, not a fossil FAD or exact taxon duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Elopomorpha molecular-clock interval: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Elopomorpha molecular-clock interval：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在 70 个物种样本中使用六个核与线粒体标记，检验了海鲢总目关系及分类。这里保留标记冲突和抽样不全；该研究不能确定该支的化石延限或全球起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
2024 年分子钟分析把海鲢形类冠群估计在 2.3912–2.1305 亿年前；这是校准分化区间，不是化石首现或精确类群延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval is a model estimate and not a fossil minimum or global occurrence range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Only the reported divergence interval is displayed.
<!-- /evo:text -->
