---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ymboirana acrux
    commonName: Oligocene aquatic caecilian
    commonNameZh: 渐新世水生蚓螈
    rank: species
    taxonId: ""
    firstAppearance: 27.82
    lastAppearance: 23.03
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphibian_fossil_evidence_route/Ymboirana_acrux
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
      reviewedAgainstReferenceVersion: santos-2024-ymboirana; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: santos-2024-ymboirana
          pages: 3–20
          figure: Figures 2–9 and 12–15
          quoteLocator: Systematic palaeontology; Affinities; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Amphibian_fossil_evidence_route/Ymboirana_acrux
      rangeKind: global-composite
      taxonomicConcept: Ymboirana acrux holotype occurrence
      geographicScope: Tremembé Formation, Taubaté Basin, Brazil
      olderMa: 27.82
      youngerMa: 23.03
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
        - content/events/Oligocene_Ymboirana_crown-caecilian_candidate/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: santos-2024-ymboirana
          locator: pp. 3–20; Figs. 2–9, 12–15; Affinities and Discussion
      reviewStatus: automated-audit-passed
---

# Ymboirana acrux

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ymboirana acrux is documented by holotype DGM 1462-R from the Oligocene Tremembe Formation in Brazil's Taubate Basin. The partially preserved skeleton records this fossil occurrence, not the species's complete distribution, exact origin time or a global first appearance of aquatic caecilians.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Oligocene aquatic caecilian: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
渐新世水生蚓螈：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Ymboirana acrux 的正模 DGM 1462-R 来自巴西 Taubate 盆地渐新世 Tremembe 组。这具部分保存的骨架记录了该地点的化石产出，不代表物种完整分布、精确起源时间或水生蚓螈的全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Oligocene formation envelope; formal phylogenetic testing and unambiguous family synapomorphies remain unavailable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Holotype DGM 1462-R is the single sampled aquatic caecilian specimen; Typhlonectidae assignment remains provisional.
<!-- /evo:text -->
