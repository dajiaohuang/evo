---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Malacostraca
    commonName: Crabs & Shrimp
    commonNameZh: 蟹与虾类
    rank: class
    taxonId: txn:22215
    firstAppearance: 360
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Malacostraca
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
      reviewedAgainstReferenceVersion: richter-scholtz-2001-malacostraca DOI 10.1046/j.1439-0469.2001.00164.x; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: richter-scholtz-2001-malacostraca
          pages: 113–136
          figure: Figures 1–11; character matrix
          quoteLocator: Characters and taxa; cladistic analysis; discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Malacostraca
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: collette-hagadorn-2010 + van-der-wal-2017 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: collette-hagadorn-2010-archaeostraca
          relation: supports
          pages: 795–820
          figure: Arenosicaris systematic account
          quoteLocator: Discussion of the earliest Middle–Late Cambrian Phyllocarida
        - referenceId: van-der-wal-2017-malacostracan-calibrations
          relation: supports
          pages: Article e3844
          figure: Table 1
          quoteLocator: Fossil calibrations identify phyllocarids as the oldest malacostracans at at least 500 Ma
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Malacostraca
      rangeKind: global-composite
      taxonomicConcept: Phyllocarid-based oldest-malacostracan-to-living navigation envelope
      geographicScope: Reviewed Cambrian phyllocarid record and living malacostracans
      olderMa: 500
      youngerMa: 0
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
        - content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Malacostraca/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: collette-hagadorn-2010-archaeostraca
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: van-der-wal-2017-malacostracan-calibrations
          locator: pp. 1–17; Fossil calibrations; Table 1; phyllocarids identified as the oldest malacostracans at at least 500 Ma
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Malacostraca

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A morphology-based character matrix tests relationships among sampled malacostracan orders. The resulting topology is an analytical hypothesis and neither dates Malacostraca nor samples every fossil lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the resulting topology is an analytical hypothesis and neither dates Malacostraca nor samples every fossil lineage.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 500–0 Ma Malacostraca display uses the reviewed phyllocarid fossil minimum and must not be interpreted as a crown-Malacostraca divergence date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
A systematic archaeostracan study and an explicit fossil-calibration table independently support the approximately 500 Ma phyllocarid bound while leaving crown placement distinct.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
叶虾类系统研究与明确化石校准表独立支持约 500 Ma 边界，同时将冠群位置作为不同问题。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基于形态性状的矩阵检验了所抽样软甲纲各目之间的关系。所得拓扑是一项分析假说，既未给软甲纲定年，也未覆盖全部化石谱系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
500–0 Ma 的软甲纲显示采用经综述的叶虾类化石最低界，不得解释为软甲纲冠群分化日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 500 Ma edge depends on phyllocarid placement and is not a crown-Malacostraca divergence date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A systematic study places early phyllocarids in the middle–late Cambrian, and a fossil-calibration review treats phyllocarids as the oldest malacostracans at at least 500 Ma; living representatives extend the navigation envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 795–820; Arenosicaris occurrence and systematic account; discussion of the earliest Middle–Late Cambrian Phyllocarida
<!-- /evo:text -->
