---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Rhyniognatha hirsti
    commonName: Contested Rhynie head fragment
    commonNameZh: 归属有争议的莱尼头部碎片
    rank: species
    taxonId: ""
    firstAppearance: 411
    lastAppearance: 407
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Early_Hexapoda_evidence_route/Rhyniognatha_hirsti
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: engel-grimaldi-2004-rhyniognatha; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: engel-grimaldi-2004-rhyniognatha
          relation: supports
          pages: 627–630
          figure: Figures 1–2
          quoteLocator: Rhynie Chert NHMUK PI IN 38234 head fragment
        - referenceId: haug-haug-2017-rhyniognatha
          relation: contradicts
          pages: e3402
          figure: Figures 1–7
          quoteLocator: NHMUK PI IN 38234 re-documentation and affinity reassessment
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Early_Hexapoda_evidence_route/Rhyniognatha_hirsti
      rangeKind: global-composite
      taxonomicConcept: Rhyniognatha hirsti type specimen
      geographicScope: Rhynie Chert, Aberdeenshire, Scotland
      olderMa: 411
      youngerMa: 407
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
        - content/events/Rhyniognatha_insect–myriapod_dispute/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: engel-grimaldi-2004-rhyniognatha
          locator: 627–630; Figures 1–2
        - referenceId: haug-haug-2017-rhyniognatha
          locator: e3402; Figures 1–7
      reviewStatus: automated-audit-passed
---

# Rhyniognatha hirsti

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Rhyniognatha hirsti is bounded here by isolated head fragment NHMUK PI IN 38234 from the Rhynie Chert, Aberdeenshire, Scotland; its insect versus myriapod affinity remains unresolved, so this is not a global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Contested confidence records the published conflict between an insect or possible pterygote interpretation and a later three-dimensional reanalysis favouring a myriapod, possibly centipede. The claim is limited to specimen-level disagreement and does not promote either affinity or the display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为有争议：早期论文把标本解释为昆虫或可能的有翅类，后续三维复核则更支持多足类、可能是蜈蚣；本条只记录标本级分歧，不把任一归属或显示包络提升为全球生物边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Rhyniognatha hirsti 在此由来自苏格兰阿伯丁郡莱尼燧石的孤立头部碎片 NHMUK PI IN 38234 约束；其昆虫或多足类亲缘仍未解决，因此这不是全球延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Specimen occurrence is retained while insect versus myriapod affinity remains unresolved.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
NHMUK PI IN 38234 is the same isolated head fragment reinterpreted by both studies.
<!-- /evo:text -->
