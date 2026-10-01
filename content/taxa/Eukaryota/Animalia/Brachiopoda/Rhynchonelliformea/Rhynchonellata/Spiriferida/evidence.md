---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Spiriferida
    commonName: Spiriferids
    commonNameZh: 石燕贝类
    rank: order
    taxonId: txn:29043
    firstAppearance: 443
    lastAppearance: 201
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Rhynchonellata/Spiriferida
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: carter-1994-spiriferids
      referenceLinks:
        - referenceId: carter-1994-spiriferids
          relation: supports
          pages: 327–374
          quoteLocator: Revised classification; family and superfamily diagnoses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Rhynchonellata/Spiriferida
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
      reviewedAgainstReferenceVersion: Carter et al. 1994 DOI 10.5962/p.215817
      referenceLinks:
        - relation: supports
          referenceId: carter-1994-spiriferids
          pages: 328–329
          quoteLocator: "p. 329, Order Spiriferida and Stratigraphic Range paragraphs: Upper Ordovician–Upper Permian"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Rhynchonellata/Spiriferida
      rangeKind: global-composite
      taxonomicConcept: Spiriferida as revised by Carter et al. 1994
      geographicScope: Order-level Upper Ordovician–Upper Permian interval stated in the systematic revision
      olderMa: 458.2
      youngerMa: 251.902
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
        - content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Rhynchonellata/Spiriferida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: carter-1994-spiriferids
          locator: "328–329; p. 329, Order Spiriferida and Stratigraphic Range paragraphs: Upper Ordovician–Upper Permian"
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Spiriferida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A revised shell-character classification diagnoses and reorganizes sampled spiriferid brachiopods; it supports the systematic unit but does not establish a global first appearance, extinction boundary or direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The monographic revision provides explicit diagnoses and comparisons, while its taxonomic scope is not a complete temporal record.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Carter et al. state an Upper Ordovician–Upper Permian stratigraphic range for Spiriferida; the atlas displays 458.2–251.902 Ma by converting those named bounds with ICS v2026/06, not as direct dates, continuous occupancy or an ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The order-level systematic revision gives the two named endpoints explicitly. Medium confidence reflects revision-prone ICS numerical conversion and the difference between a stated stratigraphic range and an exhaustive occurrence audit.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
专门修订提供明确诊断与比较，但其分类范围并非完整年代记录。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
目级系统修订明确列出两个具名端点。中等置信度反映 ICS 数值会修订，也区分论文陈述的地层延限与穷尽性出现记录审计。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基于贝壳性状的修订分类诊断并重组了取样石燕贝类；它支持该系统单元，但不确定全球首现、灭绝界线或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Carter 等明确给出石燕贝目从晚奥陶世延续至晚二叠世；图谱依据 ICS 2026/06 将这些具名界限换算为 4.582–2.51902 亿年前，而不把它们称作直接测年、连续占据或祖先序列。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The source states named chronostratigraphic bounds rather than numerical ages; the displayed numbers are conversions using ICS v2026/06 and may change with future chart revisions.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Carter et al. explicitly state an Upper Ordovician–Upper Permian stratigraphic range for Spiriferida; this is not a direct-ancestor or continuous-occupancy claim.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
