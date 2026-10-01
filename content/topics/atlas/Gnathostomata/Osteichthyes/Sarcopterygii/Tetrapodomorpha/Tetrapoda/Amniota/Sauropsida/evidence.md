---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Sauropsida
    commonName: Reptiles & Birds
    commonNameZh: 爬行动物与鸟类
    rank: class
    taxonId: ""
    firstAppearance: 358.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: long-2025-amniote-tracks primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: long-2025-amniote-tracks
          relation: supports
          pages: 1193–1200
          figure: Figures 1–4; Supplementary Information Parts 1–4
          quoteLocator: Claw and manus–pes morphology; preferred primitive-sauropsid interpretation; alternative near-crown placement
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida
      rangeKind: global-composite
      taxonomicConcept: Sauropsida probable trackmaker minimum and living navigation span
      geographicScope: Snowy Plains Formation, Victoria, Australia; living global continuation
      olderMa: 358.9
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
      confidence: contested
      claimPaths:
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: long-2025-amniote-tracks
          locator: pp. 1193–1200; Figures 1–4; trackmaker assessment and revised timescale
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Sauropsida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 358.9–0 Ma Sauropsida route uses the Snowy Plains clawed trackway as a probable primitive-sauropsid minimum; because the trackmaker could lie near the amniote crown node, the endpoint is contested and not a body-fossil FAD or crown-birth date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study identifies a sauropsid as the preferred interpretation but explicitly retains a near-crown alternative. Matching the route to that conditional minimum preserves the current evidence without overstating taxonomic certainty.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究把蜥形类列为首选解释，同时明确保留接近冠群节点的替代方案；路线采用这一条件性最低记录，既反映当前证据，也不夸大分类确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
358.9–0 Ma 的蜥形类路线把 Snowy Plains 具爪足迹作为可能的原始蜥形类最低记录；由于足迹制造者也可能接近羊膜动物冠群节点，该端点仍有争议，且不是身体化石首现或冠群诞生日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The early Tournaisian trackmaker is interpreted preferably as a primitive sauropsid but could lie near the amniote crown node; 358.9 Ma is a rounded inferred minimum.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Clawed manus–pes morphology supports the probable sauropsid interpretation while the published alternative prevents a secure body-fossil or crown-origin claim.
<!-- /evo:text -->
