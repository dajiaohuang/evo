---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Scelidosaurus
    commonName: Scelidosaurus
    commonNameZh: 腿龙
    rank: genus
    taxonId: txn:38801
    firstAppearance: 193
    lastAppearance: 191
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Parapredentata/Saphornithischia/Prionodontia/Genasauria/Thyreophora/Thyreophoroidea/Scelidosauridae/Scelidosaurus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: norman-2021-scelidosaurus concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: norman-2021-scelidosaurus
          relation: supports
          pages: 1–86
          figure: Figures 1–34
          quoteLocator: Lectotype and referred material; locality and stratigraphy; systematic account
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Parapredentata/Saphornithischia/Prionodontia/Genasauria/Thyreophora/Thyreophoroidea/Scelidosauridae/Scelidosaurus
      rangeKind: global-composite
      taxonomicConcept: Scelidosaurus harrisonii lectotype occurrence
      geographicScope: Charmouth Mudstone Formation, Dorset
      olderMa: 193
      youngerMa: 191
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
        - content/events/Scelidosaurus_lectotype_NHMUK_R1111_armour/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: norman-2021-scelidosaurus
          locator: Cited specimen, figures and methods in the linked claim dossier
      reviewStatus: automated-audit-passed
---

# Scelidosaurus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Scelidosaurus is anchored by lectotype NHMUK R1111 and associated Early Jurassic Dorset material; those specimens do not define a complete genus duration or a thyreophoran first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The lectotype, associated material and geological context are directly reviewed. High confidence remains specimen- and locality-bounded.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模、相关材料和地质背景均有直接审查。高置信度保持在标本与地点边界内。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
林龙由正模 NHMUK R1111 及英格兰多塞特早侏罗世相关材料锚定；这些标本不定义完整属级时长或覆盾甲龙类首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level occurrence or navigation envelope; not a direct date on ancestry and not a demonstrated global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Primary-study specimen, formation or explicitly bounded dossier evidence.
<!-- /evo:text -->
