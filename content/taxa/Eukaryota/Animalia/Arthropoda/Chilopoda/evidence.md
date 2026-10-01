---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Chilopoda
    commonName: Centipedes
    commonNameZh: 唇足类
    rank: class
    taxonId: txn:205077
    firstAppearance: 430
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chilopoda
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
      reviewedAgainstReferenceVersion: giribet-edgecombe-2006-centipede-phylogeny DOI 10.1098/rspb.2005.3365; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: giribet-edgecombe-2006-centipede-phylogeny
          pages: 531–538
          figure: Figures 1–3; supplementary matrices
          quoteLocator: Separate and combined datasets; topology conflict; discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chilopoda
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
      reviewedAgainstReferenceVersion: cadenas-amaya-2025 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: cadenas-amaya-2025-centipede-fossil-record
          relation: supports
          pages: Article 1
          figure: Table 1; Figure 3
          quoteLocator: Introduction and Paleozoic section, Upper Silurian Crussolum at approximately 418 Ma
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chilopoda
      rangeKind: global-composite
      taxonomicConcept: Chilopoda oldest-reviewed-fossil-to-living navigation envelope
      geographicScope: Reviewed global fossil catalog and living representatives
      olderMa: 418
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Chilopoda/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: cadenas-amaya-2025-centipede-fossil-record
          locator: Article 1; Introduction and Paleozoic section; Table 1; Figure 3; Upper Silurian Crussolum at approximately 418 Ma
      reviewStatus: automated-audit-passed
---

# Chilopoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Seven genes and morphology provide explicit but conflicting hypotheses for deep centipede relationships. The conflict is retained rather than presented as a final Chilopoda topology, fossil origin or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the conflict is retained rather than presented as a final Chilopoda topology, fossil origin or direct ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 418–0 Ma Chilopoda display begins with the oldest catalogued Upper Silurian Crussolum occurrence and is not a centipede origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The global fossil catalog directly inventories the approximately 418 Ma Ludford Lane record among 74 occurrences, providing a transparent sampled-record boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
全球化石目录在 74 条记录中直接列出约 418 Ma 的 Ludford Lane 化石，形成透明的采样记录边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
七个基因与形态数据为蜈蚣深层关系提供了明确但相互冲突的假说。这里保留这种冲突，不把它表述为最终的唇足纲拓扑、化石起源或直接祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
418–0 Ma 的唇足纲显示从目录中最早的晚志留世 Crussolum 记录开始，并非蜈蚣类起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 418 Ma edge is the oldest catalogued fossil occurrence, not an origin or crown-divergence date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A global fossil catalog identifies Crussolum from Ludford Lane in the Upper Silurian at approximately 418 Ma as the oldest centipede record; living centipedes extend the navigation envelope to the present.
<!-- /evo:text -->
