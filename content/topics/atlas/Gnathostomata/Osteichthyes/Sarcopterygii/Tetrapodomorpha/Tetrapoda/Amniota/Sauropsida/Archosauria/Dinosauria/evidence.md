---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Dinosauria
    commonName: Dinosaurs
    commonNameZh: 恐龙
    rank: superorder
    taxonId: ""
    firstAppearance: 233.2
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: cabreira-2016-buriolestes primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: cabreira-2016-buriolestes
          relation: supports
          pages: 3090–3095
          figure: Figures 1–4; Supplemental Information
          quoteLocator: Holotype and assemblage; radiometric context; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
      rangeKind: global-composite
      taxonomicConcept: Dinosauria fossil-sample and living-bird navigation span
      geographicScope: Candelária Sequence, Paraná Basin, Brazil; living bird continuation
      olderMa: 233.2
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: cabreira-2016-buriolestes
          locator: pp. 3090–3095; Figures 1–4; Supplemental Information
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
  classification-support:
    - support: moderate
      groupingBasis:
        markdown: evidence.md
        field: /records/classification-support/0/groupingBasis
      conflicts:
        markdown: evidence.md
        field: /records/classification-support/0/conflicts
      references:
        - open-tree
        - pbdb-api-2016
---

# Dinosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Buriolestes ULBRA-PVT280 from the approximately 233.2 Ma assemblage anchors the 233.2–0 Ma Dinosauria route, with living birds extending the navigation span; the specimen does not establish a global dinosaur FAD or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named specimen, assemblage context and morphology matrix are primary evidence. Living continuation belongs to the atlas navigation closure, while the fossil endpoint remains local and sample-bounded.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名标本、组合背景及形态矩阵属于一手证据；现生延续来自图谱导航闭包，而化石端点仍局限于当地样本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
约 233.2 Ma 生物组合中的 Buriolestes 正模 ULBRA-PVT280 锚定 233.2–0 Ma 的恐龙路线，现生鸟类把导航跨度延续至今；该标本不确立恐龙全球首现或直系祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
233.2 Ma is the rounded assemblage and specimen context, not a global dinosaur FAD, crown-node date or uninterrupted record.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Buriolestes holotype ULBRA-PVT280 anchors a sampled Late Triassic dinosaur occurrence and living birds extend the route to the present.
<!-- /evo:text -->

## classification-support / groupingBasis

<!-- evo:text /records/classification-support/0/groupingBasis -->
Major dinosaur groups are represented as a compact navigation hierarchy.
<!-- /evo:text -->

## classification-support / conflicts

<!-- evo:text /records/classification-support/0/conflicts -->
Alternative hypotheses for early dinosaur relationships are not resolved by this display.
<!-- /evo:text -->
