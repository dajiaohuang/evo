---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Rugosa
    commonName: Horn Corals
    commonNameZh: 四射珊瑚
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
        path: content/topics/atlas/Rugosa
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: webb-1996-paleozoic-corals
      referenceLinks:
        - referenceId: webb-1996-paleozoic-corals
          relation: supports
          pages: 135–157
          quoteLocator: Sections on variation, homoplasy and rugose-coral systematics
    - subject:
        kind: taxon
        path: content/topics/atlas/Rugosa
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
          quoteLocator: Abstract; Rugosa range statement
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
    - entityPath: content/topics/atlas/Rugosa
      rangeKind: global-composite
      taxonomicConcept: Rugosa review-bounded fossil record
      geographicScope: Global fossil record synthesized from Middle Ordovician through end-Permian
      olderMa: 471.3
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
        - content/topics/atlas/Rugosa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: oliver-1996-paleozoic-corals
          locator: p. 107 Abstract; pp. 107–110; Middle Ordovician to end-Permian Rugosa synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Rugosa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A systematic review shows that morphological variation and homoplasy complicate Paleozoic coral, including rugose-coral, classification; Rugosa is therefore retained as a fossil systematic unit without claiming exact ancestry or endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The synthesis documents recurring systematic problems directly, so confidence applies to the cautionary classification claim rather than one definitive tree.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Rugosa is displayed at 471.3–251.9 Ma as Oliver’s review-bounded Middle Ordovician–end-Permian fossil record; the numerical conversion is not a specimen-level FAD/LAD or a claim of uninterrupted global occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Oliver (1996), p. 107 and the opening synthesis, explicitly states the Middle Ordovician to end-Permian range. Medium confidence reflects conversion from named intervals rather than directly dated boundary specimens.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述直接记录了反复出现的系统学问题，因此置信度适用于谨慎的分类陈述，而不是某一棵确定系统树。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Oliver（1996）第 107 页及开篇综述明确给出中奥陶世至二叠纪末的范围。中等置信度反映该范围由命名地层区间换算，而非直接测年的边界标本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统综述表明形态变异和趋同会干扰古生代珊瑚（包括四射珊瑚）分类；因此这里只把四射珊瑚保留为化石系统单元，不主张精确祖先或端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Rugosa 的 471.3–251.9 Ma 展示限定于 Oliver 综述中的中奥陶世—二叠纪末化石记录；数值换算不是标本级首末现，也不表示连续全球占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Numerical endpoints translate the source's named Middle Ordovician and end-Permian boundaries using ICS v2026/06; they are not specimen-level dates.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Oliver synthesizes an essentially continuous Middle Ordovician–end-Permian rugose-coral record; ICS supplies only the numerical stage conversion.
<!-- /evo:text -->
