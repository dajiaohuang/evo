---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Crocodylomorpha
    commonName: Crocodilians
    commonNameZh: 鳄形类
    rank: superorder
    taxonId: ""
    firstAppearance: 231
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Crocodylomorpha
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: zanno-2015-carnufex concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: zanno-2015-carnufex
          relation: supports
          pages: 5:9276
          figure: Figures 1–2; Table S2
          quoteLocator: Systematic palaeontology—Holotype; geological context; phylogenetic results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Crocodylomorpha
      rangeKind: global-composite
      taxonomicConcept: Crocodylomorpha
      geographicScope: Global or represented navigation composite
      olderMa: 231
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Carnufex/research/Carnufex/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: zanno-2015-carnufex
          locator: Article 9276; Figures 1–2; Systematic palaeontology and Discussion
        - referenceId: open-tree
          locator: https://opentreeoflife.github.io/use
        - referenceId: pbdb-api-2016
          locator: doi:10.1017/pab.2015.39
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Crocodylomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Crocodylomorpha route uses the Carnian Carnufex holotype as an early sampled occurrence and living crocodylian descendants as the navigation endpoint; neither edge is an exact clade origin, global FAD or direct ancestor chain.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The Carnian specimen and crocodylomorph placement are directly analyzed. Medium confidence keeps the fossil sample separate from the extant navigation continuation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
卡尼期标本及其鳄形类位置有直接分析。中等置信度把化石样本与现生导航延续分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鳄形类路线以卡尼期 Carnufex 正模作为早期取样记录，并以现生鳄类后裔作为导航端点；两端都不是精确支系起源、全球首现或直接祖先链。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint follows the bounded Carnufex occurrence used for navigation, not a guaranteed global first appearance; the living endpoint follows the extant clade route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Carnufex holotype supplies a Carnian early-crocodylomorph occurrence while the living endpoint is retained from the extant navigation route; neither endpoint asserts direct ancestry.
<!-- /evo:text -->
