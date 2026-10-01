---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Glires
    commonName: Rodents, lagomorphs and stem relatives
    commonNameZh: 啮形类
    rank: clade
    taxonId: txn:92587
    firstAppearance: 66
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Glires
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: oleary-2013-placental-ancestor-model
          relation: contextualizes
          pages: 662–667
          figure: Figures 1–2; Table 1
          quoteLocator: Post-K–Pg crown-placental chronology; combined-data tree
        - referenceId: fostowicz-frelik-2015-mimolagus
          relation: supports
          pages: Article 9394
          figure: Figures 1–5; Supplementary Information
          quoteLocator: Holotype and referred sample; locality and horizon; phylogenetic discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Placentalia/Glires
      rangeKind: global-composite
      taxonomicConcept: Glires K–Pg navigation/model envelope with a bounded fossil exemplar
      geographicScope: Combined placental model and middle Eocene Erlian Basin sample, China; living global continuation
      olderMa: 66
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
      evidenceLevel: literature-synthesized
      confidence: low
      claimPaths:
        - content/topics/atlas/Placentalia/Glires/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: oleary-2013-placental-ancestor-model
          locator: pp. 662–667; Figures 1–2; Table 1
        - referenceId: fostowicz-frelik-2015-mimolagus
          locator: Article 9394; Figures 1–5; Supplementary Information
      reviewStatus: automated-audit-passed
---

# Glires

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 66–0 Ma Glires route is a K–Pg-to-present navigation/model envelope contextualized by post-K–Pg placental analyses and a 47.8–41.2 Ma Mimolagus fossil sample; it does not date crown Glires or assert continuous fossil occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
One source supplies a combined placental chronology and the other a bounded mimotonid occurrence. Their distinct evidence types are retained, so the older display ceiling is not promoted to a fossil FAD.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
oleary-2013-placental-ancestor-model, fostowicz-frelik-2015-mimolagus primary-study locators checked for 2026.08-static-v5-rc41
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一项来源提供联合胎盘类年代框架，另一项提供有界模兔类出现记录；两类证据保持分离，因此较老展示上限不会被提升为化石首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
66–0 Ma 的啮形类路线是从 K–Pg 到现今的导航/模型包络，以 K–Pg 后胎盘类分析及 47.8–41.2 Ma 的 Mimolagus 化石样本为背景；它不测定啮形类冠群，也不声称连续化石占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
66 Ma is a rounded K–Pg model/display ceiling; the direct Mimolagus sample is 47.8–41.2 Ma and neither endpoint dates crown Glires.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A post-K–Pg placental chronology contextualizes the display ceiling and the Mimolagus sample supplies a bounded fossil occurrence without asserting continuous occupancy.
<!-- /evo:text -->
