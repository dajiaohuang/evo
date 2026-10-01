---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Oviraptorosauria
    commonName: Oviraptorosaurs
    commonNameZh: 窃蛋龙类
    rank: clade
    taxonId: ""
    firstAppearance: 125
    lastAppearance: 66
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Theropoda/Oviraptorosauria
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
      reviewedAgainstReferenceVersion: norell-1995-nesting-dinosaur concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: norell-1995-nesting-dinosaur
          relation: supports
          pages: 774–776
          figure: Figures 1–3
          quoteLocator: Specimen IGM 100/979; locality and formation; nest association
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Theropoda/Oviraptorosauria
      rangeKind: global-composite
      taxonomicConcept: Oviraptorosauria dossier navigation envelope
      geographicScope: Named primary-study specimens
      olderMa: 125
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
        - content/events/Oviraptorid_IGM_100%2F979_over_an_egg_clutch/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: norell-1995-nesting-dinosaur
          locator: Cited specimen, figures and methods in the linked claim dossier
      reviewStatus: automated-audit-passed
---

# Oviraptorosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Oviraptorosauria is represented by nesting specimen IGM 100/979 from the Upper Cretaceous Djadokhta Formation; this local association does not establish the clade’s origin, complete range or a direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen, nest and formation are directly described. High confidence applies to the association and provenance, not to clade-wide chronology or behavior.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本、巢和地层有直接描述。高置信度适用于关联与出处，不适用于全支系年代或行为。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
偷蛋龙类由上白垩统德加多克塔组的巢中标本 IGM 100/979 表示；这一局部关联不建立支系起源、完整范围或直接祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level occurrence or navigation envelope; not a direct date on ancestry and not a demonstrated global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Primary-study specimen, formation or explicitly bounded dossier evidence.
<!-- /evo:text -->
