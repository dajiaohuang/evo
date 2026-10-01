---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Gnathostomata
    commonName: Jawed Vertebrates
    commonNameZh: 有颌脊椎动物
    rank: infraphylum
    taxonId: ""
    firstAppearance: 439
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata
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
      reviewedAgainstReferenceVersion: andreev-2022-qianodus primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: andreev-2022-qianodus
          relation: supports
          pages: 964–968, especially 965–967
          figure: Figures 1–2; Extended Data Figures 1–5
          quoteLocator: Systematic palaeontology; tooth-whorl histology; geological setting and biostratigraphy
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata
      rangeKind: global-composite
      taxonomicConcept: Gnathostomata fossil-minimum and living navigation span
      geographicScope: Rongxi Formation, Leijiatun, Guizhou, China; living global continuation
      olderMa: 439
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
        - content/topics/atlas/Gnathostomata/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: andreev-2022-qianodus
          locator: pp. 964–968, especially 965–967; Figures 1–2; Extended Data Figures 1–5
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Gnathostomata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Qianodus tooth whorls from late Aeronian strata at approximately 439 Ma anchor the 439–0 Ma Gnathostomata route; isolated dental elements provide a minimum sampled occurrence, not the origin of jaws, crown age or global FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Twenty-three tooth whorls, their horizon and stem-chondrichthyan analysis are documented with specimen and figure locators. Isolated elements cannot establish a whole-clade origin or worldwide range.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
23 件齿旋、所处层位及其软骨鱼干群分析都有标本与图版定位；孤立材料不能确立整个演化支的起源或全球范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
晚 Aeronian 期约 439 Ma 地层中的 Qianodus 齿旋锚定 439–0 Ma 的有颌脊椎动物路线；孤立牙齿材料只提供取样最低出现，不是颌的起源、冠群年代或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Approximately 439 Ma is the late Aeronian Qianodus sample age; isolated tooth whorls do not date crown Gnathostomata or the origin of jaws.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Twenty-three Qianodus tooth whorls provide direct jawed-vertebrate dental evidence and a stem-chondrichthyan analysis; living descendants extend the route.
<!-- /evo:text -->
