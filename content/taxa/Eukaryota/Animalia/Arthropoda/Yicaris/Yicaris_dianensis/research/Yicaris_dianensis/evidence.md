---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:473019
    scientificName: Yicaris dianensis
    commonName: Yicaris developmental series
    commonNameZh: 滇虫甲壳幼体发育系列
    rank: species
    parentName: Pancrustacea evidence route
    extinct: true
    geography:
      - Chiungchussu Formation
      - Yunnan, China
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
    confidence: medium
    referenceIds:
      - zhang-2007-yicaris
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: zhang-2007-yicaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598; Figures 1–3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis
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
      reviewedAgainstReferenceVersion: zhang-2007-yicaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598; Figures 1–3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis
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
      reviewedAgainstReferenceVersion: zhang-2007-yicaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598; Figures 1–3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis
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
      reviewedAgainstReferenceVersion: zhang-2007-yicaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598; Figures 1–3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis
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
      reviewedAgainstReferenceVersion: zhang-2007-yicaris primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598; Figures 1–3
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis
      rangeKind: global-composite
      taxonomicConcept: Yicaris dianensis Chiungchussu Formation sample
      geographicScope: Yu'anshan Member, Chiungchussu Formation, Yunnan, China
      olderMa: 521
      youngerMa: 514
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
        - content/events/Yicaris_phosphatized_growth_series/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Arthropoda/Yicaris/Yicaris_dianensis/research/Yicaris_dianensis/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: zhang-2007-yicaris
          locator: 595–598; Figures 1–3
      reviewStatus: automated-audit-passed
---

# Yicaris dianensis

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Yicaris dianensis was interpreted near crown Eucrustacea from sampled appendage characters; that placement is not direct ancestry or a crown-origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Yicaris dianensis, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile is limited to the Chiungchussu Formation sample in Yunnan and does not establish a global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Yicaris dianensis, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The developmental material does not directly preserve diet, habitat preference or locomotor performance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Yicaris dianensis, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Phosphatized individuals from multiple growth stages preserve leaf-shaped exites and eucrustacean-like limb organization.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Yicaris dianensis, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 521–514 Ma interval is a broad formation context for the developmental sample, not a global species duration or eucrustacean FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field is bounded to Yicaris dianensis, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
滇虫甲壳幼体发育系列的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
滇虫甲壳幼体发育系列的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
滇虫甲壳幼体发育系列的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
滇虫甲壳幼体发育系列的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
滇虫甲壳幼体发育系列的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
根据采样附肢性状，Yicaris dianensis 被解释为接近冠群真甲壳类；这一位置不表示直系祖先关系，也不能确定冠群起源年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案限于云南筇竹寺组的样本，不据此确定全球延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
这些发育阶段材料并未直接保存食性、生境偏好或运动性能。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
多个生长阶段的磷酸盐化个体保存了叶状外叶及类似真甲壳类的肢体组织方式。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
521–514 Ma 区间是发育样本的宽泛地层组背景，并非该物种的全球延续时长或真甲壳类首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 521–514 Ma interval is a broad formation context for the developmental sample, not a global species duration or eucrustacean FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Topotype growth stages are recorded from the Lower Cambrian Orsten-type deposit.
<!-- /evo:text -->
