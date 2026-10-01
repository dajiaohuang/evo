---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cartorhynchus
    commonName: Short-snouted Ichthyosauromorph
    commonNameZh: 短吻鱼龙形类
    rank: genus
    taxonId: ""
    firstAppearance: 248
    lastAppearance: 248
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Ichthyosauria/Cartorhynchus
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
      reviewedAgainstReferenceVersion: motani-2015-cartorhynchus concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: motani-2015-cartorhynchus
          relation: supports
          pages: 485–488
          figure: Figures 1–4; Extended Data Figures 1–3
          quoteLocator: Holotype and horizon; Methods; Description
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Ichthyosauria/Cartorhynchus
      rangeKind: global-composite
      taxonomicConcept: Cartorhynchus lenticarpus holotype occurrence
      geographicScope: Upper Nanlinghu Formation, Chaohu, Anhui, China
      olderMa: 248
      youngerMa: 248
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
        - content/events/Cartorhynchus_holotype_body-plan_mosaic/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: motani-2015-cartorhynchus
          locator: pp. 485–488; Figure 1; Methods
      reviewStatus: automated-audit-passed
---

# Cartorhynchus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Cartorhynchus is anchored here only by holotype AGM I-1 from the Lower Triassic Nanlinghu Formation; that named specimen and horizon do not define the genus-wide first or last appearance or an ichthyosauriform origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype, locality and stratigraphic placement are directly reported. High confidence is restricted to that sample and excludes functional and ancestry extrapolation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模、地点与地层位置均有直接报告。高置信度仅限该样本，排除功能和祖先关系外推。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
本图集中的短吻鱼龙仅由下三叠统南陵湖组正模 AGM I-1 锚定；该具名标本和层位不定义属级首末现，也不代表鱼龙形类起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The paper reports an approximate age near 248 Ma; this is not a specimen-level radiometric date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named holotype AGM I-1 and its Lower Triassic stratigraphic placement in the primary description.
<!-- /evo:text -->
