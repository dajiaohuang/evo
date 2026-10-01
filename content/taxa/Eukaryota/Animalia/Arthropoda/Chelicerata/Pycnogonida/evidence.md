---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pycnogonida
    commonName: Sea Spiders
    commonNameZh: 海蜘蛛类
    rank: class
    taxonId: txn:19015
    firstAppearance: 500
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Pycnogonida
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
      reviewedAgainstReferenceVersion: ballesteros-2020-pycnogonida-phylogenomics DOI 10.1093/molbev/msaa228; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: ballesteros-2020-pycnogonida-phylogenomics
          pages: 686–701
          figure: Figures 3 and 5; supplementary matrices
          quoteLocator: Taxon sampling; phylogenomic analyses; diversification discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Pycnogonida
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: waloszek-dunlop-2002 + sabroux-2024 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: waloszek-dunlop-2002-cambropycnogon
          relation: supports
          pages: 421–446
          figure: Text-figures 1–2
          quoteLocator: Abstract and systematic account proposing Cambropycnogon as the oldest pycnogonid/chelicerate record
        - referenceId: sabroux-2024-pycnogonid-fossils
          relation: supports
          pages: Article e17766
          figure: Table 1
          quoteLocator: Cambropycnogon classified as possibly Pycnogonida rather than a secure crown record
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Pycnogonida
      rangeKind: global-composite
      taxonomicConcept: Pycnogonida contested total-group fossil-to-living navigation envelope
      geographicScope: Global fossil and living record
      olderMa: 500
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
      confidence: contested
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Pycnogonida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: waloszek-dunlop-2002-cambropycnogon
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: sabroux-2024-pycnogonid-fossils
          locator: Table 1; Cambropycnogon classified as possibly Pycnogonida rather than a secure crown record
      reviewStatus: automated-audit-passed
---

# Pycnogonida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic integration across 89 sea-spider species and all living families supports a sampled topology for Pycnogonida. The result concerns sampled living relationships and does not directly date the fossil origin or global first appearance of sea spiders.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the result concerns sampled living relationships and does not directly date the fossil origin or global first appearance of sea spiders.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 500–0 Ma pycnogonid display is a contested total-group fossil-to-living navigation envelope because Cambropycnogon is only possibly a pycnogonid and is not a secure crown first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The original systematic account supports the Cambrian candidate, whereas the later fossil synthesis explicitly retains uncertainty over its assignment.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
原始系统学研究支持寒武纪候选记录，后续化石综述则明确保留其归属不确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
覆盖 89 个海蜘蛛物种和全部现生科的系统基因组整合，为皆足纲提供了抽样拓扑。该结果只涉及所抽样现生类群的关系，不能直接给出海蜘蛛的化石起源或全球首现时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
500–0 Ma 的海蜘蛛显示是有争议的总群化石至现生导航包络，因为 Cambropycnogon 仅可能属于海蜘蛛，并非可靠的冠群首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Cambropycnogon is a possible total-group pycnogonid, not a secure crown-group first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Cambropycnogon provides an approximately 500 Ma possible total-group record, while living pycnogonids extend the navigation envelope to the present; later review retains uncertainty over the fossil's assignment.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 421–446; Abstract; text-figures 1–2; systematic account proposing Cambropycnogon as the oldest pycnogonid/chelicerate record
<!-- /evo:text -->
