---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pteridophyta
    commonName: Ferns & Horsetails
    commonNameZh: 蕨类与木贼类
    rank: phylum
    taxonId: txn:54828
    firstAppearance: 385
    lastAppearance: 0
    extinct: false
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pteridophyta
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Stein et al. 2007 DOI 10.1038/nature05705 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: stein-2007-wattieza
          relation: supports
          pages: 904–907
          figure: Figures 1–3
          quoteLocator: Attached Wattieza crowns and Eospermatopteris trunks; reconstruction and affinity discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pteridophyta
      rangeKind: global-composite
      taxonomicConcept: Atlas Pteridophyta navigation concept; cladoxylopsid exemplar is not crown ferns or horsetails
      geographicScope: Gilboa–Schoharie Middle Devonian sample to living fern and horsetail lineages
      olderMa: 385
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 5
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pteridophyta/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: stein-2007-wattieza
          locator: pp. 904–907; Figures 1–3
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Pteridophyta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Pteridophyta atlas root retains a 385–0 Ma navigation envelope anchored by the Middle Devonian Wattieza–Eospermatopteris cladoxylopsid reconstruction; the fern-like body plan is not a crown-fern, crown-horsetail or direct-ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Attached crown and trunk material directly supports a Middle Devonian cladoxylopsid tree reconstruction. Its relationship to living fern and horsetail lineages is not resolved by that specimen, so the atlas records an historical pteridophyte-grade exemplar rather than a clade FAD.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
相连的树冠和树干材料直接支持中泥盆世枝蕨类树木复原，但该标本不能解决它与现生真蕨和木贼的关系，因此这里只记录历史上的蕨类级代表。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蕨类植物图集根节点保留 3.85 亿年前至今的导航包络，以中泥盆世 Wattieza–Eospermatopteris 枝蕨类复原为锚点；蕨状体型不等于冠群真蕨、冠群木贼或直系祖先主张。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 385 Ma endpoint is a rounded Middle Devonian cladoxylopsid exemplar, not a crown-fern or crown-horsetail first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Attached Wattieza crowns and Eospermatopteris trunks directly reconstruct a fern-like cladoxylopsid tree while leaving crown relationships unresolved.
<!-- /evo:text -->
