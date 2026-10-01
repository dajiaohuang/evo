---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ammonitida
    commonName: True Ammonites
    commonNameZh: 真菊石类
    rank: order
    taxonId: txn:84931
    firstAppearance: 201
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ammonitida
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
      reviewedAgainstReferenceVersion: bardin-2017-hildoceratidae
      referenceLinks:
        - referenceId: bardin-2017-hildoceratidae
          relation: supports
          pages: 21–40
          quoteLocator: Figures 2–8; integrated coding and phylogenetic results
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ammonitida
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
      reviewedAgainstReferenceVersion: Bardin et al. 2017 DOI 10.1111/cla.12151
      referenceLinks:
        - relation: supports
          referenceId: bardin-2017-hildoceratidae
          pages: 21–40
          figure: Figures 2–8
          quoteLocator: "Abstract: Early Jurassic Hildoceratidae; Methods: 105-taxon matrix"
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named stages and periods used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ammonitida
      rangeKind: global-composite
      taxonomicConcept: Ammonitida — Early Jurassic Hildoceratidae study-sample window
      geographicScope: Early Jurassic Hildoceratidae sampled in the conch-character analysis
      olderMa: 201.4
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ammonitida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bardin-2017-hildoceratidae
          locator: 21–40; Abstract, Early Jurassic Hildoceratidae; Methods, 105-taxon matrix; Figures 2–8
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Ammonitida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An integrated conch-character analysis resolves relationships within sampled Hildoceratidae; this family-level result supplies an Ammonitida case study rather than an order-wide tree or range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Explicit coding and sensitivity analyses support the family topology, while narrow scope prevents extending it to all Ammonitida.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Bardin et al. analyze a 105-taxon Early Jurassic Hildoceratidae matrix, supporting a 201.4–174.7 Ma period envelope for that sampled ammonitid family rather than the complete Ammonitida range or a Cretaceous extinction endpoint.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The paper directly scopes its family sample to the Early Jurassic. Medium confidence applies to the broad period envelope and not to unsampled ammonitid lineages.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
明确编码与敏感性分析支持科级拓扑，但狭窄范围不能扩展到全部菊石目。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
论文把该科级样本直接限定在早侏罗世。中等置信度适用于宽泛的纪级包络，不外推到未取样的菊石目谱系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
整合壳体性状分析解析了取样 Hildoceratidae 内部关系；这一科级结果是菊石目案例，而不是目级系统树或范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Bardin 等分析了一个包含 105 个类群的早侏罗世 Hildoceratidae 矩阵，因此支持该菊石目科级样本的 2.014–1.747 亿年前纪级包络，而不是菊石目完整延限或白垩纪灭绝端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The Early Jurassic period envelope represents one sampled ammonitid family, not the complete Ammonitida range or an order-wide extinction endpoint.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Bardin et al. analyze a 105-taxon Hildoceratidae matrix explicitly scoped to the Early Jurassic; ICS v2026/06 supplies the period boundaries.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
