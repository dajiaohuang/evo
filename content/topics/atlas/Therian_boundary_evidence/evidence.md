---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Therian boundary evidence
    commonName: Early therian evidence routes
    commonNameZh: 早期兽亚纲证据导航
    rank: navigation group
    taxonId: ""
    firstAppearance: 161
    lastAppearance: 124.1
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Therian_boundary_evidence
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: luo-2011-juramaia + ji-2002-eomaia + bi-2018-ambolestes concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: luo-2011-juramaia
          pages: 442–445
          figure: Figures 1–3
          quoteLocator: Holotype; formation attribution; phylogenetic analysis
        - relation: supports
          referenceId: ji-2002-eomaia
          pages: 816–822
          figure: Figures 1–6
          quoteLocator: Holotype and phylogenetic analysis
        - relation: supports
          referenceId: bi-2018-ambolestes
          pages: 390–395
          figure: Figures 1–5
          quoteLocator: Holotype and therian topology analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Therian_boundary_evidence
      rangeKind: global-composite
      taxonomicConcept: Early therian evidence navigation interval
      geographicScope: Tiaojishan and Yixian formations, northeastern China
      olderMa: 161
      youngerMa: 124.1
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
        - content/events/Juramaia_specimen_and_conditional_Jurassic_signal/evidence.md#/records/claims/0
        - content/events/Eomaia_skeleton,_topology_and_locomotor_inference/evidence.md#/records/claims/0
        - content/events/Ambolestes_and_a_revised_therian_boundary/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: luo-2011-juramaia
          locator: 442–445; Figures 1–3
        - referenceId: ji-2002-eomaia
          locator: 816–822; Figures 1–6
        - referenceId: bi-2018-ambolestes
          locator: 390–395; Figures 1–5
      reviewStatus: automated-audit-passed
---

# Therian boundary evidence

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Therian boundary evidence is an atlas navigation route spanning separately sampled Juramaia, Eomaia and Ambolestes records from approximately 161–124.1 Ma; it is not a taxonomic clade, continuous lineage or ancestor sequence, and its older endpoint inherits the disputed Juramaia provenance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Three primary studies support separate specimens and analyses. The route construction and Juramaia caveat are explicit, so no clade or lineage claim is made.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
三项一手研究支持彼此独立的标本与分析；路线构造和 Juramaia 限制均明确，因此不提出支系或谱系主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
“兽亚纲边界证据”是图谱导航路线，跨越约 1.61 亿—1.241 亿年前分别取样的 Juramaia、Eomaia 和 Ambolestes 记录；它不是分类支系、连续谱系或祖先序列，且较老端点继承 Juramaia 产地争议。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint inherits disputed Juramaia provenance and age; the group is a navigation route, not a taxonomic clade or lineage.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The browse interval spans three separately sampled fossils and does not arrange them into an ancestor sequence.
<!-- /evo:text -->
