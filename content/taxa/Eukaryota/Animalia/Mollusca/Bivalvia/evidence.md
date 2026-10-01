---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Bivalvia
    commonName: Clams & Oysters
    commonNameZh: 蛤与牡蛎
    rank: class
    taxonId: txn:16005
    firstAppearance: 521
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: vendrasco-et-al-2011-pojetaia
      referenceLinks:
        - referenceId: vendrasco-et-al-2011-pojetaia
          relation: supports
          pages: 825–850
          figure: Figures 1–12; Tables 1–2
          quoteLocator: Pojetaia material; shell microstructure; discussion of foliated aragonite and nacre
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia
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
      reviewedAgainstReferenceVersion: Vendrasco et al. 2011 DOI 10.1111/j.1475-4983.2011.01056.x
      referenceLinks:
        - relation: supports
          referenceId: vendrasco-et-al-2011-pojetaia
          pages: 825–850
          figure: Plate 1
          quoteLocator: "Materials and methods: Ajax Limestone probably Botomian; Erkeket Formation lowermost Botomian"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia
      rangeKind: global-composite
      taxonomicConcept: Bivalvia — Pojetaia study-sample window
      geographicScope: Ajax Limestone and Erkeket Formation Pojetaia material correlated with the Botomian
      olderMa: 514.5
      youngerMa: 506.5
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
        - content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: vendrasco-et-al-2011-pojetaia
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Bivalvia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pojetaia shell sections document a laminar inner microstructure in one Cambrian bivalve sample; they do not establish the global Bivalvia first appearance or continuous class range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Shell fabrics are imaged directly, while mineral identity and the taxonomic reach of one genus limit class-wide chronology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The cited Pojetaia shell material comes from probably Botomian Ajax Limestone and lowermost Botomian Erkeket Formation units, supporting a Cambrian Stage 4 study-sample envelope of 514.5–506.5 Ma for this Bivalvia route, not a global class FAD, LAD or continuous duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The paper directly identifies the sampled units but qualifies one regional correlation as probable. Medium confidence applies only to the conservative Stage 4 envelope and not to the full temporal range of Bivalvia.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
贝壳织构有直接成像，但矿物身份和单一属的分类覆盖限制了纲级年代推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
论文直接标明取样地层，但把其中一项区域对比限定为“可能”。中等置信度只适用于保守的第 4 期包络，不适用于双壳纲完整年代范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Pojetaia 贝壳切片记录了一例寒武纪双壳类样本的层状内微结构；它不确立双壳纲全球首现或连续纲级范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
所引 Pojetaia 壳体材料来自“可能为 Botomian”的 Ajax 石灰岩和最下部 Botomian 的 Erkeket 组，因此可为该双壳纲路线提供 5.145–5.065 亿年前的寒武纪第 4 期研究样本包络，而不是该纲的全球首现、末现或连续延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This Cambrian Stage 4 envelope represents the cited early-bivalve material, not a global Bivalvia FAD, LAD or continuous lineage range; the paper explicitly qualifies the Ajax correlation as probable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Vendrasco et al. document Pojetaia shell material from probably Botomian and lowermost Botomian units; ICS v2026/06 supplies the conservative Stage 4 numerical envelope.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
825–850; Materials and methods, Ajax Limestone probably Botomian and Erkeket Formation lowermost Botomian; Plate 1 captions
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
