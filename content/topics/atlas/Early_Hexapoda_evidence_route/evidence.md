---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Early Hexapoda evidence route
    commonName: Early terrestrial hexapod dossiers
    commonNameZh: 早期陆生六足类证据档案
    rank: navigation group
    taxonId: ""
    firstAppearance: 411
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Early_Hexapoda_evidence_route
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: whalley-jarzembowski-1981-rhyniella; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: whalley-jarzembowski-1981-rhyniella
          relation: contextualizes
          pages: "317"
          figure: Published specimen assessment
          quoteLocator: Head capsules; additional specimens; abdomen and furcula
        - referenceId: engel-grimaldi-2004-rhyniognatha
          relation: supports
          pages: 627–630
          figure: Figures 1–2
          quoteLocator: Mandibular interpretation; basal-insect discussion
        - referenceId: haug-haug-2017-rhyniognatha
          relation: contradicts
          pages: e3402
          figure: Figures 1–7
          quoteLocator: Re-documentation; structural interpretation; Conclusions
        - referenceId: lozano-fernandez-2016-terrestrialization
          relation: supports
          pages: "20150133"
          figure: Figures 1–3; Supplementary Table S1
          quoteLocator: Dataset assembly; molecular clocks; ancestral-state reconstruction
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Early_Hexapoda_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Early hexapod and terrestrialization dossier route
      geographicScope: Represented Rhynie fossils and living molecular dataset
      olderMa: 411
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
        - content/events/Rhyniella_body_material_and_springtail_furcula/evidence.md#/records/claims/0
        - content/events/Rhyniognatha_insect–myriapod_dispute/evidence.md#/records/claims/0
        - content/events/Fossil-calibrated_arthropod_terrestrialization_models/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: whalley-jarzembowski-1981-rhyniella
          locator: 291:317
        - referenceId: lozano-fernandez-2016-terrestrialization
          locator: 371:20150133
      reviewStatus: automated-audit-passed
---

# Early Hexapoda evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Early Hexapoda evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Contested confidence preserves the incompatible insect and myriapod interpretations of Rhyniognatha inside this route. The linked dossiers and concrete locators are real, but the navigation grouping and displayed envelope are editorial organization, so no biological ancestry, uncontested insect calibration or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为有争议：该路线明确保留 Rhyniognatha 的昆虫解释与多足类解释之间的冲突；具名档案和具体定位器真实存在，但导航包络不被提升为无争议的昆虫校准、直接祖先或全球端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
早期陆生六足类证据档案导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Browse envelope only; it does not fix the origin of Hexapoda or land colonization.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Route joins two Rhynie specimens with a fossil-calibrated terrestrialization model.
<!-- /evo:text -->
