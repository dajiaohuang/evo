---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Dicynodontia
    commonName: Dicynodonts
    commonNameZh: 二齿兽类
    rank: suborder
    taxonId: txn:312556
    firstAppearance: 268
    lastAppearance: 201
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Anomodontia/Dicynodontia
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: angielczyk-2003-dicynodont-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: angielczyk-2003-dicynodont-phylogeny
          pages: 157–212
          quoteLocator: Phylogenetic analysis; Results; Discussion of geographic sampling disparity
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Anomodontia/Dicynodontia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: angielczyk-2003-dicynodont-phylogeny @ DOI 10.1046/j.1096-3642.2003.00081.x
      referenceLinks:
        - relation: supports
          referenceId: angielczyk-2003-dicynodont-phylogeny
          pages: 157–212
          quoteLocator: Phylogenetic analysis; Results; Discussion of geographic sampling disparity
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Anomodontia/Dicynodontia
      rangeKind: global-composite
      taxonomicConcept: Dicynodontia — source-bounded sample window
      geographicScope: Russian late Permian dicynodont sample analysed by Angielczyk
      olderMa: 259.5
      youngerMa: 251.9
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Anomodontia/Dicynodontia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: angielczyk-2003-dicynodont-phylogeny
          locator: 157–212; Phylogenetic analysis; Results; Discussion of geographic sampling disparity
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Dicynodontia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A broad morphology matrix places the sampled Russian Permian taxa within competing dicynodont topologies and exposes strong Gondwanan–Laurasian sampling imbalance; Dicynodontia is therefore represented as a matrix-tested extinct radiation, not a resolved ancestor chain.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study directly analyses dicynodont characters and biogeographic sampling. The wording retains its unresolved nodes and sampling caveat.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Dicynodontia is displayed at 259.5–251.9 Ma only as the Russian Permian matrix sample, not the global first and last appearances of Dicynodontia. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Dicynodontia uses Angielczyk, K.D. (2003) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Russian late Permian dicynodont sample analysed by Angielczyk; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究直接分析二齿兽类性状与生物地理取样；措辞保留未解析节点和取样限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Dicynodontia 采用 Angielczyk, K.D.（2003）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Russian late Permian dicynodont sample analysed by Angielczyk；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套广泛形态矩阵把取样的俄罗斯二叠纪类群置于相互竞争的二齿兽类拓扑中，并揭示冈瓦纳—劳亚取样严重不均；因此二齿兽下目被呈现为经矩阵检验的灭绝辐射，而非已解析的祖先链。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Dicynodontia 仅以 259.5–251.9 Ma 展示为俄罗斯晚二叠世矩阵样本，而非二齿兽类全球首现与末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Russian Permian matrix sample, not the global first and last appearances of Dicynodontia; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Phylogenetic analysis of Russian Permian dicynodonts (Therapsida: Anomodontia): implications for Permian biostratigraphy and Pangaean biogeography directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
