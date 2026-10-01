---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Magericyon
    commonName: Magericyon
    commonNameZh: 巨犬熊
    rank: genus
    firstAppearance: 9.7
    lastAppearance: 8.7
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:374790
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Amphicyonidae/Amphicyoninae/Magericyon
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
      reviewedAgainstReferenceVersion: diaz-de-leon-2026-magericyon-fea concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: diaz-de-leon-2026-magericyon-fea
          pages: Article 34
          figure: Figures 2–7
          quoteLocator: Material; geological setting; model construction
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Amphicyonidae/Amphicyoninae/Magericyon
      rangeKind: global-composite
      taxonomicConcept: Magericyon anceps Batallones-1 sample
      geographicScope: Batallones-1, Madrid, Spain
      olderMa: 9.7
      youngerMa: 8.7
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
        - content/events/Magericyon_feeding_finite-element_models/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: diaz-de-leon-2026-magericyon-fea
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Magericyon

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Magericyon anceps is bounded by Batallones-1 material including complete young-adult skull B-4071 within an approximately 9.7–8.7 Ma sample envelope; finite-element results do not extend that locality sample into a global genus range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named skull and locality interval are direct; prey handling and stress performance are simulations kept outside this range claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名头骨与地点区间属于直接证据；猎物处理和应力表现是模拟，不纳入该范围主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Magericyon anceps 由 Batallones-1 材料约束，其中包括处于约 970 万—870 万年前样本区间的完整青年成体头骨 B-4071；有限元结果不会把该地点样本扩展为全球属级范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level sampled occurrence envelope, not a direct date on ancestry or a guaranteed global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Holotype B-4071 is a complete young-adult skull; the 2026 analysis compares intrinsic canine, p4 and m1 bites and extrinsic pull-back and head-shaking loads, with meshes and scripts deposited on Zenodo.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article 34; Figures 2–7; Table 1; Online Resources 1–3; Muscle reconstruction; Intrinsic and extrinsic FEA; Bite-force normalization
<!-- /evo:text -->
