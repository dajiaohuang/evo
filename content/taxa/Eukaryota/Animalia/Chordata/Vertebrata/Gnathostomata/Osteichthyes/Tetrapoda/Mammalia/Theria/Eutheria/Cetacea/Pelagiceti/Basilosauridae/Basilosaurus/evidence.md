---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Basilosaurus
    commonName: Basilosaurus
    commonNameZh: 龙王鲸属
    rank: genus
    taxonId: txn:36681
    firstAppearance: 37.7
    lastAppearance: 35
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pelagiceti/Basilosauridae/Basilosaurus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: gingerich-1990-basilosaurus-hind-limbs concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: gingerich-1990-basilosaurus-hind-limbs
          pages: 154–157
          figure: Figures 1–3
          quoteLocator: Specimen and stratigraphic descriptions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pelagiceti/Basilosauridae/Basilosaurus
      rangeKind: global-composite
      taxonomicConcept: Basilosaurus isis Egyptian hind-limb sample
      geographicScope: Birket Qarun Formation, Wadi Al Hitan, Egypt
      olderMa: 37.7
      youngerMa: 35
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
        - content/events/Basilosaurus_reduced_hind-limb_specimens/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: gingerich-1990-basilosaurus-hind-limbs
          locator: pp. 154–157; Figures 1–3
      reviewStatus: automated-audit-passed
---

# Basilosaurus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The atlas bounds Basilosaurus only with the sampled Basilosaurus isis material from the Birket Qarun Formation, including named hind-limb specimen UM 93231 within a broad approximately 37.7–35 Ma formation envelope; this is not a global genus range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary paper directly describes the Egyptian specimens. Medium confidence reflects a formation-level composite rather than a direct date on UM 93231.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手论文直接描述埃及标本；中等置信度反映这是组级组合区间，而非 UM 93231 的直接测年。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
图谱仅以 Birket Qarun 组取样的 Basilosaurus isis 材料约束该属，其中包括处于约 3770 万—3500 万年前宽泛组级区间的具名后肢标本 UM 93231；这不是全球属级范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The broad late-Eocene formation envelope combines specimens and is not a direct date on UM 93231 or a global genus range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded specimen assemblage and its stratigraphic placement in the cited primary study.
<!-- /evo:text -->
