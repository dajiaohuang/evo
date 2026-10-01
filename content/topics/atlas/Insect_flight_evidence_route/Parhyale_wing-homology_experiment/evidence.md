---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Parhyale wing-homology experiment
    commonName: Crustacean leg-patterning knockouts
    commonNameZh: 甲壳类附肢图式基因敲除实验
    rank: research dataset
    taxonId: ""
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Insect_flight_evidence_route/Parhyale_wing-homology_experiment
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bruce-patel-2020-wing-homology; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: bruce-patel-2020-wing-homology
          relation: supports
          pages: 1703–1712
          figure: Figures 1–6; Extended Data Figures 1–8
          quoteLocator: CRISPR phenotypes; segment alignment; wing-origin model
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Insect_flight_evidence_route/Parhyale_wing-homology_experiment
      rangeKind: global-composite
      taxonomicConcept: Parhyale wing-homology gene-editing dataset
      geographicScope: Living laboratory specimens and comparative insect material
      olderMa: 0
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
      confidence: high
      claimPaths:
        - content/events/Parhyale_leg-patterning_knockouts_and_wing_homology/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: bruce-patel-2020-wing-homology
          locator: 1703–1712; Figures 1–6; Extended Data
      reviewStatus: automated-audit-passed
---

# Parhyale wing-homology experiment

## claims / statement

<!-- evo:text /records/claims/0/statement -->
This entry represents modern Parhyale hawaiensis leg-patterning knockout experiments compared with published insect phenotypes. Its 0 Ma marker denotes living experimental material, not a fossil occurrence, the age of insect wing origins or the species's complete temporal range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Crustacean leg-patterning knockouts: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
甲壳类附肢图式基因敲除实验：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
本条目记录现生 Parhyale hawaiensis 的附肢图式基因敲除实验，以及与已发表昆虫表型的比较。0 Ma 标记表示现生实验材料，不是化石产出、昆虫翅起源年代或该物种的完整生存延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Present-day experimental marker, not a fossil occurrence or historical event date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
CRISPR knockouts and comparative expression map proximal leg and body-wall structures.
<!-- /evo:text -->
