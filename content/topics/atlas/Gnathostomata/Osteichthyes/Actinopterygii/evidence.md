---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Actinopterygii
    commonName: Ray-finned Fish
    commonNameZh: 辐鳍鱼类
    rank: class
    taxonId: ""
    firstAppearance: 390.4
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii
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
      reviewedAgainstReferenceVersion: Giles et al. 2015 DOI 10.1111/pala.12182; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: giles-2015-cheirolepis-endoskeleton
          relation: supports
          pages: 849–870, especially 852–862
          figure: Figures 2–4 and 9–11
          quoteLocator: Material and methods; geological occurrence; neurocranium, hyomandibula and pectoral-fin descriptions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii
      rangeKind: global-composite
      taxonomicConcept: Actinopterygii
      geographicScope: Global or represented navigation composite
      olderMa: 390.4
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: giles-2015-cheirolepis-endoskeleton
          locator: pp. 849–870, especially 852–862; Figures 2–4 and 9–11; material, geological occurrence and anatomical descriptions
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Actinopterygii

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The evidence-linked Actinopterygii navigation envelope starts at 390.4 Ma, the older edge of the late Eifelian interval represented by CT-scanned Cheirolepis trailli specimens, and extends to living ray-finned fishes at 0 Ma; it is not a global class FAD or a claim that Cheirolepis was a direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named museum specimens and archived tomography directly document a secure early actinopterygian sample, while the stage-scale older edge and incomplete sampling prevent promotion to an exact global first appearance. Medium confidence applies to the navigation envelope only.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名馆藏标本和存档断层数据直接记录了可靠的早期辐鳍鱼样本，但阶段尺度老端和不完整取样不能提升为精确全球首现；中等置信度只适用于导航范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
有证据连接的辐鳍鱼类导航范围从 3.904 亿年前开始，这是 CT 扫描的 Cheirolepis trailli 标本所代表晚艾菲尔期区间的老端，并延续到 0 Ma 的现生辐鳍鱼；它不是该纲的全球首现，也不表示 Cheirolepis 是直系祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 390.4 Ma older edge is the older side of the late Eifelian Cheirolepis sample envelope; it is not an exact global class FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
CT-scanned Cheirolepis museum specimens provide a secure primary-study early actinopterygian anchor; 0 Ma represents living ray-finned fishes rather than continuous sampling.
<!-- /evo:text -->
