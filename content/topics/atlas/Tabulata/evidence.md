---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tabulata
    commonName: Tabulate Corals
    commonNameZh: 床板珊瑚
    rank: order
    taxonId: ""
    firstAppearance: 488
    lastAppearance: 252
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Tabulata
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
      reviewedAgainstReferenceVersion: young-elias-1999-paleofavosites
      referenceLinks:
        - referenceId: young-elias-1999-paleofavosites
          relation: supports
          pages: 580–597
          quoteLocator: Figures 1–12; internal–external morphology comparisons
    - subject:
        kind: taxon
        path: content/topics/atlas/Tabulata
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
      reviewedAgainstReferenceVersion: oliver-1996-paleozoic-corals locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: oliver-1996-paleozoic-corals
          pages: 107–110
          figure: Opening range synthesis
          quoteLocator: Abstract; Tabulata range statement
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named intervals
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
    - entityPath: content/topics/atlas/Tabulata
      rangeKind: global-composite
      taxonomicConcept: Tabulata review-bounded fossil record
      geographicScope: Global fossil record synthesized from Early Ordovician through end-Permian
      olderMa: 486.85
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
        - content/topics/atlas/Tabulata/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: oliver-1996-paleozoic-corals
          locator: p. 107 Abstract; pp. 107–110; Early Ordovician to end-Permian Tabulata synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Tabulata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Paleofavosites specimens link internal corallite architecture with external colony growth in one sampled tabulate genus; this does not generalize that growth pattern to every Tabulata lineage or define their range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Measured internal and external morphology supports the genus-level relationship, while the narrow sample blocks class-wide extrapolation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Tabulata is displayed at 486.85–251.9 Ma as Oliver’s review-bounded Early Ordovician–end-Permian fossil record; the numerical conversion is not a specimen-level FAD/LAD or a claim of uninterrupted global occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Oliver (1996), p. 107 and the opening synthesis, explicitly states the Early Ordovician to end-Permian range. Medium confidence reflects conversion from named intervals rather than directly dated boundary specimens.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
实测内外形态支持属级关系，但狭窄样本阻止了纲级外推。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Oliver（1996）第 107 页及开篇综述明确给出早奥陶世至二叠纪末的范围。中等置信度反映该范围由命名地层区间换算，而非直接测年的边界标本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Paleofavosites 标本把一个取样床板珊瑚属的内部珊瑚体结构与外部群体生长联系起来；这不能推广到所有床板珊瑚谱系，也不能界定其范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Tabulata 的 486.85–251.9 Ma 展示限定于 Oliver 综述中的早奥陶世—二叠纪末化石记录；数值换算不是标本级首末现，也不表示连续全球占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Numerical endpoints translate the source's named Early Ordovician and end-Permian boundaries using ICS v2026/06; they are not specimen-level dates.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Oliver synthesizes an essentially continuous Early Ordovician–end-Permian tabulate-coral record; ICS supplies only the numerical conversion.
<!-- /evo:text -->
