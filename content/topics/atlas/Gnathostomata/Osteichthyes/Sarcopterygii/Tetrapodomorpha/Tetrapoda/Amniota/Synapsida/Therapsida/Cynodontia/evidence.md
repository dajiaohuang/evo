---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cynodontia
    commonName: Cynodonts
    commonNameZh: 犬齿兽类
    rank: suborder
    taxonId: ""
    firstAppearance: 260
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia
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
      reviewedAgainstReferenceVersion: ruta-2013-cynodont-radiation concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: ruta-2013-cynodont-radiation
          pages: Article 20131865
          figure: Figure 1
          quoteLocator: Abstract; Introduction; phylogenetic methods and results
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia
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
      reviewedAgainstReferenceVersion: ruta-2013-cynodont-radiation @ DOI 10.1098/rspb.2013.1865
      referenceLinks:
        - relation: supports
          referenceId: ruta-2013-cynodont-radiation
          pages: Article 20131865
          figure: Figure 1
          quoteLocator: Abstract; Introduction; phylogenetic methods and results
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia
      rangeKind: global-composite
      taxonomicConcept: Cynodontia — source-bounded sample window
      geographicScope: Late Permian–Early Jurassic cynodont sample analysed by Ruta et al.
      olderMa: 259.5
      youngerMa: 174.7
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: ruta-2013-cynodont-radiation
          locator: Article 20131865; Abstract; Introduction; phylogenetic methods and results
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Cynodontia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An enlarged skeletal-character analysis samples all main Late Permian–Early Jurassic cynodont clades and recovers basal cynodonts and epicynodonts as successive grades relative to Eucynodontia; the topology is a matrix hypothesis, not observed ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The cited analysis provides explicit taxon and character sampling and a stratigraphic tree. Confidence remains medium because higher relationships depend on matrix composition.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Cynodontia is displayed at 259.5–174.7 Ma only as the temporal coverage of the matrix sample, not an uninterrupted global range or direct ancestor chain. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Cynodontia uses Ruta, M.; Botha-Brink, J.; Mitchell, S.A.; Benton, M.J. (2013) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Permian–Early Jurassic cynodont sample analysed by Ruta et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
所引分析提供明确的类群、性状取样和地层树；由于高层关系依赖矩阵组成，置信度保持中等。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Cynodontia 采用 Ruta, M.; Botha-Brink, J.; Mitchell, S.A.; Benton, M.J.（2013）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Permian–Early Jurassic cynodont sample analysed by Ruta et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项扩充的骨骼性状分析取样晚二叠世至早侏罗世所有主要犬齿兽类支系，并把基干犬齿兽与 Epicynodontia 恢复为相对于真犬齿兽类的连续等级；该拓扑是矩阵假说，而非已观测祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Cynodontia 仅以 259.5–174.7 Ma 展示为矩阵样本的时间覆盖，而非连续全球范围或直接祖先链。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the temporal coverage of the matrix sample, not an uninterrupted global range or direct ancestor chain; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The radiation of cynodonts and the ground plan of mammalian morphological diversity directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
