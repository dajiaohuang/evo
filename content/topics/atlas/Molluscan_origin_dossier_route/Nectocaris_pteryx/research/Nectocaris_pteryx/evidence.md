---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:297012
    scientificName: Nectocaris pteryx
    commonName: Soft-bodied Nectocaris sample
    commonNameZh: 软躯体游盾虫样本
    rank: species
    parentName: Molluscan origin dossier route
    extinct: true
    geography:
      - Burgess Shale
      - British Columbia, Canada
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: contested
    referenceIds:
      - smith-caron-2010-nectocaris
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-caron-2010-nectocaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-caron-2010-nectocaris
          relation: supports
          pages: 469–472; Figures 1–4; Supplementary Information
    - subject:
        kind: taxon
        path: content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-caron-2010-nectocaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-caron-2010-nectocaris
          relation: supports
          pages: 469–472; Figures 1–4; Supplementary Information
    - subject:
        kind: taxon
        path: content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-caron-2010-nectocaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-caron-2010-nectocaris
          relation: supports
          pages: 469–472; Figures 1–4; Supplementary Information
    - subject:
        kind: taxon
        path: content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-caron-2010-nectocaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-caron-2010-nectocaris
          relation: supports
          pages: 469–472; Figures 1–4; Supplementary Information
    - subject:
        kind: taxon
        path: content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-caron-2010-nectocaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-caron-2010-nectocaris
          relation: supports
          pages: 469–472; Figures 1–4; Supplementary Information
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
  ranges:
    - entityPath: content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
      rangeKind: global-composite
      taxonomicConcept: Nectocaris pteryx Burgess Shale sample
      geographicScope: Burgess Shale, British Columbia, Canada
      olderMa: 508
      youngerMa: 505
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
      confidence: low
      claimPaths:
        - content/events/Nectocaris_soft-body_cephalopod_test/evidence.md#/records/claims/0
        - content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: smith-caron-2010-nectocaris
          locator: 469–472; Figures 1–4; new material and reconstruction
      reviewStatus: automated-audit-passed
---

# Nectocaris pteryx

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Nectocaris pteryx was interpreted as a soft-bodied cephalopod in the cited study, but absent diagnostic hard parts and feeding structures keep that placement contested.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Nectocaris pteryx, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile is restricted to the Burgess Shale sample and does not infer the full distribution of Nectocaris.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Nectocaris pteryx, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Swimming and predation are inferred from fins, eyes, tentacles and a funnel-like structure; performance, prey and behaviour are not directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Nectocaris pteryx, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Ninety specimens preserve paired eyes, two tentacles, lateral fins and a ventral funnel-like structure, while shell, siphuncle, beak and radula evidence is absent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Nectocaris pteryx, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 508–505 Ma envelope is a bounded Burgess Shale context, not a global species duration or cephalopod crown age.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field is bounded to Nectocaris pteryx, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
软躯体游盾虫样本的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
软躯体游盾虫样本的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
软躯体游盾虫样本的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
软躯体游盾虫样本的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
软躯体游盾虫样本的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引研究将 Nectocaris pteryx 解释为软躯体头足类，但缺少诊断性硬体部分和摄食结构，使这一分类位置仍有争议。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案限于布尔吉斯页岩样本，不据此推断 Nectocaris 的完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
游泳和捕食是根据鳍、眼、触手及漏斗状结构推断的；运动性能、猎物和行为并未被直接观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
90 件标本保存了成对的眼、两条触手、侧鳍和腹侧漏斗状结构，但缺少壳、体管、喙和齿舌的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
508–505 Ma 包络是受限的布尔吉斯页岩背景，并非该物种的全球延续时长或头足类冠群年代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 508–505 Ma envelope is a bounded Burgess Shale context, not a global species duration or cephalopod crown age.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Ninety newly prepared specimens reveal a funnel, fins, eyes and two tentacles but no diagnostic hard-part series.
<!-- /evo:text -->
