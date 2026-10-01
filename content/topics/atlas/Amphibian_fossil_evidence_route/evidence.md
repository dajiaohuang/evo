---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Amphibian fossil evidence route
    commonName: Origin-boundary specimen dossiers
    commonNameZh: 两栖类起源边界标本档案
    rank: navigation group
    taxonId: ""
    firstAppearance: 283.3
    lastAppearance: 23.03
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphibian_fossil_evidence_route
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
      reviewedAgainstReferenceVersion: anderson-2008-gerobatrachus; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: anderson-2008-gerobatrachus
          pages: 515–518
          figure: Figures 1–4
          quoteLocator: Systematic palaeontology; phylogenetic analysis
        - relation: supports
          referenceId: ascarrunz-2016-triadobatrachus
          pages: 204–228
          figure: Figures 1–11
          quoteLocator: Material and methods; anatomical description; calibration review
        - relation: supports
          referenceId: kligman-2023-funcusvermis
          pages: 102–107
          figure: Figure 1; Extended Data Figures 2–4
          quoteLocator: Systematic palaeontology; geological context; phylogenetic results
        - relation: supports
          referenceId: gao-2012-beiyanerpeton
          pages: 5767–5772
          figure: Figures 1–4
          quoteLocator: Geological setting; description; phylogenetic analysis
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
    - entityPath: content/topics/atlas/Amphibian_fossil_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Amphibian fossil evidence route navigation envelope
      geographicScope: Represented specimen localities only
      olderMa: 283.3
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
        - content/events/Kungurian_Gerobatrachus_stem_batrachian/evidence.md#/records/claims/0
        - content/events/Early_Triassic_Triadobatrachus_μCT/evidence.md#/records/claims/0
        - content/events/Norian_Funcusvermis_stem_caecilian/evidence.md#/records/claims/0
        - content/events/Oxfordian_Beiyanerpeton_salamandroid/evidence.md#/records/claims/0
        - content/events/Oligocene_Ymboirana_crown-caecilian_candidate/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: anderson-2008-gerobatrachus
          locator: pp. 515–518; Figs. 1–4
        - referenceId: ascarrunz-2016-triadobatrachus
          locator: pp. 201–234; Figs. 1–11
        - referenceId: kligman-2023-funcusvermis
          locator: pp. 102–107; Fig. 1
        - referenceId: gao-2012-beiyanerpeton
          locator: pp. 5767–5772; Figs. 1–4
        - referenceId: santos-2024-ymboirana
          locator: pp. 3–20; Figs. 2–15
      reviewStatus: automated-audit-passed
---

# Amphibian fossil evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Amphibian fossil evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Origin-boundary specimen dossiers: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两栖类起源边界标本档案：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
两栖类起源边界标本档案导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope across heterogeneous samples; not a lineage duration, global FAD or ancestor sequence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The browse interval spans the represented specimen dossiers while preserving each occurrence, topology and interpretation as a separate evidence record.
<!-- /evo:text -->
