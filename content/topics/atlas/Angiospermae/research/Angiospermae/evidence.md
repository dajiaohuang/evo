---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:54885
    scientificName: Angiospermae
    commonName: Flowering plants
    commonNameZh: 被子植物
    rank: clade
    parentName: Seed plants
    extinct: false
    geography:
      - Global living distribution
      - Global fossil-calibration sample
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
      - wu-2026-angiosperm-timescale
      - magallon-2015-angiosperms
      - gomez-2015-montsechia
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/research/Angiospermae
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
      reviewedAgainstReferenceVersion: wu-2026-angiosperm-timescale and gomez-2015-montsechia primary-study locators checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: wu-2026-angiosperm-timescale
          relation: supports
          pages: 1242–1251; Figures 1–5; age-estimation analyses
        - referenceId: gomez-2015-montsechia
          relation: supports
          pages: 10985–10988
          figure: Figures 1–3
          quoteLocator: More than 1,000 Montsechia specimens; leafy axes, closed single-seeded fruits and submerged freshwater habit
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/research/Angiospermae
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
      reviewedAgainstReferenceVersion: wu-2026-angiosperm-timescale primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: wu-2026-angiosperm-timescale
          relation: supports
          pages: 1242–1251; Figures 1–5; age-estimation analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/research/Angiospermae
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
      reviewedAgainstReferenceVersion: gomez-2015-montsechia primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: gomez-2015-montsechia
          relation: supports
          pages: 10985–10988
          figure: Figures 1–3
          quoteLocator: More than 1,000 Montsechia specimens; morphology, cuticle, stomata and freshwater depositional context
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/research/Angiospermae
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
      reviewedAgainstReferenceVersion: gomez-2015-montsechia primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: gomez-2015-montsechia
          relation: supports
          pages: 10985–10988
          figure: Figures 1–3
          quoteLocator: More than 1,000 Montsechia specimens; morphology, cuticle, stomata and freshwater depositional context
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/research/Angiospermae
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
      reviewedAgainstReferenceVersion: wu-2026-angiosperm-timescale primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: wu-2026-angiosperm-timescale
          relation: supports
          pages: 1242–1251; Figures 1–5; age-estimation analyses
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
    - entityPath: content/topics/atlas/Angiospermae/research/Angiospermae
      rangeKind: global-composite
      taxonomicConcept: Angiospermae
      geographicScope: Global or represented navigation composite
      olderMa: 135
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
      confidence: medium
      claimPaths:
        - content/topics/atlas/Angiospermae/research/Angiospermae/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: wu-2026-angiosperm-timescale
          locator: 1242–1251; Figures 1–5; age-estimation analyses
        - referenceId: open-tree
          locator: https://opentreeoflife.github.io/use
        - referenceId: pbdb-api-2016
          locator: doi:10.1017/pab.2015.39
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Angiospermae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Angiospermae is treated as the flowering-plant clade; fossil placements and calibration densities remain analytical inputs rather than direct ancestor assignments.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Angiospermae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The calibration dataset and living sample are geographically broad but do not identify one centre of origin or complete Jurassic–Cretaceous distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Angiospermae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Montsechia supports submerged freshwater ecology for that fossil only; the profile does not project aquatic habit onto the angiosperm ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Angiospermae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Flowers, enclosed ovules and fruits diagnose angiosperm context, while the profiled Montsechia material preserves leafy axes and closed single-seeded fruits.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Angiospermae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 135–0 Ma atlas range is a rounded navigation envelope; latest-Jurassic crown estimates are calibration-dependent models, not direct fossil FADs.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field is bounded to Angiospermae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
被子植物的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
被子植物的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
被子植物的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
被子植物的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
被子植物的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
被子植物在此作为开花植物演化支处理；化石位置和校准概率密度仍是分析输入，并非直系祖先归属判定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
校准数据集和现生样本覆盖较广的地理范围，但不能确定单一起源中心或完整的侏罗纪—白垩纪分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Montsechia 的证据支持该化石植物具有淡水沉水生活方式；本档案不将水生习性推及被子植物祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
花、包被的胚珠和果实是识别被子植物的特征；本档案中的 Montsechia 材料保存了带叶的轴和封闭的单种子果实。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
图集的 135–0 Ma 范围是取整后的导航包络；侏罗纪最晚期的冠群年代估计依赖校准模型，并非直接观察到的化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 135–0 Ma atlas range is a rounded navigation envelope; latest-Jurassic crown estimates are calibration-dependent models, not direct fossil FADs.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
First and last appearances are rounded display ranges assembled for the atlas and remain sensitive to sampling and taxonomy.
<!-- /evo:text -->
