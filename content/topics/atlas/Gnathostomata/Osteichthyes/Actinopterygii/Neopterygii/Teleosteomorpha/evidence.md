---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Teleosteomorpha
    commonName: Teleost Total Group
    commonNameZh: 真骨鱼总群
    rank: unranked clade
    taxonId: ""
    firstAppearance: 251.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha
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
      reviewedAgainstReferenceVersion: arratia-2017-triassic-teleostomorphs DOI 10.1080/02724634.2017.1312690; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: arratia-2017-triassic-teleostomorphs
          pages: e1312690
          figure: Figures 1–18; phylogenetic analysis
          quoteLocator: Material and locality; systematic palaeontology; character matrix
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha
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
      reviewedAgainstReferenceVersion: arratia-2017-triassic-teleostomorphs; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: arratia-2017-triassic-teleostomorphs
          pages: Article e1312690
          figure: Figures 1–18; geological setting and systematic palaeontology
          quoteLocator: Northern Italian material, horizons and basal-teleost matrix
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha
      rangeKind: global-composite
      taxonomicConcept: Northern Italian Triassic teleosteomorph sample
      geographicScope: Late Ladinian–early Carnian units sampled by Arratia 2017
      olderMa: 247
      youngerMa: 241.464
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: arratia-2017-triassic-teleostomorphs
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Teleosteomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Named Triassic teleosteomorph specimens from northern Italy are described and placed in a basal-teleost character matrix. These local specimens and topology provide a sampled minimum only, not Teleosteomorpha's exact global FAD or direct ancestors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded fossil range statement at the supplied locator. The confidence does not extend beyond these local specimens and topology provide a sampled minimum only, not Teleosteomorpha's exact global FAD or direct ancestors.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Named northern Italian teleosteomorph fossils support a 247–241.464 Ma study-sample window; the specimens do not define the global origin, survival or ancestry of Teleosteomorpha.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Northern Italian Triassic teleosteomorph sample: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的化石延限表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Northern Italian Triassic teleosteomorph sample：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
意大利北部具名三叠纪真骨形类标本得到描述，并被置入基干真骨鱼性状矩阵。这些局部标本和拓扑只提供抽样最低记录，不是真骨形类精确全球首现或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
意大利北部具名真骨形类化石支持 2.47–2.41464 亿年前的研究样本窗口；这些标本不限定真骨形类的全球起源、延续或祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Formation-scale interval for the named fossils; it is not a crown-Teleostei origin or a complete Teleosteomorpha range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The range is restricted to the primary-study specimen sample.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article e1312690; Figures 1–18; geological setting and systematic palaeontology; Northern Italian material, horizons and basal-teleost matrix
<!-- /evo:text -->
