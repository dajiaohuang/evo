---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Arthrodira
    commonName: Arthrodires
    commonNameZh: 节甲鱼类
    rank: order
    taxonId: ""
    firstAppearance: 419
    lastAppearance: 359
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Arthrodira
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
      reviewedAgainstReferenceVersion: carr-hlavin-2010-eubrachythoraci DOI 10.1111/j.1096-3642.2009.00578.x; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: carr-hlavin-2010-eubrachythoraci
          pages: 195–222
          figure: Figures 1–13; cladistic matrix
          quoteLocator: Systematic palaeontology; character analysis; Eubrachythoraci topology
    - subject:
        kind: taxon
        path: content/topics/atlas/Arthrodira
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
      reviewedAgainstReferenceVersion: carr-hlavin-2010-eubrachythoraci; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: carr-hlavin-2010-eubrachythoraci
          pages: 195–222
          figure: Figures 1–13; systematic palaeontology and matrix
          quoteLocator: Formation ages, named Dunkleosteus material and Eubrachythoraci analysis
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
    - entityPath: content/topics/atlas/Arthrodira
      rangeKind: global-composite
      taxonomicConcept: Famennian eubrachythoracid sample within Arthrodira
      geographicScope: Ohio Shale, United States, and Kettle Point Formation, Canada
      olderMa: 372.15
      youngerMa: 358.86
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
        - content/topics/atlas/Arthrodira/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: carr-hlavin-2010-eubrachythoraci
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Arthrodira

## claims / statement

<!-- evo:text /records/claims/0/statement -->
New Dunkleosteus species and an explicit Eubrachythoraci matrix provide a documented sample nested within Arthrodira. The eubrachythoracid sample neither resolves all arthrodires nor sets the order's exact global first or last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the eubrachythoracid sample neither resolves all arthrodires nor sets the order's exact global first or last appearance.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Named Dunkleosteus material from the Upper Devonian formations provides a 372.15–358.86 Ma Famennian study-sample window inside Arthrodira; it does not delimit the order globally.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Famennian eubrachythoracid sample within Arthrodira: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Famennian eubrachythoracid sample within Arthrodira：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
新的邓氏鱼物种与明确的真胸甲鱼矩阵，提供了节甲鱼目内部的一个有据样本。真胸甲鱼样本既未解决全部节甲鱼关系，也未确定该目精确的全球首末出现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
来自上泥盆统地层的具名邓氏鱼材料，为节甲鱼目内部提供 3.7215–3.5886 亿年前的法门期研究样本窗口；它不限定整个目的全球延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-level Famennian window for the named study material.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval is confined to the Dunkleosteus-bearing study sample and is not the full Arthrodira range.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
195–222; Figures 1–13; systematic palaeontology and matrix; Formation ages, named Dunkleosteus material and Eubrachythoraci analysis
<!-- /evo:text -->
