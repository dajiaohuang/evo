---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Holostei
    commonName: Gars and Bowfin
    commonNameZh: 全骨鱼类
    rank: infraclass
    taxonId: txn:63784
    firstAppearance: 251.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Holostei
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
      reviewedAgainstReferenceVersion: near-2012-ray-fin-phylogeny DOI 10.1073/pnas.1206625109; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: near-2012-ray-fin-phylogeny
          pages: 13698–13703
          figure: Figures 1–3; supplementary chronogram
          quoteLocator: Multilocus sampling; fossil calibrations; phylogeny and divergence times
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Holostei
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
          quoteLocator: "Results: Holostei 303.82–271.33 Ma"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Holostei
      rangeKind: global-composite
      taxonomicConcept: Crown Holostei molecular-clock interval
      geographicScope: Concatenated ohnologue clock model of Qi et al. 2024
      olderMa: 303.82
      youngerMa: 271.33
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Holostei/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: qi-2024-teleost-wgd-dating
          locator: "Article evae128; Figure 1; Supplementary Table S1; Results: Holostei 303.82–271.33 Ma"
      reviewStatus: automated-audit-passed
---

# Holostei

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A multilocus, fossil-calibrated ray-finned-fish tree recovers living gars and bowfin together as Holostei. The result supports sampled holostean topology; its node age is model-dependent and not a direct fossil origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the result supports sampled holostean topology; its node age is model-dependent and not a direct fossil origin date.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 2024 analysis estimated crown Holostei between 303.82 and 271.33 Ma; this is a molecular-clock interval, not a fossil first appearance or a claim that sampled taxa span every intervening age.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Holostei molecular-clock interval: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Holostei molecular-clock interval：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
多位点、化石校准的辐鳍鱼树把现生雀鳝与弓鳍鱼共同恢复为全骨类。该结果支持抽样的全骨类拓扑；其节点年龄依赖模型，不是直接的化石起源日期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
2024 年分析把全骨鱼冠群估计在 3.0382–2.7133 亿年前；这是分子钟区间，不是化石首现，也不表示样本覆盖其间每个时代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval is the reported clock range and remains sensitive to calibrations and delayed rediploidization assumptions.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The model interval is distinct from fossil minima and the living duration of gars and bowfin.
<!-- /evo:text -->
