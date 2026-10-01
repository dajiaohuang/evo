---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tetrapoda
    commonName: Tetrapods
    commonNameZh: 四足动物
    rank: superclass
    taxonId: ""
    firstAppearance: 390
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda
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
      reviewedAgainstReferenceVersion: niedzwiedzki-2010-zachelmie-trackways primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: niedzwiedzki-2010-zachelmie-trackways
          relation: supports
          pages: 43–48
          figure: Figures 1–5; Supplementary Figures 1–25
          quoteLocator: Trackway and footprint descriptions; geological setting; phylogenetic implications
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda
      rangeKind: global-composite
      taxonomicConcept: Tetrapoda limbed-trackmaker evidence and living navigation span
      geographicScope: Zachełmie quarry, Holy Cross Mountains, Poland; living global continuation
      olderMa: 390
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: niedzwiedzki-2010-zachelmie-trackways
          locator: pp. 43–48; Figures 1–5; Supplementary Figures 1–25
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Tetrapoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Digit-bearing trackways attributed to an unidentified limbed tetrapod at Zachełmie anchor the 390–0 Ma Tetrapoda evidence route; trace-maker attribution does not identify a body taxon, crown node, direct ancestor or global FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The track surfaces, digit impressions, stratigraphy and alternative locomotor interpretations are directly documented. The route therefore uses trace evidence without silently turning a trackmaker into a named taxon or crown calibration.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
足迹面、趾印、地层及不同运动解释均有直接记录；因此路线使用遗迹证据，但不会把足迹制造者暗中改写成具名类群或冠群校准点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Zachełmie 约 390 Ma 的具趾足迹被归于未定名的有肢四足动物足迹制造者，为 390–0 Ma 的四足动物证据路线提供锚点；遗迹归属不能识别身体化石类群、冠群节点、直系祖先或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
About 390 Ma is a rounded Eifelian trackway age; the maker is unnamed and the traces do not date crown Tetrapoda or a body-taxon FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Digit-bearing quadrupedal trackways establish a limbed-tetrapod trace minimum while preserving body-taxonomic and crown-node uncertainty.
<!-- /evo:text -->
