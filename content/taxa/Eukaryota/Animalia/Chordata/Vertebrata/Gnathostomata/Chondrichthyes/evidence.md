---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Chondrichthyes
    commonName: Cartilaginous Fish
    commonNameZh: 软骨鱼类
    rank: class
    taxonId: txn:34422
    firstAppearance: 439
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes
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
      reviewedAgainstReferenceVersion: Andreev et al. 2022 DOI 10.1038/s41586-022-05166-2; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: andreev-2022-qianodus
          relation: supports
          pages: 964–968, especially 965–967
          figure: Figures 1–2; Extended Data Figures 1–3
          quoteLocator: Systematic palaeontology; tooth-whorl development and histology; geological setting and phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes
      rangeKind: global-composite
      taxonomicConcept: Chondrichthyes
      geographicScope: Global or represented navigation composite
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: andreev-2022-qianodus
          locator: pp. 964–968, especially 965–967; Figures 1–2; Extended Data Figures 1–3; geological setting and phylogenetic analysis
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Chondrichthyes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Chondrichthyes display begins at the approximately 439 Ma Qianodus tooth-whorl sample as an evidence-linked stem-chondrichthyan anchor and continues to living members at 0 Ma; isolated teeth do not establish a crown-chondrichthyan global first appearance, a complete lineage range or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary paper documents twenty-three tooth whorls, their late Aeronian horizon, histology and phylogenetic signal. Medium confidence preserves the absence of an articulated body and separates a stem-line evidence anchor from crown-group and global-range claims.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手论文记录 23 件牙旋、晚埃隆期层位、组织学与系统信号；中等置信度保留缺少关节相连身体的限制，并区分干群证据锚点与冠群及全球范围主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
软骨鱼类显示范围以约 4.39 亿年前 Qianodus 牙旋样本作为有证据连接的干群锚点，并延续到 0 Ma 的现生成员；孤立牙齿不能建立冠群软骨鱼的全球首现、完整谱系范围或直系祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 439 Ma older edge is anchored to isolated Qianodus tooth whorls; it is stem-line evidence rather than a crown-group global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The late Aeronian Qianodus sample provides a primary-study stem-chondrichthyan display anchor; 0 Ma represents sampled living members, not continuous fossil coverage.
<!-- /evo:text -->
