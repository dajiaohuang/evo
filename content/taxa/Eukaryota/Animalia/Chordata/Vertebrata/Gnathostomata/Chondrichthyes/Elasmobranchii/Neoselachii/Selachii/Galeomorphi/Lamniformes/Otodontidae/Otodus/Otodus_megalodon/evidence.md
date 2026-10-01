---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Otodus megalodon
    commonName: Megalodon
    commonNameZh: 巨齿鲨
    rank: species
    taxonId: txn:80603
    firstAppearance: 23
    lastAppearance: 3.6
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Elasmobranchii/Neoselachii/Selachii/Galeomorphi/Lamniformes/Otodontidae/Otodus/Otodus_megalodon
      claimKind: scientific
      claimType: fossil-range
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
          referenceId: pimiento-clements-2014-megalodon-extinction
          pages: e111086
          figure: Figures 1–3; Tables 1–2; supporting data
          quoteLocator: Occurrence dataset; optimal linear estimation; extinction interval
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Elasmobranchii/Neoselachii/Selachii/Galeomorphi/Lamniformes/Otodontidae/Otodus/Otodus_megalodon
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
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/1/reviewedAgainstReferenceVersion
      referenceLinks:
        - relation: supports
          referenceId: pimiento-clements-2014-megalodon-extinction
          pages: e111086
          figure: Figure 1 and caption
          quoteLocator: "Results, paragraph beginning Results from applying OLE: oldest inferred extinction date 3.5 Ma; modal estimate 2.6 Ma"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Elasmobranchii/Neoselachii/Selachii/Galeomorphi/Lamniformes/Otodontidae/Otodus/Otodus_megalodon
      rangeKind: global-composite
      taxonomicConcept: Otodus megalodon extinction-analysis window under the paper’s Carcharocles usage
      geographicScope: Dated occurrence sample compiled by Pimiento and Clements 2014
      olderMa: 3.5
      youngerMa: 2.6
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Elasmobranchii/Neoselachii/Selachii/Galeomorphi/Lamniformes/Otodontidae/Otodus/Otodus_megalodon/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: pimiento-clements-2014-megalodon-extinction
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Otodus megalodon

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A dated occurrence sample was analysed under the paper's Carcharocles megalodon usage to estimate a probabilistic extinction window. The atlas uses Otodus megalodon; the sampled estimate is not an exact global last appearance and does not resolve the nomenclatural choice.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded fossil range statement at the supplied locator. The confidence does not extend beyond the atlas uses Otodus megalodon; the sampled estimate is not an exact global last appearance and does not resolve the nomenclatural choice.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
pimiento-clements-2014-megalodon-extinction DOI 10.1371/journal.pone.0111086; concrete-locator audit at 2026.08-static-v5-rc44
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Pimiento and Clements (2014), using Carcharocles megalodon, reported an oldest inferred extinction date of 3.5 Ma and a modal estimate of 2.6 Ma. This study-specific interval is neither the complete species range nor an exact LAD; the atlas uses Otodus megalodon.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Otodus megalodon extinction-analysis window under the paper’s Carcharocles usage: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/1/reviewedAgainstReferenceVersion -->
pimiento-clements-2014-megalodon-extinction; Results and Figure 1 numerically rechecked against article and 2015 equation-only correction on 2026-09-05
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的化石延限表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Otodus megalodon extinction-analysis window under the paper’s Carcharocles usage：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
论文以 Carcharocles megalodon 名称分析具年代的出现记录样本，并估计概率性灭绝窗口。图谱采用 Otodus megalodon；这一抽样估计不是精确全球末现，也不裁决命名选择。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Pimiento 和 Clements（2014）以 Carcharocles megalodon 为名，报告了 350 万年前的最早推定灭绝时间与 260 万年前的众数估计。这一研究特定区间既不是完整物种延限，也不是精确末现；图谱采用 Otodus megalodon。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The endpoints are the oldest inferred extinction date (3.5 Ma) and modal estimate (2.6 Ma) reported by Pimiento and Clements (2014), not a confidence interval, complete species range or exact last individual.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Study-specific OLE estimates from Pimiento and Clements (2014), Results and Figure 1; not the revised estimates of later studies. Nomenclature follows Otodus in the atlas.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
e111086; Results, paragraph beginning Results from applying OLE; Figure 1 and caption (oldest inferred date 3.5 Ma; modal estimate 2.6 Ma)
<!-- /evo:text -->
