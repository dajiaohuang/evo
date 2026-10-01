---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:55352
    scientificName: Monocotyledoneae
    commonName: Monocots
    commonNameZh: 单子叶植物
    rank: class
    parentName: Angiospermae
    extinct: false
    geography:
      - Global living distribution
      - Crato Formation fossil sample
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
      - coiffard-2019-cratolirion
      - magallon-2015-angiosperms
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae
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
      reviewedAgainstReferenceVersion: coiffard-2019-cratolirion primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiffard-2019-cratolirion
          relation: supports
          pages: 691–696; Figures 1–3; fossil description and phylogenetic analysis
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae
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
      reviewedAgainstReferenceVersion: coiffard-2019-cratolirion primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiffard-2019-cratolirion
          relation: supports
          pages: 691–696; Figures 1–3; fossil description and phylogenetic analysis
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae
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
      reviewedAgainstReferenceVersion: coiffard-2019-cratolirion primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiffard-2019-cratolirion
          relation: supports
          pages: 691–696; Figures 1–3; fossil description and phylogenetic analysis
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae
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
      reviewedAgainstReferenceVersion: coiffard-2019-cratolirion primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiffard-2019-cratolirion
          relation: supports
          pages: 691–696; Figures 1–3; fossil description and phylogenetic analysis
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae
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
      reviewedAgainstReferenceVersion: coiffard-2019-cratolirion primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiffard-2019-cratolirion
          relation: supports
          pages: 691–696; Figures 1–3; fossil description and phylogenetic analysis
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
    - entityPath: content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae
      rangeKind: global-composite
      taxonomicConcept: Monocotyledones
      geographicScope: Global or represented navigation composite
      olderMa: 115
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
        - content/topics/atlas/Angiospermae/Monocotyledones/research/Monocotyledoneae/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: coiffard-2019-cratolirion
          locator: 691–696; Figures 1–3; fossil description and phylogenetic analysis
        - referenceId: open-tree
          locator: https://opentreeoflife.github.io/use
        - referenceId: pbdb-api-2016
          locator: doi:10.1017/pab.2015.39
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Monocotyledoneae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Cratolirion bognerianum was recovered as a crown monocot without an uncontested living-family assignment; it is not presented as a direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Monocotyledoneae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The highlighted fossil comes from the Crato Formation of Brazil and does not establish a monocot origin centre or complete Early Cretaceous range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Monocotyledoneae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The fossil’s anatomy and depositional context permit a terrestrial-herb interpretation, but exact habitat and clade-wide ancestral ecology remain unresolved.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Monocotyledoneae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Cratolirion preserves roots, stems, leaves and reproductive organs, supplying a rare whole-plant anatomical character set.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Monocotyledoneae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The profile uses the approximately 115 Ma Crato occurrence as a crown-monocot fossil anchor, not the origin of monocots or a global class FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field is bounded to Monocotyledoneae, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
单子叶植物的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
单子叶植物的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
单子叶植物的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
单子叶植物的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
单子叶植物的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
分析将 Cratolirion bognerianum 恢复为冠群单子叶植物，但其现生科归属尚无无争议结论；本档案不将它视为直系祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
所介绍的化石来自巴西 Crato 组，不能据此确定单子叶植物的起源中心或早白垩世完整延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
该化石的解剖结构和沉积背景允许将其解释为陆生草本植物，但确切生境及整个演化支的祖先生态仍未确定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Cratolirion 保存了根、茎、叶及生殖器官，提供了一组罕见的全株解剖性状。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
本档案将约 115 Ma 的 Crato 化石记录作为冠群单子叶植物的化石锚点，而非单子叶植物的起源或该纲的全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The profile uses the approximately 115 Ma Crato occurrence as a crown-monocot fossil anchor, not the origin of monocots or a global class FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Cratolirion bognerianum provides an approximately 115 Ma crown-monocot occurrence with root-to-reproductive anatomy.
<!-- /evo:text -->
