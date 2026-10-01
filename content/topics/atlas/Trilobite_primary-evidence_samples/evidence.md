---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Trilobite primary-evidence samples
    commonName: Trilobite Evidence Samples
    commonNameZh: 三叶虫主证据样本
    rank: navigation group
    taxonId: ""
    firstAppearance: 521
    lastAppearance: 443
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: holmes-budd-2022-early-trilobites; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: holmes-budd-2022-early-trilobites
          relation: supports
          pages: 7:1177
          figure: Figures 1–4; Supplementary analyses
          quoteLocator: Early-euarthropod matrix; approximately 521 Ma widespread trilobite appearance; divergence-time tests
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: holmes-budd-2022 + hou-2021 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: holmes-budd-2022-early-trilobites
          relation: supports
          pages: Article 1177
          figure: Figures 1–4
          quoteLocator: Abstract and Introduction, widespread early trilobite record at approximately 521 Ma
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: Article eabe7377
          figure: Figures 1–5 and supplement
          quoteLocator: Beecher's Bed Triarthrus sample within 450–443 Ma
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/topics/atlas/Trilobite_primary-evidence_samples
      rangeKind: global-composite
      taxonomicConcept: Trilobite primary-evidence navigation sample
      geographicScope: Global sampled record
      olderMa: 521
      youngerMa: 443
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
        - content/topics/atlas/Trilobite_primary-evidence_samples/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: holmes-budd-2022-early-trilobites
          locator: Article 1177; Abstract and Introduction; Figures 1–4; widespread early trilobite record at approximately 521 Ma
        - referenceId: hou-2021-trilobite-gill
          locator: Article eabe7377; Figures 1–5 and supplement; Beecher's Bed Triarthrus sample within 450–443 Ma
      reviewStatus: automated-audit-passed
---

# Trilobite primary-evidence samples

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The trilobite evidence-samples entity is a navigation group linking the early-trilobite morphology matrix and approximately 521 Ma widespread sampled record to specimen dossiers. It is not a taxon, direct ancestor route, Precambrian absence test, global FAD or complete Trilobita range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Medium confidence applies to the cited matrix, widespread sampled appearance and concrete locator. The navigation grouping is editorial and the paper's clock result remains an analytical estimate rather than a direct origin date.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 521–443 Ma trilobite evidence route is a navigation envelope between separate early-trilobite and Beecher's Bed samples, not a lineage duration or continuous occurrence series.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Both endpoint studies provide concrete sample ages, but their different taxa and localities require an explicitly editorial navigation interpretation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引矩阵、广布抽样出现及具体定位器直接有据；导航分组属于编辑组织，论文的时钟结果仍是分析估计而非直接起源日期。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
两端论文给出具体样本年代，但分类与地点不同，因此只能作为明确标注的编辑性导航包络。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
三叶虫证据样本实体是导航组，把早期三叶虫形态矩阵及约 5.21 亿年前的广布抽样记录连接到标本档案；它不是分类单元、直接祖先路线、前寒武纪缺失检验、全球首现或三叶虫完整延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
521–443 Ma 的三叶虫证据路线连接彼此独立的早期三叶虫与 Beecher's Bed 样本，是导航包络而非谱系存续期或连续记录序列。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
A navigation envelope spanning separate sampled dossiers; not a lineage or continuous occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is a navigation envelope across separate evidence and is not a phylogenetic or occurrence claim.
<!-- /evo:text -->
