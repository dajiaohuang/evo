---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Heterostraci
    commonName: Heterostracans
    commonNameZh: 异甲类
    rank: subclass
    taxonId: txn:117963
    firstAppearance: 443
    lastAppearance: 378
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Pteraspidomorphi/Pteraspidomorpha/Heterostraci
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
      reviewedAgainstReferenceVersion: randle-2025-heterostraci-phylogeny DOI 10.1002/spp2.70030; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: randle-2025-heterostraci-phylogeny
          pages: e70030
          figure: Figures 1–10; supplementary matrix
          quoteLocator: Taxon sampling; character matrix; phylogenetic results and sensitivity
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Pteraspidomorphi/Pteraspidomorpha/Heterostraci
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
      reviewedAgainstReferenceVersion: randle-2025-heterostraci-phylogeny; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: randle-2025-heterostraci-phylogeny
          pages: Article e70030
          figure: Figures 1–10; supplementary taxon and stratigraphic data
          quoteLocator: Taxon sampling, occurrence coding and phylogenetic results
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Pteraspidomorphi/Pteraspidomorpha/Heterostraci
      rangeKind: global-composite
      taxonomicConcept: Heterostraci taxa sampled by Randle et al. 2025
      geographicScope: Stratigraphic occurrences coded for the study matrix
      olderMa: 443.8
      youngerMa: 393.3
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Pteraspidomorphi/Pteraspidomorpha/Heterostraci/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: randle-2025-heterostraci-phylogeny
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Heterostraci

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A revised morphology matrix provides an explicit phylogenetic hypothesis across sampled Heterostraci. The topology does not convert stratigraphic sampling into an exact group origin, extinction date or ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the topology does not convert stratigraphic sampling into an exact group origin, extinction date or ancestor sequence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The Heterostraci study matrix includes dated Silurian–Early Devonian occurrences, supporting a 443.8–393.3 Ma study-sample window; this is not a global FAD, LAD or ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Heterostraci taxa sampled by Randle et al. 2025: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Heterostraci taxa sampled by Randle et al. 2025：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
修订后的形态矩阵为所抽样异甲类提供了明确的系统假说。该拓扑不能把地层抽样转化为精确的全群起源、灭绝日期或祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
异甲鱼类研究矩阵纳入了志留纪至早泥盆世的定年记录，支持 4.438–3.933 亿年前的研究样本窗口；这不是全球首现、末现或祖先序列。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-bound envelope of the study sample; it is not a global first or last appearance audit.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Silurian–Early Devonian window summarizes the dated taxa used in the whole-group analysis, not the exact duration of Heterostraci.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article e70030; Figures 1–10; supplementary taxon and stratigraphic data; Taxon sampling, occurrence coding and phylogenetic results
<!-- /evo:text -->
