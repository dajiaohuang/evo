---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ichthyosauria
    commonName: Ichthyosaurs
    commonNameZh: 鱼龙类
    rank: order
    taxonId: ""
    firstAppearance: 248
    lastAppearance: 90
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Ichthyosauria
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
      reviewedAgainstReferenceVersion: Motani et al. 2014 DOI 10.1371/journal.pone.0088640; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: motani-2014-chaohusaurus-viviparity
          relation: supports
          pages: 9(2):e88640
          figure: Figure 1; Supplementary stratigraphic information
          quoteLocator: Geological setting; specimen description and Results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Ichthyosauria
      rangeKind: global-composite
      taxonomicConcept: Ichthyosauria
      geographicScope: Global or represented navigation composite
      olderMa: 248
      youngerMa: 90
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Ichthyosauria/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: motani-2014-chaohusaurus-viviparity
          locator: PLOS ONE 9(2):e88640; Figure 1; geological setting, specimen description and Results
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Ichthyosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Ichthyosauria navigation envelope starts at the approximately 248 Ma Chaohusaurus specimen from the Procolumbites Zone and retains 90 Ma as a rounded younger composite; the sampled occurrence is not an exact global first appearance, complete lineage duration or direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
A named articulated maternal specimen and its biostratigraphic setting directly support an Early Triassic ichthyosaur occurrence. Medium confidence retains the approximate formation-level age and the unsourced precision of a global younger endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名关节相连母体标本及其生物地层背景直接支持早三叠世鱼龙记录；中等置信度保留近似的组级年龄和全球年轻端点缺乏精确来源的问题。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鱼龙类导航范围从约 2.48 亿年前 Procolumbites 带的 Chaohusaurus 标本开始，并保留 0.90 亿年前作为取整的年轻端综合边界；该样本记录不是精确全球首现、完整谱系时长或直系祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 248 Ma older edge follows a Chaohusaurus specimen and biostratigraphic assignment; 90 Ma remains a rounded composite younger boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The named Chaohusaurus maternal specimen and Procolumbites Zone context provide a primary-study Early Triassic anchor without asserting a global FAD, complete duration or direct ancestor.
<!-- /evo:text -->
