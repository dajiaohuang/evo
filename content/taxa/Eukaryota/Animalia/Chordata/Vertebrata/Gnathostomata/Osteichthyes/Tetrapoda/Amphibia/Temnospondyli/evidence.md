---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Temnospondyli
    commonName: Temnospondyls
    commonNameZh: 离片椎类
    rank: order
    taxonId: txn:36320
    firstAppearance: 330
    lastAppearance: 120
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia/Temnospondyli
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
      reviewedAgainstReferenceVersion: schoch-2013-temnospondyl-phylogeny DOI 10.1080/14772019.2012.699006; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: schoch-2013-temnospondyl-phylogeny
          pages: 673–705
          figure: Figures 1–12; character matrix
          quoteLocator: Taxon sampling; character matrix; topology and sensitivity
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia/Temnospondyli
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
      reviewedAgainstReferenceVersion: schoch-2013-temnospondyl-phylogeny; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: schoch-2013-temnospondyl-phylogeny
          pages: 673–705
          figure: Figures 1–12; taxon matrix
          quoteLocator: Abstract; 72-taxon sample spanning Early Carboniferous–Early Cretaceous
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia/Temnospondyli
      rangeKind: global-composite
      taxonomicConcept: Temnospondyl taxa sampled by Schoch 2013
      geographicScope: Seventy-two-taxon morphology matrix across published formations
      olderMa: 358.9
      youngerMa: 100.5
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia/Temnospondyli/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: schoch-2013-temnospondyl-phylogeny
          locator: 673–705; Figures 1–12; taxon matrix; Abstract; 72-taxon sample spanning Early Carboniferous–Early Cretaceous
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Temnospondyli

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An inclusive morphology matrix tests relationships among major sampled temnospondyl clades. The analytical topology does not directly delimit all temnospondyl temporal endpoints or resolve every disputed placement.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the analytical topology does not directly delimit all temnospondyl temporal endpoints or resolve every disputed placement.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 72-taxon analysis explicitly samples Temnospondyli from the Early Carboniferous through the Early Cretaceous, supporting a 358.9–100.5 Ma matrix-sample envelope rather than exact global endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Temnospondyl taxa sampled by Schoch 2013: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Temnospondyl taxa sampled by Schoch 2013：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
包容性形态矩阵检验了所抽样主要离片椎类群之间的关系。分析拓扑不能直接限定全部离片椎类的时间端点，也未解决所有有争议的位置。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
该 72 类群分析明确采样早石炭世至早白垩世的离片椎类，因此支持 3.589–1.005 亿年前的矩阵样本范围，而不是精确全球端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Series-level envelope from Early Carboniferous through Early Cretaceous study taxa; endpoints are not global audits.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The range records the analysis sample explicitly described as spanning the full stratigraphic breadth considered.
<!-- /evo:text -->
