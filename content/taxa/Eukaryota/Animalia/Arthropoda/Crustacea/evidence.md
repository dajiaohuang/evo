---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Crustacea
    commonName: Crustaceans
    commonNameZh: 甲壳类
    rank: subphylum
    taxonId: txn:82629
    firstAppearance: 510
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea
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
      reviewedAgainstReferenceVersion: Zhang et al. 2007 DOI 10.1038/nature06138 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598
          figure: Figures 1–3
          quoteLocator: Yu'anshan Formation and late Atdabanian correlation; topotype growth series; reconstruction and phylogenetic assignment
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea
      rangeKind: global-composite
      taxonomicConcept: Crustacea under the sampled Yicaris eucrustacean hypothesis
      geographicScope: Lower Cambrian Yu'anshan Formation sample to living crustaceans
      olderMa: 520
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 10
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: zhang-2007-yicaris
          locator: pp. 595–598; Figures 1–3; Yu'anshan and late Atdabanian context
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Crustacea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Crustacea root display uses a rounded 520–0 Ma sampled envelope from Lower Cambrian Yicaris material to living crustaceans; Yicaris crown-eucrustacean placement is a character interpretation and the number is not a crustacean origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Several growth stages directly preserve the relevant limb anatomy in a biostratigraphically constrained Lower Cambrian horizon, but eucrustacean placement and conversion of that horizon to one rounded number remain interpretive. The range does not imply continuous sampling.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多个生长阶段在具有生物地层约束的下寒武统层位保存关键附肢结构，但真甲壳类位置及单一取整数值仍属解释；该范围不暗示连续采样。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
甲壳动物根节点采用取整后的 5.20 亿年前至今采样包络，从下寒武统 Yicaris 材料延伸到现生甲壳动物；Yicaris 的冠群真甲壳类位置属于性状解释，该数值不是甲壳动物起源时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint rounds a Lower Cambrian biostratigraphic context; eucrustacean placement is a character interpretation, not an origin date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Phosphatized Yicaris growth stages preserve limb anatomy used to place the taxon within Eucrustacea in the sampled analysis.
<!-- /evo:text -->
