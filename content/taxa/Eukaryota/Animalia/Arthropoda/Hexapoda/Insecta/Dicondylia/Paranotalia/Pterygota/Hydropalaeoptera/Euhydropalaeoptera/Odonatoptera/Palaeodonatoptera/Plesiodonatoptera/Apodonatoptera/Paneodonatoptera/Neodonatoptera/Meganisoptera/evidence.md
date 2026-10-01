---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    taxonId: txn:174977
    extinct: true
    name: Meganisoptera
    commonName: Griffinflies
    commonNameZh: 巨脉蜻蜓目
    rank: order
    firstAppearance: 325
    lastAppearance: 250
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Dicondylia/Paranotalia/Pterygota/Hydropalaeoptera/Euhydropalaeoptera/Odonatoptera/Palaeodonatoptera/Plesiodonatoptera/Apodonatoptera/Paneodonatoptera/Neodonatoptera/Meganisoptera
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: brauckmann-zessin-1989-meganisoptera DOI 10.1002/mmnd.19890360127; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: brauckmann-zessin-1989-meganisoptera
          pages: 177–215
          figure: Specimen plates and phylogenetic diagrams
          quoteLocator: New Meganeuridae; character comparison; Meganisoptera phylogeny
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Dicondylia/Paranotalia/Pterygota/Hydropalaeoptera/Euhydropalaeoptera/Odonatoptera/Palaeodonatoptera/Plesiodonatoptera/Apodonatoptera/Paneodonatoptera/Neodonatoptera/Meganisoptera
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
      reviewedAgainstReferenceVersion: ellers-2024 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ellers-2024-meganisoptera-flight
          relation: supports
          pages: 598–610
          figure: Introduction fossil-history synthesis
          quoteLocator: First Namurian B record at approximately 318–315 Ma and persistence at least to the end of the Middle Permian
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Dicondylia/Paranotalia/Pterygota/Hydropalaeoptera/Euhydropalaeoptera/Odonatoptera/Palaeodonatoptera/Plesiodonatoptera/Apodonatoptera/Paneodonatoptera/Neodonatoptera/Meganisoptera
      rangeKind: global-composite
      taxonomicConcept: Meganisoptera reviewed sampled fossil-record envelope
      geographicScope: Reviewed fossil occurrences
      olderMa: 318
      youngerMa: 259
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
        - content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Dicondylia/Paranotalia/Pterygota/Hydropalaeoptera/Euhydropalaeoptera/Odonatoptera/Palaeodonatoptera/Plesiodonatoptera/Apodonatoptera/Paneodonatoptera/Neodonatoptera/Meganisoptera/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: ellers-2024-meganisoptera-flight
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Meganisoptera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Namurian meganeurid material from Hagen-Vorhalle and an explicit character analysis document a sampled meganisopteran classification. The named material and historical matrix do not define every meganisopteran lineage or its exact global endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond the named material and historical matrix do not define every meganisopteran lineage or its exact global endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 318–259 Ma Meganisoptera display is a sampled fossil-record envelope from Namurian B through at least the end of the Middle Permian, not an exact extinction interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The study directly summarizes the first record and minimum persistence, while its wording leaves the actual Late Permian extinction time unresolved.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
研究直接综述首条记录与最低延续界，但其措辞仍将实际晚二叠世灭绝时间保留为未知。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Hagen-Vorhalle 纳穆尔期巨脉蜓科材料及明确的性状分析，记录了一套巨脉蜓目抽样分类。具名材料和历史矩阵不能覆盖全部巨脉蜓谱系，也不能确定其精确全球端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
318–259 Ma 的巨脉蜻蜓类显示是从 Namurian B 至至少中二叠世末的化石记录包络，而非精确灭绝区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The younger edge is rounded to the end of the Middle Permian and is not an exact last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The review records Meganisoptera first in Namurian B at approximately 318–315 Ma and at least through the end of the Middle Permian; it does not support the former exact 250 Ma endpoint.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 598–610; Introduction; first Namurian B record at approximately 318–315 Ma and persistence at least to the end of the Middle Permian
<!-- /evo:text -->
