---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Chiroptera
    commonName: Bats
    commonNameZh: 蝙蝠
    rank: order
    taxonId: txn:40622
    firstAppearance: 52.5
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Chiroptera
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
      reviewedAgainstReferenceVersion: simmons-2008-onychonycteris primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: simmons-2008-onychonycteris
          relation: supports
          pages: 818–821
          figure: Figures 1–4; Supplementary Figures 1–10
          quoteLocator: Holotype and locality; skeletal description; phylogenetic and functional analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Chiroptera
      rangeKind: global-composite
      taxonomicConcept: Chiroptera fossil minimum and living navigation span
      geographicScope: Fossil Butte Member, Green River Formation, Wyoming, USA; living global continuation
      olderMa: 52.5
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Chiroptera/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: simmons-2008-onychonycteris
          locator: pp. 818–821; Figures 1–4; Supplementary Figures 1–10
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Chiroptera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 52.5–0 Ma Chiroptera route is anchored by the Green River Onychonycteris holotype and living bats; the specimen documents an early bat occurrence, not crown-bat origination, a direct ancestor or a global FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
ROM 55351A, its locality, skeleton and morphology-based placement are directly documented. Functional and crown implications remain separate from the occurrence endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
ROM 55351A 的产地、骨骼及形态系统位置均有直接记录；功能解释与冠群意义保持独立，不混入出现记录端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
52.5–0 Ma 的翼手目路线由绿河组 Onychonycteris 正模与现生蝙蝠共同锚定；该标本记录早期蝙蝠出现，不是蝙蝠冠群起源、直系祖先或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
52.5–50.3 Ma is the bounded Onychonycteris context; it does not date crown Chiroptera, flight origin or a global bat FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Onychonycteris holotype ROM 55351A anchors an early bat occurrence and living bats extend the route to the present.
<!-- /evo:text -->
