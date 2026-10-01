---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Aves
    commonName: Birds
    commonNameZh: 鸟类
    rank: class
    taxonId: txn:36616
    firstAppearance: 150
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves
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
      reviewedAgainstReferenceVersion: rauhut-2018-oldest-archaeopteryx primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          relation: supports
          pages: 6:e4191
          figure: Figures 1–5; Table 1
          quoteLocator: Geological setting; Systematic palaeontology; specimen and locality catalogue; phylogenetic discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves
      rangeKind: global-composite
      taxonomicConcept: Aves avialan-to-living-bird navigation anthology
      geographicScope: Late Jurassic Bavarian lithographic limestones; living global continuation
      olderMa: 150
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          locator: Article e4191; Geological setting; Figures 1–5; Table 1
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Aves

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 150–0 Ma Aves route is an avialan-to-living-bird navigation anthology: referred Archaeopteryx material supplies a Late Jurassic fossil anchor, but Archaeopteryx is outside crown Neornithes and the endpoint is not crown-Aves origination.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The Painten specimen has explicit locality, horizon and anatomical locators. The atlas entity deliberately groups Archaeopteryx and Neornithes for browsing, so the range is labelled as an anthology rather than a single crown definition.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Painten 标本具有明确产地、层位与解剖定位；图谱实体为浏览而同时容纳 Archaeopteryx 与 Neornithes，因此范围明确标作证据选集，而非单一冠群定义。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
150–0 Ma 的鸟类路线是从鸟翼类化石到现生鸟的导航选集：归入 Archaeopteryx 的材料提供晚侏罗世锚点，但 Archaeopteryx 位于现生鸟冠群之外，该端点不是鸟冠群起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
150 Ma is a rounded referred-Archaeopteryx envelope; the route groups a stem avialan with crown birds and therefore is not a crown-Neornithes origin or FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Referred Archaeopteryx material provides the fossil anchor while living birds supply the present endpoint; the two are an explicit browse anthology.
<!-- /evo:text -->
