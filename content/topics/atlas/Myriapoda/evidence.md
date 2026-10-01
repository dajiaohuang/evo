---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Myriapoda
    commonName: Myriapods
    commonNameZh: 多足类
    rank: subphylum
    taxonId: ""
    firstAppearance: 443
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Myriapoda
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
      reviewedAgainstReferenceVersion: Briggs et al. 2026 DOI 10.1098/rspb.2026.0131 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: briggs-2026-waukartus
          relation: supports
          pages: 293:20260131
          figure: Figures 1–6; supplementary morphology matrix
          quoteLocator: Waukesha horizon; systematic palaeontology; preserved limbs, muscles and endoskeleton; parsimony and Bayesian placements
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Myriapoda
      rangeKind: global-composite
      taxonomicConcept: Total-group Myriapoda under the sampled Waukartus stem placement
      geographicScope: Waukesha Lagerstätte sample to living myriapods
      olderMa: 437
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 3
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/topics/atlas/Myriapoda/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: briggs-2026-waukartus
          locator: article 20260131; Figures 1–6 and supplementary morphology matrix
      reviewStatus: automated-audit-passed
---

# Myriapoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Myriapoda root display replaces the legacy 443 Ma value with a 437–0 Ma total-group navigation envelope anchored by Llandoverian Waukartus and living myriapods; Waukartus is recovered on the stem and is not a crown first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Thirty-five specimens preserve diagnostic anatomy in the biostratigraphically constrained Waukesha Lagerstätte, while the stem placement depends on morphology matrices. The rounded 437 Ma anchor records that sample and does not override older model estimates or Cambrian stem candidates.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
三十五件标本在有生物地层约束的 Waukesha 化石库中保存鉴别解剖，但干群位置依赖形态矩阵；4.37 亿年前锚点记录该样本，不覆盖更老的模型估计或寒武纪干群候选。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
多足亚门根节点以 4.37 亿年前至今的总群导航包络替代旧 4.43 亿年前数值，锚点是兰多维列世 Waukartus 和现生多足类；Waukartus 被恢复在干群上，不是冠群首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The endpoint rounds the Llandoverian Waukesha sample; Waukartus is a stem placement and does not set the crown first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Thirty-five Waukartus specimens preserve uniramous limbs, muscles and endoskeleton and are recovered immediately stemward of crown Myriapoda in sampled analyses.
<!-- /evo:text -->
