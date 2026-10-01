---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Amniota
    commonName: Amniotes
    commonNameZh: 羊膜动物
    rank: clade
    taxonId: txn:53189
    firstAppearance: 358.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota
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
          quoteLocator: Snowy Plains Formation track description; age model; trackmaker assessment; revised timescale discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota
      rangeKind: global-composite
      taxonomicConcept: Crown-Amniota minimum inferred from a contested trackmaker
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: long-2025-amniote-tracks
          locator: pp. 1193–1200; Figures 1–4; Supplementary Information Parts 1–4
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Amniota

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Early Tournaisian clawed tracks from the Snowy Plains Formation make a near-Devonian/Carboniferous crown-Amniota minimum plausible under the cited trackmaker interpretation; the 358.9–0 Ma route is therefore contested evidence synthesis, not an exact fossil age or observed divergence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Track morphology and formation age are observed, but assignment ranges from a primitive sauropsid to a trackmaker near the amniote crown node. The endpoint records that explicit inference and its uncertainty.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
足迹形态与地层年代可直接观察，但制造者可能是原始蜥形类，也可能接近羊膜动物冠群节点；端点保留这一明确推断及其不确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Snowy Plains 组早 Tournaisian 期的具爪足迹，在所引足迹制造者解释下，使接近泥盆纪—石炭纪界线的羊膜动物冠群最低年代成为合理假说；因此 358.9–0 Ma 路线属于有争议的证据综合，不是精确化石年龄或直接观察到的分裂。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The endpoint is the Devonian–Carboniferous boundary used as a rounded inferred minimum; the early Tournaisian trackmaker may be a primitive sauropsid or lie near the amniote crown node.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Clawed track morphology and formation age imply a near-boundary crown minimum under the cited preferred interpretation, but no body fossil identifies the maker.
<!-- /evo:text -->
