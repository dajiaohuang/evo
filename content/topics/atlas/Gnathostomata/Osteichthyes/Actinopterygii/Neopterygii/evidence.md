---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Neopterygii
    commonName: New-finned Fishes
    commonNameZh: 新鳍鱼类
    rank: subclass
    taxonId: ""
    firstAppearance: 298.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - relation: supports
          referenceId: normark-1991-neopterygian-mtdna
          pages: 819–834
          figure: Figures 1–4; sequence tables
          quoteLocator: Taxon sampling; phylogenetic methods; support comparisons
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii
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
          quoteLocator: "Results: Neopterygii 331.33–312.76 Ma"
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii
      rangeKind: global-composite
      taxonomicConcept: Crown Neopterygii molecular-clock interval
      geographicScope: Concatenated ohnologue clock model of Qi et al. 2024
      olderMa: 331.33
      youngerMa: 312.76
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: qi-2024-teleost-wgd-dating
          locator: "Article evae128; Figure 1; Supplementary Table S1; Results: Neopterygii 331.33–312.76 Ma"
      reviewStatus: automated-audit-passed
---

# Neopterygii

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mitochondrial sequences test relationships among sampled neopterygians and recover a conditional topology with uneven node support. The limited extant sample does not delimit Neopterygii's fossil range, exact origin or direct ancestors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the limited extant sample does not delimit Neopterygii's fossil range, exact origin or direct ancestors.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
normark-1991-neopterygian-mtdna DOI 10.1093/oxfordjournals.molbev.a040685; concrete-locator audit at 2026.08-static-v5-rc44
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 2024 clock analysis estimated crown Neopterygii between 331.33 and 312.76 Ma; the interval is a calibrated model result, not a fossil FAD or exact lineage duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Neopterygii molecular-clock interval: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Neopterygii molecular-clock interval：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
线粒体序列检验了所抽样新鳍鱼类之间的关系，并得到节点支持度不均的条件性拓扑。有限的现生样本不能限定新鳍鱼类的化石延限、精确起源或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
2024 年分子钟分析把新鳍鱼冠群估计在 3.3133–3.1276 亿年前；该区间是校准模型结果，不是化石首现或精确谱系延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval is model- and calibration-dependent; it is not the first fossil occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The display records the reported crown-node interval only and does not imply a continuous sampled fossil record.
<!-- /evo:text -->
