---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Paskov Archaeorthoptera wing
    commonName: Lower Carboniferous wing fragment
    commonNameZh: 早石炭世昆虫翅碎片
    rank: specimen
    taxonId: ""
    firstAppearance: 325
    lastAppearance: 323
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Insect_flight_evidence_route/Paskov_Archaeorthoptera_wing
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: prokop-2005-paskov-wing; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: prokop-2005-paskov-wing
          relation: supports
          pages: 383–387
          figure: Figures 1–2
          quoteLocator: Paskov Mine drill core Leonard IV horizon
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Insect_flight_evidence_route/Paskov_Archaeorthoptera_wing
      rangeKind: global-composite
      taxonomicConcept: Paskov Archaeorthoptera wing part and counterpart
      geographicScope: Paskov Mine drill core, Upper Silesian Basin, Czech Republic
      olderMa: 325
      youngerMa: 323
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
        - content/events/Paskov_Lower_Carboniferous_wing_fragment/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: prokop-2005-paskov-wing
          locator: 383–387; Figures 1–2
      reviewStatus: automated-audit-passed
---

# Paskov Archaeorthoptera wing

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Paskov Archaeorthoptera wing is bounded here by a forewing part and counterpart from the Leonard IV horizon in the Paskov Mine drill core, Upper Silesian Basin, Czech Republic; this single fragment is not a global Pterygota range or flight-origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Lower Carboniferous wing fragment: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
早石炭世昆虫翅碎片：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Paskov Archaeorthoptera 翅在此由来自捷克上西里西亚盆地 Paskov 矿钻芯 Leonard IV 层位的前翅残片及对应片约束；这一单个碎片不是翼群的全球延限或飞行起源年代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Rounded lowermost Namurian envelope for one fragment, not a Pterygota global range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Forewing venation is preserved in part and counterpart from the Leonard IV horizon.
<!-- /evo:text -->
