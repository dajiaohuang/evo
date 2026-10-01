---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Thyreophora
    commonName: Armoured dinosaurs
    commonNameZh: 装甲类
    rank: clade
    taxonId: txn:52777
    firstAppearance: 193
    lastAppearance: 66
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Thyreophora
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
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
          figure: Figures 1–34; phylogenetic figures and appendices
          quoteLocator: Lectotype; dermal skeleton; phylogenetic relationships
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Thyreophora
      rangeKind: global-composite
      taxonomicConcept: Thyreophora dossier navigation envelope
      geographicScope: Study-locality composite
      olderMa: 193
      youngerMa: 66
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

# Thyreophora

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Thyreophora route uses the revised Scelidosaurus lectotype and morphology analysis as one sampled armoured-dinosaur anchor; its placement is not a direct ancestor, complete clade range or fixed historical grade.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The lectotype anatomy is extensive, but its position relative to ankylosaurs and stegosaurs is a matrix result. Medium confidence preserves that distinction.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模解剖材料丰富，但它相对甲龙与剑龙的位置属于矩阵结果；中等置信度保留该区分。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
覆盾甲龙类路线以修订后的林龙正模和形态分析作为一个取样装甲恐龙锚点；其位置不是直接祖先、完整支系范围或固定历史等级。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level occurrence or navigation envelope; not a direct date on ancestry and not a demonstrated global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Primary-study specimen, formation or explicitly bounded dossier evidence.
<!-- /evo:text -->
